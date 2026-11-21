#include "ui/dialogs/LifecycleRuleDialog.h"

#include "ui/widgets/KeyValueEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDateEdit>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QRegularExpressionValidator>
#include <QSpinBox>
#include <QTabWidget>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

namespace {

constexpr int kMaxDays = 365 * 100;

QSpinBox* daysSpin(QWidget* parent, int value = 30)
{
    auto* spin = new QSpinBox(parent);
    spin->setRange(1, kMaxDays);
    spin->setValue(value);
    spin->setSuffix(LifecycleRuleDialog::tr(" days"));
    return spin;
}

QLineEdit* bytesEdit(QWidget* parent, const QString& name)
{
    auto* edit = new QLineEdit(parent);
    edit->setObjectName(name);
    edit->setValidator(
        new QRegularExpressionValidator(QRegularExpression(QStringLiteral("\\d{0,18}")), edit));
    edit->setPlaceholderText(LifecycleRuleDialog::tr("bytes (empty: no limit)"));
    return edit;
}

QWidget* tableWithButtons(QTableWidget* table, QWidget* parent, const std::function<void()>& add)
{
    auto* box = new QWidget(parent);
    auto* layout = new QVBoxLayout(box);
    layout->setContentsMargins(0, 0, 0, 0);
    layout->addWidget(table);
    auto* buttons = new QHBoxLayout;
    auto* addButton = new QPushButton(LifecycleRuleDialog::tr("Add"), box);
    auto* removeButton = new QPushButton(LifecycleRuleDialog::tr("Remove"), box);
    buttons->addWidget(addButton);
    buttons->addWidget(removeButton);
    buttons->addStretch(1);
    layout->addLayout(buttons);
    QObject::connect(addButton, &QPushButton::clicked, box, add);
    QObject::connect(removeButton, &QPushButton::clicked, table, [table] {
        if (table->currentRow() >= 0)
            table->removeRow(table->currentRow());
    });
    return box;
}

qint64 bytesValue(const QLineEdit* edit)
{
    bool ok = false;
    const qint64 v = edit->text().toLongLong(&ok);
    return ok ? v : -1;
}

QString cellText(const QTableWidget* table, int row, int column)
{
    const QTableWidgetItem* item = table->item(row, column);
    return item ? item->text().trimmed() : QString();
}

} // namespace

LifecycleRuleDialog::LifecycleRuleDialog(QWidget* parent) : QDialog(parent)
{
    setWindowTitle(tr("Lifecycle Rule"));
    auto* layout = new QVBoxLayout(this);
    auto* head = new QFormLayout;
    auto* idRow = new QHBoxLayout;
    m_id = new QLineEdit(this);
    m_id->setObjectName(QStringLiteral("ruleId"));
    m_id->setMaxLength(255);
    m_id->setPlaceholderText(tr("optional; S3 generates one"));
    idRow->addWidget(m_id, 1);
    m_enabled = new QCheckBox(tr("&Enabled"), this);
    m_enabled->setObjectName(QStringLiteral("ruleEnabled"));
    m_enabled->setChecked(true);
    idRow->addWidget(m_enabled);
    head->addRow(tr("Rule &ID:"), idRow);
    layout->addLayout(head);

    auto* tabs = new QTabWidget(this);
    tabs->addTab(buildFilterTab(), tr("&Filter"));
    tabs->addTab(buildCurrentTab(), tr("&Current Versions"));
    tabs->addTab(buildNoncurrentTab(), tr("&Noncurrent Versions && Uploads"));
    layout->addWidget(tabs, 1);

    m_error = new QLabel(this);
    m_error->setObjectName(QStringLiteral("error"));
    m_error->setWordWrap(true);
    m_error->setStyleSheet(QStringLiteral("color: #b3261e"));
    layout->addWidget(m_error);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
    updateEnabled();
    resize(620, 520);
}

QWidget* LifecycleRuleDialog::buildFilterTab()
{
    auto* page = new QWidget(this);
    auto* form = new QFormLayout(page);
    auto* intro = new QLabel(tr("The rule applies to objects matching every condition below; with no "
                                "conditions it applies to the whole bucket."),
                             page);
    intro->setWordWrap(true);
    form->addRow(intro);
    m_prefix = new QLineEdit(page);
    m_prefix->setObjectName(QStringLiteral("prefix"));
    m_prefix->setPlaceholderText(tr("e.g. logs/"));
    form->addRow(tr("Key &prefix:"), m_prefix);
    m_minSize = bytesEdit(page, QStringLiteral("minSize"));
    form->addRow(tr("Larger than:"), m_minSize);
    m_maxSize = bytesEdit(page, QStringLiteral("maxSize"));
    form->addRow(tr("Smaller than:"), m_maxSize);
    m_tags = new KeyValueEditor(tr("Tag"), tr("Value"), page);
    m_tags->setObjectName(QStringLiteral("tags"));
    form->addRow(tr("Object tags:"), m_tags);
    return page;
}

QWidget* LifecycleRuleDialog::buildCurrentTab()
{
    auto* page = new QWidget(this);
    auto* form = new QFormLayout(page);
    m_transitions = new QTableWidget(0, 2, page);
    m_transitions->setObjectName(QStringLiteral("transitions"));
    m_transitions->setHorizontalHeaderLabels({tr("Move to storage class"), tr("After (days or YYYY-MM-DD)")});
    m_transitions->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    m_transitions->verticalHeader()->hide();
    form->addRow(tr("Transitions:"), tableWithButtons(m_transitions, page, [this] {
                     addTransitionRow(m_transitions, QStringLiteral("STANDARD_IA"), QStringLiteral("30"));
                 }));

    auto* expRow = new QHBoxLayout;
    m_expiration = new QComboBox(page);
    m_expiration->setObjectName(QStringLiteral("expiration"));
    m_expiration->addItems({tr("Never"), tr("After"), tr("On date")});
    expRow->addWidget(m_expiration);
    m_expirationDays = daysSpin(page, 365);
    m_expirationDays->setObjectName(QStringLiteral("expirationDays"));
    expRow->addWidget(m_expirationDays);
    m_expirationDate = new QDateEdit(QDate::currentDate().addYears(1), page);
    m_expirationDate->setObjectName(QStringLiteral("expirationDate"));
    m_expirationDate->setCalendarPopup(true);
    m_expirationDate->setDisplayFormat(QStringLiteral("yyyy-MM-dd"));
    expRow->addWidget(m_expirationDate);
    expRow->addStretch(1);
    form->addRow(tr("Expire (delete) objects:"), expRow);
    m_deleteMarkers =
        new QCheckBox(tr("Remove expired delete markers (markers without noncurrent versions)"), page);
    m_deleteMarkers->setObjectName(QStringLiteral("deleteMarkers"));
    form->addRow(QString(), m_deleteMarkers);
    auto* note =
        new QLabel(tr("<small>In a versioned bucket, expiring a current version adds a delete marker; "
                      "the data stays as a noncurrent version.</small>"),
                   page);
    note->setWordWrap(true);
    form->addRow(note);
    connect(m_expiration, &QComboBox::currentIndexChanged, this, &LifecycleRuleDialog::updateEnabled);
    return page;
}

QWidget* LifecycleRuleDialog::buildNoncurrentTab()
{
    auto* page = new QWidget(this);
    auto* form = new QFormLayout(page);
    m_noncurrentTransitions = new QTableWidget(0, 3, page);
    m_noncurrentTransitions->setObjectName(QStringLiteral("noncurrentTransitions"));
    m_noncurrentTransitions->setHorizontalHeaderLabels(
        {tr("Move to storage class"), tr("Days after becoming noncurrent"), tr("Keep newest (optional)")});
    m_noncurrentTransitions->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    m_noncurrentTransitions->verticalHeader()->hide();
    form->addRow(tr("Transitions:"), tableWithButtons(m_noncurrentTransitions, page, [this] {
                     addTransitionRow(m_noncurrentTransitions, QStringLiteral("GLACIER"),
                                      QStringLiteral("30"));
                 }));

    auto* expRow = new QHBoxLayout;
    m_noncurrentExpire = new QCheckBox(tr("Delete after"), page);
    m_noncurrentExpire->setObjectName(QStringLiteral("noncurrentExpire"));
    expRow->addWidget(m_noncurrentExpire);
    m_noncurrentDays = daysSpin(page, 90);
    m_noncurrentDays->setObjectName(QStringLiteral("noncurrentDays"));
    expRow->addWidget(m_noncurrentDays);
    expRow->addWidget(new QLabel(tr("keeping the newest"), page));
    m_keepNewer = new QSpinBox(page);
    m_keepNewer->setObjectName(QStringLiteral("keepNewer"));
    m_keepNewer->setRange(0, 100);
    m_keepNewer->setSpecialValueText(tr("none"));
    expRow->addWidget(m_keepNewer);
    expRow->addStretch(1);
    form->addRow(tr("Noncurrent versions:"), expRow);

    auto* abortRow = new QHBoxLayout;
    m_abortUploads = new QCheckBox(tr("Abort incomplete multipart uploads after"), page);
    m_abortUploads->setObjectName(QStringLiteral("abortUploads"));
    abortRow->addWidget(m_abortUploads);
    m_abortDays = daysSpin(page, 7);
    m_abortDays->setObjectName(QStringLiteral("abortDays"));
    abortRow->addWidget(m_abortDays);
    abortRow->addStretch(1);
    form->addRow(tr("Uploads:"), abortRow);
    connect(m_noncurrentExpire, &QCheckBox::toggled, this, &LifecycleRuleDialog::updateEnabled);
    connect(m_abortUploads, &QCheckBox::toggled, this, &LifecycleRuleDialog::updateEnabled);
    return page;
}

void LifecycleRuleDialog::addTransitionRow(QTableWidget* table, const QString& storageClass,
                                           const QString& after, const QString& keep)
{
    const int row = table->rowCount();
    table->insertRow(row);
    auto* combo = new QComboBox(table);
    combo->addItems(lifecycleStorageClasses());
    if (!lifecycleStorageClasses().contains(storageClass))
        combo->addItem(storageClass);
    combo->setCurrentText(storageClass);
    table->setCellWidget(row, 0, combo);
    table->setItem(row, 1, new QTableWidgetItem(after));
    if (table->columnCount() > 2)
        table->setItem(row, 2, new QTableWidgetItem(keep));
}

void LifecycleRuleDialog::updateEnabled()
{
    m_expirationDays->setVisible(m_expiration->currentIndex() == 1);
    m_expirationDate->setVisible(m_expiration->currentIndex() == 2);
    m_noncurrentDays->setEnabled(m_noncurrentExpire->isChecked());
    m_keepNewer->setEnabled(m_noncurrentExpire->isChecked());
    m_abortDays->setEnabled(m_abortUploads->isChecked());
}

void LifecycleRuleDialog::setRule(const LifecycleRule& rule)
{
    m_id->setText(rule.id);
    m_enabled->setChecked(rule.enabled);
    m_prefix->setText(rule.prefix);
    m_minSize->setText(rule.sizeGreaterThan >= 0 ? QString::number(rule.sizeGreaterThan) : QString());
    m_maxSize->setText(rule.sizeLessThan >= 0 ? QString::number(rule.sizeLessThan) : QString());
    m_tags->setValues(rule.tags);
    m_transitions->setRowCount(0);
    for (const LifecycleTransition& t : rule.transitions)
        addTransitionRow(m_transitions, t.storageClass,
                         t.days >= 0 ? QString::number(t.days) : t.date.toString(Qt::ISODate));
    if (rule.expirationDays > 0) {
        m_expiration->setCurrentIndex(1);
        m_expirationDays->setValue(rule.expirationDays);
    } else if (rule.expirationDate.isValid()) {
        m_expiration->setCurrentIndex(2);
        m_expirationDate->setDate(rule.expirationDate);
    } else {
        m_expiration->setCurrentIndex(0);
    }
    m_deleteMarkers->setChecked(rule.expiredDeleteMarker);
    m_noncurrentTransitions->setRowCount(0);
    for (const NoncurrentTransition& t : rule.noncurrentTransitions)
        addTransitionRow(m_noncurrentTransitions, t.storageClass, QString::number(t.days),
                         t.newerVersions > 0 ? QString::number(t.newerVersions) : QString());
    m_noncurrentExpire->setChecked(rule.noncurrentExpirationDays > 0);
    if (rule.noncurrentExpirationDays > 0)
        m_noncurrentDays->setValue(rule.noncurrentExpirationDays);
    m_keepNewer->setValue(qMax(0, rule.newerNoncurrentVersions));
    m_abortUploads->setChecked(rule.abortUploadDays > 0);
    if (rule.abortUploadDays > 0)
        m_abortDays->setValue(rule.abortUploadDays);
    updateEnabled();
}

LifecycleRule LifecycleRuleDialog::rule() const
{
    LifecycleRule r;
    r.id = m_id->text().trimmed();
    r.enabled = m_enabled->isChecked();
    r.prefix = m_prefix->text();
    r.sizeGreaterThan = bytesValue(m_minSize);
    r.sizeLessThan = bytesValue(m_maxSize);
    r.tags = m_tags->values();
    for (int row = 0; row < m_transitions->rowCount(); ++row) {
        LifecycleTransition t;
        t.storageClass = static_cast<QComboBox*>(m_transitions->cellWidget(row, 0))->currentText();
        const QString after = cellText(m_transitions, row, 1);
        bool isNumber = false;
        const int days = after.toInt(&isNumber);
        if (isNumber)
            t.days = days;
        else
            t.date = QDate::fromString(after, Qt::ISODate);
        r.transitions.push_back(t);
    }
    if (m_expiration->currentIndex() == 1)
        r.expirationDays = m_expirationDays->value();
    else if (m_expiration->currentIndex() == 2)
        r.expirationDate = m_expirationDate->date();
    r.expiredDeleteMarker = m_deleteMarkers->isChecked();
    for (int row = 0; row < m_noncurrentTransitions->rowCount(); ++row) {
        NoncurrentTransition t;
        t.storageClass = static_cast<QComboBox*>(m_noncurrentTransitions->cellWidget(row, 0))->currentText();
        t.days = cellText(m_noncurrentTransitions, row, 1).toInt();
        bool ok = false;
        const int keep = cellText(m_noncurrentTransitions, row, 2).toInt(&ok);
        t.newerVersions = ok && keep > 0 ? keep : -1;
        r.noncurrentTransitions.push_back(t);
    }
    if (m_noncurrentExpire->isChecked()) {
        r.noncurrentExpirationDays = m_noncurrentDays->value();
        if (m_keepNewer->value() > 0)
            r.newerNoncurrentVersions = m_keepNewer->value();
    }
    if (m_abortUploads->isChecked())
        r.abortUploadDays = m_abortDays->value();
    return r;
}

void LifecycleRuleDialog::done(int result)
{
    if (result == QDialog::Accepted) {
        if (const QString e = rule().validate(); !e.isEmpty()) {
            m_error->setText(e);
            return;
        }
    }
    QDialog::done(result);
}

} // namespace s3fm
