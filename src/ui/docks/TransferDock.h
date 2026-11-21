#pragma once

#include <QDockWidget>
#include <QHash>

class QAction;
class QToolBar;
class QTreeView;

namespace s3fm {

class TransferJob;
class TransferModel;
class TransferQueue;

// Dock listing the transfer queue: progress bars, per-file errors, and controls to
// pause, resume, cancel, retry, reorder and clear jobs.
class TransferDock : public QDockWidget
{
    Q_OBJECT

public:
    explicit TransferDock(TransferQueue* queue, QWidget* parent = nullptr);

    TransferModel* model() const { return m_model; }
    QTreeView* view() const { return m_view; }
    QAction* action(const QString& name) const { return m_actions.value(name); }
    TransferJob* currentJob() const;

Q_SIGNALS:
    void settingsRequested();

private:
    QAction* addAction(const QString& name, const QString& text, const QString& icon,
                       void (TransferDock::*slot)());
    void updateActions();
    void updateTitle();
    void showDetails();
    void showContextMenu(const QPoint& pos);

    void pauseJob();
    void resumeJob();
    void cancelJob();
    void retryJob();
    void moveUp();
    void moveDown();
    void removeJob();
    void clearFinished();
    void pauseAll();
    void resumeAll();
    void openSettings() { Q_EMIT settingsRequested(); }

    TransferQueue* m_queue;
    TransferModel* m_model;
    QTreeView* m_view;
    QToolBar* m_toolBar;
    QHash<QString, QAction*> m_actions;
};

} // namespace s3fm
