#pragma once

#include <QtGlobal>

#include <atomic>
#include <functional>

namespace s3fm {

struct TransferParams;

// Cancellation flag and progress sink passed to long-running provider calls.
// Thread-safe: cancel() may be called from any thread while a worker runs.
class OperationContext
{
public:
    using ProgressFn = std::function<void(qint64 done, qint64 total)>;

    OperationContext() = default;
    explicit OperationContext(ProgressFn progress) : m_progress(std::move(progress)) {}
    OperationContext(const OperationContext&) = delete;
    OperationContext& operator=(const OperationContext&) = delete;

    bool isCancelled() const
    {
        return m_cancelled.load(std::memory_order_relaxed) || (m_parent && m_parent->isCancelled());
    }
    void cancel() { m_cancelled.store(true, std::memory_order_relaxed); }

    // Called by providers; `total` is -1 when unknown. Invoked on the worker thread.
    void reportProgress(qint64 done, qint64 total) const
    {
        if (m_progress)
            m_progress(done, total);
    }

    // Set before the context is handed to a worker.
    void setProgressHandler(ProgressFn fn) { m_progress = std::move(fn); }

    // Cancelling `parent` (which must outlive this context) cancels this one too.
    void setParent(const OperationContext* parent) { m_parent = parent; }

    // Optional transfer tuning/resume state for copy/upload/download (not owned).
    const TransferParams* params() const { return m_params; }
    void setParams(const TransferParams* params) { m_params = params; }

private:
    std::atomic_bool m_cancelled{false};
    ProgressFn m_progress;
    const TransferParams* m_params = nullptr;
    const OperationContext* m_parent = nullptr;
};

} // namespace s3fm
