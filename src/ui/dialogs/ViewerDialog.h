#pragma once

#include <QDialog>

class QLabel;
class QPlainTextEdit;
class QScrollArea;

namespace s3fm {

// Internal viewer (F3) for a local file: text (up to a size limit), images, or a
// hex dump of the beginning of binary files.
class ViewerDialog : public QDialog
{
    Q_OBJECT

public:
    enum class Mode
    {
        Text,
        Image,
        Hex
    };

    ViewerDialog(const QString& localFile, const QString& title, QWidget* parent = nullptr);
    Mode mode() const { return m_mode; }
    QString text() const;

    static constexpr qint64 kTextLimit = 8 * 1024 * 1024;
    static constexpr qint64 kHexLimit = 64 * 1024;
    // Heuristic used to choose between text and hex views.
    static bool looksLikeText(const QByteArray& head);

protected:
    void keyPressEvent(QKeyEvent* event) override;

private:
    QString m_file;
    Mode m_mode = Mode::Text;
    QPlainTextEdit* m_text = nullptr;
};

} // namespace s3fm
