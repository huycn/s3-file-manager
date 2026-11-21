#pragma once

#include <QPlainTextEdit>

namespace s3fm {

// Plain-text editor for JSON documents (bucket policies, lifecycle and CORS rules):
// monospace font, syntax highlighting that follows the light/dark palette, and
// helpers to pretty-print and to jump to an error position.
class JsonEditor : public QPlainTextEdit
{
    Q_OBJECT

public:
    explicit JsonEditor(QWidget* parent = nullptr);

    // Re-indents the document. Returns an error message (and leaves the text alone)
    // if it is not valid JSON.
    QString formatDocument();
    // Moves the cursor to a 1-based line and column and focuses the editor.
    void goTo(int line, int column);

protected:
    void changeEvent(QEvent* event) override;

private:
    class Highlighter;
    Highlighter* m_highlighter;
};

} // namespace s3fm
