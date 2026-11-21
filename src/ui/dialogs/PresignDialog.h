#pragma once

#include "core/Location.h"

#include <QDialog>
#include <QImage>

#include <memory>

class QComboBox;
class QLabel;
class QPlainTextEdit;
class QPushButton;
class QSpinBox;

namespace s3fm {

class S3ObjectService;

// Creates presigned GET (download) or PUT (upload) URLs for an object, with an
// expiry, a copy button and an optional QR code.
class PresignDialog : public QDialog
{
    Q_OBJECT

public:
    PresignDialog(std::shared_ptr<S3ObjectService> service, const Location& object,
                  QWidget* parent = nullptr);

    QString url() const;
    bool isBusy() const { return m_busy; }
    static bool hasQrCode();
    // QR code of `text` as an image (null if unavailable or too long).
    static QImage qrCode(const QString& text, int scale = 4);

private:
    void generate();
    qint64 seconds() const;

    std::shared_ptr<S3ObjectService> m_service;
    Location m_object;
    QComboBox* m_method;
    QSpinBox* m_amount;
    QComboBox* m_unit;
    QPlainTextEdit* m_url;
    QLabel* m_expires;
    QLabel* m_warning;
    QLabel* m_qr;
    QPushButton* m_copy;
    bool m_busy = false;
};

} // namespace s3fm
