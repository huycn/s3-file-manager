#include "providers/s3/S3ObjectService.h"

#include "core/ProviderRegistry.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/Checksums.h"
#include "providers/s3/S3Errors.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Requests.h"
#include "providers/s3/S3Session.h"
#include "transfer/TransferMath.h"

#include <QCoreApplication>
#include <QFileInfo>

#include <aws/core/http/HttpTypes.h>
#include <aws/s3/S3Client.h>
#include <aws/s3/model/DeleteObjectTaggingRequest.h>
#include <aws/s3/model/GetBucketOwnershipControlsRequest.h>
#include <aws/s3/model/GetObjectAclRequest.h>
#include <aws/s3/model/GetObjectLegalHoldRequest.h>
#include <aws/s3/model/GetObjectLockConfigurationRequest.h>
#include <aws/s3/model/GetObjectRetentionRequest.h>
#include <aws/s3/model/GetObjectTaggingRequest.h>
#include <aws/s3/model/HeadObjectRequest.h>
#include <aws/s3/model/PutObjectAclRequest.h>
#include <aws/s3/model/PutObjectLegalHoldRequest.h>
#include <aws/s3/model/PutObjectRetentionRequest.h>
#include <aws/s3/model/PutObjectTaggingRequest.h>

namespace s3fm {

using aws::fromAws;
using aws::toAws;
namespace Model = Aws::S3::Model;

namespace {

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::S3ObjectService)
};

template <class Req>
void target(Req& req, const S3Session& session, const Location& l, const QString& versionId = {})
{
    req.SetBucket(toAws(l.bucket()));
    req.SetKey(toAws(l.key()));
    if constexpr (requires { req.SetVersionId(Aws::String()); }) {
        if (!versionId.isEmpty())
            req.SetVersionId(toAws(versionId));
    }
    aws::setRequesterPays(req, session.requesterPays(l.bucket()));
}

bool notConfigured(const Error& e)
{
    // "Not set" answers that are not real failures.
    return e.detail.contains(QStringLiteral("OwnershipControlsNotFoundError")) ||
           e.detail.contains(QStringLiteral("ObjectLockConfigurationNotFoundError")) ||
           e.detail.contains(QStringLiteral("NoSuchObjectLockConfiguration")) ||
           e.detail.contains(QStringLiteral("NoSuchTagSet"));
}

// PutObjectRetention with an empty <Retention/> clears a retention (with the
// governance bypass); the SDK would send no body at all for an empty value.
class ClearRetentionRequest : public Model::PutObjectRetentionRequest
{
public:
    Aws::String SerializePayload() const override
    {
        return "<Retention xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\"></Retention>";
    }
};

QString granteeName(const Model::Grantee& g)
{
    if (!g.GetDisplayName().empty())
        return fromAws(g.GetDisplayName());
    if (!g.GetEmailAddress().empty())
        return fromAws(g.GetEmailAddress());
    if (!g.GetURI().empty())
        return fromAws(g.GetURI());
    return fromAws(g.GetID());
}

} // namespace

S3ObjectService::S3ObjectService(std::shared_ptr<S3Provider> provider) : m_provider(std::move(provider)) {}

std::shared_ptr<S3ObjectService> S3ObjectService::forLocation(ProviderRegistry& registry,
                                                              const Location& location)
{
    if (!location.isS3())
        return nullptr;
    auto s3 = std::dynamic_pointer_cast<S3Provider>(registry.providerFor(location));
    return s3 ? std::make_shared<S3ObjectService>(s3) : nullptr;
}

Result<ObjectDetails> S3ObjectService::details(const Location& object, OperationContext& ctx)
{
    auto head = m_provider->headObject(object);
    if (!head)
        return head.error();
    ObjectDetails d;
    d.entry = head.value();
    d.headers = ObjectHeaders::fromEntry(d.entry);
    d.encryption = ObjectEncryption::fromEntry(d.entry);
    for (auto it = d.entry.metadata.cbegin(); it != d.entry.metadata.cend(); ++it) {
        if (it.key().startsWith(QStringLiteral("x-amz-checksum-")) && it.key() != u"x-amz-checksum-type")
            d.checksums.insert(it.key().mid(15).toUpper(), it.value());
    }
    if (ctx.isCancelled())
        return Error::cancelled();

    if (auto t = tags(object, d.entry.versionId))
        d.tags = t.value();
    else
        d.tagsError = t.error();
    if (auto a = acl(object))
        d.acl = a.value();
    else
        d.aclError = a.error();
    if (auto o = objectOwnership(object.bucket()))
        d.objectOwnership = o.value();
    if (ctx.isCancelled())
        return Error::cancelled();

    auto lock = objectLockEnabled(object.bucket());
    if (!lock) {
        d.lockError = lock.error();
    } else {
        d.lockEnabled = lock.value();
        if (d.lockEnabled) {
            if (auto r = retention(object))
                d.retention = r.value();
            else
                d.lockError = r.error();
            if (auto h = legalHold(object))
                d.legalHold = h.value();
            else if (!d.lockError)
                d.lockError = h.error();
        }
    }
    return d;
}

VoidResult S3ObjectService::rewrite(const Location& object, const CopyOverrides& changes,
                                    OperationContext& ctx)
{
    return m_provider->copyWith(object, object, changes, ctx);
}

// ---------------------------------------------------------------------------
// Tags
// ---------------------------------------------------------------------------

Result<QMap<QString, QString>> S3ObjectService::tags(const Location& object, const QString& versionId)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<QMap<QString, QString>>(
        object.bucket(), [&](Aws::S3::S3Client& client) -> Result<QMap<QString, QString>> {
            Model::GetObjectTaggingRequest req;
            target(req, session, object, versionId);
            auto outcome = client.GetObjectTagging(req);
            if (!outcome.IsSuccess()) {
                const Error e = aws::toError(outcome.GetError());
                if (notConfigured(e))
                    return QMap<QString, QString>();
                return e;
            }
            QMap<QString, QString> out;
            for (const auto& t : outcome.GetResult().GetTagSet())
                out.insert(fromAws(t.GetKey()), fromAws(t.GetValue()));
            return out;
        });
}

VoidResult S3ObjectService::setTags(const Location& object, const QMap<QString, QString>& tags,
                                    const QString& versionId)
{
    if (const QString problem = validateTags(tags); !problem.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, problem);
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        if (tags.isEmpty()) {
            Model::DeleteObjectTaggingRequest req;
            target(req, session, object, versionId);
            auto outcome = client.DeleteObjectTagging(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            return true;
        }
        Model::Tagging tagging;
        for (auto it = tags.cbegin(); it != tags.cend(); ++it)
            tagging.AddTagSet(Model::Tag().WithKey(toAws(it.key())).WithValue(toAws(it.value())));
        Model::PutObjectTaggingRequest req;
        target(req, session, object, versionId);
        req.SetTagging(tagging);
        auto outcome = client.PutObjectTagging(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

// ---------------------------------------------------------------------------
// ACL
// ---------------------------------------------------------------------------

Result<ObjectAcl> S3ObjectService::acl(const Location& object)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<ObjectAcl>(
        object.bucket(), [&](Aws::S3::S3Client& client) -> Result<ObjectAcl> {
            Model::GetObjectAclRequest req;
            target(req, session, object);
            auto outcome = client.GetObjectAcl(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            const auto& result = outcome.GetResult();
            ObjectAcl acl;
            acl.owner = !result.GetOwner().GetDisplayName().empty()
                            ? fromAws(result.GetOwner().GetDisplayName())
                            : fromAws(result.GetOwner().GetID());
            for (const auto& g : result.GetGrants()) {
                ObjectGrant grant;
                grant.grantee = granteeName(g.GetGrantee());
                grant.type = fromAws(Model::TypeMapper::GetNameForType(g.GetGrantee().GetType()));
                grant.permission = fromAws(Model::PermissionMapper::GetNameForPermission(g.GetPermission()));
                acl.grants.push_back(grant);
            }
            return acl;
        });
}

VoidResult S3ObjectService::setCannedAcl(const Location& object, const QString& cannedAcl)
{
    const Model::ObjectCannedACL canned =
        Model::ObjectCannedACLMapper::GetObjectCannedACLForName(toAws(cannedAcl));
    if (!cannedAclNames().contains(cannedAcl) || canned == Model::ObjectCannedACL::NOT_SET)
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Unknown canned ACL: %1").arg(cannedAcl));
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::PutObjectAclRequest req;
        target(req, session, object);
        req.SetACL(canned);
        auto outcome = client.PutObjectAcl(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

Result<QString> S3ObjectService::objectOwnership(const QString& bucket)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<QString>(bucket, [&](Aws::S3::S3Client& client) -> Result<QString> {
        Model::GetBucketOwnershipControlsRequest req;
        req.SetBucket(toAws(bucket));
        Q_UNUSED(session)
        auto outcome = client.GetBucketOwnershipControls(req);
        if (!outcome.IsSuccess()) {
            const Error e = aws::toError(outcome.GetError());
            if (notConfigured(e) || e.detail.contains(QStringLiteral("NotImplemented")))
                return QString();
            return e;
        }
        const auto& rules = outcome.GetResult().GetOwnershipControls().GetRules();
        if (rules.empty())
            return QString();
        return fromAws(
            Model::ObjectOwnershipMapper::GetNameForObjectOwnership(rules.front().GetObjectOwnership()));
    });
}

// ---------------------------------------------------------------------------
// Object Lock
// ---------------------------------------------------------------------------

Result<bool> S3ObjectService::objectLockEnabled(const QString& bucket)
{
    return m_provider->withClient<bool>(bucket, [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::GetObjectLockConfigurationRequest req;
        req.SetBucket(toAws(bucket));
        auto outcome = client.GetObjectLockConfiguration(req);
        if (!outcome.IsSuccess()) {
            const Error e = aws::toError(outcome.GetError());
            if (notConfigured(e) || e.detail.contains(QStringLiteral("NotImplemented")))
                return false;
            return e;
        }
        return outcome.GetResult().GetObjectLockConfiguration().GetObjectLockEnabled() ==
               Model::ObjectLockEnabled::Enabled;
    });
}

Result<ObjectRetention> S3ObjectService::retention(const Location& object, const QString& versionId)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<ObjectRetention>(
        object.bucket(), [&](Aws::S3::S3Client& client) -> Result<ObjectRetention> {
            Model::GetObjectRetentionRequest req;
            target(req, session, object, versionId);
            auto outcome = client.GetObjectRetention(req);
            if (!outcome.IsSuccess()) {
                const Error e = aws::toError(outcome.GetError());
                if (e.detail.contains(QStringLiteral("NoSuchObjectLockConfiguration")) ||
                    e.code == ErrorCode::NotFound)
                    return ObjectRetention();
                return e;
            }
            const auto& r = outcome.GetResult().GetRetention();
            ObjectRetention out;
            if (r.GetMode() != Model::ObjectLockRetentionMode::NOT_SET)
                out.mode = fromAws(
                    Model::ObjectLockRetentionModeMapper::GetNameForObjectLockRetentionMode(r.GetMode()));
            out.retainUntil = aws::fromAws(r.GetRetainUntilDate());
            return out;
        });
}

VoidResult S3ObjectService::setRetention(const Location& object, const ObjectRetention& retention,
                                         bool bypassGovernance, const QString& versionId)
{
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        ClearRetentionRequest clear;
        Model::PutObjectRetentionRequest set;
        Model::PutObjectRetentionRequest& req = retention.isSet() ? set : clear;
        target(req, session, object, versionId);
        if (retention.isSet()) {
            Model::ObjectLockRetention value;
            value.SetMode(Model::ObjectLockRetentionModeMapper::GetObjectLockRetentionModeForName(
                toAws(retention.mode)));
            value.SetRetainUntilDate(
                Aws::Utils::DateTime(static_cast<int64_t>(retention.retainUntil.toMSecsSinceEpoch())));
            req.SetRetention(value);
        }
        if (bypassGovernance)
            req.SetBypassGovernanceRetention(true);
        auto outcome = client.PutObjectRetention(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

Result<bool> S3ObjectService::legalHold(const Location& object, const QString& versionId)
{
    S3Session& session = m_provider->session();
    return m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::GetObjectLegalHoldRequest req;
        target(req, session, object, versionId);
        auto outcome = client.GetObjectLegalHold(req);
        if (!outcome.IsSuccess()) {
            const Error e = aws::toError(outcome.GetError());
            if (e.detail.contains(QStringLiteral("NoSuchObjectLockConfiguration")) ||
                e.code == ErrorCode::NotFound)
                return false;
            return e;
        }
        return outcome.GetResult().GetLegalHold().GetStatus() == Model::ObjectLockLegalHoldStatus::ON;
    });
}

VoidResult S3ObjectService::setLegalHold(const Location& object, bool on, const QString& versionId)
{
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::PutObjectLegalHoldRequest req;
        target(req, session, object, versionId);
        req.SetLegalHold(Model::ObjectLockLegalHold().WithStatus(on ? Model::ObjectLockLegalHoldStatus::ON
                                                                    : Model::ObjectLockLegalHoldStatus::OFF));
        auto outcome = client.PutObjectLegalHold(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

// ---------------------------------------------------------------------------
// Presigned URLs
// ---------------------------------------------------------------------------

Result<S3ObjectService::Presigned> S3ObjectService::presign(const Location& object, PresignMethod method,
                                                            qint64 seconds)
{
    if (object.bucket().isEmpty() || object.key().isEmpty() || object.key().endsWith(u'/'))
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Presigned URLs are for objects only"));
    seconds = qBound<qint64>(1, seconds, kMaxPresignSeconds);
    Presigned out;
    QDateTime credentialsExpire;
    if (m_provider->session().usesTemporaryCredentials(&credentialsExpire)) {
        out.limitedByCredentials = true;
        if (credentialsExpire.isValid()) {
            const qint64 left = QDateTime::currentDateTimeUtc().secsTo(credentialsExpire);
            if (left > 0 && left < seconds)
                seconds = left;
        }
    }
    auto client = m_provider->session().clientForBucket(object.bucket());
    if (!client)
        return client.error();
    const Aws::String url = client.value()->GeneratePresignedUrl(
        toAws(object.bucket()), toAws(object.key()),
        method == PresignMethod::Get ? Aws::Http::HttpMethod::HTTP_GET : Aws::Http::HttpMethod::HTTP_PUT,
        static_cast<uint64_t>(seconds));
    if (url.empty())
        return Error::make(ErrorCode::Authentication,
                           Tr::tr("Could not sign the URL (no usable credentials)"));
    out.url = fromAws(url);
    out.expires = QDateTime::currentDateTimeUtc().addSecs(seconds);
    return out;
}

// ---------------------------------------------------------------------------
// Checksums
// ---------------------------------------------------------------------------

Result<QList<ChecksumComparison>>
S3ObjectService::compareWithLocal(const Location& object, const QString& localFile, OperationContext& ctx)
{
    auto head = m_provider->headObject(object);
    if (!head)
        return head.error();
    const Entry& e = head.value();
    if (QFileInfo(localFile).size() != e.size) {
        ChecksumComparison size;
        size.algorithm = Tr::tr("Size");
        size.remote = QString::number(e.size);
        size.local = QString::number(QFileInfo(localFile).size());
        return QList<ChecksumComparison>{size};
    }

    // Values to compare: stored checksums, and the ETag when it is an MD5 sum.
    QList<QPair<checksums::Algorithm, QString>> wanted;
    for (auto it = e.metadata.cbegin(); it != e.metadata.cend(); ++it) {
        if (!it.key().startsWith(QStringLiteral("x-amz-checksum-")) || it.key() == u"x-amz-checksum-type")
            continue;
        if (auto a = checksums::fromName(it.key().mid(15)))
            wanted.push_back({*a, it.value()});
    }
    const ObjectEncryption::Mode sse = ObjectEncryption::fromEntry(e).mode;
    if (transfer::isMd5Etag(e.etag) && sse != ObjectEncryption::Mode::Kms &&
        sse != ObjectEncryption::Mode::Customer)
        wanted.push_back({checksums::Algorithm::MD5, e.etag});

    // Multipart values need the part size: the size of part 1.
    qint64 partSize = 0;
    bool anyComposite = false;
    for (const auto& w : wanted)
        anyComposite = anyComposite || w.second.contains(u'-');
    if (anyComposite) {
        auto part =
            m_provider->withClient<qint64>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<qint64> {
                Model::HeadObjectRequest req;
                target(req, m_provider->session(), object);
                req.SetPartNumber(1);
                if (sse == ObjectEncryption::Mode::Customer) {
                    if (auto key = m_provider->session().sseCustomerKey(object.bucket()))
                        aws::setSseCustomerKey(req, *key);
                }
                auto outcome = client.HeadObject(req);
                if (!outcome.IsSuccess())
                    return aws::toError(outcome.GetError());
                return qint64(outcome.GetResult().GetContentLength());
            });
        if (!part)
            return part.error();
        partSize = part.value();
    }

    QList<ChecksumComparison> out;
    for (const auto& [algorithm, remote] : std::as_const(wanted)) {
        if (ctx.isCancelled())
            return Error::cancelled();
        ChecksumComparison c;
        c.algorithm =
            algorithm == checksums::Algorithm::MD5 ? Tr::tr("MD5 (ETag)") : checksums::name(algorithm);
        c.remote = remote;
        c.local = checksums::objectValue(localFile, algorithm, remote.contains(u'-') ? partSize : 0, &ctx);
        c.matches = !c.local.isEmpty() && c.local.compare(remote, Qt::CaseInsensitive) == 0;
        out.push_back(c);
    }
    if (ctx.isCancelled())
        return Error::cancelled();
    return out;
}

// ---------------------------------------------------------------------------
// Bulk changes
// ---------------------------------------------------------------------------

S3ObjectService::BulkReport S3ObjectService::applyBulk(const EntryList& items, const BulkObjectChange& change,
                                                       OperationContext& ctx)
{
    BulkReport report;
    EntryList objects;
    for (const Entry& item : items) {
        if (!item.isDirectory()) {
            objects.push_back(item);
            continue;
        }
        const VoidResult walked = m_provider->walk(
            item.location,
            [&](const Entry& e) {
                if (!e.isDirectory())
                    objects.push_back(e);
                return true;
            },
            ctx);
        if (!walked && !walked.error().isCancelled())
            report.failures.push_back({item.location.displayString(), walked.error()});
    }
    report.objects = int(objects.size());
    ctx.reportProgress(0, report.objects);

    int processed = 0;
    for (const Entry& object : std::as_const(objects)) {
        if (ctx.isCancelled())
            break;
        const Location& l = object.location;
        auto fail = [&](const Error& e) { report.failures.push_back({l.displayString(), e}); };
        bool ok = true;
        if (change.rewritesObject()) {
            CopyOverrides o;
            o.storageClass = change.storageClass;
            o.encryption = change.encryption;
            if (change.headers || !change.removeUserMetadata.isEmpty()) {
                auto current = m_provider->headObject(l);
                if (!current) {
                    fail(current.error());
                    ++processed;
                    ctx.reportProgress(processed, report.objects);
                    continue;
                }
                ObjectHeaders h = ObjectHeaders::fromEntry(current.value());
                if (change.headers) {
                    const ObjectHeaders& n = *change.headers;
                    auto set = [](QString& field, const QString& value) {
                        if (!value.isEmpty())
                            field = value;
                    };
                    set(h.contentType, n.contentType);
                    set(h.cacheControl, n.cacheControl);
                    set(h.contentDisposition, n.contentDisposition);
                    set(h.contentEncoding, n.contentEncoding);
                    set(h.contentLanguage, n.contentLanguage);
                    set(h.expires, n.expires);
                    if (change.replaceUserMetadata)
                        h.userMetadata.clear();
                    for (auto it = n.userMetadata.cbegin(); it != n.userMetadata.cend(); ++it)
                        h.userMetadata.insert(it.key().toLower(), it.value());
                }
                for (const QString& k : change.removeUserMetadata)
                    h.userMetadata.remove(k.toLower());
                o.headers = h;
            }
            OperationContext one;
            one.setParent(&ctx);
            if (auto r = m_provider->copyWith(l, l, o, one); !r) {
                fail(r.error());
                ok = false;
            }
        }
        if (ok && change.tags) {
            if (auto r = setTags(l, *change.tags); !r) {
                fail(r.error());
                ok = false;
            }
        }
        if (ok && !change.cannedAcl.isEmpty()) {
            if (auto r = setCannedAcl(l, change.cannedAcl); !r) {
                fail(r.error());
                ok = false;
            }
        }
        if (ok)
            ++report.done;
        ++processed;
        ctx.reportProgress(processed, report.objects);
    }
    m_provider->invalidateCache(items.isEmpty() ? Location() : items.first().location);
    return report;
}

} // namespace s3fm
