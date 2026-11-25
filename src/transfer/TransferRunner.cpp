#include "transfer/TransferRunner.h"

#include "core/Logging.h"
#include "core/Provider.h"
#include "core/ProviderRegistry.h"
#include "transfer/TransferStore.h"

#include <QCoreApplication>
#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QRandomGenerator>
#include <QThread>

#include <mutex>
#include <thread>
#include <vector>

namespace s3fm {

namespace {

QString tr(const char* text, int n = -1)
{
    return QCoreApplication::translate("s3fm::TransferJob", text, nullptr, n);
}

// Appends a '/'-separated relative path to `base`; the last segment is a directory
// if `isDir`. Empty segments are preserved (S3 keys may contain "//").
Location buildTarget(const Location& base, const QString& rel, bool isDir)
{
    const QStringList parts = rel.split(u'/');
    Location out = base;
    for (qsizetype i = 0; i < parts.size(); ++i) {
        const bool last = i == parts.size() - 1;
        out = out.child(parts[i], last ? isDir : true);
    }
    return out;
}

bool isRetryable(const Error& e)
{
    return e.retryable || e.code == ErrorCode::Network || e.code == ErrorCode::Timeout ||
           e.code == ErrorCode::Throttled;
}

bool localExists(const Location& l)
{
    const QFileInfo info(l.localPath());
    return info.exists() || info.isSymLink();
}

} // namespace

JobRunner::JobRunner(std::shared_ptr<detail::JobCore> core, TransferJob* job)
    : m_core(std::move(core)), c(*m_core), m_job(job), m_req(c.request),
      m_filter(c.request.options.include, c.request.options.exclude)
{
    QMutexLocker lock(&c.mutex);
    m_master = c.runCtx;
    m_settings = c.settings;
}

QString JobRunner::stagingFile(const detail::JobCore& core, int index)
{
    return core.stagingDir + u'/' + core.id + QStringLiteral("-%1.tmp").arg(index);
}

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

void JobRunner::publish(bool force)
{
    TransferProgress snapshot;
    {
        QMutexLocker lock(&m_progressMutex);
        if (!force && m_publishTimer.isValid() && m_publishTimer.elapsed() < 250)
            return;
        m_publishTimer.start();
        qint64 inflight = 0;
        for (auto it = m_inflight.cbegin(); it != m_inflight.cend(); ++it)
            inflight += it.value();
        m_progress.bytesDone =
            qMin(m_doneBytes + inflight, qMax(m_progress.bytesTotal, m_doneBytes + inflight));
        // Any in-flight name will do. A guarded iterator rather than isEmpty() + cbegin().value():
        // GCC at -O3 can't link the two and raises -Wnull-dereference inside QHash.
        if (auto it = m_inflightNames.cbegin(); it != m_inflightNames.cend())
            m_progress.currentItem = it.value();

        // Smoothed rate: moves a third of the way to the latest sample per second.
        const qint64 now = m_clock.elapsed();
        const qint64 dt = now - m_sampleMs;
        if (dt >= 200) {
            const double instant = double(m_progress.bytesDone - m_sampleBytes) * 1000.0 / double(dt);
            const double weight = qMin(1.0, double(dt) / 3000.0);
            m_progress.bytesPerSecond =
                m_sampleMs == 0 ? instant
                                : m_progress.bytesPerSecond + (instant - m_progress.bytesPerSecond) * weight;
            m_progress.bytesPerSecond = qMax(0.0, m_progress.bytesPerSecond);
            m_sampleMs = now;
            m_sampleBytes = m_progress.bytesDone;
        }
        const qint64 left = m_progress.bytesTotal - m_progress.bytesDone;
        m_progress.etaSeconds = m_progress.bytesPerSecond > 1 && left > 0
                                    ? qint64(double(left) / m_progress.bytesPerSecond)
                                    : (left <= 0 ? 0 : -1);
        snapshot = m_progress;
    }
    TransferJob* job = m_job;
    QMetaObject::invokeMethod(
        job,
        [job, snapshot] {
            job->m_progress = snapshot;
            Q_EMIT job->changed();
        },
        Qt::QueuedConnection);
}

void JobRunner::setStage(TransferProgress::Stage stage, const QString& item)
{
    {
        QMutexLocker lock(&m_progressMutex);
        m_progress.stage = stage;
        m_progress.currentItem = item;
    }
    publish(true);
}

void JobRunner::jobFail(const Location& item, const Error& error)
{
    if (error.isCancelled())
        return;
    qCWarning(lcTransfer) << "transfer failed for" << item.displayString() << error.toString();
    QMutexLocker lock(&c.mutex);
    c.jobFailures.push_back({item.displayString(), error});
}

// ---------------------------------------------------------------------------
// Main flow
// ---------------------------------------------------------------------------

void JobRunner::run()
{
    m_clock.start();
    if (m_req.sources.isEmpty()) {
        setStage(TransferProgress::Stage::Finished);
        return;
    }
    m_src = c.registry->providerFor(m_req.sources.first().location);
    if (m_req.kind == TransferKind::Delete) {
        if (!m_src)
            jobFail(m_req.sources.first().location,
                    Error::make(ErrorCode::NotFound, tr("No provider for this location")));
        else
            runDelete();
        setStage(TransferProgress::Stage::Finished);
        return;
    }
    m_dst = c.registry->providerFor(m_req.destination);
    if (!m_src || !m_dst) {
        jobFail(m_req.destination, Error::make(ErrorCode::NotFound, tr("No provider for this location")));
        setStage(TransferProgress::Stage::Finished);
        return;
    }
    m_implicitDirs = m_dst->capabilities(m_req.destination).testFlag(Capability::ImplicitDirectories);

    bool expanded = false;
    {
        QMutexLocker lock(&c.mutex);
        expanded = c.expanded;
    }
    if (!expanded) {
        QList<TransferTask> tasks;
        const bool planned = plan(tasks);
        if (!planned || cancelled()) {
            setStage(TransferProgress::Stage::Finished);
            return;
        }
        QMutexLocker lock(&c.mutex);
        c.tasks = std::move(tasks);
        c.expanded = true;
        if (c.store)
            c.store->saveTasks(c.id, c.tasks);
    }

    initCounters();
    setStage(TransferProgress::Stage::Transferring);
    executeDirectories();
    if (!cancelled())
        executeFiles();
    if (!cancelled() && m_req.kind == TransferKind::Move)
        finishMove();
    setStage(TransferProgress::Stage::Finished);
}

// ---------------------------------------------------------------------------
// Conflicts
// ---------------------------------------------------------------------------

JobRunner::Decision JobRunner::resolveConflict(const Entry& source, const Entry& existing)
{
    QMutexLocker askLock(&c.askMutex); // one question at a time
    if (cancelled())
        return Decision::Cancel;
    ConflictPolicy policy;
    {
        QMutexLocker lock(&c.mutex);
        policy = c.sticky != ConflictPolicy::Ask ? c.sticky : m_req.options.conflict;
    }
    if (policy == ConflictPolicy::Ask) {
        QMutexLocker conflictLock(&c.conflictMutex);
        c.answer.reset();
        TransferJob* job = m_job;
        const ConflictInfo info{source, existing};
        QMetaObject::invokeMethod(
            job, [job, info] { Q_EMIT job->conflictRequested(info); }, Qt::QueuedConnection);
        while (!c.answer && !cancelled())
            c.conflictAnswered.wait(&c.conflictMutex, 200);
        if (!c.answer)
            return Decision::Cancel; // paused or cancelled while asking
        const ConflictAnswer answer = *c.answer;
        c.answer.reset();
        if (answer.cancel) {
            {
                QMutexLocker lock(&c.mutex);
                c.cancelRequested = true;
            }
            m_master->cancel();
            return Decision::Cancel;
        }
        policy = answer.policy == ConflictPolicy::Ask ? ConflictPolicy::Skip : answer.policy;
        if (answer.applyToAll) {
            QMutexLocker lock(&c.mutex);
            c.sticky = policy;
        }
    }
    switch (policy) {
    case ConflictPolicy::Overwrite:
        return Decision::Overwrite;
    case ConflictPolicy::Rename:
        return Decision::Rename;
    case ConflictPolicy::OverwriteIfNewer:
        return source.modified.isValid() && existing.modified.isValid() && source.modified > existing.modified
                   ? Decision::Overwrite
                   : Decision::Skip;
    case ConflictPolicy::OverwriteIfSizeDiffers:
        return source.size != existing.size ? Decision::Overwrite : Decision::Skip;
    case ConflictPolicy::Skip:
    case ConflictPolicy::Ask:
        break;
    }
    return Decision::Skip;
}

Location JobRunner::uniqueTarget(const Location& target, OperationContext& ctx)
{
    const bool dir = target.isDirectoryLike();
    const Location parent = target.parent();
    for (int n = 2; n < 10000; ++n) {
        Location candidate = parent.child(transfer::numberedName(target.name(), n), dir);
        auto exists = m_dst->exists(candidate, ctx);
        if (exists && !exists.value())
            return candidate;
        if (!exists)
            return {};
    }
    return {};
}

// ---------------------------------------------------------------------------
// Planning: destination, direct renames, expansion into tasks
// ---------------------------------------------------------------------------

bool JobRunner::plan(QList<TransferTask>& tasks)
{
    setStage(TransferProgress::Stage::Scanning);
    OperationContext& ctx = *m_master;
    const bool move = m_req.kind == TransferKind::Move;

    Location dstDir;
    bool renameSingle = false;
    if (m_req.sources.size() == 1 && !m_req.destination.isDirectoryLike() && !m_req.destinationIsDirectory) {
        auto st = m_dst->stat(m_req.destination, ctx);
        if (st && st->isDirectory()) {
            dstDir = m_req.destination.asDirectory();
        } else if (!st && st.error().code != ErrorCode::NotFound) {
            jobFail(m_req.destination, st.error());
            return false;
        } else {
            renameSingle = true;
        }
    } else {
        dstDir = m_req.destination.asDirectory();
    }

    const Location parentToEnsure = renameSingle ? m_req.destination.parent() : dstDir;
    if (auto ex = m_dst->exists(parentToEnsure, ctx); !ex) {
        jobFail(parentToEnsure, ex.error());
        return false;
    } else if (!ex.value()) {
        if (auto r = m_dst->makeDirectory(parentToEnsure, ctx);
            !r && r.error().code != ErrorCode::AlreadyExists) {
            jobFail(parentToEnsure, r.error());
            return false;
        }
    }

    QList<Location> targets;
    QList<int> pending;
    for (int i = 0; i < m_req.sources.size(); ++i) {
        const Entry& src = m_req.sources[i];
        Location target;
        if (renameSingle)
            target = src.isDirectory() ? m_req.destination.asDirectory() : m_req.destination;
        else
            target = dstDir.child(src.name, src.isDirectory());
        targets.push_back(target);
        if (target == src.location) {
            jobFail(src.location,
                    Error::make(ErrorCode::InvalidArgument, tr("Source and destination are the same")));
            continue;
        }
        if (src.isDirectory() && src.location.isAncestorOf(target)) {
            jobFail(src.location,
                    Error::make(ErrorCode::InvalidArgument, tr("Cannot copy a folder into itself")));
            continue;
        }
        pending.push_back(i);
    }

    // Move within one provider that can rename (local disk): try that first.
    if (move && m_src == m_dst &&
        m_src->capabilities(m_req.sources.first().location).testFlag(Capability::Rename)) {
        QList<int> needCopy;
        for (int i : std::as_const(pending)) {
            if (cancelled())
                return false;
            const Entry& src = m_req.sources[i];
            Location target = targets[i];
            setStage(TransferProgress::Stage::Transferring, src.name);
            auto existing = m_dst->stat(target, ctx);
            if (existing) {
                if (src.isDirectory() || existing->isDirectory()) {
                    needCopy.push_back(i); // merge through copy + delete
                    continue;
                }
                const Decision d = resolveConflict(src, *existing);
                if (d == Decision::Cancel)
                    return false;
                if (d == Decision::Skip) {
                    QMutexLocker lock(&m_progressMutex);
                    ++m_progress.filesSkipped;
                    continue;
                }
                if (d == Decision::Rename) {
                    target = uniqueTarget(target, ctx);
                    if (!target.isValid()) {
                        jobFail(targets[i], Error::make(ErrorCode::AlreadyExists, tr("No free name found")));
                        continue;
                    }
                    targets[i] = target;
                } else if (auto r = m_dst->remove(EntryList{*existing}, ctx); !r) {
                    jobFail(target, r.error());
                    continue;
                }
            } else if (existing.error().code != ErrorCode::NotFound) {
                jobFail(target, existing.error());
                continue;
            }
            const VoidResult r = m_src->rename(src.location, target, ctx);
            // Source gone but target present: already moved by an earlier, interrupted run.
            const auto movedEarlier = [&] {
                if (r.error().code != ErrorCode::NotFound)
                    return false;
                auto there = m_dst->exists(target, ctx);
                return there && there.value();
            };
            if (r || movedEarlier()) {
                ++m_renamed;
            } else if (r.error().code == ErrorCode::Unsupported) {
                needCopy.push_back(i);
            } else {
                jobFail(src.location, r.error());
            }
        }
        pending = needCopy;
    }

    for (int i : std::as_const(pending)) {
        if (cancelled())
            return false;
        if (!expandSource(i, m_req.sources[i], targets[i], tasks))
            return false;
    }
    return !cancelled();
}

bool JobRunner::expandSource(int top, const Entry& source, const Location& target, QList<TransferTask>& tasks)
{
    TransferTask topTask;
    topTask.source = source;
    topTask.target = target;
    topTask.top = top;
    if (!source.isDirectory()) {
        tasks.push_back(topTask); // explicitly selected files are never filtered
        QMutexLocker lock(&m_progressMutex);
        ++m_progress.filesTotal;
        m_progress.bytesTotal += topTask.size();
        return true;
    }

    const qsizetype topIndex = tasks.size();
    tasks.push_back(topTask);
    const bool filtered = !m_filter.isEmpty();
    bool skippedSomething = filtered;
    QStringList skippedDirs; // relative paths whose contents are skipped
    QList<TransferTask> found;
    const VoidResult walked = m_src->walk(
        source.location,
        [&](const Entry& e) {
            const QString rel = source.location.relativePathTo(e.location);
            for (const QString& d : std::as_const(skippedDirs)) {
                if (rel.startsWith(d + u'/'))
                    return true;
            }
            if (e.isSymlink && !m_req.options.followSymlinks) {
                skippedSomething = true;
                if (e.isDirectory())
                    skippedDirs.push_back(rel);
                return true;
            }
            if (e.isDirectory()) {
                if (!m_filter.acceptsDirectory(rel)) {
                    skippedSomething = true;
                    skippedDirs.push_back(rel);
                    return true;
                }
                if (m_filter.hasInclude())
                    return true; // created on demand for the files that match
            } else if (!m_filter.acceptsFile(rel)) {
                return true;
            }
            TransferTask t;
            t.source = e;
            t.target = buildTarget(target, rel, e.isDirectory());
            t.top = top;
            found.push_back(t);
            QMutexLocker lock(&m_progressMutex);
            if (!e.isDirectory()) {
                ++m_progress.filesTotal;
                m_progress.bytesTotal += t.size();
            }
            m_progress.currentItem = e.name;
            lock.unlock();
            publish();
            return true;
        },
        *m_master);
    if (!walked) {
        if (!walked.error().isCancelled())
            jobFail(source.location, walked.error());
        // Leave this source out entirely; a partial listing must not drive a move.
        tasks.resize(topIndex);
        QMutexLocker lock(&m_progressMutex);
        for (const TransferTask& t : std::as_const(found)) {
            if (!t.isDirectory()) {
                --m_progress.filesTotal;
                m_progress.bytesTotal -= t.size();
            }
        }
        return walked.error().isCancelled() ? false : true;
    }
    // On move, keep the source folder if it still holds items that were left out.
    tasks[topIndex].keepSource = skippedSomething;
    tasks.append(found);
    return true;
}

// ---------------------------------------------------------------------------
// Execution
// ---------------------------------------------------------------------------

void JobRunner::initCounters()
{
    QMutexLocker lock(&c.mutex);
    QMutexLocker plock(&m_progressMutex);
    m_progress.filesTotal = 0;
    m_progress.bytesTotal = 0;
    m_progress.filesDone = m_renamed;
    m_progress.filesFailed = 0;
    m_doneBytes = 0;
    for (const TransferTask& t : std::as_const(c.tasks)) {
        if (m_implicitDirs) {
            const Location parent = t.target.parent();
            if (parent.isValid())
                m_nonEmptyDirs.insert(parent.asDirectory());
        }
        if (t.isDirectory())
            continue;
        ++m_progress.filesTotal;
        m_progress.bytesTotal += t.size();
        switch (t.state) {
        case TaskState::Done:
            ++m_progress.filesDone;
            m_doneBytes += t.size();
            break;
        case TaskState::Skipped:
            ++m_progress.filesDone;
            ++m_progress.filesSkipped;
            m_doneBytes += t.size();
            break;
        case TaskState::Failed:
            ++m_progress.filesDone;
            ++m_progress.filesFailed;
            m_doneBytes += t.size();
            break;
        case TaskState::Pending:
            break;
        }
    }
    m_progress.filesTotal += m_renamed;
}

void JobRunner::markTask(int index, TaskState state, const Error& error)
{
    qint64 size = 0;
    bool isDir = false;
    {
        QMutexLocker lock(&c.mutex);
        TransferTask& t = c.tasks[index];
        t.state = state;
        t.error = error;
        if (state != TaskState::Failed)
            t.checkpoint.clear();
        size = t.size();
        isDir = t.isDirectory();
    }
    if (c.store) {
        c.store->appendTaskState(c.id, index, state, error);
        if (state != TaskState::Failed)
            c.store->removeCheckpoint(c.id, index);
    }
    if (state == TaskState::Failed)
        qCWarning(lcTransfer) << "task" << index << "failed:" << error.toString();
    {
        QMutexLocker lock(&m_progressMutex);
        m_inflight.remove(index);
        m_inflightNames.remove(index);
        if (!isDir) {
            ++m_progress.filesDone;
            m_doneBytes += size;
            if (state == TaskState::Skipped)
                ++m_progress.filesSkipped;
            if (state == TaskState::Failed)
                ++m_progress.filesFailed;
        }
    }
    publish();
}

void JobRunner::executeDirectories()
{
    QList<int> dirs;
    {
        QMutexLocker lock(&c.mutex);
        for (int i = 0; i < c.tasks.size(); ++i) {
            if (c.tasks[i].isDirectory() && c.tasks[i].state == TaskState::Pending)
                dirs.push_back(i);
        }
    }
    for (int i : std::as_const(dirs)) {
        if (cancelled())
            return;
        Location target;
        {
            QMutexLocker lock(&c.mutex);
            target = c.tasks[i].target;
        }
        if (m_implicitDirs && m_nonEmptyDirs.contains(target.asDirectory())) {
            markTask(i, TaskState::Done);
            continue;
        }
        const VoidResult r = m_dst->makeDirectory(target, *m_master);
        if (r || r.error().code == ErrorCode::AlreadyExists) {
            QMutexLocker lock(&m_dirsMutex);
            m_ensuredDirs.insert(target.asDirectory());
            lock.unlock();
            markTask(i, TaskState::Done);
        } else if (!r.error().isCancelled()) {
            markTask(i, TaskState::Failed, r.error());
        }
    }
}

void JobRunner::executeFiles()
{
    {
        QMutexLocker lock(&c.mutex);
        for (int i = 0; i < c.tasks.size(); ++i) {
            if (!c.tasks[i].isDirectory() && c.tasks[i].state == TaskState::Pending)
                m_fileOrder.push_back(i);
        }
    }
    const int workers = int(qMin<qsizetype>(qMax(1, m_settings.filesPerJob), m_fileOrder.size()));
    std::vector<std::thread> extra;
    for (int k = 1; k < workers; ++k)
        extra.emplace_back([this] { workerLoop(); });
    workerLoop();
    for (std::thread& t : extra)
        t.join();
}

void JobRunner::workerLoop()
{
    while (!cancelled()) {
        const int pos = m_cursor.fetch_add(1);
        if (pos >= m_fileOrder.size())
            return;
        processFile(m_fileOrder[pos]);
    }
}

void JobRunner::ensureParent(const Location& target, OperationContext& ctx)
{
    if (m_implicitDirs)
        return;
    const Location parent = target.parent().asDirectory();
    {
        QMutexLocker lock(&m_dirsMutex);
        if (m_ensuredDirs.contains(parent))
            return;
    }
    const VoidResult r = m_dst->makeDirectory(parent, ctx);
    if (r || r.error().code == ErrorCode::AlreadyExists) {
        QMutexLocker lock(&m_dirsMutex);
        m_ensuredDirs.insert(parent);
    }
}

void JobRunner::processFile(int index)
{
    TransferTask task;
    {
        QMutexLocker lock(&c.mutex);
        task = c.tasks[index];
        c.tasks[index].started = true;
    }
    {
        QMutexLocker lock(&m_progressMutex);
        m_inflight.insert(index, 0);
        m_inflightNames.insert(index, task.source.name);
    }
    publish();

    OperationContext ctx;
    ctx.setParent(m_master.get());
    Location target = task.target;

    auto existing = m_dst->stat(target, ctx);
    if (existing) {
        if (existing->isDirectory()) {
            markTask(index, TaskState::Failed,
                     Error::make(ErrorCode::AlreadyExists, tr("A folder with this name already exists")));
            return;
        }
        switch (resolveConflict(task.source, *existing)) {
        case Decision::Cancel:
            return; // stays pending
        case Decision::Skip:
            markTask(index, TaskState::Skipped);
            return;
        case Decision::Rename:
            target = uniqueTarget(target, ctx);
            if (!target.isValid()) {
                markTask(index, TaskState::Failed,
                         Error::make(ErrorCode::AlreadyExists, tr("No free name found")));
                return;
            }
            break;
        case Decision::Overwrite:
            break;
        }
    } else if (existing.error().isCancelled()) {
        return;
    } else if (existing.error().code != ErrorCode::NotFound) {
        markTask(index, TaskState::Failed, existing.error());
        return;
    }
    ensureParent(target, ctx);

    for (int attempt = 0;; ++attempt) {
        const VoidResult r = transferFile(index, task, target, ctx);
        if (r) {
            markTask(index, TaskState::Done);
            return;
        }
        if (r.error().isCancelled() || cancelled()) {
            QMutexLocker lock(&m_progressMutex);
            m_inflight.remove(index);
            m_inflightNames.remove(index);
            return; // paused or cancelled: stays pending
        }
        if (!isRetryable(r.error()) || attempt >= m_settings.maxRetries) {
            markTask(index, TaskState::Failed, r.error());
            return;
        }
        const int delay = transfer::retryDelayMs(attempt + 1, QRandomGenerator::global()->generateDouble(),
                                                 m_settings.retryBaseDelayMs);
        qCInfo(lcTransfer) << "retrying" << task.source.location.displayString() << "in" << delay
                           << "ms after" << r.error().toString();
        // Reload the checkpoint the failed attempt left behind.
        {
            QMutexLocker lock(&c.mutex);
            task.checkpoint = c.tasks[index].checkpoint;
        }
        for (int waited = 0; waited < delay && !cancelled(); waited += 50)
            QThread::msleep(50);
        if (cancelled())
            return;
    }
}

VoidResult JobRunner::transferFile(int index, const TransferTask& task, const Location& target,
                                   OperationContext& ctx)
{
    const qint64 size = task.size();
    TransferCheckpoint checkpoint = task.checkpoint;
    TransferParams params;
    params.multipartThreshold = m_settings.multipartThreshold;
    params.partSize = m_settings.partSize;
    params.partConcurrency = m_settings.partConcurrency;
    params.verify = m_req.options.verify;
    params.preserveMtime = m_req.options.preserveMtime;
    params.detectContentType = m_req.options.detectContentType;
    params.storageClass = m_req.options.storageClass;
    params.sse = m_req.options.sse;
    params.sseKmsKeyId = m_req.options.sseKmsKeyId;
    params.sourceVersionId = task.source.versionId; // a specific version picked in the versions view
    params.limiter = c.limiter;
    params.resumable = true;
    params.checkpoint = &checkpoint;
    params.checkpointChanged = [this, index, &checkpoint] {
        {
            QMutexLocker lock(&c.mutex);
            c.tasks[index].checkpoint = checkpoint;
        }
        if (c.store)
            c.store->saveCheckpoint(c.id, index, checkpoint);
    };
    ctx.setParams(&params);

    auto progressFor = [this, index](qint64 offset, double scale) {
        return [this, index, offset, scale](qint64 done, qint64) {
            {
                // lock_guard, not QMutexLocker: the latter's null check makes the analyzer think `this` may
                // be null.
                const std::lock_guard lock(m_progressMutex);
                m_inflight[index] = qint64(double(offset + done) * scale);
            }
            publish();
        };
    };

    const Location& from = task.source.location;
    if (m_src == m_dst && m_src->capabilities(from).testFlag(Capability::ServerSideCopy)) {
        ctx.setProgressHandler(progressFor(0, 1.0));
        return m_src->copy(from, target, ctx);
    }
    if (from.isLocal()) {
        ctx.setProgressHandler(progressFor(0, 1.0));
        return m_dst->upload(from.localPath(), target, ctx);
    }
    if (target.isLocal()) {
        ctx.setProgressHandler(progressFor(0, 1.0));
        return m_src->download(from, target.localPath(), ctx);
    }
    // Different remote providers: stage through a file kept for resuming.
    const QString staging = stagingFile(c, index);
    QDir().mkpath(QFileInfo(staging).absolutePath());
    const QFileInfo staged(staging);
    if (!(staged.exists() && size > 0 && staged.size() == size)) {
        ctx.setProgressHandler(progressFor(0, 0.5));
        if (auto r = m_src->download(from, staging, ctx); !r)
            return r;
    }
    ctx.setProgressHandler(progressFor(size, 0.5));
    const VoidResult r = m_dst->upload(staging, target, ctx);
    if (r)
        QFile::remove(staging);
    return r;
}

// ---------------------------------------------------------------------------
// Move: delete what was copied
// ---------------------------------------------------------------------------

void JobRunner::finishMove()
{
    setStage(TransferProgress::Stage::Deleting);
    EntryList files;
    EntryList dirs;
    {
        QMutexLocker lock(&c.mutex);
        QHash<int, bool> topComplete;
        for (const TransferTask& t : std::as_const(c.tasks)) {
            const bool ok = t.state == TaskState::Done;
            topComplete[t.top] = topComplete.value(t.top, true) && ok;
            if (ok && !t.isDirectory() && (!t.source.location.isLocal() || localExists(t.source.location)))
                files.push_back(t.source);
        }
        // A folder goes once everything below it was moved (and nothing was filtered out).
        for (const TransferTask& t : std::as_const(c.tasks)) {
            if (t.isDirectory() && t.source.location == m_req.sources.value(t.top).location &&
                topComplete.value(t.top) && !t.keepSource &&
                (!t.source.location.isLocal() || localExists(t.source.location)))
                dirs.push_back(m_req.sources[t.top]);
        }
    }
    OperationContext ctx;
    ctx.setParent(m_master.get());
    if (!files.isEmpty()) {
        if (auto r = m_src->remove(files, ctx); !r)
            jobFail(files.first().location.parent(), r.error());
    }
    if (!dirs.isEmpty() && !cancelled()) {
        if (auto r = m_src->remove(dirs, ctx); !r)
            jobFail(dirs.first().location.parent(), r.error());
    }
}

void JobRunner::runDelete()
{
    EntryList items;
    for (const Entry& e : m_req.sources) {
        if (!e.location.isLocal() || localExists(e.location))
            items.push_back(e);
    }
    setStage(TransferProgress::Stage::Deleting, items.size() == 1 ? items.first().name : QString());
    OperationContext ctx;
    ctx.setParent(m_master.get());
    ctx.setProgressHandler([this](qint64 done, qint64) {
        {
            const std::lock_guard lock(m_progressMutex); // see progressFor() in transferFile()
            m_progress.filesDone = int(done);
        }
        publish();
    });
    if (items.isEmpty())
        return;
    const VoidResult r = m_src->remove(items, ctx);
    if (!r)
        jobFail(items.size() == 1 ? items.first().location : items.first().location.parent(), r.error());
}

// ---------------------------------------------------------------------------
// Cleanup after cancel / removal
// ---------------------------------------------------------------------------

void JobRunner::discardPartials(const std::shared_ptr<detail::JobCore>& core)
{
    QList<QPair<int, TransferTask>> unfinished;
    {
        QMutexLocker lock(&core->mutex);
        for (int i = 0; i < core->tasks.size(); ++i) {
            const TransferTask& t = core->tasks[i];
            if (!t.isDirectory() && t.state != TaskState::Done && t.state != TaskState::Skipped &&
                (t.started || !t.checkpoint.isEmpty()))
                unfinished.push_back({i, t});
        }
    }
    for (const auto& [index, t] : std::as_const(unfinished)) {
        auto src = core->registry->providerFor(t.source.location);
        auto dst = core->registry->providerFor(t.target);
        if (!src || !dst)
            continue;
        const Location& from = t.source.location;
        if ((src == dst && src->capabilities(from).testFlag(Capability::ServerSideCopy)) || from.isLocal()) {
            dst->discardPartialTransfer(t.target, {}, t.checkpoint);
        } else if (t.target.isLocal()) {
            src->discardPartialTransfer(from, t.target.localPath(), t.checkpoint);
        } else {
            const QString staging = stagingFile(*core, index);
            src->discardPartialTransfer(from, staging, t.checkpoint);
            dst->discardPartialTransfer(t.target, {}, t.checkpoint);
            QFile::remove(staging);
        }
        if (core->store)
            core->store->removeCheckpoint(core->id, index);
    }
}

} // namespace s3fm
