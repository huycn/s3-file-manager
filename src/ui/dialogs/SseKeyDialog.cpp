#include "ui/dialogs/SseKeyDialog.h"

#include "connections/ConnectionStore.h"

#include <QCheckBox>
#include <QDialogButtonBox>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QPushButton>
#include <QVBoxLayout>

namespace s3fm {

SseKeyDialog::SseKeyDialog(ConnectionStore* store, const QString& connectionId, const QString& bucket,
                           QWidget* parent)
    : QDialog(parent), m_store(store), m_connection(connectionId), m_bucket(bucket)
{
    setWindowTitle(tr("Customer Encryption Key (SSE-C)"));
    setMinimumWidth(520);
    auto* layout = new QVBoxLayout(this);
    auto* intro =
        new QLabel(tr("SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store "
                      "it: <b>if the key is lost, the objects cannot be read</b>. The key is kept in "
                      "the system keychain."),
                   this);
    intro->setWordWrap(true);
    layout->addWidget(intro);
    m_state = new QLabel(this);
    layout->addWidget(m_state);
    auto* row = new QHBoxLayout;
    m_key = new QLineEdit(this);
    m_key->setObjectName(QStringLiteral("key"));
    m_key->setEchoMode(QLineEdit::Password);
    m_key->setPlaceholderText(tr("base64 (44 characters) or 64 hex digits"));
    row->addWidget(m_key, 1);
    auto* show = new QPushButton(tr("Show"), this);
    show->setCheckable(true);
    row->addWidget(show);
    auto* generate = new QPushButton(tr("Generate"), this);
    generate->setObjectName(QStringLiteral("generate"));
    row->addWidget(generate);
    layout->addLayout(row);
    m_allBuckets = new QCheckBox(tr("Use for every bucket of this connection without its own key"), this);
    layout->addWidget(m_allBuckets);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Save | QDialogButtonBox::Cancel, this);
    QPushButton* remove = buttons->addButton(tr("Remove Key"), QDialogButtonBox::DestructiveRole);
    connect(buttons, &QDialogButtonBox::accepted, this, &SseKeyDialog::save);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    connect(remove, &QPushButton::clicked, this, &SseKeyDialog::removeKey);
    layout->addWidget(buttons);

    connect(show, &QPushButton::toggled, this,
            [this](bool on) { m_key->setEchoMode(on ? QLineEdit::Normal : QLineEdit::Password); });
    connect(generate, &QPushButton::clicked, this, [this, show] {
        m_key->setText(SseCustomerKey::generate().keyBase64());
        show->setChecked(true);
    });

    const auto current = store->sseCustomerKey(connectionId, bucket);
    m_state->setText(
        current ? tr("A key is configured for bucket %1 (MD5 %2).").arg(bucket, current->keyMd5Base64())
                : tr("No key is configured for bucket %1.").arg(bucket));
    remove->setEnabled(current.has_value());
}

void SseKeyDialog::save()
{
    const SseCustomerKey key = SseCustomerKey::fromText(m_key->text());
    if (!key.isValid()) {
        QMessageBox::warning(this, windowTitle(),
                             tr("The key must be 32 bytes, as base64 or 64 hex digits."));
        return;
    }
    const QString bucket = m_allBuckets->isChecked() ? QStringLiteral("*") : m_bucket;
    if (auto r = m_store->setSseCustomerKey(m_connection, bucket, key); !r) {
        QMessageBox::warning(this, windowTitle(), r.error().toString());
        return;
    }
    accept();
}

void SseKeyDialog::removeKey()
{
    if (QMessageBox::warning(
            this, windowTitle(),
            tr("Remove the key for bucket %1? Objects encrypted with it cannot be read without it.")
                .arg(m_bucket),
            QMessageBox::Yes | QMessageBox::Cancel) != QMessageBox::Yes)
        return;
    if (auto r = m_store->setSseCustomerKey(m_connection, m_bucket, std::nullopt); !r) {
        QMessageBox::warning(this, windowTitle(), r.error().toString());
        return;
    }
    accept();
}

} // namespace s3fm
