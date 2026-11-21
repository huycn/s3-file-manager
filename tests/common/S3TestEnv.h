#pragma once

// Shared setup for integration tests against a real S3 endpoint (MinIO by default).
// Configure with the variables printed by `scripts/dev-minio.sh env`.

#include "connections/ConnectionProfile.h"

#include <QString>
#include <QTest>

namespace s3fm::test {

struct S3TestEnv
{
    QString endpoint = qEnvironmentVariable("S3FM_TEST_ENDPOINT");
    QString accessKey = qEnvironmentVariable("S3FM_TEST_ACCESS_KEY");
    QString secretKey = qEnvironmentVariable("S3FM_TEST_SECRET_KEY");
    QString region = qEnvironmentVariable("S3FM_TEST_REGION", QStringLiteral("us-east-1"));
    QString bucket = qEnvironmentVariable("S3FM_TEST_BUCKET", QStringLiteral("s3fm-test"));
    QString versionedBucket =
        qEnvironmentVariable("S3FM_TEST_VERSIONED_BUCKET", QStringLiteral("s3fm-versioned"));
    QString lockedBucket = qEnvironmentVariable("S3FM_TEST_LOCKED_BUCKET", QStringLiteral("s3fm-locked"));
    QString kmsKey = qEnvironmentVariable("S3FM_TEST_KMS_KEY"); // empty: the server has no KMS

    bool available() const { return !endpoint.isEmpty() && !accessKey.isEmpty(); }

    ConnectionProfile profile(const QString& id = QStringLiteral("it")) const
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        p.id = id;
        p.name = QStringLiteral("Integration");
        p.endpoint = endpoint;
        p.region = region;
        p.accessKeyId = accessKey;
        p.connectTimeoutMs = 3000;
        p.requestTimeoutMs = 20000;
        return p;
    }
};

} // namespace s3fm::test

#define S3FM_REQUIRE_S3(env)                                                                                 \
    do {                                                                                                     \
        if (!(env).available())                                                                              \
            QSKIP("S3FM_TEST_ENDPOINT not set (run: eval \"$(scripts/dev-minio.sh env)\")");                 \
    } while (false)
