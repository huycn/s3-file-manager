// Comparing the two panels (task 10.2): marks in the comparison column, selection of what
// is missing or newer, status line, clearing when a listing changes, the options dialog.

#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "models/EntrySortProxy.h"
#include "providers/local/LocalProvider.h"
#include "ui/dialogs/CompareDialog.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"

#include <QAction>
#include <QCheckBox>
#include <QDir>
#include <QFile>
#include <QHeaderView>
#include <QLabel>
#include <QSettings>
#include <QSignalSpy>
#include <QSpinBox>
#include <QStandardItemModel>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QTreeView>

using namespace s3fm;

namespace {

const QDateTime kT0 = QDateTime(QDate(2026, 1, 1), QTime(12, 0), QTimeZone::UTC);

void write(const QString& path, const QByteArray& data, int secs)
{
    QDir().mkpath(QFileInfo(path).path());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
    f.flush(); // or closing would set the time again
    QVERIFY(f.setFileTime(kT0.addSecs(secs), QFileDevice::FileModificationTime));
}

bool waitIdle(PanelWidget& panel)
{
    return QTest::qWaitFor([&] { return !panel.model()->isLoading(); }, 10000);
}

QString status(PanelWidget& panel)
{
    return panel.findChild<QLabel*>(QStringLiteral("status"))->text();
}

QStringList selectedNames(PanelWidget& panel)
{
    QStringList out;
    for (const Entry& e : panel.selectedEntries())
        out.push_back(e.name);
    out.sort();
    return out;
}

// Comparison column text per name.
QMap<QString, QString> marks(PanelWidget& panel)
{
    QMap<QString, QString> out;
    for (int r = 0; r < panel.proxy()->rowCount(); ++r) {
        const QString text = panel.proxy()->index(r, EntryListModel::CompareColumn).data().toString();
        if (!text.isEmpty())
            out.insert(panel.proxy()->index(r, 0).data().toString(), text);
    }
    return out;
}

} // namespace

class TestComparePanel : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;

    QString left() const { return m_tmp.filePath(QStringLiteral("left")); }
    QString right() const { return m_tmp.filePath(QStringLiteral("right")); }

    bool compare(MainWindow& window, const CompareOptions& options = {})
    {
        QSignalSpy done(&window, &MainWindow::compareFinished);
        window.comparePanelsWith(options);
        return done.wait(10000) || done.count() == 1;
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        QCoreApplication::setOrganizationName(QStringLiteral("s3fm-tests"));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
    }

    void init()
    {
        QDir(left()).removeRecursively();
        QDir(right()).removeRecursively();
        write(left() + QStringLiteral("/same.txt"), "same", 0);
        write(right() + QStringLiteral("/same.txt"), "same", 500); // same content, other time
        write(left() + QStringLiteral("/changed.txt"), "new!", 1000);
        write(right() + QStringLiteral("/changed.txt"), "old.", 0); // same size, older
        write(left() + QStringLiteral("/only-left.txt"), "l", 0);
        write(right() + QStringLiteral("/only-right.txt"), "r", 0);
        write(left() + QStringLiteral("/both/x"), "x", 0);
        write(right() + QStringLiteral("/both/y"), "y", 0);
        write(left() + QStringLiteral("/sub/z"), "z", 0);
    }

    void marksAndSelection()
    {
        MainWindow window(&m_registry);
        PanelWidget& l = *window.leftPanel();
        PanelWidget& r = *window.rightPanel();
        l.setLocation(Location::local(left()));
        r.setLocation(Location::local(right()));
        QVERIFY(waitIdle(l));
        QVERIFY(waitIdle(r));
        QVERIFY(l.view()->isColumnHidden(EntryListModel::CompareColumn));

        QVERIFY(compare(window));
        QVERIFY(!l.view()->isColumnHidden(EntryListModel::CompareColumn));
        QVERIFY(!r.view()->isColumnHidden(EntryListModel::CompareColumn));
        const QMap<QString, QString> lm = marks(l);
        QCOMPARE(lm.value(QStringLiteral("same.txt")), QStringLiteral("identical"));
        QCOMPARE(lm.value(QStringLiteral("changed.txt")), QStringLiteral("newer"));
        QCOMPARE(lm.value(QStringLiteral("only-left.txt")), QStringLiteral("only here"));
        QCOMPARE(lm.value(QStringLiteral("sub")), QStringLiteral("only here"));
        QVERIFY(!lm.contains(QStringLiteral("both")));
        const QMap<QString, QString> rm = marks(r);
        QCOMPARE(rm.value(QStringLiteral("changed.txt")), QStringLiteral("older"));
        QCOMPARE(rm.value(QStringLiteral("only-right.txt")), QStringLiteral("only here"));

        QCOMPARE(selectedNames(l), QStringList({QStringLiteral("changed.txt"), QStringLiteral("only-left.txt"),
                                                QStringLiteral("sub")}));
        QCOMPARE(selectedNames(r), QStringList({QStringLiteral("only-right.txt")}));
        QVERIFY2(status(l).contains(QStringLiteral("compared: 2 only here, 1 newer, 1 identical")),
                 qPrintable(status(l)));
        QVERIFY2(status(r).contains(QStringLiteral("compared: 1 only here, 1 older, 1 identical")),
                 qPrintable(status(r)));

        // Tooltip and colour of the comparison column.
        for (int row = 0; row < l.proxy()->rowCount(); ++row) {
            if (l.proxy()->index(row, 0).data().toString() != u"changed.txt")
                continue;
            const QModelIndex idx = l.proxy()->index(row, EntryListModel::CompareColumn);
            QVERIFY(idx.data(Qt::ToolTipRole).toString().contains(QStringLiteral("newer")));
            QCOMPARE(idx.data(Qt::ForegroundRole).value<QColor>(),
                     EntryListModel::compareColor(CompareState::Newer));
        }

        // A change in one listing clears both.
        QSignalSpy cleared(&l, &PanelWidget::compareMarksCleared);
        write(right() + QStringLiteral("/new.txt"), "n", 0);
        r.refresh();
        QVERIFY(waitIdle(r));
        QTRY_VERIFY(!r.hasCompareMarks());
        QTRY_VERIFY(!l.hasCompareMarks());
        QCOMPARE(cleared.count(), 1);
        QVERIFY(l.view()->isColumnHidden(EntryListModel::CompareColumn));
        QVERIFY(!status(l).contains(QStringLiteral("compared")));
        // The selection stays, for copying.
        QCOMPARE(selectedNames(l).size(), 3);

        // A refresh without changes keeps the marks.
        QVERIFY(compare(window));
        r.refresh();
        QVERIFY(waitIdle(r));
        QTest::qWait(50);
        QVERIFY(l.hasCompareMarks());
        QVERIFY(r.hasCompareMarks());

        // Navigating clears them.
        l.goUp();
        QVERIFY(waitIdle(l));
        QTRY_VERIFY(!l.hasCompareMarks());
        QTRY_VERIFY(!r.hasCompareMarks());
    }

    void optionsAndFilter()
    {
        MainWindow window(&m_registry);
        PanelWidget& l = *window.leftPanel();
        PanelWidget& r = *window.rightPanel();
        l.setLocation(Location::local(left()));
        r.setLocation(Location::local(right()));
        QVERIFY(waitIdle(l));
        QVERIFY(waitIdle(r));

        // Without content and folders: the same-content file differs by time.
        CompareOptions o;
        o.compareContent = false;
        o.includeDirectories = false;
        QVERIFY(compare(window, o));
        QMap<QString, QString> lm = marks(l);
        QCOMPARE(lm.value(QStringLiteral("same.txt")), QStringLiteral("older"));
        QCOMPARE(lm.value(QStringLiteral("changed.txt")), QStringLiteral("newer"));
        QVERIFY(!lm.contains(QStringLiteral("sub")));

        // Only rows shown are compared (quick filter).
        l.proxy()->setQuickFilter(QStringLiteral("*.txt"));
        r.proxy()->setQuickFilter(QStringLiteral("same*"));
        QVERIFY(compare(window));
        lm = marks(l);
        QCOMPARE(lm.value(QStringLiteral("changed.txt")), QStringLiteral("only here"));
        QCOMPARE(lm.value(QStringLiteral("same.txt")), QStringLiteral("identical"));
        QCOMPARE(marks(r).size(), 1);
    }

    void dialogAndSettings()
    {
        CompareOptions o;
        o.compareTime = false;
        o.timeToleranceSecs = 7;
        o.compareContent = false;
        CompareDialog dialog(o);
        auto* time = dialog.findChild<QCheckBox*>(QStringLiteral("compareTime"));
        auto* tolerance = dialog.findChild<QSpinBox*>(QStringLiteral("tolerance"));
        QVERIFY(!time->isChecked());
        QVERIFY(!tolerance->isEnabled());
        QCOMPARE(dialog.options(), o);
        time->setChecked(true);
        QVERIFY(tolerance->isEnabled());
        tolerance->setValue(3);
        dialog.findChild<QCheckBox*>(QStringLiteral("includeDirectories"))->setChecked(false);
        const CompareOptions changed = dialog.options();
        QVERIFY(changed.compareTime);
        QCOMPARE(changed.timeToleranceSecs, 3);
        QVERIFY(!changed.includeDirectories);

        QSettings settings(m_tmp.filePath(QStringLiteral("s.ini")), QSettings::IniFormat);
        QCOMPARE(CompareDialog::load(settings), CompareOptions{});
        CompareDialog::save(settings, changed);
        QCOMPARE(CompareDialog::load(settings), changed);

        MainWindow window(&m_registry);
        QAction* a = window.action(QStringLiteral("comparePanels"));
        QVERIFY(a);
        QCOMPARE(a->shortcut(), QKeySequence(Qt::SHIFT | Qt::Key_F2));
    }

    // Header state saved before the comparison column existed still restores.
    void oldHeaderState()
    {
        QStandardItemModel old(0, EntryListModel::CompareColumn); // one column fewer
        QTreeView view;
        view.setModel(&old);
        view.header()->resizeSection(EntryListModel::SizeColumn, 123);
        view.setColumnHidden(EntryListModel::EtagColumn, false);
        view.setColumnHidden(EntryListModel::TypeColumn, true);
        QSettings settings(m_tmp.filePath(QStringLiteral("h.ini")), QSettings::IniFormat);
        settings.setValue(QStringLiteral("header"), view.header()->saveState());
        settings.setValue(QStringLiteral("location"), Location::local(left()).toString());

        PanelWidget panel(&m_registry);
        panel.restoreState(settings);
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.view()->header()->count(), int(EntryListModel::ColumnCount));
        QVERIFY(panel.view()->isColumnHidden(EntryListModel::TypeColumn));
        QVERIFY(panel.view()->isColumnHidden(EntryListModel::CompareColumn));
        QCOMPARE(panel.view()->header()->sectionSize(EntryListModel::SizeColumn), 123);
    }
};

QTEST_MAIN(TestComparePanel)
#include "tst_comparepanel.moc"
