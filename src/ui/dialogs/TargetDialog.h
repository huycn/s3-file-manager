#pragma once

#include "transfer/TransferTypes.h"

#include <QDialog>

class QCheckBox;
class QComboBox;
class QLabel;
class QLineEdit;
class QToolButton;

namespace s3fm {

class EncryptionPicker;

// "Copy N items to: [target]" prompt (F5/F6), with collapsible transfer options.
class TargetDialog : public QDialog
{
    Q_OBJECT

public:
    TargetDialog(const QString& title, const QString& prompt, const QString& target,
                 QWidget* parent = nullptr);
    QString target() const;

    void setOptions(const TransferOptions& options);
    TransferOptions options() const;

private:
    QLineEdit* m_edit;
    QToolButton* m_toggle;
    QWidget* m_optionsBox;
    QComboBox* m_conflict;
    QLineEdit* m_include;
    QLineEdit* m_exclude;
    QCheckBox* m_verify;
    QCheckBox* m_mtime;
    QCheckBox* m_symlinks;
    QComboBox* m_storageClass;
    EncryptionPicker* m_encryption;
    TransferOptions m_base;
};

} // namespace s3fm
