#include "transfer/TransferTypes.h"

#include <QJsonArray>
#include <QSettings>
#include <QTimeZone>

namespace s3fm {

namespace {

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
    for (const QJsonValue& item : v.toArray())
        out.push_back(item.toString());
    return out;
}

QString kindName(TransferKind k)
{
    switch (k) {
    case TransferKind::Copy:
        return QStringLiteral("copy");
    case TransferKind::Move:
        return QStringLiteral("move");
    case TransferKind::Delete:
        return QStringLiteral("delete");
    }
    return {};
}

TransferKind kindFromName(const QString& n)
{
    if (n == u"move")
        return TransferKind::Move;
    if (n == u"delete")
        return TransferKind::Delete;
    return TransferKind::Copy;
}

QString typeName(Entry::Type t)
{
    switch (t) {
    case Entry::Type::File:
        return QStringLiteral("file");
    case Entry::Type::Directory:
        return QStringLiteral("dir");
    case Entry::Type::Bucket:
        return QStringLiteral("bucket");
    case Entry::Type::Connection:
        return QStringLiteral("connection");
    }
    return {};
}

Entry::Type typeFromName(const QString& n)
{
    if (n == u"dir")
        return Entry::Type::Directory;
    if (n == u"bucket")
        return Entry::Type::Bucket;
    if (n == u"connection")
        return Entry::Type::Connection;
    return Entry::Type::File;
}

} // namespace

QString jobStateName(JobState state)
{
    switch (state) {
    case JobState::Queued:
        return QStringLiteral("queued");
    case JobState::Running:
        return QStringLiteral("running");
    case JobState::Paused:
        return QStringLiteral("paused");
    case JobState::Done:
        return QStringLiteral("done");
    case JobState::Failed:
        return QStringLiteral("failed");
    case JobState::Cancelled:
        return QStringLiteral("cancelled");
    }
    return {};
}

JobState jobStateFromName(const QString& name)
{
    for (JobState s : {JobState::Queued, JobState::Running, JobState::Paused, JobState::Done,
                       JobState::Failed, JobState::Cancelled}) {
        if (jobStateName(s) == name)
            return s;
    }
    return JobState::Paused;
}

QString conflictPolicyName(ConflictPolicy policy)
{
    switch (policy) {
    case ConflictPolicy::Ask:
        return QStringLiteral("ask");
    case ConflictPolicy::Overwrite:
        return QStringLiteral("overwrite");
    case ConflictPolicy::Skip:
        return QStringLiteral("skip");
    case ConflictPolicy::Rename:
        return QStringLiteral("rename");
    case ConflictPolicy::OverwriteIfNewer:
        return QStringLiteral("overwrite-if-newer");
    case ConflictPolicy::OverwriteIfSizeDiffers:
        return QStringLiteral("overwrite-if-size-differs");
    }
    return {};
}

ConflictPolicy conflictPolicyFromName(const QString& name)
{
    for (ConflictPolicy p :
         {ConflictPolicy::Ask, ConflictPolicy::Overwrite, ConflictPolicy::Skip, ConflictPolicy::Rename,
          ConflictPolicy::OverwriteIfNewer, ConflictPolicy::OverwriteIfSizeDiffers}) {
        if (conflictPolicyName(p) == name)
            return p;
    }
    return ConflictPolicy::Ask;
}

QJsonObject entryToJson(const Entry& e)
{
    QJsonObject o;
    o.insert(QStringLiteral("name"), e.name);
    o.insert(QStringLiteral("location"), e.location.toString());
    o.insert(QStringLiteral("type"), typeName(e.type));
    if (e.size >= 0)
        o.insert(QStringLiteral("size"), double(e.size));
    if (e.modified.isValid())
        o.insert(QStringLiteral("modified"), double(e.modified.toMSecsSinceEpoch()));
    if (!e.etag.isEmpty())
        o.insert(QStringLiteral("etag"), e.etag);
    if (!e.storageClass.isEmpty())
        o.insert(QStringLiteral("storageClass"), e.storageClass);
    if (!e.versionId.isEmpty())
        o.insert(QStringLiteral("versionId"), e.versionId);
    if (e.isSymlink)
        o.insert(QStringLiteral("symlink"), true);
    return o;
}

Entry entryFromJson(const QJsonObject& o)
{
    Entry e;
    e.name = o.value(QStringLiteral("name")).toString();
    e.location = Location::fromString(o.value(QStringLiteral("location")).toString());
    e.type = typeFromName(o.value(QStringLiteral("type")).toString());
    e.size = o.contains(QStringLiteral("size")) ? qint64(o.value(QStringLiteral("size")).toDouble()) : -1;
    if (o.contains(QStringLiteral("modified")))
        e.modified = QDateTime::fromMSecsSinceEpoch(qint64(o.value(QStringLiteral("modified")).toDouble()),
                                                    QTimeZone::UTC);
    e.etag = o.value(QStringLiteral("etag")).toString();
    e.storageClass = o.value(QStringLiteral("storageClass")).toString();
    e.versionId = o.value(QStringLiteral("versionId")).toString();
    e.isSymlink = o.value(QStringLiteral("symlink")).toBool();
    return e;
}

QJsonObject errorToJson(const Error& e)
{
    QJsonObject o;
    o.insert(QStringLiteral("code"), errorCodeName(e.code));
    o.insert(QStringLiteral("message"), e.message);
    if (!e.detail.isEmpty())
        o.insert(QStringLiteral("detail"), e.detail);
    if (!e.requestId.isEmpty())
        o.insert(QStringLiteral("requestId"), e.requestId);
    return o;
}

Error errorFromJson(const QJsonObject& o)
{
    ErrorCode code = ErrorCode::Unknown;
    const QString name = o.value(QStringLiteral("code")).toString();
    for (int c = int(ErrorCode::Unknown); c <= int(ErrorCode::Throttled); ++c) {
        if (errorCodeName(ErrorCode(c)) == name)
            code = ErrorCode(c);
    }
    Error e = Error::make(code, o.value(QStringLiteral("message")).toString(),
                          o.value(QStringLiteral("detail")).toString());
    e.requestId = o.value(QStringLiteral("requestId")).toString();
    return e;
}

QJsonObject TransferOptions::toJson() const
{
    QJsonObject o;
    o.insert(QStringLiteral("conflict"), conflictPolicyName(conflict));
    o.insert(QStringLiteral("include"), toArray(include));
    o.insert(QStringLiteral("exclude"), toArray(exclude));
    o.insert(QStringLiteral("followSymlinks"), followSymlinks);
    o.insert(QStringLiteral("verify"), verify);
    o.insert(QStringLiteral("preserveMtime"), preserveMtime);
    o.insert(QStringLiteral("detectContentType"), detectContentType);
    o.insert(QStringLiteral("storageClass"), storageClass);
    if (!sse.isEmpty())
        o.insert(QStringLiteral("sse"), sse);
    if (!sseKmsKeyId.isEmpty())
        o.insert(QStringLiteral("sseKmsKeyId"), sseKmsKeyId);
    return o;
}

TransferOptions TransferOptions::fromJson(const QJsonObject& o)
{
    TransferOptions t;
    t.conflict = conflictPolicyFromName(o.value(QStringLiteral("conflict")).toString());
    t.include = fromArray(o.value(QStringLiteral("include")));
    t.exclude = fromArray(o.value(QStringLiteral("exclude")));
    t.followSymlinks = o.value(QStringLiteral("followSymlinks")).toBool(true);
    t.verify = o.value(QStringLiteral("verify")).toBool(true);
    t.preserveMtime = o.value(QStringLiteral("preserveMtime")).toBool(true);
    t.detectContentType = o.value(QStringLiteral("detectContentType")).toBool(true);
    t.storageClass = o.value(QStringLiteral("storageClass")).toString();
    t.sse = o.value(QStringLiteral("sse")).toString();
    t.sseKmsKeyId = o.value(QStringLiteral("sseKmsKeyId")).toString();
    return t;
}

QJsonObject TransferRequest::toJson() const
{
    QJsonObject o;
    o.insert(QStringLiteral("kind"), kindName(kind));
    QJsonArray src;
    for (const Entry& e : sources)
        src.push_back(entryToJson(e));
    o.insert(QStringLiteral("sources"), src);
    if (destination.isValid())
        o.insert(QStringLiteral("destination"), destination.toString());
    o.insert(QStringLiteral("destinationIsDirectory"), destinationIsDirectory);
    o.insert(QStringLiteral("options"), options.toJson());
    return o;
}

TransferRequest TransferRequest::fromJson(const QJsonObject& o)
{
    TransferRequest r;
    r.kind = kindFromName(o.value(QStringLiteral("kind")).toString());
    for (const QJsonValue& v : o.value(QStringLiteral("sources")).toArray())
        r.sources.push_back(entryFromJson(v.toObject()));
    r.destination = Location::fromString(o.value(QStringLiteral("destination")).toString());
    r.destinationIsDirectory = o.value(QStringLiteral("destinationIsDirectory")).toBool();
    r.options = TransferOptions::fromJson(o.value(QStringLiteral("options")).toObject());
    return r;
}

QJsonObject TransferTask::toJson() const
{
    QJsonObject o;
    o.insert(QStringLiteral("source"), entryToJson(source));
    o.insert(QStringLiteral("target"), target.toString());
    o.insert(QStringLiteral("top"), top);
    if (keepSource)
        o.insert(QStringLiteral("keep"), true);
    return o;
}

TransferTask TransferTask::fromJson(const QJsonObject& o)
{
    TransferTask t;
    t.source = entryFromJson(o.value(QStringLiteral("source")).toObject());
    t.target = Location::fromString(o.value(QStringLiteral("target")).toString());
    t.top = o.value(QStringLiteral("top")).toInt();
    t.keepSource = o.value(QStringLiteral("keep")).toBool();
    return t;
}

void TransferSettings::load(QSettings& s)
{
    const TransferSettings d;
    s.beginGroup(QStringLiteral("transfers"));
    maxJobs = qBound(1, s.value(QStringLiteral("maxJobs"), d.maxJobs).toInt(), 16);
    filesPerJob = qBound(1, s.value(QStringLiteral("filesPerJob"), d.filesPerJob).toInt(), 32);
    partConcurrency = qBound(1, s.value(QStringLiteral("partConcurrency"), d.partConcurrency).toInt(), 32);
    partSize = qMax<qint64>(5LL << 20, s.value(QStringLiteral("partSize"), d.partSize).toLongLong());
    multipartThreshold = qMax<qint64>(
        5LL << 20, s.value(QStringLiteral("multipartThreshold"), d.multipartThreshold).toLongLong());
    bandwidthLimit =
        qMax<qint64>(0, s.value(QStringLiteral("bandwidthLimit"), d.bandwidthLimit).toLongLong());
    maxRetries = qBound(0, s.value(QStringLiteral("maxRetries"), d.maxRetries).toInt(), 20);
    resumeOnStartup = s.value(QStringLiteral("resumeOnStartup"), d.resumeOnStartup).toBool();
    s.endGroup();
}

void TransferSettings::save(QSettings& s) const
{
    s.beginGroup(QStringLiteral("transfers"));
    s.setValue(QStringLiteral("maxJobs"), maxJobs);
    s.setValue(QStringLiteral("filesPerJob"), filesPerJob);
    s.setValue(QStringLiteral("partConcurrency"), partConcurrency);
    s.setValue(QStringLiteral("partSize"), partSize);
    s.setValue(QStringLiteral("multipartThreshold"), multipartThreshold);
    s.setValue(QStringLiteral("bandwidthLimit"), bandwidthLimit);
    s.setValue(QStringLiteral("maxRetries"), maxRetries);
    s.setValue(QStringLiteral("resumeOnStartup"), resumeOnStartup);
    s.endGroup();
}

} // namespace s3fm
