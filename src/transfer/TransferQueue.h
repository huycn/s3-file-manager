#pragma once

#include "core/BandwidthLimiter.h"
#include "transfer/TransferJob.h"

#include <QList>
#include <QObject>

#include <memory>

class QThreadPool;

namespace s3fm {

class ProviderRegistry;
class TransferStore;

// Ordered list of copy/move/delete jobs. Runs up to TransferSettings::maxJobs at a
// time in queue order; jobs can be paused, resumed, cancelled, retried and
// reordered. With a TransferStore, unfinished jobs survive restarts: restore()
// brings them back (paused unless resumeOnStartup) and they continue from their
// last checkpoint. GUI thread only.
class TransferQueue : public QObject
{
    Q_OBJECT

public:
    explicit TransferQueue(ProviderRegistry* registry, QObject* parent = nullptr);
    ~TransferQueue() override;

    // Enables persistence below `store->root()`. Call before enqueue()/restore().
    void setStore(std::shared_ptr<TransferStore> store);
    TransferStore* store() const { return m_store.get(); }

    const TransferSettings& settings() const { return m_settings; }
    void setSettings(const TransferSettings& settings);

    TransferJob* enqueue(const TransferRequest& request);
    QList<TransferJob*> jobs() const { return m_jobs; }
    int indexOf(TransferJob* job) const { return int(m_jobs.indexOf(job)); }
    int activeCount() const; // queued or running
    int runningCount() const;

    void pause(TransferJob* job);
    void resume(TransferJob* job);
    void cancel(TransferJob* job);
    void retryFailed(TransferJob* job);
    void move(TransferJob* job, int newIndex);
    // Removes a finished or paused job (discarding its partial state).
    void remove(TransferJob* job);
    void clearFinished(); // removes Done and Cancelled jobs

    void pauseAll();
    void resumeAll();

    // Loads persisted jobs; returns how many were restored.
    int restore();
    // Pauses running jobs (keeping their resume state) and waits for the workers.
    void shutdown();

Q_SIGNALS:
    void jobAdded(s3fm::TransferJob* job);
    void jobAboutToBeRemoved(s3fm::TransferJob* job);
    void jobMoved(s3fm::TransferJob* job, int from, int to);
    void jobChanged(s3fm::TransferJob* job);
    void jobFinished(s3fm::TransferJob* job);
    void conflictRequested(s3fm::TransferJob* job, const s3fm::ConflictInfo& info);

private:
    TransferJob* addJob(std::shared_ptr<detail::JobCore> core, JobState state);
    std::shared_ptr<detail::JobCore> makeCore(const QString& id, const TransferRequest& request);
    void schedule();
    void start(TransferJob* job);
    void onWorkerFinished(TransferJob* job);
    void setJobState(TransferJob* job, JobState state);
    void persist(TransferJob* job);
    void discardAsync(TransferJob* job);

    ProviderRegistry* m_registry;
    std::shared_ptr<TransferStore> m_store;
    TransferSettings m_settings;
    BandwidthLimiter m_limiter;
    QList<TransferJob*> m_jobs;
    bool m_shuttingDown = false;
};

// Pool the transfer workers run on (one thread per running job; file and part
// workers are additional threads owned by the job).
QThreadPool* transferThreadPool();

} // namespace s3fm
