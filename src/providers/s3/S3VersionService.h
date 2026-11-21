#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/OperationContext.h"

#include <QDateTime>
#include <QList>
#include <QPair>

#include <memory>

namespace s3fm {

class ProviderRegistry;
class S3Provider;

// Archive state of an object (Glacier Flexible Retrieval, Deep Archive, and the
// archive tiers of Intelligent-Tiering).
struct RestoreStatus
{
    bool archived = false;   // a restore is needed before the data can be read
    bool inProgress = false; // a restore was requested and is running
    QDateTime expires;       // restored copy available until (valid: restored)

    bool readable() const { return !archived || (!inProgress && expires.isValid()); }
    QString describe() const;

    // From HeadObject: storage class, the x-amz-restore header and
    // x-amz-archive-status (Intelligent-Tiering).
    static RestoreStatus parse(const QString& storageClass, const QString& restoreHeader,
                               const QString& archiveStatus = {});
    static RestoreStatus fromEntry(const Entry& head);
};

// An incomplete multipart upload: parts stored (and billed) but no object yet.
struct PendingUpload
{
    QString key;
    QString uploadId;
    QDateTime initiated;
    QString storageClass;
    QString initiator;
    int parts = -1; // -1: not counted yet
    qint64 size = -1;
};

// Object versions, archive restores and incomplete multipart uploads.
// Blocking; call on a worker thread. Thread-safe.
class S3VersionService
{
public:
    explicit S3VersionService(std::shared_ptr<S3Provider> provider);
    static std::shared_ptr<S3VersionService> forLocation(ProviderRegistry& registry,
                                                         const Location& location);

    // "Enabled", "Suspended", or empty if versioning was never enabled.
    Result<QString> versioningStatus(const QString& bucket);

    // Every version and delete marker of exactly this key, newest first.
    Result<EntryList> versions(const Location& object, OperationContext& ctx);
    // Permanently deletes versions (Entry::versionId; delete markers included).
    // `bypassGovernance` also removes versions under a governance-mode retention.
    VoidResult deleteVersions(const EntryList& versions, bool bypassGovernance, OperationContext& ctx);
    // Makes `versionId` the current version again (copies it over the object).
    VoidResult restoreVersion(const Location& object, const QString& versionId, OperationContext& ctx);
    // Removes the delete marker that hides the object (it reappears).
    VoidResult undelete(const Location& object, OperationContext& ctx);
    VoidResult downloadVersion(const Location& object, const QString& versionId, const QString& localFile,
                               OperationContext& ctx);

    // Archive restore: a temporary copy for `days`, tier Expedited / Standard / Bulk.
    VoidResult requestRestore(const Location& object, int days, const QString& tier,
                              const QString& versionId = {});
    struct RestoreReport
    {
        int requested = 0;
        int alreadyAvailable = 0; // not archived, restored, or a restore already running
        QList<QPair<QString, Error>> failures;
    };
    // Requests restores for every archived object in `items` (folders expanded).
    RestoreReport restoreAll(const EntryList& items, int days, const QString& tier, OperationContext& ctx);

    Result<QList<PendingUpload>> pendingUploads(const QString& bucket, const QString& prefix,
                                                OperationContext& ctx);
    // Fills `parts` and `size` (ListParts).
    VoidResult countParts(const QString& bucket, PendingUpload& upload, OperationContext& ctx);
    VoidResult abortUpload(const QString& bucket, const PendingUpload& upload);

private:
    std::shared_ptr<S3Provider> m_provider;
};

} // namespace s3fm
