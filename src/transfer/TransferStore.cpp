#include "transfer/TransferStore.h"

#include "core/Logging.h"

#include <QDir>
#include <QFile>
#include <QJsonArray>
#include <QJsonDocument>
#include <QSaveFile>

namespace s3fm {

namespace {

bool writeAtomically(const QString& path, const QByteArray& data)
{
    QSaveFile f(path);
    if (!f.open(QIODevice::WriteOnly)) {
        qCWarning(lcTransfer) << "cannot write" << path << f.errorString();
        return false;
    }
    f.write(data);
    if (!f.commit()) {
        qCWarning(lcTransfer) << "cannot write" << path << f.errorString();
        return false;
    }
    return true;
}

QString stateCode(TaskState s)
{
    switch (s) {
    case TaskState::Pending:
        return QStringLiteral("P");
    case TaskState::Done:
        return QStringLiteral("D");
    case TaskState::Skipped:
        return QStringLiteral("S");
    case TaskState::Failed:
        return QStringLiteral("F");
    }
    return QStringLiteral("P");
}

TaskState stateFromCode(QStringView c)
{
    if (c == u"D")
        return TaskState::Done;
    if (c == u"S")
        return TaskState::Skipped;
    if (c == u"F")
        return TaskState::Failed;
    return TaskState::Pending;
}

} // namespace

TransferStore::TransferStore(QString root) : m_root(std::move(root))
{
    QDir().mkpath(m_root);
}

QString TransferStore::jobDir(const QString& id) const
{
    return m_root + u'/' + id;
}

void TransferStore::saveJob(const JobRecord& job)
{
    QMutexLocker lock(&m_mutex);
    QDir().mkpath(jobDir(job.id));
    QJsonObject o;
    o.insert(QStringLiteral("version"), 1);
    o.insert(QStringLiteral("id"), job.id);
    o.insert(QStringLiteral("request"), job.request.toJson());
    o.insert(QStringLiteral("state"), jobStateName(job.state));
    o.insert(QStringLiteral("stickyConflict"), conflictPolicyName(job.stickyConflict));
    QJsonArray failures;
    for (const TransferFailure& f : job.jobFailures) {
        QJsonObject fo = errorToJson(f.error);
        fo.insert(QStringLiteral("item"), f.item);
        failures.push_back(fo);
    }
    o.insert(QStringLiteral("failures"), failures);
    writeAtomically(jobDir(job.id) + QStringLiteral("/job.json"), QJsonDocument(o).toJson());
}

void TransferStore::saveTasks(const QString& id, const QList<TransferTask>& tasks)
{
    QMutexLocker lock(&m_mutex);
    QDir().mkpath(jobDir(id));
    QByteArray data;
    for (const TransferTask& t : tasks) {
        data += QJsonDocument(t.toJson()).toJson(QJsonDocument::Compact);
        data += '\n';
    }
    writeAtomically(jobDir(id) + QStringLiteral("/tasks.jsonl"), data);
    // A new task list invalidates earlier task states.
    QFile::remove(jobDir(id) + QStringLiteral("/progress.log"));
}

void TransferStore::appendTaskState(const QString& id, int index, TaskState state, const Error& error)
{
    QMutexLocker lock(&m_mutex);
    QFile f(jobDir(id) + QStringLiteral("/progress.log"));
    if (!f.open(QIODevice::Append | QIODevice::WriteOnly)) {
        qCWarning(lcTransfer) << "cannot append to" << f.fileName() << f.errorString();
        return;
    }
    QByteArray line = QByteArray::number(index) + ' ' + stateCode(state).toLatin1();
    if (state == TaskState::Failed)
        line += ' ' + QJsonDocument(errorToJson(error)).toJson(QJsonDocument::Compact);
    line += '\n';
    f.write(line);
    f.flush();
}

void TransferStore::saveCheckpoint(const QString& id, int index, const TransferCheckpoint& checkpoint)
{
    QMutexLocker lock(&m_mutex);
    QDir().mkpath(jobDir(id));
    writeAtomically(jobDir(id) + QStringLiteral("/ckpt-%1.json").arg(index),
                    QJsonDocument(checkpoint.toJson()).toJson(QJsonDocument::Compact));
}

void TransferStore::removeCheckpoint(const QString& id, int index)
{
    QMutexLocker lock(&m_mutex);
    QFile::remove(jobDir(id) + QStringLiteral("/ckpt-%1.json").arg(index));
}

void TransferStore::removeJob(const QString& id)
{
    QMutexLocker lock(&m_mutex);
    if (!id.isEmpty())
        QDir(jobDir(id)).removeRecursively();
}

QList<TransferStore::LoadedJob> TransferStore::loadAll() const
{
    QMutexLocker lock(&m_mutex);
    QList<LoadedJob> out;
    const QDir root(m_root);
    const auto ids = root.entryList(QDir::Dirs | QDir::NoDotAndDotDot, QDir::Name);
    for (const QString& id : ids) {
        const QString dir = root.filePath(id);
        QFile jf(dir + QStringLiteral("/job.json"));
        if (!jf.open(QIODevice::ReadOnly)) {
            qCWarning(lcTransfer) << "skipping transfer state without job.json:" << dir;
            continue;
        }
        const QJsonObject o = QJsonDocument::fromJson(jf.readAll()).object();
        if (o.value(QStringLiteral("id")).toString() != id) {
            qCWarning(lcTransfer) << "skipping unreadable transfer state:" << dir;
            continue;
        }
        LoadedJob job;
        job.record.id = id;
        job.record.request = TransferRequest::fromJson(o.value(QStringLiteral("request")).toObject());
        job.record.state = jobStateFromName(o.value(QStringLiteral("state")).toString());
        job.record.stickyConflict =
            conflictPolicyFromName(o.value(QStringLiteral("stickyConflict")).toString());
        const QJsonArray failureList = o.value(QStringLiteral("failures")).toArray();
        for (const auto& v : failureList) {
            const QJsonObject fo = v.toObject();
            job.record.jobFailures.push_back(
                {fo.value(QStringLiteral("item")).toString(), errorFromJson(fo)});
        }

        QFile tf(dir + QStringLiteral("/tasks.jsonl"));
        if (tf.open(QIODevice::ReadOnly)) {
            job.expanded = true;
            while (!tf.atEnd()) {
                const QByteArray line = tf.readLine().trimmed();
                if (!line.isEmpty())
                    job.tasks.push_back(TransferTask::fromJson(QJsonDocument::fromJson(line).object()));
            }
            QFile lf(dir + QStringLiteral("/progress.log"));
            if (lf.open(QIODevice::ReadOnly)) {
                while (!lf.atEnd()) {
                    const QByteArray line = lf.readLine().trimmed();
                    const qsizetype sp1 = line.indexOf(' ');
                    if (sp1 <= 0)
                        continue; // torn write at a crash
                    bool ok = false;
                    const int index = line.left(sp1).toInt(&ok);
                    if (!ok || index < 0 || index >= job.tasks.size())
                        continue;
                    const qsizetype sp2 = line.indexOf(' ', sp1 + 1);
                    const QByteArray code = line.mid(sp1 + 1, sp2 < 0 ? -1 : sp2 - sp1 - 1);
                    TransferTask& t = job.tasks[index];
                    t.state = stateFromCode(QString::fromLatin1(code));
                    t.started = true;
                    if (t.state == TaskState::Failed && sp2 > 0)
                        t.error = errorFromJson(QJsonDocument::fromJson(line.mid(sp2 + 1)).object());
                }
            }
            const QStringList checkpoints =
                QDir(dir).entryList({QStringLiteral("ckpt-*.json")}, QDir::Files, QDir::Name);
            for (const QString& name : checkpoints) {
                bool ok = false;
                const int index = name.mid(5, name.size() - 10).toInt(&ok);
                if (!ok || index < 0 || index >= job.tasks.size())
                    continue;
                QFile cf(dir + u'/' + name);
                if (cf.open(QIODevice::ReadOnly)) {
                    job.tasks[index].checkpoint =
                        TransferCheckpoint::fromJson(QJsonDocument::fromJson(cf.readAll()).object());
                    job.tasks[index].started = true;
                }
            }
        }
        out.push_back(std::move(job));
    }
    return out;
}

} // namespace s3fm
