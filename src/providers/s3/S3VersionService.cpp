#include "providers/s3/S3VersionService.h"

#include "core/Format.h"
#include "core/ProviderRegistry.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/S3Errors.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Requests.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3Types.h"

#include <QCoreApplication>
#include <QRegularExpression>

#include <aws/s3/S3Client.h>
#include <aws/s3/model/AbortMultipartUploadRequest.h>
#include <aws/s3/model/Delete.h>
#include <aws/s3/model/DeleteObjectsRequest.h>
#include <aws/s3/model/GetBucketVersioningRequest.h>
#include <aws/s3/model/ListMultipartUploadsRequest.h>
#include <aws/s3/model/ListPartsRequest.h>
#include <aws/s3/model/ObjectIdentifier.h>
#include <aws/s3/model/RestoreObjectRequest.h>

#include <algorithm>

namespace s3fm {

using aws::fromAws;
using aws::toAws;
namespace Model = Aws::S3::Model;

namespace {

QString tr(const char* text)
{
    return QCoreApplication::translate("s3fm::S3VersionService", text);
}

} // namespace

// ---------------------------------------------------------------------------
// RestoreStatus
// ---------------------------------------------------------------------------

RestoreStatus RestoreStatus::parse(const QString& storageClass, const QString& restoreHeader,
                                   const QString& archiveStatus)
{
    RestoreStatus s;
    s.archived = isArchiveStorageClass(storageClass) || archiveStatus == u"ARCHIVE_ACCESS" ||
                 archiveStatus == u"DEEP_ARCHIVE_ACCESS";
    if (restoreHeader.isEmpty())
        return s;
    // ongoing-request="false", expiry-date="Fri, 21 Dec 2012 00:00:00 GMT"
    static const QRegularExpression ongoing(QStringLiteral("ongoing-request=\"(true|false)\""));
    static const QRegularExpression expiry(QStringLiteral("expiry-date=\"([^\"]+)\""));
    if (const auto m = ongoing.match(restoreHeader); m.hasMatch())
        s.inProgress = m.captured(1) == u"true";
    if (const auto m = expiry.match(restoreHeader); m.hasMatch()) {
        QString date = m.captured(1);
        if (date.endsWith(QStringLiteral(" GMT"))) // Qt wants a numeric zone
            date = date.chopped(4) + QStringLiteral(" +0000");
        s.expires = QDateTime::fromString(date, Qt::RFC2822Date);
        if (s.expires.isValid())
            s.expires = s.expires.toUTC();
    }
    return s;
}

RestoreStatus RestoreStatus::fromEntry(const Entry& head)
{
    return parse(head.storageClass, head.metadata.value(QStringLiteral("x-amz-restore")),
                 head.metadata.value(QStringLiteral("x-amz-archive-status")));
}

QString RestoreStatus::describe() const
{
    if (!archived)
        return tr("Not archived");
    if (inProgress)
        return tr("Archived; restore in progress");
    if (expires.isValid())
        return tr("Archived; restored copy available until %1").arg(formatDateTime(expires));
    return tr("Archived; restore it to read the data");
}

// ---------------------------------------------------------------------------
// Versions
// ---------------------------------------------------------------------------

S3VersionService::S3VersionService(std::shared_ptr<S3Provider> provider) : m_provider(std::move(provider)) {}

std::shared_ptr<S3VersionService> S3VersionService::forLocation(ProviderRegistry& registry,
                                                                const Location& location)
{
    if (!location.isS3())
        return nullptr;
    auto s3 = std::dynamic_pointer_cast<S3Provider>(registry.providerFor(location));
    return s3 ? std::make_shared<S3VersionService>(s3) : nullptr;
}

Result<QString> S3VersionService::versioningStatus(const QString& bucket)
{
    return m_provider->withClient<QString>(bucket, [&](Aws::S3::S3Client& client) -> Result<QString> {
        Model::GetBucketVersioningRequest req;
        req.SetBucket(toAws(bucket));
        auto outcome = client.GetBucketVersioning(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto status = outcome.GetResult().GetStatus();
        if (status == Model::BucketVersioningStatus::NOT_SET)
            return QString();
        return fromAws(Model::BucketVersioningStatusMapper::GetNameForBucketVersioningStatus(status));
    });
}

Result<EntryList> S3VersionService::versions(const Location& object, OperationContext& ctx)
{
    EntryList out;
    QString token;
    const QString key = object.key();
    do {
        // Prefix = the key itself; other keys starting with it are filtered out.
        auto page = m_provider->listVersionsPage(object.bucket(), key, false, token, ctx);
        if (!page)
            return page.error();
        bool pastKey = false;
        for (Entry& e : page->entries) {
            if (e.location.key() == key)
                out.push_back(std::move(e));
            else if (e.location.key() > key)
                pastKey = true;
        }
        token = pastKey ? QString() : page->nextPageToken;
    } while (!token.isEmpty());
    std::sort(out.begin(), out.end(), [](const Entry& a, const Entry& b) {
        if (a.isLatest != b.isLatest)
            return a.isLatest;
        return a.modified > b.modified;
    });
    return out;
}

VoidResult S3VersionService::deleteVersions(const EntryList& versions, bool bypassGovernance,
                                            OperationContext& ctx)
{
    QHash<QString, EntryList> byBucket;
    for (const Entry& v : versions) {
        if (v.versionId.isEmpty())
            return Error::make(ErrorCode::InvalidArgument,
                               tr("Not a version: %1").arg(v.location.displayString()));
        byBucket[v.location.bucket()].push_back(v);
    }
    S3Session& session = m_provider->session();
    QStringList failures;
    qint64 done = 0;
    for (auto it = byBucket.cbegin(); it != byBucket.cend(); ++it) {
        const QString bucket = it.key();
        m_provider->invalidateCache(Location::s3(session.profile().id, bucket));
        for (qsizetype start = 0; start < it->size(); start += 1000) {
            if (ctx.isCancelled())
                return Error::cancelled();
            const EntryList batch = it->mid(start, 1000);
            auto r = m_provider->withClient<bool>(bucket, [&](Aws::S3::S3Client& client) -> Result<bool> {
                Model::Delete del;
                del.SetQuiet(true);
                for (const Entry& v : batch)
                    del.AddObjects(Model::ObjectIdentifier()
                                       .WithKey(toAws(v.location.key()))
                                       .WithVersionId(toAws(v.versionId)));
                Model::DeleteObjectsRequest req;
                req.SetBucket(toAws(bucket));
                aws::setRequesterPays(req, session.requesterPays(bucket));
                req.SetDelete(del);
                if (bypassGovernance)
                    req.SetBypassGovernanceRetention(true);
                auto outcome = client.DeleteObjects(req);
                if (!outcome.IsSuccess())
                    return aws::toError(outcome.GetError());
                for (const auto& err : outcome.GetResult().GetErrors())
                    failures.push_back(QStringLiteral("%1 (%2): %3 %4")
                                           .arg(fromAws(err.GetKey()), fromAws(err.GetVersionId()),
                                                fromAws(err.GetCode()), fromAws(err.GetMessage())));
                return true;
            });
            if (!r)
                return r.error();
            done += batch.size();
            ctx.reportProgress(done, versions.size());
        }
    }
    if (failures.isEmpty())
        return {};
    return Error::make(ErrorCode::AccessDenied,
                       QCoreApplication::translate("s3fm::S3VersionService",
                                                   "%n version(s) could not be deleted", nullptr,
                                                   int(failures.size())),
                       failures.mid(0, 20).join(u'\n'));
}

VoidResult S3VersionService::restoreVersion(const Location& object, const QString& versionId,
                                            OperationContext& ctx)
{
    TransferParams params;
    params.sourceVersionId = versionId;
    params.verify = true;
    OperationContext copyCtx;
    copyCtx.setParent(&ctx);
    copyCtx.setParams(&params);
    return m_provider->copyWith(object, object, {}, copyCtx);
}

VoidResult S3VersionService::undelete(const Location& object, OperationContext& ctx)
{
    auto all = versions(object, ctx);
    if (!all)
        return all.error();
    for (const Entry& v : all.value()) {
        if (v.isLatest) {
            if (!v.isDeleteMarker)
                return Error::make(ErrorCode::InvalidArgument,
                                   tr("%1 is not deleted").arg(object.displayString()));
            return deleteVersions({v}, false, ctx);
        }
    }
    return Error::make(ErrorCode::NotFound, tr("No versions of %1").arg(object.displayString()));
}

VoidResult S3VersionService::downloadVersion(const Location& object, const QString& versionId,
                                             const QString& localFile, OperationContext& ctx)
{
    TransferParams params;
    params.sourceVersionId = versionId;
    OperationContext inner;
    inner.setParent(&ctx);
    inner.setParams(&params);
    inner.setProgressHandler([&ctx](qint64 done, qint64 total) { ctx.reportProgress(done, total); });
    return m_provider->download(object, localFile, inner);
}

// ---------------------------------------------------------------------------
// Archive restore
// ---------------------------------------------------------------------------

VoidResult S3VersionService::requestRestore(const Location& object, int days, const QString& tier,
                                            const QString& versionId)
{
    const Model::Tier t = Model::TierMapper::GetTierForName(toAws(tier));
    if (tier != u"Expedited" && tier != u"Standard" && tier != u"Bulk")
        return Error::make(ErrorCode::InvalidArgument, tr("Unknown restore tier: %1").arg(tier));
    if (days < 1)
        return Error::make(ErrorCode::InvalidArgument, tr("Restore for at least one day"));
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(object.bucket(), [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::RestoreObjectRequest req;
        req.SetBucket(toAws(object.bucket()));
        req.SetKey(toAws(object.key()));
        if (!versionId.isEmpty())
            req.SetVersionId(toAws(versionId));
        aws::setRequesterPays(req, session.requesterPays(object.bucket()));
        Model::RestoreRequest restore;
        restore.SetDays(days);
        restore.SetGlacierJobParameters(Model::GlacierJobParameters().WithTier(t));
        req.SetRestoreRequest(restore);
        auto outcome = client.RestoreObject(req);
        if (!outcome.IsSuccess()) {
            Error e = aws::toError(outcome.GetError());
            if (e.detail.contains(QStringLiteral("RestoreAlreadyInProgress")))
                return true;
            return e;
        }
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

S3VersionService::RestoreReport S3VersionService::restoreAll(const EntryList& items, int days,
                                                             const QString& tier, OperationContext& ctx)
{
    RestoreReport report;
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
    int processed = 0;
    for (const Entry& object : std::as_const(objects)) {
        if (ctx.isCancelled())
            break;
        ctx.reportProgress(processed++, objects.size());
        // Listings know the storage class; only archived objects need a look at their state.
        if (!object.storageClass.isEmpty() && !isArchiveStorageClass(object.storageClass) &&
            object.storageClass != u"INTELLIGENT_TIERING") {
            ++report.alreadyAvailable;
            continue;
        }
        auto head = m_provider->headObject(object.location, object.isLatest ? QString() : object.versionId);
        if (!head) {
            report.failures.push_back({object.location.displayString(), head.error()});
            continue;
        }
        const RestoreStatus status = RestoreStatus::fromEntry(head.value());
        if (!status.archived || status.inProgress || status.expires.isValid()) {
            ++report.alreadyAvailable;
            continue;
        }
        if (auto r = requestRestore(object.location, days, tier, head->versionId); !r)
            report.failures.push_back({object.location.displayString(), r.error()});
        else
            ++report.requested;
    }
    ctx.reportProgress(objects.size(), objects.size());
    return report;
}

// ---------------------------------------------------------------------------
// Incomplete multipart uploads
// ---------------------------------------------------------------------------

Result<QList<PendingUpload>> S3VersionService::pendingUploads(const QString& bucket, const QString& prefix,
                                                              OperationContext& ctx)
{
    QList<PendingUpload> out;
    Aws::String keyMarker;
    Aws::String idMarker;
    S3Session& session = m_provider->session();
    while (true) {
        if (ctx.isCancelled())
            return Error::cancelled();
        auto page = m_provider->withClient<bool>(bucket, [&](Aws::S3::S3Client& client) -> Result<bool> {
            Model::ListMultipartUploadsRequest req;
            req.SetBucket(toAws(bucket));
            aws::setRequesterPays(req, session.requesterPays(bucket));
            if (!prefix.isEmpty())
                req.SetPrefix(toAws(prefix));
            if (!keyMarker.empty())
                req.SetKeyMarker(keyMarker);
            if (!idMarker.empty())
                req.SetUploadIdMarker(idMarker);
            auto outcome = client.ListMultipartUploads(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            const auto& result = outcome.GetResult();
            for (const auto& u : result.GetUploads()) {
                PendingUpload p;
                p.key = fromAws(u.GetKey());
                p.uploadId = fromAws(u.GetUploadId());
                p.initiated = aws::fromAws(u.GetInitiated());
                if (u.GetStorageClass() != Model::StorageClass::NOT_SET)
                    p.storageClass =
                        fromAws(Model::StorageClassMapper::GetNameForStorageClass(u.GetStorageClass()));
                p.initiator = fromAws(u.GetInitiator().GetDisplayName());
                if (p.initiator.isEmpty())
                    p.initiator = fromAws(u.GetInitiator().GetID());
                out.push_back(p);
            }
            const bool more = result.GetIsTruncated() && (result.GetNextKeyMarker() != keyMarker ||
                                                          result.GetNextUploadIdMarker() != idMarker);
            keyMarker = more ? result.GetNextKeyMarker() : Aws::String();
            idMarker = more ? result.GetNextUploadIdMarker() : Aws::String();
            return more;
        });
        if (!page)
            return page.error();
        if (!page.value())
            break;
    }
    return out;
}

VoidResult S3VersionService::countParts(const QString& bucket, PendingUpload& upload, OperationContext& ctx)
{
    int parts = 0;
    qint64 size = 0;
    int marker = 0;
    S3Session& session = m_provider->session();
    while (true) {
        if (ctx.isCancelled())
            return Error::cancelled();
        auto more = m_provider->withClient<bool>(bucket, [&](Aws::S3::S3Client& client) -> Result<bool> {
            Model::ListPartsRequest req;
            req.SetBucket(toAws(bucket));
            req.SetKey(toAws(upload.key));
            req.SetUploadId(toAws(upload.uploadId));
            aws::setRequesterPays(req, session.requesterPays(bucket));
            if (marker > 0)
                req.SetPartNumberMarker(marker);
            auto outcome = client.ListParts(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            for (const auto& p : outcome.GetResult().GetParts()) {
                ++parts;
                size += p.GetSize();
            }
            const int next = outcome.GetResult().GetNextPartNumberMarker();
            const bool truncated = outcome.GetResult().GetIsTruncated() && next > marker;
            marker = next;
            return truncated;
        });
        if (!more)
            return more.error();
        if (!more.value())
            break;
    }
    upload.parts = parts;
    upload.size = size;
    return {};
}

VoidResult S3VersionService::abortUpload(const QString& bucket, const PendingUpload& upload)
{
    S3Session& session = m_provider->session();
    auto r = m_provider->withClient<bool>(bucket, [&](Aws::S3::S3Client& client) -> Result<bool> {
        Model::AbortMultipartUploadRequest req;
        req.SetBucket(toAws(bucket));
        req.SetKey(toAws(upload.key));
        req.SetUploadId(toAws(upload.uploadId));
        aws::setRequesterPays(req, session.requesterPays(bucket));
        auto outcome = client.AbortMultipartUpload(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

} // namespace s3fm
