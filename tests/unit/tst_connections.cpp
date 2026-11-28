#include "connections/AwsConfig.h"
#include "connections/ConnectionProfile.h"
#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"

#include <QFile>
#include <QSettings>
#include <QSignalSpy>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

class TestConnections : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;

    static ConnectionProfile sample()
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        p.id = QStringLiteral("local-minio");
        p.name = QStringLiteral("Local MinIO");
        p.accessKeyId = QStringLiteral("AKIA123");
        p.pinnedBuckets = {QStringLiteral("a"), QStringLiteral("b")};
        p.defaultStorageClass = QStringLiteral("STANDARD_IA");
        p.checksumMode = ConnectionProfile::ChecksumMode::WhenRequired;
        p.verifyTls = false;
        p.requestTimeoutMs = 30000;
        return p;
    }

private Q_SLOTS:
    void makeId_data()
    {
        QTest::addColumn<QString>("name");
        QTest::addColumn<QStringList>("taken");
        QTest::addColumn<QString>("expected");
        QTest::newRow("simple") << "My MinIO" << QStringList{} << "my-minio";
        QTest::newRow("accents") << "Café Prod" << QStringList{} << "cafe-prod";
        QTest::newRow("symbols") << "  AWS: dev/test!! " << QStringList{} << "aws-devtest";
        QTest::newRow("dupe") << "prod" << QStringList{"prod", "prod-2"} << "prod-3";
        QTest::newRow("empty") << "!!!" << QStringList{} << "connection";
    }

    void makeId()
    {
        QFETCH(QString, name);
        QFETCH(QStringList, taken);
        QFETCH(QString, expected);
        const QString id = ConnectionProfile::makeId(name, taken);
        QCOMPARE(id, expected);
        QVERIFY(ConnectionProfile::isValidId(id));
    }

    void validation()
    {
        ConnectionProfile p = sample();
        QVERIFY(p.validate().isEmpty());
        p.name.clear();
        QVERIFY(!p.validate().isEmpty());
        p = sample();
        p.id = QStringLiteral("Has Spaces");
        QVERIFY(!p.validate().isEmpty());
        p = sample();
        p.endpoint = QStringLiteral("ftp://x");
        QVERIFY(!p.validate().isEmpty());
        p = sample();
        p.accessKeyId.clear();
        QVERIFY(!p.validate().isEmpty());
        p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::CloudflareR2);
        p.id = QStringLiteral("r2");
        p.name = QStringLiteral("R2");
        p.accessKeyId = QStringLiteral("k");
        QVERIFY(!p.validate().isEmpty()); // placeholder still in endpoint
        p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        p.id = QStringLiteral("aws");
        p.name = QStringLiteral("AWS");
        p.credentialSource = ConnectionProfile::CredentialSource::DefaultChain;
        QVERIFY(p.validate().isEmpty()); // no endpoint needed for AWS
    }

    void addressingStyle()
    {
        ConnectionProfile p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::AmazonS3);
        QVERIFY(!p.usesPathStyle());
        p.addressing = ConnectionProfile::Addressing::Path;
        QVERIFY(p.usesPathStyle());
        p = ConnectionProfile::fromPreset(ConnectionProfile::Preset::Custom);
        p.endpoint = QStringLiteral("https://s3.example.com");
        p.addressing = ConnectionProfile::Addressing::Auto;
        QVERIFY(p.usesPathStyle());
        QVERIFY(ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO).usesPathStyle());
    }

    void settingsRoundTrip()
    {
        const QString file = m_tmp.filePath(QStringLiteral("roundtrip.ini"));
        const ConnectionProfile p = sample();
        {
            QSettings s(file, QSettings::IniFormat);
            p.save(s);
        }
        QSettings s(file, QSettings::IniFormat);
        ConnectionProfile loaded = ConnectionProfile::load(s);
        loaded.id = p.id;
        QCOMPARE(loaded, p);
        QFile f(file);
        QVERIFY(f.open(QIODevice::ReadOnly));
        const QByteArray content = f.readAll();
        QVERIFY(content.contains("AKIA123"));
        QVERIFY(!content.contains("secret"));
    }

    void storeSaveLoadRemove()
    {
        const QString file = m_tmp.filePath(QStringLiteral("store.ini"));
        auto secrets = std::make_shared<MemorySecretStore>();
        {
            ConnectionStore store(secrets, file);
            QSignalSpy invalidated(&store, &ConnectionStore::profileInvalidated);
            QVERIFY(store.save(sample(), ConnectionSecret{QStringLiteral("s3cr3t"), {}}));
            QCOMPARE(invalidated.size(), 1);
            QCOMPARE(store.profiles().size(), 1);
        }
        // Settings file never contains the secret. (Closed again before the next save: Windows
        // cannot replace a file that is open.)
        QFile f(file);
        QVERIFY(f.open(QIODevice::ReadOnly));
        const QByteArray content = f.readAll();
        f.close();
        QVERIFY(content.contains("AKIA123"));
        QVERIFY(!content.contains("s3cr3t"));

        ConnectionStore store(secrets, file);
        store.load();
        QCOMPARE(store.profiles().size(), 1);
        QCOMPARE(store.profile(QStringLiteral("local-minio"))->name, QStringLiteral("Local MinIO"));
        auto secret = store.secret(QStringLiteral("local-minio"));
        QVERIFY(secret);
        QCOMPARE(secret->secretAccessKey, QStringLiteral("s3cr3t"));
        const int reads = secrets->readCount();
        QVERIFY(store.secret(QStringLiteral("local-minio")));
        QCOMPARE(secrets->readCount(), reads); // cached

        // Saving without a secret keeps the stored one.
        ConnectionProfile edited = sample();
        edited.name = QStringLiteral("Renamed");
        QVERIFY(store.save(edited, std::nullopt));
        QCOMPARE(store.secret(QStringLiteral("local-minio"))->secretAccessKey, QStringLiteral("s3cr3t"));

        QVERIFY(store.remove(QStringLiteral("local-minio")));
        QVERIFY(store.profiles().isEmpty());
        QVERIFY(!secrets->read(QStringLiteral("connection:local-minio")));
        ConnectionStore reloaded(secrets, file);
        reloaded.load();
        QVERIFY(reloaded.profiles().isEmpty());
    }

    void storeRejectsInvalidProfiles()
    {
        ConnectionStore store(std::make_shared<MemorySecretStore>(),
                              m_tmp.filePath(QStringLiteral("bad.ini")));
        ConnectionProfile p = sample();
        p.id = QStringLiteral("BAD ID");
        auto r = store.save(p, std::nullopt);
        QVERIFY(!r);
        QCOMPARE(r.error().code, ErrorCode::InvalidArgument);
    }

    void profilesSortedByName()
    {
        ConnectionStore store(std::make_shared<MemorySecretStore>(),
                              m_tmp.filePath(QStringLiteral("sort.ini")));
        for (const char* name : {"zeta", "Alpha", "beta 10", "beta 2"}) {
            ConnectionProfile p = sample();
            p.name = QString::fromLatin1(name);
            p.id = ConnectionProfile::makeId(p.name, store.ids());
            QVERIFY(store.save(p, std::nullopt));
        }
        QStringList names;
        for (const ConnectionProfile& p : store.profiles())
            names.push_back(p.name);
        QCOMPARE(names, (QStringList{"Alpha", "beta 2", "beta 10", "zeta"}));
    }

    void parseAwsConfig()
    {
        const QString config = QStringLiteral(
            "[default]\nregion = eu-west-1\n\n"
            "[profile dev]\nregion=us-west-2\nrole_arn = arn:aws:iam::1:role/x\nsource_profile = default\n"
            "s3 =\n  addressing_style = path\n"
            "[profile sso-user]\nsso_session = corp\nsso_account_id = 1\n"
            "[sso-session corp]\nsso_start_url = https://x\n"
            "[profile minio]\nendpoint_url = http://localhost:9000\n"
            "# comment\n[services foo]\ns3 =\n  endpoint_url = http://x\n");
        const QString creds =
            QStringLiteral("[default]\naws_access_key_id = AKIA\naws_secret_access_key = SECRET\n"
                           "[only-creds]\naws_access_key_id=A\n");
        const QList<AwsProfileInfo> profiles = AwsConfig::parse(config, creds);
        QStringList names;
        for (const auto& p : profiles)
            names.push_back(p.name);
        QCOMPARE(names, (QStringList{"default", "dev", "minio", "only-creds", "sso-user"}));
        QCOMPARE(profiles[0].region, QStringLiteral("eu-west-1"));
        QVERIFY(profiles[0].hasStaticKeys);
        QVERIFY(profiles[1].assumesRole);
        QCOMPARE(profiles[1].region, QStringLiteral("us-west-2"));
        QCOMPARE(profiles[2].endpointUrl, QStringLiteral("http://localhost:9000"));
        QVERIFY(profiles[4].isSso);
    }
};

QTEST_GUILESS_MAIN(TestConnections)
#include "tst_connections.moc"
