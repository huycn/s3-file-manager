#include "connections/AddressResolver.h"

#include <QRegularExpression>
#include <QUrl>

namespace s3fm {

namespace {

const ConnectionProfile* findById(const QList<ConnectionProfile>& profiles, const QString& id)
{
    for (const ConnectionProfile& p : profiles) {
        if (p.id == id)
            return &p;
    }
    return nullptr;
}

// Connection to use for a bare bucket name: the current panel's connection, else
// the first AWS one, else the first one.
QString defaultConnection(const Location& current, const QList<ConnectionProfile>& profiles, bool preferAws)
{
    if (current.isS3() && !current.connectionId().isEmpty()) {
        const ConnectionProfile* p = findById(profiles, current.connectionId());
        if (p && (!preferAws || p->endpoint.isEmpty()))
            return p->id;
    }
    for (const ConnectionProfile& p : profiles) {
        if (p.endpoint.isEmpty())
            return p.id;
    }
    if (preferAws)
        return {};
    return profiles.isEmpty() ? QString() : profiles.first().id;
}

// Splits "/bucket/key/parts" into bucket and key.
std::pair<QString, QString> splitPath(const QString& path)
{
    QString p = path;
    while (p.startsWith(u'/'))
        p.remove(0, 1);
    const qsizetype slash = p.indexOf(u'/');
    if (slash < 0)
        return {p, QString()};
    return {p.left(slash), p.mid(slash + 1)};
}

Location fromHttpUrl(const QUrl& url, const Location& current, const QList<ConnectionProfile>& profiles)
{
    const QString host = url.host().toLower();
    const QString path = url.path(QUrl::FullyDecoded);

    // Saved S3-compatible endpoints (exact host[:port] match first).
    for (const ConnectionProfile& p : profiles) {
        if (p.endpoint.isEmpty())
            continue;
        const QUrl endpoint(p.endpoint);
        const QString epHost = endpoint.host().toLower();
        const bool samePort =
            endpoint.port(-1) == url.port(-1) || (endpoint.port(-1) == -1 && url.port(-1) == -1);
        if (!samePort)
            continue;
        if (host == epHost) {
            auto [bucket, key] = splitPath(path);
            return Location::s3(p.id, bucket, key);
        }
        if (host.endsWith(u'.' + epHost)) {
            const QString bucket = host.left(host.size() - epHost.size() - 1);
            QString key = path;
            while (key.startsWith(u'/'))
                key.remove(0, 1);
            return Location::s3(p.id, bucket, key);
        }
    }

    // Amazon S3 endpoints.
    static const QRegularExpression virtualHost(
        QStringLiteral(R"(^(.+)\.s3(?:[.-](?:dualstack\.)?[a-z0-9-]+)?\.amazonaws\.com(?:\.cn)?$)"));
    static const QRegularExpression pathHost(
        QStringLiteral(R"(^s3(?:[.-](?:dualstack\.)?[a-z0-9-]+)?\.amazonaws\.com(?:\.cn)?$)"));
    const QString aws = defaultConnection(current, profiles, true);
    if (aws.isEmpty())
        return {};
    if (auto m = pathHost.match(host); m.hasMatch()) {
        auto [bucket, key] = splitPath(path);
        return Location::s3(aws, bucket, key);
    }
    if (auto m = virtualHost.match(host); m.hasMatch()) {
        QString key = path;
        while (key.startsWith(u'/'))
            key.remove(0, 1);
        return Location::s3(aws, m.captured(1), key);
    }
    return {};
}

} // namespace

Location resolveAddress(const QString& input, const Location& current,
                        const QList<ConnectionProfile>& profiles)
{
    const QString text = input.trimmed();
    if (text.startsWith(QStringLiteral("s3://"), Qt::CaseInsensitive)) {
        const Location parsed = Location::fromString(text);
        if (parsed.isS3Root() || findById(profiles, parsed.connectionId()))
            return parsed;
        // First segment is not a connection: treat it as a bucket name.
        const QString conn = defaultConnection(current, profiles, false);
        if (conn.isEmpty())
            return {};
        auto [bucket, key] = splitPath(text.mid(5));
        return Location::s3(conn, bucket, key);
    }
    if (text.startsWith(QStringLiteral("http://"), Qt::CaseInsensitive) ||
        text.startsWith(QStringLiteral("https://"), Qt::CaseInsensitive)) {
        const QUrl url(text);
        if (!url.isValid())
            return {};
        return fromHttpUrl(url, current, profiles);
    }
    return Location::fromString(text);
}

} // namespace s3fm
