// Pure transfer-engine logic: part math, multipart ETags, backoff, names, filters,
// bandwidth limiting, JSON round trips and the on-disk job store.

#include "core/BandwidthLimiter.h"
#include "core/OperationContext.h"
#include "transfer/TransferMath.h"
#include "transfer/TransferStore.h"

#include <QCryptographicHash>
#include <QElapsedTimer>
#include <QFile>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using namespace s3fm::transfer;

class TestTransferMath : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void partSizes()
    {
        constexpr qint64 MiB = 1024 * 1024;
        QCOMPARE(partSizeFor(100 * MiB, 16 * MiB), 16 * MiB);
        QCOMPARE(partSizeFor(100 * MiB, 1 * MiB), 5 * MiB);     // S3 minimum
        QCOMPARE(partSizeFor(100 * MiB, 7 * MiB + 1), 8 * MiB); // rounded up to MiB
        // 1 TiB in at most 10,000 parts.
        const qint64 tib = 1024LL * 1024 * MiB;
        const qint64 part = partSizeFor(tib, 16 * MiB);
        QVERIFY(partCount(tib, part) <= kMaxParts);
        QCOMPARE(part % MiB, 0);
        // 5 TiB (largest object) still fits.
        QVERIFY(partCount(5 * tib, partSizeFor(5 * tib, 16 * MiB)) <= kMaxParts);

        QCOMPARE(partCount(0, 5 * MiB), 1);
        QCOMPARE(partCount(10 * MiB, 5 * MiB), 2);
        QCOMPARE(partCount(10 * MiB + 1, 5 * MiB), 3);
    }

    void multipartEtags()
    {
        const QByteArray a(5 * 1024 * 1024, 'a');
        const QByteArray b("tail");
        const QByteArray ma = QCryptographicHash::hash(a, QCryptographicHash::Md5);
        const QByteArray mb = QCryptographicHash::hash(b, QCryptographicHash::Md5);
        const QString expected =
            QString::fromLatin1(QCryptographicHash::hash(ma + mb, QCryptographicHash::Md5).toHex()) +
            QStringLiteral("-2");
        QCOMPARE(multipartEtag({ma, mb}), expected);

        QVERIFY(isMd5Etag(QStringLiteral("d41d8cd98f00b204e9800998ecf8427e")));
        QVERIFY(isMd5Etag(expected));
        QVERIFY(!isMd5Etag(QStringLiteral("abc")));
        QVERIFY(!isMd5Etag(QStringLiteral("d41d8cd98f00b204e9800998ecf8427e-")));
        QVERIFY(!isMd5Etag(QString()));
    }

    void backoff()
    {
        QCOMPARE(retryDelayMs(1, 0.0), 0);
        QCOMPARE(retryDelayMs(1, 0.999), 999);
        QCOMPARE(retryDelayMs(3, 0.5), 2000);     // 0.5 * 4000
        QCOMPARE(retryDelayMs(20, 0.5), 15000);   // capped at 30 s
        QCOMPARE(retryDelayMs(2, 1.5, 100), 200); // random clamped to 1
        QVERIFY(retryDelayMs(10, 0.99, 1000, 5000) <= 5000);
    }

    void numberedNames()
    {
        QCOMPARE(numberedName(QStringLiteral("photo.jpg"), 2), QStringLiteral("photo (2).jpg"));
        QCOMPARE(numberedName(QStringLiteral("README"), 3), QStringLiteral("README (3)"));
        QCOMPARE(numberedName(QStringLiteral(".bashrc"), 2), QStringLiteral(".bashrc (2)"));
        QCOMPARE(numberedName(QStringLiteral("a.tar.gz"), 2), QStringLiteral("a.tar (2).gz"));
    }

    void pathFilter()
    {
        QCOMPARE(PathFilter::splitPatterns(QStringLiteral(" *.jpg; *.png ;;\nbuild/*")),
                 QStringList({QStringLiteral("*.jpg"), QStringLiteral("*.png"), QStringLiteral("build/*")}));
        PathFilter none;
        QVERIFY(none.isEmpty());
        QVERIFY(none.acceptsFile(QStringLiteral("x/y.txt")));

        PathFilter f({QStringLiteral("*.jpg"), QStringLiteral("docs/*.txt")},
                     {QStringLiteral("tmp"), QStringLiteral("*.bak.jpg")});
        QVERIFY(f.acceptsFile(QStringLiteral("a.jpg")));
        QVERIFY(f.acceptsFile(QStringLiteral("deep/down/a.jpg"))); // name pattern matches at any depth
        QVERIFY(!f.acceptsFile(QStringLiteral("a.png")));
        QVERIFY(f.acceptsFile(QStringLiteral("docs/readme.txt"))); // path pattern
        QVERIFY(f.acceptsFile(QStringLiteral("docs/sub/readme.txt")));
        QVERIFY(!f.acceptsFile(QStringLiteral("other/readme.txt")));
        QVERIFY(!f.acceptsFile(QStringLiteral("x.bak.jpg")));
        QVERIFY(!f.acceptsDirectory(QStringLiteral("a/tmp")));
        QVERIFY(f.acceptsDirectory(QStringLiteral("a/tmpfiles")));
        QVERIFY(f.hasInclude());
    }

    void bandwidthLimiter()
    {
        BandwidthLimiter unlimited;
        QElapsedTimer t;
        t.start();
        unlimited.consume(100 * 1024 * 1024);
        QVERIFY(t.elapsed() < 50);

        BandwidthLimiter limiter;
        limiter.setRate(1000 * 1000); // 1 MB/s; the first second is a free burst
        t.restart();
        for (int i = 0; i < 15; ++i)
            limiter.consume(100 * 1000);
        const qint64 ms = t.elapsed();
        QVERIFY2(ms >= 350 && ms < 1500, qPrintable(QString::number(ms))); // ~500 ms beyond the burst

        OperationContext ctx;
        ctx.cancel();
        t.restart();
        limiter.consume(10 * 1000 * 1000, &ctx); // would take 10 s
        QVERIFY(t.elapsed() < 200);
    }

    void requestJsonRoundTrip()
    {
        TransferRequest r;
        r.kind = TransferKind::Move;
        Entry e;
        e.name = QStringLiteral("a b#?.txt");
        e.location =
            Location::s3(QStringLiteral("conn"), QStringLiteral("bucket"), QStringLiteral("dir//a b#?.txt"));
        e.size = 42;
        e.modified = QDateTime::fromMSecsSinceEpoch(1700000000123, QTimeZone::UTC);
        e.etag = QStringLiteral("abc");
        r.sources = {e};
        r.destination = Location::local(QStringLiteral("/tmp/x y"));
        r.destinationIsDirectory = true;
        r.options.conflict = ConflictPolicy::OverwriteIfSizeDiffers;
        r.options.include = {QStringLiteral("*.txt")};
        r.options.verify = false;
        r.options.followSymlinks = false;

        const TransferRequest back = TransferRequest::fromJson(r.toJson());
        QCOMPARE(back.kind, TransferKind::Move);
        QCOMPARE(back.sources.size(), 1);
        QCOMPARE(back.sources.first().location, e.location);
        QCOMPARE(back.sources.first().size, 42);
        QCOMPARE(back.sources.first().modified, e.modified);
        QCOMPARE(back.sources.first().etag, QStringLiteral("abc"));
        QCOMPARE(back.destination, r.destination);
        QVERIFY(back.destinationIsDirectory);
        QCOMPARE(back.options.conflict, ConflictPolicy::OverwriteIfSizeDiffers);
        QCOMPARE(back.options.include, r.options.include);
        QVERIFY(!back.options.verify);
        QVERIFY(!back.options.followSymlinks);
    }

    void storeRoundTrip()
    {
        QTemporaryDir dir;
        TransferStore store(dir.path());
        TransferStore::JobRecord rec;
        rec.id = QStringLiteral("20261120-000000-000-abc");
        rec.request.kind = TransferKind::Copy;
        rec.request.destination =
            Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("k/"));
        rec.state = JobState::Running;
        rec.stickyConflict = ConflictPolicy::Rename;
        rec.jobFailures = {
            {QStringLiteral("x"), Error::make(ErrorCode::AccessDenied, QStringLiteral("nope"))}};
        store.saveJob(rec);

        QList<TransferTask> tasks;
        for (int i = 0; i < 4; ++i) {
            TransferTask t;
            t.source.name = QStringLiteral("f%1").arg(i);
            t.source.location = Location::local(QStringLiteral("/src/f%1").arg(i));
            t.source.size = i * 10;
            t.target = Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("k/f%1").arg(i));
            t.top = 0;
            t.keepSource = i == 3;
            tasks.push_back(t);
        }
        store.saveTasks(rec.id, tasks);
        store.appendTaskState(rec.id, 0, TaskState::Done);
        store.appendTaskState(rec.id, 1, TaskState::Failed,
                              Error::make(ErrorCode::Network, QStringLiteral("down")));
        store.appendTaskState(rec.id, 1, TaskState::Pending); // retried
        store.appendTaskState(rec.id, 2, TaskState::Skipped);
        TransferCheckpoint cp;
        cp.uploadId = QStringLiteral("upload-1");
        cp.partSize = 5 << 20;
        cp.sourceFingerprint = QStringLiteral("file:1:2");
        store.saveCheckpoint(rec.id, 3, cp);
        // A torn last line (crash while appending) is ignored.
        QFile log(store.jobDir(rec.id) + QStringLiteral("/progress.log"));
        QVERIFY(log.open(QIODevice::Append));
        log.write("3");
        log.close();

        const QList<TransferStore::LoadedJob> loaded = store.loadAll();
        QCOMPARE(loaded.size(), 1);
        const auto& job = loaded.first();
        QCOMPARE(job.record.id, rec.id);
        QCOMPARE(job.record.state, JobState::Running);
        QCOMPARE(job.record.stickyConflict, ConflictPolicy::Rename);
        QCOMPARE(job.record.jobFailures.size(), 1);
        QCOMPARE(job.record.jobFailures.first().error.code, ErrorCode::AccessDenied);
        QVERIFY(job.expanded);
        QCOMPARE(job.tasks.size(), 4);
        QCOMPARE(job.tasks[0].state, TaskState::Done);
        QCOMPARE(job.tasks[1].state, TaskState::Pending);
        QCOMPARE(job.tasks[2].state, TaskState::Skipped);
        QCOMPARE(job.tasks[3].state, TaskState::Pending);
        QCOMPARE(job.tasks[3].checkpoint.uploadId, QStringLiteral("upload-1"));
        QCOMPARE(job.tasks[3].checkpoint.partSize, qint64(5 << 20));
        QVERIFY(job.tasks[3].keepSource);
        QCOMPARE(job.tasks[2].target, tasks[2].target);
        QCOMPARE(job.tasks[2].source.size, 20);

        store.removeCheckpoint(rec.id, 3);
        QVERIFY(store.loadAll().first().tasks[3].checkpoint.isEmpty());
        store.removeJob(rec.id);
        QVERIFY(store.loadAll().isEmpty());
    }
};

QTEST_GUILESS_MAIN(TestTransferMath)
#include "tst_transfermath.moc"
