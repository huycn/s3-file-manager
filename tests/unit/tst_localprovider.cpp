#include "core/Async.h"
#include "providers/local/LocalProvider.h"

#include <QFile>
#include <QSet>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

namespace {

void writeFile(const QString& path, const QByteArray& data)
{
    QFile f(path);
    QVERIFY2(f.open(QIODevice::WriteOnly), qPrintable(f.errorString()));
    f.write(data);
}

QByteArray readFile(const QString& path)
{
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly))
        return {};
    return f.readAll();
}

QSet<QString> names(const EntryList& entries)
{
    QSet<QString> out;
    for (const Entry& e : entries)
        out.insert(e.name);
    return out;
}

} // namespace

class TestLocalProvider : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    LocalProvider m_provider;

    Location loc(const QString& rel) const { return Location::local(m_tmp.path() + u'/' + rel); }

private Q_SLOTS:
    void init()
    {
        QVERIFY(m_tmp.isValid());
        // Fresh tree for each test: a.txt, sub/b.txt, sub/deeper/c.txt, .hidden
        QDir(m_tmp.path()).removeRecursively();
        QDir().mkpath(m_tmp.path() + QStringLiteral("/sub/deeper"));
        writeFile(m_tmp.path() + QStringLiteral("/a.txt"), "hello");
        writeFile(m_tmp.path() + QStringLiteral("/sub/b.txt"), "bee");
        writeFile(m_tmp.path() + QStringLiteral("/sub/deeper/c.txt"), "sea");
        writeFile(m_tmp.path() + QStringLiteral("/.hidden"), "h");
    }

    void listDirectory()
    {
        OperationContext ctx;
        auto page = m_provider.list(Location::local(m_tmp.path()), {}, ctx);
        QVERIFY2(page, qPrintable(page ? QString() : page.error().toString()));
        QCOMPARE(names(page->entries), (QSet<QString>{"a.txt", "sub", ".hidden"}));
        QVERIFY(page->nextPageToken.isEmpty());
        for (const Entry& e : std::as_const(page->entries)) {
            if (e.name == u"a.txt") {
                QCOMPARE(e.type, Entry::Type::File);
                QCOMPARE(e.size, 5);
                QVERIFY(e.modified.isValid());
                QCOMPARE(e.location, loc(QStringLiteral("a.txt")));
            } else if (e.name == u"sub") {
                QCOMPARE(e.type, Entry::Type::Directory);
                QCOMPARE(e.size, -1);
            }
#ifndef Q_OS_WIN
            else if (e.name == u".hidden") {
                QVERIFY(e.hidden);
            }
#endif
        }
    }

    void listErrors()
    {
        OperationContext ctx;
        auto missing = m_provider.list(loc(QStringLiteral("nope")), {}, ctx);
        QVERIFY(!missing);
        QCOMPARE(missing.error().code, ErrorCode::NotFound);

        auto notDir = m_provider.list(loc(QStringLiteral("a.txt")), {}, ctx);
        QVERIFY(!notDir);
        QCOMPARE(notDir.error().code, ErrorCode::InvalidArgument);

        auto wrongKind = m_provider.list(Location::s3Root(), {}, ctx);
        QVERIFY(!wrongKind);
    }

    void listCancelled()
    {
        for (int i = 0; i < 600; ++i)
            writeFile(m_tmp.path() + QStringLiteral("/sub/f%1").arg(i), "x");
        OperationContext ctx;
        ctx.cancel();
        auto page = m_provider.list(loc(QStringLiteral("sub")), {}, ctx);
        QVERIFY(!page);
        QVERIFY(page.error().isCancelled());
    }

    void statEntries()
    {
        OperationContext ctx;
        auto st = m_provider.stat(loc(QStringLiteral("sub/b.txt")), ctx);
        QVERIFY(st);
        QCOMPARE(st->size, 3);
        QCOMPARE(st->name, QStringLiteral("b.txt"));
        auto missing = m_provider.stat(loc(QStringLiteral("zzz")), ctx);
        QCOMPARE(missing.error().code, ErrorCode::NotFound);
        auto ex = m_provider.exists(loc(QStringLiteral("zzz")), ctx);
        QVERIFY(ex);
        QVERIFY(!ex.value());
    }

    void makeDirectory()
    {
        OperationContext ctx;
        QVERIFY(m_provider.makeDirectory(loc(QStringLiteral("new/nested")), ctx));
        QVERIFY(QFileInfo(m_tmp.path() + QStringLiteral("/new/nested")).isDir());
        auto again = m_provider.makeDirectory(loc(QStringLiteral("new/nested")), ctx);
        QCOMPARE(again.error().code, ErrorCode::AlreadyExists);
    }

    void removeRecursive()
    {
        qint64 lastProgress = 0;
        OperationContext ctx([&](qint64 done, qint64) { lastProgress = done; });
        Entry dir;
        dir.location = loc(QStringLiteral("sub"));
        dir.type = Entry::Type::Directory;
        Entry file;
        file.location = loc(QStringLiteral("a.txt"));
        QVERIFY(m_provider.remove({dir, file}, ctx));
        QVERIFY(!QFileInfo::exists(m_tmp.path() + QStringLiteral("/sub")));
        QVERIFY(!QFileInfo::exists(m_tmp.path() + QStringLiteral("/a.txt")));
        QCOMPARE(lastProgress, 5); // b.txt, c.txt, deeper, sub, a.txt
    }

    void removeReportsMissing()
    {
        OperationContext ctx;
        Entry missing;
        missing.location = loc(QStringLiteral("does-not-exist"));
        Entry file;
        file.location = loc(QStringLiteral("a.txt"));
        auto r = m_provider.remove({missing, file}, ctx);
        QVERIFY(!r);
        QVERIFY(!QFileInfo::exists(m_tmp.path() + QStringLiteral("/a.txt"))); // continued after failure
        QVERIFY(r.error().detail.contains(QStringLiteral("does-not-exist")));
    }

    void refuseRootRemoval()
    {
        OperationContext ctx;
        Entry root;
        root.location = Location::localRoot();
        root.type = Entry::Type::Directory;
        auto r = m_provider.remove({root}, ctx);
        QVERIFY(!r);
        QCOMPARE(r.error().code, ErrorCode::InvalidArgument);
    }

#ifndef Q_OS_WIN
    void removeDoesNotFollowSymlinks()
    {
        QTemporaryDir outside;
        writeFile(outside.path() + QStringLiteral("/keep.txt"), "keep");
        QVERIFY(QFile::link(outside.path(), m_tmp.path() + QStringLiteral("/link")));
        OperationContext ctx;
        Entry link;
        link.location = loc(QStringLiteral("link"));
        link.type = Entry::Type::Directory;
        QVERIFY(m_provider.remove({link}, ctx));
        QVERIFY(QFileInfo::exists(outside.path() + QStringLiteral("/keep.txt")));
        QVERIFY(!QFileInfo(m_tmp.path() + QStringLiteral("/link")).isSymLink());
    }
#endif

    void renameFileAndDirectory()
    {
        OperationContext ctx;
        QVERIFY(m_provider.rename(loc(QStringLiteral("a.txt")), loc(QStringLiteral("renamed.txt")), ctx));
        QCOMPARE(readFile(m_tmp.path() + QStringLiteral("/renamed.txt")), QByteArray("hello"));
        QVERIFY(m_provider.rename(loc(QStringLiteral("sub")), loc(QStringLiteral("moved")), ctx));
        QCOMPARE(readFile(m_tmp.path() + QStringLiteral("/moved/deeper/c.txt")), QByteArray("sea"));

        auto clash =
            m_provider.rename(loc(QStringLiteral("renamed.txt")), loc(QStringLiteral(".hidden")), ctx);
        QCOMPARE(clash.error().code, ErrorCode::AlreadyExists);
        auto missing = m_provider.rename(loc(QStringLiteral("zzz")), loc(QStringLiteral("yyy")), ctx);
        QCOMPARE(missing.error().code, ErrorCode::NotFound);
    }

    void copyFileWithProgressAndMetadata()
    {
        QByteArray big(3 * 1024 * 1024 + 17, 'z');
        writeFile(m_tmp.path() + QStringLiteral("/big.bin"), big);
        const QDateTime mtime = QDateTime::currentDateTime().addDays(-3);
        {
            QFile f(m_tmp.path() + QStringLiteral("/big.bin"));
            QVERIFY(f.open(QIODevice::Append));
            QVERIFY(f.setFileTime(mtime, QFileDevice::FileModificationTime));
        }
        QList<qint64> progress;
        OperationContext ctx([&](qint64 done, qint64 total) {
            QCOMPARE(total, big.size());
            progress.push_back(done);
        });
        QVERIFY(m_provider.copy(loc(QStringLiteral("big.bin")), loc(QStringLiteral("copy.bin")), ctx));
        QCOMPARE(readFile(m_tmp.path() + QStringLiteral("/copy.bin")), big);
        QCOMPARE(progress.first(), 0);
        QCOMPARE(progress.last(), big.size());
        QVERIFY(progress.size() >= 4);
        const QDateTime copied = QFileInfo(m_tmp.path() + QStringLiteral("/copy.bin")).lastModified();
        QVERIFY(qAbs(copied.secsTo(mtime)) <= 2);
    }

    void copyOverwritesAndCancels()
    {
        OperationContext ctx;
        QVERIFY(
            m_provider.upload(m_tmp.path() + QStringLiteral("/a.txt"), loc(QStringLiteral(".hidden")), ctx));
        QCOMPARE(readFile(m_tmp.path() + QStringLiteral("/.hidden")), QByteArray("hello"));

        OperationContext cancelled;
        cancelled.cancel();
        auto r = m_provider.download(loc(QStringLiteral("a.txt")),
                                     m_tmp.path() + QStringLiteral("/never.txt"), cancelled);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
        QVERIFY(!QFileInfo::exists(m_tmp.path() + QStringLiteral("/never.txt")));

        auto dirCopy = m_provider.copy(loc(QStringLiteral("sub")), loc(QStringLiteral("sub2")), ctx);
        QCOMPARE(dirCopy.error().code, ErrorCode::InvalidArgument);
    }

    void walkVisitsEverythingPreOrder()
    {
        OperationContext ctx;
        QStringList seen;
        auto r = m_provider.walk(
            Location::local(m_tmp.path()),
            [&](const Entry& e) {
                seen.push_back(Location::local(m_tmp.path()).relativePathTo(e.location));
                return true;
            },
            ctx);
        QVERIFY(r);
        QCOMPARE(QSet<QString>(seen.begin(), seen.end()),
                 (QSet<QString>{"a.txt", ".hidden", "sub", "sub/b.txt", "sub/deeper", "sub/deeper/c.txt"}));
        QVERIFY(seen.indexOf(QStringLiteral("sub")) < seen.indexOf(QStringLiteral("sub/b.txt")));
        QVERIFY(seen.indexOf(QStringLiteral("sub/deeper")) <
                seen.indexOf(QStringLiteral("sub/deeper/c.txt")));
    }

#ifndef Q_OS_WIN
    void walkSurvivesSymlinkLoop()
    {
        QVERIFY(QFile::link(m_tmp.path(), m_tmp.path() + QStringLiteral("/sub/loop")));
        OperationContext ctx;
        int count = 0;
        auto r =
            m_provider.walk(Location::local(m_tmp.path()), [&](const Entry&) { return ++count < 1000; }, ctx);
        QVERIFY(r);
        QVERIFY(count < 20);
    }
#endif

    void walkAbortsWhenVisitorReturnsFalse()
    {
        OperationContext ctx;
        auto r = m_provider.walk(Location::local(m_tmp.path()), [](const Entry&) { return false; }, ctx);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
    }

    void runsOnIoPool()
    {
        auto future = runIo([this] {
            OperationContext ctx;
            return m_provider.listAll(Location::local(m_tmp.path()), ctx);
        });
        future.waitForFinished();
        auto result = future.result();
        QVERIFY(result);
        QCOMPARE(result->size(), 3);
    }
};

QTEST_GUILESS_MAIN(TestLocalProvider)
#include "tst_localprovider.moc"
