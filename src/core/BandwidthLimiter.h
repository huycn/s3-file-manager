#pragma once

#include <QMutex>
#include <QtGlobal>

#include <atomic>
#include <chrono>

namespace s3fm {

class OperationContext;

// Shared bandwidth budget for all transfers (bytes per second, 0 = unlimited).
// Thread-safe. Workers call consume() after moving bytes; it sleeps as long as
// needed to keep the average rate under the limit, allowing a one-second burst.
class BandwidthLimiter
{
public:
    void setRate(qint64 bytesPerSecond);
    qint64 rate() const { return m_rate.load(std::memory_order_relaxed); }

    // Accounts for `bytes` and blocks while over budget. Returns early when `ctx`
    // is cancelled.
    void consume(qint64 bytes, const OperationContext* ctx = nullptr);

private:
    using Clock = std::chrono::steady_clock;
    std::atomic<qint64> m_rate{0};
    QMutex m_mutex;
    Clock::time_point m_next{}; // when the budget used so far is paid off
};

} // namespace s3fm
