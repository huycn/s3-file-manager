#pragma once

#include "providers/s3/S3Types.h"

#include <QWidget>

class QComboBox;

namespace s3fm {

// Server-side encryption choice: none / SSE-S3 / SSE-KMS (+ key) / SSE-C. Used KMS
// key ids are remembered (QSettings) and offered again.
class EncryptionPicker : public QWidget
{
    Q_OBJECT

public:
    explicit EncryptionPicker(QWidget* parent = nullptr, bool offerDefault = false);

    // `offerDefault`: the first choice means "bucket default / unchanged" and
    // encryption() returns nullopt for it.
    void setEncryption(const std::optional<ObjectEncryption>& encryption);
    std::optional<ObjectEncryption> encryption() const;
    // Remembers the chosen KMS key for next time.
    void rememberKey() const;

    // TransferOptions/TransferParams representation ("", "AES256", "aws:kms", "SSE-C").
    static QString sseName(const std::optional<ObjectEncryption>& encryption);
    static std::optional<ObjectEncryption> fromSseName(const QString& sse, const QString& kmsKeyId);

Q_SIGNALS:
    void changed();

private:
    void updateKeyField();

    QComboBox* m_mode;
    QComboBox* m_kmsKey;
    bool m_offerDefault;
};

} // namespace s3fm
