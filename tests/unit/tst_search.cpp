// Recursive search (task 10.1): criteria matching, size parsing, and runSearch() over the
// local provider (tree walk) and an S3-like provider (flat prefix walk).

#include "common/MemoryProvider.h"
#include "core/OperationContext.h"
#include "core/Search.h"
#include "providers/local/LocalProvider.h"

#include <QDir>
#include <QFile>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using test::MemoryProvider;

namespace {

Entry file(const QString& name, qint64 size = 10, const QDateTime& modified = {}, const QString& storageClass = {})
{
    Entry e;
    e.name = name;
    e.size = size;
    e.modified = modified;
    e.storageClass = storageClass;
    return e;
}

Entry dir(const QString& name)
{
    Entry e;
    e.name = name;
    e.type = Entry::Type::Directory;
    return e;
}

// MemoryProvider with S3's flat-listing capability, so runSearch() goes through walkPrefix().
class FlatMemoryProvider : public MemoryProvider
{
public:
    using MemoryProvider::MemoryProvider;
    Capabilities capabilities(const Location& l) const override
    {
        return MemoryProvider::capabilities(l) | Capability::ImplicitDirectories;
    }
};

QStringList search(Provider& provider, const Location& root, const SearchCriteria& c,
                   SearchStats* stats = nullptr)
{
    QStringList found;
    OperationContext ctx;
    auto result = runSearch(
        provider, root, c, [&](const Entry& e) { found.push_back(root.relativePathTo(e.location)); }, ctx);
    if (!result) {
        qWarning() << result.error().toString();
        return {QStringLiteral("<error>")};
    }
    if (stats)
        *stats = result.value();
    found.sort();
    return found;
}

void touch(const QString& path, const QByteArray& data = "x")
{
    QDir().mkpath(QFileInfo(path).path());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

} // namespace

class TestSearch : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void wildcards_data()
    {
        QTest::addColumn<QString>("pattern");
        QTest::addColumn<QString>("name");
        QTest::addColumn<bool>("match");
        QTest::newRow("empty matches all") << QString() << QStringLiteral("a.txt") << true;
        QTest::newRow("suffix") << QStringLiteral("*.log") << QStringLiteral("app.log") << true;
        QTest::newRow("anchored") << QStringLiteral("*.log") << QStringLiteral("app.log.gz") << false;
        QTest::newRow("case-insensitive") << QStringLiteral("*.LOG") << QStringLiteral("app.log") << true;
        QTest::newRow("question mark") << QStringLiteral("a?c") << QStringLiteral("abc") << true;
        QTest::newRow("class") << QStringLiteral("[ab]*") << QStringLiteral("cat") << false;
        QTest::newRow("substring") << QStringLiteral("port") << QStringLiteral("report-1.pdf") << true;
        QTest::newRow("substring miss") << QStringLiteral("xyz") << QStringLiteral("report.pdf") << false;
        QTest::newRow("list first") << QStringLiteral("*.jpg; *.png") << QStringLiteral("a.jpg") << true;
        QTest::newRow("list second") << QStringLiteral("*.jpg; *.png") << QStringLiteral("a.PNG") << true;
        QTest::newRow("list none") << QStringLiteral("*.jpg;*.png") << QStringLiteral("a.gif") << false;
    }

    void wildcards()
    {
        QFETCH(QString, pattern);
        QFETCH(QString, name);
        QFETCH(bool, match);
        SearchCriteria c;
        c.pattern = pattern;
        const SearchMatcher m(c);
        QVERIFY(m.isValid());
        QCOMPARE(m.matches(file(name), QStringLiteral("some/dir/") + name), match);
    }

    void caseSensitive()
    {
        SearchCriteria c;
        c.pattern = QStringLiteral("*.LOG");
        c.caseSensitive = true;
        QVERIFY(!SearchMatcher(c).matches(file(QStringLiteral("a.log")), QStringLiteral("a.log")));
        c.pattern = QStringLiteral("Read");
        QVERIFY(!SearchMatcher(c).matches(file(QStringLiteral("readme")), QStringLiteral("readme")));
        QVERIFY(SearchMatcher(c).matches(file(QStringLiteral("ReadMe")), QStringLiteral("ReadMe")));
    }

    void path()
    {
        SearchCriteria c;
        c.pattern = QStringLiteral("2024/*.csv");
        // Name-only: the pattern never matches a name.
        QVERIFY(!SearchMatcher(c).matches(file(QStringLiteral("a.csv")), QStringLiteral("logs/2024/a.csv")));
        c.matchPath = true;
        QVERIFY(!SearchMatcher(c).matches(file(QStringLiteral("a.csv")), QStringLiteral("logs/2024/a.csv")));
        c.pattern = QStringLiteral("*2024/*.csv");
        QVERIFY(SearchMatcher(c).matches(file(QStringLiteral("a.csv")), QStringLiteral("logs/2024/a.csv")));
        // '*' crosses '/' in path mode.
        c.pattern = QStringLiteral("logs*.csv");
        QVERIFY(SearchMatcher(c).matches(file(QStringLiteral("a.csv")), QStringLiteral("logs/2024/a.csv")));
    }

    void regex()
    {
        SearchCriteria c;
        c.syntax = SearchCriteria::Syntax::RegularExpression;
        c.pattern = QStringLiteral(R"(_p\d{3}\.png$)");
        const SearchMatcher m(c);
        QVERIFY(m.isValid());
        QVERIFY(m.matches(file(QStringLiteral("x_p001.png")), QStringLiteral("x_p001.png")));
        QVERIFY(!m.matches(file(QStringLiteral("x_p001_10pc.png")), QStringLiteral("x_p001_10pc.png")));
        c.pattern = QStringLiteral("(unclosed");
        const SearchMatcher bad(c);
        QVERIFY(!bad.isValid());
        QVERIFY(!bad.errorString().isEmpty());
        QVERIFY(!bad.matches(file(QStringLiteral("unclosed")), QStringLiteral("unclosed")));
    }

    void attributes()
    {
        const QDateTime t = QDateTime(QDate(2026, 6, 1), QTime(12, 0), QTimeZone::UTC);
        SearchCriteria c;
        c.minSize = 100;
        c.maxSize = 200;
        const SearchMatcher size(c);
        QVERIFY(size.matches(file(QStringLiteral("a"), 100), QStringLiteral("a")));
        QVERIFY(size.matches(file(QStringLiteral("a"), 200), QStringLiteral("a")));
        QVERIFY(!size.matches(file(QStringLiteral("a"), 99), QStringLiteral("a")));
        QVERIFY(!size.matches(file(QStringLiteral("a"), 201), QStringLiteral("a")));
        QVERIFY(!size.matches(file(QStringLiteral("a"), -1), QStringLiteral("a"))); // unknown size
        // Folders have no attributes: excluded as soon as one is set.
        QVERIFY(!size.matches(dir(QStringLiteral("a")), QStringLiteral("a")));

        c = {};
        c.modifiedAfter = t;
        c.modifiedBefore = t.addDays(1);
        const SearchMatcher date(c);
        QVERIFY(date.matches(file(QStringLiteral("a"), 1, t), QStringLiteral("a")));
        QVERIFY(date.matches(file(QStringLiteral("a"), 1, t.addSecs(3600)), QStringLiteral("a")));
        QVERIFY(!date.matches(file(QStringLiteral("a"), 1, t.addSecs(-1)), QStringLiteral("a")));
        QVERIFY(!date.matches(file(QStringLiteral("a"), 1, t.addDays(2)), QStringLiteral("a")));
        QVERIFY(!date.matches(file(QStringLiteral("a"), 1), QStringLiteral("a"))); // unknown date

        c = {};
        c.storageClasses = {QStringLiteral("STANDARD"), QStringLiteral("GLACIER")};
        const SearchMatcher sc(c);
        QVERIFY(sc.matches(file(QStringLiteral("a"), 1, {}, QStringLiteral("GLACIER")), QStringLiteral("a")));
        QVERIFY(sc.matches(file(QStringLiteral("a"), 1, {}, QString()), QStringLiteral("a"))); // = STANDARD
        QVERIFY(!sc.matches(file(QStringLiteral("a"), 1, {}, QStringLiteral("STANDARD_IA")), QStringLiteral("a")));
    }

    void typesAndHidden()
    {
        SearchCriteria c;
        c.includeDirectories = false;
        QVERIFY(!SearchMatcher(c).matches(dir(QStringLiteral("d")), QStringLiteral("d")));
        QVERIFY(SearchMatcher(c).matches(file(QStringLiteral("f")), QStringLiteral("f")));
        c = {};
        c.includeFiles = false;
        QVERIFY(SearchMatcher(c).matches(dir(QStringLiteral("d")), QStringLiteral("d")));
        QVERIFY(!SearchMatcher(c).matches(file(QStringLiteral("f")), QStringLiteral("f")));
        c = {};
        Entry hidden = file(QStringLiteral(".h"));
        hidden.hidden = true;
        QVERIFY(!SearchMatcher(c).matches(hidden, QStringLiteral(".h")));
        c.includeHidden = true;
        QVERIFY(SearchMatcher(c).matches(hidden, QStringLiteral(".h")));
    }

    void parseSizes_data()
    {
        QTest::addColumn<QString>("text");
        QTest::addColumn<qint64>("bytes");
        QTest::newRow("plain") << QStringLiteral("1500") << qint64(1500);
        QTest::newRow("bytes") << QStringLiteral("12 B") << qint64(12);
        QTest::newRow("bytes word") << QStringLiteral("12 bytes") << qint64(12);
        QTest::newRow("K") << QStringLiteral("10K") << qint64(10240);
        QTest::newRow("KB") << QStringLiteral("10 KB") << qint64(10240);
        QTest::newRow("KiB") << QStringLiteral("10 KiB") << qint64(10240);
        QTest::newRow("fraction") << QStringLiteral("1.5 MB") << qint64(1572864);
        QTest::newRow("lower case") << QStringLiteral("2gb") << qint64(2) * 1024 * 1024 * 1024;
        QTest::newRow("TB") << QStringLiteral("1 TB") << (qint64(1) << 40);
        QTest::newRow("spaces") << QStringLiteral("  3 M  ") << qint64(3) * 1024 * 1024;
        QTest::newRow("empty") << QString() << qint64(-1);
        QTest::newRow("junk") << QStringLiteral("big") << qint64(-1);
        QTest::newRow("bad unit") << QStringLiteral("10 XB") << qint64(-1);
        QTest::newRow("negative") << QStringLiteral("-5") << qint64(-1);
    }

    void parseSizes()
    {
        QFETCH(QString, text);
        QFETCH(qint64, bytes);
        const auto parsed = parseSize(text);
        QCOMPARE(parsed.value_or(-1), bytes);
    }

    void summary()
    {
        SearchCriteria c;
        QCOMPARE(c.summary(), QStringLiteral("*"));
        c.pattern = QStringLiteral("*.log");
        c.storageClasses = {QStringLiteral("GLACIER")};
        QVERIFY(c.summary().startsWith(QStringLiteral("*.log")));
        QVERIFY(c.summary().contains(QStringLiteral("GLACIER")));
    }

    void localTree()
    {
        QTemporaryDir tmp;
        const QString root = tmp.path();
        touch(root + QStringLiteral("/a.log"));
        touch(root + QStringLiteral("/b.txt"));
        touch(root + QStringLiteral("/logs/2024-01/x.log"), QByteArray(2000, 'x'));
        touch(root + QStringLiteral("/logs/2024-02/y.log"));
        touch(root + QStringLiteral("/logs/2023/z.log"));
        touch(root + QStringLiteral("/.hidden/secret.log"));
        touch(root + QStringLiteral("/.dot.log"));
        QVERIFY(QFile::link(root + QStringLiteral("/logs"), root + QStringLiteral("/link-to-logs")));

        LocalProvider provider;
        const Location at = Location::local(root);
        SearchCriteria c;
        c.pattern = QStringLiteral("*.log");
        // Hidden entries are neither matched nor entered; symlinked folders are not followed.
        QCOMPARE(search(provider, at, c),
                 QStringList({QStringLiteral("a.log"), QStringLiteral("logs/2023/z.log"),
                              QStringLiteral("logs/2024-01/x.log"), QStringLiteral("logs/2024-02/y.log")}));
        c.includeHidden = true;
        QCOMPARE(search(provider, at, c).size(), 6);
        c.includeHidden = false;

        // Folders match by name.
        c.pattern = QStringLiteral("2024*");
        QCOMPARE(search(provider, at, c),
                 QStringList({QStringLiteral("logs/2024-01"), QStringLiteral("logs/2024-02")}));

        // Path prefix: only below logs/2024-*.
        c.pattern = QStringLiteral("*.log");
        c.pathPrefix = QStringLiteral("logs/2024-");
        QCOMPARE(search(provider, at, c),
                 QStringList({QStringLiteral("logs/2024-01/x.log"), QStringLiteral("logs/2024-02/y.log")}));
        c.pathPrefix = QStringLiteral("logs/");
        QCOMPARE(search(provider, at, c).size(), 3);
        c.pathPrefix = QStringLiteral("missing/dir/");
        SearchStats stats;
        QCOMPARE(search(provider, at, c, &stats), QStringList());
        QCOMPARE(stats.found, 0);

        // Attributes.
        c.pathPrefix.clear();
        c.minSize = 1000;
        QCOMPARE(search(provider, at, c), QStringList({QStringLiteral("logs/2024-01/x.log")}));
    }

    void limitAndCancel()
    {
        MemoryProvider provider(QStringLiteral("m"));
        provider.pageSize = 7;
        provider.addBucket(QStringLiteral("b"));
        for (int i = 0; i < 50; ++i)
            provider.put(QStringLiteral("b"), QStringLiteral("d%1/f%2.txt").arg(i % 5).arg(i), "x");
        const Location root = provider.loc(QStringLiteral("b"));

        SearchCriteria c;
        c.pattern = QStringLiteral("*.txt");
        c.maxResults = 12;
        SearchStats stats;
        QCOMPARE(search(provider, root, c, &stats).size(), 12);
        QVERIFY(stats.limitReached);
        QCOMPARE(stats.found, 12);

        c.maxResults = 0;
        QCOMPARE(search(provider, root, c, &stats).size(), 50);
        QVERIFY(!stats.limitReached);
        QCOMPARE(stats.scanned, 55); // 5 folders + 50 files

        OperationContext ctx;
        int seen = 0;
        auto r = runSearch(
            provider, root, c,
            [&](const Entry&) {
                if (++seen == 3)
                    ctx.cancel();
            },
            ctx);
        QVERIFY(!r);
        QVERIFY(r.error().isCancelled());
        QCOMPARE(seen, 3);

        c.pattern = QStringLiteral("(");
        c.syntax = SearchCriteria::Syntax::RegularExpression;
        OperationContext ctx2;
        auto invalid = runSearch(provider, root, c, [](const Entry&) {}, ctx2);
        QVERIFY(!invalid);
        QCOMPARE(invalid.error().code, ErrorCode::InvalidArgument);
    }

    // S3-like providers go through walkPrefix() (here: Provider's default implementation).
    void flatPrefix()
    {
        FlatMemoryProvider provider(QStringLiteral("m"));
        provider.addBucket(QStringLiteral("b"));
        for (const char* key : {"top.png", "nubook/0105/a_p001.png", "nubook/0105/a_p001_10pc.png",
                                "nubook/0105/a.pdf", "nubook/0106/b_p001.png", "nubook/0199/c.png", "other/x.png"})
            provider.put(QStringLiteral("b"), QLatin1String(key), "data");
        const Location root = provider.loc(QStringLiteral("b"));

        SearchCriteria c;
        c.pattern = QStringLiteral("*.png");
        c.pathPrefix = QStringLiteral("nubook/010");
        QCOMPARE(search(provider, root, c),
                 QStringList({QStringLiteral("nubook/0105/a_p001.png"), QStringLiteral("nubook/0105/a_p001_10pc.png"),
                              QStringLiteral("nubook/0106/b_p001.png")}));

        // Folders above the prefix are not results; folders at or below it are.
        c.pattern.clear();
        c.includeFiles = false;
        QCOMPARE(search(provider, root, c),
                 QStringList({QStringLiteral("nubook/0105"), QStringLiteral("nubook/0106")}));

        // Searching inside a folder: paths are relative to it.
        c = {};
        c.syntax = SearchCriteria::Syntax::RegularExpression;
        c.pattern = QStringLiteral(R"(_p\d+\.png$)");
        QCOMPARE(search(provider, provider.loc(QStringLiteral("b"), QStringLiteral("nubook/")), c),
                 QStringList({QStringLiteral("0105/a_p001.png"), QStringLiteral("0106/b_p001.png")}));
    }
};

QTEST_GUILESS_MAIN(TestSearch)
#include "tst_search.moc"
