#include "ui/dialogs/ViewerDialog.h"

#include "core/Format.h"

#include <QDesktopServices>
#include <QDialogButtonBox>
#include <QFile>
#include <QFileInfo>
#include <QFontDatabase>
#include <QImageReader>
#include <QKeyEvent>
#include <QLabel>
#include <QMimeDatabase>
#include <QPlainTextEdit>
#include <QPushButton>
#include <QScrollArea>
#include <QStringDecoder>
#include <QUrl>
#include <QVBoxLayout>

namespace s3fm {

bool ViewerDialog::looksLikeText(const QByteArray& head)
{
    if (head.contains('\0'))
        return false;
    // Valid UTF-8 (or plain ASCII) without too many control characters.
    QStringDecoder decoder(QStringDecoder::Utf8, QStringDecoder::Flag::Stateless);
    const QString decoded = decoder(head);
    if (decoder.hasError()) {
        // Incomplete multi-byte sequence at the cut is fine; anything else is not UTF-8.
        if (decoded.size() < head.size() / 2)
            return false;
    }
    int control = 0;
    for (char c : head) {
        const auto u = static_cast<unsigned char>(c);
        if (u < 0x20 && c != '\n' && c != '\r' && c != '\t' && c != '\f')
            ++control;
    }
    return control <= head.size() / 100;
}

namespace {

QString hexDump(const QByteArray& data)
{
    QString out;
    out.reserve(data.size() * 4);
    for (qsizetype offset = 0; offset < data.size(); offset += 16) {
        out += QStringLiteral("%1  ").arg(offset, 8, 16, QLatin1Char('0'));
        QString ascii;
        for (int i = 0; i < 16; ++i) {
            if (offset + i < data.size()) {
                const auto b = static_cast<unsigned char>(data.at(offset + i));
                out += QStringLiteral("%1 ").arg(b, 2, 16, QLatin1Char('0'));
                ascii += (b >= 0x20 && b < 0x7f) ? QChar(b) : QChar(u'.');
            } else {
                out += QStringLiteral("   ");
            }
            if (i == 7)
                out += u' ';
        }
        out += u' ' + ascii + u'\n';
    }
    return out;
}

} // namespace

ViewerDialog::ViewerDialog(const QString& localFile, const QString& title, QWidget* parent)
    : QDialog(parent), m_file(localFile)
{
    setWindowTitle(tr("View — %1").arg(title));
    resize(900, 680);
    auto* layout = new QVBoxLayout(this);
    auto* info = new QLabel(this);
    layout->addWidget(info);

    QFile file(localFile);
    const qint64 size = QFileInfo(localFile).size();
    QString infoText = QStringLiteral("%1 — %2").arg(title, formatSize(size));

    static const QMimeDatabase db;
    const QMimeType mime = db.mimeTypeForFile(localFile);
    QImageReader imageReader(localFile);
    if (mime.name().startsWith(QStringLiteral("image/")) && imageReader.canRead()) {
        const QImage image = imageReader.read();
        if (!image.isNull()) {
            m_mode = Mode::Image;
            auto* scroll = new QScrollArea(this);
            scroll->setAlignment(Qt::AlignCenter);
            auto* label = new QLabel(scroll);
            QPixmap pixmap = QPixmap::fromImage(image);
            const QSize avail(860, 600);
            if (pixmap.width() > avail.width() || pixmap.height() > avail.height())
                pixmap = pixmap.scaled(avail, Qt::KeepAspectRatio, Qt::SmoothTransformation);
            label->setPixmap(pixmap);
            scroll->setWidget(label);
            layout->addWidget(scroll, 1);
            infoText +=
                QStringLiteral(" — %1×%2 %3").arg(image.width()).arg(image.height()).arg(mime.comment());
        }
    }

    if (m_mode != Mode::Image) {
        QByteArray content;
        if (file.open(QIODevice::ReadOnly))
            content = file.read(kTextLimit);
        m_text = new QPlainTextEdit(this);
        m_text->setReadOnly(true);
        m_text->setFont(QFontDatabase::systemFont(QFontDatabase::FixedFont));
        m_text->setLineWrapMode(QPlainTextEdit::NoWrap);
        if (looksLikeText(content.left(qsizetype{64} * 1024))) {
            m_mode = Mode::Text;
            m_text->setPlainText(QString::fromUtf8(content));
            if (size > kTextLimit)
                infoText += tr(" — showing the first %1").arg(formatSize(kTextLimit));
        } else {
            m_mode = Mode::Hex;
            m_text->setPlainText(hexDump(content.left(kHexLimit)));
            infoText += tr(" — binary (%1), first %2 shown as hex")
                            .arg(mime.comment(), formatSize(qMin(size, kHexLimit)));
        }
        layout->addWidget(m_text, 1);
    }
    info->setText(infoText);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    QPushButton* external =
        buttons->addButton(tr("Open in Default Application"), QDialogButtonBox::ActionRole);
    connect(external, &QPushButton::clicked, this,
            [this] { QDesktopServices::openUrl(QUrl::fromLocalFile(m_file)); });
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
}

QString ViewerDialog::text() const
{
    return m_text ? m_text->toPlainText() : QString();
}

void ViewerDialog::keyPressEvent(QKeyEvent* event)
{
    if (event->key() == Qt::Key_F3 || event->key() == Qt::Key_F10) {
        reject();
        return;
    }
    QDialog::keyPressEvent(event);
}

} // namespace s3fm
