#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/Location.h"
#include "core/Provider.h"

#include <QWidget>

#include <functional>
#include <optional>

class QLabel;
class QLineEdit;
class QMenu;
class QPushButton;
class QSettings;
class QToolButton;
class QFrame;

namespace s3fm {

class AddressBar;
class EntryListModel;
class EntrySortProxy;
class PanelView;
class ProviderRegistry;

// One side of the dual-panel window: address bar, file list, status line.
class PanelWidget : public QWidget
{
    Q_OBJECT

public:
    using PlacesMenuBuilder = std::function<void(QMenu* menu, PanelWidget* panel)>;
    // Resolves typed addresses (e.g. URLs to S3 objects); invalid result = not handled.
    using AddressResolver = std::function<Location(const QString& text, const Location& current)>;

    PanelWidget(ProviderRegistry* registry, QWidget* parent = nullptr);
    ~PanelWidget() override;

    Location location() const;
    // Navigates; once loaded, the row whose location equals `select` becomes current.
    void setLocation(const Location& location, const Location& select = {});
    void refresh();
    // Versions / point-in-time view of S3 locations (see ListOptions).
    void setListOptions(const ListOptions& options);
    const ListOptions& listOptions() const;
    bool showsVersions() const;
    void goUp();
    void goBack();
    void goForward();
    void goHome();
    bool canGoBack() const { return !m_back.isEmpty(); }
    bool canGoForward() const { return !m_forward.isEmpty(); }

    // Selected entries, or the current entry when nothing is selected (never "..").
    EntryList targetEntries() const;
    EntryList selectedEntries() const;
    std::optional<Entry> currentEntry() const;
    void selectLocationWhenLoaded(const Location& location);

    void selectAll();
    void deselectAll();
    void invertSelection();

    bool showHidden() const;
    void setShowHidden(bool show);
    void showQuickFilter();
    void editAddress();
    void showPlacesMenu();
    void setPlacesMenuBuilder(PlacesMenuBuilder builder) { m_placesBuilder = std::move(builder); }
    void setAddressResolver(AddressResolver resolver) { m_addressResolver = std::move(resolver); }

    bool isActive() const { return m_active; }
    void setActive(bool active);
    void focusView();
    // Widgets that sit on the window background around the file list (address row, status
    // line), for giving them the window header's palette.
    QList<QWidget*> chromeWidgets() const;

    PanelView* view() const { return m_view; }
    EntryListModel* model() const { return m_model; }
    EntrySortProxy* proxy() const { return m_proxy; }

    void saveState(QSettings& settings) const;
    void restoreState(QSettings& settings);

Q_SIGNALS:
    void activated(s3fm::PanelWidget* panel);
    void switchPanelRequested();
    void openFileRequested(const s3fm::Entry& entry);
    void locationChanged(const s3fm::Location& location);
    void selectionChanged();
    void contextMenuRequested(const QPoint& globalPos);

private:
    void onModelLocationChanged(const Location& location);
    void onLoadFailed(const Location& location, const Error& error);
    void onLoadFinished();
    void openIndex(const QModelIndex& proxyIndex);
    void navigate(const Location& location, const Location& select, bool recordHistory);
    void applyPendingSelection();
    void updateStatus();
    void showError(const QString& text);
    void hideError();
    void resolveTypedAddress(const QString& text);

    ProviderRegistry* m_registry;
    EntryListModel* m_model;
    EntrySortProxy* m_proxy;
    PanelView* m_view;
    AddressBar* m_address;
    QWidget* m_header;
    QToolButton* m_placesButton;
    QLabel* m_status;
    QFrame* m_errorFrame;
    QLabel* m_errorLabel;
    QLineEdit* m_filterEdit;
    PlacesMenuBuilder m_placesBuilder;
    AddressResolver m_addressResolver;

    QList<Location> m_back;
    QList<Location> m_forward;
    bool m_recordHistory = true;
    Location m_pendingSelect;
    Location m_lastFailed;
    bool m_active = false;
};

} // namespace s3fm
