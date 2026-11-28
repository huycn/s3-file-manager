#include "ui/panel/PanelWidget.h"

#include "core/Async.h"
#include "core/Format.h"
#include "core/OperationContext.h"
#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "models/EntrySortProxy.h"
#include "ui/panel/AddressBar.h"
#include "ui/panel/PanelView.h"

#include <QDir>
#include <QFrame>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QKeyEvent>
#include <QLabel>
#include <QLineEdit>
#include <QLocale>
#include <QMenu>
#include <QMutex>
#include <QPushButton>
#include <QSettings>
#include <QTimer>
#include <QToolButton>
#include <QVBoxLayout>

namespace s3fm {

namespace {

// Escape / Down in the quick-filter field.
class FilterKeyFilter : public QObject
{
public:
    FilterKeyFilter(QLineEdit* edit, PanelView* view) : QObject(edit), m_edit(edit), m_view(view) {}

protected:
    bool eventFilter(QObject* watched, QEvent* event) override
    {
        if (event->type() == QEvent::KeyPress) {
            const int key = static_cast<QKeyEvent*>(event)->key();
            if (key == Qt::Key_Escape) {
                m_edit->clear();
                m_edit->hide();
                m_view->setFocus();
                return true;
            }
            if (key == Qt::Key_Down || key == Qt::Key_Return || key == Qt::Key_Enter) {
                m_view->setFocus();
                return true;
            }
        }
        return QObject::eventFilter(watched, event);
    }

private:
    QLineEdit* m_edit;
    PanelView* m_view;
};

} // namespace

// A running search: the worker appends matches to `pending`, the GUI drains them.
struct PanelWidget::SearchRun
{
    OperationContext ctx;
    std::atomic<qint64> scanned{0};
    QMutex mutex;
    EntryList pending;
};

PanelWidget::PanelWidget(ProviderRegistry* registry, QWidget* parent)
    : QWidget(parent), m_registry(registry), m_model(new EntryListModel(registry, this)),
      m_proxy(new EntrySortProxy(this))
{
    m_proxy->setSourceModel(m_model);

    auto* layout = new QVBoxLayout(this);
    layout->setContentsMargins(0, 0, 0, 0);
    layout->setSpacing(2);

    // Top: places button + address bar
    m_header = new QWidget(this);
    m_header->setObjectName(QStringLiteral("panelHeader"));
    auto* top = new QHBoxLayout(m_header);
    top->setContentsMargins(0, 0, 0, 0);
    top->setSpacing(2);
    m_placesButton = new QToolButton(m_header);
    m_placesButton->setIcon(
        QIcon::fromTheme(QStringLiteral("drive-harddisk"), style()->standardIcon(QStyle::SP_DriveHDIcon)));
    m_placesButton->setToolTip(tr("Places and connections"));
    m_placesButton->setPopupMode(QToolButton::InstantPopup);
    m_placesButton->setFocusPolicy(Qt::NoFocus);
    auto* placesMenu = new QMenu(m_placesButton);
    m_placesButton->setMenu(placesMenu);
    connect(placesMenu, &QMenu::aboutToShow, this, [this, placesMenu] {
        placesMenu->clear();
        if (m_placesBuilder) {
            m_placesBuilder(placesMenu, this);
        } else {
            placesMenu->addAction(tr("Home"), this, &PanelWidget::goHome);
            placesMenu->addAction(tr("Root"), this, [this] { setLocation(Location::localRoot()); });
        }
    });
    top->addWidget(m_placesButton);
    m_address = new AddressBar(m_header);
    top->addWidget(m_address, 1);
    layout->addWidget(m_header);

    // Error banner
    m_errorFrame = new QFrame(this);
    m_errorFrame->setAutoFillBackground(true);
    QPalette pal = m_errorFrame->palette();
    pal.setColor(QPalette::Window, QColor(0xfd, 0xe2, 0xe1));
    pal.setColor(QPalette::WindowText, QColor(0x6b, 0x0d, 0x0d));
    m_errorFrame->setPalette(pal);
    auto* errLayout = new QHBoxLayout(m_errorFrame);
    errLayout->setContentsMargins(6, 3, 3, 3);
    m_errorLabel = new QLabel(m_errorFrame);
    m_errorLabel->setWordWrap(true);
    m_errorLabel->setTextInteractionFlags(Qt::TextSelectableByMouse);
    errLayout->addWidget(m_errorLabel, 1);
    auto* retry = new QPushButton(tr("Retry"), m_errorFrame);
    retry->setFocusPolicy(Qt::NoFocus);
    connect(retry, &QPushButton::clicked, this, [this] {
        hideError();
        navigate(m_lastFailed.isValid() ? m_lastFailed : location(), {}, true);
    });
    errLayout->addWidget(retry);
    auto* close = new QToolButton(m_errorFrame);
    close->setText(QStringLiteral("✕"));
    close->setAutoRaise(true);
    close->setFocusPolicy(Qt::NoFocus);
    connect(close, &QToolButton::clicked, this, &PanelWidget::hideError);
    errLayout->addWidget(close);
    m_errorFrame->hide();
    layout->addWidget(m_errorFrame);

    // Search results bar
    m_searchBar = new QFrame(this);
    m_searchBar->setObjectName(QStringLiteral("searchBar"));
    m_searchBar->setFrameShape(QFrame::StyledPanel);
    auto* searchLayout = new QHBoxLayout(m_searchBar);
    searchLayout->setContentsMargins(6, 2, 2, 2);
    m_searchLabel = new QLabel(m_searchBar);
    m_searchLabel->setTextFormat(Qt::PlainText);
    m_searchLabel->setSizePolicy(QSizePolicy::Ignored, QSizePolicy::Preferred);
    searchLayout->addWidget(m_searchLabel, 1);
    m_stopButton = new QPushButton(tr("Stop"), m_searchBar);
    m_stopButton->setFocusPolicy(Qt::NoFocus);
    m_stopButton->setToolTip(tr("Stop searching (Esc)"));
    connect(m_stopButton, &QPushButton::clicked, this, &PanelWidget::stopSearch);
    searchLayout->addWidget(m_stopButton);
    auto* newSearch = new QPushButton(tr("New Search…"), m_searchBar);
    newSearch->setFocusPolicy(Qt::NoFocus);
    connect(newSearch, &QPushButton::clicked, this, &PanelWidget::searchRequested);
    searchLayout->addWidget(newSearch);
    auto* closeSearch = new QToolButton(m_searchBar);
    closeSearch->setText(QStringLiteral("✕"));
    closeSearch->setAutoRaise(true);
    closeSearch->setFocusPolicy(Qt::NoFocus);
    closeSearch->setToolTip(tr("Close the search results"));
    connect(closeSearch, &QToolButton::clicked, this, &PanelWidget::goUp);
    searchLayout->addWidget(closeSearch);
    m_searchBar->hide();
    layout->addWidget(m_searchBar);
    m_searchTimer = new QTimer(this);
    m_searchTimer->setInterval(200);
    connect(m_searchTimer, &QTimer::timeout, this, &PanelWidget::drainSearch);

    // File list
    m_view = new PanelView(this);
    m_view->setModel(m_proxy);
    m_view->sortByColumn(EntryListModel::NameColumn, Qt::AscendingOrder);
    QHeaderView* header = m_view->header();
    header->setSectionResizeMode(QHeaderView::Interactive);
    header->setSectionResizeMode(EntryListModel::NameColumn, QHeaderView::Stretch);
    header->resizeSection(EntryListModel::SizeColumn, 90);
    header->resizeSection(EntryListModel::ModifiedColumn, 130);
    header->resizeSection(EntryListModel::TypeColumn, 150);
    m_view->setColumnHidden(EntryListModel::StorageClassColumn, true);
    m_view->setColumnHidden(EntryListModel::EtagColumn, true);
    m_view->setColumnHidden(EntryListModel::VersionColumn, true);
    header->setContextMenuPolicy(Qt::CustomContextMenu);
    connect(header, &QHeaderView::customContextMenuRequested, this, [this, header](const QPoint& pos) {
        QMenu menu;
        for (int c = EntryListModel::SizeColumn; c < EntryListModel::ColumnCount; ++c) {
            QAction* a = menu.addAction(m_model->headerData(c, Qt::Horizontal).toString());
            a->setCheckable(true);
            a->setChecked(!m_view->isColumnHidden(c));
            connect(a, &QAction::toggled, this, [this, c](bool on) { m_view->setColumnHidden(c, !on); });
        }
        menu.exec(header->mapToGlobal(pos));
    });
    layout->addWidget(m_view, 1);

    // Quick filter
    m_filterEdit = new QLineEdit(this);
    m_filterEdit->setPlaceholderText(tr("Filter (substring, or wildcards * ?) — Esc to close"));
    m_filterEdit->setClearButtonEnabled(true);
    m_filterEdit->installEventFilter(new FilterKeyFilter(m_filterEdit, m_view));
    m_filterEdit->hide();
    connect(m_filterEdit, &QLineEdit::textChanged, m_proxy, &EntrySortProxy::setQuickFilter);
    layout->addWidget(m_filterEdit);

    // Status line
    m_status = new QLabel(this);
    m_status->setObjectName(QStringLiteral("status"));
    m_status->setTextInteractionFlags(Qt::TextSelectableByMouse);
    m_status->setContentsMargins(4, 0, 4, 0);
    layout->addWidget(m_status);

    // Wiring
    connect(m_model, &EntryListModel::locationChanged, this, &PanelWidget::onModelLocationChanged);
    connect(m_model, &EntryListModel::loadFailed, this, &PanelWidget::onLoadFailed);
    connect(m_model, &EntryListModel::loadFinished, this, &PanelWidget::onLoadFinished);
    connect(m_model, &EntryListModel::loadingChanged, this, &PanelWidget::updateStatus);
    connect(m_model, &QAbstractItemModel::rowsInserted, this, &PanelWidget::updateStatus);
    connect(m_model, &QAbstractItemModel::rowsRemoved, this, &PanelWidget::updateStatus);
    connect(m_view->selectionModel(), &QItemSelectionModel::selectionChanged, this,
            [this](const QItemSelection& selected) {
                // ".." can never be part of the selection.
                const auto indexes = selected.indexes();
                for (const QModelIndex& idx : indexes) {
                    if (idx.column() == 0 && idx.data(EntryListModel::IsParentRole).toBool()) {
                        m_view->selectionModel()->select(idx, QItemSelectionModel::Deselect |
                                                                  QItemSelectionModel::Rows);
                        return;
                    }
                }
                updateStatus();
                Q_EMIT selectionChanged();
            });
    m_view->setContextMenuPolicy(Qt::CustomContextMenu);
    connect(m_view, &QWidget::customContextMenuRequested, this, [this](const QPoint& pos) {
        Q_EMIT activated(this);
        // Right-click on an unselected row makes it current, like most file managers.
        const QModelIndex idx = m_view->indexAt(pos);
        if (idx.isValid() && !m_view->selectionModel()->isRowSelected(idx.row(), idx.parent()))
            m_view->selectionModel()->setCurrentIndex(idx, QItemSelectionModel::NoUpdate);
        Q_EMIT contextMenuRequested(m_view->viewport()->mapToGlobal(pos));
    });
    connect(m_view, &PanelView::openRequested, this, &PanelWidget::openIndex);
    connect(m_view, &PanelView::upRequested, this, &PanelWidget::goUp);
    connect(m_view, &PanelView::switchPanelRequested, this, &PanelWidget::switchPanelRequested);
    connect(m_view, &PanelView::focusReceived, this, [this] { Q_EMIT activated(this); });
    connect(m_address, &AddressBar::navigateRequested, this,
            [this](const Location& l) { navigate(l, {}, true); });
    connect(m_address, &AddressBar::textEntered, this, &PanelWidget::resolveTypedAddress);
    connect(m_address, &AddressBar::editingFinished, this, [this] {
        if (m_active)
            m_view->setFocus();
    });

    setFocusProxy(m_view);
    updateStatus();
}

PanelWidget::~PanelWidget()
{
    if (m_search)
        m_search->ctx.cancel();
}

Location PanelWidget::location() const
{
    return m_model->location();
}

void PanelWidget::setLocation(const Location& location, const Location& select)
{
    navigate(location, select, true);
}

void PanelWidget::navigate(const Location& location, const Location& select, bool recordHistory)
{
    if (!location.isValid())
        return;
    leaveResults();
    m_recordHistory = recordHistory;
    m_pendingSelect = select;
    m_model->setLocation(location);
}

void PanelWidget::refresh()
{
    if (isSearchResults())
        return; // rerunSearch() searches again
    hideError();
    m_model->refresh();
}

void PanelWidget::goUp()
{
    if (isSearchResults()) {
        navigate(location(), {}, true); // the folder that was searched
        return;
    }
    const Location current = location();
    const Location parent = current.parent();
    if (parent.isValid())
        navigate(parent, current, true);
}

void PanelWidget::goBack()
{
    if (m_back.isEmpty())
        return;
    const HistoryItem target = m_back.takeLast();
    m_forward.push_back(m_current);
    goTo(target);
}

void PanelWidget::goForward()
{
    if (m_forward.isEmpty())
        return;
    const HistoryItem target = m_forward.takeLast();
    m_back.push_back(m_current);
    goTo(target);
}

void PanelWidget::goHome()
{
    navigate(Location::local(QDir::homePath()), {}, true);
}

void PanelWidget::revealEntry(const Entry& entry)
{
    const Location parent = entry.location.parent();
    if (parent.isValid())
        navigate(parent, entry.location, true);
}

void PanelWidget::goTo(const HistoryItem& item)
{
    if (item.searchId != 0)
        showSearch(item.location, item.criteria, item.searchId, false);
    else
        navigate(item.location, {}, false);
}

// ---------------------------------------------------------------------------
// Search results
// ---------------------------------------------------------------------------

bool PanelWidget::isSearchResults() const
{
    return m_model->isResults();
}

void PanelWidget::startSearch(const Location& root, const SearchCriteria& criteria)
{
    showSearch(root, criteria, ++m_lastSearchId, true);
}

void PanelWidget::rerunSearch()
{
    if (isSearchResults())
        showSearch(location(), m_searchCriteria, ++m_lastSearchId, false);
}

void PanelWidget::showSearch(const Location& root, const SearchCriteria& criteria, quint64 id,
                             bool recordHistory)
{
    auto provider = m_registry ? m_registry->providerFor(root) : nullptr;
    if (!provider) {
        showError(tr("Cannot search %1").arg(root.displayString()));
        return;
    }
    leaveResults();
    const HistoryItem previous = m_current;
    m_current = HistoryItem{root, id, criteria};
    if (recordHistory && previous.location.isValid() && !(previous == m_current)) {
        m_back.push_back(previous);
        if (m_back.size() > 100)
            m_back.removeFirst();
        m_forward.clear();
    }
    m_searchCriteria = criteria;
    m_searchId = id;
    m_searchStats = {};
    m_searchStopped = false;
    m_pendingSelect = Location();
    hideError();
    if (!m_filterEdit->text().isEmpty()) {
        m_filterEdit->clear();
        m_filterEdit->hide();
    }
    m_model->showResults(root);
    m_address->setLocation(root);
    m_view->setColumnHidden(EntryListModel::StorageClassColumn, !root.isS3());
    m_view->setColumnHidden(EntryListModel::VersionColumn, true);
    m_view->selectionModel()->clearSelection();
    m_view->setCurrentIndex(m_proxy->index(0, 0));

    if (m_resultsCache.searchId == id) {
        m_model->appendResults(m_resultsCache.entries);
        m_searchStats = m_resultsCache.stats;
        m_searchStopped = !m_resultsCache.complete;
    } else {
        auto run = std::make_shared<SearchRun>();
        m_search = run;
        m_searchTimer->start();
        runIo([provider, root, criteria, run] {
            return runSearch(
                *provider, root, criteria,
                [&run](const Entry& e) {
                    QMutexLocker lock(&run->mutex);
                    run->pending.push_back(e);
                },
                run->ctx, &run->scanned);
        }).then(this, [this, run](const Result<SearchStats>& result) { finishSearch(run, result); });
    }
    updateSearchBar();
    updateStatus();
    Q_EMIT locationChanged(root);
}

void PanelWidget::drainSearch()
{
    if (!m_search)
        return;
    EntryList batch;
    {
        QMutexLocker lock(&m_search->mutex);
        batch.swap(m_search->pending);
    }
    m_searchStats.scanned = m_search->scanned.load(std::memory_order_relaxed);
    if (!batch.isEmpty()) {
        m_searchStats.found += batch.size();
        m_model->appendResults(batch);
        if (!m_view->currentIndex().isValid() && m_proxy->rowCount() > 0)
            m_view->setCurrentIndex(m_proxy->index(0, 0));
    }
    updateStatus();
}

void PanelWidget::finishSearch(const std::shared_ptr<SearchRun>& run, const Result<SearchStats>& result)
{
    if (run != m_search)
        return; // superseded or left
    drainSearch();
    m_search.reset();
    m_searchTimer->stop();
    if (result) {
        m_searchStats = result.value();
    } else {
        m_searchStopped = true;
        if (!result.error().isCancelled())
            showError(tr("Search failed: %1").arg(result.error().toString()));
    }
    updateSearchBar();
    updateStatus();
}

void PanelWidget::stopSearch()
{
    if (m_search)
        m_search->ctx.cancel(); // finishSearch() follows
}

void PanelWidget::leaveResults()
{
    if (m_search) {
        drainSearch();
        m_search->ctx.cancel();
        m_search.reset();
        m_searchTimer->stop();
        m_searchStopped = true;
    }
    if (m_model->isResults())
        m_resultsCache = ResultsCache{m_searchId, m_model->entries(), m_searchStats, !m_searchStopped};
    updateSearchBar();
}

void PanelWidget::removeResults(const std::function<bool(const Entry&)>& remove)
{
    m_model->removeResults(remove);
    m_resultsCache.entries.removeIf(remove);
    updateStatus();
}

void PanelWidget::updateSearchBar()
{
    const bool results = isSearchResults();
    m_searchBar->setVisible(results);
    if (!results)
        return;
    m_searchLabel->setText(
        tr("Search results: %1 in %2").arg(m_searchCriteria.summary(), location().displayString()));
    m_searchLabel->setToolTip(m_searchLabel->text());
    m_stopButton->setVisible(m_search != nullptr);
}

void PanelWidget::keyPressEvent(QKeyEvent* event)
{
    if (event->key() == Qt::Key_Escape && m_search) {
        stopSearch();
        event->accept();
        return;
    }
    QWidget::keyPressEvent(event);
}

void PanelWidget::resolveTypedAddress(const QString& text)
{
    Location absolute = m_addressResolver ? m_addressResolver(text, location()) : Location::fromString(text);
    if (!absolute.isValid() && m_addressResolver)
        absolute = Location::fromString(text);
    if (absolute.isValid()) {
        // An S3 address typed without a trailing '/' usually means a folder; if it is
        // an object the listing fails and the error banner explains.
        if (absolute.isS3() && !absolute.isDirectoryLike())
            absolute = absolute.asDirectory();
        navigate(absolute, {}, true);
        return;
    }
    if (text.contains(QStringLiteral("://"))) {
        showError(tr("Unknown address: %1").arg(text));
        return;
    }
    // Relative input: resolve against the current directory.
    QString rel = QDir::fromNativeSeparators(text.trimmed());
    Location target = location();
    const auto parts = rel.split(u'/', Qt::SkipEmptyParts);
    for (const QString& part : parts) {
        if (part == u".")
            continue;
        target = part == u".." ? target.parent() : target.child(part, true);
        if (!target.isValid())
            break;
    }
    if (target.isValid())
        navigate(target, {}, true);
    else
        showError(tr("Invalid location: %1").arg(text));
}

void PanelWidget::onModelLocationChanged(const Location& location)
{
    const HistoryItem previous = m_current;
    m_current = HistoryItem{location, 0, {}};
    if (m_recordHistory && previous.location.isValid() && !(previous == m_current)) {
        m_back.push_back(previous);
        if (m_back.size() > 100)
            m_back.removeFirst();
        m_forward.clear();
    }
    m_recordHistory = true;
    hideError();
    updateSearchBar();
    m_address->setLocation(location);
    if (!m_filterEdit->text().isEmpty()) {
        m_filterEdit->clear();
        m_filterEdit->hide();
    }
    const bool s3Objects = location.isS3() && !location.bucket().isEmpty();
    m_view->setColumnHidden(EntryListModel::StorageClassColumn, !s3Objects);
    m_view->setColumnHidden(EntryListModel::VersionColumn, !m_model->showsVersions());
    m_view->selectionModel()->clearSelection();
    applyPendingSelection();
    if (!m_view->currentIndex().isValid() && m_proxy->rowCount() > 0)
        m_view->setCurrentIndex(m_proxy->index(0, 0));
    updateStatus();
    Q_EMIT locationChanged(location);
}

void PanelWidget::selectLocationWhenLoaded(const Location& location)
{
    m_pendingSelect = location;
    applyPendingSelection();
}

void PanelWidget::applyPendingSelection()
{
    if (!m_pendingSelect.isValid())
        return;
    const Location wanted = m_pendingSelect;
    const Location wantedDir = wanted.asDirectory();
    for (int row = 0; row < m_model->rowCount(); ++row) {
        if (m_model->isParentRow(row))
            continue;
        const Location& l = m_model->entryAt(row).location;
        if (l == wanted || l == wantedDir || l.asDirectory() == wantedDir) {
            const QModelIndex idx = m_proxy->mapFromSource(m_model->index(row, 0));
            if (idx.isValid()) {
                m_view->selectionModel()->setCurrentIndex(idx, QItemSelectionModel::NoUpdate);
                m_view->scrollTo(idx);
            }
            m_pendingSelect = Location();
            return;
        }
    }
}

void PanelWidget::onLoadFinished()
{
    applyPendingSelection();
    updateStatus();
}

void PanelWidget::onLoadFailed(const Location& failed, const Error& error)
{
    m_lastFailed = failed;
    if (!m_model->location().isValid()) {
        // Nothing shown yet (e.g. restoring a location that no longer exists).
        showError(tr("Cannot open %1: %2").arg(failed.displayString(), error.toString()));
        if (!(failed.isLocal() && failed.localPath() == QDir::homePath()))
            goHome();
        return;
    }
    if (failed == m_model->location() && error.code == ErrorCode::NotFound) {
        // Current directory disappeared: go to the nearest parent.
        const Location parent = failed.parent();
        if (parent.isValid()) {
            navigate(parent, {}, false);
            return;
        }
    }
    showError(tr("Cannot open %1: %2").arg(failed.displayString(), error.toString()));
    updateStatus();
}

void PanelWidget::openIndex(const QModelIndex& proxyIndex)
{
    if (!proxyIndex.isValid())
        return;
    const QModelIndex src = m_proxy->mapToSource(proxyIndex);
    if (m_model->isParentRow(src.row())) {
        goUp();
        return;
    }
    const Entry& e = m_model->entryAt(src.row());
    if (e.isDirectory())
        navigate(e.location, {}, true);
    else
        Q_EMIT openFileRequested(e);
}

EntryList PanelWidget::selectedEntries() const
{
    EntryList out;
    QModelIndexList rows = m_view->selectionModel()->selectedRows(0);
    std::sort(rows.begin(), rows.end(),
              [](const QModelIndex& a, const QModelIndex& b) { return a.row() < b.row(); });
    for (const QModelIndex& idx : std::as_const(rows)) {
        const QModelIndex src = m_proxy->mapToSource(idx);
        if (!m_model->isParentRow(src.row()))
            out.push_back(m_model->entryAt(src.row()));
    }
    return out;
}

std::optional<Entry> PanelWidget::currentEntry() const
{
    const QModelIndex idx = m_view->currentIndex();
    if (!idx.isValid())
        return std::nullopt;
    const QModelIndex src = m_proxy->mapToSource(idx);
    if (m_model->isParentRow(src.row()))
        return std::nullopt;
    return m_model->entryAt(src.row());
}

EntryList PanelWidget::targetEntries() const
{
    EntryList selected = selectedEntries();
    if (!selected.isEmpty())
        return selected;
    if (auto current = currentEntry())
        return {*current};
    return {};
}

void PanelWidget::selectAll()
{
    m_view->selectAll();
}

void PanelWidget::deselectAll()
{
    m_view->selectionModel()->clearSelection();
}

void PanelWidget::invertSelection()
{
    QItemSelection toggle;
    for (int row = 0; row < m_proxy->rowCount(); ++row) {
        const QModelIndex idx = m_proxy->index(row, 0);
        if (!idx.data(EntryListModel::IsParentRole).toBool())
            toggle.select(idx, idx);
    }
    m_view->selectionModel()->select(toggle, QItemSelectionModel::Toggle | QItemSelectionModel::Rows);
}

bool PanelWidget::showHidden() const
{
    return m_proxy->showHidden();
}

void PanelWidget::setShowHidden(bool show)
{
    m_proxy->setShowHidden(show);
    updateStatus();
}

void PanelWidget::showQuickFilter()
{
    m_filterEdit->show();
    m_filterEdit->setFocus();
    m_filterEdit->selectAll();
}

void PanelWidget::editAddress()
{
    m_address->edit();
}

void PanelWidget::showPlacesMenu()
{
    m_placesButton->showMenu();
}

void PanelWidget::setActive(bool active)
{
    m_active = active;
}

QList<QWidget*> PanelWidget::chromeWidgets() const
{
    return {m_header, m_status};
}

void PanelWidget::focusView()
{
    m_view->setFocus();
}

void PanelWidget::showError(const QString& text)
{
    m_errorLabel->setText(text);
    m_errorFrame->show();
}

void PanelWidget::hideError()
{
    m_errorFrame->hide();
}

void PanelWidget::setListOptions(const ListOptions& options)
{
    m_model->setListOptions(options);
    m_view->setColumnHidden(EntryListModel::VersionColumn, !m_model->showsVersions());
    updateStatus();
}

const ListOptions& PanelWidget::listOptions() const
{
    return m_model->listOptions();
}

bool PanelWidget::showsVersions() const
{
    return m_model->showsVersions();
}

void PanelWidget::updateStatus()
{
    int dirs = 0;
    int files = 0;
    qint64 bytes = 0;
    for (const Entry& e : m_model->entries()) {
        if (e.hidden && !m_proxy->showHidden())
            continue;
        if (e.isDirectory()) {
            ++dirs;
        } else {
            ++files;
            bytes += qMax<qint64>(0, e.size);
        }
    }
    QString text;
    const EntryList selected = selectedEntries();
    if (!selected.isEmpty()) {
        qint64 selBytes = 0;
        for (const Entry& e : selected)
            selBytes += e.isDirectory() ? 0 : qMax<qint64>(0, e.size);
        text = tr("%1 of %2 selected, %3").arg(selected.size()).arg(dirs + files).arg(formatSize(selBytes));
    } else {
        // One template, so translations choose the separators and the order.
        text =
            tr("%1, %2, %3", "panel status: folders, files, total size")
                .arg(tr("%n folder(s)", nullptr, dirs), tr("%n file(s)", nullptr, files), formatSize(bytes));
    }
    if (m_model->showsVersions()) {
        const ListOptions& o = m_model->listOptions();
        text =
            (o.asOf.isValid() ? tr("[As of %1] ").arg(formatDateTime(o.asOf)) : tr("[All versions] ")) + text;
    }
    if (isSearchResults()) {
        const QString scanned = QLocale().toString(m_searchStats.scanned);
        if (m_search)
            text += tr(" — searching… (%1 scanned)").arg(scanned);
        else if (m_searchStats.limitReached)
            text += tr(" — search stopped at %n result(s)", nullptr, int(m_searchStats.found));
        else if (m_searchStopped)
            text += tr(" — search stopped");
        else
            text += tr(" — %1 scanned").arg(scanned);
    }
    if (m_model->isLoading())
        text += tr(" — loading…");
    else if (m_model->canFetchMore({}))
        text += tr(" — more items available (scroll down)");
    m_status->setText(text);
}

void PanelWidget::saveState(QSettings& settings) const
{
    settings.setValue(QStringLiteral("location"), location().toString());
    settings.setValue(QStringLiteral("header"), m_view->header()->saveState());
}

void PanelWidget::restoreState(QSettings& settings)
{
    const QByteArray header = settings.value(QStringLiteral("header")).toByteArray();
    if (!header.isEmpty())
        m_view->header()->restoreState(header);
    const Location saved = Location::fromString(settings.value(QStringLiteral("location")).toString());
    if (saved.isValid())
        navigate(saved, {}, false);
    else
        goHome();
}

} // namespace s3fm
