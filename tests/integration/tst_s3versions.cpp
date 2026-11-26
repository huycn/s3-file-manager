// Versioning and multipart administration against MinIO: version listings,
// point-in-time listings, version history operations, version-aware transfers and
// incomplete multipart uploads.

#include "common/S3TestEnv.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3VersionService.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"

#include <QDir>
#include <QFile>
#include <QTemporaryDir>
#include <QTest>
#include <QThread>
#include <QUuid>

#include <aws/core/utils/stream/PreallocatedStreamBuf.h>
#include <aws/s3/S3Client.h> // IWYU pragma: keep (used through a shared_ptr; include-cleaner misses it)
#include <aws/s3/model/CreateMultipartUploadRequest.h>
#include <aws/s3/model/UploadPartRequest.h>

using namespace s3fm;

namespace {

QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

} // namespace

class TestS3Versions : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    std::shared_ptr<S3VersionService> m_versions;
    ProviderRegistry m_registry;
    QTemporaryDir m_tmp;
    QString m_prefix;

    Location loc(const QString& rel) const
    {
        return Location::s3(QStringLiteral("it"), m_env.versionedBucket, m_prefix + rel);
    }

    void put(const QString& rel, const QByteArray& data)
    {
        const QString file = m_tmp.filePath(QUuid::createUuid().toString(QUuid::Id128));
        QFile f(file);
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write(data);
        f.close();
        OperationContext ctx;
        auto r = m_s3->upload(file, loc(rel), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
    }

    QByteArray fetch(const Location& l, const QString& versionId = {})
    {
        const QString file = m_tmp.filePath(QUuid::createUuid().toString(QUuid::Id128));
        OperationContext ctx;
        auto r = versionId.isEmpty() ? m_s3->download(l, file, ctx)
                                     : m_versions->downloadVersion(l, versionId, file, ctx);
        if (!r)
            return "<" + r.error().toString().toUtf8() + ">";
        return readFile(file);
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        const QString secret = m_env.secretKey;
        auto session = std::make_shared<S3Session>(
            m_env.profile(), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
        m_s3 = std::make_shared<S3Provider>(session);
        m_s3->setCacheTtlMs(0);
        m_s3->setListPageSize(2); // exercise pagination of version listings
        m_versions = std::make_shared<S3VersionService>(m_s3);
        m_prefix = QStringLiteral("ver-%1/").arg(QUuid::createUuid().toString(QUuid::Id128).left(10));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory(
            [this](const QString& id) -> std::shared_ptr<Provider> { return id == u"it" ? m_s3 : nullptr; });
    }

    void cleanupTestCase()
    {
        if (m_s3) {
            // Remove every version and delete marker below the test prefix.
            OperationContext ctx;
            EntryList all;
            QString token;
            do {
                auto page = m_s3->listVersionsPage(m_env.versionedBucket, m_prefix, false, token, ctx);
                if (!page)
                    break;
                all.append(page->entries);
                token = page->nextPageToken;
            } while (!token.isEmpty());
            if (!all.isEmpty())
                (void)m_versions->deleteVersions(all, true, ctx);
        }
        m_versions.reset();
        m_registry.clear();
        m_s3.reset();
        m_sdk.reset();
    }

    void versioningStatus()
    {
        S3FM_REQUIRE_S3(m_env);
        QCOMPARE(m_versions->versioningStatus(m_env.versionedBucket).value(), QStringLiteral("Enabled"));
        QCOMPARE(m_versions->versioningStatus(m_env.bucket).value(), QString());
    }

    void historyListingsAndPointInTime()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("h/doc.txt"), "one");
        QThread::msleep(1100); // distinct LastModified seconds
        const QDateTime afterFirst = QDateTime::currentDateTimeUtc();
        QThread::msleep(1100);
        put(QStringLiteral("h/doc.txt"), "two");
        put(QStringLiteral("h/other.txt"), "other");
        QThread::msleep(1100);
        put(QStringLiteral("h/doc.txt"), "three");
        put(QStringLiteral("h/sub/inner.txt"), "inner");

        OperationContext ctx;
        auto history = m_versions->versions(loc(QStringLiteral("h/doc.txt")), ctx);
        QVERIFY2(history, history ? "" : qPrintable(history.error().toString()));
        QCOMPARE(history->size(), 3);
        QVERIFY(history->first().isLatest);
        QCOMPARE(fetch(loc(QStringLiteral("h/doc.txt")), history->last().versionId), QByteArray("one"));

        // Versions view of the folder (paged by 2): 3 + 1 versions and the subfolder.
        ListOptions versions;
        versions.versions = true;
        EntryList rows;
        QString token;
        do {
            auto page = m_s3->listWithOptions(loc(QStringLiteral("h/")), token, versions, ctx);
            QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
            rows.append(page->entries);
            token = page->nextPageToken;
        } while (!token.isEmpty());
        int docVersions = 0;
        int dirs = 0;
        for (const Entry& e : std::as_const(rows)) {
            docVersions += e.name == u"doc.txt";
            dirs += e.isDirectory();
            if (!e.isDirectory())
                QVERIFY(!e.versionId.isEmpty());
        }
        QCOMPARE(docVersions, 3);
        QCOMPARE(dirs, 1);

        // As of just after the first upload: only doc.txt, at version "one".
        ListOptions asOf;
        asOf.asOf = afterFirst;
        auto past = m_s3->listWithOptions(loc(QStringLiteral("h/")), {}, asOf, ctx);
        QVERIFY(past);
        QCOMPARE(past->entries.size(), 1);
        const Entry old = past->entries.first();
        QCOMPARE(old.name, QStringLiteral("doc.txt"));
        QVERIFY(!old.isLatest);
        QCOMPARE(fetch(old.location, old.versionId), QByteArray("one"));
        // Now: three entries (doc, other, sub/).
        asOf.asOf = QDateTime::currentDateTimeUtc().addSecs(5);
        QCOMPARE(m_s3->listWithOptions(loc(QStringLiteral("h/")), {}, asOf, ctx)->entries.size(), 3);
    }

    void restoreDeleteAndUndelete()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("r/file.txt"), "v1");
        put(QStringLiteral("r/file.txt"), "v2");
        OperationContext ctx;
        const Location l = loc(QStringLiteral("r/file.txt"));
        EntryList history = m_versions->versions(l, ctx).value();
        QCOMPARE(history.size(), 2);
        const QString v1 = history.last().versionId;

        // Make v1 current again: a third version with v1's content.
        auto r = m_versions->restoreVersion(l, v1, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(fetch(l), QByteArray("v1"));
        QCOMPARE(m_versions->versions(l, ctx)->size(), 3);

        // A normal delete leaves a delete marker; undelete removes it.
        Entry e;
        e.location = l;
        QVERIFY(m_s3->remove({e}, ctx));
        QCOMPARE(m_s3->stat(l, ctx).error().code, ErrorCode::NotFound);
        history = m_versions->versions(l, ctx).value();
        QVERIFY(history.first().isLatest && history.first().isDeleteMarker);
        r = m_versions->undelete(l, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(fetch(l), QByteArray("v1"));
        QCOMPARE(m_versions->undelete(l, ctx).error().code, ErrorCode::InvalidArgument);

        // Permanently delete the oldest version.
        history = m_versions->versions(l, ctx).value();
        r = m_versions->deleteVersions({history.last()}, false, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(m_versions->versions(l, ctx)->size(), history.size() - 1);
    }

    void transfersCopyTheSelectedVersion()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("t/a.txt"), "old content");
        put(QStringLiteral("t/a.txt"), "new content");
        OperationContext ctx;
        const EntryList history = m_versions->versions(loc(QStringLiteral("t/a.txt")), ctx).value();
        Entry oldVersion = history.last();
        QVERIFY(!oldVersion.isLatest);

        TransferQueue queue(&m_registry);
        // Download the old version.
        const QString dir = m_tmp.filePath(QStringLiteral("down"));
        QDir().mkpath(dir);
        TransferRequest down;
        down.sources = {oldVersion};
        down.destination = Location::local(dir);
        down.destinationIsDirectory = true;
        TransferJob* job = queue.enqueue(down);
        QVERIFY(QTest::qWaitFor([job] { return job->isFinished(); }, 10000));
        QCOMPARE(job->state(), JobState::Done);
        QCOMPARE(readFile(dir + QStringLiteral("/a.txt")), QByteArray("old content"));

        // Server-side copy of the old version to another key.
        TransferRequest copy;
        copy.sources = {oldVersion};
        copy.destination = loc(QStringLiteral("t/copy-of-old.txt"));
        job = queue.enqueue(copy);
        QVERIFY(QTest::qWaitFor([job] { return job->isFinished(); }, 10000));
        QCOMPARE(job->state(), JobState::Done);
        QCOMPARE(fetch(loc(QStringLiteral("t/copy-of-old.txt"))), QByteArray("old content"));
    }

    void incompleteMultipartUploads()
    {
        S3FM_REQUIRE_S3(m_env);
        // Start an upload with one part and leave it incomplete.
        auto client = m_s3->session().client().value();
        const QString key = m_prefix + QStringLiteral("mpu/left-over.bin");
        Aws::S3::Model::CreateMultipartUploadRequest create;
        create.SetBucket(aws::toAws(m_env.bucket));
        create.SetKey(aws::toAws(key));
        auto created = client->CreateMultipartUpload(create);
        QVERIFY(created.IsSuccess());
        QByteArray part(5 * 1024 * 1024, 'p');
        Aws::Utils::Stream::PreallocatedStreamBuf buf(reinterpret_cast<unsigned char*>(part.data()),
                                                      static_cast<uint64_t>(part.size()));
        Aws::S3::Model::UploadPartRequest upload;
        upload.SetBucket(aws::toAws(m_env.bucket));
        upload.SetKey(aws::toAws(key));
        upload.SetUploadId(created.GetResult().GetUploadId());
        upload.SetPartNumber(1);
        upload.SetContentLength(part.size());
        upload.SetBody(Aws::MakeShared<Aws::IOStream>("test", &buf));
        QVERIFY(client->UploadPart(upload).IsSuccess());

        OperationContext ctx;
        // MinIO lists uploads for an exact key; AWS also for prefixes and whole buckets.
        auto pending = m_versions->pendingUploads(m_env.bucket, key, ctx);
        QVERIFY2(pending, pending ? "" : qPrintable(pending.error().toString()));
        QCOMPARE(pending->size(), 1);
        PendingUpload u = pending->first();
        QCOMPARE(u.key, key);
        QVERIFY(u.initiated.isValid());
        QVERIFY(m_versions->countParts(m_env.bucket, u, ctx));
        QCOMPARE(u.parts, 1);
        QCOMPARE(u.size, qint64(part.size()));
        auto whole = m_versions->pendingUploads(m_env.bucket, {}, ctx);
        QVERIFY(whole);
        qInfo() << "bucket-wide listing returned" << whole->size() << "upload(s)";

        QVERIFY(m_versions->abortUpload(m_env.bucket, u));
        QVERIFY(m_versions->pendingUploads(m_env.bucket, key, ctx)->isEmpty());
    }
};

QTEST_GUILESS_MAIN(TestS3Versions)
#include "tst_s3versions.moc"
