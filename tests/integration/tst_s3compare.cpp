// Content checks of the panel comparison (task 10.2) against MinIO: local files against
// single-part, multipart and SSE-KMS objects, and S3 objects against each other.
//
// Real Amazon S3 instead of MinIO (writes and deletes objects below the prefix):
//   S3FM_TEST_AWS_PROFILE        profile in ~/.aws/config (run `aws sso login` first for SSO)
//   S3FM_TEST_AWS_BUCKET         bucket
//   S3FM_TEST_AWS_WRITE_PREFIX   key prefix the test may write below, e.g. "scratch/"

#include "common/S3TestEnv.h"
#include "core/Compare.h"
#include "core/ProviderRegistry.h"
#include "providers/ContentCompare.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QDir>
#include <QFile>
#include <QRandomGenerator>
#include <QTemporaryDir>
#include <QTest>
#include <QUuid>

#include <cstring>

using namespace s3fm;

namespace {

constexpr qint64 MiB = 1024 * 1024;

QByteArray randomBytes(qint64 n)
{
    QByteArray data(n, Qt::Uninitialized);
    for (qint64 i = 0; i < n; i += 4) {
        const quint32 v = QRandomGenerator::global()->generate();
        std::memcpy(data.data() + i, &v, size_t(qMin<qint64>(4, n - i)));
    }
    return data;
}

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

CompareItems items(const EntryList& entries)
{
    CompareItems out;
    for (const Entry& e : entries)
        out.push_back(CompareItem{e.name, e});
    return out;
}

} // namespace

class TestS3Compare : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    ProviderRegistry m_registry;
    QTemporaryDir m_tmp;
    QString m_prefix;
    QString m_bucket;
    QString m_connection = QStringLiteral("it");
    QString m_kmsKey;
    bool m_available = false;

    Location loc(const QString& rel) const
    {
        return Location::s3(m_connection, m_bucket, m_prefix + rel);
    }
    QString local(const QString& rel) const { return m_tmp.filePath(rel); }

    void upload(const QString& rel, const QByteArray& data, const TransferParams& params = {})
    {
        const QString file = m_tmp.filePath(QStringLiteral("upload.tmp"));
        writeFile(file, data);
        OperationContext ctx;
        ctx.setParams(&params);
        auto r = m_s3->upload(file, loc(rel), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
        QFile::remove(file);
    }

    // Marks of the left side after comparing local folder `dir` with S3 folder `prefix`.
    QHash<QString, CompareMark> compareLocalWithS3(const QString& dir, const QString& prefix)
    {
        OperationContext ctx;
        auto l = m_registry.providerFor(Location::local(local(dir)))->listAll(Location::local(local(dir)), ctx);
        auto r = m_s3->listAll(loc(prefix), ctx);
        if (!l || !r)
            return {};
        auto result =
            compareListings(items(l.value()), items(r.value()), {}, makeContentComparer(&m_registry), ctx);
        return result ? result.value().left : QHash<QString, CompareMark>{};
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        const QString awsProfile = qEnvironmentVariable("S3FM_TEST_AWS_PROFILE");
        const QString awsBucket = qEnvironmentVariable("S3FM_TEST_AWS_BUCKET");
        const QString awsPrefix = qEnvironmentVariable("S3FM_TEST_AWS_WRITE_PREFIX");
        QString base;
        if (!awsProfile.isEmpty() && !awsBucket.isEmpty() && !awsPrefix.isEmpty()) {
            ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
            p.id = m_connection = QStringLiteral("aws");
            p.credentialSource = ConnectionProfile::CredentialSource::AwsProfile;
            p.awsProfile = awsProfile;
            p.connectTimeoutMs = 5000;
            p.requestTimeoutMs = 30000;
            m_s3 = std::make_shared<S3Provider>(std::make_shared<S3Session>(p, nullptr));
            m_bucket = awsBucket;
            base = awsPrefix.endsWith(u'/') ? awsPrefix : awsPrefix + u'/';
            m_kmsKey = QStringLiteral("aws/s3"); // AWS managed key
            qInfo() << "Real S3:" << m_bucket << base;
        } else if (m_env.available()) {
            const QString secret = m_env.secretKey;
            auto session = std::make_shared<S3Session>(
                m_env.profile(), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
            m_s3 = std::make_shared<S3Provider>(session);
            m_bucket = m_env.bucket;
            m_kmsKey = m_env.kmsKey;
        } else {
            return;
        }
        m_available = true;
        m_s3->setCacheTtlMs(0);
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory([this](const QString&) -> std::shared_ptr<Provider> { return m_s3; });
        m_prefix = base + QStringLiteral("s3fm-cmp-%1/").arg(QUuid::createUuid().toString(QUuid::Id128).left(10));
    }

    void cleanupTestCase()
    {
        if (m_available) {
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

    void localAgainstS3()
    {
        if (!m_available)
            QSKIP("S3FM_TEST_ENDPOINT not set (run: eval \"$(scripts/dev-minio.sh env)\")");
        const QByteArray big = randomBytes(12 * MiB + 5);
        QByteArray bigChanged = big;
        bigChanged[7 * MiB] = char(bigChanged[7 * MiB] ^ 1);
        TransferParams multipart;
        multipart.multipartThreshold = 5 * MiB;
        multipart.partSize = 5 * MiB;

        upload(QStringLiteral("l/same.txt"), "alpha");
        upload(QStringLiteral("l/changed.txt"), "alpha");
        upload(QStringLiteral("l/big.bin"), big, multipart);
        upload(QStringLiteral("l/big-changed.bin"), big, multipart);
        writeFile(local(QStringLiteral("l/same.txt")), "alpha");
        writeFile(local(QStringLiteral("l/changed.txt")), "omega");
        writeFile(local(QStringLiteral("l/big.bin")), big);
        writeFile(local(QStringLiteral("l/big-changed.bin")), bigChanged);
        QVERIFY(m_s3->stat(loc(QStringLiteral("l/big.bin")), *std::make_unique<OperationContext>())
                    .value()
                    .etag.endsWith(QStringLiteral("-3")));

        const QHash<QString, CompareMark> m = compareLocalWithS3(QStringLiteral("l"), QStringLiteral("l/"));
        QCOMPARE(m.size(), 4);
        QCOMPARE(m.value(QStringLiteral("same.txt")).content, ContentVerdict::Same);
        QCOMPARE(m.value(QStringLiteral("same.txt")).state, CompareState::Same);
        QCOMPARE(m.value(QStringLiteral("changed.txt")).content, ContentVerdict::Different);
        QVERIFY(m.value(QStringLiteral("changed.txt")).isSelectable());
        // Multipart: the part size comes from the object, so the ETag is recomputed exactly.
        QCOMPARE(m.value(QStringLiteral("big.bin")).content, ContentVerdict::Same);
        QCOMPARE(m.value(QStringLiteral("big-changed.bin")).content, ContentVerdict::Different);
    }

    void localAgainstKmsObject()
    {
        if (!m_available)
            QSKIP("S3FM_TEST_ENDPOINT not set (run: eval \"$(scripts/dev-minio.sh env)\")");
        if (m_kmsKey.isEmpty())
            QSKIP("S3FM_TEST_KMS_KEY not set: the server has no KMS");
        TransferParams kms;
        kms.sse = QStringLiteral("aws:kms");
        kms.sseKmsKeyId = m_kmsKey == u"aws/s3" ? QString() : m_kmsKey;
        upload(QStringLiteral("k/same.txt"), "secret");
        upload(QStringLiteral("k/kms-same.txt"), "secret", kms);
        upload(QStringLiteral("k/kms-changed.txt"), "secret", kms);
        writeFile(local(QStringLiteral("k/same.txt")), "secret");
        writeFile(local(QStringLiteral("k/kms-same.txt")), "secret");
        writeFile(local(QStringLiteral("k/kms-changed.txt")), "public");

        const QHash<QString, CompareMark> m = compareLocalWithS3(QStringLiteral("k"), QStringLiteral("k/"));
        QCOMPARE(m.value(QStringLiteral("same.txt")).content, ContentVerdict::Same);
        // The ETag of an SSE-KMS object is no MD5 sum: never "different" because of it.
        const CompareMark same = m.value(QStringLiteral("kms-same.txt"));
        const CompareMark changed = m.value(QStringLiteral("kms-changed.txt"));
        qInfo() << "KMS same:" << int(same.content) << same.note;
        qInfo() << "KMS changed:" << int(changed.content) << changed.note;
        QVERIFY(same.content == ContentVerdict::Same || same.content == ContentVerdict::Unknown);
        QVERIFY(changed.content != ContentVerdict::Same);
    }

    void s3AgainstS3()
    {
        if (!m_available)
            QSKIP("S3FM_TEST_ENDPOINT not set (run: eval \"$(scripts/dev-minio.sh env)\")");
        const QByteArray big = randomBytes(11 * MiB);
        TransferParams multipart;
        multipart.multipartThreshold = 5 * MiB;
        multipart.partSize = 5 * MiB;
        TransferParams otherParts = multipart;
        otherParts.partSize = 6 * MiB;
        upload(QStringLiteral("a/same.txt"), "alpha");
        upload(QStringLiteral("b/same.txt"), "alpha");
        upload(QStringLiteral("a/changed.txt"), "alpha");
        upload(QStringLiteral("b/changed.txt"), "omega");
        upload(QStringLiteral("a/big.bin"), big, multipart);
        upload(QStringLiteral("b/big.bin"), big, multipart);
        upload(QStringLiteral("a/parts.bin"), big, multipart);
        upload(QStringLiteral("b/parts.bin"), big, otherParts);

        OperationContext ctx;
        auto l = m_s3->listAll(loc(QStringLiteral("a/")), ctx);
        auto r = m_s3->listAll(loc(QStringLiteral("b/")), ctx);
        QVERIFY(l && r);
        auto result =
            compareListings(items(l.value()), items(r.value()), {}, makeContentComparer(&m_registry), ctx);
        QVERIFY(result);
        const QHash<QString, CompareMark>& m = result.value().left;
        QCOMPARE(m.value(QStringLiteral("same.txt")).content, ContentVerdict::Same);
        QCOMPARE(m.value(QStringLiteral("changed.txt")).content, ContentVerdict::Different);
        QCOMPARE(m.value(QStringLiteral("big.bin")).content, ContentVerdict::Same);
        // Different part sizes give different ETags; without stored full-object checksums the
        // content cannot be told.
        const CompareMark parts = m.value(QStringLiteral("parts.bin"));
        qInfo() << "parts:" << int(parts.content) << parts.note;
        QVERIFY(parts.content == ContentVerdict::Same || parts.content == ContentVerdict::Unknown);
    }
};

QTEST_GUILESS_MAIN(TestS3Compare)
#include "tst_s3compare.moc"
