#pragma once

#include "core/Entry.h"
#include "core/Error.h"

#include <QHash>
#include <QObject>
#include <QPointer>
#include <QTemporaryDir>
#include <QTimer>

#include <functional>

class QFileSystemWatcher;
class QWidget;

namespace s3fm {

class ProviderRegistry;

// Works with remote files through local temporary copies:
//  * View  – download, then show in the internal viewer
//  * Open  – download, then open with the system's default application
//  * Edit  – download, open externally, watch the copy and offer to upload changes;
//            before uploading, the object's ETag is compared with the one that was
//            downloaded, so remote changes are never overwritten silently.
// Temporary copies live in a private directory that is removed on exit.
class RemoteFiles : public QObject
{
    Q_OBJECT

public:
    enum class Purpose
    {
        View,
        Open,
        Edit
    };

    using Confirm = std::function<bool(const QString& title, const QString& text)>;
    using OpenExternally = std::function<bool(const QString& localPath)>;

    RemoteFiles(ProviderRegistry* registry, QWidget* window);
    ~RemoteFiles() override;

    void fetch(const Entry& entry, Purpose purpose);

    // Test hooks.
    void setConfirm(Confirm confirm) { m_confirm = std::move(confirm); }
    void setOpenExternally(OpenExternally open) { m_open = std::move(open); }
    void setShowViewer(bool show) { m_showViewer = show; }
    void setLargeFileThreshold(qint64 bytes) { m_largeFile = bytes; }

    QStringList editedFiles() const { return m_sessions.keys(); }
    bool hasPendingChanges() const;
    // Checks an edited copy for modifications (normally triggered by the watcher).
    void checkForChanges(const QString& localPath);

Q_SIGNALS:
    void fetched(const QString& localPath, s3fm::RemoteFiles::Purpose purpose);
    void uploaded(const s3fm::Location& location);
    void failed(const QString& message);

private:
    struct EditSession
    {
        Entry entry;
        QString etag;
        QDateTime mtime;
        qint64 size = -1;
        bool busy = false;
    };

    QString localPathFor(const Entry& entry) const;
    void afterDownload(const Entry& entry, const QString& path, Purpose purpose);
    void startEdit(const Entry& entry, const QString& path);
    void upload(const QString& path);
    void reportFailure(const QString& what, const Error& error);
    void watch(const QString& path);

    ProviderRegistry* m_registry;
    QPointer<QWidget> m_window;
    QTemporaryDir m_root;
    QFileSystemWatcher* m_watcher;
    QHash<QString, EditSession> m_sessions; // by local path
    QTimer m_changeTimer;
    QStringList m_changedPaths;
    Confirm m_confirm;
    OpenExternally m_open;
    bool m_showViewer = true;
    qint64 m_largeFile = 256LL * 1024 * 1024;
};

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::RemoteFiles::Purpose)
