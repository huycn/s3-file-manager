#pragma once

#include "core/OperationContext.h"
#include "providers/s3/S3BucketTypes.h"

#include <QList>
#include <QPair>

#include <memory>

namespace s3fm {

class ProviderRegistry;
class S3Provider;

// Bucket management: creating, emptying and deleting buckets, reading and changing
// bucket settings, and usage statistics. Blocking; call on a worker thread.
// Thread-safe.
//
// Setters take the full new value; an "empty" value (no rules, no tags, no
// policy, encryption None…) removes the configuration. Sub-resources the endpoint
// does not implement are remembered per connection (isUnsupported()).
class S3BucketService
{
public:
    explicit S3BucketService(std::shared_ptr<S3Provider> provider);
    // Service for any location on an S3 connection, or null.
    static std::shared_ptr<S3BucketService> forLocation(ProviderRegistry& registry, const Location& location);

    S3Provider& provider() const { return *m_provider; }
    bool isAws() const;
    bool isUnsupported(BucketFeature feature) const;

    // --- Creation and deletion ---
    VoidResult createBucket(const NewBucket& spec);
    struct Contents
    {
        bool objects = false;  // current objects
        bool versions = false; // any versions or delete markers (incl. hidden ones)
        bool uploads = false;  // incomplete multipart uploads
        bool isEmpty() const { return !objects && !versions && !uploads; }
    };
    Result<Contents> contents(const QString& bucket);
    struct EmptyReport
    {
        qint64 deleted = 0; // objects, versions and delete markers
        int uploadsAborted = 0;
        QStringList failures;
        std::optional<Error> error; // listing failed or cancelled
        bool ok() const { return failures.isEmpty() && !error; }
    };
    // Deletes every object, version and delete marker and aborts incomplete uploads.
    // Progress: items deleted (total unknown).
    EmptyReport emptyBucket(const QString& bucket, bool bypassGovernance, OperationContext& ctx);
    VoidResult deleteBucket(const QString& bucket);

    // --- Settings ---
    Result<BucketOverview> overview(const QString& bucket);
    Result<BucketVersioning> versioning(const QString& bucket);
    VoidResult setVersioning(const QString& bucket, bool enabled);
    Result<BucketEncryption> encryption(const QString& bucket);
    VoidResult setEncryption(const QString& bucket, const BucketEncryption& encryption);
    Result<QList<LifecycleRule>> lifecycle(const QString& bucket);
    VoidResult setLifecycle(const QString& bucket, const QList<LifecycleRule>& rules);
    Result<QList<CorsRule>> cors(const QString& bucket);
    VoidResult setCors(const QString& bucket, const QList<CorsRule>& rules);
    Result<QString> policy(const QString& bucket); // JSON, empty if none
    VoidResult setPolicy(const QString& bucket, const QString& json);
    Result<PublicAccessBlock> publicAccessBlock(const QString& bucket);
    VoidResult setPublicAccessBlock(const QString& bucket, const PublicAccessBlock& block);
    Result<QMap<QString, QString>> tags(const QString& bucket);
    VoidResult setTags(const QString& bucket, const QMap<QString, QString>& tags);
    Result<WebsiteConfig> website(const QString& bucket);
    VoidResult setWebsite(const QString& bucket, const WebsiteConfig& config);
    Result<ObjectLockDefaults> objectLock(const QString& bucket);
    // Enables Object Lock (if not yet; irreversible) and sets or clears the default
    // retention.
    VoidResult setObjectLock(const QString& bucket, const ObjectLockDefaults& defaults);

    // --- Statistics ---
    // Counts objects and bytes below `prefix` by listing (one request per 1000
    // keys). Progress: items counted (total unknown). Cancelling returns the partial
    // counts with `complete` false.
    Result<BucketStats> statistics(const QString& bucket, const QString& prefix, OperationContext& ctx);

private:
    template <class T> Result<T> track(BucketFeature feature, Result<T> result);
    VoidResult deleteBatch(const QString& bucket, const QList<QPair<QString, QString>>& keys,
                           bool bypassGovernance, EmptyReport& report);

    std::shared_ptr<S3Provider> m_provider;
};

} // namespace s3fm
