#include "core/Format.h"

#include <QCoreApplication>
#include <QLocale>

namespace s3fm {

namespace {

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::Format)
};

} // namespace

QString formatSize(qint64 bytes)
{
    if (bytes < 0)
        return {};
    if (bytes < 1024)
        return Tr::tr("%1 B", "size in bytes").arg(QLocale().toString(bytes));
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
    return Tr::tr("%1/s", "transfer rate").arg(formatSize(static_cast<qint64>(bytesPerSecond)));
}

} // namespace s3fm
