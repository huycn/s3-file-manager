#include "ui/dialogs/VersionHistoryDialog.h"

#include "core/Async.h"
#include "core/Format.h"
#include "providers/s3/S3VersionService.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QDir>
#include <QFileDialog>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QMessageBox>
#include <QPointer>
#include <QPushButton>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

VersionHistoryDialog::VersionHistoryDialog(std::shared_ptr<S3VersionService> service, const Location& object,
                                           QWidget* parent)
    : QDialog(parent), m_service(std::move(service)), m_object(object)
{
    setWindowTitle(tr("Version History — %1").arg(object.name()));
    resize(760, 460);
    auto* layout = new QVBoxLayout(this);
    auto* title = new QLabel(QStringLiteral("<b>%1</b>").arg(object.displayString().toHtmlEscaped()), this);
    title->setTextInteractionFlags(Qt::TextSelectableByMouse);
    layout->addWidget(title);

    m_table = new QTableWidget(0, 5, this);
    m_table->setObjectName(QStringLiteral("versions"));
    m_table->setHorizontalHeaderLabels(
        {tr("Modified"), tr("Size"), tr("Storage class"), tr("State"), tr("Version ID")});
    m_table->horizontalHeader()->setStretchLastSection(true);
    m_table->verticalHeader()->hide();
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_table->setSelectionMode(QAbstractItemView::ExtendedSelection);
    layout->addWidget(m_table, 1);

    auto* row = new QHBoxLayout;
    auto button = [this, row](const QString& text, const char* name) {
        auto* b = new QPushButton(text, this);
        b->setObjectName(QString::fromLatin1(name));
        row->addWidget(b);
        return b;
    };
    m_viewButton = button(tr("&View"), "view");
    m_downloadButton = button(tr("&Download…"), "download");
    m_restoreButton = button(tr("&Restore as Current"), "restore");
    m_deleteButton = button(tr("Delete &Permanently…"), "delete");
    m_undeleteButton = button(tr("&Undelete"), "undelete");
    row->addStretch(1);
    layout->addLayout(row);
    m_bypass = new QCheckBox(tr("Bypass governance-mode retention when deleting"), this);
    m_bypass->setObjectName(QStringLiteral("bypassGovernance"));
    layout->addWidget(m_bypass);
    m_status = new QLabel(this);
    m_status->setWordWrap(true);
    layout->addWidget(m_status);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    QPushButton* refresh = buttons->addButton(tr("Refresh"), QDialogButtonBox::ActionRole);
    connect(refresh, &QPushButton::clicked, this, &VersionHistoryDialog::reload);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);

    connect(m_table, &QTableWidget::itemSelectionChanged, this, &VersionHistoryDialog::updateButtons);
    connect(m_table, &QTableWidget::cellDoubleClicked, this, [this] {
        if (m_viewButton->isEnabled())
            m_viewButton->click();
    });
    connect(m_viewButton, &QPushButton::clicked, this, [this] {
        const EntryList sel = selectedVersions();
        if (sel.size() == 1 && m_view)
            m_view(sel.first());
    });
    connect(m_downloadButton, &QPushButton::clicked, this, &VersionHistoryDialog::download);
    connect(m_restoreButton, &QPushButton::clicked, this, &VersionHistoryDialog::restore);
    connect(m_deleteButton, &QPushButton::clicked, this, &VersionHistoryDialog::deleteSelected);
    connect(m_undeleteButton, &QPushButton::clicked, this, &VersionHistoryDialog::undelete);
    reload();
}

QString VersionHistoryDialog::statusText() const
{
    return m_status->text();
}

void VersionHistoryDialog::selectRow(int row)
{
    m_table->clearSelection();
    m_table->selectRow(row);
}

EntryList VersionHistoryDialog::selectedVersions() const
{
    EntryList out;
    const auto rows = m_table->selectionModel()->selectedRows();
    for (const QModelIndex& index : rows) {
        if (index.row() < m_versions.size())
            out.push_back(m_versions[index.row()]);
    }
    return out;
}

void VersionHistoryDialog::updateButtons()
{
    const EntryList sel = selectedVersions();
    const bool one = sel.size() == 1;
    const bool hasData = one && !sel.first().isDeleteMarker;
    m_viewButton->setEnabled(!m_busy && hasData && m_view);
    m_downloadButton->setEnabled(!m_busy && hasData);
    m_restoreButton->setEnabled(!m_busy && hasData && !sel.first().isLatest);
    m_deleteButton->setEnabled(!m_busy && !sel.isEmpty());
    m_undeleteButton->setEnabled(!m_busy && !m_versions.isEmpty() && m_versions.first().isLatest &&
                                 m_versions.first().isDeleteMarker);
}

void VersionHistoryDialog::reload()
{
    m_busy = true;
    updateButtons();
    m_status->setText(tr("Loading versions…"));
    QPointer<VersionHistoryDialog> guard(this);
    auto service = m_service;
    const Location object = m_object;
    runIo([service, object] {
        OperationContext ctx;
        return service->versions(object, ctx);
    }).then(this, [guard](Result<EntryList> result) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_busy = false;
        if (!result) {
            self->m_status->setText(result.error().toString());
            self->updateButtons();
            return;
        }
        self->m_versions = result.value();
        self->m_table->setRowCount(0);
        for (const Entry& v : std::as_const(self->m_versions)) {
            const int row = self->m_table->rowCount();
            self->m_table->insertRow(row);
            QString state;
            if (v.isDeleteMarker)
                state = v.isLatest ? tr("Delete marker (object deleted)") : tr("Delete marker");
            else
                state = v.isLatest ? tr("Current") : tr("Previous");
            self->m_table->setItem(row, 0, new QTableWidgetItem(formatDateTime(v.modified)));
            self->m_table->setItem(row, 1,
                                   new QTableWidgetItem(v.isDeleteMarker ? QString() : formatSize(v.size)));
            self->m_table->setItem(row, 2, new QTableWidgetItem(v.storageClass));
            self->m_table->setItem(row, 3, new QTableWidgetItem(state));
            self->m_table->setItem(row, 4, new QTableWidgetItem(v.versionId));
        }
        self->m_table->resizeColumnsToContents();
        self->m_status->setText(self->m_versions.isEmpty() ? tr("No versions found.")
                                                           : tr("%n version(s) and delete marker(s).",
                                                                nullptr, int(self->m_versions.size())));
        self->updateButtons();
    });
}

void VersionHistoryDialog::run(const QString& done, std::function<VoidResult()> fn)
{
    m_busy = true;
    updateButtons();
    m_status->setText(tr("Working…"));
    QPointer<VersionHistoryDialog> guard(this);
    const Location object = m_object;
    runIo(std::move(fn)).then(this, [guard, done, object](const VoidResult& result) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_busy = false;
        if (!result) {
            self->m_status->setText(result.error().toString());
            self->updateButtons();
            return;
        }
        Q_EMIT self->objectChanged(object);
        self->reload();
        self->m_status->setText(done);
    });
}

void VersionHistoryDialog::download()
{
    const EntryList sel = selectedVersions();
    if (sel.size() != 1)
        return;
    const QString file =
        QFileDialog::getSaveFileName(this, tr("Download Version"), QDir::homePath() + u'/' + m_object.name());
    if (file.isEmpty())
        return;
    auto service = m_service;
    const Location object = m_object;
    const QString version = sel.first().versionId;
    run(tr("Saved %1").arg(QDir::toNativeSeparators(file)), [service, object, version, file] {
        OperationContext ctx;
        return service->downloadVersion(object, version, file, ctx);
    });
}

void VersionHistoryDialog::restore()
{
    const EntryList sel = selectedVersions();
    if (sel.size() != 1)
        return;
    auto service = m_service;
    const Location object = m_object;
    const QString version = sel.first().versionId;
    run(tr("The selected version is the current version again."), [service, object, version] {
        OperationContext ctx;
        return service->restoreVersion(object, version, ctx);
    });
}

void VersionHistoryDialog::deleteSelected()
{
    const EntryList sel = selectedVersions();
    if (sel.isEmpty())
        return;
    QMessageBox box(QMessageBox::Warning, tr("Delete Versions"),
                    tr("Permanently delete %n version(s)? This cannot be undone.", nullptr, int(sel.size())),
                    QMessageBox::Yes | QMessageBox::Cancel, this);
    box.setDefaultButton(QMessageBox::Cancel);
    if (box.exec() != QMessageBox::Yes)
        return;
    auto service = m_service;
    const bool bypass = m_bypass->isChecked();
    run(tr("Deleted %n version(s).", nullptr, int(sel.size())), [service, sel, bypass] {
        OperationContext ctx;
        return service->deleteVersions(sel, bypass, ctx);
    });
}

void VersionHistoryDialog::undelete()
{
    auto service = m_service;
    const Location object = m_object;
    run(tr("The object is back."), [service, object] {
        OperationContext ctx;
        return service->undelete(object, ctx);
    });
}

} // namespace s3fm
