#pragma once

#include "core/Compare.h"
#include "core/Entry.h"
#include "core/Error.h"
#include "core/Location.h"
#include "core/Provider.h"
#include "core/Search.h"

#include <QWidget>

#include <functional>
#include <memory>
#include <optional>

class QLabel;
class QLineEdit;
class QMenu;
class QPushButton;
class QSettings;
class QToolButton;
class QFrame;
class QTimer;

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
    // Shows the folder containing `entry` with it as the current row.
    void revealEntry(const Entry& entry);
    bool canGoBack() const { return !m_back.isEmpty(); }
    bool canGoForward() const { return !m_forward.isEmpty(); }

    // Selected entries, or the current entry when nothing is selected (never "..").
    EntryList targetEntries() const;
    EntryList selectedEntries() const;
    std::optional<Entry> currentEntry() const;
    void selectLocationWhenLoaded(const Location& location);

    // Recursive search below `root`; the results replace the listing ("virtual panel":
    // location() stays `root`, ".." and Backspace return to it, Back returns to the
    // results). A new search while showing results replaces them.
    void startSearch(const Location& root, const SearchCriteria& criteria);
    // Searches again with the same criteria (refresh of a results view).
    void rerunSearch();
    void stopSearch();
    bool isSearchResults() const;
    bool isSearching() const { return m_search != nullptr; }
    // Criteria of the results shown (or the last search).
    const SearchCriteria& searchCriteria() const { return m_searchCriteria; }
    // Removes results (shown or kept for Back) for which `remove` returns true, e.g.
    // after they were deleted.
    void removeResults(const std::function<bool(const Entry&)>& remove);

    // Panel comparison: the rows shown (quick filter and hidden files respected), keyed by
    // name or, in search results, relative path.
    CompareItems compareItems() const;
    // Shows the marks in the comparison column and selects the rows that are missing or
    // out of date on the other side (CompareMark::isSelectable()). The marks stay until the
    // listing changes or clearCompareMarks().
    void showCompareMarks(QHash<QString, CompareMark> marks, const CompareSummary& summary);
    void clearCompareMarks();
    bool hasCompareMarks() const;

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
    // "New Search…" on the results bar.
    void searchRequested();
    // Comparison marks were dropped (listing changed or cleared).
    void compareMarksCleared();

protected:
    void keyPressEvent(QKeyEvent* event) override;

private:
    struct SearchRun;
    struct HistoryItem
    {
        Location location;
        quint64 searchId = 0; // non-zero: search results below `location`
        SearchCriteria criteria;
        bool operator==(const HistoryItem& o) const
        {
            return location == o.location && searchId == o.searchId;
        }
    };
    struct ResultsCache
    {
        quint64 searchId = 0;
        EntryList entries;
        SearchStats stats;
        bool complete = false;
    };

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
    void goTo(const HistoryItem& item);
    void showSearch(const Location& root, const SearchCriteria& criteria, quint64 id, bool recordHistory);
    void drainSearch();
    void finishSearch(const std::shared_ptr<SearchRun>& run, const Result<SearchStats>& result);
    // Stops a running search and keeps the results shown, for Back.
    void leaveResults();
    void updateSearchBar();

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

    QFrame* m_searchBar;
    QLabel* m_searchLabel;
    QPushButton* m_stopButton;
    QTimer* m_searchTimer;
    std::shared_ptr<SearchRun> m_search;
    SearchCriteria m_searchCriteria;
    quint64 m_searchId = 0;
    quint64 m_lastSearchId = 0;
    SearchStats m_searchStats;
    bool m_searchStopped = false;
    ResultsCache m_resultsCache;

    HistoryItem m_current;
    QList<HistoryItem> m_back;
    QList<HistoryItem> m_forward;
    bool m_recordHistory = true;
    Location m_pendingSelect;
    Location m_lastFailed;
    bool m_active = false;
    QString m_compareSummary;
};

} // namespace s3fm
