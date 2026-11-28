#include "core/Search.h"

#include "core/Format.h"
#include "core/OperationContext.h"
#include "core/Provider.h"

#include <QCoreApplication>
#include <QLocale>

#include <cmath>

namespace s3fm {

namespace {

struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::Search)
};

bool hasWildcards(const QString& pattern)
{
    return pattern.contains(u'*') || pattern.contains(u'?') || pattern.contains(u'[');
}

} // namespace

bool SearchCriteria::hasAttributeCriteria() const
{
    return minSize >= 0 || maxSize >= 0 || modifiedAfter.isValid() || modifiedBefore.isValid() ||
           !storageClasses.isEmpty();
}

QString SearchCriteria::summary() const
{
    QStringList parts;
    parts.push_back(pattern.isEmpty() ? QStringLiteral("*") : pattern);
    if (!pathPrefix.isEmpty())
        parts.push_back(Tr::tr("under \"%1\"").arg(pathPrefix));
    if (minSize >= 0)
        parts.push_back(Tr::tr("≥ %1").arg(formatSize(minSize)));
    if (maxSize >= 0)
        parts.push_back(Tr::tr("≤ %1").arg(formatSize(maxSize)));
    if (modifiedAfter.isValid())
        parts.push_back(Tr::tr("modified after %1").arg(formatDateTime(modifiedAfter)));
    if (modifiedBefore.isValid())
        parts.push_back(Tr::tr("modified before %1").arg(formatDateTime(modifiedBefore)));
    if (!storageClasses.isEmpty())
        parts.push_back(storageClasses.join(u'/'));
    return parts.join(Tr::tr(", ", "separator between search criteria"));
}

// ---------------------------------------------------------------------------
// SearchMatcher
// ---------------------------------------------------------------------------

SearchMatcher::SearchMatcher(const SearchCriteria& criteria) : m_criteria(criteria)
{
    const auto caseOption =
        criteria.caseSensitive ? QRegularExpression::NoPatternOption : QRegularExpression::CaseInsensitiveOption;
    if (criteria.syntax == SearchCriteria::Syntax::RegularExpression) {
        if (criteria.pattern.isEmpty())
            return;
        QRegularExpression re(criteria.pattern, caseOption);
        if (!re.isValid()) {
            m_error = Tr::tr("Invalid regular expression at position %1: %2")
                          .arg(re.patternErrorOffset())
                          .arg(re.errorString());
            return;
        }
        re.optimize();
        m_regexes.push_back(std::move(re));
        return;
    }
    const auto conversion = criteria.matchPath ? QRegularExpression::NonPathWildcardConversion
                                               : QRegularExpression::DefaultWildcardConversion;
    const QStringList patterns = criteria.pattern.split(u';', Qt::SkipEmptyParts);
    for (const QString& raw : patterns) {
        const QString p = raw.trimmed();
        if (p.isEmpty())
            continue;
        if (!hasWildcards(p)) {
            m_substrings.push_back(p);
            continue;
        }
        QRegularExpression re(QRegularExpression::wildcardToRegularExpression(p, conversion), caseOption);
        if (!re.isValid()) {
            m_error = Tr::tr("Invalid wildcard pattern \"%1\": %2").arg(p, re.errorString());
            return;
        }
        re.optimize();
        m_regexes.push_back(std::move(re));
    }
}

bool SearchMatcher::matchesName(const QString& text) const
{
    if (m_regexes.isEmpty() && m_substrings.isEmpty())
        return true;
    const Qt::CaseSensitivity cs = m_criteria.caseSensitive ? Qt::CaseSensitive : Qt::CaseInsensitive;
    for (const QString& s : m_substrings) {
        if (text.contains(s, cs))
            return true;
    }
    for (const QRegularExpression& re : m_regexes) {
        if (re.match(text).hasMatch())
            return true;
    }
    return false;
}

bool SearchMatcher::matches(const Entry& entry, const QString& relativePath) const
{
    if (!isValid())
        return false;
    if (entry.hidden && !m_criteria.includeHidden)
        return false;
    const SearchCriteria& c = m_criteria;
    if (entry.isDirectory()) {
        if (!c.includeDirectories || c.hasAttributeCriteria())
            return false;
    } else {
        if (!c.includeFiles)
            return false;
        if (c.minSize >= 0 && (entry.size < 0 || entry.size < c.minSize))
            return false;
        if (c.maxSize >= 0 && (entry.size < 0 || entry.size > c.maxSize))
            return false;
        if (c.modifiedAfter.isValid() && (!entry.modified.isValid() || entry.modified < c.modifiedAfter))
            return false;
        if (c.modifiedBefore.isValid() && (!entry.modified.isValid() || entry.modified > c.modifiedBefore))
            return false;
        if (!c.storageClasses.isEmpty()) {
            const QString sc = entry.storageClass.isEmpty() ? QStringLiteral("STANDARD") : entry.storageClass;
            if (!c.storageClasses.contains(sc, Qt::CaseInsensitive))
                return false;
        }
    }
    if (c.matchPath)
        return matchesName(relativePath);
    const qsizetype slash = relativePath.lastIndexOf(u'/');
    return matchesName(slash < 0 ? relativePath : relativePath.mid(slash + 1));
}

// ---------------------------------------------------------------------------
// runSearch
// ---------------------------------------------------------------------------

namespace {

class Searcher
{
public:
    Searcher(Provider& provider, const Location& root, const SearchCriteria& criteria,
             const std::function<void(const Entry&)>& onMatch, OperationContext& ctx,
             std::atomic<qint64>* scanned)
        : m_provider(provider), m_root(root), m_criteria(criteria), m_matcher(criteria), m_onMatch(onMatch),
          m_ctx(ctx), m_scanned(scanned)
    {
    }

    Result<SearchStats> run()
    {
        if (!m_matcher.isValid())
            return Error::make(ErrorCode::InvalidArgument, m_matcher.errorString());
        // Providers whose directories are key prefixes (S3) list everything below the
        // root in one flat listing, filtered by the server.
        const bool flat = m_provider.capabilities(m_root).testFlag(Capability::ImplicitDirectories);
        const VoidResult r = flat ? searchFlat() : searchTree();
        if (!r && !m_stats.limitReached) {
            if (r.error().code == ErrorCode::NotFound)
                return m_stats; // root or prefix folder does not exist: nothing found
            return r.error();
        }
        return m_stats;
    }

private:
    // Counts and tests one entry; false stops the search.
    bool visit(const Entry& entry)
    {
        if (m_ctx.isCancelled())
            return false;
        ++m_stats.scanned;
        if (m_scanned)
            m_scanned->store(m_stats.scanned, std::memory_order_relaxed);
        if (!m_matcher.matches(entry, m_root.relativePathTo(entry.location)))
            return true;
        ++m_stats.found;
        m_onMatch(entry);
        if (m_criteria.maxResults > 0 && m_stats.found >= m_criteria.maxResults) {
            m_stats.limitReached = true;
            return false;
        }
        return true;
    }

    VoidResult searchFlat()
    {
        return m_provider.walkPrefix(m_root, m_criteria.pathPrefix, [this](const Entry& e) { return visit(e); },
                                     m_ctx);
    }

    VoidResult searchTree()
    {
        // "a/b/c": list a/b/ and keep its entries starting with "c".
        const QString& prefix = m_criteria.pathPrefix;
        const qsizetype slash = prefix.lastIndexOf(u'/');
        Location start = m_root;
        for (const QString& part : prefix.left(slash < 0 ? 0 : slash).split(u'/', Qt::SkipEmptyParts)) {
            start = start.child(part, true);
            if (!start.isValid())
                return Error::make(ErrorCode::NotFound, {});
        }
        return walkTree(start, prefix.mid(slash + 1), true);
    }

    VoidResult walkTree(const Location& dir, const QString& namePrefix, bool top)
    {
        QString token;
        do {
            if (m_ctx.isCancelled())
                return Error::cancelled();
            auto page = m_provider.list(dir, token, m_ctx);
            if (!page) {
                // Unreadable folders below the root (permissions, removed meanwhile) are skipped.
                if (top || page.error().isCancelled())
                    return page.error();
                return {};
            }
            for (const Entry& e : std::as_const(page->entries)) {
                if (top && !namePrefix.isEmpty() && !e.name.startsWith(namePrefix))
                    continue;
                if (e.hidden && !m_criteria.includeHidden)
                    continue; // neither matched nor entered
                if (!visit(e))
                    return Error::cancelled();
                // Symlinked folders are not followed: they may loop or leave the tree.
                if (e.isDirectory() && !e.isSymlink) {
                    if (auto r = walkTree(e.location, {}, false); !r)
                        return r;
                }
            }
            token = page->nextPageToken;
        } while (!token.isEmpty());
        return {};
    }

    Provider& m_provider;
    const Location m_root;
    const SearchCriteria& m_criteria;
    const SearchMatcher m_matcher;
    const std::function<void(const Entry&)>& m_onMatch;
    OperationContext& m_ctx;
    std::atomic<qint64>* m_scanned;
    SearchStats m_stats;
};

} // namespace

Result<SearchStats> runSearch(Provider& provider, const Location& root, const SearchCriteria& criteria,
                              const std::function<void(const Entry&)>& onMatch, OperationContext& ctx,
                              std::atomic<qint64>* scanned)
{
    return Searcher(provider, root, criteria, onMatch, ctx, scanned).run();
}

// ---------------------------------------------------------------------------
// parseSize
// ---------------------------------------------------------------------------

std::optional<qint64> parseSize(const QString& text)
{
    static const QRegularExpression re(QStringLiteral(R"(^\s*([0-9][0-9.,]*)\s*(?:([kmgtp])(?:i?b)?|b|bytes?)?\s*$)"),
                                       QRegularExpression::CaseInsensitiveOption);
    const QRegularExpressionMatch m = re.match(text);
    if (!m.hasMatch())
        return std::nullopt;
    const QString number = m.captured(1);
    bool ok = false;
    double value = QLocale::c().toDouble(number, &ok);
    if (!ok)
        value = QLocale().toDouble(number, &ok);
    if (!ok || value < 0)
        return std::nullopt;
    const QString unit = m.captured(2).toLower();
    static const QString units = QStringLiteral("kmgtp");
    for (qsizetype i = 0; i <= units.indexOf(unit) && !unit.isEmpty(); ++i)
        value *= 1024.0;
    if (value >= 9.2e18)
        return std::nullopt;
    return qint64(std::llround(value));
}

} // namespace s3fm
