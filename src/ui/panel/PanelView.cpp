#include "ui/panel/PanelView.h"

#include <QHeaderView>
#include <QKeyEvent>

namespace s3fm {

PanelView::PanelView(QWidget* parent) : QTreeView(parent)
{
    setRootIsDecorated(false);
    setItemsExpandable(false);
    setUniformRowHeights(true);
    setAllColumnsShowFocus(true);
    setSortingEnabled(true);
    setSelectionMode(QAbstractItemView::ExtendedSelection);
    setSelectionBehavior(QAbstractItemView::SelectRows);
    setEditTriggers(QAbstractItemView::NoEditTriggers);
    setTextElideMode(Qt::ElideMiddle);
    setAlternatingRowColors(false);
    header()->setStretchLastSection(false);
    header()->setSectionsMovable(true);
    connect(this, &QTreeView::doubleClicked, this, &PanelView::openRequested);
}

QItemSelectionModel::SelectionFlags PanelView::selectionCommand(const QModelIndex& index,
                                                                const QEvent* event) const
{
    if (event && event->type() == QEvent::KeyPress) {
        const auto* key = static_cast<const QKeyEvent*>(event);
        if (!(key->modifiers() & Qt::ShiftModifier))
            return QItemSelectionModel::NoUpdate; // cursor moves, selection stays
    }
    return QTreeView::selectionCommand(index, event);
}

void PanelView::toggleCurrentSelection(bool moveDown)
{
    const QModelIndex current = currentIndex();
    if (!current.isValid())
        return;
    selectionModel()->select(current, QItemSelectionModel::Toggle | QItemSelectionModel::Rows);
    if (moveDown) {
        const QModelIndex next = current.siblingAtRow(current.row() + 1);
        if (next.isValid())
            selectionModel()->setCurrentIndex(next, QItemSelectionModel::NoUpdate);
    }
}

void PanelView::keyPressEvent(QKeyEvent* event)
{
    const auto mods = event->modifiers() & ~Qt::KeypadModifier;
    switch (event->key()) {
    case Qt::Key_Return:
    case Qt::Key_Enter:
        if (mods == Qt::NoModifier) {
            Q_EMIT openRequested(currentIndex());
            return;
        }
        break;
    case Qt::Key_Backspace:
        if (mods == Qt::NoModifier) {
            Q_EMIT upRequested();
            return;
        }
        break;
    case Qt::Key_PageUp:
        if (mods == Qt::ControlModifier) {
            Q_EMIT upRequested();
            return;
        }
        break;
    case Qt::Key_PageDown:
        if (mods == Qt::ControlModifier) {
            Q_EMIT openRequested(currentIndex());
            return;
        }
        break;
    case Qt::Key_Insert:
        if (mods == Qt::NoModifier) {
            toggleCurrentSelection(true);
            return;
        }
        break;
    case Qt::Key_Space:
        if (mods == Qt::NoModifier) {
            toggleCurrentSelection(false);
            return;
        }
        break;
    case Qt::Key_Tab:
    case Qt::Key_Backtab:
        Q_EMIT switchPanelRequested();
        return;
    default:
        break;
    }
    QTreeView::keyPressEvent(event);
}

void PanelView::focusInEvent(QFocusEvent* event)
{
    QTreeView::focusInEvent(event);
    Q_EMIT focusReceived();
}

void PanelView::mousePressEvent(QMouseEvent* event)
{
    QTreeView::mousePressEvent(event);
    Q_EMIT focusReceived();
}

bool PanelView::focusNextPrevChild(bool next)
{
    Q_UNUSED(next)
    return false; // Tab is handled in keyPressEvent
}

} // namespace s3fm
