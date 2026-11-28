#pragma once

#include "core/Provider.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3Types.h"

#include <QDateTime>
#include <QHash>
#include <QMutex>

#include <functional>
#include <memory>

namespace Aws::S3 {
class S3Client;
}

namespace s3fm {

class S3ObjectService;
class S3Session;
namespace aws {
struct CopyPlan;
}

// Provider for one S3 connection: s3://<connection>/<bucket>/<key>.
//
// * Directories are '/'-delimited prefixes; empty folders are kept with zero-byte
//   "prefix/" marker objects.
// * rename() is not native on S3; it reports Unsupported and the transfer engine
//   falls back to server-side copy + delete.
// * Transfers honour TransferParams (OperationContext::params()): parallel and
//   resumable multipart uploads/copies, ranged download resume, MD5/ETag checks.
// * First pages of listings are cached briefly (back/forward navigation); any
//   change made through this provider drops the bucket's cache.
class S3Provider final : public Provider
{
public:
    explicit S3Provider(std::shared_ptr<S3Session> session);
    ~S3Provider() override;

    Capabilities capabilities(const Location& location) const override;
    Result<ListPage> list(const Location& dir, const QString& pageToken, OperationContext& ctx) override;
    Result<ListPage> listWithOptions(const Location& dir, const QString& pageToken,
                                     const ListOptions& options, OperationContext& ctx) override;
    Result<Entry> stat(const Location& location, OperationContext& ctx) override;
    VoidResult makeDirectory(const Location& dir, OperationContext& ctx) override;
    VoidResult remove(const EntryList& items, OperationContext& ctx) override;
    VoidResult rename(const Location& from, const Location& to, OperationContext& ctx) override;
    VoidResult copy(const Location& from, const Location& to, OperationContext& ctx) override;
    VoidResult download(const Location& from, const QString& localFile, OperationContext& ctx) override;
    VoidResult upload(const QString& localFile, const Location& to, OperationContext& ctx) override;
    VoidResult walk(const Location& dir, const Visitor& visit, OperationContext& ctx) override;
    VoidResult walkPrefix(const Location& dir, const QString& prefix, const Visitor& visit,
                          OperationContext& ctx) override;
    void discardPartialTransfer(const Location& remote, const QString& localFile,
                                const TransferCheckpoint& checkpoint) override;
    void invalidateCache(const Location& location) override;

    S3Session& session() const { return *m_session; }

    // Server-side copy with changed attributes (headers, storage class, encryption).
    // `from == to` rewrites the object in place.
    VoidResult copyWith(const Location& from, const Location& to, const CopyOverrides& overrides,
                        OperationContext& ctx);
    // One page of ListObjectVersions below `prefix` ('/'-delimited or flat): versions
    // and delete markers as entries, folders as directories.
    Result<ListPage> listVersionsPage(const QString& bucket, const QString& prefix, bool delimited,
                                      const QString& token, OperationContext& ctx);
    // HeadObject (a specific version if `versionId` is set), with SSE-C retry.
    Result<Entry> headObject(const Location& location, const QString& versionId = {});

    // Tuning knobs (tests use small values).
    void setListPageSize(int keys) { m_pageSize = keys; }
    void setMultipartThreshold(qint64 bytes) { m_multipartThreshold = bytes; }
    void setPartSize(qint64 bytes) { m_partSize = bytes; }
    void setCopyPartThreshold(qint64 bytes) { m_copyThreshold = bytes; }
    void setCacheTtlMs(int ms) { m_cacheTtlMs = ms; }

    // Part size for a multipart transfer of `size` bytes: at least `preferred`, large
    // enough to stay within S3's 10,000-part limit, rounded up to 1 MiB.
    static qint64 partSizeFor(qint64 size, qint64 preferred);

private:
    friend class S3BucketService;
    friend class S3ObjectService;
    friend class S3VersionService;
    using Client = Aws::S3::S3Client;
    // Runs `fn` with the client for `bucket`; on AWS, rediscovers the bucket's region
    // and retries once after a redirect.
    template <class T>
    Result<T> withClient(const QString& bucket, const std::function<Result<T>(Client&)>& fn)
    {
        auto client = m_session->clientForBucket(bucket);
        if (!client)
            return client.error();
        Result<T> result = fn(*client.value());
        if (!result && m_session->isAws() && isRedirect(result.error())) {
            m_session->forgetBucketRegion(bucket);
            client = m_session->clientForBucket(bucket);
            if (!client)
                return client.error();
            result = fn(*client.value());
        }
        return result;
    }
    static bool isRedirect(const Error& e);

    Result<ListPage> listBuckets(const Location& connection);
    Result<ListPage> listObjects(const Location& dir, const QString& token, OperationContext& ctx);
    Result<ListPage> listObjectVersions(const Location& dir, const QString& token, OperationContext& ctx);
    Result<ListPage> listAsOf(const Location& dir, const QDateTime& at, OperationContext& ctx);
    Result<Entry> headObjectOnce(const Location& location, const QString& versionId,
                                 const SseCustomerKey* key);
    Result<bool> prefixExists(const QString& bucket, const QString& prefix);
    // Flat (recursive) listing of every key under `prefix`; the callback returns false to stop.
    using KeyVisitor = std::function<bool(const Entry& object)>;
    VoidResult listFlat(const QString& bucket, const QString& prefix, const KeyVisitor& visit,
                        OperationContext& ctx);
    VoidResult deleteKeys(const QString& bucket, const QStringList& keys, OperationContext& ctx, qint64& done,
                          QStringList& failures);
    VoidResult putObject(const QString& localFile, const Location& to, qint64 size, OperationContext& ctx);
    VoidResult multipartUpload(const QString& localFile, const Location& to, qint64 size,
                               OperationContext& ctx);
    VoidResult multipartCopy(const Location& from, const Entry& source, const Location& to,
                             const aws::CopyPlan& plan, const SseCustomerKey* sourceKey,
                             const SseCustomerKey* destKey, OperationContext& ctx);
    void dropBucketCache(const QString& bucket);

    std::shared_ptr<S3Session> m_session;
    int m_pageSize = 1000;
    qint64 m_multipartThreshold = 64LL * 1024 * 1024;
    qint64 m_partSize = 16LL * 1024 * 1024;
    qint64 m_copyThreshold = 5LL * 1024 * 1024 * 1024; // CopyObject limit
    int m_cacheTtlMs = 30000;

    struct CachedPage
    {
        ListPage page;
        QDateTime stored;
    };
    QMutex m_cacheMutex;
    QHash<QString, CachedPage> m_cache;
};

} // namespace s3fm
