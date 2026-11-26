#include "connections/SecretStore.h"

#include "core/Logging.h"

#include <QCoreApplication>
#include <QEventLoop>

#if __has_include(<qt6keychain/keychain.h>)
#include <qt6keychain/keychain.h>
#else
#include <qtkeychain/keychain.h>
#endif

namespace s3fm {

namespace {

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::SecretStore)
};

// Runs a keychain job to completion on the calling thread.
void runJob(QKeychain::Job& job)
{
    job.setAutoDelete(false);
    QEventLoop loop;
    QObject::connect(&job, &QKeychain::Job::finished, &loop, &QEventLoop::quit);
    job.start();
    loop.exec(QEventLoop::ExcludeUserInputEvents);
}

Error keychainError(const QKeychain::Job& job)
{
    return Error::make(ErrorCode::Io, Tr::tr("System keychain error"), job.errorString());
}

} // namespace

KeychainSecretStore::KeychainSecretStore(QString service) : m_service(std::move(service)) {}

Result<QString> KeychainSecretStore::read(const QString& key)
{
    QMutexLocker lock(&m_mutex);
    QKeychain::ReadPasswordJob job(m_service);
    job.setKey(key);
    runJob(job);
    if (job.error() == QKeychain::EntryNotFound)
        return Error::make(ErrorCode::NotFound, Tr::tr("No secret stored in the system keychain"));
    if (job.error() != QKeychain::NoError) {
        qCWarning(lcConnections) << "keychain read failed:" << job.errorString();
        return keychainError(job);
    }
    return job.textData();
}

VoidResult KeychainSecretStore::write(const QString& key, const QString& value)
{
    QMutexLocker lock(&m_mutex);
    QKeychain::WritePasswordJob job(m_service);
    job.setKey(key);
    job.setTextData(value);
    runJob(job);
    if (job.error() != QKeychain::NoError) {
        qCWarning(lcConnections) << "keychain write failed:" << job.errorString();
        return keychainError(job);
    }
    return {};
}

VoidResult KeychainSecretStore::remove(const QString& key)
{
    QMutexLocker lock(&m_mutex);
    QKeychain::DeletePasswordJob job(m_service);
    job.setKey(key);
    runJob(job);
    if (job.error() != QKeychain::NoError && job.error() != QKeychain::EntryNotFound)
        return keychainError(job);
    return {};
}

Result<QString> MemorySecretStore::read(const QString& key)
{
    QMutexLocker lock(&m_mutex);
    ++m_reads;
    if (!m_values.contains(key))
        return Error::make(ErrorCode::NotFound, Tr::tr("Secret not found"));
    return m_values.value(key);
}

VoidResult MemorySecretStore::write(const QString& key, const QString& value)
{
    QMutexLocker lock(&m_mutex);
    m_values.insert(key, value);
    return {};
}

VoidResult MemorySecretStore::remove(const QString& key)
{
    QMutexLocker lock(&m_mutex);
    m_values.remove(key);
    return {};
}

} // namespace s3fm
