#include "ui/HeaderColors.h"

#include <QFile>
#include <QHash>
#include <QStandardPaths>
#include <QTextStream>

namespace s3fm {

namespace {

using Groups = QHash<QString, QHash<QString, QString>>;

// Minimal reader for KConfig INI files. QSettings cannot be used: it mangles the
// "[Colors:Header][Inactive]" group names and turns "r,g,b" values into lists.
void readInto(const QString& path, Groups& groups)
{
    QFile file(path);
    if (!file.open(QIODevice::ReadOnly | QIODevice::Text))
        return;
    QTextStream in(&file);
    QString group;
    while (!in.atEnd()) {
        const QString line = in.readLine().trimmed();
        if (line.isEmpty() || line.startsWith(u'#'))
            continue;
        if (line.startsWith(u'[')) {
            group = line;
            continue;
        }
        const qsizetype eq = line.indexOf(u'=');
        if (eq <= 0)
            continue;
        QString key = line.left(eq).trimmed();
        // Drop KConfig flags such as "Key[$e]".
        if (const qsizetype flag = key.indexOf(QStringLiteral("[$")); flag > 0)
            key.truncate(flag);
        auto& values = groups[group];
        // Files come highest priority first: keep the first value seen.
        if (!values.contains(key))
            values.insert(key, line.mid(eq + 1).trimmed());
    }
}

QColor parseColor(const QString& value)
{
    const QStringList parts = value.split(u',');
    if (parts.size() < 3 || parts.size() > 4)
        return {};
    int rgba[4] = {0, 0, 0, 255};
    for (qsizetype i = 0; i < parts.size(); ++i) {
        bool ok = false;
        rgba[i] = parts[i].trimmed().toInt(&ok);
        if (!ok || rgba[i] < 0 || rgba[i] > 255)
            return {};
    }
    return QColor(rgba[0], rgba[1], rgba[2], rgba[3]);
}

QColor color(const Groups& groups, const QString& group, const QString& key)
{
    return parseColor(groups.value(group).value(key));
}

} // namespace

std::optional<HeaderColors> HeaderColors::fromKdeGlobals(const QStringList& files)
{
    Groups groups;
    for (const QString& path : files)
        readInto(path, groups);

    const QString active = QStringLiteral("[Colors:Header]");
    const QString inactive = QStringLiteral("[Colors:Header][Inactive]");
    HeaderColors c;
    c.background = color(groups, active, QStringLiteral("BackgroundNormal"));
    c.foreground = color(groups, active, QStringLiteral("ForegroundNormal"));
    if (!c.background.isValid() || !c.foreground.isValid())
        return std::nullopt;
    c.inactiveBackground = color(groups, inactive, QStringLiteral("BackgroundNormal"));
    if (!c.inactiveBackground.isValid())
        c.inactiveBackground = c.background;
    c.inactiveForeground = color(groups, inactive, QStringLiteral("ForegroundNormal"));
    if (!c.inactiveForeground.isValid())
        c.inactiveForeground = c.foreground;
    c.disabledForeground = color(groups, active, QStringLiteral("ForegroundInactive"));
    if (!c.disabledForeground.isValid()) {
        c.disabledForeground = c.foreground;
        c.disabledForeground.setAlphaF(0.5f);
    }
    return c;
}

std::optional<HeaderColors> HeaderColors::current()
{
    // Only Plasma's window decoration uses these colours; another desktop's title bar would not match.
    if (!qEnvironmentVariable("XDG_CURRENT_DESKTOP").contains(QStringLiteral("KDE"), Qt::CaseInsensitive))
        return std::nullopt;
    // User file first, then $XDG_CONFIG_DIRS (which on Plasma includes ~/.config/kdedefaults).
    return fromKdeGlobals(
        QStandardPaths::locateAll(QStandardPaths::GenericConfigLocation, QStringLiteral("kdeglobals")));
}

QPalette HeaderColors::apply(const QPalette& base) const
{
    QPalette p = base;
    const auto set = [&p](QPalette::ColorGroup g, const QColor& bg, const QColor& fg) {
        p.setColor(g, QPalette::Window, bg);
        p.setColor(g, QPalette::Button, bg);
        p.setColor(g, QPalette::WindowText, fg);
        p.setColor(g, QPalette::ButtonText, fg);
    };
    set(QPalette::Active, background, foreground);
    set(QPalette::Inactive, inactiveBackground, inactiveForeground);
    set(QPalette::Disabled, background, disabledForeground);
    return p;
}

} // namespace s3fm
