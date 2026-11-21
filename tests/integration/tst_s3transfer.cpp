// Transfer engine against a real S3 endpoint (MinIO): parallel and resumable
// multipart uploads, ranged download resume, multipart server-side copy,
// cross-connection copies, and a crash (SIGKILL) in the middle of an upload
// followed by a restore from the persisted queue.
//
// The test binary doubles as the crashing process: run with
// "--child-upload <state dir> <file> <key>" it starts the upload and keeps going
// until it is killed.

#include "common/S3TestEnv.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"
#include "transfer/TransferStore.h"

#include <QCryptographicHash>
#include <QDir>
#include <QFile>
#include <QProcess>
#include <QRandomGenerator>
#include <QTemporaryDir>
#include <QTest>
#include <QUuid>

#include <aws/s3/S3Client.h>
#include <aws/s3/model/HeadObjectRequest.h>
#include <aws/s3/model/ListMultipartUploadsRequest.h>
#include <aws/s3/model/ListPartsRequest.h>

#include <cstdio>
#include <cstring>

using namespace s3fm;

namespace {

constexpr qint64 MiB = 1024 * 1024;

void writeRandomFile(const QString& path, qint64 size)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    QByteArray chunk(MiB, Qt::Uninitialized);
    auto* gen = QRandomGenerator::global();
    for (qint64 written = 0; written < size;) {
        for (qsizetype i = 0; i < chunk.size(); i += 4) {
            const quint32 v = gen->generate();
            std::memcpy(chunk.data() + i, &v, 4);
        }
        const qint64 n = qMin<qint64>(chunk.size(), size - written);
        QCOMPARE(f.write(chunk.constData(), n), n);
        written += n;
    }
}

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

QByteArray md5File(const QString& path)
{
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly))
        return {};
    QCryptographicHash h(QCryptographicHash::Md5);
    h.addData(&f);
    return h.result().toHex();
}

std::shared_ptr<S3Provider> makeProvider(const test::S3TestEnv& env, const QString& id)
{
    const QString secret = env.secretKey;
    auto session = std::make_shared<S3Session>(
        env.profile(id), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
    auto p = std::make_shared<S3Provider>(session);
    p->setCacheTtlMs(0);
    return p;
}

TransferSettings smallParts()
{
    TransferSettings s;
    s.multipartThreshold = 5 * MiB;
    s.partSize = 5 * MiB;
    s.retryBaseDelayMs = 50;
    return s;
}

QString describe(const TransferJob* job)
{
    QStringList lines;
    for (const TransferFailure& f : job->failures())
        lines.push_back(f.item + QStringLiteral(": ") + f.error.toString());
    return jobStateName(job->state()) + u' ' + lines.join(QStringLiteral("; "));
}

} // namespace

class TestS3Transfer : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    std::shared_ptr<S3Provider> m_s3b; // a second connection to the same server
    ProviderRegistry m_registry;
    QTemporaryDir m_tmp;
    QString m_prefix;

    Location loc(const QString& rel, const QString& conn = QStringLiteral("it")) const
    {
        return Location::s3(conn, m_env.bucket, m_prefix + rel);
    }

    Aws::S3::S3Client& client() const { return *m_s3->session().client().value(); }

    int storedParts(const QString& rel, const QString& uploadId) const
    {
        Aws::S3::Model::ListPartsRequest req;
        req.SetBucket(aws::toAws(m_env.bucket));
        req.SetKey(aws::toAws(m_prefix + rel));
        req.SetUploadId(aws::toAws(uploadId));
        auto outcome = client().ListParts(req);
        return outcome.IsSuccess() ? int(outcome.GetResult().GetParts().size()) : -1;
    }

    // MinIO lists uploads only for an exact object key, so pass the full key.
    int pendingUploads(const QString& rel) const
    {
        Aws::S3::Model::ListMultipartUploadsRequest req;
        req.SetBucket(aws::toAws(m_env.bucket));
        req.SetPrefix(aws::toAws(m_prefix + rel));
        auto outcome = client().ListMultipartUploads(req);
        return outcome.IsSuccess() ? int(outcome.GetResult().GetUploads().size()) : -1;
    }

    QString remoteEtag(const QString& rel) const
    {
        Aws::S3::Model::HeadObjectRequest req;
        req.SetBucket(aws::toAws(m_env.bucket));
        req.SetKey(aws::toAws(m_prefix + rel));
        auto outcome = client().HeadObject(req);
        return outcome.IsSuccess() ? aws::cleanEtag(outcome.GetResult().GetETag()) : QString();
    }

    QByteArray downloadMd5(const Location& from)
    {
        const QString file =
            m_tmp.filePath(QStringLiteral("dl-") + QUuid::createUuid().toString(QUuid::Id128));
        OperationContext ctx;
        auto r = m_s3->download(from, file, ctx);
        if (!r) {
            qWarning() << r.error().toString();
            return {};
        }
        const QByteArray md5 = md5File(file);
        QFile::remove(file);
        return md5;
    }

    bool runJob(TransferQueue& queue, TransferJob* job, int ms = 60000)
    {
        Q_UNUSED(queue)
        const bool finished = QTest::qWaitFor([job] { return job->isFinished(); }, ms);
        if (!finished || job->state() != JobState::Done)
            qWarning("%s", qPrintable(describe(job)));
        return finished && job->state() == JobState::Done;
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        m_s3 = makeProvider(m_env, QStringLiteral("it"));
        m_s3b = makeProvider(m_env, QStringLiteral("it2"));
        m_prefix = QStringLiteral("xfer-%1/").arg(QUuid::createUuid().toString(QUuid::Id128).left(10));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory([this](const QString& id) -> std::shared_ptr<Provider> {
            if (id == u"it")
                return m_s3;
            if (id == u"it2")
                return m_s3b;
            return nullptr;
        });
    }

    void cleanupTestCase()
    {
        if (m_s3) {
            Entry dir;
            dir.type = Entry::Type::Directory;
            dir.location = loc({}).asDirectory();
            OperationContext ctx;
            (void)m_s3->remove({dir}, ctx);
        }
        m_registry.clear();
        m_s3.reset();
        m_s3b.reset();
        m_sdk.reset();
    }

    void parallelMultipartUploadIsVerified()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("big23.bin"));
        writeRandomFile(file, 23 * MiB);
        TransferParams params;
        params.multipartThreshold = 5 * MiB;
        params.partSize = 5 * MiB;
        params.partConcurrency = 4;
        qint64 lastDone = 0;
        int reports = 0;
        OperationContext ctx([&](qint64 done, qint64 total) {
            QCOMPARE(total, 23 * MiB);
            lastDone = done;
            ++reports;
        });
        ctx.setParams(&params);
        auto r = m_s3->upload(file, loc(QStringLiteral("mp/big23.bin")), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(lastDone, 23 * MiB);
        QVERIFY(reports > 5);
        QVERIFY(remoteEtag(QStringLiteral("mp/big23.bin")).endsWith(QStringLiteral("-5")));
        QCOMPARE(downloadMd5(loc(QStringLiteral("mp/big23.bin"))), md5File(file));
        QCOMPARE(pendingUploads(QStringLiteral("mp/big23.bin")), 0);
    }

    void interruptedUploadResumes()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("big26.bin"));
        writeRandomFile(file, 26 * MiB);
        TransferCheckpoint checkpoint;
        int checkpointWrites = 0;
        TransferParams params;
        params.multipartThreshold = 5 * MiB;
        params.partSize = 5 * MiB;
        params.partConcurrency = 1;
        params.resumable = true;
        params.checkpoint = &checkpoint;
        params.checkpointChanged = [&] { ++checkpointWrites; };

        OperationContext first;
        first.setProgressHandler([&](qint64 done, qint64) {
            if (done >= 13 * MiB)
                first.cancel(); // after two parts
        });
        first.setParams(&params);
        auto r = m_s3->upload(file, loc(QStringLiteral("resume/big26.bin")), first);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
        QVERIFY(!checkpoint.uploadId.isEmpty());
        QCOMPARE(checkpoint.partSize, 5 * MiB);
        QVERIFY(checkpointWrites >= 1);
        const QString uploadId = checkpoint.uploadId;
        QVERIFY(storedParts(QStringLiteral("resume/big26.bin"), uploadId) >= 2);

        OperationContext second;
        second.setParams(&params);
        r = m_s3->upload(file, loc(QStringLiteral("resume/big26.bin")), second);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QVERIFY(checkpoint.isEmpty());
        QCOMPARE(storedParts(QStringLiteral("resume/big26.bin"), uploadId), -1); // completed, not restarted
        QCOMPARE(pendingUploads(QStringLiteral("resume/big26.bin")), 0);
        QCOMPARE(downloadMd5(loc(QStringLiteral("resume/big26.bin"))), md5File(file));
    }

    void changedSourceRestartsUpload()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("changing.bin"));
        writeRandomFile(file, 12 * MiB);
        TransferCheckpoint checkpoint;
        TransferParams params;
        params.multipartThreshold = 5 * MiB;
        params.partSize = 5 * MiB;
        params.partConcurrency = 1;
        params.resumable = true;
        params.checkpoint = &checkpoint;
        OperationContext first;
        first.setProgressHandler([&](qint64 done, qint64) {
            if (done >= 6 * MiB)
                first.cancel();
        });
        first.setParams(&params);
        QVERIFY(!m_s3->upload(file, loc(QStringLiteral("changing.bin")), first));
        QVERIFY(!checkpoint.uploadId.isEmpty());
        const QString stale = checkpoint.uploadId;

        QTest::qWait(20);
        writeRandomFile(file, 12 * MiB); // new content and mtime
        OperationContext second;
        second.setParams(&params);
        auto r = m_s3->upload(file, loc(QStringLiteral("changing.bin")), second);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(storedParts(QStringLiteral("changing.bin"), stale), -1); // the stale upload was aborted
        QCOMPARE(downloadMd5(loc(QStringLiteral("changing.bin"))), md5File(file));
    }

    void interruptedDownloadResumes()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("dl12.bin"));
        writeRandomFile(file, 12 * MiB);
        {
            OperationContext ctx; // single-part upload: plain MD5 ETag, verified on download
            TransferParams p;
            p.multipartThreshold = 64 * MiB;
            ctx.setParams(&p);
            QVERIFY(m_s3->upload(file, loc(QStringLiteral("dl/dl12.bin")), ctx));
        }
        const QString target = m_tmp.filePath(QStringLiteral("down/dl12.bin"));
        QDir().mkpath(QFileInfo(target).absolutePath());
        TransferCheckpoint checkpoint;
        TransferParams params;
        params.resumable = true;
        params.checkpoint = &checkpoint;
        OperationContext first;
        first.setProgressHandler([&](qint64 done, qint64) {
            if (done >= 4 * MiB)
                first.cancel();
        });
        first.setParams(&params);
        auto r = m_s3->download(loc(QStringLiteral("dl/dl12.bin")), target, first);
        QVERIFY(!r && r.error().isCancelled());
        const qint64 partial = QFileInfo(target + QStringLiteral(".s3fm-part")).size();
        QVERIFY2(partial > 0 && partial < 12 * MiB, qPrintable(QString::number(partial)));
        QVERIFY(!checkpoint.downloadEtag.isEmpty());

        qint64 firstReport = -1;
        OperationContext second([&](qint64 done, qint64) {
            if (firstReport < 0)
                firstReport = done;
        });
        second.setParams(&params);
        r = m_s3->download(loc(QStringLiteral("dl/dl12.bin")), target, second);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QVERIFY(firstReport >= partial); // continued, did not start over
        QCOMPARE(md5File(target), md5File(file));
        QVERIFY(!QFileInfo::exists(target + QStringLiteral(".s3fm-part")));
        QVERIFY(checkpoint.isEmpty());

        // The object changes between the attempts: the stale partial data is dropped.
        writeFile(target + QStringLiteral(".s3fm-part"), QByteArray(1000, 'x'));
        checkpoint.downloadEtag = QStringLiteral("0123456789abcdef0123456789abcdef");
        OperationContext third;
        third.setParams(&params);
        r = m_s3->download(loc(QStringLiteral("dl/dl12.bin")), target, third);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(md5File(target), md5File(file));
    }

    void multipartServerSideCopy()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("copy12.bin"));
        writeRandomFile(file, 12 * MiB);
        OperationContext up;
        QVERIFY(m_s3->upload(file, loc(QStringLiteral("cp/src.bin")), up));

        m_s3->setCopyPartThreshold(5 * MiB); // force UploadPartCopy
        TransferParams params;
        params.partConcurrency = 3;
        params.verify = true;
        OperationContext ctx;
        ctx.setParams(&params);
        auto r = m_s3->copy(loc(QStringLiteral("cp/src.bin")), loc(QStringLiteral("cp/dst.bin")), ctx);
        m_s3->setCopyPartThreshold(5LL * 1024 * MiB);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QVERIFY(remoteEtag(QStringLiteral("cp/dst.bin")).contains(u'-'));
        QCOMPARE(downloadMd5(loc(QStringLiteral("cp/dst.bin"))), md5File(file));
    }

    void queueRoundTripAcrossLocalAndS3()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString tree = m_tmp.filePath(QStringLiteral("tree"));
        writeFile(tree + QStringLiteral("/a.txt"), "alpha");
        writeFile(tree + QStringLiteral("/sub/b.txt"), "bravo");
        writeRandomFile(tree + QStringLiteral("/sub/big.bin"), 11 * MiB);
        QDir().mkpath(tree + QStringLiteral("/emptydir"));

        TransferQueue queue(&m_registry);
        queue.setSettings(smallParts());
        TransferRequest up;
        up.sources = {LocalProvider::entryFromFileInfo(QFileInfo(tree))};
        up.destination = loc(QStringLiteral("ops/"));
        up.destinationIsDirectory = true;
        QVERIFY(runJob(queue, queue.enqueue(up)));
        OperationContext ctx;
        QVERIFY(m_s3->stat(loc(QStringLiteral("ops/tree/sub/b.txt")), ctx));
        QVERIFY(m_s3->stat(loc(QStringLiteral("ops/tree/emptydir/")), ctx)); // marker for the empty dir
        QCOMPARE(remoteEtag(QStringLiteral("ops/tree/sub/")), QString());    // no marker for non-empty dirs

        // Move within S3 (server-side copy + delete).
        Entry dir;
        dir.type = Entry::Type::Directory;
        dir.name = QStringLiteral("tree");
        dir.location = loc(QStringLiteral("ops/tree/"));
        TransferRequest move;
        move.kind = TransferKind::Move;
        move.sources = {dir};
        move.destination = loc(QStringLiteral("ops/moved/"));
        move.destinationIsDirectory = true;
        QVERIFY(runJob(queue, queue.enqueue(move)));
        QCOMPARE(m_s3->stat(loc(QStringLiteral("ops/tree/")), ctx).error().code, ErrorCode::NotFound);

        // Copy to another connection (staged through a local file).
        Entry moved = dir;
        moved.location = loc(QStringLiteral("ops/moved/tree/"));
        TransferRequest across;
        across.sources = {moved};
        across.destination = loc(QStringLiteral("ops/other/"), QStringLiteral("it2"));
        across.destinationIsDirectory = true;
        QVERIFY(runJob(queue, queue.enqueue(across)));
        QCOMPARE(downloadMd5(loc(QStringLiteral("ops/other/tree/sub/big.bin"))),
                 md5File(tree + QStringLiteral("/sub/big.bin")));
        QVERIFY(QDir(QDir::tempPath() + QStringLiteral("/s3fm-staging")).entryList(QDir::Files).isEmpty());

        // Download back and compare.
        const QString back = m_tmp.filePath(QStringLiteral("back"));
        QDir().mkpath(back);
        TransferRequest down;
        down.sources = {moved};
        down.destination = Location::local(back);
        down.destinationIsDirectory = true;
        QVERIFY(runJob(queue, queue.enqueue(down)));
        QCOMPARE(readFile(back + QStringLiteral("/tree/a.txt")), QByteArray("alpha"));
        QCOMPARE(readFile(back + QStringLiteral("/tree/sub/b.txt")), QByteArray("bravo"));
        QCOMPARE(md5File(back + QStringLiteral("/tree/sub/big.bin")),
                 md5File(tree + QStringLiteral("/sub/big.bin")));
        QVERIFY(QFileInfo(back + QStringLiteral("/tree/emptydir")).isDir());
    }

    void cancelledJobAbortsMultipartUpload()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString file = m_tmp.filePath(QStringLiteral("cancel/c30.bin"));
        writeRandomFile(file, 30 * MiB);
        TransferQueue queue(&m_registry);
        TransferSettings s = smallParts();
        s.partConcurrency = 1;
        s.bandwidthLimit = 10 * MiB;
        queue.setSettings(s);
        TransferRequest req;
        req.sources = {LocalProvider::entryFromFileInfo(QFileInfo(file))};
        req.destination = loc(QStringLiteral("cancel/"));
        req.destinationIsDirectory = true;
        TransferJob* job = queue.enqueue(req);
        QVERIFY(QTest::qWaitFor([&] { return job->progress().bytesDone >= 12 * MiB; }, 20000));
        QCOMPARE(pendingUploads(QStringLiteral("cancel/c30.bin")), 1);
        queue.cancel(job);
        QVERIFY(QTest::qWaitFor([&] { return job->isFinished(); }, 10000));
        QCOMPARE(job->state(), JobState::Cancelled);
        QTRY_COMPARE_WITH_TIMEOUT(pendingUploads(QStringLiteral("cancel/c30.bin")), 0, 10000);
        QCOMPARE(remoteEtag(QStringLiteral("cancel/c30.bin")), QString());
    }

    void killedProcessResumesAfterRestart()
    {
        S3FM_REQUIRE_S3(m_env);
        QTemporaryDir state;
        const QString file = m_tmp.filePath(QStringLiteral("crash/c40.bin"));
        writeRandomFile(file, 40 * MiB);
        const QString key = m_prefix + QStringLiteral("crash/c40.bin");

        QProcess child;
        child.setProcessChannelMode(QProcess::ForwardedErrorChannel);
        child.start(QCoreApplication::applicationFilePath(),
                    {QStringLiteral("--child-upload"), state.path(), file, key});
        QVERIFY(child.waitForStarted());
        qint64 done = 0;
        QVERIFY(QTest::qWaitFor(
            [&] {
                while (child.canReadLine()) {
                    const QByteArray line = child.readLine().trimmed();
                    if (line.startsWith("progress "))
                        done = line.mid(9).toLongLong();
                }
                return done >= 17 * MiB || child.state() == QProcess::NotRunning;
            },
            30000));
        QCOMPARE(child.state(), QProcess::Running);
        child.kill(); // SIGKILL: no chance to save anything
        QVERIFY(child.waitForFinished());

        // The persisted state names the multipart upload, which already has parts.
        TransferStore store(state.path());
        auto loaded = store.loadAll();
        QCOMPARE(loaded.size(), 1);
        QVERIFY(loaded.first().expanded);
        const QString uploadId = loaded.first().tasks.first().checkpoint.uploadId;
        QVERIFY(!uploadId.isEmpty());
        QVERIFY(storedParts(QStringLiteral("crash/c40.bin"), uploadId) >= 2);

        // "Restart the app": restore and resume.
        TransferQueue queue(&m_registry);
        queue.setSettings(smallParts());
        queue.setStore(std::make_shared<TransferStore>(state.path()));
        QCOMPARE(queue.restore(), 1);
        TransferJob* job = queue.jobs().first();
        QCOMPARE(job->state(), JobState::Paused);
        queue.resume(job);
        QVERIFY(runJob(queue, job));
        QCOMPARE(storedParts(QStringLiteral("crash/c40.bin"), uploadId), -1); // that upload was completed
        QCOMPARE(pendingUploads(QStringLiteral("crash/c40.bin")), 0);
        QCOMPARE(downloadMd5(loc(QStringLiteral("crash/c40.bin"))), md5File(file));
        QVERIFY(store.loadAll().isEmpty());
    }
};

// Child mode: start an upload through a persisted queue and run until killed.
static int childUpload(int argc, char** argv)
{
    QCoreApplication app(argc, argv);
    const QString stateDir = QString::fromLocal8Bit(argv[2]);
    const QString file = QString::fromLocal8Bit(argv[3]);
    const QString key = QString::fromLocal8Bit(argv[4]);
    AwsSdkGuard sdk;
    const test::S3TestEnv env;
    ProviderRegistry registry;
    registry.setLocalProvider(std::make_shared<LocalProvider>());
    auto s3 = makeProvider(env, QStringLiteral("it"));
    registry.setS3Factory([s3](const QString&) -> std::shared_ptr<Provider> { return s3; });
    TransferQueue queue(&registry);
    TransferSettings s = smallParts();
    s.partConcurrency = 1;
    s.bandwidthLimit = 8 * MiB; // slow enough to be killed half way
    queue.setSettings(s);
    queue.setStore(std::make_shared<TransferStore>(stateDir));
    TransferRequest req;
    req.sources = {LocalProvider::entryFromFileInfo(QFileInfo(file))};
    req.destination = Location::s3(QStringLiteral("it"), env.bucket, key);
    QObject::connect(&queue, &TransferQueue::jobChanged, &app, [](TransferJob* job) {
        std::printf("progress %lld\n", static_cast<long long>(job->progress().bytesDone));
        std::fflush(stdout);
    });
    QObject::connect(&queue, &TransferQueue::jobFinished, &app, [] { QCoreApplication::exit(2); });
    queue.enqueue(req);
    return QCoreApplication::exec();
}

int main(int argc, char** argv)
{
    if (argc >= 5 && std::strcmp(argv[1], "--child-upload") == 0)
        return childUpload(argc, argv);
    QCoreApplication app(argc, argv);
    TestS3Transfer test;
    QTEST_SET_MAIN_SOURCE_PATH
    return QTest::qExec(&test, argc, argv);
}

#include "tst_s3transfer.moc"
