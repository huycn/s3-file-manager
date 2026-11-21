#pragma once

#include <QByteArray>
#include <QString>

#include <optional>

namespace s3fm {

class OperationContext;

namespace checksums {

enum class Algorithm
{
    MD5, // compared with the ETag
    CRC32,
    CRC32C,
    SHA1,
    SHA256,
    CRC64NVME,
};

QString name(Algorithm algorithm);
std::optional<Algorithm> fromName(const QString& name); // "CRC32", "crc64nvme", …

// Raw digest of [offset, offset + length) of a file (CRCs big-endian). Empty on read
// errors or cancellation.
QByteArray hashRange(const QString& path, qint64 offset, qint64 length, Algorithm algorithm,
                     const OperationContext* ctx = nullptr);

// The value S3 stores for `path` uploaded in parts of `partSize` bytes (0: one
// part). MD5 gives the ETag form (hex, "…-N" for multipart); the others the base64
// checksum, "…-N" for composite (per-part) checksums.
QString objectValue(const QString& path, Algorithm algorithm, qint64 partSize = 0,
                    const OperationContext* ctx = nullptr);

} // namespace checksums
} // namespace s3fm
