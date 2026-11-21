#pragma once

#include "transfer/TransferTypes.h"

#include <QAbstractItemModel>
#include <QHash>
#include <QList>

namespace s3fm {

class TransferJob;
class TransferQueue;

// Jobs of a TransferQueue as a tree: one row per job; finished or paused jobs
// with failures have one child row per failed item.
class TransferModel : public QAbstractItemModel
{
    Q_OBJECT

public:
    enum Column
    {
        NameColumn,
        StatusColumn,
        ProgressColumn,
        SizeColumn,
        SpeedColumn,
        EtaColumn,
        ColumnCount
    };
    enum Role
    {
        JobRole = Qt::UserRole + 1, // TransferJob* (job and failure rows)
        ProgressRole,               // 0..100, or -1 when unknown
        FailureRole,                // failure rows: true
    };

    explicit TransferModel(TransferQueue* queue, QObject* parent = nullptr);

    TransferJob* jobAt(const QModelIndex& index) const;
    QModelIndex indexOf(TransferJob* job, int column = 0) const;
    // Failure shown at a child row (invalid Error for job rows).
    TransferFailure failureAt(const QModelIndex& index) const;

    QModelIndex index(int row, int column, const QModelIndex& parent = {}) const override;
    QModelIndex parent(const QModelIndex& child) const override;
    int rowCount(const QModelIndex& parent = {}) const override;
    int columnCount(const QModelIndex& parent = {}) const override;
    QVariant data(const QModelIndex& index, int role = Qt::DisplayRole) const override;
    QVariant headerData(int section, Qt::Orientation orientation, int role = Qt::DisplayRole) const override;

    static QString statusText(const TransferJob* job);
    static QString formatEta(qint64 seconds);

private:
    void onJobAdded(TransferJob* job);
    void onJobRemoved(TransferJob* job);
    void onJobMoved(TransferJob* job, int from, int to);
    void onJobChanged(TransferJob* job);
    void refreshFailures(TransferJob* job);

    TransferQueue* m_queue;
    QList<TransferJob*> m_jobs;
    QHash<TransferJob*, QList<TransferFailure>> m_failures;
    QHash<TransferJob*, JobState> m_lastState;
};

} // namespace s3fm
