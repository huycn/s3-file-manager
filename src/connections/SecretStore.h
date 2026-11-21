#pragma once

#include "core/Error.h"

#include <QHash>
#include <QMutex>
#include <QString>

namespace s3fm {

// Storage for secrets (one opaque string per key). Implementations must be
// thread-safe; calls may block.
class SecretStore
{
public:
    virtual ~SecretStore() = default;
    // NotFound if the key has no stored secret.
    virtual Result<QString> read(const QString& key) = 0;
    virtual VoidResult write(const QString& key, const QString& value) = 0;
    virtual VoidResult remove(const QString& key) = 0;
};

// OS keychain via QtKeychain (Secret Service / KWallet on Linux, Credential
// Manager on Windows, Keychain on macOS). Blocks the calling thread on a local
// event loop until the keychain answers.
class KeychainSecretStore final : public SecretStore
{
public:
    explicit KeychainSecretStore(QString service = QStringLiteral("s3fm"));
    Result<QString> read(const QString& key) override;
    VoidResult write(const QString& key, const QString& value) override;
    VoidResult remove(const QString& key) override;

private:
    QString m_service;
    QMutex m_mutex;
};

// Process-local store, for tests.
class MemorySecretStore final : public SecretStore
{
public:
    Result<QString> read(const QString& key) override;
    VoidResult write(const QString& key, const QString& value) override;
    VoidResult remove(const QString& key) override;
    int readCount() const { return m_reads; }

private:
    QMutex m_mutex;
    QHash<QString, QString> m_values;
    int m_reads = 0;
};

} // namespace s3fm
