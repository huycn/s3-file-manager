#include "models/EntrySortProxy.h"

#include "models/EntryListModel.h"

#include <QDateTime>

// Qt 6.10 replaced invalidateRowsFilter() with begin/endFilterChange(); support both.
#if QT_VERSION >= QT_VERSION_CHECK(6, 10, 0)
#define S3FM_BEGIN_FILTER_CHANGE() beginFilterChange()
#define S3FM_END_FILTER_CHANGE() endFilterChange(QSortFilterProxyModel::Direction::Rows)
#else
#define S3FM_BEGIN_FILTER_CHANGE() (void)0
#define S3FM_END_FILTER_CHANGE() invalidateRowsFilter()
#endif

namespace s3fm {

EntrySortProxy::EntrySortProxy(QObject* parent) : QSortFilterProxyModel(parent)
{
    m_collator.setNumericMode(true);
    m_collator.setCaseSensitivity(Qt::CaseInsensitive);
    setSortRole(EntryListModel::SortRole);
    setDynamicSortFilter(true);
}

void EntrySortProxy::setShowHidden(bool show)
{
    if (m_showHidden == show)
        return;
    S3FM_BEGIN_FILTER_CHANGE();
    m_showHidden = show;
    S3FM_END_FILTER_CHANGE();
}

void EntrySortProxy::setQuickFilter(const QString& text)
{
    if (m_quickFilter == text)
        return;
    S3FM_BEGIN_FILTER_CHANGE();
    m_quickFilter = text;
    if (text.contains(u'*') || text.contains(u'?'))
        m_wildcard = QRegularExpression(QRegularExpression::wildcardToRegularExpression(
                                            text, QRegularExpression::UnanchoredWildcardConversion),
                                        QRegularExpression::CaseInsensitiveOption);
    else
        m_wildcard = QRegularExpression();
    S3FM_END_FILTER_CHANGE();
}

bool EntrySortProxy::filterAcceptsRow(int sourceRow, const QModelIndex& sourceParent) const
{
    const QModelIndex idx = sourceModel()->index(sourceRow, 0, sourceParent);
    if (idx.data(EntryListModel::IsParentRole).toBool())
        return true;
    if (!m_showHidden && idx.data(EntryListModel::IsHiddenRole).toBool())
        return false;
    if (m_quickFilter.isEmpty())
        return true;
    const QString name = idx.data(EntryListModel::SortRole).toString();
    if (m_wildcard.isValid() && !m_wildcard.pattern().isEmpty())
        return m_wildcard.match(name).hasMatch();
    return name.contains(m_quickFilter, Qt::CaseInsensitive);
}

bool EntrySortProxy::lessThan(const QModelIndex& left, const QModelIndex& right) const
{
    const bool ascending = sortOrder() == Qt::AscendingOrder;
    // Pinned rows: the result is inverted by the view for descending order, so
    // compensate to keep ".." and directories on top either way.
    const bool lParent = left.data(EntryListModel::IsParentRole).toBool();
    const bool rParent = right.data(EntryListModel::IsParentRole).toBool();
    if (lParent != rParent)
        return lParent == ascending;
    const bool lDir = left.data(EntryListModel::IsDirectoryRole).toBool();
    const bool rDir = right.data(EntryListModel::IsDirectoryRole).toBool();
    if (lDir != rDir)
        return lDir == ascending;

    const QModelIndex lName = left.siblingAtColumn(EntryListModel::NameColumn);
    const QModelIndex rName = right.siblingAtColumn(EntryListModel::NameColumn);
    auto byName = [&] {
        const int c = m_collator.compare(lName.data(EntryListModel::SortRole).toString(),
                                         rName.data(EntryListModel::SortRole).toString());
        if (c != 0)
            return c < 0;
        // Versions of one key: current first, then newest first (whatever the order).
        const Entry a = lName.data(EntryListModel::EntryRole).value<Entry>();
        const Entry b = rName.data(EntryListModel::EntryRole).value<Entry>();
        if (a.isLatest != b.isLatest)
            return a.isLatest == ascending;
        return (a.modified > b.modified) == ascending;
    };

    switch (left.column()) {
    case EntryListModel::NameColumn:
        return byName();
    case EntryListModel::SizeColumn: {
        const qint64 a = left.data(EntryListModel::SortRole).toLongLong();
        const qint64 b = right.data(EntryListModel::SortRole).toLongLong();
        return a != b ? a < b : byName();
    }
    case EntryListModel::ModifiedColumn: {
        const QDateTime a = left.data(EntryListModel::SortRole).toDateTime();
        const QDateTime b = right.data(EntryListModel::SortRole).toDateTime();
        return a != b ? a < b : byName();
    }
    default: {
        const int c = m_collator.compare(left.data(EntryListModel::SortRole).toString(),
                                         right.data(EntryListModel::SortRole).toString());
        return c != 0 ? c < 0 : byName();
    }
    }
}

} // namespace s3fm
