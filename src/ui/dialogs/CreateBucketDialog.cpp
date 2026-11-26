#include "ui/dialogs/CreateBucketDialog.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QVBoxLayout>

namespace s3fm {

CreateBucketDialog::CreateBucketDialog(bool aws, const QString& defaultRegion, QWidget* parent)
    : QDialog(parent), m_aws(aws)
{
    setWindowTitle(tr("New Bucket"));
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;

    m_name = new QLineEdit(this);
    m_name->setObjectName(QStringLiteral("bucketName"));
    m_name->setPlaceholderText(tr("lowercase letters, digits, dots and hyphens"));
    m_name->setMaxLength(63);
    form->addRow(tr("&Name:"), m_name);

    m_region = new QComboBox(this);
    m_region->setObjectName(QStringLiteral("region"));
    m_region->setEditable(true);
    if (aws) {
        m_region->addItems(awsRegions());
        m_region->setCurrentText(defaultRegion.isEmpty() ? QStringLiteral("us-east-1") : defaultRegion);
    } else {
        m_region->addItem(QString());
        m_region->lineEdit()->setPlaceholderText(tr("endpoint default"));
        if (!defaultRegion.isEmpty())
            m_region->addItem(defaultRegion);
    }
    form->addRow(tr("&Region:"), m_region);

    m_ownership = new QComboBox(this);
    m_ownership->setObjectName(QStringLiteral("ownership"));
    m_ownership->addItem(tr("Default (bucket owner enforced: ACLs disabled)"), QString());
    m_ownership->addItem(tr("Bucket owner preferred (ACLs enabled)"), QStringLiteral("BucketOwnerPreferred"));
    m_ownership->addItem(tr("Object writer (ACLs enabled)"), QStringLiteral("ObjectWriter"));
    form->addRow(tr("Object &ownership:"), m_ownership);

    m_acl = new QComboBox(this);
    m_acl->setObjectName(QStringLiteral("acl"));
    m_acl->addItem(tr("None"), QString());
    for (const char* acl : {"private", "public-read", "public-read-write", "authenticated-read"})
        m_acl->addItem(QString::fromLatin1(acl), QString::fromLatin1(acl));
    form->addRow(tr("Canned &ACL:"), m_acl);

    m_objectLock = new QCheckBox(tr("Enable Object &Lock (turns on versioning; cannot be turned off)"), this);
    m_objectLock->setObjectName(QStringLiteral("objectLock"));
    form->addRow(QString(), m_objectLock);
    layout->addLayout(form);

    m_message = new QLabel(this);
    m_message->setObjectName(QStringLiteral("message"));
    m_message->setWordWrap(true);
    layout->addWidget(m_message);
    if (aws) {
        auto* note = new QLabel(tr("<small>New AWS buckets block public access by default; public ACLs fail "
                                   "until the public access block is relaxed.</small>"),
                                this);
        note->setWordWrap(true);
        layout->addWidget(note);
    }

    m_buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    m_buttons->button(QDialogButtonBox::Ok)->setText(tr("Create"));
    connect(m_buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(m_buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(m_buttons);

    connect(m_name, &QLineEdit::textChanged, this, &CreateBucketDialog::validate);
    connect(m_ownership, &QComboBox::currentIndexChanged, this, &CreateBucketDialog::validate);
    connect(m_acl, &QComboBox::currentIndexChanged, this, &CreateBucketDialog::validate);
    validate();
    resize(520, sizeHint().height());
}

void CreateBucketDialog::validate()
{
    const bool aclsEnabled = !m_ownership->currentData().toString().isEmpty();
    m_acl->setEnabled(aclsEnabled);
    if (!aclsEnabled)
        m_acl->setCurrentIndex(0);

    QString warning;
    const QString name = m_name->text().trimmed();
    m_error = name.isEmpty() ? tr("Enter a bucket name.") : validateBucketName(name, m_aws, &warning);
    if (!m_error.isEmpty() && !name.isEmpty())
        m_message->setText(
            QStringLiteral("<span style='color:#b3261e'>%1</span>").arg(m_error.toHtmlEscaped()));
    else
        m_message->setText(warning.toHtmlEscaped());
    m_buttons->button(QDialogButtonBox::Ok)->setEnabled(m_error.isEmpty());
}

QString CreateBucketDialog::validationMessage() const
{
    return m_error;
}

NewBucket CreateBucketDialog::spec() const
{
    NewBucket spec;
    spec.name = m_name->text().trimmed();
    spec.region = m_region->currentText().trimmed();
    spec.objectLock = m_objectLock->isChecked();
    spec.objectOwnership = m_ownership->currentData().toString();
    spec.cannedAcl = m_acl->isEnabled() ? m_acl->currentData().toString() : QString();
    return spec;
}

} // namespace s3fm
