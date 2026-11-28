#include "ui/dialogs/CompareDialog.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QHBoxLayout>
#include <QLabel>
#include <QPushButton>
#include <QSettings>
#include <QSpinBox>
#include <QVBoxLayout>

namespace s3fm {

CompareDialog::CompareDialog(const CompareOptions& options, QWidget* parent) : QDialog(parent), m_base(options)
{
    setWindowTitle(tr("Compare Panels"));
    auto* layout = new QVBoxLayout(this);

    m_time = new QCheckBox(tr("Compare modification &times"), this);
    m_time->setObjectName(QStringLiteral("compareTime"));
    m_time->setChecked(options.compareTime);
    m_tolerance = new QSpinBox(this);
    m_tolerance->setObjectName(QStringLiteral("tolerance"));
    m_tolerance->setRange(0, 24 * 3600);
    m_tolerance->setValue(options.timeToleranceSecs);
    m_tolerance->setSuffix(tr(" s", "seconds"));
    auto* toleranceLabel = new QLabel(tr("T&olerance:"), this);
    toleranceLabel->setBuddy(m_tolerance);
    auto* timeRow = new QHBoxLayout;
    timeRow->addWidget(m_time);
    timeRow->addStretch(1);
    timeRow->addWidget(toleranceLabel);
    timeRow->addWidget(m_tolerance);
    layout->addLayout(timeRow);
    connect(m_time, &QCheckBox::toggled, m_tolerance, &QWidget::setEnabled);
    connect(m_time, &QCheckBox::toggled, toleranceLabel, &QWidget::setEnabled);
    m_tolerance->setEnabled(options.compareTime);
    toleranceLabel->setEnabled(options.compareTime);

    m_content = new QCheckBox(tr("Compare the &content of files with the same size"), this);
    m_content->setObjectName(QStringLiteral("compareContent"));
    m_content->setChecked(options.compareContent);
    layout->addWidget(m_content);
    auto* contentNote = new QLabel(
        tr("<small>Local files are read. S3 objects are compared by ETag (the MD5 sum of single-part "
           "uploads) and stored checksums; when the ETag alone does not tell, one or two requests per "
           "object are needed.</small>"),
        this);
    contentNote->setWordWrap(true);
    contentNote->setContentsMargins(20, 0, 0, 0);
    layout->addWidget(contentNote);

    m_directories = new QCheckBox(tr("Mark &folders that exist on one side only"), this);
    m_directories->setObjectName(QStringLiteral("includeDirectories"));
    m_directories->setChecked(options.includeDirectories);
    layout->addWidget(m_directories);

    auto* note = new QLabel(tr("<small>Only the listings shown are compared, not the contents of folders. "
                               "Items missing on the other side, newer, or different are selected in "
                               "both panels, ready to copy with F5. S3 times are upload times.</small>"),
                            this);
    note->setWordWrap(true);
    layout->addSpacing(6);
    layout->addWidget(note);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    buttons->button(QDialogButtonBox::Ok)->setText(tr("Compare"));
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
    setMinimumWidth(460);
}

CompareOptions CompareDialog::options() const
{
    CompareOptions o = m_base;
    o.compareTime = m_time->isChecked();
    o.timeToleranceSecs = m_tolerance->value();
    o.compareContent = m_content->isChecked();
    o.includeDirectories = m_directories->isChecked();
    return o;
}

CompareOptions CompareDialog::load(QSettings& settings)
{
    CompareOptions o;
    settings.beginGroup(QStringLiteral("compare"));
    o.compareTime = settings.value(QStringLiteral("time"), o.compareTime).toBool();
    o.timeToleranceSecs = settings.value(QStringLiteral("toleranceSecs"), o.timeToleranceSecs).toInt();
    o.compareContent = settings.value(QStringLiteral("content"), o.compareContent).toBool();
    o.includeDirectories = settings.value(QStringLiteral("directories"), o.includeDirectories).toBool();
    settings.endGroup();
    return o;
}

void CompareDialog::save(QSettings& settings, const CompareOptions& options)
{
    settings.beginGroup(QStringLiteral("compare"));
    settings.setValue(QStringLiteral("time"), options.compareTime);
    settings.setValue(QStringLiteral("toleranceSecs"), options.timeToleranceSecs);
    settings.setValue(QStringLiteral("content"), options.compareContent);
    settings.setValue(QStringLiteral("directories"), options.includeDirectories);
    settings.endGroup();
}

} // namespace s3fm
