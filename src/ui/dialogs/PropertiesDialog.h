#pragma once

#include "connections/ConnectionProfile.h"
#include "core/Entry.h"
#include "providers/s3/S3Types.h"

#include <QDialog>

#include <functional>
#include <memory>
#include <optional>

class QCheckBox;
class QComboBox;
class QDateTimeEdit;
class QFormLayout;
class QLabel;
class QLineEdit;
class QPushButton;
class QTabWidget;
class QTableWidget;

namespace s3fm {

class ConnectionStore;
class EncryptionPicker;
class KeyValueEditor;
class ProviderRegistry;
class S3ObjectService;

// Properties of a file, folder, bucket or S3 object. For S3 objects the dialog
// has tabs to edit metadata, tags, storage class and encryption, ACL and Object
// Lock settings, and to compare stored checksums with a local file.
class PropertiesDialog : public QDialog
{
    Q_OBJECT

public:
    PropertiesDialog(ProviderRegistry* registry, const Entry& entry,
                     std::optional<ConnectionProfile> profile = std::nullopt, QWidget* parent = nullptr);
    ~PropertiesDialog() override;

    // Enables SSE-C key management (keys live in the connection store's keychain).
    void setConnectionStore(ConnectionStore* store) { m_connections = store; }

    // Rows shown in the "General" form, label -> value (for tests).
    QList<QPair<QString, QString>> generalRows() const { return m_rows; }
    bool isLoading() const { return m_loading; }
    QTabWidget* tabs() const { return m_tabs; }
    const std::optional<ObjectDetails>& details() const { return m_details; }
    QString statusText() const;
    void reload();

Q_SIGNALS:
    void objectChanged(const s3fm::Location& location);

private:
    QWidget* buildGeneralTab(const Entry& entry);
    QWidget* buildMetadataTab();
    QWidget* buildTagsTab();
    QWidget* buildStorageTab();
    QWidget* buildPermissionsTab();
    QWidget* buildLockTab();
    QWidget* buildChecksumsTab();

    void populate(const Entry& entry);
    void showDetails(const ObjectDetails& details);
    void addRow(const QString& label, const QString& value);
    void setStatus(const QString& text, bool error = false);
    // Runs `fn` on the I/O pool, then reloads and reports.
    void runAction(const QString& done, std::function<VoidResult()> fn);

    void applyMetadata();
    void applyTags();
    void applyStorage();
    void applyAcl();
    void applyLock();
    void compareChecksums();
    void manageCustomerKey();

    ProviderRegistry* m_registry;
    ConnectionStore* m_connections = nullptr;
    std::shared_ptr<S3ObjectService> m_service;
    Entry m_entry;
    std::optional<ConnectionProfile> m_profile;
    std::optional<ObjectDetails> m_details;

    QLabel* m_title;
    QLabel* m_status;
    QTabWidget* m_tabs;
    QFormLayout* m_form;
    QTableWidget* m_metadata;
    QList<QPair<QString, QString>> m_rows;
    bool m_loading = false;

    // Metadata tab
    QLineEdit* m_contentType = nullptr;
    QLineEdit* m_cacheControl = nullptr;
    QLineEdit* m_contentDisposition = nullptr;
    QLineEdit* m_contentEncoding = nullptr;
    QLineEdit* m_contentLanguage = nullptr;
    QLineEdit* m_expires = nullptr;
    KeyValueEditor* m_userMetadata = nullptr;
    // Tags tab
    KeyValueEditor* m_tags = nullptr;
    QLabel* m_tagsNote = nullptr;
    // Storage tab
    QComboBox* m_storageClass = nullptr;
    EncryptionPicker* m_encryption = nullptr;
    QLabel* m_storageNote = nullptr;
    // Permissions tab
    QLabel* m_owner = nullptr;
    QTableWidget* m_grants = nullptr;
    QComboBox* m_cannedAcl = nullptr;
    QLabel* m_aclNote = nullptr;
    QPushButton* m_applyAcl = nullptr;
    // Object Lock tab
    QLabel* m_lockNote = nullptr;
    QComboBox* m_lockMode = nullptr;
    QDateTimeEdit* m_retainUntil = nullptr;
    QCheckBox* m_bypass = nullptr;
    QCheckBox* m_legalHold = nullptr;
    QPushButton* m_applyLock = nullptr;
    // Checksums tab
    QTableWidget* m_checksums = nullptr;
};

} // namespace s3fm
