#include "transfer/TransferMath.h"

#include <QCryptographicHash>

#include <algorithm>
#include <cmath>

namespace s3fm::transfer {

namespace {
constexpr qint64 kMiB = qint64{1024} * 1024;
}

qint64 partSizeFor(qint64 size, qint64 preferred)
{
    qint64 part = std::max(preferred, kMinPartSize);
    const qint64 minimum = (size + kMaxParts - 1) / kMaxParts;
    part = std::max(part, minimum);
    part = ((part + kMiB - 1) / kMiB) * kMiB;
    return std::min(part, kMaxPartSize);
}

int partCount(qint64 size, qint64 partSize)
{
    if (size <= 0 || partSize <= 0)
        return 1;
    return int((size + partSize - 1) / partSize);
}

QString multipartEtag(const QList<QByteArray>& partMd5s)
{
    QCryptographicHash hash(QCryptographicHash::Md5);
    for (const QByteArray& md5 : partMd5s)
        hash.addData(md5);
    return QString::fromLatin1(hash.result().toHex()) + u'-' + QString::number(partMd5s.size());
}

bool isMd5Etag(const QString& etag)
{
    static const QRegularExpression re(QStringLiteral("^[0-9a-fA-F]{32}(-[0-9]+)?$"));
    return re.match(etag).hasMatch();
}

int retryDelayMs(int attempt, double random, int baseMs, int capMs)
{
    const double exp = double(baseMs) * std::pow(2.0, std::max(0, attempt - 1));
    const double ceiling = std::min(double(capMs), exp);
    return int(std::clamp(random, 0.0, 1.0) * ceiling);
}

QString numberedName(const QString& name, int n)
{
    const QString suffix = QStringLiteral(" (%1)").arg(n);
    const qsizetype dot = name.lastIndexOf(u'.');
    if (dot <= 0) // no extension, or a hidden file such as ".bashrc"
        return name + suffix;
    return name.left(dot) + suffix + name.mid(dot);
}

PathFilter::PathFilter(const QStringList& include, const QStringList& exclude)
    : m_include(compile(include)), m_exclude(compile(exclude))
{
}

QStringList PathFilter::splitPatterns(const QString& text)
{
    static const QRegularExpression separators(QStringLiteral("[;\\n]"));
    QStringList out;
    const QStringList parts = text.split(separators, Qt::SkipEmptyParts);
    for (QString p : parts) {
        p = p.trimmed();
        if (!p.isEmpty())
            out.push_back(p);
    }
    return out;
}

QList<PathFilter::Pattern> PathFilter::compile(const QStringList& patterns)
{
    QList<Pattern> out;
    for (const QString& raw : patterns) {
        const QString p = raw.trimmed();
        if (p.isEmpty())
            continue;
        QRegularExpression::PatternOptions opts = QRegularExpression::NoPatternOption;
#ifdef Q_OS_WIN
        opts |= QRegularExpression::CaseInsensitiveOption;
#endif
        // NonPathWildcardConversion: '*' also matches '/', so "docs/*" covers subfolders.
        const QString re =
            QRegularExpression::wildcardToRegularExpression(p, QRegularExpression::NonPathWildcardConversion);
        out.push_back({QRegularExpression(re, opts), p.contains(u'/')});
    }
    return out;
}

bool PathFilter::matches(const QList<Pattern>& patterns, const QString& relativePath)
{
    const QString name = relativePath.mid(relativePath.lastIndexOf(u'/') + 1);
    for (const Pattern& p : patterns) {
        if (p.re.match(p.path ? relativePath : name).hasMatch())
            return true;
    }
    return false;
}

bool PathFilter::acceptsFile(const QString& relativePath) const
{
    if (!m_include.isEmpty() && !matches(m_include, relativePath))
        return false;
    return !matches(m_exclude, relativePath);
}

bool PathFilter::acceptsDirectory(const QString& relativePath) const
{
    return !matches(m_exclude, relativePath);
}

} // namespace s3fm::transfer
