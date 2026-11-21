#pragma once

#include <QDateTime>
#include <QString>
#include <QTimeZone>

#include <aws/core/utils/DateTime.h>
#include <aws/core/utils/memory/stl/AWSString.h>

namespace s3fm::aws {

inline Aws::String toAws(const QString& s)
{
    const QByteArray utf8 = s.toUtf8();
    return Aws::String(utf8.constData(), size_t(utf8.size()));
}

inline QString fromAws(const Aws::String& s)
{
    return QString::fromUtf8(s.data(), qsizetype(s.size()));
}

inline QDateTime fromAws(const Aws::Utils::DateTime& dt)
{
    if (!dt.WasParseSuccessful() || dt.Millis() <= 0)
        return {};
    return QDateTime::fromMSecsSinceEpoch(dt.Millis(), QTimeZone::UTC);
}

// ETags come quoted ("\"abc\""); strip the quotes for display/comparison.
inline QString cleanEtag(const Aws::String& etag)
{
    QString e = fromAws(etag);
    if (e.size() >= 2 && e.startsWith(u'"') && e.endsWith(u'"'))
        e = e.mid(1, e.size() - 2);
    return e;
}

} // namespace s3fm::aws
