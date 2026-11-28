// Bucket region discovery and redirect handling against real Amazon S3 (task 4.2).
// MinIO has a single region, so this uses a public AWS Open Data bucket in
// eu-central-1 with anonymous requests: no account or credentials needed.
// Opt-in, as it needs internet access: set S3FM_TEST_AWS_PUBLIC=1.

#include "core/OperationContext.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QFile>
#include <QTemporaryDir>
#include <QTest>

#include <memory>

using namespace s3fm;

namespace {

const QString kBucket = QStringLiteral("copernicus-dem-30m");
const QString kBucketRegion = QStringLiteral("eu-central-1");
const QString kDir = QStringLiteral("Copernicus_DSM_COG_10_N00_00_E006_00_DEM/AUXFILES/");
const QString kFile = kDir + QStringLiteral("Copernicus_DSM_10_N00_00_E006_00_ACM.kml");
constexpr qint64 kFileSize = 732;

} // namespace

class TestAwsRegions : public QObject
{
    Q_OBJECT

    std::unique_ptr<AwsSdkGuard> m_sdk;

    static std::shared_ptr<S3Session> session(const QString& region)
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        p.id = QStringLiteral("aws");
        p.region = region;
        p.credentialSource = ConnectionProfile::CredentialSource::Anonymous;
        p.connectTimeoutMs = 5000;
        p.requestTimeoutMs = 20000;
        return std::make_shared<S3Session>(p, nullptr);
    }

    static Location at(const QString& key) { return Location::s3(QStringLiteral("aws"), kBucket, key); }

    // Lists kDir, stats and downloads kFile: every call must work despite the region.
    static void browse(S3Provider& provider)
    {
        OperationContext ctx;
        auto page = provider.list(at(kDir), {}, ctx);
        QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
        bool found = false;
        for (const Entry& e : page.value().entries)
            found = found || e.location.key() == kFile;
        QVERIFY(found);

        provider.invalidateCache(at(kDir));
        auto entry = provider.stat(at(kFile), ctx);
        QVERIFY2(entry, entry ? "" : qPrintable(entry.error().toString()));
        QCOMPARE(entry.value().size, kFileSize);

        QTemporaryDir dir;
        const QString local = dir.filePath(QStringLiteral("file.kml"));
        auto downloaded = provider.download(at(kFile), local, ctx);
        QVERIFY2(downloaded, downloaded ? "" : qPrintable(downloaded.error().toString()));
        QCOMPARE(QFile(local).size(), kFileSize);
    }

private slots:
    void initTestCase()
    {
        if (qEnvironmentVariable("S3FM_TEST_AWS_PUBLIC") != u"1")
            QSKIP("Needs internet access to Amazon S3: set S3FM_TEST_AWS_PUBLIC=1");
        m_sdk = std::make_unique<AwsSdkGuard>();
    }

    void cleanupTestCase() { m_sdk.reset(); }

    // The connection's regional endpoint answers 301 PermanentRedirect; HeadBucket's
    // x-amz-bucket-region header gives the real region before the first request.
    void discoversRegionFromOtherRegion_data()
    {
        QTest::addColumn<QString>("connectionRegion");
        QTest::newRow("ap-southeast-2") << QStringLiteral("ap-southeast-2");
        QTest::newRow("us-east-1 (global endpoint)") << QStringLiteral("us-east-1");
    }

    void discoversRegionFromOtherRegion()
    {
        QFETCH(QString, connectionRegion);
        auto s = session(connectionRegion);
        S3Provider provider(s);
        browse(provider);
        QCOMPARE(s->bucketRegion(kBucket), kBucketRegion);
    }

    // A wrongly cached region (bucket moved, or a bad guess) is corrected on the first
    // redirect for list (GET with an XML error), stat (HEAD: no body, only the 301)
    // and download.
    void recoversFromStaleRegion()
    {
        auto s = session(QStringLiteral("ap-southeast-2"));
        S3Provider provider(s);
        OperationContext ctx;

        s->rememberBucketRegion(kBucket, QStringLiteral("ap-southeast-2"));
        auto page = provider.list(at(kDir), {}, ctx);
        QVERIFY2(page, page ? "" : qPrintable(page.error().toString()));
        QCOMPARE(s->bucketRegion(kBucket), kBucketRegion);

        s->rememberBucketRegion(kBucket, QStringLiteral("ap-southeast-2"));
        auto entry = provider.stat(at(kFile), ctx);
        QVERIFY2(entry, entry ? "" : qPrintable(entry.error().toString()));
        QCOMPARE(s->bucketRegion(kBucket), kBucketRegion);

        s->rememberBucketRegion(kBucket, QStringLiteral("ap-southeast-2"));
        QTemporaryDir dir;
        auto downloaded = provider.download(at(kFile), dir.filePath(QStringLiteral("f")), ctx);
        QVERIFY2(downloaded, downloaded ? "" : qPrintable(downloaded.error().toString()));
        QCOMPARE(s->bucketRegion(kBucket), kBucketRegion);
    }

    void missingBucket()
    {
        auto s = session(QStringLiteral("ap-southeast-2"));
        S3Provider provider(s);
        OperationContext ctx;
        const QString bucket = QStringLiteral("s3fm-no-such-bucket-%1").arg(QDateTime::currentMSecsSinceEpoch());
        auto page = provider.list(Location::s3(QStringLiteral("aws"), bucket, {}), {}, ctx);
        QVERIFY(!page);
        QCOMPARE(page.error().code, ErrorCode::NotFound);
    }
};

QTEST_GUILESS_MAIN(TestAwsRegions)
#include "tst_awsregions.moc"
