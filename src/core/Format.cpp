#include "core/Format.h"

#include <QLocale>

namespace s3fm {

QString formatSize(qint64 bytes)
{
    if (bytes < 0)
        return {};
    if (bytes < 1024)
        return QLocale().toString(bytes) + QStringLiteral(" B");
    return QLocale().formattedDataSize(bytes, 1, QLocale::DataSizeTraditionalFormat);
}

QString formatByteCount(qint64 bytes)
{
    return QLocale().toString(bytes);
}

QString formatDateTime(const QDateTime& dt)
{
    if (!dt.isValid())
        return {};
    return dt.toLocalTime().toString(QStringLiteral("yyyy-MM-dd HH:mm"));
}

QString formatRate(double bytesPerSecond)
{
    if (bytesPerSecond <= 0)
        return {};
    return formatSize(static_cast<qint64>(bytesPerSecond)) + QStringLiteral("/s");
}

} // namespace s3fm
