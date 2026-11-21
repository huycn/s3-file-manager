#include "ui/RemoteFiles.h"

#include "core/Async.h"
#include "core/Format.h"
#include "core/Logging.h"
#include "core/OperationContext.h"
#include "core/Provider.h"
#include "core/ProviderRegistry.h"
#include "ui/dialogs/ViewerDialog.h"

#include <QDesktopServices>
#include <QDir>
#include <QFileInfo>
#include <QFileSystemWatcher>
#include <QMessageBox>
#include <QProgressDialog>
#include <QUrl>
#include <QUuid>

#include <atomic>
#include <memory>

namespace s3fm {

namespace {

QString safeFileName(QString name)
{
    static const QString invalid = QStringLiteral("<>:\"/\\|?*");
    for (QChar& c : name) {
        if (invalid.contains(c) || c.unicode() < 0x20)
            c = u'_';
    }
    if (name.isEmpty() || name == u"." || name == u"..")
        name = QStringLiteral("file");
    return name;
}

struct DownloadState
{
    OperationContext ctx;
    TransferParams params; // a specific version (versions view)
    std::atomic<qint64> done{0};
    std::atomic<qint64> total{-1};
};

} // namespace

RemoteFiles::RemoteFiles(ProviderRegistry* registry, QWidget* window)
    : QObject(window), m_registry(registry), m_window(window),
      m_root(QDir::tempPath() + QStringLiteral("/s3fm-XXXXXX")), m_watcher(new QFileSystemWatcher(this))
{
    m_confirm = [this](const QString& title, const QString& text) {
        return QMessageBox::question(m_window, title, text) == QMessageBox::Yes;
    };
    m_open = [](const QString& path) { return QDesktopServices::openUrl(QUrl::fromLocalFile(path)); };

    m_changeTimer.setSingleShot(true);
    m_changeTimer.setInterval(700); // editors often write in several steps
    connect(&m_changeTimer, &QTimer::timeout, this, [this] {
        const QStringList paths = std::exchange(m_changedPaths, {});
        for (const QString& p : paths)
            checkForChanges(p);
    });
    auto onChange = [this](const QString& changed) {
        // File changed, or its directory changed (editors that save by rename).
        for (auto it = m_sessions.cbegin(); it != m_sessions.cend(); ++it) {
            if (it.key() == changed || QFileInfo(it.key()).absolutePath() == changed) {
                if (!m_changedPaths.contains(it.key()))
                    m_changedPaths.push_back(it.key());
            }
        }
        m_changeTimer.start();
    };
    connect(m_watcher, &QFileSystemWatcher::fileChanged, this, onChange);
    connect(m_watcher, &QFileSystemWatcher::directoryChanged, this, onChange);
}

RemoteFiles::~RemoteFiles() = default;

QString RemoteFiles::localPathFor(const Entry& entry) const
{
    const QString dir = m_root.path() + u'/' + QUuid::createUuid().toString(QUuid::Id128).left(8);
    QDir().mkpath(dir);
    return dir + u'/' + safeFileName(entry.name);
}

void RemoteFiles::reportFailure(const QString& what, const Error& error)
{
    const QString message = QStringLiteral("%1: %2").arg(what, error.toString());
    qCWarning(lcUi) << message;
    Q_EMIT failed(message);
    if (m_window && m_showViewer)
        QMessageBox::warning(m_window, tr("S3 File Manager"), message);
}

void RemoteFiles::fetch(const Entry& entry, Purpose purpose)
{
    if (entry.isDirectory())
        return;
    auto provider = m_registry->providerFor(entry.location);
    if (!provider) {
        reportFailure(entry.name, Error::make(ErrorCode::NotFound, tr("No provider")));
        return;
    }
    if (!m_root.isValid()) {
        reportFailure(entry.name, Error::make(ErrorCode::Io, tr("Cannot create a temporary directory")));
        return;
    }
    if (entry.size > m_largeFile &&
        !m_confirm(
            tr("Large File"),
            tr("\"%1\" is %2. Download it to a temporary file?").arg(entry.name, formatSize(entry.size))))
        return;

    const QString path = localPathFor(entry);
    auto state = std::make_shared<DownloadState>();
    state->total = entry.size;
    if (!entry.versionId.isEmpty() && !entry.isLatest) {
        if (purpose == Purpose::Edit) {
            reportFailure(entry.name,
                          Error::make(ErrorCode::InvalidArgument,
                                      tr("Older versions cannot be edited; restore the version first")));
            return;
        }
        state->params.sourceVersionId = entry.versionId;
        state->ctx.setParams(&state->params);
    }
    // Raw pointer: the handler is owned by `state` itself (a shared_ptr capture would
    // form a cycle) and only runs while the download task keeps `state` alive.
    state->ctx.setProgressHandler([raw = state.get()](qint64 done, qint64 total) {
        raw->done = done;
        if (total >= 0)
            raw->total = total;
    });

    QPointer<QProgressDialog> progress;
    QTimer* poll = nullptr;
    if (m_window && m_showViewer) {
        progress =
            new QProgressDialog(tr("Downloading %1…").arg(entry.name), tr("Cancel"), 0, 1000, m_window);
        progress->setWindowModality(Qt::WindowModal);
        progress->setMinimumDuration(500);
        progress->setAutoClose(false);
        progress->setAutoReset(false);
        connect(progress, &QProgressDialog::canceled, this, [state] { state->ctx.cancel(); });
        poll = new QTimer(progress);
        connect(poll, &QTimer::timeout, progress, [progress, state] {
            const qint64 total = state->total;
            if (progress && total > 0)
                progress->setValue(int(std::min<qint64>(1000, state->done * 1000 / total)));
        });
        poll->start(100);
    }

    runIo([provider, location = entry.location, path, state] {
        return provider->download(location, path, state->ctx);
    }).then(this, [this, entry, path, purpose, progress](VoidResult result) {
        if (progress)
            progress->deleteLater();
        if (!result) {
            if (!result.error().isCancelled())
                reportFailure(tr("Cannot download %1").arg(entry.name), result.error());
            QFile::remove(path);
            return;
        }
        afterDownload(entry, path, purpose);
    });
}

void RemoteFiles::afterDownload(const Entry& entry, const QString& path, Purpose purpose)
{
    Q_EMIT fetched(path, purpose);
    switch (purpose) {
    case Purpose::View:
        if (m_showViewer) {
            auto* viewer = new ViewerDialog(path, entry.location.displayString(), m_window);
            viewer->setAttribute(Qt::WA_DeleteOnClose);
            viewer->show();
        }
        break;
    case Purpose::Open:
        if (!m_open(path))
            reportFailure(entry.name,
                          Error::make(ErrorCode::Unsupported, tr("No application to open this file")));
        break;
    case Purpose::Edit:
        startEdit(entry, path);
        break;
    }
}

void RemoteFiles::watch(const QString& path)
{
    if (QFileInfo::exists(path) && !m_watcher->files().contains(path))
        m_watcher->addPath(path);
    const QString dir = QFileInfo(path).absolutePath();
    if (!m_watcher->directories().contains(dir))
        m_watcher->addPath(dir);
}

void RemoteFiles::startEdit(const Entry& entry, const QString& path)
{
    EditSession session;
    session.entry = entry;
    session.etag = entry.etag;
    const QFileInfo info(path);
    session.mtime = info.lastModified();
    session.size = info.size();
    // Record the ETag of what was actually downloaded (the listing may be stale).
    if (auto provider = m_registry->providerFor(entry.location)) {
        runIo([provider, location = entry.location] {
            OperationContext ctx;
            return provider->stat(location, ctx);
        }).then(this, [this, path](Result<Entry> st) {
            if (st && m_sessions.contains(path) && m_sessions[path].etag.isEmpty())
                m_sessions[path].etag = st->etag;
        });
    }
    m_sessions.insert(path, session);
    watch(path);
    if (!m_open(path))
        reportFailure(entry.name,
                      Error::make(ErrorCode::Unsupported, tr("No application to edit this file")));
}

bool RemoteFiles::hasPendingChanges() const
{
    for (auto it = m_sessions.cbegin(); it != m_sessions.cend(); ++it) {
        const QFileInfo info(it.key());
        if (info.exists() && (info.lastModified() != it->mtime || info.size() != it->size))
            return true;
    }
    return false;
}

void RemoteFiles::checkForChanges(const QString& path)
{
    auto it = m_sessions.find(path);
    if (it == m_sessions.end() || it->busy)
        return;
    watch(path); // re-arm after save-by-rename
    const QFileInfo info(path);
    if (!info.exists() || (info.lastModified() == it->mtime && info.size() == it->size))
        return;
    it->busy = true;
    const bool upload = m_confirm(
        tr("Upload Changes"),
        tr("\"%1\" was modified. Upload it to %2?").arg(it->entry.name, it->entry.location.displayString()));
    it = m_sessions.find(path);
    if (it == m_sessions.end())
        return;
    // Remember this version either way, so the same change is not asked about twice.
    it->mtime = info.lastModified();
    it->size = info.size();
    if (!upload) {
        it->busy = false;
        return;
    }
    this->upload(path);
}

void RemoteFiles::upload(const QString& path)
{
    const EditSession session = m_sessions.value(path);
    auto provider = m_registry->providerFor(session.entry.location);
    if (!provider) {
        m_sessions[path].busy = false;
        return;
    }
    const Location location = session.entry.location;
    runIo([provider, location] {
        OperationContext ctx;
        return provider->stat(location, ctx);
    }).then(this, [this, path, provider, location, knownEtag = session.etag](Result<Entry> remote) {
        if (remote && !knownEtag.isEmpty() && remote->etag != knownEtag &&
            !m_confirm(tr("Remote File Changed"),
                       tr("%1 was changed on the server since you opened it. Overwrite it with your version?")
                           .arg(location.displayString()))) {
            m_sessions[path].busy = false;
            return;
        }
        runIo([provider, location, path] {
            OperationContext ctx;
            VoidResult r = provider->upload(path, location, ctx);
            if (!r)
                return Result<Entry>(r.error());
            return provider->stat(location, ctx);
        }).then(this, [this, path, location](Result<Entry> uploaded) {
            if (!m_sessions.contains(path))
                return;
            EditSession& s = m_sessions[path];
            s.busy = false;
            if (!uploaded) {
                reportFailure(tr("Cannot upload %1").arg(s.entry.name), uploaded.error());
                s.mtime = {}; // keep "pending" so closing the app warns
                return;
            }
            s.etag = uploaded->etag;
            Q_EMIT this->uploaded(location);
        });
    });
}

} // namespace s3fm
