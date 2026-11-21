#pragma once

#include "core/Provider.h"

namespace s3fm {

class ConnectionStore;

// Serves "s3://": one entry per saved connection.
class S3RootProvider final : public Provider
{
public:
    explicit S3RootProvider(const ConnectionStore* store) : m_store(store) {}

    Capabilities capabilities(const Location&) const override { return Capability::None; }
    Result<ListPage> list(const Location& dir, const QString& pageToken, OperationContext& ctx) override;
    Result<Entry> stat(const Location& location, OperationContext& ctx) override;
    VoidResult makeDirectory(const Location&, OperationContext&) override { return unsupported(); }
    VoidResult remove(const EntryList&, OperationContext&) override { return unsupported(); }
    VoidResult rename(const Location&, const Location&, OperationContext&) override { return unsupported(); }
    VoidResult copy(const Location&, const Location&, OperationContext&) override { return unsupported(); }
    VoidResult download(const Location&, const QString&, OperationContext&) override { return unsupported(); }
    VoidResult upload(const QString&, const Location&, OperationContext&) override { return unsupported(); }

private:
    static Error unsupported();
    const ConnectionStore* m_store;
};

} // namespace s3fm
