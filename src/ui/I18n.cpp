#include "ui/I18n.h"

#include "core/Logging.h"

#include <QCoreApplication>
#include <QDir>
#include <QLibraryInfo>
#include <QSettings>
#include <QTranslator>

namespace s3fm {

namespace {

// Loads `baseName` for `locale` from `dir` and installs it on `app`, unless it resolves to
// `skipPath`. Returns the loaded file path, or an empty string when nothing was installed.
QString install(QCoreApplication& app, const QLocale& locale, const QString& baseName, const QString& dir,
                const QString& skipPath = {})
{
    auto* translator = new QTranslator(&app);
    if (!translator->load(locale, baseName, QStringLiteral("_"), dir) || translator->filePath() == skipPath) {
        delete translator;
        return {};
    }
    QCoreApplication::installTranslator(translator);
    qCDebug(lcUi) << "translation loaded:" << translator->filePath();
    return translator->filePath();
}

} // namespace

void installTranslations(QCoreApplication& app, const QLocale& locale)
{
    // Qt reads the layout direction from this string: each translation sets it to "LTR" or
    // "RTL" (Arabic), so mirrored layouts work even when Qt's own translations are missing.
    static_cast<void>(QT_TRANSLATE_NOOP("QGuiApplication", "QT_LAYOUT_DIRECTION"));

    const QString resources = QStringLiteral(":/i18n"); // RESOURCE_PREFIX of qt_add_translations
    const QString appName = QStringLiteral("s3fm");
    const QString plurals = install(app, QLocale(QLocale::English), appName, resources);
    // For English locales this resolves to the plurals file again: skip it.
    install(app, locale, appName, resources, plurals);
    install(app, locale, QStringLiteral("qtbase"), QLibraryInfo::path(QLibraryInfo::TranslationsPath));
}

QStringList availableLanguages()
{
    QStringList codes;
    const QStringList files =
        QDir(QStringLiteral(":/i18n")).entryList({QStringLiteral("s3fm_*.qm")}, QDir::Files);
    for (const QString& file : files)
        codes.push_back(file.mid(5, file.size() - 8)); // s3fm_<code>.qm; s3fm_en (plurals) gives "en"
    return codes;
}

QString languageSetting()
{
    return QSettings().value(QStringLiteral("ui/language")).toString();
}

void setLanguageSetting(const QString& code)
{
    QSettings settings;
    if (code.isEmpty())
        settings.remove(QStringLiteral("ui/language"));
    else
        settings.setValue(QStringLiteral("ui/language"), code);
}

QLocale uiLocale()
{
    const QString code = languageSetting();
    return code.isEmpty() ? QLocale::system() : QLocale(code);
}

QString nativeLanguageName(const QLocale& locale)
{
    // Qt names some default locales by their region ("American English", "español de España");
    // these translations are not regional.
    switch (locale.language()) {
    case QLocale::English:
        return QStringLiteral("English");
    case QLocale::Spanish:
        return QStringLiteral("Español");
    default:
        break;
    }
    QString name = locale.nativeLanguageName();
    if (!name.isEmpty())
        name.replace(0, 1, locale.toUpper(name.left(1))); // "español" -> "Español"
    return name;
}

} // namespace s3fm
