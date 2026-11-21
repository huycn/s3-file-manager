#include "ui/widgets/KeyValueEditor.h"

#include <QHBoxLayout>
#include <QHeaderView>
#include <QPushButton>
#include <QTableWidget>
#include <QVBoxLayout>

namespace s3fm {

KeyValueEditor::KeyValueEditor(const QString& keyHeader, const QString& valueHeader, QWidget* parent)
    : QWidget(parent)
{
    auto* layout = new QVBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    m_table = new QTableWidget(0, 2, this);
    m_table->setHorizontalHeaderLabels({keyHeader, valueHeader});
    m_table->horizontalHeader()->setStretchLastSection(true);
    m_table->horizontalHeader()->resizeSection(0, 180);
    m_table->verticalHeader()->hide();
    m_table->setSelectionBehavior(QAbstractItemView::SelectRows);
    layout->addWidget(m_table, 1);
    auto* buttons = new QHBoxLayout;
    m_add = new QPushButton(tr("Add"), this);
    m_add->setObjectName(QStringLiteral("add"));
    m_remove = new QPushButton(tr("Remove"), this);
    m_remove->setObjectName(QStringLiteral("remove"));
    buttons->addWidget(m_add);
    buttons->addWidget(m_remove);
    buttons->addStretch(1);
    layout->addLayout(buttons);
    connect(m_add, &QPushButton::clicked, this, [this] {
        addRow();
        m_table->editItem(m_table->item(m_table->rowCount() - 1, 0));
    });
    connect(m_remove, &QPushButton::clicked, this, [this] {
        const int row = m_table->currentRow();
        if (row >= 0) {
            m_table->removeRow(row);
            Q_EMIT edited();
        }
        updateButtons();
    });
    connect(m_table, &QTableWidget::itemChanged, this, &KeyValueEditor::edited);
    connect(m_table, &QTableWidget::currentCellChanged, this, &KeyValueEditor::updateButtons);
    updateButtons();
}

void KeyValueEditor::addRow(const QString& key, const QString& value)
{
    const int row = m_table->rowCount();
    m_table->insertRow(row);
    m_table->setItem(row, 0, new QTableWidgetItem(key));
    m_table->setItem(row, 1, new QTableWidgetItem(value));
    updateButtons();
}

void KeyValueEditor::setValues(const QMap<QString, QString>& values)
{
    const QSignalBlocker block(m_table);
    m_table->setRowCount(0);
    for (auto it = values.cbegin(); it != values.cend(); ++it)
        addRow(it.key(), it.value());
    updateButtons();
}

QMap<QString, QString> KeyValueEditor::values() const
{
    QMap<QString, QString> out;
    for (int row = 0; row < m_table->rowCount(); ++row) {
        const QString key = m_table->item(row, 0) ? m_table->item(row, 0)->text().trimmed() : QString();
        if (!key.isEmpty())
            out.insert(key, m_table->item(row, 1) ? m_table->item(row, 1)->text() : QString());
    }
    return out;
}

void KeyValueEditor::setReadOnly(bool readOnly)
{
    m_readOnly = readOnly;
    m_table->setEditTriggers(readOnly ? QAbstractItemView::NoEditTriggers
                                      : QAbstractItemView::AllEditTriggers);
    updateButtons();
}

void KeyValueEditor::updateButtons()
{
    m_add->setEnabled(!m_readOnly && (m_maxRows < 0 || m_table->rowCount() < m_maxRows));
    m_remove->setEnabled(!m_readOnly && m_table->currentRow() >= 0);
}

} // namespace s3fm
