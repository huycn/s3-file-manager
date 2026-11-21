#pragma once

#include "core/Provider.h"

class QFileInfo;

namespace s3fm {

// Provider for the local filesystem. Stateless and thread-safe.
class LocalProvider final : public Provider
{
public:
    Capabilities capabilities(const Location& location) const override;
    Result<ListPage> list(const Location& dir, const QString& pageToken, OperationContext& ctx) override;
    Result<Entry> stat(const Location& location, OperationContext& ctx) override;
    VoidResult makeDirectory(const Location& dir, OperationContext& ctx) override;
    VoidResult remove(const EntryList& items, OperationContext& ctx) override;
    VoidResult rename(const Location& from, const Location& to, OperationContext& ctx) override;
    VoidResult copy(const Location& from, const Location& to, OperationContext& ctx) override;
    VoidResult download(const Location& from, const QString& localFile, OperationContext& ctx) override;
    VoidResult upload(const QString& localFile, const Location& to, OperationContext& ctx) override;
    VoidResult walk(const Location& dir, const Visitor& visit, OperationContext& ctx) override;

    static Entry entryFromFileInfo(const QFileInfo& info);

    // Copies a regular file with progress and cancellation; writes atomically
    // (temporary file + rename) and preserves modification time and permissions.
    static VoidResult copyFile(const QString& from, const QString& to, OperationContext& ctx);
};

} // namespace s3fm
