#pragma once

#include <QHashFunctions>
#include <QMetaType>
#include <QString>

namespace s3fm {

// Address of a file, directory, bucket or connection.
//
// Local:  file:///home/me/file.txt      (paths always use '/' separators)
//         On Windows the empty path is the "Computer" root that lists drives.
// S3:     s3://                          root: list of connections
//         s3://<connection>              bucket list of a connection
//         s3://<connection>/<bucket>     bucket root (empty key)
//         s3://<connection>/<bucket>/<key>
//
// S3 keys that denote "directories" (common prefixes) end with '/'. S3 strings are
// not percent-encoded, so keys with spaces, '%', '#' or '?' round-trip unchanged.
class Location
{
public:
    enum class Kind
    {
        Invalid,
        Local,
        S3
    };

    Location() = default;

    static Location local(const QString& path);
    static Location localRoot();
    static Location s3Root();
    static Location s3(const QString& connectionId, const QString& bucket = {}, const QString& key = {});

    // Parses a user-typed or serialized address. Accepts file:// URLs, absolute local
    // paths (also "~" / "~/x"), and s3:// URIs. Returns an invalid Location otherwise.
    static Location fromString(const QString& text);

    Kind kind() const { return m_kind; }
    bool isValid() const { return m_kind != Kind::Invalid; }
    bool isLocal() const { return m_kind == Kind::Local; }
    bool isS3() const { return m_kind == Kind::S3; }

    // Local accessors
    QString localPath() const { return m_kind == Kind::Local ? m_path : QString(); }
    QString nativePath() const;

    // S3 accessors
    QString connectionId() const { return m_kind == Kind::S3 ? m_path : QString(); }
    const QString& bucket() const { return m_bucket; }
    const QString& key() const { return m_key; }
    bool isS3Root() const { return isS3() && m_path.isEmpty(); }
    bool isS3Connection() const { return isS3() && !m_path.isEmpty() && m_bucket.isEmpty(); }
    bool isS3Bucket() const { return isS3() && !m_bucket.isEmpty() && m_key.isEmpty(); }

    // True for locations that can only be directories: S3 roots/connections/buckets,
    // prefixes ending in '/', and local roots.
    bool isDirectoryLike() const;
    bool isRoot() const;

    Location parent() const;
    Location child(const QString& name, bool directory = false) const;
    // Returns this location as a directory (S3: key gets a trailing '/').
    Location asDirectory() const;

    // Last path component without trailing '/', e.g. "file.txt", "docs", bucket or
    // connection id. Empty for roots.
    QString name() const;

    bool isAncestorOf(const Location& other) const;
    // Path of `descendant` relative to this location, using '/' separators
    // (empty if not a descendant). Directory results keep no trailing '/'.
    QString relativePathTo(const Location& descendant) const;

    QString toString() const;
    QString displayString() const;

    friend bool operator==(const Location& a, const Location& b)
    {
        return a.m_kind == b.m_kind && a.m_path == b.m_path && a.m_bucket == b.m_bucket && a.m_key == b.m_key;
    }
    friend size_t qHash(const Location& l, size_t seed = 0) noexcept
    {
        return qHashMulti(seed, static_cast<int>(l.m_kind), l.m_path, l.m_bucket, l.m_key);
    }

private:
    Kind m_kind = Kind::Invalid;
    QString m_path;   // local path, or S3 connection id
    QString m_bucket; // S3 only
    QString m_key;    // S3 only
};

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::Location)
