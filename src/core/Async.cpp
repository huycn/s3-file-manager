#include "core/Async.h"

#include "core/Logging.h"

namespace s3fm {

namespace {
QThreadPool* makePool()
{
    auto* pool = new QThreadPool;
    pool->setObjectName(QStringLiteral("s3fm-io"));
    pool->setMaxThreadCount(qMax(8, QThread::idealThreadCount()));
    pool->setExpiryTimeout(30000);
    return pool;
}
} // namespace

QThreadPool* ioThreadPool()
{
    static QThreadPool* pool = makePool(); // intentionally leaked; drained by shutdownIoThreadPool()
    return pool;
}

void shutdownIoThreadPool(int timeoutMs)
{
    QThreadPool* pool = ioThreadPool();
    pool->clear();
    if (!pool->waitForDone(timeoutMs))
        qCWarning(lcCore) << "I/O tasks still running at shutdown";
}

} // namespace s3fm
