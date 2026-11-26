#include "ui/HeaderColors.h"

#include <QFile>
#include <QTemporaryDir>
#include <QTest>

using namespace s3fm;
using namespace Qt::StringLiterals;

class TestHeaderColors : public QObject
{
    Q_OBJECT

private:
    QTemporaryDir m_dir;

    QString write(const QString& name, const QByteArray& content)
    {
        const QString path = m_dir.filePath(name);
        QFile f(path);
        if (!f.open(QIODevice::WriteOnly | QIODevice::Truncate))
            qFatal("cannot write %s", qPrintable(path));
        f.write(content);
        return path;
    }

private Q_SLOTS:
    void readsActiveAndInactiveGroups()
    {
        const QString file = write(u"a"_s, "[Colors:Window]\nBackgroundNormal=1,2,3\n"
                                           "[Colors:Header]\nBackgroundNormal=41,44,48\n"
                                           "ForegroundNormal=252,252,252\nForegroundInactive=161,169,177\n"
                                           "[Colors:Header][Inactive]\nBackgroundNormal=32,35,38\n"
                                           "ForegroundNormal=200,200,200\n");
        const auto c = HeaderColors::fromKdeGlobals({file});
        QVERIFY(c);
        QCOMPARE(c->background, QColor(41, 44, 48));
        QCOMPARE(c->foreground, QColor(252, 252, 252));
        QCOMPARE(c->inactiveBackground, QColor(32, 35, 38));
        QCOMPARE(c->inactiveForeground, QColor(200, 200, 200));
        QCOMPARE(c->disabledForeground, QColor(161, 169, 177));
    }

    void inactiveFallsBackToActive()
    {
        const QString file =
            write(u"b"_s, "[Colors:Header]\nBackgroundNormal=10,20,30\nForegroundNormal=200,210,220\n");
        const auto c = HeaderColors::fromKdeGlobals({file});
        QVERIFY(c);
        QCOMPARE(c->inactiveBackground, QColor(10, 20, 30));
        QCOMPARE(c->inactiveForeground, QColor(200, 210, 220));
    }

    void earlierFilesWin()
    {
        const QString user = write(u"user"_s, "[Colors:Header]\nBackgroundNormal=1,1,1\n");
        const QString system =
            write(u"system"_s, "[Colors:Header]\nBackgroundNormal=9,9,9\nForegroundNormal=8,8,8\n");
        const auto c = HeaderColors::fromKdeGlobals({user, system});
        QVERIFY(c);
        QCOMPARE(c->background, QColor(1, 1, 1));
        QCOMPARE(c->foreground, QColor(8, 8, 8));
    }

    void missingOrInvalidGivesNothing()
    {
        QVERIFY(!HeaderColors::fromKdeGlobals({}));
        QVERIFY(!HeaderColors::fromKdeGlobals({m_dir.filePath(u"absent"_s)}));
        const QString noHeader =
            write(u"c"_s, "[Colors:Window]\nBackgroundNormal=1,2,3\nForegroundNormal=4,5,6\n");
        QVERIFY(!HeaderColors::fromKdeGlobals({noHeader}));
        const QString bad =
            write(u"d"_s, "[Colors:Header]\nBackgroundNormal=1,2\nForegroundNormal=4,5,600\n");
        QVERIFY(!HeaderColors::fromKdeGlobals({bad}));
    }

    void paletteUsesHeaderColorsPerGroup()
    {
        HeaderColors c{QColor(1, 1, 1), QColor(2, 2, 2), QColor(3, 3, 3), QColor(4, 4, 4), QColor(5, 5, 5)};
        const QPalette p = c.apply(QPalette());
        QCOMPARE(p.color(QPalette::Active, QPalette::Window), QColor(1, 1, 1));
        QCOMPARE(p.color(QPalette::Active, QPalette::ButtonText), QColor(2, 2, 2));
        QCOMPARE(p.color(QPalette::Inactive, QPalette::Button), QColor(3, 3, 3));
        QCOMPARE(p.color(QPalette::Inactive, QPalette::WindowText), QColor(4, 4, 4));
        QCOMPARE(p.color(QPalette::Disabled, QPalette::WindowText), QColor(5, 5, 5));
        // Text fields keep their normal colours.
        QCOMPARE(p.color(QPalette::Active, QPalette::Base),
                 QPalette().color(QPalette::Active, QPalette::Base));
    }
};

QTEST_MAIN(TestHeaderColors)
#include "tst_headercolors.moc"
