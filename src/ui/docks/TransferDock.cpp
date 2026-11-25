#include "ui/docks/TransferDock.h"

#include "models/TransferModel.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"

#include <QAction>
#include <QApplication>
#include <QHeaderView>
#include <QMenu>
#include <QMessageBox>
#include <QPainter>
#include <QStyledItemDelegate>
#include <QToolBar>
#include <QTreeView>
#include <QVBoxLayout>

namespace s3fm {

namespace {

// Draws the progress column as a progress bar.
class ProgressDelegate : public QStyledItemDelegate
{
public:
    using QStyledItemDelegate::QStyledItemDelegate;

    void paint(QPainter* painter, const QStyleOptionViewItem& option, const QModelIndex& index) const override
    {
        const QVariant progress = index.data(TransferModel::ProgressRole);
        if (index.data(TransferModel::FailureRole).toBool() || !progress.isValid()) {
            QStyledItemDelegate::paint(painter, option, index);
            return;
        }
        QStyleOptionViewItem background = option;
        initStyleOption(&background, index);
        background.text.clear();
        QStyle* style = option.widget ? option.widget->style() : QApplication::style();
        style->drawControl(QStyle::CE_ItemViewItem, &background, painter, option.widget);

        QStyleOptionProgressBar bar;
        bar.rect = option.rect.adjusted(2, 3, -2, -3);
        bar.minimum = 0;
        bar.maximum = progress.toInt() < 0 ? 0 : 100; // 0/0: busy indicator
        bar.progress = qMax(0, progress.toInt());
        bar.text = index.data(Qt::DisplayRole).toString();
        bar.textVisible = progress.toInt() >= 0;
        bar.state = option.state | QStyle::State_Horizontal;
        style->drawControl(QStyle::CE_ProgressBar, &bar, painter, option.widget);
    }
};

} // namespace

TransferDock::TransferDock(TransferQueue* queue, QWidget* parent)
    : QDockWidget(tr("Transfers"), parent), m_queue(queue), m_model(new TransferModel(queue, this))
{
    setObjectName(QStringLiteral("transferDock"));
    setAllowedAreas(Qt::BottomDockWidgetArea | Qt::TopDockWidgetArea);
    auto* content = new QWidget(this);
    auto* layout = new QVBoxLayout(content);
    layout->setContentsMargins(0, 0, 0, 0);
    layout->setSpacing(0);

    m_toolBar = new QToolBar(content);
    m_toolBar->setIconSize(QSize(16, 16));
    m_toolBar->setToolButtonStyle(Qt::ToolButtonTextBesideIcon);
    layout->addWidget(m_toolBar);

    addAction(QStringLiteral("pause"), tr("Pause"), QStringLiteral("media-playback-pause"),
              &TransferDock::pauseJob);
    addAction(QStringLiteral("resume"), tr("Resume"), QStringLiteral("media-playback-start"),
              &TransferDock::resumeJob);
    addAction(QStringLiteral("cancel"), tr("Cancel"), QStringLiteral("process-stop"),
              &TransferDock::cancelJob);
    addAction(QStringLiteral("retry"), tr("Retry Failed"), QStringLiteral("view-refresh"),
              &TransferDock::retryJob);
    m_toolBar->addSeparator();
    addAction(QStringLiteral("moveUp"), tr("Move Up"), QStringLiteral("go-up"), &TransferDock::moveUp);
    addAction(QStringLiteral("moveDown"), tr("Move Down"), QStringLiteral("go-down"),
              &TransferDock::moveDown);
    addAction(QStringLiteral("remove"), tr("Remove"), QStringLiteral("list-remove"),
              &TransferDock::removeJob);
    m_toolBar->addSeparator();
    addAction(QStringLiteral("pauseAll"), tr("Pause All"), {}, &TransferDock::pauseAll);
    addAction(QStringLiteral("resumeAll"), tr("Resume All"), {}, &TransferDock::resumeAll);
    addAction(QStringLiteral("clearFinished"), tr("Clear Finished"), QStringLiteral("edit-clear-history"),
              &TransferDock::clearFinished);
    m_toolBar->addSeparator();
    addAction(QStringLiteral("settings"), tr("Settings…"), QStringLiteral("configure"),
              &TransferDock::openSettings);

    m_view = new QTreeView(content);
    m_view->setObjectName(QStringLiteral("transferView"));
    m_view->setModel(m_model);
    m_view->setRootIsDecorated(true);
    m_view->setUniformRowHeights(true);
    m_view->setAllColumnsShowFocus(true);
    m_view->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_view->setItemDelegateForColumn(TransferModel::ProgressColumn, new ProgressDelegate(m_view));
    m_view->setContextMenuPolicy(Qt::CustomContextMenu);
    QHeaderView* header = m_view->header();
    header->setStretchLastSection(false);
    header->setSectionResizeMode(TransferModel::NameColumn, QHeaderView::Stretch);
    header->setSectionResizeMode(TransferModel::StatusColumn, QHeaderView::Interactive);
    header->resizeSection(TransferModel::StatusColumn, 220);
    header->resizeSection(TransferModel::ProgressColumn, 110);
    header->resizeSection(TransferModel::SizeColumn, 200);
    header->resizeSection(TransferModel::SpeedColumn, 90);
    header->resizeSection(TransferModel::EtaColumn, 70);
    layout->addWidget(m_view);
    setWidget(content);

    connect(m_view->selectionModel(), &QItemSelectionModel::currentChanged, this,
            &TransferDock::updateActions);
    connect(m_view, &QTreeView::doubleClicked, this, &TransferDock::showDetails);
    connect(m_view, &QTreeView::customContextMenuRequested, this, &TransferDock::showContextMenu);
    connect(queue, &TransferQueue::jobChanged, this, [this] {
        updateActions();
        updateTitle();
    });
    connect(queue, &TransferQueue::jobAdded, this, [this](TransferJob* job) {
        if (!m_view->currentIndex().isValid())
            m_view->setCurrentIndex(m_model->indexOf(job));
        updateActions();
        updateTitle();
    });
    connect(m_model, &QAbstractItemModel::rowsRemoved, this, [this] {
        updateActions();
        updateTitle();
    });
    updateActions();
}

QAction* TransferDock::addAction(const QString& name, const QString& text, const QString& icon,
                                 void (TransferDock::*slot)())
{
    auto* a = new QAction(icon.isEmpty() ? QIcon() : QIcon::fromTheme(icon), text, this);
    a->setObjectName(name);
    connect(a, &QAction::triggered, this, slot);
    m_toolBar->addAction(a);
    m_actions.insert(name, a);
    return a;
}

TransferJob* TransferDock::currentJob() const
{
    return m_model->jobAt(m_view->currentIndex());
}

void TransferDock::updateActions()
{
    TransferJob* job = currentJob();
    const JobState s = job ? job->state() : JobState::Done;
    const int row = job ? m_queue->indexOf(job) : -1;
    m_actions.value(QStringLiteral("pause"))
        ->setEnabled(job && (s == JobState::Queued || s == JobState::Running));
    m_actions.value(QStringLiteral("resume"))->setEnabled(job && s == JobState::Paused);
    m_actions.value(QStringLiteral("cancel"))->setEnabled(job && !job->isFinished());
    m_actions.value(QStringLiteral("retry"))->setEnabled(job && s == JobState::Failed);
    m_actions.value(QStringLiteral("moveUp"))->setEnabled(job && row > 0);
    m_actions.value(QStringLiteral("moveDown"))
        ->setEnabled(job && row >= 0 && row < m_queue->jobs().size() - 1);
    m_actions.value(QStringLiteral("remove"))->setEnabled(job && s != JobState::Running);
    bool anyPaused = false;
    bool anyActive = false;
    bool anyFinished = false;
    const auto jobs = m_queue->jobs();
    for (TransferJob* j : jobs) {
        anyPaused = anyPaused || j->state() == JobState::Paused;
        anyActive = anyActive || j->state() == JobState::Running || j->state() == JobState::Queued;
        anyFinished = anyFinished || j->state() == JobState::Done || j->state() == JobState::Cancelled;
    }
    m_actions.value(QStringLiteral("pauseAll"))->setEnabled(anyActive);
    m_actions.value(QStringLiteral("resumeAll"))->setEnabled(anyPaused);
    m_actions.value(QStringLiteral("clearFinished"))->setEnabled(anyFinished);
}

void TransferDock::updateTitle()
{
    const int running = m_queue->runningCount();
    const int queued = m_queue->activeCount() - running;
    QString title = tr("Transfers");
    if (running > 0 || queued > 0)
        title += QStringLiteral(" (%1)").arg(queued > 0 ? tr("%1 running, %2 queued").arg(running).arg(queued)
                                                        : tr("%1 running").arg(running));
    setWindowTitle(title);
}

void TransferDock::showDetails()
{
    const QModelIndex index = m_view->currentIndex();
    if (!index.isValid())
        return;
    if (index.data(TransferModel::FailureRole).toBool()) {
        const TransferFailure f = m_model->failureAt(index);
        QMessageBox box(QMessageBox::Warning, tr("Transfer Error"), f.item, QMessageBox::Close, this);
        box.setInformativeText(f.error.message);
        QString detail = f.error.detail;
        if (!f.error.requestId.isEmpty())
            detail += (detail.isEmpty() ? QString() : QStringLiteral("\n")) +
                      tr("Request ID: %1").arg(f.error.requestId);
        if (!detail.isEmpty())
            box.setDetailedText(detail);
        box.exec();
        return;
    }
    m_view->setExpanded(index.siblingAtColumn(0), !m_view->isExpanded(index.siblingAtColumn(0)));
}

void TransferDock::showContextMenu(const QPoint& pos)
{
    updateActions();
    QMenu menu(this);
    for (const char* name : {"pause", "resume", "cancel", "retry", "", "moveUp", "moveDown", "remove", "",
                             "pauseAll", "resumeAll", "clearFinished"}) {
        if (!*name)
            menu.addSeparator();
        else
            menu.addAction(m_actions.value(QString::fromLatin1(name)));
    }
    menu.exec(m_view->viewport()->mapToGlobal(pos));
}

void TransferDock::pauseJob()
{
    m_queue->pause(currentJob());
}
void TransferDock::resumeJob()
{
    m_queue->resume(currentJob());
}
void TransferDock::retryJob()
{
    m_queue->retryFailed(currentJob());
}
void TransferDock::pauseAll()
{
    m_queue->pauseAll();
}
void TransferDock::resumeAll()
{
    m_queue->resumeAll();
}
void TransferDock::clearFinished()
{
    m_queue->clearFinished();
}

void TransferDock::cancelJob()
{
    TransferJob* job = currentJob();
    if (!job)
        return;
    if (QMessageBox::question(
            this, tr("Cancel Transfer"),
            tr("Cancel \"%1\"? Partially transferred files are discarded.").arg(job->title())) !=
        QMessageBox::Yes)
        return;
    m_queue->cancel(job);
}

void TransferDock::moveUp()
{
    TransferJob* job = currentJob();
    m_queue->move(job, m_queue->indexOf(job) - 1);
    m_view->setCurrentIndex(m_model->indexOf(job));
}

void TransferDock::moveDown()
{
    TransferJob* job = currentJob();
    m_queue->move(job, m_queue->indexOf(job) + 1);
    m_view->setCurrentIndex(m_model->indexOf(job));
}

void TransferDock::removeJob()
{
    TransferJob* job = currentJob();
    if (!job)
        return;
    if ((job->state() == JobState::Paused || job->state() == JobState::Failed ||
         job->state() == JobState::Queued) &&
        QMessageBox::question(
            this, tr("Remove Transfer"),
            tr("Remove \"%1\"? It has not finished; partial data is discarded.").arg(job->title())) !=
            QMessageBox::Yes)
        return;
    if (job->state() == JobState::Queued)
        m_queue->cancel(job);
    m_queue->remove(job);
}

} // namespace s3fm
