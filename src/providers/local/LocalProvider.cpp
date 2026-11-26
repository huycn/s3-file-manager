#include "providers/local/LocalProvider.h"

#include "core/BandwidthLimiter.h"

#include <QCoreApplication>
#include <QDir>
#include <QDirIterator>
#include <QFileInfo>
#include <QSaveFile>
#include <QSet>
#include <QStorageInfo>

namespace s3fm {

namespace {

// Translation context for this file. Q_DECLARE_TR_FUNCTIONS (not a plain helper)
// lets lupdate file every Tr::tr() call under this context, wherever it is called from.
struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::LocalProvider)
};

constexpr qint64 kCopyChunk = qint64{1024} * 1024;
constexpr int kMaxReportedFailures = 20;

Error notFound(const QString& path)
{
    return Error::make(ErrorCode::NotFound,
                       Tr::tr("No such file or directory: %1").arg(QDir::toNativeSeparators(path)));
}

Error ioError(const QString& message, const QString& path, const QString& detail = {})
{
    return Error::make(ErrorCode::Io, message.arg(QDir::toNativeSeparators(path)), detail);
}

// Distinguishes "permission denied" from other failures after an operation failed.
Error accessOrIo(const QString& message, const QString& path, const QString& detail = {})
{
    const QFileInfo parentInfo(QFileInfo(path).absolutePath());
    if (parentInfo.exists() && !parentInfo.isWritable())
        return Error::make(ErrorCode::AccessDenied, message.arg(QDir::toNativeSeparators(path)),
                           Tr::tr("permission denied"));
    return ioError(message, path, detail);
}

#ifdef Q_OS_WIN
EntryList driveEntries()
{
    EntryList out;
    for (const QFileInfo& drive : QDir::drives()) {
        Entry e;
        const QString path = drive.absolutePath(); // "C:/"
        e.location = Location::local(path);
        e.name = e.location.name();
        e.type = Entry::Type::Directory;
        const QStorageInfo storage(path);
        if (storage.isValid() && !storage.displayName().isEmpty() && storage.displayName() != path)
            e.metadata.insert(QStringLiteral("label"), storage.displayName());
        out.push_back(std::move(e));
    }
    return out;
}
#endif

bool removeFileForce(const QString& path, QString* errorText)
{
    QFile f(path);
    if (f.remove())
        return true;
#ifdef Q_OS_WIN
    // Read-only files cannot be deleted on Windows; clear the attribute and retry.
    f.setPermissions(f.permissions() | QFileDevice::WriteOwner | QFileDevice::WriteUser);
    if (f.remove())
        return true;
#endif
    *errorText = f.errorString();
    return false;
}

struct RemoveState
{
    explicit RemoveState(OperationContext& c) : ctx(c) {}
    OperationContext& ctx;
    qint64 removed = 0;
    QStringList failures;
};

// Removes `path` recursively without following directory symlinks.
void removeRecursive(const QString& path, RemoveState& st)
{
    if (st.ctx.isCancelled())
        return;
    const QFileInfo info(path);
    if (info.isDir() && !info.isSymLink()) {
        QDirIterator it(path, QDir::AllEntries | QDir::NoDotAndDotDot | QDir::Hidden | QDir::System);
        QStringList children;
        while (it.hasNext())
            children.push_back(it.next());
        for (const QString& child : std::as_const(children))
            removeRecursive(child, st);
        if (st.ctx.isCancelled())
            return;
        if (!QDir().rmdir(path))
            st.failures.push_back(QDir::toNativeSeparators(path));
        else
            st.ctx.reportProgress(++st.removed, -1);
        return;
    }
    QString err;
    if (!removeFileForce(path, &err))
        st.failures.push_back(QStringLiteral("%1: %2").arg(QDir::toNativeSeparators(path), err));
    else
        st.ctx.reportProgress(++st.removed, -1);
}

} // namespace

Capabilities LocalProvider::capabilities(const Location& location) const
{
#ifdef Q_OS_WIN
    if (location.isLocal() && location.localPath().isEmpty())
        return Capability::None; // "Computer" (drive list)
#else
    Q_UNUSED(location)
#endif
    return Capability::MakeDirectory | Capability::Remove | Capability::Rename | Capability::AtomicRename |
           Capability::ServerSideCopy | Capability::Read | Capability::Write;
}

Entry LocalProvider::entryFromFileInfo(const QFileInfo& info)
{
    Entry e;
    e.location = Location::local(info.absoluteFilePath());
    e.name = info.fileName();
    if (e.name.isEmpty())
        e.name = e.location.name();
    e.isSymlink = info.isSymLink();
    if (e.isSymlink)
        e.symlinkTarget = info.symLinkTarget();
    e.type = info.isDir() ? Entry::Type::Directory : Entry::Type::File;
    e.size = e.type == Entry::Type::File && info.exists() ? info.size() : -1;
    e.modified = info.lastModified();
    e.hidden = info.isHidden();
    e.permissions = info.permissions();
    return e;
}

Result<ListPage> LocalProvider::list(const Location& dir, const QString& pageToken, OperationContext& ctx)
{
    Q_UNUSED(pageToken)
    if (!dir.isLocal())
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Not a local location"));

    ListPage page;
#ifdef Q_OS_WIN
    if (dir.localPath().isEmpty()) {
        page.entries = driveEntries();
        return page;
    }
#endif
    const QString path = dir.localPath();
    const QFileInfo info(path);
    if (!info.exists())
        return notFound(path);
    if (!info.isDir())
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Not a directory: %1").arg(dir.nativePath()));
#ifdef Q_OS_WIN
    const bool accessible = info.isReadable();
#else
    const bool accessible = info.isReadable() && info.isExecutable(); // need +x to enter a directory
#endif
    if (!accessible)
        return Error::make(ErrorCode::AccessDenied, Tr::tr("Permission denied: %1").arg(dir.nativePath()));

    QDirIterator it(path, QDir::AllEntries | QDir::NoDotAndDotDot | QDir::Hidden | QDir::System);
    unsigned n = 0;
    while (it.hasNext()) {
        if ((++n & 0xffu) == 0 && ctx.isCancelled())
            return Error::cancelled();
        it.next();
        page.entries.push_back(entryFromFileInfo(it.fileInfo()));
    }
    return page;
}

Result<Entry> LocalProvider::stat(const Location& location, OperationContext& ctx)
{
    Q_UNUSED(ctx)
    if (!location.isLocal())
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Not a local location"));
    if (location.localPath().isEmpty()) {
        Entry e;
        e.location = location;
        e.type = Entry::Type::Directory;
        return e;
    }
    const QFileInfo info(location.localPath());
    if (!info.exists() && !info.isSymLink())
        return notFound(location.localPath());
    return entryFromFileInfo(info);
}

VoidResult LocalProvider::makeDirectory(const Location& dir, OperationContext& ctx)
{
    Q_UNUSED(ctx)
    const QString path = dir.localPath();
    if (path.isEmpty())
        return Error::make(ErrorCode::InvalidArgument, Tr::tr("Invalid directory"));
    if (QFileInfo::exists(path))
        return Error::make(ErrorCode::AlreadyExists, Tr::tr("Already exists: %1").arg(dir.nativePath()));
    if (!QDir().mkpath(path))
        return accessOrIo(Tr::tr("Cannot create directory %1"), path);
    return {};
}

VoidResult LocalProvider::remove(const EntryList& items, OperationContext& ctx)
{
    RemoveState st(ctx);
    for (const Entry& item : items) {
        const QString path = item.location.localPath();
        if (path.isEmpty() || item.location.isRoot())
            return Error::make(ErrorCode::InvalidArgument, Tr::tr("Refusing to delete a filesystem root"));
        if (!QFileInfo::exists(path) && !QFileInfo(path).isSymLink()) {
            st.failures.push_back(Tr::tr("%1: not found").arg(QDir::toNativeSeparators(path)));
            continue;
        }
        removeRecursive(path, st);
        if (ctx.isCancelled())
            return Error::cancelled();
    }
    if (st.failures.isEmpty())
        return {};
    const qsizetype count = st.failures.size();
    QStringList shown = st.failures.mid(0, kMaxReportedFailures);
    if (count > kMaxReportedFailures)
        shown.push_back(Tr::tr("… and %1 more").arg(count - kMaxReportedFailures));
    return Error::make(ErrorCode::Io, Tr::tr("%n item(s) could not be deleted", nullptr, int(count)),
                       shown.join(u'\n'));
}

VoidResult LocalProvider::rename(const Location& from, const Location& to, OperationContext& ctx)
{
    Q_UNUSED(ctx)
    const QString src = from.localPath();
    const QString dst = to.localPath();
    if (!QFileInfo::exists(src) && !QFileInfo(src).isSymLink())
        return notFound(src);
    const bool caseOnlyRename = src.compare(dst, Qt::CaseInsensitive) == 0 && src != dst;
    if (QFileInfo::exists(dst) && !caseOnlyRename)
        return Error::make(ErrorCode::AlreadyExists, Tr::tr("Already exists: %1").arg(to.nativePath()));
    if (QDir().rename(src, dst))
        return {};
    const QFileInfo srcInfo(src);
    if (!srcInfo.isDir()) {
        // QFile::rename falls back to copy + delete across filesystems.
        QFile f(src);
        if (f.rename(dst))
            return {};
        return accessOrIo(Tr::tr("Cannot move %1"), src, f.errorString());
    }
    if (QFileInfo(dst).absolutePath() != srcInfo.absolutePath() &&
        QStorageInfo(src).rootPath() != QStorageInfo(QFileInfo(dst).absolutePath()).rootPath())
        return Error::make(ErrorCode::Unsupported,
                           Tr::tr("Cannot move a directory across filesystems directly"));
    return accessOrIo(Tr::tr("Cannot move %1"), src);
}

VoidResult LocalProvider::copyFile(const QString& from, const QString& to, OperationContext& ctx)
{
    QFile in(from);
    const QFileInfo srcInfo(from);
    if (!srcInfo.exists())
        return notFound(from);
    if (srcInfo.isDir())
        return Error::make(ErrorCode::InvalidArgument,
                           Tr::tr("Is a directory: %1").arg(QDir::toNativeSeparators(from)));
    if (!in.open(QIODevice::ReadOnly))
        return Error::make(srcInfo.isReadable() ? ErrorCode::Io : ErrorCode::AccessDenied,
                           Tr::tr("Cannot read %1").arg(QDir::toNativeSeparators(from)), in.errorString());

    QSaveFile out(to);
    out.setDirectWriteFallback(true);
    if (!out.open(QIODevice::WriteOnly))
        return accessOrIo(Tr::tr("Cannot write %1"), to, out.errorString());

    const TransferParams* params = ctx.params();
    const qint64 total = in.size();
    qint64 done = 0;
    QByteArray buffer(kCopyChunk, Qt::Uninitialized);
    ctx.reportProgress(0, total);
    while (true) {
        if (ctx.isCancelled()) {
            out.cancelWriting();
            return Error::cancelled();
        }
        const qint64 n = in.read(buffer.data(), buffer.size());
        if (n < 0) {
            out.cancelWriting();
            return ioError(Tr::tr("Error reading %1"), from, in.errorString());
        }
        if (n == 0)
            break;
        if (out.write(buffer.constData(), n) != n) {
            const QString err = out.errorString();
            out.cancelWriting();
            return ioError(Tr::tr("Error writing %1"), to, err);
        }
        done += n;
        ctx.reportProgress(done, total);
        if (params && params->limiter)
            params->limiter->consume(n, &ctx);
    }
    if (!out.commit())
        return ioError(Tr::tr("Error writing %1"), to, out.errorString());

    QFile written(to);
    written.setPermissions(srcInfo.permissions());
    if ((!params || params->preserveMtime) && written.open(QIODevice::Append))
        written.setFileTime(srcInfo.lastModified(), QFileDevice::FileModificationTime);
    if ((!params || params->verify) && QFileInfo(to).size() != done) {
        Error e = ioError(Tr::tr("Integrity check failed for %1"), to,
                          Tr::tr("%1 bytes written, %2 expected").arg(QFileInfo(to).size()).arg(done));
        e.retryable = true;
        return e;
    }
    return {};
}

VoidResult LocalProvider::copy(const Location& from, const Location& to, OperationContext& ctx)
{
    return copyFile(from.localPath(), to.localPath(), ctx);
}

VoidResult LocalProvider::download(const Location& from, const QString& localFile, OperationContext& ctx)
{
    return copyFile(from.localPath(), localFile, ctx);
}

VoidResult LocalProvider::upload(const QString& localFile, const Location& to, OperationContext& ctx)
{
    return copyFile(localFile, to.localPath(), ctx);
}

VoidResult LocalProvider::walk(const Location& dir, const Visitor& visit, OperationContext& ctx)
{
    // Follows directory symlinks, but never enters the same physical directory twice
    // (protects against symlink loops).
    QSet<QString> visited;
    std::function<VoidResult(const QString&)> recurse = [&](const QString& path) -> VoidResult {
        const QString canonical = QFileInfo(path).canonicalFilePath();
        if (canonical.isEmpty() || visited.contains(canonical))
            return {};
        visited.insert(canonical);
        Location here = Location::local(path);
        auto page = list(here, {}, ctx);
        if (!page)
            return page.error();
        for (const Entry& e : std::as_const(page->entries)) {
            if (ctx.isCancelled() || !visit(e))
                return Error::cancelled();
            if (e.isDirectory()) {
                if (auto r = recurse(e.location.localPath()); !r)
                    return r;
            }
        }
        return {};
    };
    if (dir.localPath().isEmpty())
        return Provider::walk(dir, visit, ctx);
    return recurse(dir.localPath());
}

} // namespace s3fm
