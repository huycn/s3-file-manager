#include "core/Error.h"

#include <QTest>

using namespace s3fm;

class TestResult : public QObject
{
    Q_OBJECT

private Q_SLOTS:
    void valueAndError()
    {
        Result<int> ok = 42;
        QVERIFY(ok.ok());
        QVERIFY(bool(ok));
        QCOMPARE(ok.value(), 42);

        Result<int> bad = Error::make(ErrorCode::NotFound, QStringLiteral("missing"));
        QVERIFY(!bad);
        QCOMPARE(bad.error().code, ErrorCode::NotFound);
        QCOMPARE(bad.error().message, QStringLiteral("missing"));
    }

    void moveOut()
    {
        Result<QString> r = QStringLiteral("hello");
        QString s = std::move(r).value();
        QCOMPARE(s, QStringLiteral("hello"));
    }

    void voidResult()
    {
        VoidResult ok;
        QVERIFY(ok.ok());
        VoidResult bad = Error::cancelled();
        QVERIFY(!bad);
        QVERIFY(bad.error().isCancelled());
    }

    void retryableClassification()
    {
        QVERIFY(Error::make(ErrorCode::Network, {}).retryable);
        QVERIFY(Error::make(ErrorCode::Throttled, {}).retryable);
        QVERIFY(!Error::make(ErrorCode::AccessDenied, {}).retryable);
    }

    void toStringIncludesDetails()
    {
        Error e =
            Error::make(ErrorCode::AccessDenied, QStringLiteral("Denied"), QStringLiteral("AccessDenied"));
        e.requestId = QStringLiteral("REQ1");
        QCOMPARE(e.toString(), QStringLiteral("Denied (AccessDenied) [request id: REQ1]"));
        QCOMPARE(Error::make(ErrorCode::Io, {}).toString(), QStringLiteral("Io"));
    }
};

QTEST_GUILESS_MAIN(TestResult)
#include "tst_result.moc"
