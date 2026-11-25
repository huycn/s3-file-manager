#include "ui/dialogs/ConnectionDialog.h"

#include "connections/AwsConfig.h"
#include "connections/ConnectionStore.h"
#include "core/Async.h"
#include "providers/s3/S3Session.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFileDialog>
#include <QFormLayout>
#include <QGroupBox>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QListWidget>
#include <QMenu>
#include <QMessageBox>
#include <QPointer>
#include <QPushButton>
#include <QScrollArea>
#include <QSpinBox>
#include <QSplitter>
#include <QStackedWidget>
#include <QToolButton>
#include <QVBoxLayout>

namespace s3fm {

namespace {

using Source = ConnectionProfile::CredentialSource;
using Addressing = ConnectionProfile::Addressing;
using Checksum = ConnectionProfile::ChecksumMode;

const QStringList& awsRegions()
{
    static const QStringList regions = {
        QStringLiteral("us-east-1"),      QStringLiteral("us-east-2"),      QStringLiteral("us-west-1"),
        QStringLiteral("us-west-2"),      QStringLiteral("ca-central-1"),   QStringLiteral("eu-west-1"),
        QStringLiteral("eu-west-2"),      QStringLiteral("eu-west-3"),      QStringLiteral("eu-central-1"),
        QStringLiteral("eu-central-2"),   QStringLiteral("eu-north-1"),     QStringLiteral("eu-south-1"),
        QStringLiteral("ap-south-1"),     QStringLiteral("ap-southeast-1"), QStringLiteral("ap-southeast-2"),
        QStringLiteral("ap-northeast-1"), QStringLiteral("ap-northeast-2"), QStringLiteral("ap-northeast-3"),
        QStringLiteral("ap-east-1"),      QStringLiteral("sa-east-1"),      QStringLiteral("me-south-1"),
        QStringLiteral("af-south-1"),
    };
    return regions;
}

const QStringList& storageClassChoices()
{
    static const QStringList classes = {
        QString(),
        QStringLiteral("STANDARD"),
        QStringLiteral("INTELLIGENT_TIERING"),
        QStringLiteral("STANDARD_IA"),
        QStringLiteral("ONEZONE_IA"),
        QStringLiteral("GLACIER_IR"),
        QStringLiteral("GLACIER"),
        QStringLiteral("DEEP_ARCHIVE"),
        QStringLiteral("REDUCED_REDUNDANCY"),
    };
    return classes;
}

template <class E> void selectData(QComboBox* combo, E value)
{
    const int idx = combo->findData(QVariant::fromValue(static_cast<int>(value)));
    if (idx >= 0)
        combo->setCurrentIndex(idx);
}

template <class E> E currentData(const QComboBox* combo)
{
    return static_cast<E>(combo->currentData().toInt());
}

} // namespace

ConnectionDialog::ConnectionDialog(ConnectionStore* store, QWidget* parent) : QDialog(parent), m_store(store)
{
    setWindowTitle(tr("Connections"));
    resize(900, 640);
    buildUi();
    reloadList();
    connect(m_store, &ConnectionStore::profilesChanged, this, [this] {
        if (!m_dirty)
            reloadList(m_currentId);
    });
}

void ConnectionDialog::buildUi()
{
    auto* layout = new QVBoxLayout(this);
    auto* splitter = new QSplitter(this);
    layout->addWidget(splitter, 1);

    // Left: list + buttons
    auto* left = new QWidget(splitter);
    auto* leftLayout = new QVBoxLayout(left);
    leftLayout->setContentsMargins(0, 0, 0, 0);
    m_list = new QListWidget(left);
    m_list->setIconSize(QSize(20, 20));
    leftLayout->addWidget(m_list, 1);
    auto* buttons = new QHBoxLayout;
    auto* add = new QToolButton(left);
    add->setText(tr("Add"));
    add->setToolButtonStyle(Qt::ToolButtonTextOnly);
    add->setPopupMode(QToolButton::InstantPopup);
    auto* addMenu = new QMenu(add);
    const auto presets = ConnectionProfile::allPresets();
    for (ConnectionProfile::Preset preset : presets)
        addMenu->addAction(ConnectionProfile::presetName(preset), this, [this, preset] { addNew(preset); });
    add->setMenu(addMenu);
    buttons->addWidget(add);
    m_duplicate = new QPushButton(tr("Duplicate"), left);
    connect(m_duplicate, &QPushButton::clicked, this, &ConnectionDialog::duplicateCurrent);
    buttons->addWidget(m_duplicate);
    m_delete = new QPushButton(tr("Delete"), left);
    connect(m_delete, &QPushButton::clicked, this, &ConnectionDialog::deleteCurrent);
    buttons->addWidget(m_delete);
    leftLayout->addLayout(buttons);
    auto* import = new QPushButton(tr("Import AWS Profiles…"), left);
    import->setToolTip(tr("Create connections for the profiles in %1").arg(AwsConfig::configPath()));
    connect(import, &QPushButton::clicked, this, &ConnectionDialog::importAwsProfiles);
    leftLayout->addWidget(import);
    splitter->addWidget(left);

    // Right: editor
    auto* scroll = new QScrollArea(splitter);
    scroll->setWidgetResizable(true);
    scroll->setFrameShape(QFrame::NoFrame);
    m_editor = new QWidget(scroll);
    auto* editorLayout = new QVBoxLayout(m_editor);

    auto* general = new QGroupBox(tr("Connection"), m_editor);
    auto* form = new QFormLayout(general);
    m_name = new QLineEdit(general);
    form->addRow(tr("&Name:"), m_name);
    m_id = new QLineEdit(general);
    m_id->setToolTip(tr("Used in addresses such as s3://<id>/bucket/key. Cannot be changed after saving."));
    form->addRow(tr("&ID:"), m_id);
    m_preset = new QComboBox(general);
    const auto presetChoices = ConnectionProfile::allPresets();
    for (ConnectionProfile::Preset preset : presetChoices)
        m_preset->addItem(ConnectionProfile::presetName(preset), static_cast<int>(preset));
    form->addRow(tr("&Provider:"), m_preset);
    m_endpoint = new QLineEdit(general);
    m_endpoint->setPlaceholderText(tr("Leave empty for Amazon S3"));
    form->addRow(tr("&Endpoint URL:"), m_endpoint);
    m_region = new QComboBox(general);
    m_region->setEditable(true);
    m_region->addItems(awsRegions());
    form->addRow(tr("&Region:"), m_region);
    m_addressing = new QComboBox(general);
    m_addressing->addItem(tr("Automatic"), static_cast<int>(Addressing::Auto));
    m_addressing->addItem(tr("Virtual-hosted (bucket.host)"), static_cast<int>(Addressing::VirtualHosted));
    m_addressing->addItem(tr("Path style (host/bucket)"), static_cast<int>(Addressing::Path));
    form->addRow(tr("&Addressing:"), m_addressing);
    editorLayout->addWidget(general);

    auto* creds = new QGroupBox(tr("Credentials"), m_editor);
    auto* credsLayout = new QVBoxLayout(creds);
    m_credentialSource = new QComboBox(creds);
    m_credentialSource->addItem(tr("Access key and secret"), static_cast<int>(Source::StaticKeys));
    m_credentialSource->addItem(tr("AWS profile (~/.aws)"), static_cast<int>(Source::AwsProfile));
    m_credentialSource->addItem(tr("Environment variables"), static_cast<int>(Source::Environment));
    m_credentialSource->addItem(tr("Default AWS credential chain"), static_cast<int>(Source::DefaultChain));
    m_credentialSource->addItem(tr("Anonymous (public buckets)"), static_cast<int>(Source::Anonymous));
    credsLayout->addWidget(m_credentialSource);
    m_credentialPages = new QStackedWidget(creds);

    auto* keysPage = new QWidget(m_credentialPages);
    auto* keysForm = new QFormLayout(keysPage);
    keysForm->setContentsMargins(0, 0, 0, 0);
    m_accessKey = new QLineEdit(keysPage);
    keysForm->addRow(tr("Access key ID:"), m_accessKey);
    auto* secretRow = new QHBoxLayout;
    m_secretKey = new QLineEdit(keysPage);
    m_secretKey->setEchoMode(QLineEdit::Password);
    secretRow->addWidget(m_secretKey);
    auto* show = new QToolButton(keysPage);
    show->setText(tr("Show"));
    show->setCheckable(true);
    connect(show, &QToolButton::toggled, this,
            [this](bool on) { m_secretKey->setEchoMode(on ? QLineEdit::Normal : QLineEdit::Password); });
    secretRow->addWidget(show);
    keysForm->addRow(tr("Secret access key:"), secretRow);
    m_sessionToken = new QLineEdit(keysPage);
    m_sessionToken->setEchoMode(QLineEdit::Password);
    m_sessionToken->setPlaceholderText(tr("Optional (temporary credentials)"));
    keysForm->addRow(tr("Session token:"), m_sessionToken);
    auto* keychainNote =
        new QLabel(tr("Secrets are stored in the system keychain, never in settings files."), keysPage);
    keychainNote->setWordWrap(true);
    keychainNote->setEnabled(false);
    keysForm->addRow(keychainNote);
    m_credentialPages->addWidget(keysPage);

    auto* profilePage = new QWidget(m_credentialPages);
    auto* profileForm = new QFormLayout(profilePage);
    profileForm->setContentsMargins(0, 0, 0, 0);
    m_awsProfile = new QComboBox(profilePage);
    m_awsProfile->setEditable(true);
    const auto awsProfiles = AwsConfig::profiles();
    for (const AwsProfileInfo& p : awsProfiles)
        m_awsProfile->addItem(p.name);
    profileForm->addRow(tr("Profile:"), m_awsProfile);
    auto* profileNote =
        new QLabel(tr("Supports static keys, SSO, assume-role (role_arn / source_profile) and "
                      "credential_process profiles."),
                   profilePage);
    profileNote->setWordWrap(true);
    profileNote->setEnabled(false);
    profileForm->addRow(profileNote);
    m_credentialPages->addWidget(profilePage);

    m_credentialHint = new QLabel(m_credentialPages);
    m_credentialHint->setWordWrap(true);
    m_credentialPages->addWidget(m_credentialHint);
    credsLayout->addWidget(m_credentialPages);
    editorLayout->addWidget(creds);

    auto* advanced = new QGroupBox(tr("Advanced"), m_editor);
    auto* advForm = new QFormLayout(advanced);
    m_verifyTls = new QCheckBox(tr("Verify TLS certificates"), advanced);
    advForm->addRow(m_verifyTls);
    auto* caRow = new QHBoxLayout;
    m_caBundle = new QLineEdit(advanced);
    m_caBundle->setPlaceholderText(tr("System certificates"));
    caRow->addWidget(m_caBundle);
    auto* browse = new QPushButton(tr("Browse…"), advanced);
    connect(browse, &QPushButton::clicked, this, [this] {
        const QString file = QFileDialog::getOpenFileName(this, tr("CA Bundle"), m_caBundle->text(),
                                                          tr("Certificates (*.pem *.crt);;All files (*)"));
        if (!file.isEmpty())
            m_caBundle->setText(file);
    });
    caRow->addWidget(browse);
    advForm->addRow(tr("CA bundle:"), caRow);
    m_checksums = new QComboBox(advanced);
    m_checksums->addItem(tr("When supported (AWS default)"), static_cast<int>(Checksum::WhenSupported));
    m_checksums->addItem(tr("Only when required (most compatible)"),
                         static_cast<int>(Checksum::WhenRequired));
    m_checksums->setToolTip(tr("Some S3-compatible services reject the newer integrity checksum headers."));
    advForm->addRow(tr("Request checksums:"), m_checksums);
    m_storageClass = new QComboBox(advanced);
    for (const QString& sc : storageClassChoices())
        m_storageClass->addItem(sc.isEmpty() ? tr("Bucket default") : sc, sc);
    advForm->addRow(tr("Upload storage class:"), m_storageClass);
    m_pinnedBuckets = new QLineEdit(advanced);
    m_pinnedBuckets->setPlaceholderText(tr("bucket-a, bucket-b"));
    m_pinnedBuckets->setToolTip(tr("Buckets to show even when the credentials may not list buckets."));
    advForm->addRow(tr("Pinned buckets:"), m_pinnedBuckets);
    m_requesterPays = new QLineEdit(advanced);
    m_requesterPays->setObjectName(QStringLiteral("requesterPays"));
    m_requesterPays->setPlaceholderText(tr("bucket-a, bucket-b, or * for all"));
    m_requesterPays->setToolTip(
        tr("Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer)."));
    advForm->addRow(tr("Requester pays:"), m_requesterPays);
    m_requestTimeout = new QSpinBox(advanced);
    m_requestTimeout->setRange(5, 3600);
    m_requestTimeout->setSuffix(tr(" s"));
    advForm->addRow(tr("Request timeout:"), m_requestTimeout);
    editorLayout->addWidget(advanced);

    auto* testRow = new QHBoxLayout;
    m_test = new QPushButton(tr("&Test Connection"), m_editor);
    connect(m_test, &QPushButton::clicked, this, &ConnectionDialog::testCurrent);
    testRow->addWidget(m_test);
    m_testResult = new QLabel(m_editor);
    m_testResult->setWordWrap(true);
    m_testResult->setTextInteractionFlags(Qt::TextSelectableByMouse);
    testRow->addWidget(m_testResult, 1);
    editorLayout->addLayout(testRow);
    editorLayout->addStretch(1);
    scroll->setWidget(m_editor);
    splitter->addWidget(scroll);
    splitter->setStretchFactor(1, 1);
    splitter->setSizes({260, 640});

    auto* box = new QDialogButtonBox(this);
    m_open = box->addButton(tr("&Open"), QDialogButtonBox::AcceptRole);
    m_save = box->addButton(QDialogButtonBox::Save);
    box->addButton(QDialogButtonBox::Close);
    connect(m_save, &QPushButton::clicked, this, &ConnectionDialog::save);
    connect(m_open, &QPushButton::clicked, this, [this] {
        if (m_dirty && !save())
            return;
        if (m_currentId.isEmpty() || m_isNew)
            return;
        m_openId = m_currentId;
        accept();
    });
    connect(box, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(box);

    // Object names: stable handles for tests and accessibility tools.
    m_name->setObjectName(QStringLiteral("name"));
    m_id->setObjectName(QStringLiteral("id"));
    m_preset->setObjectName(QStringLiteral("preset"));
    m_endpoint->setObjectName(QStringLiteral("endpoint"));
    m_region->setObjectName(QStringLiteral("region"));
    m_credentialSource->setObjectName(QStringLiteral("credentialSource"));
    m_accessKey->setObjectName(QStringLiteral("accessKey"));
    m_secretKey->setObjectName(QStringLiteral("secretKey"));
    m_sessionToken->setObjectName(QStringLiteral("sessionToken"));
    m_awsProfile->setObjectName(QStringLiteral("awsProfile"));
    m_testResult->setObjectName(QStringLiteral("testResult"));
    m_test->setObjectName(QStringLiteral("test"));

    // Dirty tracking and dependent fields
    auto markDirty = [this] {
        if (!m_loading)
            setDirty(true);
    };
    for (QLineEdit* e : {m_name, m_id, m_endpoint, m_accessKey, m_secretKey, m_sessionToken, m_caBundle,
                         m_pinnedBuckets, m_requesterPays})
        connect(e, &QLineEdit::textEdited, this, markDirty);
    for (QComboBox* c :
         {m_region, m_addressing, m_credentialSource, m_awsProfile, m_checksums, m_storageClass})
        connect(c, &QComboBox::currentTextChanged, this, markDirty);
    connect(m_verifyTls, &QCheckBox::toggled, this, markDirty);
    connect(m_requestTimeout, &QSpinBox::valueChanged, this, markDirty);
    connect(m_preset, &QComboBox::activated, this, [this] {
        applyPreset(currentData<ConnectionProfile::Preset>(m_preset));
        setDirty(true);
    });
    connect(m_credentialSource, &QComboBox::currentIndexChanged, this,
            &ConnectionDialog::updateCredentialPage);
    connect(m_name, &QLineEdit::textEdited, this, [this](const QString& name) {
        if (m_isNew && !m_id->isModified()) {
            QStringList taken = m_store->ids();
            m_id->setText(ConnectionProfile::makeId(name, taken));
        }
    });
    connect(m_list, &QListWidget::currentRowChanged, this, [this](int row) {
        if (row < 0 || m_loading)
            return;
        const QString id = m_list->item(row)->data(Qt::UserRole).toString();
        if (id == m_currentId)
            return;
        if (!confirmDiscard()) {
            m_loading = true;
            for (int i = 0; i < m_list->count(); ++i) {
                if (m_list->item(i)->data(Qt::UserRole).toString() == m_currentId)
                    m_list->setCurrentRow(i);
            }
            m_loading = false;
            return;
        }
        if (auto p = m_store->profile(id))
            loadIntoEditor(*p, false);
    });
    connect(m_list, &QListWidget::itemDoubleClicked, this, [this] { m_open->click(); });
}

void ConnectionDialog::reloadList(const QString& select)
{
    m_loading = true;
    m_list->clear();
    int selectRow = -1;
    const auto profiles = m_store->profiles();
    for (const ConnectionProfile& p : profiles) {
        auto* item = new QListWidgetItem(QIcon(QStringLiteral(":/icons/cloud.svg")), p.name, m_list);
        item->setData(Qt::UserRole, p.id);
        item->setToolTip(QStringLiteral("s3://%1/ — %2").arg(p.id, ConnectionProfile::presetName(p.preset)));
        if (p.id == select)
            selectRow = m_list->count() - 1;
    }
    m_loading = false;
    if (selectRow < 0 && m_list->count() > 0 && select.isEmpty() && !m_isNew)
        selectRow = 0;
    if (selectRow >= 0) {
        m_list->setCurrentRow(selectRow);
        if (auto p = m_store->profile(m_list->item(selectRow)->data(Qt::UserRole).toString()))
            loadIntoEditor(*p, false);
    } else if (m_list->count() == 0 && !m_isNew) {
        addNew(ConnectionProfile::Preset::AmazonS3);
    }
    m_duplicate->setEnabled(m_list->count() > 0);
    m_delete->setEnabled(m_list->count() > 0);
}

void ConnectionDialog::selectProfile(const QString& id)
{
    if (id.isEmpty()) {
        addNew(ConnectionProfile::Preset::AmazonS3);
        return;
    }
    reloadList(id);
}

void ConnectionDialog::loadIntoEditor(const ConnectionProfile& p, bool isNew)
{
    m_loading = true;
    m_currentId = p.id;
    m_isNew = isNew;
    m_name->setText(p.name);
    m_id->setText(p.id);
    m_id->setModified(false);
    m_id->setReadOnly(!isNew);
    selectData(m_preset, p.preset);
    m_endpoint->setText(p.endpoint);
    m_region->setCurrentText(p.region);
    selectData(m_addressing, p.addressing);
    selectData(m_credentialSource, p.credentialSource);
    m_accessKey->setText(p.accessKeyId);
    m_secretKey->clear();
    m_sessionToken->clear();
    const bool hasStored = !isNew && p.credentialSource == Source::StaticKeys;
    m_secretKey->setPlaceholderText(hasStored ? tr("Stored in keychain — leave empty to keep") : QString());
    m_awsProfile->setCurrentText(p.awsProfile);
    m_verifyTls->setChecked(p.verifyTls);
    m_caBundle->setText(p.caBundlePath);
    selectData(m_checksums, p.checksumMode);
    m_storageClass->setCurrentIndex(qMax(0, m_storageClass->findData(p.defaultStorageClass)));
    m_pinnedBuckets->setText(p.pinnedBuckets.join(QStringLiteral(", ")));
    m_requesterPays->setText(p.requesterPaysBuckets.join(QStringLiteral(", ")));
    m_requestTimeout->setValue(p.requestTimeoutMs / 1000);
    m_testResult->clear();
    updateCredentialPage();
    m_loading = false;
    setDirty(isNew);
}

void ConnectionDialog::applyPreset(ConnectionProfile::Preset preset)
{
    const ConnectionProfile defaults = ConnectionProfile::fromPreset(preset);
    m_endpoint->setText(defaults.endpoint);
    m_region->setCurrentText(defaults.region);
    selectData(m_addressing, defaults.addressing);
    selectData(m_checksums, defaults.checksumMode);
    if (preset == ConnectionProfile::Preset::MinIO && m_accessKey->text().isEmpty())
        m_accessKey->setPlaceholderText(QStringLiteral("minioadmin"));
}

void ConnectionDialog::addNew(ConnectionProfile::Preset preset)
{
    if (!confirmDiscard())
        return;
    ConnectionProfile p = ConnectionProfile::fromPreset(preset);
    p.name = tr("New %1 connection").arg(ConnectionProfile::presetName(preset));
    p.id = ConnectionProfile::makeId(p.name, m_store->ids());
    m_list->clearSelection();
    loadIntoEditor(p, true);
    m_name->setFocus();
    m_name->selectAll();
}

void ConnectionDialog::duplicateCurrent()
{
    if (!confirmDiscard() || m_currentId.isEmpty())
        return;
    auto source = m_store->profile(m_currentId);
    if (!source)
        return;
    ConnectionProfile p = *source;
    p.name = tr("%1 (copy)").arg(p.name);
    p.id = ConnectionProfile::makeId(p.name, m_store->ids());
    m_list->clearSelection();
    loadIntoEditor(p, true);
}

void ConnectionDialog::deleteCurrent()
{
    if (m_currentId.isEmpty())
        return;
    if (m_isNew) {
        setDirty(false);
        m_isNew = false;
        reloadList();
        return;
    }
    if (QMessageBox::question(
            this, tr("Delete Connection"),
            tr("Delete the connection \"%1\" and its stored secret?").arg(m_name->text())) !=
        QMessageBox::Yes)
        return;
    if (const VoidResult r = m_store->remove(m_currentId); !r) {
        QMessageBox::warning(this, tr("Delete Connection"), r.error().toString());
        return;
    }
    setDirty(false);
    m_currentId.clear();
    reloadList();
}

void ConnectionDialog::importAwsProfiles()
{
    const QList<AwsProfileInfo> profiles = AwsConfig::profiles();
    QStringList existing;
    const auto connections = m_store->profiles();
    for (const ConnectionProfile& p : connections) {
        if (p.credentialSource == Source::AwsProfile)
            existing.push_back(p.awsProfile);
    }
    int added = 0;
    QString last;
    for (const AwsProfileInfo& info : profiles) {
        if (existing.contains(info.name))
            continue;
        ConnectionProfile p =
            ConnectionProfile::fromPreset(info.endpointUrl.isEmpty() ? ConnectionProfile::Preset::AmazonS3
                                                                     : ConnectionProfile::Preset::Custom);
        p.name = tr("AWS: %1").arg(info.name);
        p.id = ConnectionProfile::makeId(QStringLiteral("aws-") + info.name, m_store->ids());
        p.credentialSource = Source::AwsProfile;
        p.awsProfile = info.name;
        p.endpoint = info.endpointUrl;
        if (!info.region.isEmpty())
            p.region = info.region;
        if (auto r = m_store->save(p, std::nullopt); r) {
            ++added;
            last = p.id;
        }
    }
    if (added == 0)
        QMessageBox::information(this, tr("Import AWS Profiles"),
                                 profiles.isEmpty()
                                     ? tr("No profiles found in %1.").arg(AwsConfig::configPath())
                                     : tr("All AWS profiles are already imported."));
    else
        reloadList(last);
}

void ConnectionDialog::updateCredentialPage()
{
    switch (currentData<Source>(m_credentialSource)) {
    case Source::StaticKeys:
        m_credentialPages->setCurrentIndex(0);
        break;
    case Source::AwsProfile:
        m_credentialPages->setCurrentIndex(1);
        break;
    case Source::Environment:
        m_credentialHint->setText(
            tr("Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the "
               "environment the application was started with."));
        m_credentialPages->setCurrentIndex(2);
        break;
    case Source::DefaultChain:
        m_credentialHint->setText(
            tr("Tries environment variables, the default profile, SSO, web identity and "
               "container/instance credentials, in the AWS SDK's standard order."));
        m_credentialPages->setCurrentIndex(2);
        break;
    case Source::Anonymous:
        m_credentialHint->setText(
            tr("Requests are not signed. Only public buckets and objects are accessible."));
        m_credentialPages->setCurrentIndex(2);
        break;
    }
}

ConnectionProfile ConnectionDialog::editedProfile() const
{
    ConnectionProfile p;
    p.id = m_id->text().trimmed();
    p.name = m_name->text().trimmed();
    p.preset = currentData<ConnectionProfile::Preset>(m_preset);
    p.endpoint = m_endpoint->text().trimmed();
    while (p.endpoint.endsWith(u'/'))
        p.endpoint.chop(1);
    p.region = m_region->currentText().trimmed();
    p.addressing = currentData<Addressing>(m_addressing);
    p.credentialSource = currentData<Source>(m_credentialSource);
    p.accessKeyId = m_accessKey->text().trimmed();
    p.awsProfile = m_awsProfile->currentText().trimmed();
    p.verifyTls = m_verifyTls->isChecked();
    p.caBundlePath = m_caBundle->text().trimmed();
    p.checksumMode = currentData<Checksum>(m_checksums);
    p.defaultStorageClass = m_storageClass->currentData().toString();
    const auto pinned = m_pinnedBuckets->text().split(u',', Qt::SkipEmptyParts);
    for (const QString& b : pinned) {
        if (!b.trimmed().isEmpty())
            p.pinnedBuckets.push_back(b.trimmed());
    }
    const auto requesterPays = m_requesterPays->text().split(u',', Qt::SkipEmptyParts);
    for (const QString& b : requesterPays) {
        if (!b.trimmed().isEmpty())
            p.requesterPaysBuckets.push_back(b.trimmed());
    }
    p.requestTimeoutMs = m_requestTimeout->value() * 1000;
    return p;
}

std::optional<ConnectionSecret> ConnectionDialog::editedSecret() const
{
    if (currentData<Source>(m_credentialSource) != Source::StaticKeys)
        return ConnectionSecret{}; // remove any stored secret
    if (m_secretKey->text().isEmpty() && m_sessionToken->text().isEmpty())
        return std::nullopt; // keep stored
    return ConnectionSecret{m_secretKey->text(), m_sessionToken->text()};
}

bool ConnectionDialog::save()
{
    const ConnectionProfile p = editedProfile();
    if (m_isNew && m_store->contains(p.id)) {
        QMessageBox::warning(this, tr("Save Connection"),
                             tr("A connection with the ID \"%1\" already exists.").arg(p.id));
        return false;
    }
    if (m_isNew && p.credentialSource == Source::StaticKeys && m_secretKey->text().isEmpty()) {
        QMessageBox::warning(this, tr("Save Connection"), tr("Enter the secret access key."));
        return false;
    }
    const VoidResult r = m_store->save(p, editedSecret());
    if (!r) {
        QMessageBox::warning(this, tr("Save Connection"), r.error().toString());
        return false;
    }
    m_isNew = false;
    m_currentId = p.id;
    setDirty(false);
    reloadList(p.id);
    return true;
}

void ConnectionDialog::testCurrent()
{
    const ConnectionProfile p = editedProfile();
    const QString problem = p.validate();
    if (!problem.isEmpty()) {
        m_testResult->setText(problem);
        return;
    }
    // Use the typed secret, or the stored one for an existing profile.
    const std::optional<ConnectionSecret> typed = editedSecret();
    ConnectionStore* store = m_store;
    const QString storedId = m_isNew ? QString() : m_currentId;
    S3Session::SecretFetcher fetch = [typed, store, storedId]() -> Result<ConnectionSecret> {
        if (typed && !typed->isEmpty())
            return *typed;
        if (storedId.isEmpty())
            return ConnectionSecret{};
        return store->secret(storedId);
    };
    m_test->setEnabled(false);
    m_testResult->setText(tr("Testing…"));
    QPointer<ConnectionDialog> guard(this);
    runIo([p, fetch] {
        S3Session session(p, fetch);
        return testConnection(session);
    }).then(this, [guard](const ConnectionTestResult& result) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_test->setEnabled(true);
        QString text =
            result.ok ? QStringLiteral("✔ ") + result.summary : QStringLiteral("✘ ") + result.summary;
        if (result.ok && !result.buckets.isEmpty()) {
            QStringList shown = result.buckets.mid(0, 8);
            if (result.buckets.size() > 8)
                shown.push_back(QStringLiteral("…"));
            text += QStringLiteral("\n") + shown.join(QStringLiteral(", "));
        }
        self->m_testResult->setText(text);
    });
}

bool ConnectionDialog::confirmDiscard()
{
    if (!m_dirty)
        return true;
    const auto answer = QMessageBox::question(this, tr("Unsaved Changes"),
                                              tr("Save the changes to \"%1\"?").arg(m_name->text()),
                                              QMessageBox::Save | QMessageBox::Discard | QMessageBox::Cancel);
    if (answer == QMessageBox::Save)
        return save();
    if (answer == QMessageBox::Discard) {
        setDirty(false);
        m_isNew = false;
        return true;
    }
    return false;
}

void ConnectionDialog::setDirty(bool dirty)
{
    m_dirty = dirty;
    m_save->setEnabled(dirty);
    setWindowTitle(dirty ? tr("Connections *") : tr("Connections"));
}

void ConnectionDialog::done(int result)
{
    if (result == QDialog::Rejected && !confirmDiscard())
        return;
    QDialog::done(result);
}

} // namespace s3fm
