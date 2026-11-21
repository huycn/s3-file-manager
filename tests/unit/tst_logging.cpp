#include "core/Logging.h"

#include <QTest>

class TestLogging : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void categoriesHaveExpectedNames()
    {
        QCOMPARE(QByteArray(lcCore().categoryName()), QByteArray("s3fm.core"));
        QCOMPARE(QByteArray(lcS3().categoryName()), QByteArray("s3fm.s3"));
        QCOMPARE(QByteArray(lcTransfer().categoryName()), QByteArray("s3fm.transfer"));
        QCOMPARE(QByteArray(lcConnections().categoryName()), QByteArray("s3fm.connections"));
        QCOMPARE(QByteArray(lcUi().categoryName()), QByteArray("s3fm.ui"));
    }

    void debugIsOffByDefault() { QVERIFY(!lcS3().isDebugEnabled()); }
};

QTEST_GUILESS_MAIN(TestLogging)
#include "tst_logging.moc"
