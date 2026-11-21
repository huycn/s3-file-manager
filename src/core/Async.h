#pragma once

#include <QThreadPool>
#include <QtConcurrent/QtConcurrentRun>

#include <utility>

namespace s3fm {

// Pool used for all blocking provider calls (listing, stat, S3 requests).
QThreadPool* ioThreadPool();

// Waits for running I/O tasks to finish. Call before tearing down providers and the
// AWS SDK at application exit.
void shutdownIoThreadPool(int timeoutMs = 10000);

// Runs `fn` on the I/O pool and returns a QFuture of its result. Use
// QFuture::then(context, ...) to continue on the GUI thread.
template <class F> auto runIo(F&& fn)
{
    return QtConcurrent::run(ioThreadPool(), std::forward<F>(fn));
}

} // namespace s3fm
