#include "connections/S3Urls.h"

#include <QTest>

using namespace s3fm;

class TestS3Urls : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void urls()
    {
        ConnectionProfile aws = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        aws.id = QStringLiteral("aws");
        const Location obj =
            Location::s3(QStringLiteral("aws"), QStringLiteral("my-bucket"), QStringLiteral("dir/a b+c.txt"));
        QCOMPARE(s3urls::s3Uri(obj), QStringLiteral("s3://my-bucket/dir/a b+c.txt"));
        QCOMPARE(s3urls::arn(obj, aws), QStringLiteral("arn:aws:s3:::my-bucket/dir/a b+c.txt"));
        QCOMPARE(s3urls::objectUrl(obj, aws, QStringLiteral("eu-west-1")),
                 QStringLiteral("https://my-bucket.s3.eu-west-1.amazonaws.com/dir/a%20b%2Bc.txt"));
        QCOMPARE(s3urls::objectUrl(obj, aws),
                 QStringLiteral("https://my-bucket.s3.us-east-1.amazonaws.com/dir/a%20b%2Bc.txt"));

        const Location dotted =
            Location::s3(QStringLiteral("aws"), QStringLiteral("my.bucket"), QStringLiteral("k"));
        QCOMPARE(s3urls::objectUrl(dotted, aws, QStringLiteral("us-west-2")),
                 QStringLiteral("https://s3.us-west-2.amazonaws.com/my.bucket/k"));

        ConnectionProfile minio = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        QCOMPARE(s3urls::objectUrl(obj, minio),
                 QStringLiteral("http://localhost:9000/my-bucket/dir/a%20b%2Bc.txt"));
        QVERIFY(s3urls::arn(obj, minio).isEmpty());

        ConnectionProfile wasabi = ConnectionProfile::fromPreset(ConnectionProfile::Preset::Wasabi);
        QCOMPARE(s3urls::objectUrl(obj, wasabi),
                 QStringLiteral("https://my-bucket.s3.us-east-1.wasabisys.com/dir/a%20b%2Bc.txt"));

        QCOMPARE(s3urls::s3Uri(Location::s3(QStringLiteral("aws"), QStringLiteral("b"))),
                 QStringLiteral("s3://b/"));
        QVERIFY(s3urls::s3Uri(Location::local(QStringLiteral("/tmp"))).isEmpty());
    }

    void dnsCompatibility()
    {
        QVERIFY(s3urls::isDnsCompatibleBucket(QStringLiteral("my-bucket-1")));
        QVERIFY(!s3urls::isDnsCompatibleBucket(QStringLiteral("My_Bucket")));
        QVERIFY(!s3urls::isDnsCompatibleBucket(QStringLiteral("a.b")));
        QVERIFY(!s3urls::isDnsCompatibleBucket(QStringLiteral("-x-")));
    }
};

QTEST_GUILESS_MAIN(TestS3Urls)
#include "tst_s3urls.moc"
