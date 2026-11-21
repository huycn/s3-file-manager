#pragma once

#include "connections/ConnectionProfile.h"

#include <QDialog>

#include <optional>

class QCheckBox;
class QComboBox;
class QLabel;
class QLineEdit;
class QListWidget;
class QPushButton;
class QSpinBox;
class QStackedWidget;

namespace s3fm {

class ConnectionStore;

// Connection manager: list of saved profiles with an editor, "Test connection",
// import from ~/.aws, and "Open" to browse a connection.
class ConnectionDialog : public QDialog
{
    Q_OBJECT

public:
    explicit ConnectionDialog(ConnectionStore* store, QWidget* parent = nullptr);

    // Selects a profile (or starts a new one when `id` is empty).
    void selectProfile(const QString& id);
    // Id chosen with "Open", if any.
    QString openRequestedId() const { return m_openId; }

    // Editor state, exposed for tests.
    ConnectionProfile editedProfile() const;
    std::optional<ConnectionSecret> editedSecret() const;
    bool save();

protected:
    void done(int result) override;

private:
    void buildUi();
    void reloadList(const QString& select = {});
    void loadIntoEditor(const ConnectionProfile& profile, bool isNew);
    void applyPreset(ConnectionProfile::Preset preset);
    void addNew(ConnectionProfile::Preset preset);
    void duplicateCurrent();
    void deleteCurrent();
    void importAwsProfiles();
    void testCurrent();
    void updateCredentialPage();
    bool confirmDiscard();
    void setDirty(bool dirty);

    ConnectionStore* m_store;
    QString m_currentId; // id of the profile being edited ("" = none)
    bool m_isNew = false;
    bool m_dirty = false;
    bool m_loading = false;
    QString m_openId;

    QListWidget* m_list;
    QPushButton* m_duplicate;
    QPushButton* m_delete;
    QWidget* m_editor;
    QLineEdit* m_name;
    QLineEdit* m_id;
    QComboBox* m_preset;
    QLineEdit* m_endpoint;
    QComboBox* m_region;
    QComboBox* m_addressing;
    QComboBox* m_credentialSource;
    QStackedWidget* m_credentialPages;
    QLineEdit* m_accessKey;
    QLineEdit* m_secretKey;
    QLineEdit* m_sessionToken;
    QComboBox* m_awsProfile;
    QLabel* m_credentialHint;
    QCheckBox* m_verifyTls;
    QLineEdit* m_caBundle;
    QComboBox* m_checksums;
    QComboBox* m_storageClass;
    QLineEdit* m_pinnedBuckets;
    QLineEdit* m_requesterPays;
    QSpinBox* m_requestTimeout;
    QLabel* m_testResult;
    QPushButton* m_test;
    QPushButton* m_save;
    QPushButton* m_open;
};

} // namespace s3fm
