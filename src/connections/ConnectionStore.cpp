#include "connections/ConnectionStore.h"

#include "connections/SecretStore.h"
#include "core/Logging.h"

#include <QCollator>
#include <QJsonDocument>
#include <QJsonObject>
#include <QSettings>

#include <algorithm>

namespace s3fm {

namespace {
constexpr QLatin1StringView kGroup("connections");

QString encodeSecret(const ConnectionSecret& s)
{
    QJsonObject o;
    o.insert(QStringLiteral("secretAccessKey"), s.secretAccessKey);
    if (!s.sessionToken.isEmpty())
        o.insert(QStringLiteral("sessionToken"), s.sessionToken);
    return QString::fromUtf8(QJsonDocument(o).toJson(QJsonDocument::Compact));
}

ConnectionSecret decodeSecret(const QString& text)
{
    const QJsonObject o = QJsonDocument::fromJson(text.toUtf8()).object();
    return {o.value(QStringLiteral("secretAccessKey")).toString(),
            o.value(QStringLiteral("sessionToken")).toString()};
}
} // namespace

ConnectionStore::ConnectionStore(std::shared_ptr<SecretStore> secrets, QString settingsFile, QObject* parent)
    : QObject(parent), m_secrets(std::move(secrets)), m_settingsFile(std::move(settingsFile))
{
}

ConnectionStore::~ConnectionStore() = default;

std::unique_ptr<QSettings> ConnectionStore::openSettings() const
{
    if (m_settingsFile.isEmpty())
        return std::make_unique<QSettings>();
    return std::make_unique<QSettings>(m_settingsFile, QSettings::IniFormat);
}

void ConnectionStore::load()
{
    auto settings = openSettings();
    settings->beginGroup(kGroup);
    QMap<QString, ConnectionProfile> loaded;
    const auto ids = settings->childGroups();
    for (const QString& id : ids) {
        if (!ConnectionProfile::isValidId(id))
            continue;
        settings->beginGroup(id);
        ConnectionProfile p = ConnectionProfile::load(*settings);
        p.id = id;
        settings->endGroup();
        loaded.insert(id, p);
    }
    settings->endGroup();
    {
        QMutexLocker lock(&m_mutex);
        m_profiles = loaded;
    }
    qCDebug(lcConnections) << "loaded" << loaded.size() << "connection(s)";
    Q_EMIT profilesChanged();
}

QList<ConnectionProfile> ConnectionStore::profiles() const
{
    QList<ConnectionProfile> out;
    {
        QMutexLocker lock(&m_mutex);
        out = m_profiles.values();
    }
    QCollator collator;
    collator.setNumericMode(true);
    collator.setCaseSensitivity(Qt::CaseInsensitive);
    std::sort(out.begin(), out.end(), [&](const ConnectionProfile& a, const ConnectionProfile& b) {
        return collator.compare(a.name, b.name) < 0;
    });
    return out;
}

std::optional<ConnectionProfile> ConnectionStore::profile(const QString& id) const
{
    QMutexLocker lock(&m_mutex);
    auto it = m_profiles.constFind(id);
    if (it == m_profiles.cend())
        return std::nullopt;
    return it.value();
}

QStringList ConnectionStore::ids() const
{
    QMutexLocker lock(&m_mutex);
    return m_profiles.keys();
}

bool ConnectionStore::contains(const QString& id) const
{
    QMutexLocker lock(&m_mutex);
    return m_profiles.contains(id);
}

VoidResult ConnectionStore::save(const ConnectionProfile& profile,
                                 const std::optional<ConnectionSecret>& secret)
{
    const QString problem = profile.validate();
    if (!problem.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, problem);

    if (secret) {
        VoidResult r = secret->isEmpty() ? m_secrets->remove(secretKey(profile.id))
                                         : m_secrets->write(secretKey(profile.id), encodeSecret(*secret));
        if (!r)
            return r;
    }

    auto settings = openSettings();
    settings->beginGroup(kGroup);
    settings->remove(profile.id);
    settings->beginGroup(profile.id);
    profile.save(*settings);
    settings->endGroup();
    settings->endGroup();
    settings->sync();
    if (settings->status() != QSettings::NoError)
        return Error::make(ErrorCode::Io, tr("Could not write the settings file"));

    {
        QMutexLocker lock(&m_mutex);
        m_profiles.insert(profile.id, profile);
        if (secret)
            m_secretCache.insert(profile.id, *secret);
    }
    Q_EMIT profileInvalidated(profile.id);
    Q_EMIT profilesChanged();
    return {};
}

VoidResult ConnectionStore::remove(const QString& id)
{
    auto settings = openSettings();
    settings->beginGroup(kGroup);
    settings->remove(id);
    settings->endGroup();
    settings->sync();
    const VoidResult secretRemoved = m_secrets->remove(secretKey(id));
    {
        QMutexLocker lock(&m_mutex);
        m_profiles.remove(id);
        m_secretCache.remove(id);
    }
    Q_EMIT profileInvalidated(id);
    Q_EMIT profilesChanged();
    if (!secretRemoved)
        qCWarning(lcConnections) << "could not remove keychain entry for" << id
                                 << secretRemoved.error().toString();
    return {};
}

Result<ConnectionSecret> ConnectionStore::secret(const QString& id) const
{
    {
        QMutexLocker lock(&m_mutex);
        if (auto it = m_secretCache.constFind(id); it != m_secretCache.cend())
            return it.value();
    }
    auto stored = m_secrets->read(secretKey(id));
    if (!stored)
        return stored.error();
    ConnectionSecret s = decodeSecret(stored.value());
    QMutexLocker lock(&m_mutex);
    m_secretCache.insert(id, s);
    return s;
}

std::optional<SseCustomerKey> ConnectionStore::sseCustomerKey(const QString& id, const QString& bucket) const
{
    for (const QString& b : {bucket, QStringLiteral("*")}) {
        const QString key = sseKey(id, b);
        {
            QMutexLocker lock(&m_mutex);
            if (auto it = m_sseCache.constFind(key); it != m_sseCache.cend()) {
                if (it.value())
                    return it.value();
                continue;
            }
        }
        std::optional<SseCustomerKey> found;
        if (auto stored = m_secrets->read(key)) {
            const SseCustomerKey parsed = SseCustomerKey::fromText(stored.value());
            if (parsed.isValid())
                found = parsed;
        }
        QMutexLocker lock(&m_mutex);
        m_sseCache.insert(key, found);
        if (found)
            return found;
    }
    return std::nullopt;
}

VoidResult ConnectionStore::setSseCustomerKey(const QString& id, const QString& bucket,
                                              const std::optional<SseCustomerKey>& key)
{
    const QString name = sseKey(id, bucket);
    VoidResult r = key ? m_secrets->write(name, key->keyBase64()) : m_secrets->remove(name);
    if (!r && key)
        return r;
    QMutexLocker lock(&m_mutex);
    m_sseCache.insert(name, key);
    return {};
}

} // namespace s3fm
