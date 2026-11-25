#include "ui/widgets/EncryptionPicker.h"

#include <QComboBox>
#include <QHBoxLayout>
#include <QLineEdit>
#include <QSettings>

namespace s3fm {

namespace {
constexpr int kDefault = -1;
constexpr QLatin1StringView kRecentKeys("encryption/recentKmsKeys");
} // namespace

EncryptionPicker::EncryptionPicker(QWidget* parent, bool offerDefault)
    : QWidget(parent), m_offerDefault(offerDefault)
{
    auto* layout = new QHBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    m_mode = new QComboBox(this);
    m_mode->setObjectName(QStringLiteral("encryptionMode"));
    if (offerDefault)
        m_mode->addItem(tr("Unchanged / bucket default"), kDefault);
    for (ObjectEncryption::Mode m : {ObjectEncryption::Mode::None, ObjectEncryption::Mode::S3,
                                     ObjectEncryption::Mode::Kms, ObjectEncryption::Mode::Customer})
        m_mode->addItem(ObjectEncryption::modeName(m), int(m));
    layout->addWidget(m_mode, 1);
    m_kmsKey = new QComboBox(this);
    m_kmsKey->setObjectName(QStringLiteral("kmsKey"));
    m_kmsKey->setEditable(true);
    m_kmsKey->lineEdit()->setPlaceholderText(tr("KMS key id, ARN or alias (empty: aws/s3)"));
    m_kmsKey->addItem(QString());
    const auto recent = QSettings().value(kRecentKeys).toStringList();
    for (const QString& k : recent)
        m_kmsKey->addItem(k);
    m_kmsKey->setMinimumContentsLength(24);
    layout->addWidget(m_kmsKey, 2);
    connect(m_mode, &QComboBox::currentIndexChanged, this, [this] {
        updateKeyField();
        Q_EMIT changed();
    });
    connect(m_kmsKey, &QComboBox::currentTextChanged, this, &EncryptionPicker::changed);
    updateKeyField();
}

void EncryptionPicker::updateKeyField()
{
    m_kmsKey->setVisible(m_mode->currentData().toInt() == int(ObjectEncryption::Mode::Kms));
}

void EncryptionPicker::setEncryption(const std::optional<ObjectEncryption>& encryption)
{
    if (!encryption) {
        m_mode->setCurrentIndex(m_offerDefault ? 0 : m_mode->findData(int(ObjectEncryption::Mode::None)));
        return;
    }
    m_mode->setCurrentIndex(m_mode->findData(int(encryption->mode)));
    m_kmsKey->setCurrentText(encryption->kmsKeyId);
    updateKeyField();
}

std::optional<ObjectEncryption> EncryptionPicker::encryption() const
{
    const int mode = m_mode->currentData().toInt();
    if (mode == kDefault)
        return std::nullopt;
    ObjectEncryption e;
    e.mode = ObjectEncryption::Mode(mode);
    if (e.mode == ObjectEncryption::Mode::Kms)
        e.kmsKeyId = m_kmsKey->currentText().trimmed();
    return e;
}

void EncryptionPicker::rememberKey() const
{
    const auto e = encryption();
    if (!e || e->mode != ObjectEncryption::Mode::Kms || e->kmsKeyId.isEmpty())
        return;
    QSettings settings;
    QStringList recent = settings.value(kRecentKeys).toStringList();
    recent.removeAll(e->kmsKeyId);
    recent.prepend(e->kmsKeyId);
    settings.setValue(kRecentKeys, recent.mid(0, 10));
}

QString EncryptionPicker::sseName(const std::optional<ObjectEncryption>& e)
{
    if (!e)
        return {};
    switch (e->mode) {
    case ObjectEncryption::Mode::S3:
        return QStringLiteral("AES256");
    case ObjectEncryption::Mode::Kms:
        return QStringLiteral("aws:kms");
    case ObjectEncryption::Mode::Customer:
        return QStringLiteral("SSE-C");
    case ObjectEncryption::Mode::None:
        break;
    }
    return {};
}

std::optional<ObjectEncryption> EncryptionPicker::fromSseName(const QString& sse, const QString& kmsKeyId)
{
    if (sse.isEmpty())
        return std::nullopt;
    ObjectEncryption e;
    if (sse == u"AES256")
        e.mode = ObjectEncryption::Mode::S3;
    else if (sse == u"aws:kms")
        e.mode = ObjectEncryption::Mode::Kms;
    else if (sse == u"SSE-C")
        e.mode = ObjectEncryption::Mode::Customer;
    e.kmsKeyId = kmsKeyId;
    return e;
}

} // namespace s3fm
