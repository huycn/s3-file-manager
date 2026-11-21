#pragma once

#include "providers/s3/S3VersionService.h"

#include <QDialog>

#include <memory>

class QLabel;
class QLineEdit;
class QPushButton;
class QTableWidget;

namespace s3fm {

// Incomplete multipart uploads of a bucket: their parts are stored and billed but
// form no object. Shows age and size; aborts selected or all.
class MultipartUploadsDialog : public QDialog
{
    Q_OBJECT

public:
    MultipartUploadsDialog(std::shared_ptr<S3VersionService> service, const QString& bucket,
                           const QString& prefix = {}, QWidget* parent = nullptr);

    bool isBusy() const { return m_busy; }
    QList<PendingUpload> uploads() const { return m_uploads; }
    void selectAll();
    void abortSelected(bool confirm = true);
    void reload();

private:
    void fill();
    void updateButtons();

    std::shared_ptr<S3VersionService> m_service;
    QString m_bucket;
    QList<PendingUpload> m_uploads;
    bool m_busy = false;
    QLineEdit* m_prefix;
    QTableWidget* m_table;
    QLabel* m_status;
    QPushButton* m_abort;
    QPushButton* m_abortAll;
};

} // namespace s3fm
