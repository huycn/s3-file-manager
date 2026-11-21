// Offline checks of the bucket dialogs: create-bucket validation, delete
// confirmation, the lifecycle rule form and the JSON editor.

#include "ui/dialogs/CreateBucketDialog.h"
#include "ui/dialogs/DeleteBucketDialog.h"
#include "ui/dialogs/LifecycleRuleDialog.h"
#include "ui/widgets/JsonEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QTableWidget>
#include <QTest>

using namespace s3fm;

class TestBucketDialogs : public QObject
{
    Q_OBJECT

private:
    static QPushButton* ok(QDialog& d)
    {
        return d.findChild<QDialogButtonBox*>()->button(QDialogButtonBox::Ok);
    }

private Q_SLOTS:
    void createBucketValidation()
    {
        CreateBucketDialog dialog(true, QStringLiteral("eu-west-1"));
        auto* name = dialog.findChild<QLineEdit*>(QStringLiteral("bucketName"));
        QVERIFY(!ok(dialog)->isEnabled());
        name->setText(QStringLiteral("Bad Name"));
        QVERIFY(!ok(dialog)->isEnabled());
        QVERIFY(!dialog.validationMessage().isEmpty());
        name->setText(QStringLiteral("good-name"));
        QVERIFY(ok(dialog)->isEnabled());

        // ACLs only with ownership other than "enforced".
        auto* acl = dialog.findChild<QComboBox*>(QStringLiteral("acl"));
        auto* ownership = dialog.findChild<QComboBox*>(QStringLiteral("ownership"));
        QVERIFY(!acl->isEnabled());
        ownership->setCurrentIndex(1);
        QVERIFY(acl->isEnabled());
        acl->setCurrentIndex(acl->findData(QStringLiteral("public-read")));
        dialog.findChild<QCheckBox*>(QStringLiteral("objectLock"))->setChecked(true);
        const NewBucket spec = dialog.spec();
        QCOMPARE(spec.name, QStringLiteral("good-name"));
        QCOMPARE(spec.region, QStringLiteral("eu-west-1"));
        QCOMPARE(spec.objectOwnership, QStringLiteral("BucketOwnerPreferred"));
        QCOMPARE(spec.cannedAcl, QStringLiteral("public-read"));
        QVERIFY(spec.objectLock);
        ownership->setCurrentIndex(0);
        QVERIFY(dialog.spec().cannedAcl.isEmpty());

        CreateBucketDialog other(false, QStringLiteral("garage"));
        other.findChild<QLineEdit*>(QStringLiteral("bucketName"))->setText(QStringLiteral("xn--allowed"));
        QVERIFY(ok(other)->isEnabled());        // AWS-only reserved prefix
        QVERIFY(other.spec().region.isEmpty()); // endpoint default
    }

    void deleteConfirmation()
    {
        DeleteBucketDialog empty(QStringLiteral("b1"), {});
        QVERIFY(empty.canAccept());
        QVERIFY(!empty.emptyFirst());

        S3BucketService::Contents full;
        full.objects = true;
        full.uploads = true;
        DeleteBucketDialog dialog(QStringLiteral("b2"), full);
        QVERIFY(!dialog.canAccept());
        QVERIFY(!ok(dialog)->isEnabled());
        dialog.findChild<QCheckBox*>(QStringLiteral("emptyFirst"))->setChecked(true);
        QVERIFY(!dialog.canAccept());
        dialog.findChild<QLineEdit*>(QStringLiteral("confirmName"))->setText(QStringLiteral("b"));
        QVERIFY(!dialog.canAccept());
        dialog.findChild<QLineEdit*>(QStringLiteral("confirmName"))->setText(QStringLiteral("b2"));
        QVERIFY(dialog.canAccept());
        QVERIFY(ok(dialog)->isEnabled());
        QVERIFY(dialog.emptyFirst());
        QVERIFY(!dialog.bypassGovernance());
    }

    void lifecycleRuleForm()
    {
        LifecycleRule r;
        r.id = QStringLiteral("r1");
        r.enabled = false;
        r.prefix = QStringLiteral("logs/");
        r.sizeGreaterThan = 100;
        r.transitions = {{30, {}, QStringLiteral("STANDARD_IA")},
                         {-1, QDate(2031, 1, 1), QStringLiteral("GLACIER")}};
        r.expirationDate = QDate(2032, 1, 1);
        r.noncurrentTransitions = {{10, QStringLiteral("GLACIER_IR"), 2}};
        r.noncurrentExpirationDays = 40;
        r.newerNoncurrentVersions = 5;
        r.abortUploadDays = 2;
        LifecycleRuleDialog dialog;
        dialog.setRule(r);
        QCOMPARE(dialog.rule(), r);

        // An invalid rule is not accepted.
        LifecycleRuleDialog empty;
        empty.show();
        empty.accept();
        QVERIFY(empty.isVisible());
        QVERIFY(!empty.findChild<QLabel*>(QStringLiteral("error"))->text().isEmpty());
        empty.findChild<QCheckBox*>(QStringLiteral("abortUploads"))->setChecked(true);
        empty.accept();
        QVERIFY(!empty.isVisible());
        QCOMPARE(empty.rule().abortUploadDays, 7);
    }

    void jsonEditor()
    {
        JsonEditor editor;
        editor.setPlainText(QStringLiteral("{\"a\":[1,true,null,\"x\"]}"));
        QVERIFY(editor.formatDocument().isEmpty());
        QVERIFY(editor.toPlainText().contains(u'\n'));
        editor.goTo(3, 5);
        QCOMPARE(editor.textCursor().blockNumber(), 2);
        editor.setPlainText(QStringLiteral("{oops"));
        QVERIFY(!editor.formatDocument().isEmpty());
        QCOMPARE(editor.toPlainText(), QStringLiteral("{oops"));
    }
};

QTEST_MAIN(TestBucketDialogs)
#include "tst_bucketdialogs.moc"
