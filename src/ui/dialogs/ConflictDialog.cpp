#include "ui/dialogs/ConflictDialog.h"

#include "core/Format.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QPushButton>
#include <QStyle>
#include <QVBoxLayout>

namespace s3fm {

namespace {
QString describe(const Entry& e)
{
    QString text = formatSize(e.size);
    if (e.size >= 0)
        text += QStringLiteral(" (%1 bytes)").arg(formatByteCount(e.size));
    if (e.modified.isValid())
        text += QStringLiteral(", ") + formatDateTime(e.modified);
    return text;
}
} // namespace

ConflictDialog::ConflictDialog(const ConflictInfo& info, QWidget* parent) : QDialog(parent)
{
    setWindowTitle(tr("File already exists"));
    auto* layout = new QVBoxLayout(this);

    auto* header = new QHBoxLayout;
    auto* icon = new QLabel(this);
    icon->setPixmap(style()->standardIcon(QStyle::SP_MessageBoxQuestion).pixmap(32, 32));
    header->addWidget(icon, 0, Qt::AlignTop);
    auto* title = new QLabel(tr("<b>%1</b> already exists in the destination. Overwrite it?")
                                 .arg(info.destination.name.toHtmlEscaped()),
                             this);
    title->setWordWrap(true);
    header->addWidget(title, 1);
    layout->addLayout(header);

    auto* form = new QFormLayout;
    auto* src =
        new QLabel(QStringLiteral("%1<br><small>%2</small>")
                       .arg(describe(info.source), info.source.location.displayString().toHtmlEscaped()),
                   this);
    auto* dst = new QLabel(
        QStringLiteral("%1<br><small>%2</small>")
            .arg(describe(info.destination), info.destination.location.displayString().toHtmlEscaped()),
        this);
    src->setTextInteractionFlags(Qt::TextSelectableByMouse);
    dst->setTextInteractionFlags(Qt::TextSelectableByMouse);
    form->addRow(tr("New:"), src);
    form->addRow(tr("Existing:"), dst);
    layout->addLayout(form);

    const bool newer = info.source.modified.isValid() && info.destination.modified.isValid() &&
                       info.source.modified > info.destination.modified;
    const bool sameSize = info.source.size == info.destination.size;
    auto* hint = new QLabel(this);
    hint->setText(
        QStringLiteral("<small>%1</small>")
            .arg((newer ? tr("The new file is newer.") : tr("The existing file is newer or as old.")) + u' ' +
                 (sameSize ? tr("Both have the same size.") : tr("The sizes differ."))));
    layout->addWidget(hint);

    m_all = new QCheckBox(tr("&Apply to all remaining conflicts of this transfer"), this);
    layout->addWidget(m_all);

    auto* buttons = new QDialogButtonBox(this);
    auto add = [&](const QString& text, ConflictPolicy policy, QDialogButtonBox::ButtonRole role,
                   const char* name) {
        QPushButton* b = buttons->addButton(text, role);
        b->setObjectName(QString::fromLatin1(name));
        connect(b, &QPushButton::clicked, this, [this, policy] {
            m_answer = {policy, m_all->isChecked(), false};
            accept();
        });
        return b;
    };
    add(tr("&Overwrite"), ConflictPolicy::Overwrite, QDialogButtonBox::AcceptRole, "overwrite")
        ->setDefault(true);
    add(tr("&Skip"), ConflictPolicy::Skip, QDialogButtonBox::ActionRole, "skip");
    add(tr("&Keep Both"), ConflictPolicy::Rename, QDialogButtonBox::ActionRole, "rename")
        ->setToolTip(tr("Copy under a new name such as \"name (2).ext\""));
    add(tr("If &Newer"), ConflictPolicy::OverwriteIfNewer, QDialogButtonBox::ActionRole, "ifNewer")
        ->setToolTip(tr("Overwrite only if the new file is newer, otherwise skip"));
    add(tr("If Si&ze Differs"), ConflictPolicy::OverwriteIfSizeDiffers, QDialogButtonBox::ActionRole,
        "ifSize")
        ->setToolTip(tr("Overwrite only if the sizes differ, otherwise skip"));
    QPushButton* cancel = buttons->addButton(tr("Cancel Transfer"), QDialogButtonBox::RejectRole);
    cancel->setObjectName(QStringLiteral("cancel"));
    connect(cancel, &QPushButton::clicked, this, &QDialog::reject);
    layout->addWidget(buttons);
}

ConflictAnswer ConflictDialog::ask(const ConflictInfo& info, QWidget* parent)
{
    ConflictDialog dialog(info, parent);
    if (dialog.exec() != QDialog::Accepted)
        return {ConflictPolicy::Skip, false, true};
    return dialog.answer();
}

} // namespace s3fm
