// Credential sources that yield no credentials (expired SSO session, failing
// credential_process, empty environment) must fail with a clear Authentication
// error instead of sending unsigned requests. No network access.

#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Session.h"

#include <QElapsedTimer>
#include <QFile>
#include <QTemporaryDir>
#include <QTest>

#include <memory>

using namespace s3fm;

class TestS3Credentials : public QObject
{
    Q_OBJECT

    QTemporaryDir m_dir;
    std::unique_ptr<AwsSdkGuard> m_sdk;

    static ConnectionProfile awsProfile(const QString& name)
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        p.id = QStringLiteral("creds");
        p.region = QStringLiteral("us-east-1");
        p.credentialSource = ConnectionProfile::CredentialSource::AwsProfile;
        p.awsProfile = name;
        return p;
    }

private slots:
    void initTestCase()
    {
        QVERIFY(m_dir.isValid());
        // The SDK reads the config files when it initializes, so point it at ours first.
        const QString config = m_dir.filePath(QStringLiteral("config"));
        QFile f(config);
        QVERIFY(f.open(QIODevice::WriteOnly));
        // [default] has a region: without one, the SDK's SSO token client asks EC2
        // instance metadata for it (see NamedProfileChain).
        f.write("[default]\n"
                "region = us-east-1\n"
                "\n"
                "[profile failing-process]\n"
                "credential_process = sh -c \"echo 'Token has expired and refresh failed' >&2; exit 255\"\n"
                "region = us-east-1\n"
                "\n"
                "[profile expired-sso]\n"
                "sso_session = test\n"
                "sso_account_id = 111122223333\n"
                "sso_role_name = ReadOnly\n"
                "region = us-east-1\n"
                "\n"
                "[sso-session test]\n"
                "sso_start_url = https://example.invalid/start\n"
                "sso_region = us-east-1\n");
        f.close();
        qputenv("AWS_CONFIG_FILE", config.toLocal8Bit());
        qputenv("AWS_SHARED_CREDENTIALS_FILE", m_dir.filePath(QStringLiteral("credentials")).toLocal8Bit());
        // An empty SSO token cache: the session looks logged out.
        qputenv("HOME", m_dir.path().toLocal8Bit());
        qunsetenv("AWS_PROFILE");
        qunsetenv("AWS_ACCESS_KEY_ID");
        qunsetenv("AWS_SECRET_ACCESS_KEY");
        qunsetenv("AWS_SESSION_TOKEN");
        m_sdk = std::make_unique<AwsSdkGuard>();
    }

    void cleanupTestCase() { m_sdk.reset(); }

    void profileWithoutCredentials_data()
    {
        QTest::addColumn<QString>("profile");
        QTest::newRow("credential_process fails") << QStringLiteral("failing-process");
        QTest::newRow("SSO not logged in") << QStringLiteral("expired-sso");
    }

    void profileWithoutCredentials()
    {
        QFETCH(QString, profile);
        S3Session session(awsProfile(profile), nullptr);
        QElapsedTimer timer;
        timer.start();
        auto client = session.client();
        QVERIFY(!client);
        QCOMPARE(client.error().code, ErrorCode::Authentication);
        QVERIFY2(client.error().message.contains(profile), qPrintable(client.error().message));
        QVERIFY(client.error().message.contains(QStringLiteral("aws sso login")));
        QVERIFY(client.error().retryable);
        // No multi-second EC2 instance metadata probes on the way.
        QVERIFY2(timer.elapsed() < 3000, qPrintable(QString::number(timer.elapsed())));

        // Every attempt checks again (the user may have logged in meanwhile).
        auto again = session.clientForBucket(QStringLiteral("bucket"));
        QVERIFY(!again);
        QCOMPARE(again.error().code, ErrorCode::Authentication);
    }

    void environmentWithoutCredentials()
    {
        ConnectionProfile p = awsProfile({});
        p.credentialSource = ConnectionProfile::CredentialSource::Environment;
        S3Session session(p, nullptr);
        auto client = session.client();
        QVERIFY(!client);
        QCOMPARE(client.error().code, ErrorCode::Authentication);
        QVERIFY(client.error().message.contains(QStringLiteral("AWS_ACCESS_KEY_ID")));
    }

    void anonymousNeedsNoCredentials()
    {
        ConnectionProfile p = awsProfile({});
        p.credentialSource = ConnectionProfile::CredentialSource::Anonymous;
        S3Session session(p, nullptr);
        QVERIFY(session.client());
    }
};

QTEST_GUILESS_MAIN(TestS3Credentials)
#include "tst_s3credentials.moc"
