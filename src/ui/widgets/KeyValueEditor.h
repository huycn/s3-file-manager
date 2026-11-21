#pragma once

#include <QMap>
#include <QWidget>

class QPushButton;
class QTableWidget;

namespace s3fm {

// Editable two-column table (key, value) with Add/Remove buttons, for tags and
// user metadata.
class KeyValueEditor : public QWidget
{
    Q_OBJECT

public:
    KeyValueEditor(const QString& keyHeader, const QString& valueHeader, QWidget* parent = nullptr);

    void setValues(const QMap<QString, QString>& values);
    // Rows with an empty key are ignored; later duplicates win.
    QMap<QString, QString> values() const;
    void setReadOnly(bool readOnly);
    void setMaxRows(int rows) { m_maxRows = rows; }
    void addRow(const QString& key = {}, const QString& value = {});
    QTableWidget* table() const { return m_table; }

Q_SIGNALS:
    void edited();

private:
    void updateButtons();

    QTableWidget* m_table;
    QPushButton* m_add;
    QPushButton* m_remove;
    int m_maxRows = -1;
    bool m_readOnly = false;
};

} // namespace s3fm
