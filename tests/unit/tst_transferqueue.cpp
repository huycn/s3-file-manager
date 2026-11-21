// Transfer engine against the local disk and in-memory S3-like providers:
// routes, conflicts, moves, filters, retries, pause/resume, cancel, ordering and
// restoring persisted jobs.

#include "common/MemoryProvider.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"
#include "transfer/TransferStore.h"

#include <QDir>
#include <QFile>
#include <QSignalSpy>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using test::MemoryProvider;

namespace {

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

Entry localEntry(const QString& path)
{
    return LocalProvider::entryFromFileInfo(QFileInfo(path));
}

using Resolver = std::function<ConflictAnswer(const ConflictInfo&)>;

ConflictAnswer answer(ConflictPolicy p, bool all = false)
{
    return {p, all, false};
}

QString describe(const TransferJob* job)
{
    QStringList lines;
    for (const TransferFailure& f : job->failures())
        lines.push_back(f.item + QStringLiteral(": ") + f.error.toString());
    return jobStateName(job->state()) + u' ' + lines.join(QStringLiteral("; "));
}

} // namespace

class TestTransferQueue : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;
    std::shared_ptr<MemoryProvider> m_memA;
    std::shared_ptr<MemoryProvider> m_memB;
    std::unique_ptr<TransferQueue> m_queue;
    QString src;
    QString dst;

    TransferSettings fastSettings() const
    {
        TransferSettings s;
        s.retryBaseDelayMs = 5;
        return s;
    }

    TransferJob* start(TransferKind kind, const EntryList& sources, const Location& destination,
                       Resolver resolver = {}, bool destIsDir = false, const TransferOptions& options = {})
    {
        TransferRequest req;
        req.kind = kind;
        req.sources = sources;
        req.destination = destination;
        req.destinationIsDirectory = destIsDir;
        req.options = options;
        TransferJob* job = m_queue->enqueue(req);
        connect(job, &TransferJob::conflictRequested, job, [job, resolver](const ConflictInfo& info) {
            job->answerConflict(resolver ? resolver(info)
                                         : ConflictAnswer{ConflictPolicy::Skip, false, true});
        });
        return job;
    }

    static bool waitFinished(TransferJob* job, int ms = 10000)
    {
        return QTest::qWaitFor([job] { return job->isFinished(); }, ms);
    }

    TransferJob* run(TransferKind kind, const EntryList& sources, const Location& destination,
                     Resolver resolver = {}, bool destIsDir = false, const TransferOptions& options = {})
    {
        TransferJob* job = start(kind, sources, destination, std::move(resolver), destIsDir, options);
        if (!waitFinished(job))
            qWarning("job did not finish: %s", qPrintable(describe(job)));
        return job;
    }

    static void verifyDone(TransferJob* job)
    {
        QVERIFY2(job->state() == JobState::Done, qPrintable(describe(job)));
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory([this](const QString& id) -> std::shared_ptr<Provider> {
            if (id == u"a")
                return m_memA;
            if (id == u"b")
                return m_memB;
            return nullptr;
        });
    }

    void init()
    {
        m_memA = std::make_shared<MemoryProvider>(QStringLiteral("a"));
        m_memB = std::make_shared<MemoryProvider>(QStringLiteral("b"));
        m_memA->addBucket(QStringLiteral("bucket"));
        m_memB->addBucket(QStringLiteral("other"));
        m_registry.invalidateConnection(QStringLiteral("a"));
        m_registry.invalidateConnection(QStringLiteral("b"));
        m_queue = std::make_unique<TransferQueue>(&m_registry);
        m_queue->setSettings(fastSettings());

        QDir(m_tmp.path()).removeRecursively();
        src = m_tmp.path() + QStringLiteral("/src");
        dst = m_tmp.path() + QStringLiteral("/dst");
        QDir().mkpath(dst);
        writeFile(src + QStringLiteral("/a.txt"), "alpha");
        writeFile(src + QStringLiteral("/tree/b.txt"), "bravo");
        writeFile(src + QStringLiteral("/tree/deep/c.txt"), "charlie");
        QDir().mkpath(src + QStringLiteral("/tree/empty"));
    }

    void cleanup() { m_queue.reset(); }

    // --- routes -----------------------------------------------------------

    void copyFileIntoDirectory()
    {
        TransferJob* job =
            run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst));
        verifyDone(job);
        QCOMPARE(job->progress().filesDone, 1);
        QCOMPARE(job->progress().bytesDone, 5);
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("alpha"));
        QVERIFY(QFileInfo::exists(src + QStringLiteral("/a.txt")));
    }

    void copyTreeRecursively()
    {
        TransferJob* job =
            run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst));
        verifyDone(job);
        QCOMPARE(readFile(dst + QStringLiteral("/tree/b.txt")), QByteArray("bravo"));
        QCOMPARE(readFile(dst + QStringLiteral("/tree/deep/c.txt")), QByteArray("charlie"));
        QVERIFY(QFileInfo(dst + QStringLiteral("/tree/empty")).isDir());
        QCOMPARE(job->progress().filesTotal, 2);
    }

    void copyWithNewName()
    {
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                       Location::local(dst + QStringLiteral("/renamed.txt"))));
        QCOMPARE(readFile(dst + QStringLiteral("/renamed.txt")), QByteArray("alpha"));
    }

    void copyIntoNewDirectoryWhenFlagged()
    {
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                       Location::local(dst + QStringLiteral("/newdir")), {}, true));
        QCOMPARE(readFile(dst + QStringLiteral("/newdir/a.txt")), QByteArray("alpha"));
    }

    void uploadTreeToRemote()
    {
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))},
                       m_memA->loc(QStringLiteral("bucket"), QStringLiteral("in/"))));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("in/tree/deep/c.txt")),
                 QByteArray("charlie"));
        QVERIFY(m_memA->has(QStringLiteral("bucket"), QStringLiteral("in/tree/empty/"))); // folder marker
    }

    void downloadFromRemote()
    {
        m_memA->put(QStringLiteral("bucket"), QStringLiteral("docs/x.txt"), "x-ray");
        m_memA->put(QStringLiteral("bucket"), QStringLiteral("docs/sub/y.txt"), "yankee");
        Entry dir;
        dir.name = QStringLiteral("docs");
        dir.type = Entry::Type::Directory;
        dir.location = m_memA->loc(QStringLiteral("bucket"), QStringLiteral("docs/"));
        verifyDone(run(TransferKind::Copy, {dir}, Location::local(dst)));
        QCOMPARE(readFile(dst + QStringLiteral("/docs/x.txt")), QByteArray("x-ray"));
        QCOMPARE(readFile(dst + QStringLiteral("/docs/sub/y.txt")), QByteArray("yankee"));
    }

    void remoteCopyAndMove()
    {
        m_memA->put(QStringLiteral("bucket"), QStringLiteral("f.txt"), "foxtrot");
        Entry f;
        f.name = QStringLiteral("f.txt");
        f.size = 7;
        f.location = m_memA->loc(QStringLiteral("bucket"), QStringLiteral("f.txt"));

        // Same provider: server-side copy.
        verifyDone(
            run(TransferKind::Copy, {f}, m_memA->loc(QStringLiteral("bucket"), QStringLiteral("copy/"))));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("copy/f.txt")), QByteArray("foxtrot"));

        // Across connections: staged through a file, which is removed afterwards.
        verifyDone(run(TransferKind::Copy, {f}, m_memB->loc(QStringLiteral("other"))));
        QCOMPARE(m_memB->get(QStringLiteral("other"), QStringLiteral("f.txt")), QByteArray("foxtrot"));
        QVERIFY(QDir(QDir::tempPath() + QStringLiteral("/s3fm-staging")).entryList(QDir::Files).isEmpty());

        // Move where the provider has no rename: copy + delete.
        verifyDone(
            run(TransferKind::Move, {f}, m_memA->loc(QStringLiteral("bucket"), QStringLiteral("moved.txt"))));
        QVERIFY(!m_memA->has(QStringLiteral("bucket"), QStringLiteral("f.txt")));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("moved.txt")), QByteArray("foxtrot"));
    }

    // --- conflicts --------------------------------------------------------

    void conflictSkipOverwriteCancel()
    {
        writeFile(dst + QStringLiteral("/a.txt"), "old");
        int asked = 0;
        TransferJob* job = run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                               Location::local(dst), [&](const ConflictInfo& info) {
                                   ++asked;
                                   [&] { QCOMPARE(info.destination.size, 3); }();
                                   return answer(ConflictPolicy::Skip);
                               });
        verifyDone(job);
        QCOMPARE(asked, 1);
        QCOMPARE(job->progress().filesSkipped, 1);
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("old"));

        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       [](const ConflictInfo&) { return answer(ConflictPolicy::Overwrite); }));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("alpha"));

        job = run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                  [](const ConflictInfo&) { return ConflictAnswer{ConflictPolicy::Skip, false, true}; });
        QCOMPARE(job->state(), JobState::Cancelled);
    }

    void applyToAllAsksOnce()
    {
        verifyDone(
            run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst)));
        writeFile(src + QStringLiteral("/tree/b.txt"), "BRAVO");
        writeFile(src + QStringLiteral("/tree/deep/c.txt"), "CHARLIE");
        int asked = 0;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst),
                       [&](const ConflictInfo&) {
                           ++asked;
                           return answer(ConflictPolicy::Overwrite, true);
                       }));
        QCOMPARE(asked, 1);
        QCOMPARE(readFile(dst + QStringLiteral("/tree/deep/c.txt")), QByteArray("CHARLIE"));
    }

    void conflictKeepBothRenames()
    {
        writeFile(dst + QStringLiteral("/a.txt"), "old");
        writeFile(dst + QStringLiteral("/a (2).txt"), "older");
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       [](const ConflictInfo&) { return answer(ConflictPolicy::Rename); }));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("old"));
        QCOMPARE(readFile(dst + QStringLiteral("/a (2).txt")), QByteArray("older"));
        QCOMPARE(readFile(dst + QStringLiteral("/a (3).txt")), QByteArray("alpha"));
    }

    void conflictPoliciesWithoutPrompt()
    {
        // Destination newer than the source and the same size: both conditional policies skip.
        writeFile(dst + QStringLiteral("/a.txt"), "ALPHA");
        QFile f(dst + QStringLiteral("/a.txt"));
        QVERIFY(f.open(QIODevice::Append));
        QVERIFY(f.setFileTime(QDateTime::currentDateTime().addDays(1), QFileDevice::FileModificationTime));
        f.close();
        TransferOptions opts;
        opts.conflict = ConflictPolicy::OverwriteIfNewer;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       {}, false, opts));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("ALPHA"));
        opts.conflict = ConflictPolicy::OverwriteIfSizeDiffers;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       {}, false, opts));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("ALPHA"));

        writeFile(dst + QStringLiteral("/a.txt"), "different size");
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       {}, false, opts));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("alpha"));

        // Older destination: "if newer" overwrites.
        writeFile(dst + QStringLiteral("/a.txt"), "ALPHA");
        QVERIFY(f.open(QIODevice::Append));
        QVERIFY(f.setFileTime(QDateTime::currentDateTime().addDays(-1), QFileDevice::FileModificationTime));
        f.close();
        opts.conflict = ConflictPolicy::OverwriteIfNewer;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(dst),
                       {}, false, opts));
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("alpha"));
    }

    void refuseCopyIntoItself()
    {
        TransferJob* job = run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))},
                               Location::local(src + QStringLiteral("/tree/deep")));
        QCOMPARE(job->state(), JobState::Failed);
        QCOMPARE(job->failures().size(), 1);
        QCOMPARE(job->failures().first().error.code, ErrorCode::InvalidArgument);

        job = run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))}, Location::local(src));
        QCOMPARE(job->failures().size(), 1);
    }

    // --- move and delete --------------------------------------------------

    void moveWithinLocalUsesRename()
    {
        verifyDone(
            run(TransferKind::Move,
                {localEntry(src + QStringLiteral("/a.txt")), localEntry(src + QStringLiteral("/tree"))},
                Location::local(dst)));
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/a.txt")));
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree")));
        QCOMPARE(readFile(dst + QStringLiteral("/tree/deep/c.txt")), QByteArray("charlie"));
    }

    void moveMergesIntoExistingDirectory()
    {
        writeFile(dst + QStringLiteral("/tree/existing.txt"), "keep");
        verifyDone(
            run(TransferKind::Move, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst)));
        QCOMPARE(readFile(dst + QStringLiteral("/tree/existing.txt")), QByteArray("keep"));
        QCOMPARE(readFile(dst + QStringLiteral("/tree/b.txt")), QByteArray("bravo"));
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree")));
    }

    void moveKeepsSkippedItems()
    {
        writeFile(dst + QStringLiteral("/tree/b.txt"), "existing");
        TransferJob* job =
            run(TransferKind::Move, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst),
                [](const ConflictInfo&) { return answer(ConflictPolicy::Skip); });
        verifyDone(job);
        QCOMPARE(job->progress().filesSkipped, 1);
        QVERIFY(QFileInfo::exists(src + QStringLiteral("/tree/b.txt")));       // skipped: kept
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree/deep/c.txt"))); // moved
        QCOMPARE(readFile(dst + QStringLiteral("/tree/b.txt")), QByteArray("existing"));
    }

    void moveToRemoteDeletesVerifiedSources()
    {
        verifyDone(run(TransferKind::Move, {localEntry(src + QStringLiteral("/tree"))},
                       m_memA->loc(QStringLiteral("bucket"), QStringLiteral("up/"))));
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree")));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("up/tree/b.txt")), QByteArray("bravo"));
    }

    void failuresAreReportedAndMoveKeepsSource()
    {
        m_memA->failUploads = true;
        TransferJob* job = run(TransferKind::Move, {localEntry(src + QStringLiteral("/a.txt"))},
                               m_memA->loc(QStringLiteral("bucket")));
        QCOMPARE(job->state(), JobState::Failed);
        QCOMPARE(job->failures().size(), 1);
        QCOMPARE(job->failures().first().error.code, ErrorCode::AccessDenied);
        QVERIFY(QFileInfo::exists(src + QStringLiteral("/a.txt")));

        // Fix the cause and retry only what failed.
        m_memA->failUploads = false;
        m_queue->retryFailed(job);
        QVERIFY(waitFinished(job));
        verifyDone(job);
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/a.txt")));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("a.txt")), QByteArray("alpha"));
    }

    void deleteTree()
    {
        TransferJob* job = run(TransferKind::Delete, {localEntry(src + QStringLiteral("/tree"))}, {});
        verifyDone(job);
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree")));
        QCOMPARE(job->progress().filesDone, 5); // b.txt, deep/c.txt, deep, empty, tree
    }

    // --- options ----------------------------------------------------------

    void includeExcludeFilters()
    {
        writeFile(src + QStringLiteral("/tree/deep/d.log"), "delta");
        writeFile(src + QStringLiteral("/tree/skip/e.txt"), "echo");
        TransferOptions opts;
        opts.include = {QStringLiteral("*.txt")};
        opts.exclude = {QStringLiteral("skip")};
        TransferJob* job = run(TransferKind::Move, {localEntry(src + QStringLiteral("/tree"))},
                               m_memA->loc(QStringLiteral("bucket"), QStringLiteral("f/")), {}, true, opts);
        verifyDone(job);
        QStringList objects;
        for (const QString& k : m_memA->keys(QStringLiteral("bucket"))) {
            if (!k.endsWith(u'/')) // folder markers (this provider has no implicit folders)
                objects.push_back(k);
        }
        QCOMPARE(objects, QStringList({QStringLiteral("f/tree/b.txt"), QStringLiteral("f/tree/deep/c.txt")}));
        // Moved files are gone; the folder stays with what was filtered out.
        QVERIFY(!QFileInfo::exists(src + QStringLiteral("/tree/b.txt")));
        QVERIFY(QFileInfo::exists(src + QStringLiteral("/tree/deep/d.log")));
        QVERIFY(QFileInfo::exists(src + QStringLiteral("/tree/skip/e.txt")));
    }

#ifdef Q_OS_UNIX
    void symlinksSkippedWhenNotFollowed()
    {
        QVERIFY(QFile::link(src + QStringLiteral("/a.txt"), src + QStringLiteral("/tree/link.txt")));
        TransferOptions opts;
        opts.followSymlinks = false;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst),
                       {}, false, opts));
        QVERIFY(QFileInfo::exists(dst + QStringLiteral("/tree/b.txt")));
        QVERIFY(!QFileInfo::exists(dst + QStringLiteral("/tree/link.txt")));
        opts.followSymlinks = true;
        verifyDone(run(
            TransferKind::Copy, {localEntry(src + QStringLiteral("/tree"))}, Location::local(dst),
            [](const ConflictInfo&) { return answer(ConflictPolicy::Skip, true); }, false, opts));
        QCOMPARE(readFile(dst + QStringLiteral("/tree/link.txt")), QByteArray("alpha"));
    }
#endif

    void transientErrorsAreRetried()
    {
        m_memA->failNextUploads = 2;
        verifyDone(run(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                       m_memA->loc(QStringLiteral("bucket"))));
        QCOMPARE(m_memA->get(QStringLiteral("bucket"), QStringLiteral("a.txt")), QByteArray("alpha"));

        TransferSettings s = fastSettings();
        s.maxRetries = 1;
        m_queue->setSettings(s);
        m_memA->failNextUploads = 5;
        TransferJob* job = run(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree/b.txt"))},
                               m_memA->loc(QStringLiteral("bucket")));
        QCOMPARE(job->state(), JobState::Failed);
        QCOMPARE(job->failures().first().error.code, ErrorCode::Network);
    }

    // --- queue control ----------------------------------------------------

    void pauseResumeAndCancel()
    {
        for (int i = 0; i < 6; ++i)
            writeFile(src + QStringLiteral("/many/f%1.txt").arg(i), QByteArray::number(i));
        TransferSettings s = fastSettings();
        s.filesPerJob = 1;
        m_queue->setSettings(s);
        m_memA->uploadDelayMs = 150;
        TransferJob* job = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/many"))},
                                 m_memA->loc(QStringLiteral("bucket")));
        QVERIFY(QTest::qWaitFor([&] { return m_memA->uploadCount >= 2; }, 5000));
        m_queue->pause(job);
        QVERIFY(QTest::qWaitFor([&] { return job->state() == JobState::Paused; }, 5000));
        const int uploaded = m_memA->uploadCount;
        QVERIFY(uploaded < 6);
        QTest::qWait(300);
        QCOMPARE(int(m_memA->uploadCount), uploaded); // really paused

        m_memA->uploadDelayMs = 0;
        m_queue->resume(job);
        QVERIFY(waitFinished(job));
        verifyDone(job);
        QCOMPARE(int(m_memA->uploadCount), 6); // nothing uploaded twice
        QCOMPARE(m_memA->keys(QStringLiteral("bucket")).filter(QStringLiteral(".txt")).size(), 6);

        // Cancel a running job.
        m_memB->uploadDelayMs = 2000;
        TransferJob* other = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                                   m_memB->loc(QStringLiteral("other")));
        QCOMPARE(other->state(), JobState::Running);
        m_queue->cancel(other);
        QVERIFY(waitFinished(other, 3000));
        QCOMPARE(other->state(), JobState::Cancelled);
        QVERIFY(!m_memB->has(QStringLiteral("other"), QStringLiteral("a.txt")));

        // Cancel a paused job.
        other = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                      m_memB->loc(QStringLiteral("other")));
        m_queue->pause(other);
        QVERIFY(QTest::qWaitFor([&] { return other->state() == JobState::Paused; }, 3000));
        m_queue->cancel(other);
        QCOMPARE(other->state(), JobState::Cancelled);
    }

    void concurrencyLimitAndOrder()
    {
        TransferSettings s = fastSettings();
        s.maxJobs = 1;
        m_queue->setSettings(s);
        m_memA->uploadDelayMs = 200;
        TransferJob* first = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/a.txt"))},
                                   m_memA->loc(QStringLiteral("bucket")));
        TransferJob* second = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree/b.txt"))},
                                    m_memA->loc(QStringLiteral("bucket")));
        TransferJob* third = start(TransferKind::Copy, {localEntry(src + QStringLiteral("/tree/deep/c.txt"))},
                                   m_memA->loc(QStringLiteral("bucket")));
        QCOMPARE(first->state(), JobState::Running);
        QCOMPARE(second->state(), JobState::Queued);
        m_queue->move(third, 0);
        QCOMPARE(m_queue->indexOf(third), 0);
        QVERIFY(waitFinished(first));
        QCOMPARE(third->state(), JobState::Running); // moved ahead of `second`
        QCOMPARE(second->state(), JobState::Queued);
        QVERIFY(waitFinished(second));
        verifyDone(third);
        m_queue->clearFinished();
        QVERIFY(m_queue->jobs().isEmpty());
    }

    void restoresPersistedJobs()
    {
        QTemporaryDir state;
        for (int i = 0; i < 5; ++i)
            writeFile(src + QStringLiteral("/many/f%1.txt").arg(i), QByteArray::number(i));
        TransferSettings s = fastSettings();
        s.filesPerJob = 1;
        QString id;
        {
            TransferQueue queue(&m_registry);
            queue.setSettings(s);
            queue.setStore(std::make_shared<TransferStore>(state.path()));
            m_memA->uploadDelayMs = 150;
            TransferRequest req;
            req.kind = TransferKind::Copy;
            req.sources = {localEntry(src + QStringLiteral("/many"))};
            req.destination = m_memA->loc(QStringLiteral("bucket"), QStringLiteral("r/"));
            TransferJob* job = queue.enqueue(req);
            id = job->id();
            QVERIFY(QTest::qWaitFor([&] { return m_memA->uploadCount >= 2; }, 5000));
            // Leaving the scope shuts the queue down mid-transfer (like quitting the app).
        }
        const int before = m_memA->uploadCount;
        QVERIFY(before >= 2 && before < 5);
        QVERIFY(QFileInfo::exists(state.path() + u'/' + id + QStringLiteral("/tasks.jsonl")));

        m_memA->uploadDelayMs = 0;
        TransferQueue queue(&m_registry);
        queue.setSettings(s);
        queue.setStore(std::make_shared<TransferStore>(state.path()));
        QCOMPARE(queue.restore(), 1);
        TransferJob* job = queue.jobs().first();
        QCOMPARE(job->id(), id);
        QCOMPARE(job->state(), JobState::Paused);
        queue.resume(job);
        QVERIFY(waitFinished(job));
        verifyDone(job);
        QCOMPARE(int(m_memA->uploadCount), 5); // the files done before the restart were not redone
        QCOMPARE(job->progress().filesDone, 5);
        QVERIFY(!QFileInfo::exists(state.path() + u'/' + id)); // state removed once done
    }
};

QTEST_GUILESS_MAIN(TestTransferQueue)
#include "tst_transferqueue.moc"
