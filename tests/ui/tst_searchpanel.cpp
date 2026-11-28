// Search results in a panel (task 10.1): the virtual results listing, history, stopping,
// the Find Files dialog, and pruning results after deletes.

#include "common/MemoryProvider.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "models/EntrySortProxy.h"
#include "providers/local/LocalProvider.h"
#include "transfer/TransferJob.h"
#include "ui/dialogs/SearchDialog.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelView.h"
#include "ui/panel/PanelWidget.h"

#include <QAction>
#include <QComboBox>
#include <QDir>
#include <QFile>
#include <QLabel>
#include <QLineEdit>
#include <QSignalSpy>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QThread>

using namespace s3fm;
using test::MemoryProvider;

namespace {

// Listings take a while, so a search can be stopped half-way.
class SlowProvider : public MemoryProvider
{
public:
    using MemoryProvider::MemoryProvider;
    Result<ListPage> list(const Location& dir, const QString& token, OperationContext& ctx) override
    {
        QThread::msleep(30);
        return MemoryProvider::list(dir, token, ctx);
    }
};

QStringList names(PanelWidget& panel)
{
    QStringList out;
    for (int r = 0; r < panel.proxy()->rowCount(); ++r)
        out.push_back(panel.proxy()->index(r, 0).data().toString());
    out.sort();
    return out;
}

void touch(const QString& path)
{
    QDir().mkpath(QFileInfo(path).path());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write("data");
}

} // namespace

class TestSearchPanel : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;
    std::shared_ptr<SlowProvider> m_slow;

    QString root() const { return m_tmp.path(); }

    static bool waitIdle(PanelWidget& panel)
    {
        return QTest::qWaitFor([&] { return !panel.model()->isLoading() && !panel.isSearching(); }, 10000);
    }

    static void setCurrent(PanelWidget& panel, const QString& display)
    {
        for (int r = 0; r < panel.proxy()->rowCount(); ++r) {
            const QModelIndex idx = panel.proxy()->index(r, 0);
            if (idx.data().toString() == display) {
                panel.view()->selectionModel()->setCurrentIndex(idx, QItemSelectionModel::NoUpdate);
                return;
            }
        }
        QFAIL(qPrintable(QStringLiteral("no row %1").arg(display)));
    }

    static QString status(PanelWidget& panel)
    {
        return panel.findChild<QLabel*>(QStringLiteral("status"))->text();
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        qRegisterMetaType<TransferJob*>();
        QCoreApplication::setOrganizationName(QStringLiteral("s3fm-tests"));
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_slow = std::make_shared<SlowProvider>(QStringLiteral("slow"));
        m_slow->addBucket(QStringLiteral("b"));
        for (int i = 0; i < 40; ++i)
            m_slow->put(QStringLiteral("b"), QStringLiteral("d%1/f%1.txt").arg(i), "x");
        m_registry.setS3Factory([this](const QString& id) -> std::shared_ptr<Provider> {
            return id == u"slow" ? m_slow : nullptr;
        });
    }

    void init()
    {
        QDir(root()).removeRecursively();
        QDir().mkpath(root());
        touch(root() + QStringLiteral("/top.log"));
        touch(root() + QStringLiteral("/readme.txt"));
        touch(root() + QStringLiteral("/a/one.log"));
        touch(root() + QStringLiteral("/a/b/two.log"));
        touch(root() + QStringLiteral("/c/three.txt"));
    }

    void resultsAreVirtualListing()
    {
        PanelWidget panel(&m_registry);
        panel.setLocation(Location::local(root()));
        QVERIFY(waitIdle(panel));
        QSignalSpy locationSpy(&panel, &PanelWidget::locationChanged);

        SearchCriteria c;
        c.pattern = QStringLiteral("*.log");
        panel.startSearch(Location::local(root()), c);
        QVERIFY(panel.isSearchResults());
        QVERIFY(waitIdle(panel));
        QCOMPARE(names(panel), QStringList({QStringLiteral(".."), QStringLiteral("a/b/two.log"),
                                            QStringLiteral("a/one.log"), QStringLiteral("top.log")}));
        QCOMPARE(panel.location(), Location::local(root()));
        QVERIFY(!locationSpy.isEmpty());
        QVERIFY2(status(panel).contains(QStringLiteral("3 file")), qPrintable(status(panel)));
        QVERIFY(panel.findChild<QFrame*>(QStringLiteral("searchBar"))->isVisibleTo(&panel));

        // Operations get the real entries.
        setCurrent(panel, QStringLiteral("a/b/two.log"));
        const auto current = panel.currentEntry();
        QVERIFY(current);
        QCOMPARE(current->name, QStringLiteral("two.log"));
        QCOMPARE(current->location, Location::local(root() + QStringLiteral("/a/b/two.log")));

        // Refresh (e.g. after any transfer) keeps the results.
        panel.refresh();
        QVERIFY(panel.isSearchResults());
        QCOMPARE(names(panel).size(), 4);

        // The quick filter works on the shown paths.
        panel.proxy()->setQuickFilter(QStringLiteral("a/"));
        QCOMPARE(names(panel), QStringList({QStringLiteral(".."), QStringLiteral("a/b/two.log"),
                                            QStringLiteral("a/one.log")}));
        panel.proxy()->setQuickFilter({});
    }

    void historyAndNavigation()
    {
        PanelWidget panel(&m_registry);
        panel.setLocation(Location::local(root() + QStringLiteral("/c")));
        QVERIFY(waitIdle(panel));
        SearchCriteria c;
        c.pattern = QStringLiteral("*.log");
        panel.startSearch(Location::local(root()), c);
        QVERIFY(waitIdle(panel));

        // ".." (Backspace) leaves the results for the folder that was searched.
        QTest::keyClick(panel.view(), Qt::Key_Backspace);
        QVERIFY(waitIdle(panel));
        QVERIFY(!panel.isSearchResults());
        QCOMPARE(panel.location(), Location::local(root()));
        QVERIFY(names(panel).contains(QStringLiteral("readme.txt")));
        QVERIFY(!panel.findChild<QFrame*>(QStringLiteral("searchBar"))->isVisibleTo(&panel));

        // Back returns to the results, from the cache (the file added meanwhile is not found).
        touch(root() + QStringLiteral("/new.log"));
        panel.goBack();
        QVERIFY(panel.isSearchResults());
        QCOMPARE(names(panel).size(), 4);
        // Back again: where the search started.
        panel.goBack();
        QVERIFY(waitIdle(panel));
        QVERIFY(!panel.isSearchResults());
        QCOMPARE(panel.location(), Location::local(root() + QStringLiteral("/c")));
        panel.goForward();
        QVERIFY(panel.isSearchResults());

        // Ctrl+R equivalent: search again finds the new file.
        panel.rerunSearch();
        QVERIFY(waitIdle(panel));
        QVERIFY(names(panel).contains(QStringLiteral("new.log")));

        // Opening a found folder navigates into it; Back returns to the results.
        c.pattern = QStringLiteral("b");
        c.includeFiles = false;
        panel.startSearch(Location::local(root()), c);
        QVERIFY(waitIdle(panel));
        QCOMPARE(names(panel), QStringList({QStringLiteral(".."), QStringLiteral("a/b")}));
        setCurrent(panel, QStringLiteral("a/b"));
        QTest::keyClick(panel.view(), Qt::Key_Return);
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(root() + QStringLiteral("/a/b")));
        panel.goBack();
        QVERIFY(panel.isSearchResults());
        QCOMPARE(names(panel), QStringList({QStringLiteral(".."), QStringLiteral("a/b")}));

        // Go to the containing folder of a result, with the file current.
        c = {};
        c.pattern = QStringLiteral("two.log");
        panel.startSearch(Location::local(root()), c);
        QVERIFY(waitIdle(panel));
        setCurrent(panel, QStringLiteral("a/b/two.log"));
        panel.revealEntry(*panel.currentEntry());
        QVERIFY(waitIdle(panel));
        QCOMPARE(panel.location(), Location::local(root() + QStringLiteral("/a/b")));
        QCOMPARE(panel.currentEntry()->name, QStringLiteral("two.log"));
    }

    void stopAndEscape()
    {
        PanelWidget panel(&m_registry);
        const Location bucket = Location::s3(QStringLiteral("slow"), QStringLiteral("b"));
        panel.startSearch(bucket, SearchCriteria{});
        QVERIFY(panel.isSearching());
        QVERIFY(QTest::qWaitFor([&] { return panel.model()->entryCount() >= 4; }, 5000));
        QVERIFY(status(panel).contains(QStringLiteral("searching")));
        QTest::keyClick(&panel, Qt::Key_Escape);
        QVERIFY(QTest::qWaitFor([&] { return !panel.isSearching(); }, 5000));
        QVERIFY(panel.isSearchResults());
        QVERIFY2(status(panel).contains(QStringLiteral("stopped")), qPrintable(status(panel)));
        QVERIFY(panel.model()->entryCount() < 80);

        // Leaving while searching stops the search; the partial results come back with Back.
        panel.rerunSearch();
        QVERIFY(QTest::qWaitFor([&] { return panel.model()->entryCount() >= 2; }, 5000));
        panel.setLocation(Location::local(root()));
        QVERIFY(!panel.isSearching());
        QVERIFY(waitIdle(panel));
        panel.goBack();
        QVERIFY(panel.isSearchResults());
        QVERIFY(!panel.isSearching());
        QVERIFY(status(panel).contains(QStringLiteral("stopped")));
    }

    void dialogCriteria()
    {
        SearchCriteria initial;
        initial.pattern = QStringLiteral("*.png");
        initial.minSize = 2048;
        initial.storageClasses = {QStringLiteral("GLACIER")};
        initial.maxResults = 500;
        SearchDialog dialog(Location::s3(QStringLiteral("c"), QStringLiteral("b")), initial);
        QVERIFY(dialog.isInputValid());
        QCOMPARE(dialog.criteria(), initial);

        auto* pattern = dialog.findChild<QLineEdit*>(QStringLiteral("pattern"));
        auto* syntax = dialog.findChild<QComboBox*>(QStringLiteral("syntax"));
        auto* minSize = dialog.findChild<QLineEdit*>(QStringLiteral("minSize"));
        auto* maxSize = dialog.findChild<QLineEdit*>(QStringLiteral("maxSize"));
        auto* prefix = dialog.findChild<QLineEdit*>(QStringLiteral("prefix"));
        auto* error = dialog.findChild<QLabel*>(QStringLiteral("error"));

        syntax->setCurrentIndex(syntax->findData(int(SearchCriteria::Syntax::RegularExpression)));
        pattern->setText(QStringLiteral("(oops"));
        QVERIFY(!dialog.isInputValid());
        QVERIFY(!error->text().isEmpty());
        pattern->setText(QStringLiteral(R"(_p\d+\.png$)"));
        QVERIFY(dialog.isInputValid());

        minSize->setText(QStringLiteral("lots"));
        QVERIFY(!dialog.isInputValid());
        minSize->setText(QStringLiteral("2 MB"));
        maxSize->setText(QStringLiteral("1 MB"));
        QVERIFY(!dialog.isInputValid());
        maxSize->setText(QStringLiteral("1 GB"));
        QVERIFY(dialog.isInputValid());

        prefix->setText(QStringLiteral("/nubook/0105"));
        const SearchCriteria c = dialog.criteria();
        QCOMPARE(c.pathPrefix, QStringLiteral("nubook/0105"));
        QCOMPARE(c.minSize, qint64(2) * 1024 * 1024);
        QCOMPARE(c.maxSize, qint64(1024) * 1024 * 1024);
        QCOMPARE(c.syntax, SearchCriteria::Syntax::RegularExpression);
        prefix->setText(QStringLiteral("../up"));
        QVERIFY(!dialog.isInputValid());

        // Local folders: no storage classes.
        SearchDialog local(Location::local(root()), initial);
        QVERIFY(local.criteria().storageClasses.isEmpty());
    }

    void deleteRemovesResults()
    {
        MainWindow window(&m_registry);
        PanelWidget* panel = window.leftPanel();
        panel->setLocation(Location::local(root()));
        QVERIFY(waitIdle(*panel));
        SearchCriteria c;
        c.pattern = QStringLiteral("*.log");
        panel->startSearch(Location::local(root()), c);
        QVERIFY(waitIdle(*panel));
        QCOMPARE(panel->model()->entryCount(), 3);

        // Deleting folder "a" (from anywhere) drops the results inside it.
        Entry folder;
        folder.name = QStringLiteral("a");
        folder.type = Entry::Type::Directory;
        folder.location = Location::local(root() + QStringLiteral("/a"));
        TransferRequest request;
        request.kind = TransferKind::Delete;
        request.sources = {folder};
        QSignalSpy done(&window, &MainWindow::transferFinished);
        window.startTransfer(request);
        QVERIFY(done.wait(10000));
        QVERIFY(panel->isSearchResults());
        QCOMPARE(names(*panel), QStringList({QStringLiteral(".."), QStringLiteral("top.log")}));

        // Actions that need a real folder refuse politely.
        window.setActivePanel(panel);
        window.action(QStringLiteral("mkdir"))->trigger();
        QVERIFY(!QDir(root()).exists(QStringLiteral("New Folder")));
        QVERIFY(window.action(QStringLiteral("findFiles")));
        QCOMPARE(window.action(QStringLiteral("findFiles"))->shortcut(), QKeySequence(Qt::ALT | Qt::Key_F7));
    }
};

QTEST_MAIN(TestSearchPanel)
#include "tst_searchpanel.moc"
