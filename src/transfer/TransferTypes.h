#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/TransferParams.h"

#include <QJsonObject>
#include <QMetaType>
#include <QStringList>

class QSettings;

namespace s3fm {

enum class TransferKind
{
    Copy,
    Move,
    Delete
};

enum class JobState
{
    Queued,
    Running,
    Paused,
    Done,      // finished without failures
    Failed,    // finished, some items failed (can be retried)
    Cancelled, // stopped by the user; partial state was discarded
};

// What to do when the destination file already exists.
enum class ConflictPolicy
{
    Ask,
    Overwrite,
    Skip,
    Rename,                 // keep both: the new file becomes "name (2).ext"
    OverwriteIfNewer,       // overwrite when the source is newer, else skip
    OverwriteIfSizeDiffers, // overwrite when the sizes differ, else skip
};

struct ConflictInfo
{
    Entry source;
    Entry destination;
};

struct ConflictAnswer
{
    ConflictPolicy policy = ConflictPolicy::Skip; // never Ask
    bool applyToAll = false;
    bool cancel = false; // cancel the whole job
};

// Per-job options chosen in the copy/move dialog.
struct TransferOptions
{
    ConflictPolicy conflict = ConflictPolicy::Ask;
    QStringList include; // wildcard patterns; empty: everything
    QStringList exclude;
    bool followSymlinks = true; // false: symbolic links are skipped
    bool verify = true;
    bool preserveMtime = true;
    bool detectContentType = true;
    QString storageClass; // upload storage class override
    QString sse;          // upload encryption: "", "AES256", "aws:kms", "SSE-C"
    QString sseKmsKeyId;  // aws:kms key id/ARN/alias (empty: AWS managed key)

    QJsonObject toJson() const;
    static TransferOptions fromJson(const QJsonObject& json);
};

struct TransferRequest
{
    TransferKind kind = TransferKind::Copy;
    EntryList sources;
    // Copy/Move: destination directory, or the new path when a single source is
    // copied/moved under a different name.
    Location destination;
    // Treat `destination` as a directory even if it does not exist yet.
    bool destinationIsDirectory = false;
    TransferOptions options;

    QJsonObject toJson() const;
    static TransferRequest fromJson(const QJsonObject& json);
};

// Engine-wide settings (Transfers settings dialog; QSettings group "transfers").
struct TransferSettings
{
    int maxJobs = 2;              // jobs running at the same time
    int filesPerJob = 4;          // files of one job transferred in parallel
    int partConcurrency = 4;      // parts of one file in parallel
    qint64 partSize = 16LL << 20; // preferred multipart part size
    qint64 multipartThreshold = 64LL << 20;
    qint64 bandwidthLimit = 0; // bytes/s, 0 = unlimited
    int maxRetries = 3;        // retries per file for transient errors
    int retryBaseDelayMs = 1000;
    bool resumeOnStartup = false; // restored jobs start right away (else paused)

    void load(QSettings& settings);
    void save(QSettings& settings) const;
};

enum class TaskState : quint8
{
    Pending,
    Done,
    Skipped,
    Failed
};

// One file or directory of a copy/move job, after expansion.
struct TransferTask
{
    Entry source;
    Location target;
    int top = 0; // index of the top-level source it came from
    TaskState state = TaskState::Pending;
    Error error;
    TransferCheckpoint checkpoint;
    bool started = false;    // has run at least once (partial state may exist)
    bool keepSource = false; // move: the source folder keeps items that were filtered out

    bool isDirectory() const { return source.isDirectory(); }
    qint64 size() const { return source.isDirectory() ? 0 : qMax<qint64>(0, source.size); }

    QJsonObject toJson() const; // static part only (no state/checkpoint)
    static TransferTask fromJson(const QJsonObject& json);
};

struct TransferProgress
{
    enum class Stage
    {
        Waiting,
        Scanning,
        Transferring,
        Deleting,
        Finished
    };
    Stage stage = Stage::Waiting;
    QString currentItem;
    qint64 bytesDone = 0;
    qint64 bytesTotal = 0;
    int filesDone = 0;
    int filesTotal = 0; // 0 while scanning
    int filesSkipped = 0;
    int filesFailed = 0;
    double bytesPerSecond = 0;
    qint64 etaSeconds = -1; // -1: unknown
};

struct TransferFailure
{
    QString item; // display path
    Error error;
};

QString jobStateName(JobState state);
JobState jobStateFromName(const QString& name);
QString conflictPolicyName(ConflictPolicy policy);
ConflictPolicy conflictPolicyFromName(const QString& name);

QJsonObject entryToJson(const Entry& entry);
Entry entryFromJson(const QJsonObject& json);
QJsonObject errorToJson(const Error& error);
Error errorFromJson(const QJsonObject& json);

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::TransferProgress)
Q_DECLARE_METATYPE(s3fm::ConflictInfo)
