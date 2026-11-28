#pragma once

#include "core/Compare.h"
#include "core/Entry.h"
#include "core/Search.h"
#include "transfer/TransferTypes.h"
#include "ui/HeaderColors.h"

#include <QHash>
#include <QList>
#include <QMainWindow>
#include <QPointer>

#include <optional>

class QMenu;
class QSplitter;
class QStyle;

namespace s3fm {

class ConnectionStore;
class PanelWidget;
class RemoteFiles;
class ProviderRegistry;
class TransferDock;
class TransferJob;
class TransferQueue;

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    // Without a `transfers` queue the window creates its own (not persisted).
    explicit MainWindow(ProviderRegistry* registry, ConnectionStore* connections = nullptr,
                        TransferQueue* transfers = nullptr, QWidget* parent = nullptr);
    ~MainWindow() override;

    PanelWidget* leftPanel() const { return m_left; }
    PanelWidget* rightPanel() const { return m_right; }
    PanelWidget* activePanel() const { return m_active; }
    PanelWidget* otherPanel() const { return m_active == m_left ? m_right : m_left; }
    void setActivePanel(PanelWidget* panel);

    QAction* action(const QString& name) const { return m_actions.value(name); }
    RemoteFiles* remoteFiles() const { return m_remote; }
    TransferQueue* transferQueue() const { return m_transfers; }
    TransferDock* transferDock() const { return m_transferDock; }

    // Queues a copy/move/delete job and shows the transfer dock. Exposed for tests.
    TransferJob* startTransfer(const TransferRequest& request);
    // Loads interrupted transfers from the queue's store; returns how many.
    int restoreTransfers();

    // Parses the text of a copy/move target prompt. Relative text is resolved against
    // `base`; a trailing separator marks a directory.
    // Compares the two panels with `options` (no dialog); emits compareFinished() when the
    // marks are shown or the comparison was given up. Exposed for tests.
    void comparePanelsWith(const CompareOptions& options);

    static Location resolveTarget(const QString& text, const Location& base, bool* isDirectory);

Q_SIGNALS:
    void transferFinished(s3fm::TransferJob* job);
    void compareFinished();

protected:
    void closeEvent(QCloseEvent* event) override;
    bool eventFilter(QObject* watched, QEvent* event) override;
    void changeEvent(QEvent* event) override;
    void childEvent(QChildEvent* event) override;
    void paintEvent(QPaintEvent* event) override;

private:
    void createActions();
    void createMenus();
    QWidget* createFunctionKeyBar();
    // Paints everything but the file and transfer lists (menu bar, address rows, status lines,
    // function-key bar, Transfers dock frame and toolbar, status bar) in the title bar's colours.
    void applyHeaderColors();
    void applyHeaderPalette(QWidget* widget) const;
    QAction* addAction(const QString& name, const QString& text, const QList<QKeySequence>& shortcuts,
                       void (MainWindow::*slot)());
    void buildPlacesMenu(QMenu* menu, PanelWidget* panel);
    void restoreWindowState();
    void saveWindowState() const;

    void copyOrMove(bool move);
    void copySelection() { copyOrMove(false); }
    void moveSelection() { copyOrMove(true); }
    void renameCurrent();
    void makeDirectory();
    void deleteSelection();
    void viewCurrent();
    void editCurrent();
    void openEntry(const Entry& entry);
    void refreshActive();
    void toggleHidden();
    void swapPanels();
    void selectAll();
    void deselectAll();
    void invertSelection();
    void goBack();
    void goForward();
    void goHome();
    void goRoot();
    void editAddress();
    void quickFilter();
    void findFiles();
    void comparePanels();
    void goToContainingFolder();
    // After a delete/move job: drops the results it removed from search result panels.
    void pruneSearchResults(const TransferJob* job);
    void leftPlaces();
    void rightPlaces();
    void copyLocation();
    void targetToOther();
    void showShortcuts();
    void showAbout();
    void manageConnections();
    void showProperties();
    void editObjects();
    void shareLink();
    void toggleVersions();
    void browseAsOf();
    void versionHistory();
    void restoreArchive();
    void incompleteUploads();
    void createBucket();
    void bucketProperties();
    void deleteBucket(const Entry& bucket);
    // Refreshes panels showing the connection's bucket list; panels inside a deleted
    // bucket go back to the list.
    void bucketListChanged(const QString& connectionId, const QString& removedBucket = {});
    void deleteVersions(const EntryList& versions);
    // Message and false if `items` (from a versions view) cannot be copied/moved/renamed.
    bool checkVersionSelection(const EntryList& items, bool move);
    void showContextMenu(PanelWidget* panel, const QPoint& globalPos);
    void copyS3Uri();
    void copyObjectUrl();
    void copyArn();
    void copyLines(const QStringList& lines);
    void populateConnectionsMenu(QMenu* menu);
    void quit() { close(); }
    void onTransferFinished(TransferJob* job);
    void onConflictRequested(TransferJob* job, const ConflictInfo& info);
    void showNextConflict();
    void transferSettings();
    void showSettings();
    void pauseAllTransfers();
    void resumeAllTransfers();
    void clearFinishedTransfers();

    ProviderRegistry* m_registry;
    ConnectionStore* m_connections;
    RemoteFiles* m_remote;
    TransferQueue* m_transfers;
    TransferDock* m_transferDock = nullptr;
    QList<QPair<QPointer<TransferJob>, ConflictInfo>> m_pendingConflicts;
    bool m_conflictOpen = false;
    TransferOptions m_lastOptions;
    std::optional<SearchCriteria> m_lastSearch;
    std::optional<HeaderColors> m_headerColors;
    QWidget* m_functionKeyBar = nullptr;
    QStyle* m_menuBarStyle = nullptr;
    QSplitter* m_splitter;
    PanelWidget* m_left;
    PanelWidget* m_right;
    PanelWidget* m_active = nullptr;
    QHash<QString, QAction*> m_actions;
    QList<QAction*> m_actionOrder;
};

} // namespace s3fm
