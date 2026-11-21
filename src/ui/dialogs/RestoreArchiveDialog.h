#pragma once

#include <QDialog>

class QComboBox;
class QSpinBox;

namespace s3fm {

// Parameters of a restore from Glacier / Deep Archive: how long the temporary copy
// stays, and the retrieval tier (speed vs. cost).
class RestoreArchiveDialog : public QDialog
{
    Q_OBJECT

public:
    RestoreArchiveDialog(const QString& what, const QString& status, QWidget* parent = nullptr);

    int days() const;
    QString tier() const; // Expedited, Standard, Bulk

private:
    QSpinBox* m_days;
    QComboBox* m_tier;
};

} // namespace s3fm
