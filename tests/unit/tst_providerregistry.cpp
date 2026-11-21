#include "core/Provider.h"
#include "core/ProviderRegistry.h"

#include <QTest>

using namespace s3fm;

namespace {

// In-memory provider with a fixed tree and tiny pages, to exercise the generic
// Provider::walk / listAll implementations.
class FakeProvider : public Provider
{
public:
    // dir key -> children (name, isDir)
    QHash<QString, QList<QPair<QString, bool>>> tree;
    int pageSize = 2;
    int listCalls = 0;

    Capabilities capabilities(const Location&) const override { return Capability::None; }

    Result<ListPage> list(const Location& dir, const QString& token, OperationContext&) override
    {
        ++listCalls;
        const auto children = tree.value(dir.key());
        const int start = token.isEmpty() ? 0 : token.toInt();
        ListPage page;
        for (int i = start; i < qMin<int>(start + pageSize, children.size()); ++i) {
            Entry e;
            e.name = children[i].first;
            e.type = children[i].second ? Entry::Type::Directory : Entry::Type::File;
            e.location = dir.child(e.name, children[i].second);
            page.entries.push_back(e);
        }
        if (start + pageSize < children.size())
            page.nextPageToken = QString::number(start + pageSize);
        return page;
    }
    Result<Entry> stat(const Location&, OperationContext&) override
    {
        return Error::make(ErrorCode::NotFound, {});
    }
    VoidResult makeDirectory(const Location&, OperationContext&) override { return {}; }
    VoidResult remove(const EntryList&, OperationContext&) override { return {}; }
    VoidResult rename(const Location&, const Location&, OperationContext&) override { return {}; }
    VoidResult copy(const Location&, const Location&, OperationContext&) override { return {}; }
    VoidResult download(const Location&, const QString&, OperationContext&) override { return {}; }
    VoidResult upload(const QString&, const Location&, OperationContext&) override { return {}; }
};

Location bucketRoot()
{
    return Location::s3(QStringLiteral("c"), QStringLiteral("b"));
}

} // namespace

class TestProviderRegistry : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void routesByKind()
    {
        ProviderRegistry reg;
        auto local = std::make_shared<FakeProvider>();
        auto root = std::make_shared<FakeProvider>();
        int created = 0;
        reg.setLocalProvider(local);
        reg.setS3RootProvider(root);
        reg.setS3Factory([&](const QString& id) -> std::shared_ptr<Provider> {
            if (id == u"unknown")
                return nullptr;
            ++created;
            return std::make_shared<FakeProvider>();
        });

        QCOMPARE(reg.providerFor(Location::local(QStringLiteral("/tmp"))), local);
        QCOMPARE(reg.providerFor(Location::s3Root()), root);
        QVERIFY(!reg.providerFor(Location()));

        auto a = reg.providerFor(Location::fromString(QStringLiteral("s3://conn-a/bucket/key")));
        auto a2 = reg.providerFor(Location::fromString(QStringLiteral("s3://conn-a/")));
        QVERIFY(a);
        QCOMPARE(a, a2);
        QCOMPARE(created, 1);
        QVERIFY(!reg.providerFor(Location::fromString(QStringLiteral("s3://unknown/"))));

        reg.invalidateConnection(QStringLiteral("conn-a"));
        auto a3 = reg.providerFor(Location::fromString(QStringLiteral("s3://conn-a/")));
        QVERIFY(a3 != a);
        QCOMPARE(created, 2);
    }

    void defaultListAllFollowsPages()
    {
        FakeProvider p;
        p.tree.insert(QString(), {{"a", false}, {"b", false}, {"c", false}, {"d", false}, {"e", false}});
        OperationContext ctx;
        auto all = p.listAll(bucketRoot(), ctx);
        QVERIFY(all);
        QCOMPARE(all->size(), 5);
        QCOMPARE(p.listCalls, 3);
    }

    void defaultWalkRecursesAcrossPages()
    {
        FakeProvider p;
        p.tree.insert(QString(), {{"x", true}, {"f1", false}, {"y", true}});
        p.tree.insert(QStringLiteral("x/"), {{"f2", false}, {"f3", false}, {"z", true}});
        p.tree.insert(QStringLiteral("x/z/"), {{"f4", false}});
        p.tree.insert(QStringLiteral("y/"), {});
        OperationContext ctx;
        QStringList keys;
        auto r = p.walk(
            bucketRoot(),
            [&](const Entry& e) {
                keys.push_back(e.location.key());
                return true;
            },
            ctx);
        QVERIFY(r);
        QCOMPARE(keys, (QStringList{"x/", "x/f2", "x/f3", "x/z/", "x/z/f4", "f1", "y/"}));
    }

    void walkHonoursCancellation()
    {
        FakeProvider p;
        p.tree.insert(QString(), {{"a", false}, {"b", false}});
        OperationContext ctx;
        int visited = 0;
        auto r = p.walk(
            bucketRoot(),
            [&](const Entry&) {
                ++visited;
                ctx.cancel();
                return true;
            },
            ctx);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
        QCOMPARE(visited, 1);
    }
};

QTEST_GUILESS_MAIN(TestProviderRegistry)
#include "tst_providerregistry.moc"
