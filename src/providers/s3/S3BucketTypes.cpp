#include "providers/s3/S3BucketTypes.h"

#include "core/Format.h"
#include "providers/s3/S3Types.h"

#include <QCoreApplication>
#include <QJsonDocument>
#include <QRegularExpression>
#include <QSet>

namespace s3fm {

namespace {

QString tr(const char* text, const char* disambiguation = nullptr, int n = -1)
{
    return QCoreApplication::translate("s3fm::S3BucketTypes", text, disambiguation, n);
}

// Line and column (1-based) of a byte offset in UTF-8 text.
QPair<int, int> position(const QByteArray& utf8, qsizetype offset)
{
    int line = 1;
    int column = 1;
    for (qsizetype i = 0; i < offset && i < utf8.size(); ++i) {
        const char c = utf8.at(i);
        if (c == '\n') {
            ++line;
            column = 1;
        } else if ((uchar(c) & 0xC0) != 0x80) { // count characters, not continuation bytes
            ++column;
        }
    }
    return {line, column};
}

// Parses JSON; on failure returns a message with the line and column.
QString parseJson(const QByteArray& json, QJsonDocument& doc, int* line = nullptr, int* column = nullptr)
{
    QJsonParseError error;
    doc = QJsonDocument::fromJson(json, &error);
    if (error.error == QJsonParseError::NoError)
        return {};
    const auto [l, c] = position(json, error.offset);
    if (line)
        *line = l;
    if (column)
        *column = c;
    return tr("JSON syntax error at line %1, column %2: %3").arg(l).arg(c).arg(error.errorString());
}

Error invalid(const QString& message)
{
    return Error::make(ErrorCode::InvalidArgument, message);
}

QString dateToJson(const QDate& date)
{
    return date.toString(Qt::ISODate) + QStringLiteral("T00:00:00Z");
}

QDate dateFromJson(const QJsonValue& v)
{
    const QString s = v.toString();
    QDate d = QDate::fromString(s.left(10), Qt::ISODate);
    return d;
}

// Rejects keys that are not in `known` (typos would otherwise be dropped silently).
QString checkKeys(const QJsonObject& o, const QStringList& known, const QString& where)
{
    for (auto it = o.begin(); it != o.end(); ++it) {
        if (!known.contains(it.key()))
            return tr("Unknown field \"%1\" in %2").arg(it.key(), where);
    }
    return {};
}

QJsonArray toArray(const QStringList& list)
{
    QJsonArray a;
    for (const QString& s : list)
        a.push_back(s);
    return a;
}

QStringList fromArray(const QJsonValue& v)
{
    QStringList out;
    if (v.isString()) {
        out.push_back(v.toString());
        return out;
    }
    for (const QJsonValue& item : v.toArray())
        out.push_back(item.toString());
    return out;
}

QJsonArray tagsToJson(const QMap<QString, QString>& tags)
{
    QJsonArray a;
    for (auto it = tags.cbegin(); it != tags.cend(); ++it)
        a.push_back(QJsonObject{{QStringLiteral("Key"), it.key()}, {QStringLiteral("Value"), it.value()}});
    return a;
}

void tagFromJson(const QJsonObject& o, QMap<QString, QString>& tags)
{
    tags.insert(o.value(QStringLiteral("Key")).toString(), o.value(QStringLiteral("Value")).toString());
}

int intOr(const QJsonValue& v, int fallback)
{
    return v.isDouble() ? int(v.toInteger(fallback)) : fallback;
}

QString sizeText(qint64 bytes)
{
    return formatSize(bytes);
}

} // namespace

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

QString bucketFeatureKey(BucketFeature feature)
{
    switch (feature) {
    case BucketFeature::Versioning:
        return QStringLiteral("versioning");
    case BucketFeature::Encryption:
        return QStringLiteral("encryption");
    case BucketFeature::Lifecycle:
        return QStringLiteral("lifecycle");
    case BucketFeature::Cors:
        return QStringLiteral("cors");
    case BucketFeature::Policy:
        return QStringLiteral("policy");
    case BucketFeature::PublicAccessBlock:
        return QStringLiteral("publicAccessBlock");
    case BucketFeature::Tagging:
        return QStringLiteral("tagging");
    case BucketFeature::Website:
        return QStringLiteral("website");
    case BucketFeature::ObjectLock:
        return QStringLiteral("objectLock");
    case BucketFeature::Ownership:
        return QStringLiteral("ownership");
    }
    return {};
}

QString bucketFeatureName(BucketFeature feature)
{
    switch (feature) {
    case BucketFeature::Versioning:
        return tr("Versioning");
    case BucketFeature::Encryption:
        return tr("Default encryption");
    case BucketFeature::Lifecycle:
        return tr("Lifecycle rules");
    case BucketFeature::Cors:
        return tr("CORS");
    case BucketFeature::Policy:
        return tr("Bucket policy");
    case BucketFeature::PublicAccessBlock:
        return tr("Public access block");
    case BucketFeature::Tagging:
        return tr("Tags");
    case BucketFeature::Website:
        return tr("Static website hosting");
    case BucketFeature::ObjectLock:
        return tr("Object Lock");
    case BucketFeature::Ownership:
        return tr("Object Ownership");
    }
    return {};
}

QList<BucketFeature> knownUnsupportedFeatures(ConnectionProfile::Preset preset)
{
    switch (preset) {
    case ConnectionProfile::Preset::MinIO:
        // Reads answer "not configured", writes fail (NotImplemented / MalformedXML).
        return {BucketFeature::Cors, BucketFeature::Website};
    default:
        return {};
    }
}

// ---------------------------------------------------------------------------
// Creation
// ---------------------------------------------------------------------------

QString validateBucketName(const QString& name, bool aws, QString* warning)
{
    if (warning)
        warning->clear();
    if (name.size() < 3 || name.size() > 63)
        return tr("Bucket names must be 3 to 63 characters long.");
    static const QRegularExpression chars(QStringLiteral("^[a-z0-9.-]+$"));
    if (!chars.match(name).hasMatch())
        return tr("Bucket names can contain only lowercase letters, digits, dots and hyphens.");
    auto alnum = [](QChar c) { return (c >= u'a' && c <= u'z') || (c >= u'0' && c <= u'9'); };
    if (!alnum(name.front()) || !alnum(name.back()))
        return tr("Bucket names must begin and end with a letter or digit.");
    if (name.contains(QStringLiteral("..")))
        return tr("Bucket names must not contain two adjacent dots.");
    static const QRegularExpression ip(QStringLiteral("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$"));
    if (ip.match(name).hasMatch())
        return tr("Bucket names must not look like an IP address.");
    if (aws) {
        for (const char* prefix : {"xn--", "sthree-", "amzn-s3-demo-"}) {
            if (name.startsWith(QLatin1StringView(prefix)))
                return tr("Bucket names must not start with \"%1\" (reserved by AWS).")
                    .arg(QLatin1StringView(prefix));
        }
        for (const char* suffix : {"-s3alias", "--ol-s3", ".mrap", "--x-s3", "--table-s3"}) {
            if (name.endsWith(QLatin1StringView(suffix)))
                return tr("Bucket names must not end with \"%1\" (reserved by AWS).")
                    .arg(QLatin1StringView(suffix));
        }
    }
    if (warning && name.contains(u'.'))
        *warning = tr("Names with dots do not work with virtual-hosted HTTPS addressing (the TLS "
                      "certificate does not match) or Transfer Acceleration.");
    return {};
}

QStringList awsRegions()
{
    return {
        QStringLiteral("us-east-1"),      QStringLiteral("us-east-2"),      QStringLiteral("us-west-1"),
        QStringLiteral("us-west-2"),      QStringLiteral("ca-central-1"),   QStringLiteral("ca-west-1"),
        QStringLiteral("mx-central-1"),   QStringLiteral("sa-east-1"),      QStringLiteral("eu-central-1"),
        QStringLiteral("eu-central-2"),   QStringLiteral("eu-west-1"),      QStringLiteral("eu-west-2"),
        QStringLiteral("eu-west-3"),      QStringLiteral("eu-south-1"),     QStringLiteral("eu-south-2"),
        QStringLiteral("eu-north-1"),     QStringLiteral("il-central-1"),   QStringLiteral("me-south-1"),
        QStringLiteral("me-central-1"),   QStringLiteral("af-south-1"),     QStringLiteral("ap-east-1"),
        QStringLiteral("ap-south-1"),     QStringLiteral("ap-south-2"),     QStringLiteral("ap-southeast-1"),
        QStringLiteral("ap-southeast-2"), QStringLiteral("ap-southeast-3"), QStringLiteral("ap-southeast-4"),
        QStringLiteral("ap-southeast-5"), QStringLiteral("ap-southeast-7"), QStringLiteral("ap-northeast-1"),
        QStringLiteral("ap-northeast-2"), QStringLiteral("ap-northeast-3"),
    };
}

QStringList objectOwnershipValues()
{
    return {QStringLiteral("BucketOwnerEnforced"), QStringLiteral("BucketOwnerPreferred"),
            QStringLiteral("ObjectWriter")};
}

// ---------------------------------------------------------------------------
// Encryption
// ---------------------------------------------------------------------------

QString BucketEncryption::algorithm(Mode mode)
{
    switch (mode) {
    case Mode::None:
        return {};
    case Mode::S3:
        return QStringLiteral("AES256");
    case Mode::Kms:
        return QStringLiteral("aws:kms");
    case Mode::DsseKms:
        return QStringLiteral("aws:kms:dsse");
    }
    return {};
}

BucketEncryption::Mode BucketEncryption::fromAlgorithm(const QString& algorithm)
{
    if (algorithm == u"AES256")
        return Mode::S3;
    if (algorithm == u"aws:kms")
        return Mode::Kms;
    if (algorithm == u"aws:kms:dsse")
        return Mode::DsseKms;
    return Mode::None;
}

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

QStringList lifecycleStorageClasses()
{
    return {
        QStringLiteral("STANDARD_IA"), QStringLiteral("ONEZONE_IA"), QStringLiteral("INTELLIGENT_TIERING"),
        QStringLiteral("GLACIER_IR"),  QStringLiteral("GLACIER"),    QStringLiteral("DEEP_ARCHIVE")};
}

bool LifecycleRule::hasAction() const
{
    return !transitions.isEmpty() || expirationDays > 0 || expirationDate.isValid() || expiredDeleteMarker ||
           !noncurrentTransitions.isEmpty() || noncurrentExpirationDays > 0 || abortUploadDays > 0;
}

QString LifecycleRule::validate() const
{
    if (id.size() > 255)
        return tr("Rule IDs can have at most 255 characters.");
    if (!hasAction())
        return tr("A rule needs at least one action: a transition, an expiration, or aborting incomplete "
                  "uploads.");
    if (sizeGreaterThan >= 0 && sizeLessThan >= 0 && sizeGreaterThan >= sizeLessThan)
        return tr("The minimum object size must be smaller than the maximum.");
    for (auto it = tags.cbegin(); it != tags.cend(); ++it) {
        if (it.key().isEmpty() || it.key().size() > 128)
            return tr("Tag keys must have 1 to 128 characters.");
        if (it.value().size() > 256)
            return tr("Tag values can have at most 256 characters.");
    }
    if (!tags.isEmpty() && abortUploadDays > 0)
        return tr("A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).");
    if (!tags.isEmpty() && expiredDeleteMarker)
        return tr("A rule that filters on tags cannot remove expired delete markers.");
    if (expirationDays == 0 || expirationDays < -1)
        return tr("Objects can expire after 1 day at the earliest.");
    if (expirationDays > 0 && expirationDate.isValid())
        return tr("Choose either a number of days or a date for the expiration.");
    if (expiredDeleteMarker && (expirationDays > 0 || expirationDate.isValid()))
        return tr("Removing expired delete markers cannot be combined with expiring current versions in "
                  "the same rule.");

    const QStringList classes = lifecycleStorageClasses();
    bool usesDays = expirationDays > 0;
    bool usesDates = expirationDate.isValid();
    QSet<QString> seen;
    int maxTransitionDays = -1;
    for (const LifecycleTransition& t : transitions) {
        if (!classes.contains(t.storageClass))
            return tr("Unknown transition storage class \"%1\".").arg(t.storageClass);
        if (seen.contains(t.storageClass))
            return tr("Two transitions to %1.").arg(t.storageClass);
        seen.insert(t.storageClass);
        if (t.days < 0 && !t.date.isValid())
            return tr("Each transition needs a number of days or a date.");
        if (t.days >= 0) {
            usesDays = true;
            maxTransitionDays = qMax(maxTransitionDays, t.days);
            if ((t.storageClass == u"STANDARD_IA" || t.storageClass == u"ONEZONE_IA") && t.days < 30)
                return tr("Objects can move to %1 after 30 days at the earliest.").arg(t.storageClass);
        } else {
            usesDates = true;
        }
    }
    if (usesDays && usesDates)
        return tr("Use either days or dates for all transitions and the expiration of a rule.");
    if (expirationDays > 0 && maxTransitionDays >= 0 && expirationDays <= maxTransitionDays)
        return tr("The expiration must come after the last transition.");

    seen.clear();
    for (const NoncurrentTransition& t : noncurrentTransitions) {
        if (!classes.contains(t.storageClass))
            return tr("Unknown transition storage class \"%1\".").arg(t.storageClass);
        if (seen.contains(t.storageClass))
            return tr("Two noncurrent-version transitions to %1.").arg(t.storageClass);
        seen.insert(t.storageClass);
        if (t.days < 1)
            return tr("Noncurrent versions can move after 1 day at the earliest.");
        if (t.newerVersions != -1 && (t.newerVersions < 1 || t.newerVersions > 100))
            return tr("The number of newer versions to keep must be between 1 and 100.");
    }
    if (noncurrentExpirationDays == 0 || noncurrentExpirationDays < -1)
        return tr("Noncurrent versions can be deleted after 1 day at the earliest.");
    if (newerNoncurrentVersions != -1) {
        if (noncurrentExpirationDays < 1)
            return tr("Keeping newer noncurrent versions needs a noncurrent expiration.");
        if (newerNoncurrentVersions < 1 || newerNoncurrentVersions > 100)
            return tr("The number of newer versions to keep must be between 1 and 100.");
    }
    if (abortUploadDays == 0 || abortUploadDays < -1)
        return tr("Incomplete uploads can be aborted after 1 day at the earliest.");
    return {};
}

QString LifecycleRule::filterSummary() const
{
    QStringList parts;
    if (!prefix.isEmpty())
        parts.push_back(tr("prefix \"%1\"").arg(prefix));
    for (auto it = tags.cbegin(); it != tags.cend(); ++it)
        parts.push_back(tr("tag %1=%2").arg(it.key(), it.value()));
    if (sizeGreaterThan >= 0)
        parts.push_back(tr("larger than %1").arg(sizeText(sizeGreaterThan)));
    if (sizeLessThan >= 0)
        parts.push_back(tr("smaller than %1").arg(sizeText(sizeLessThan)));
    return parts.isEmpty() ? tr("Whole bucket") : parts.join(QStringLiteral(", "));
}

QString LifecycleRule::actionSummary() const
{
    QStringList parts;
    for (const LifecycleTransition& t : transitions)
        parts.push_back(t.days >= 0 ? tr("to %1 after %2 d").arg(t.storageClass).arg(t.days)
                                    : tr("to %1 on %2").arg(t.storageClass, t.date.toString(Qt::ISODate)));
    if (expirationDays > 0)
        parts.push_back(tr("expire after %1 d").arg(expirationDays));
    if (expirationDate.isValid())
        parts.push_back(tr("expire on %1").arg(expirationDate.toString(Qt::ISODate)));
    if (expiredDeleteMarker)
        parts.push_back(tr("remove expired delete markers"));
    for (const NoncurrentTransition& t : noncurrentTransitions)
        parts.push_back(tr("noncurrent to %1 after %2 d").arg(t.storageClass).arg(t.days));
    if (noncurrentExpirationDays > 0)
        parts.push_back(newerNoncurrentVersions > 0
                            ? tr("delete noncurrent after %1 d (keep %2)")
                                  .arg(noncurrentExpirationDays)
                                  .arg(newerNoncurrentVersions)
                            : tr("delete noncurrent after %1 d").arg(noncurrentExpirationDays));
    if (abortUploadDays > 0)
        parts.push_back(tr("abort uploads after %1 d").arg(abortUploadDays));
    return parts.join(QStringLiteral("; "));
}

QString validateLifecycle(const QList<LifecycleRule>& rules)
{
    if (rules.size() > 1000)
        return tr("A bucket can have at most 1000 lifecycle rules.");
    QSet<QString> ids;
    for (qsizetype i = 0; i < rules.size(); ++i) {
        const LifecycleRule& r = rules.at(i);
        const QString name = r.id.isEmpty() ? tr("Rule %1").arg(i + 1) : tr("Rule \"%1\"").arg(r.id);
        if (!r.id.isEmpty()) {
            if (ids.contains(r.id))
                return tr("%1: another rule has the same ID.").arg(name);
            ids.insert(r.id);
        }
        if (const QString e = r.validate(); !e.isEmpty())
            return name + QStringLiteral(": ") + e;
    }
    return {};
}

QJsonObject lifecycleToJson(const QList<LifecycleRule>& rules)
{
    QJsonArray out;
    for (const LifecycleRule& r : rules) {
        QJsonObject o;
        if (!r.id.isEmpty())
            o.insert(QStringLiteral("ID"), r.id);
        o.insert(QStringLiteral("Status"),
                 r.enabled ? QStringLiteral("Enabled") : QStringLiteral("Disabled"));

        const int conditions = (r.prefix.isEmpty() ? 0 : 1) + int(r.tags.size()) + (r.sizeGreaterThan >= 0) +
                               (r.sizeLessThan >= 0);
        QJsonObject filter;
        QJsonObject* target = &filter;
        QJsonObject andOp;
        if (conditions > 1)
            target = &andOp;
        if (!r.prefix.isEmpty() || conditions == 0)
            target->insert(QStringLiteral("Prefix"), r.prefix);
        if (conditions > 1) {
            if (!r.tags.isEmpty())
                andOp.insert(QStringLiteral("Tags"), tagsToJson(r.tags));
        } else if (r.tags.size() == 1) {
            filter.insert(QStringLiteral("Tag"), tagsToJson(r.tags).first());
        }
        if (r.sizeGreaterThan >= 0)
            target->insert(QStringLiteral("ObjectSizeGreaterThan"), r.sizeGreaterThan);
        if (r.sizeLessThan >= 0)
            target->insert(QStringLiteral("ObjectSizeLessThan"), r.sizeLessThan);
        if (conditions > 1)
            filter.insert(QStringLiteral("And"), andOp);
        o.insert(QStringLiteral("Filter"), filter);

        if (!r.transitions.isEmpty()) {
            QJsonArray ts;
            for (const LifecycleTransition& t : r.transitions) {
                QJsonObject to;
                if (t.days >= 0)
                    to.insert(QStringLiteral("Days"), t.days);
                else
                    to.insert(QStringLiteral("Date"), dateToJson(t.date));
                to.insert(QStringLiteral("StorageClass"), t.storageClass);
                ts.push_back(to);
            }
            o.insert(QStringLiteral("Transitions"), ts);
        }
        QJsonObject expiration;
        if (r.expirationDays > 0)
            expiration.insert(QStringLiteral("Days"), r.expirationDays);
        if (r.expirationDate.isValid())
            expiration.insert(QStringLiteral("Date"), dateToJson(r.expirationDate));
        if (r.expiredDeleteMarker)
            expiration.insert(QStringLiteral("ExpiredObjectDeleteMarker"), true);
        if (!expiration.isEmpty())
            o.insert(QStringLiteral("Expiration"), expiration);
        if (!r.noncurrentTransitions.isEmpty()) {
            QJsonArray ts;
            for (const NoncurrentTransition& t : r.noncurrentTransitions) {
                QJsonObject to{{QStringLiteral("NoncurrentDays"), t.days},
                               {QStringLiteral("StorageClass"), t.storageClass}};
                if (t.newerVersions > 0)
                    to.insert(QStringLiteral("NewerNoncurrentVersions"), t.newerVersions);
                ts.push_back(to);
            }
            o.insert(QStringLiteral("NoncurrentVersionTransitions"), ts);
        }
        if (r.noncurrentExpirationDays > 0) {
            QJsonObject ne{{QStringLiteral("NoncurrentDays"), r.noncurrentExpirationDays}};
            if (r.newerNoncurrentVersions > 0)
                ne.insert(QStringLiteral("NewerNoncurrentVersions"), r.newerNoncurrentVersions);
            o.insert(QStringLiteral("NoncurrentVersionExpiration"), ne);
        }
        if (r.abortUploadDays > 0)
            o.insert(QStringLiteral("AbortIncompleteMultipartUpload"),
                     QJsonObject{{QStringLiteral("DaysAfterInitiation"), r.abortUploadDays}});
        out.push_back(o);
    }
    return QJsonObject{{QStringLiteral("Rules"), out}};
}

Result<QList<LifecycleRule>> lifecycleFromJson(const QByteArray& json)
{
    QJsonDocument doc;
    if (const QString e = parseJson(json, doc); !e.isEmpty())
        return invalid(e);
    QJsonArray rules;
    if (doc.isArray()) {
        rules = doc.array();
    } else {
        const QJsonObject root = doc.object();
        if (const QString e = checkKeys(root, {QStringLiteral("Rules")}, tr("the configuration"));
            !e.isEmpty())
            return invalid(e);
        rules = root.value(QStringLiteral("Rules")).toArray();
    }
    QList<LifecycleRule> out;
    for (qsizetype i = 0; i < rules.size(); ++i) {
        const QString where = tr("rule %1").arg(i + 1);
        if (!rules.at(i).isObject())
            return invalid(tr("%1 is not an object").arg(where));
        const QJsonObject o = rules.at(i).toObject();
        if (const QString e =
                checkKeys(o,
                          {QStringLiteral("ID"), QStringLiteral("Status"), QStringLiteral("Filter"),
                           QStringLiteral("Prefix"), QStringLiteral("Transitions"),
                           QStringLiteral("Expiration"), QStringLiteral("NoncurrentVersionTransitions"),
                           QStringLiteral("NoncurrentVersionExpiration"),
                           QStringLiteral("AbortIncompleteMultipartUpload")},
                          where);
            !e.isEmpty())
            return invalid(e);
        LifecycleRule r;
        r.id = o.value(QStringLiteral("ID")).toString();
        const QString status = o.value(QStringLiteral("Status")).toString();
        if (status != u"Enabled" && status != u"Disabled")
            return invalid(tr("%1: Status must be \"Enabled\" or \"Disabled\"").arg(where));
        r.enabled = status == u"Enabled";
        r.prefix = o.value(QStringLiteral("Prefix")).toString(); // legacy, pre-Filter rules
        if (o.contains(QStringLiteral("Filter"))) {
            const QJsonObject f = o.value(QStringLiteral("Filter")).toObject();
            const QStringList conditionKeys = {QStringLiteral("Prefix"), QStringLiteral("Tag"),
                                               QStringLiteral("ObjectSizeGreaterThan"),
                                               QStringLiteral("ObjectSizeLessThan"), QStringLiteral("And")};
            if (const QString e = checkKeys(f, conditionKeys, where + tr(" filter")); !e.isEmpty())
                return invalid(e);
            QJsonObject source = f;
            if (f.contains(QStringLiteral("And"))) {
                source = f.value(QStringLiteral("And")).toObject();
                if (const QString e = checkKeys(source,
                                                {QStringLiteral("Prefix"), QStringLiteral("Tags"),
                                                 QStringLiteral("ObjectSizeGreaterThan"),
                                                 QStringLiteral("ObjectSizeLessThan")},
                                                where + tr(" filter"));
                    !e.isEmpty())
                    return invalid(e);
                for (const QJsonValue& t : source.value(QStringLiteral("Tags")).toArray())
                    tagFromJson(t.toObject(), r.tags);
            }
            if (source.contains(QStringLiteral("Prefix")))
                r.prefix = source.value(QStringLiteral("Prefix")).toString();
            if (source.contains(QStringLiteral("Tag")))
                tagFromJson(source.value(QStringLiteral("Tag")).toObject(), r.tags);
            if (source.contains(QStringLiteral("ObjectSizeGreaterThan")))
                r.sizeGreaterThan = source.value(QStringLiteral("ObjectSizeGreaterThan")).toInteger(-1);
            if (source.contains(QStringLiteral("ObjectSizeLessThan")))
                r.sizeLessThan = source.value(QStringLiteral("ObjectSizeLessThan")).toInteger(-1);
        }
        for (const QJsonValue& v : o.value(QStringLiteral("Transitions")).toArray()) {
            const QJsonObject t = v.toObject();
            LifecycleTransition tr2;
            tr2.days = intOr(t.value(QStringLiteral("Days")), -1);
            if (t.contains(QStringLiteral("Date")))
                tr2.date = dateFromJson(t.value(QStringLiteral("Date")));
            tr2.storageClass = t.value(QStringLiteral("StorageClass")).toString();
            r.transitions.push_back(tr2);
        }
        const QJsonObject exp = o.value(QStringLiteral("Expiration")).toObject();
        r.expirationDays = intOr(exp.value(QStringLiteral("Days")), -1);
        if (exp.contains(QStringLiteral("Date")))
            r.expirationDate = dateFromJson(exp.value(QStringLiteral("Date")));
        r.expiredDeleteMarker = exp.value(QStringLiteral("ExpiredObjectDeleteMarker")).toBool();
        for (const QJsonValue& v : o.value(QStringLiteral("NoncurrentVersionTransitions")).toArray()) {
            const QJsonObject t = v.toObject();
            NoncurrentTransition nt;
            nt.days = intOr(t.value(QStringLiteral("NoncurrentDays")), 0);
            nt.storageClass = t.value(QStringLiteral("StorageClass")).toString();
            nt.newerVersions = intOr(t.value(QStringLiteral("NewerNoncurrentVersions")), -1);
            r.noncurrentTransitions.push_back(nt);
        }
        const QJsonObject ne = o.value(QStringLiteral("NoncurrentVersionExpiration")).toObject();
        r.noncurrentExpirationDays = intOr(ne.value(QStringLiteral("NoncurrentDays")), -1);
        r.newerNoncurrentVersions = intOr(ne.value(QStringLiteral("NewerNoncurrentVersions")), -1);
        r.abortUploadDays = intOr(o.value(QStringLiteral("AbortIncompleteMultipartUpload"))
                                      .toObject()
                                      .value(QStringLiteral("DaysAfterInitiation")),
                                  -1);
        out.push_back(r);
    }
    return out;
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

QString CorsRule::validate() const
{
    if (allowedOrigins.isEmpty())
        return tr("A CORS rule needs at least one allowed origin.");
    if (allowedMethods.isEmpty())
        return tr("A CORS rule needs at least one allowed method.");
    static const QStringList methods = {QStringLiteral("GET"), QStringLiteral("PUT"), QStringLiteral("POST"),
                                        QStringLiteral("DELETE"), QStringLiteral("HEAD")};
    for (const QString& m : allowedMethods) {
        if (!methods.contains(m))
            return tr("Unsupported method \"%1\" (use GET, PUT, POST, DELETE or HEAD).").arg(m);
    }
    for (const QString& o : allowedOrigins) {
        if (o.isEmpty() || o.count(u'*') > 1)
            return tr("Invalid origin \"%1\": at most one \"*\" wildcard.").arg(o);
    }
    for (const QString& h : allowedHeaders) {
        if (h.isEmpty() || h.count(u'*') > 1)
            return tr("Invalid header \"%1\": at most one \"*\" wildcard.").arg(h);
    }
    if (maxAgeSeconds < -1)
        return tr("The max age cannot be negative.");
    if (id.size() > 255)
        return tr("Rule IDs can have at most 255 characters.");
    return {};
}

QString validateCors(const QList<CorsRule>& rules)
{
    if (rules.size() > 100)
        return tr("A bucket can have at most 100 CORS rules.");
    for (qsizetype i = 0; i < rules.size(); ++i) {
        if (const QString e = rules.at(i).validate(); !e.isEmpty())
            return tr("Rule %1: %2").arg(i + 1).arg(e);
    }
    return {};
}

QJsonObject corsToJson(const QList<CorsRule>& rules)
{
    QJsonArray out;
    for (const CorsRule& r : rules) {
        QJsonObject o;
        if (!r.id.isEmpty())
            o.insert(QStringLiteral("ID"), r.id);
        o.insert(QStringLiteral("AllowedOrigins"), toArray(r.allowedOrigins));
        o.insert(QStringLiteral("AllowedMethods"), toArray(r.allowedMethods));
        if (!r.allowedHeaders.isEmpty())
            o.insert(QStringLiteral("AllowedHeaders"), toArray(r.allowedHeaders));
        if (!r.exposeHeaders.isEmpty())
            o.insert(QStringLiteral("ExposeHeaders"), toArray(r.exposeHeaders));
        if (r.maxAgeSeconds >= 0)
            o.insert(QStringLiteral("MaxAgeSeconds"), r.maxAgeSeconds);
        out.push_back(o);
    }
    return QJsonObject{{QStringLiteral("CORSRules"), out}};
}

Result<QList<CorsRule>> corsFromJson(const QByteArray& json)
{
    QJsonDocument doc;
    if (const QString e = parseJson(json, doc); !e.isEmpty())
        return invalid(e);
    QJsonArray rules;
    if (doc.isArray()) {
        rules = doc.array();
    } else {
        const QJsonObject root = doc.object();
        if (const QString e = checkKeys(root, {QStringLiteral("CORSRules")}, tr("the configuration"));
            !e.isEmpty())
            return invalid(e);
        rules = root.value(QStringLiteral("CORSRules")).toArray();
    }
    QList<CorsRule> out;
    for (qsizetype i = 0; i < rules.size(); ++i) {
        const QString where = tr("rule %1").arg(i + 1);
        const QJsonObject o = rules.at(i).toObject();
        if (const QString e = checkKeys(o,
                                        {QStringLiteral("ID"), QStringLiteral("AllowedOrigins"),
                                         QStringLiteral("AllowedMethods"), QStringLiteral("AllowedHeaders"),
                                         QStringLiteral("ExposeHeaders"), QStringLiteral("MaxAgeSeconds")},
                                        where);
            !e.isEmpty())
            return invalid(e);
        CorsRule r;
        r.id = o.value(QStringLiteral("ID")).toString();
        r.allowedOrigins = fromArray(o.value(QStringLiteral("AllowedOrigins")));
        r.allowedMethods = fromArray(o.value(QStringLiteral("AllowedMethods")));
        r.allowedHeaders = fromArray(o.value(QStringLiteral("AllowedHeaders")));
        r.exposeHeaders = fromArray(o.value(QStringLiteral("ExposeHeaders")));
        r.maxAgeSeconds = intOr(o.value(QStringLiteral("MaxAgeSeconds")), -1);
        out.push_back(r);
    }
    return out;
}

// ---------------------------------------------------------------------------
// Policy
// ---------------------------------------------------------------------------

namespace {

bool hasPublicPrincipal(const QJsonValue& principal)
{
    if (principal.isString())
        return principal.toString() == u"*";
    if (principal.isObject()) {
        const QJsonValue aws = principal.toObject().value(QStringLiteral("AWS"));
        if (aws.isString())
            return aws.toString() == u"*";
        for (const QJsonValue& v : aws.toArray()) {
            if (v.toString() == u"*")
                return true;
        }
    }
    return false;
}

QStringList stringsOf(const QJsonValue& v)
{
    QStringList out;
    if (v.isString())
        out.push_back(v.toString());
    for (const QJsonValue& item : v.toArray())
        out.push_back(item.toString());
    return out;
}

} // namespace

QList<PolicyIssue> validatePolicy(const QString& text, const QString& bucket)
{
    QList<PolicyIssue> issues;
    if (text.trimmed().isEmpty())
        return issues;
    auto error = [&issues](const QString& message) { issues.push_back({true, 0, 0, message}); };
    auto warn = [&issues](const QString& message) { issues.push_back({false, 0, 0, message}); };

    QJsonDocument doc;
    PolicyIssue syntax;
    if (const QString e = parseJson(text.toUtf8(), doc, &syntax.line, &syntax.column); !e.isEmpty()) {
        syntax.message = e;
        issues.push_back(syntax);
        return issues;
    }
    if (!doc.isObject()) {
        error(tr("A policy must be a JSON object."));
        return issues;
    }
    const QJsonObject root = doc.object();
    const QString version = root.value(QStringLiteral("Version")).toString();
    if (version.isEmpty())
        warn(tr(
            "No \"Version\": add \"Version\": \"2012-10-17\" (without it, policy variables do not work)."));
    else if (version != u"2012-10-17" && version != u"2008-10-17")
        error(tr("Unknown policy version \"%1\" (use \"2012-10-17\").").arg(version));
    else if (version == u"2008-10-17")
        warn(tr("Version \"2008-10-17\" is outdated; use \"2012-10-17\"."));
    const QJsonValue statementValue = root.value(QStringLiteral("Statement"));
    QJsonArray statements;
    if (statementValue.isObject())
        statements.push_back(statementValue);
    else if (statementValue.isArray())
        statements = statementValue.toArray();
    else {
        error(tr("The policy needs a \"Statement\" (an object or an array of objects)."));
        return issues;
    }
    if (statements.isEmpty())
        error(tr("The policy has no statements."));

    const QRegularExpression::WildcardConversionOptions wildcard =
        QRegularExpression::NonPathWildcardConversion;
    QSet<QString> sids;
    for (qsizetype i = 0; i < statements.size(); ++i) {
        if (!statements.at(i).isObject()) {
            error(tr("Statement %1 is not an object.").arg(i + 1));
            continue;
        }
        const QJsonObject s = statements.at(i).toObject();
        const QString sid = s.value(QStringLiteral("Sid")).toString();
        const QString name = sid.isEmpty() ? tr("Statement %1").arg(i + 1) : tr("Statement \"%1\"").arg(sid);
        if (!sid.isEmpty()) {
            if (sids.contains(sid))
                error(tr("%1: the Sid is used twice.").arg(name));
            sids.insert(sid);
        }
        const QString effect = s.value(QStringLiteral("Effect")).toString();
        if (effect != u"Allow" && effect != u"Deny")
            error(tr("%1: \"Effect\" must be \"Allow\" or \"Deny\".").arg(name));
        if (!s.contains(QStringLiteral("Principal")) && !s.contains(QStringLiteral("NotPrincipal")))
            error(tr("%1: bucket policies need a \"Principal\".").arg(name));
        if (!s.contains(QStringLiteral("Action")) && !s.contains(QStringLiteral("NotAction")))
            error(tr("%1: \"Action\" is missing.").arg(name));
        if (!s.contains(QStringLiteral("Resource")) && !s.contains(QStringLiteral("NotResource")))
            error(tr("%1: \"Resource\" is missing.").arg(name));
        for (const QString& action :
             stringsOf(s.value(QStringLiteral("Action"))) + stringsOf(s.value(QStringLiteral("NotAction")))) {
            if (action != u"*" && !action.startsWith(QStringLiteral("s3:"), Qt::CaseInsensitive))
                warn(tr("%1: \"%2\" is not an S3 action.").arg(name, action));
        }
        for (const QString& resource : stringsOf(s.value(QStringLiteral("Resource"))) +
                                           stringsOf(s.value(QStringLiteral("NotResource")))) {
            if (resource == u"*")
                continue;
            const qsizetype at = resource.indexOf(QStringLiteral(":s3:::"));
            if (!resource.startsWith(QStringLiteral("arn:")) || at < 0) {
                warn(tr("%1: \"%2\" is not an S3 resource ARN.").arg(name, resource));
                continue;
            }
            const QString path = resource.mid(at + 6);
            const QString bucketPart = path.section(u'/', 0, 0);
            const QRegularExpression re(
                QRegularExpression::wildcardToRegularExpression(bucketPart, wildcard));
            if (!bucket.isEmpty() && !re.match(bucket).hasMatch())
                error(tr("%1: \"%2\" is not in this bucket (%3).").arg(name, resource, bucket));
        }
        if (effect == u"Allow" && hasPublicPrincipal(s.value(QStringLiteral("Principal"))) &&
            !s.contains(QStringLiteral("Condition")))
            warn(tr("%1 grants access to everyone (Principal \"*\" without a condition).").arg(name));
    }
    return issues;
}

QList<QPair<QString, QString>> policyTemplates(const QString& bucket)
{
    auto doc = [](const QJsonArray& statements) {
        return QString::fromUtf8(
            QJsonDocument(QJsonObject{{QStringLiteral("Version"), QStringLiteral("2012-10-17")},
                                      {QStringLiteral("Statement"), statements}})
                .toJson(QJsonDocument::Indented));
    };
    const QString arn = QStringLiteral("arn:aws:s3:::") + bucket;
    const QString objects = arn + QStringLiteral("/*");
    QList<QPair<QString, QString>> out;
    out.push_back({tr("Public read (anyone can download objects)"),
                   doc({QJsonObject{{QStringLiteral("Sid"), QStringLiteral("PublicRead")},
                                    {QStringLiteral("Effect"), QStringLiteral("Allow")},
                                    {QStringLiteral("Principal"), QStringLiteral("*")},
                                    {QStringLiteral("Action"), QStringLiteral("s3:GetObject")},
                                    {QStringLiteral("Resource"), objects}}})});
    out.push_back({tr("Deny requests without TLS"),
                   doc({QJsonObject{{QStringLiteral("Sid"), QStringLiteral("DenyInsecureTransport")},
                                    {QStringLiteral("Effect"), QStringLiteral("Deny")},
                                    {QStringLiteral("Principal"), QStringLiteral("*")},
                                    {QStringLiteral("Action"), QStringLiteral("s3:*")},
                                    {QStringLiteral("Resource"), QJsonArray{arn, objects}},
                                    {QStringLiteral("Condition"),
                                     QJsonObject{{QStringLiteral("Bool"),
                                                  QJsonObject{{QStringLiteral("aws:SecureTransport"),
                                                               QStringLiteral("false")}}}}}}})});
    out.push_back({tr("Read-only access for another AWS account"),
                   doc({QJsonObject{{QStringLiteral("Sid"), QStringLiteral("CrossAccountRead")},
                                    {QStringLiteral("Effect"), QStringLiteral("Allow")},
                                    {QStringLiteral("Principal"),
                                     QJsonObject{{QStringLiteral("AWS"),
                                                  QStringLiteral("arn:aws:iam::111122223333:root")}}},
                                    {QStringLiteral("Action"), QJsonArray{QStringLiteral("s3:GetObject"),
                                                                          QStringLiteral("s3:ListBucket")}},
                                    {QStringLiteral("Resource"), QJsonArray{arn, objects}}}})});
    return out;
}

// ---------------------------------------------------------------------------
// Website, Object Lock, tags
// ---------------------------------------------------------------------------

QString WebsiteConfig::validate() const
{
    if (!redirectHost.isEmpty()) {
        if (!indexDocument.isEmpty() || !errorDocument.isEmpty() || !routingRules.isEmpty())
            return tr("Redirecting all requests cannot be combined with documents or routing rules.");
        if (!redirectProtocol.isEmpty() && redirectProtocol != u"http" && redirectProtocol != u"https")
            return tr("The redirect protocol must be http or https.");
        return {};
    }
    if (indexDocument.isEmpty())
        return tr("Website hosting needs an index document (or a redirect of all requests).");
    if (indexDocument.contains(u'/'))
        return tr("The index document must not contain \"/\" (it is a suffix appended to folder requests).");
    for (const RoutingRule& r : routingRules) {
        if (r.hostName.isEmpty() && r.replaceKeyPrefixWith.isEmpty() && r.replaceKeyWith.isEmpty() &&
            r.httpRedirectCode.isEmpty() && r.protocol.isEmpty())
            return tr("Each routing rule needs a redirect.");
        if (!r.replaceKeyPrefixWith.isEmpty() && !r.replaceKeyWith.isEmpty())
            return tr("A routing rule can replace the key or the key prefix, not both.");
    }
    return {};
}

QJsonArray routingRulesToJson(const QList<RoutingRule>& rules)
{
    QJsonArray out;
    for (const RoutingRule& r : rules) {
        QJsonObject condition;
        if (!r.keyPrefixEquals.isEmpty())
            condition.insert(QStringLiteral("KeyPrefixEquals"), r.keyPrefixEquals);
        if (!r.errorCodeEquals.isEmpty())
            condition.insert(QStringLiteral("HttpErrorCodeReturnedEquals"), r.errorCodeEquals);
        QJsonObject redirect;
        if (!r.hostName.isEmpty())
            redirect.insert(QStringLiteral("HostName"), r.hostName);
        if (!r.protocol.isEmpty())
            redirect.insert(QStringLiteral("Protocol"), r.protocol);
        if (!r.httpRedirectCode.isEmpty())
            redirect.insert(QStringLiteral("HttpRedirectCode"), r.httpRedirectCode);
        if (!r.replaceKeyPrefixWith.isEmpty())
            redirect.insert(QStringLiteral("ReplaceKeyPrefixWith"), r.replaceKeyPrefixWith);
        if (!r.replaceKeyWith.isEmpty())
            redirect.insert(QStringLiteral("ReplaceKeyWith"), r.replaceKeyWith);
        QJsonObject o{{QStringLiteral("Redirect"), redirect}};
        if (!condition.isEmpty())
            o.insert(QStringLiteral("Condition"), condition);
        out.push_back(o);
    }
    return out;
}

Result<QList<RoutingRule>> routingRulesFromJson(const QByteArray& json)
{
    QList<RoutingRule> out;
    if (json.trimmed().isEmpty())
        return out;
    QJsonDocument doc;
    if (const QString e = parseJson(json, doc); !e.isEmpty())
        return invalid(e);
    if (!doc.isArray())
        return invalid(tr("Routing rules must be a JSON array."));
    const QJsonArray rules = doc.array();
    for (qsizetype i = 0; i < rules.size(); ++i) {
        const QString where = tr("routing rule %1").arg(i + 1);
        const QJsonObject o = rules.at(i).toObject();
        if (const QString e = checkKeys(o, {QStringLiteral("Condition"), QStringLiteral("Redirect")}, where);
            !e.isEmpty())
            return invalid(e);
        const QJsonObject c = o.value(QStringLiteral("Condition")).toObject();
        const QJsonObject r = o.value(QStringLiteral("Redirect")).toObject();
        if (const QString e = checkKeys(
                c, {QStringLiteral("KeyPrefixEquals"), QStringLiteral("HttpErrorCodeReturnedEquals")}, where);
            !e.isEmpty())
            return invalid(e);
        if (const QString e = checkKeys(
                r,
                {QStringLiteral("HostName"), QStringLiteral("Protocol"), QStringLiteral("HttpRedirectCode"),
                 QStringLiteral("ReplaceKeyPrefixWith"), QStringLiteral("ReplaceKeyWith")},
                where);
            !e.isEmpty())
            return invalid(e);
        RoutingRule rule;
        rule.keyPrefixEquals = c.value(QStringLiteral("KeyPrefixEquals")).toString();
        rule.errorCodeEquals = c.value(QStringLiteral("HttpErrorCodeReturnedEquals")).toVariant().toString();
        rule.hostName = r.value(QStringLiteral("HostName")).toString();
        rule.protocol = r.value(QStringLiteral("Protocol")).toString();
        rule.httpRedirectCode = r.value(QStringLiteral("HttpRedirectCode")).toVariant().toString();
        rule.replaceKeyPrefixWith = r.value(QStringLiteral("ReplaceKeyPrefixWith")).toString();
        rule.replaceKeyWith = r.value(QStringLiteral("ReplaceKeyWith")).toString();
        out.push_back(rule);
    }
    return out;
}

QString awsWebsiteEndpoint(const QString& bucket, const QString& region)
{
    const QString r = region.isEmpty() ? QStringLiteral("us-east-1") : region;
    // Older regions use "s3-website-<region>", newer ones "s3-website.<region>".
    static const QStringList dashRegions = {
        QStringLiteral("us-east-1"),      QStringLiteral("us-west-1"),      QStringLiteral("us-west-2"),
        QStringLiteral("ap-southeast-1"), QStringLiteral("ap-southeast-2"), QStringLiteral("ap-northeast-1"),
        QStringLiteral("eu-west-1"),      QStringLiteral("sa-east-1"),      QStringLiteral("us-gov-west-1")};
    const QChar sep = dashRegions.contains(r) ? u'-' : u'.';
    QString host = QStringLiteral("%1.s3-website%2%3.amazonaws.com").arg(bucket).arg(sep).arg(r);
    if (r.startsWith(QStringLiteral("cn-")))
        host += QStringLiteral(".cn");
    return QStringLiteral("http://") + host;
}

QString ObjectLockDefaults::validate() const
{
    if (mode.isEmpty())
        return {};
    if (mode != u"GOVERNANCE" && mode != u"COMPLIANCE")
        return tr("The retention mode must be GOVERNANCE or COMPLIANCE.");
    if (!enabled)
        return tr("Default retention needs Object Lock to be enabled on the bucket.");
    if ((days > 0) == (years > 0))
        return tr("Set the default retention period in days or in years (one of them).");
    if (days > 36500 || years > 100)
        return tr("The default retention period can be at most 100 years.");
    return {};
}

QString validateBucketTags(const QMap<QString, QString>& tags)
{
    if (tags.size() > 50)
        return tr("A bucket can have at most 50 tags.");
    QMap<QString, QString> chunk; // reuse the object tag checks without their count limit
    for (auto it = tags.cbegin(); it != tags.cend(); ++it) {
        chunk.clear();
        chunk.insert(it.key(), it.value());
        if (const QString e = validateTags(chunk); !e.isEmpty())
            return e;
    }
    return {};
}

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

UsageCount BucketStats::currentTotal() const
{
    UsageCount total;
    for (const UsageCount& c : current) {
        total.objects += c.objects;
        total.bytes += c.bytes;
    }
    return total;
}

void BucketStats::add(const Entry& entry)
{
    if (entry.isDeleteMarker) {
        ++deleteMarkers;
        return;
    }
    if (entry.isDirectory())
        return;
    if (versionsListed && !entry.isLatest) {
        noncurrent.add(entry.size);
        return;
    }
    const QString cls = entry.storageClass.isEmpty() ? QStringLiteral("STANDARD") : entry.storageClass;
    current[cls].add(entry.size);
}

} // namespace s3fm
