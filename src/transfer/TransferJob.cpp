#include "transfer/TransferJob.h"

#include <QCoreApplication>

namespace s3fm {

TransferJob::TransferJob(std::shared_ptr<detail::JobCore> core, QObject* parent)
    : QObject(parent), m_core(std::move(core))
{
}

TransferJob::~TransferJob()
{
    stopWorker();
}

QString TransferJob::title() const
{
    const TransferRequest& r = m_core->request;
    const int n = int(r.sources.size());
    const QString what = n == 1 ? QStringLiteral("\"%1\"").arg(r.sources.first().name)
                                : QCoreApplication::translate("s3fm::TransferJob", "%n item(s)", nullptr, n);
    switch (r.kind) {
    case TransferKind::Copy:
        return tr("Copy %1 to %2").arg(what, r.destination.displayString());
    case TransferKind::Move:
        return tr("Move %1 to %2").arg(what, r.destination.displayString());
    case TransferKind::Delete:
        return tr("Delete %1").arg(what);
    }
    return {};
}

QList<TransferFailure> TransferJob::failures() const
{
    QMutexLocker lock(&m_core->mutex);
    QList<TransferFailure> out = m_core->jobFailures;
    for (const TransferTask& t : std::as_const(m_core->tasks)) {
        if (t.state == TaskState::Failed)
            out.push_back({t.source.location.displayString(), t.error});
    }
    return out;
}

void TransferJob::answerConflict(const ConflictAnswer& answer)
{
    QMutexLocker lock(&m_core->conflictMutex);
    m_core->answer = answer;
    m_core->conflictAnswered.wakeAll();
}

void TransferJob::setState(JobState state)
{
    if (m_state == state)
        return;
    m_state = state;
    if (isFinished())
        m_progress.stage = TransferProgress::Stage::Finished;
    else if (state != JobState::Running)
        m_progress.bytesPerSecond = 0;
    Q_EMIT changed();
}

void TransferJob::stopWorker()
{
    {
        QMutexLocker lock(&m_core->mutex);
        if (m_core->runCtx)
            m_core->runCtx->cancel();
    }
    {
        QMutexLocker lock(&m_core->conflictMutex);
        m_core->conflictAnswered.wakeAll();
    }
    m_future.waitForFinished();
}

} // namespace s3fm
