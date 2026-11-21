#include "models/EntryListModel.h"

#include "core/Async.h"
#include "core/Format.h"
#include "core/Logging.h"
#include "core/OperationContext.h"
#include "core/ProviderRegistry.h"
#include "models/IconCache.h"

#include <QFileSystemWatcher>
#include <QFont>
#include <QGuiApplication>
#include <QMimeDatabase>
#include <QPalette>

namespace s3fm {

EntryListModel::EntryListModel(ProviderRegistry* registry, QObject* parent)
    : QAbstractTableModel(parent), m_registry(registry)
{
    m_refreshDebounce.setSingleShot(true);
    m_refreshDebounce.setInterval(300);
    connect(&m_refreshDebounce, &QTimer::timeout, this, [this] {
        if (!m_loading && m_location.isValid())
            refresh();
    });
}

EntryListModel::~EntryListModel()
{
    if (m_ctx)
        m_ctx->cancel();
}

void EntryListModel::setLoading(bool loading)
{
    if (m_loading == loading)
        return;
    m_loading = loading;
    Q_EMIT loadingChanged(loading);
}

void EntryListModel::cancelLoading()
{
    if (m_ctx)
        m_ctx->cancel();
    ++m_generation; // ignore whatever is in flight
    m_pendingLocation = m_location;
    m_refreshBuffer.clear();
    setLoading(false);
}

void EntryListModel::setLocation(const Location& location)
{
    if (m_ctx)
        m_ctx->cancel();
    m_pendingLocation = location;
    requestPage(location, {}, LoadMode::Navigate);
}

void EntryListModel::refresh()
{
    if (!m_location.isValid())
        return;
    if (m_ctx)
        m_ctx->cancel();
    m_pendingLocation = m_location;
    m_refreshBuffer.clear();
    if (auto provider = m_registry ? m_registry->providerFor(m_location) : nullptr)
        provider->invalidateCache(m_location);
    requestPage(m_location, {}, LoadMode::Refresh);
}

void EntryListModel::setListOptions(const ListOptions& options)
{
    if (options == m_options)
        return;
    m_options = options;
    if (m_location.isValid())
        refresh();
}

bool EntryListModel::showsVersions() const
{
    if (m_options.isDefault() || !m_registry)
        return false;
    auto provider = m_registry->providerFor(m_location);
    return provider && provider->capabilities(m_location).testFlag(Capability::Versions);
}

void EntryListModel::requestPage(const Location& location, const QString& token, LoadMode mode)
{
    const quint64 generation = ++m_generation;
    auto provider = m_registry ? m_registry->providerFor(location) : nullptr;
    if (!provider) {
        setLoading(false);
        m_pendingLocation = m_location;
        Q_EMIT loadFailed(location, Error::make(ErrorCode::NotFound,
                                                tr("No provider for %1").arg(location.displayString())));
        return;
    }
    setLoading(true);
    auto ctx = std::make_shared<OperationContext>();
    m_ctx = ctx;
    const ListOptions options =
        provider->capabilities(location).testFlag(Capability::Versions) ? m_options : ListOptions();
    runIo([provider, location, token, ctx, options] {
        return options.isDefault() ? provider->list(location, token, *ctx)
                                   : provider->listWithOptions(location, token, options, *ctx);
    }).then(this, [this, generation, mode, location](Result<ListPage> result) {
        handlePage(generation, mode, location, std::move(result));
    });
}

void EntryListModel::handlePage(quint64 generation, LoadMode mode, const Location& location,
                                Result<ListPage> result)
{
    if (generation != m_generation)
        return; // superseded
    if (!result) {
        setLoading(false);
        m_refreshBuffer.clear();
        m_pendingLocation = m_location;
        if (!result.error().isCancelled())
            Q_EMIT loadFailed(location, result.error());
        return;
    }
    ListPage page = std::move(result).value();
    m_nextToken = page.nextPageToken;

    switch (mode) {
    case LoadMode::Navigate: {
        beginResetModel();
        m_location = location;
        m_entries = std::move(page.entries);
        const Location parentLocation = location.parent();
        m_hasParentRow = parentLocation.isValid();
        m_parentEntry = Entry{};
        m_parentEntry.name = QStringLiteral("..");
        m_parentEntry.location = parentLocation;
        m_parentEntry.type = Entry::Type::Directory;
        endResetModel();
        updateWatcher();
        Q_EMIT locationChanged(m_location);
        break;
    }
    case LoadMode::Append: {
        if (!page.entries.isEmpty()) {
            const int first = rowOffset() + int(m_entries.size());
            beginInsertRows({}, first, first + int(page.entries.size()) - 1);
            m_entries.append(std::move(page.entries));
            endInsertRows();
        }
        break;
    }
    case LoadMode::Refresh:
        m_refreshBuffer.append(std::move(page.entries));
        if (!m_nextToken.isEmpty() && m_refreshBuffer.size() < m_autoLoadLimit) {
            requestPage(location, m_nextToken, LoadMode::Refresh);
            return;
        }
        applyRefresh(std::exchange(m_refreshBuffer, {}));
        break;
    }

    if (mode != LoadMode::Refresh && !m_nextToken.isEmpty() && m_entries.size() < m_autoLoadLimit) {
        requestPage(location, m_nextToken, LoadMode::Append);
        return;
    }
    setLoading(false);
    Q_EMIT loadFinished();
}

void EntryListModel::applyRefresh(EntryList fresh)
{
    // Rows are identified by name, plus the version id in versions views.
    auto rowKey = [](const Entry& e) {
        return e.versionId.isEmpty() ? e.name : e.name + u'\n' + e.versionId;
    };
    QHash<QString, qsizetype> freshByName;
    freshByName.reserve(fresh.size());
    for (qsizetype i = 0; i < fresh.size(); ++i)
        freshByName.insert(rowKey(fresh[i]), i);

    // 1. Remove rows that disappeared (from the bottom so indexes stay valid).
    for (qsizetype i = m_entries.size() - 1; i >= 0; --i) {
        if (!freshByName.contains(rowKey(m_entries[i]))) {
            const int row = rowOffset() + int(i);
            beginRemoveRows({}, row, row);
            m_entries.removeAt(i);
            endRemoveRows();
        }
    }
    // 2. Update rows that still exist.
    QSet<QString> existing;
    existing.reserve(m_entries.size());
    for (qsizetype i = 0; i < m_entries.size(); ++i) {
        Entry& current = m_entries[i];
        existing.insert(rowKey(current));
        const Entry& updated = fresh[freshByName.value(rowKey(current))];
        if (updated.size != current.size || updated.modified != current.modified ||
            updated.type != current.type || updated.etag != current.etag ||
            updated.storageClass != current.storageClass || updated.isLatest != current.isLatest) {
            current = updated;
            const int row = rowOffset() + int(i);
            Q_EMIT dataChanged(index(row, 0), index(row, ColumnCount - 1));
        }
    }
    // 3. Append new rows.
    EntryList added;
    for (Entry& e : fresh) {
        if (!existing.contains(rowKey(e)))
            added.push_back(std::move(e));
    }
    if (!added.isEmpty()) {
        const int first = rowOffset() + int(m_entries.size());
        beginInsertRows({}, first, first + int(added.size()) - 1);
        m_entries.append(std::move(added));
        endInsertRows();
    }
}

void EntryListModel::setWatchLocalChanges(bool watch)
{
    m_watchLocal = watch;
    updateWatcher();
}

void EntryListModel::updateWatcher()
{
    if (m_watcher && !m_watcher->directories().isEmpty())
        m_watcher->removePaths(m_watcher->directories());
    if (!m_watchLocal || !m_location.isLocal() || m_location.localPath().isEmpty())
        return;
    if (!m_watcher) {
        m_watcher = new QFileSystemWatcher(this);
        connect(m_watcher, &QFileSystemWatcher::directoryChanged, this,
                [this] { m_refreshDebounce.start(); });
    }
    m_watcher->addPath(m_location.localPath());
}

const Entry& EntryListModel::entryAt(int row) const
{
    if (isParentRow(row))
        return m_parentEntry;
    return m_entries.at(row - rowOffset());
}

int EntryListModel::rowForName(const QString& name) const
{
    if (name == u".." && m_hasParentRow)
        return 0;
    for (qsizetype i = 0; i < m_entries.size(); ++i) {
        if (m_entries[i].name == name)
            return rowOffset() + int(i);
    }
    return -1;
}

int EntryListModel::rowCount(const QModelIndex& parent) const
{
    return parent.isValid() ? 0 : rowOffset() + int(m_entries.size());
}

int EntryListModel::columnCount(const QModelIndex& parent) const
{
    return parent.isValid() ? 0 : ColumnCount;
}

QString EntryListModel::typeName(const Entry& entry) const
{
    switch (entry.type) {
    case Entry::Type::Bucket:
        return tr("Bucket");
    case Entry::Type::Connection:
        return tr("Connection");
    case Entry::Type::Directory:
        return tr("Folder");
    case Entry::Type::File:
        break;
    }
    const qsizetype dot = entry.name.lastIndexOf(u'.');
    const QString suffix = dot > 0 ? entry.name.mid(dot + 1).toLower() : QString();
    if (auto it = m_typeNames.constFind(suffix); it != m_typeNames.cend())
        return it.value();
    static const QMimeDatabase db;
    QString name = suffix.isEmpty() ? tr("File")
                                    : db.mimeTypeForFile(entry.name, QMimeDatabase::MatchExtension).comment();
    if (name.isEmpty() || db.mimeTypeForFile(entry.name, QMimeDatabase::MatchExtension).isDefault())
        name = suffix.isEmpty() ? tr("File") : tr("%1 file").arg(suffix.toUpper());
    m_typeNames.insert(suffix, name);
    return name;
}

QVariant EntryListModel::data(const QModelIndex& index, int role) const
{
    if (!index.isValid() || index.row() >= rowCount())
        return {};
    const int row = index.row();
    const Entry& e = entryAt(row);
    const bool parentRow = isParentRow(row);

    switch (role) {
    case EntryRole:
        return QVariant::fromValue(e);
    case IsParentRole:
        return parentRow;
    case IsDirectoryRole:
        return e.isDirectory();
    case IsHiddenRole:
        return e.hidden;
    case Qt::DisplayRole:
    case Qt::EditRole:
        switch (index.column()) {
        case NameColumn: {
            const QString label = e.metadata.value(QStringLiteral("label"));
            return label.isEmpty() ? e.name : QStringLiteral("%1 (%2)").arg(e.name, label);
        }
        case SizeColumn:
            if (parentRow)
                return tr("<UP>");
            if (e.type == Entry::Type::Directory)
                return tr("<DIR>");
            return formatSize(e.size);
        case ModifiedColumn:
            return formatDateTime(e.modified);
        case TypeColumn:
            return parentRow ? QString() : typeName(e);
        case StorageClassColumn:
            return e.storageClass;
        case EtagColumn:
            return e.etag;
        case VersionColumn:
            if (e.versionId.isEmpty() || parentRow)
                return {};
            if (e.isDeleteMarker)
                return e.isLatest ? tr("Delete marker (deleted)") : tr("Delete marker");
            return e.isLatest ? tr("%1 (current)").arg(e.versionId) : e.versionId;
        }
        return {};
    case SortRole:
        switch (index.column()) {
        case NameColumn:
            return e.name;
        case SizeColumn:
            return e.size;
        case ModifiedColumn:
            return e.modified;
        default:
            return data(index, Qt::DisplayRole);
        }
    case Qt::DecorationRole:
        if (index.column() != NameColumn)
            return {};
        return parentRow ? IconCache::instance().parentIcon() : IconCache::instance().iconFor(e);
    case Qt::TextAlignmentRole:
        if (index.column() == SizeColumn)
            return QVariant::fromValue(Qt::AlignRight | Qt::AlignVCenter);
        return {};
    case Qt::ForegroundRole:
        if (e.hidden || (!e.versionId.isEmpty() && (!e.isLatest || e.isDeleteMarker)))
            return QGuiApplication::palette().brush(QPalette::Disabled, QPalette::Text);
        return {};
    case Qt::FontRole:
        if (e.isDeleteMarker) {
            QFont f;
            f.setItalic(true);
            f.setStrikeOut(true);
            return f;
        }
        return {};
    case Qt::ToolTipRole:
        if (parentRow || index.column() != NameColumn)
            return {};
        if (e.isSymlink)
            return tr("%1\n→ %2").arg(e.location.displayString(), e.symlinkTarget);
        return e.location.displayString();
    default:
        return {};
    }
}

QVariant EntryListModel::headerData(int section, Qt::Orientation orientation, int role) const
{
    if (orientation != Qt::Horizontal)
        return {};
    if (role == Qt::TextAlignmentRole && section == SizeColumn)
        return QVariant::fromValue(Qt::AlignRight | Qt::AlignVCenter);
    if (role != Qt::DisplayRole)
        return {};
    switch (section) {
    case NameColumn:
        return tr("Name");
    case SizeColumn:
        return tr("Size");
    case ModifiedColumn:
        return tr("Modified");
    case TypeColumn:
        return tr("Type");
    case StorageClassColumn:
        return tr("Storage class");
    case EtagColumn:
        return tr("ETag");
    case VersionColumn:
        return tr("Version");
    }
    return {};
}

Qt::ItemFlags EntryListModel::flags(const QModelIndex& index) const
{
    if (!index.isValid())
        return Qt::NoItemFlags;
    return Qt::ItemIsEnabled | Qt::ItemIsSelectable | Qt::ItemNeverHasChildren;
}

bool EntryListModel::canFetchMore(const QModelIndex& parent) const
{
    return !parent.isValid() && !m_loading && !m_nextToken.isEmpty();
}

void EntryListModel::fetchMore(const QModelIndex& parent)
{
    if (canFetchMore(parent))
        requestPage(m_location, m_nextToken, LoadMode::Append);
}

} // namespace s3fm
