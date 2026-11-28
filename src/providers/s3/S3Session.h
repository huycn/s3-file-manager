#pragma once

#include "connections/ConnectionProfile.h"
#include "core/Error.h"
#include "providers/s3/S3Types.h"

#include <QDateTime>
#include <QHash>
#include <QMutex>
#include <QSet>
#include <QStringList>

#include <functional>
#include <memory>

namespace Aws::Auth {
class AWSCredentialsProvider;
}
namespace Aws::S3 {
class S3Client;
}

namespace s3fm {

// SDK clients and credentials for one connection profile. Thread-safe.
//
// On AWS, buckets live in different regions and requests must be sent to the
// right one: clientForBucket() discovers the region with HeadBucket and caches it.
// S3-compatible endpoints always use the profile's region.
class S3Session
{
public:
    using SecretFetcher = std::function<Result<ConnectionSecret>()>;

    S3Session(ConnectionProfile profile, SecretFetcher secrets);
    ~S3Session();
    S3Session(const S3Session&) = delete;
    S3Session& operator=(const S3Session&) = delete;

    const ConnectionProfile& profile() const { return m_profile; }
    bool isAws() const { return m_profile.endpoint.isEmpty(); }
    bool requesterPays(const QString& bucket) const { return m_profile.requesterPays(bucket); }

    // SSE-C key for objects in `bucket`, if the user configured one.
    using SseKeyFetcher = std::function<std::optional<SseCustomerKey>(const QString& bucket)>;
    void setSseKeyFetcher(SseKeyFetcher fetcher) { m_sseKeys = std::move(fetcher); }
    std::optional<SseCustomerKey> sseCustomerKey(const QString& bucket) const
    {
        return m_sseKeys ? m_sseKeys(bucket) : std::nullopt;
    }
    // True if the credentials expire (session token, SSO, assumed role), which also
    // limits how long presigned URLs work. Fills `expiration` when known.
    bool usesTemporaryCredentials(QDateTime* expiration = nullptr);

    // Client for `region` (empty: the profile's region). Fails with an Authentication
    // error when the credential source currently yields no credentials.
    Result<std::shared_ptr<Aws::S3::S3Client>> client(const QString& region = {});
    Result<std::shared_ptr<Aws::S3::S3Client>> clientForBucket(const QString& bucket);

    // Feature probing: bucket sub-resources the endpoint answered with NotImplemented.
    void markUnsupported(const QString& feature);
    bool isUnsupported(const QString& feature) const;

    QString bucketRegion(const QString& bucket) const;
    void rememberBucketRegion(const QString& bucket, const QString& region);
    void forgetBucketRegion(const QString& bucket);

private:
    Result<std::shared_ptr<Aws::Auth::AWSCredentialsProvider>> credentials();
    Result<std::shared_ptr<Aws::S3::S3Client>> cachedClient(const QString& region);
    Result<void> checkCredentials();

    ConnectionProfile m_profile;
    SecretFetcher m_fetchSecret;
    SseKeyFetcher m_sseKeys;
    mutable QMutex m_mutex;
    std::shared_ptr<Aws::Auth::AWSCredentialsProvider> m_credentials;
    QHash<QString, std::shared_ptr<Aws::S3::S3Client>> m_clients; // by region
    QHash<QString, QString> m_bucketRegions;
    QSet<QString> m_unsupported;
};

struct ConnectionTestResult
{
    bool ok = false;
    QString summary;     // one line for the UI
    QStringList buckets; // visible buckets (may be partial)
    Error error;
};

// Checks that the endpoint is reachable and the credentials work: ListBuckets,
// falling back to HeadBucket on pinned buckets for bucket-scoped credentials.
ConnectionTestResult testConnection(S3Session& session);

} // namespace s3fm
