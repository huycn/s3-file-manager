#include "core/ProviderRegistry.h"

#include "core/Provider.h"

namespace s3fm {

void ProviderRegistry::setLocalProvider(std::shared_ptr<Provider> provider)
{
    QMutexLocker lock(&m_mutex);
    m_local = std::move(provider);
}

void ProviderRegistry::setS3RootProvider(std::shared_ptr<Provider> provider)
{
    QMutexLocker lock(&m_mutex);
    m_s3Root = std::move(provider);
}

void ProviderRegistry::setS3Factory(S3Factory factory)
{
    QMutexLocker lock(&m_mutex);
    m_s3Factory = std::move(factory);
    m_s3Providers.clear();
}

std::shared_ptr<Provider> ProviderRegistry::providerFor(const Location& location) const
{
    QMutexLocker lock(&m_mutex);
    switch (location.kind()) {
    case Location::Kind::Invalid:
        return nullptr;
    case Location::Kind::Local:
        return m_local;
    case Location::Kind::S3: {
        if (location.isS3Root())
            return m_s3Root;
        const QString id = location.connectionId();
        if (auto it = m_s3Providers.constFind(id); it != m_s3Providers.cend())
            return it.value();
        if (!m_s3Factory)
            return nullptr;
        auto provider = m_s3Factory(id);
        if (provider)
            m_s3Providers.insert(id, provider);
        return provider;
    }
    }
    return nullptr;
}

void ProviderRegistry::invalidateConnection(const QString& connectionId)
{
    QMutexLocker lock(&m_mutex);
    m_s3Providers.remove(connectionId);
}

void ProviderRegistry::clear()
{
    QMutexLocker lock(&m_mutex);
    m_s3Providers.clear();
    m_local.reset();
    m_s3Root.reset();
    m_s3Factory = nullptr;
}

} // namespace s3fm
