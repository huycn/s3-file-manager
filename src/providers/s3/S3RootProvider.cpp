#include "providers/s3/S3RootProvider.h"

#include "connections/ConnectionStore.h"

#include <QCoreApplication>

namespace s3fm {

Error S3RootProvider::unsupported()
{
    return Error::make(
        ErrorCode::Unsupported,
        QCoreApplication::translate("s3fm::S3RootProvider", "Not possible in the connection list"));
}

Result<ListPage> S3RootProvider::list(const Location& dir, const QString& pageToken, OperationContext& ctx)
{
    Q_UNUSED(pageToken)
    Q_UNUSED(ctx)
    if (!dir.isS3Root())
        return Error::make(ErrorCode::InvalidArgument, QStringLiteral("not s3://"));
    ListPage page;
    for (const ConnectionProfile& p : m_store->profiles()) {
        Entry e;
        e.name = p.name;
        e.type = Entry::Type::Connection;
        e.location = Location::s3(p.id);
        e.metadata.insert(QStringLiteral("provider"), ConnectionProfile::presetName(p.preset));
        page.entries.push_back(std::move(e));
    }
    return page;
}

Result<Entry> S3RootProvider::stat(const Location& location, OperationContext& ctx)
{
    Q_UNUSED(ctx)
    Entry e;
    e.location = location;
    e.type = Entry::Type::Connection;
    if (location.isS3Root())
        return e;
    auto p = m_store->profile(location.connectionId());
    if (!p)
        return Error::make(ErrorCode::NotFound,
                           QCoreApplication::translate("s3fm::S3RootProvider", "Unknown connection"));
    e.name = p->name;
    return e;
}

} // namespace s3fm
