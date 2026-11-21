#include "providers/s3/S3Provider.h"

#include "core/BandwidthLimiter.h"
#include "core/Logging.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/S3Errors.h"
#include "providers/s3/S3Requests.h"
#include "providers/s3/S3Session.h"
#include "transfer/TransferMath.h"

#include <QCoreApplication>
#include <QCryptographicHash>
#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QMimeDatabase>
#include <QSet>
#include <QUrl>

#include <aws/core/utils/stream/PreallocatedStreamBuf.h>
#include <aws/s3/S3Client.h>
#include <aws/s3/model/AbortMultipartUploadRequest.h>
#include <aws/s3/model/CompleteMultipartUploadRequest.h>
#include <aws/s3/model/CompletedMultipartUpload.h>
#include <aws/s3/model/CompletedPart.h>
#include <aws/s3/model/CopyObjectRequest.h>
#include <aws/s3/model/CreateMultipartUploadRequest.h>
#include <aws/s3/model/Delete.h>
#include <aws/s3/model/DeleteObjectsRequest.h>
#include <aws/s3/model/GetObjectRequest.h>
#include <aws/s3/model/HeadBucketRequest.h>
#include <aws/s3/model/HeadObjectRequest.h>
#include <aws/s3/model/ListBucketsRequest.h>
#include <aws/s3/model/ListObjectVersionsRequest.h>
#include <aws/s3/model/ListObjectsV2Request.h>
#include <aws/s3/model/ListPartsRequest.h>
#include <aws/s3/model/ObjectIdentifier.h>
#include <aws/s3/model/PutObjectRequest.h>
#include <aws/s3/model/UploadPartCopyRequest.h>
#include <aws/s3/model/UploadPartRequest.h>

#include <algorithm>
#include <atomic>
#include <filesystem>
#include <fstream>
#include <optional>
#include <thread>
#include <vector>

namespace s3fm {

using aws::cleanEtag;
using aws::fromAws;
using aws::toAws;
using transfer::isMd5Etag;
namespace Model = Aws::S3::Model;

namespace {

constexpr const char* kTag = "s3fm";
constexpr int kMaxDeleteBatch = 1000;
constexpr qint64 kMiB = 1024 * 1024;
const QString kMtimeKey =
    QStringLiteral("mtime"); // x-amz-meta-mtime, seconds since epoch (rclone-compatible)

QString tr(const char* text)
{
    return QCoreApplication::translate("s3fm::S3Provider", text);
}

std::filesystem::path toFsPath(const QString& path)
{
#ifdef Q_OS_WIN
    return std::filesystem::path(QDir::toNativeSeparators(path).toStdWString());
#else
    const QByteArray utf8 = path.toUtf8();
    return std::filesystem::path(
        std::u8string(reinterpret_cast<const char8_t*>(utf8.constData()), size_t(utf8.size())));
#endif
}

} // namespace

bool S3Provider::isRedirect(const Error& e)
{
    return e.detail.contains(QStringLiteral("PermanentRedirect")) ||
           e.detail.contains(QStringLiteral("HTTP 301")) ||
           e.detail.contains(QStringLiteral("AuthorizationHeaderMalformed"));
}

namespace {

QString storageClassName(Model::ObjectStorageClass c)
{
    if (c == Model::ObjectStorageClass::NOT_SET)
        return {};
    return fromAws(Model::ObjectStorageClassMapper::GetNameForObjectStorageClass(c));
}

QString storageClassName(Model::StorageClass c)
{
    if (c == Model::StorageClass::NOT_SET)
        return {};
    return fromAws(Model::StorageClassMapper::GetNameForStorageClass(c));
}

// S3 percent-encodes keys when EncodingType=url was requested and honoured.
QString decodeKey(const Aws::String& raw, bool urlEncoded)
{
    if (!urlEncoded)
        return fromAws(raw);
    QByteArray bytes(raw.data(), qsizetype(raw.size()));
    bytes.replace('+', "%20"); // form encoding of spaces
    return QString::fromUtf8(QByteArray::fromPercentEncoding(bytes));
}

QString copySource(const QString& bucket, const QString& key, const QString& versionId = {})
{
    QString source = bucket + u'/' + QString::fromUtf8(QUrl::toPercentEncoding(key, "/"));
    if (!versionId.isEmpty())
        source += QStringLiteral("?versionId=") + QString::fromUtf8(QUrl::toPercentEncoding(versionId));
    return source;
}

Error cancelledOr(const Aws::Client::AWSError<Aws::S3::S3Errors>& error, const OperationContext& ctx)
{
    if (ctx.isCancelled())
        return Error::cancelled();
    return aws::toError(error);
}

// Requester Pays: bill requests to buckets marked in the connection to the caller.
template <class Req> void payer(Req& req, const S3Session& session, const QString& bucket)
{
    aws::setRequesterPays(req, session.requesterPays(bucket));
}

bool useChecksums(const S3Session& session)
{
    return session.profile().checksumMode == ConnectionProfile::ChecksumMode::WhenSupported;
}

QDateTime mtimeFromMetadata(const QMap<QString, QString>& metadata)
{
    bool ok = false;
    const double secs = metadata.value(QStringLiteral("x-amz-meta-") + kMtimeKey).toDouble(&ok);
    if (!ok || secs <= 0)
        return {};
    return QDateTime::fromMSecsSinceEpoch(qint64(secs * 1000.0), QTimeZone::UTC);
}

} // namespace

S3Provider::S3Provider(std::shared_ptr<S3Session> session) : m_session(std::move(session)) {}

S3Provider::~S3Provider() = default;

qint64 S3Provider::partSizeFor(qint64 size, qint64 preferred)
{
    return transfer::partSizeFor(size, preferred);
}

Capabilities S3Provider::capabilities(const Location& location) const
{
    if (location.bucket().isEmpty())
        return Capability::None;
    return Capability::MakeDirectory | Capability::Remove | Capability::ServerSideCopy | Capability::Read |
           Capability::Write | Capability::ImplicitDirectories | Capability::Versions;
}

// ---------------------------------------------------------------------------
// Listing
// ---------------------------------------------------------------------------

Result<ListPage> S3Provider::list(const Location& dir, const QString& pageToken, OperationContext& ctx)
{
    if (!dir.isS3() || dir.connectionId().isEmpty())
        return Error::make(ErrorCode::InvalidArgument, tr("Not an S3 location"));
    if (dir.bucket().isEmpty())
        return listBuckets(dir);

    const QString prefix = dir.asDirectory().key();
    const QString cacheKey = dir.bucket() + u'\n' + prefix + u'\n' + pageToken;
    {
        QMutexLocker lock(&m_cacheMutex);
        auto it = m_cache.constFind(cacheKey);
        if (it != m_cache.cend() && it->stored.msecsTo(QDateTime::currentDateTimeUtc()) < m_cacheTtlMs)
            return it->page;
    }
    auto page = listObjects(dir.asDirectory(), pageToken, ctx);
    if (page && m_cacheTtlMs > 0) {
        QMutexLocker lock(&m_cacheMutex);
        m_cache.insert(cacheKey, {page.value(), QDateTime::currentDateTimeUtc()});
    }
    return page;
}

Result<ListPage> S3Provider::listWithOptions(const Location& dir, const QString& pageToken,
                                             const ListOptions& options, OperationContext& ctx)
{
    if (options.isDefault() || dir.bucket().isEmpty())
        return list(dir, pageToken, ctx);
    if (options.asOf.isValid())
        return listAsOf(dir.asDirectory(), options.asOf, ctx);
    return listObjectVersions(dir.asDirectory(), pageToken, ctx);
}

namespace {
QString versionStorageClass(Model::ObjectVersionStorageClass c)
{
    if (c == Model::ObjectVersionStorageClass::NOT_SET)
        return {};
    return fromAws(Model::ObjectVersionStorageClassMapper::GetNameForObjectVersionStorageClass(c));
}
} // namespace

Result<ListPage> S3Provider::listVersionsPage(const QString& bucket, const QString& prefix, bool delimited,
                                              const QString& token, OperationContext& ctx)
{
    const QString conn = m_session->profile().id;
    return withClient<ListPage>(bucket, [&](Client& client) -> Result<ListPage> {
        if (ctx.isCancelled())
            return Error::cancelled();
        Model::ListObjectVersionsRequest req;
        req.SetBucket(toAws(bucket));
        payer(req, *m_session, bucket);
        req.SetPrefix(toAws(prefix));
        if (delimited)
            req.SetDelimiter("/");
        req.SetMaxKeys(m_pageSize);
        req.SetEncodingType(Model::EncodingType::url);
        if (!token.isEmpty()) {
            const qsizetype nl = token.indexOf(u'\n');
            req.SetKeyMarker(toAws(token.left(nl)));
            if (nl >= 0 && nl + 1 < token.size())
                req.SetVersionIdMarker(toAws(token.mid(nl + 1)));
        }
        auto outcome = client.ListObjectVersions(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& result = outcome.GetResult();
        const bool encoded = result.GetEncodingType() == Model::EncodingType::url;
        auto nameOf = [&prefix, delimited](const QString& key) {
            if (delimited)
                return key.mid(prefix.size());
            return key.mid(key.lastIndexOf(u'/', key.endsWith(u'/') ? -2 : -1) + 1);
        };
        ListPage page;
        for (const auto& cp : result.GetCommonPrefixes()) {
            const QString key = decodeKey(cp.GetPrefix(), encoded);
            if (!key.startsWith(prefix) || key.size() <= prefix.size())
                continue;
            Entry e;
            e.name = key.mid(prefix.size()).chopped(1);
            e.type = Entry::Type::Directory;
            e.location = Location::s3(conn, bucket, key);
            page.entries.push_back(std::move(e));
        }
        for (const auto& v : result.GetVersions()) {
            const QString key = decodeKey(v.GetKey(), encoded);
            if (delimited && (key == prefix || !key.startsWith(prefix)))
                continue;
            Entry e;
            e.name = nameOf(key);
            e.location = Location::s3(conn, bucket, key);
            e.size = v.GetSize();
            e.modified = aws::fromAws(v.GetLastModified());
            e.etag = cleanEtag(v.GetETag());
            e.storageClass = versionStorageClass(v.GetStorageClass());
            e.versionId = fromAws(v.GetVersionId());
            e.isLatest = v.GetIsLatest();
            page.entries.push_back(std::move(e));
        }
        for (const auto& m : result.GetDeleteMarkers()) {
            const QString key = decodeKey(m.GetKey(), encoded);
            if (delimited && (key == prefix || !key.startsWith(prefix)))
                continue;
            Entry e;
            e.name = nameOf(key);
            e.location = Location::s3(conn, bucket, key);
            e.modified = aws::fromAws(m.GetLastModified());
            e.versionId = fromAws(m.GetVersionId());
            e.isLatest = m.GetIsLatest();
            e.isDeleteMarker = true;
            page.entries.push_back(std::move(e));
        }
        if (result.GetIsTruncated()) {
            const QString keyMarker = decodeKey(result.GetNextKeyMarker(), encoded);
            page.nextPageToken = keyMarker + u'\n' + fromAws(result.GetNextVersionIdMarker());
            if (keyMarker.isEmpty() && result.GetNextVersionIdMarker().empty())
                page.nextPageToken.clear();
        }
        return page;
    });
}

Result<ListPage> S3Provider::listObjectVersions(const Location& dir, const QString& token,
                                                OperationContext& ctx)
{
    return listVersionsPage(dir.bucket(), dir.key(), true, token, ctx);
}

Result<ListPage> S3Provider::listAsOf(const Location& dir, const QDateTime& at, OperationContext& ctx)
{
    // Newest version (or delete marker) of every key below `dir` not newer than `at`.
    const QString bucket = dir.bucket();
    const QString prefix = dir.key();
    QHash<QString, Entry> best;
    QString token;
    do {
        auto page = listVersionsPage(bucket, prefix, false, token, ctx);
        if (!page)
            return page.error();
        for (Entry& e : page->entries) {
            if (!e.modified.isValid() || e.modified > at)
                continue;
            const QString key = e.location.key();
            auto it = best.find(key);
            if (it == best.end() || it->modified < e.modified)
                best.insert(key, std::move(e));
        }
        token = page->nextPageToken;
    } while (!token.isEmpty());

    ListPage out;
    QSet<QString> dirs;
    const QString conn = dir.connectionId();
    for (auto it = best.cbegin(); it != best.cend(); ++it) {
        if (it->isDeleteMarker)
            continue; // deleted at that time
        const QString rest = it.key().mid(prefix.size());
        if (rest.isEmpty())
            continue; // the folder's own marker
        const qsizetype slash = rest.indexOf(u'/');
        if (slash >= 0) {
            const QString name = rest.left(slash);
            if (dirs.contains(name))
                continue;
            dirs.insert(name);
            Entry d;
            d.name = name;
            d.type = Entry::Type::Directory;
            d.location = Location::s3(conn, bucket, prefix + name + u'/');
            out.entries.push_back(d);
            continue;
        }
        Entry e = it.value();
        e.name = rest;
        out.entries.push_back(e);
    }
    return out;
}

Result<ListPage> S3Provider::listBuckets(const Location& connection)
{
    auto client = m_session->client();
    if (!client)
        return client.error();
    const QString conn = connection.connectionId();
    ListPage page;
    QSet<QString> seen;
    auto outcome = client.value()->ListBuckets(Model::ListBucketsRequest());
    if (outcome.IsSuccess()) {
        for (const auto& b : outcome.GetResult().GetBuckets()) {
            Entry e;
            e.name = fromAws(b.GetName());
            e.type = Entry::Type::Bucket;
            e.location = Location::s3(conn, e.name);
            e.modified = aws::fromAws(b.GetCreationDate());
            e.region = fromAws(b.GetBucketRegion());
            if (!e.region.isEmpty())
                m_session->rememberBucketRegion(e.name, e.region);
            seen.insert(e.name);
            page.entries.push_back(std::move(e));
        }
    } else {
        const Error error = aws::toError(outcome.GetError());
        if (error.code != ErrorCode::AccessDenied || m_session->profile().pinnedBuckets.isEmpty())
            return error;
        qCInfo(lcS3) << "ListBuckets denied on" << conn << "- showing pinned buckets only";
    }
    for (const QString& pinned : m_session->profile().pinnedBuckets) {
        if (seen.contains(pinned))
            continue;
        Entry e;
        e.name = pinned;
        e.type = Entry::Type::Bucket;
        e.location = Location::s3(conn, pinned);
        page.entries.push_back(std::move(e));
    }
    return page;
}

Result<ListPage> S3Provider::listObjects(const Location& dir, const QString& token, OperationContext& ctx)
{
    const QString bucket = dir.bucket();
    const QString prefix = dir.key();
    const QString conn = dir.connectionId();
    const int pageSize = m_pageSize;
    return withClient<ListPage>(bucket, [&](Client& client) -> Result<ListPage> {
        if (ctx.isCancelled())
            return Error::cancelled();
        Model::ListObjectsV2Request req;
        req.SetBucket(toAws(bucket));
        payer(req, *m_session, bucket);
        req.SetPrefix(toAws(prefix));
        req.SetDelimiter("/");
        req.SetMaxKeys(pageSize);
        req.SetEncodingType(Model::EncodingType::url);
        if (!token.isEmpty())
            req.SetContinuationToken(toAws(token));
        auto outcome = client.ListObjectsV2(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& result = outcome.GetResult();
        const bool encoded = result.GetEncodingType() == Model::EncodingType::url;

        ListPage page;
        for (const auto& cp : result.GetCommonPrefixes()) {
            const QString key = decodeKey(cp.GetPrefix(), encoded);
            if (!key.startsWith(prefix) || key.size() <= prefix.size())
                continue;
            Entry e;
            e.name = key.mid(prefix.size()).chopped(1); // strip trailing '/'
            e.type = Entry::Type::Directory;
            e.location = Location::s3(conn, bucket, key);
            page.entries.push_back(std::move(e));
        }
        for (const auto& obj : result.GetContents()) {
            const QString key = decodeKey(obj.GetKey(), encoded);
            if (key == prefix || !key.startsWith(prefix))
                continue; // the folder's own marker object
            Entry e;
            e.name = key.mid(prefix.size());
            e.location = Location::s3(conn, bucket, key);
            e.size = obj.GetSize();
            e.modified = aws::fromAws(obj.GetLastModified());
            e.etag = cleanEtag(obj.GetETag());
            e.storageClass = storageClassName(obj.GetStorageClass());
            page.entries.push_back(std::move(e));
        }
        if (result.GetIsTruncated())
            page.nextPageToken = fromAws(result.GetNextContinuationToken());
        return page;
    });
}

VoidResult S3Provider::listFlat(const QString& bucket, const QString& prefix, const KeyVisitor& visit,
                                OperationContext& ctx)
{
    const QString conn = m_session->profile().id;
    QString token;
    do {
        auto page = withClient<ListPage>(bucket, [&](Client& client) -> Result<ListPage> {
            if (ctx.isCancelled())
                return Error::cancelled();
            Model::ListObjectsV2Request req;
            req.SetBucket(toAws(bucket));
            payer(req, *m_session, bucket);
            req.SetPrefix(toAws(prefix));
            req.SetMaxKeys(m_pageSize);
            req.SetEncodingType(Model::EncodingType::url);
            if (!token.isEmpty())
                req.SetContinuationToken(toAws(token));
            auto outcome = client.ListObjectsV2(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            const auto& result = outcome.GetResult();
            const bool encoded = result.GetEncodingType() == Model::EncodingType::url;
            ListPage out;
            for (const auto& obj : result.GetContents()) {
                Entry e;
                const QString key = decodeKey(obj.GetKey(), encoded);
                e.name = key.mid(key.lastIndexOf(u'/', key.endsWith(u'/') ? -2 : -1) + 1);
                e.location = Location::s3(conn, bucket, key);
                e.size = obj.GetSize();
                e.modified = aws::fromAws(obj.GetLastModified());
                e.etag = cleanEtag(obj.GetETag());
                e.storageClass = storageClassName(obj.GetStorageClass());
                out.entries.push_back(std::move(e));
            }
            if (result.GetIsTruncated())
                out.nextPageToken = fromAws(result.GetNextContinuationToken());
            return out;
        });
        if (!page)
            return page.error();
        for (const Entry& e : std::as_const(page->entries)) {
            if (ctx.isCancelled() || !visit(e))
                return Error::cancelled();
        }
        token = page->nextPageToken;
    } while (!token.isEmpty());
    return {};
}

VoidResult S3Provider::walk(const Location& dir, const Visitor& visit, OperationContext& ctx)
{
    if (dir.bucket().isEmpty())
        return Provider::walk(dir, visit, ctx);

    // One flat listing instead of a request per directory. Keys arrive in
    // lexicographic order; every directory is emitted when the first key below it
    // is seen, so directories always precede their contents.
    const QString bucket = dir.bucket();
    const QString prefix = dir.asDirectory().key();
    const QString conn = dir.connectionId();
    QSet<QString> emittedDirs;
    return listFlat(
        bucket, prefix,
        [&](const Entry& object) {
            const QString key = object.location.key();
            const QString rest = key.mid(prefix.size());
            if (rest.isEmpty())
                return true; // marker of `dir` itself
            qsizetype segmentStart = 0;
            for (qsizetype i = 0; i < rest.size(); ++i) {
                if (rest.at(i) != u'/')
                    continue;
                const QString dirKey = prefix + rest.left(i + 1);
                if (!emittedDirs.contains(dirKey)) {
                    emittedDirs.insert(dirKey);
                    Entry d;
                    d.name = rest.mid(segmentStart, i - segmentStart);
                    d.type = Entry::Type::Directory;
                    d.location = Location::s3(conn, bucket, dirKey);
                    if (!visit(d))
                        return false;
                }
                segmentStart = i + 1;
            }
            if (key.endsWith(u'/'))
                return true; // folder marker, already emitted as a directory
            return visit(object);
        },
        ctx);
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

Result<bool> S3Provider::prefixExists(const QString& bucket, const QString& prefix)
{
    return withClient<bool>(bucket, [&](Client& client) -> Result<bool> {
        Model::ListObjectsV2Request req;
        req.SetBucket(toAws(bucket));
        payer(req, *m_session, bucket);
        req.SetPrefix(toAws(prefix));
        req.SetMaxKeys(1);
        auto outcome = client.ListObjectsV2(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return !outcome.GetResult().GetContents().empty() || !outcome.GetResult().GetCommonPrefixes().empty();
    });
}

Result<Entry> S3Provider::headObject(const Location& location, const QString& versionId)
{
    // SSE-C objects answer 400 unless the request carries their key: retry with the
    // bucket's key if one is configured.
    const std::optional<SseCustomerKey> key = m_session->sseCustomerKey(location.bucket());
    auto result = headObjectOnce(location, versionId, nullptr);
    if (!result && key && result.error().detail.contains(QStringLiteral("HTTP 400")))
        result = headObjectOnce(location, versionId, &*key);
    return result;
}

Result<Entry> S3Provider::headObjectOnce(const Location& location, const QString& versionId,
                                         const SseCustomerKey* key)
{
    return withClient<Entry>(location.bucket(), [&](Client& client) -> Result<Entry> {
        Model::HeadObjectRequest req;
        req.SetBucket(toAws(location.bucket()));
        payer(req, *m_session, location.bucket());
        req.SetKey(toAws(location.key()));
        if (!versionId.isEmpty())
            req.SetVersionId(toAws(versionId));
        req.SetChecksumMode(Model::ChecksumMode::ENABLED);
        if (key)
            aws::setSseCustomerKey(req, *key);
        auto outcome = client.HeadObject(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& r = outcome.GetResult();
        Entry e;
        e.location = location;
        e.name = location.name();
        e.size = r.GetContentLength();
        e.modified = aws::fromAws(r.GetLastModified());
        e.etag = cleanEtag(r.GetETag());
        e.contentType = fromAws(r.GetContentType());
        e.storageClass = storageClassName(r.GetStorageClass());
        if (e.storageClass.isEmpty())
            e.storageClass = QStringLiteral("STANDARD");
        e.versionId = fromAws(r.GetVersionId());
        auto put = [&e](const char* name, const Aws::String& value) {
            if (!value.empty())
                e.metadata.insert(QString::fromLatin1(name), fromAws(value));
        };
        put("Content-Type", r.GetContentType());
        put("Cache-Control", r.GetCacheControl());
        put("Content-Encoding", r.GetContentEncoding());
        put("Content-Disposition", r.GetContentDisposition());
        put("Content-Language", r.GetContentLanguage());
        put("Expires", r.GetExpiresString());
        put("x-amz-website-redirect-location", r.GetWebsiteRedirectLocation());
        put("x-amz-restore", r.GetRestore());
        if (r.GetArchiveStatus() != Model::ArchiveStatus::NOT_SET)
            put("x-amz-archive-status",
                Model::ArchiveStatusMapper::GetNameForArchiveStatus(r.GetArchiveStatus()));
        put("x-amz-server-side-encryption-aws-kms-key-id", r.GetSSEKMSKeyId());
        put("x-amz-server-side-encryption-customer-algorithm", r.GetSSECustomerAlgorithm());
        if (r.GetChecksumType() != Model::ChecksumType::NOT_SET)
            put("x-amz-checksum-type",
                Model::ChecksumTypeMapper::GetNameForChecksumType(r.GetChecksumType()));
        if (r.GetDeleteMarker())
            e.isDeleteMarker = true;
        put("x-amz-checksum-crc32", r.GetChecksumCRC32());
        put("x-amz-checksum-crc32c", r.GetChecksumCRC32C());
        put("x-amz-checksum-crc64nvme", r.GetChecksumCRC64NVME());
        put("x-amz-checksum-sha1", r.GetChecksumSHA1());
        put("x-amz-checksum-sha256", r.GetChecksumSHA256());
        put("x-amz-version-id", r.GetVersionId());
        if (r.GetServerSideEncryption() != Model::ServerSideEncryption::NOT_SET)
            put("x-amz-server-side-encryption",
                Model::ServerSideEncryptionMapper::GetNameForServerSideEncryption(
                    r.GetServerSideEncryption()));
        if (r.GetObjectLockMode() != Model::ObjectLockMode::NOT_SET) {
            put("x-amz-object-lock-mode",
                Model::ObjectLockModeMapper::GetNameForObjectLockMode(r.GetObjectLockMode()));
            e.metadata.insert(QStringLiteral("x-amz-object-lock-retain-until-date"),
                              aws::fromAws(r.GetObjectLockRetainUntilDate()).toString(Qt::ISODate));
        }
        if (r.GetObjectLockLegalHoldStatus() != Model::ObjectLockLegalHoldStatus::NOT_SET)
            put("x-amz-object-lock-legal-hold",
                Model::ObjectLockLegalHoldStatusMapper::GetNameForObjectLockLegalHoldStatus(
                    r.GetObjectLockLegalHoldStatus()));
        if (r.GetReplicationStatus() != Model::ReplicationStatus::NOT_SET)
            put("x-amz-replication-status",
                Model::ReplicationStatusMapper::GetNameForReplicationStatus(r.GetReplicationStatus()));
        if (r.GetPartsCount() > 0)
            e.metadata.insert(QStringLiteral("x-amz-mp-parts-count"), QString::number(r.GetPartsCount()));
        for (const auto& [k, v] : r.GetMetadata())
            e.metadata.insert(QStringLiteral("x-amz-meta-") + fromAws(k), fromAws(v));
        return e;
    });
}

Result<Entry> S3Provider::stat(const Location& location, OperationContext& ctx)
{
    Q_UNUSED(ctx)
    Entry e;
    e.location = location;
    e.name = location.name();
    if (location.bucket().isEmpty()) {
        e.type = Entry::Type::Connection;
        return e;
    }
    if (location.key().isEmpty()) {
        auto exists = withClient<bool>(location.bucket(), [&](Client& client) -> Result<bool> {
            Model::HeadBucketRequest req;
            req.SetBucket(toAws(location.bucket()));
            payer(req, *m_session, location.bucket());
            auto outcome = client.HeadBucket(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            return true;
        });
        if (!exists)
            return exists.error();
        e.type = Entry::Type::Bucket;
        e.region = m_session->bucketRegion(location.bucket());
        return e;
    }
    if (!location.key().endsWith(u'/')) {
        auto object = headObject(location);
        if (object || object.error().code != ErrorCode::NotFound)
            return object;
    }
    // Not an object: maybe a prefix ("directory").
    const QString prefix = location.asDirectory().key();
    auto exists = prefixExists(location.bucket(), prefix);
    if (!exists)
        return exists.error();
    if (!exists.value())
        return Error::make(ErrorCode::NotFound,
                           tr("No such object or folder: %1").arg(location.displayString()));
    e.type = Entry::Type::Directory;
    e.location = location.asDirectory();
    return e;
}

// ---------------------------------------------------------------------------
// Changes
// ---------------------------------------------------------------------------

void S3Provider::dropBucketCache(const QString& bucket)
{
    QMutexLocker lock(&m_cacheMutex);
    const QString prefix = bucket + u'\n';
    for (auto it = m_cache.begin(); it != m_cache.end();) {
        if (it.key().startsWith(prefix))
            it = m_cache.erase(it);
        else
            ++it;
    }
}

void S3Provider::invalidateCache(const Location& location)
{
    if (location.bucket().isEmpty()) {
        QMutexLocker lock(&m_cacheMutex);
        m_cache.clear();
        return;
    }
    dropBucketCache(location.bucket());
}

VoidResult S3Provider::makeDirectory(const Location& dir, OperationContext& ctx)
{
    if (dir.bucket().isEmpty())
        return Error::make(ErrorCode::Unsupported, tr("Creating buckets is not supported here"));
    if (dir.key().isEmpty())
        return Error::make(ErrorCode::AlreadyExists, tr("The bucket already exists"));
    const Location target = dir.asDirectory();
    auto existing = stat(target, ctx);
    if (existing)
        return Error::make(ErrorCode::AlreadyExists, tr("Already exists: %1").arg(target.displayString()));
    if (existing.error().code != ErrorCode::NotFound)
        return existing.error();
    dropBucketCache(dir.bucket());
    auto r = withClient<bool>(dir.bucket(), [&](Client& client) -> Result<bool> {
        Model::PutObjectRequest req;
        req.SetBucket(toAws(target.bucket()));
        payer(req, *m_session, target.bucket());
        req.SetKey(toAws(target.key()));
        req.SetBody(Aws::MakeShared<Aws::StringStream>(kTag));
        req.SetContentLength(0);
        auto outcome = client.PutObject(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

VoidResult S3Provider::deleteKeys(const QString& bucket, const QStringList& keys, OperationContext& ctx,
                                  qint64& done, QStringList& failures)
{
    for (qsizetype start = 0; start < keys.size(); start += kMaxDeleteBatch) {
        if (ctx.isCancelled())
            return Error::cancelled();
        const QStringList batch = keys.mid(start, kMaxDeleteBatch);
        auto r = withClient<int>(bucket, [&](Client& client) -> Result<int> {
            Model::Delete del;
            del.SetQuiet(true);
            for (const QString& key : batch)
                del.AddObjects(Model::ObjectIdentifier().WithKey(toAws(key)));
            Model::DeleteObjectsRequest req;
            req.SetBucket(toAws(bucket));
            payer(req, *m_session, bucket);
            req.SetDelete(del);
            auto outcome = client.DeleteObjects(req);
            if (!outcome.IsSuccess())
                return aws::toError(outcome.GetError());
            int failed = 0;
            for (const auto& err : outcome.GetResult().GetErrors()) {
                ++failed;
                failures.push_back(
                    QStringLiteral("%1: %2 %3")
                        .arg(fromAws(err.GetKey()), fromAws(err.GetCode()), fromAws(err.GetMessage())));
            }
            return failed;
        });
        if (!r)
            return r.error();
        done += batch.size() - r.value();
        ctx.reportProgress(done, -1);
    }
    return {};
}

VoidResult S3Provider::remove(const EntryList& items, OperationContext& ctx)
{
    // Group keys per bucket; expand directories into every key below them.
    QHash<QString, QStringList> keysByBucket;
    for (const Entry& item : items) {
        const Location& l = item.location;
        if (l.bucket().isEmpty() || l.key().isEmpty())
            return Error::make(ErrorCode::Unsupported, tr("Deleting buckets is not supported here"));
        QStringList& keys = keysByBucket[l.bucket()];
        if (item.isDirectory() || l.key().endsWith(u'/')) {
            const QString prefix = l.asDirectory().key();
            auto listed = listFlat(
                l.bucket(), prefix,
                [&keys](const Entry& object) {
                    keys.push_back(object.location.key());
                    return true;
                },
                ctx);
            if (!listed)
                return listed.error(); // the listing includes the folder's own marker, if any
        } else {
            keys.push_back(l.key());
        }
    }

    qint64 done = 0;
    QStringList failures;
    for (auto it = keysByBucket.cbegin(); it != keysByBucket.cend(); ++it) {
        dropBucketCache(it.key());
        if (auto r = deleteKeys(it.key(), it.value(), ctx, done, failures); !r)
            return r;
    }
    if (failures.isEmpty())
        return {};
    return Error::make(ErrorCode::Io,
                       QCoreApplication::translate("s3fm::S3Provider", "%n object(s) could not be deleted",
                                                   nullptr, int(failures.size())),
                       failures.mid(0, 20).join(u'\n'));
}

VoidResult S3Provider::rename(const Location& from, const Location& to, OperationContext& ctx)
{
    Q_UNUSED(from)
    Q_UNUSED(to)
    Q_UNUSED(ctx)
    return Error::make(ErrorCode::Unsupported, tr("S3 has no rename; use copy and delete"));
}

// ---------------------------------------------------------------------------
// Transfer helpers
// ---------------------------------------------------------------------------

namespace {

const TransferParams& paramsOf(const OperationContext& ctx)
{
    static const TransferParams defaults = [] {
        TransferParams p;
        p.partConcurrency = 4;
        return p;
    }();
    return ctx.params() ? *ctx.params() : defaults;
}

ObjectEncryption encryptionFromParams(const TransferParams& params)
{
    ObjectEncryption enc;
    if (params.sse == u"AES256") {
        enc.mode = ObjectEncryption::Mode::S3;
    } else if (params.sse.startsWith(QStringLiteral("aws:kms"))) {
        enc.mode = ObjectEncryption::Mode::Kms;
        enc.kmsKeyId = params.sseKmsKeyId;
    } else if (params.sse == u"SSE-C") {
        enc.mode = ObjectEncryption::Mode::Customer;
    }
    return enc;
}

// Thread-safe byte progress for transfers whose parts run in parallel.
class ProgressSink
{
public:
    ProgressSink(OperationContext& ctx, qint64 total, qint64 start = 0)
        : m_ctx(ctx), m_total(total), m_done(start)
    {
    }
    void add(qint64 delta)
    {
        QMutexLocker lock(&m_mutex);
        m_done = std::clamp<qint64>(m_done + delta, 0, m_total);
        m_ctx.reportProgress(m_done, m_total);
    }

private:
    QMutex m_mutex;
    OperationContext& m_ctx;
    qint64 m_total;
    qint64 m_done;
};

// Serializes checkpoint updates from part workers and notifies the engine.
class CheckpointWriter
{
public:
    explicit CheckpointWriter(const TransferParams& params) : m_params(params) {}
    bool enabled() const { return m_params.resumable && m_params.checkpoint; }
    template <class F> void update(F&& change)
    {
        if (!m_params.checkpoint)
            return;
        QMutexLocker lock(&m_mutex);
        change(*m_params.checkpoint);
        if (m_params.checkpointChanged)
            m_params.checkpointChanged();
    }

private:
    QMutex m_mutex;
    const TransferParams& m_params;
};

// Read-only, seekable stream over [offset, offset + length) of a file, used as an
// upload body so that parallel parts do not need to be buffered in memory.
class FileRangeBuf : public std::streambuf
{
public:
    FileRangeBuf(const std::filesystem::path& path, qint64 offset, qint64 length)
        : m_file(path, std::ios_base::in | std::ios_base::binary), m_offset(offset), m_length(length)
    {
    }
    bool ok() const { return m_file.good(); }

protected:
    int_type underflow() override
    {
        if (gptr() < egptr())
            return traits_type::to_int_type(*gptr());
        if (m_pos >= m_length)
            return traits_type::eof();
        const qint64 n = std::min<qint64>(qint64(sizeof(m_buffer)), m_length - m_pos);
        m_file.clear();
        m_file.seekg(std::streamoff(m_offset + m_pos));
        m_file.read(m_buffer, std::streamsize(n));
        const std::streamsize got = m_file.gcount();
        if (got <= 0)
            return traits_type::eof();
        setg(m_buffer, m_buffer, m_buffer + got);
        m_pos += got;
        return traits_type::to_int_type(*gptr());
    }
    pos_type seekoff(off_type off, std::ios_base::seekdir dir, std::ios_base::openmode which) override
    {
        Q_UNUSED(which)
        const qint64 current = m_pos - qint64(egptr() - gptr());
        qint64 target = off;
        if (dir == std::ios_base::cur)
            target = current + off;
        else if (dir == std::ios_base::end)
            target = m_length + off;
        if (target < 0 || target > m_length)
            return pos_type(off_type(-1));
        m_pos = target;
        setg(m_buffer, m_buffer, m_buffer);
        return pos_type(off_type(target));
    }
    pos_type seekpos(pos_type pos, std::ios_base::openmode which) override
    {
        return seekoff(off_type(pos), std::ios_base::beg, which);
    }
    std::streamsize showmanyc() override { return std::streamsize(m_length - m_pos + (egptr() - gptr())); }

private:
    std::ifstream m_file;
    qint64 m_offset;
    qint64 m_length;
    qint64 m_pos = 0;
    char m_buffer[64 * 1024];
};

// MD5 of a byte range of a file; empty on read errors or cancellation.
QByteArray md5Range(const QString& path, qint64 offset, qint64 length, const OperationContext& ctx)
{
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly) || !f.seek(offset))
        return {};
    QCryptographicHash hash(QCryptographicHash::Md5);
    QByteArray buffer(1 << 20, Qt::Uninitialized);
    qint64 left = length;
    while (left > 0) {
        if (ctx.isCancelled())
            return {};
        const qint64 n = f.read(buffer.data(), std::min<qint64>(buffer.size(), left));
        if (n <= 0)
            return {};
        hash.addData(QByteArrayView(buffer.constData(), n));
        left -= n;
    }
    return hash.result();
}

// Runs fn(0..count-1) on up to `concurrency` threads. Stops at the first failure and
// returns it (or Cancelled when `ctx` is cancelled).
VoidResult runParallel(int count, int concurrency, OperationContext& ctx,
                       const std::function<VoidResult(int index, const std::atomic_bool& stop)>& fn)
{
    std::atomic<int> next{0};
    std::atomic_bool stop{false};
    QMutex mutex;
    std::optional<Error> first;
    auto worker = [&] {
        while (!stop.load() && !ctx.isCancelled()) {
            const int i = next.fetch_add(1);
            if (i >= count)
                return;
            const VoidResult r = fn(i, stop);
            if (!r) {
                QMutexLocker lock(&mutex);
                if (!first || first->isCancelled())
                    first = r.error();
                stop.store(true);
            }
        }
    };
    std::vector<std::thread> extra;
    const int threads = std::clamp(concurrency, 1, std::max(1, count));
    for (int t = 1; t < threads; ++t)
        extra.emplace_back(worker);
    worker();
    for (std::thread& t : extra)
        t.join();
    if (ctx.isCancelled())
        return Error::cancelled();
    if (first)
        return *first;
    return {};
}

bool opaqueEtag(Model::ServerSideEncryption sse, const Aws::String& customerAlgorithm)
{
    // ETags of encrypted objects are not reliably MD5 sums: never for SSE-KMS and
    // SSE-C, and S3-compatible services (MinIO) do not use MD5 for SSE-S3 either.
    return sse != Model::ServerSideEncryption::NOT_SET || !customerAlgorithm.empty();
}

Error integrityError(const Location& location, const QString& detail)
{
    Error e =
        Error::make(ErrorCode::Io, tr("Integrity check failed for %1").arg(location.displayString()), detail);
    e.retryable = true;
    return e;
}

template <class Req>
void applyUploadOptions(Req& req, const QString& localFile, const S3Session& session,
                        const TransferParams& params, const QString& bucket)
{
    static const QMimeDatabase db;
    QString mime;
    if (params.detectContentType)
        mime = db.mimeTypeForFile(localFile, QMimeDatabase::MatchExtension).name();
    req.SetContentType(toAws(mime.isEmpty() ? QStringLiteral("application/octet-stream") : mime));
    const QString storageClass =
        params.storageClass.isEmpty() ? session.profile().defaultStorageClass : params.storageClass;
    if (!storageClass.isEmpty())
        req.SetStorageClass(Model::StorageClassMapper::GetStorageClassForName(toAws(storageClass)));
    const QDateTime mtime = QFileInfo(localFile).lastModified();
    const ObjectEncryption enc = encryptionFromParams(params);
    if (enc.mode != ObjectEncryption::Mode::None) {
        const std::optional<SseCustomerKey> key =
            enc.mode == ObjectEncryption::Mode::Customer ? session.sseCustomerKey(bucket) : std::nullopt;
        aws::setEncryption(req, enc, key ? &*key : nullptr);
    }
    if (params.preserveMtime && mtime.isValid())
        req.AddMetadata(toAws(kMtimeKey),
                        toAws(QString::number(double(mtime.toMSecsSinceEpoch()) / 1000.0, 'f', 3)));
}

struct PartResult
{
    int number = 0;
    qint64 size = 0;
    Aws::String etag;
    Aws::String checksum; // CRC32, when the upload uses checksums
    QByteArray md5;       // raw MD5 of the part (uploads only)
};

void abortUpload(Aws::S3::S3Client& client, const S3Session& session, const Location& to,
                 const Aws::String& uploadId)
{
    Model::AbortMultipartUploadRequest req;
    req.SetBucket(toAws(to.bucket()));
    payer(req, session, to.bucket());
    req.SetKey(toAws(to.key()));
    req.SetUploadId(uploadId);
    auto outcome = client.AbortMultipartUpload(req);
    if (!outcome.IsSuccess())
        qCInfo(lcS3) << "abort multipart upload failed:" << fromAws(outcome.GetError().GetMessage());
}

// Parts already stored for an upload (resume). NotFound if the upload is gone.
Result<QHash<int, PartResult>> listParts(Aws::S3::S3Client& client, const S3Session& session,
                                         const Location& to, const Aws::String& uploadId,
                                         const OperationContext& ctx)
{
    QHash<int, PartResult> parts;
    int marker = 0;
    while (true) {
        if (ctx.isCancelled())
            return Error::cancelled();
        Model::ListPartsRequest req;
        req.SetBucket(toAws(to.bucket()));
        payer(req, session, to.bucket());
        req.SetKey(toAws(to.key()));
        req.SetUploadId(uploadId);
        if (marker > 0)
            req.SetPartNumberMarker(marker);
        auto outcome = client.ListParts(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& result = outcome.GetResult();
        for (const auto& p : result.GetParts()) {
            PartResult r;
            r.number = p.GetPartNumber();
            r.size = p.GetSize();
            r.etag = p.GetETag();
            r.checksum = p.GetChecksumCRC32();
            parts.insert(r.number, r);
        }
        if (!result.GetIsTruncated() || result.GetNextPartNumberMarker() <= marker)
            break;
        marker = result.GetNextPartNumberMarker();
    }
    return parts;
}

QString unquote(const Aws::String& etag)
{
    return aws::cleanEtag(etag);
}

} // namespace

// ---------------------------------------------------------------------------
// Server-side copy
// ---------------------------------------------------------------------------

VoidResult S3Provider::copy(const Location& from, const Location& to, OperationContext& ctx)
{
    return copyWith(from, to, {}, ctx);
}

VoidResult S3Provider::copyWith(const Location& from, const Location& to, const CopyOverrides& overrides,
                                OperationContext& ctx)
{
    const QString sourceVersion = paramsOf(ctx).sourceVersionId;
    auto source = headObject(from, sourceVersion);
    if (!source)
        return source.error();
    if (ctx.isCancelled())
        return Error::cancelled();
    const TransferParams& params = paramsOf(ctx);
    CopyOverrides o = overrides;
    if (o.storageClass.isEmpty())
        o.storageClass = params.storageClass;
    if (!o.encryption && !params.sse.isEmpty())
        o.encryption = encryptionFromParams(params);
    aws::CopyPlan plan = aws::planCopy(*source, o);
    if (from == to && sourceVersion.isEmpty())
        plan.replaceHeaders = true; // an in-place copy must change something; REPLACE makes it legal

    std::optional<SseCustomerKey> sourceKey;
    if (ObjectEncryption::fromEntry(*source).mode == ObjectEncryption::Mode::Customer) {
        sourceKey = m_session->sseCustomerKey(from.bucket());
        if (!sourceKey)
            return Error::make(ErrorCode::InvalidArgument,
                               tr("No SSE-C key is configured for bucket %1").arg(from.bucket()));
    }
    std::optional<SseCustomerKey> destKey;
    if (plan.encryption.mode == ObjectEncryption::Mode::Customer) {
        destKey = m_session->sseCustomerKey(to.bucket());
        if (!destKey)
            return Error::make(ErrorCode::InvalidArgument,
                               tr("No SSE-C key is configured for bucket %1").arg(to.bucket()));
    }
    const SseCustomerKey* srcKey = sourceKey ? &*sourceKey : nullptr;
    const SseCustomerKey* dstKey = destKey ? &*destKey : nullptr;
    dropBucketCache(to.bucket());
    if (source->size > m_copyThreshold)
        return multipartCopy(from, *source, to, plan, srcKey, dstKey, ctx);

    auto r = withClient<bool>(to.bucket(), [&](Client& client) -> Result<bool> {
        aws::CopyObjectRequest req;
        req.SetBucket(toAws(to.bucket()));
        payer(req, *m_session, to.bucket());
        req.SetKey(toAws(to.key()));
        req.SetRawCopySource(toAws(copySource(from.bucket(), from.key(), source->versionId)));
        aws::applyCopyPlan(req, plan, srcKey, dstKey);
        auto outcome = client.CopyObject(req);
        if (!outcome.IsSuccess())
            return aws::toError(outcome.GetError());
        const auto& result = outcome.GetResult();
        const QString etag = unquote(result.GetCopyObjectResultDetails().GetETag());
        const bool comparable =
            isMd5Etag(source->etag) && !source->etag.contains(u'-') && isMd5Etag(etag) &&
            !opaqueEtag(result.GetServerSideEncryption(), result.GetSSECustomerAlgorithm()) &&
            ObjectEncryption::fromEntry(*source).mode == ObjectEncryption::Mode::None &&
            plan.encryption.mode == ObjectEncryption::Mode::None;
        if (params.verify && comparable && etag.compare(source->etag, Qt::CaseInsensitive) != 0)
            return integrityError(to, tr("ETag %1 differs from the source's %2").arg(etag, source->etag));
        return true;
    });
    if (!r)
        return r.error();
    ctx.reportProgress(source->size, source->size);
    return {};
}

VoidResult S3Provider::multipartCopy(const Location& from, const Entry& source, const Location& to,
                                     const aws::CopyPlan& plan, const SseCustomerKey* sourceKey,
                                     const SseCustomerKey* destKey, OperationContext& ctx)
{
    const TransferParams& params = paramsOf(ctx);
    CheckpointWriter checkpoint(params);
    const qint64 size = source.size;
    const QString fingerprint = QStringLiteral("etag:") + source.etag;
    qint64 partSize = partSizeFor(size, 512 * kMiB);

    auto result = withClient<bool>(to.bucket(), [&](Client& client) -> Result<bool> {
        Aws::String uploadId;
        QHash<int, PartResult> existing;
        if (params.checkpoint && !params.checkpoint->uploadId.isEmpty()) {
            const Aws::String previous = toAws(params.checkpoint->uploadId);
            if (params.checkpoint->sourceFingerprint == fingerprint && params.checkpoint->partSize > 0) {
                auto listed = listParts(client, *m_session, to, previous, ctx);
                if (listed) {
                    uploadId = previous;
                    partSize = params.checkpoint->partSize;
                    existing = listed.value();
                } else if (listed.error().code != ErrorCode::NotFound) {
                    return listed.error();
                }
            } else {
                abortUpload(client, *m_session, to, previous);
            }
        }
        if (uploadId.empty()) {
            Model::CreateMultipartUploadRequest create;
            create.SetBucket(toAws(to.bucket()));
            payer(create, *m_session, to.bucket());
            create.SetKey(toAws(to.key()));
            aws::applyCopyPlan(create, plan, nullptr, destKey);
            auto created = client.CreateMultipartUpload(create);
            if (!created.IsSuccess())
                return aws::toError(created.GetError());
            uploadId = created.GetResult().GetUploadId();
            checkpoint.update([&](TransferCheckpoint& cp) {
                cp.uploadId = fromAws(uploadId);
                cp.partSize = partSize;
                cp.sourceFingerprint = fingerprint;
            });
        }

        const int count = transfer::partCount(size, partSize);
        std::vector<PartResult> parts(static_cast<size_t>(count));
        ProgressSink progress(ctx, size);
        const VoidResult ran = runParallel(
            count, params.partConcurrency, ctx, [&](int i, const std::atomic_bool& stop) -> VoidResult {
                const int number = i + 1;
                const qint64 offset = qint64(i) * partSize;
                const qint64 length = std::min(partSize, size - offset);
                if (auto it = existing.constFind(number); it != existing.cend() && it->size == length) {
                    parts[size_t(i)] = *it;
                    progress.add(length);
                    return {};
                }
                if (stop.load())
                    return Error::cancelled();
                aws::UploadPartCopyRequest part;
                part.SetBucket(toAws(to.bucket()));
                payer(part, *m_session, to.bucket());
                part.SetKey(toAws(to.key()));
                part.SetUploadId(uploadId);
                part.SetPartNumber(number);
                part.SetRawCopySource(toAws(copySource(from.bucket(), from.key(), source.versionId)));
                part.SetCopySourceRange(
                    toAws(QStringLiteral("bytes=%1-%2").arg(offset).arg(offset + length - 1)));
                if (sourceKey)
                    aws::setCopySourceSseCustomerKey(part, *sourceKey);
                if (destKey)
                    aws::setSseCustomerKey(part, *destKey);
                if (isMd5Etag(source.etag))
                    part.SetCopySourceIfMatch(toAws(source.etag));
                auto outcome = client.UploadPartCopy(part);
                if (!outcome.IsSuccess())
                    return cancelledOr(outcome.GetError(), ctx);
                PartResult r;
                r.number = number;
                r.size = length;
                r.etag = outcome.GetResult().GetCopyPartResult().GetETag();
                parts[size_t(i)] = r;
                progress.add(length);
                return {};
            });
        if (!ran) {
            if (!checkpoint.enabled())
                abortUpload(client, *m_session, to, uploadId);
            return ran.error();
        }
        Model::CompletedMultipartUpload completed;
        for (const PartResult& p : parts)
            completed.AddParts(Model::CompletedPart().WithPartNumber(p.number).WithETag(p.etag));
        Model::CompleteMultipartUploadRequest complete;
        complete.SetBucket(toAws(to.bucket()));
        payer(complete, *m_session, to.bucket());
        complete.SetKey(toAws(to.key()));
        complete.SetUploadId(uploadId);
        if (destKey)
            aws::setSseCustomerKey(complete, *destKey);
        complete.SetMultipartUpload(completed);
        auto done = client.CompleteMultipartUpload(complete);
        if (!done.IsSuccess()) {
            if (!checkpoint.enabled())
                abortUpload(client, *m_session, to, uploadId);
            return aws::toError(done.GetError());
        }
        checkpoint.update([](TransferCheckpoint& cp) { cp.clear(); });
        return true;
    });
    if (!result)
        return result.error();
    if (params.verify) {
        auto copied = headObject(to);
        if (!copied)
            return copied.error();
        if (copied->size != size)
            return integrityError(to, tr("%1 bytes stored, %2 expected").arg(copied->size).arg(size));
    }
    return {};
}

// ---------------------------------------------------------------------------
// Download
// ---------------------------------------------------------------------------

VoidResult S3Provider::download(const Location& from, const QString& localFile, OperationContext& ctx)
{
    const TransferParams& params = paramsOf(ctx);
    CheckpointWriter checkpoint(params);
    const QString partFile = localFile + kPartialSuffix;
    const std::filesystem::path partPath = toFsPath(partFile);

    qint64 resumeFrom = 0;
    QString resumeEtag;
    if (checkpoint.enabled() && !params.checkpoint->downloadEtag.isEmpty() && QFileInfo::exists(partFile)) {
        resumeFrom = QFileInfo(partFile).size();
        resumeEtag = params.checkpoint->downloadEtag;
    }

    QDateTime mtime;
    QString etag;
    qint64 total = -1;
    bool opaque = false;
    const std::optional<SseCustomerKey> sseKey = m_session->sseCustomerKey(from.bucket());
    bool useKey = false;
    for (int attempt = 0; attempt < 3; ++attempt) {
        auto r = withClient<bool>(from.bucket(), [&](Client& client) -> Result<bool> {
            Model::GetObjectRequest req;
            req.SetBucket(toAws(from.bucket()));
            payer(req, *m_session, from.bucket());
            req.SetKey(toAws(from.key()));
            if (useKey)
                aws::setSseCustomerKey(req, *sseKey);
            if (!params.sourceVersionId.isEmpty())
                req.SetVersionId(toAws(params.sourceVersionId));
            if (resumeFrom > 0) {
                req.SetRange(toAws(QStringLiteral("bytes=%1-").arg(resumeFrom)));
                req.SetIfMatch(toAws(u'"' + resumeEtag + u'"'));
            }
            const bool append = resumeFrom > 0;
            req.SetResponseStreamFactory([partPath, append]() -> Aws::IOStream* {
                return Aws::New<Aws::FStream>(kTag, partPath,
                                              std::ios_base::out | std::ios_base::binary |
                                                  (append ? std::ios_base::app : std::ios_base::trunc));
            });
            req.SetHeadersReceivedEventHandler(
                [&](const Aws::Http::HttpRequest*, Aws::Http::HttpResponse* resp) {
                    if (!resp || int(resp->GetResponseCode()) >= 300)
                        return;
                    qint64 length = -1;
                    if (resp->HasHeader("content-length"))
                        length = QString::fromUtf8(resp->GetHeader("content-length").c_str()).toLongLong();
                    total = length >= 0 ? resumeFrom + length : -1;
                    if (resp->HasHeader("content-range")) { // "bytes 100-199/1000"
                        const QString range = QString::fromUtf8(resp->GetHeader("content-range").c_str());
                        const qsizetype slash = range.lastIndexOf(u'/');
                        bool ok = false;
                        const qint64 full = range.mid(slash + 1).toLongLong(&ok);
                        if (slash > 0 && ok)
                            total = full;
                    }
                    if (resp->HasHeader("etag")) {
                        const QString tag = unquote(resp->GetHeader("etag"));
                        if (resumeFrom == 0)
                            checkpoint.update([&tag](TransferCheckpoint& cp) { cp.downloadEtag = tag; });
                    }
                });
            qint64 received = 0;
            req.SetDataReceivedEventHandler(
                [&](const Aws::Http::HttpRequest*, Aws::Http::HttpResponse*, long long n) {
                    received += n;
                    ctx.reportProgress(resumeFrom + received, total);
                    if (params.limiter)
                        params.limiter->consume(n, &ctx);
                });
            req.SetContinueRequestHandler(
                [&ctx](const Aws::Http::HttpRequest*) { return !ctx.isCancelled(); });
            auto outcome = client.GetObject(req);
            if (!outcome.IsSuccess()) {
                const int http = int(outcome.GetError().GetResponseCode());
                if (resumeFrom > 0 && (http == 412 || http == 416))
                    return Error::make(ErrorCode::Conflict, QStringLiteral("restart")); // object changed
                return cancelledOr(outcome.GetError(), ctx);
            }
            const auto& result = outcome.GetResult();
            QMap<QString, QString> meta;
            for (const auto& [k, v] : result.GetMetadata())
                meta.insert(QStringLiteral("x-amz-meta-") + fromAws(k), fromAws(v));
            mtime = mtimeFromMetadata(meta);
            if (!mtime.isValid())
                mtime = aws::fromAws(result.GetLastModified());
            etag = unquote(result.GetETag());
            opaque = opaqueEtag(result.GetServerSideEncryption(), result.GetSSECustomerAlgorithm());
            if (total < 0)
                total = resumeFrom + result.GetContentLength();
            return true; // outcome (and the file stream) is closed when it goes out of scope
        });
        if (r)
            break;
        if (!useKey && sseKey && r.error().detail.contains(QStringLiteral("HTTP 400"))) {
            useKey = true; // SSE-C object: retry with the bucket's key
            continue;
        }
        if (r.error().code == ErrorCode::Conflict && resumeFrom > 0) {
            qCInfo(lcS3) << "object changed since the partial download; restarting" << from.displayString();
            QFile::remove(partFile);
            resumeFrom = 0;
            resumeEtag.clear();
            checkpoint.update([](TransferCheckpoint& cp) { cp.downloadEtag.clear(); });
            continue;
        }
        if (!(checkpoint.enabled() && (r.error().isCancelled() || r.error().retryable))) {
            QFile::remove(partFile);
            checkpoint.update([](TransferCheckpoint& cp) { cp.downloadEtag.clear(); });
        }
        return r.error();
    }

    auto discard = [&] {
        QFile::remove(partFile);
        checkpoint.update([](TransferCheckpoint& cp) { cp.downloadEtag.clear(); });
    };
    const qint64 written = QFileInfo(partFile).size();
    if (total >= 0 && written != total) {
        discard();
        Error e =
            Error::make(ErrorCode::Io, tr("Download incomplete: %1 of %2 bytes").arg(written).arg(total));
        e.retryable = true;
        return e;
    }
    if (params.verify && !opaque && isMd5Etag(etag) && !etag.contains(u'-')) {
        const QString md5 = QString::fromLatin1(md5Range(partFile, 0, written, ctx).toHex());
        if (ctx.isCancelled())
            return Error::cancelled();
        if (md5.compare(etag, Qt::CaseInsensitive) != 0) {
            discard();
            return integrityError(from, tr("MD5 %1 differs from the ETag %2").arg(md5, etag));
        }
    }
    if (QFileInfo::exists(localFile) && !QFile::remove(localFile)) {
        discard();
        return Error::make(ErrorCode::AccessDenied,
                           tr("Cannot replace %1").arg(QDir::toNativeSeparators(localFile)));
    }
    if (!QFile::rename(partFile, localFile)) {
        discard();
        return Error::make(ErrorCode::Io, tr("Cannot write %1").arg(QDir::toNativeSeparators(localFile)));
    }
    checkpoint.update([](TransferCheckpoint& cp) { cp.downloadEtag.clear(); });
    if (params.preserveMtime && mtime.isValid()) {
        QFile f(localFile);
        if (f.open(QIODevice::Append))
            f.setFileTime(mtime, QFileDevice::FileModificationTime);
    }
    return {};
}

// ---------------------------------------------------------------------------
// Upload
// ---------------------------------------------------------------------------

VoidResult S3Provider::upload(const QString& localFile, const Location& to, OperationContext& ctx)
{
    const QFileInfo info(localFile);
    if (!info.exists())
        return Error::make(ErrorCode::NotFound,
                           tr("No such file: %1").arg(QDir::toNativeSeparators(localFile)));
    if (info.isDir())
        return Error::make(ErrorCode::InvalidArgument,
                           tr("Is a directory: %1").arg(QDir::toNativeSeparators(localFile)));
    if (to.bucket().isEmpty() || to.key().isEmpty() || to.key().endsWith(u'/'))
        return Error::make(ErrorCode::InvalidArgument, tr("Invalid destination: %1").arg(to.displayString()));
    dropBucketCache(to.bucket());
    const TransferParams& params = paramsOf(ctx);
    if (encryptionFromParams(params).mode == ObjectEncryption::Mode::Customer &&
        !m_session->sseCustomerKey(to.bucket()))
        return Error::make(ErrorCode::InvalidArgument,
                           tr("No SSE-C key is configured for bucket %1").arg(to.bucket()));
    const qint64 threshold = params.multipartThreshold > 0 ? params.multipartThreshold : m_multipartThreshold;
    const qint64 size = info.size();
    if (size > threshold)
        return multipartUpload(localFile, to, size, ctx);
    if (params.checkpoint && !params.checkpoint->uploadId.isEmpty()) {
        // An earlier attempt used multipart (e.g. different settings): drop it.
        discardPartialTransfer(to, {}, *params.checkpoint);
        CheckpointWriter(params).update([](TransferCheckpoint& cp) { cp.clear(); });
    }
    return putObject(localFile, to, size, ctx);
}

VoidResult S3Provider::putObject(const QString& localFile, const Location& to, qint64 size,
                                 OperationContext& ctx)
{
    const TransferParams& params = paramsOf(ctx);
    const QByteArray md5 = md5Range(localFile, 0, size, ctx);
    if (ctx.isCancelled())
        return Error::cancelled();
    if (md5.isEmpty() && size > 0)
        return Error::make(ErrorCode::AccessDenied,
                           tr("Cannot read %1").arg(QDir::toNativeSeparators(localFile)));
    auto r = withClient<bool>(to.bucket(), [&](Client& client) -> Result<bool> {
        auto body = Aws::MakeShared<Aws::FStream>(kTag, toFsPath(localFile),
                                                  std::ios_base::in | std::ios_base::binary);
        if (!body->good())
            return Error::make(ErrorCode::AccessDenied,
                               tr("Cannot read %1").arg(QDir::toNativeSeparators(localFile)));
        Model::PutObjectRequest req;
        req.SetBucket(toAws(to.bucket()));
        payer(req, *m_session, to.bucket());
        req.SetKey(toAws(to.key()));
        req.SetBody(body);
        req.SetContentLength(size);
        if (!md5.isEmpty())
            req.SetContentMD5(toAws(QString::fromLatin1(md5.toBase64())));
        applyUploadOptions(req, localFile, *m_session, params, to.bucket());
        qint64 sent = 0;
        req.SetDataSentEventHandler([&](const Aws::Http::HttpRequest*, long long n) {
            sent += n;
            ctx.reportProgress(std::min(sent, size), size);
            if (params.limiter)
                params.limiter->consume(n, &ctx);
        });
        req.SetContinueRequestHandler([&ctx](const Aws::Http::HttpRequest*) { return !ctx.isCancelled(); });
        auto outcome = client.PutObject(req);
        if (!outcome.IsSuccess())
            return cancelledOr(outcome.GetError(), ctx);
        const auto& result = outcome.GetResult();
        const QString etag = unquote(result.GetETag());
        const QString expected = QString::fromLatin1(md5.toHex());
        if (params.verify && !md5.isEmpty() && isMd5Etag(etag) &&
            encryptionFromParams(params).mode == ObjectEncryption::Mode::None &&
            !opaqueEtag(result.GetServerSideEncryption(), result.GetSSECustomerAlgorithm()) &&
            etag.compare(expected, Qt::CaseInsensitive) != 0)
            return integrityError(to, tr("ETag %1 differs from the local MD5 %2").arg(etag, expected));
        ctx.reportProgress(size, size);
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

VoidResult S3Provider::multipartUpload(const QString& localFile, const Location& to, qint64 size,
                                       OperationContext& ctx)
{
    const TransferParams& params = paramsOf(ctx);
    CheckpointWriter checkpoint(params);
    const bool checksums = useChecksums(*m_session);
    const QString fingerprint =
        QStringLiteral("file:%1:%2").arg(size).arg(QFileInfo(localFile).lastModified().toMSecsSinceEpoch());
    qint64 partSize = partSizeFor(size, params.partSize > 0 ? params.partSize : m_partSize);
    const std::filesystem::path path = toFsPath(localFile);
    const bool customerKey = encryptionFromParams(params).mode == ObjectEncryption::Mode::Customer;
    // Part and object ETags of encrypted uploads are not comparable with MD5 sums.
    const bool encrypted = encryptionFromParams(params).mode != ObjectEncryption::Mode::None;
    const std::optional<SseCustomerKey> sseKey =
        customerKey ? m_session->sseCustomerKey(to.bucket()) : std::nullopt;
    if (!QFileInfo(localFile).isReadable())
        return Error::make(ErrorCode::AccessDenied,
                           tr("Cannot read %1").arg(QDir::toNativeSeparators(localFile)));

    auto r = withClient<bool>(to.bucket(), [&](Client& client) -> Result<bool> {
        Aws::String uploadId;
        QHash<int, PartResult> existing;
        if (params.checkpoint && !params.checkpoint->uploadId.isEmpty()) {
            const Aws::String previous = toAws(params.checkpoint->uploadId);
            if (params.checkpoint->sourceFingerprint == fingerprint && params.checkpoint->partSize > 0) {
                auto listed = listParts(client, *m_session, to, previous, ctx);
                if (listed) {
                    uploadId = previous;
                    partSize = params.checkpoint->partSize;
                    existing = listed.value();
                    qCInfo(lcS3) << "resuming multipart upload of" << to.displayString() << "with"
                                 << existing.size() << "part(s) already stored";
                } else if (listed.error().code != ErrorCode::NotFound) {
                    return listed.error();
                }
            } else {
                abortUpload(client, *m_session, to, previous); // the local file changed
            }
        }
        if (uploadId.empty()) {
            Model::CreateMultipartUploadRequest create;
            create.SetBucket(toAws(to.bucket()));
            payer(create, *m_session, to.bucket());
            create.SetKey(toAws(to.key()));
            applyUploadOptions(create, localFile, *m_session, params, to.bucket());
            if (checksums)
                create.SetChecksumAlgorithm(Model::ChecksumAlgorithm::CRC32);
            auto created = client.CreateMultipartUpload(create);
            if (!created.IsSuccess())
                return aws::toError(created.GetError());
            uploadId = created.GetResult().GetUploadId();
            // Persist before sending data, so a crash leaves a resumable upload.
            checkpoint.update([&](TransferCheckpoint& cp) {
                cp.uploadId = fromAws(uploadId);
                cp.partSize = partSize;
                cp.sourceFingerprint = fingerprint;
            });
        }

        const int count = transfer::partCount(size, partSize);
        std::vector<PartResult> parts(static_cast<size_t>(count));
        ProgressSink progress(ctx, size);
        const VoidResult ran = runParallel(
            count, params.partConcurrency, ctx, [&](int i, const std::atomic_bool& stop) -> VoidResult {
                const int number = i + 1;
                const qint64 offset = qint64(i) * partSize;
                const qint64 length = std::min(partSize, size - offset);
                const QByteArray md5 = md5Range(localFile, offset, length, ctx);
                if (ctx.isCancelled() || stop.load())
                    return Error::cancelled();
                if (md5.isEmpty())
                    return Error::make(ErrorCode::Io,
                                       tr("Error reading %1").arg(QDir::toNativeSeparators(localFile)));
                if (auto it = existing.constFind(number); it != existing.cend() && it->size == length) {
                    const QString stored = unquote(it->etag);
                    if (encrypted || !isMd5Etag(stored) ||
                        stored.compare(QString::fromLatin1(md5.toHex()), Qt::CaseInsensitive) == 0) {
                        PartResult reused = *it;
                        reused.md5 = md5;
                        parts[size_t(i)] = reused;
                        progress.add(length);
                        return {};
                    }
                }
                auto buf = std::make_unique<FileRangeBuf>(path, offset, length);
                if (!buf->ok())
                    return Error::make(ErrorCode::AccessDenied,
                                       tr("Cannot read %1").arg(QDir::toNativeSeparators(localFile)));
                auto body = Aws::MakeShared<Aws::IOStream>(kTag, buf.get());
                Model::UploadPartRequest part;
                part.SetBucket(toAws(to.bucket()));
                payer(part, *m_session, to.bucket());
                part.SetKey(toAws(to.key()));
                part.SetUploadId(uploadId);
                part.SetPartNumber(number);
                part.SetContentLength(length);
                part.SetContentMD5(toAws(QString::fromLatin1(md5.toBase64())));
                part.SetBody(body);
                if (sseKey)
                    aws::setSseCustomerKey(part, *sseKey);
                if (checksums)
                    part.SetChecksumAlgorithm(Model::ChecksumAlgorithm::CRC32);
                qint64 sent = 0;
                part.SetDataSentEventHandler([&](const Aws::Http::HttpRequest*, long long bytes) {
                    const qint64 n = std::min<qint64>(bytes, length - sent);
                    sent += n;
                    progress.add(n);
                    if (params.limiter)
                        params.limiter->consume(bytes, &ctx);
                });
                part.SetContinueRequestHandler(
                    [&](const Aws::Http::HttpRequest*) { return !ctx.isCancelled() && !stop.load(); });
                auto outcome = client.UploadPart(part);
                body.reset();
                if (!outcome.IsSuccess()) {
                    progress.add(-sent);
                    return cancelledOr(outcome.GetError(), ctx);
                }
                progress.add(length - sent);
                PartResult uploaded;
                uploaded.number = number;
                uploaded.size = length;
                uploaded.etag = outcome.GetResult().GetETag();
                uploaded.checksum = outcome.GetResult().GetChecksumCRC32();
                uploaded.md5 = md5;
                parts[size_t(i)] = uploaded;
                return {};
            });
        if (!ran) {
            if (!checkpoint.enabled())
                abortUpload(client, *m_session, to, uploadId);
            return ran.error();
        }

        Model::CompletedMultipartUpload completed;
        QList<QByteArray> md5s;
        for (const PartResult& p : parts) {
            Model::CompletedPart done;
            done.SetPartNumber(p.number);
            done.SetETag(p.etag);
            if (checksums && !p.checksum.empty())
                done.SetChecksumCRC32(p.checksum);
            completed.AddParts(done);
            md5s.push_back(p.md5);
        }
        Model::CompleteMultipartUploadRequest complete;
        complete.SetBucket(toAws(to.bucket()));
        payer(complete, *m_session, to.bucket());
        complete.SetKey(toAws(to.key()));
        complete.SetUploadId(uploadId);
        if (sseKey)
            aws::setSseCustomerKey(complete, *sseKey);
        complete.SetMultipartUpload(completed);
        auto done = client.CompleteMultipartUpload(complete);
        if (!done.IsSuccess()) {
            if (!checkpoint.enabled())
                abortUpload(client, *m_session, to, uploadId);
            return aws::toError(done.GetError());
        }
        checkpoint.update([](TransferCheckpoint& cp) { cp.clear(); });
        const auto& result = done.GetResult();
        const QString etag = unquote(result.GetETag());
        const QString expected = transfer::multipartEtag(md5s);
        if (params.verify && !encrypted && isMd5Etag(etag) && etag.contains(u'-') &&
            !opaqueEtag(result.GetServerSideEncryption(), {}) &&
            etag.compare(expected, Qt::CaseInsensitive) != 0)
            return integrityError(to, tr("ETag %1 differs from the expected %2").arg(etag, expected));
        return true;
    });
    if (!r)
        return r.error();
    return {};
}

void S3Provider::discardPartialTransfer(const Location& remote, const QString& localFile,
                                        const TransferCheckpoint& checkpoint)
{
    Provider::discardPartialTransfer(remote, localFile, checkpoint);
    if (checkpoint.uploadId.isEmpty() || !remote.isS3() || remote.bucket().isEmpty())
        return;
    auto client = m_session->clientForBucket(remote.bucket());
    if (client)
        abortUpload(*client.value(), *m_session, remote, toAws(checkpoint.uploadId));
}

} // namespace s3fm
