#include "ui/widgets/JsonEditor.h"

#include <QEvent>
#include <QFontDatabase>
#include <QJsonDocument>
#include <QJsonParseError>
#include <QRegularExpression>
#include <QSyntaxHighlighter>
#include <QTextBlock>

namespace s3fm {

class JsonEditor::Highlighter : public QSyntaxHighlighter
{
public:
    explicit Highlighter(QTextDocument* doc) : QSyntaxHighlighter(doc) {}

    void setDark(bool dark)
    {
        auto fmt = [](const QColor& color, bool bold = false) {
            QTextCharFormat f;
            f.setForeground(color);
            if (bold)
                f.setFontWeight(QFont::DemiBold);
            return f;
        };
        m_key = fmt(dark ? QColor(0x9c, 0xdc, 0xfe) : QColor(0x04, 0x51, 0xa5), true);
        m_string = fmt(dark ? QColor(0xce, 0x91, 0x78) : QColor(0xa3, 0x15, 0x15));
        m_number = fmt(dark ? QColor(0xb5, 0xce, 0xa8) : QColor(0x09, 0x86, 0x58));
        m_literal = fmt(dark ? QColor(0x56, 0x9c, 0xd6) : QColor(0x00, 0x00, 0xff), true);
        rehighlight();
    }

protected:
    void highlightBlock(const QString& text) override
    {
        // Strings: keys are strings followed by a colon.
        static const QRegularExpression strings(QStringLiteral(R"("(?:[^"\\]|\\.)*"(\s*:)?)"));
        static const QRegularExpression numbers(QStringLiteral(R"(-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b)"));
        static const QRegularExpression literals(QStringLiteral(R"(\b(?:true|false|null)\b)"));
        QList<QPair<int, int>> stringSpans;
        for (auto it = strings.globalMatch(text); it.hasNext();) {
            const auto m = it.next();
            const bool key = !m.captured(1).isEmpty();
            const int length = int(m.capturedLength(0) - (key ? m.capturedLength(1) : 0));
            setFormat(int(m.capturedStart(0)), length, key ? m_key : m_string);
            stringSpans.push_back({int(m.capturedStart(0)), int(m.capturedEnd(0))});
        }
        auto inString = [&stringSpans](qsizetype pos) {
            for (const auto& [start, end] : stringSpans) {
                if (pos >= start && pos < end)
                    return true;
            }
            return false;
        };
        for (auto it = numbers.globalMatch(text); it.hasNext();) {
            const auto m = it.next();
            if (!inString(m.capturedStart()))
                setFormat(int(m.capturedStart()), int(m.capturedLength()), m_number);
        }
        for (auto it = literals.globalMatch(text); it.hasNext();) {
            const auto m = it.next();
            if (!inString(m.capturedStart()))
                setFormat(int(m.capturedStart()), int(m.capturedLength()), m_literal);
        }
    }

private:
    QTextCharFormat m_key;
    QTextCharFormat m_string;
    QTextCharFormat m_number;
    QTextCharFormat m_literal;
};

namespace {

bool isDark(const QPalette& palette)
{
    return palette.color(QPalette::Base).lightness() < 128;
}

} // namespace

JsonEditor::JsonEditor(QWidget* parent) : QPlainTextEdit(parent), m_highlighter(new Highlighter(document()))
{
    setFont(QFontDatabase::systemFont(QFontDatabase::FixedFont));
    setLineWrapMode(QPlainTextEdit::NoWrap);
    setTabStopDistance(fontMetrics().horizontalAdvance(QLatin1Char(' ')) * 4);
    m_highlighter->setDark(isDark(palette()));
}

void JsonEditor::changeEvent(QEvent* event)
{
    QPlainTextEdit::changeEvent(event);
    if (event->type() == QEvent::PaletteChange)
        m_highlighter->setDark(isDark(palette()));
}

QString JsonEditor::formatDocument()
{
    const QString text = toPlainText();
    if (text.trimmed().isEmpty())
        return {};
    QJsonParseError error;
    const QJsonDocument doc = QJsonDocument::fromJson(text.toUtf8(), &error);
    if (error.error != QJsonParseError::NoError)
        return error.errorString();
    // Replace through the cursor so the change can be undone.
    QTextCursor cursor(document());
    cursor.select(QTextCursor::Document);
    cursor.insertText(QString::fromUtf8(doc.toJson(QJsonDocument::Indented)).trimmed());
    return {};
}

void JsonEditor::goTo(int line, int column)
{
    const QTextBlock block = document()->findBlockByNumber(qMax(0, line - 1));
    if (!block.isValid())
        return;
    QTextCursor cursor(block);
    cursor.movePosition(QTextCursor::Right, QTextCursor::MoveAnchor,
                        qBound(0, column - 1, block.length() - 1));
    setTextCursor(cursor);
    centerCursor();
    setFocus();
}

} // namespace s3fm
