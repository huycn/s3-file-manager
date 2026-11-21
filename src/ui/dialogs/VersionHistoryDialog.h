#pragma once

#include "core/Entry.h"
#include "core/Error.h"

#include <QDialog>

#include <functional>
#include <memory>

class QCheckBox;
class QLabel;
class QPushButton;
class QTableWidget;

namespace s3fm {

class S3VersionService;

// Versions and delete markers of one object: download or view a version, make it
// current again, delete versions permanently, undelete.
class VersionHistoryDialog : public QDialog
{
    Q_OBJECT

public:
    using ViewFn = std::function<void(const Entry& version)>;

    VersionHistoryDialog(std::shared_ptr<S3VersionService> service, const Location& object,
                         QWidget* parent = nullptr);
    // Opens a version in the viewer (set by the main window).
    void setViewer(ViewFn view) { m_view = std::move(view); }

    bool isBusy() const { return m_busy; }
    EntryList versions() const { return m_versions; }
    void selectRow(int row);
    QString statusText() const;
    void reload();

Q_SIGNALS:
    void objectChanged(const s3fm::Location& location);

private:
    EntryList selectedVersions() const;
    void updateButtons();
    void run(const QString& done, std::function<VoidResult()> fn);
    void download();
    void restore();
    void deleteSelected();
    void undelete();

    std::shared_ptr<S3VersionService> m_service;
    Location m_object;
    EntryList m_versions;
    ViewFn m_view;
    bool m_busy = false;
    QTableWidget* m_table;
    QLabel* m_status;
    QCheckBox* m_bypass;
    QPushButton* m_downloadButton;
    QPushButton* m_viewButton;
    QPushButton* m_restoreButton;
    QPushButton* m_deleteButton;
    QPushButton* m_undeleteButton;
};

} // namespace s3fm
