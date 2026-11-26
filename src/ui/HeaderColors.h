#pragma once

#include <QColor>
#include <QPalette>
#include <QStringList>

#include <optional>

class QWidget;

namespace s3fm {

// Colours of the window header (title bar + tool area), as the desktop paints them.
// Qt has no API for this, so on KDE Plasma it is read from the colour scheme's
// [Colors:Header] group in kdeglobals (a plain INI file; no KDE libraries involved).
// Elsewhere there is nothing to match, and the header simply keeps the normal palette.
struct HeaderColors
{
    QColor background;
    QColor foreground;
    QColor inactiveBackground;
    QColor inactiveForeground;
    QColor disabledForeground;

    // Header colours of the running desktop, or nullopt when it does not define any.
    static std::optional<HeaderColors> current();
    // Parses kdeglobals files, highest priority first (later files are only fallbacks).
    static std::optional<HeaderColors> fromKdeGlobals(const QStringList& files);

    // base with the window/button roles switched to the header colours, for each colour group.
    QPalette apply(const QPalette& base) const;
};

} // namespace s3fm
