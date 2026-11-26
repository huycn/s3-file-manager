#pragma once

#include <QCollator>

namespace s3fm {

// Case-insensitive collator for the current locale that orders digit runs by value
// ("file2" < "file10"). In the C/POSIX locale Qt collates by code point and ignores numeric
// mode, so English collation is used there instead.
QCollator naturalCollator();

} // namespace s3fm
