#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"
#include "core/Async.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "providers/s3/AwsSdk.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3RootProvider.h"
#include "providers/s3/S3Session.h"
#include "transfer/TransferQueue.h"
#include "transfer/TransferStore.h"
#include "ui/I18n.h"
#include "ui/mainwindow/MainWindow.h"

#include <QAction>
#include <QApplication>
#include <QIcon>
#include <QSettings>
#include <QStandardPaths>
#include <QThreadPool>
#include <QTimer>

int main(int argc, char* argv[])
{
    // Must outlive every S3 client; declared first so it is destroyed last.
    s3fm::AwsSdkGuard awsSdk;

    QApplication app(argc, argv);
    QApplication::setOrganizationName(QStringLiteral("s3fm"));
    QApplication::setApplicationName(QStringLiteral("S3 File Manager"));
    QApplication::setApplicationVersion(QStringLiteral(S3FM_VERSION));
    QApplication::setDesktopFileName(QStringLiteral("io.github.huycn.s3fm"));
    QApplication::setWindowIcon(QIcon(QStringLiteral(":/icons/app.svg")));
    s3fm::installTranslations(app, s3fm::uiLocale()); // before any widget or string is created

    s3fm::ProviderRegistry registry;
    registry.setLocalProvider(std::make_shared<s3fm::LocalProvider>());

    s3fm::ConnectionStore connections(std::make_shared<s3fm::KeychainSecretStore>());
    connections.load();
    QObject::connect(&connections, &s3fm::ConnectionStore::profileInvalidated, &app,
                     [&registry](const QString& id) { registry.invalidateConnection(id); });
    registry.setS3RootProvider(std::make_shared<s3fm::S3RootProvider>(&connections));
    registry.setS3Factory([&connections](const QString& id) -> std::shared_ptr<s3fm::Provider> {
        auto profile = connections.profile(id);
        if (!profile)
            return nullptr;
        auto session = std::make_shared<s3fm::S3Session>(
            *profile, [&connections, id] { return connections.secret(id); });
        session->setSseKeyFetcher(
            [&connections, id](const QString& bucket) { return connections.sseCustomerKey(id, bucket); });
        return std::make_shared<s3fm::S3Provider>(session);
    });

    // Transfer queue; unfinished jobs are kept below the app data dir and resumed.
    s3fm::TransferQueue transfers(&registry);
    {
        QSettings settings;
        s3fm::TransferSettings ts;
        ts.load(settings);
        transfers.setSettings(ts);
    }
    transfers.setStore(std::make_shared<s3fm::TransferStore>(
        QStandardPaths::writableLocation(QStandardPaths::AppDataLocation) + QStringLiteral("/transfers")));

    int rc = 0;
    {
        s3fm::MainWindow window(&registry, &connections, &transfers);
        window.show();
        window.restoreTransfers();
        // Developer aid: S3FM_SCREENSHOT=<file.png> saves a screenshot after startup and quits.
        const QString screenshot = qEnvironmentVariable("S3FM_SCREENSHOT");
        if (!screenshot.isEmpty()) {
            // S3FM_SCREENSHOT_DIALOG=<action id> (e.g. connections, settings) triggers that action
            // and captures the dialog it opens instead of the main window.
            QAction* dialog = window.action(qEnvironmentVariable("S3FM_SCREENSHOT_DIALOG"));
            QTimer::singleShot(1500, &window, [&window, screenshot, dialog] {
                if (!dialog) {
                    window.grab().save(screenshot);
                    QApplication::quit();
                    return;
                }
                QTimer::singleShot(800, &window, [screenshot] {
                    if (QWidget* modal = QApplication::activeModalWidget())
                        modal->grab().save(screenshot);
                    QApplication::exit();
                });
                dialog->trigger();
            });
        }
        rc = QApplication::exec();
    }

    // Drain background work before providers and the AWS SDK go away.
    transfers.shutdown();
    s3fm::transferThreadPool()->waitForDone();
    s3fm::shutdownIoThreadPool();
    registry.clear();
    return rc;
}
