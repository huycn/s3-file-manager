#include "ui/panel/AddressBar.h"

#include <QDir>
#include <QHBoxLayout>
#include <QKeyEvent>
#include <QLineEdit>
#include <QMenu>
#include <QStackedWidget>
#include <QToolButton>

namespace s3fm {

AddressBar::AddressBar(QWidget* parent) : QWidget(parent)
{
    auto* outer = new QHBoxLayout(this);
    outer->setContentsMargins(0, 0, 0, 0);
    m_stack = new QStackedWidget(this);
    outer->addWidget(m_stack);

    m_crumbPage = new QWidget(m_stack);
    m_crumbPage->setAutoFillBackground(true);
    m_crumbPage->setCursor(Qt::IBeamCursor);
    m_crumbPage->installEventFilter(this);
    m_crumbLayout = new QHBoxLayout(m_crumbPage);
    m_crumbLayout->setContentsMargins(2, 0, 2, 0);
    m_crumbLayout->setSpacing(0);
    m_overflow = new QToolButton(m_crumbPage);
    m_overflow->setText(QStringLiteral("«"));
    m_overflow->setAutoRaise(true);
    m_overflow->setPopupMode(QToolButton::InstantPopup);
    m_overflow->setMenu(new QMenu(m_overflow));
    m_overflow->setCursor(Qt::ArrowCursor);
    m_overflow->setFocusPolicy(Qt::NoFocus);
    m_overflow->setStyleSheet(QStringLiteral("QToolButton::menu-indicator { image: none; width: 0; }"));
    m_crumbLayout->addWidget(m_overflow);
    m_crumbLayout->addStretch(1);
    m_stack->addWidget(m_crumbPage);

    m_edit = new QLineEdit(m_stack);
    m_edit->setObjectName(QStringLiteral("addressEdit"));
    m_edit->installEventFilter(this);
    m_edit->setClearButtonEnabled(true);
    m_stack->addWidget(m_edit);

    connect(m_edit, &QLineEdit::returnPressed, this, [this] {
        const QString text = m_edit->text();
        stopEditing();
        if (!text.trimmed().isEmpty())
            Q_EMIT textEntered(text);
    });

    setSizePolicy(QSizePolicy::Ignored, QSizePolicy::Fixed);
    setFixedHeight(m_edit->sizeHint().height());
}

QString AddressBar::crumbLabel(const Location& location)
{
    if (location.isS3Root())
        return QStringLiteral("s3://");
    if (location.isLocal() && location.isRoot())
#ifdef Q_OS_WIN
        return tr("Computer");
#else
        return QStringLiteral("/");
#endif
    QString name = location.name();
    return name.isEmpty() ? QStringLiteral("∅") : name; // empty S3 path segment ("a//b")
}

void AddressBar::setLocation(const Location& location)
{
    m_location = location;
    m_edit->setText(location.displayString());
    rebuildCrumbs();
}

void AddressBar::rebuildCrumbs()
{
    qDeleteAll(m_crumbs);
    m_crumbs.clear();
    m_crumbLocations.clear();
    for (Location l = m_location; l.isValid(); l = l.parent())
        m_crumbLocations.prepend(l);

    for (qsizetype i = 0; i < m_crumbLocations.size(); ++i) {
        auto* button = new QToolButton(m_crumbPage);
        const bool last = i == m_crumbLocations.size() - 1;
        QString label = crumbLabel(m_crumbLocations[i]);
        if (!last && !label.endsWith(u'/'))
            label += QStringLiteral(" ›");
        button->setText(label);
        button->setAutoRaise(true);
        button->setCursor(Qt::ArrowCursor);
        button->setFocusPolicy(Qt::NoFocus);
        button->setToolButtonStyle(Qt::ToolButtonTextOnly);
        if (last) {
            QFont f = button->font();
            f.setBold(true);
            button->setFont(f);
        }
        const Location target = m_crumbLocations[i];
        connect(button, &QToolButton::clicked, this, [this, target] { Q_EMIT navigateRequested(target); });
        m_crumbLayout->insertWidget(int(i) + 1, button); // after the overflow button
        m_crumbs.push_back(button);
    }
    relayoutCrumbs();
}

void AddressBar::relayoutCrumbs()
{
    const int available = m_crumbPage->width() - 24;
    int used = 0;
    qsizetype firstVisible = m_crumbs.size();
    for (qsizetype i = m_crumbs.size() - 1; i >= 0; --i) {
        const int w = m_crumbs[i]->sizeHint().width();
        if (used + w > available && i != m_crumbs.size() - 1)
            break;
        used += w;
        firstVisible = i;
    }
    QMenu* menu = m_overflow->menu();
    menu->clear();
    for (qsizetype i = 0; i < m_crumbs.size(); ++i) {
        const bool visible = i >= firstVisible;
        m_crumbs[i]->setVisible(visible);
        if (!visible) {
            const Location target = m_crumbLocations[i];
            menu->addAction(target.displayString(), this,
                            [this, target] { Q_EMIT navigateRequested(target); });
        }
    }
    m_overflow->setVisible(firstVisible > 0);
}

void AddressBar::edit()
{
    m_edit->setText(m_location.displayString());
    m_stack->setCurrentWidget(m_edit);
    m_edit->setFocus();
    m_edit->selectAll();
}

bool AddressBar::isEditing() const
{
    return m_stack->currentWidget() == m_edit;
}

void AddressBar::stopEditing()
{
    if (!isEditing())
        return;
    m_stack->setCurrentWidget(m_crumbPage);
    Q_EMIT editingFinished();
}

void AddressBar::resizeEvent(QResizeEvent* event)
{
    QWidget::resizeEvent(event);
    relayoutCrumbs();
}

bool AddressBar::eventFilter(QObject* watched, QEvent* event)
{
    if (watched == m_crumbPage && event->type() == QEvent::MouseButtonPress) {
        edit();
        return true;
    }
    if (watched == m_crumbPage && event->type() == QEvent::Resize)
        relayoutCrumbs();
    if (watched == m_edit) {
        if (event->type() == QEvent::KeyPress && static_cast<QKeyEvent*>(event)->key() == Qt::Key_Escape) {
            stopEditing();
            return true;
        }
        if (event->type() == QEvent::FocusOut)
            stopEditing();
    }
    return QWidget::eventFilter(watched, event);
}

} // namespace s3fm
