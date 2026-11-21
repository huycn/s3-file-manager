#include "ui/dialogs/DeleteBucketDialog.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QStyle>
#include <QVBoxLayout>

namespace s3fm {

DeleteBucketDialog::DeleteBucketDialog(const QString& bucket, const S3BucketService::Contents& contents,
                                       QWidget* parent)
    : QDialog(parent), m_bucket(bucket), m_empty(contents.isEmpty())
{
    setWindowTitle(tr("Delete Bucket"));
    auto* layout = new QVBoxLayout(this);
    auto* text = new QLabel(this);
    text->setWordWrap(true);
    text->setTextFormat(Qt::RichText);
    if (m_empty) {
        text->setText(tr("Permanently delete the empty bucket <b>%1</b>?").arg(bucket.toHtmlEscaped()));
        layout->addWidget(text);
    } else {
        QStringList what;
        if (contents.objects)
            what << tr("objects");
        if (contents.versions)
            what << tr("object versions or delete markers");
        if (contents.uploads)
            what << tr("incomplete multipart uploads");
        text->setText(tr("<b>%1</b> is not empty: it contains %2.<br><br>To delete it, every object, every "
                         "version and every incomplete upload is deleted first. <b>This cannot be "
                         "undone.</b>")
                          .arg(bucket.toHtmlEscaped(), what.join(QStringLiteral(", "))));
        layout->addWidget(text);
        m_emptyFirst = new QCheckBox(tr("&Empty the bucket, then delete it"), this);
        m_emptyFirst->setObjectName(QStringLiteral("emptyFirst"));
        layout->addWidget(m_emptyFirst);
        m_bypass =
            new QCheckBox(tr("&Bypass governance-mode retention (needs s3:BypassGovernanceRetention)"), this);
        m_bypass->setObjectName(QStringLiteral("bypassGovernance"));
        layout->addWidget(m_bypass);
        layout->addWidget(new QLabel(tr("Type the bucket name to confirm:"), this));
        m_confirm = new QLineEdit(this);
        m_confirm->setObjectName(QStringLiteral("confirmName"));
        m_confirm->setPlaceholderText(bucket);
        layout->addWidget(m_confirm);
        connect(m_emptyFirst, &QCheckBox::toggled, this, &DeleteBucketDialog::update);
        connect(m_confirm, &QLineEdit::textChanged, this, &DeleteBucketDialog::update);
    }
    m_buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    m_buttons->button(QDialogButtonBox::Ok)->setText(m_empty ? tr("Delete") : tr("Empty and Delete"));
    m_buttons->button(QDialogButtonBox::Cancel)->setDefault(true);
    connect(m_buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(m_buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(m_buttons);
    update();
    resize(480, sizeHint().height());
}

bool DeleteBucketDialog::canAccept() const
{
    if (m_empty)
        return true;
    return m_emptyFirst->isChecked() && m_confirm->text() == m_bucket;
}

void DeleteBucketDialog::update()
{
    m_buttons->button(QDialogButtonBox::Ok)->setEnabled(canAccept());
}

bool DeleteBucketDialog::emptyFirst() const
{
    return m_emptyFirst && m_emptyFirst->isChecked();
}

bool DeleteBucketDialog::bypassGovernance() const
{
    return m_bypass && m_bypass->isChecked();
}

} // namespace s3fm
