#include "common/MemoryProvider.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "models/EntrySortProxy.h"
#include "providers/local/LocalProvider.h"

#include <QAbstractItemModelTester>
#include <QDir>
#include <QFile>
#include <QFont>
#include <QSignalSpy>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using test::MemoryProvider;

namespace {
void touch(const QString& path, const QByteArray& data = "x")
{
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}
} // namespace

// Adds a versions view: two versions of "a.txt" plus a delete marker for "gone.txt".
class VersionedMemoryProvider : public MemoryProvider
{
public:
    using MemoryProvider::MemoryProvider;
    Capabilities capabilities(const Location& l) const override
    {
        return MemoryProvider::capabilities(l) | Capability::Versions;
    }
    Result<ListPage> listWithOptions(const Location& dir, const QString& token, const ListOptions& options,
                                     OperationContext& ctx) override
    {
        if (options.isDefault())
            return list(dir, token, ctx);
        ++versionListings;
        auto version = [&](const QString& name, const QString& id, bool latest, bool marker, int ageDays) {
            Entry e;
            e.name = name;
            e.location = loc(dir.bucket(), name);
            e.versionId = id;
            e.isLatest = latest;
            e.isDeleteMarker = marker;
            e.size = marker ? -1 : 10;
            e.modified = QDateTime::currentDateTimeUtc().addDays(-ageDays);
            return e;
        };
        ListPage page;
        page.entries = {version(QStringLiteral("a.txt"), QStringLiteral("v1"), false, false, 3),
                        version(QStringLiteral("gone.txt"), QStringLiteral("m1"), true, true, 1),
                        version(QStringLiteral("a.txt"), QStringLiteral("v2"), true, false, 1),
                        version(QStringLiteral("gone.txt"), QStringLiteral("g1"), false, false, 2)};
        return page;
    }
    int versionListings = 0;
};

class TestEntryListModel : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;
    std::shared_ptr<MemoryProvider> m_mem;

    static bool waitLoaded(EntryListModel& model)
    {
        if (!model.isLoading())
            return true;
        QSignalSpy spy(&model, &EntryListModel::loadingChanged);
        return QTest::qWaitFor([&] { return !model.isLoading(); }, 5000);
    }

    QStringList proxyNames(const EntrySortProxy& proxy) const
    {
        QStringList out;
        for (int r = 0; r < proxy.rowCount(); ++r)
            out.push_back(proxy.index(r, 0).data(EntryListModel::SortRole).toString());
        return out;
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_mem = std::make_shared<MemoryProvider>(QStringLiteral("mem"));
        m_registry.setS3Factory([this](const QString&) { return m_mem; });
        QDir().mkpath(m_tmp.path() + QStringLiteral("/dir2"));
        QDir().mkpath(m_tmp.path() + QStringLiteral("/dir10"));
        touch(m_tmp.path() + QStringLiteral("/file10.txt"), "1234567890");
        touch(m_tmp.path() + QStringLiteral("/file2.txt"), "12");
        touch(m_tmp.path() + QStringLiteral("/.hidden"));
    }

    void loadsLocalDirectory()
    {
        EntryListModel model(&m_registry);
        QAbstractItemModelTester tester(&model, QAbstractItemModelTester::FailureReportingMode::QtTest);
        QSignalSpy changed(&model, &EntryListModel::locationChanged);
        model.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitLoaded(model));
        QCOMPARE(changed.size(), 1);
        QVERIFY(model.hasParentRow());
        QCOMPARE(model.rowCount(), 6); // .. + 5 entries
        QCOMPARE(model.index(0, 0).data().toString(), QStringLiteral(".."));
        QVERIFY(model.index(0, 0).data(EntryListModel::IsParentRole).toBool());
        const int row = model.rowForName(QStringLiteral("file10.txt"));
        QVERIFY(row > 0);
        QCOMPARE(model.entryAt(row).size, 10);
        QVERIFY(!model.index(row, EntryListModel::SizeColumn).data().toString().isEmpty());
        QVERIFY(!model.index(row, EntryListModel::TypeColumn).data().toString().isEmpty());
    }

    void proxySortsNaturallyDirectoriesFirst()
    {
        EntryListModel model(&m_registry);
        EntrySortProxy proxy;
        proxy.setSourceModel(&model);
        proxy.sort(EntryListModel::NameColumn, Qt::AscendingOrder);
        model.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitLoaded(model));
        QCOMPARE(proxyNames(proxy), (QStringList{"..", "dir2", "dir10", "file2.txt", "file10.txt"}));

        proxy.sort(EntryListModel::NameColumn, Qt::DescendingOrder);
        QCOMPARE(proxyNames(proxy), (QStringList{"..", "dir10", "dir2", "file10.txt", "file2.txt"}));

        proxy.sort(EntryListModel::SizeColumn, Qt::DescendingOrder);
        QCOMPARE(proxyNames(proxy).mid(3), (QStringList{"file10.txt", "file2.txt"}));

        proxy.setShowHidden(true);
        QVERIFY(proxyNames(proxy).contains(QStringLiteral(".hidden")));

        proxy.sort(EntryListModel::NameColumn, Qt::AscendingOrder);
        proxy.setQuickFilter(QStringLiteral("10"));
        QCOMPARE(proxyNames(proxy), (QStringList{"..", "dir10", "file10.txt"}));
        proxy.setQuickFilter(QStringLiteral("file*.txt"));
        QCOMPARE(proxyNames(proxy), (QStringList{"..", "file2.txt", "file10.txt"}));
    }

    void refreshKeepsRowsAndAppliesDiff()
    {
        QTemporaryDir dir;
        touch(dir.path() + QStringLiteral("/keep.txt"));
        touch(dir.path() + QStringLiteral("/gone.txt"));
        EntryListModel model(&m_registry);
        model.setWatchLocalChanges(false);
        QAbstractItemModelTester tester(&model, QAbstractItemModelTester::FailureReportingMode::QtTest);
        model.setLocation(Location::local(dir.path()));
        QVERIFY(waitLoaded(model));
        const QPersistentModelIndex keep(model.index(model.rowForName(QStringLiteral("keep.txt")), 0));

        QFile::remove(dir.path() + QStringLiteral("/gone.txt"));
        touch(dir.path() + QStringLiteral("/new.txt"));
        touch(dir.path() + QStringLiteral("/keep.txt"), "longer content");
        QSignalSpy reset(&model, &QAbstractItemModel::modelReset);
        model.refresh();
        QVERIFY(waitLoaded(model));
        QCOMPARE(reset.size(), 0);
        QVERIFY(keep.isValid());
        QCOMPARE(keep.data().toString(), QStringLiteral("keep.txt"));
        QCOMPARE(model.entryAt(keep.row()).size, 14);
        QCOMPARE(model.rowForName(QStringLiteral("gone.txt")), -1);
        QVERIFY(model.rowForName(QStringLiteral("new.txt")) > 0);
    }

    void watchesLocalDirectory()
    {
        QTemporaryDir dir;
        EntryListModel model(&m_registry);
        model.setLocation(Location::local(dir.path()));
        QVERIFY(waitLoaded(model));
        touch(dir.path() + QStringLiteral("/appeared.txt"));
        QTRY_VERIFY_WITH_TIMEOUT(model.rowForName(QStringLiteral("appeared.txt")) > 0, 5000);
    }

    void failedNavigationKeepsCurrentLocation()
    {
        EntryListModel model(&m_registry);
        model.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitLoaded(model));
        QSignalSpy failed(&model, &EntryListModel::loadFailed);
        model.setLocation(Location::local(m_tmp.path() + QStringLiteral("/does-not-exist")));
        QVERIFY(waitLoaded(model));
        QCOMPARE(failed.size(), 1);
        QCOMPARE(failed.first().at(1).value<Error>().code, ErrorCode::NotFound);
        QCOMPARE(model.location(), Location::local(m_tmp.path()));
        QCOMPARE(model.rowCount(), 6);
    }

    void paginatesWithAutoLoadLimitAndFetchMore()
    {
        m_mem->addBucket(QStringLiteral("big"));
        for (int i = 0; i < 25; ++i)
            m_mem->put(QStringLiteral("big"), QStringLiteral("k%1").arg(i, 2, 10, QLatin1Char('0')), "v");
        m_mem->pageSize = 4;
        EntryListModel model(&m_registry);
        model.setAutoLoadLimit(10);
        QAbstractItemModelTester tester(&model, QAbstractItemModelTester::FailureReportingMode::QtTest);
        model.setLocation(m_mem->loc(QStringLiteral("big")));
        QVERIFY(waitLoaded(model));
        QCOMPARE(model.entryCount(), 12); // pages of 4 until >= 10
        QVERIFY(model.canFetchMore({}));
        model.fetchMore({});
        QVERIFY(waitLoaded(model));
        QCOMPARE(model.entryCount(), 16);
        while (model.canFetchMore({})) {
            model.fetchMore({});
            QVERIFY(waitLoaded(model));
        }
        QCOMPARE(model.entryCount(), 25);
        m_mem->pageSize = 1000;
    }

    void s3HierarchyRows()
    {
        m_mem->addBucket(QStringLiteral("tree"));
        m_mem->put(QStringLiteral("tree"), QStringLiteral("a/b.txt"), "b");
        m_mem->put(QStringLiteral("tree"), QStringLiteral("top.txt"), "t");
        EntryListModel model(&m_registry);
        model.setLocation(m_mem->loc(QStringLiteral("tree")));
        QVERIFY(waitLoaded(model));
        QVERIFY(model.hasParentRow()); // bucket -> connection
        const Entry& dir = model.entryAt(model.rowForName(QStringLiteral("a")));
        QCOMPARE(dir.type, Entry::Type::Directory);
        QCOMPARE(dir.location.key(), QStringLiteral("a/"));
        QCOMPARE(
            model.index(model.rowForName(QStringLiteral("a")), EntryListModel::SizeColumn).data().toString(),
            QStringLiteral("<DIR>"));
    }

    void versionRowsAreSeparateAndSorted()
    {
        auto versioned = std::make_shared<VersionedMemoryProvider>(QStringLiteral("ver"));
        versioned->addBucket(QStringLiteral("b"));
        versioned->put(QStringLiteral("b"), QStringLiteral("a.txt"), "current");
        ProviderRegistry registry;
        registry.setS3Factory([versioned](const QString&) { return versioned; });
        EntryListModel model(&registry);
        QAbstractItemModelTester tester(&model, QAbstractItemModelTester::FailureReportingMode::QtTest);
        EntrySortProxy proxy;
        proxy.setSourceModel(&model);
        proxy.sort(EntryListModel::NameColumn);
        model.setLocation(versioned->loc(QStringLiteral("b")));
        QVERIFY(waitLoaded(model));
        QVERIFY(!model.showsVersions());
        QCOMPARE(model.entryCount(), 1);

        ListOptions options;
        options.versions = true;
        model.setListOptions(options);
        QVERIFY(waitLoaded(model));
        QVERIFY(model.showsVersions());
        QCOMPARE(model.entryCount(), 4); // rows are name + version, not just name
        // Current version first, then older ones, per name.
        auto versionAt = [&](int row) {
            return proxy.index(row, 0).data(EntryListModel::EntryRole).value<Entry>().versionId;
        };
        const int first = model.hasParentRow() ? 1 : 0;
        QCOMPARE(versionAt(first), QStringLiteral("v2"));
        QCOMPARE(versionAt(first + 1), QStringLiteral("v1"));
        QCOMPARE(versionAt(first + 2), QStringLiteral("m1"));
        const QModelIndex marker = proxy.index(first + 2, EntryListModel::VersionColumn);
        QVERIFY(marker.data().toString().contains(QStringLiteral("Delete marker")));
        QVERIFY(proxy.index(first, EntryListModel::VersionColumn)
                    .data()
                    .toString()
                    .contains(QStringLiteral("current")));
        QVERIFY(marker.siblingAtColumn(0).data(Qt::FontRole).value<QFont>().strikeOut());

        // A refresh keeps all four rows (identity includes the version id).
        model.refresh();
        QVERIFY(waitLoaded(model));
        QCOMPARE(model.entryCount(), 4);
        QCOMPARE(versioned->versionListings, 2);

        model.setListOptions({});
        QVERIFY(waitLoaded(model));
        QCOMPARE(model.entryCount(), 1);
    }
};

QTEST_MAIN(TestEntryListModel)
#include "tst_entrylistmodel.moc"
