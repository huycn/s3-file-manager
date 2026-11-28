#include "providers/ContentCompare.h"

#include "core/OperationContext.h"
#include "core/ProviderRegistry.h"
#include "providers/s3/Checksums.h"
#include "providers/s3/S3ObjectService.h"
#include "providers/s3/S3Provider.h"
#include "transfer/TransferMath.h"

#include <QCoreApplication>
#include <QDir>
#include <QFile>

namespace s3fm {

namespace {

struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::ContentCompare)
};

ContentCheck verdict(ContentVerdict v, QString note = {})
{
    return ContentCheck{v, std::move(note)};
}

Error readError(const QString& path)
{
    return Error::make(ErrorCode::Io, Tr::tr("Error reading %1").arg(QDir::toNativeSeparators(path)));
}

bool isPlainMd5(const QString& etag)
{
    return transfer::isMd5Etag(etag) && !etag.contains(u'-');
}

bool opaqueEtag(const Entry& head)
{
    const ObjectEncryption::Mode mode = ObjectEncryption::fromEntry(head).mode;
    return mode == ObjectEncryption::Mode::Kms || mode == ObjectEncryption::Mode::Customer;
}

Result<ContentCheck> localVsS3(ProviderRegistry* registry, const QString& file, const Entry& object,
                               OperationContext& ctx)
{
    // Fast path without requests: MD5 of the file against a single-part ETag.
    if (isPlainMd5(object.etag)) {
        const QString md5 = checksums::objectValue(file, checksums::Algorithm::MD5, 0, &ctx);
        if (ctx.isCancelled())
            return Error::cancelled();
        if (md5.isEmpty())
            return readError(file);
        if (md5.compare(object.etag, Qt::CaseInsensitive) == 0)
            return verdict(ContentVerdict::Same);
    }
    // Mismatch (maybe an SSE-KMS ETag) or multipart: ask the object.
    auto service = registry ? S3ObjectService::forLocation(*registry, object.location) : nullptr;
    if (!service)
        return verdict(ContentVerdict::Unknown);
    auto compared = service->compareWithLocal(object.location, file, ctx);
    if (!compared)
        return compared.error();
    bool anyComputed = false;
    for (const ChecksumComparison& c : compared.value()) {
        if (c.matches)
            return verdict(ContentVerdict::Same);
        anyComputed = anyComputed || !c.local.isEmpty();
    }
    if (ctx.isCancelled())
        return Error::cancelled();
    if (!anyComputed)
        return verdict(ContentVerdict::Unknown,
                       Tr::tr("The object has no checksum to compare with (encrypted with SSE-KMS or "
                              "SSE-C, and no stored checksum)."));
    return verdict(ContentVerdict::Different);
}

Result<ContentCheck> s3VsS3(ProviderRegistry* registry, const Entry& a, const Entry& b)
{
    if (transfer::isMd5Etag(a.etag) && a.etag.compare(b.etag, Qt::CaseInsensitive) == 0)
        return verdict(ContentVerdict::Same);
    auto sa = registry ? S3ObjectService::forLocation(*registry, a.location) : nullptr;
    auto sb = registry ? S3ObjectService::forLocation(*registry, b.location) : nullptr;
    if (!sa || !sb)
        return verdict(ContentVerdict::Unknown);
    auto ha = sa->provider().headObject(a.location, a.versionId);
    if (!ha)
        return ha.error();
    auto hb = sb->provider().headObject(b.location, b.versionId);
    if (!hb)
        return hb.error();
    const Entry& x = ha.value();
    const Entry& y = hb.value();
    if (x.size != y.size)
        return verdict(ContentVerdict::Different);

    // Stored checksums of the same algorithm. Composite (per-part) values only compare
    // when both have the same parts.
    const QString prefix = QStringLiteral("x-amz-checksum-");
    for (auto it = x.metadata.cbegin(); it != x.metadata.cend(); ++it) {
        if (!it.key().startsWith(prefix) || it.key() == u"x-amz-checksum-type")
            continue;
        const QString other = y.metadata.value(it.key());
        if (other.isEmpty())
            continue;
        if (other == it.value())
            return verdict(ContentVerdict::Same);
        const bool composite = it.value().contains(u'-') || other.contains(u'-');
        if (!composite)
            return verdict(ContentVerdict::Different);
    }
    const bool md5 = !opaqueEtag(x) && !opaqueEtag(y);
    if (md5 && transfer::isMd5Etag(x.etag) && x.etag.compare(y.etag, Qt::CaseInsensitive) == 0)
        return verdict(ContentVerdict::Same);
    if (md5 && isPlainMd5(x.etag) && isPlainMd5(y.etag))
        return verdict(ContentVerdict::Different);
    return verdict(ContentVerdict::Unknown,
                   Tr::tr("The objects were uploaded in different parts or are encrypted with SSE-KMS or "
                          "SSE-C; their ETags do not tell whether the content is the same."));
}

} // namespace

Result<ContentCheck> compareLocalFiles(const QString& a, const QString& b, OperationContext& ctx)
{
    QFile fa(a);
    QFile fb(b);
    if (!fa.open(QIODevice::ReadOnly))
        return readError(a);
    if (!fb.open(QIODevice::ReadOnly))
        return readError(b);
    if (fa.size() != fb.size())
        return verdict(ContentVerdict::Different);
    constexpr qint64 kChunk = qint64{1} << 20;
    QByteArray ba(kChunk, Qt::Uninitialized);
    QByteArray bb(kChunk, Qt::Uninitialized);
    for (;;) {
        if (ctx.isCancelled())
            return Error::cancelled();
        const qint64 na = fa.read(ba.data(), kChunk);
        const qint64 nb = fb.read(bb.data(), kChunk);
        if (na < 0)
            return readError(a);
        if (nb < 0)
            return readError(b);
        if (na != nb || std::memcmp(ba.constData(), bb.constData(), size_t(na)) != 0)
            return verdict(ContentVerdict::Different);
        if (na == 0)
            return verdict(ContentVerdict::Same);
    }
}

ContentComparer makeContentComparer(ProviderRegistry* registry)
{
    return [registry](const Entry& a, const Entry& b, OperationContext& ctx) -> Result<ContentCheck> {
        const Location& la = a.location;
        const Location& lb = b.location;
        if (la.isLocal() && lb.isLocal())
            return compareLocalFiles(la.localPath(), lb.localPath(), ctx);
        if (la.isLocal() && lb.isS3())
            return localVsS3(registry, la.localPath(), b, ctx);
        if (la.isS3() && lb.isLocal())
            return localVsS3(registry, lb.localPath(), a, ctx);
        if (la.isS3() && lb.isS3())
            return s3VsS3(registry, a, b);
        return verdict(ContentVerdict::Unknown);
    };
}

} // namespace s3fm
