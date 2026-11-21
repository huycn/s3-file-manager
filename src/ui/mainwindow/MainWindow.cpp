#include "ui/mainwindow/MainWindow.h"

#include "connections/AddressResolver.h"
#include "connections/ConnectionStore.h"
#include "connections/S3Urls.h"
#include "core/Async.h"
#include "core/Logging.h"
#include "core/Provider.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "providers/s3/S3BucketService.h"
#include "providers/s3/S3ObjectService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3VersionService.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"
#include "ui/RemoteFiles.h"
#include "ui/dialogs/BucketPropertiesDialog.h"
#include "ui/dialogs/ConflictDialog.h"
#include "ui/dialogs/ConnectionDialog.h"
#include "ui/dialogs/CreateBucketDialog.h"
#include "ui/dialogs/DeleteBucketDialog.h"
#include "ui/dialogs/MultipartUploadsDialog.h"
#include "ui/dialogs/ObjectEditDialog.h"
#include "ui/dialogs/PresignDialog.h"
#include "ui/dialogs/PropertiesDialog.h"
#include "ui/dialogs/RestoreArchiveDialog.h"
#include "ui/dialogs/TargetDialog.h"
#include "ui/dialogs/TransferSettingsDialog.h"
#include "ui/dialogs/VersionHistoryDialog.h"
#include "ui/dialogs/ViewerDialog.h"
#include "ui/docks/TransferDock.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"

#include <QApplication>
#include <QClipboard>
#include <QCloseEvent>
#include <QDateTimeEdit>
#include <QDesktopServices>
#include <QDialogButtonBox>
#include <QDir>
#include <QFormLayout>
#include <QHBoxLayout>
#include <QInputDialog>
#include <QLabel>
#include <QMenu>
#include <QMenuBar>
#include <QMessageBox>
#include <QProgressDialog>
#include <QPushButton>
#include <QSettings>
#include <QSplitter>
#include <QStatusBar>
#include <QStorageInfo>
#include <QTimer>
#include <QUrl>
#include <QVBoxLayout>

namespace s3fm {

MainWindow::MainWindow(ProviderRegistry* registry, ConnectionStore* connections, TransferQueue* transfers,
                       QWidget* parent)
    : QMainWindow(parent), m_registry(registry), m_connections(connections),
      m_remote(new RemoteFiles(registry, this)),
      m_transfers(transfers ? transfers : new TransferQueue(registry, this))
{
    setWindowTitle(tr("S3 File Manager"));
    setWindowIcon(QIcon(QStringLiteral(":/icons/app.svg")));
    resize(1200, 760);

    auto* central = new QWidget(this);
    auto* layout = new QVBoxLayout(central);
    layout->setContentsMargins(4, 4, 4, 0);
    layout->setSpacing(4);

    m_splitter = new QSplitter(Qt::Horizontal, central);
    m_splitter->setChildrenCollapsible(false);
    m_left = new PanelWidget(registry, m_splitter);
    m_right = new PanelWidget(registry, m_splitter);
    m_left->setObjectName(QStringLiteral("leftPanel"));
    m_right->setObjectName(QStringLiteral("rightPanel"));
    m_splitter->addWidget(m_left);
    m_splitter->addWidget(m_right);
    layout->addWidget(m_splitter, 1);
    setCentralWidget(central);

    for (PanelWidget* panel : {m_left, m_right}) {
        panel->setPlacesMenuBuilder([this](QMenu* menu, PanelWidget* p) { buildPlacesMenu(menu, p); });
        panel->setAddressResolver([this](const QString& text, const Location& current) {
            return resolveAddress(text, current,
                                  m_connections ? m_connections->profiles() : QList<ConnectionProfile>{});
        });
        connect(panel, &PanelWidget::activated, this, &MainWindow::setActivePanel);
        connect(panel, &PanelWidget::switchPanelRequested, this, [this] {
            setActivePanel(otherPanel());
            m_active->focusView();
        });
        connect(panel, &PanelWidget::openFileRequested, this, &MainWindow::openEntry);
        connect(panel, &PanelWidget::contextMenuRequested, this,
                [this, panel](const QPoint& pos) { showContextMenu(panel, pos); });
    }

    m_transferDock = new TransferDock(m_transfers, this);
    addDockWidget(Qt::BottomDockWidgetArea, m_transferDock);
    m_transferDock->hide();
    connect(m_transferDock, &TransferDock::settingsRequested, this, &MainWindow::transferSettings);
    connect(m_transfers, &TransferQueue::jobFinished, this, &MainWindow::onTransferFinished);
    connect(m_transfers, &TransferQueue::conflictRequested, this, &MainWindow::onConflictRequested);

    createActions();
    createMenus();
    layout->addWidget(createFunctionKeyBar());

    connect(m_remote, &RemoteFiles::uploaded, this, [this](const Location& location) {
        statusBar()->showMessage(tr("Uploaded %1").arg(location.displayString()), 4000);
        for (PanelWidget* p : {m_left, m_right}) {
            if (p->location() == location.parent())
                p->refresh();
        }
    });

    setActivePanel(m_left);
    restoreWindowState();
    m_active->focusView();
}

MainWindow::~MainWindow() = default;

// ---------------------------------------------------------------------------
// Actions, menus, function-key bar
// ---------------------------------------------------------------------------

QAction* MainWindow::addAction(const QString& name, const QString& text, const QList<QKeySequence>& shortcuts,
                               void (MainWindow::*slot)())
{
    auto* a = new QAction(text, this);
    a->setObjectName(name);
    a->setShortcuts(shortcuts);
    a->setShortcutContext(Qt::WindowShortcut);
    connect(a, &QAction::triggered, this, slot);
    QMainWindow::addAction(a);
    m_actions.insert(name, a);
    m_actionOrder.push_back(a);
    return a;
}

void MainWindow::createActions()
{
    using K = QKeySequence;
    addAction(QStringLiteral("view"), tr("&View"), {K(Qt::Key_F3)}, &MainWindow::viewCurrent);
    addAction(QStringLiteral("edit"), tr("&Edit"), {K(Qt::Key_F4)}, &MainWindow::editCurrent);
    addAction(QStringLiteral("copy"), tr("&Copy…"), {K(Qt::Key_F5)}, &MainWindow::copySelection);
    addAction(QStringLiteral("move"), tr("&Move…"), {K(Qt::Key_F6)}, &MainWindow::moveSelection);
    addAction(QStringLiteral("rename"), tr("&Rename…"), {K(Qt::SHIFT | Qt::Key_F6), K(Qt::Key_F2)},
              &MainWindow::renameCurrent);
    addAction(QStringLiteral("mkdir"), tr("New &Folder…"), {K(Qt::Key_F7)}, &MainWindow::makeDirectory);
    addAction(QStringLiteral("delete"), tr("&Delete…"), {K(Qt::Key_F8), K(Qt::Key_Delete)},
              &MainWindow::deleteSelection);
    addAction(QStringLiteral("quit"), tr("&Quit"), {K(Qt::Key_F10), K(Qt::CTRL | Qt::Key_Q)},
              &MainWindow::quit);
    addAction(QStringLiteral("copyLocation"), tr("Copy &Location"), {K(Qt::CTRL | Qt::SHIFT | Qt::Key_C)},
              &MainWindow::copyLocation);
    addAction(QStringLiteral("copyS3Uri"), tr("Copy S3 &URI"), {}, &MainWindow::copyS3Uri);
    addAction(QStringLiteral("copyUrl"), tr("Copy &HTTP URL"), {}, &MainWindow::copyObjectUrl);
    addAction(QStringLiteral("copyArn"), tr("Copy &ARN"), {}, &MainWindow::copyArn);
    addAction(QStringLiteral("properties"), tr("&Properties"),
              {K(Qt::ALT | Qt::Key_Return), K(Qt::ALT | Qt::Key_Enter)}, &MainWindow::showProperties);
    addAction(QStringLiteral("editObjects"), tr("Edit &Metadata, Tags, Storage…"), {K(Qt::CTRL | Qt::Key_E)},
              &MainWindow::editObjects);
    addAction(QStringLiteral("shareLink"), tr("&Share Link (Presigned URL)…"),
              {K(Qt::CTRL | Qt::SHIFT | Qt::Key_L)}, &MainWindow::shareLink);
    QAction* versions = addAction(QStringLiteral("showVersions"), tr("Show &Versions"),
                                  {K(Qt::CTRL | Qt::SHIFT | Qt::Key_V)}, &MainWindow::toggleVersions);
    versions->setCheckable(true);
    addAction(QStringLiteral("browseAsOf"), tr("Browse &As Of…"), {K(Qt::CTRL | Qt::SHIFT | Qt::Key_T)},
              &MainWindow::browseAsOf);
    addAction(QStringLiteral("versionHistory"), tr("Version &History…"),
              {K(Qt::CTRL | Qt::SHIFT | Qt::Key_H)}, &MainWindow::versionHistory);
    addAction(QStringLiteral("restoreArchive"), tr("&Restore from Archive…"), {},
              &MainWindow::restoreArchive);
    addAction(QStringLiteral("incompleteUploads"), tr("&Incomplete Multipart Uploads…"), {},
              &MainWindow::incompleteUploads);
    addAction(QStringLiteral("newBucket"), tr("New &Bucket…"), {K(Qt::CTRL | Qt::SHIFT | Qt::Key_N)},
              &MainWindow::createBucket);
    addAction(QStringLiteral("bucketProperties"), tr("B&ucket Properties…"),
              {K(Qt::CTRL | Qt::SHIFT | Qt::Key_B)}, &MainWindow::bucketProperties);

    addAction(QStringLiteral("selectAll"), tr("Select &All"), {K(Qt::CTRL | Qt::Key_A)},
              &MainWindow::selectAll);
    addAction(QStringLiteral("deselectAll"), tr("&Deselect All"), {K(Qt::CTRL | Qt::SHIFT | Qt::Key_A)},
              &MainWindow::deselectAll);
    addAction(QStringLiteral("invertSelection"), tr("&Invert Selection"), {K(Qt::CTRL | Qt::Key_I)},
              &MainWindow::invertSelection);
    addAction(QStringLiteral("quickFilter"), tr("Quick &Filter…"), {K(Qt::CTRL | Qt::Key_F)},
              &MainWindow::quickFilter);

    addAction(QStringLiteral("refresh"), tr("&Refresh"), {K(Qt::CTRL | Qt::Key_R)},
              &MainWindow::refreshActive);
    QAction* hidden = addAction(QStringLiteral("showHidden"), tr("Show &Hidden Files"),
                                {K(Qt::CTRL | Qt::Key_H)}, &MainWindow::toggleHidden);
    hidden->setCheckable(true);
    addAction(QStringLiteral("swapPanels"), tr("&Swap Panels"), {K(Qt::CTRL | Qt::Key_U)},
              &MainWindow::swapPanels);
    addAction(QStringLiteral("targetToOther"), tr("Open in &Other Panel"), {K(Qt::CTRL | Qt::Key_Right)},
              &MainWindow::targetToOther);

    addAction(QStringLiteral("back"), tr("&Back"), {K(Qt::ALT | Qt::Key_Left)}, &MainWindow::goBack);
    addAction(QStringLiteral("forward"), tr("&Forward"), {K(Qt::ALT | Qt::Key_Right)},
              &MainWindow::goForward);
    addAction(QStringLiteral("home"), tr("&Home"), {K(Qt::ALT | Qt::Key_Home)}, &MainWindow::goHome);
    addAction(QStringLiteral("root"), tr("&Root"), {K(Qt::CTRL | Qt::Key_Backslash)}, &MainWindow::goRoot);
    addAction(QStringLiteral("address"), tr("Edit &Address"), {K(Qt::CTRL | Qt::Key_L)},
              &MainWindow::editAddress);
    addAction(QStringLiteral("leftPlaces"), tr("&Left Panel Places…"), {K(Qt::ALT | Qt::Key_F1)},
              &MainWindow::leftPlaces);
    addAction(QStringLiteral("rightPlaces"), tr("R&ight Panel Places…"), {K(Qt::ALT | Qt::Key_F2)},
              &MainWindow::rightPlaces);

    addAction(QStringLiteral("connections"), tr("&Manage Connections…"), {K(Qt::CTRL | Qt::Key_K)},
              &MainWindow::manageConnections);

    QAction* dockToggle = m_transferDock->toggleViewAction();
    dockToggle->setObjectName(QStringLiteral("showTransfers"));
    dockToggle->setText(tr("Show &Transfers"));
    dockToggle->setShortcut(K(Qt::CTRL | Qt::Key_J));
    QMainWindow::addAction(dockToggle);
    m_actions.insert(QStringLiteral("showTransfers"), dockToggle);
    m_actionOrder.push_back(dockToggle);
    addAction(QStringLiteral("pauseAllTransfers"), tr("&Pause All"), {}, &MainWindow::pauseAllTransfers);
    addAction(QStringLiteral("resumeAllTransfers"), tr("&Resume All"), {}, &MainWindow::resumeAllTransfers);
    addAction(QStringLiteral("clearFinishedTransfers"), tr("&Clear Finished"), {},
              &MainWindow::clearFinishedTransfers);
    addAction(QStringLiteral("transferSettings"), tr("Transfer &Settings…"), {},
              &MainWindow::transferSettings);

    addAction(QStringLiteral("shortcuts"), tr("&Keyboard Shortcuts"), {K(Qt::Key_F1)},
              &MainWindow::showShortcuts);
    addAction(QStringLiteral("about"), tr("&About"), {}, &MainWindow::showAbout);
}

void MainWindow::createMenus()
{
    auto add = [this](QMenu* menu, const QStringList& names) {
        for (const QString& n : names) {
            if (n.isEmpty())
                menu->addSeparator();
            else
                menu->addAction(m_actions.value(n));
        }
    };
    add(menuBar()->addMenu(tr("&File")), {QStringLiteral("view"),
                                          QStringLiteral("edit"),
                                          {},
                                          QStringLiteral("copy"),
                                          QStringLiteral("move"),
                                          QStringLiteral("rename"),
                                          QStringLiteral("mkdir"),
                                          QStringLiteral("delete"),
                                          {},
                                          QStringLiteral("copyLocation"),
                                          QStringLiteral("copyS3Uri"),
                                          QStringLiteral("copyUrl"),
                                          QStringLiteral("copyArn"),
                                          QStringLiteral("shareLink"),
                                          {},
                                          QStringLiteral("editObjects"),
                                          QStringLiteral("properties"),
                                          {},
                                          QStringLiteral("quit")});
    add(menuBar()->addMenu(tr("&Select")), {QStringLiteral("selectAll"),
                                            QStringLiteral("deselectAll"),
                                            QStringLiteral("invertSelection"),
                                            {},
                                            QStringLiteral("quickFilter")});
    add(menuBar()->addMenu(tr("&View")), {QStringLiteral("refresh"),
                                          QStringLiteral("showHidden"),
                                          {},
                                          QStringLiteral("swapPanels"),
                                          QStringLiteral("targetToOther")});
    add(menuBar()->addMenu(tr("&Go")), {QStringLiteral("back"),
                                        QStringLiteral("forward"),
                                        QStringLiteral("home"),
                                        QStringLiteral("root"),
                                        {},
                                        QStringLiteral("address"),
                                        QStringLiteral("leftPlaces"),
                                        QStringLiteral("rightPlaces")});
    add(menuBar()->addMenu(tr("&Transfers")), {QStringLiteral("showTransfers"),
                                               {},
                                               QStringLiteral("pauseAllTransfers"),
                                               QStringLiteral("resumeAllTransfers"),
                                               QStringLiteral("clearFinishedTransfers"),
                                               {},
                                               QStringLiteral("transferSettings")});
    add(menuBar()->addMenu(tr("S&3")), {QStringLiteral("editObjects"),
                                        QStringLiteral("shareLink"),
                                        {},
                                        QStringLiteral("showVersions"),
                                        QStringLiteral("browseAsOf"),
                                        QStringLiteral("versionHistory"),
                                        {},
                                        QStringLiteral("restoreArchive"),
                                        QStringLiteral("incompleteUploads"),
                                        {},
                                        QStringLiteral("newBucket"),
                                        QStringLiteral("bucketProperties")});
    QMenu* connectionsMenu = menuBar()->addMenu(tr("&Connections"));
    connect(connectionsMenu, &QMenu::aboutToShow, this,
            [this, connectionsMenu] { populateConnectionsMenu(connectionsMenu); });
    populateConnectionsMenu(connectionsMenu);
    add(menuBar()->addMenu(tr("&Help")), {QStringLiteral("shortcuts"), QStringLiteral("about")});
}

QWidget* MainWindow::createFunctionKeyBar()
{
    auto* bar = new QWidget(this);
    bar->setObjectName(QStringLiteral("functionKeyBar"));
    auto* layout = new QHBoxLayout(bar);
    layout->setContentsMargins(0, 0, 0, 4);
    layout->setSpacing(2);
    const QList<QPair<QString, QString>> keys = {
        {QStringLiteral("F3"), QStringLiteral("view")},  {QStringLiteral("F4"), QStringLiteral("edit")},
        {QStringLiteral("F5"), QStringLiteral("copy")},  {QStringLiteral("F6"), QStringLiteral("move")},
        {QStringLiteral("F7"), QStringLiteral("mkdir")}, {QStringLiteral("F8"), QStringLiteral("delete")},
        {QStringLiteral("F10"), QStringLiteral("quit")},
    };
    for (const auto& [key, name] : keys) {
        QAction* a = m_actions.value(name);
        QString label = a->text();
        label.remove(u'&');
        label.remove(QStringLiteral("…"));
        auto* button = new QPushButton(QStringLiteral("%1 %2").arg(key, label), bar);
        button->setFocusPolicy(Qt::NoFocus);
        button->setFlat(true);
        connect(button, &QPushButton::clicked, a, &QAction::trigger);
        layout->addWidget(button, 1);
    }
    return bar;
}

void MainWindow::buildPlacesMenu(QMenu* menu, PanelWidget* panel)
{
    auto go = [panel](const Location& l) { return [panel, l] { panel->setLocation(l); }; };
    const QString home = QDir::homePath();
    menu->addAction(QIcon::fromTheme(QStringLiteral("user-home")), tr("Home"), panel,
                    go(Location::local(home)));
#ifdef Q_OS_WIN
    for (const QFileInfo& drive : QDir::drives()) {
        const QString path = drive.absolutePath();
        QStorageInfo storage(path);
        QString label = QDir::toNativeSeparators(path);
        if (storage.isValid() && !storage.displayName().isEmpty() && storage.displayName() != path)
            label += QStringLiteral("  ") + storage.displayName();
        menu->addAction(QIcon::fromTheme(QStringLiteral("drive-harddisk")), label, panel,
                        go(Location::local(path)));
    }
#else
    menu->addAction(QIcon::fromTheme(QStringLiteral("drive-harddisk")), tr("Root (/)"), panel,
                    go(Location::local(QStringLiteral("/"))));
    for (const QStorageInfo& storage : QStorageInfo::mountedVolumes()) {
        const QString root = storage.rootPath();
        if (!storage.isValid() || !storage.isReady() || root == u"/")
            continue;
        if (!(root.startsWith(QStringLiteral("/run/media/")) || root.startsWith(QStringLiteral("/media/")) ||
              root.startsWith(QStringLiteral("/mnt/"))))
            continue;
        menu->addAction(QIcon::fromTheme(QStringLiteral("drive-removable-media")),
                        QStringLiteral("%1  (%2)").arg(storage.displayName(), root), panel,
                        go(Location::local(root)));
    }
#endif
    if (m_connections) {
        menu->addSection(tr("S3 Connections"));
        for (const ConnectionProfile& p : m_connections->profiles())
            menu->addAction(QIcon(QStringLiteral(":/icons/cloud.svg")), p.name, panel,
                            go(Location::s3(p.id)));
        menu->addAction(tr("All Connections"), panel, go(Location::s3Root()));
        menu->addAction(m_actions.value(QStringLiteral("connections")));
    }
    menu->addSeparator();
    PanelWidget* other = panel == m_left ? m_right : m_left;
    menu->addAction(tr("Same as Other Panel"), panel, go(other->location()));
}

// ---------------------------------------------------------------------------
// Panels
// ---------------------------------------------------------------------------

void MainWindow::setActivePanel(PanelWidget* panel)
{
    if (!panel || panel == m_active)
        return;
    m_active = panel;
    m_left->setActive(panel == m_left);
    m_right->setActive(panel == m_right);
    if (QAction* versions = m_actions.value(QStringLiteral("showVersions")))
        versions->setChecked(panel->listOptions().versions);
}

void MainWindow::refreshActive()
{
    m_active->refresh();
}

void MainWindow::toggleHidden()
{
    const bool show = m_actions.value(QStringLiteral("showHidden"))->isChecked();
    m_left->setShowHidden(show);
    m_right->setShowHidden(show);
}

void MainWindow::swapPanels()
{
    const Location l = m_left->location();
    const Location r = m_right->location();
    m_left->setLocation(r);
    m_right->setLocation(l);
}

void MainWindow::targetToOther()
{
    // Open the current directory entry (or this panel's location) in the other panel.
    const auto current = m_active->currentEntry();
    if (current && current->isDirectory())
        otherPanel()->setLocation(current->location);
    else
        otherPanel()->setLocation(m_active->location());
}

void MainWindow::selectAll()
{
    m_active->selectAll();
}
void MainWindow::deselectAll()
{
    m_active->deselectAll();
}
void MainWindow::invertSelection()
{
    m_active->invertSelection();
}
void MainWindow::goBack()
{
    m_active->goBack();
}
void MainWindow::goForward()
{
    m_active->goForward();
}
void MainWindow::goHome()
{
    m_active->goHome();
}
void MainWindow::editAddress()
{
    m_active->editAddress();
}
void MainWindow::quickFilter()
{
    m_active->showQuickFilter();
}

void MainWindow::goRoot()
{
    const Location here = m_active->location();
    Location root = here;
    if (here.isS3() && !here.bucket().isEmpty())
        root = Location::s3(here.connectionId(), here.bucket()); // bucket root
    else
        while (root.parent().isValid() && !(root.isLocal() && root.isDirectoryLike()))
            root = root.parent();
    m_active->setLocation(root);
}

void MainWindow::leftPlaces()
{
    setActivePanel(m_left);
    m_left->focusView();
    m_left->showPlacesMenu();
}

void MainWindow::rightPlaces()
{
    setActivePanel(m_right);
    m_right->focusView();
    m_right->showPlacesMenu();
}

void MainWindow::copyLocation()
{
    const EntryList entries = m_active->targetEntries();
    QStringList lines;
    for (const Entry& e : entries)
        lines.push_back(e.location.displayString());
    if (lines.isEmpty())
        lines.push_back(m_active->location().displayString());
    QApplication::clipboard()->setText(lines.join(u'\n'));
    statusBar()->showMessage(tr("Copied %n location(s) to the clipboard", nullptr, int(lines.size())), 3000);
}

// ---------------------------------------------------------------------------
// File operations
// ---------------------------------------------------------------------------

Location MainWindow::resolveTarget(const QString& text, const Location& base, bool* isDirectory)
{
    const QString trimmed = text.trimmed();
    const bool trailing = trimmed.endsWith(u'/') || trimmed.endsWith(u'\\');
    if (isDirectory)
        *isDirectory = trailing;
    Location target = Location::fromString(trimmed);
    if (target.isValid())
        return target;
    // Relative to the source directory.
    target = base;
    const QStringList parts = QDir::fromNativeSeparators(trimmed).split(u'/', Qt::SkipEmptyParts);
    for (qsizetype i = 0; i < parts.size(); ++i) {
        const QString& part = parts[i];
        if (part == u".")
            continue;
        const bool last = i == parts.size() - 1;
        target = part == u".." ? target.parent() : target.child(part, !last || trailing);
        if (!target.isValid())
            return {};
    }
    return target;
}

TransferJob* MainWindow::startTransfer(const TransferRequest& request)
{
    TransferJob* job = m_transfers->enqueue(request);
    if (request.kind != TransferKind::Delete || request.sources.size() > 1)
        m_transferDock->show();
    statusBar()->showMessage(tr("Queued: %1").arg(job->title()), 3000);
    return job;
}

int MainWindow::restoreTransfers()
{
    const int n = m_transfers->restore();
    if (n > 0) {
        m_transferDock->show();
        statusBar()->showMessage(
            m_transfers->settings().resumeOnStartup
                ? tr("Resuming %n interrupted transfer(s)", nullptr, n)
                : tr("%n interrupted transfer(s) restored; resume them in the Transfers panel", nullptr, n),
            8000);
    }
    return n;
}

void MainWindow::onTransferFinished(TransferJob* job)
{
    m_left->refresh();
    m_right->refresh();
    const QList<TransferFailure> failures = job->failures();
    switch (job->state()) {
    case JobState::Done:
        statusBar()->showMessage(tr("Done: %1").arg(job->title()), 5000);
        break;
    case JobState::Failed:
        statusBar()->showMessage(tr("%1: %n error(s)", nullptr, int(failures.size())).arg(job->title()),
                                 8000);
        m_transferDock->show();
        break;
    case JobState::Cancelled:
        statusBar()->showMessage(tr("Cancelled: %1").arg(job->title()), 4000);
        break;
    default:
        break;
    }
    if (!isActiveWindow() && job->kind() != TransferKind::Delete)
        QApplication::alert(this);
    Q_EMIT transferFinished(job);
}

void MainWindow::onConflictRequested(TransferJob* job, const ConflictInfo& info)
{
    m_pendingConflicts.push_back({QPointer<TransferJob>(job), info});
    if (!m_conflictOpen)
        QTimer::singleShot(0, this, &MainWindow::showNextConflict);
}

void MainWindow::showNextConflict()
{
    if (m_conflictOpen)
        return;
    while (!m_pendingConflicts.isEmpty()) {
        const auto [job, info] = m_pendingConflicts.takeFirst();
        if (!job || !job->isRunning())
            continue;
        m_conflictOpen = true;
        const ConflictAnswer answer = ConflictDialog::ask(info, this);
        m_conflictOpen = false;
        if (job)
            job->answerConflict(answer);
    }
}

void MainWindow::transferSettings()
{
    TransferSettingsDialog dialog(m_transfers->settings(), this);
    if (dialog.exec() != QDialog::Accepted)
        return;
    const TransferSettings s = dialog.settings();
    m_transfers->setSettings(s);
    QSettings settings;
    s.save(settings);
}

void MainWindow::pauseAllTransfers()
{
    m_transfers->pauseAll();
}

void MainWindow::resumeAllTransfers()
{
    m_transfers->resumeAll();
}

void MainWindow::clearFinishedTransfers()
{
    m_transfers->clearFinished();
}

bool MainWindow::checkVersionSelection(const EntryList& items, bool move)
{
    if (!m_active->showsVersions())
        return true;
    QString problem;
    for (const Entry& e : items) {
        if (e.isDeleteMarker)
            problem = tr("Delete markers cannot be copied.");
        else if (move && !e.versionId.isEmpty())
            problem = tr("Versions cannot be moved or renamed; copy them, or use Version History.");
        else if (e.isDirectory() && m_active->listOptions().asOf.isValid())
            problem = tr("Folders would be copied with their current contents. Leave the \"as of\" view to "
                         "copy folders, or select the files.");
    }
    if (problem.isEmpty())
        return true;
    QMessageBox::information(this, tr("Versions View"), problem);
    return false;
}

void MainWindow::copyOrMove(bool move)
{
    const EntryList items = m_active->targetEntries();
    if (items.isEmpty() || !checkVersionSelection(items, move))
        return;
    const Location sourceDir = m_active->location();
    const Location otherDir = otherPanel()->location();

    QString defaultTarget;
    if (otherDir == sourceDir && items.size() == 1) {
        defaultTarget = items.first().name;
    } else {
        defaultTarget = otherDir.displayString();
        if (otherDir.isLocal() && !defaultTarget.endsWith(QDir::separator()))
            defaultTarget += QDir::separator();
    }
    const QString what = items.size() == 1 ? QStringLiteral("\"%1\"").arg(items.first().name)
                                           : tr("%n item(s)", nullptr, int(items.size()));
    QString prompt = (move ? tr("Move %1 to:") : tr("Copy %1 to:")).arg(what);
    if (move && sourceDir.isS3())
        prompt += u'\n' + tr("S3 has no rename: objects are copied, then the originals are deleted.");
    TargetDialog dialog(move ? tr("Move") : tr("Copy"), prompt, defaultTarget, this);
    dialog.setOptions(m_lastOptions);
    if (dialog.exec() != QDialog::Accepted)
        return;
    m_lastOptions = dialog.options();
    bool isDir = false;
    const Location target = resolveTarget(dialog.target(), sourceDir, &isDir);
    if (!target.isValid()) {
        QMessageBox::warning(this, dialog.windowTitle(), tr("Invalid destination: %1").arg(dialog.target()));
        return;
    }
    TransferRequest request;
    request.kind = move ? TransferKind::Move : TransferKind::Copy;
    request.sources = items;
    request.destination = target;
    request.destinationIsDirectory = isDir || items.size() > 1;
    request.options = m_lastOptions;
    startTransfer(request);
}

void MainWindow::renameCurrent()
{
    const auto current = m_active->currentEntry();
    if (!current || !checkVersionSelection({*current}, true))
        return;
    bool ok = false;
    QString name =
        QInputDialog::getText(this, tr("Rename"), tr("New name:"), QLineEdit::Normal, current->name, &ok);
    name = name.trimmed();
    if (!ok || name.isEmpty() || name == current->name)
        return;
    if (name.contains(u'/') || (current->location.isLocal() && name.contains(u'\\'))) {
        QMessageBox::warning(this, tr("Rename"), tr("The name must not contain path separators."));
        return;
    }
    TransferRequest request;
    request.kind = TransferKind::Move;
    request.sources = {*current};
    request.destination = current->location.parent().child(name, current->isDirectory());
    PanelWidget* panel = m_active;
    const Location newLocation = request.destination;
    TransferJob* job = startTransfer(request);
    connect(job, &TransferJob::finished, panel,
            [panel, newLocation] { panel->selectLocationWhenLoaded(newLocation); });
}

void MainWindow::makeDirectory()
{
    const Location dir = m_active->location();
    if (dir.isS3Connection()) {
        createBucket();
        return;
    }
    auto provider = m_registry->providerFor(dir);
    if (!provider || !provider->capabilities(dir).testFlag(Capability::MakeDirectory)) {
        statusBar()->showMessage(tr("Folders cannot be created here"), 4000);
        return;
    }
    bool ok = false;
    const QString name =
        QInputDialog::getText(this, tr("New Folder"), tr("Folder name (use / for nested folders):"),
                              QLineEdit::Normal, QString(), &ok)
            .trimmed();
    if (!ok || name.isEmpty())
        return;
    bool unused = false;
    const Location target = resolveTarget(name + u'/', dir, &unused);
    if (!target.isValid() || !dir.isAncestorOf(target)) {
        QMessageBox::warning(this, tr("New Folder"), tr("Invalid folder name: %1").arg(name));
        return;
    }
    // Select the first new path component once the listing refreshes.
    Location firstLevel = target;
    while (firstLevel.parent().isValid() && firstLevel.parent() != dir &&
           firstLevel.parent().asDirectory() != dir)
        firstLevel = firstLevel.parent();
    PanelWidget* panel = m_active;
    runIo([provider, target] {
        OperationContext ctx;
        return provider->makeDirectory(target, ctx);
    }).then(this, [this, panel, firstLevel](VoidResult result) {
        if (!result) {
            QMessageBox::warning(this, tr("New Folder"), result.error().toString());
            return;
        }
        panel->selectLocationWhenLoaded(firstLevel);
        panel->refresh();
    });
}

void MainWindow::deleteSelection()
{
    const EntryList items = m_active->targetEntries();
    if (items.isEmpty())
        return;
    if (m_active->showsVersions()) {
        EntryList versions;
        for (const Entry& e : items) {
            if (e.isDirectory()) {
                QMessageBox::information(
                    this, tr("Delete"),
                    tr("In the versions view only versions can be deleted. Leave it to delete "
                       "folders."));
                return;
            }
            versions.push_back(e);
        }
        deleteVersions(versions);
        return;
    }
    if (items.first().type == Entry::Type::Bucket) {
        if (items.size() > 1) {
            QMessageBox::information(this, tr("Delete Bucket"), tr("Delete buckets one at a time."));
            return;
        }
        deleteBucket(items.first());
        return;
    }
    auto provider = m_registry->providerFor(items.first().location);
    if (!provider || !provider->capabilities(items.first().location).testFlag(Capability::Remove)) {
        statusBar()->showMessage(tr("These items cannot be deleted here"), 4000);
        return;
    }
    QString question;
    if (items.size() == 1)
        question =
            items.first().isDirectory()
                ? tr("Permanently delete the folder \"%1\" and everything in it?").arg(items.first().name)
                : tr("Permanently delete \"%1\"?").arg(items.first().name);
    else
        question = tr("Permanently delete %n selected item(s)?", nullptr, int(items.size()));
    QMessageBox box(QMessageBox::Warning, tr("Delete"), question, QMessageBox::Yes | QMessageBox::Cancel,
                    this);
    box.setDefaultButton(QMessageBox::Cancel);
    if (items.size() > 1) {
        QStringList names;
        for (const Entry& e : items)
            names.push_back(e.name + (e.isDirectory() ? QStringLiteral("/") : QString()));
        box.setDetailedText(names.join(u'\n'));
    }
    if (box.exec() != QMessageBox::Yes)
        return;
    TransferRequest request;
    request.kind = TransferKind::Delete;
    request.sources = items;
    m_active->deselectAll();
    startTransfer(request);
}

void MainWindow::openEntry(const Entry& entry)
{
    if (entry.location.isLocal()) {
        if (!QDesktopServices::openUrl(QUrl::fromLocalFile(entry.location.localPath())))
            statusBar()->showMessage(tr("No application to open %1").arg(entry.name), 4000);
        return;
    }
    m_remote->fetch(entry, RemoteFiles::Purpose::Open);
}

void MainWindow::viewCurrent()
{
    const auto current = m_active->currentEntry();
    if (!current)
        return;
    if (current->isDirectory()) {
        m_active->setLocation(current->location);
        return;
    }
    if (current->isDeleteMarker) {
        statusBar()->showMessage(tr("A delete marker has no content"), 4000);
        return;
    }
    if (current->location.isLocal()) {
        auto* viewer =
            new ViewerDialog(current->location.localPath(), current->location.displayString(), this);
        viewer->setAttribute(Qt::WA_DeleteOnClose);
        viewer->show();
        return;
    }
    m_remote->fetch(*current, RemoteFiles::Purpose::View);
}

void MainWindow::editCurrent()
{
    const auto current = m_active->currentEntry();
    if (!current || current->isDirectory())
        return;
    if (current->location.isLocal())
        openEntry(*current);
    else
        m_remote->fetch(*current, RemoteFiles::Purpose::Edit);
}

void MainWindow::showProperties()
{
    std::optional<Entry> entry = m_active->currentEntry();
    if (!entry) {
        // Properties of the panel's own location.
        Entry here;
        here.location = m_active->location();
        here.name = here.location.name().isEmpty() ? here.location.displayString() : here.location.name();
        here.type = here.location.isS3Bucket() ? Entry::Type::Bucket : Entry::Type::Directory;
        entry = here;
    }
    if (entry->type == Entry::Type::Bucket && entry->location.isS3Bucket()) {
        bucketProperties();
        return;
    }
    std::optional<ConnectionProfile> profile;
    if (m_connections && entry->location.isS3())
        profile = m_connections->profile(entry->location.connectionId());
    PropertiesDialog dialog(m_registry, *entry, profile, this);
    dialog.setConnectionStore(m_connections);
    connect(&dialog, &PropertiesDialog::objectChanged, this, [this](const Location& changed) {
        for (PanelWidget* p : {m_left, m_right}) {
            if (p->location().isAncestorOf(changed))
                p->refresh();
        }
    });
    dialog.exec();
}

void MainWindow::editObjects()
{
    const EntryList items = m_active->targetEntries();
    const Location here = m_active->location();
    auto service = S3ObjectService::forLocation(*m_registry, here);
    if (items.isEmpty() || !service || here.bucket().isEmpty()) {
        statusBar()->showMessage(tr("Select S3 objects or folders to edit"), 4000);
        return;
    }
    const QString what = items.size() == 1 ? QStringLiteral("\"%1\"").arg(items.first().name)
                                           : tr("%n selected item(s)", nullptr, int(items.size()));
    ObjectEditDialog dialog(what, this);
    if (dialog.exec() != QDialog::Accepted)
        return;
    const BulkObjectChange change = dialog.change();

    auto* progress = new QProgressDialog(tr("Updating objects…"), tr("Cancel"), 0, 0, this);
    progress->setWindowModality(Qt::WindowModal);
    progress->setMinimumDuration(300);
    auto ctx = std::make_shared<OperationContext>();
    QPointer<QProgressDialog> guard(progress);
    ctx->setProgressHandler([guard](qint64 done, qint64 total) {
        QMetaObject::invokeMethod(
            guard.data(),
            [guard, done, total] {
                if (!guard)
                    return;
                guard->setMaximum(int(total));
                guard->setValue(int(done));
            },
            Qt::QueuedConnection);
    });
    connect(progress, &QProgressDialog::canceled, this, [ctx] { ctx->cancel(); });
    runIo([service, items, change, ctx] {
        return service->applyBulk(items, change, *ctx);
    }).then(this, [this, progress, ctx](S3ObjectService::BulkReport report) {
        progress->reset();
        progress->deleteLater();
        m_active->refresh();
        if (report.failures.isEmpty()) {
            statusBar()->showMessage(ctx->isCancelled()
                                         ? tr("Cancelled after %n object(s)", nullptr, report.done)
                                         : tr("Updated %n object(s)", nullptr, report.done),
                                     5000);
            return;
        }
        QStringList lines;
        for (const auto& [item, error] : report.failures)
            lines.push_back(item + QStringLiteral(": ") + error.toString());
        QMessageBox box(QMessageBox::Warning, tr("Edit Objects"),
                        tr("%1 of %2 object(s) updated; %3 failed.")
                            .arg(report.done)
                            .arg(report.objects)
                            .arg(report.failures.size()),
                        QMessageBox::Close, this);
        box.setDetailedText(lines.join(u'\n'));
        box.exec();
    });
}

void MainWindow::toggleVersions()
{
    const Location here = m_active->location();
    QAction* action = m_actions.value(QStringLiteral("showVersions"));
    const bool on = action->isChecked();
    if (on && (!here.isS3() || here.bucket().isEmpty())) {
        action->setChecked(false);
        statusBar()->showMessage(tr("Versions can be shown inside S3 buckets"), 4000);
        return;
    }
    ListOptions options;
    options.versions = on;
    m_active->setListOptions(options);
    if (!on)
        return;
    auto service = S3VersionService::forLocation(*m_registry, here);
    if (!service)
        return;
    const QString bucket = here.bucket();
    runIo([service, bucket] {
        return service->versioningStatus(bucket);
    }).then(this, [this, bucket](Result<QString> status) {
        if (status && status.value().isEmpty())
            statusBar()->showMessage(
                tr("Versioning has never been enabled on %1: each object has one version").arg(bucket), 6000);
        else if (status && status.value() == u"Suspended")
            statusBar()->showMessage(tr("Versioning is suspended on %1").arg(bucket), 6000);
    });
}

void MainWindow::browseAsOf()
{
    const Location here = m_active->location();
    if (!here.isS3() || here.bucket().isEmpty()) {
        statusBar()->showMessage(tr("Point-in-time browsing works inside S3 buckets"), 4000);
        return;
    }
    QDialog dialog(this);
    dialog.setWindowTitle(tr("Browse As Of"));
    auto* layout = new QVBoxLayout(&dialog);
    auto* intro = new QLabel(tr("Show this bucket as it was at a point in time, rebuilt from its version "
                                "history (versioned buckets only)."),
                             &dialog);
    intro->setWordWrap(true);
    layout->addWidget(intro);
    auto* form = new QFormLayout;
    auto* when = new QDateTimeEdit(&dialog);
    when->setCalendarPopup(true);
    when->setDisplayFormat(QStringLiteral("yyyy-MM-dd HH:mm:ss"));
    const QDateTime current = m_active->listOptions().asOf;
    when->setDateTime(current.isValid() ? current.toLocalTime() : QDateTime::currentDateTime().addDays(-1));
    form->addRow(tr("Date and time:"), when);
    layout->addLayout(form);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, &dialog);
    QPushButton* now = buttons->addButton(tr("Back to Current"), QDialogButtonBox::ResetRole);
    bool reset = false;
    connect(now, &QPushButton::clicked, &dialog, [&] {
        reset = true;
        dialog.accept();
    });
    connect(buttons, &QDialogButtonBox::accepted, &dialog, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, &dialog, &QDialog::reject);
    layout->addWidget(buttons);
    if (dialog.exec() != QDialog::Accepted)
        return;
    ListOptions options;
    if (!reset)
        options.asOf = when->dateTime().toUTC();
    m_active->setListOptions(options);
    m_actions.value(QStringLiteral("showVersions"))->setChecked(false);
}

void MainWindow::versionHistory()
{
    const auto current = m_active->currentEntry();
    if (!current || current->isDirectory() || !current->location.isS3()) {
        statusBar()->showMessage(tr("Select an S3 object"), 4000);
        return;
    }
    auto service = S3VersionService::forLocation(*m_registry, current->location);
    if (!service)
        return;
    VersionHistoryDialog dialog(service, current->location, this);
    dialog.setViewer([this](const Entry& version) { m_remote->fetch(version, RemoteFiles::Purpose::View); });
    connect(&dialog, &VersionHistoryDialog::objectChanged, this, [this] {
        m_left->refresh();
        m_right->refresh();
    });
    dialog.exec();
}

void MainWindow::deleteVersions(const EntryList& versions)
{
    auto service = S3VersionService::forLocation(*m_registry, versions.first().location);
    if (!service)
        return;
    QMessageBox box(
        QMessageBox::Warning, tr("Delete Versions"),
        tr("Permanently delete %n version(s)? This cannot be undone.", nullptr, int(versions.size())),
        QMessageBox::Yes | QMessageBox::Cancel, this);
    box.setDefaultButton(QMessageBox::Cancel);
    if (box.exec() != QMessageBox::Yes)
        return;
    m_active->deselectAll();
    PanelWidget* panel = m_active;
    const int n = int(versions.size());
    runIo([service, versions] {
        OperationContext ctx;
        return service->deleteVersions(versions, false, ctx);
    }).then(this, [this, panel, n](VoidResult r) {
        panel->refresh();
        if (!r)
            QMessageBox::warning(this, tr("Delete Versions"), r.error().toString());
        else
            statusBar()->showMessage(tr("Deleted %n version(s)", nullptr, n), 4000);
    });
}

void MainWindow::restoreArchive()
{
    const EntryList items = m_active->targetEntries();
    const Location here = m_active->location();
    auto service = S3VersionService::forLocation(*m_registry, here);
    if (items.isEmpty() || !service || here.bucket().isEmpty()) {
        statusBar()->showMessage(tr("Select archived S3 objects or folders"), 4000);
        return;
    }
    const QString what = items.size() == 1 ? QStringLiteral("\"%1\"").arg(items.first().name)
                                           : tr("%n selected item(s)", nullptr, int(items.size()));
    auto ask = [this, service, items, what](const QString& status) {
        RestoreArchiveDialog dialog(what, status, this);
        if (dialog.exec() != QDialog::Accepted)
            return;
        const int days = dialog.days();
        const QString tier = dialog.tier();
        statusBar()->showMessage(tr("Requesting restores…"));
        runIo([service, items, days, tier] {
            OperationContext ctx;
            return service->restoreAll(items, days, tier, ctx);
        }).then(this, [this](S3VersionService::RestoreReport report) {
            QString text = tr("Restore requested for %n object(s)", nullptr, report.requested);
            if (report.alreadyAvailable > 0)
                text += QStringLiteral("; ") + tr("%n not archived, already restored or in progress", nullptr,
                                                  report.alreadyAvailable);
            if (report.failures.isEmpty()) {
                statusBar()->showMessage(text, 8000);
                return;
            }
            QStringList lines;
            for (const auto& [item, error] : report.failures)
                lines.push_back(item + QStringLiteral(": ") + error.toString());
            QMessageBox box(QMessageBox::Warning, tr("Restore from Archive"),
                            text + u'\n' + tr("%n failed.", nullptr, int(report.failures.size())),
                            QMessageBox::Close, this);
            box.setDetailedText(lines.join(u'\n'));
            box.exec();
        });
    };
    auto s3 = std::dynamic_pointer_cast<S3Provider>(m_registry->providerFor(here));
    if (items.size() != 1 || items.first().isDirectory() || !s3) {
        ask({});
        return;
    }
    // One object: show its archive state first (fetched off the GUI thread).
    const Location object = items.first().location;
    runIo([s3, object] { return s3->headObject(object); }).then(this, [ask](Result<Entry> head) {
        ask(head ? RestoreStatus::fromEntry(head.value()).describe() : QString());
    });
}

void MainWindow::incompleteUploads()
{
    const Location here = m_active->location();
    auto service = S3VersionService::forLocation(*m_registry, here);
    if (!service || here.bucket().isEmpty()) {
        statusBar()->showMessage(tr("Open an S3 bucket first"), 4000);
        return;
    }
    MultipartUploadsDialog dialog(service, here.bucket(), here.asDirectory().key(), this);
    dialog.exec();
}

void MainWindow::createBucket()
{
    const Location here = m_active->location();
    if (!here.isS3() || here.connectionId().isEmpty()) {
        statusBar()->showMessage(tr("Open an S3 connection first"), 4000);
        return;
    }
    const QString connection = here.connectionId();
    auto service = S3BucketService::forLocation(*m_registry, Location::s3(connection));
    if (!service)
        return;
    CreateBucketDialog dialog(service->isAws(), service->provider().session().profile().region, this);
    if (dialog.exec() != QDialog::Accepted)
        return;
    const NewBucket spec = dialog.spec();
    statusBar()->showMessage(tr("Creating bucket %1…").arg(spec.name));
    runIo([service, spec] {
        return service->createBucket(spec);
    }).then(this, [this, spec, connection](VoidResult result) {
        if (!result) {
            statusBar()->clearMessage();
            QMessageBox::warning(this, tr("New Bucket"),
                                 tr("Could not create %1: %2").arg(spec.name, result.error().toString()));
            return;
        }
        statusBar()->showMessage(tr("Created bucket %1").arg(spec.name), 5000);
        if (m_active->location() == Location::s3(connection))
            m_active->selectLocationWhenLoaded(Location::s3(connection, spec.name));
        bucketListChanged(connection);
    });
}

void MainWindow::bucketProperties()
{
    Location bucket;
    if (const auto current = m_active->currentEntry(); current && current->type == Entry::Type::Bucket)
        bucket = current->location;
    else if (m_active->location().isS3() && !m_active->location().bucket().isEmpty())
        bucket = Location::s3(m_active->location().connectionId(), m_active->location().bucket());
    auto service = bucket.isValid() ? S3BucketService::forLocation(*m_registry, bucket) : nullptr;
    if (!service) {
        statusBar()->showMessage(tr("Select a bucket or open one"), 4000);
        return;
    }
    BucketPropertiesDialog dialog(service, bucket.bucket(), this);
    connect(&dialog, &BucketPropertiesDialog::bucketChanged, this, [this, bucket] {
        for (PanelWidget* p : {m_left, m_right}) {
            if (bucket.isAncestorOf(p->location()) || p->location() == bucket)
                p->refresh();
        }
    });
    dialog.exec();
}

void MainWindow::deleteBucket(const Entry& entry)
{
    const Location bucket = entry.location;
    auto service = S3BucketService::forLocation(*m_registry, bucket);
    if (!service)
        return;
    const QString name = bucket.bucket();
    const QString connection = bucket.connectionId();
    statusBar()->showMessage(tr("Checking the contents of %1…").arg(name));
    runIo([service, name] {
        return service->contents(name);
    }).then(this, [this, service, name, connection](Result<S3BucketService::Contents> contents) {
        statusBar()->clearMessage();
        if (!contents) {
            QMessageBox::warning(this, tr("Delete Bucket"), contents.error().toString());
            return;
        }
        DeleteBucketDialog dialog(name, contents.value(), this);
        if (dialog.exec() != QDialog::Accepted)
            return;
        const bool emptyFirst = dialog.emptyFirst();
        const bool bypass = dialog.bypassGovernance();

        auto* progress =
            new QProgressDialog(tr("Deleting the contents of %1…").arg(name), tr("Cancel"), 0, 0, this);
        progress->setWindowModality(Qt::WindowModal);
        progress->setMinimumDuration(300);
        auto ctx = std::make_shared<OperationContext>();
        QPointer<QProgressDialog> guard(progress);
        ctx->setProgressHandler([guard](qint64 done, qint64) {
            QMetaObject::invokeMethod(
                guard.data(),
                [guard, done] {
                    if (guard)
                        guard->setLabelText(tr("Deleted %L1 item(s)…").arg(done));
                },
                Qt::QueuedConnection);
        });
        connect(progress, &QProgressDialog::canceled, this, [ctx] { ctx->cancel(); });
        struct Outcome
        {
            S3BucketService::EmptyReport report;
            VoidResult deleted;
        };
        runIo([service, name, emptyFirst, bypass, ctx] {
            Outcome out;
            if (emptyFirst) {
                out.report = service->emptyBucket(name, bypass, *ctx);
                if (!out.report.ok()) {
                    out.deleted =
                        out.report.error ? *out.report.error : Error::make(ErrorCode::NotEmpty, QString());
                    return out;
                }
            }
            out.deleted = service->deleteBucket(name);
            return out;
        }).then(this, [this, progress, name, connection](Outcome out) {
            progress->reset();
            progress->deleteLater();
            if (out.deleted) {
                statusBar()->showMessage(tr("Deleted bucket %1").arg(name), 5000);
                bucketListChanged(connection, name);
                return;
            }
            bucketListChanged(connection);
            if (out.deleted.error().isCancelled()) {
                statusBar()->showMessage(
                    tr("Cancelled; %n item(s) were deleted already", nullptr, int(out.report.deleted)), 6000);
                return;
            }
            QString text = tr("Could not delete the bucket %1.").arg(name);
            if (out.report.deleted > 0 || out.report.uploadsAborted > 0)
                text += u'\n' + tr("%1 item(s) deleted and %2 upload(s) aborted before the error.")
                                    .arg(out.report.deleted)
                                    .arg(out.report.uploadsAborted);
            if (!out.report.failures.isEmpty())
                text += u'\n' + tr("%n item(s) could not be deleted (retention, legal hold or permissions).",
                                   nullptr, int(out.report.failures.size()));
            else if (!out.deleted.error().message.isEmpty())
                text += u'\n' + out.deleted.error().toString();
            QMessageBox box(QMessageBox::Warning, tr("Delete Bucket"), text, QMessageBox::Close, this);
            if (!out.report.failures.isEmpty())
                box.setDetailedText(out.report.failures.mid(0, 200).join(u'\n'));
            box.exec();
        });
    });
}

void MainWindow::bucketListChanged(const QString& connectionId, const QString& removedBucket)
{
    const Location list = Location::s3(connectionId);
    for (PanelWidget* p : {m_left, m_right}) {
        const Location here = p->location();
        if (!removedBucket.isEmpty() && here.isS3() && here.connectionId() == connectionId &&
            here.bucket() == removedBucket)
            p->setLocation(list);
        else if (here == list)
            p->refresh();
    }
}

void MainWindow::shareLink()
{
    const auto current = m_active->currentEntry();
    if (!current || current->isDirectory() || !current->location.isS3()) {
        statusBar()->showMessage(tr("Select an S3 object to share"), 4000);
        return;
    }
    auto service = S3ObjectService::forLocation(*m_registry, current->location);
    if (!service)
        return;
    PresignDialog dialog(service, current->location, this);
    dialog.exec();
}

void MainWindow::showContextMenu(PanelWidget* panel, const QPoint& globalPos)
{
    setActivePanel(panel);
    const auto current = panel->currentEntry();
    const bool s3 = panel->location().isS3() && !panel->location().bucket().isEmpty();
    QMenu menu(this);
    if (current) {
        menu.addAction(current->isDirectory() ? tr("Open") : tr("Open with Default Application"), this,
                       [this, panel] {
                           if (auto c = panel->currentEntry()) {
                               if (c->isDirectory())
                                   panel->setLocation(c->location);
                               else
                                   openEntry(*c);
                           }
                       });
        if (!current->isDirectory()) {
            menu.addAction(m_actions.value(QStringLiteral("view")));
            menu.addAction(m_actions.value(QStringLiteral("edit")));
        }
        menu.addSeparator();
        menu.addAction(m_actions.value(QStringLiteral("copy")));
        menu.addAction(m_actions.value(QStringLiteral("move")));
        menu.addAction(m_actions.value(QStringLiteral("rename")));
        menu.addAction(m_actions.value(QStringLiteral("delete")));
    }
    menu.addSeparator();
    if (panel->location().isS3Connection()) {
        menu.addAction(m_actions.value(QStringLiteral("newBucket")));
        if (current && current->type == Entry::Type::Bucket)
            menu.addAction(m_actions.value(QStringLiteral("bucketProperties")));
    } else {
        menu.addAction(m_actions.value(QStringLiteral("mkdir")));
    }
    menu.addSeparator();
    menu.addAction(m_actions.value(QStringLiteral("copyLocation")));
    if (s3) {
        menu.addAction(m_actions.value(QStringLiteral("copyS3Uri")));
        menu.addAction(m_actions.value(QStringLiteral("copyUrl")));
        if (current && !current->isDirectory())
            menu.addAction(m_actions.value(QStringLiteral("shareLink")));
        if (m_connections) {
            auto profile = m_connections->profile(panel->location().connectionId());
            if (profile && profile->endpoint.isEmpty())
                menu.addAction(m_actions.value(QStringLiteral("copyArn")));
        }
    }
    menu.addSeparator();
    menu.addAction(m_actions.value(QStringLiteral("refresh")));
    if (s3 && current) {
        menu.addAction(m_actions.value(QStringLiteral("editObjects")));
        if (!current->isDirectory())
            menu.addAction(m_actions.value(QStringLiteral("versionHistory")));
        if (isArchiveStorageClass(current->storageClass) || current->isDirectory())
            menu.addAction(m_actions.value(QStringLiteral("restoreArchive")));
        if (panel->showsVersions() && !current->versionId.isEmpty() && !current->isLatest &&
            !current->isDeleteMarker) {
            const Entry version = *current;
            menu.addAction(tr("Make This Version Current"), this, [this, version, panel] {
                auto service = S3VersionService::forLocation(*m_registry, version.location);
                runIo([service, version] {
                    OperationContext ctx;
                    return service->restoreVersion(version.location, version.versionId, ctx);
                }).then(this, [this, panel](VoidResult r) {
                    panel->refresh();
                    if (!r)
                        QMessageBox::warning(this, tr("Restore Version"), r.error().toString());
                });
            });
        }
        if (current->isDeleteMarker && current->isLatest) {
            const Location location = current->location;
            menu.addAction(tr("Undelete"), this, [this, location, panel] {
                auto service = S3VersionService::forLocation(*m_registry, location);
                runIo([service, location] {
                    OperationContext ctx;
                    return service->undelete(location, ctx);
                }).then(this, [this, panel](VoidResult r) {
                    panel->refresh();
                    if (!r)
                        QMessageBox::warning(this, tr("Undelete"), r.error().toString());
                });
            });
        }
    }

    menu.addAction(m_actions.value(QStringLiteral("properties")));
    menu.exec(globalPos);
}

void MainWindow::copyLines(const QStringList& lines)
{
    QStringList nonEmpty;
    for (const QString& l : lines) {
        if (!l.isEmpty())
            nonEmpty.push_back(l);
    }
    if (nonEmpty.isEmpty()) {
        statusBar()->showMessage(tr("Nothing to copy"), 3000);
        return;
    }
    QApplication::clipboard()->setText(nonEmpty.join(u'\n'));
    statusBar()->showMessage(tr("Copied %n line(s) to the clipboard", nullptr, int(nonEmpty.size())), 3000);
}

void MainWindow::copyS3Uri()
{
    QStringList lines;
    for (const Entry& e : m_active->targetEntries())
        lines.push_back(s3urls::s3Uri(e.location));
    copyLines(lines);
}

void MainWindow::copyObjectUrl()
{
    QStringList lines;
    for (const Entry& e : m_active->targetEntries()) {
        if (!m_connections || !e.location.isS3())
            continue;
        if (auto profile = m_connections->profile(e.location.connectionId()))
            lines.push_back(s3urls::objectUrl(e.location, *profile, e.region));
    }
    copyLines(lines);
}

void MainWindow::copyArn()
{
    QStringList lines;
    for (const Entry& e : m_active->targetEntries()) {
        if (!m_connections || !e.location.isS3())
            continue;
        if (auto profile = m_connections->profile(e.location.connectionId()))
            lines.push_back(s3urls::arn(e.location, *profile));
    }
    copyLines(lines);
}

// ---------------------------------------------------------------------------
// Help, state
// ---------------------------------------------------------------------------

void MainWindow::populateConnectionsMenu(QMenu* menu)
{
    menu->clear();
    menu->addAction(m_actions.value(QStringLiteral("connections")));
    if (!m_connections)
        return;
    const QList<ConnectionProfile> profiles = m_connections->profiles();
    if (!profiles.isEmpty())
        menu->addSeparator();
    for (const ConnectionProfile& p : profiles) {
        menu->addAction(QIcon(QStringLiteral(":/icons/cloud.svg")), p.name, this,
                        [this, id = p.id] { m_active->setLocation(Location::s3(id)); });
    }
}

void MainWindow::manageConnections()
{
    if (!m_connections)
        return;
    ConnectionDialog dialog(m_connections, this);
    const Location here = m_active->location();
    if (here.isS3() && !here.connectionId().isEmpty())
        dialog.selectProfile(here.connectionId());
    if (dialog.exec() == QDialog::Accepted && !dialog.openRequestedId().isEmpty())
        m_active->setLocation(Location::s3(dialog.openRequestedId()));
}

void MainWindow::showShortcuts()
{
    QString html = QStringLiteral("<table cellspacing=4>");
    auto row = [&html](const QString& key, const QString& what) {
        html += QStringLiteral("<tr><td><b>%1</b></td><td>%2</td></tr>")
                    .arg(key.toHtmlEscaped(), what.toHtmlEscaped());
    };
    row(tr("Tab"), tr("Switch panel"));
    row(tr("Enter / Backspace"), tr("Open / parent folder"));
    row(tr("Insert / Space"), tr("Toggle selection (and move down) / toggle selection"));
    row(tr("Shift+Arrows"), tr("Extend selection"));
    row(tr("Type letters"), tr("Jump to name"));
    for (QAction* a : std::as_const(m_actionOrder)) {
        if (a->shortcuts().isEmpty())
            continue;
        QStringList keys;
        for (const QKeySequence& k : a->shortcuts())
            keys.push_back(k.toString(QKeySequence::NativeText));
        QString text = a->text();
        text.remove(u'&');
        row(keys.join(QStringLiteral(", ")), text);
    }
    html += QStringLiteral("</table>");
    QMessageBox box(QMessageBox::NoIcon, tr("Keyboard Shortcuts"), html, QMessageBox::Close, this);
    box.setTextFormat(Qt::RichText);
    box.exec();
}

void MainWindow::showAbout()
{
    QMessageBox::about(this, tr("About S3 File Manager"),
                       tr("<h3>S3 File Manager %1</h3>"
                          "<p>Dual-panel file manager for Amazon S3 and S3-compatible storage.</p>"
                          "<p>Built with Qt %2 and the AWS SDK for C++.</p>"
                          "<p>MIT License</p>")
                           .arg(QApplication::applicationVersion(), QString::fromLatin1(qVersion())));
}

void MainWindow::closeEvent(QCloseEvent* event)
{
    if (m_remote->hasPendingChanges() &&
        QMessageBox::question(this, tr("Unsaved Remote Edits"),
                              tr("Some edited files have changes that were not uploaded. Quit anyway?")) !=
            QMessageBox::Yes) {
        event->ignore();
        return;
    }
    if (const int active = m_transfers->activeCount(); active > 0) {
        const QString question =
            m_transfers->store()
                ? tr("%n transfer(s) still running. Quit and continue them next time?", nullptr, active)
                : tr("%n transfer(s) still running. Quit and abandon them?", nullptr, active);
        if (QMessageBox::question(this, tr("Transfers Running"), question) != QMessageBox::Yes) {
            event->ignore();
            return;
        }
    }
    m_transfers->shutdown();
    saveWindowState();
    QMainWindow::closeEvent(event);
}

void MainWindow::restoreWindowState()
{
    QSettings settings;
    restoreGeometry(settings.value(QStringLiteral("mainWindow/geometry")).toByteArray());
    restoreState(settings.value(QStringLiteral("mainWindow/state")).toByteArray());
    m_splitter->restoreState(settings.value(QStringLiteral("mainWindow/splitter")).toByteArray());
    const bool hidden = settings.value(QStringLiteral("view/showHidden"), false).toBool();
    m_actions.value(QStringLiteral("showHidden"))->setChecked(hidden);
    m_left->setShowHidden(hidden);
    m_right->setShowHidden(hidden);
    settings.beginGroup(QStringLiteral("panels/left"));
    m_left->restoreState(settings);
    settings.endGroup();
    settings.beginGroup(QStringLiteral("panels/right"));
    m_right->restoreState(settings);
    settings.endGroup();
    if (settings.value(QStringLiteral("panels/active")).toString() == u"right")
        setActivePanel(m_right);
}

void MainWindow::saveWindowState() const
{
    QSettings settings;
    settings.setValue(QStringLiteral("mainWindow/geometry"), saveGeometry());
    settings.setValue(QStringLiteral("mainWindow/state"), saveState());
    settings.setValue(QStringLiteral("mainWindow/splitter"), m_splitter->saveState());
    settings.setValue(QStringLiteral("view/showHidden"), m_left->showHidden());
    settings.setValue(QStringLiteral("panels/active"),
                      m_active == m_right ? QStringLiteral("right") : QStringLiteral("left"));
    settings.beginGroup(QStringLiteral("panels/left"));
    m_left->saveState(settings);
    settings.endGroup();
    settings.beginGroup(QStringLiteral("panels/right"));
    m_right->saveState(settings);
    settings.endGroup();
}

} // namespace s3fm
