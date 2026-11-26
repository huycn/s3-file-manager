#include "core/ProviderRegistry.h"
#include "models/EntryListModel.h"
#include "providers/local/LocalProvider.h"
#include "ui/I18n.h"
#include "ui/dialogs/RestoreArchiveDialog.h"
#include "ui/dialogs/SettingsDialog.h"
#include "ui/mainwindow/MainWindow.h"
#include "ui/panel/PanelWidget.h"

#include <QCollator>
#include <QComboBox>
#include <QDir>
#include <QFile>
#include <QGuiApplication>
#include <QLabel>
#include <QMenu>
#include <QMenuBar>
#include <QSettings>
#include <QSpinBox>
#include <QStandardPaths>
#include <QTemporaryDir>
#include <QTest>
#include <QTranslator>
#include <QXmlStreamReader>

using namespace s3fm;
using namespace Qt::StringLiterals;

class TestI18n : public QObject
{
    Q_OBJECT

private:
    static QString plural(const char* context, const char* text, int n)
    {
        return QCoreApplication::translate(context, text, nullptr, n);
    }

private Q_SLOTS:
    void initTestCase()
    {
        QStandardPaths::setTestModeEnabled(true); // the language setting goes to a test location
        QCoreApplication::setOrganizationName(QStringLiteral("s3fm-tests"));
        QCoreApplication::setApplicationName(QStringLiteral("tst_i18n"));
        QSettings().clear();
    }

    void cleanup()
    {
        // Translators are children of the application: remove them between test functions.
        const auto translators = qApp->findChildren<QTranslator*>(Qt::FindDirectChildrenOnly);
        for (QTranslator* t : translators) {
            QCoreApplication::removeTranslator(t);
            delete t;
        }
        QCoreApplication::processEvents(); // apply the LanguageChange (layout direction back to LTR)
    }

    void withoutTranslationsTheSourceTextShows()
    {
        QCOMPARE(plural("s3fm::PanelWidget", "%n file(s)", 1), QStringLiteral("1 file(s)"));
    }

    void englishPluralForms()
    {
        installTranslations(*qApp, QLocale(QLocale::English, QLocale::UnitedStates));
        QCOMPARE(plural("s3fm::PanelWidget", "%n file(s)", 0), QStringLiteral("0 files"));
        QCOMPARE(plural("s3fm::PanelWidget", "%n file(s)", 1), QStringLiteral("1 file"));
        QCOMPARE(plural("s3fm::PanelWidget", "%n file(s)", 3), QStringLiteral("3 files"));
        // Strings of non-QObject code (Q_DECLARE_TR_FUNCTIONS contexts) resolve too.
        QCOMPARE(plural("s3fm::LocalProvider", "%n item(s) could not be deleted", 1),
                 QStringLiteral("1 item could not be deleted"));
        // Forms that are not just "(s)" -> "" / "s".
        QCOMPARE(plural("s3fm::MainWindow", "Cancelled; %n item(s) were deleted already", 1),
                 QStringLiteral("Cancelled; 1 item was deleted already"));
    }

    void otherLocalesKeepEnglishPlurals()
    {
        // No Greek translation exists: English plural forms still apply.
        installTranslations(*qApp, QLocale(QLocale::Greek, QLocale::Greece));
        QCOMPARE(plural("s3fm::PanelWidget", "%n file(s)", 1), QStringLiteral("1 file"));
    }

    void languageForSystemLocale_data()
    {
        QTest::addColumn<QLocale>("locale");
        QTest::addColumn<Qt::LayoutDirection>("direction");
        QTest::newRow("zh_CN") << QLocale(QLocale::Chinese, QLocale::China) << Qt::LeftToRight;
        QTest::newRow("hi") << QLocale(QLocale::Hindi, QLocale::India) << Qt::LeftToRight;
        QTest::newRow("es") << QLocale(QLocale::Spanish, QLocale::Spain) << Qt::LeftToRight;
        QTest::newRow("es_MX") << QLocale(QLocale::Spanish, QLocale::Mexico) << Qt::LeftToRight;
        QTest::newRow("ar") << QLocale(QLocale::Arabic, QLocale::Egypt) << Qt::RightToLeft;
        QTest::newRow("fr") << QLocale(QLocale::French, QLocale::France) << Qt::LeftToRight;
        QTest::newRow("fr_CA") << QLocale(QLocale::French, QLocale::Canada) << Qt::LeftToRight;
        QTest::newRow("bn") << QLocale(QLocale::Bengali, QLocale::Bangladesh) << Qt::LeftToRight;
        QTest::newRow("pt_BR") << QLocale(QLocale::Portuguese, QLocale::Brazil) << Qt::LeftToRight;
        QTest::newRow("pt_PT") << QLocale(QLocale::Portuguese, QLocale::Portugal) << Qt::LeftToRight;
        QTest::newRow("ru") << QLocale(QLocale::Russian, QLocale::Russia) << Qt::LeftToRight;
        QTest::newRow("de") << QLocale(QLocale::German, QLocale::Germany) << Qt::LeftToRight;
        QTest::newRow("de_AT") << QLocale(QLocale::German, QLocale::Austria) << Qt::LeftToRight;
        QTest::newRow("ja") << QLocale(QLocale::Japanese, QLocale::Japan) << Qt::LeftToRight;
        QTest::newRow("ko") << QLocale(QLocale::Korean, QLocale::SouthKorea) << Qt::LeftToRight;
        QTest::newRow("it") << QLocale(QLocale::Italian, QLocale::Italy) << Qt::LeftToRight;
        QTest::newRow("nl") << QLocale(QLocale::Dutch, QLocale::Netherlands) << Qt::LeftToRight;
        QTest::newRow("nl_BE") << QLocale(QLocale::Dutch, QLocale::Belgium) << Qt::LeftToRight;
        QTest::newRow("pl") << QLocale(QLocale::Polish, QLocale::Poland) << Qt::LeftToRight;
        QTest::newRow("ms") << QLocale(QLocale::Malay, QLocale::Malaysia) << Qt::LeftToRight;
        QTest::newRow("vi") << QLocale(QLocale::Vietnamese, QLocale::Vietnam) << Qt::LeftToRight;
    }

    void languageForSystemLocale()
    {
        QFETCH(QLocale, locale);
        QFETCH(Qt::LayoutDirection, direction);
        installTranslations(*qApp, locale);
        const QString view = QCoreApplication::translate("s3fm::MainWindow", "&View");
        QVERIFY2(view != QStringLiteral("&View"), qPrintable(locale.name()));
        // Installing a translator posts LanguageChange; the application then takes the
        // layout direction from the translated QT_LAYOUT_DIRECTION.
        QCoreApplication::processEvents();
        QCOMPARE(QGuiApplication::layoutDirection(), direction);
    }

    void menuAcceleratorsAreUnique_data()
    {
        QTest::addColumn<QLocale>("locale");
        QTest::newRow("en") << QLocale(QLocale::English);
        const QDir dir(QStringLiteral(S3FM_SOURCE_DIR "/translations"));
        const QStringList files = dir.entryList({QStringLiteral("s3fm_*.ts")});
        for (const QString& file : files) {
            const QString name = file.mid(5, file.size() - 8); // s3fm_<name>.ts
            if (name != u"en")
                QTest::newRow(qPrintable(name)) << QLocale(name);
        }
    }

    void menuAcceleratorsAreUnique()
    {
        // Alt+letter must reach one item: no two menu titles, and no two items of one menu,
        // may share a mnemonic.
        QFETCH(QLocale, locale);
        installTranslations(*qApp, locale);
        ProviderRegistry registry;
        registry.setLocalProvider(std::make_shared<LocalProvider>());
        MainWindow window(&registry);
        const auto checkUnique = [](const QString& where, const QList<QAction*>& actions) {
            QHash<QString, QString> seen;
            for (const QAction* a : actions) {
                const QString key = QKeySequence::mnemonic(a->text()).toString().toLower();
                if (key.isEmpty())
                    continue;
                QVERIFY2(!seen.contains(key), qPrintable(QStringLiteral("%1: \"%2\" and \"%3\" share %4")
                                                             .arg(where, seen.value(key), a->text(), key)));
                seen.insert(key, a->text());
            }
        };
        checkUnique(QStringLiteral("menu bar"), window.menuBar()->actions());
        const auto menus = window.menuBar()->findChildren<QMenu*>();
        QVERIFY(menus.size() >= 7);
        for (const QMenu* menu : menus)
            checkUnique(menu->title(), menu->actions());
    }

    void availableLanguages()
    {
        const QStringList codes = s3fm::availableLanguages();
        // English (source + plurals) and every translation in translations/.
        const QStringList files =
            QDir(QStringLiteral(S3FM_SOURCE_DIR "/translations")).entryList({QStringLiteral("s3fm_*.ts")});
        QCOMPARE(codes.size(), files.size());
        QVERIFY(codes.contains(u"en"_s));
        QVERIFY(codes.contains(u"zh_CN"_s));
        QCOMPARE(nativeLanguageName(QLocale(u"en"_s)), u"English"_s);
        QCOMPARE(nativeLanguageName(QLocale(u"de"_s)), u"Deutsch"_s);
        QCOMPARE(nativeLanguageName(QLocale(u"es"_s)), u"Español"_s); // capitalized
    }

    void settingsLanguageSelector()
    {
        QSettings().remove(u"ui/language"_s);
        SettingsDialog dialog;
        auto* combo = dialog.findChild<QComboBox*>(u"language"_s);
        QVERIFY(combo);
        // "System default" first, then every language, alphabetically by its own name.
        QCOMPARE(combo->currentIndex(), 0);
        QVERIFY(combo->itemData(0).toString().isEmpty());
        QCOMPARE(combo->count(), s3fm::availableLanguages().size() + 1);
        QStringList names;
        for (int i = 1; i < combo->count(); ++i) {
            names.push_back(combo->itemText(i));
        }
        QStringList sorted = names;
        QCollator collator;
        std::sort(sorted.begin(), sorted.end(),
                  [&collator](const QString& a, const QString& b) { return collator.compare(a, b) < 0; });
        QCOMPARE(names, sorted);

        // The choice round-trips through the setting and selects the translation locale.
        combo->setCurrentIndex(combo->findData(u"fr"_s));
        QCOMPARE(dialog.language(), u"fr"_s);
        setLanguageSetting(dialog.language());
        QCOMPARE(uiLocale().language(), QLocale::French);
        SettingsDialog reopened;
        QCOMPARE(reopened.language(), u"fr"_s);
        setLanguageSetting({});
        QCOMPARE(uiLocale(), QLocale::system());
    }

    void russianPluralForms()
    {
        // Three forms: 1, 21 / 2–4, 22 / 0, 5–20, 25. Each must pick a different translation.
        installTranslations(*qApp, QLocale(QLocale::Russian, QLocale::Russia));
        const auto files = [](int n) { return plural("s3fm::PanelWidget", "%n file(s)", n); };
        QCOMPARE(files(21), files(1).replace(u'1', QStringLiteral("21")));
        QCOMPARE(files(22), files(2).replace(u'2', QStringLiteral("22")));
        QCOMPARE(files(25), files(5).replace(u'5', QStringLiteral("25")));
        QVERIFY(files(1).section(u' ', 1) != files(2).section(u' ', 1));
        QVERIFY(files(2).section(u' ', 1) != files(5).section(u' ', 1));
        QCOMPARE(files(11).section(u' ', 1), files(5).section(u' ', 1)); // 11 is "many", not "one"
    }

    void polishPluralForms()
    {
        // Three forms: 1 / 2–4, 22–24 / 0, 5–21, 25. Unlike Russian, 21 is "many".
        installTranslations(*qApp, QLocale(QLocale::Polish, QLocale::Poland));
        const auto word = [](int n) { return plural("s3fm::PanelWidget", "%n file(s)", n).section(u' ', 1); };
        QVERIFY(word(1) != word(2));
        QVERIFY(word(2) != word(5));
        QCOMPARE(word(22), word(2));
        QCOMPARE(word(21), word(5));
        QCOMPARE(word(12), word(5));
    }

    void panelStatusLine()
    {
        installTranslations(*qApp, QLocale(QLocale::English));
        QTemporaryDir dir;
        QVERIFY(QDir(dir.path()).mkdir(QStringLiteral("folder")));
        QFile file(dir.filePath(QStringLiteral("file.txt")));
        QVERIFY(file.open(QIODevice::WriteOnly));
        file.close();

        ProviderRegistry registry;
        registry.setLocalProvider(std::make_shared<LocalProvider>());
        PanelWidget panel(&registry);
        panel.setLocation(Location::local(dir.path()));
        QVERIFY(QTest::qWaitFor([&] { return !panel.model()->isLoading(); }, 5000));
        auto* status = panel.findChild<QLabel*>(QStringLiteral("status"));
        QVERIFY(status);
        QVERIFY2(status->text().startsWith(QStringLiteral("1 folder, 1 file, ")), qPrintable(status->text()));
    }

    void spinBoxSuffixFollowsValue()
    {
        installTranslations(*qApp, QLocale(QLocale::English));
        RestoreArchiveDialog dialog(QStringLiteral("a.txt"), QString());
        auto* days = dialog.findChild<QSpinBox*>(QStringLiteral("days"));
        QVERIFY(days);
        QCOMPARE(days->suffix(), QStringLiteral(" days")); // default 7
        days->setValue(1);
        QCOMPARE(days->suffix(), QStringLiteral(" day"));
    }

    void noHandWrittenPlurals()
    {
        // "(s)" belongs in %n messages only (Qt picks the form); elsewhere it shows literally.
        // Allowed: "(s)" meaning seconds.
        const QStringList allowed = {QStringLiteral("Max age (s)")};
        QFile ts(QStringLiteral(S3FM_SOURCE_DIR "/translations/s3fm_es.ts"));
        QVERIFY(ts.open(QIODevice::ReadOnly));
        QXmlStreamReader xml(&ts);
        bool numerus = false;
        while (!xml.atEnd()) {
            if (xml.readNext() != QXmlStreamReader::StartElement)
                continue;
            if (xml.name() == u"message") {
                numerus = xml.attributes().value(u"numerus") == u"yes";
            } else if (xml.name() == u"source") {
                const QString source = xml.readElementText();
                QVERIFY2(numerus || !source.contains(u"(s)") || allowed.contains(source), qPrintable(source));
            }
        }
        QVERIFY(!xml.hasError());
    }

    void pluralsFileIsComplete()
    {
        // Every %n string needs its English forms: after adding one, run the
        // update_translations target and fill in translations/s3fm_en.ts.
        QFile ts(QStringLiteral(S3FM_SOURCE_DIR "/translations/s3fm_en.ts"));
        QVERIFY(ts.open(QIODevice::ReadOnly));
        const QByteArray content = ts.readAll();
        QVERIFY(content.contains("numerus=\"yes\""));
        QVERIFY2(!content.contains("type=\"unfinished\""),
                 "translations/s3fm_en.ts has unfinished plural forms");
        QVERIFY2(!content.contains("<numerusform></numerusform>"),
                 "translations/s3fm_en.ts has empty plural forms");
    }
};

QTEST_MAIN(TestI18n)
#include "tst_i18n.moc"
