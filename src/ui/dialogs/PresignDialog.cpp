#include "ui/dialogs/PresignDialog.h"

#include "core/Async.h"
#include "core/Format.h"
#include "providers/s3/S3ObjectService.h"

#include <QApplication>
#include <QClipboard>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QImage>
#include <QLabel>
#include <QPainter>
#include <QPlainTextEdit>
#include <QPointer>
#include <QPushButton>
#include <QSpinBox>
#include <QVBoxLayout>

#ifdef S3FM_HAVE_QRENCODE
#include <qrencode.h>
#endif

namespace s3fm {

PresignDialog::PresignDialog(std::shared_ptr<S3ObjectService> service, const Location& object,
                             QWidget* parent)
    : QDialog(parent), m_service(std::move(service)), m_object(object)
{
    setWindowTitle(tr("Share Link — %1").arg(object.name()));
    setMinimumWidth(560);
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;
    m_method = new QComboBox(this);
    m_method->setObjectName(QStringLiteral("method"));
    m_method->addItem(tr("Download (GET)"), int(S3ObjectService::PresignMethod::Get));
    m_method->addItem(tr("Upload / replace (PUT)"), int(S3ObjectService::PresignMethod::Put));
    form->addRow(tr("Allows:"), m_method);
    auto* expiry = new QHBoxLayout;
    m_amount = new QSpinBox(this);
    m_amount->setObjectName(QStringLiteral("amount"));
    m_amount->setRange(1, 999);
    m_amount->setValue(1);
    m_unit = new QComboBox(this);
    m_unit->setObjectName(QStringLiteral("unit"));
    m_unit->addItem(tr("minutes"), 60);
    m_unit->addItem(tr("hours"), 3600);
    m_unit->addItem(tr("days"), 86400);
    m_unit->setCurrentIndex(1);
    expiry->addWidget(m_amount);
    expiry->addWidget(m_unit);
    expiry->addStretch(1);
    form->addRow(tr("Valid for:"), expiry);
    layout->addLayout(form);

    m_url = new QPlainTextEdit(this);
    m_url->setObjectName(QStringLiteral("url"));
    m_url->setReadOnly(true);
    m_url->setMinimumHeight(90);
    layout->addWidget(m_url);
    m_expires = new QLabel(this);
    layout->addWidget(m_expires);
    m_warning = new QLabel(this);
    m_warning->setWordWrap(true);
    layout->addWidget(m_warning);
    m_qr = new QLabel(this);
    m_qr->setAlignment(Qt::AlignCenter);
    m_qr->setVisible(false);
    layout->addWidget(m_qr);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    m_copy = buttons->addButton(tr("&Copy URL"), QDialogButtonBox::ActionRole);
    m_copy->setObjectName(QStringLiteral("copy"));
    QPushButton* qr = buttons->addButton(tr("Show &QR Code"), QDialogButtonBox::ActionRole);
    qr->setCheckable(true);
    qr->setVisible(hasQrCode());
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    connect(m_copy, &QPushButton::clicked, this, [this] { QApplication::clipboard()->setText(url()); });
    connect(qr, &QPushButton::toggled, this, [this](bool on) {
        m_qr->setVisible(on && !m_qr->pixmap().isNull());
        adjustSize();
    });
    layout->addWidget(buttons);

    connect(m_method, &QComboBox::currentIndexChanged, this, &PresignDialog::generate);
    connect(m_amount, &QSpinBox::valueChanged, this, &PresignDialog::generate);
    connect(m_unit, &QComboBox::currentIndexChanged, this, &PresignDialog::generate);
    generate();
}

QString PresignDialog::url() const
{
    return m_url->toPlainText();
}

qint64 PresignDialog::seconds() const
{
    return qint64(m_amount->value()) * m_unit->currentData().toLongLong();
}

void PresignDialog::generate()
{
    m_busy = true;
    m_copy->setEnabled(false);
    const qint64 wanted = seconds();
    m_warning->clear();
    if (wanted > S3ObjectService::kMaxPresignSeconds)
        m_warning->setText(tr("Presigned URLs are valid for at most 7 days; the expiry was shortened."));
    QPointer<PresignDialog> guard(this);
    auto service = m_service;
    const Location object = m_object;
    const auto method = S3ObjectService::PresignMethod(m_method->currentData().toInt());
    runIo([service, object, method, wanted] {
        return service->presign(object, method, wanted);
    }).then(this, [guard, wanted](Result<S3ObjectService::Presigned> result) {
        auto* self = guard.data(); // read once: GCC -Wnull-dereference
        if (!self)
            return;
        self->m_busy = false;
        if (!result) {
            self->m_url->setPlainText(QString());
            self->m_expires->setText(result.error().toString());
            return;
        }
        self->m_url->setPlainText(result->url);
        self->m_copy->setEnabled(true);
        self->m_expires->setText(tr("Expires %1").arg(formatDateTime(result->expires)));
        if (result->limitedByCredentials) {
            QString text = tr("These are temporary credentials (session token, SSO or assumed role): the URL "
                              "stops working when they expire.");
            if (QDateTime::currentDateTimeUtc().secsTo(result->expires) <
                qMin(wanted, S3ObjectService::kMaxPresignSeconds) - 5)
                text += u' ' + tr("The expiry was shortened to match them.");
            self->m_warning->setText(text);
        }
        const QImage qr = qrCode(result->url);
        self->m_qr->setPixmap(qr.isNull() ? QPixmap() : QPixmap::fromImage(qr));
    });
}

bool PresignDialog::hasQrCode()
{
#ifdef S3FM_HAVE_QRENCODE
    return true;
#else
    return false;
#endif
}

QImage PresignDialog::qrCode(const QString& text, int scale)
{
#ifdef S3FM_HAVE_QRENCODE
    const QByteArray data = text.toUtf8();
    QRcode* code = QRcode_encodeString(data.constData(), 0, QR_ECLEVEL_L, QR_MODE_8, 1);
    if (!code)
        return {};
    const int border = 4;
    const int size = (code->width + 2 * border) * scale;
    QImage image(size, size, QImage::Format_RGB32);
    image.fill(Qt::white);
    QPainter p(&image);
    p.setPen(Qt::NoPen);
    p.setBrush(Qt::black);
    for (int y = 0; y < code->width; ++y) {
        for (int x = 0; x < code->width; ++x) {
            if ((unsigned(code->data[y * code->width + x]) & 1u) != 0)
                p.drawRect((x + border) * scale, (y + border) * scale, scale, scale);
        }
    }
    p.end();
    QRcode_free(code);
    return image;
#else
    Q_UNUSED(text)
    Q_UNUSED(scale)
    return {};
#endif
}

} // namespace s3fm
