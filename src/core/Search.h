#pragma once

#include "core/Entry.h"
#include "core/Error.h"
#include "core/Location.h"

#include <QDateTime>
#include <QList>
#include <QRegularExpression>
#include <QStringList>

#include <atomic>
#include <functional>
#include <optional>

namespace s3fm {

class OperationContext;
class Provider;

// What a recursive search looks for (task 10.1). Every set criterion must match.
struct SearchCriteria
{
    enum class Syntax : quint8
    {
        // Shell wildcards (* ? [abc]); several patterns separated by ';'. A pattern
        // without wildcards matches as a substring.
        Wildcard,
        RegularExpression, // unanchored (use ^...$ for a whole-name match)
    };

    QString pattern; // empty: any name
    Syntax syntax = Syntax::Wildcard;
    bool caseSensitive = false;
    // Match the pattern against the path relative to the search root ("logs/2024/a.txt")
    // instead of the name; '*' then also matches '/'.
    bool matchPath = false;
    // Only paths relative to the root that start with this text are searched. On S3 this is
    // the listing prefix, so the server filters (e.g. "logs/2024-" lists just those keys).
    QString pathPrefix;

    qint64 minSize = -1; // bytes, inclusive; -1: no limit
    qint64 maxSize = -1;
    QDateTime modifiedAfter; // inclusive; invalid: no limit
    QDateTime modifiedBefore;
    QStringList storageClasses; // S3 storage classes; empty: any. Objects listed without a
                                // class count as STANDARD.

    bool includeFiles = true;
    // Folders match on the name pattern only, so they are left out when a size, date or
    // storage class criterion is set.
    bool includeDirectories = true;
    bool includeHidden = false; // hidden local entries; hidden folders are not entered either
    int maxResults = 10000;     // the search stops after this many matches; <= 0: no limit

    // True when only the name pattern (or nothing) is set.
    bool hasAttributeCriteria() const;
    // Short human-readable summary ("*.log, > 1 MB, STANDARD").
    QString summary() const;
    bool operator==(const SearchCriteria&) const = default;
};

// Compiled SearchCriteria. Thread-safe for concurrent matches() calls.
class SearchMatcher
{
public:
    explicit SearchMatcher(const SearchCriteria& criteria);

    bool isValid() const { return m_error.isEmpty(); }
    // Why the pattern is invalid (bad regular expression), translated.
    QString errorString() const { return m_error; }

    // `relativePath` is the entry's path relative to the search root, '/'-separated,
    // without a trailing '/'.
    bool matches(const Entry& entry, const QString& relativePath) const;
    bool matchesName(const QString& text) const;

private:
    SearchCriteria m_criteria;
    QList<QRegularExpression> m_regexes; // any may match
    QStringList m_substrings;            // patterns without wildcards
    QString m_error;
};

struct SearchStats
{
    qint64 scanned = 0; // entries looked at
    qint64 found = 0;
    bool limitReached = false; // stopped at SearchCriteria::maxResults
};

// Searches below `root` (recursively) and calls `onMatch` for every match, on the calling
// thread, in listing order. Blocking: run it on a worker (runIo). `scanned`, if given, is
// updated as entries are looked at, for progress display from another thread.
// Fails with InvalidArgument for an invalid pattern; a missing root or path prefix
// directory gives no results rather than an error.
Result<SearchStats> runSearch(Provider& provider, const Location& root, const SearchCriteria& criteria,
                              const std::function<void(const Entry&)>& onMatch, OperationContext& ctx,
                              std::atomic<qint64>* scanned = nullptr);

// Parses sizes typed by users: "1500", "10 KB", "1.5M", "2 GiB" (K/M/G/T, decimal or binary
// prefixes both count as powers of 1024, like formatSize() shows them). Locale-independent
// '.' or the locale's decimal separator. Empty or invalid: nullopt.
std::optional<qint64> parseSize(const QString& text);

} // namespace s3fm
