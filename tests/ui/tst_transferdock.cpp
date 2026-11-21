// Transfer UI: model consistency, dock actions, conflict and copy-option dialogs,
// and the main window's conflict prompt flow.

#include "common/MemoryProvider.h"
#include "core/ProviderRegistry.h"
#include "models/TransferModel.h"
#include "providers/local/LocalProvider.h"
#include "transfer/TransferJob.h"
#include "transfer/TransferQueue.h"
#include "ui/dialogs/ConflictDialog.h"
#include "ui/dialogs/TargetDialog.h"
#include "ui/dialogs/TransferSettingsDialog.h"
#include "ui/docks/TransferDock.h"
#include "ui/mainwindow/MainWindow.h"

#include <QAbstractItemModelTester>
#include <QAction>
#include <QApplication>
#include <QCheckBox>
#include <QComboBox>
#include <QDir>
#include <QFile>
#include <QLineEdit>
#include <QPushButton>
#include <QSpinBox>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>
#include <QTreeView>

using namespace s3fm;
using test::MemoryProvider;

namespace {

void writeFile(const QString& path, const QByteArray& data)
{
    QDir().mkpath(QFileInfo(path).absolutePath());
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}

QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}

Entry localEntry(const QString& path)
{
    return LocalProvider::entryFromFileInfo(QFileInfo(path));
}

} // namespace

class TestTransferDock : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;
    std::shared_ptr<MemoryProvider> m_mem;

    TransferRequest copyTo(const EntryList& sources, const Location& destination) const
    {
        TransferRequest r;
        r.sources = sources;
        r.destination = destination;
        r.destinationIsDirectory = true;
        return r;
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_mem = std::make_shared<MemoryProvider>(QStringLiteral("m"));
        m_mem->addBucket(QStringLiteral("b"));
        m_registry.setS3Factory([this](const QString&) -> std::shared_ptr<Provider> { return m_mem; });
        writeFile(m_tmp.filePath(QStringLiteral("src/a.txt")), "alpha");
        writeFile(m_tmp.filePath(QStringLiteral("src/d/b.txt")), "bravo");
        writeFile(m_tmp.filePath(QStringLiteral("src/d/c.txt")), "charlie");
    }

    void modelAndDockFollowTheQueue()
    {
        TransferQueue queue(&m_registry);
        TransferSettings s;
        s.maxJobs = 1;
        s.retryBaseDelayMs = 1;
        s.maxRetries = 0;
        queue.setSettings(s);
        TransferDock dock(&queue);
        QAbstractItemModelTester tester(dock.model(), QAbstractItemModelTester::FailureReportingMode::QtTest);

        m_mem->failUploads = true;
        TransferJob* failing = queue.enqueue(
            copyTo({localEntry(m_tmp.filePath(QStringLiteral("src/d")))}, m_mem->loc(QStringLiteral("b"))));
        TransferJob* second = queue.enqueue(copyTo({localEntry(m_tmp.filePath(QStringLiteral("src/a.txt")))},
                                                   m_mem->loc(QStringLiteral("b"), QStringLiteral("x/"))));
        QCOMPARE(dock.model()->rowCount(), 2);
        QVERIFY(QTest::qWaitFor([&] { return failing->isFinished() && second->isFinished(); }, 5000));
        QCOMPARE(failing->state(), JobState::Failed);
        QCOMPARE(second->state(), JobState::Failed);

        // Failed items appear as child rows.
        const QModelIndex row = dock.model()->indexOf(failing);
        QCOMPARE(dock.model()->rowCount(row), 2);
        const QModelIndex child = dock.model()->index(0, TransferModel::StatusColumn, row);
        QCOMPARE(child.data().toString(), QStringLiteral("uploads disabled"));
        QVERIFY(child.data(TransferModel::FailureRole).toBool());
        QCOMPARE(dock.model()->jobAt(child), failing);

        // Actions follow the current job.
        dock.view()->setCurrentIndex(row);
        QVERIFY(dock.action(QStringLiteral("retry"))->isEnabled());
        QVERIFY(!dock.action(QStringLiteral("pause"))->isEnabled());
        QVERIFY(!dock.action(QStringLiteral("moveUp"))->isEnabled());
        QVERIFY(dock.action(QStringLiteral("moveDown"))->isEnabled());

        // Reorder, then retry with the cause fixed: child rows go away.
        dock.action(QStringLiteral("moveDown"))->trigger();
        QCOMPARE(queue.indexOf(failing), 1);
        QCOMPARE(dock.model()->indexOf(failing).row(), 1);
        m_mem->failUploads = false;
        dock.view()->setCurrentIndex(dock.model()->indexOf(failing));
        dock.action(QStringLiteral("retry"))->trigger();
        QVERIFY(QTest::qWaitFor([&] { return failing->state() == JobState::Done; }, 5000));
        QCOMPARE(dock.model()->rowCount(dock.model()->indexOf(failing)), 0);
        QCOMPARE(
            dock.model()->index(1, TransferModel::ProgressColumn).data(TransferModel::ProgressRole).toInt(),
            100);
        QVERIFY(dock.action(QStringLiteral("clearFinished"))->isEnabled());

        // Removing works for finished jobs; clear removes the done one.
        queue.remove(second);
        QCOMPARE(dock.model()->rowCount(), 1);
        dock.action(QStringLiteral("clearFinished"))->trigger();
        QCOMPARE(dock.model()->rowCount(), 0);
    }

    void pausedJobActions()
    {
        TransferQueue queue(&m_registry);
        TransferDock dock(&queue);
        m_mem->uploadDelayMs = 1000;
        TransferJob* job = queue.enqueue(copyTo({localEntry(m_tmp.filePath(QStringLiteral("src/a.txt")))},
                                                m_mem->loc(QStringLiteral("b"), QStringLiteral("p/"))));
        dock.view()->setCurrentIndex(dock.model()->indexOf(job));
        QVERIFY(dock.action(QStringLiteral("pause"))->isEnabled());
        dock.action(QStringLiteral("pause"))->trigger();
        QVERIFY(QTest::qWaitFor([&] { return job->state() == JobState::Paused; }, 3000));
        QVERIFY(dock.action(QStringLiteral("resume"))->isEnabled());
        QVERIFY(dock.action(QStringLiteral("resumeAll"))->isEnabled());
        QCOMPARE(dock.model()->index(0, TransferModel::StatusColumn).data().toString(),
                 QStringLiteral("Paused"));
        m_mem->uploadDelayMs = 0;
        dock.action(QStringLiteral("resume"))->trigger();
        QVERIFY(QTest::qWaitFor([&] { return job->state() == JobState::Done; }, 3000));
        QVERIFY(dock.windowTitle() == QStringLiteral("Transfers"));
    }

    void conflictDialogAnswers()
    {
        ConflictInfo info;
        info.source.name = QStringLiteral("a.txt");
        info.source.size = 5;
        info.destination.name = QStringLiteral("a.txt");
        info.destination.size = 3;
        ConflictDialog dialog(info);
        dialog.findChild<QCheckBox*>()->setChecked(true);
        dialog.findChild<QPushButton*>(QStringLiteral("rename"))->click();
        QCOMPARE(dialog.answer().policy, ConflictPolicy::Rename);
        QVERIFY(dialog.answer().applyToAll);
        QVERIFY(!dialog.answer().cancel);

        ConflictDialog second(info);
        second.findChild<QPushButton*>(QStringLiteral("cancel"))->click();
        QCOMPARE(second.result(), int(QDialog::Rejected));
    }

    void targetDialogOptions()
    {
        TargetDialog dialog(QStringLiteral("Copy"), QStringLiteral("Copy to:"), QStringLiteral("/tmp/x/"));
        TransferOptions in;
        in.conflict = ConflictPolicy::OverwriteIfNewer;
        in.include = {QStringLiteral("*.jpg"), QStringLiteral("*.png")};
        in.verify = false;
        dialog.setOptions(in);
        QCOMPARE(dialog.findChild<QLineEdit*>(QStringLiteral("include"))->text(),
                 QStringLiteral("*.jpg; *.png"));
        dialog.findChild<QLineEdit*>(QStringLiteral("exclude"))->setText(QStringLiteral("tmp; *.bak"));
        const TransferOptions out = dialog.options();
        QCOMPARE(out.conflict, ConflictPolicy::OverwriteIfNewer);
        QCOMPARE(out.include, in.include);
        QCOMPARE(out.exclude, QStringList({QStringLiteral("tmp"), QStringLiteral("*.bak")}));
        QVERIFY(!out.verify);
        QCOMPARE(dialog.target(), QStringLiteral("/tmp/x/"));
    }

    void settingsDialogRoundTrip()
    {
        TransferSettings s;
        s.maxJobs = 3;
        s.bandwidthLimit = 2048 * 1024;
        TransferSettingsDialog dialog(s);
        QCOMPARE(dialog.findChild<QSpinBox*>(QStringLiteral("bandwidth"))->value(), 2048);
        dialog.findChild<QSpinBox*>(QStringLiteral("maxJobs"))->setValue(5);
        QCOMPARE(dialog.settings().maxJobs, 5);
        QCOMPARE(dialog.settings().bandwidthLimit, qint64(2048 * 1024));
    }

    void mainWindowAsksAboutConflicts()
    {
        const QString dst = m_tmp.filePath(QStringLiteral("dst"));
        writeFile(dst + QStringLiteral("/a.txt"), "old");
        MainWindow window(&m_registry);
        window.show();
        int prompts = 0;
        QTimer timer;
        connect(&timer, &QTimer::timeout, &window, [&] {
            if (auto* dialog = qobject_cast<ConflictDialog*>(QApplication::activeModalWidget())) {
                ++prompts;
                dialog->findChild<QPushButton*>(QStringLiteral("overwrite"))->click();
            }
        });
        timer.start(20);
        TransferJob* job = window.startTransfer(
            copyTo({localEntry(m_tmp.filePath(QStringLiteral("src/a.txt")))}, Location::local(dst)));
        QVERIFY(window.transferDock()->isVisible());
        QVERIFY(QTest::qWaitFor([&] { return job->isFinished(); }, 5000));
        QCOMPARE(job->state(), JobState::Done);
        QCOMPARE(prompts, 1);
        QCOMPARE(readFile(dst + QStringLiteral("/a.txt")), QByteArray("alpha"));
    }
};

QTEST_MAIN(TestTransferDock)
#include "tst_transferdock.moc"
