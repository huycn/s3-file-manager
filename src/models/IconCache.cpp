#include "models/IconCache.h"

#include <QApplication>
#include <QMimeDatabase>
#include <QStyle>

namespace s3fm {

IconCache& IconCache::instance()
{
    static IconCache cache;
    return cache;
}

void IconCache::init()
{
    if (m_initialized)
        return;
    m_initialized = true;
    QStyle* style = QApplication::style();
    m_folder = QIcon::fromTheme(QStringLiteral("folder"), style->standardIcon(QStyle::SP_DirIcon));
    m_folderLink =
        QIcon::fromTheme(QStringLiteral("folder-link"), style->standardIcon(QStyle::SP_DirLinkIcon));
    m_file = QIcon::fromTheme(QStringLiteral("text-x-generic"), style->standardIcon(QStyle::SP_FileIcon));
    m_drive = QIcon::fromTheme(QStringLiteral("drive-harddisk"), style->standardIcon(QStyle::SP_DriveHDIcon));
    m_up = QIcon::fromTheme(QStringLiteral("go-up"), style->standardIcon(QStyle::SP_FileDialogToParent));
    m_bucket = QIcon(QStringLiteral(":/icons/bucket.svg"));
    m_connection = QIcon(QStringLiteral(":/icons/cloud.svg"));
}

QIcon IconCache::parentIcon()
{
    init();
    return m_up;
}

QIcon IconCache::mimeIcon(const QString& fileName)
{
    static const QMimeDatabase db;
    const QMimeType mime = db.mimeTypeForFile(fileName, QMimeDatabase::MatchExtension);
    const QString key = mime.name();
    if (auto it = m_byMime.constFind(key); it != m_byMime.cend())
        return it.value();
    QIcon icon = QIcon::fromTheme(mime.iconName());
    if (icon.isNull())
        icon = QIcon::fromTheme(mime.genericIconName());
    if (icon.isNull())
        icon = m_file;
    m_byMime.insert(key, icon);
    return icon;
}

QIcon IconCache::iconFor(const Entry& entry)
{
    init();
    switch (entry.type) {
    case Entry::Type::Bucket:
        return m_bucket;
    case Entry::Type::Connection:
        return m_connection;
    case Entry::Type::Directory:
        if (entry.location.isLocal() && entry.location.isDirectoryLike())
            return m_drive;
        return entry.isSymlink ? m_folderLink : m_folder;
    case Entry::Type::File:
        return mimeIcon(entry.name);
    }
    return m_file;
}

} // namespace s3fm
