#include "providers/s3/Checksums.h"

#include "core/OperationContext.h"

#include <QCryptographicHash>
#include <QFile>
#include <QFileInfo>
#include <QtEndian>

#include <aws/crt/checksum/CRC.h>

namespace s3fm::checksums {

QString name(Algorithm a)
{
    switch (a) {
    case Algorithm::MD5:
        return QStringLiteral("MD5");
    case Algorithm::CRC32:
        return QStringLiteral("CRC32");
    case Algorithm::CRC32C:
        return QStringLiteral("CRC32C");
    case Algorithm::SHA1:
        return QStringLiteral("SHA1");
    case Algorithm::SHA256:
        return QStringLiteral("SHA256");
    case Algorithm::CRC64NVME:
        return QStringLiteral("CRC64NVME");
    }
    return {};
}

std::optional<Algorithm> fromName(const QString& text)
{
    for (Algorithm a : {Algorithm::MD5, Algorithm::CRC32, Algorithm::CRC32C, Algorithm::SHA1,
                        Algorithm::SHA256, Algorithm::CRC64NVME}) {
        if (name(a).compare(text, Qt::CaseInsensitive) == 0)
            return a;
    }
    return std::nullopt;
}

namespace {

// Incremental hasher over all supported algorithms.
class Hasher
{
public:
    explicit Hasher(Algorithm a) : m_algorithm(a), m_hash(qtAlgorithm(a)) {}

    void add(const char* data, qint64 n)
    {
        const Aws::Crt::ByteCursor cursor =
            Aws::Crt::ByteCursorFromArray(reinterpret_cast<const uint8_t*>(data), size_t(n));
        switch (m_algorithm) {
        case Algorithm::CRC32:
            m_crc32 = Aws::Crt::Checksum::ComputeCRC32(cursor, m_crc32);
            break;
        case Algorithm::CRC32C:
            m_crc32 = Aws::Crt::Checksum::ComputeCRC32C(cursor, m_crc32);
            break;
        case Algorithm::CRC64NVME:
            m_crc64 = Aws::Crt::Checksum::ComputeCRC64NVME(cursor, m_crc64);
            break;
        default:
            m_hash.addData(QByteArrayView(data, n));
        }
    }

    QByteArray result()
    {
        switch (m_algorithm) {
        case Algorithm::CRC32:
        case Algorithm::CRC32C: {
            QByteArray out(4, Qt::Uninitialized);
            qToBigEndian(m_crc32, out.data());
            return out;
        }
        case Algorithm::CRC64NVME: {
            QByteArray out(8, Qt::Uninitialized);
            qToBigEndian(m_crc64, out.data());
            return out;
        }
        default:
            return m_hash.result();
        }
    }

private:
    static QCryptographicHash::Algorithm qtAlgorithm(Algorithm a)
    {
        switch (a) {
        case Algorithm::SHA1:
            return QCryptographicHash::Sha1;
        case Algorithm::SHA256:
            return QCryptographicHash::Sha256;
        default:
            return QCryptographicHash::Md5;
        }
    }

    Algorithm m_algorithm;
    QCryptographicHash m_hash;
    quint32 m_crc32 = 0;
    quint64 m_crc64 = 0;
};

} // namespace

QByteArray hashRange(const QString& path, qint64 offset, qint64 length, Algorithm algorithm,
                     const OperationContext* ctx)
{
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly) || !f.seek(offset))
        return {};
    Hasher hasher(algorithm);
    QByteArray buffer(1 << 20, Qt::Uninitialized);
    qint64 left = length;
    while (left > 0) {
        if (ctx && ctx->isCancelled())
            return {};
        const qint64 n = f.read(buffer.data(), qMin<qint64>(buffer.size(), left));
        if (n <= 0)
            return {};
        hasher.add(buffer.constData(), n);
        left -= n;
    }
    return hasher.result();
}

QString objectValue(const QString& path, Algorithm algorithm, qint64 partSize, const OperationContext* ctx)
{
    const qint64 size = QFileInfo(path).size();
    auto encode = [algorithm](const QByteArray& raw) {
        return algorithm == Algorithm::MD5 ? QString::fromLatin1(raw.toHex())
                                           : QString::fromLatin1(raw.toBase64());
    };
    if (partSize <= 0) {
        const QByteArray whole = hashRange(path, 0, size, algorithm, ctx);
        return whole.isEmpty() ? QString() : encode(whole);
    }
    // Composite: digest of the concatenated per-part digests, plus the part count.
    Hasher outer(algorithm);
    int parts = 0;
    for (qint64 offset = 0; offset < size || parts == 0; offset += partSize) {
        const QByteArray part = hashRange(path, offset, qMin(partSize, size - offset), algorithm, ctx);
        if (part.isEmpty())
            return {};
        outer.add(part.constData(), part.size());
        ++parts;
        if (size == 0)
            break;
    }
    return encode(outer.result()) + u'-' + QString::number(parts);
}

} // namespace s3fm::checksums
