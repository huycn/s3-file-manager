#pragma once

#include <QCollator>
#include <QRegularExpression>
#include <QSortFilterProxyModel>

namespace s3fm {

// Sorting/filtering on top of EntryListModel:
//  * ".." always first, then directories, then files (in both sort orders)
//  * natural, case-insensitive name order ("file2" < "file10")
//  * optional hiding of hidden entries and a quick filter (substring, or wildcard
//    when the text contains * or ?)
class EntrySortProxy : public QSortFilterProxyModel
{
    Q_OBJECT

public:
    explicit EntrySortProxy(QObject* parent = nullptr);

    bool showHidden() const { return m_showHidden; }
    void setShowHidden(bool show);

    QString quickFilter() const { return m_quickFilter; }
    void setQuickFilter(const QString& text);

protected:
    bool lessThan(const QModelIndex& left, const QModelIndex& right) const override;
    bool filterAcceptsRow(int sourceRow, const QModelIndex& sourceParent) const override;

private:
    QCollator m_collator;
    bool m_showHidden = false;
    QString m_quickFilter;
    QRegularExpression m_wildcard;
};

} // namespace s3fm
