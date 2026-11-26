#pragma once

#include <QDialog>

class QComboBox;

namespace s3fm {

// Application settings (PLAN 11.6 grows this into the consolidated settings dialog).
// For now: the UI language.
class SettingsDialog : public QDialog
{
    Q_OBJECT

public:
    explicit SettingsDialog(QWidget* parent = nullptr);

    // Chosen UI language code ("de", "zh_CN", ...); empty = follow the system.
    QString language() const;

private:
    QComboBox* m_language;
};

} // namespace s3fm
