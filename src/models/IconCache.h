#pragma once

#include "core/Entry.h"

#include <QHash>
#include <QIcon>

namespace s3fm {

// Icons for entries, chosen by type and file-name extension (works the same for
// local files and S3 keys, without touching the disk). GUI thread only.
class IconCache
{
public:
    static IconCache& instance();
    QIcon iconFor(const Entry& entry);
    QIcon parentIcon();

private:
    QIcon mimeIcon(const QString& fileName);
    QHash<QString, QIcon> m_byMime;
    QIcon m_folder, m_folderLink, m_file, m_bucket, m_connection, m_drive, m_up;
    bool m_initialized = false;
    void init();
};

} // namespace s3fm
