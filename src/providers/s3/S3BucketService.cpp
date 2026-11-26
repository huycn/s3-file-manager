#include "providers/s3/S3BucketService.h"

#include "core/Logging.h"
#include "core/ProviderRegistry.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/S3BucketConvert.h"
#include "providers/s3/S3Errors.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Requests.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3VersionService.h"

#include <QCoreApplication>

#include <aws/s3/S3Client.h>
#include <aws/s3/model/BucketLifecycleConfiguration.h>
#include <aws/s3/model/CORSConfiguration.h>
#include <aws/s3/model/CreateBucketConfiguration.h>
#include <aws/s3/model/CreateBucketRequest.h>
#include <aws/s3/model/DefaultRetention.h>
#include <aws/s3/model/Delete.h>
#include <aws/s3/model/DeleteBucketCorsRequest.h>
#include <aws/s3/model/DeleteBucketEncryptionRequest.h>
#include <aws/s3/model/DeleteBucketLifecycleRequest.h>
#include <aws/s3/model/DeleteBucketPolicyRequest.h>
#include <aws/s3/model/DeleteBucketRequest.h>
#include <aws/s3/model/DeleteBucketTaggingRequest.h>
#include <aws/s3/model/DeleteBucketWebsiteRequest.h>
#include <aws/s3/model/DeleteObjectsRequest.h>
#include <aws/s3/model/DeletePublicAccessBlockRequest.h>
#include <aws/s3/model/GetBucketAclRequest.h>
#include <aws/s3/model/GetBucketCorsRequest.h>
#include <aws/s3/model/GetBucketEncryptionRequest.h>
#include <aws/s3/model/GetBucketLifecycleConfigurationRequest.h>
#include <aws/s3/model/GetBucketLocationRequest.h>
#include <aws/s3/model/GetBucketOwnershipControlsRequest.h>
#include <aws/s3/model/GetBucketPolicyRequest.h>
#include <aws/s3/model/GetBucketTaggingRequest.h>
#include <aws/s3/model/GetBucketVersioningRequest.h>
#include <aws/s3/model/GetBucketWebsiteRequest.h>
#include <aws/s3/model/GetObjectLockConfigurationRequest.h>
#include <aws/s3/model/GetPublicAccessBlockRequest.h>
#include <aws/s3/model/ListBucketsRequest.h>
#include <aws/s3/model/ListMultipartUploadsRequest.h>
#include <aws/s3/model/ListObjectVersionsRequest.h>
#include <aws/s3/model/ListObjectsV2Request.h>
#include <aws/s3/model/ObjectIdentifier.h>
#include <aws/s3/model/ObjectLockConfiguration.h>
#include <aws/s3/model/ObjectLockRule.h>
#include <aws/s3/model/PutBucketCorsRequest.h>
#include <aws/s3/model/PutBucketEncryptionRequest.h>
#include <aws/s3/model/PutBucketLifecycleConfigurationRequest.h>
#include <aws/s3/model/PutBucketPolicyRequest.h>
#include <aws/s3/model/PutBucketTaggingRequest.h>
#include <aws/s3/model/PutBucketVersioningRequest.h>
#include <aws/s3/model/PutBucketWebsiteRequest.h>
#include <aws/s3/model/PutObjectLockConfigurationRequest.h>
#include <aws/s3/model/PutPublicAccessBlockRequest.h>
#include <aws/s3/model/ServerSideEncryptionByDefault.h>
#include <aws/s3/model/ServerSideEncryptionConfiguration.h>
#include <aws/s3/model/ServerSideEncryptionRule.h>
#include <aws/s3/model/Tagging.h>
#include <aws/s3/model/VersioningConfiguration.h>

namespace s3fm {

using aws::fromAws;
using aws::toAws;
namespace Model = Aws::S3::Model;
using Client = Aws::S3::S3Client;

namespace {

constexpr int kDeleteBatch = 1000;

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::S3BucketService)
};

VoidResult toVoid(const Result<bool>& r)
{
    if (!r)
        return r.error();
    return {};
}

template <class Outcome> Result<bool> done(const Outcome& outcome)
{
    if (!outcome.IsSuccess())
        return aws::toError(outcome.GetError());
    return true;
}

} // namespace

S3BucketService::S3BucketService(std::shared_ptr<S3Provider> provider) : m_provider(std::move(provider)) {}

std::shared_ptr<S3BucketService> S3BucketService::forLocation(ProviderRegistry& registry,
                                                              const Location& location)
{
    if (!location.isS3() || location.connectionId().isEmpty())
        return nullptr;
    auto s3 = std::dynamic_pointer_cast<S3Provider>(registry.providerFor(location));
    return s3 ? std::make_shared<S3BucketService>(s3) : nullptr;
}

bool S3BucketService::isAws() const
{
    return m_provider->session().isAws();
}

bool S3BucketService::isUnsupported(BucketFeature feature) const
{
    const S3Session& session = m_provider->session();
    return session.isUnsupported(bucketFeatureKey(feature)) ||
           knownUnsupportedFeatures(session.profile().preset).contains(feature);
}

template <class T> Result<T> S3BucketService::track(BucketFeature feature, Result<T> result)
{
    if (!result && result.error().code == ErrorCode::Unsupported) {
        qCInfo(lcS3) << "Endpoint does not support" << bucketFeatureKey(feature);
        m_provider->session().markUnsupported(bucketFeatureKey(feature));
    }
    return result;
}

// ---------------------------------------------------------------------------
// Creation and deletion
// ---------------------------------------------------------------------------

VoidResult S3BucketService::createBucket(const NewBucket& spec)
{
    S3Session& session = m_provider->session();
    if (const QString e = validateBucketName(spec.name, session.isAws()); !e.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, e);
    if (!spec.objectOwnership.isEmpty() && !objectOwnershipValues().contains(spec.objectOwnership))
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Unknown object ownership setting"));
    // AWS: the request goes to the target region's endpoint.
    const QString region = spec.region.isEmpty() && session.isAws() ? session.profile().region : spec.region;
    auto client = session.client(session.isAws() ? region : QString());
    if (!client)
        return client.error();

    Model::CreateBucketRequest req;
    req.SetBucket(toAws(spec.name));
    if (!region.isEmpty() && region != u"us-east-1") {
        Model::CreateBucketConfiguration config;
        config.SetLocationConstraint(
            Model::BucketLocationConstraintMapper::GetBucketLocationConstraintForName(toAws(region)));
        req.SetCreateBucketConfiguration(config);
    }
    if (spec.objectLock)
        req.SetObjectLockEnabledForBucket(true);
    if (!spec.objectOwnership.isEmpty())
        req.SetObjectOwnership(
            Model::ObjectOwnershipMapper::GetObjectOwnershipForName(toAws(spec.objectOwnership)));
    if (!spec.cannedAcl.isEmpty())
        req.SetACL(Model::BucketCannedACLMapper::GetBucketCannedACLForName(toAws(spec.cannedAcl)));
    auto outcome = client.value()->CreateBucket(req);
    if (!outcome.IsSuccess())
        return aws::toError(outcome.GetError());
    if (session.isAws())
        session.rememberBucketRegion(spec.name, region.isEmpty() ? QStringLiteral("us-east-1") : region);
    m_provider->invalidateCache(Location::s3(session.profile().id));
    return {};
}

Result<S3BucketService::Contents> S3BucketService::contents(const QString& bucket)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<Contents>(bucket, [&](Client& client) -> Result<Contents> {
        Contents c;
        Model::ListObjectsV2Request objects;
        objects.SetBucket(toAws(bucket));
        objects.SetMaxKeys(1);
        aws::setRequesterPays(objects, session.requesterPays(bucket));
        auto listed = client.ListObjectsV2(objects);
        if (!listed.IsSuccess())
            return aws::toError(listed.GetError());
        c.objects = !listed.GetResult().GetContents().empty();

        Model::ListObjectVersionsRequest versions;
        versions.SetBucket(toAws(bucket));
        versions.SetMaxKeys(1);
        aws::setRequesterPays(versions, session.requesterPays(bucket));
        auto v = client.ListObjectVersions(versions);
        if (v.IsSuccess())
            c.versions = !v.GetResult().GetVersions().empty() || !v.GetResult().GetDeleteMarkers().empty();
        else if (aws::toError(v.GetError()).code != ErrorCode::Unsupported)
            return aws::toError(v.GetError());

        Model::ListMultipartUploadsRequest uploads;
        uploads.SetBucket(toAws(bucket));
        uploads.SetMaxUploads(1);
        aws::setRequesterPays(uploads, session.requesterPays(bucket));
        auto u = client.ListMultipartUploads(uploads);
        if (u.IsSuccess())
            c.uploads = !u.GetResult().GetUploads().empty();
        else if (aws::toError(u.GetError()).code != ErrorCode::Unsupported)
            return aws::toError(u.GetError());
        return c;
    });
}

VoidResult S3BucketService::deleteBatch(const QString& bucket, const QList<QPair<QString, QString>>& keys,
                                        bool bypassGovernance, EmptyReport& report)
{
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
        Model::Delete del;
        del.SetQuiet(true);
        for (const auto& [key, versionId] : keys) {
            Model::ObjectIdentifier id;
            id.SetKey(toAws(key));
            if (!versionId.isEmpty())
                id.SetVersionId(toAws(versionId));
            del.AddObjects(id);
        }
        Model::DeleteObjectsRequest req;
        req.SetBucket(toAws(bucket));
        aws::setRequesterPays(req, session.requesterPays(bucket));
        req.SetDelete(del);
        if (bypassGovernance)
            req.SetBypassGovernanceRetention(true);
        auto outcome = client.DeleteObjects(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& errors = outcome.GetResult().GetErrors();
        for (const auto& err : errors) {
            QString what = fromAws(err.GetKey());
            if (!err.GetVersionId().empty())
                what += QStringLiteral(" (%1)").arg(fromAws(err.GetVersionId()));
            report.failures.push_back(
                QStringLiteral("%1: %2 %3").arg(what, fromAws(err.GetCode()), fromAws(err.GetMessage())));
        }
        report.deleted += keys.size() - qsizetype(errors.size());
        return true;
    });
    return toVoid(r);
}

S3BucketService::EmptyReport S3BucketService::emptyBucket(const QString& bucket, bool bypassGovernance,
                                                          OperationContext& ctx)
{
    EmptyReport report;
    S3Session& session = m_provider->session();
    m_provider->invalidateCache(Location::s3(session.profile().id, bucket));
    QList<QPair<QString, QString>> batch;
    auto flush = [&]() -> bool {
        if (batch.isEmpty())
            return true;
        if (auto r = deleteBatch(bucket, batch, bypassGovernance, report); !r) {
            report.error = r.error();
            return false;
        }
        batch.clear();
        ctx.reportProgress(report.deleted, -1);
        return true;
    };

    // Every version and delete marker (plain objects on endpoints without versions).
    bool versionsSupported = true;
    QString token;
    do {
        if (ctx.isCancelled()) {
            report.error = Error::cancelled();
            return report;
        }
        auto page = m_provider->listVersionsPage(bucket, QString(), false, token, ctx);
        if (!page) {
            if (page.error().code == ErrorCode::Unsupported && token.isEmpty()) {
                versionsSupported = false;
                break;
            }
            report.error = page.error();
            return report;
        }
        for (const Entry& e : std::as_const(page->entries)) {
            if (e.isDirectory())
                continue;
            batch.push_back({e.location.key(), e.versionId});
            if (batch.size() >= kDeleteBatch && !flush())
                return report;
        }
        token = page->nextPageToken;
    } while (!token.isEmpty());
    if (!versionsSupported) {
        Error listError;
        bool failed = false;
        auto listed = m_provider->listFlat(
            bucket, QString(),
            [&](const Entry& object) {
                batch.push_back({object.location.key(), QString()});
                if (batch.size() >= kDeleteBatch && !flush()) {
                    failed = true;
                    return false;
                }
                return true;
            },
            ctx);
        if (failed)
            return report;
        if (!listed) {
            report.error = listed.error();
            return report;
        }
    }
    if (!flush())
        return report;

    // Incomplete multipart uploads.
    S3VersionService uploads(m_provider);
    auto pending = uploads.pendingUploads(bucket, QString(), ctx);
    if (!pending) {
        if (pending.error().code != ErrorCode::Unsupported)
            report.error = pending.error();
        return report;
    }
    for (const PendingUpload& u : std::as_const(*pending)) {
        if (ctx.isCancelled()) {
            report.error = Error::cancelled();
            return report;
        }
        if (auto r = uploads.abortUpload(bucket, u); !r)
            report.failures.push_back(
                QStringLiteral("%1 (upload %2): %3").arg(u.key, u.uploadId, r.error().toString()));
        else
            ++report.uploadsAborted;
    }
    return report;
}

VoidResult S3BucketService::deleteBucket(const QString& bucket)
{
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
        Model::DeleteBucketRequest req;
        req.SetBucket(toAws(bucket));
        return done(client.DeleteBucket(req));
    });
    if (!r)
        return r.error();
    session.forgetBucketRegion(bucket);
    m_provider->invalidateCache(Location::s3(session.profile().id));
    return {};
}

// ---------------------------------------------------------------------------
// Overview, versioning, encryption
// ---------------------------------------------------------------------------

Result<BucketOverview> S3BucketService::overview(const QString& bucket)
{
    S3Session& session = m_provider->session();
    BucketOverview o;
    o.name = bucket;
    if (session.isAws())
        o.arn = QStringLiteral("arn:aws:s3:::") + bucket;
    auto region = m_provider->withClient<QString>(bucket, [&](Client& client) -> Result<QString> {
        Model::GetBucketLocationRequest req;
        req.SetBucket(toAws(bucket));
        auto outcome = client.GetBucketLocation(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto c = outcome.GetResult().GetLocationConstraint();
        if (c == Model::BucketLocationConstraint::NOT_SET)
            return QString();
        return fromAws(Model::BucketLocationConstraintMapper::GetNameForBucketLocationConstraint(c));
    });
    if (!region)
        return region.error(); // also tells us the bucket is not reachable at all
    o.region = region.value();
    if (o.region.isEmpty())
        o.region = session.isAws() ? QStringLiteral("us-east-1") : session.profile().region;
    else if (o.region == u"EU")
        o.region = QStringLiteral("eu-west-1");

    // Creation date: from the bucket list (may be denied for bucket-scoped keys).
    if (auto client = session.client()) {
        auto listed = client.value()->ListBuckets(Model::ListBucketsRequest());
        if (listed.IsSuccess()) {
            for (const auto& b : listed.GetResult().GetBuckets()) {
                if (fromAws(b.GetName()) == bucket) {
                    o.created = aws::fromAws(b.GetCreationDate());
                    break;
                }
            }
        }
    }
    auto owner = m_provider->withClient<QString>(bucket, [&](Client& client) -> Result<QString> {
        Model::GetBucketAclRequest req;
        req.SetBucket(toAws(bucket));
        auto outcome = client.GetBucketAcl(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& aclOwner = outcome.GetResult().GetOwner();
        QString name = fromAws(aclOwner.GetDisplayName());
        if (name.isEmpty())
            name = fromAws(aclOwner.GetID());
        return name;
    });
    if (owner)
        o.owner = owner.value();
    else
        o.ownerError = owner.error();
    if (!isUnsupported(BucketFeature::Ownership)) {
        auto ownership =
            track(BucketFeature::Ownership,
                  m_provider->withClient<QString>(bucket, [&](Client& client) -> Result<QString> {
                      Model::GetBucketOwnershipControlsRequest req;
                      req.SetBucket(toAws(bucket));
                      auto outcome = client.GetBucketOwnershipControls(req);
                      if (!outcome.IsSuccess()) {
                          if (aws::isNotConfigured(outcome.GetError()))
                              return QString();
                          return aws::toError(outcome.GetError());
                      }
                      const auto& rules = outcome.GetResult().GetOwnershipControls().GetRules();
                      if (rules.empty())
                          return QString();
                      return fromAws(Model::ObjectOwnershipMapper::GetNameForObjectOwnership(
                          rules.front().GetObjectOwnership()));
                  }));
        if (ownership)
            o.objectOwnership = ownership.value();
    }
    return o;
}

Result<BucketVersioning> S3BucketService::versioning(const QString& bucket)
{
    return track(
        BucketFeature::Versioning,
        m_provider->withClient<BucketVersioning>(bucket, [&](Client& client) -> Result<BucketVersioning> {
            Model::GetBucketVersioningRequest req;
            req.SetBucket(toAws(bucket));
            auto outcome = client.GetBucketVersioning(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            BucketVersioning v;
            const auto& r = outcome.GetResult();
            if (r.GetStatus() != Model::BucketVersioningStatus::NOT_SET)
                v.status = fromAws(
                    Model::BucketVersioningStatusMapper::GetNameForBucketVersioningStatus(r.GetStatus()));
            if (r.GetMFADelete() != Model::MFADeleteStatus::NOT_SET)
                v.mfaDelete =
                    fromAws(Model::MFADeleteStatusMapper::GetNameForMFADeleteStatus(r.GetMFADelete()));
            return v;
        }));
}

VoidResult S3BucketService::setVersioning(const QString& bucket, bool enabled)
{
    m_provider->invalidateCache(Location::s3(m_provider->session().profile().id, bucket));
    return toVoid(track(BucketFeature::Versioning,
                        m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
                            Model::PutBucketVersioningRequest req;
                            req.SetBucket(toAws(bucket));
                            Model::VersioningConfiguration config;
                            config.SetStatus(enabled ? Model::BucketVersioningStatus::Enabled
                                                     : Model::BucketVersioningStatus::Suspended);
                            req.SetVersioningConfiguration(config);
                            return done(client.PutBucketVersioning(req));
                        })));
}

Result<BucketEncryption> S3BucketService::encryption(const QString& bucket)
{
    return track(
        BucketFeature::Encryption,
        m_provider->withClient<BucketEncryption>(bucket, [&](Client& client) -> Result<BucketEncryption> {
            Model::GetBucketEncryptionRequest req;
            req.SetBucket(toAws(bucket));
            auto outcome = client.GetBucketEncryption(req);
            BucketEncryption e;
            if (!outcome.IsSuccess()) {
                if (aws::isNotConfigured(outcome.GetError()))
                    return e;
                return aws::toError(outcome.GetError());
            }
            const auto& rules = outcome.GetResult().GetServerSideEncryptionConfiguration().GetRules();
            if (rules.empty())
                return e;
            const auto& def = rules.front().GetApplyServerSideEncryptionByDefault();
            e.mode = BucketEncryption::fromAlgorithm(fromAws(
                Model::ServerSideEncryptionMapper::GetNameForServerSideEncryption(def.GetSSEAlgorithm())));
            e.kmsKeyId = fromAws(def.GetKMSMasterKeyID());
            e.bucketKey = rules.front().GetBucketKeyEnabled();
            return e;
        }));
}

VoidResult S3BucketService::setEncryption(const QString& bucket, const BucketEncryption& encryption)
{
    return toVoid(track(
        BucketFeature::Encryption, m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
            if (encryption.mode == BucketEncryption::Mode::None) {
                Model::DeleteBucketEncryptionRequest req;
                req.SetBucket(toAws(bucket));
                return done(client.DeleteBucketEncryption(req));
            }
            Model::ServerSideEncryptionByDefault def;
            def.SetSSEAlgorithm(Model::ServerSideEncryptionMapper::GetServerSideEncryptionForName(
                toAws(BucketEncryption::algorithm(encryption.mode))));
            if (encryption.mode != BucketEncryption::Mode::S3 && !encryption.kmsKeyId.isEmpty())
                def.SetKMSMasterKeyID(toAws(encryption.kmsKeyId));
            Model::ServerSideEncryptionRule rule;
            rule.SetApplyServerSideEncryptionByDefault(def);
            if (encryption.mode != BucketEncryption::Mode::S3 && encryption.bucketKey)
                rule.SetBucketKeyEnabled(true);
            Model::ServerSideEncryptionConfiguration config;
            config.AddRules(rule);
            Model::PutBucketEncryptionRequest req;
            req.SetBucket(toAws(bucket));
            req.SetServerSideEncryptionConfiguration(config);
            return done(client.PutBucketEncryption(req));
        })));
}

// ---------------------------------------------------------------------------
// Lifecycle, CORS, policy
// ---------------------------------------------------------------------------

Result<QList<LifecycleRule>> S3BucketService::lifecycle(const QString& bucket)
{
    using Rules = QList<LifecycleRule>;
    return track(BucketFeature::Lifecycle,
                 m_provider->withClient<Rules>(bucket, [&](Client& client) -> Result<Rules> {
                     Model::GetBucketLifecycleConfigurationRequest req;
                     req.SetBucket(toAws(bucket));
                     auto outcome = client.GetBucketLifecycleConfiguration(req);
                     Rules rules;
                     if (!outcome.IsSuccess()) {
                         if (aws::isNotConfigured(outcome.GetError()))
                             return rules;
                         return aws::toError(outcome.GetError());
                     }
                     for (const auto& r : outcome.GetResult().GetRules())
                         rules.push_back(aws::fromSdk(r));
                     return rules;
                 }));
}

VoidResult S3BucketService::setLifecycle(const QString& bucket, const QList<LifecycleRule>& rules)
{
    if (const QString e = validateLifecycle(rules); !e.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, e);
    return toVoid(track(BucketFeature::Lifecycle,
                        m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
                            if (rules.isEmpty()) {
                                Model::DeleteBucketLifecycleRequest req;
                                req.SetBucket(toAws(bucket));
                                return done(client.DeleteBucketLifecycle(req));
                            }
                            Model::BucketLifecycleConfiguration config;
                            for (const LifecycleRule& r : rules)
                                config.AddRules(aws::toSdk(r));
                            Model::PutBucketLifecycleConfigurationRequest req;
                            req.SetBucket(toAws(bucket));
                            req.SetLifecycleConfiguration(config);
                            return done(client.PutBucketLifecycleConfiguration(req));
                        })));
}

Result<QList<CorsRule>> S3BucketService::cors(const QString& bucket)
{
    using Rules = QList<CorsRule>;
    return track(BucketFeature::Cors,
                 m_provider->withClient<Rules>(bucket, [&](Client& client) -> Result<Rules> {
                     Model::GetBucketCorsRequest req;
                     req.SetBucket(toAws(bucket));
                     auto outcome = client.GetBucketCors(req);
                     Rules rules;
                     if (!outcome.IsSuccess()) {
                         if (aws::isNotConfigured(outcome.GetError()))
                             return rules;
                         return aws::toError(outcome.GetError());
                     }
                     for (const auto& r : outcome.GetResult().GetCORSRules())
                         rules.push_back(aws::fromSdk(r));
                     return rules;
                 }));
}

VoidResult S3BucketService::setCors(const QString& bucket, const QList<CorsRule>& rules)
{
    if (const QString e = validateCors(rules); !e.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, e);
    return toVoid(
        track(BucketFeature::Cors, m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
            if (rules.isEmpty()) {
                Model::DeleteBucketCorsRequest req;
                req.SetBucket(toAws(bucket));
                return done(client.DeleteBucketCors(req));
            }
            Model::CORSConfiguration config;
            for (const CorsRule& r : rules)
                config.AddCORSRules(aws::toSdk(r));
            Model::PutBucketCorsRequest req;
            req.SetBucket(toAws(bucket));
            req.SetCORSConfiguration(config);
            return done(client.PutBucketCors(req));
        })));
}

Result<QString> S3BucketService::policy(const QString& bucket)
{
    return track(BucketFeature::Policy,
                 m_provider->withClient<QString>(bucket, [&](Client& client) -> Result<QString> {
                     Model::GetBucketPolicyRequest req;
                     req.SetBucket(toAws(bucket));
                     auto outcome = client.GetBucketPolicy(req);
                     if (!outcome.IsSuccess()) {
                         if (aws::isNotConfigured(outcome.GetError()))
                             return QString();
                         return aws::toError(outcome.GetError());
                     }
                     Aws::StringStream text;
                     text << outcome.GetResult().GetPolicy().rdbuf();
                     return fromAws(text.str());
                 }));
}

VoidResult S3BucketService::setPolicy(const QString& bucket, const QString& json)
{
    const auto issues = validatePolicy(json, QString());
    for (const PolicyIssue& issue : issues) {
        if (issue.error)
            return Error::make(ErrorCode::InvalidArgument, issue.message);
    }
    return toVoid(track(BucketFeature::Policy,
                        m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
                            if (json.trimmed().isEmpty()) {
                                Model::DeleteBucketPolicyRequest req;
                                req.SetBucket(toAws(bucket));
                                return done(client.DeleteBucketPolicy(req));
                            }
                            Model::PutBucketPolicyRequest req;
                            req.SetBucket(toAws(bucket));
                            auto body = Aws::MakeShared<Aws::StringStream>("s3fm");
                            *body << toAws(json);
                            req.SetBody(body);
                            req.SetContentType("application/json");
                            return done(client.PutBucketPolicy(req));
                        })));
}

// ---------------------------------------------------------------------------
// Public access block, tags, website, Object Lock
// ---------------------------------------------------------------------------

Result<PublicAccessBlock> S3BucketService::publicAccessBlock(const QString& bucket)
{
    return track(
        BucketFeature::PublicAccessBlock,
        m_provider->withClient<PublicAccessBlock>(bucket, [&](Client& client) -> Result<PublicAccessBlock> {
            Model::GetPublicAccessBlockRequest req;
            req.SetBucket(toAws(bucket));
            auto outcome = client.GetPublicAccessBlock(req);
            PublicAccessBlock b;
            if (!outcome.IsSuccess()) {
                if (aws::isNotConfigured(outcome.GetError()))
                    return b;
                return aws::toError(outcome.GetError());
            }
            const auto& c = outcome.GetResult().GetPublicAccessBlockConfiguration();
            b.blockPublicAcls = c.GetBlockPublicAcls();
            b.ignorePublicAcls = c.GetIgnorePublicAcls();
            b.blockPublicPolicy = c.GetBlockPublicPolicy();
            b.restrictPublicBuckets = c.GetRestrictPublicBuckets();
            return b;
        }));
}

VoidResult S3BucketService::setPublicAccessBlock(const QString& bucket, const PublicAccessBlock& block)
{
    return toVoid(track(BucketFeature::PublicAccessBlock,
                        m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
                            if (!block.any()) {
                                Model::DeletePublicAccessBlockRequest req;
                                req.SetBucket(toAws(bucket));
                                return done(client.DeletePublicAccessBlock(req));
                            }
                            Model::PublicAccessBlockConfiguration c;
                            c.SetBlockPublicAcls(block.blockPublicAcls);
                            c.SetIgnorePublicAcls(block.ignorePublicAcls);
                            c.SetBlockPublicPolicy(block.blockPublicPolicy);
                            c.SetRestrictPublicBuckets(block.restrictPublicBuckets);
                            Model::PutPublicAccessBlockRequest req;
                            req.SetBucket(toAws(bucket));
                            req.SetPublicAccessBlockConfiguration(c);
                            return done(client.PutPublicAccessBlock(req));
                        })));
}

Result<QMap<QString, QString>> S3BucketService::tags(const QString& bucket)
{
    using Tags = QMap<QString, QString>;
    return track(BucketFeature::Tagging,
                 m_provider->withClient<Tags>(bucket, [&](Client& client) -> Result<Tags> {
                     Model::GetBucketTaggingRequest req;
                     req.SetBucket(toAws(bucket));
                     auto outcome = client.GetBucketTagging(req);
                     Tags tags;
                     if (!outcome.IsSuccess()) {
                         if (aws::isNotConfigured(outcome.GetError()))
                             return tags;
                         return aws::toError(outcome.GetError());
                     }
                     for (const auto& t : outcome.GetResult().GetTagSet())
                         tags.insert(fromAws(t.GetKey()), fromAws(t.GetValue()));
                     return tags;
                 }));
}

VoidResult S3BucketService::setTags(const QString& bucket, const QMap<QString, QString>& tags)
{
    if (const QString e = validateBucketTags(tags); !e.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, e);
    return toVoid(track(
        BucketFeature::Tagging, m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
            if (tags.isEmpty()) {
                Model::DeleteBucketTaggingRequest req;
                req.SetBucket(toAws(bucket));
                return done(client.DeleteBucketTagging(req));
            }
            Model::Tagging tagging;
            for (auto it = tags.cbegin(); it != tags.cend(); ++it)
                tagging.AddTagSet(Model::Tag().WithKey(toAws(it.key())).WithValue(toAws(it.value())));
            Model::PutBucketTaggingRequest req;
            req.SetBucket(toAws(bucket));
            req.SetTagging(tagging);
            return done(client.PutBucketTagging(req));
        })));
}

Result<WebsiteConfig> S3BucketService::website(const QString& bucket)
{
    return track(BucketFeature::Website,
                 m_provider->withClient<WebsiteConfig>(bucket, [&](Client& client) -> Result<WebsiteConfig> {
                     Model::GetBucketWebsiteRequest req;
                     req.SetBucket(toAws(bucket));
                     auto outcome = client.GetBucketWebsite(req);
                     WebsiteConfig w;
                     if (!outcome.IsSuccess()) {
                         if (aws::isNotConfigured(outcome.GetError()))
                             return w;
                         return aws::toError(outcome.GetError());
                     }
                     const auto& r = outcome.GetResult();
                     w.indexDocument = fromAws(r.GetIndexDocument().GetSuffix());
                     w.errorDocument = fromAws(r.GetErrorDocument().GetKey());
                     w.redirectHost = fromAws(r.GetRedirectAllRequestsTo().GetHostName());
                     if (r.GetRedirectAllRequestsTo().GetProtocol() != Model::Protocol::NOT_SET)
                         w.redirectProtocol = fromAws(Model::ProtocolMapper::GetNameForProtocol(
                             r.GetRedirectAllRequestsTo().GetProtocol()));
                     for (const auto& rule : r.GetRoutingRules())
                         w.routingRules.push_back(aws::fromSdk(rule));
                     return w;
                 }));
}

VoidResult S3BucketService::setWebsite(const QString& bucket, const WebsiteConfig& config)
{
    if (config.isEnabled()) {
        if (const QString e = config.validate(); !e.isEmpty())
            return Error::make(ErrorCode::InvalidArgument, e);
    }
    return toVoid(track(BucketFeature::Website,
                        m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
                            if (!config.isEnabled()) {
                                Model::DeleteBucketWebsiteRequest req;
                                req.SetBucket(toAws(bucket));
                                return done(client.DeleteBucketWebsite(req));
                            }
                            Model::PutBucketWebsiteRequest req;
                            req.SetBucket(toAws(bucket));
                            req.SetWebsiteConfiguration(aws::toSdk(config));
                            return done(client.PutBucketWebsite(req));
                        })));
}

Result<ObjectLockDefaults> S3BucketService::objectLock(const QString& bucket)
{
    return track(
        BucketFeature::ObjectLock,
        m_provider->withClient<ObjectLockDefaults>(bucket, [&](Client& client) -> Result<ObjectLockDefaults> {
            Model::GetObjectLockConfigurationRequest req;
            req.SetBucket(toAws(bucket));
            auto outcome = client.GetObjectLockConfiguration(req);
            ObjectLockDefaults d;
            if (!outcome.IsSuccess()) {
                if (aws::isNotConfigured(outcome.GetError()))
                    return d;
                return aws::toError(outcome.GetError());
            }
            const auto& c = outcome.GetResult().GetObjectLockConfiguration();
            d.enabled = c.GetObjectLockEnabled() == Model::ObjectLockEnabled::Enabled;
            const auto& retention = c.GetRule().GetDefaultRetention();
            if (retention.GetMode() != Model::ObjectLockRetentionMode::NOT_SET) {
                d.mode = fromAws(Model::ObjectLockRetentionModeMapper::GetNameForObjectLockRetentionMode(
                    retention.GetMode()));
                d.days = retention.DaysHasBeenSet() ? retention.GetDays() : 0;
                d.years = retention.YearsHasBeenSet() ? retention.GetYears() : 0;
            }
            return d;
        }));
}

VoidResult S3BucketService::setObjectLock(const QString& bucket, const ObjectLockDefaults& defaults)
{
    ObjectLockDefaults wanted = defaults;
    wanted.enabled = true;
    if (const QString e = wanted.validate(); !e.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, e);
    return toVoid(track(
        BucketFeature::ObjectLock, m_provider->withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
            Model::ObjectLockConfiguration config;
            config.SetObjectLockEnabled(Model::ObjectLockEnabled::Enabled);
            if (!wanted.mode.isEmpty()) {
                Model::DefaultRetention retention;
                retention.SetMode(Model::ObjectLockRetentionModeMapper::GetObjectLockRetentionModeForName(
                    toAws(wanted.mode)));
                if (wanted.days > 0)
                    retention.SetDays(wanted.days);
                else
                    retention.SetYears(wanted.years);
                config.SetRule(Model::ObjectLockRule().WithDefaultRetention(retention));
            }
            Model::PutObjectLockConfigurationRequest req;
            req.SetBucket(toAws(bucket));
            req.SetObjectLockConfiguration(config);
            return done(client.PutObjectLockConfiguration(req));
        })));
}

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

Result<BucketStats> S3BucketService::statistics(const QString& bucket, const QString& prefix,
                                                OperationContext& ctx)
{
    BucketStats stats;
    qint64 counted = 0;
    auto count = [&](const Entry& e) {
        stats.add(e);
        if (++counted % 1000 == 0)
            ctx.reportProgress(counted, -1);
    };
    stats.versionsListed = true;
    QString token;
    do {
        if (ctx.isCancelled())
            return stats;
        auto page = m_provider->listVersionsPage(bucket, prefix, false, token, ctx);
        if (!page) {
            if (page.error().code == ErrorCode::Unsupported && token.isEmpty()) {
                stats.versionsListed = false;
                break;
            }
            if (page.error().isCancelled())
                return stats;
            return page.error();
        }
        for (const Entry& e : std::as_const(page->entries))
            count(e);
        token = page->nextPageToken;
    } while (!token.isEmpty());
    if (!stats.versionsListed) {
        auto listed = m_provider->listFlat(
            bucket, prefix,
            [&](const Entry& object) {
                count(object);
                return true;
            },
            ctx);
        if (!listed) {
            if (listed.error().isCancelled())
                return stats;
            return listed.error();
        }
    }
    if (ctx.isCancelled())
        return stats;
    S3VersionService uploads(m_provider);
    if (auto pending = uploads.pendingUploads(bucket, prefix, ctx)) {
        for (const PendingUpload& u : std::as_const(*pending)) {
            Q_UNUSED(u)
            ++stats.uploads.objects;
        }
    }
    if (ctx.isCancelled())
        return stats;
    stats.complete = true;
    ctx.reportProgress(counted, counted);
    return stats;
}

} // namespace s3fm
