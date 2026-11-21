// Object-level S3 features against MinIO: metadata/storage class/encryption
// rewrites, tags, ACLs, Object Lock, presigned URLs, checksum comparison, bulk
// changes and requester pays.

#include "common/S3TestEnv.h"
#include "core/ProviderRegistry.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3ObjectService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QDir>
#include <QEventLoop>
#include <QFile>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QRandomGenerator>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>
#include <QUuid>

#include <aws/s3/S3Client.h>
#include <aws/s3/model/DeleteObjectRequest.h>
#include <aws/s3/model/ListObjectVersionsRequest.h>

#include <cstring>

using namespace s3fm;

namespace {

constexpr qint64 MiB = 1024 * 1024;

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

QByteArray randomBytes(qint64 n)
{
    QByteArray data(n, Qt::Uninitialized);
    for (qint64 i = 0; i < n; i += 4) {
        const quint32 v = QRandomGenerator::global()->generate();
        std::memcpy(data.data() + i, &v, size_t(qMin<qint64>(4, n - i)));
    }
    return data;
}

// Synchronous HTTP for presigned URLs.
QPair<int, QByteArray> http(const QString& method, const QString& url, const QByteArray& body = {})
{
    QNetworkAccessManager nam;
    QNetworkRequest req{QUrl(url, QUrl::StrictMode)};
    QNetworkReply* reply = method == u"PUT" ? nam.put(req, body) : nam.get(req);
    QEventLoop loop;
    QObject::connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit);
    QTimer::singleShot(10000, &loop, &QEventLoop::quit);
    loop.exec();
    const int status = reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
    const QByteArray data = reply->readAll();
    reply->deleteLater();
    return {status, data};
}

} // namespace

class TestS3ObjectOps : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    std::shared_ptr<S3ObjectService> m_service;
    QTemporaryDir m_tmp;
    QString m_prefix;

    Location loc(const QString& rel, const QString& bucket = {}) const
    {
        return Location::s3(QStringLiteral("it"), bucket.isEmpty() ? m_env.bucket : bucket, m_prefix + rel);
    }

    std::shared_ptr<S3Provider> makeProvider(const ConnectionProfile& profile) const
    {
        const QString secret = m_env.secretKey;
        auto session = std::make_shared<S3Session>(
            profile, [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
        auto p = std::make_shared<S3Provider>(session);
        p->setCacheTtlMs(0);
        return p;
    }

    void put(const QString& rel, const QByteArray& data, const QString& bucket = {},
             TransferParams* params = nullptr)
    {
        const QString file = m_tmp.filePath(QUuid::createUuid().toString(QUuid::Id128));
        writeFile(file, data);
        OperationContext ctx;
        ctx.setParams(params);
        auto r = m_s3->upload(file, loc(rel, bucket), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
    }

    Entry head(const QString& rel, const QString& bucket = {})
    {
        auto e = m_s3->headObject(loc(rel, bucket));
        if (!e)
            qWarning() << e.error().toString();
        return e ? e.value() : Entry();
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        m_s3 = makeProvider(m_env.profile());
        m_service = std::make_shared<S3ObjectService>(m_s3);
        m_prefix = QStringLiteral("obj-%1/").arg(QUuid::createUuid().toString(QUuid::Id128).left(10));
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
        m_service.reset();
        m_s3.reset();
        m_sdk.reset();
    }

    void rewriteHeadersKeepsTagsAndData()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("meta/a.txt"), "alpha");
        QVERIFY(m_service->setTags(loc(QStringLiteral("meta/a.txt")),
                                   {{QStringLiteral("team"), QStringLiteral("x")}}));

        CopyOverrides o;
        ObjectHeaders h;
        h.contentType = QStringLiteral("application/x-test");
        h.cacheControl = QStringLiteral("max-age=60");
        h.contentDisposition = QStringLiteral("attachment");
        h.userMetadata = {{QStringLiteral("owner"), QStringLiteral("qa")}};
        o.headers = h;
        OperationContext ctx;
        auto r = m_service->rewrite(loc(QStringLiteral("meta/a.txt")), o, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));

        auto d = m_service->details(loc(QStringLiteral("meta/a.txt")), ctx);
        QVERIFY2(d, d ? "" : qPrintable(d.error().toString()));
        QCOMPARE(d->headers.contentType, QStringLiteral("application/x-test"));
        QCOMPARE(d->headers.cacheControl, QStringLiteral("max-age=60"));
        QCOMPARE(d->headers.contentDisposition, QStringLiteral("attachment"));
        QCOMPARE(d->headers.userMetadata.value(QStringLiteral("owner")), QStringLiteral("qa"));
        QVERIFY(!d->headers.userMetadata.contains(QStringLiteral("mtime"))); // replaced, not merged
        QCOMPARE(d->tags.value(QStringLiteral("team")), QStringLiteral("x"));
        QCOMPARE(d->entry.size, 5);
        QVERIFY(!d->lockEnabled);
    }

    void storageClassAndEncryption()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("enc/b.txt"), "bravo");
        OperationContext ctx;
        CopyOverrides o;
        o.storageClass = QStringLiteral("REDUCED_REDUNDANCY");
        auto r = m_service->rewrite(loc(QStringLiteral("enc/b.txt")), o, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(head(QStringLiteral("enc/b.txt")).storageClass, QStringLiteral("REDUCED_REDUNDANCY"));

        if (m_env.kmsKey.isEmpty())
            QSKIP("S3FM_TEST_KMS_KEY not set: the server has no KMS");
        o = {};
        o.encryption = ObjectEncryption{ObjectEncryption::Mode::S3, {}};
        QVERIFY(m_service->rewrite(loc(QStringLiteral("enc/b.txt")), o, ctx));
        QCOMPARE(ObjectEncryption::fromEntry(head(QStringLiteral("enc/b.txt"))).mode,
                 ObjectEncryption::Mode::S3);
        QCOMPARE(head(QStringLiteral("enc/b.txt")).storageClass,
                 QStringLiteral("REDUCED_REDUNDANCY")); // kept

        o.encryption = ObjectEncryption{ObjectEncryption::Mode::Kms, m_env.kmsKey};
        r = m_service->rewrite(loc(QStringLiteral("enc/b.txt")), o, ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        const ObjectEncryption kms = ObjectEncryption::fromEntry(head(QStringLiteral("enc/b.txt")));
        QCOMPARE(kms.mode, ObjectEncryption::Mode::Kms);
        QVERIFY(kms.kmsKeyId.contains(m_env.kmsKey));

        // Encrypted uploads, and downloads of encrypted objects.
        TransferParams params;
        params.sse = QStringLiteral("AES256");
        put(QStringLiteral("enc/up.txt"), "uploaded", {}, &params);
        QCOMPARE(ObjectEncryption::fromEntry(head(QStringLiteral("enc/up.txt"))).mode,
                 ObjectEncryption::Mode::S3);
        const QString back = m_tmp.filePath(QStringLiteral("enc-back.txt"));
        QVERIFY(m_s3->download(loc(QStringLiteral("enc/b.txt")), back, ctx));
        QFile f(back);
        QVERIFY(f.open(QIODevice::ReadOnly));
        QCOMPARE(f.readAll(), QByteArray("bravo"));

        // A server-side copy keeps the KMS encryption.
        QVERIFY(m_s3->copy(loc(QStringLiteral("enc/b.txt")), loc(QStringLiteral("enc/b-copy.txt")), ctx));
        QCOMPARE(ObjectEncryption::fromEntry(head(QStringLiteral("enc/b-copy.txt"))).mode,
                 ObjectEncryption::Mode::Kms);
    }

    void tagsAndAcl()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("t/c.txt"), "charlie");
        const Location l = loc(QStringLiteral("t/c.txt"));
        QMap<QString, QString> tags{{QStringLiteral("a"), QStringLiteral("1")},
                                    {QStringLiteral("b"), QString()}};
        QVERIFY(m_service->setTags(l, tags));
        QCOMPARE(m_service->tags(l).value(), tags);
        QMap<QString, QString> tooMany;
        for (int i = 0; i < 11; ++i)
            tooMany.insert(QString::number(i), QStringLiteral("v"));
        QCOMPARE(m_service->setTags(l, tooMany).error().code, ErrorCode::InvalidArgument);
        QVERIFY(m_service->setTags(l, {}));
        QVERIFY(m_service->tags(l).value().isEmpty());

        auto acl = m_service->acl(l);
        QVERIFY2(acl, acl ? "" : qPrintable(acl.error().toString()));
        QVERIFY(!acl->grants.isEmpty());
        auto set = m_service->setCannedAcl(l, QStringLiteral("private"));
        QVERIFY2(set, set ? "" : qPrintable(set.error().toString()));
        QCOMPARE(m_service->setCannedAcl(l, QStringLiteral("nonsense")).error().code,
                 ErrorCode::InvalidArgument);
    }

    void objectLock()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString bucket = m_env.lockedBucket;
        QVERIFY(m_service->objectLockEnabled(bucket).value());
        put(QStringLiteral("lock/d.txt"), "delta", bucket);
        const Location l = loc(QStringLiteral("lock/d.txt"), bucket);
        const QString version = head(QStringLiteral("lock/d.txt"), bucket).versionId;
        QVERIFY(!version.isEmpty());

        ObjectRetention r;
        r.mode = QStringLiteral("GOVERNANCE");
        r.retainUntil = QDateTime::currentDateTimeUtc().addDays(1);
        auto set = m_service->setRetention(l, r, false);
        QVERIFY2(set, set ? "" : qPrintable(set.error().toString()));
        auto got = m_service->retention(l);
        QVERIFY(got);
        QCOMPARE(got->mode, QStringLiteral("GOVERNANCE"));
        QVERIFY(qAbs(got->retainUntil.secsTo(r.retainUntil)) < 2);
        QVERIFY(m_service->setLegalHold(l, true));
        QVERIFY(m_service->legalHold(l).value());
        OperationContext ctx;
        auto d = m_service->details(l, ctx);
        QVERIFY(d && d->lockEnabled && d->legalHold && d->retention.isSet());

        // Governance retention can only be lifted with the bypass flag.
        QVERIFY(!m_service->setRetention(l, ObjectRetention(), false));
        auto lifted = m_service->setRetention(l, ObjectRetention(), true);
        QVERIFY2(lifted, lifted ? "" : qPrintable(lifted.error().toString()));
        QVERIFY(m_service->setLegalHold(l, false));
        QVERIFY(!m_service->retention(l).value().isSet());

        // Clean up the version (a plain delete would only add a delete marker).
        auto client = m_s3->session().client().value();
        Aws::S3::Model::ListObjectVersionsRequest list;
        list.SetBucket(aws::toAws(bucket));
        list.SetPrefix(aws::toAws(m_prefix));
        auto versions = client->ListObjectVersions(list);
        QVERIFY(versions.IsSuccess());
        for (const auto& v : versions.GetResult().GetVersions()) {
            Aws::S3::Model::DeleteObjectRequest del;
            del.SetBucket(aws::toAws(bucket));
            del.SetKey(v.GetKey());
            del.SetVersionId(v.GetVersionId());
            del.SetBypassGovernanceRetention(true);
            QVERIFY(client->DeleteObject(del).IsSuccess());
        }
        for (const auto& m : versions.GetResult().GetDeleteMarkers()) {
            Aws::S3::Model::DeleteObjectRequest del;
            del.SetBucket(aws::toAws(bucket));
            del.SetKey(m.GetKey());
            del.SetVersionId(m.GetVersionId());
            QVERIFY(client->DeleteObject(del).IsSuccess());
        }
    }

    void presignedUrls()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("p/e.txt"), "echo");
        auto get =
            m_service->presign(loc(QStringLiteral("p/e.txt")), S3ObjectService::PresignMethod::Get, 600);
        QVERIFY2(get, get ? "" : qPrintable(get.error().toString()));
        QVERIFY(!get->limitedByCredentials);
        QVERIFY(qAbs(QDateTime::currentDateTimeUtc().secsTo(get->expires) - 600) < 5);
        auto [status, body] = http(QStringLiteral("GET"), get->url);
        QCOMPARE(status, 200);
        QCOMPARE(body, QByteArray("echo"));

        auto putUrl =
            m_service->presign(loc(QStringLiteral("p/new.txt")), S3ObjectService::PresignMethod::Put, 600);
        QVERIFY(putUrl);
        auto [putStatus, ignored] = http(QStringLiteral("PUT"), putUrl->url, "via presigned put");
        Q_UNUSED(ignored)
        QCOMPARE(putStatus, 200);
        QCOMPARE(head(QStringLiteral("p/new.txt")).size, 17);

        // The 7-day limit is enforced.
        auto longOne = m_service->presign(loc(QStringLiteral("p/e.txt")), S3ObjectService::PresignMethod::Get,
                                          30 * 86400);
        QVERIFY(QDateTime::currentDateTimeUtc().secsTo(longOne->expires) <=
                S3ObjectService::kMaxPresignSeconds);
        QVERIFY(!m_service->presign(loc(QStringLiteral("p/")), S3ObjectService::PresignMethod::Get, 60));
    }

    void checksumsCompareWithLocalFiles()
    {
        S3FM_REQUIRE_S3(m_env);
        const QByteArray small = randomBytes(100000);
        const QString smallFile = m_tmp.filePath(QStringLiteral("small.bin"));
        writeFile(smallFile, small);
        put(QStringLiteral("ck/small.bin"), small);
        OperationContext ctx;
        auto cmp = m_service->compareWithLocal(loc(QStringLiteral("ck/small.bin")), smallFile, ctx);
        QVERIFY2(cmp, cmp ? "" : qPrintable(cmp.error().toString()));
        QVERIFY(cmp->size() >= 1);
        for (const ChecksumComparison& c : cmp.value())
            QVERIFY2(c.matches, qPrintable(c.algorithm + u' ' + c.remote + u' ' + c.local));

        // Multipart: the ETag (and a composite checksum, if stored) need the part size.
        const QByteArray big = randomBytes(11 * MiB);
        const QString bigFile = m_tmp.filePath(QStringLiteral("big.bin"));
        writeFile(bigFile, big);
        TransferParams params;
        params.multipartThreshold = 5 * MiB;
        params.partSize = 5 * MiB;
        put(QStringLiteral("ck/big.bin"), big, {}, &params);
        cmp = m_service->compareWithLocal(loc(QStringLiteral("ck/big.bin")), bigFile, ctx);
        QVERIFY2(cmp, cmp ? "" : qPrintable(cmp.error().toString()));
        bool sawMultipart = false;
        for (const ChecksumComparison& c : cmp.value()) {
            QVERIFY2(c.matches, qPrintable(c.algorithm + u' ' + c.remote + u' ' + c.local));
            sawMultipart = sawMultipart || c.remote.endsWith(QStringLiteral("-3"));
        }
        QVERIFY(sawMultipart);

        // A different file of the same size does not match.
        QByteArray changed = small;
        changed[500] = char(changed[500] ^ 0x5a);
        writeFile(smallFile, changed);
        cmp = m_service->compareWithLocal(loc(QStringLiteral("ck/small.bin")), smallFile, ctx);
        QVERIFY(cmp);
        for (const ChecksumComparison& c : cmp.value())
            QVERIFY(!c.matches);
    }

    void bulkChanges()
    {
        S3FM_REQUIRE_S3(m_env);
        put(QStringLiteral("bulk/1.txt"), "one");
        put(QStringLiteral("bulk/sub/2.txt"), "two");
        put(QStringLiteral("bulk/3.txt"), "three");
        Entry dir;
        dir.type = Entry::Type::Directory;
        dir.name = QStringLiteral("bulk");
        dir.location = loc(QStringLiteral("bulk/"));

        BulkObjectChange change;
        ObjectHeaders h;
        h.cacheControl = QStringLiteral("no-store");
        h.userMetadata = {{QStringLiteral("batch"), QStringLiteral("7")}};
        change.headers = h;
        change.removeUserMetadata = {QStringLiteral("mtime")};
        change.tags = QMap<QString, QString>{{QStringLiteral("bulk"), QStringLiteral("yes")}};
        change.cannedAcl = QStringLiteral("private");
        OperationContext ctx;
        qint64 lastDone = 0;
        ctx.setProgressHandler([&](qint64 done, qint64) { lastDone = done; });
        const auto report = m_service->applyBulk({dir}, change, ctx);
        QCOMPARE(report.objects, 3);
        QCOMPARE(report.done, 3);
        QVERIFY(report.failures.isEmpty());
        QCOMPARE(lastDone, 3);
        for (const QString& key : {QStringLiteral("bulk/1.txt"), QStringLiteral("bulk/sub/2.txt")}) {
            auto d = m_service->details(loc(key), ctx);
            QVERIFY(d);
            QCOMPARE(d->headers.cacheControl, QStringLiteral("no-store"));
            QCOMPARE(d->headers.userMetadata.value(QStringLiteral("batch")), QStringLiteral("7"));
            QVERIFY(!d->headers.userMetadata.contains(QStringLiteral("mtime")));
            QCOMPARE(d->headers.contentType, QStringLiteral("application/octet-stream")); // kept
            QCOMPARE(d->tags.value(QStringLiteral("bulk")), QStringLiteral("yes"));
        }
    }

    void copyKeysWithSpecialCharacters()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = QStringLiteral("special/sp ace+%#?&=ü.txt");
        put(name, "special");
        OperationContext ctx;
        auto r = m_s3->copy(loc(name), loc(QStringLiteral("special/copy of sp ace+%#?.txt")), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QCOMPARE(head(QStringLiteral("special/copy of sp ace+%#?.txt")).size, 7);
    }

    void requesterPaysHeaderIsAccepted()
    {
        S3FM_REQUIRE_S3(m_env);
        ConnectionProfile p = m_env.profile();
        p.requesterPaysBuckets = {QStringLiteral("*")};
        auto payer = makeProvider(p);
        OperationContext ctx;
        const QString file = m_tmp.filePath(QStringLiteral("rp.txt"));
        writeFile(file, "requester pays");
        QVERIFY(payer->upload(file, loc(QStringLiteral("rp/x.txt")), ctx));
        auto page = payer->list(loc(QStringLiteral("rp/")), {}, ctx);
        QVERIFY(page && page->entries.size() == 1);
        QVERIFY(payer->download(loc(QStringLiteral("rp/x.txt")), file + QStringLiteral(".back"), ctx));
        QVERIFY(S3ObjectService(payer).tags(loc(QStringLiteral("rp/x.txt"))));
    }
};

QTEST_GUILESS_MAIN(TestS3ObjectOps)
#include "tst_s3objectops.moc"
