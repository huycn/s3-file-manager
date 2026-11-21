#include "core/Location.h"

#include <QDir>
#include <QRegularExpression>
#include <QUrl>

namespace s3fm {

namespace {

const QString kS3Scheme = QStringLiteral("s3://");

bool isDriveSpec(const QString& p) // "C:"
{
    return p.size() == 2 && p.at(0).isLetter() && p.at(1) == u':';
}

bool isDriveRoot(const QString& p) // "C:/"
{
    return p.size() == 3 && p.at(0).isLetter() && p.at(1) == u':' && p.at(2) == u'/';
}

bool isUncShareRoot(const QString& p) // "//server/share"
{
    static const QRegularExpression re(QStringLiteral("^//[^/]+/[^/]+/?$"));
    return re.match(p).hasMatch();
}

// Roots of a local filesystem tree: "/" on Unix, "C:/" or "//server/share" on Windows.
bool isFilesystemRoot(const QString& p)
{
    return p == u"/" || isDriveRoot(p) || isUncShareRoot(p);
}

QString normalizeLocal(QString p)
{
    p = QDir::fromNativeSeparators(p);
    if (p == u"~" || p.startsWith(u"~/"))
        p = QDir::homePath() + p.mid(1);
    if (isDriveSpec(p))
        p += u'/';
    p = QDir::cleanPath(p);
    if (isDriveSpec(p))
        p += u'/';
    return p;
}

} // namespace

Location Location::local(const QString& path)
{
    if (path.isEmpty())
        return localRoot();
    const QString p = normalizeLocal(path);
    if (!QDir::isAbsolutePath(p))
        return {};
    Location l;
    l.m_kind = Kind::Local;
    l.m_path = p;
    return l;
}

Location Location::localRoot()
{
    Location l;
    l.m_kind = Kind::Local;
#ifdef Q_OS_WIN
    l.m_path = QString(); // "Computer": lists drives
#else
    l.m_path = QStringLiteral("/");
#endif
    return l;
}

Location Location::s3Root()
{
    Location l;
    l.m_kind = Kind::S3;
    return l;
}

Location Location::s3(const QString& connectionId, const QString& bucket, const QString& key)
{
    Location l;
    l.m_kind = Kind::S3;
    if (connectionId.isEmpty())
        return l;
    l.m_path = connectionId;
    if (bucket.isEmpty())
        return l;
    l.m_bucket = bucket;
    l.m_key = key;
    return l;
}

Location Location::fromString(const QString& input)
{
    const QString text = input.trimmed();
    if (text.isEmpty())
        return {};

    if (text.startsWith(kS3Scheme, Qt::CaseInsensitive)) {
        const QString rest = text.mid(kS3Scheme.size());
        const qsizetype slash1 = rest.indexOf(u'/');
        if (slash1 < 0)
            return s3(rest);
        const QString conn = rest.left(slash1);
        const QString afterConn = rest.mid(slash1 + 1);
        const qsizetype slash2 = afterConn.indexOf(u'/');
        if (slash2 < 0)
            return s3(conn, afterConn);
        return s3(conn, afterConn.left(slash2), afterConn.mid(slash2 + 1));
    }

    if (text.startsWith(QStringLiteral("file:"), Qt::CaseInsensitive)) {
        if (text.compare(QStringLiteral("file://"), Qt::CaseInsensitive) == 0)
            return localRoot();
        const QUrl url(text);
        if (!url.isValid() || !url.isLocalFile())
            return {};
        return local(url.toLocalFile());
    }

    return local(text);
}

QString Location::nativePath() const
{
    return m_kind == Kind::Local ? QDir::toNativeSeparators(m_path) : QString();
}

bool Location::isRoot() const
{
    switch (m_kind) {
    case Kind::Invalid:
        return false;
    case Kind::S3:
        return m_path.isEmpty();
    case Kind::Local:
#ifdef Q_OS_WIN
        return m_path.isEmpty();
#else
        return m_path == u"/";
#endif
    }
    return false;
}

bool Location::isDirectoryLike() const
{
    switch (m_kind) {
    case Kind::Invalid:
        return false;
    case Kind::S3:
        return m_key.isEmpty() || m_key.endsWith(u'/');
    case Kind::Local:
        return m_path.isEmpty() || isFilesystemRoot(m_path);
    }
    return false;
}

Location Location::parent() const
{
    switch (m_kind) {
    case Kind::Invalid:
        return {};
    case Kind::S3: {
        if (m_path.isEmpty())
            return {};
        if (m_bucket.isEmpty())
            return s3Root();
        if (m_key.isEmpty())
            return s3(m_path);
        QString k = m_key;
        if (k.endsWith(u'/'))
            k.chop(1);
        const qsizetype idx = k.lastIndexOf(u'/');
        return s3(m_path, m_bucket, idx < 0 ? QString() : k.left(idx + 1));
    }
    case Kind::Local: {
        if (m_path.isEmpty())
            return {};
        if (isFilesystemRoot(m_path)) {
#ifdef Q_OS_WIN
            return localRoot();
#else
            return {};
#endif
        }
        const qsizetype idx = m_path.lastIndexOf(u'/');
        if (idx < 0)
            return {};
        QString p = m_path.left(idx);
        if (p.isEmpty())
            p = QStringLiteral("/");
        else if (isDriveSpec(p))
            p += u'/';
        Location l;
        l.m_kind = Kind::Local;
        l.m_path = p;
        return l;
    }
    }
    return {};
}

Location Location::child(const QString& name, bool directory) const
{
    if (name.isEmpty() && m_kind != Kind::S3)
        return {};
    switch (m_kind) {
    case Kind::Invalid:
        return {};
    case Kind::S3: {
        if (m_path.isEmpty())
            return s3(name);
        if (m_bucket.isEmpty())
            return s3(m_path, name);
        QString key = asDirectory().m_key + name;
        if (directory)
            key += u'/';
        return s3(m_path, m_bucket, key);
    }
    case Kind::Local: {
        if (m_path.isEmpty())
            return local(name); // drive under "Computer"
        if (m_path.endsWith(u'/'))
            return local(m_path + name);
        return local(m_path + u'/' + name);
    }
    }
    return {};
}

Location Location::asDirectory() const
{
    if (m_kind == Kind::S3 && !m_key.isEmpty() && !m_key.endsWith(u'/')) {
        Location l = *this;
        l.m_key += u'/';
        return l;
    }
    return *this;
}

QString Location::name() const
{
    switch (m_kind) {
    case Kind::Invalid:
        return {};
    case Kind::S3: {
        if (m_bucket.isEmpty())
            return m_path;
        if (m_key.isEmpty())
            return m_bucket;
        QString k = m_key;
        if (k.endsWith(u'/'))
            k.chop(1);
        return k.mid(k.lastIndexOf(u'/') + 1);
    }
    case Kind::Local: {
        if (m_path.isEmpty() || m_path == u"/")
            return {};
        if (isDriveRoot(m_path))
            return m_path.left(2);
        return m_path.mid(m_path.lastIndexOf(u'/') + 1);
    }
    }
    return {};
}

bool Location::isAncestorOf(const Location& other) const
{
    if (m_kind != other.m_kind || m_kind == Kind::Invalid || *this == other)
        return false;
    if (m_kind == Kind::Local) {
        if (m_path.isEmpty())
            return !other.m_path.isEmpty();
        const QString prefix = m_path.endsWith(u'/') ? m_path : m_path + u'/';
        return other.m_path.startsWith(prefix);
    }
    // S3
    if (m_path.isEmpty())
        return !other.m_path.isEmpty();
    if (other.m_path != m_path)
        return false;
    if (m_bucket.isEmpty())
        return !other.m_bucket.isEmpty();
    if (other.m_bucket != m_bucket)
        return false;
    const QString prefix = asDirectory().m_key;
    return other.m_key.size() > prefix.size() && other.m_key.startsWith(prefix);
}

QString Location::relativePathTo(const Location& descendant) const
{
    if (!isAncestorOf(descendant))
        return {};
    auto stripSlash = [](QString s) {
        if (s.endsWith(u'/'))
            s.chop(1);
        return s;
    };
    if (m_kind == Kind::Local) {
        if (m_path.isEmpty())
            return descendant.m_path;
        const qsizetype n = m_path.endsWith(u'/') ? m_path.size() : m_path.size() + 1;
        return descendant.m_path.mid(n);
    }
    if (m_path.isEmpty())
        return stripSlash(descendant.m_path + u'/' + descendant.m_bucket + u'/' + descendant.m_key);
    if (m_bucket.isEmpty())
        return stripSlash(descendant.m_bucket + u'/' + descendant.m_key);
    return stripSlash(descendant.m_key.mid(asDirectory().m_key.size()));
}

QString Location::toString() const
{
    switch (m_kind) {
    case Kind::Invalid:
        return {};
    case Kind::Local:
        if (m_path.isEmpty())
            return QStringLiteral("file://");
        return QUrl::fromLocalFile(m_path).toString(QUrl::FullyEncoded);
    case Kind::S3: {
        QString s = kS3Scheme;
        if (m_path.isEmpty())
            return s;
        s += m_path + u'/';
        if (m_bucket.isEmpty())
            return s;
        return s + m_bucket + u'/' + m_key;
    }
    }
    return {};
}

QString Location::displayString() const
{
    return m_kind == Kind::Local ? nativePath() : toString();
}

} // namespace s3fm
