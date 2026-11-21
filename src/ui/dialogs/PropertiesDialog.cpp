#include "ui/dialogs/PropertiesDialog.h"

#include "connections/ConnectionStore.h"
#include "connections/S3Urls.h"
#include "core/Async.h"
#include "core/Format.h"
#include "core/Provider.h"
#include "core/ProviderRegistry.h"
#include "models/IconCache.h"
#include "providers/s3/S3ObjectService.h"
#include "ui/dialogs/SseKeyDialog.h"
#include "ui/widgets/EncryptionPicker.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDateTimeEdit>
#include <QDialogButtonBox>
#include <QFileDialog>
#include <QFormLayout>
#include <QGroupBox>
#include <QHeaderView>
#include <QLabel>
#include <QLineEdit>
#include <QPointer>
#include <QPushButton>
#include <QTabWidget>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

namespace {

QString permissionString(QFileDevice::Permissions p)
{
    QString s;
    s += p.testFlag(QFileDevice::ReadOwner) ? u'r' : u'-';
    s += p.testFlag(QFileDevice::WriteOwner) ? u'w' : u'-';
    s += p.testFlag(QFileDevice::ExeOwner) ? u'x' : u'-';
    s += p.testFlag(QFileDevice::ReadGroup) ? u'r' : u'-';
    s += p.testFlag(QFileDevice::WriteGroup) ? u'w' : u'-';
    s += p.testFlag(QFileDevice::ExeGroup) ? u'x' : u'-';
    s += p.testFlag(QFileDevice::ReadOther) ? u'r' : u'-';
    s += p.testFlag(QFileDevice::WriteOther) ? u'w' : u'-';
    s += p.testFlag(QFileDevice::ExeOther) ? u'x' : u'-';
    return s;
}

QLineEdit* lineEdit(QWidget* parent, const char* name, const QString& placeholder = {})
{
    auto* e = new QLineEdit(parent);
    e->setObjectName(QString::fromLatin1(name));
    e->setPlaceholderText(placeholder);
    return e;
}

QPushButton* applyButton(QWidget* parent, const char* name)
{
    auto* b = new QPushButton(PropertiesDialog::tr("Apply"), parent);
    b->setObjectName(QString::fromLatin1(name));
    return b;
}

} // namespace

PropertiesDialog::PropertiesDialog(ProviderRegistry* registry, const Entry& entry,
                                   std::optional<ConnectionProfile> profile, QWidget* parent)
    : QDialog(parent), m_registry(registry), m_entry(entry), m_profile(std::move(profile))
{
    setWindowTitle(tr("Properties — %1").arg(entry.name));
    resize(640, 600);
    auto* layout = new QVBoxLayout(this);

    auto* header = new QHBoxLayout;
    auto* icon = new QLabel(this);
    icon->setPixmap(IconCache::instance().iconFor(entry).pixmap(32, 32));
    header->addWidget(icon);
    m_title = new QLabel(QStringLiteral("<b>%1</b>").arg(entry.name.toHtmlEscaped()), this);
    m_title->setTextInteractionFlags(Qt::TextSelectableByMouse);
    header->addWidget(m_title, 1);
    layout->addLayout(header);

    const bool s3Object = entry.location.isS3() && !entry.location.bucket().isEmpty() && !entry.isDirectory();
    if (s3Object && registry)
        m_service = S3ObjectService::forLocation(*registry, entry.location);

    m_tabs = new QTabWidget(this);
    m_tabs->addTab(buildGeneralTab(entry), tr("General"));
    if (m_service) {
        m_tabs->addTab(buildMetadataTab(), tr("Metadata"));
        m_tabs->addTab(buildTagsTab(), tr("Tags"));
        m_tabs->addTab(buildStorageTab(), tr("Storage && Encryption"));
        m_tabs->addTab(buildPermissionsTab(), tr("Permissions"));
        m_tabs->addTab(buildLockTab(), tr("Object Lock"));
        m_tabs->addTab(buildChecksumsTab(), tr("Checksums"));
        for (int i = 1; i < m_tabs->count(); ++i)
            m_tabs->widget(i)->setEnabled(false);
    }
    layout->addWidget(m_tabs, 1);

    m_status = new QLabel(this);
    m_status->setWordWrap(true);
    m_status->setObjectName(QStringLiteral("status"));
    layout->addWidget(m_status);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);

    populate(entry);
    if (s3Object)
        reload();
}

PropertiesDialog::~PropertiesDialog() = default;

QString PropertiesDialog::statusText() const
{
    return m_status->text();
}

void PropertiesDialog::setStatus(const QString& text, bool error)
{
    m_status->setText(text);
    m_status->setStyleSheet(
        error ? QStringLiteral("color: palette(bright-text); background: #b3261e; padding: 4px") : QString());
}

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------

QWidget* PropertiesDialog::buildGeneralTab(const Entry& entry)
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    auto* form = new QWidget(page);
    m_form = new QFormLayout(form);
    m_form->setContentsMargins(0, 0, 0, 0);
    layout->addWidget(form);
    auto* metaBox = new QGroupBox(tr("All headers"), page);
    auto* metaLayout = new QVBoxLayout(metaBox);
    m_metadata = new QTableWidget(0, 2, metaBox);
    m_metadata->setHorizontalHeaderLabels({tr("Key"), tr("Value")});
    m_metadata->horizontalHeader()->setStretchLastSection(true);
    m_metadata->verticalHeader()->hide();
    m_metadata->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_metadata->setSelectionBehavior(QAbstractItemView::SelectRows);
    metaLayout->addWidget(m_metadata);
    layout->addWidget(metaBox, 1);
    const bool showHeaders = entry.location.isS3() && !entry.isDirectory();
    metaBox->setVisible(showHeaders);
    if (!showHeaders)
        layout->addStretch(1);
    return page;
}

QWidget* PropertiesDialog::buildMetadataTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    auto* form = new QFormLayout;
    m_contentType = lineEdit(page, "contentType", QStringLiteral("text/plain"));
    m_cacheControl = lineEdit(page, "cacheControl", QStringLiteral("max-age=3600"));
    m_contentDisposition =
        lineEdit(page, "contentDisposition", QStringLiteral("attachment; filename=\"x.pdf\""));
    m_contentEncoding = lineEdit(page, "contentEncoding", QStringLiteral("gzip"));
    m_contentLanguage = lineEdit(page, "contentLanguage", QStringLiteral("en-US"));
    m_expires = lineEdit(page, "expires", QStringLiteral("Wed, 21 Oct 2026 07:28:00 GMT"));
    form->addRow(tr("Content-Type:"), m_contentType);
    form->addRow(tr("Cache-Control:"), m_cacheControl);
    form->addRow(tr("Content-Disposition:"), m_contentDisposition);
    form->addRow(tr("Content-Encoding:"), m_contentEncoding);
    form->addRow(tr("Content-Language:"), m_contentLanguage);
    form->addRow(tr("Expires:"), m_expires);
    layout->addLayout(form);
    layout->addWidget(new QLabel(tr("User metadata (x-amz-meta-…):"), page));
    m_userMetadata = new KeyValueEditor(tr("Key"), tr("Value"), page);
    m_userMetadata->setObjectName(QStringLiteral("userMetadata"));
    layout->addWidget(m_userMetadata, 1);
    auto* note = new QLabel(tr("<small>S3 stores headers with the object: applying copies the object onto "
                               "itself. Its ACL is reset to the bucket default; tags are kept.</small>"),
                            page);
    note->setWordWrap(true);
    layout->addWidget(note);
    auto* apply = applyButton(page, "applyMetadata");
    layout->addWidget(apply, 0, Qt::AlignRight);
    connect(apply, &QPushButton::clicked, this, &PropertiesDialog::applyMetadata);
    return page;
}

QWidget* PropertiesDialog::buildTagsTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    m_tags = new KeyValueEditor(tr("Tag"), tr("Value"), page);
    m_tags->setObjectName(QStringLiteral("tags"));
    m_tags->setMaxRows(10);
    layout->addWidget(m_tags, 1);
    m_tagsNote =
        new QLabel(tr("<small>Up to 10 tags; keys up to 128 and values up to 256 characters.</small>"), page);
    m_tagsNote->setWordWrap(true);
    layout->addWidget(m_tagsNote);
    auto* apply = applyButton(page, "applyTags");
    layout->addWidget(apply, 0, Qt::AlignRight);
    connect(apply, &QPushButton::clicked, this, &PropertiesDialog::applyTags);
    return page;
}

QWidget* PropertiesDialog::buildStorageTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    auto* form = new QFormLayout;
    m_storageClass = new QComboBox(page);
    m_storageClass->setObjectName(QStringLiteral("storageClass"));
    m_storageClass->addItems(storageClassNames());
    form->addRow(tr("Storage class:"), m_storageClass);
    m_encryption = new EncryptionPicker(page);
    form->addRow(tr("Encryption:"), m_encryption);
    auto* keyButton = new QPushButton(tr("Customer Key (SSE-C)…"), page);
    keyButton->setObjectName(QStringLiteral("customerKey"));
    form->addRow(QString(), keyButton);
    layout->addLayout(form);
    m_storageNote = new QLabel(page);
    m_storageNote->setWordWrap(true);
    layout->addWidget(m_storageNote);
    layout->addStretch(1);
    auto* apply = applyButton(page, "applyStorage");
    layout->addWidget(apply, 0, Qt::AlignRight);
    connect(apply, &QPushButton::clicked, this, &PropertiesDialog::applyStorage);
    connect(keyButton, &QPushButton::clicked, this, &PropertiesDialog::manageCustomerKey);
    return page;
}

QWidget* PropertiesDialog::buildPermissionsTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    m_aclNote = new QLabel(page);
    m_aclNote->setWordWrap(true);
    layout->addWidget(m_aclNote);
    auto* form = new QFormLayout;
    m_owner = new QLabel(page);
    m_owner->setTextInteractionFlags(Qt::TextSelectableByMouse);
    form->addRow(tr("Owner:"), m_owner);
    layout->addLayout(form);
    m_grants = new QTableWidget(0, 3, page);
    m_grants->setObjectName(QStringLiteral("grants"));
    m_grants->setHorizontalHeaderLabels({tr("Grantee"), tr("Type"), tr("Permission")});
    m_grants->horizontalHeader()->setStretchLastSection(true);
    m_grants->horizontalHeader()->resizeSection(0, 260);
    m_grants->verticalHeader()->hide();
    m_grants->setEditTriggers(QAbstractItemView::NoEditTriggers);
    layout->addWidget(m_grants, 1);
    auto* row = new QHBoxLayout;
    row->addWidget(new QLabel(tr("Replace with canned ACL:"), page));
    m_cannedAcl = new QComboBox(page);
    m_cannedAcl->setObjectName(QStringLiteral("cannedAcl"));
    m_cannedAcl->addItems(cannedAclNames());
    row->addWidget(m_cannedAcl, 1);
    m_applyAcl = applyButton(page, "applyAcl");
    row->addWidget(m_applyAcl);
    layout->addLayout(row);
    connect(m_applyAcl, &QPushButton::clicked, this, &PropertiesDialog::applyAcl);
    return page;
}

QWidget* PropertiesDialog::buildLockTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    m_lockNote = new QLabel(page);
    m_lockNote->setWordWrap(true);
    layout->addWidget(m_lockNote);
    auto* form = new QFormLayout;
    m_lockMode = new QComboBox(page);
    m_lockMode->setObjectName(QStringLiteral("lockMode"));
    m_lockMode->addItem(tr("None"), QString());
    m_lockMode->addItem(tr("Governance (can be lifted with special permission)"),
                        QStringLiteral("GOVERNANCE"));
    m_lockMode->addItem(tr("Compliance (cannot be shortened or removed)"), QStringLiteral("COMPLIANCE"));
    form->addRow(tr("Retention mode:"), m_lockMode);
    m_retainUntil = new QDateTimeEdit(page);
    m_retainUntil->setObjectName(QStringLiteral("retainUntil"));
    m_retainUntil->setCalendarPopup(true);
    m_retainUntil->setDisplayFormat(QStringLiteral("yyyy-MM-dd HH:mm"));
    m_retainUntil->setDateTime(QDateTime::currentDateTime().addDays(1));
    form->addRow(tr("Retain until:"), m_retainUntil);
    m_bypass = new QCheckBox(
        tr("Bypass governance mode (needed to shorten or remove a governance retention)"), page);
    m_bypass->setObjectName(QStringLiteral("bypassGovernance"));
    form->addRow(QString(), m_bypass);
    m_legalHold = new QCheckBox(tr("Legal hold"), page);
    m_legalHold->setObjectName(QStringLiteral("legalHold"));
    form->addRow(QString(), m_legalHold);
    layout->addLayout(form);
    layout->addStretch(1);
    m_applyLock = applyButton(page, "applyLock");
    layout->addWidget(m_applyLock, 0, Qt::AlignRight);
    connect(m_lockMode, &QComboBox::currentIndexChanged, this,
            [this] { m_retainUntil->setEnabled(!m_lockMode->currentData().toString().isEmpty()); });
    connect(m_applyLock, &QPushButton::clicked, this, &PropertiesDialog::applyLock);
    return page;
}

QWidget* PropertiesDialog::buildChecksumsTab()
{
    auto* page = new QWidget(this);
    auto* layout = new QVBoxLayout(page);
    m_checksums = new QTableWidget(0, 4, page);
    m_checksums->setObjectName(QStringLiteral("checksums"));
    m_checksums->setHorizontalHeaderLabels({tr("Algorithm"), tr("Stored"), tr("Local file"), tr("Result")});
    m_checksums->horizontalHeader()->setStretchLastSection(true);
    m_checksums->horizontalHeader()->resizeSection(1, 220);
    m_checksums->horizontalHeader()->resizeSection(2, 220);
    m_checksums->verticalHeader()->hide();
    m_checksums->setEditTriggers(QAbstractItemView::NoEditTriggers);
    layout->addWidget(m_checksums, 1);
    auto* compare = new QPushButton(tr("Compare with Local File…"), page);
    compare->setObjectName(QStringLiteral("compare"));
    layout->addWidget(compare, 0, Qt::AlignRight);
    connect(compare, &QPushButton::clicked, this, &PropertiesDialog::compareChecksums);
    return page;
}

// ---------------------------------------------------------------------------
// Loading and display
// ---------------------------------------------------------------------------

void PropertiesDialog::reload()
{
    m_loading = true;
    setStatus(tr("Loading…"));
    QPointer<PropertiesDialog> self(this);
    const Location location = m_entry.location;
    if (m_service) {
        auto service = m_service;
        runIo([service, location] {
            OperationContext ctx;
            return service->details(location, ctx);
        }).then(this, [self](Result<ObjectDetails> result) {
            if (!self)
                return;
            self->m_loading = false;
            if (!result) {
                self->setStatus(tr("Could not load the object: %1").arg(result.error().toString()), true);
                return;
            }
            self->setStatus({});
            self->showDetails(result.value());
        });
        return;
    }
    auto provider = m_registry ? m_registry->providerFor(location) : nullptr;
    if (!provider) {
        m_loading = false;
        setStatus({});
        return;
    }
    runIo([provider, location] {
        OperationContext ctx;
        return provider->stat(location, ctx);
    }).then(this, [self](Result<Entry> result) {
        if (!self)
            return;
        self->m_loading = false;
        if (!result) {
            self->setStatus(tr("Could not load metadata: %1").arg(result.error().toString()), true);
            return;
        }
        self->setStatus({});
        self->populate(result.value());
    });
}

void PropertiesDialog::addRow(const QString& label, const QString& value)
{
    if (value.isEmpty())
        return;
    auto* v = new QLabel(value, this);
    v->setTextInteractionFlags(Qt::TextSelectableByMouse);
    v->setWordWrap(true);
    m_form->addRow(label, v);
    m_rows.push_back({label, value});
}

void PropertiesDialog::populate(const Entry& e)
{
    while (m_form->rowCount() > 0)
        m_form->removeRow(0);
    m_rows.clear();

    addRow(tr("Location:"), e.location.displayString());
    QString type;
    switch (e.type) {
    case Entry::Type::File:
        type = e.contentType.isEmpty() ? tr("File") : tr("File (%1)").arg(e.contentType);
        break;
    case Entry::Type::Directory:
        type = e.location.isS3() ? tr("Folder (prefix)") : tr("Folder");
        break;
    case Entry::Type::Bucket:
        type = tr("Bucket");
        break;
    case Entry::Type::Connection:
        type = tr("Connection");
        break;
    }
    addRow(tr("Type:"), type);
    if (e.size >= 0)
        addRow(tr("Size:"), QStringLiteral("%1 (%2 bytes)").arg(formatSize(e.size), formatByteCount(e.size)));
    if (e.modified.isValid())
        addRow(tr("Modified:"), QLocale().toString(e.modified.toLocalTime(), QLocale::LongFormat));

    if (e.location.isLocal()) {
        if (e.isSymlink)
            addRow(tr("Link target:"), e.symlinkTarget);
        if (e.permissions != QFileDevice::Permissions())
            addRow(tr("Permissions:"), permissionString(e.permissions));
        if (e.hidden)
            addRow(tr("Hidden:"), tr("Yes"));
    } else {
        addRow(tr("Storage class:"), e.storageClass);
        addRow(tr("ETag:"), e.etag);
        addRow(tr("Version ID:"), e.versionId);
        addRow(tr("Region:"), e.region);
        const ObjectEncryption enc = ObjectEncryption::fromEntry(e);
        if (enc.mode != ObjectEncryption::Mode::None)
            addRow(tr("Encryption:"),
                   ObjectEncryption::modeName(enc.mode) +
                       (enc.kmsKeyId.isEmpty() ? QString() : QStringLiteral(" — ") + enc.kmsKeyId));
        addRow(tr("S3 URI:"), s3urls::s3Uri(e.location));
        if (m_profile) {
            addRow(tr("URL:"), s3urls::objectUrl(e.location, *m_profile, e.region));
            addRow(tr("ARN:"), s3urls::arn(e.location, *m_profile));
        }
    }

    m_metadata->setRowCount(0);
    for (auto it = e.metadata.cbegin(); it != e.metadata.cend(); ++it) {
        const int row = m_metadata->rowCount();
        m_metadata->insertRow(row);
        m_metadata->setItem(row, 0, new QTableWidgetItem(it.key()));
        m_metadata->setItem(row, 1, new QTableWidgetItem(it.value()));
    }
    m_metadata->resizeColumnToContents(0);
}

void PropertiesDialog::showDetails(const ObjectDetails& d)
{
    m_details = d;
    m_entry = d.entry;
    populate(d.entry);
    for (int i = 1; i < m_tabs->count(); ++i)
        m_tabs->widget(i)->setEnabled(true);

    m_contentType->setText(d.headers.contentType);
    m_cacheControl->setText(d.headers.cacheControl);
    m_contentDisposition->setText(d.headers.contentDisposition);
    m_contentEncoding->setText(d.headers.contentEncoding);
    m_contentLanguage->setText(d.headers.contentLanguage);
    m_expires->setText(d.headers.expires);
    m_userMetadata->setValues(d.headers.userMetadata);

    m_tags->setValues(d.tags);
    m_tags->setReadOnly(d.tagsError.has_value());
    if (d.tagsError)
        m_tagsNote->setText(tr("Tags are not available: %1").arg(d.tagsError->message));

    const int sc = m_storageClass->findText(d.entry.storageClass.isEmpty() ? QStringLiteral("STANDARD")
                                                                           : d.entry.storageClass);
    if (sc < 0)
        m_storageClass->addItem(d.entry.storageClass);
    m_storageClass->setCurrentIndex(m_storageClass->findText(
        d.entry.storageClass.isEmpty() ? QStringLiteral("STANDARD") : d.entry.storageClass));
    m_encryption->setEncryption(d.encryption);
    m_storageNote->setText(
        isArchiveStorageClass(d.entry.storageClass)
            ? tr("<small>This object is archived; changing its storage class needs a restored copy.</small>")
            : tr("<small>Changing these copies the object onto itself.</small>"));

    m_owner->setText(d.acl.owner);
    m_grants->setRowCount(0);
    for (const ObjectGrant& g : d.acl.grants) {
        const int row = m_grants->rowCount();
        m_grants->insertRow(row);
        m_grants->setItem(row, 0, new QTableWidgetItem(g.grantee));
        m_grants->setItem(row, 1, new QTableWidgetItem(g.type));
        m_grants->setItem(row, 2, new QTableWidgetItem(g.permission));
    }
    const bool aclsDisabled = d.objectOwnership == u"BucketOwnerEnforced";
    m_cannedAcl->setEnabled(!aclsDisabled && !d.aclError);
    m_applyAcl->setEnabled(!aclsDisabled && !d.aclError);
    if (aclsDisabled)
        m_aclNote->setText(tr("ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). "
                              "Use bucket policies to grant access."));
    else if (d.aclError)
        m_aclNote->setText(tr("The ACL is not available: %1").arg(d.aclError->message));
    else
        m_aclNote->setText(d.objectOwnership.isEmpty() ? QString()
                                                       : tr("Object Ownership: %1").arg(d.objectOwnership));

    const bool lockable = d.lockEnabled && !d.lockError;
    for (QWidget* w :
         std::initializer_list<QWidget*>{m_lockMode, m_retainUntil, m_bypass, m_legalHold, m_applyLock})
        w->setEnabled(lockable);
    if (d.lockError)
        m_lockNote->setText(tr("Object Lock state is not available: %1").arg(d.lockError->message));
    else if (!d.lockEnabled)
        m_lockNote->setText(tr("Object Lock is not enabled on this bucket (it can only be enabled when the "
                               "bucket is created)."));
    else
        m_lockNote->setText(d.retention.isSet()
                                ? tr("Retained in %1 mode until %2.")
                                      .arg(d.retention.mode, formatDateTime(d.retention.retainUntil))
                                : tr("No retention is set on this version."));
    m_lockMode->setCurrentIndex(qMax(0, m_lockMode->findData(d.retention.mode)));
    if (d.retention.retainUntil.isValid())
        m_retainUntil->setDateTime(d.retention.retainUntil.toLocalTime());
    m_retainUntil->setEnabled(lockable && d.retention.isSet());
    m_legalHold->setChecked(d.legalHold);

    m_checksums->setRowCount(0);
    for (auto it = d.checksums.cbegin(); it != d.checksums.cend(); ++it) {
        const int row = m_checksums->rowCount();
        m_checksums->insertRow(row);
        m_checksums->setItem(row, 0, new QTableWidgetItem(it.key()));
        m_checksums->setItem(row, 1, new QTableWidgetItem(it.value()));
    }
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

void PropertiesDialog::runAction(const QString& done, std::function<VoidResult()> fn)
{
    m_tabs->setEnabled(false);
    setStatus(tr("Applying…"));
    m_loading = true;
    QPointer<PropertiesDialog> self(this);
    const Location location = m_entry.location;
    runIo(std::move(fn)).then(this, [self, done, location](VoidResult result) {
        if (!self)
            return;
        self->m_tabs->setEnabled(true);
        if (!result) {
            self->m_loading = false;
            self->setStatus(result.error().toString(), true);
            return;
        }
        Q_EMIT self->objectChanged(location);
        self->reload();
        self->setStatus(done);
    });
}

void PropertiesDialog::applyMetadata()
{
    ObjectHeaders h;
    h.contentType = m_contentType->text().trimmed();
    h.cacheControl = m_cacheControl->text().trimmed();
    h.contentDisposition = m_contentDisposition->text().trimmed();
    h.contentEncoding = m_contentEncoding->text().trimmed();
    h.contentLanguage = m_contentLanguage->text().trimmed();
    h.expires = m_expires->text().trimmed();
    for (auto [k, v] : m_userMetadata->values().asKeyValueRange()) {
        if (!isValidMetadataKey(k)) {
            setStatus(tr("Invalid metadata key \"%1\": use letters, digits, '-', '_' and '.'").arg(k), true);
            return;
        }
        h.userMetadata.insert(k.toLower(), v);
    }
    CopyOverrides o;
    o.headers = h;
    auto service = m_service;
    const Location l = m_entry.location;
    runAction(tr("Metadata saved."), [service, l, o] {
        OperationContext ctx;
        return service->rewrite(l, o, ctx);
    });
}

void PropertiesDialog::applyTags()
{
    const QMap<QString, QString> tags = m_tags->values();
    if (const QString problem = validateTags(tags); !problem.isEmpty()) {
        setStatus(problem, true);
        return;
    }
    auto service = m_service;
    const Location l = m_entry.location;
    runAction(tr("Tags saved."), [service, l, tags] { return service->setTags(l, tags); });
}

void PropertiesDialog::applyStorage()
{
    CopyOverrides o;
    o.storageClass = m_storageClass->currentText();
    o.encryption = m_encryption->encryption();
    m_encryption->rememberKey();
    if (m_details &&
        o.storageClass == (m_details->entry.storageClass.isEmpty() ? QStringLiteral("STANDARD")
                                                                   : m_details->entry.storageClass) &&
        o.encryption == m_details->encryption) {
        setStatus(tr("Nothing changed."));
        return;
    }
    auto service = m_service;
    const Location l = m_entry.location;
    runAction(tr("Storage settings saved."), [service, l, o] {
        OperationContext ctx;
        return service->rewrite(l, o, ctx);
    });
}

void PropertiesDialog::applyAcl()
{
    auto service = m_service;
    const Location l = m_entry.location;
    const QString acl = m_cannedAcl->currentText();
    runAction(tr("ACL set to %1.").arg(acl), [service, l, acl] { return service->setCannedAcl(l, acl); });
}

void PropertiesDialog::applyLock()
{
    ObjectRetention r;
    r.mode = m_lockMode->currentData().toString();
    if (r.isSet())
        r.retainUntil = m_retainUntil->dateTime().toUTC();
    const bool bypass = m_bypass->isChecked();
    const bool hold = m_legalHold->isChecked();
    const ObjectRetention current = m_details ? m_details->retention : ObjectRetention();
    const bool holdNow = m_details && m_details->legalHold;
    const bool retentionChanged =
        r.mode != current.mode || (r.isSet() && r.retainUntil != current.retainUntil);
    auto service = m_service;
    const Location l = m_entry.location;
    const QString version = m_details ? m_details->entry.versionId : QString();
    runAction(tr("Object Lock settings saved."), [=]() -> VoidResult {
        if (retentionChanged) {
            if (auto res = service->setRetention(l, r, bypass, version); !res)
                return res;
        }
        if (hold != holdNow)
            return service->setLegalHold(l, hold, version);
        return {};
    });
}

void PropertiesDialog::compareChecksums()
{
    const QString file = QFileDialog::getOpenFileName(this, tr("Compare with Local File"));
    if (file.isEmpty())
        return;
    m_loading = true;
    setStatus(tr("Computing checksums of %1…").arg(QDir::toNativeSeparators(file)));
    QPointer<PropertiesDialog> self(this);
    auto service = m_service;
    const Location l = m_entry.location;
    runIo([service, l, file] {
        OperationContext ctx;
        return service->compareWithLocal(l, file, ctx);
    }).then(this, [self](Result<QList<ChecksumComparison>> result) {
        if (!self)
            return;
        self->m_loading = false;
        if (!result) {
            self->setStatus(result.error().toString(), true);
            return;
        }
        self->m_checksums->setRowCount(0);
        bool allMatch = !result->isEmpty();
        for (const ChecksumComparison& c : result.value()) {
            const int row = self->m_checksums->rowCount();
            self->m_checksums->insertRow(row);
            self->m_checksums->setItem(row, 0, new QTableWidgetItem(c.algorithm));
            self->m_checksums->setItem(row, 1, new QTableWidgetItem(c.remote));
            self->m_checksums->setItem(row, 2, new QTableWidgetItem(c.local));
            self->m_checksums->setItem(row, 3,
                                       new QTableWidgetItem(c.matches ? tr("Match") : tr("DIFFERENT")));
            allMatch = allMatch && c.matches;
        }
        if (result->isEmpty())
            self->setStatus(tr("The object has no checksum that can be compared."));
        else
            self->setStatus(allMatch ? tr("The local file matches the object.")
                                     : tr("The local file differs from the object."),
                            !allMatch);
    });
}

void PropertiesDialog::manageCustomerKey()
{
    if (!m_connections) {
        setStatus(tr("Customer keys need a saved connection."), true);
        return;
    }
    SseKeyDialog dialog(m_connections, m_entry.location.connectionId(), m_entry.location.bucket(), this);
    dialog.exec();
}

} // namespace s3fm
