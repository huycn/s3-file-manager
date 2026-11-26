// S3Provider against a real endpoint (MinIO seeded by scripts/dev-minio.sh).
// Every test works below a unique prefix that is removed in cleanupTestCase().

#include "common/S3TestEnv.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QCryptographicHash>
#include <QDir>
#include <QFile>
#include <QRandomGenerator>
#include <QSet>
#include <QTemporaryDir>
#include <QTest>
#include <QUuid>

#include <cstring>

using namespace s3fm;

namespace {

QByteArray randomBytes(qint64 n)
{
    QByteArray data(n, Qt::Uninitialized);
    auto* gen = QRandomGenerator::global();
    for (qint64 i = 0; i < n; i += 4) {
        const quint32 v = gen->generate();
        std::memcpy(data.data() + i, &v, size_t(std::min<qint64>(4, n - i)));
    }
    return data;
}

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    QCOMPARE(f.write(data), data.size());
}

QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

QSet<QString> names(const EntryList& entries)
{
    QSet<QString> out;
    for (const Entry& e : entries)
        out.insert(e.name);
    return out;
}

} // namespace

class TestS3Provider : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    ProviderRegistry m_registry;
    QTemporaryDir m_tmp;
    QString m_prefix; // unique per run, e.g. "it-1a2b3c/"

    Location loc(const QString& rel) const
    {
        return Location::s3(QStringLiteral("it"), m_env.bucket, m_prefix + rel);
    }
    Location seeded(const QString& key) const
    {
        return Location::s3(QStringLiteral("it"), m_env.bucket, key);
    }

    std::shared_ptr<S3Provider> makeProvider() const
    {
        const QString secret = m_env.secretKey;
        auto session = std::make_shared<S3Session>(
            m_env.profile(), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
        return std::make_shared<S3Provider>(session);
    }

    void put(const QString& rel, const QByteArray& data)
    {
        const QString file =
            m_tmp.filePath(QStringLiteral("put-") + QUuid::createUuid().toString(QUuid::Id128));
        writeFile(file, data);
        OperationContext ctx;
        auto r = m_s3->upload(file, loc(rel), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        m_s3 = makeProvider();
        m_s3->setCacheTtlMs(0);
        m_prefix = QStringLiteral("it-%1/").arg(QUuid::createUuid().toString(QUuid::Id128).left(10));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory(
            [this](const QString& id) -> std::shared_ptr<Provider> { return id == u"it" ? m_s3 : nullptr; });
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
        m_sdk.reset();
    }

    void listsBuckets()
    {
        S3FM_REQUIRE_S3(m_env);
        OperationContext ctx;
        auto page = m_s3->list(Location::s3(QStringLiteral("it")), {}, ctx);
        QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
        QVERIFY(names(page->entries).contains(m_env.bucket));
        for (const Entry& e : std::as_const(page->entries))
            QCOMPARE(e.type, Entry::Type::Bucket);
    }

    void listsSeededTree()
    {
        S3FM_REQUIRE_S3(m_env);
        OperationContext ctx;
        auto page = m_s3->list(Location::s3(QStringLiteral("it"), m_env.bucket), {}, ctx);
        QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
        const QSet<QString> n = names(page->entries);
        for (const char* expected : {"readme.txt", "docs", "empty-folder", "space dir", "unicode", "many"})
            QVERIFY2(n.contains(QString::fromUtf8(expected)), expected);
        for (const Entry& e : std::as_const(page->entries)) {
            if (e.name == u"docs") {
                QCOMPARE(e.type, Entry::Type::Directory);
                QCOMPARE(e.location.key(), QStringLiteral("docs/"));
            }
            if (e.name == u"readme.txt") {
                QCOMPARE(e.type, Entry::Type::File);
                QVERIFY(e.size > 0);
                QVERIFY(e.modified.isValid());
                QVERIFY(!e.etag.isEmpty());
                QVERIFY(!e.etag.contains(u'"'));
            }
        }
        // The empty folder lists as empty (its own marker is hidden).
        auto empty = m_s3->list(seeded(QStringLiteral("empty-folder/")), {}, ctx);
        QVERIFY(empty);
        QVERIFY(empty->entries.isEmpty());
    }

    void paginates()
    {
        S3FM_REQUIRE_S3(m_env);
        auto provider = makeProvider();
        provider->setListPageSize(40);
        provider->setCacheTtlMs(0);
        OperationContext ctx;
        int pages = 0;
        QSet<QString> all;
        QString token;
        do {
            auto page = provider->list(seeded(QStringLiteral("many/")), token, ctx);
            QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
            ++pages;
            for (const Entry& e : std::as_const(page->entries))
                all.insert(e.name);
            token = page->nextPageToken;
        } while (!token.isEmpty());
        QCOMPARE(all.size(), 250);
        QVERIFY(pages >= 7);
    }

    void unicodeAndSpaces()
    {
        S3FM_REQUIRE_S3(m_env);
        OperationContext ctx;
        auto page = m_s3->list(seeded(QStringLiteral("unicode/")), {}, ctx);
        QVERIFY(page);
        QCOMPARE(page->entries.size(), 1);
        QCOMPARE(page->entries.first().name, QStringLiteral("héllo wörld ✓.txt"));
        const QString out = m_tmp.filePath(QStringLiteral("unicode-out.txt"));
        QVERIFY(m_s3->download(page->entries.first().location, out, ctx));
        QCOMPARE(readFile(out), QByteArray("unicode"));

        auto spaced = m_s3->stat(seeded(QStringLiteral("space dir/file with spaces.txt")), ctx);
        QVERIFY2(spaced, spaced ? "" : qPrintable(spaced.error().toString()));
        QCOMPARE(spaced->size, 6);
    }

    void statObjectsAndPrefixes()
    {
        S3FM_REQUIRE_S3(m_env);
        OperationContext ctx;
        auto object = m_s3->stat(seeded(QStringLiteral("readme.txt")), ctx);
        QVERIFY(object);
        QCOMPARE(object->type, Entry::Type::File);
        QCOMPARE(object->contentType, QStringLiteral("text/plain"));
        QVERIFY(object->metadata.contains(QStringLiteral("Content-Type")));

        auto prefix = m_s3->stat(seeded(QStringLiteral("docs")), ctx); // no trailing slash
        QVERIFY(prefix);
        QCOMPARE(prefix->type, Entry::Type::Directory);
        QCOMPARE(prefix->location.key(), QStringLiteral("docs/"));

        auto bucket = m_s3->stat(Location::s3(QStringLiteral("it"), m_env.bucket), ctx);
        QVERIFY(bucket);
        QCOMPARE(bucket->type, Entry::Type::Bucket);

        auto missing = m_s3->stat(seeded(QStringLiteral("does/not/exist.txt")), ctx);
        QCOMPARE(missing.error().code, ErrorCode::NotFound);
        auto noBucket =
            m_s3->list(Location::s3(QStringLiteral("it"), QStringLiteral("s3fm-no-such-bucket")), {}, ctx);
        QCOMPARE(noBucket.error().code, ErrorCode::NotFound);
    }

    void uploadDownloadRoundTripKeepsMtime()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString src = m_tmp.filePath(QStringLiteral("small.bin"));
        const QByteArray data = randomBytes(300 * 1024 + 7);
        writeFile(src, data);
        const QDateTime mtime = QDateTime::currentDateTime().addDays(-10);
        {
            QFile f(src);
            QVERIFY(f.open(QIODevice::Append));
            QVERIFY(f.setFileTime(mtime, QFileDevice::FileModificationTime));
        }
        qint64 lastProgress = 0;
        OperationContext ctx([&](qint64 done, qint64) { lastProgress = done; });
        QVERIFY(m_s3->upload(src, loc(QStringLiteral("roundtrip/small.bin")), ctx));
        QCOMPARE(lastProgress, data.size());

        auto st = m_s3->stat(loc(QStringLiteral("roundtrip/small.bin")), ctx);
        QVERIFY(st);
        QCOMPARE(st->size, data.size());
        QVERIFY(st->metadata.contains(QStringLiteral("x-amz-meta-mtime")));

        const QString out = m_tmp.filePath(QStringLiteral("small-out.bin"));
        OperationContext dctx;
        QVERIFY(m_s3->download(loc(QStringLiteral("roundtrip/small.bin")), out, dctx));
        QCOMPARE(readFile(out), data);
        QVERIFY(qAbs(QFileInfo(out).lastModified().secsTo(mtime)) <= 1);
        QVERIFY(!QFileInfo::exists(out + QStringLiteral(".s3fm-part")));
    }

    void multipartUploadAndCopy()
    {
        S3FM_REQUIRE_S3(m_env);
        auto provider = makeProvider();
        provider->setMultipartThreshold(5 * 1024 * 1024);
        provider->setPartSize(5 * 1024 * 1024);
        provider->setCopyPartThreshold(1024 * 1024); // force UploadPartCopy
        const QByteArray data = randomBytes(12 * 1024 * 1024 + 123);
        const QString src = m_tmp.filePath(QStringLiteral("big.bin"));
        writeFile(src, data);
        OperationContext ctx;
        auto up = provider->upload(src, loc(QStringLiteral("mp/big.bin")), ctx);
        QVERIFY2(up, up ? "" : qPrintable(up.error().toString()));
        auto st = provider->stat(loc(QStringLiteral("mp/big.bin")), ctx);
        QVERIFY(st);
        QCOMPARE(st->size, data.size());
        QVERIFY(st->etag.contains(u'-')); // multipart ETag "<md5>-<parts>"

        auto copied =
            provider->copy(loc(QStringLiteral("mp/big.bin")), loc(QStringLiteral("mp/big-copy.bin")), ctx);
        QVERIFY2(copied, copied ? "" : qPrintable(copied.error().toString()));
        const QString out = m_tmp.filePath(QStringLiteral("big-copy-out.bin"));
        QVERIFY(provider->download(loc(QStringLiteral("mp/big-copy.bin")), out, ctx));
        QCOMPARE(QCryptographicHash::hash(readFile(out), QCryptographicHash::Sha256),
                 QCryptographicHash::hash(data, QCryptographicHash::Sha256));
    }

    void serverSideCopySmall()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("copy/src.txt"), "copy me");
        OperationContext ctx;
        QVERIFY(m_s3->copy(loc(QStringLiteral("copy/src.txt")), loc(QStringLiteral("copy/dst.txt")), ctx));
        auto st = m_s3->stat(loc(QStringLiteral("copy/dst.txt")), ctx);
        QVERIFY(st);
        QCOMPARE(st->size, 7);
    }

    void makeDirectoryCreatesMarker()
    {
        S3FM_REQUIRE_S3(m_env);
        OperationContext ctx;
        QVERIFY(m_s3->makeDirectory(loc(QStringLiteral("newdir")), ctx));
        auto st = m_s3->stat(loc(QStringLiteral("newdir/")), ctx);
        QVERIFY(st);
        QCOMPARE(st->type, Entry::Type::Directory);
        auto again = m_s3->makeDirectory(loc(QStringLiteral("newdir/")), ctx);
        QCOMPARE(again.error().code, ErrorCode::AlreadyExists);
        auto page = m_s3->list(loc({}).asDirectory(), {}, ctx);
        QVERIFY(names(page->entries).contains(QStringLiteral("newdir")));
    }

    void walkIsPreOrderAndFlat()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("walk/a/1.txt"), "1");
        put(QStringLiteral("walk/a/b/2.txt"), "2");
        put(QStringLiteral("walk/c.txt"), "3");
        OperationContext ctx;
        QVERIFY(m_s3->makeDirectory(loc(QStringLiteral("walk/empty/")), ctx));
        QStringList seen;
        auto r = m_s3->walk(
            loc(QStringLiteral("walk/")),
            [&](const Entry& e) {
                seen.push_back(e.location.key().mid(m_prefix.size() + 5) +
                               (e.isDirectory() ? QStringLiteral("|d") : QString()));
                return true;
            },
            ctx);
        QVERIFY(r);
        QCOMPARE(QSet<QString>(seen.begin(), seen.end()),
                 (QSet<QString>{"a/|d", "a/1.txt", "a/b/|d", "a/b/2.txt", "c.txt", "empty/|d"}));
        QVERIFY(seen.indexOf(QStringLiteral("a/|d")) < seen.indexOf(QStringLiteral("a/1.txt")));
        QVERIFY(seen.indexOf(QStringLiteral("a/b/|d")) < seen.indexOf(QStringLiteral("a/b/2.txt")));
    }

    void removeRecursivePrefix()
    {
        S3FM_REQUIRE_S3(m_env);
        for (int i = 0; i < 30; ++i)
            put(QStringLiteral("rm/sub%1/f%2.txt").arg(i % 3).arg(i), "x");
        OperationContext ctx;
        QVERIFY(m_s3->makeDirectory(loc(QStringLiteral("rm/emptysub/")), ctx));
        Entry dir;
        dir.type = Entry::Type::Directory;
        dir.location = loc(QStringLiteral("rm/"));
        qint64 removed = 0;
        OperationContext rctx([&](qint64 done, qint64) { removed = done; });
        QVERIFY(m_s3->remove({dir}, rctx));
        QCOMPARE(removed, 31);
        auto st = m_s3->stat(loc(QStringLiteral("rm/")), ctx);
        QCOMPARE(st.error().code, ErrorCode::NotFound);
    }

    void cancelledDownloadLeavesNothing()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("cancel/blob.bin"), randomBytes(8 * 1024 * 1024));
        const QString out = m_tmp.filePath(QStringLiteral("cancelled.bin"));
        OperationContext ctx;
        ctx.setProgressHandler([&ctx](qint64 done, qint64) {
            if (done > 64 * 1024)
                ctx.cancel();
        });
        auto r = m_s3->download(loc(QStringLiteral("cancel/blob.bin")), out, ctx);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
        QVERIFY(!QFileInfo::exists(out));
        QVERIFY(!QFileInfo::exists(out + QStringLiteral(".s3fm-part")));
    }

    void listingCacheAndInvalidation()
    {
        S3FM_REQUIRE_S3(m_env);
        auto cached = makeProvider();
        cached->setCacheTtlMs(60000);
        OperationContext ctx;
        put(QStringLiteral("cache/one.txt"), "1");
        QCOMPARE(cached->list(loc(QStringLiteral("cache/")), {}, ctx)->entries.size(), 1);
        put(QStringLiteral("cache/two.txt"), "2"); // through another provider instance
        QCOMPARE(cached->list(loc(QStringLiteral("cache/")), {}, ctx)->entries.size(), 1); // stale
        cached->invalidateCache(loc(QStringLiteral("cache/")));
        QCOMPARE(cached->list(loc(QStringLiteral("cache/")), {}, ctx)->entries.size(), 2);
    }
};

QTEST_GUILESS_MAIN(TestS3Provider)
#include "tst_s3provider.moc"
