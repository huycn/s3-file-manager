#include "common/S3TestEnv.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Session.h"

#include <QTest>

#include <memory>

using namespace s3fm;

class TestS3Connection : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;

private Q_SLOTS:
    void initTestCase() { m_sdk = std::make_unique<AwsSdkGuard>(); }
    void cleanupTestCase() { m_sdk.reset(); }

    void connectsAndListsBuckets()
    {
        S3FM_REQUIRE_S3(m_env);
        S3Session session(m_env.profile(),
                          [this] { return Result<ConnectionSecret>(ConnectionSecret{m_env.secretKey, {}}); });
        const ConnectionTestResult result = testConnection(session);
        QVERIFY2(result.ok, qPrintable(result.summary));
        QVERIFY(result.buckets.contains(m_env.bucket));
    }

    void wrongSecretIsAuthenticationError()
    {
        S3FM_REQUIRE_S3(m_env);
        S3Session session(m_env.profile(), [] {
            return Result<ConnectionSecret>(ConnectionSecret{QStringLiteral("wrong"), {}});
        });
        const ConnectionTestResult result = testConnection(session);
        QVERIFY(!result.ok);
        QCOMPARE(result.error.code, ErrorCode::Authentication);
    }

    void missingSecretIsReported()
    {
        S3FM_REQUIRE_S3(m_env);
        S3Session session(m_env.profile(), [] {
            return Result<ConnectionSecret>(Error::make(ErrorCode::NotFound, QStringLiteral("none")));
        });
        const ConnectionTestResult result = testConnection(session);
        QVERIFY(!result.ok);
        QCOMPARE(result.error.code, ErrorCode::Authentication);
    }

    void unreachableEndpointIsNetworkError()
    {
        // Runs without MinIO: nothing listens on port 9.
        ConnectionProfile p = m_env.profile();
        p.endpoint = QStringLiteral("http://127.0.0.1:9");
        p.accessKeyId = QStringLiteral("x");
        p.connectTimeoutMs = 1000;
        p.requestTimeoutMs = 2000;
        S3Session session(p,
                          [] { return Result<ConnectionSecret>(ConnectionSecret{QStringLiteral("y"), {}}); });
        const ConnectionTestResult result = testConnection(session);
        QVERIFY(!result.ok);
        QCOMPARE(result.error.code, ErrorCode::Network);
    }
};

QTEST_GUILESS_MAIN(TestS3Connection)
#include "tst_s3connection.moc"
