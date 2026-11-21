#include "core/BandwidthLimiter.h"

#include "core/OperationContext.h"

#include <QThread>

namespace s3fm {

void BandwidthLimiter::setRate(qint64 bytesPerSecond)
{
    m_rate.store(qMax<qint64>(0, bytesPerSecond), std::memory_order_relaxed);
    QMutexLocker lock(&m_mutex);
    m_next = {};
}

void BandwidthLimiter::consume(qint64 bytes, const OperationContext* ctx)
{
    const qint64 rate = m_rate.load(std::memory_order_relaxed);
    if (rate <= 0 || bytes <= 0)
        return;
    Clock::time_point wakeAt;
    {
        QMutexLocker lock(&m_mutex);
        const Clock::time_point now = Clock::now();
        // Unused budget accumulates for at most one second (burst).
        const Clock::time_point floor = now - std::chrono::seconds(1);
        if (m_next < floor)
            m_next = floor;
        m_next += std::chrono::microseconds(bytes * 1000000 / rate);
        wakeAt = m_next;
    }
    while (true) {
        const auto left =
            std::chrono::duration_cast<std::chrono::milliseconds>(wakeAt - Clock::now()).count();
        if (left <= 0 || (ctx && ctx->isCancelled()))
            return;
        QThread::msleep(static_cast<unsigned long>(qMin<qint64>(left, 100)));
    }
}

} // namespace s3fm
