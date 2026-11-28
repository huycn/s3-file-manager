#include "core/Compare.h"

#include "core/OperationContext.h"

#include <QCoreApplication>
#include <QStringList>

#include <cstdlib>

namespace s3fm {

namespace {

struct Tr
{
    Q_DECLARE_TR_FUNCTIONS(s3fm::Compare)
};

QString foldKey(const QString& key, Qt::CaseSensitivity cs)
{
    return cs == Qt::CaseInsensitive ? key.toCaseFolded() : key;
}

void count(CompareSummary& summary, const CompareMark& mark)
{
    switch (mark.state) {
    case CompareState::Unique:
        ++summary.unique;
        break;
    case CompareState::Newer:
        ++summary.newer;
        break;
    case CompareState::Older:
        ++summary.older;
        break;
    case CompareState::Different:
    case CompareState::Conflict:
        ++summary.different;
        break;
    case CompareState::Same:
        ++summary.same;
        break;
    case CompareState::None:
        break;
    }
}

} // namespace

QString CompareMark::label() const
{
    switch (state) {
    case CompareState::None:
        return {};
    case CompareState::Unique:
        return Tr::tr("only here");
    case CompareState::Newer:
        return Tr::tr("newer");
    case CompareState::Older:
        return Tr::tr("older");
    case CompareState::Different:
        return Tr::tr("different");
    case CompareState::Same:
        return content == ContentVerdict::Same ? Tr::tr("identical") : Tr::tr("same size and time");
    case CompareState::Conflict:
        return Tr::tr("file vs. folder");
    }
    return {};
}

QString CompareMark::description() const
{
    QString text;
    switch (state) {
    case CompareState::None:
        return {};
    case CompareState::Unique:
        text = Tr::tr("Missing in the other panel.");
        break;
    case CompareState::Newer:
        text = Tr::tr("Differs from the other panel and is newer.");
        break;
    case CompareState::Older:
        text = Tr::tr("Differs from the other panel and is older.");
        break;
    case CompareState::Different:
        text = Tr::tr("Differs from the other panel.");
        break;
    case CompareState::Same:
        text = content == ContentVerdict::Same ? Tr::tr("Same content as in the other panel.")
                                               : Tr::tr("Same size and time as in the other panel.");
        break;
    case CompareState::Conflict:
        text = Tr::tr("The other panel has a file where this is a folder, or the other way round.");
        break;
    }
    switch (content) {
    case ContentVerdict::Different:
        text += u' ' + Tr::tr("The content differs.");
        break;
    case ContentVerdict::Unknown:
        text += u' ' + Tr::tr("The content could not be checked.");
        break;
    case ContentVerdict::NotChecked:
    case ContentVerdict::Same:
        break;
    }
    if (!note.isEmpty())
        text += u' ' + note;
    return text;
}

QString CompareSummary::toString() const
{
    QStringList parts;
    if (unique > 0)
        parts.push_back(Tr::tr("%n only here", nullptr, unique));
    if (newer > 0)
        parts.push_back(Tr::tr("%n newer", nullptr, newer));
    if (older > 0)
        parts.push_back(Tr::tr("%n older", nullptr, older));
    if (different > 0)
        parts.push_back(Tr::tr("%n different", nullptr, different));
    if (same > 0)
        parts.push_back(Tr::tr("%n identical", nullptr, same));
    if (unverified > 0)
        parts.push_back(Tr::tr("%n not verified", nullptr, unverified));
    if (parts.isEmpty())
        return Tr::tr("nothing to compare");
    return parts.join(Tr::tr(", ", "list separator in the comparison summary"));
}

Result<CompareResult> compareListings(const CompareItems& left, const CompareItems& right,
                                      const CompareOptions& options, const ContentComparer& content,
                                      OperationContext& ctx)
{
    const Qt::CaseSensitivity cs = options.caseSensitivity;
    QHash<QString, qsizetype> rightByKey;
    rightByKey.reserve(right.size());
    for (qsizetype i = 0; i < right.size(); ++i)
        rightByKey.insert(foldKey(right[i].key, cs), i);

    struct Pair
    {
        qsizetype left;
        qsizetype right;
    };
    QList<Pair> pairs;
    QList<bool> rightPaired(right.size(), false);
    CompareResult out;
    for (qsizetype i = 0; i < left.size(); ++i) {
        const auto it = rightByKey.constFind(foldKey(left[i].key, cs));
        if (it == rightByKey.cend()) {
            if (!left[i].entry.isDirectory() || options.includeDirectories)
                out.left.insert(left[i].key, CompareMark{CompareState::Unique, {}, {}});
            continue;
        }
        rightPaired[*it] = true;
        pairs.push_back({i, *it});
    }
    for (qsizetype i = 0; i < right.size(); ++i) {
        if (!rightPaired[i] && (!right[i].entry.isDirectory() || options.includeDirectories))
            out.right.insert(right[i].key, CompareMark{CompareState::Unique, {}, {}});
    }

    auto sameSize = [](const Entry& a, const Entry& b) { return a.size < 0 || b.size < 0 || a.size == b.size; };
    qint64 checksNeeded = 0;
    if (options.compareContent) {
        for (const Pair& p : std::as_const(pairs)) {
            const Entry& a = left[p.left].entry;
            const Entry& b = right[p.right].entry;
            if (!a.isDirectory() && !b.isDirectory() && sameSize(a, b))
                ++checksNeeded;
        }
    }
    qint64 checksDone = 0;
    if (checksNeeded > 0)
        ctx.reportProgress(0, checksNeeded);

    for (const Pair& p : std::as_const(pairs)) {
        if (ctx.isCancelled())
            return Error::cancelled();
        const Entry& a = left[p.left].entry;
        const Entry& b = right[p.right].entry;
        CompareMark leftMark;
        CompareMark rightMark;
        if (a.isDirectory() && b.isDirectory())
            continue;
        if (a.isDirectory() != b.isDirectory()) {
            leftMark.state = rightMark.state = CompareState::Conflict;
        } else {
            bool differs = !sameSize(a, b);
            ContentVerdict verdict = ContentVerdict::NotChecked;
            QString note;
            if (!differs && options.compareContent) {
                verdict = ContentVerdict::Unknown;
                if (content) {
                    Result<ContentCheck> check = content(a, b, ctx);
                    if (check) {
                        verdict = check.value().verdict;
                        note = check.value().note;
                    } else if (check.error().isCancelled() || ctx.isCancelled()) {
                        return Error::cancelled();
                    } else {
                        note = check.error().message;
                        ++out.leftSummary.errors;
                        ++out.rightSummary.errors;
                    }
                }
                ctx.reportProgress(++checksDone, checksNeeded);
                if (verdict == ContentVerdict::Unknown) {
                    ++out.leftSummary.unverified;
                    ++out.rightSummary.unverified;
                }
            }
            const bool timesKnown = a.modified.isValid() && b.modified.isValid();
            const qint64 dt = timesKnown ? b.modified.msecsTo(a.modified) : 0; // > 0: left newer
            const bool timesDiffer =
                options.compareTime && timesKnown && std::llabs(dt) > qint64(options.timeToleranceSecs) * 1000;
            if (verdict == ContentVerdict::Different)
                differs = true;
            else if (verdict != ContentVerdict::Same && !differs)
                differs = timesDiffer; // no content answer: size and time decide

            if (!differs) {
                leftMark.state = rightMark.state = CompareState::Same;
            } else if (timesDiffer) {
                leftMark.state = dt > 0 ? CompareState::Newer : CompareState::Older;
                rightMark.state = dt > 0 ? CompareState::Older : CompareState::Newer;
            } else {
                leftMark.state = rightMark.state = CompareState::Different;
            }
            leftMark.content = rightMark.content = verdict;
            leftMark.note = rightMark.note = note;
        }
        out.left.insert(left[p.left].key, leftMark);
        out.right.insert(right[p.right].key, rightMark);
    }

    for (const CompareMark& m : std::as_const(out.left))
        count(out.leftSummary, m);
    for (const CompareMark& m : std::as_const(out.right))
        count(out.rightSummary, m);
    return out;
}

} // namespace s3fm
