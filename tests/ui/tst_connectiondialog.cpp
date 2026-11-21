#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"
#include "ui/dialogs/ConnectionDialog.h"

#include <QApplication>
#include <QComboBox>
#include <QLineEdit>
#include <QListWidget>
#include <QMessageBox>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QTimer>

using namespace s3fm;

class TestConnectionDialog : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_tmp;
    QTimer m_modalGuard;
    QString m_unexpectedModal;

    template <class T> static T* child(QWidget& parent, const char* name)
    {
        T* w = parent.findChild<T*>(QString::fromLatin1(name));
        if (!w)
            qFatal("missing child %s", name);
        return w;
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true);
        // Never hang on an unexpected modal message box: close it and record it.
        connect(&m_modalGuard, &QTimer::timeout, this, [this] {
            if (auto* box = qobject_cast<QMessageBox*>(QApplication::activeModalWidget())) {
                m_unexpectedModal = box->text();
                box->reject();
            }
        });
        m_modalGuard.start(100);
    }

    void init() { m_unexpectedModal.clear(); }
    void cleanup() { QVERIFY2(m_unexpectedModal.isEmpty(), qPrintable(m_unexpectedModal)); }

    void createSaveAndEdit()
    {
        auto secrets = std::make_shared<MemorySecretStore>();
        ConnectionStore store(secrets, m_tmp.filePath(QStringLiteral("dialog.ini")));
        ConnectionDialog dialog(&store);
        dialog.show();

        // An empty store starts with a new profile in the editor; the ID follows the name.
        auto* name = child<QLineEdit>(dialog, "name");
        auto* id = child<QLineEdit>(dialog, "id");
        name->clear();
        QTest::keyClicks(name, QStringLiteral("Test Box"));
        QCOMPARE(id->text(), QStringLiteral("test-box"));
        QVERIFY(!id->isReadOnly());

        QTest::keyClicks(child<QLineEdit>(dialog, "accessKey"), QStringLiteral("AKIAXYZ"));
        QTest::keyClicks(child<QLineEdit>(dialog, "secretKey"), QStringLiteral("topsecret"));
        const ConnectionProfile p = dialog.editedProfile();
        QCOMPARE(p.name, QStringLiteral("Test Box"));
        QCOMPARE(p.accessKeyId, QStringLiteral("AKIAXYZ"));
        QCOMPARE(p.preset, ConnectionProfile::Preset::AmazonS3);

        QVERIFY(dialog.save());
        QVERIFY(store.contains(QStringLiteral("test-box")));
        QCOMPARE(store.secret(QStringLiteral("test-box"))->secretAccessKey, QStringLiteral("topsecret"));

        // Editing an existing profile: ID locked, empty secret field keeps the stored secret.
        QVERIFY(id->isReadOnly());
        QVERIFY(!dialog.editedSecret().has_value());
        QCOMPARE(dialog.findChild<QListWidget*>()->count(), 1);
    }

    void presetFillsEndpoint()
    {
        ConnectionStore store(std::make_shared<MemorySecretStore>(),
                              m_tmp.filePath(QStringLiteral("preset.ini")));
        ConnectionDialog dialog(&store);
        dialog.show();
        auto* preset = child<QComboBox>(dialog, "preset");
        const int minio = preset->findData(static_cast<int>(ConnectionProfile::Preset::MinIO));
        preset->setCurrentIndex(minio);
        Q_EMIT preset->activated(minio);
        const ConnectionProfile p = dialog.editedProfile();
        QCOMPARE(p.endpoint, QStringLiteral("http://localhost:9000"));
        QCOMPARE(p.addressing, ConnectionProfile::Addressing::Path);
    }

    void switchingAwayFromStaticKeysClearsSecret()
    {
        ConnectionStore store(std::make_shared<MemorySecretStore>(),
                              m_tmp.filePath(QStringLiteral("src.ini")));
        ConnectionDialog dialog(&store);
        dialog.show();
        auto* source = child<QComboBox>(dialog, "credentialSource");
        source->setCurrentIndex(
            source->findData(static_cast<int>(ConnectionProfile::CredentialSource::Anonymous)));
        auto secret = dialog.editedSecret();
        QVERIFY(secret.has_value());
        QVERIFY(secret->isEmpty()); // tells the store to delete any stored secret
    }
};

QTEST_MAIN(TestConnectionDialog)
#include "tst_connectiondialog.moc"
