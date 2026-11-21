#pragma once

#include "providers/s3/S3BucketTypes.h"

#include <QDialog>

class QCheckBox;
class QComboBox;
class QDateEdit;
class QLabel;
class QLineEdit;
class QSpinBox;
class QTableWidget;

namespace s3fm {

class KeyValueEditor;

// Form for one lifecycle rule: filter (prefix, tags, object size), transitions and
// expiration of current versions, noncurrent versions, incomplete uploads.
class LifecycleRuleDialog : public QDialog
{
    Q_OBJECT

public:
    explicit LifecycleRuleDialog(QWidget* parent = nullptr);

    void setRule(const LifecycleRule& rule);
    LifecycleRule rule() const;
    void done(int result) override; // refuses to accept an invalid rule

private:
    QWidget* buildFilterTab();
    QWidget* buildCurrentTab();
    QWidget* buildNoncurrentTab();
    void addTransitionRow(QTableWidget* table, const QString& storageClass, const QString& after,
                          const QString& keep = {});
    void updateEnabled();

    QLineEdit* m_id;
    QCheckBox* m_enabled;
    QLineEdit* m_prefix;
    QLineEdit* m_minSize;
    QLineEdit* m_maxSize;
    KeyValueEditor* m_tags;
    QTableWidget* m_transitions;
    QComboBox* m_expiration;
    QSpinBox* m_expirationDays;
    QDateEdit* m_expirationDate;
    QCheckBox* m_deleteMarkers;
    QTableWidget* m_noncurrentTransitions;
    QCheckBox* m_noncurrentExpire;
    QSpinBox* m_noncurrentDays;
    QSpinBox* m_keepNewer;
    QCheckBox* m_abortUploads;
    QSpinBox* m_abortDays;
    QLabel* m_error;
};

} // namespace s3fm
