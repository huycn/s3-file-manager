// Bucket management UI against MinIO: the bucket properties dialog (tab probing,
// applying settings, statistics) and creating/deleting a bucket from the main
// window with F7/F8 at the connection level.

#include "common/S3TestEnv.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3BucketService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"
#include "ui/dialogs/BucketPropertiesDialog.h"
#include "ui/dialogs/BucketTabs.h"
#include "ui/dialogs/CreateBucketDialog.h"
#include "ui/dialogs/DeleteBucketDialog.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelWidget.h"
#include "ui/widgets/JsonEditor.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QApplication>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QStandardPaths>
#include <QTabWidget>
#include <QTableWidget>
#include <QTest>
#include <QTimer>
#include <QUuid>

using namespace s3fm;

class TestS3BucketUi : public QObject
{
    Q_OBJECT

private:
    test::S3TestEnv m_env;
    std::unique_ptr<AwsSdkGuard> m_sdk;
    std::shared_ptr<S3Provider> m_s3;
    std::shared_ptr<S3BucketService> m_buckets;
    ProviderRegistry m_registry;
    QString m_bucket;

    static bool waitLoaded(BucketPropertiesDialog& d)
    {
        return QTest::qWaitFor([&] { return !d.isLoading(); }, 15000);
    }

    bool hasBucket(const QString& name)
    {
        OperationContext ctx;
        auto page = m_s3->list(Location::s3(QStringLiteral("it")), {}, ctx);
        if (!page)
            return false;
        for (const Entry& e : page->entries) {
            if (e.name == name)
                return true;
        }
        return false;
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        m_sdk = std::make_unique<AwsSdkGuard>();
        if (!m_env.available())
            return;
        const QString secret = m_env.secretKey;
        auto session = std::make_shared<S3Session>(
            m_env.profile(), [secret] { return Result<ConnectionSecret>(ConnectionSecret{secret, {}}); });
        m_s3 = std::make_shared<S3Provider>(session);
        m_s3->setCacheTtlMs(0);
        m_buckets = std::make_shared<S3BucketService>(m_s3);
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_registry.setS3Factory(
            [this](const QString& id) -> std::shared_ptr<Provider> { return id == u"it" ? m_s3 : nullptr; });
        m_bucket = QStringLiteral("s3fm-ui-%1").arg(QUuid::createUuid().toString(QUuid::Id128).left(8));
        NewBucket spec;
        spec.name = m_bucket;
        QVERIFY(m_buckets->createBucket(spec));
    }

    void cleanupTestCase()
    {
        if (m_buckets && !m_bucket.isEmpty()) {
            OperationContext ctx;
            (void)m_buckets->emptyBucket(m_bucket, true, ctx);
            (void)m_buckets->deleteBucket(m_bucket);
        }
        m_registry.clear();
        m_buckets.reset();
        m_s3.reset();
        m_sdk.reset();
    }

    void propertiesDialog()
    {
        S3FM_REQUIRE_S3(m_env);
        BucketPropertiesDialog dialog(m_buckets, m_bucket);
        QVERIFY(waitLoaded(dialog));
        QTabWidget* tabs = dialog.tabs();
        // MinIO: CORS and website are known unsupported, the public access block is probed.
        QVERIFY(!tabs->isTabEnabled(dialog.tabIndex(BucketFeature::Cors)));
        QVERIFY(!tabs->isTabEnabled(dialog.tabIndex(BucketFeature::Website)));
        QVERIFY(!tabs->isTabEnabled(dialog.tabIndex(BucketFeature::PublicAccessBlock)));
        QVERIFY(tabs->isTabEnabled(dialog.tabIndex(BucketFeature::Lifecycle)));
        QVERIFY(tabs->isTabEnabled(dialog.tabIndex(BucketFeature::Policy)));

        auto* overview = dialog.findChild<BucketOverviewTab*>();
        bool named = false;
        for (const auto& [label, value] : overview->rows())
            named = named || (label == u"Name" && value == m_bucket);
        QVERIFY(named);

        // Versioning: enable with the button.
        auto* versioning = dialog.findChild<BucketVersioningTab*>();
        versioning->findChild<QPushButton*>(QStringLiteral("enableVersioning"))->click();
        QVERIFY(waitLoaded(dialog));
        QCOMPARE(versioning->findChild<QLabel*>(QStringLiteral("versioningState"))->text(),
                 QStringLiteral("Enabled"));
        QCOMPARE(m_buckets->versioning(m_bucket)->status, QStringLiteral("Enabled"));

        // Lifecycle: add a rule and apply.
        auto* lifecycle = dialog.findChild<BucketLifecycleTab*>();
        LifecycleRule rule;
        rule.id = QStringLiteral("tmp");
        rule.prefix = QStringLiteral("tmp/");
        rule.expirationDays = 3;
        lifecycle->setRules({rule});
        lifecycle->findChild<QPushButton*>(QStringLiteral("apply"))->click();
        QVERIFY(waitLoaded(dialog));
        QVERIFY2(!dialog.statusText().contains(QStringLiteral("rror")), qPrintable(dialog.statusText()));
        QCOMPARE(lifecycle->rules(), QList<LifecycleRule>{rule});
        QCOMPARE(lifecycle->findChild<QTableWidget*>(QStringLiteral("lifecycleRules"))->rowCount(), 1);
        // Invalid JSON in the JSON view: Apply refuses and reports.
        auto* views = lifecycle->findChild<QTabWidget*>(QStringLiteral("lifecycleViews"));
        views->setCurrentIndex(1);
        auto* json = lifecycle->findChild<JsonEditor*>(QStringLiteral("lifecycleJson"));
        QVERIFY(json->toPlainText().contains(QStringLiteral("\"tmp/\"")));
        json->setPlainText(QStringLiteral("{\"Rules\": [}"));
        lifecycle->findChild<QPushButton*>(QStringLiteral("apply"))->click();
        QVERIFY(dialog.statusText().contains(QStringLiteral("syntax")));
        QCOMPARE(m_buckets->lifecycle(m_bucket)->size(), 1);

        // Tags
        auto* tagsTab = dialog.findChild<BucketTagsTab*>();
        tagsTab->editor()->addRow(QStringLiteral("owner"), QStringLiteral("ui-test"));
        tagsTab->save();
        QVERIFY(waitLoaded(dialog));
        QCOMPARE(m_buckets->tags(m_bucket)->value(QStringLiteral("owner")), QStringLiteral("ui-test"));

        // Policy: a syntax error is reported with its position and not applied.
        auto* policy = dialog.findChild<BucketPolicyTab*>();
        policy->editor()->setPlainText(QStringLiteral("{\n \"Statement\": [\n"));
        policy->validateNow();
        QVERIFY(!policy->issues().isEmpty());
        QVERIFY(policy->issues().first().error);
        QVERIFY(policy->issues().first().line >= 2);
        policy->findChild<QPushButton*>(QStringLiteral("apply"))->click();
        QVERIFY(m_buckets->policy(m_bucket)->isEmpty());

        // Statistics
        auto* stats = dialog.findChild<BucketStatisticsTab*>();
        stats->calculate();
        QVERIFY(QTest::qWaitFor([&] { return !stats->isCalculating(); }, 15000));
        QVERIFY(stats->table()->rowCount() >= 2);
    }

    void createAndDeleteFromMainWindow()
    {
        S3FM_REQUIRE_S3(m_env);
        MainWindow window(&m_registry);
        window.show();
        PanelWidget* panel = window.activePanel();
        panel->setLocation(Location::s3(QStringLiteral("it")));
        QVERIFY(QTest::qWaitFor([&] { return !panel->model()->isLoading(); }, 15000));

        const QString name =
            QStringLiteral("s3fm-ui-new-%1").arg(QUuid::createUuid().toString(QUuid::Id128).left(6));
        bool sawDialog = false;
        QTimer::singleShot(0, this, [&] {
            auto* dialog = qobject_cast<CreateBucketDialog*>(QApplication::activeModalWidget());
            if (!dialog)
                return;
            sawDialog = true;
            auto* edit = dialog->findChild<QLineEdit*>(QStringLiteral("bucketName"));
            edit->setText(QStringLiteral("Invalid_Name"));
            const bool refused = !dialog->validationMessage().isEmpty();
            edit->setText(name);
            if (refused && dialog->validationMessage().isEmpty())
                dialog->accept();
            else
                dialog->reject();
        });
        window.action(QStringLiteral("mkdir"))->trigger(); // F7 at the connection level
        QVERIFY(sawDialog);
        QVERIFY(QTest::qWaitFor([&] { return hasBucket(name); }, 15000));
        QVERIFY(QTest::qWaitFor(
            [&] {
                const auto current = panel->currentEntry();
                return current && current->name == name;
            },
            15000));

        bool sawDelete = false;
        auto acceptDelete = [&] {
            if (auto* dialog = qobject_cast<DeleteBucketDialog*>(QApplication::activeModalWidget())) {
                sawDelete = dialog->canAccept(); // empty bucket: plain confirmation
                dialog->accept();
            }
        };
        QTimer poll;
        connect(&poll, &QTimer::timeout, this, acceptDelete);
        poll.start(50);
        window.action(QStringLiteral("delete"))->trigger(); // F8 on the bucket
        QVERIFY(QTest::qWaitFor([&] { return !hasBucket(name); }, 15000));
        poll.stop();
        QVERIFY(sawDelete);
    }
};

QTEST_MAIN(TestS3BucketUi)
#include "tst_s3bucketui.moc"
