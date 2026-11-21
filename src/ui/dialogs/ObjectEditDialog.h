#pragma once

#include "providers/s3/S3Types.h"

#include <QDialog>

class QCheckBox;
class QComboBox;
class QGroupBox;
class QLineEdit;

namespace s3fm {

class EncryptionPicker;
class KeyValueEditor;

// Changes applied to many S3 objects at once (selection; folders included
// recursively): headers and user metadata, storage class, encryption, tags, ACL.
// Each section applies only when its box is checked.
class ObjectEditDialog : public QDialog
{
    Q_OBJECT

public:
    ObjectEditDialog(const QString& what, QWidget* parent = nullptr);

    BulkObjectChange change() const;
    // Empty if the input is valid.
    QString validate() const;

private:
    QGroupBox* m_headersBox;
    QLineEdit* m_contentType;
    QLineEdit* m_cacheControl;
    QLineEdit* m_contentDisposition;
    QLineEdit* m_contentEncoding;
    QLineEdit* m_contentLanguage;
    QLineEdit* m_expires;
    KeyValueEditor* m_metadata;
    QCheckBox* m_replaceMetadata;
    QLineEdit* m_removeMetadata;
    QGroupBox* m_storageBox;
    QComboBox* m_storageClass;
    QGroupBox* m_encryptionBox;
    EncryptionPicker* m_encryption;
    QGroupBox* m_tagsBox;
    KeyValueEditor* m_tags;
    QGroupBox* m_aclBox;
    QComboBox* m_acl;
};

} // namespace s3fm
