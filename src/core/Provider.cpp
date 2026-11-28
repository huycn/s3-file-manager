#include "core/Provider.h"

#include <QCoreApplication>
#include <QFile>
#include <QJsonValue>

namespace s3fm {

Provider::~Provider() = default;

QJsonObject TransferCheckpoint::toJson() const
{
    QJsonObject o;
    if (!uploadId.isEmpty()) {
        o.insert(QStringLiteral("uploadId"), uploadId);
        o.insert(QStringLiteral("partSize"), double(partSize));
    }
    if (!sourceFingerprint.isEmpty())
        o.insert(QStringLiteral("source"), sourceFingerprint);
    if (!downloadEtag.isEmpty())
        o.insert(QStringLiteral("downloadEtag"), downloadEtag);
    return o;
}

TransferCheckpoint TransferCheckpoint::fromJson(const QJsonObject& json)
{
    TransferCheckpoint c;
    c.uploadId = json.value(QStringLiteral("uploadId")).toString();
    c.partSize = qint64(json.value(QStringLiteral("partSize")).toDouble());
    c.sourceFingerprint = json.value(QStringLiteral("source")).toString();
    c.downloadEtag = json.value(QStringLiteral("downloadEtag")).toString();
    return c;
}

void Provider::discardPartialTransfer(const Location& remote, const QString& localFile,
                                      const TransferCheckpoint& checkpoint)
{
    Q_UNUSED(remote)
    Q_UNUSED(checkpoint)
    if (!localFile.isEmpty())
        QFile::remove(localFile + kPartialSuffix.toString());
}

VoidResult Provider::walk(const Location& dir, const Visitor& visit, OperationContext& ctx)
{
    QString token;
    do {
        if (ctx.isCancelled())
            return Error::cancelled();
        auto page = list(dir, token, ctx);
        if (!page)
            return page.error();
        for (const Entry& e : std::as_const(page->entries)) {
            if (ctx.isCancelled() || !visit(e))
                return Error::cancelled();
            if (e.isDirectory()) {
                if (auto r = walk(e.location, visit, ctx); !r)
                    return r;
            }
        }
        token = page->nextPageToken;
    } while (!token.isEmpty());
    return {};
}

VoidResult Provider::walkPrefix(const Location& dir, const QString& prefix, const Visitor& visit,
                                OperationContext& ctx)
{
    const qsizetype slash = prefix.lastIndexOf(u'/');
    Location start = dir;
    for (const QString& part : prefix.left(slash < 0 ? 0 : slash).split(u'/', Qt::SkipEmptyParts))
        start = start.child(part, true);
    if (!start.isValid())
        return Error::make(ErrorCode::NotFound, {});
    const QString namePrefix = prefix.mid(slash + 1);
    if (namePrefix.isEmpty())
        return walk(start, visit, ctx);
    return walk(
        start,
        [&](const Entry& e) {
            const QString rel = start.relativePathTo(e.location);
            return !rel.section(u'/', 0, 0).startsWith(namePrefix) || visit(e);
        },
        ctx);
}

Result<ListPage> Provider::listWithOptions(const Location& dir, const QString& pageToken,
                                           const ListOptions& options, OperationContext& ctx)
{
    if (!options.isDefault())
        return Error::make(
            ErrorCode::Unsupported,
            QCoreApplication::translate("s3fm::Provider", "Version listings are not supported here"));
    return list(dir, pageToken, ctx);
}

Result<EntryList> Provider::listAll(const Location& dir, OperationContext& ctx)
{
    EntryList all;
    QString token;
    do {
        auto page = list(dir, token, ctx);
        if (!page)
            return page.error();
        all.append(std::move(page->entries));
        token = page->nextPageToken;
    } while (!token.isEmpty());
    return all;
}

Result<bool> Provider::exists(const Location& location, OperationContext& ctx)
{
    auto st = stat(location, ctx);
    if (st)
        return true;
    if (st.error().code == ErrorCode::NotFound)
        return false;
    return st.error();
}

} // namespace s3fm
