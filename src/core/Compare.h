#pragma once

#include "core/Entry.h"
#include "core/Error.h"

#include <QHash>
#include <QList>
#include <QString>

#include <functional>

namespace s3fm {

class OperationContext;

// Panel comparison (task 10.2): pairs the entries of two listings by name and tells,
// for each side, what differs.

struct CompareOptions
{
    // Pairs of files that differ count as newer/older when their times differ by more
    // than the tolerance (S3 keeps whole seconds, FAT two seconds). Off: by size and
    // content only, and a differing pair is just "different".
    bool compareTime = true;
    int timeToleranceSecs = 2;
    // Check the content of same-size files (see ContentComparer). Off: same size and
    // time (or same size with compareTime off) counts as identical.
    bool compareContent = true;
    // Mark folders that exist on one side only.
    bool includeDirectories = true;
    Qt::CaseSensitivity caseSensitivity = Qt::CaseSensitive;

    bool operator==(const CompareOptions&) const = default;
};

// What one side's entry looks like next to the other side.
enum class CompareState : quint8
{
    None,      // not compared (folders present on both sides, "..")
    Unique,    // nothing with this name on the other side
    Newer,     // differs, and this side is newer
    Older,     // differs, and this side is older
    Different, // differs, no time to tell which is newer
    Same,      // identical (by content when checked, otherwise by size and time)
    Conflict,  // a file on one side, a folder on the other
};

// How a pair's content was judged.
enum class ContentVerdict : quint8
{
    NotChecked,
    Same,
    Different,
    Unknown, // could not be checked (no comparable checksum, unsupported location)
};

struct CompareMark
{
    CompareState state = CompareState::None;
    ContentVerdict content = ContentVerdict::NotChecked;
    // Why the content could not be checked (ContentVerdict::Unknown) or the check failed.
    QString note;

    // Rows to select after a comparison: what is missing or out of date elsewhere.
    bool isSelectable() const
    {
        return state == CompareState::Unique || state == CompareState::Newer || state == CompareState::Different;
    }
    // Short label for the compare column ("only here", "newer", …), translated.
    QString label() const;
    // Longer description for tooltips, translated.
    QString description() const;
    bool operator==(const CompareMark&) const = default;
};

// One row of a listing: its key (the name, or the relative path in search results) and entry.
struct CompareItem
{
    QString key;
    Entry entry;
};
using CompareItems = QList<CompareItem>;

struct CompareSummary
{
    int unique = 0;
    int newer = 0;
    int older = 0;
    int different = 0;
    int same = 0;
    int unverified = 0; // pairs whose content could not be checked
    int errors = 0;     // pairs whose content check failed

    // "2 only here, 1 newer, 5 identical" (empty counts left out), translated.
    QString toString() const;
};

struct CompareResult
{
    QHash<QString, CompareMark> left; // by CompareItem::key
    QHash<QString, CompareMark> right;
    CompareSummary leftSummary;
    CompareSummary rightSummary;
};

// Checks whether two same-size files have the same content. Called on a worker thread;
// may block (reading files, S3 requests). Returning Unknown is fine when there is no way to
// tell; an Error is recorded on the pair (as Unknown) and the comparison goes on.
struct ContentCheck
{
    ContentVerdict verdict = ContentVerdict::Unknown;
    QString note; // why it is Unknown
};
using ContentComparer =
    std::function<Result<ContentCheck>(const Entry& left, const Entry& right, OperationContext& ctx)>;

// Compares two listings. `content` may be null (content then counts as Unknown). Blocking;
// progress: content checks done / needed. Fails only when cancelled.
Result<CompareResult> compareListings(const CompareItems& left, const CompareItems& right,
                                      const CompareOptions& options, const ContentComparer& content,
                                      OperationContext& ctx);

} // namespace s3fm
