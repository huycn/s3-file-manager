#include "providers/s3/S3Session.h"

#include "connections/AwsConfig.h"
#include "core/Logging.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/S3Errors.h"

#include <QCoreApplication>
#include <QUrl>

#include <aws/core/auth/AWSCredentialsProvider.h>
#include <aws/core/auth/AWSCredentialsProviderChain.h>
#include <aws/core/auth/ProfileCredentialsProvider.h>
#include <aws/core/auth/SSOCredentialsProvider.h>
#include <aws/s3/S3Client.h>
#include <aws/s3/model/Bucket.h>
#include <aws/s3/model/HeadBucketRequest.h>
#include <aws/s3/model/ListBucketsRequest.h>

namespace s3fm {

using aws::fromAws;
using aws::toAws;

namespace {

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::S3Session)
};

// True unless ~/.aws describes `name` without SSO settings (unknown: keep SSO).
bool mayUseSso(const QString& name)
{
    const auto profiles = AwsConfig::profiles();
    for (const AwsProfileInfo& p : profiles) {
        if (p.name == name)
            return p.isSso;
    }
    return true;
}

// Credentials from a named profile: assume-role / credential_source / static keys
// (CRT profile provider), then SSO, then credential_process.
class NamedProfileChain : public Aws::Auth::AWSCredentialsProviderChain
{
public:
    explicit NamedProfileChain(const QString& profile)
    {
        const Aws::String name = toAws(profile);
        AddProvider(std::make_shared<Aws::Auth::ProfileCredentialsProvider>(name.c_str()));
        // The SSO provider builds its token client from a default configuration, which
        // asks EC2 instance metadata for a region when [default] has none: seconds of
        // timeouts on a desktop. Only pay for it on SSO profiles.
        if (mayUseSso(profile)) {
            auto config = std::make_shared<const Aws::Client::ClientConfiguration>(name.c_str(), true);
            AddProvider(std::make_shared<Aws::Auth::SSOCredentialsProvider>(name, config));
        }
        AddProvider(std::make_shared<Aws::Auth::ProcessCredentialsProvider>(name));
    }
};

// Why no credentials could be found for `profile`'s credential source.
Error missingCredentials(const ConnectionProfile& profile)
{
    using Source = ConnectionProfile::CredentialSource;
    QString message;
    switch (profile.credentialSource) {
    case Source::AwsProfile:
        message = Tr::tr("Could not get credentials for AWS profile \"%1\". If it uses AWS SSO "
                         "(IAM Identity Center), the session may have expired: run \"aws sso login\" "
                         "and try again.")
                      .arg(profile.awsProfile);
        break;
    case Source::Environment:
        message = Tr::tr("No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and "
                         "AWS_SECRET_ACCESS_KEY before starting the application.");
        break;
    default:
        message = Tr::tr("No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or "
                         "instance metadata). If you use AWS SSO, run \"aws sso login\" and "
                         "try again.");
        break;
    }
    Error e = Error::make(ErrorCode::Authentication, message);
    e.retryable = true; // fixed outside the app (aws sso login, …), then Retry works
    return e;
}

} // namespace

S3Session::S3Session(ConnectionProfile profile, SecretFetcher secrets)
    : m_profile(std::move(profile)), m_fetchSecret(std::move(secrets))
{
}

S3Session::~S3Session() = default;

Result<std::shared_ptr<Aws::Auth::AWSCredentialsProvider>> S3Session::credentials()
{
    // Called with m_mutex held.
    if (m_credentials)
        return m_credentials;
    using Source = ConnectionProfile::CredentialSource;
    switch (m_profile.credentialSource) {
    case Source::StaticKeys: {
        ConnectionSecret secret;
        if (m_fetchSecret) {
            auto fetched = m_fetchSecret();
            if (!fetched) {
                Error e = fetched.error();
                if (e.code == ErrorCode::NotFound)
                    e = Error::make(
                        ErrorCode::Authentication,
                        Tr::tr(
                            "No secret key is stored for this connection; edit the connection to enter it"));
                return e;
            }
            secret = fetched.value();
        }
        m_credentials = std::make_shared<Aws::Auth::SimpleAWSCredentialsProvider>(
            toAws(m_profile.accessKeyId), toAws(secret.secretAccessKey), toAws(secret.sessionToken));
        break;
    }
    case Source::AwsProfile:
        m_credentials = std::make_shared<NamedProfileChain>(m_profile.awsProfile);
        break;
    case Source::Environment:
        m_credentials = std::make_shared<Aws::Auth::EnvironmentAWSCredentialsProvider>();
        break;
    case Source::DefaultChain:
        m_credentials = std::make_shared<Aws::Auth::DefaultAWSCredentialsProviderChain>();
        break;
    case Source::Anonymous:
        m_credentials = std::make_shared<Aws::Auth::AnonymousAWSCredentialsProvider>();
        break;
    }
    return m_credentials;
}

Result<std::shared_ptr<Aws::S3::S3Client>> S3Session::client(const QString& region)
{
    auto c = cachedClient(region);
    if (!c)
        return c;
    if (auto ok = checkCredentials(); !ok)
        return ok.error();
    return c;
}

Result<void> S3Session::checkCredentials()
{
    using Source = ConnectionProfile::CredentialSource;
    // Static keys are validated when they are read; anonymous requests need none.
    if (m_profile.credentialSource == Source::StaticKeys || m_profile.credentialSource == Source::Anonymous)
        return {};
    std::shared_ptr<Aws::Auth::AWSCredentialsProvider> provider;
    {
        QMutexLocker lock(&m_mutex);
        provider = m_credentials;
    }
    // The SDK sends requests unsigned when the provider comes back empty (expired SSO
    // token, failing credential_process…). AWS then redirects ListBuckets to its web
    // site and the only error is an XML parse failure, so check first. Providers cache
    // valid credentials, and the call runs outside the lock as it may start a process.
    if (provider && provider->GetAWSCredentials().IsEmpty()) {
        qCWarning(lcS3) << "no credentials for connection" << m_profile.id;
        return missingCredentials(m_profile);
    }
    return {};
}

Result<std::shared_ptr<Aws::S3::S3Client>> S3Session::cachedClient(const QString& regionOverride)
{
    const QString region = regionOverride.isEmpty() ? m_profile.region : regionOverride;
    QMutexLocker lock(&m_mutex);
    if (auto it = m_clients.constFind(region); it != m_clients.cend())
        return it.value();

    auto creds = credentials();
    if (!creds)
        return creds.error();

    Aws::Client::ClientConfigurationInitValues init;
    init.shouldDisableIMDS = true; // never probe EC2 metadata just to build a client
    Aws::S3::S3ClientConfiguration cfg(init);
    cfg.region = toAws(region);
    if (!m_profile.endpoint.isEmpty()) {
        const QUrl url(m_profile.endpoint);
        cfg.endpointOverride = toAws(m_profile.endpoint);
        cfg.scheme = url.scheme() == u"http" ? Aws::Http::Scheme::HTTP : Aws::Http::Scheme::HTTPS;
    }
    cfg.useVirtualAddressing = !m_profile.usesPathStyle();
    cfg.verifySSL = m_profile.verifyTls;
    if (!m_profile.caBundlePath.isEmpty())
        cfg.caFile = toAws(m_profile.caBundlePath);
    cfg.connectTimeoutMs = m_profile.connectTimeoutMs;
    cfg.requestTimeoutMs = m_profile.requestTimeoutMs;
    cfg.allowSystemProxy = true;
    const bool whenRequired = m_profile.checksumMode == ConnectionProfile::ChecksumMode::WhenRequired;
    cfg.checksumConfig.requestChecksumCalculation =
        whenRequired ? Aws::Client::RequestChecksumCalculation::WHEN_REQUIRED
                     : Aws::Client::RequestChecksumCalculation::WHEN_SUPPORTED;
    cfg.checksumConfig.responseChecksumValidation =
        whenRequired ? Aws::Client::ResponseChecksumValidation::WHEN_REQUIRED
                     : Aws::Client::ResponseChecksumValidation::WHEN_SUPPORTED;

    auto client = std::make_shared<Aws::S3::S3Client>(creds.value(), nullptr, cfg);
    m_clients.insert(region, client);
    qCDebug(lcS3) << "created S3 client for" << m_profile.id << "region" << region;
    return client;
}

bool S3Session::usesTemporaryCredentials(QDateTime* expiration)
{
    std::shared_ptr<Aws::Auth::AWSCredentialsProvider> provider;
    {
        QMutexLocker lock(&m_mutex);
        auto creds = credentials();
        if (!creds)
            return false;
        provider = creds.value();
    }
    const Aws::Auth::AWSCredentials c = provider->GetAWSCredentials(); // may refresh; outside the lock
    const bool temporary = !c.GetSessionToken().empty();
    if (expiration) {
        const QDateTime when = aws::fromAws(c.GetExpiration());
        *expiration = temporary && when.isValid() && when.date().year() < 9000 ? when : QDateTime();
    }
    return temporary;
}

QString S3Session::bucketRegion(const QString& bucket) const
{
    QMutexLocker lock(&m_mutex);
    return m_bucketRegions.value(bucket);
}

void S3Session::rememberBucketRegion(const QString& bucket, const QString& region)
{
    if (region.isEmpty())
        return;
    QMutexLocker lock(&m_mutex);
    m_bucketRegions.insert(bucket, region);
}

void S3Session::forgetBucketRegion(const QString& bucket)
{
    QMutexLocker lock(&m_mutex);
    m_bucketRegions.remove(bucket);
}

void S3Session::markUnsupported(const QString& feature)
{
    QMutexLocker lock(&m_mutex);
    m_unsupported.insert(feature);
}

bool S3Session::isUnsupported(const QString& feature) const
{
    QMutexLocker lock(&m_mutex);
    return m_unsupported.contains(feature);
}

Result<std::shared_ptr<Aws::S3::S3Client>> S3Session::clientForBucket(const QString& bucket)
{
    if (!isAws())
        return client();
    QString region = bucketRegion(bucket);
    if (region.isEmpty()) {
        auto base = client();
        if (!base)
            return base.error();
        Aws::S3::Model::HeadBucketRequest req;
        req.SetBucket(toAws(bucket));
        auto outcome = base.value()->HeadBucket(req);
        if (outcome.IsSuccess()) {
            region = fromAws(outcome.GetResult().GetBucketRegion());
        } else {
            // A 301/400/403 still carries the bucket's region in a header.
            const auto& headers = outcome.GetError().GetResponseHeaders();
            auto it = headers.find("x-amz-bucket-region");
            if (it != headers.end())
                region = fromAws(it->second);
        }
        if (region.isEmpty())
            region = m_profile.region;
        rememberBucketRegion(bucket, region);
        qCDebug(lcS3) << "bucket" << bucket << "is in region" << region;
    }
    return client(region);
}

ConnectionTestResult testConnection(S3Session& session)
{
    ConnectionTestResult result;
    auto client = session.client();
    if (!client) {
        result.error = client.error();
        result.summary = client.error().toString();
        return result;
    }
    Aws::S3::Model::ListBucketsRequest req;
    auto outcome = client.value()->ListBuckets(req);
    if (outcome.IsSuccess()) {
        for (const auto& b : outcome.GetResult().GetBuckets())
            result.buckets.push_back(fromAws(b.GetName()));
        result.ok = true;
        result.summary = QCoreApplication::translate("s3fm::S3Session", "Connected: %n bucket(s) visible",
                                                     nullptr, int(result.buckets.size()));
        return result;
    }
    result.error = aws::toError(outcome.GetError());

    // Bucket-scoped credentials may not list buckets but can use pinned ones.
    if (result.error.code == ErrorCode::AccessDenied && !session.profile().pinnedBuckets.isEmpty()) {
        QStringList reachable;
        Error lastError;
        for (const QString& bucket : session.profile().pinnedBuckets) {
            auto bucketClient = session.clientForBucket(bucket);
            if (!bucketClient) {
                lastError = bucketClient.error();
                continue;
            }
            Aws::S3::Model::HeadBucketRequest head;
            head.SetBucket(toAws(bucket));
            auto headOutcome = bucketClient.value()->HeadBucket(head);
            if (headOutcome.IsSuccess())
                reachable.push_back(bucket);
            else
                lastError = aws::toError(headOutcome.GetError());
        }
        if (!reachable.isEmpty()) {
            result.ok = true;
            result.buckets = reachable;
            result.summary = QCoreApplication::translate(
                "s3fm::S3Session",
                "Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)", nullptr,
                int(reachable.size()));
            return result;
        }
        result.error = std::move(lastError);
    }
    result.summary = result.error.toString();
    return result;
}

} // namespace s3fm
