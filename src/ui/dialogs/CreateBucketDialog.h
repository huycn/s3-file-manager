#pragma once

#include "providers/s3/S3BucketTypes.h"

#include <QDialog>

class QCheckBox;
class QComboBox;
class QDialogButtonBox;
class QLabel;
class QLineEdit;

namespace s3fm {

// Name, region, Object Lock and ownership/ACL of a new bucket. The name is checked
// while typing; OK is enabled only for valid names.
class CreateBucketDialog : public QDialog
{
    Q_OBJECT

public:
    // `aws`: offer AWS regions and apply the AWS-only naming rules.
    CreateBucketDialog(bool aws, const QString& defaultRegion, QWidget* parent = nullptr);

    NewBucket spec() const;
    QString validationMessage() const; // empty if OK is enabled

private:
    void validate();

    bool m_aws;
    QLineEdit* m_name;
    QComboBox* m_region;
    QCheckBox* m_objectLock;
    QComboBox* m_ownership;
    QComboBox* m_acl;
    QLabel* m_message;
    QDialogButtonBox* m_buttons;
    QString m_error;
};

} // namespace s3fm
