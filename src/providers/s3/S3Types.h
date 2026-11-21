#pragma once

#include "core/Entry.h"
#include "core/Error.h"

#include <QByteArray>
#include <QDateTime>
#include <QList>
#include <QMap>
#include <QMetaType>
#include <QString>

#include <optional>

namespace s3fm {

// Editable HTTP headers and user metadata of an object (S3 stores them with the
// object; changing them rewrites the object).
struct ObjectHeaders
{
    QString contentType;
    QString cacheControl;
    QString contentDisposition;
    QString contentEncoding;
    QString contentLanguage;
    QString expires;                     // HTTP date, as stored
    QMap<QString, QString> userMetadata; // keys without the "x-amz-meta-" prefix, lower case

    static ObjectHeaders fromEntry(const Entry& entry); // from Entry::metadata (HeadObject)
    bool operator==(const ObjectHeaders&) const = default;
};

// Server-side encryption of an object.
struct ObjectEncryption
{
    enum class Mode
    {
        None,
        S3,       // SSE-S3 (AES256, keys managed by S3)
        Kms,      // SSE-KMS (aws:kms), optional key id/ARN/alias
        Customer, // SSE-C (customer-provided key; never stored by S3)
    };
    Mode mode = Mode::None;
    QString kmsKeyId; // Kms: empty = the AWS managed key (aws/s3)

    static ObjectEncryption fromEntry(const Entry& entry);
    static QString modeName(Mode mode);
    bool operator==(const ObjectEncryption&) const = default;
};

// SSE-C key material: 256-bit key; S3 needs it on every request for the object.
struct SseCustomerKey
{
    QByteArray key; // 32 raw bytes

    bool isValid() const { return key.size() == 32; }
    QString keyBase64() const { return QString::fromLatin1(key.toBase64()); }
    QString keyMd5Base64() const;
    // Parses base64 (or 64 hex digits). Invalid key if the input is neither.
    static SseCustomerKey fromText(const QString& text);
    static SseCustomerKey generate();
};

// Changes applied when copying an object (also onto itself, "rewrite in place").
struct CopyOverrides
{
    std::optional<ObjectHeaders> headers;       // replace headers + user metadata
    QString storageClass;                       // empty: keep the source's
    std::optional<ObjectEncryption> encryption; // nullopt: keep the source's
};

struct ObjectGrant
{
    QString grantee;    // display name, email, canonical id or group URI
    QString type;       // CanonicalUser, AmazonCustomerByEmail, Group
    QString permission; // FULL_CONTROL, READ, WRITE, READ_ACP, WRITE_ACP
};

struct ObjectAcl
{
    QString owner;
    QList<ObjectGrant> grants;
};

struct ObjectRetention
{
    QString mode; // GOVERNANCE, COMPLIANCE, or empty (none)
    QDateTime retainUntil;
    bool isSet() const { return !mode.isEmpty(); }
};

// Everything the object properties dialog shows. Sub-resources that the endpoint
// does not support (or the user may not read) carry an error instead of a value.
struct ObjectDetails
{
    Entry entry;
    ObjectHeaders headers;
    ObjectEncryption encryption;
    QMap<QString, QString> checksums; // "CRC32" -> base64 value ("…-N" when composite)

    QMap<QString, QString> tags;
    std::optional<Error> tagsError;
    ObjectAcl acl;
    std::optional<Error> aclError;
    QString objectOwnership;  // bucket setting: BucketOwnerEnforced, …; empty if unknown
    bool lockEnabled = false; // bucket has Object Lock enabled
    ObjectRetention retention;
    bool legalHold = false;
    std::optional<Error> lockError;
};

// Result of comparing an object's stored checksums with a local file.
struct ChecksumComparison
{
    QString algorithm; // MD5 (ETag), CRC32, CRC32C, SHA1, SHA256, CRC64NVME
    QString remote;
    QString local; // empty if it could not be computed
    bool matches = false;
};

// Batch change applied to many objects (selection; folders are expanded).
struct BulkObjectChange
{
    // Headers set on every object; empty values remove the header. User metadata
    // entries are merged unless `replaceUserMetadata`.
    std::optional<ObjectHeaders> headers;
    bool replaceUserMetadata = false;
    QStringList removeUserMetadata;
    QString storageClass;
    std::optional<ObjectEncryption> encryption;
    std::optional<QMap<QString, QString>> tags; // replaces the tag set
    QString cannedAcl;                          // empty: unchanged

    bool rewritesObject() const { return headers || !storageClass.isEmpty() || encryption; }
    bool isEmpty() const { return !rewritesObject() && !tags && cannedAcl.isEmpty(); }
};

// Storage classes offered in the UI (AWS names; S3-compatible services accept a subset).
QStringList storageClassNames();
// Canned ACLs for objects.
QStringList cannedAclNames();
// Archive classes whose objects must be restored before they can be read.
bool isArchiveStorageClass(const QString& storageClass);

// Checks S3 tag limits (10 tags, key 1–128, value 0–256 characters, no "aws:" prefix).
QString validateTags(const QMap<QString, QString>& tags);
// Checks a user metadata key (letters, digits, '-', '_' and '.').
bool isValidMetadataKey(const QString& key);

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::ObjectDetails)
