#pragma once

#include "core/Location.h"

#include <QWidget>

class QHBoxLayout;
class QLineEdit;
class QStackedWidget;
class QToolButton;

namespace s3fm {

// Breadcrumb trail for the current location; turns into a text field when the
// empty area is clicked or edit() is called. Leading crumbs collapse into a "«"
// menu when space runs out.
class AddressBar : public QWidget
{
    Q_OBJECT

public:
    explicit AddressBar(QWidget* parent = nullptr);

    void setLocation(const Location& location);
    Location location() const { return m_location; }
    void edit();
    bool isEditing() const;
    void setActive(bool active);

Q_SIGNALS:
    void navigateRequested(const s3fm::Location& location);
    // Text typed into the address field; the panel resolves it (absolute, relative,
    // s3:// or https:// URL).
    void textEntered(const QString& text);
    void editingFinished();

protected:
    void resizeEvent(QResizeEvent* event) override;
    bool eventFilter(QObject* watched, QEvent* event) override;

private:
    void rebuildCrumbs();
    void relayoutCrumbs();
    void stopEditing();
    static QString crumbLabel(const Location& location);

    Location m_location;
    QStackedWidget* m_stack;
    QWidget* m_crumbPage;
    QHBoxLayout* m_crumbLayout;
    QToolButton* m_overflow;
    QList<QToolButton*> m_crumbs;
    QList<Location> m_crumbLocations;
    QLineEdit* m_edit;
};

} // namespace s3fm
