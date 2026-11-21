// Bucket tabs with structured rules and JSON views: lifecycle, CORS, policy and
// static website hosting.

#include "ui/dialogs/BucketTabs.h"
#include "ui/dialogs/LifecycleRuleDialog.h"
#include "ui/widgets/JsonEditor.h"

#include <QComboBox>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QJsonDocument>
#include <QLabel>
#include <QLineEdit>
#include <QListWidget>
#include <QMenu>
#include <QMessageBox>
#include <QPushButton>
#include <QRadioButton>
#include <QRegularExpression>
#include <QStyle>
#include <QTabWidget>
#include <QTableWidget>
#include <QTimer>
#include <QVBoxLayout>

namespace s3fm {

namespace {

QLabel* smallNote(const QString& text, QWidget* parent)
{
    auto* label = new QLabel(QStringLiteral("<small>%1</small>").arg(text), parent);
    label->setWordWrap(true);
    return label;
}

QString jsonText(const QJsonObject& o)
{
    return QString::fromUtf8(QJsonDocument(o).toJson(QJsonDocument::Indented)).trimmed();
}

QStringList splitList(const QString& text)
{
    static const QRegularExpression sep(QStringLiteral("[,\\s]+"));
    return text.split(sep, Qt::SkipEmptyParts);
}

QPushButton* button(const QString& text, const QString& name, QWidget* parent)
{
    auto* b = new QPushButton(text, parent);
    b->setObjectName(name);
    return b;
}

} // namespace

// ---------------------------------------------------------------------------
// Lifecycle
// ---------------------------------------------------------------------------

BucketLifecycleTab::BucketLifecycleTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                       QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketLifecycleTab::build()
{
    auto* layout = new QVBoxLayout(this);
    m_views = new QTabWidget(this);
    m_views->setObjectName(QStringLiteral("lifecycleViews"));
    m_views->setDocumentMode(true);

    auto* rulesPage = new QWidget(m_views);
    auto* rulesLayout = new QVBoxLayout(rulesPage);
    m_table = new QTableWidget(0, 4, rulesPage);
    m_table->setObjectName(QStringLiteral("lifecycleRules"));
    m_table->setHorizontalHeaderLabels({tr("ID"), tr("Status"), tr("Applies to"), tr("Actions")});
    m_table->horizontalHeader()->setSectionResizeMode(3, QHeaderView::Stretch);
    m_table->verticalHeader()->hide();
    m_table->setEditTriggers(QAbstractItemView::NoEditTriggers);
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    m_table->setSelectionMode(QAbstractItemView::SingleSelection);
    m_table->setWordWrap(true);
    rulesLayout->addWidget(m_table, 1);
    auto* ruleButtons = new QHBoxLayout;
    QPushButton* add = button(tr("A&dd…"), QStringLiteral("addRule"), rulesPage);
    QPushButton* edit = button(tr("&Edit…"), QStringLiteral("editRule"), rulesPage);
    QPushButton* toggle = button(tr("Enable/&Disable"), QStringLiteral("toggleRule"), rulesPage);
    QPushButton* remove = button(tr("&Remove"), QStringLiteral("removeRule"), rulesPage);
    for (QPushButton* b : {add, edit, toggle, remove})
        ruleButtons->addWidget(b);
    ruleButtons->addStretch(1);
    rulesLayout->addLayout(ruleButtons);
    m_views->addTab(rulesPage, tr("Rules"));

    m_json = new JsonEditor(m_views);
    m_json->setObjectName(QStringLiteral("lifecycleJson"));
    m_views->addTab(m_json, tr("JSON"));
    layout->addWidget(m_views, 1);
    layout->addWidget(
        smallNote(tr("Rules run once a day. JSON uses the format of <tt>aws s3api "
                     "put-bucket-lifecycle-configuration</tt>. S3-compatible services may ignore "
                     "actions they do not support (MinIO needs remote tiers for transitions)."),
                  this));
    auto* applyRow = new QHBoxLayout;
    applyRow->addStretch(1);
    QPushButton* apply = button(tr("&Apply"), QStringLiteral("apply"), this);
    applyRow->addWidget(apply);
    layout->addLayout(applyRow);

    connect(add, &QPushButton::clicked, this, [this] { editRule(-1); });
    connect(edit, &QPushButton::clicked, this, [this] { editRule(m_table->currentRow()); });
    connect(m_table, &QTableWidget::cellDoubleClicked, this, [this](int row, int) { editRule(row); });
    connect(toggle, &QPushButton::clicked, this, [this] {
        const int row = m_table->currentRow();
        if (row < 0 || row >= m_rules.size())
            return;
        m_rules[row].enabled = !m_rules[row].enabled;
        fill();
        m_table->selectRow(row);
    });
    connect(remove, &QPushButton::clicked, this, [this] {
        const int row = m_table->currentRow();
        if (row < 0 || row >= m_rules.size())
            return;
        m_rules.removeAt(row);
        fill();
    });
    connect(m_views, &QTabWidget::currentChanged, this, [this](int index) {
        if (index == 1) {
            m_json->setPlainText(jsonText(lifecycleToJson(m_rules)));
        } else if (!syncFromJson()) {
            const QSignalBlocker block(m_views);
            m_views->setCurrentIndex(1);
        }
    });
    connect(apply, &QPushButton::clicked, this, &BucketLifecycleTab::save);
}

void BucketLifecycleTab::fill()
{
    m_table->setRowCount(0);
    for (const LifecycleRule& r : std::as_const(m_rules)) {
        const int row = m_table->rowCount();
        m_table->insertRow(row);
        m_table->setItem(row, 0, new QTableWidgetItem(r.id.isEmpty() ? tr("(generated)") : r.id));
        m_table->setItem(row, 1, new QTableWidgetItem(r.enabled ? tr("Enabled") : tr("Disabled")));
        m_table->setItem(row, 2, new QTableWidgetItem(r.filterSummary()));
        m_table->setItem(row, 3, new QTableWidgetItem(r.actionSummary()));
        if (!r.enabled) {
            for (int c = 0; c < 4; ++c)
                m_table->item(row, c)->setForeground(palette().color(QPalette::Disabled, QPalette::Text));
        }
    }
    m_table->resizeColumnsToContents();
    m_table->horizontalHeader()->setSectionResizeMode(3, QHeaderView::Stretch);
    m_table->resizeRowsToContents();
}

void BucketLifecycleTab::setRules(const QList<LifecycleRule>& rules)
{
    m_rules = rules;
    fill();
    if (m_views->currentIndex() == 1)
        m_json->setPlainText(jsonText(lifecycleToJson(m_rules)));
}

bool BucketLifecycleTab::syncFromJson()
{
    if (m_json->toPlainText().trimmed().isEmpty()) {
        setRules({});
        return true;
    }
    auto parsed = lifecycleFromJson(m_json->toPlainText().toUtf8());
    if (!parsed) {
        report(parsed.error().message, true);
        return false;
    }
    m_rules = parsed.value();
    fill();
    return true;
}

void BucketLifecycleTab::editRule(int row)
{
    LifecycleRuleDialog dialog(this);
    if (row >= 0 && row < m_rules.size())
        dialog.setRule(m_rules.at(row));
    else
        row = -1;
    if (dialog.exec() != QDialog::Accepted)
        return;
    if (row < 0)
        m_rules.push_back(dialog.rule());
    else
        m_rules[row] = dialog.rule();
    fill();
    report(tr("Rule changed; Apply saves the rules to the bucket."));
}

void BucketLifecycleTab::save()
{
    if (m_views->currentIndex() == 1 && !syncFromJson())
        return;
    if (const QString e = validateLifecycle(m_rules); !e.isEmpty()) {
        report(e, true);
        return;
    }
    auto service = m_service;
    const QString bucket = m_bucket;
    const QList<LifecycleRule> rules = m_rules;
    apply(rules.isEmpty() ? tr("Lifecycle configuration removed") : tr("Lifecycle rules saved"),
          [service, bucket, rules] { return service->setLifecycle(bucket, rules); });
}

void BucketLifecycleTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    using Rules = QList<LifecycleRule>;
    fetch<Rules>([service, bucket] { return service->lifecycle(bucket); },
                 [this](const Rules& rules) { setRules(rules); });
}

// ---------------------------------------------------------------------------
// CORS
// ---------------------------------------------------------------------------

namespace {
enum CorsColumn
{
    CorsOrigins,
    CorsMethods,
    CorsHeaders,
    CorsExpose,
    CorsMaxAge,
    CorsId,
    CorsColumns
};
} // namespace

BucketCorsTab::BucketCorsTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketCorsTab::build()
{
    auto* layout = new QVBoxLayout(this);
    m_views = new QTabWidget(this);
    m_views->setDocumentMode(true);
    auto* rulesPage = new QWidget(m_views);
    auto* rulesLayout = new QVBoxLayout(rulesPage);
    m_table = new QTableWidget(0, CorsColumns, rulesPage);
    m_table->setObjectName(QStringLiteral("corsRules"));
    m_table->setHorizontalHeaderLabels({tr("Allowed origins"), tr("Methods"), tr("Allowed headers"),
                                        tr("Expose headers"), tr("Max age (s)"), tr("ID")});
    m_table->horizontalHeader()->setSectionResizeMode(QHeaderView::Stretch);
    m_table->verticalHeader()->hide();
    rulesLayout->addWidget(m_table, 1);
    auto* buttons = new QHBoxLayout;
    QPushButton* add = button(tr("A&dd Rule"), QStringLiteral("addCors"), rulesPage);
    QPushButton* remove = button(tr("&Remove Rule"), QStringLiteral("removeCors"), rulesPage);
    buttons->addWidget(add);
    buttons->addWidget(remove);
    buttons->addStretch(1);
    rulesLayout->addLayout(buttons);
    m_views->addTab(rulesPage, tr("Rules"));
    m_json = new JsonEditor(m_views);
    m_json->setObjectName(QStringLiteral("corsJson"));
    m_views->addTab(m_json, tr("JSON"));
    layout->addWidget(m_views, 1);
    layout->addWidget(
        smallNote(tr("Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. "
                     "One \"*\" wildcard per origin or header is allowed."),
                  this));
    auto* applyRow = new QHBoxLayout;
    applyRow->addStretch(1);
    QPushButton* apply = button(tr("&Apply"), QStringLiteral("apply"), this);
    applyRow->addWidget(apply);
    layout->addLayout(applyRow);

    connect(add, &QPushButton::clicked, this, [this] {
        CorsRule r;
        r.allowedOrigins = {QStringLiteral("*")};
        r.allowedMethods = {QStringLiteral("GET")};
        QList<CorsRule> rules = rulesFromTable();
        rules.push_back(r);
        fill(rules);
    });
    connect(remove, &QPushButton::clicked, this, [this] {
        if (m_table->currentRow() >= 0)
            m_table->removeRow(m_table->currentRow());
    });
    connect(m_views, &QTabWidget::currentChanged, this, [this](int index) {
        if (index == 1) {
            m_json->setPlainText(jsonText(corsToJson(rulesFromTable())));
        } else if (!syncFromJson()) {
            const QSignalBlocker block(m_views);
            m_views->setCurrentIndex(1);
        }
    });
    connect(apply, &QPushButton::clicked, this, &BucketCorsTab::save);
}

void BucketCorsTab::fill(const QList<CorsRule>& rules)
{
    m_table->setRowCount(0);
    for (const CorsRule& r : rules) {
        const int row = m_table->rowCount();
        m_table->insertRow(row);
        m_table->setItem(row, CorsOrigins, new QTableWidgetItem(r.allowedOrigins.join(QStringLiteral(", "))));
        m_table->setItem(row, CorsMethods, new QTableWidgetItem(r.allowedMethods.join(QStringLiteral(", "))));
        m_table->setItem(row, CorsHeaders, new QTableWidgetItem(r.allowedHeaders.join(QStringLiteral(", "))));
        m_table->setItem(row, CorsExpose, new QTableWidgetItem(r.exposeHeaders.join(QStringLiteral(", "))));
        m_table->setItem(
            row, CorsMaxAge,
            new QTableWidgetItem(r.maxAgeSeconds >= 0 ? QString::number(r.maxAgeSeconds) : QString()));
        m_table->setItem(row, CorsId, new QTableWidgetItem(r.id));
    }
}

QList<CorsRule> BucketCorsTab::rulesFromTable() const
{
    QList<CorsRule> rules;
    auto text = [this](int row, int column) {
        const QTableWidgetItem* item = m_table->item(row, column);
        return item ? item->text().trimmed() : QString();
    };
    for (int row = 0; row < m_table->rowCount(); ++row) {
        CorsRule r;
        r.allowedOrigins = splitList(text(row, CorsOrigins));
        for (const QString& m : splitList(text(row, CorsMethods)))
            r.allowedMethods.push_back(m.toUpper());
        r.allowedHeaders = splitList(text(row, CorsHeaders));
        r.exposeHeaders = splitList(text(row, CorsExpose));
        bool ok = false;
        const int maxAge = text(row, CorsMaxAge).toInt(&ok);
        r.maxAgeSeconds = ok ? maxAge : -1;
        r.id = text(row, CorsId);
        rules.push_back(r);
    }
    return rules;
}

bool BucketCorsTab::syncFromJson()
{
    if (m_json->toPlainText().trimmed().isEmpty()) {
        fill({});
        return true;
    }
    auto parsed = corsFromJson(m_json->toPlainText().toUtf8());
    if (!parsed) {
        report(parsed.error().message, true);
        return false;
    }
    fill(parsed.value());
    return true;
}

void BucketCorsTab::save()
{
    if (m_views->currentIndex() == 1 && !syncFromJson())
        return;
    const QList<CorsRule> rules = rulesFromTable();
    if (const QString e = validateCors(rules); !e.isEmpty()) {
        report(e, true);
        return;
    }
    auto service = m_service;
    const QString bucket = m_bucket;
    apply(rules.isEmpty() ? tr("CORS configuration removed") : tr("CORS rules saved"),
          [service, bucket, rules] { return service->setCors(bucket, rules); });
}

void BucketCorsTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    using Rules = QList<CorsRule>;
    fetch<Rules>([service, bucket] { return service->cors(bucket); },
                 [this](const Rules& rules) {
                     fill(rules);
                     if (m_views->currentIndex() == 1)
                         m_json->setPlainText(jsonText(corsToJson(rules)));
                 });
}

// ---------------------------------------------------------------------------
// Policy
// ---------------------------------------------------------------------------

BucketPolicyTab::BucketPolicyTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                 QWidget* parent)
    : BucketTab(std::move(service), bucket, parent)
{
    build();
}

void BucketPolicyTab::build()
{
    auto* layout = new QVBoxLayout(this);
    auto* tools = new QHBoxLayout;
    QPushButton* templates = button(tr("&Templates"), QStringLiteral("templates"), this);
    auto* menu = new QMenu(templates);
    for (const auto& [name, json] : policyTemplates(m_bucket)) {
        const QString text = json;
        menu->addAction(name, this, [this, text] {
            if (!m_editor->toPlainText().trimmed().isEmpty() &&
                QMessageBox::question(this, tr("Bucket Policy"),
                                      tr("Replace the current text with the template?")) != QMessageBox::Yes)
                return;
            m_editor->setPlainText(text);
        });
    }
    templates->setMenu(menu);
    QPushButton* format = button(tr("&Format"), QStringLiteral("format"), this);
    tools->addWidget(templates);
    tools->addWidget(format);
    tools->addStretch(1);
    layout->addLayout(tools);
    m_editor = new JsonEditor(this);
    m_editor->setObjectName(QStringLiteral("policy"));
    m_editor->setPlaceholderText(tr("No bucket policy. Pick a template or paste a policy document."));
    layout->addWidget(m_editor, 3);
    m_issueList = new QListWidget(this);
    m_issueList->setObjectName(QStringLiteral("policyIssues"));
    m_issueList->setMaximumHeight(110);
    layout->addWidget(m_issueList, 1);
    auto* row = new QHBoxLayout;
    row->addStretch(1);
    QPushButton* remove = button(tr("&Delete Policy…"), QStringLiteral("deletePolicy"), this);
    QPushButton* apply = button(tr("&Apply"), QStringLiteral("apply"), this);
    row->addWidget(remove);
    row->addWidget(apply);
    layout->addLayout(row);

    m_timer = new QTimer(this);
    m_timer->setSingleShot(true);
    m_timer->setInterval(400);
    connect(m_timer, &QTimer::timeout, this, &BucketPolicyTab::validateNow);
    connect(m_editor, &QPlainTextEdit::textChanged, m_timer, qOverload<>(&QTimer::start));
    connect(format, &QPushButton::clicked, this, [this] {
        if (const QString e = m_editor->formatDocument(); !e.isEmpty())
            report(tr("Cannot format: %1").arg(e), true);
    });
    connect(m_issueList, &QListWidget::itemActivated, this, [this](QListWidgetItem* item) {
        const int line = item->data(Qt::UserRole).toInt();
        if (line > 0)
            m_editor->goTo(line, item->data(Qt::UserRole + 1).toInt());
    });
    connect(apply, &QPushButton::clicked, this, [this] { save(false); });
    connect(remove, &QPushButton::clicked, this, [this] { save(true); });
}

void BucketPolicyTab::validateNow()
{
    m_timer->stop();
    m_issues = validatePolicy(m_editor->toPlainText(), m_bucket);
    m_issueList->clear();
    if (m_issues.isEmpty()) {
        auto* ok = new QListWidgetItem(m_editor->toPlainText().trimmed().isEmpty() ? tr("No policy.")
                                                                                   : tr("No problems found."),
                                       m_issueList);
        ok->setIcon(style()->standardIcon(QStyle::SP_DialogApplyButton));
        return;
    }
    for (const PolicyIssue& issue : std::as_const(m_issues)) {
        QString text = issue.message;
        auto* item = new QListWidgetItem(text, m_issueList);
        item->setIcon(style()->standardIcon(issue.error ? QStyle::SP_MessageBoxCritical
                                                        : QStyle::SP_MessageBoxWarning));
        item->setData(Qt::UserRole, issue.line);
        item->setData(Qt::UserRole + 1, issue.column);
    }
}

void BucketPolicyTab::save(bool remove)
{
    auto service = m_service;
    const QString bucket = m_bucket;
    if (remove) {
        if (QMessageBox::question(this, tr("Bucket Policy"),
                                  tr("Delete the bucket policy of %1?").arg(bucket)) != QMessageBox::Yes)
            return;
        apply(tr("Bucket policy deleted"),
              [service, bucket] { return service->setPolicy(bucket, QString()); });
        return;
    }
    validateNow();
    bool publicGrant = false;
    for (const PolicyIssue& issue : std::as_const(m_issues)) {
        if (issue.error) {
            report(tr("Fix the errors in the policy first: %1").arg(issue.message), true);
            return;
        }
        publicGrant = publicGrant || issue.message.contains(QStringLiteral("Principal \"*\""));
    }
    if (publicGrant &&
        QMessageBox::warning(this, tr("Bucket Policy"),
                             tr("This policy grants access to everyone on the internet. Apply it anyway?"),
                             QMessageBox::Yes | QMessageBox::Cancel, QMessageBox::Cancel) != QMessageBox::Yes)
        return;
    const QString json = m_editor->toPlainText();
    apply(json.trimmed().isEmpty() ? tr("Bucket policy deleted") : tr("Bucket policy saved"),
          [service, bucket, json] { return service->setPolicy(bucket, json); });
}

void BucketPolicyTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<QString>([service, bucket] { return service->policy(bucket); },
                   [this](const QString& policy) {
                       const QJsonDocument doc = QJsonDocument::fromJson(policy.toUtf8());
                       m_editor->setPlainText(
                           doc.isNull() ? policy
                                        : QString::fromUtf8(doc.toJson(QJsonDocument::Indented)).trimmed());
                       validateNow();
                   });
}

// ---------------------------------------------------------------------------
// Static website hosting
// ---------------------------------------------------------------------------

BucketWebsiteTab::BucketWebsiteTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                                   const QString& region, QWidget* parent)
    : BucketTab(std::move(service), bucket, parent), m_region(region)
{
    build();
}

void BucketWebsiteTab::build()
{
    auto* layout = new QVBoxLayout(this);
    m_enabled = new QGroupBox(tr("Enable static &website hosting"), this);
    m_enabled->setObjectName(QStringLiteral("websiteEnabled"));
    m_enabled->setCheckable(true);
    m_enabled->setChecked(false);
    auto* box = new QVBoxLayout(m_enabled);
    m_host = new QRadioButton(tr("&Host a website"), m_enabled);
    m_host->setChecked(true);
    box->addWidget(m_host);
    auto* hostForm = new QFormLayout;
    hostForm->setContentsMargins(20, 0, 0, 0);
    m_index = new QLineEdit(QStringLiteral("index.html"), m_enabled);
    m_index->setObjectName(QStringLiteral("indexDocument"));
    hostForm->addRow(tr("&Index document:"), m_index);
    m_error = new QLineEdit(m_enabled);
    m_error->setObjectName(QStringLiteral("errorDocument"));
    m_error->setPlaceholderText(tr("optional, e.g. error.html"));
    hostForm->addRow(tr("&Error document:"), m_error);
    m_rules = new JsonEditor(m_enabled);
    m_rules->setObjectName(QStringLiteral("routingRules"));
    m_rules->setPlaceholderText(tr("Optional redirection rules (JSON array), e.g.\n[{\"Condition\": "
                                   "{\"KeyPrefixEquals\": \"docs/\"},\n  "
                                   "\"Redirect\": {\"ReplaceKeyPrefixWith\": \"documents/\"}}]"));
    hostForm->addRow(tr("&Routing rules:"), m_rules);
    box->addLayout(hostForm);
    m_redirect = new QRadioButton(tr("Redirect &all requests to another host"), m_enabled);
    box->addWidget(m_redirect);
    auto* redirectForm = new QFormLayout;
    redirectForm->setContentsMargins(20, 0, 0, 0);
    m_redirectHost = new QLineEdit(m_enabled);
    m_redirectHost->setObjectName(QStringLiteral("redirectHost"));
    m_redirectHost->setPlaceholderText(tr("e.g. www.example.com"));
    redirectForm->addRow(tr("Host &name:"), m_redirectHost);
    m_redirectProtocol = new QComboBox(m_enabled);
    m_redirectProtocol->addItem(tr("Same as the request"), QString());
    m_redirectProtocol->addItem(QStringLiteral("http"), QStringLiteral("http"));
    m_redirectProtocol->addItem(QStringLiteral("https"), QStringLiteral("https"));
    redirectForm->addRow(tr("&Protocol:"), m_redirectProtocol);
    box->addLayout(redirectForm);
    layout->addWidget(m_enabled, 1);
    m_endpoint = new QLabel(this);
    m_endpoint->setObjectName(QStringLiteral("websiteEndpoint"));
    m_endpoint->setTextInteractionFlags(Qt::TextBrowserInteraction);
    m_endpoint->setOpenExternalLinks(true);
    m_endpoint->setWordWrap(true);
    layout->addWidget(m_endpoint);
    layout->addWidget(
        smallNote(tr("Website endpoints serve objects over plain HTTP and only objects that are "
                     "publicly readable (bucket policy, public access block)."),
                  this));
    auto* applyRow = new QHBoxLayout;
    applyRow->addStretch(1);
    QPushButton* apply = button(tr("&Apply"), QStringLiteral("apply"), this);
    applyRow->addWidget(apply);
    layout->addLayout(applyRow);
    connect(m_host, &QRadioButton::toggled, this, &BucketWebsiteTab::updateFields);
    connect(m_enabled, &QGroupBox::toggled, this, &BucketWebsiteTab::updateFields);
    connect(apply, &QPushButton::clicked, this, &BucketWebsiteTab::save);
    updateFields();
}

void BucketWebsiteTab::updateFields()
{
    const bool host = m_host->isChecked();
    m_index->setEnabled(host);
    m_error->setEnabled(host);
    m_rules->setEnabled(host);
    m_redirectHost->setEnabled(!host);
    m_redirectProtocol->setEnabled(!host);
    if (m_service->isAws() && m_enabled->isChecked()) {
        const QString url = awsWebsiteEndpoint(m_bucket, m_region);
        m_endpoint->setText(tr("Website endpoint: <a href=\"%1\">%1</a>").arg(url.toHtmlEscaped()));
    } else {
        m_endpoint->clear();
    }
}

void BucketWebsiteTab::save()
{
    WebsiteConfig config;
    if (m_enabled->isChecked()) {
        if (m_host->isChecked()) {
            config.indexDocument = m_index->text().trimmed();
            config.errorDocument = m_error->text().trimmed();
            auto rules = routingRulesFromJson(m_rules->toPlainText().toUtf8());
            if (!rules) {
                report(rules.error().message, true);
                return;
            }
            config.routingRules = rules.value();
        } else {
            config.redirectHost = m_redirectHost->text().trimmed();
            config.redirectProtocol = m_redirectProtocol->currentData().toString();
        }
        if (const QString e = config.validate(); !e.isEmpty()) {
            report(e, true);
            return;
        }
    }
    auto service = m_service;
    const QString bucket = m_bucket;
    apply(config.isEnabled() ? tr("Website configuration saved") : tr("Website hosting disabled"),
          [service, bucket, config] { return service->setWebsite(bucket, config); });
}

void BucketWebsiteTab::load()
{
    auto service = m_service;
    const QString bucket = m_bucket;
    fetch<WebsiteConfig>([service, bucket] { return service->website(bucket); },
                         [this](const WebsiteConfig& w) {
                             m_enabled->setChecked(w.isEnabled());
                             if (!w.redirectHost.isEmpty()) {
                                 m_redirect->setChecked(true);
                                 m_redirectHost->setText(w.redirectHost);
                                 m_redirectProtocol->setCurrentIndex(
                                     qMax(0, m_redirectProtocol->findData(w.redirectProtocol)));
                             } else {
                                 m_host->setChecked(true);
                                 if (!w.indexDocument.isEmpty())
                                     m_index->setText(w.indexDocument);
                                 m_error->setText(w.errorDocument);
                                 m_rules->setPlainText(
                                     w.routingRules.isEmpty()
                                         ? QString()
                                         : QString::fromUtf8(QJsonDocument(routingRulesToJson(w.routingRules))
                                                                 .toJson(QJsonDocument::Indented))
                                               .trimmed());
                             }
                             updateFields();
                         });
}

} // namespace s3fm
