#include "providers/s3/S3Types.h"

#include <QCoreApplication>
#include <QCryptographicHash>
#include <QRandomGenerator>
#include <QRegularExpression>

#include <cstring>

namespace s3fm {

namespace {
const QString kMetaPrefix = QStringLiteral("x-amz-meta-");

QString tr(const char* text)
{
    return QCoreApplication::translate("s3fm::S3Types", text);
}
} // namespace

ObjectHeaders ObjectHeaders::fromEntry(const Entry& e)
{
    ObjectHeaders h;
    h.contentType = e.metadata.value(QStringLiteral("Content-Type"), e.contentType);
    h.cacheControl = e.metadata.value(QStringLiteral("Cache-Control"));
    h.contentDisposition = e.metadata.value(QStringLiteral("Content-Disposition"));
    h.contentEncoding = e.metadata.value(QStringLiteral("Content-Encoding"));
    h.contentLanguage = e.metadata.value(QStringLiteral("Content-Language"));
    h.expires = e.metadata.value(QStringLiteral("Expires"));
    for (auto it = e.metadata.cbegin(); it != e.metadata.cend(); ++it) {
        if (it.key().startsWith(kMetaPrefix, Qt::CaseInsensitive))
            h.userMetadata.insert(it.key().mid(kMetaPrefix.size()).toLower(), it.value());
    }
    return h;
}

ObjectEncryption ObjectEncryption::fromEntry(const Entry& e)
{
    ObjectEncryption enc;
    const QString sse = e.metadata.value(QStringLiteral("x-amz-server-side-encryption"));
    if (!e.metadata.value(QStringLiteral("x-amz-server-side-encryption-customer-algorithm")).isEmpty()) {
        enc.mode = Mode::Customer;
    } else if (sse.startsWith(QStringLiteral("aws:kms"))) {
        enc.mode = Mode::Kms;
        enc.kmsKeyId = e.metadata.value(QStringLiteral("x-amz-server-side-encryption-aws-kms-key-id"));
    } else if (sse == u"AES256") {
        enc.mode = Mode::S3;
    }
    return enc;
}

QString ObjectEncryption::modeName(Mode mode)
{
    switch (mode) {
    case Mode::None:
        return tr("None");
    case Mode::S3:
        return tr("SSE-S3 (AES-256, keys managed by S3)");
    case Mode::Kms:
        return tr("SSE-KMS (AWS KMS key)");
    case Mode::Customer:
        return tr("SSE-C (customer-provided key)");
    }
    return {};
}

QString SseCustomerKey::keyMd5Base64() const
{
    return QString::fromLatin1(QCryptographicHash::hash(key, QCryptographicHash::Md5).toBase64());
}

SseCustomerKey SseCustomerKey::fromText(const QString& text)
{
    const QString t = text.trimmed();
    SseCustomerKey k;
    static const QRegularExpression hex(QStringLiteral("^[0-9a-fA-F]{64}$"));
    if (hex.match(t).hasMatch()) {
        k.key = QByteArray::fromHex(t.toLatin1());
        return k;
    }
    const auto decoded =
        QByteArray::fromBase64Encoding(t.toLatin1(), QByteArray::AbortOnBase64DecodingErrors);
    if (decoded && decoded.decoded.size() == 32)
        k.key = decoded.decoded;
    return k;
}

SseCustomerKey SseCustomerKey::generate()
{
    SseCustomerKey k;
    k.key.resize(32);
    QRandomGenerator* gen = QRandomGenerator::system();
    for (int i = 0; i < 32; i += 4) {
        const quint32 v = gen->generate();
        std::memcpy(k.key.data() + i, &v, 4);
    }
    return k;
}

QStringList storageClassNames()
{
    return {QStringLiteral("STANDARD"),       QStringLiteral("INTELLIGENT_TIERING"),
            QStringLiteral("STANDARD_IA"),    QStringLiteral("ONEZONE_IA"),
            QStringLiteral("GLACIER_IR"),     QStringLiteral("GLACIER"),
            QStringLiteral("DEEP_ARCHIVE"),   QStringLiteral("REDUCED_REDUNDANCY"),
            QStringLiteral("EXPRESS_ONEZONE")};
}

QStringList cannedAclNames()
{
    return {QStringLiteral("private"),
            QStringLiteral("public-read"),
            QStringLiteral("public-read-write"),
            QStringLiteral("authenticated-read"),
            QStringLiteral("aws-exec-read"),
            QStringLiteral("bucket-owner-read"),
            QStringLiteral("bucket-owner-full-control")};
}

bool isArchiveStorageClass(const QString& storageClass)
{
    return storageClass == u"GLACIER" || storageClass == u"DEEP_ARCHIVE";
}

QString validateTags(const QMap<QString, QString>& tags)
{
    if (tags.size() > 10)
        return tr("An object can have at most 10 tags.");
    for (auto it = tags.cbegin(); it != tags.cend(); ++it) {
        if (it.key().isEmpty() || it.key().size() > 128)
            return tr("Tag keys must have 1 to 128 characters.");
        if (it.value().size() > 256)
            return tr("Tag values can have at most 256 characters.");
        if (it.key().startsWith(QStringLiteral("aws:"), Qt::CaseInsensitive))
            return tr("Tag keys must not start with \"aws:\".");
    }
    return {};
}

bool isValidMetadataKey(const QString& key)
{
    static const QRegularExpression re(QStringLiteral("^[A-Za-z0-9._-]+$"));
    return re.match(key).hasMatch();
}

} // namespace s3fm
