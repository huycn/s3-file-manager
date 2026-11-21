#pragma once

#include "transfer/TransferTypes.h"

#include <QList>
#include <QMutex>
#include <QString>

namespace s3fm {

// Persistent state of transfer jobs, so that they survive a restart or a crash.
// One directory per job below `root`:
//
//   job.json       request, options, state, sticky conflict answer (rewritten on change)
//   tasks.jsonl    the expanded file list, one task per line (written once)
//   progress.log   append-only "<index> <state>[ <error json>]" lines per finished task
//   ckpt-<n>.json  resume checkpoint of task n while it is in flight
//
// Thread-safe; writes go straight to disk (atomically where files are replaced).
class TransferStore
{
public:
    struct JobRecord
    {
        QString id;
        TransferRequest request;
        JobState state = JobState::Queued;
        ConflictPolicy stickyConflict = ConflictPolicy::Ask; // "apply to all" answer
        QList<TransferFailure> jobFailures;                  // failures not tied to a task
    };
    struct LoadedJob
    {
        JobRecord record;
        bool expanded = false; // tasks.jsonl present
        QList<TransferTask> tasks;
    };

    explicit TransferStore(QString root);

    const QString& root() const { return m_root; }
    QString jobDir(const QString& id) const;

    void saveJob(const JobRecord& job);
    void saveTasks(const QString& id, const QList<TransferTask>& tasks);
    void appendTaskState(const QString& id, int index, TaskState state, const Error& error = {});
    void saveCheckpoint(const QString& id, int index, const TransferCheckpoint& checkpoint);
    void removeCheckpoint(const QString& id, int index);
    void removeJob(const QString& id);

    // Every job found under root(), with task states and checkpoints applied.
    // Unreadable job directories are skipped (and logged).
    QList<LoadedJob> loadAll() const;

private:
    QString m_root;
    mutable QMutex m_mutex;
};

} // namespace s3fm
