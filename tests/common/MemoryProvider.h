#pragma once

// In-memory, S3-like provider for tests. Serves s3://<connection>/<bucket>/<key>
// locations: flat keys, '/'-delimited "directories", marker objects for empty
// folders, paginated listings, no native rename (forces copy + delete).

#include "core/Provider.h"

#include <QCryptographicHash>
#include <QDateTime>
#include <QFile>
#include <QMap>
#include <QMutex>
#include <QSet>
#include <QThread>

#include <atomic>

namespace s3fm::test {

inline QString md5Hex(const QByteArray& data)
{
    return QString::fromLatin1(QCryptographicHash::hash(data, QCryptographicHash::Md5).toHex());
}

class MemoryProvider : public Provider
{
public:
    struct Object
    {
        QByteArray data;
        QDateTime modified;
    };

    explicit MemoryProvider(QString connectionId) : m_connection(std::move(connectionId)) {}

    int pageSize = 1000;
    std::atomic_bool failUploads{false};
    std::atomic<int> failNextUploads{0}; // transient (retryable) failures before succeeding
    std::atomic<int> uploadDelayMs{0};   // per upload, cancellable
    std::atomic<int> uploadCount{0};     // successful uploads

    void addBucket(const QString& bucket)
    {
        QMutexLocker lock(&m_mutex);
        m_buckets[bucket];
    }
    void put(const QString& bucket, const QString& key, const QByteArray& data)
    {
        QMutexLocker lock(&m_mutex);
        m_buckets[bucket][key] = {data, QDateTime::currentDateTimeUtc()};
    }
    bool has(const QString& bucket, const QString& key) const
    {
        QMutexLocker lock(&m_mutex);
        return m_buckets.value(bucket).contains(key);
    }
    QByteArray get(const QString& bucket, const QString& key) const
    {
        QMutexLocker lock(&m_mutex);
        return m_buckets.value(bucket).value(key).data;
    }
    QStringList keys(const QString& bucket) const
    {
        QMutexLocker lock(&m_mutex);
        return m_buckets.value(bucket).keys();
    }
    Location loc(const QString& bucket, const QString& key = {}) const
    {
        return Location::s3(m_connection, bucket, key);
    }

    Capabilities capabilities(const Location& l) const override
    {
        if (l.bucket().isEmpty())
            return Capability::None;
        return Capability::MakeDirectory | Capability::Remove | Capability::ServerSideCopy |
               Capability::Read | Capability::Write;
    }

    Result<ListPage> list(const Location& dir, const QString& token, OperationContext&) override
    {
        QMutexLocker lock(&m_mutex);
        EntryList all;
        if (dir.bucket().isEmpty()) {
            for (auto it = m_buckets.cbegin(); it != m_buckets.cend(); ++it) {
                Entry e;
                e.name = it.key();
                e.type = Entry::Type::Bucket;
                e.location = Location::s3(m_connection, it.key());
                all.push_back(e);
            }
        } else {
            if (!m_buckets.contains(dir.bucket()))
                return Error::make(ErrorCode::NotFound, QStringLiteral("NoSuchBucket"));
            const QString prefix = dir.asDirectory().key();
            QSet<QString> seenDirs;
            const auto& objects = m_buckets[dir.bucket()];
            for (auto it = objects.cbegin(); it != objects.cend(); ++it) {
                if (!it.key().startsWith(prefix))
                    continue;
                const QString rest = it.key().mid(prefix.size());
                if (rest.isEmpty())
                    continue; // the directory's own marker
                const qsizetype slash = rest.indexOf(u'/');
                Entry e;
                if (slash >= 0) {
                    const QString name = rest.left(slash);
                    if (seenDirs.contains(name))
                        continue;
                    seenDirs.insert(name);
                    e.name = name;
                    e.type = Entry::Type::Directory;
                    e.location = Location::s3(m_connection, dir.bucket(), prefix + name + u'/');
                } else {
                    e.name = rest;
                    e.size = it.value().data.size();
                    e.modified = it.value().modified;
                    e.etag = md5Hex(it.value().data);
                    e.location = Location::s3(m_connection, dir.bucket(), it.key());
                }
                all.push_back(e);
            }
        }
        const int start = token.isEmpty() ? 0 : token.toInt();
        ListPage page;
        page.entries = all.mid(start, pageSize);
        if (start + pageSize < all.size())
            page.nextPageToken = QString::number(start + pageSize);
        return page;
    }

    Result<Entry> stat(const Location& l, OperationContext&) override
    {
        QMutexLocker lock(&m_mutex);
        Entry e;
        e.location = l;
        e.name = l.name();
        if (l.bucket().isEmpty()) {
            e.type = Entry::Type::Connection;
            return e;
        }
        if (!m_buckets.contains(l.bucket()))
            return Error::make(ErrorCode::NotFound, QStringLiteral("NoSuchBucket"));
        const auto& objects = m_buckets[l.bucket()];
        if (l.key().isEmpty()) {
            e.type = Entry::Type::Bucket;
            return e;
        }
        if (!l.key().endsWith(u'/') && objects.contains(l.key())) {
            e.size = objects[l.key()].data.size();
            e.modified = objects[l.key()].modified;
            e.etag = md5Hex(objects[l.key()].data);
            e.contentType = QStringLiteral("text/plain");
            e.metadata.insert(QStringLiteral("x-amz-meta-origin"), QStringLiteral("memory"));
            return e;
        }
        const QString prefix = l.asDirectory().key();
        for (auto it = objects.cbegin(); it != objects.cend(); ++it) {
            if (it.key().startsWith(prefix)) {
                e.type = Entry::Type::Directory;
                e.location = l.asDirectory();
                return e;
            }
        }
        return Error::make(ErrorCode::NotFound, QStringLiteral("NoSuchKey"));
    }

    VoidResult makeDirectory(const Location& dir, OperationContext& ctx) override
    {
        if (dir.key().isEmpty())
            return Error::make(ErrorCode::AlreadyExists, QStringLiteral("bucket"));
        if (stat(dir.asDirectory(), ctx))
            return Error::make(ErrorCode::AlreadyExists, QStringLiteral("exists"));
        put(dir.bucket(), dir.asDirectory().key(), {});
        return {};
    }

    VoidResult remove(const EntryList& items, OperationContext& ctx) override
    {
        QMutexLocker lock(&m_mutex);
        qint64 n = 0;
        for (const Entry& item : items) {
            auto& objects = m_buckets[item.location.bucket()];
            if (item.isDirectory()) {
                const QString prefix = item.location.asDirectory().key();
                for (const QString& k : objects.keys()) {
                    if (k.startsWith(prefix)) {
                        objects.remove(k);
                        ctx.reportProgress(++n, -1);
                    }
                }
            } else {
                objects.remove(item.location.key());
                ctx.reportProgress(++n, -1);
            }
        }
        return {};
    }

    VoidResult rename(const Location&, const Location&, OperationContext&) override
    {
        return Error::make(ErrorCode::Unsupported, QStringLiteral("no rename"));
    }

    VoidResult copy(const Location& from, const Location& to, OperationContext& ctx) override
    {
        const QByteArray data = get(from.bucket(), from.key());
        if (!has(from.bucket(), from.key()))
            return Error::make(ErrorCode::NotFound, QStringLiteral("NoSuchKey"));
        put(to.bucket(), to.key(), data);
        ctx.reportProgress(data.size(), data.size());
        return {};
    }

    VoidResult download(const Location& from, const QString& localFile, OperationContext& ctx) override
    {
        if (!has(from.bucket(), from.key()))
            return Error::make(ErrorCode::NotFound, QStringLiteral("NoSuchKey"));
        const QByteArray data = get(from.bucket(), from.key());
        QFile f(localFile);
        if (!f.open(QIODevice::WriteOnly))
            return Error::make(ErrorCode::Io, f.errorString());
        f.write(data);
        ctx.reportProgress(data.size(), data.size());
        return {};
    }

    VoidResult upload(const QString& localFile, const Location& to, OperationContext& ctx) override
    {
        if (failUploads)
            return Error::make(ErrorCode::AccessDenied, QStringLiteral("uploads disabled"));
        if (failNextUploads.fetch_sub(1) > 0)
            return Error::make(ErrorCode::Network, QStringLiteral("connection reset"));
        for (int waited = 0; waited < uploadDelayMs; waited += 10) {
            if (ctx.isCancelled())
                return Error::cancelled();
            QThread::msleep(10);
        }
        QFile f(localFile);
        if (!f.open(QIODevice::ReadOnly))
            return Error::make(ErrorCode::Io, f.errorString());
        const QByteArray data = f.readAll();
        put(to.bucket(), to.key(), data);
        ++uploadCount;
        ctx.reportProgress(data.size(), data.size());
        return {};
    }

private:
    QString m_connection;
    mutable QMutex m_mutex;
    QMap<QString, QMap<QString, Object>> m_buckets;
};

} // namespace s3fm::test
