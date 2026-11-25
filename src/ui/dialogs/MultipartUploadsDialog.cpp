#include "ui/dialogs/MultipartUploadsDialog.h"

#include "core/Async.h"
#include "core/Format.h"

#include <QDialogButtonBox>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPointer>
#include <QPushButton>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

namespace {

QString age(const QDateTime& when)
{
    if (!when.isValid())
        return {};
    const qint64 secs = when.secsTo(QDateTime::currentDateTimeUtc());
    if (secs < 3600)
        return MultipartUploadsDialog::tr("%n minute(s)", nullptr, int(qMax<qint64>(0, secs / 60)));
    if (secs < qint64{86400} * 2)
        return MultipartUploadsDialog::tr("%n hour(s)", nullptr, int(secs / 3600));
    return MultipartUploadsDialog::tr("%n day(s)", nullptr, int(secs / 86400));
}

constexpr int kCountLimit = 200; // uploads whose parts are counted automatically

} // namespace

MultipartUploadsDialog::MultipartUploadsDialog(std::shared_ptr<S3VersionService> service,
                                               const QString& bucket, const QString& prefix, QWidget* parent)
    : QDialog(parent), m_service(std::move(service)), m_bucket(bucket)
{
    setWindowTitle(tr("Incomplete Multipart Uploads — %1").arg(bucket));
    resize(820, 440);
    auto* layout = new QVBoxLayout(this);
    auto* intro =
        new QLabel(tr("Interrupted uploads keep their parts (and their storage cost) until they are "
                      "completed or aborted. A bucket lifecycle rule can abort them automatically."),
                   this);
    intro->setWordWrap(true);
    layout->addWidget(intro);
    auto* filter = new QHBoxLayout;
    filter->addWidget(new QLabel(tr("Key prefix:"), this));
    m_prefix = new QLineEdit(prefix, this);
    m_prefix->setObjectName(QStringLiteral("prefix"));
    m_prefix->setPlaceholderText(tr("(whole bucket)"));
    filter->addWidget(m_prefix, 1);
    auto* refresh = new QPushButton(tr("Refresh"), this);
    filter->addWidget(refresh);
    layout->addLayout(filter);

    m_table = new QTableWidget(0, 6, this);
    m_table->setObjectName(QStringLiteral("uploads"));
    m_table->setHorizontalHeaderLabels(
        {tr("Key"), tr("Started"), tr("Age"), tr("Parts"), tr("Size"), tr("Storage class")});
    m_table->horizontalHeader()->setSectionResizeMode(0, QHeaderView::Stretch);
    m_table->verticalHeader()->hide();
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_table->setSelectionMode(QAbstractItemView::ExtendedSelection);
    layout->addWidget(m_table, 1);
    m_status = new QLabel(this);
    m_status->setWordWrap(true);
    layout->addWidget(m_status);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    m_abort = buttons->addButton(tr("Abort &Selected…"), QDialogButtonBox::ActionRole);
    m_abortAll = buttons->addButton(tr("Abort &All…"), QDialogButtonBox::ActionRole);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);

    connect(refresh, &QPushButton::clicked, this, &MultipartUploadsDialog::reload);
    connect(m_prefix, &QLineEdit::returnPressed, this, &MultipartUploadsDialog::reload);
    connect(m_table, &QTableWidget::itemSelectionChanged, this, &MultipartUploadsDialog::updateButtons);
    connect(m_abort, &QPushButton::clicked, this, [this] { abortSelected(true); });
    connect(m_abortAll, &QPushButton::clicked, this, [this] {
        selectAll();
        abortSelected(true);
    });
    reload();
}

void MultipartUploadsDialog::updateButtons()
{
    m_abort->setEnabled(!m_busy && !m_table->selectionModel()->selectedRows().isEmpty());
    m_abortAll->setEnabled(!m_busy && !m_uploads.isEmpty());
}

void MultipartUploadsDialog::selectAll()
{
    m_table->selectAll();
}

void MultipartUploadsDialog::fill()
{
    m_table->setRowCount(0);
    qint64 total = 0;
    for (const PendingUpload& u : std::as_const(m_uploads)) {
        const int row = m_table->rowCount();
        m_table->insertRow(row);
        m_table->setItem(row, 0, new QTableWidgetItem(u.key));
        m_table->item(row, 0)->setToolTip(tr("Upload ID: %1\nStarted by: %2").arg(u.uploadId, u.initiator));
        m_table->setItem(row, 1, new QTableWidgetItem(formatDateTime(u.initiated)));
        m_table->setItem(row, 2, new QTableWidgetItem(age(u.initiated)));
        m_table->setItem(row, 3, new QTableWidgetItem(u.parts >= 0 ? QString::number(u.parts) : QString()));
        m_table->setItem(row, 4, new QTableWidgetItem(u.size >= 0 ? formatSize(u.size) : QString()));
        m_table->setItem(row, 5, new QTableWidgetItem(u.storageClass));
        total += qMax<qint64>(0, u.size);
    }
    m_status->setText(
        m_uploads.isEmpty()
            ? tr("No incomplete uploads. (Some S3-compatible services list uploads only for an exact "
                 "object key: enter it as the prefix.)")
            : tr("%n incomplete upload(s), %1 stored.", nullptr, int(m_uploads.size()))
                  .arg(formatSize(total)));
    updateButtons();
}

void MultipartUploadsDialog::reload()
{
    m_busy = true;
    updateButtons();
    m_status->setText(tr("Loading…"));
    QPointer<MultipartUploadsDialog> guard(this);
    auto service = m_service;
    const QString bucket = m_bucket;
    const QString prefix = m_prefix->text();
    runIo([service, bucket, prefix]() -> Result<QList<PendingUpload>> {
        OperationContext ctx;
        auto list = service->pendingUploads(bucket, prefix, ctx);
        if (!list)
            return list;
        for (int i = 0; i < list->size() && i < kCountLimit; ++i)
            (void)service->countParts(bucket, (*list)[i], ctx); // best effort
        return list;
    }).then(this, [guard](Result<QList<PendingUpload>> result) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_busy = false;
        if (!result) {
            self->m_uploads.clear();
            self->fill();
            self->m_status->setText(result.error().toString());
            return;
        }
        self->m_uploads = result.value();
        self->fill();
    });
}

void MultipartUploadsDialog::abortSelected(bool confirm)
{
    QList<PendingUpload> chosen;
    const auto rows = m_table->selectionModel()->selectedRows();
    for (const QModelIndex& index : rows) {
        if (index.row() < m_uploads.size())
            chosen.push_back(m_uploads[index.row()]);
    }
    if (chosen.isEmpty())
        return;
    if (confirm && QMessageBox::warning(this, tr("Abort Uploads"),
                                        tr("Abort %n upload(s)? Their uploaded parts are deleted.", nullptr,
                                           int(chosen.size())),
                                        QMessageBox::Yes | QMessageBox::Cancel) != QMessageBox::Yes)
        return;
    m_busy = true;
    updateButtons();
    m_status->setText(tr("Aborting…"));
    QPointer<MultipartUploadsDialog> guard(this);
    auto service = m_service;
    const QString bucket = m_bucket;
    runIo([service, bucket, chosen] {
        QStringList failures;
        for (const PendingUpload& u : chosen) {
            if (auto r = service->abortUpload(bucket, u); !r)
                failures.push_back(u.key + QStringLiteral(": ") + r.error().toString());
        }
        return failures;
    }).then(this, [guard](const QStringList& failures) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_busy = false;
        self->reload();
        if (!failures.isEmpty())
            QMessageBox::warning(self, tr("Abort Uploads"), failures.join(u'\n'));
    });
}

} // namespace s3fm
