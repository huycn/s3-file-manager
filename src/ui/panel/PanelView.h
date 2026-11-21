#pragma once

#include <QTreeView>

namespace s3fm {

// File list view with Commander-style keyboard behaviour:
//  * moving the cursor does not change the selection (Shift+arrows still extend it)
//  * Insert toggles the current row and moves down, Space toggles it in place
//  * Enter opens, Backspace goes up, Tab asks to switch panels
// Mouse selection behaves like a normal desktop list.
class PanelView : public QTreeView
{
    Q_OBJECT

public:
    explicit PanelView(QWidget* parent = nullptr);

    void toggleCurrentSelection(bool moveDown);

Q_SIGNALS:
    void openRequested(const QModelIndex& index);
    void upRequested();
    void switchPanelRequested();
    void focusReceived();

protected:
    QItemSelectionModel::SelectionFlags selectionCommand(const QModelIndex& index,
                                                         const QEvent* event = nullptr) const override;
    void keyPressEvent(QKeyEvent* event) override;
    void focusInEvent(QFocusEvent* event) override;
    void mousePressEvent(QMouseEvent* event) override;
    bool focusNextPrevChild(bool next) override;
};

} // namespace s3fm
