#pragma once

// Bucket-level settings as plain values (no SDK types): validation and the JSON
// formats of the AWS CLI (`aws s3api put-bucket-lifecycle-configuration` etc.),
// so the raw views accept what users copy from documentation.

#include "connections/ConnectionProfile.h"
#include "core/Entry.h"
#include "core/Error.h"

#include <QByteArray>
#include <QDate>
#include <QDateTime>
#include <QJsonArray>
#include <QJsonObject>
#include <QList>
#include <QMap>
#include <QString>
#include <QStringList>

#include <optional>

namespace s3fm {

// Bucket sub-resources; used for feature probing (S3-compatible services support
// different subsets).
enum class BucketFeature
{
    Versioning,
    Encryption,
    Lifecycle,
    Cors,
    Policy,
    PublicAccessBlock,
    Tagging,
    Website,
    ObjectLock,
    Ownership,
};
QString bucketFeatureKey(BucketFeature feature);
QString bucketFeatureName(BucketFeature feature);
// Features a provider preset is known not to support although it answers reads
// (MinIO reports "no CORS configuration" but refuses to store one).
QList<BucketFeature> knownUnsupportedFeatures(ConnectionProfile::Preset preset);

// ---------------------------------------------------------------------------
// Creation
// ---------------------------------------------------------------------------

struct NewBucket
{
    QString name;
    QString region;          // empty: the connection's region (AWS) / endpoint default
    bool objectLock = false; // also enables versioning; cannot be undone
    QString objectOwnership; // empty: service default (AWS: BucketOwnerEnforced)
    QString cannedAcl;       // empty: none (needs ACLs enabled)
};

// Checks the S3 bucket naming rules. Returns an error message, or empty if the
// name is valid; `warning` gets advice for valid but problematic names (dots).
// `aws` adds the AWS-reserved prefixes and suffixes.
QString validateBucketName(const QString& name, bool aws, QString* warning = nullptr);

// AWS region codes offered when creating buckets.
QStringList awsRegions();
QStringList objectOwnershipValues(); // BucketOwnerEnforced, BucketOwnerPreferred, ObjectWriter

// ---------------------------------------------------------------------------
// Overview, versioning, encryption
// ---------------------------------------------------------------------------

struct BucketOverview
{
    QString name;
    QString region;
    QDateTime created;
    QString owner; // display name or canonical id
    QString arn;
    QString objectOwnership; // empty if not set or not supported
    std::optional<Error> ownerError;
};

struct BucketVersioning
{
    QString status;    // "", "Enabled", "Suspended"
    QString mfaDelete; // "", "Enabled", "Disabled"
};

struct BucketEncryption
{
    enum class Mode
    {
        None,
        S3,      // AES256
        Kms,     // aws:kms
        DsseKms, // aws:kms:dsse
    };
    Mode mode = Mode::None;
    QString kmsKeyId; // empty: AWS managed key
    bool bucketKey = false;

    static QString algorithm(Mode mode); // "AES256", "aws:kms", "aws:kms:dsse"
    static Mode fromAlgorithm(const QString& algorithm);
    bool operator==(const BucketEncryption&) const = default;
};

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

struct LifecycleTransition
{
    int days = -1; // -1: use `date`
    QDate date;
    QString storageClass;
    bool operator==(const LifecycleTransition&) const = default;
};

struct NoncurrentTransition
{
    int days = 0;
    QString storageClass;
    int newerVersions = -1; // keep this many newer noncurrent versions; -1: unset
    bool operator==(const NoncurrentTransition&) const = default;
};

struct LifecycleRule
{
    QString id;
    bool enabled = true;
    // Filter (all conditions must match)
    QString prefix;
    QMap<QString, QString> tags;
    qint64 sizeGreaterThan = -1;
    qint64 sizeLessThan = -1;
    // Current versions
    QList<LifecycleTransition> transitions;
    int expirationDays = -1;
    QDate expirationDate;
    bool expiredDeleteMarker = false; // remove delete markers without noncurrent versions
    // Noncurrent versions
    QList<NoncurrentTransition> noncurrentTransitions;
    int noncurrentExpirationDays = -1;
    int newerNoncurrentVersions = -1;
    // Multipart uploads
    int abortUploadDays = -1;

    bool hasAction() const;
    QString validate() const; // empty if valid
    QString filterSummary() const;
    QString actionSummary() const;
    bool operator==(const LifecycleRule&) const = default;
};

QStringList lifecycleStorageClasses(); // transition targets
QString validateLifecycle(const QList<LifecycleRule>& rules);
QJsonObject lifecycleToJson(const QList<LifecycleRule>& rules); // {"Rules": [...]}
Result<QList<LifecycleRule>> lifecycleFromJson(const QByteArray& json);

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

struct CorsRule
{
    QString id;
    QStringList allowedOrigins;
    QStringList allowedMethods; // GET, PUT, POST, DELETE, HEAD
    QStringList allowedHeaders;
    QStringList exposeHeaders;
    int maxAgeSeconds = -1;

    QString validate() const;
    bool operator==(const CorsRule&) const = default;
};

QString validateCors(const QList<CorsRule>& rules);
QJsonObject corsToJson(const QList<CorsRule>& rules); // {"CORSRules": [...]}
Result<QList<CorsRule>> corsFromJson(const QByteArray& json);

// ---------------------------------------------------------------------------
// Policy
// ---------------------------------------------------------------------------

struct PolicyIssue
{
    bool error = true; // false: warning
    int line = 0;      // 1-based; 0: not tied to a position
    int column = 0;
    QString message;
};

// Checks a bucket policy: JSON syntax (with line/column), the statement structure
// (Effect, Principal, Action, Resource), resources outside `bucket`, and public
// grants. An empty text means "no policy" and is valid.
QList<PolicyIssue> validatePolicy(const QString& text, const QString& bucket);
// Ready-made policies for the editor's template menu: name -> JSON.
QList<QPair<QString, QString>> policyTemplates(const QString& bucket);

// ---------------------------------------------------------------------------
// Public access block, website, Object Lock
// ---------------------------------------------------------------------------

struct PublicAccessBlock
{
    bool blockPublicAcls = false;
    bool ignorePublicAcls = false;
    bool blockPublicPolicy = false;
    bool restrictPublicBuckets = false;

    bool any() const
    {
        return blockPublicAcls || ignorePublicAcls || blockPublicPolicy || restrictPublicBuckets;
    }
    bool all() const
    {
        return blockPublicAcls && ignorePublicAcls && blockPublicPolicy && restrictPublicBuckets;
    }
    bool operator==(const PublicAccessBlock&) const = default;
};

struct RoutingRule
{
    // Condition
    QString keyPrefixEquals;
    QString errorCodeEquals; // HttpErrorCodeReturnedEquals
    // Redirect
    QString hostName;
    QString protocol; // http, https
    QString httpRedirectCode;
    QString replaceKeyPrefixWith;
    QString replaceKeyWith;
    bool operator==(const RoutingRule&) const = default;
};

struct WebsiteConfig
{
    QString indexDocument; // suffix, e.g. index.html
    QString errorDocument; // key
    QString redirectHost;  // redirect every request to this host (exclusive with the rest)
    QString redirectProtocol;
    QList<RoutingRule> routingRules;

    bool isEnabled() const { return !indexDocument.isEmpty() || !redirectHost.isEmpty(); }
    QString validate() const;
    bool operator==(const WebsiteConfig&) const = default;
};

QJsonArray routingRulesToJson(const QList<RoutingRule>& rules);
Result<QList<RoutingRule>> routingRulesFromJson(const QByteArray& json);
// Website endpoint of an AWS bucket (http only), e.g.
// http://bucket.s3-website-us-east-1.amazonaws.com
QString awsWebsiteEndpoint(const QString& bucket, const QString& region);

struct ObjectLockDefaults
{
    bool enabled = false; // Object Lock enabled on the bucket
    QString mode;         // default retention: GOVERNANCE, COMPLIANCE, or empty (none)
    int days = 0;
    int years = 0;

    QString validate() const;
    bool operator==(const ObjectLockDefaults&) const = default;
};

// Bucket tags allow 50 entries; same key/value limits as object tags.
QString validateBucketTags(const QMap<QString, QString>& tags);

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

struct UsageCount
{
    qint64 objects = 0;
    qint64 bytes = 0;
    void add(qint64 size)
    {
        ++objects;
        bytes += qMax<qint64>(0, size);
    }
    bool operator==(const UsageCount&) const = default;
};

struct BucketStats
{
    QMap<QString, UsageCount> current; // by storage class (STANDARD if not reported)
    UsageCount noncurrent;             // older versions (versions listing only)
    qint64 deleteMarkers = 0;
    UsageCount uploads; // incomplete multipart uploads (bytes not counted)
    bool versionsListed = false;
    bool complete = false; // false if cancelled

    UsageCount currentTotal() const;
    // Adds one listing entry (an object, a version or a delete marker).
    void add(const Entry& entry);
};

} // namespace s3fm
