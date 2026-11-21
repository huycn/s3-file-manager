#include "connections/AddressResolver.h"
#include "providers/s3/S3Provider.h"

#include <QTest>

using namespace s3fm;

class TestAddressResolver : public QObject
{
    Q_OBJECT

private:
    QList<ConnectionProfile> m_profiles;

private Q_SLOTS:
    void initTestCase()
    {
        ConnectionProfile aws = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        aws.id = QStringLiteral("aws");
        ConnectionProfile minio = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        minio.id = QStringLiteral("minio");
        minio.endpoint = QStringLiteral("http://localhost:9000");
        ConnectionProfile wasabi = ConnectionProfile::fromPreset(ConnectionProfile::Preset::Wasabi);
        wasabi.id = QStringLiteral("wasabi");
        m_profiles = {minio, aws, wasabi};
    }

    void resolve_data()
    {
        QTest::addColumn<QString>("text");
        QTest::addColumn<QString>("current");
        QTest::addColumn<QString>("expected");
        QTest::newRow("connection-uri") << "s3://minio/b/k" << "/home" << "s3://minio/b/k";
        QTest::newRow("root") << "s3://" << "/home" << "s3://";
        QTest::newRow("bucket-uri-current-conn")
            << "s3://mybucket/dir/" << "s3://minio/x/" << "s3://minio/mybucket/dir/";
        QTest::newRow("bucket-uri-default-aws")
            << "s3://mybucket/a.txt" << "/home" << "s3://aws/mybucket/a.txt";
        QTest::newRow("aws-virtual") << "https://my-bucket.s3.eu-west-1.amazonaws.com/path/to/f%20x.txt"
                                     << "/home"
                                     << "s3://aws/my-bucket/path/to/f x.txt";
        QTest::newRow("aws-virtual-global")
            << "https://bkt.s3.amazonaws.com/k" << "/home" << "s3://aws/bkt/k";
        QTest::newRow("aws-path") << "https://s3.us-east-2.amazonaws.com/bkt/k/" << "/home"
                                  << "s3://aws/bkt/k/";
        QTest::newRow("aws-dotted-bucket")
            << "https://my.dotted.bucket.s3.us-west-2.amazonaws.com/k" << "/home"
            << "s3://aws/my.dotted.bucket/k";
        QTest::newRow("endpoint-path") << "http://localhost:9000/s3fm-test/docs/guide.md" << "/home"
                                       << "s3://minio/s3fm-test/docs/guide.md";
        QTest::newRow("endpoint-virtual") << "https://media.s3.us-east-1.wasabisys.com/img.png" << "/home"
                                          << "s3://wasabi/media/img.png";
        QTest::newRow("local") << "/tmp" << "s3://minio/" << "file:///tmp";
        QTest::newRow("unknown-http") << "https://example.com/x" << "/home" << "";
        QTest::newRow("wrong-port") << "http://localhost:9999/b/k" << "/home" << "";
    }

    void resolve()
    {
        QFETCH(QString, text);
        QFETCH(QString, current);
        QFETCH(QString, expected);
#ifdef Q_OS_WIN
        if (expected.startsWith(QStringLiteral("file:")))
            QSKIP("Unix path");
#endif
        const Location l = resolveAddress(text, Location::fromString(current), m_profiles);
        QCOMPARE(l.toString(), expected);
    }

    void noAwsConnection()
    {
        QList<ConnectionProfile> onlyMinio = {m_profiles.first()};
        QVERIFY(!resolveAddress(QStringLiteral("https://b.s3.amazonaws.com/k"), {}, onlyMinio).isValid());
        // Bare bucket falls back to the only connection.
        QCOMPARE(resolveAddress(QStringLiteral("s3://b/k"), {}, onlyMinio).toString(),
                 QStringLiteral("s3://minio/b/k"));
        QVERIFY(!resolveAddress(QStringLiteral("s3://b/k"), {}, {}).isValid());
    }

    void partSizes()
    {
        constexpr qint64 MiB = 1024 * 1024;
        QCOMPARE(S3Provider::partSizeFor(100 * MiB, 16 * MiB), 16 * MiB);
        QCOMPARE(S3Provider::partSizeFor(100 * MiB, 1 * MiB), 5 * MiB); // S3 minimum
        // 1 TiB with 16 MiB parts would need 65536 parts: grow to stay <= 10000.
        const qint64 tib = 1024LL * 1024 * MiB;
        const qint64 part = S3Provider::partSizeFor(tib, 16 * MiB);
        QVERIFY((tib + part - 1) / part <= 10000);
        QCOMPARE(part % MiB, 0);
        // 5 TiB (S3 max object size) still fits.
        const qint64 max = 5 * tib;
        const qint64 maxPart = S3Provider::partSizeFor(max, 16 * MiB);
        QVERIFY((max + maxPart - 1) / maxPart <= 10000);
    }
};

QTEST_GUILESS_MAIN(TestAddressResolver)
#include "tst_addressresolver.moc"
