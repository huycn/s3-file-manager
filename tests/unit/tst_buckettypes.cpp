// Offline checks of bucket settings: name rules, lifecycle/CORS/policy validation,
// the AWS CLI JSON formats, SDK conversions (what would be sent to AWS), website
// endpoints and statistics.

#include "providers/s3/AwsConvert.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3BucketConvert.h"
#include "providers/s3/S3BucketTypes.h"

#include <QJsonDocument>
#include <QTest>

#include <aws/core/utils/xml/XmlSerializer.h>
#include <aws/s3/model/LifecycleRuleAndOperator.h>
#include <aws/s3/model/LifecycleRuleFilter.h>

using namespace s3fm;

namespace {

LifecycleRule sampleRule()
{
    LifecycleRule r;
    r.id = QStringLiteral("archive-logs");
    r.prefix = QStringLiteral("logs/");
    r.tags.insert(QStringLiteral("class"), QStringLiteral("log"));
    r.sizeGreaterThan = 1024;
    r.transitions = {{30, {}, QStringLiteral("STANDARD_IA")}, {90, {}, QStringLiteral("GLACIER")}};
    r.expirationDays = 365;
    r.noncurrentTransitions = {{30, QStringLiteral("GLACIER"), 2}};
    r.noncurrentExpirationDays = 180;
    r.newerNoncurrentVersions = 3;
    return r;
}

} // namespace

class TestBucketTypes : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void initTestCase() { m_sdk = std::make_unique<AwsSdkGuard>(); }
    void cleanupTestCase() { m_sdk.reset(); }

    void bucketNames_data()
    {
        QTest::addColumn<QString>("name");
        QTest::addColumn<bool>("aws");
        QTest::addColumn<bool>("valid");
        QTest::addColumn<bool>("warns");
        QTest::newRow("simple") << "my-bucket-1" << true << true << false;
        QTest::newRow("dots") << "my.bucket" << true << true << true;
        QTest::newRow("too short") << "ab" << true << false << false;
        QTest::newRow("too long") << QString(64, u'a') << true << false << false;
        QTest::newRow("upper") << "MyBucket" << true << false << false;
        QTest::newRow("underscore") << "my_bucket" << true << false << false;
        QTest::newRow("leading hyphen") << "-bucket" << true << false << false;
        QTest::newRow("trailing dot") << "bucket." << true << false << false;
        QTest::newRow("double dot") << "my..bucket" << true << false << false;
        QTest::newRow("ip") << "192.168.1.1" << true << false << false;
        QTest::newRow("xn-- aws") << "xn--bucket" << true << false << false;
        QTest::newRow("xn-- minio") << "xn--bucket" << false << true << false;
        QTest::newRow("s3alias") << "bucket-s3alias" << true << false << false;
        QTest::newRow("ol-s3") << "bucket--ol-s3" << true << false << false;
    }
    void bucketNames()
    {
        QFETCH(QString, name);
        QFETCH(bool, aws);
        QFETCH(bool, valid);
        QFETCH(bool, warns);
        QString warning;
        const QString error = validateBucketName(name, aws, &warning);
        QCOMPARE(error.isEmpty(), valid);
        QCOMPARE(!warning.isEmpty(), warns);
    }

    void lifecycleValidation()
    {
        QVERIFY(sampleRule().validate().isEmpty());
        LifecycleRule none;
        QVERIFY(!none.validate().isEmpty()); // no action

        LifecycleRule r = sampleRule();
        r.transitions = {{10, {}, QStringLiteral("STANDARD_IA")}};
        QVERIFY(r.validate().contains(QStringLiteral("30 days")));
        r = sampleRule();
        r.expirationDays = 60; // before the GLACIER transition at 90
        QVERIFY(!r.validate().isEmpty());
        r = sampleRule();
        r.abortUploadDays = 7; // tag filter + abort
        QVERIFY(!r.validate().isEmpty());
        r.tags.clear();
        QVERIFY(r.validate().isEmpty());
        r.sizeLessThan = 10; // smaller than sizeGreaterThan
        QVERIFY(!r.validate().isEmpty());
        r = sampleRule();
        r.transitions.first().days = -1;
        r.transitions.first().date = QDate(2030, 1, 1); // dates mixed with days
        QVERIFY(!r.validate().isEmpty());
        r = LifecycleRule();
        r.expiredDeleteMarker = true;
        r.expirationDays = 5;
        QVERIFY(!r.validate().isEmpty());
        r.expirationDays = -1;
        QVERIFY(r.validate().isEmpty());
        r = LifecycleRule();
        r.newerNoncurrentVersions = 2; // without noncurrent expiration
        r.abortUploadDays = 1;
        QVERIFY(!r.validate().isEmpty());

        LifecycleRule a = sampleRule();
        LifecycleRule b = sampleRule();
        QVERIFY(validateLifecycle({a, b}).contains(QStringLiteral("same ID")));
        b.id.clear();
        QVERIFY(validateLifecycle({a, b}).isEmpty());
    }

    void lifecycleJsonRoundTrip()
    {
        LifecycleRule dated;
        dated.enabled = false;
        dated.expirationDate = QDate(2031, 6, 1);
        dated.transitions = {{-1, QDate(2030, 1, 1), QStringLiteral("DEEP_ARCHIVE")}};
        LifecycleRule abort;
        abort.id = QStringLiteral("mpu");
        abort.abortUploadDays = 7;
        abort.expiredDeleteMarker = true;
        const QList<LifecycleRule> rules = {sampleRule(), dated, abort};
        const QByteArray json = QJsonDocument(lifecycleToJson(rules)).toJson();
        auto back = lifecycleFromJson(json);
        QVERIFY2(back, back ? "" : qPrintable(back.error().message));
        QCOMPARE(back.value(), rules);

        // Shapes: a whole-bucket rule has {"Prefix": ""}; one tag uses "Tag"; several conditions "And".
        const QJsonObject o = lifecycleToJson(rules);
        const QJsonArray arr = o.value(QStringLiteral("Rules")).toArray();
        QVERIFY(
            arr.at(0).toObject().value(QStringLiteral("Filter")).toObject().contains(QStringLiteral("And")));
        QCOMPARE(arr.at(2).toObject().value(QStringLiteral("Filter")).toObject(),
                 QJsonObject({{QStringLiteral("Prefix"), QString()}}));
        QCOMPARE(arr.at(1).toObject().value(QStringLiteral("Status")).toString(), QStringLiteral("Disabled"));
    }

    void lifecycleJsonErrors()
    {
        auto syntax = lifecycleFromJson("{\n  \"Rules\": [\n    {,}\n  ]\n}");
        QVERIFY(!syntax);
        QVERIFY2(syntax.error().message.contains(QStringLiteral("line 3")),
                 qPrintable(syntax.error().message));
        auto typo = lifecycleFromJson(R"({"Rules":[{"Status":"Enabled","Expiraton":{"Days":3}}]})");
        QVERIFY(!typo);
        QVERIFY(typo.error().message.contains(QStringLiteral("Expiraton")));
        auto status = lifecycleFromJson(R"({"Rules":[{"Status":"On"}]})");
        QVERIFY(!status);
        // Legacy top-level Prefix and AWS CLI dates with an offset.
        auto legacy = lifecycleFromJson(
            R"({"Rules":[{"Status":"Enabled","Prefix":"tmp/","Expiration":{"Date":"2030-01-01T00:00:00+00:00"}}]})");
        QVERIFY(legacy);
        QCOMPARE(legacy->first().prefix, QStringLiteral("tmp/"));
        QCOMPARE(legacy->first().expirationDate, QDate(2030, 1, 1));
    }

    void lifecycleSdkConversion()
    {
        // Several conditions go in <And>; a single tag in <Tag>; nothing in <Prefix></Prefix>.
        const auto sdk = aws::toSdk(sampleRule());
        QVERIFY(sdk.GetFilter().AndHasBeenSet());
        QCOMPARE(aws::fromAws(sdk.GetFilter().GetAnd().GetPrefix()), QStringLiteral("logs/"));
        QCOMPARE(sdk.GetFilter().GetAnd().GetObjectSizeGreaterThan(), 1024);
        QCOMPARE(int(sdk.GetTransitions().size()), 2);
        QCOMPARE(aws::fromSdk(sdk), sampleRule());

        LifecycleRule oneTag;
        oneTag.tags.insert(QStringLiteral("k"), QStringLiteral("v"));
        oneTag.expirationDays = 1;
        const auto tagged = aws::toSdk(oneTag);
        QVERIFY(!tagged.GetFilter().AndHasBeenSet());
        QVERIFY(tagged.GetFilter().TagHasBeenSet());
        QCOMPARE(aws::fromSdk(tagged), oneTag);

        LifecycleRule whole;
        whole.abortUploadDays = 3;
        whole.expirationDate = QDate(2030, 5, 17);
        const auto all = aws::toSdk(whole);
        QVERIFY(all.GetFilter().PrefixHasBeenSet());
        QVERIFY(all.GetFilter().GetPrefix().empty());
        QCOMPARE(aws::fromSdk(all), whole);

        Aws::Utils::Xml::XmlDocument doc = Aws::Utils::Xml::XmlDocument::CreateWithRootNode("Rule");
        Aws::Utils::Xml::XmlNode root = doc.GetRootElement();
        all.AddToNode(root);
        const QString xml = aws::fromAws(doc.ConvertToString());
        QVERIFY2(xml.contains(QStringLiteral("<DaysAfterInitiation>3</DaysAfterInitiation>")),
                 qPrintable(xml));
        QVERIFY2(xml.contains(QStringLiteral("2030-05-17T00:00:00")), qPrintable(xml));
    }

    void corsRules()
    {
        CorsRule r;
        r.allowedOrigins = {QStringLiteral("https://*.example.com")};
        r.allowedMethods = {QStringLiteral("GET"), QStringLiteral("PUT")};
        r.allowedHeaders = {QStringLiteral("*")};
        r.exposeHeaders = {QStringLiteral("ETag")};
        r.maxAgeSeconds = 3000;
        r.id = QStringLiteral("web");
        QVERIFY(r.validate().isEmpty());
        auto back = corsFromJson(QJsonDocument(corsToJson({r})).toJson());
        QVERIFY(back);
        QCOMPARE(back->first(), r);
        QCOMPARE(aws::fromSdk(aws::toSdk(r)), r);

        CorsRule bad = r;
        bad.allowedMethods = {QStringLiteral("PATCH")};
        QVERIFY(!bad.validate().isEmpty());
        bad = r;
        bad.allowedOrigins = {QStringLiteral("https://*.*.com")};
        QVERIFY(!bad.validate().isEmpty());
        bad.allowedOrigins.clear();
        QVERIFY(!validateCors({bad}).isEmpty());
        QVERIFY(!corsFromJson(R"({"CORSRules":[{"AllowedOrigin":["*"]}]})"));
    }

    void policyValidation()
    {
        const QString bucket = QStringLiteral("photos");
        for (const auto& [name, json] : policyTemplates(bucket)) {
            const auto issues = validatePolicy(json, bucket);
            for (const PolicyIssue& i : issues)
                QVERIFY2(!i.error, qPrintable(name + QStringLiteral(": ") + i.message));
        }
        QVERIFY(validatePolicy(QString(), bucket).isEmpty());

        const auto syntax = validatePolicy(
            QStringLiteral("{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n}"), bucket);
        QCOMPARE(syntax.size(), 1);
        QVERIFY(syntax.first().error);
        QCOMPARE(syntax.first().line, 4);

        const QString wrong = QStringLiteral(R"({"Statement":[{"Effect":"Permit","Action":"s3:GetObject",
            "Resource":"arn:aws:s3:::other/*"},{"Sid":"x","Effect":"Allow","Principal":"*","Action":"ec2:Run",
            "Resource":"arn:aws:s3:::photo*/*"},{"Sid":"x","Effect":"Deny","Principal":"*","Action":"s3:*",
            "Resource":"*"}]})");
        const auto issues = validatePolicy(wrong, bucket);
        auto has = [&issues](bool error, const QString& text) {
            for (const PolicyIssue& i : issues) {
                if (i.error == error && i.message.contains(text))
                    return true;
            }
            return false;
        };
        QVERIFY(has(false, QStringLiteral("Version")));
        QVERIFY(has(true, QStringLiteral("\"Effect\"")));
        QVERIFY(has(true, QStringLiteral("Principal")));
        QVERIFY(has(true, QStringLiteral("not in this bucket")));
        QVERIFY(has(false, QStringLiteral("not an S3 action")));
        QVERIFY(has(false, QStringLiteral("everyone")));
        QVERIFY(has(true, QStringLiteral("Sid is used twice")));
        QVERIFY(!has(true, QStringLiteral("photo*"))); // wildcard matches the bucket
    }

    void websiteAndRouting()
    {
        WebsiteConfig w;
        QVERIFY(!w.isEnabled());
        w.indexDocument = QStringLiteral("index.html");
        w.errorDocument = QStringLiteral("404.html");
        RoutingRule rule;
        rule.keyPrefixEquals = QStringLiteral("docs/");
        rule.errorCodeEquals = QStringLiteral("404");
        rule.replaceKeyPrefixWith = QStringLiteral("documents/");
        rule.httpRedirectCode = QStringLiteral("301");
        rule.protocol = QStringLiteral("https");
        w.routingRules = {rule};
        QVERIFY(w.validate().isEmpty());
        auto back = routingRulesFromJson(QJsonDocument(routingRulesToJson(w.routingRules)).toJson());
        QVERIFY(back);
        QCOMPARE(back.value(), w.routingRules);
        // HTTP codes may be written as numbers.
        auto numeric = routingRulesFromJson(
            R"([{"Condition":{"HttpErrorCodeReturnedEquals":404},"Redirect":{"HostName":"x.com","HttpRedirectCode":302}}])");
        QVERIFY(numeric);
        QCOMPARE(numeric->first().errorCodeEquals, QStringLiteral("404"));
        QCOMPARE(numeric->first().httpRedirectCode, QStringLiteral("302"));
        QCOMPARE(aws::fromSdk(aws::toSdk(rule)), rule);
        const auto sdk = aws::toSdk(w);
        QCOMPARE(aws::fromAws(sdk.GetIndexDocument().GetSuffix()), QStringLiteral("index.html"));
        QCOMPARE(int(sdk.GetRoutingRules().size()), 1);

        WebsiteConfig redirect;
        redirect.redirectHost = QStringLiteral("www.example.com");
        redirect.redirectProtocol = QStringLiteral("https");
        QVERIFY(redirect.validate().isEmpty());
        QVERIFY(aws::toSdk(redirect).RedirectAllRequestsToHasBeenSet());
        redirect.indexDocument = QStringLiteral("index.html");
        QVERIFY(!redirect.validate().isEmpty());
        WebsiteConfig slash;
        slash.indexDocument = QStringLiteral("a/index.html");
        QVERIFY(!slash.validate().isEmpty());

        QCOMPARE(awsWebsiteEndpoint(QStringLiteral("b"), QStringLiteral("us-east-1")),
                 QStringLiteral("http://b.s3-website-us-east-1.amazonaws.com"));
        QCOMPARE(awsWebsiteEndpoint(QStringLiteral("b"), QStringLiteral("eu-central-1")),
                 QStringLiteral("http://b.s3-website.eu-central-1.amazonaws.com"));
    }

    void objectLockAndTags()
    {
        ObjectLockDefaults d;
        QVERIFY(d.validate().isEmpty());
        d.mode = QStringLiteral("GOVERNANCE");
        QVERIFY(!d.validate().isEmpty()); // not enabled
        d.enabled = true;
        QVERIFY(!d.validate().isEmpty()); // no period
        d.days = 10;
        QVERIFY(d.validate().isEmpty());
        d.years = 1;
        QVERIFY(!d.validate().isEmpty()); // both

        QMap<QString, QString> tags;
        for (int i = 0; i < 50; ++i)
            tags.insert(QStringLiteral("k%1").arg(i), QStringLiteral("v"));
        QVERIFY(validateBucketTags(tags).isEmpty());
        tags.insert(QStringLiteral("one-more"), QString());
        QVERIFY(!validateBucketTags(tags).isEmpty());
        QVERIFY(!validateBucketTags({{QStringLiteral("aws:x"), QStringLiteral("v")}}).isEmpty());
    }

    void encryptionNames()
    {
        for (auto mode :
             {BucketEncryption::Mode::S3, BucketEncryption::Mode::Kms, BucketEncryption::Mode::DsseKms})
            QCOMPARE(BucketEncryption::fromAlgorithm(BucketEncryption::algorithm(mode)), mode);
        QCOMPARE(BucketEncryption::fromAlgorithm(QString()), BucketEncryption::Mode::None);
    }

    void statistics()
    {
        BucketStats s;
        s.versionsListed = true;
        Entry current;
        current.size = 10;
        Entry archived = current;
        archived.storageClass = QStringLiteral("GLACIER");
        archived.size = 100;
        Entry old = current;
        old.isLatest = false;
        old.size = 5;
        Entry marker;
        marker.isDeleteMarker = true;
        Entry folder;
        folder.type = Entry::Type::Directory;
        for (const Entry& e : {current, current, archived, old, marker, folder})
            s.add(e);
        QCOMPARE(s.current.value(QStringLiteral("STANDARD")), (UsageCount{2, 20}));
        QCOMPARE(s.current.value(QStringLiteral("GLACIER")), (UsageCount{1, 100}));
        QCOMPARE(s.currentTotal(), (UsageCount{3, 120}));
        QCOMPARE(s.noncurrent, (UsageCount{1, 5}));
        QCOMPARE(s.deleteMarkers, 1);
    }

    void notConfiguredErrors()
    {
        using Err = Aws::Client::AWSError<Aws::S3::S3Errors>;
        auto err = [](const char* name) { return Err(Aws::S3::S3Errors::UNKNOWN, name, "message", false); };
        QVERIFY(aws::isNotConfigured(err("NoSuchLifecycleConfiguration")));
        QVERIFY(aws::isNotConfigured(err("NoSuchBucketPolicy")));
        QVERIFY(aws::isNotConfigured(err("NoSuchTagSet")));
        QVERIFY(aws::isNotConfigured(err("ServerSideEncryptionConfigurationNotFoundError")));
        QVERIFY(aws::isNotConfigured(err("ObjectLockConfigurationNotFoundError")));
        QVERIFY(aws::isNotConfigured(err("NoSuchPublicAccessBlockConfiguration")));
        QVERIFY(!aws::isNotConfigured(err("NoSuchBucket")));
        QVERIFY(!aws::isNotConfigured(err("AccessDenied")));
        QVERIFY(!aws::isNotConfigured(err("NotImplemented")));
    }

    void knownUnsupported()
    {
        QVERIFY(knownUnsupportedFeatures(ConnectionProfile::Preset::MinIO).contains(BucketFeature::Cors));
        QVERIFY(knownUnsupportedFeatures(ConnectionProfile::Preset::AmazonS3).isEmpty());
        QSet<QString> keys;
        for (int f = 0; f <= int(BucketFeature::Ownership); ++f) {
            keys.insert(bucketFeatureKey(BucketFeature(f)));
            QVERIFY(!bucketFeatureName(BucketFeature(f)).isEmpty());
        }
        QCOMPARE(keys.size(), int(BucketFeature::Ownership) + 1);
    }

private:
    std::unique_ptr<AwsSdkGuard> m_sdk;
};

QTEST_GUILESS_MAIN(TestBucketTypes)
#include "tst_buckettypes.moc"
