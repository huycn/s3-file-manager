#include "core/Location.h"

#include <QDir>
#include <QTest>

using s3fm::Location;

class TestLocation : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void parseS3_data()
    {
        QTest::addColumn<QString>("text");
        QTest::addColumn<QString>("conn");
        QTest::addColumn<QString>("bucket");
        QTest::addColumn<QString>("key");
        QTest::addColumn<QString>("canonical");

        QTest::newRow("root") << "s3://" << "" << "" << "" << "s3://";
        QTest::newRow("conn") << "s3://minio" << "minio" << "" << "" << "s3://minio/";
        QTest::newRow("conn-slash") << "s3://minio/" << "minio" << "" << "" << "s3://minio/";
        QTest::newRow("bucket") << "s3://minio/b" << "minio" << "b" << "" << "s3://minio/b/";
        QTest::newRow("bucket-slash") << "s3://minio/b/" << "minio" << "b" << "" << "s3://minio/b/";
        QTest::newRow("object") << "s3://minio/b/a/c.txt" << "minio" << "b" << "a/c.txt"
                                << "s3://minio/b/a/c.txt";
        QTest::newRow("prefix") << "s3://minio/b/a/" << "minio" << "b" << "a/" << "s3://minio/b/a/";
        QTest::newRow("spaces") << "s3://m/b/my dir/my file.txt" << "m" << "b" << "my dir/my file.txt"
                                << "s3://m/b/my dir/my file.txt";
        QTest::newRow("specials") << "s3://m/b/100%/a#b?c" << "m" << "b" << "100%/a#b?c"
                                  << "s3://m/b/100%/a#b?c";
        QTest::newRow("unicode") << "s3://m/b/héllo ✓" << "m" << "b" << "héllo ✓" << "s3://m/b/héllo ✓";
        QTest::newRow("double-slash") << "s3://m/b/a//c" << "m" << "b" << "a//c" << "s3://m/b/a//c";
        QTest::newRow("leading-slash-key") << "s3://m/b//x" << "m" << "b" << "/x" << "s3://m/b//x";
        QTest::newRow("uppercase-scheme") << "S3://m/b/k" << "m" << "b" << "k" << "s3://m/b/k";
        QTest::newRow("whitespace") << "  s3://m/b/k \n" << "m" << "b" << "k" << "s3://m/b/k";
    }

    void parseS3()
    {
        QFETCH(QString, text);
        QFETCH(QString, conn);
        QFETCH(QString, bucket);
        QFETCH(QString, key);
        QFETCH(QString, canonical);
        const Location l = Location::fromString(text);
        QVERIFY(l.isS3());
        QCOMPARE(l.connectionId(), conn);
        QCOMPARE(l.bucket(), bucket);
        QCOMPARE(l.key(), key);
        QCOMPARE(l.toString(), canonical);
        QCOMPARE(Location::fromString(l.toString()), l); // round trip
    }

    void s3Parents()
    {
        Location l = Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("a/b/c.txt"));
        QCOMPARE(l.name(), QStringLiteral("c.txt"));
        QVERIFY(!l.isDirectoryLike());
        l = l.parent();
        QCOMPARE(l.key(), QStringLiteral("a/b/"));
        QCOMPARE(l.name(), QStringLiteral("b"));
        QVERIFY(l.isDirectoryLike());
        l = l.parent();
        QCOMPARE(l.key(), QStringLiteral("a/"));
        l = l.parent();
        QVERIFY(l.isS3Bucket());
        QCOMPARE(l.name(), QStringLiteral("b"));
        l = l.parent();
        QVERIFY(l.isS3Connection());
        QCOMPARE(l.name(), QStringLiteral("c"));
        l = l.parent();
        QVERIFY(l.isS3Root());
        QVERIFY(l.isRoot());
        QVERIFY(!l.parent().isValid());
    }

    void s3EmptySegments()
    {
        const Location l = Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("a//"));
        QCOMPARE(l.name(), QString());
        QCOMPARE(l.parent().key(), QStringLiteral("a/"));
        QCOMPARE(l.child(QStringLiteral("x")).key(), QStringLiteral("a//x"));
    }

    void s3Children()
    {
        const Location root = Location::s3Root();
        const Location conn = root.child(QStringLiteral("c"));
        QVERIFY(conn.isS3Connection());
        const Location bucket = conn.child(QStringLiteral("b"));
        QVERIFY(bucket.isS3Bucket());
        const Location dir = bucket.child(QStringLiteral("docs"), true);
        QCOMPARE(dir.key(), QStringLiteral("docs/"));
        const Location file = dir.child(QStringLiteral("x.txt"));
        QCOMPARE(file.key(), QStringLiteral("docs/x.txt"));
        // child of an object location treats it as a directory
        QCOMPARE(file.child(QStringLiteral("y")).key(), QStringLiteral("docs/x.txt/y"));
        QCOMPARE(file.asDirectory().key(), QStringLiteral("docs/x.txt/"));
    }

    void ancestry()
    {
        const Location dir = Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("a/"));
        const Location deep =
            Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("a/x/y.txt"));
        const Location sibling =
            Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("ab/y"));
        QVERIFY(dir.isAncestorOf(deep));
        QVERIFY(!dir.isAncestorOf(dir));
        QVERIFY(!dir.isAncestorOf(sibling));
        QVERIFY(!deep.isAncestorOf(dir));
        QCOMPARE(dir.relativePathTo(deep), QStringLiteral("x/y.txt"));
        QCOMPARE(dir.relativePathTo(deep.parent()), QStringLiteral("x"));
        const Location bucket = dir.parent();
        QCOMPARE(bucket.relativePathTo(deep), QStringLiteral("a/x/y.txt"));
        QVERIFY(Location::s3Root().isAncestorOf(deep));
        QVERIFY(!Location::s3(QStringLiteral("other"), QStringLiteral("b"), QStringLiteral("a/"))
                     .isAncestorOf(deep));

        const Location lroot = Location::local(QStringLiteral("/tmp"));
        const Location lchild = Location::local(QStringLiteral("/tmp/a/b"));
        QVERIFY(lroot.isAncestorOf(lchild));
        QVERIFY(!Location::local(QStringLiteral("/tm")).isAncestorOf(lchild));
        QCOMPARE(lroot.relativePathTo(lchild), QStringLiteral("a/b"));
        QVERIFY(!lroot.isAncestorOf(Location::s3Root()));
    }

#ifndef Q_OS_WIN
    void localUnix()
    {
        const Location l = Location::local(QStringLiteral("/home/user//docs/./x/../file.txt"));
        QVERIFY(l.isLocal());
        QCOMPARE(l.localPath(), QStringLiteral("/home/user/docs/file.txt"));
        QCOMPARE(l.name(), QStringLiteral("file.txt"));
        QCOMPARE(l.parent().localPath(), QStringLiteral("/home/user/docs"));
        QCOMPARE(Location::local(QStringLiteral("/home")).parent().localPath(), QStringLiteral("/"));
        QVERIFY(Location::local(QStringLiteral("/")).isRoot());
        QVERIFY(!Location::local(QStringLiteral("/")).parent().isValid());
        QCOMPARE(Location::local(QStringLiteral("/")).child(QStringLiteral("etc")).localPath(),
                 QStringLiteral("/etc"));
        QCOMPARE(Location::localRoot().localPath(), QStringLiteral("/"));
        QVERIFY(!Location::local(QStringLiteral("relative/path")).isValid());
    }

    void localStrings()
    {
        const Location l = Location::local(QStringLiteral("/tmp/a b/100%#?.txt"));
        QCOMPARE(l.toString(), QStringLiteral("file:///tmp/a%20b/100%25%23%3F.txt"));
        QCOMPARE(Location::fromString(l.toString()), l);
        QCOMPARE(Location::fromString(QStringLiteral("/tmp/a b/100%#?.txt")), l);
        QCOMPARE(l.displayString(), QStringLiteral("/tmp/a b/100%#?.txt"));
        QCOMPARE(Location::fromString(QStringLiteral("~")).localPath(), QDir::homePath());
        QCOMPARE(Location::fromString(QStringLiteral("~/x")).localPath(),
                 QDir::homePath() + QStringLiteral("/x"));
        QCOMPARE(Location::fromString(QStringLiteral("file://")), Location::localRoot());
    }
#else
    void localWindows()
    {
        const Location l = Location::local(QStringLiteral("C:\\Users\\me\\file.txt"));
        QCOMPARE(l.localPath(), QStringLiteral("C:/Users/me/file.txt"));
        QCOMPARE(l.nativePath(), QStringLiteral("C:\\Users\\me\\file.txt"));
        const Location drive = Location::local(QStringLiteral("C:\\"));
        QCOMPARE(drive.localPath(), QStringLiteral("C:/"));
        QCOMPARE(Location::local(QStringLiteral("C:")).localPath(), QStringLiteral("C:/"));
        QCOMPARE(drive.name(), QStringLiteral("C:"));
        QCOMPARE(Location::local(QStringLiteral("C:/Users")).parent(), drive);
        QVERIFY(drive.parent().isRoot());
        QCOMPARE(drive.parent(), Location::localRoot());
        QCOMPARE(Location::localRoot().child(QStringLiteral("D:")).localPath(), QStringLiteral("D:/"));
        QCOMPARE(Location::fromString(l.toString()), l);
    }
#endif

    void invalidInputs()
    {
        QVERIFY(!Location::fromString(QString()).isValid());
        QVERIFY(!Location::fromString(QStringLiteral("   ")).isValid());
        QVERIFY(!Location::fromString(QStringLiteral("http://example.com")).isValid());
        QVERIFY(!Location().parent().isValid());
        QVERIFY(!Location().child(QStringLiteral("x")).isValid());
        QCOMPARE(Location().toString(), QString());
    }

    void hashing()
    {
        QSet<Location> set;
        set.insert(Location::fromString(QStringLiteral("s3://c/b/k")));
        set.insert(Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("k")));
        set.insert(Location::s3(QStringLiteral("c"), QStringLiteral("b"), QStringLiteral("k/")));
        QCOMPARE(set.size(), 2);
    }
};

QTEST_GUILESS_MAIN(TestLocation)
#include "tst_location.moc"
