#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "providers/local/LocalProvider.h"
#include "transfer/TransferJob.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"

#include <QAction>
#include <QDir>
#include <QFile>
#include <QSignalSpy>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

class TestMainWindow : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;

    static bool waitIdle(PanelWidget* panel)
    {
        return QTest::qWaitFor([&] { return !panel->model()->isLoading(); }, 5000);
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        QCoreApplication::setOrganizationName(QStringLiteral("s3fm-tests"));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        QDir().mkpath(m_tmp.path() + QStringLiteral("/left/folder"));
        QDir().mkpath(m_tmp.path() + QStringLiteral("/right"));
        QFile f(m_tmp.path() + QStringLiteral("/left/file.txt"));
        QVERIFY(f.open(QIODevice::WriteOnly));
        f.write("payload");
    }

    void opensAndCloses()
    {
        MainWindow window(&m_registry);
        window.show();
        QVERIFY(QTest::qWaitForWindowExposed(&window));
        QVERIFY(window.leftPanel() && window.rightPanel());
        QCOMPARE(window.activePanel(), window.leftPanel());
        QVERIFY(window.action(QStringLiteral("copy")));
        QCOMPARE(window.action(QStringLiteral("copy"))->shortcut(), QKeySequence(Qt::Key_F5));
        QVERIFY(window.close());
    }

    void tabSwitchesActivePanel()
    {
        MainWindow window(&m_registry);
        window.show();
        QVERIFY(QTest::qWaitForWindowExposed(&window));
        QTest::keyClick(window.leftPanel()->view(), Qt::Key_Tab);
        QCOMPARE(window.activePanel(), window.rightPanel());
        QVERIFY(window.rightPanel()->isActive());
        QVERIFY(!window.leftPanel()->isActive());
        QTest::keyClick(window.rightPanel()->view(), Qt::Key_Tab);
        QCOMPARE(window.activePanel(), window.leftPanel());
    }

    void mouseBackForwardButtons()
    {
        MainWindow window(&m_registry);
        window.show();
        QVERIFY(QTest::qWaitForWindowExposed(&window));
        PanelWidget* right = window.rightPanel();
        const Location parent = Location::local(m_tmp.path() + QStringLiteral("/left"));
        const Location child = Location::local(m_tmp.path() + QStringLiteral("/left/folder"));
        right->setLocation(parent);
        QVERIFY(waitIdle(right));
        right->setLocation(child);
        QVERIFY(waitIdle(right));
        QCOMPARE(window.activePanel(), window.leftPanel());

        // Acts on the panel under the cursor, which becomes active.
        QTest::mouseClick(right->view()->viewport(), Qt::BackButton);
        QVERIFY(waitIdle(right));
        QCOMPARE(right->location(), parent);
        QCOMPARE(window.activePanel(), right);

        QTest::mouseClick(right->view()->viewport(), Qt::ForwardButton);
        QVERIFY(waitIdle(right));
        QCOMPARE(right->location(), child);
    }

    void copyBetweenPanels()
    {
        MainWindow window(&m_registry);
        window.show();
        window.leftPanel()->setLocation(Location::local(m_tmp.path() + QStringLiteral("/left")));
        window.rightPanel()->setLocation(Location::local(m_tmp.path() + QStringLiteral("/right")));
        QVERIFY(waitIdle(window.leftPanel()));
        QVERIFY(waitIdle(window.rightPanel()));

        Entry file =
            LocalProvider::entryFromFileInfo(QFileInfo(m_tmp.path() + QStringLiteral("/left/file.txt")));
        Entry folder =
            LocalProvider::entryFromFileInfo(QFileInfo(m_tmp.path() + QStringLiteral("/left/folder")));
        QSignalSpy done(&window, &MainWindow::transferFinished);
        TransferRequest request;
        request.sources = {file, folder};
        request.destination = Location::local(m_tmp.path() + QStringLiteral("/right"));
        request.destinationIsDirectory = true;
        TransferJob* job = window.startTransfer(request);
        QVERIFY(done.wait(5000));
        QCOMPARE(job->state(), JobState::Done);
        QVERIFY(QFileInfo::exists(m_tmp.path() + QStringLiteral("/right/file.txt")));
        QVERIFY(QFileInfo(m_tmp.path() + QStringLiteral("/right/folder")).isDir());
        QTRY_VERIFY(window.rightPanel()->model()->rowForName(QStringLiteral("file.txt")) > 0);
    }

    void resolveTargetText_data()
    {
        QTest::addColumn<QString>("text");
        QTest::addColumn<QString>("base");
        QTest::addColumn<QString>("expected");
        QTest::addColumn<bool>("isDir");
        QTest::newRow("absolute-local") << "/tmp/x" << "/home" << "file:///tmp/x" << false;
        QTest::newRow("absolute-dir") << "/tmp/x/" << "/home" << "file:///tmp/x" << true;
        QTest::newRow("relative-name") << "new.txt" << "/home/me" << "file:///home/me/new.txt" << false;
        QTest::newRow("relative-up") << "../other/" << "/home/me" << "file:///home/other" << true;
        QTest::newRow("s3-absolute") << "s3://c/b/k" << "/home" << "s3://c/b/k" << false;
        QTest::newRow("s3-relative") << "sub/name" << "s3://c/b/dir/" << "s3://c/b/dir/sub/name" << false;
        QTest::newRow("s3-relative-dir") << "sub/" << "s3://c/b/dir/" << "s3://c/b/dir/sub/" << true;
    }

    void resolveTargetText()
    {
        QFETCH(QString, text);
        QFETCH(QString, base);
        QFETCH(QString, expected);
        QFETCH(bool, isDir);
#ifdef Q_OS_WIN
        if (text.startsWith(u'/') || base.startsWith(u'/'))
            QSKIP("Unix paths");
#endif
        bool dir = false;
        const Location l = MainWindow::resolveTarget(text, Location::fromString(base), &dir);
        QCOMPARE(l.toString(), expected);
        QCOMPARE(dir, isDir);
    }

    void statePersistsAcrossWindows()
    {
        {
            MainWindow window(&m_registry);
            window.rightPanel()->setLocation(Location::local(m_tmp.path() + QStringLiteral("/right")));
            QVERIFY(waitIdle(window.rightPanel()));
            window.close();
        }
        MainWindow window(&m_registry);
        QVERIFY(waitIdle(window.rightPanel()));
        QCOMPARE(window.rightPanel()->location(), Location::local(m_tmp.path() + QStringLiteral("/right")));
    }
};

QTEST_MAIN(TestMainWindow)
#include "tst_mainwindow.moc"
