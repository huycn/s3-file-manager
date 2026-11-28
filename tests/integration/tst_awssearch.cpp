// Recursive search (task 10.1) against a real Amazon S3 bucket, read-only: signed requests
// through a named AWS profile (SSO works), server-side prefixes, pagination, and a
// connection region that differs from the bucket's.
//
// Opt-in; nothing is written. Set:
//   S3FM_TEST_AWS_PROFILE        profile in ~/.aws/config (run `aws sso login` first for SSO)
//   S3FM_TEST_AWS_BUCKET         bucket to search
//   S3FM_TEST_AWS_SEARCH_PREFIX  key prefix to search below, ideally a few hundred keys,
//                                e.g. "photos/2024" (searching a whole large bucket is slow)

#include "core/OperationContext.h"
#include "core/Search.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QTest>

#include <algorithm>
#include <memory>

using namespace s3fm;

namespace {

const QString kConnection = QStringLiteral("aws");

struct Found
{
    QStringList keys; // sorted
    SearchStats stats;
    QList<Entry> entries;
};

} // namespace

class TestAwsSearch : public QObject
{
    Q_OBJECT

    std::unique_ptr<AwsSdkGuard> m_sdk;
    QString m_profile = qEnvironmentVariable("S3FM_TEST_AWS_PROFILE");
    QString m_bucket = qEnvironmentVariable("S3FM_TEST_AWS_BUCKET");
    QString m_prefix = qEnvironmentVariable("S3FM_TEST_AWS_SEARCH_PREFIX");

    std::shared_ptr<S3Provider> provider(const QString& region = {}) const
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        p.id = kConnection;
        p.credentialSource = ConnectionProfile::CredentialSource::AwsProfile;
        p.awsProfile = m_profile;
        if (!region.isEmpty())
            p.region = region;
        p.connectTimeoutMs = 5000;
        p.requestTimeoutMs = 30000;
        auto s3 = std::make_shared<S3Provider>(std::make_shared<S3Session>(p, nullptr));
        s3->setCacheTtlMs(0);
        return s3;
    }

    Location root() const { return Location::s3(kConnection, m_bucket); }

    static Found search(S3Provider& s3, const Location& root, const SearchCriteria& c)
    {
        Found f;
        OperationContext ctx;
        auto r = runSearch(
            s3, root, c,
            [&](const Entry& e) {
                f.keys.push_back(e.location.key());
                f.entries.push_back(e);
            },
            ctx);
        if (!r) {
            qWarning() << r.error().toString();
            f.keys = {QStringLiteral("<error>")};
            return f;
        }
        f.stats = r.value();
        f.keys.sort();
        return f;
    }

    SearchCriteria underPrefix() const
    {
        SearchCriteria c;
        c.pathPrefix = m_prefix;
        c.maxResults = 0;
        return c;
    }

private slots:
    void initTestCase()
    {
        if (m_profile.isEmpty() || m_bucket.isEmpty() || m_prefix.isEmpty())
            QSKIP("Set S3FM_TEST_AWS_PROFILE, S3FM_TEST_AWS_BUCKET and S3FM_TEST_AWS_SEARCH_PREFIX");
        m_sdk = std::make_unique<AwsSdkGuard>();
    }

    void cleanupTestCase() { m_sdk.reset(); }

    // Everything below the prefix: the same with 1 page or many, and nothing outside it is
    // even listed (scanned == found when every entry matches).
    void prefixAndPagination()
    {
        auto s3 = provider();
        const Found all = search(*s3, root(), underPrefix());
        QVERIFY(!all.keys.contains(QStringLiteral("<error>")));
        QVERIFY2(!all.keys.isEmpty(), "the prefix has no keys");
        QCOMPARE(all.stats.scanned, all.stats.found);
        for (const QString& key : all.keys)
            QVERIFY2(key.startsWith(m_prefix), qPrintable(key));

        s3->setListPageSize(37);
        const Found paged = search(*s3, root(), underPrefix());
        QCOMPARE(paged.keys, all.keys);

        const auto files = std::count_if(all.entries.cbegin(), all.entries.cend(),
                                         [](const Entry& e) { return !e.isDirectory(); });
        qInfo("%lld entries below %s (%lld objects, %lld folders)", qlonglong(all.keys.size()),
              qPrintable(m_prefix), qlonglong(files), qlonglong(all.keys.size() - files));
    }

    void patterns()
    {
        auto s3 = provider();
        const Found all = search(*s3, root(), underPrefix());
        QStringList pngs;
        for (const Entry& e : all.entries) {
            if (!e.isDirectory() && e.name.endsWith(QStringLiteral(".png"), Qt::CaseInsensitive))
                pngs.push_back(e.location.key());
        }
        pngs.sort();

        SearchCriteria c = underPrefix();
        c.pattern = QStringLiteral("*.png");
        QCOMPARE(search(*s3, root(), c).keys, pngs);

        c.syntax = SearchCriteria::Syntax::RegularExpression;
        c.pattern = QStringLiteral(R"(\.png$)");
        QCOMPARE(search(*s3, root(), c).keys, pngs);
        qInfo("%lld .png objects", qlonglong(pngs.size()));

        // Searching from a folder inside the bucket gives the same objects.
        const qsizetype slash = m_prefix.lastIndexOf(u'/');
        if (slash > 0) {
            SearchCriteria inner = c;
            inner.pathPrefix = m_prefix.mid(slash + 1);
            const Location folder = Location::s3(kConnection, m_bucket, m_prefix.left(slash + 1));
            QCOMPARE(search(*s3, folder, inner).keys, pngs);
        }
    }

    void attributesAndLimit()
    {
        auto s3 = provider();
        const Found all = search(*s3, root(), underPrefix());
        QList<qint64> sizes;
        for (const Entry& e : all.entries) {
            if (!e.isDirectory())
                sizes.push_back(e.size);
        }
        QVERIFY(!sizes.isEmpty());
        std::sort(sizes.begin(), sizes.end());
        const qint64 median = sizes.at(sizes.size() / 2);

        SearchCriteria c = underPrefix();
        c.minSize = median;
        const Found big = search(*s3, root(), c);
        QCOMPARE(big.keys.size(), qsizetype(std::count_if(sizes.cbegin(), sizes.cend(),
                                                          [median](qint64 s) { return s >= median; })));
        for (const Entry& e : big.entries)
            QVERIFY(e.size >= median);

        // Every listed object has a storage class (or none: STANDARD).
        QStringList classes;
        for (const Entry& e : all.entries) {
            if (!e.isDirectory() && !classes.contains(e.storageClass))
                classes.push_back(e.storageClass);
        }
        qInfo() << "storage classes:" << classes;
        c = underPrefix();
        c.storageClasses = {QStringLiteral("STANDARD")};
        const Found standard = search(*s3, root(), c);
        QCOMPARE(standard.keys.size(),
                 qsizetype(std::count_if(all.entries.cbegin(), all.entries.cend(), [](const Entry& e) {
                     return !e.isDirectory() && (e.storageClass.isEmpty() || e.storageClass == u"STANDARD");
                 })));

        c = underPrefix();
        c.maxResults = 5;
        const Found limited = search(*s3, root(), c);
        if (all.keys.size() > 5) {
            QCOMPARE(limited.keys.size(), 5);
            QVERIFY(limited.stats.limitReached);
        }
    }

    // A connection configured for another region: the signed request is redirected (or
    // refused with AuthorizationHeaderMalformed) and retried in the bucket's region.
    void otherConnectionRegion()
    {
        const Found expected = search(*provider(), root(), underPrefix());
        for (const QString& region : {QStringLiteral("eu-west-1"), QStringLiteral("ap-southeast-2")}) {
            auto s3 = provider(region);
            QCOMPARE(search(*s3, root(), underPrefix()).keys, expected.keys);
        }
    }
};

QTEST_GUILESS_MAIN(TestAwsSearch)
#include "tst_awssearch.moc"
