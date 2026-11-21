// Bucket management against MinIO: create/delete (incl. Object Lock), emptying a
// versioned bucket with delete markers and incomplete uploads, settings round trips
// (versioning, encryption, lifecycle, policy, tags, Object Lock defaults), feature
// probing for sub-resources MinIO does not implement, and statistics.

#include "common/S3TestEnv.h"
#include "providers/s3/AwsConvert.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3BucketService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"

#include <QFile>
#include <QTemporaryDir>
#include <QTest>
#include <QUuid>

#include <aws/s3/S3Client.h>
#include <aws/s3/model/CreateMultipartUploadRequest.h>

using namespace s3fm;

class TestS3Buckets : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    std::shared_ptr<S3BucketService> m_buckets;
    QTemporaryDir m_tmp;
    QStringList m_created;

    QString newName(const QString& tag)
    {
        const QString name =
            QStringLiteral("s3fm-it-%1-%2").arg(tag, QUuid::createUuid().toString(QUuid::Id128).left(8));
        m_created.push_back(name);
        return name;
    }

    void create(const QString& name, bool objectLock = false)
    {
        NewBucket spec;
        spec.name = name;
        spec.objectLock = objectLock;
        auto r = m_buckets->createBucket(spec);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
    }

    void put(const QString& bucket, const QString& key, const QByteArray& data)
    {
        const QString file = m_tmp.filePath(QUuid::createUuid().toString(QUuid::Id128));
        QFile f(file);
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write(data);
        f.close();
        OperationContext ctx;
        auto r = m_s3->upload(file, Location::s3(QStringLiteral("it"), bucket, key), ctx);
        QVERIFY2(r, r ? "" : qPrintable(r.error().toString()));
    }

    void startUpload(const QString& bucket, const QString& key)
    {
        auto client = m_s3->session().client().value();
        Aws::S3::Model::CreateMultipartUploadRequest create;
        create.SetBucket(aws::toAws(bucket));
        create.SetKey(aws::toAws(key));
        QVERIFY(client->CreateMultipartUpload(create).IsSuccess());
    }

    void remove(const QString& bucket, const QString& key)
    {
        OperationContext ctx;
        Entry e;
        e.location = Location::s3(QStringLiteral("it"), bucket, key);
        e.name = key;
        QVERIFY(m_s3->remove({e}, ctx));
    }

private Q_SLOTS:
    void initTestCase()
    {
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        const QString secret = m_env.secretKey;
        auto session = std::make_shared<S3Session>(
            m_env.profile(), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
        m_s3 = std::make_shared<S3Provider>(session);
        m_s3->setCacheTtlMs(0);
        m_s3->setListPageSize(3); // pagination while emptying and counting
        m_buckets = std::make_shared<S3BucketService>(m_s3);
    }

    void cleanupTestCase()
    {
        if (m_buckets) {
            for (const QString& name : std::as_const(m_created)) {
                OperationContext ctx;
                (void)m_buckets->emptyBucket(name, true, ctx);
                (void)m_buckets->deleteBucket(name);
            }
        }
        m_buckets.reset();
        m_s3.reset();
        m_sdk.reset();
    }

    void createListDelete()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = newName(QStringLiteral("plain"));
        create(name);
        OperationContext ctx;
        auto page = m_s3->list(Location::s3(QStringLiteral("it")), {}, ctx);
        QVERIFY(page);
        bool listed = false;
        for (const Entry& e : page->entries)
            listed = listed || (e.name == name && e.type == Entry::Type::Bucket);
        QVERIFY(listed);

        // Creating it again: "already exists".
        NewBucket again;
        again.name = name;
        auto dup = m_buckets->createBucket(again);
        QVERIFY(!dup);
        QCOMPARE(dup.error().code, ErrorCode::AlreadyExists);

        auto overview = m_buckets->overview(name);
        QVERIFY2(overview, overview ? "" : qPrintable(overview.error().toString()));
        QCOMPARE(overview->name, name);
        QCOMPARE(overview->region, m_env.region);
        QVERIFY(overview->created.isValid());

        auto contents = m_buckets->contents(name);
        QVERIFY(contents);
        QVERIFY(contents->isEmpty());
        QVERIFY(m_buckets->deleteBucket(name));
        QVERIFY(!m_buckets->deleteBucket(name)); // gone
    }

    void invalidNamesAreRejectedLocally()
    {
        S3FM_REQUIRE_S3(m_env);
        NewBucket spec;
        spec.name = QStringLiteral("Bad_Name");
        auto r = m_buckets->createBucket(spec);
        QVERIFY(!r);
        QCOMPARE(r.error().code, ErrorCode::InvalidArgument);
    }

    void emptyThenDeleteVersionedBucket()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = newName(QStringLiteral("full"));
        create(name);
        QVERIFY(m_buckets->setVersioning(name, true));
        for (int i = 0; i < 4; ++i)
            put(name, QStringLiteral("dir/file%1.txt").arg(i), QByteArray("v1-") + QByteArray::number(i));
        put(name, QStringLiteral("dir/file0.txt"), "v2"); // noncurrent version
        remove(name, QStringLiteral("dir/file1.txt"));    // delete marker
        startUpload(name, QStringLiteral("pending.bin"));

        auto refused = m_buckets->deleteBucket(name);
        QVERIFY(!refused);
        QCOMPARE(refused.error().code, ErrorCode::NotEmpty);
        auto contents = m_buckets->contents(name);
        QVERIFY(contents);
        QVERIFY(contents->objects);
        QVERIFY(contents->versions);
        QVERIFY(contents->uploads);

        OperationContext ctx;
        qint64 lastProgress = 0;
        ctx.setProgressHandler([&](qint64 done, qint64) { lastProgress = done; });
        const auto report = m_buckets->emptyBucket(name, false, ctx);
        QVERIFY2(report.ok(), qPrintable(report.failures.join(u'\n') +
                                         (report.error ? report.error->toString() : QString())));
        QCOMPARE(report.deleted, 6); // 5 versions + 1 delete marker
        QCOMPARE(report.uploadsAborted, 1);
        QCOMPARE(lastProgress, 6);
        contents = m_buckets->contents(name);
        QVERIFY(contents && contents->isEmpty());
        QVERIFY(m_buckets->deleteBucket(name));
    }

    void statistics()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = newName(QStringLiteral("stats"));
        create(name);
        QVERIFY(m_buckets->setVersioning(name, true));
        put(name, QStringLiteral("a.bin"), QByteArray(100, 'a'));
        put(name, QStringLiteral("sub/b.bin"), QByteArray(200, 'b'));
        put(name, QStringLiteral("sub/c.bin"), QByteArray(300, 'c'));
        put(name, QStringLiteral("a.bin"), QByteArray(150, 'A')); // a.bin v1 becomes noncurrent
        remove(name, QStringLiteral("sub/c.bin"));                // c.bin noncurrent + marker
        startUpload(name, QStringLiteral("sub/pending.bin"));

        OperationContext ctx;
        auto stats = m_buckets->statistics(name, QString(), ctx);
        QVERIFY2(stats, stats ? "" : qPrintable(stats.error().toString()));
        QVERIFY(stats->complete);
        QVERIFY(stats->versionsListed);
        QCOMPARE(stats->currentTotal(), (UsageCount{2, 350}));
        QCOMPARE(stats->current.value(QStringLiteral("STANDARD")), (UsageCount{2, 350}));
        QCOMPARE(stats->noncurrent, (UsageCount{2, 400}));
        QCOMPARE(stats->deleteMarkers, 1);
        QCOMPARE(stats->uploads.objects, 1);

        auto sub = m_buckets->statistics(name, QStringLiteral("sub/"), ctx);
        QVERIFY(sub);
        QCOMPARE(sub->currentTotal(), (UsageCount{1, 200}));

        OperationContext cancelled;
        cancelled.cancel();
        auto partial = m_buckets->statistics(name, QString(), cancelled);
        QVERIFY(partial);
        QVERIFY(!partial->complete);
    }

    void settingsRoundTrip()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = newName(QStringLiteral("cfg"));
        create(name);

        // Versioning
        auto v = m_buckets->versioning(name);
        QVERIFY(v);
        QVERIFY(v->status.isEmpty());
        QVERIFY(m_buckets->setVersioning(name, true));
        QCOMPARE(m_buckets->versioning(name)->status, QStringLiteral("Enabled"));
        QVERIFY(m_buckets->setVersioning(name, false));
        QCOMPARE(m_buckets->versioning(name)->status, QStringLiteral("Suspended"));

        // Default encryption (MinIO needs a KMS for both modes)
        if (!m_env.kmsKey.isEmpty()) {
            QCOMPARE(m_buckets->encryption(name)->mode, BucketEncryption::Mode::None);
            BucketEncryption e;
            e.mode = BucketEncryption::Mode::S3;
            auto set = m_buckets->setEncryption(name, e);
            QVERIFY2(set, set ? "" : qPrintable(set.error().toString()));
            QCOMPARE(m_buckets->encryption(name)->mode, BucketEncryption::Mode::S3);
            e.mode = BucketEncryption::Mode::Kms;
            e.kmsKeyId = m_env.kmsKey;
            QVERIFY(m_buckets->setEncryption(name, e));
            auto kms = m_buckets->encryption(name);
            QCOMPARE(kms->mode, BucketEncryption::Mode::Kms);
            QVERIFY(kms->kmsKeyId.endsWith(m_env.kmsKey));
            QVERIFY(m_buckets->setEncryption(name, {}));
            QCOMPARE(m_buckets->encryption(name)->mode, BucketEncryption::Mode::None);
        }

        // Lifecycle
        QVERIFY(m_buckets->lifecycle(name)->isEmpty());
        LifecycleRule logs;
        logs.id = QStringLiteral("expire-logs");
        logs.prefix = QStringLiteral("logs/");
        logs.tags.insert(QStringLiteral("class"), QStringLiteral("tmp"));
        logs.expirationDays = 30;
        LifecycleRule old;
        old.id = QStringLiteral("old-versions");
        old.enabled = false;
        old.noncurrentExpirationDays = 7;
        auto setRules = m_buckets->setLifecycle(name, {logs, old});
        QVERIFY2(setRules, setRules ? "" : qPrintable(setRules.error().toString()));
        auto rules = m_buckets->lifecycle(name);
        QVERIFY(rules);
        QCOMPARE(rules->size(), 2);
        const LifecycleRule& first = rules->at(0).id == logs.id ? rules->at(0) : rules->at(1);
        const LifecycleRule& second = rules->at(0).id == logs.id ? rules->at(1) : rules->at(0);
        QCOMPARE(first, logs);
        QCOMPARE(second.noncurrentExpirationDays, 7);
        QVERIFY(!second.enabled);
        LifecycleRule invalid;
        QVERIFY(!m_buckets->setLifecycle(name, {invalid})); // no action: refused before sending
        QVERIFY(m_buckets->setLifecycle(name, {}));
        QVERIFY(m_buckets->lifecycle(name)->isEmpty());

        // Policy
        QVERIFY(m_buckets->policy(name)->isEmpty());
        const QString policy = policyTemplates(name).first().second;
        auto setPolicy = m_buckets->setPolicy(name, policy);
        QVERIFY2(setPolicy, setPolicy ? "" : qPrintable(setPolicy.error().toString()));
        auto stored = m_buckets->policy(name);
        QVERIFY(stored);
        QVERIFY(stored->contains(QStringLiteral("s3:GetObject")));
        QVERIFY(!m_buckets->setPolicy(name, QStringLiteral("{ not json")));
        QVERIFY(m_buckets->setPolicy(name, QString()));
        QVERIFY(m_buckets->policy(name)->isEmpty());

        // Tags
        QVERIFY(m_buckets->tags(name)->isEmpty());
        const QMap<QString, QString> tags{{QStringLiteral("team"), QStringLiteral("storage")},
                                          {QStringLiteral("env"), QStringLiteral("test")}};
        QVERIFY(m_buckets->setTags(name, tags));
        QCOMPARE(m_buckets->tags(name).value(), tags);
        QVERIFY(m_buckets->setTags(name, {}));
        QVERIFY(m_buckets->tags(name)->isEmpty());

        // Object Lock is not enabled on this bucket.
        auto lock = m_buckets->objectLock(name);
        QVERIFY(lock);
        QVERIFY(!lock->enabled);
    }

    void objectLockDefaults()
    {
        S3FM_REQUIRE_S3(m_env);
        const QString name = newName(QStringLiteral("lock"));
        create(name, true);
        auto lock = m_buckets->objectLock(name);
        QVERIFY(lock);
        QVERIFY(lock->enabled);
        QVERIFY(lock->mode.isEmpty());
        QCOMPARE(m_buckets->versioning(name)->status, QStringLiteral("Enabled"));

        ObjectLockDefaults d;
        d.enabled = true;
        d.mode = QStringLiteral("GOVERNANCE");
        d.days = 1;
        auto set = m_buckets->setObjectLock(name, d);
        QVERIFY2(set, set ? "" : qPrintable(set.error().toString()));
        QCOMPARE(m_buckets->objectLock(name).value(), d);
        d.mode.clear();
        d.days = 0;
        QVERIFY(m_buckets->setObjectLock(name, d));
        QVERIFY(m_buckets->objectLock(name)->mode.isEmpty());
    }

    void unsupportedFeaturesAreRemembered()
    {
        S3FM_REQUIRE_S3(m_env);
        // MinIO: public access block and ownership controls answer NotImplemented;
        // CORS and website are known from the preset.
        QVERIFY(m_buckets->isUnsupported(BucketFeature::Cors));
        QVERIFY(m_buckets->isUnsupported(BucketFeature::Website));
        QVERIFY(!m_buckets->isUnsupported(BucketFeature::Lifecycle));
        auto pab = m_buckets->publicAccessBlock(m_env.bucket);
        if (pab) {
            QSKIP("This endpoint implements public access blocks");
        }
        QCOMPARE(pab.error().code, ErrorCode::Unsupported);
        QVERIFY(m_buckets->isUnsupported(BucketFeature::PublicAccessBlock));
        auto overview = m_buckets->overview(m_env.bucket); // probes ownership controls
        QVERIFY(overview);
        QVERIFY(m_buckets->isUnsupported(BucketFeature::Ownership));
    }
};

QTEST_GUILESS_MAIN(TestS3Buckets)
#include "tst_s3buckets.moc"
