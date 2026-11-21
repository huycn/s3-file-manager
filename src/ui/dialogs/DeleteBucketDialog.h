#pragma once

#include "providers/s3/S3BucketService.h"

#include <QDialog>

class QCheckBox;
class QDialogButtonBox;
class QLineEdit;

namespace s3fm {

// Confirms deleting a bucket. An empty bucket needs a plain confirmation; a
// non-empty one must be emptied first, which needs the bucket name typed in.
class DeleteBucketDialog : public QDialog
{
    Q_OBJECT

public:
    DeleteBucketDialog(const QString& bucket, const S3BucketService::Contents& contents,
                       QWidget* parent = nullptr);

    bool emptyFirst() const;
    bool bypassGovernance() const;
    bool canAccept() const;

private:
    void update();

    QString m_bucket;
    bool m_empty;
    QCheckBox* m_emptyFirst = nullptr;
    QCheckBox* m_bypass = nullptr;
    QLineEdit* m_confirm = nullptr;
    QDialogButtonBox* m_buttons;
};

} // namespace s3fm
