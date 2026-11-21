#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/Location.h"
#include "core/Provider.h"

#include <QAbstractTableModel>
#include <QTimer>

#include <memory>

class QFileSystemWatcher;

namespace s3fm {

class ProviderRegistry;
class OperationContext;

// Directory listing of one Location, loaded asynchronously from its Provider.
//
// * Navigation keeps the current rows until the new location's first page arrives;
//   on failure the model stays where it was and emits loadFailed().
// * Further pages are loaded automatically up to autoLoadLimit() entries, then on
//   demand through canFetchMore()/fetchMore().
// * refresh() reloads and applies the difference (rows keep their identity, so
//   selection and current item survive).
// * Row 0 is a synthetic ".." entry when the location has a parent.
class EntryListModel : public QAbstractTableModel
{
    Q_OBJECT

public:
    enum Column
    {
        NameColumn,
        SizeColumn,
        ModifiedColumn,
        TypeColumn,
        StorageClassColumn,
        EtagColumn,
        VersionColumn, // versions / "as of" views
        ColumnCount
    };
    enum Role
    {
        EntryRole = Qt::UserRole + 1,
        IsParentRole,
        IsDirectoryRole,
        IsHiddenRole,
        SortRole,
    };

    explicit EntryListModel(ProviderRegistry* registry, QObject* parent = nullptr);
    ~EntryListModel() override;

    Location location() const { return m_location; }
    // Location being loaded (equals location() when idle).
    Location pendingLocation() const { return m_pendingLocation; }
    void setLocation(const Location& location);
    void refresh();
    // Versions / "as of" listing (providers with Capability::Versions; ignored elsewhere).
    void setListOptions(const ListOptions& options);
    const ListOptions& listOptions() const { return m_options; }
    // True if the current location is listed with non-default options.
    bool showsVersions() const;
    void cancelLoading();
    bool isLoading() const { return m_loading; }

    bool hasParentRow() const { return m_hasParentRow; }
    bool isParentRow(int row) const { return m_hasParentRow && row == 0; }
    const Entry& entryAt(int row) const;
    int rowForName(const QString& name) const;
    int entryCount() const { return int(m_entries.size()); }
    const EntryList& entries() const { return m_entries; }

    int autoLoadLimit() const { return m_autoLoadLimit; }
    void setAutoLoadLimit(int limit) { m_autoLoadLimit = limit; }
    void setWatchLocalChanges(bool watch);

    int rowCount(const QModelIndex& parent = {}) const override;
    int columnCount(const QModelIndex& parent = {}) const override;
    QVariant data(const QModelIndex& index, int role = Qt::DisplayRole) const override;
    QVariant headerData(int section, Qt::Orientation orientation, int role = Qt::DisplayRole) const override;
    Qt::ItemFlags flags(const QModelIndex& index) const override;
    bool canFetchMore(const QModelIndex& parent) const override;
    void fetchMore(const QModelIndex& parent) override;

Q_SIGNALS:
    void loadingChanged(bool loading);
    void loadFailed(const s3fm::Location& location, const s3fm::Error& error);
    void locationChanged(const s3fm::Location& location);
    // All automatically loaded pages are in (more may be available via fetchMore).
    void loadFinished();

private:
    enum class LoadMode
    {
        Navigate,
        Append,
        Refresh
    };
    void requestPage(const Location& location, const QString& token, LoadMode mode);
    void handlePage(quint64 generation, LoadMode mode, const Location& location, Result<ListPage> result);
    void applyRefresh(EntryList fresh);
    void setLoading(bool loading);
    void updateWatcher();
    int rowOffset() const { return m_hasParentRow ? 1 : 0; }
    QString typeName(const Entry& entry) const;

    ProviderRegistry* m_registry;
    ListOptions m_options;
    Location m_location;
    Location m_pendingLocation;
    EntryList m_entries;
    Entry m_parentEntry;
    bool m_hasParentRow = false;
    QString m_nextToken;
    bool m_loading = false;
    quint64 m_generation = 0;
    std::shared_ptr<OperationContext> m_ctx;
    EntryList m_refreshBuffer;
    int m_autoLoadLimit = 50000;

    bool m_watchLocal = true;
    QFileSystemWatcher* m_watcher = nullptr;
    QTimer m_refreshDebounce;
    mutable QHash<QString, QString> m_typeNames;
};

} // namespace s3fm
