// Object-level S3 logic without a server: request building for AWS-only
// behaviour (storage classes, SSE-KMS, SSE-C, requester pays), SSE-C keys,
// checksums, tag/metadata validation and the related connection settings.

#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/Checksums.h"
#include "providers/s3/S3Errors.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Requests.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3Types.h"
#include "providers/s3/S3VersionService.h"
#include "transfer/TransferMath.h"

#include <QCryptographicHash>
#include <QFile>
#include <QSettings>
#include <QTemporaryDir>
#include <QTest>
#include <QTimeZone>

#include <aws/s3/model/CopyObjectRequest.h>
#include <aws/s3/model/CreateMultipartUploadRequest.h>
#include <aws/s3/model/GetObjectRequest.h>
#include <aws/s3/model/HeadBucketRequest.h>
#include <aws/s3/model/PutObjectRequest.h>

using namespace s3fm;
namespace Model = Aws::S3::Model;

namespace {

Entry objectWith(const QMap<QString, QString>& metadata, const QString& storageClass = {})
{
    Entry e;
    e.name = QStringLiteral("o");
    e.metadata = metadata;
    e.storageClass = storageClass;
    return e;
}

QString str(const Aws::String& s)
{
    return aws::fromAws(s);
}

} // namespace

class TestS3Objects : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void customerKeys()
    {
        const QByteArray raw(32, '\x01');
        const SseCustomerKey fromB64 = SseCustomerKey::fromText(QString::fromLatin1(raw.toBase64()));
        QVERIFY(fromB64.isValid());
        QCOMPARE(fromB64.key, raw);
        const SseCustomerKey fromHex = SseCustomerKey::fromText(QString::fromLatin1(raw.toHex()));
        QCOMPARE(fromHex.key, raw);
        QVERIFY(!SseCustomerKey::fromText(QStringLiteral("too short")).isValid());
        QVERIFY(!SseCustomerKey::fromText(QString::fromLatin1(QByteArray(16, 'x').toBase64())).isValid());
        QCOMPARE(fromB64.keyMd5Base64(),
                 QString::fromLatin1(QCryptographicHash::hash(raw, QCryptographicHash::Md5).toBase64()));
        const SseCustomerKey a = SseCustomerKey::generate();
        const SseCustomerKey b = SseCustomerKey::generate();
        QVERIFY(a.isValid());
        QVERIFY(a.key != b.key);
    }

    void attributesFromHeadObject()
    {
        const Entry e =
            objectWith({{QStringLiteral("Content-Type"), QStringLiteral("text/plain")},
                        {QStringLiteral("Cache-Control"), QStringLiteral("no-cache")},
                        {QStringLiteral("x-amz-meta-Owner"), QStringLiteral("me")},
                        {QStringLiteral("x-amz-server-side-encryption"), QStringLiteral("aws:kms")},
                        {QStringLiteral("x-amz-server-side-encryption-aws-kms-key-id"),
                         QStringLiteral("arn:aws:kms:eu-west-1:1:key/abc")}});
        const ObjectHeaders h = ObjectHeaders::fromEntry(e);
        QCOMPARE(h.contentType, QStringLiteral("text/plain"));
        QCOMPARE(h.cacheControl, QStringLiteral("no-cache"));
        QCOMPARE(h.userMetadata.value(QStringLiteral("owner")), QStringLiteral("me"));
        const ObjectEncryption enc = ObjectEncryption::fromEntry(e);
        QCOMPARE(enc.mode, ObjectEncryption::Mode::Kms);
        QCOMPARE(enc.kmsKeyId, QStringLiteral("arn:aws:kms:eu-west-1:1:key/abc"));
        QCOMPARE(ObjectEncryption::fromEntry(
                     objectWith({{QStringLiteral("x-amz-server-side-encryption"), QStringLiteral("AES256")}}))
                     .mode,
                 ObjectEncryption::Mode::S3);
        QCOMPARE(ObjectEncryption::fromEntry(
                     objectWith({{QStringLiteral("x-amz-server-side-encryption-customer-algorithm"),
                                  QStringLiteral("AES256")}}))
                     .mode,
                 ObjectEncryption::Mode::Customer);
        QCOMPARE(ObjectEncryption::fromEntry(objectWith({})).mode, ObjectEncryption::Mode::None);
    }

    void copyKeepsStorageClassAndKmsKey()
    {
        // Glacier + SSE-KMS source, nothing overridden: both must be restated, since
        // CopyObject would otherwise fall back to STANDARD and the bucket default key.
        const Entry src = objectWith(
            {{QStringLiteral("x-amz-server-side-encryption"), QStringLiteral("aws:kms")},
             {QStringLiteral("x-amz-server-side-encryption-aws-kms-key-id"), QStringLiteral("key-1")}},
            QStringLiteral("GLACIER"));
        const aws::CopyPlan plan = aws::planCopy(src, {});
        Model::CopyObjectRequest req;
        QVERIFY(aws::applyCopyPlan(req, plan, nullptr, nullptr));
        QCOMPARE(req.GetStorageClass(), Model::StorageClass::GLACIER);
        QCOMPARE(req.GetServerSideEncryption(), Model::ServerSideEncryption::aws_kms);
        QCOMPARE(str(req.GetSSEKMSKeyId()), QStringLiteral("key-1"));
        QVERIFY(!req.MetadataDirectiveHasBeenSet()); // COPY: metadata travels with the object

        // STANDARD stays implicit.
        Model::CopyObjectRequest plain;
        QVERIFY(aws::applyCopyPlan(plain, aws::planCopy(objectWith({}, QStringLiteral("STANDARD")), {}),
                                   nullptr, nullptr));
        QVERIFY(!plain.StorageClassHasBeenSet());
        QVERIFY(!plain.ServerSideEncryptionHasBeenSet());
    }

    void copyOverridesReplaceHeaders()
    {
        const Entry src = objectWith({{QStringLiteral("Content-Type"), QStringLiteral("text/plain")},
                                      {QStringLiteral("x-amz-meta-a"), QStringLiteral("1")}});
        CopyOverrides o;
        ObjectHeaders h;
        h.contentType = QStringLiteral("application/json");
        h.cacheControl = QStringLiteral("max-age=60");
        h.expires = QStringLiteral("Wed, 21 Oct 2026 07:28:00 GMT");
        h.userMetadata = {{QStringLiteral("b"), QStringLiteral("2")}};
        o.headers = h;
        o.storageClass = QStringLiteral("DEEP_ARCHIVE");
        o.encryption = ObjectEncryption{ObjectEncryption::Mode::S3, {}};
        Model::CopyObjectRequest req;
        QVERIFY(aws::applyCopyPlan(req, aws::planCopy(src, o), nullptr, nullptr));
        QCOMPARE(req.GetMetadataDirective(), Model::MetadataDirective::REPLACE);
        QCOMPARE(str(req.GetContentType()), QStringLiteral("application/json"));
        QCOMPARE(str(req.GetCacheControl()), QStringLiteral("max-age=60"));
        QVERIFY(req.ExpiresHasBeenSet());
        QCOMPARE(req.GetMetadata().size(), size_t(1));
        QCOMPARE(str(req.GetMetadata().at("b")), QStringLiteral("2"));
        QCOMPARE(req.GetStorageClass(), Model::StorageClass::DEEP_ARCHIVE);
        QCOMPARE(req.GetServerSideEncryption(), Model::ServerSideEncryption::AES256);

        // Multipart copies state the source's headers explicitly.
        Model::CreateMultipartUploadRequest create;
        QVERIFY(aws::applyCopyPlan(create, aws::planCopy(src, {}), nullptr, nullptr));
        QCOMPARE(str(create.GetContentType()), QStringLiteral("text/plain"));
        QCOMPARE(str(create.GetMetadata().at("a")), QStringLiteral("1"));
    }

    void copySourceHeaderIsSentAsGiven()
    {
        // The SDK would percent-encode "?versionId=" away (and double-encode keys).
        aws::CopyObjectRequest req;
        req.SetBucket("b");
        req.SetKey("k");
        req.SetRawCopySource("src/a%20b%2B.txt?versionId=v1");
        QVERIFY(req.CopySourceHasBeenSet());
        QCOMPARE(str(req.GetHeaders().at("x-amz-copy-source")),
                 QStringLiteral("src/a%20b%2B.txt?versionId=v1"));
        aws::UploadPartCopyRequest part;
        part.SetRawCopySource("src/k?versionId=v2");
        QCOMPARE(str(part.GetHeaders().at("x-amz-copy-source")), QStringLiteral("src/k?versionId=v2"));
    }

    void customerKeyHeaders()
    {
        const SseCustomerKey key = SseCustomerKey::generate();
        const Entry src = objectWith(
            {{QStringLiteral("x-amz-server-side-encryption-customer-algorithm"), QStringLiteral("AES256")}});
        Model::CopyObjectRequest req;
        QVERIFY(aws::applyCopyPlan(req, aws::planCopy(src, {}), &key, &key));
        QCOMPARE(str(req.GetCopySourceSSECustomerAlgorithm()), QStringLiteral("AES256"));
        QCOMPARE(str(req.GetCopySourceSSECustomerKey()), key.keyBase64());
        QCOMPARE(str(req.GetSSECustomerKey()), key.keyBase64());
        QCOMPARE(str(req.GetSSECustomerKeyMD5()), key.keyMd5Base64());

        // SSE-C without a key is refused.
        Model::PutObjectRequest put;
        QVERIFY(!aws::setEncryption(put, ObjectEncryption{ObjectEncryption::Mode::Customer, {}}, nullptr));
        QVERIFY(aws::setEncryption(
            put, ObjectEncryption{ObjectEncryption::Mode::Kms, QStringLiteral("alias/x")}, nullptr));
        QCOMPARE(str(put.GetSSEKMSKeyId()), QStringLiteral("alias/x"));
    }

    void requesterPays()
    {
        ConnectionProfile p;
        QVERIFY(!p.requesterPays(QStringLiteral("b")));
        p.requesterPaysBuckets = {QStringLiteral("b")};
        QVERIFY(p.requesterPays(QStringLiteral("b")));
        QVERIFY(!p.requesterPays(QStringLiteral("c")));
        p.requesterPaysBuckets = {QStringLiteral("*")};
        QVERIFY(p.requesterPays(QStringLiteral("c")));

        Model::GetObjectRequest get;
        aws::setRequesterPays(get, true);
        QCOMPARE(get.GetRequestPayer(), Model::RequestPayer::requester);
        Model::HeadBucketRequest head; // has no request-payer field: compiles to nothing
        aws::setRequesterPays(head, true);

        QTemporaryDir dir;
        QSettings s(dir.filePath(QStringLiteral("p.ini")), QSettings::IniFormat);
        p.id = QStringLiteral("x");
        p.requesterPaysBuckets = {QStringLiteral("b1"), QStringLiteral("b2")};
        p.save(s);
        QCOMPARE(ConnectionProfile::load(s).requesterPaysBuckets, p.requesterPaysBuckets);
    }

    void customerKeysInTheStore()
    {
        QTemporaryDir dir;
        auto secrets = std::make_shared<MemorySecretStore>();
        ConnectionStore store(secrets, dir.filePath(QStringLiteral("c.ini")));
        QVERIFY(!store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("b")));
        const SseCustomerKey all = SseCustomerKey::generate();
        const SseCustomerKey one = SseCustomerKey::generate();
        QVERIFY(store.setSseCustomerKey(QStringLiteral("c"), QStringLiteral("*"), all));
        QCOMPARE(store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("b"))->key, all.key);
        QVERIFY(store.setSseCustomerKey(QStringLiteral("c"), QStringLiteral("b"), one));
        QCOMPARE(store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("b"))->key, one.key);
        QCOMPARE(store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("other"))->key, all.key);
        QVERIFY(store.setSseCustomerKey(QStringLiteral("c"), QStringLiteral("b"), std::nullopt));
        QCOMPARE(store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("b"))->key, all.key);
        // Keys live in the secret store, not in the settings file.
        QVERIFY(secrets->read(QStringLiteral("sse-c:c/*")));
    }

    void validation()
    {
        QMap<QString, QString> tags;
        for (int i = 0; i < 10; ++i)
            tags.insert(QStringLiteral("k%1").arg(i), QStringLiteral("v"));
        QVERIFY(validateTags(tags).isEmpty());
        tags.insert(QStringLiteral("k10"), QStringLiteral("v"));
        QVERIFY(!validateTags(tags).isEmpty());
        QVERIFY(!validateTags({{QString(129, u'k'), QString()}}).isEmpty());
        QVERIFY(!validateTags({{QStringLiteral("k"), QString(257, u'v')}}).isEmpty());
        QVERIFY(!validateTags({{QStringLiteral("aws:x"), QStringLiteral("v")}}).isEmpty());
        QVERIFY(isValidMetadataKey(QStringLiteral("my-key_1.x")));
        QVERIFY(!isValidMetadataKey(QStringLiteral("has space")));
        QVERIFY(!isValidMetadataKey(QString()));
        QVERIFY(isArchiveStorageClass(QStringLiteral("DEEP_ARCHIVE")));
        QVERIFY(!isArchiveStorageClass(QStringLiteral("GLACIER_IR")));
    }

    void checksums()
    {
        QTemporaryDir dir;
        const QString file = dir.filePath(QStringLiteral("hello.txt"));
        {
            QFile f(file);
            QVERIFY(f.open(QIODevice::WriteOnly));
            f.write("hello world");
        }
        using checksums::Algorithm;
        // Reference values (crc32 of "hello world" = 0x0d4a1185).
        QCOMPARE(checksums::objectValue(file, Algorithm::CRC32), QStringLiteral("DUoRhQ=="));
        QCOMPARE(checksums::objectValue(file, Algorithm::SHA256),
                 QString::fromLatin1(
                     QCryptographicHash::hash("hello world", QCryptographicHash::Sha256).toBase64()));
        QCOMPARE(
            checksums::objectValue(file, Algorithm::MD5),
            QString::fromLatin1(QCryptographicHash::hash("hello world", QCryptographicHash::Md5).toHex()));
        QCOMPARE(checksums::objectValue(file, Algorithm::CRC32C).size(), 8);
        QCOMPARE(checksums::objectValue(file, Algorithm::CRC64NVME).size(), 12);

        // Composite over parts of 4 bytes: "hell", "o wo", "rld".
        const QByteArray parts[] = {"hell", "o wo", "rld"};
        QList<QByteArray> md5s;
        QByteArray shas;
        for (const QByteArray& p : parts) {
            md5s.push_back(QCryptographicHash::hash(p, QCryptographicHash::Md5));
            shas += QCryptographicHash::hash(p, QCryptographicHash::Sha256);
        }
        QCOMPARE(checksums::objectValue(file, Algorithm::MD5, 4), transfer::multipartEtag(md5s));
        QCOMPARE(checksums::objectValue(file, Algorithm::SHA256, 4),
                 QString::fromLatin1(QCryptographicHash::hash(shas, QCryptographicHash::Sha256).toBase64()) +
                     QStringLiteral("-3"));
        QCOMPARE(checksums::fromName(QStringLiteral("crc64nvme")), Algorithm::CRC64NVME);
        QVERIFY(!checksums::fromName(QStringLiteral("nope")));
    }

    void archiveRestoreStatus()
    {
        RestoreStatus s = RestoreStatus::parse(QStringLiteral("GLACIER"), {});
        QVERIFY(s.archived && !s.inProgress && !s.expires.isValid() && !s.readable());
        s = RestoreStatus::parse(QStringLiteral("DEEP_ARCHIVE"), QStringLiteral("ongoing-request=\"true\""));
        QVERIFY(s.archived && s.inProgress && !s.readable());
        s = RestoreStatus::parse(
            QStringLiteral("GLACIER"),
            QStringLiteral("ongoing-request=\"false\", expiry-date=\"Fri, 21 Dec 2012 00:00:00 GMT\""));
        QVERIFY(s.archived && !s.inProgress && s.readable());
        QCOMPARE(s.expires, QDateTime(QDate(2012, 12, 21), QTime(0, 0), QTimeZone::UTC));
        QVERIFY(!s.describe().isEmpty());
        s = RestoreStatus::parse(QStringLiteral("INTELLIGENT_TIERING"), {},
                                 QStringLiteral("DEEP_ARCHIVE_ACCESS"));
        QVERIFY(s.archived);
        QVERIFY(!RestoreStatus::parse(QStringLiteral("GLACIER_IR"), {}).archived); // instant retrieval
        Entry head;
        head.storageClass = QStringLiteral("GLACIER");
        head.metadata.insert(QStringLiteral("x-amz-restore"), QStringLiteral("ongoing-request=\"true\""));
        QVERIFY(RestoreStatus::fromEntry(head).inProgress);
    }

    void archivedObjectErrors()
    {
        // GetObject on an archived object: 403 InvalidObjectState must not read as "access denied".
        Aws::Client::AWSError<Aws::S3::S3Errors> err(
            Aws::S3::S3Errors::UNKNOWN, "InvalidObjectState",
            "The operation is not valid for the object's storage class", false);
        err.SetResponseCode(Aws::Http::HttpResponseCode::FORBIDDEN);
        const Error e = aws::toError(err);
        QCOMPARE(e.code, ErrorCode::Conflict);
        QVERIFY(e.message.contains(QStringLiteral("restore")));
        QVERIFY(!e.retryable);
    }

    void restoreRequestValidation()
    {
        AwsSdkGuard sdk;
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        p.id = QStringLiteral("x");
        p.endpoint = QStringLiteral("http://127.0.0.1:1"); // never contacted
        auto provider = std::make_shared<S3Provider>(std::make_shared<S3Session>(p, nullptr));
        S3VersionService service(provider);
        const Location l = Location::s3(QStringLiteral("x"), QStringLiteral("b"), QStringLiteral("k"));
        QCOMPARE(service.requestRestore(l, 1, QStringLiteral("Fastest")).error().code,
                 ErrorCode::InvalidArgument);
        QCOMPARE(service.requestRestore(l, 0, QStringLiteral("Bulk")).error().code,
                 ErrorCode::InvalidArgument);
        Entry noVersion;
        noVersion.location = l;
        OperationContext ctx;
        QCOMPARE(service.deleteVersions({noVersion}, false, ctx).error().code, ErrorCode::InvalidArgument);
    }
};

QTEST_GUILESS_MAIN(TestS3Objects)
#include "tst_s3objects.moc"
