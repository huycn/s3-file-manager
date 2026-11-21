// Offline checks of the S3 object dialogs: bulk edit mapping, encryption picker,
// SSE-C key dialog and QR codes.

#include "connections/ConnectionStore.h"
#include "connections/SecretStore.h"
#include "ui/dialogs/ObjectEditDialog.h"
#include "ui/dialogs/PresignDialog.h"
#include "ui/dialogs/SseKeyDialog.h"
#include "ui/widgets/EncryptionPicker.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QComboBox>
#include <QDialogButtonBox>
#include <QGroupBox>
#include <QLineEdit>
#include <QPushButton>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;

class TestObjectDialogs : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void initTestCase() { QStandardPaths::setTestModeEnabled(true); }

    void bulkEditOnlyCheckedSections()
    {
        ObjectEditDialog dialog(QStringLiteral("3 items"));
        QVERIFY(!dialog.validate().isEmpty()); // nothing checked
        dialog.findChild<QGroupBox*>(QStringLiteral("headersBox"))->setChecked(true);
        dialog.findChild<QLineEdit*>(QStringLiteral("cacheControl"))->setText(QStringLiteral("no-cache"));
        dialog.findChild<KeyValueEditor*>(QStringLiteral("metadata"))
            ->addRow(QStringLiteral("a"), QStringLiteral("1"));
        dialog.findChild<QLineEdit*>(QStringLiteral("removeMetadata"))->setText(QStringLiteral("x, y"));
        dialog.findChild<QGroupBox*>(QStringLiteral("storageBox"))->setChecked(true);
        dialog.findChild<QComboBox*>(QStringLiteral("storageClass"))
            ->setCurrentText(QStringLiteral("STANDARD_IA"));
        dialog.findChild<QGroupBox*>(QStringLiteral("aclBox"))->setChecked(true);
        QVERIFY(dialog.validate().isEmpty());
        BulkObjectChange c = dialog.change();
        QVERIFY(c.headers);
        QCOMPARE(c.headers->cacheControl, QStringLiteral("no-cache"));
        QVERIFY(c.headers->contentType.isEmpty()); // unchanged
        QCOMPARE(c.headers->userMetadata.value(QStringLiteral("a")), QStringLiteral("1"));
        QCOMPARE(c.removeUserMetadata, QStringList({QStringLiteral("x"), QStringLiteral("y")}));
        QCOMPARE(c.storageClass, QStringLiteral("STANDARD_IA"));
        QCOMPARE(c.cannedAcl, QStringLiteral("private"));
        QVERIFY(!c.tags);
        QVERIFY(!c.encryption);
        QVERIFY(c.rewritesObject());

        dialog.findChild<KeyValueEditor*>(QStringLiteral("metadata"))
            ->addRow(QStringLiteral("bad key"), QString());
        QVERIFY(!dialog.validate().isEmpty());
    }

    void encryptionPicker()
    {
        EncryptionPicker picker(nullptr, true);
        QVERIFY(!picker.encryption()); // "unchanged"
        picker.setEncryption(ObjectEncryption{ObjectEncryption::Mode::Kms, QStringLiteral("alias/k")});
        QCOMPARE(picker.encryption()->mode, ObjectEncryption::Mode::Kms);
        QCOMPARE(picker.encryption()->kmsKeyId, QStringLiteral("alias/k"));
        QCOMPARE(EncryptionPicker::sseName(picker.encryption()), QStringLiteral("aws:kms"));
        const auto back = EncryptionPicker::fromSseName(QStringLiteral("aws:kms"), QStringLiteral("alias/k"));
        QCOMPARE(*back, *picker.encryption());
        QVERIFY(!EncryptionPicker::fromSseName({}, {}));
        QCOMPARE(EncryptionPicker::fromSseName(QStringLiteral("SSE-C"), {})->mode,
                 ObjectEncryption::Mode::Customer);
    }

    void customerKeyDialogStoresKey()
    {
        QTemporaryDir dir;
        ConnectionStore store(std::make_shared<MemorySecretStore>(), dir.filePath(QStringLiteral("c.ini")));
        SseKeyDialog dialog(&store, QStringLiteral("c"), QStringLiteral("b"));
        dialog.findChild<QPushButton*>(QStringLiteral("generate"))->click();
        const QString text = dialog.findChild<QLineEdit*>(QStringLiteral("key"))->text();
        QVERIFY(SseCustomerKey::fromText(text).isValid());
        dialog.findChild<QDialogButtonBox*>()->button(QDialogButtonBox::Save)->click();
        QCOMPARE(dialog.result(), int(QDialog::Accepted));
        QCOMPARE(store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("b"))->keyBase64(), text);
        QVERIFY(!store.sseCustomerKey(QStringLiteral("c"), QStringLiteral("other"))); // bucket-specific
    }

    void qrCodes()
    {
        if (!PresignDialog::hasQrCode())
            QSKIP("built without qrencode");
        const QImage img = PresignDialog::qrCode(QStringLiteral("https://example.com/a?b=c"), 2);
        QVERIFY(!img.isNull());
        QCOMPARE(img.width(), img.height());
        QVERIFY(PresignDialog::qrCode(QString(5000, u'x')).isNull()); // too long for a QR code
    }
};

QTEST_MAIN(TestObjectDialogs)
#include "tst_objectdialogs.moc"
