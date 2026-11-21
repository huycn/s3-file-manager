#pragma once

#include <QByteArray>
#include <QList>
#include <QRegularExpression>
#include <QString>
#include <QStringList>

namespace s3fm::transfer {

inline constexpr int kMaxParts = 10000;           // S3 limit per multipart upload
inline constexpr qint64 kMinPartSize = 5LL << 20; // S3 minimum (except the last part)
inline constexpr qint64 kMaxPartSize = 5LL << 30;

// Part size for a multipart transfer of `size` bytes: at least `preferred` (and the
// S3 minimum), large enough to stay within 10,000 parts, rounded up to 1 MiB.
qint64 partSizeFor(qint64 size, qint64 preferred);
// Number of parts `size` bytes are cut into.
int partCount(qint64 size, qint64 partSize);

// ETag S3 computes for a multipart object: hex(md5(md5(part1) + … + md5(partN))) + "-N".
QString multipartEtag(const QList<QByteArray>& partMd5s);
// True for ETags that are plain or multipart MD5 sums (not SSE-KMS/SSE-C opaque tags).
bool isMd5Etag(const QString& etag);

// Delay before retry number `attempt` (1-based): exponential backoff with full
// jitter, `random` in [0, 1).
int retryDelayMs(int attempt, double random, int baseMs = 1000, int capMs = 30000);

// "photo.jpg" -> "photo (2).jpg" for n = 2. Hidden files and names without an
// extension get the suffix at the end.
QString numberedName(const QString& name, int n);

// Include/exclude filter on relative paths. Patterns are '*' / '?' wildcards
// separated by ';' or newlines; a pattern with '/' matches the whole relative path,
// otherwise the file name. Matching is case-insensitive on Windows.
class PathFilter
{
public:
    PathFilter() = default;
    PathFilter(const QStringList& include, const QStringList& exclude);

    static QStringList splitPatterns(const QString& text);

    bool isEmpty() const { return m_include.isEmpty() && m_exclude.isEmpty(); }
    bool hasInclude() const { return !m_include.isEmpty(); }
    // Files must match an include pattern (if any) and no exclude pattern.
    bool acceptsFile(const QString& relativePath) const;
    // Directories are skipped (with their contents) only by exclude patterns.
    bool acceptsDirectory(const QString& relativePath) const;

private:
    struct Pattern
    {
        QRegularExpression re;
        bool path = false;
    };
    static QList<Pattern> compile(const QStringList& patterns);
    static bool matches(const QList<Pattern>& patterns, const QString& relativePath);

    QList<Pattern> m_include;
    QList<Pattern> m_exclude;
};

} // namespace s3fm::transfer
