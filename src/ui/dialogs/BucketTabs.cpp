#include "ui/dialogs/BucketTabs.h"

#include "core/Format.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QFormLayout>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPushButton>
#include <QSpinBox>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

namespace {

QLabel* note(const QString& text, QWidget* parent)
{
    auto* label = new QLabel(QStringLiteral("<small>%1</small>").arg(text), parent);
    label->setWordWrap(true);
    label->setTextInteractionFlags(Qt::TextBrowserInteraction);
    label->setOpenExternalLinks(true);
    return label;
}

QPushButton* applyButton(QWidget* parent, QBoxLayout* layout, const QString& text = {})
{
    auto* row = new QHBoxLayout;
    row->addStretch(1);
    auto* button = new QPushButton(text.isEmpty() ? BucketTab::tr("&Apply") : text, parent);
    button->setObjectName(QStringLiteral("apply"));
    row->addWidget(button);
    layout->addLayout(row);
    return button;
}

} // namespace

// ---------------------------------------------------------------------------
// BucketTab
// ---------------------------------------------------------------------------

BucketTab::BucketTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent)
    : QWidget(parent), m_service(std::move(service)), m_bucket(bucket)
{
}

void BucketTab::begin()
{
    if (m_busy++ == 0)
        setEnabled(false);
}

bool BucketTab::end(const Error* error)
{
    if (--m_busy == 0)
        setEnabled(true);
    if (!error)
        return true;
    if (error->code == ErrorCode::Unsupported)
        Q_EMIT unsupported();
    else
        report(error->toString(), true);
    return false;
}

void BucketTab::apply(const QString& done, std::function<VoidResult()> fn)
{
    report(tr("Applying…"));
    begin();
    QPointer<BucketTab> self(this);
    runIo(std::move(fn)).then(this, [self, done](VoidResult result) {
        if (!self)
            return;
        if (!self->end(result ? nullptr : &result.error()))
            return;
        Q_EMIT self->settingsChanged();
        self->load();
        self->report(done);
    });
}

// ---------------------------------------------------------------------------
// Overview
// ---------------------------------------------------------------------------

BucketOverviewTab::BucketOverviewTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                     const QString& url, QWidget* parent)
    : BucketTab(std::move(service), bucket, parent), m_url(url)
{
    auto* layout = new QVBoxLayout(this);
    m_form = new QFormLayout;
    layout->addLayout(m_form);
    layout->addStretch(1);
}

void BucketOverviewTab::addRow(const QString& label, const QString& value)
{
    if (value.isEmpty())
        return;
    auto* field = new QLabel(value, this);
    field->setTextInteractionFlags(Qt::TextSelectableByMouse);
    field->setWordWrap(true);
    m_form->addRow(label + u':', field);
    m_rows.push_back({label, value});
}

void BucketOverviewTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<BucketOverview>([service, bucket] { return service->overview(bucket); },
                          [this](const BucketOverview& o) {
                              while (m_form->rowCount() > 0)
                                  m_form->removeRow(0);
                              m_rows.clear();
                              addRow(tr("Name"), o.name);
                              addRow(tr("Region"), o.region);
                              addRow(tr("Created"), formatDateTime(o.created));
                              addRow(tr("Owner"), o.ownerError ? o.ownerError->message : o.owner);
                              QString ownership = o.objectOwnership;
                              if (ownership == u"BucketOwnerEnforced")
                                  ownership = tr("Bucket owner enforced (ACLs disabled)");
                              else if (ownership == u"BucketOwnerPreferred")
                                  ownership = tr("Bucket owner preferred");
                              else if (ownership == u"ObjectWriter")
                                  ownership = tr("Object writer");
                              addRow(tr("Object ownership"), ownership);
                              addRow(tr("ARN"), o.arn);
                              addRow(tr("URL"), m_url);
                          });
}

// ---------------------------------------------------------------------------
// Versioning
// ---------------------------------------------------------------------------

BucketVersioningTab::BucketVersioningTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                         QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketVersioningTab::build()
{
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;
    m_state = new QLabel(this);
    m_state->setObjectName(QStringLiteral("versioningState"));
    form->addRow(tr("Versioning:"), m_state);
    m_mfa = new QLabel(this);
    form->addRow(tr("MFA delete:"), m_mfa);
    layout->addLayout(form);
    layout->addWidget(note(tr("With versioning, overwriting or deleting an object keeps the old data as a "
                              "noncurrent version (billed as storage). Versioning cannot be turned off "
                              "once enabled, only suspended: existing versions stay. MFA delete can only be "
                              "changed by the root account through the API/CLI."),
                           this));
    layout->addStretch(1);
    auto* row = new QHBoxLayout;
    row->addStretch(1);
    m_enable = new QPushButton(tr("&Enable Versioning"), this);
    m_enable->setObjectName(QStringLiteral("enableVersioning"));
    m_suspend = new QPushButton(tr("&Suspend Versioning"), this);
    m_suspend->setObjectName(QStringLiteral("suspendVersioning"));
    row->addWidget(m_enable);
    row->addWidget(m_suspend);
    layout->addLayout(row);
    auto service = m_service;
    const QString bucket = m_bucket;
    connect(m_enable, &QPushButton::clicked, this, [this, service, bucket] {
        apply(tr("Versioning enabled"), [service, bucket] { return service->setVersioning(bucket, true); });
    });
    connect(m_suspend, &QPushButton::clicked, this, [this, service, bucket] {
        if (QMessageBox::question(this, tr("Suspend Versioning"),
                                  tr("Suspend versioning on %1? New writes replace objects again; existing "
                                     "versions are kept.")
                                      .arg(bucket)) != QMessageBox::Yes)
            return;
        apply(tr("Versioning suspended"),
              [service, bucket] { return service->setVersioning(bucket, false); });
    });
}

void BucketVersioningTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<BucketVersioning>([service, bucket] { return service->versioning(bucket); },
                            [this](const BucketVersioning& v) {
                                m_state->setText(v.status.isEmpty()       ? tr("Disabled (never enabled)")
                                                 : v.status == u"Enabled" ? tr("Enabled")
                                                                          : tr("Suspended"));
                                m_mfa->setText(v.mfaDelete == u"Enabled" ? tr("Enabled") : tr("Disabled"));
                                m_enable->setEnabled(v.status != u"Enabled");
                                m_suspend->setEnabled(v.status == u"Enabled");
                            });
}

// ---------------------------------------------------------------------------
// Default encryption
// ---------------------------------------------------------------------------

BucketEncryptionTab::BucketEncryptionTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                         QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketEncryptionTab::build()
{
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;
    m_mode = new QComboBox(this);
    m_mode->setObjectName(QStringLiteral("encryptionMode"));
    m_mode->addItem(tr("None"), int(BucketEncryption::Mode::None));
    m_mode->addItem(tr("SSE-S3 (keys managed by S3)"), int(BucketEncryption::Mode::S3));
    m_mode->addItem(tr("SSE-KMS (AWS KMS key)"), int(BucketEncryption::Mode::Kms));
    m_mode->addItem(tr("DSSE-KMS (dual-layer, AWS KMS key)"), int(BucketEncryption::Mode::DsseKms));
    form->addRow(tr("Default &encryption:"), m_mode);
    m_key = new QLineEdit(this);
    m_key->setObjectName(QStringLiteral("kmsKey"));
    m_key->setPlaceholderText(tr("key id, ARN or alias (empty: aws/s3 managed key)"));
    form->addRow(tr("KMS &key:"), m_key);
    m_bucketKey = new QCheckBox(tr("Use an S3 &Bucket Key (fewer KMS requests, lower cost)"), this);
    m_bucketKey->setObjectName(QStringLiteral("bucketKey"));
    form->addRow(QString(), m_bucketKey);
    layout->addLayout(form);
    layout->addWidget(note(tr("Applies to objects written from now on that do not ask for their own "
                              "encryption. Existing objects keep their encryption (rewrite them with Edit "
                              "Objects to change it). AWS encrypts with SSE-S3 when nothing is set."),
                           this));
    layout->addStretch(1);
    QPushButton* apply = applyButton(this, layout);
    connect(m_mode, &QComboBox::currentIndexChanged, this, &BucketEncryptionTab::updateFields);
    connect(apply, &QPushButton::clicked, this, [this] {
        BucketEncryption e;
        e.mode = BucketEncryption::Mode(m_mode->currentData().toInt());
        e.kmsKeyId = m_key->text().trimmed();
        e.bucketKey = m_bucketKey->isChecked();
        auto service = m_service;
        const QString bucket = m_bucket;
        this->apply(tr("Default encryption saved"),
                    [service, bucket, e] { return service->setEncryption(bucket, e); });
    });
    updateFields();
}

void BucketEncryptionTab::updateFields()
{
    const auto mode = BucketEncryption::Mode(m_mode->currentData().toInt());
    const bool kms = mode == BucketEncryption::Mode::Kms || mode == BucketEncryption::Mode::DsseKms;
    m_key->setEnabled(kms);
    m_bucketKey->setEnabled(kms);
}

void BucketEncryptionTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<BucketEncryption>([service, bucket] { return service->encryption(bucket); },
                            [this](const BucketEncryption& e) {
                                m_mode->setCurrentIndex(m_mode->findData(int(e.mode)));
                                m_key->setText(e.kmsKeyId);
                                m_bucketKey->setChecked(e.bucketKey);
                                updateFields();
                            });
}

// ---------------------------------------------------------------------------
// Public access block
// ---------------------------------------------------------------------------

BucketPublicAccessTab::BucketPublicAccessTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                             QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketPublicAccessTab::build()
{
    auto* layout = new QVBoxLayout(this);
    m_all = new QCheckBox(tr("Block &all public access"), this);
    m_all->setObjectName(QStringLiteral("blockAll"));
    QFont bold = m_all->font();
    bold.setBold(true);
    m_all->setFont(bold);
    layout->addWidget(m_all);
    const QStringList texts = {
        tr("Block public access granted through new ACLs"),
        tr("Ignore public access granted through any ACL"),
        tr("Block public access granted through new bucket policies"),
        tr("Restrict access to buckets with public policies to AWS services and the owner's account"),
    };
    const QStringList names = {QStringLiteral("blockPublicAcls"), QStringLiteral("ignorePublicAcls"),
                               QStringLiteral("blockPublicPolicy"), QStringLiteral("restrictPublicBuckets")};
    for (int i = 0; i < 4; ++i) {
        m_boxes[i] = new QCheckBox(texts.at(i), this);
        m_boxes[i]->setObjectName(names.at(i));
        m_boxes[i]->setContentsMargins(20, 0, 0, 0);
        layout->addWidget(m_boxes[i]);
        connect(m_boxes[i], &QCheckBox::toggled, this, [this] {
            const QSignalBlocker block(m_all);
            bool all = true;
            for (QCheckBox* b : m_boxes)
                all = all && b->isChecked();
            m_all->setChecked(all);
        });
    }
    connect(m_all, &QCheckBox::clicked, this, [this](bool on) {
        for (QCheckBox* b : m_boxes)
            b->setChecked(on);
    });
    layout->addWidget(note(tr("Account-level settings apply as well and win over these. Turning blocks off "
                              "does not make anything public by itself."),
                           this));
    layout->addStretch(1);
    QPushButton* apply = applyButton(this, layout);
    connect(apply, &QPushButton::clicked, this, [this] {
        PublicAccessBlock b;
        b.blockPublicAcls = m_boxes[0]->isChecked();
        b.ignorePublicAcls = m_boxes[1]->isChecked();
        b.blockPublicPolicy = m_boxes[2]->isChecked();
        b.restrictPublicBuckets = m_boxes[3]->isChecked();
        if (!b.all() && QMessageBox::warning(
                            this, tr("Public Access"),
                            tr("Allow public access settings on %1? Objects can then become public "
                               "through ACLs or the bucket policy.")
                                .arg(m_bucket),
                            QMessageBox::Yes | QMessageBox::Cancel, QMessageBox::Cancel) != QMessageBox::Yes)
            return;
        auto service = m_service;
        const QString bucket = m_bucket;
        this->apply(tr("Public access settings saved"),
                    [service, bucket, b] { return service->setPublicAccessBlock(bucket, b); });
    });
}

void BucketPublicAccessTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<PublicAccessBlock>([service, bucket] { return service->publicAccessBlock(bucket); },
                             [this](const PublicAccessBlock& b) {
                                 m_boxes[0]->setChecked(b.blockPublicAcls);
                                 m_boxes[1]->setChecked(b.ignorePublicAcls);
                                 m_boxes[2]->setChecked(b.blockPublicPolicy);
                                 m_boxes[3]->setChecked(b.restrictPublicBuckets);
                             });
}

// ---------------------------------------------------------------------------
// Tags
// ---------------------------------------------------------------------------

BucketTagsTab::BucketTagsTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketTagsTab::build()
{
    auto* layout = new QVBoxLayout(this);
    m_tags = new KeyValueEditor(tr("Key"), tr("Value"), this);
    m_tags->setObjectName(QStringLiteral("bucketTags"));
    m_tags->setMaxRows(50);
    layout->addWidget(m_tags, 1);
    layout->addWidget(note(tr("Up to 50 tags; used for cost allocation and access control. Object tags are "
                              "separate (Edit Objects)."),
                           this));
    QPushButton* apply = applyButton(this, layout);
    connect(apply, &QPushButton::clicked, this, &BucketTagsTab::save);
}

void BucketTagsTab::save()
{
    const QMap<QString, QString> tags = m_tags->values();
    if (const QString e = validateBucketTags(tags); !e.isEmpty()) {
        report(e, true);
        return;
    }
    auto service = m_service;
    const QString bucket = m_bucket;
    apply(tr("Tags saved"), [service, bucket, tags] { return service->setTags(bucket, tags); });
}

void BucketTagsTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    using Tags = QMap<QString, QString>;
    fetch<Tags>([service, bucket] { return service->tags(bucket); },
                [this](const Tags& t) { m_tags->setValues(t); });
}

// ---------------------------------------------------------------------------
// Object Lock
// ---------------------------------------------------------------------------

BucketObjectLockTab::BucketObjectLockTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                         QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketObjectLockTab::build()
{
    auto* layout = new QVBoxLayout(this);
    auto* statusRow = new QHBoxLayout;
    m_status = new QLabel(this);
    m_status->setObjectName(QStringLiteral("lockStatus"));
    m_status->setWordWrap(true);
    statusRow->addWidget(m_status, 1);
    m_enable = new QPushButton(tr("&Enable Object Lock…"), this);
    m_enable->setObjectName(QStringLiteral("enableLock"));
    statusRow->addWidget(m_enable);
    layout->addLayout(statusRow);

    auto* form = new QFormLayout;
    m_mode = new QComboBox(this);
    m_mode->setObjectName(QStringLiteral("defaultMode"));
    m_mode->addItem(tr("None"), QString());
    m_mode->addItem(tr("Governance (users with special permission can remove it)"),
                    QStringLiteral("GOVERNANCE"));
    m_mode->addItem(tr("Compliance (nobody can remove it, not even the root account)"),
                    QStringLiteral("COMPLIANCE"));
    form->addRow(tr("Default &retention:"), m_mode);
    auto* periodRow = new QHBoxLayout;
    m_period = new QSpinBox(this);
    m_period->setObjectName(QStringLiteral("defaultPeriod"));
    m_period->setRange(1, 36500);
    m_period->setValue(30);
    periodRow->addWidget(m_period);
    m_unit = new QComboBox(this);
    m_unit->setObjectName(QStringLiteral("defaultUnit"));
    m_unit->addItems({tr("days"), tr("years")});
    periodRow->addWidget(m_unit);
    periodRow->addStretch(1);
    form->addRow(tr("&Period:"), periodRow);
    layout->addLayout(form);
    layout->addWidget(note(tr("New object versions get the default retention unless the upload sets its own. "
                              "Retained versions cannot be deleted or overwritten until the period ends."),
                           this));
    layout->addStretch(1);
    m_apply = applyButton(this, layout);
    connect(m_mode, &QComboBox::currentIndexChanged, this, &BucketObjectLockTab::updateFields);
    auto service = m_service;
    const QString bucket = m_bucket;
    connect(m_enable, &QPushButton::clicked, this, [this, service, bucket] {
        if (QMessageBox::warning(this, tr("Enable Object Lock"),
                                 tr("Enable Object Lock on %1? This cannot be undone, and versioning stays "
                                    "enabled for good. (Some services only allow it when the bucket is "
                                    "created.)")
                                     .arg(bucket),
                                 QMessageBox::Yes | QMessageBox::Cancel,
                                 QMessageBox::Cancel) != QMessageBox::Yes)
            return;
        ObjectLockDefaults d;
        d.enabled = true;
        apply(tr("Object Lock enabled"), [service, bucket, d] { return service->setObjectLock(bucket, d); });
    });
    connect(m_apply, &QPushButton::clicked, this, [this, service, bucket] {
        ObjectLockDefaults d;
        d.enabled = true;
        d.mode = m_mode->currentData().toString();
        if (!d.mode.isEmpty()) {
            if (m_unit->currentIndex() == 0)
                d.days = m_period->value();
            else
                d.years = m_period->value();
        }
        if (d.mode == u"COMPLIANCE" &&
            QMessageBox::warning(this, tr("Object Lock"),
                                 tr("Compliance-mode retention cannot be shortened or removed by anyone. New "
                                    "versions will be undeletable for %1 %2. Continue?")
                                     .arg(m_period->value())
                                     .arg(m_unit->currentText()),
                                 QMessageBox::Yes | QMessageBox::Cancel,
                                 QMessageBox::Cancel) != QMessageBox::Yes)
            return;
        apply(tr("Default retention saved"),
              [service, bucket, d] { return service->setObjectLock(bucket, d); });
    });
    updateFields();
}

void BucketObjectLockTab::updateFields()
{
    m_enable->setVisible(!m_state.enabled);
    m_mode->setEnabled(m_state.enabled);
    m_apply->setEnabled(m_state.enabled);
    const bool period = m_state.enabled && !m_mode->currentData().toString().isEmpty();
    m_period->setEnabled(period);
    m_unit->setEnabled(period);
}

void BucketObjectLockTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<ObjectLockDefaults>([service, bucket] { return service->objectLock(bucket); },
                              [this](const ObjectLockDefaults& d) {
                                  m_state = d;
                                  m_status->setText(d.enabled
                                                        ? tr("Object Lock is enabled on this bucket.")
                                                        : tr("Object Lock is not enabled on this bucket."));
                                  m_mode->setCurrentIndex(qMax(0, m_mode->findData(d.mode)));
                                  if (d.years > 0) {
                                      m_unit->setCurrentIndex(1);
                                      m_period->setValue(d.years);
                                  } else if (d.days > 0) {
                                      m_unit->setCurrentIndex(0);
                                      m_period->setValue(d.days);
                                  }
                                  updateFields();
                              });
}

// ---------------------------------------------------------------------------
// Statistics
// ---------------------------------------------------------------------------

BucketStatisticsTab::BucketStatisticsTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                         QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

BucketStatisticsTab::~BucketStatisticsTab()
{
    if (m_ctx)
        m_ctx->cancel();
}

void BucketStatisticsTab::build()
{
    auto* layout = new QVBoxLayout(this);
    auto* row = new QHBoxLayout;
    row->addWidget(new QLabel(tr("Key prefix:"), this));
    m_prefix = new QLineEdit(this);
    m_prefix->setObjectName(QStringLiteral("statsPrefix"));
    m_prefix->setPlaceholderText(tr("(whole bucket)"));
    row->addWidget(m_prefix, 1);
    m_run = new QPushButton(tr("&Calculate"), this);
    m_run->setObjectName(QStringLiteral("calculate"));
    row->addWidget(m_run);
    layout->addLayout(row);
    m_table = new QTableWidget(0, 3, this);
    m_table->setObjectName(QStringLiteral("stats"));
    m_table->setHorizontalHeaderLabels({tr("Category"), tr("Objects"), tr("Size")});
    m_table->horizontalHeader()->setSectionResizeMode(0, QHeaderView::Stretch);
    m_table->verticalHeader()->hide();
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    layout->addWidget(m_table, 1);
    m_progress = new QLabel(this);
    m_progress->setObjectName(QStringLiteral("statsProgress"));
    layout->addWidget(m_progress);
    layout->addWidget(note(tr("Counted by listing every object version (one request per 1000 keys), which "
                              "takes a while on large buckets. For buckets with millions of objects, S3 "
                              "Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are "
                              "faster (updated daily)."),
                           this));
    connect(m_prefix, &QLineEdit::returnPressed, this, &BucketStatisticsTab::calculate);
    connect(m_run, &QPushButton::clicked, this, [this] {
        if (m_ctx)
            m_ctx->cancel();
        else
            calculate();
    });
}

void BucketStatisticsTab::calculate()
{
    if (m_ctx)
        return;
    m_ctx = std::make_shared<OperationContext>();
    m_run->setText(tr("&Cancel"));
    m_progress->setText(tr("Counting…"));
    QPointer<QLabel> progress(m_progress);
    m_ctx->setProgressHandler([progress](qint64 done, qint64) {
        QMetaObject::invokeMethod(
            progress.data(),
            [progress, done] {
                if (progress)
                    progress->setText(BucketTab::tr("Counting… %L1 items").arg(done));
            },
            Qt::QueuedConnection);
    });
    auto service = m_service;
    const QString bucket = m_bucket;
    const QString prefix = m_prefix->text();
    auto ctx = m_ctx;
    QPointer<BucketStatisticsTab> self(this);
    runIo([service, bucket, prefix, ctx] {
        return service->statistics(bucket, prefix, *ctx);
    }).then(this, [self](Result<BucketStats> stats) {
        if (!self)
            return;
        self->m_ctx.reset();
        self->m_run->setText(tr("&Calculate"));
        if (!stats) {
            self->m_progress->setText(stats.error().toString());
            return;
        }
        self->show(stats.value());
    });
}

void BucketStatisticsTab::show(const BucketStats& stats)
{
    m_table->setRowCount(0);
    auto add = [this](const QString& category, qint64 objects, qint64 bytes, bool bold = false) {
        const int row = m_table->rowCount();
        m_table->insertRow(row);
        auto* name = new QTableWidgetItem(category);
        auto* count = new QTableWidgetItem(QLocale().toString(objects));
        auto* size = new QTableWidgetItem(bytes >= 0 ? formatSize(bytes) : QString());
        count->setTextAlignment(Qt::AlignRight | Qt::AlignVCenter);
        size->setTextAlignment(Qt::AlignRight | Qt::AlignVCenter);
        if (bytes >= 0)
            size->setToolTip(tr("%1 bytes").arg(formatByteCount(bytes)));
        if (bold) {
            QFont f = name->font();
            f.setBold(true);
            for (auto* item : {name, count, size})
                item->setFont(f);
        }
        m_table->setItem(row, 0, name);
        m_table->setItem(row, 1, count);
        m_table->setItem(row, 2, size);
    };
    for (auto it = stats.current.cbegin(); it != stats.current.cend(); ++it)
        add(it.key(), it->objects, it->bytes);
    const UsageCount total = stats.currentTotal();
    add(tr("Current objects"), total.objects, total.bytes, true);
    if (stats.versionsListed) {
        add(tr("Noncurrent versions"), stats.noncurrent.objects, stats.noncurrent.bytes);
        add(tr("Delete markers"), stats.deleteMarkers, -1);
        add(tr("All versions"), total.objects + stats.noncurrent.objects,
            total.bytes + stats.noncurrent.bytes, true);
    }
    add(tr("Incomplete multipart uploads"), stats.uploads.objects, -1);
    m_progress->setText(stats.complete ? tr("Done.") : tr("Cancelled: partial counts."));
}

} // namespace s3fm
