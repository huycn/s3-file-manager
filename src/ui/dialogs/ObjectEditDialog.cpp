#include "ui/dialogs/ObjectEditDialog.h"

#include "ui/widgets/EncryptionPicker.h"
#include "ui/widgets/KeyValueEditor.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QGroupBox>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPushButton>
#include <QScrollArea>
#include <QVBoxLayout>

namespace s3fm {

namespace {
QGroupBox* section(QWidget* parent, const QString& title, const char* name)
{
    auto* box = new QGroupBox(title, parent);
    box->setObjectName(QString::fromLatin1(name));
    box->setCheckable(true);
    box->setChecked(false);
    return box;
}
} // namespace

ObjectEditDialog::ObjectEditDialog(const QString& what, QWidget* parent) : QDialog(parent)
{
    setWindowTitle(tr("Edit Objects"));
    resize(620, 700);
    auto* outer = new QVBoxLayout(this);
    auto* intro = new QLabel(tr("Change %1. Only checked sections are applied; folders include everything "
                                "below them.")
                                 .arg(what),
                             this);
    intro->setWordWrap(true);
    outer->addWidget(intro);

    auto* scroll = new QScrollArea(this);
    scroll->setWidgetResizable(true);
    auto* content = new QWidget(scroll);
    auto* layout = new QVBoxLayout(content);

    m_headersBox = section(content, tr("Headers and metadata"), "headersBox");
    auto* hl = new QVBoxLayout(m_headersBox);
    auto* form = new QFormLayout;
    auto edit = [this](const char* name, const QString& placeholder) {
        auto* e = new QLineEdit(m_headersBox);
        e->setObjectName(QString::fromLatin1(name));
        e->setPlaceholderText(placeholder);
        return e;
    };
    const QString keep = tr("(unchanged)");
    m_contentType = edit("contentType", keep);
    m_cacheControl = edit("cacheControl", keep);
    m_contentDisposition = edit("contentDisposition", keep);
    m_contentEncoding = edit("contentEncoding", keep);
    m_contentLanguage = edit("contentLanguage", keep);
    m_expires = edit("expires", keep);
    form->addRow(tr("Content-Type:"), m_contentType);
    form->addRow(tr("Cache-Control:"), m_cacheControl);
    form->addRow(tr("Content-Disposition:"), m_contentDisposition);
    form->addRow(tr("Content-Encoding:"), m_contentEncoding);
    form->addRow(tr("Content-Language:"), m_contentLanguage);
    form->addRow(tr("Expires:"), m_expires);
    hl->addLayout(form);
    hl->addWidget(new QLabel(tr("Set user metadata:"), m_headersBox));
    m_metadata = new KeyValueEditor(tr("Key"), tr("Value"), m_headersBox);
    m_metadata->setObjectName(QStringLiteral("metadata"));
    m_metadata->setMinimumHeight(120);
    hl->addWidget(m_metadata);
    m_replaceMetadata = new QCheckBox(tr("Replace all user metadata (otherwise merge)"), m_headersBox);
    hl->addWidget(m_replaceMetadata);
    auto* rm = new QFormLayout;
    m_removeMetadata = edit("removeMetadata", tr("key-a, key-b"));
    rm->addRow(tr("Remove keys:"), m_removeMetadata);
    hl->addLayout(rm);
    layout->addWidget(m_headersBox);

    m_storageBox = section(content, tr("Storage class"), "storageBox");
    auto* sl = new QVBoxLayout(m_storageBox);
    m_storageClass = new QComboBox(m_storageBox);
    m_storageClass->setObjectName(QStringLiteral("storageClass"));
    m_storageClass->addItems(storageClassNames());
    sl->addWidget(m_storageClass);
    layout->addWidget(m_storageBox);

    m_encryptionBox = section(content, tr("Encryption"), "encryptionBox");
    auto* el = new QVBoxLayout(m_encryptionBox);
    m_encryption = new EncryptionPicker(m_encryptionBox);
    el->addWidget(m_encryption);
    layout->addWidget(m_encryptionBox);

    m_tagsBox = section(content, tr("Tags (replace the tag set)"), "tagsBox");
    auto* tl = new QVBoxLayout(m_tagsBox);
    m_tags = new KeyValueEditor(tr("Tag"), tr("Value"), m_tagsBox);
    m_tags->setObjectName(QStringLiteral("tags"));
    m_tags->setMaxRows(10);
    m_tags->setMinimumHeight(120);
    tl->addWidget(m_tags);
    layout->addWidget(m_tagsBox);

    m_aclBox = section(content, tr("Access control (canned ACL)"), "aclBox");
    auto* al = new QVBoxLayout(m_aclBox);
    m_acl = new QComboBox(m_aclBox);
    m_acl->setObjectName(QStringLiteral("acl"));
    m_acl->addItems(cannedAclNames());
    al->addWidget(m_acl);
    layout->addWidget(m_aclBox);
    layout->addStretch(1);
    scroll->setWidget(content);
    outer->addWidget(scroll, 1);

    auto* note = new QLabel(
        tr("<small>Headers, storage class and encryption are changed by copying each object "
           "onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is "
           "set here too. Archived objects (Glacier, Deep Archive) must be restored first.</small>"),
        this);
    note->setWordWrap(true);
    outer->addWidget(note);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    buttons->button(QDialogButtonBox::Ok)->setText(tr("Apply"));
    connect(buttons, &QDialogButtonBox::accepted, this, [this] {
        if (const QString problem = validate(); !problem.isEmpty()) {
            QMessageBox::warning(this, windowTitle(), problem);
            return;
        }
        m_encryption->rememberKey();
        accept();
    });
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    outer->addWidget(buttons);
}

BulkObjectChange ObjectEditDialog::change() const
{
    BulkObjectChange c;
    if (m_headersBox->isChecked()) {
        ObjectHeaders h;
        h.contentType = m_contentType->text().trimmed();
        h.cacheControl = m_cacheControl->text().trimmed();
        h.contentDisposition = m_contentDisposition->text().trimmed();
        h.contentEncoding = m_contentEncoding->text().trimmed();
        h.contentLanguage = m_contentLanguage->text().trimmed();
        h.expires = m_expires->text().trimmed();
        h.userMetadata = m_metadata->values();
        c.headers = h;
        c.replaceUserMetadata = m_replaceMetadata->isChecked();
        for (const QString& k : m_removeMetadata->text().split(u',', Qt::SkipEmptyParts)) {
            if (!k.trimmed().isEmpty())
                c.removeUserMetadata.push_back(k.trimmed());
        }
    }
    if (m_storageBox->isChecked())
        c.storageClass = m_storageClass->currentText();
    if (m_encryptionBox->isChecked())
        c.encryption = m_encryption->encryption();
    if (m_tagsBox->isChecked())
        c.tags = m_tags->values();
    if (m_aclBox->isChecked())
        c.cannedAcl = m_acl->currentText();
    return c;
}

QString ObjectEditDialog::validate() const
{
    const BulkObjectChange c = change();
    if (c.isEmpty())
        return tr("Check at least one section to change.");
    if (c.headers) {
        for (const QString& k : c.headers->userMetadata.keys()) {
            if (!isValidMetadataKey(k))
                return tr("Invalid metadata key \"%1\": use letters, digits, '-', '_' and '.'").arg(k);
        }
    }
    if (c.tags)
        return validateTags(*c.tags);
    return {};
}

} // namespace s3fm
