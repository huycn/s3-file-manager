#include "ui/dialogs/TransferSettingsDialog.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QSpinBox>
#include <QVBoxLayout>

namespace s3fm {

namespace {
QSpinBox* spin(QWidget* parent, int min, int max, int value, const QString& suffix = {})
{
    auto* s = new QSpinBox(parent);
    s->setRange(min, max);
    s->setValue(value);
    s->setSuffix(suffix);
    return s;
}
constexpr qint64 kMiB = qint64{1024} * 1024;
} // namespace

TransferSettingsDialog::TransferSettingsDialog(const TransferSettings& settings, QWidget* parent)
    : QDialog(parent), m_base(settings)
{
    setWindowTitle(tr("Transfer Settings"));
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;
    m_jobs = spin(this, 1, 16, settings.maxJobs);
    m_files = spin(this, 1, 32, settings.filesPerJob);
    m_parts = spin(this, 1, 32, settings.partConcurrency);
    m_partSize = spin(this, 5, 5 * 1024, int(settings.partSize / kMiB), tr(" MiB"));
    m_threshold = spin(this, 5, 5 * 1024, int(settings.multipartThreshold / kMiB), tr(" MiB"));
    m_bandwidth = spin(this, 0, 10 * 1024 * 1024, int(settings.bandwidthLimit / 1024), tr(" KiB/s"));
    m_bandwidth->setSpecialValueText(tr("Unlimited"));
    m_retries = spin(this, 0, 20, settings.maxRetries);
    m_resume = new QCheckBox(tr("Resume interrupted transfers automatically at startup"), this);
    m_resume->setChecked(settings.resumeOnStartup);
    m_jobs->setObjectName(QStringLiteral("maxJobs"));
    m_bandwidth->setObjectName(QStringLiteral("bandwidth"));

    form->addRow(tr("Transfers at the same time:"), m_jobs);
    form->addRow(tr("Files per transfer in parallel:"), m_files);
    form->addRow(tr("Parts per file in parallel:"), m_parts);
    form->addRow(tr("Multipart above:"), m_threshold);
    form->addRow(tr("Part size:"), m_partSize);
    form->addRow(tr("Bandwidth limit:"), m_bandwidth);
    form->addRow(tr("Retries per file:"), m_retries);
    layout->addLayout(form);
    layout->addWidget(m_resume);
    auto* note = new QLabel(
        tr("<small>Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). "
           "Changes apply to transfers started afterwards; the bandwidth limit applies immediately.</small>"),
        this);
    note->setWordWrap(true);
    layout->addWidget(note);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
}

TransferSettings TransferSettingsDialog::settings() const
{
    TransferSettings s = m_base;
    s.maxJobs = m_jobs->value();
    s.filesPerJob = m_files->value();
    s.partConcurrency = m_parts->value();
    s.partSize = qint64(m_partSize->value()) * kMiB;
    s.multipartThreshold = qint64(m_threshold->value()) * kMiB;
    s.bandwidthLimit = qint64(m_bandwidth->value()) * 1024;
    s.maxRetries = m_retries->value();
    s.resumeOnStartup = m_resume->isChecked();
    return s;
}

} // namespace s3fm
