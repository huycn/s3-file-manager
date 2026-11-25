#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/Location.h"
#include "core/OperationContext.h"
#include "core/TransferParams.h"

#include <QDateTime>
#include <QFlags>

#include <functional>

namespace s3fm {

struct ListPage
{
    EntryList entries;
    QString nextPageToken; // empty: no more pages
};

// Alternative listings of a directory (providers with Capability::Versions).
struct ListOptions
{
    // Every version and delete marker of each key (Entry::versionId, isLatest,
    // isDeleteMarker), newest first per key.
    bool versions = false;
    // The directory as it was at this time (from version history); entries carry
    // the version id that was current then. Invalid: now.
    QDateTime asOf;

    bool isDefault() const { return !versions && !asOf.isValid(); }
    bool operator==(const ListOptions&) const = default;
};

enum class Capability : quint32
{
    None = 0,
    MakeDirectory = 1u << 0u,
    Remove = 1u << 1u,
    Rename = 1u << 2u,
    AtomicRename = 1u << 3u,   // rename is a single atomic operation (local), not copy + delete (S3)
    ServerSideCopy = 1u << 4u, // copy() inside the provider without streaming through the client
    Read = 1u << 5u,           // download() supported
    Write = 1u << 6u,          // upload() supported
    // Directories exist implicitly while they contain something (S3 prefixes);
    // makeDirectory() is only needed to keep an empty directory.
    ImplicitDirectories = 1u << 7u,
    Versions = 1u << 8u, // listWithOptions() supports ListOptions
};
Q_DECLARE_FLAGS(Capabilities, Capability)
Q_DECLARE_OPERATORS_FOR_FLAGS(Capabilities)

// Storage backend. All methods are blocking and must be thread-safe: they are called
// from worker threads (see core/Async.h), never from the GUI thread.
//
// Directory semantics for operations on several items (remove, rename, walk) are
// provider-specific: on S3 a "directory" is every key under a prefix.
class Provider
{
public:
    Provider() = default;
    virtual ~Provider();
    Provider(const Provider&) = delete;
    Provider& operator=(const Provider&) = delete;

    // Capabilities available at `location` (e.g. no uploads at the S3 bucket list).
    virtual Capabilities capabilities(const Location& location) const = 0;

    // Lists the direct children of `dir`. Pass the previous page's nextPageToken to
    // continue; an empty token starts from the beginning.
    virtual Result<ListPage> list(const Location& dir, const QString& pageToken, OperationContext& ctx) = 0;
    // list() with ListOptions; the default handles only default options.
    virtual Result<ListPage> listWithOptions(const Location& dir, const QString& pageToken,
                                             const ListOptions& options, OperationContext& ctx);

    virtual Result<Entry> stat(const Location& location, OperationContext& ctx) = 0;

    // Creates `dir` (and missing parents). Fails with AlreadyExists if present.
    virtual VoidResult makeDirectory(const Location& dir, OperationContext& ctx) = 0;

    // Removes files and directories (recursively). Continues after individual
    // failures and reports them together. Progress: number of removed items.
    virtual VoidResult remove(const EntryList& items, OperationContext& ctx) = 0;

    // Renames/moves within this provider. Fails with AlreadyExists if `to` exists and
    // Unsupported if the provider cannot do it directly (caller falls back to copy + remove).
    virtual VoidResult rename(const Location& from, const Location& to, OperationContext& ctx) = 0;

    // Copies a single file within this provider, overwriting `to`. Progress: bytes.
    virtual VoidResult copy(const Location& from, const Location& to, OperationContext& ctx) = 0;

    // Transfers a single file between this provider and the local disk, overwriting
    // the destination. Progress: bytes.
    virtual VoidResult download(const Location& from, const QString& localFile, OperationContext& ctx) = 0;
    virtual VoidResult upload(const QString& localFile, const Location& to, OperationContext& ctx) = 0;

    // Recursively visits everything below `dir` (pre-order: a directory is visited
    // before its contents). Returning false from the visitor aborts with Cancelled.
    using Visitor = std::function<bool(const Entry&)>;
    virtual VoidResult walk(const Location& dir, const Visitor& visit, OperationContext& ctx);

    // Drops cached listings at or below `location` (no-op for uncached providers).
    // Called before an explicit refresh.
    virtual void invalidateCache(const Location& location) { Q_UNUSED(location) }

    // Releases what an interrupted resumable transfer (TransferParams::resumable) left
    // behind: an incomplete multipart upload to `remote`, a partial download of
    // `localFile`. Either may be empty. The default removes "<localFile>.s3fm-part".
    virtual void discardPartialTransfer(const Location& remote, const QString& localFile,
                                        const TransferCheckpoint& checkpoint);

    // Convenience: all pages of list().
    Result<EntryList> listAll(const Location& dir, OperationContext& ctx);
    // Convenience: true/false, or an error other than NotFound.
    Result<bool> exists(const Location& location, OperationContext& ctx);
};

} // namespace s3fm
