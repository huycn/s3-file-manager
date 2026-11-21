#pragma once

#include <QDateTime>
#include <QString>

namespace s3fm {

// "1.5 MB" style sizes (IEC binary units, locale-aware). Negative => empty string.
QString formatSize(qint64 bytes);
// "12,345" style plain byte counts.
QString formatByteCount(qint64 bytes);
// Short local date/time, "2026-11-19 14:03".
QString formatDateTime(const QDateTime& dt);
// Transfer rate, "12.3 MB/s".
QString formatRate(double bytesPerSecond);

} // namespace s3fm
