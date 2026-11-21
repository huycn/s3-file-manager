#pragma once

// Internal: executes one TransferJob on a worker thread.

#include "transfer/TransferJob.h"
#include "transfer/TransferMath.h"

#include <QElapsedTimer>
#include <QHash>
#include <QSet>

#include <atomic>
#include <memory>

namespace s3fm {

class Provider;

class JobRunner
{
public:
    JobRunner(std::shared_ptr<detail::JobCore> core, TransferJob* job);
    void run();

    // Releases partial state (incomplete multipart uploads, partial and staging
    // files) of the job's unfinished tasks. Blocking; call on a worker thread.
    static void discardPartials(const std::shared_ptr<detail::JobCore>& core);
    static QString stagingFile(const detail::JobCore& core, int index);

private:
    enum class Decision
    {
        Overwrite,
        Skip,
        Rename,
        Cancel
    };

    bool cancelled() const { return m_master->isCancelled(); }
    void jobFail(const Location& item, const Error& error);
    void publish(bool force = false);
    void setStage(TransferProgress::Stage stage, const QString& item = {});

    Decision resolveConflict(const Entry& source, const Entry& existing);
    Location uniqueTarget(const Location& target, OperationContext& ctx);

    bool plan(QList<TransferTask>& tasks);
    bool expandSource(int top, const Entry& source, const Location& target, QList<TransferTask>& tasks);
    void initCounters();
    void executeDirectories();
    void executeFiles();
    void workerLoop();
    void processFile(int index);
    VoidResult transferFile(int index, const TransferTask& task, const Location& target,
                            OperationContext& ctx);
    void ensureParent(const Location& target, OperationContext& ctx);
    void markTask(int index, TaskState state, const Error& error = {});
    void finishMove();
    void runDelete();

    std::shared_ptr<detail::JobCore> m_core;
    detail::JobCore& c;
    TransferJob* m_job;
    std::shared_ptr<OperationContext> m_master;
    TransferSettings m_settings;
    const TransferRequest& m_req;
    transfer::PathFilter m_filter;
    std::shared_ptr<Provider> m_src;
    std::shared_ptr<Provider> m_dst;

    bool m_implicitDirs = false;
    QSet<Location> m_nonEmptyDirs;
    QMutex m_dirsMutex;
    QSet<Location> m_ensuredDirs;

    QList<int> m_fileOrder;
    std::atomic<int> m_cursor{0};

    QMutex m_progressMutex; // guards the progress fields below
    TransferProgress m_progress;
    qint64 m_doneBytes = 0;
    QHash<int, qint64> m_inflight;
    QHash<int, QString> m_inflightNames;
    QElapsedTimer m_publishTimer;
    QElapsedTimer m_clock;
    qint64 m_sampleMs = 0;
    qint64 m_sampleBytes = 0;
    int m_renamed = 0;
};

} // namespace s3fm
