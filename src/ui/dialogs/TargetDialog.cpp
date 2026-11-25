#include "ui/dialogs/TargetDialog.h"

#include "providers/s3/S3Types.h"
#include "transfer/TransferMath.h"
#include "ui/widgets/EncryptionPicker.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QToolButton>
#include <QVBoxLayout>

namespace s3fm {

TargetDialog::TargetDialog(const QString& title, const QString& prompt, const QString& target,
                           QWidget* parent)
    : QDialog(parent)
{
    setWindowTitle(title);
    setMinimumWidth(560);
    auto* layout = new QVBoxLayout(this);
    auto* label = new QLabel(prompt, this);
    label->setTextFormat(Qt::PlainText);
    label->setWordWrap(true);
    layout->addWidget(label);
    m_edit = new QLineEdit(target, this);
    layout->addWidget(m_edit);

    m_toggle = new QToolButton(this);
    m_toggle->setObjectName(QStringLiteral("optionsToggle"));
    m_toggle->setText(tr("&Options"));
    m_toggle->setCheckable(true);
    m_toggle->setToolButtonStyle(Qt::ToolButtonTextBesideIcon);
    m_toggle->setArrowType(Qt::RightArrow);
    m_toggle->setAutoRaise(true);
    layout->addWidget(m_toggle);

    m_optionsBox = new QWidget(this);
    auto* form = new QFormLayout(m_optionsBox);
    form->setContentsMargins(16, 0, 0, 0);
    m_conflict = new QComboBox(m_optionsBox);
    m_conflict->setObjectName(QStringLiteral("conflictPolicy"));
    m_conflict->addItem(tr("Ask"), int(ConflictPolicy::Ask));
    m_conflict->addItem(tr("Overwrite"), int(ConflictPolicy::Overwrite));
    m_conflict->addItem(tr("Skip"), int(ConflictPolicy::Skip));
    m_conflict->addItem(tr("Keep both (rename the new file)"), int(ConflictPolicy::Rename));
    m_conflict->addItem(tr("Overwrite if newer"), int(ConflictPolicy::OverwriteIfNewer));
    m_conflict->addItem(tr("Overwrite if the size differs"), int(ConflictPolicy::OverwriteIfSizeDiffers));
    form->addRow(tr("If a file exists:"), m_conflict);
    m_include = new QLineEdit(m_optionsBox);
    m_include->setObjectName(QStringLiteral("include"));
    m_include->setPlaceholderText(tr("e.g. *.jpg; *.png (empty: everything)"));
    form->addRow(tr("Only files matching:"), m_include);
    m_exclude = new QLineEdit(m_optionsBox);
    m_exclude->setObjectName(QStringLiteral("exclude"));
    m_exclude->setPlaceholderText(tr("e.g. *.tmp; .git; build/*"));
    form->addRow(tr("Exclude:"), m_exclude);
    m_verify = new QCheckBox(tr("Verify integrity after transfer (size, MD5/ETag)"), m_optionsBox);
    m_mtime = new QCheckBox(tr("Preserve modification times"), m_optionsBox);
    m_symlinks = new QCheckBox(tr("Follow symbolic links (otherwise skip them)"), m_optionsBox);
    form->addRow(m_verify);
    form->addRow(m_mtime);
    form->addRow(m_symlinks);
    m_storageClass = new QComboBox(m_optionsBox);
    m_storageClass->setObjectName(QStringLiteral("storageClass"));
    m_storageClass->addItem(tr("Connection default"), QString());
    const auto classes = storageClassNames();
    for (const QString& sc : classes)
        m_storageClass->addItem(sc, sc);
    form->addRow(tr("S3 storage class:"), m_storageClass);
    m_encryption = new EncryptionPicker(m_optionsBox, true);
    form->addRow(tr("S3 encryption:"), m_encryption);
    layout->addWidget(m_optionsBox);
    m_optionsBox->setVisible(false);
    connect(m_toggle, &QToolButton::toggled, this, [this](bool on) {
        m_optionsBox->setVisible(on);
        m_toggle->setArrowType(on ? Qt::DownArrow : Qt::RightArrow);
        adjustSize();
    });

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
    setOptions({});
    m_edit->setFocus();
    m_edit->selectAll();
}

QString TargetDialog::target() const
{
    return m_edit->text();
}

void TargetDialog::setOptions(const TransferOptions& options)
{
    m_base = options;
    m_conflict->setCurrentIndex(qMax(0, m_conflict->findData(int(options.conflict))));
    m_include->setText(options.include.join(QStringLiteral("; ")));
    m_exclude->setText(options.exclude.join(QStringLiteral("; ")));
    m_verify->setChecked(options.verify);
    m_mtime->setChecked(options.preserveMtime);
    m_symlinks->setChecked(options.followSymlinks);
    m_storageClass->setCurrentIndex(qMax(0, m_storageClass->findData(options.storageClass)));
    m_encryption->setEncryption(EncryptionPicker::fromSseName(options.sse, options.sseKmsKeyId));
}

TransferOptions TargetDialog::options() const
{
    TransferOptions o = m_base;
    o.conflict = ConflictPolicy(m_conflict->currentData().toInt());
    o.include = transfer::PathFilter::splitPatterns(m_include->text());
    o.exclude = transfer::PathFilter::splitPatterns(m_exclude->text());
    o.verify = m_verify->isChecked();
    o.preserveMtime = m_mtime->isChecked();
    o.followSymlinks = m_symlinks->isChecked();
    o.storageClass = m_storageClass->currentData().toString();
    const auto enc = m_encryption->encryption();
    o.sse = EncryptionPicker::sseName(enc);
    o.sseKmsKeyId = enc ? enc->kmsKeyId : QString();
    m_encryption->rememberKey();
    return o;
}

} // namespace s3fm
