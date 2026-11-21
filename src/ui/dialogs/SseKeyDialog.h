#pragma once

#include <QDialog>

class QCheckBox;
class QLabel;
class QLineEdit;

namespace s3fm {

class ConnectionStore;

// Sets, generates or removes the SSE-C key of a bucket (or of every bucket of a
// connection). Keys are stored in the OS keychain; S3 never stores them, so a lost
// key means unreadable objects.
class SseKeyDialog : public QDialog
{
    Q_OBJECT

public:
    SseKeyDialog(ConnectionStore* store, const QString& connectionId, const QString& bucket,
                 QWidget* parent = nullptr);

private:
    void save();
    void removeKey();

    ConnectionStore* m_store;
    QString m_connection;
    QString m_bucket;
    QLabel* m_state;
    QLineEdit* m_key;
    QCheckBox* m_allBuckets;
};

} // namespace s3fm
