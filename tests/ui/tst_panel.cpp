#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "models/EntrySortProxy.h"
#include "providers/local/LocalProvider.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"

#include <QDir>
#include <QFile>
#include <QSignalSpy>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

class TestPanel : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;

    static bool waitIdle(PanelWidget& panel)
    {
        return QTest::qWaitFor([&] { return !panel.model()->isLoading(); }, 5000);
    }

    static QString currentName(PanelWidget& panel)
    {
        return panel.view()->currentIndex().siblingAtColumn(0).data(EntryListModel::SortRole).toString();
    }

    static void setCurrent(PanelWidget& panel, const QString& name)
    {
        for (int r = 0; r < panel.proxy()->rowCount(); ++r) {
            const QModelIndex idx = panel.proxy()->index(r, 0);
            if (idx.data(EntryListModel::SortRole).toString() == name) {
                panel.view()->selectionModel()->setCurrentIndex(idx, QItemSelectionModel::NoUpdate);
                return;
            }
        }
        QFAIL(qPrintable(QStringLiteral("no row named %1").arg(name)));
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        QDir().mkpath(m_tmp.path() + QStringLiteral("/alpha/inner"));
        QDir().mkpath(m_tmp.path() + QStringLiteral("/beta"));
        for (const char* name : {"one.txt", "two.txt", "three.txt"}) {
            QFile f(m_tmp.path() + u'/' + QLatin1String(name));
            QVERIFY(f.open(QIODevice::WriteOnly));
            f.write("data");
        }
    }

    void enterAndBackspaceNavigate()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        panel.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitIdle(panel));
        QCOMPARE(currentName(panel), QStringLiteral("..")); // first row

        setCurrent(panel, QStringLiteral("alpha"));
        QTest::keyClick(panel.view(), Qt::Key_Return);
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(m_tmp.path() + QStringLiteral("/alpha")));

        QTest::keyClick(panel.view(), Qt::Key_Backspace);
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(m_tmp.path()));
        QCOMPARE(currentName(panel), QStringLiteral("alpha")); // came from there

        // History
        QVERIFY(panel.canGoBack());
        panel.goBack();
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(m_tmp.path() + QStringLiteral("/alpha")));
        panel.goForward();
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(m_tmp.path()));
    }

    void insertSpaceAndCursorSelection()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        panel.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitIdle(panel));
        setCurrent(panel, QStringLiteral("one.txt"));

        QTest::keyClick(panel.view(), Qt::Key_Insert); // select one.txt, move to next
        QCOMPARE(panel.selectedEntries().size(), 1);
        QCOMPARE(panel.selectedEntries().first().name, QStringLiteral("one.txt"));
        QCOMPARE(currentName(panel), QStringLiteral("three.txt"));

        QTest::keyClick(panel.view(), Qt::Key_Down); // cursor moves, selection stays
        QCOMPARE(panel.selectedEntries().size(), 1);
        QCOMPARE(currentName(panel), QStringLiteral("two.txt"));

        QTest::keyClick(panel.view(), Qt::Key_Space); // toggle in place
        QCOMPARE(panel.selectedEntries().size(), 2);
        QCOMPARE(currentName(panel), QStringLiteral("two.txt"));

        QTest::keyClick(panel.view(), Qt::Key_Space);
        QCOMPARE(panel.selectedEntries().size(), 1);

        // target = selection; without selection = current item
        QCOMPARE(panel.targetEntries().first().name, QStringLiteral("one.txt"));
        panel.deselectAll();
        QCOMPARE(panel.targetEntries().first().name, QStringLiteral("two.txt"));
    }

    void parentRowNeverSelected()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        panel.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitIdle(panel));
        panel.selectAll();
        const EntryList sel = panel.selectedEntries();
        QCOMPARE(sel.size(), 5); // alpha, beta, 3 files; no ".."
        for (const Entry& e : sel)
            QVERIFY(e.name != u"..");
        setCurrent(panel, QStringLiteral(".."));
        panel.deselectAll();
        QVERIFY(panel.targetEntries().isEmpty());
        panel.invertSelection();
        QCOMPARE(panel.selectedEntries().size(), 5);
    }

    void tabRequestsPanelSwitch()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        QSignalSpy spy(&panel, &PanelWidget::switchPanelRequested);
        QTest::keyClick(panel.view(), Qt::Key_Tab);
        QCOMPARE(spy.size(), 1);
    }

    void openFileEmitsSignal()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        panel.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitIdle(panel));
        QSignalSpy spy(&panel, &PanelWidget::openFileRequested);
        setCurrent(panel, QStringLiteral("two.txt"));
        QTest::keyClick(panel.view(), Qt::Key_Return);
        QCOMPARE(spy.size(), 1);
        QCOMPARE(spy.first().first().value<Entry>().name, QStringLiteral("two.txt"));
    }

    void badLocationShowsErrorAndStays()
    {
        PanelWidget panel(&m_registry);
        panel.show();
        panel.setLocation(Location::local(m_tmp.path()));
        QVERIFY(waitIdle(panel));
        panel.setLocation(Location::local(m_tmp.path() + QStringLiteral("/missing")));
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(m_tmp.path()));
    }
};

QTEST_MAIN(TestPanel)
#include "tst_panel.moc"
