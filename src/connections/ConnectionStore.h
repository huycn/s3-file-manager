#pragma once

#include "connections/ConnectionProfile.h"
#include "core/Error.h"
#include "providers/s3/S3Types.h"

#include <QHash>
#include <QMap>
#include <QMutex>
#include <QObject>

#include <memory>
#include <optional>

namespace s3fm {

class SecretStore;

// Saved connection profiles (QSettings, group "connections") and their secrets
// (SecretStore). Reads are thread-safe; secrets are cached after the first read.
class ConnectionStore : public QObject
{
    Q_OBJECT

public:
    // `settingsFile`: INI file to use instead of the application's default settings (tests).
    explicit ConnectionStore(std::shared_ptr<SecretStore> secrets, QString settingsFile = {},
                             QObject* parent = nullptr);
    ~ConnectionStore() override;

    void load();

    QList<ConnectionProfile> profiles() const; // sorted by display name
    std::optional<ConnectionProfile> profile(const QString& id) const;
    QStringList ids() const;
    bool contains(const QString& id) const;

    // Adds or replaces a profile. `secret` std::nullopt keeps the stored secret.
    VoidResult save(const ConnectionProfile& profile, const std::optional<ConnectionSecret>& secret);
    VoidResult remove(const QString& id);

    // Secret for a StaticKeys profile (blocking; cached).
    Result<ConnectionSecret> secret(const QString& id) const;

    // SSE-C keys, kept in the keychain per connection and bucket ("*": every bucket
    // of the connection without its own key). Blocking; cached. nullopt if none.
    std::optional<SseCustomerKey> sseCustomerKey(const QString& id, const QString& bucket) const;
    VoidResult setSseCustomerKey(const QString& id, const QString& bucket,
                                 const std::optional<SseCustomerKey>& key);

Q_SIGNALS:
    void profilesChanged();
    // A profile was edited or removed: cached clients for it must be dropped.
    void profileInvalidated(const QString& id);

private:
    std::unique_ptr<class QSettings> openSettings() const;
    static QString secretKey(const QString& id) { return QStringLiteral("connection:") + id; }
    static QString sseKey(const QString& id, const QString& bucket)
    {
        return QStringLiteral("sse-c:%1/%2").arg(id, bucket);
    }

    std::shared_ptr<SecretStore> m_secrets;
    QString m_settingsFile;
    mutable QMutex m_mutex;
    QMap<QString, ConnectionProfile> m_profiles;
    mutable QHash<QString, ConnectionSecret> m_secretCache;
    mutable QHash<QString, std::optional<SseCustomerKey>> m_sseCache; // by sseKey()
};

} // namespace s3fm
