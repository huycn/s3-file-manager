#include "models/TransferModel.h"

#include "core/Format.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"

#include <QIcon>

namespace s3fm {

TransferModel::TransferModel(TransferQueue* queue, QObject* parent)
    : QAbstractItemModel(parent), m_queue(queue)
{
    for (TransferJob* job : queue->jobs()) {
        m_jobs.push_back(job);
        m_lastState.insert(job, job->state());
        if (!job->isRunning())
            m_failures.insert(job, job->failures());
    }
    connect(queue, &TransferQueue::jobAdded, this, &TransferModel::onJobAdded);
    connect(queue, &TransferQueue::jobAboutToBeRemoved, this, &TransferModel::onJobRemoved);
    connect(queue, &TransferQueue::jobMoved, this, &TransferModel::onJobMoved);
    connect(queue, &TransferQueue::jobChanged, this, &TransferModel::onJobChanged);
}

TransferJob* TransferModel::jobAt(const QModelIndex& index) const
{
    if (!index.isValid())
        return nullptr;
    if (auto* parentJob = static_cast<TransferJob*>(index.internalPointer()))
        return parentJob;
    return m_jobs.value(index.row());
}

QModelIndex TransferModel::indexOf(TransferJob* job, int column) const
{
    const qsizetype row = m_jobs.indexOf(job);
    return row < 0 ? QModelIndex() : createIndex(int(row), column, nullptr);
}

TransferFailure TransferModel::failureAt(const QModelIndex& index) const
{
    auto* job = index.isValid() ? static_cast<TransferJob*>(index.internalPointer()) : nullptr;
    if (!job)
        return {};
    return m_failures.value(job).value(index.row());
}

QModelIndex TransferModel::index(int row, int column, const QModelIndex& parent) const
{
    if (row < 0 || column < 0 || column >= ColumnCount)
        return {};
    if (!parent.isValid())
        return row < m_jobs.size() ? createIndex(row, column, nullptr) : QModelIndex();
    if (parent.internalPointer())
        return {}; // failure rows have no children
    TransferJob* job = m_jobs.value(parent.row());
    if (!job || row >= m_failures.value(job).size())
        return {};
    return createIndex(row, column, job);
}

QModelIndex TransferModel::parent(const QModelIndex& child) const
{
    if (!child.isValid() || !child.internalPointer())
        return {};
    return indexOf(static_cast<TransferJob*>(child.internalPointer()));
}

int TransferModel::rowCount(const QModelIndex& parent) const
{
    if (!parent.isValid())
        return int(m_jobs.size());
    if (parent.internalPointer() || parent.column() != 0)
        return 0;
    return int(m_failures.value(m_jobs.value(parent.row())).size());
}

int TransferModel::columnCount(const QModelIndex& parent) const
{
    Q_UNUSED(parent)
    return ColumnCount;
}

QString TransferModel::formatEta(qint64 seconds)
{
    if (seconds < 0)
        return {};
    if (seconds >= 3600)
        return QStringLiteral("%1:%2:%3")
            .arg(seconds / 3600)
            .arg((seconds / 60) % 60, 2, 10, QLatin1Char('0'))
            .arg(seconds % 60, 2, 10, QLatin1Char('0'));
    return QStringLiteral("%1:%2").arg(seconds / 60).arg(seconds % 60, 2, 10, QLatin1Char('0'));
}

QString TransferModel::statusText(const TransferJob* job)
{
    const TransferProgress p = job->progress();
    switch (job->state()) {
    case JobState::Queued:
        return tr("Queued");
    case JobState::Paused:
        return tr("Paused");
    case JobState::Done:
        return p.filesSkipped > 0 ? tr("Done, %n skipped", nullptr, p.filesSkipped) : tr("Done");
    case JobState::Failed:
        return tr("Failed");
    case JobState::Cancelled:
        return tr("Cancelled");
    case JobState::Running:
        break;
    }
    switch (p.stage) {
    case TransferProgress::Stage::Waiting:
        return tr("Starting");
    case TransferProgress::Stage::Scanning:
        return tr("Scanning");
    case TransferProgress::Stage::Deleting:
        return tr("Deleting");
    case TransferProgress::Stage::Transferring:
        return job->kind() == TransferKind::Move ? tr("Moving") : tr("Copying");
    case TransferProgress::Stage::Finished:
        return tr("Finishing");
    }
    return {};
}

QVariant TransferModel::data(const QModelIndex& index, int role) const
{
    if (!index.isValid())
        return {};
    TransferJob* job = jobAt(index);
    if (!job)
        return {};
    if (role == JobRole)
        return QVariant::fromValue(static_cast<QObject*>(job));

    if (index.internalPointer()) { // failure row
        const TransferFailure f = failureAt(index);
        if (role == FailureRole)
            return true;
        if (role == Qt::DisplayRole) {
            if (index.column() == NameColumn)
                return f.item;
            if (index.column() == StatusColumn)
                return f.error.message;
        }
        if (role == Qt::ToolTipRole)
            return f.error.toString();
        if (role == Qt::DecorationRole && index.column() == NameColumn)
            return QIcon::fromTheme(QStringLiteral("dialog-error"));
        return {};
    }

    const TransferProgress p = job->progress();
    const int percent = p.bytesTotal > 0                 ? int(p.bytesDone * 100 / p.bytesTotal)
                        : p.filesTotal > 0               ? p.filesDone * 100 / p.filesTotal
                        : job->state() == JobState::Done ? 100
                                                         : -1;
    if (role == ProgressRole)
        return job->state() == JobState::Done ? 100 : percent;
    if (role == Qt::ToolTipRole && index.column() == NameColumn)
        return job->title();
    if (role == Qt::DecorationRole && index.column() == NameColumn) {
        switch (job->state()) {
        case JobState::Running:
            return QIcon::fromTheme(QStringLiteral("media-playback-start"));
        case JobState::Paused:
            return QIcon::fromTheme(QStringLiteral("media-playback-pause"));
        case JobState::Failed:
            return QIcon::fromTheme(QStringLiteral("dialog-error"));
        case JobState::Done:
            return QIcon::fromTheme(QStringLiteral("dialog-ok"));
        default:
            return {};
        }
    }
    if (role != Qt::DisplayRole)
        return {};
    switch (index.column()) {
    case NameColumn:
        return job->title();
    case StatusColumn: {
        QString s = statusText(job);
        if (job->isRunning() && !p.currentItem.isEmpty())
            s += QStringLiteral(": ") + p.currentItem;
        if (p.filesFailed > 0 || job->state() == JobState::Failed) {
            const int n = int(m_failures.value(job).size());
            if (n > 0)
                s += u' ' + tr("(%n error(s))", nullptr, n);
        }
        return s;
    }
    case ProgressColumn:
        return percent >= 0 ? QVariant(QStringLiteral("%1%").arg(percent)) : QVariant();
    case SizeColumn: {
        if (job->kind() == TransferKind::Delete)
            return p.filesDone > 0 ? tr("%n item(s)", nullptr, p.filesDone) : QString();
        QString s;
        if (p.bytesTotal > 0)
            s = QStringLiteral("%1 / %2").arg(formatSize(p.bytesDone), formatSize(p.bytesTotal));
        if (p.filesTotal > 1)
            s += (s.isEmpty() ? QString() : QStringLiteral(", ")) +
                 tr("%1 / %n file(s)", nullptr, p.filesTotal).arg(p.filesDone);
        return s;
    }
    case SpeedColumn:
        return job->isRunning() && p.bytesPerSecond > 0 ? formatRate(p.bytesPerSecond) : QString();
    case EtaColumn:
        return job->isRunning() ? formatEta(p.etaSeconds) : QString();
    default:
        return {};
    }
}

QVariant TransferModel::headerData(int section, Qt::Orientation orientation, int role) const
{
    if (orientation != Qt::Horizontal || role != Qt::DisplayRole)
        return {};
    switch (section) {
    case NameColumn:
        return tr("Transfer");
    case StatusColumn:
        return tr("Status");
    case ProgressColumn:
        return tr("Progress");
    case SizeColumn:
        return tr("Size");
    case SpeedColumn:
        return tr("Speed");
    case EtaColumn:
        return tr("Time Left");
    default:
        return {};
    }
}

void TransferModel::onJobAdded(TransferJob* job)
{
    if (m_jobs.contains(job))
        return;
    const int row = int(m_jobs.size());
    beginInsertRows({}, row, row);
    m_jobs.push_back(job);
    m_lastState.insert(job, job->state());
    endInsertRows();
    refreshFailures(job);
}

void TransferModel::onJobRemoved(TransferJob* job)
{
    const int row = int(m_jobs.indexOf(job));
    if (row < 0)
        return;
    beginRemoveRows({}, row, row);
    m_jobs.removeAt(row);
    m_failures.remove(job);
    m_lastState.remove(job);
    endRemoveRows();
}

void TransferModel::onJobMoved(TransferJob* job, int from, int to)
{
    Q_UNUSED(job)
    if (from == to || from < 0 || from >= m_jobs.size() || to < 0 || to >= m_jobs.size())
        return;
    beginMoveRows({}, from, from, {}, to > from ? to + 1 : to);
    m_jobs.move(from, to);
    endMoveRows();
}

void TransferModel::onJobChanged(TransferJob* job)
{
    const QModelIndex first = indexOf(job, 0);
    if (!first.isValid())
        return;
    if (m_lastState.value(job) != job->state()) {
        m_lastState.insert(job, job->state());
        refreshFailures(job);
    }
    Q_EMIT dataChanged(first, indexOf(job, ColumnCount - 1));
}

void TransferModel::refreshFailures(TransferJob* job)
{
    const QModelIndex parent = indexOf(job);
    const QList<TransferFailure> now = job->isRunning() ? QList<TransferFailure>() : job->failures();
    const int old = int(m_failures.value(job).size());
    if (old > 0) {
        beginRemoveRows(parent, 0, old - 1);
        m_failures.remove(job);
        endRemoveRows();
    }
    if (!now.isEmpty()) {
        beginInsertRows(parent, 0, int(now.size()) - 1);
        m_failures.insert(job, now);
        endInsertRows();
    }
}

} // namespace s3fm
