#pragma once

#include "core/OperationContext.h"
#include "providers/s3/S3Types.h"

#include <QDateTime>

#include <memory>

namespace s3fm {

class ProviderRegistry;
class S3Provider;

// Object-level S3 features beyond the generic Provider interface: editing
// metadata/storage class/encryption (by rewriting the object in place), tags,
// ACLs, Object Lock, presigned URLs, checksum comparison and bulk changes.
// All methods block; call them on a worker thread. Thread-safe.
class S3ObjectService
{
public:
    explicit S3ObjectService(std::shared_ptr<S3Provider> provider);

    // Service for an S3 location, or null if it is not served by an S3Provider.
    static std::shared_ptr<S3ObjectService> forLocation(ProviderRegistry& registry, const Location& location);

    S3Provider& provider() const { return *m_provider; }

    // HeadObject plus tags, ACL, bucket ownership and Object Lock state.
    Result<ObjectDetails> details(const Location& object, OperationContext& ctx);

    // Copies the object onto itself with the given changes. Note: S3 resets the ACL
    // of a rewritten object to the bucket default; tags are kept.
    VoidResult rewrite(const Location& object, const CopyOverrides& changes, OperationContext& ctx);

    Result<QMap<QString, QString>> tags(const Location& object, const QString& versionId = {});
    VoidResult setTags(const Location& object, const QMap<QString, QString>& tags,
                       const QString& versionId = {});

    Result<ObjectAcl> acl(const Location& object);
    VoidResult setCannedAcl(const Location& object, const QString& cannedAcl);
    // Bucket "Object Ownership" (BucketOwnerEnforced means ACLs are disabled).
    // Empty when not set or not supported by the endpoint.
    Result<QString> objectOwnership(const QString& bucket);

    Result<bool> objectLockEnabled(const QString& bucket);
    Result<ObjectRetention> retention(const Location& object, const QString& versionId = {});
    // An empty retention removes it (GOVERNANCE only, needs `bypassGovernance`).
    VoidResult setRetention(const Location& object, const ObjectRetention& retention, bool bypassGovernance,
                            const QString& versionId = {});
    Result<bool> legalHold(const Location& object, const QString& versionId = {});
    VoidResult setLegalHold(const Location& object, bool on, const QString& versionId = {});

    enum class PresignMethod
    {
        Get,
        Put
    };
    struct Presigned
    {
        QString url;
        QDateTime expires;
        bool limitedByCredentials = false; // temporary credentials expire earlier
    };
    static constexpr qint64 kMaxPresignSeconds = 7 * 24 * 3600; // SigV4 limit
    Result<Presigned> presign(const Location& object, PresignMethod method, qint64 seconds);

    // Stored checksums (and the ETag as MD5) against `localFile`.
    Result<QList<ChecksumComparison>> compareWithLocal(const Location& object, const QString& localFile,
                                                       OperationContext& ctx);

    struct BulkReport
    {
        int objects = 0; // objects found
        int done = 0;
        QList<QPair<QString, Error>> failures; // display path, error
    };
    // Applies `change` to every object in `items` (folders are expanded).
    // Progress: objects processed / total.
    BulkReport applyBulk(const EntryList& items, const BulkObjectChange& change, OperationContext& ctx);

private:
    std::shared_ptr<S3Provider> m_provider;
};

} // namespace s3fm
