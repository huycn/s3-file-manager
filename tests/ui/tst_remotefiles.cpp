#include "common/MemoryProvider.h"
#include "core/ProviderRegistry.h"
#include "providers/local/LocalProvider.h"
#include "ui/RemoteFiles.h"
#include "ui/dialogs/PropertiesDialog.h"
#include "ui/dialogs/ViewerDialog.h"

#include <QFile>
#include <QImage>
#include <QMainWindow>
#include <QSignalSpy>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using test::MemoryProvider;

namespace {
void writeFile(const QString& path, const QByteArray& data)
{
    QFile f(path);
    QVERIFY(f.open(QIODevice::WriteOnly));
    f.write(data);
}
QByteArray readFile(const QString& path)
{
    QFile f(path);
    return f.open(QIODevice::ReadOnly) ? f.readAll() : QByteArray();
}
} // namespace

class TestRemoteFiles : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    ProviderRegistry m_registry;
    std::shared_ptr<MemoryProvider> m_mem;

    Entry memEntry(const QString& key)
    {
        OperationContext ctx;
        return m_mem->stat(m_mem->loc(QStringLiteral("b"), key), ctx).value();
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        m_registry.setLocalProvider(std::make_shared<LocalProvider>());
        m_mem = std::make_shared<MemoryProvider>(QStringLiteral("mem"));
        m_mem->addBucket(QStringLiteral("b"));
        m_registry.setS3Factory([this](const QString&) { return m_mem; });
    }

    void viewerModes()
    {
        const QString text = m_tmp.filePath(QStringLiteral("t.txt"));
        writeFile(text, "hello\nworld ✓\n");
        ViewerDialog tv(text, QStringLiteral("t.txt"));
        QCOMPARE(tv.mode(), ViewerDialog::Mode::Text);
        QVERIFY(tv.text().contains(QStringLiteral("world ✓")));

        const QString bin = m_tmp.filePath(QStringLiteral("b.bin"));
        writeFile(bin, QByteArray("\x00\x01\x02\x03"
                                  "ABC",
                                  7));
        ViewerDialog bv(bin, QStringLiteral("b.bin"));
        QCOMPARE(bv.mode(), ViewerDialog::Mode::Hex);
        QVERIFY(bv.text().startsWith(QStringLiteral("00000000  00 01 02 03")));

        const QString png = m_tmp.filePath(QStringLiteral("i.png"));
        QImage image(20, 10, QImage::Format_RGB32);
        image.fill(Qt::red);
        QVERIFY(image.save(png));
        ViewerDialog iv(png, QStringLiteral("i.png"));
        QCOMPARE(iv.mode(), ViewerDialog::Mode::Image);
    }

    void textHeuristic()
    {
        QVERIFY(ViewerDialog::looksLikeText("plain ascii\n"));
        QVERIFY(ViewerDialog::looksLikeText(QStringLiteral("ünïcödé").toUtf8()));
        QVERIFY(!ViewerDialog::looksLikeText(QByteArray("a\0b", 3)));
        QVERIFY(!ViewerDialog::looksLikeText(QByteArray("\x01\x02\x03\x04\x05\x06\x07\x08", 8)));
    }

    void propertiesLocalAndRemote()
    {
        const QString file = m_tmp.filePath(QStringLiteral("p.txt"));
        writeFile(file, "12345");
        PropertiesDialog local(&m_registry, LocalProvider::entryFromFileInfo(QFileInfo(file)));
        bool hasSize = false;
        for (const auto& [label, value] : local.generalRows())
            hasSize = hasSize ||
                      (label.startsWith(QStringLiteral("Size")) && value.contains(QStringLiteral("5 bytes")));
        QVERIFY(hasSize);

        m_mem->put(QStringLiteral("b"), QStringLiteral("dir/obj.txt"), "remote");
        Entry listed; // as it comes from a listing: no metadata yet
        listed.name = QStringLiteral("obj.txt");
        listed.location = m_mem->loc(QStringLiteral("b"), QStringLiteral("dir/obj.txt"));
        ConnectionProfile profile = ConnectionProfile::fromPreset(ConnectionProfile::Preset::MinIO);
        profile.id = QStringLiteral("mem");
        PropertiesDialog remote(&m_registry, listed, profile);
        QVERIFY(remote.isLoading());
        QTRY_VERIFY(!remote.isLoading());
        QStringList labels;
        for (const auto& [label, value] : remote.generalRows())
            labels.push_back(label);
        QVERIFY(labels.contains(QStringLiteral("S3 URI:")));
        QVERIFY(labels.contains(QStringLiteral("URL:")));
        QVERIFY(labels.contains(QStringLiteral("ETag:")));
    }

    void fetchForViewing()
    {
        m_mem->put(QStringLiteral("b"), QStringLiteral("view me.txt"), "content to view");
        QMainWindow window;
        RemoteFiles remote(&m_registry, &window);
        remote.setShowViewer(false);
        QSignalSpy fetched(&remote, &RemoteFiles::fetched);
        remote.fetch(memEntry(QStringLiteral("view me.txt")), RemoteFiles::Purpose::View);
        QVERIFY(fetched.wait(5000));
        const QString path = fetched.first().first().toString();
        QVERIFY(path.endsWith(QStringLiteral("/view me.txt")));
        QCOMPARE(readFile(path), QByteArray("content to view"));
    }

    void editUploadsChanges()
    {
        m_mem->put(QStringLiteral("b"), QStringLiteral("edit.txt"), "original");
        QMainWindow window;
        RemoteFiles remote(&m_registry, &window);
        remote.setShowViewer(false);
        QStringList opened;
        QStringList questions;
        remote.setOpenExternally([&](const QString& p) {
            opened.push_back(p);
            return true;
        });
        remote.setConfirm([&](const QString& title, const QString&) {
            questions.push_back(title);
            return true;
        });
        QSignalSpy fetched(&remote, &RemoteFiles::fetched);
        QSignalSpy uploaded(&remote, &RemoteFiles::uploaded);
        remote.fetch(memEntry(QStringLiteral("edit.txt")), RemoteFiles::Purpose::Edit);
        QVERIFY(fetched.wait(5000));
        const QString path = fetched.first().first().toString();
        QCOMPARE(opened, QStringList{path});
        QVERIFY(!remote.hasPendingChanges());

        QTest::qWait(1100); // ensure a different mtime on coarse filesystems
        writeFile(path, "edited locally");
        QVERIFY(remote.hasPendingChanges());
        remote.checkForChanges(path);
        QVERIFY(uploaded.wait(5000));
        QCOMPARE(m_mem->get(QStringLiteral("b"), QStringLiteral("edit.txt")), QByteArray("edited locally"));
        QCOMPARE(questions, QStringList{QStringLiteral("Upload Changes")});
        QVERIFY(!remote.hasPendingChanges());
    }

    void editDetectsRemoteChange()
    {
        m_mem->put(QStringLiteral("b"), QStringLiteral("conflict.txt"), "v1");
        QMainWindow window;
        RemoteFiles remote(&m_registry, &window);
        remote.setShowViewer(false);
        remote.setOpenExternally([](const QString&) { return true; });
        QStringList questions;
        remote.setConfirm([&](const QString& title, const QString&) {
            questions.push_back(title);
            return title != QStringLiteral("Remote File Changed"); // decline overwriting
        });
        QSignalSpy fetched(&remote, &RemoteFiles::fetched);
        QSignalSpy uploaded(&remote, &RemoteFiles::uploaded);
        remote.fetch(memEntry(QStringLiteral("conflict.txt")), RemoteFiles::Purpose::Edit);
        QVERIFY(fetched.wait(5000));
        const QString path = fetched.first().first().toString();
        QTest::qWait(200); // let the ETag refresh land

        m_mem->put(QStringLiteral("b"), QStringLiteral("conflict.txt"), "v2 from someone else");
        QTest::qWait(1100);
        writeFile(path, "my local change");
        remote.checkForChanges(path);
        QTRY_COMPARE(questions.size(), 2);
        QCOMPARE(questions.last(), QStringLiteral("Remote File Changed"));
        QTest::qWait(200);
        QCOMPARE(uploaded.size(), 0);
        QCOMPARE(m_mem->get(QStringLiteral("b"), QStringLiteral("conflict.txt")),
                 QByteArray("v2 from someone else"));
    }
};

QTEST_MAIN(TestRemoteFiles)
#include "tst_remotefiles.moc"
