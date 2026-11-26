#include "ui/dialogs/RestoreArchiveDialog.h"

#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QPushButton>
#include <QSpinBox>
#include <QVBoxLayout>

namespace s3fm {

RestoreArchiveDialog::RestoreArchiveDialog(const QString& what, const QString& status, QWidget* parent)
    : QDialog(parent)
{
    setWindowTitle(tr("Restore from Archive"));
    auto* layout = new QVBoxLayout(this);
    auto* intro =
        new QLabel(tr("Request a temporary, readable copy of %1. The archived object stays where it "
                      "is; the copy is billed at the bucket's standard rate until it expires.")
                       .arg(what),
                   this);
    intro->setWordWrap(true);
    layout->addWidget(intro);
    if (!status.isEmpty()) {
        auto* state = new QLabel(status, this);
        state->setWordWrap(true);
        layout->addWidget(state);
    }
    auto* form = new QFormLayout;
    m_days = new QSpinBox(this);
    m_days->setObjectName(QStringLiteral("days"));
    m_days->setRange(1, 3650);
    const auto updateSuffix = [this](int days) { m_days->setSuffix(tr(" day(s)", nullptr, days)); };
    connect(m_days, &QSpinBox::valueChanged, this, updateSuffix);
    m_days->setValue(7);
    updateSuffix(m_days->value());
    form->addRow(tr("Keep the copy for:"), m_days);
    m_tier = new QComboBox(this);
    m_tier->setObjectName(QStringLiteral("tier"));
    m_tier->addItem(tr("Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)"),
                    QStringLiteral("Standard"));
    m_tier->addItem(tr("Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)"), QStringLiteral("Bulk"));
    m_tier->addItem(tr("Expedited (Glacier only; 1–5 minutes, most expensive)"), QStringLiteral("Expedited"));
    form->addRow(tr("Retrieval tier:"), m_tier);
    layout->addLayout(form);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    buttons->button(QDialogButtonBox::Ok)->setText(tr("Request Restore"));
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
}

int RestoreArchiveDialog::days() const
{
    return m_days->value();
}

QString RestoreArchiveDialog::tier() const
{
    return m_tier->currentData().toString();
}

} // namespace s3fm
