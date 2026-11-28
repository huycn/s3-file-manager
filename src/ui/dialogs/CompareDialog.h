#pragma once

#include "core/Compare.h"

#include <QDialog>

class QCheckBox;
class QSettings;
class QSpinBox;

namespace s3fm {

// Options for comparing the two panels (Select > Compare Panels…).
class CompareDialog : public QDialog
{
    Q_OBJECT

public:
    explicit CompareDialog(const CompareOptions& options, QWidget* parent = nullptr);
    CompareOptions options() const;

    // Options last used (QSettings group "compare").
    static CompareOptions load(QSettings& settings);
    static void save(QSettings& settings, const CompareOptions& options);

private:
    CompareOptions m_base;
    QCheckBox* m_time;
    QSpinBox* m_tolerance;
    QCheckBox* m_content;
    QCheckBox* m_directories;
};

} // namespace s3fm
