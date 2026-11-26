// Main window browsing a real S3 endpoint. Set S3FM_TEST_SCREENSHOT_DIR to also
// save screenshots of the panels.

#include "common/S3TestEnv.h"
#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3ObjectService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3RootProvider.h"
#include "providers/s3/S3Session.h"
#include "providers/s3/S3VersionService.h"
#include "ui/dialogs/MultipartUploadsDialog.h"
#include "ui/dialogs/PresignDialog.h"
#include "ui/dialogs/PropertiesDialog.h"
#include "ui/dialogs/VersionHistoryDialog.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QDir>
#include <QLineEdit>
#include <QPlainTextEdit>
#include <QPushButton>
#include <QStandardPaths>
#include <QTabWidget>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

class TestS3Ui : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    QTemporaryDir m_tmp;
    std::unique_ptr<ConnectionStore> m_store;
    ProviderRegistry m_registry;

    static bool waitIdle(PanelWidget* panel)
    {
        return QTest::qWaitFor([&] { return !panel->model()->isLoading(); }, 15000);
    }

    void screenshot(QWidget& w, const QString& name)
    {
        const QString dir = qEnvironmentVariable("S3FM_TEST_SCREENSHOT_DIR");
        if (!dir.isEmpty())
            w.grab().save(dir + u'/' + name);
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        m_sdk = std::make_unique<AwsSdkGuard>();
        m_store = std::make_unique<ConnectionStore>(std::make_shared<MemorySecretStore>(),
                                                    m_tmp.filePath(QStringLiteral("connections.ini")));
        if (!m_env.available())
            return;
        ConnectionProfile p = m_env.profile(QStringLiteral("minio"));
        p.name = QStringLiteral("Local MinIO");
        QVERIFY(m_store->save(p, ConnectionSecret{m_env.secretKey, {}}));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3RootProvider(std::make_shared<S3RootProvider>(m_store.get()));
        m_registry.setS3Factory([this](const QString& id) -> std::shared_ptr<Provider> {
            auto profile = m_store->profile(id);
            if (!profile)
                return nullptr;
            return std::make_shared<S3Provider>(
                std::make_shared<S3Session>(*profile, [this, id] { return m_store->secret(id); }));
        });
    }

    void cleanupTestCase()
    {
        m_registry.clear();
        m_sdk.reset();
    }

    void browseConnectionsBucketsAndPrefixes()
    {
        S3FM_REQUIRE_S3(m_env);
        MainWindow window(&m_registry, m_store.get());
        window.resize(1200, 700);
        window.show();
        PanelWidget* left = window.leftPanel();
        PanelWidget* right = window.rightPanel();

        left->setLocation(Location::s3Root());
        QVERIFY(waitIdle(left));
        QCOMPARE(left->location(), Location::s3Root());
        QVERIFY(left->model()->rowForName(QStringLiteral("Local MinIO")) >= 0);

        left->setLocation(Location::s3(QStringLiteral("minio")));
        QVERIFY(waitIdle(left));
        QVERIFY(left->model()->rowForName(m_env.bucket) > 0);

        left->setLocation(Location::s3(QStringLiteral("minio"), m_env.bucket));
        QVERIFY(waitIdle(left));
        QVERIFY(left->model()->rowForName(QStringLiteral("docs")) > 0);
        QVERIFY(left->model()->rowForName(QStringLiteral("readme.txt")) > 0);
        QVERIFY(!left->view()->isColumnHidden(EntryListModel::StorageClassColumn));

        right->setLocation(Location::s3(QStringLiteral("minio"), m_env.bucket, QStringLiteral("many/")));
        QVERIFY(waitIdle(right));
        QCOMPARE(right->model()->entryCount(), 250);
        screenshot(window, QStringLiteral("s3-browse.png"));

        // Up from a prefix selects the prefix we came from.
        right->goUp();
        QVERIFY(waitIdle(right));
        QCOMPARE(right->location(), Location::s3(QStringLiteral("minio"), m_env.bucket));
        QCOMPARE(right->currentEntry()->name, QStringLiteral("many"));
    }

    void typedUrlsNavigate()
    {
        S3FM_REQUIRE_S3(m_env);
        MainWindow window(&m_registry, m_store.get());
        window.show();
        PanelWidget* left = window.leftPanel();
        // Bare bucket URI resolves against the current connection, then the endpoint URL form.
        left->setLocation(Location::s3(QStringLiteral("minio")));
        QVERIFY(waitIdle(left));
        left->editAddress();
        auto* edit = left->findChild<QLineEdit*>(QStringLiteral("addressEdit"));
        QVERIFY(edit);
        edit->setText(m_env.endpoint + u'/' + m_env.bucket + QStringLiteral("/docs/"));
        QTest::keyClick(edit, Qt::Key_Return);
        QVERIFY(waitIdle(left));
        QCOMPARE(left->location(),
                 Location::s3(QStringLiteral("minio"), m_env.bucket, QStringLiteral("docs/")));
    }

    void objectPropertiesEditing()
    {
        S3FM_REQUIRE_S3(m_env);
        const Location object =
            Location::s3(QStringLiteral("minio"), m_env.bucket,
                         QStringLiteral("ui-props-%1.txt").arg(QCoreApplication::applicationPid()));
        auto provider = m_registry.providerFor(object);
        const QString file = m_tmp.filePath(QStringLiteral("props.txt"));
        {
            QFile f(file);
            QVERIFY(f.open(QIODevice::WriteOnly));
            f.write("properties");
        }
        OperationContext ctx;
        QVERIFY(provider->upload(file, object, ctx));
        Entry entry;
        entry.name = object.name();
        entry.location = object;

        PropertiesDialog dialog(&m_registry, entry);
        dialog.setConnectionStore(m_store.get());
        dialog.show();
        QVERIFY(QTest::qWaitFor([&] { return !dialog.isLoading(); }, 10000));
        QVERIFY2(dialog.details().has_value(), qPrintable(dialog.statusText()));
        QCOMPARE(dialog.tabs()->count(), 7);

        // Tags tab.
        auto* tags = dialog.findChild<KeyValueEditor*>(QStringLiteral("tags"));
        tags->addRow(QStringLiteral("ui"), QStringLiteral("yes"));
        dialog.findChild<QPushButton*>(QStringLiteral("applyTags"))->click();
        QVERIFY(QTest::qWaitFor([&] { return !dialog.isLoading(); }, 10000));
        QCOMPARE(dialog.details()->tags.value(QStringLiteral("ui")), QStringLiteral("yes"));

        // Metadata tab: rewrite in place.
        dialog.findChild<QLineEdit*>(QStringLiteral("cacheControl"))->setText(QStringLiteral("max-age=5"));
        dialog.findChild<QPushButton*>(QStringLiteral("applyMetadata"))->click();
        QVERIFY(QTest::qWaitFor(
            [&] {
                return !dialog.isLoading() &&
                       dialog.details()->headers.cacheControl == QStringLiteral("max-age=5");
            },
            10000));
        QCOMPARE(dialog.details()->tags.value(QStringLiteral("ui")), QStringLiteral("yes")); // kept
        QTest::qWait(50); // let re-added form rows show
        screenshot(dialog, QStringLiteral("properties.png"));

        // Share link.
        PresignDialog share(S3ObjectService::forLocation(m_registry, object), object);
        QVERIFY(QTest::qWaitFor([&] { return !share.isBusy(); }, 10000));
        QVERIFY(share.url().startsWith(m_env.endpoint));
        QVERIFY(share.url().contains(QStringLiteral("X-Amz-Signature")));
        if (PresignDialog::hasQrCode())
            QVERIFY(!PresignDialog::qrCode(share.url()).isNull());

        Entry e;
        e.location = object;
        QVERIFY(provider->remove({e}, ctx));
    }

    void versionHistoryAndUploadsDialogs()
    {
        S3FM_REQUIRE_S3(m_env);
        const Location object =
            Location::s3(QStringLiteral("minio"), m_env.versionedBucket,
                         QStringLiteral("ui-hist-%1.txt").arg(QCoreApplication::applicationPid()));
        auto provider = m_registry.providerFor(object);
        OperationContext ctx;
        for (const char* content : {"first", "second"}) {
            const QString file = m_tmp.filePath(QStringLiteral("hist.txt"));
            QFile f(file);
            QVERIFY(f.open(QIODevice::WriteOnly));
            f.write(content);
            f.close();
            QVERIFY(provider->upload(file, object, ctx));
        }
        auto service = S3VersionService::forLocation(m_registry, object);
        VersionHistoryDialog dialog(service, object);
        dialog.show();
        QVERIFY(QTest::qWaitFor([&] { return !dialog.isBusy(); }, 10000));
        QCOMPARE(dialog.versions().size(), 2);
        dialog.selectRow(1); // the older version
        auto* restore = dialog.findChild<QPushButton*>(QStringLiteral("restore"));
        QVERIFY(restore->isEnabled());
        restore->click();
        QVERIFY(QTest::qWaitFor([&] { return !dialog.isBusy() && dialog.versions().size() == 3; }, 10000));
        QVERIFY(!dialog.findChild<QPushButton*>(QStringLiteral("undelete"))->isEnabled());

        MultipartUploadsDialog uploads(service, m_env.versionedBucket, object.key());
        QVERIFY(QTest::qWaitFor([&] { return !uploads.isBusy(); }, 10000));
        QVERIFY(uploads.uploads().isEmpty());

        // Clean up all versions.
        QVERIFY(service->deleteVersions(dialog.versions(), false, ctx));
    }
};

QTEST_MAIN(TestS3Ui)
#include "tst_s3ui.moc"
