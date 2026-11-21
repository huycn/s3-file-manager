#pragma once

#include <QJsonObject>
#include <QString>

#include <functional>

namespace s3fm {

class BandwidthLimiter;

// Suffix of the file a download is written to before it is renamed into place.
inline constexpr QStringView kPartialSuffix = u".s3fm-part";

// Resume state of one file transfer. Providers fill it in while they work; the
// transfer engine persists it so that a transfer interrupted by a pause, an error
// or a crash continues where it stopped.
struct TransferCheckpoint
{
    // Multipart upload or multipart server-side copy in progress.
    QString uploadId;
    qint64 partSize = 0;
    // Identifies the source the parts were cut from (size + mtime for local files,
    // the ETag for objects). A different source restarts the upload.
    QString sourceFingerprint;
    // Partial download: ETag of the object the bytes in "<file>.s3fm-part" belong to.
    QString downloadEtag;

    bool isEmpty() const { return uploadId.isEmpty() && downloadEtag.isEmpty(); }
    void clear() { *this = {}; }

    QJsonObject toJson() const;
    static TransferCheckpoint fromJson(const QJsonObject& json);
};

// Optional tuning and resume support for Provider::copy/upload/download, passed
// through OperationContext::params(). Providers ignore what they cannot use.
struct TransferParams
{
    qint64 multipartThreshold = 0; // 0: provider default
    qint64 partSize = 0;           // 0: provider default
    int partConcurrency = 1;       // parts of one file transferred in parallel
    bool verify = true;            // compare checksums/ETags after the transfer where possible
    bool preserveMtime = true;     // keep the modification time (x-amz-meta-mtime on S3)
    bool detectContentType = true; // guess Content-Type from the file name on upload
    QString storageClass;          // upload storage class; empty: connection default
    QString sse;                   // "", "AES256", "aws:kms" or "SSE-C" (key from the connection)
    QString sseKmsKeyId;           // aws:kms: key id/ARN/alias; empty: AWS managed key
    QString sourceVersionId;       // copy/download this version of the source (S3)
    BandwidthLimiter* limiter = nullptr;

    // Resumable mode: when cancelled or failing, keep partial state (incomplete
    // multipart upload, partial download file) described by `checkpoint`, and pick
    // it up again on the next call with the same checkpoint.
    bool resumable = false;
    TransferCheckpoint* checkpoint = nullptr;
    // Called on a worker thread whenever `checkpoint` changes (persist it).
    std::function<void()> checkpointChanged;
};

} // namespace s3fm
