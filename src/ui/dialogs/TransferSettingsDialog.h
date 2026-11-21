#pragma once

#include "transfer/TransferTypes.h"

#include <QDialog>

class QCheckBox;
class QSpinBox;

namespace s3fm {

// Concurrency, multipart, bandwidth and retry settings of the transfer engine.
class TransferSettingsDialog : public QDialog
{
    Q_OBJECT

public:
    explicit TransferSettingsDialog(const TransferSettings& settings, QWidget* parent = nullptr);
    TransferSettings settings() const;

private:
    TransferSettings m_base;
    QSpinBox* m_jobs;
    QSpinBox* m_files;
    QSpinBox* m_parts;
    QSpinBox* m_partSize;
    QSpinBox* m_threshold;
    QSpinBox* m_bandwidth;
    QSpinBox* m_retries;
    QCheckBox* m_resume;
};

} // namespace s3fm
