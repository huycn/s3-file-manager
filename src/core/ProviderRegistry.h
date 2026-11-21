#pragma once

#include "core/Location.h"

#include <QHash>
#include <QMutex>

#include <functional>
#include <memory>

namespace s3fm {

class Provider;

// Maps locations to the provider that serves them. Thread-safe.
// S3 providers are created lazily per connection id and cached until invalidated
// (e.g. when the connection profile is edited).
class ProviderRegistry
{
public:
    using S3Factory = std::function<std::shared_ptr<Provider>(const QString& connectionId)>;

    void setLocalProvider(std::shared_ptr<Provider> provider);
    // Provider for "s3://" (the list of connections).
    void setS3RootProvider(std::shared_ptr<Provider> provider);
    void setS3Factory(S3Factory factory);

    // Null if nothing serves `location` (invalid location, unknown connection…).
    std::shared_ptr<Provider> providerFor(const Location& location) const;

    void invalidateConnection(const QString& connectionId);
    void clear();

private:
    mutable QMutex m_mutex;
    std::shared_ptr<Provider> m_local;
    std::shared_ptr<Provider> m_s3Root;
    S3Factory m_s3Factory;
    mutable QHash<QString, std::shared_ptr<Provider>> m_s3Providers;
};

} // namespace s3fm
