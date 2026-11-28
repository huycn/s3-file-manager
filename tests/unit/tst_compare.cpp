// Panel comparison (task 10.2): pairing, size/time/content rules, summaries, and the
// local content check.

#include "core/Compare.h"
#include "core/OperationContext.h"
#include "providers/ContentCompare.h"

#include <QDir>
#include <QFile>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

namespace {

const QDateTime kT0 = QDateTime(QDate(2026, 1, 1), QTime(12, 0), QTimeZone::UTC);

CompareItem file(const QString& name, qint64 size, int secs = 0, const QString& etag = {})
{
    Entry e;
    e.name = name;
    e.location = Location::s3(QStringLiteral("c"), QStringLiteral("b"), name);
    e.size = size;
    e.modified = kT0.addSecs(secs);
    e.etag = etag;
    return CompareItem{name, e};
}

CompareItem dir(const QString& name)
{
    Entry e;
    e.name = name;
    e.type = Entry::Type::Directory;
    e.location = Location::s3(QStringLiteral("c"), QStringLiteral("b"), name + u'/');
    return CompareItem{name, e};
}

// Content "check" that compares ETags, Unknown when either is empty.
Result<ContentCheck> byEtag(const Entry& a, const Entry& b, OperationContext&)
{
    if (a.etag.isEmpty() || b.etag.isEmpty())
        return ContentCheck{ContentVerdict::Unknown, QStringLiteral("no etag")};
    return ContentCheck{a.etag == b.etag ? ContentVerdict::Same : ContentVerdict::Different, {}};
}

CompareResult run(const CompareItems& l, const CompareItems& r, const CompareOptions& o = {},
                  const ContentComparer& c = byEtag)
{
    OperationContext ctx;
    auto result = compareListings(l, r, o, c, ctx);
    if (!result)
        qFatal("compare failed");
    return result.value();
}

void writeFile(const QString& path, const QByteArray& data)
{
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

} // namespace

class TestCompare : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void uniqueAndDirectories()
    {
        const CompareResult r = run({file("a", 1), dir("onlyLeft"), dir("both")},
                                    {file("b", 1), dir("onlyRight"), dir("both")});
        QCOMPARE(r.left.value("a").state, CompareState::Unique);
        QCOMPARE(r.left.value("onlyLeft").state, CompareState::Unique);
        QCOMPARE(r.right.value("b").state, CompareState::Unique);
        QCOMPARE(r.right.value("onlyRight").state, CompareState::Unique);
        QVERIFY(!r.left.contains("both")); // folders on both sides are not compared
        QVERIFY(!r.right.contains("both"));
        QCOMPARE(r.leftSummary.unique, 2);
        QCOMPARE(r.rightSummary.unique, 2);

        CompareOptions noDirs;
        noDirs.includeDirectories = false;
        const CompareResult r2 = run({file("a", 1), dir("onlyLeft")}, {dir("onlyRight")}, noDirs);
        QVERIFY(r2.left.contains("a"));
        QVERIFY(!r2.left.contains("onlyLeft"));
        QVERIFY(r2.right.isEmpty());
    }

    void sizeAndTime()
    {
        // Different size: the newer side by time.
        CompareResult r = run({file("f", 10, 100)}, {file("f", 20, 0)});
        QCOMPARE(r.left.value("f").state, CompareState::Newer);
        QCOMPARE(r.right.value("f").state, CompareState::Older);
        QCOMPARE(r.left.value("f").content, ContentVerdict::NotChecked);
        QVERIFY(r.left.value("f").isSelectable());
        QVERIFY(!r.right.value("f").isSelectable());

        // Different size, times within the tolerance: just different (both selected).
        r = run({file("f", 10, 1)}, {file("f", 20, 0)});
        QCOMPARE(r.left.value("f").state, CompareState::Different);
        QCOMPARE(r.right.value("f").state, CompareState::Different);
        QVERIFY(r.right.value("f").isSelectable());

        // Without time comparison.
        CompareOptions noTime;
        noTime.compareTime = false;
        r = run({file("f", 10, 100)}, {file("f", 20, 0)}, noTime);
        QCOMPARE(r.left.value("f").state, CompareState::Different);

        // Same size, no content check: time decides.
        CompareOptions noContent;
        noContent.compareContent = false;
        r = run({file("f", 10, 0)}, {file("f", 10, 2)}, noContent);
        QCOMPARE(r.left.value("f").state, CompareState::Same);
        QCOMPARE(r.left.value("f").label(), QStringLiteral("same size and time"));
        r = run({file("f", 10, 0)}, {file("f", 10, 3)}, noContent);
        QCOMPARE(r.left.value("f").state, CompareState::Older);
        QCOMPARE(r.right.value("f").state, CompareState::Newer);
        noContent.timeToleranceSecs = 5;
        r = run({file("f", 10, 0)}, {file("f", 10, 3)}, noContent);
        QCOMPARE(r.left.value("f").state, CompareState::Same);
    }

    void content()
    {
        // Same content wins over different times.
        CompareResult r = run({file("f", 10, 0, "x")}, {file("f", 10, 1000, "x")});
        QCOMPARE(r.left.value("f").state, CompareState::Same);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Same);
        QCOMPARE(r.left.value("f").label(), QStringLiteral("identical"));

        // Different content: newer by time, or just different.
        r = run({file("f", 10, 1000, "x")}, {file("f", 10, 0, "y")});
        QCOMPARE(r.left.value("f").state, CompareState::Newer);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Different);
        r = run({file("f", 10, 0, "x")}, {file("f", 10, 0, "y")});
        QCOMPARE(r.left.value("f").state, CompareState::Different);
        QVERIFY(r.left.value("f").description().contains(QStringLiteral("content differs")));

        // Unknown content: size and time decide, counted as not verified.
        r = run({file("f", 10, 0)}, {file("f", 10, 0)});
        QCOMPARE(r.left.value("f").state, CompareState::Same);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Unknown);
        QCOMPARE(r.left.value("f").note, QStringLiteral("no etag"));
        QCOMPARE(r.leftSummary.unverified, 1);
        QCOMPARE(r.rightSummary.unverified, 1);
        r = run({file("f", 10, 0)}, {file("f", 10, 100)});
        QCOMPARE(r.right.value("f").state, CompareState::Newer);

        // Sizes differ: no content check needed.
        int calls = 0;
        auto counting = [&calls](const Entry& a, const Entry& b, OperationContext& ctx) {
            ++calls;
            return byEtag(a, b, ctx);
        };
        run({file("f", 10, 0, "x"), file("g", 5, 0, "x")}, {file("f", 11, 0, "x"), file("g", 5, 0, "x")}, {},
            counting);
        QCOMPARE(calls, 1);

        // Errors count, the comparison goes on.
        auto failing = [](const Entry&, const Entry&, OperationContext&) -> Result<ContentCheck> {
            return Error::make(ErrorCode::Io, QStringLiteral("boom"));
        };
        r = run({file("f", 10, 0), file("g", 1)}, {file("f", 10, 0)}, {}, failing);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Unknown);
        QCOMPARE(r.left.value("f").note, QStringLiteral("boom"));
        QCOMPARE(r.leftSummary.errors, 1);
        QCOMPARE(r.left.value("g").state, CompareState::Unique);

        // No comparer: Unknown.
        r = run({file("f", 10, 0, "x")}, {file("f", 10, 0, "x")}, {}, nullptr);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Unknown);
    }

    void conflictAndCase()
    {
        CompareResult r = run({file("x", 1)}, {dir("x")});
        QCOMPARE(r.left.value("x").state, CompareState::Conflict);
        QCOMPARE(r.right.value("x").state, CompareState::Conflict);
        QVERIFY(!r.left.value("x").isSelectable());

        r = run({file("Readme", 1)}, {file("README", 1)});
        QCOMPARE(r.left.value("Readme").state, CompareState::Unique);
        CompareOptions ci;
        ci.caseSensitivity = Qt::CaseInsensitive;
        r = run({file("Readme", 1, 0, "e")}, {file("README", 1, 0, "e")}, ci);
        QCOMPARE(r.left.value("Readme").state, CompareState::Same);
        QCOMPARE(r.right.value("README").state, CompareState::Same);
    }

    void summaryText()
    {
        const CompareResult r = run({file("a", 1), file("n", 2, 100), file("s", 1, 0, "e"), dir("d")},
                                    {file("n", 3, 0), file("s", 1, 0, "e")});
        QCOMPARE(r.leftSummary.unique, 2);
        QCOMPARE(r.leftSummary.newer, 1);
        QCOMPARE(r.leftSummary.same, 1);
        QCOMPARE(r.leftSummary.toString(), QStringLiteral("2 only here, 1 newer, 1 identical"));
        QCOMPARE(r.rightSummary.toString(), QStringLiteral("1 older, 1 identical"));
        QCOMPARE(CompareSummary{}.toString(), QStringLiteral("nothing to compare"));
    }

    void progressAndCancel()
    {
        CompareItems l;
        CompareItems r;
        for (int i = 0; i < 5; ++i) {
            l.push_back(file(QString::number(i), 1, 0, "e"));
            r.push_back(file(QString::number(i), 1, 0, "e"));
        }
        QList<QPair<qint64, qint64>> reports;
        OperationContext ctx([&reports](qint64 done, qint64 total) { reports.push_back({done, total}); });
        QVERIFY(compareListings(l, r, {}, byEtag, ctx).ok());
        QCOMPARE(reports.first(), (QPair<qint64, qint64>(0, 5)));
        QCOMPARE(reports.last(), (QPair<qint64, qint64>(5, 5)));

        OperationContext cancelling;
        int calls = 0;
        auto cancel = [&](const Entry& a, const Entry& b, OperationContext& c) {
            if (++calls == 2)
                c.cancel();
            return byEtag(a, b, c);
        };
        auto result = compareListings(l, r, {}, cancel, cancelling);
        QVERIFY(!result);
        QVERIFY(result.error().isCancelled());
        QCOMPARE(calls, 2);
    }

    void localFiles()
    {
        QTemporaryDir tmp;
        const QString a = tmp.filePath("a");
        const QString b = tmp.filePath("b");
        const QString c = tmp.filePath("c");
        QByteArray big(3 * 1024 * 1024 + 17, 'x');
        writeFile(a, big);
        writeFile(b, big);
        big[big.size() - 1] = 'y';
        writeFile(c, big);
        OperationContext ctx;
        QCOMPARE(compareLocalFiles(a, b, ctx).value().verdict, ContentVerdict::Same);
        QCOMPARE(compareLocalFiles(a, c, ctx).value().verdict, ContentVerdict::Different);
        QVERIFY(!compareLocalFiles(a, tmp.filePath("missing"), ctx));

        // Through the comparer, for two local listings.
        auto local = [](const QString& path, int secs) {
            Entry e;
            e.name = QFileInfo(path).fileName();
            e.location = Location::local(path);
            e.size = QFileInfo(path).size();
            e.modified = kT0.addSecs(secs);
            return CompareItem{QStringLiteral("f"), e};
        };
        const ContentComparer comparer = makeContentComparer(nullptr);
        CompareResult r = run({local(a, 0)}, {local(b, 500)}, {}, comparer);
        QCOMPARE(r.left.value("f").state, CompareState::Same);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Same);
        r = run({local(a, 500)}, {local(c, 0)}, {}, comparer);
        QCOMPARE(r.left.value("f").state, CompareState::Newer);
        QCOMPARE(r.left.value("f").content, ContentVerdict::Different);

        // S3 without a registry: Unknown, not a failure.
        r = run({local(a, 0)}, {file("f", big.size(), 0, "0123456789abcdef0123456789abcdef")}, {}, comparer);
        // The MD5 differs, but only a HEAD request tells whether the ETag is an MD5 sum.
        QCOMPARE(r.left.value("f").content, ContentVerdict::Unknown);
    }
};

QTEST_GUILESS_MAIN(TestCompare)
#include "tst_compare.moc"
