#include "transfer/TransferQueue.h"

#include "core/Async.h"
#include "core/Logging.h"
#include "transfer/TransferRunner.h"
#include "transfer/TransferStore.h"

#include <QDateTime>
#include <QDir>
#include <QRandomGenerator>
#include <QThreadPool>
#include <QtConcurrent/QtConcurrentRun>

namespace s3fm {

QThreadPool* transferThreadPool()
{
    static QThreadPool* pool = [] {
        auto* p = new QThreadPool;
        p->setObjectName(QStringLiteral("s3fm-transfers"));
        p->setMaxThreadCount(16);
        return p;
    }();
    return pool;
}

TransferQueue::TransferQueue(ProviderRegistry* registry, QObject* parent)
    : QObject(parent), m_registry(registry)
{
    qRegisterMetaType<s3fm::ConflictInfo>();
    qRegisterMetaType<s3fm::TransferProgress>();
}

TransferQueue::~TransferQueue()
{
    shutdown();
}

void TransferQueue::setStore(std::shared_ptr<TransferStore> store)
{
    m_store = std::move(store);
}

void TransferQueue::setSettings(const TransferSettings& settings)
{
    m_settings = settings;
    m_limiter.setRate(settings.bandwidthLimit);
    schedule();
}

int TransferQueue::activeCount() const
{
    int n = 0;
    for (TransferJob* j : m_jobs)
        n += j->state() == JobState::Queued || j->state() == JobState::Running;
    return n;
}

int TransferQueue::runningCount() const
{
    int n = 0;
    for (TransferJob* j : m_jobs)
        n += j->state() == JobState::Running;
    return n;
}

std::shared_ptr<detail::JobCore> TransferQueue::makeCore(const QString& id, const TransferRequest& request)
{
    auto core = std::make_shared<detail::JobCore>();
    core->id = id;
    core->request = request;
    core->registry = m_registry;
    core->store = m_store;
    core->limiter = &m_limiter;
    core->stagingDir = m_store ? m_store->root() + QStringLiteral("/staging")
                               : QDir::tempPath() + QStringLiteral("/s3fm-staging");
    return core;
}

TransferJob* TransferQueue::addJob(std::shared_ptr<detail::JobCore> core, JobState state)
{
    auto* job = new TransferJob(std::move(core), this);
    job->m_state = state;
    m_jobs.push_back(job);
    connect(job, &TransferJob::changed, this, [this, job] { Q_EMIT jobChanged(job); });
    connect(job, &TransferJob::conflictRequested, this,
            [this, job](const ConflictInfo& info) { Q_EMIT conflictRequested(job, info); });
    Q_EMIT jobAdded(job);
    return job;
}

TransferJob* TransferQueue::enqueue(const TransferRequest& request)
{
    const QString id = QDateTime::currentDateTimeUtc().toString(QStringLiteral("yyyyMMdd-HHmmss-zzz-")) +
                       QString::number(QRandomGenerator::global()->bounded(0x100000, 0xffffff), 16);
    TransferJob* job = addJob(makeCore(id, request), JobState::Queued);
    persist(job);
    schedule();
    return job;
}

void TransferQueue::persist(TransferJob* job)
{
    if (!m_store)
        return;
    TransferStore::JobRecord rec;
    rec.id = job->id();
    rec.request = job->request();
    rec.state = job->state();
    {
        QMutexLocker lock(&job->m_core->mutex);
        rec.stickyConflict = job->m_core->sticky;
        rec.jobFailures = job->m_core->jobFailures;
    }
    m_store->saveJob(rec);
}

void TransferQueue::setJobState(TransferJob* job, JobState state)
{
    job->setState(state);
    if (job->isFinished())
        Q_EMIT job->finished();
    if (job->isFinished())
        Q_EMIT jobFinished(job);
}

void TransferQueue::schedule()
{
    if (m_shuttingDown)
        return;
    int running = runningCount();
    for (TransferJob* job : std::as_const(m_jobs)) {
        if (running >= qMax(1, m_settings.maxJobs))
            break;
        if (job->state() == JobState::Queued) {
            start(job);
            ++running;
        }
    }
}

void TransferQueue::start(TransferJob* job)
{
    auto core = job->m_core;
    {
        QMutexLocker lock(&core->mutex);
        core->settings = m_settings;
        core->cancelRequested = false;
        core->runCtx = std::make_shared<OperationContext>();
    }
    job->m_pauseRequested = false;
    job->m_progress = {};
    setJobState(job, JobState::Running);
    persist(job);
    job->m_future = QtConcurrent::run(transferThreadPool(), [this, core, job] {
        JobRunner(core, job).run();
        QMetaObject::invokeMethod(job, [this, job] { onWorkerFinished(job); }, Qt::QueuedConnection);
    });
}

void TransferQueue::onWorkerFinished(TransferJob* job)
{
    if (job->state() != JobState::Running)
        return; // already handled (shutdown)
    job->m_future.waitForFinished();
    bool cancelRequested = false;
    {
        QMutexLocker lock(&job->m_core->mutex);
        cancelRequested = job->m_core->cancelRequested;
        job->m_core->runCtx.reset();
    }
    if (cancelRequested) {
        setJobState(job, JobState::Cancelled);
        discardAsync(job);
    } else if (job->m_pauseRequested) {
        setJobState(job, JobState::Paused);
        persist(job);
    } else {
        const bool failed = !job->failures().isEmpty();
        setJobState(job, failed ? JobState::Failed : JobState::Done);
        if (failed)
            persist(job);
        else if (m_store)
            m_store->removeJob(job->id());
    }
    qCInfo(lcTransfer) << "job" << job->id() << jobStateName(job->state());
    schedule();
}

void TransferQueue::discardAsync(TransferJob* job)
{
    auto core = job->m_core;
    auto store = m_store;
    runIo([core, store] {
        JobRunner::discardPartials(core);
        if (store)
            store->removeJob(core->id);
    });
}

void TransferQueue::pause(TransferJob* job)
{
    if (!job)
        return;
    if (job->state() == JobState::Queued) {
        setJobState(job, JobState::Paused);
        persist(job);
    } else if (job->state() == JobState::Running) {
        job->m_pauseRequested = true;
        QMutexLocker lock(&job->m_core->mutex);
        if (job->m_core->runCtx)
            job->m_core->runCtx->cancel();
        lock.unlock();
        QMutexLocker clock(&job->m_core->conflictMutex);
        job->m_core->conflictAnswered.wakeAll();
    }
}

void TransferQueue::resume(TransferJob* job)
{
    if (!job || job->state() != JobState::Paused)
        return;
    setJobState(job, JobState::Queued);
    persist(job);
    schedule();
}

void TransferQueue::cancel(TransferJob* job)
{
    if (!job)
        return;
    switch (job->state()) {
    case JobState::Queued:
    case JobState::Paused:
    case JobState::Failed:
        setJobState(job, JobState::Cancelled);
        discardAsync(job);
        break;
    case JobState::Running: {
        QMutexLocker lock(&job->m_core->mutex);
        job->m_core->cancelRequested = true;
        if (job->m_core->runCtx)
            job->m_core->runCtx->cancel();
        lock.unlock();
        QMutexLocker clock(&job->m_core->conflictMutex);
        job->m_core->conflictAnswered.wakeAll();
        break;
    }
    case JobState::Done:
    case JobState::Cancelled:
        break;
    }
}

void TransferQueue::retryFailed(TransferJob* job)
{
    if (!job || job->state() != JobState::Failed)
        return;
    {
        QMutexLocker lock(&job->m_core->mutex);
        job->m_core->jobFailures.clear();
        for (int i = 0; i < job->m_core->tasks.size(); ++i) {
            TransferTask& t = job->m_core->tasks[i];
            if (t.state != TaskState::Failed)
                continue;
            t.state = TaskState::Pending;
            t.error = {};
            if (m_store)
                m_store->appendTaskState(job->id(), i, TaskState::Pending);
        }
    }
    setJobState(job, JobState::Queued);
    persist(job);
    schedule();
}

void TransferQueue::move(TransferJob* job, int newIndex)
{
    const int from = indexOf(job);
    if (from < 0)
        return;
    newIndex = qBound(0, newIndex, int(m_jobs.size()) - 1);
    if (newIndex == from)
        return;
    m_jobs.move(from, newIndex);
    Q_EMIT jobMoved(job, from, newIndex);
    schedule();
}

void TransferQueue::remove(TransferJob* job)
{
    if (!job || indexOf(job) < 0 || job->state() == JobState::Running)
        return;
    Q_EMIT jobAboutToBeRemoved(job);
    m_jobs.removeOne(job);
    if (job->state() == JobState::Done) {
        if (m_store)
            m_store->removeJob(job->id());
    } else if (job->state() != JobState::Cancelled) {
        discardAsync(job); // cancelled jobs were discarded already
    }
    job->deleteLater();
}

void TransferQueue::clearFinished()
{
    const QList<TransferJob*> jobs = m_jobs;
    for (TransferJob* job : jobs) {
        if (job->state() == JobState::Done || job->state() == JobState::Cancelled)
            remove(job);
    }
}

void TransferQueue::pauseAll()
{
    const QList<TransferJob*> jobs = m_jobs;
    for (TransferJob* job : jobs)
        pause(job);
}

void TransferQueue::resumeAll()
{
    const QList<TransferJob*> jobs = m_jobs;
    for (TransferJob* job : jobs) {
        if (job->state() == JobState::Paused) {
            setJobState(job, JobState::Queued);
            persist(job);
        }
    }
    schedule();
}

int TransferQueue::restore()
{
    if (!m_store)
        return 0;
    int restored = 0;
    for (TransferStore::LoadedJob& loaded : m_store->loadAll()) {
        const QString& id = loaded.record.id;
        bool known = false;
        for (TransferJob* j : std::as_const(m_jobs))
            known = known || j->id() == id;
        if (known)
            continue;
        JobState state = loaded.record.state;
        if (state == JobState::Done || state == JobState::Cancelled) {
            m_store->removeJob(id);
            continue;
        }
        if (state != JobState::Failed)
            state = m_settings.resumeOnStartup ? JobState::Queued : JobState::Paused;
        auto core = makeCore(id, loaded.record.request);
        core->expanded = loaded.expanded;
        core->tasks = std::move(loaded.tasks);
        core->sticky = loaded.record.stickyConflict;
        core->jobFailures = loaded.record.jobFailures;
        TransferJob* job = addJob(core, state);
        persist(job);
        ++restored;
        qCInfo(lcTransfer) << "restored job" << id << jobStateName(state);
    }
    schedule();
    return restored;
}

void TransferQueue::shutdown()
{
    m_shuttingDown = true;
    QList<TransferJob*> running;
    for (TransferJob* job : std::as_const(m_jobs)) {
        if (job->state() == JobState::Running) {
            pause(job);
            running.push_back(job);
        }
    }
    for (TransferJob* job : std::as_const(running)) {
        job->m_future.waitForFinished();
        onWorkerFinished(job);
    }
}

} // namespace s3fm
