#pragma once

#include <QLocale>
#include <QStringList>

class QCoreApplication;

namespace s3fm {

// Installs the application's translators on `app` (which owns them), in this order:
//  1. English plural forms (s3fm_en): always, so "%n file(s)" reads "1 file" / "3 files";
//  2. the translation for `locale` (s3fm_<lang>), when one is embedded and it is not English;
//  3. Qt's own strings (qtbase_<lang>) for `locale`, when Qt's translations are installed.
// Translators installed later take precedence, so a real translation overrides the English
// plurals, and strings it lacks still get the English forms.
void installTranslations(QCoreApplication& app, const QLocale& locale = QLocale());

// Languages the UI can show, as translation file codes ("en", "de", "zh_CN", ...): English
// plus every embedded translation.
QStringList availableLanguages();

// The UI language chosen in Settings (QSettings "ui/language"); empty = follow the system.
QString languageSetting();
void setLanguageSetting(const QString& code);

// The locale to translate the UI for: the chosen language, or the system locale.
QLocale uiLocale();

// A language's name in that language, capitalized: "Deutsch", "Español", "日本語".
QString nativeLanguageName(const QLocale& locale);

} // namespace s3fm
