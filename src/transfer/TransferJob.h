#pragma once

#include "core/OperationContext.h"
#include "transfer/TransferTypes.h"

#include <QFuture>
#include <QMutex>
#include <QObject>
#include <QWaitCondition>

#include <memory>
#include <optional>

namespace s3fm {

class BandwidthLimiter;
class ProviderRegistry;
class TransferStore;

namespace detail {

// State shared between a TransferJob (GUI thread) and the worker running it.
struct JobCore
{
    QString id;
    TransferRequest request;
    ProviderRegistry* registry = nullptr;
    std::shared_ptr<TransferStore> store; // null: not persisted
    BandwidthLimiter* limiter = nullptr;
    QString stagingDir;

    QMutex mutex;              // guards everything below
    TransferSettings settings; // snapshot taken when a run starts
    bool expanded = false;     // `tasks` holds the expanded file list
    QList<TransferTask> tasks;
    QList<TransferFailure> jobFailures; // failures not tied to a task
    ConflictPolicy sticky = ConflictPolicy::Ask;
    bool cancelRequested = false; // by the user (also through the conflict dialog)
    std::shared_ptr<OperationContext> runCtx;

    // Conflict prompts: askMutex lets one worker ask at a time; conflictMutex and
    // conflictAnswered carry the answer (worker waits, GUI answers).
    QMutex askMutex;
    QMutex conflictMutex;
    QWaitCondition conflictAnswered;
    std::optional<ConflictAnswer> answer;
};

} // namespace detail

// One copy, move or delete job in the TransferQueue. Lives on the GUI thread;
// its work runs on a worker pool. Created and controlled by TransferQueue.
class TransferJob : public QObject
{
    Q_OBJECT

public:
    ~TransferJob() override;

    const QString& id() const { return m_core->id; }
    const TransferRequest& request() const { return m_core->request; }
    TransferKind kind() const { return m_core->request.kind; }
    QString title() const;

    JobState state() const { return m_state; }
    bool isFinished() const
    {
        return m_state == JobState::Done || m_state == JobState::Failed || m_state == JobState::Cancelled;
    }
    bool isRunning() const { return m_state == JobState::Running; }
    TransferProgress progress() const { return m_progress; }
    // Items that failed (per file, plus job-level errors).
    QList<TransferFailure> failures() const;

    // Answer to the last conflictRequested().
    void answerConflict(const ConflictAnswer& answer);

Q_SIGNALS:
    void changed(); // state or progress
    void conflictRequested(const s3fm::ConflictInfo& info);
    void finished(); // reached Done, Failed or Cancelled

private:
    friend class TransferQueue;
    friend class JobRunner;
    TransferJob(std::shared_ptr<detail::JobCore> core, QObject* parent);
    void setState(JobState state);
    void stopWorker(); // cancels the current run and waits for it

    std::shared_ptr<detail::JobCore> m_core;
    JobState m_state = JobState::Queued;
    TransferProgress m_progress;
    QFuture<void> m_future;
    bool m_pauseRequested = false;
};

} // namespace s3fm
