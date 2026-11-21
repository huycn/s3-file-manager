#include "core/Error.h"

#include <QCoreApplication>

namespace s3fm {

QString errorCodeName(ErrorCode code)
{
    switch (code) {
    case ErrorCode::Unknown:
        return QStringLiteral("Unknown");
    case ErrorCode::NotFound:
        return QStringLiteral("NotFound");
    case ErrorCode::AccessDenied:
        return QStringLiteral("AccessDenied");
    case ErrorCode::AlreadyExists:
        return QStringLiteral("AlreadyExists");
    case ErrorCode::NotEmpty:
        return QStringLiteral("NotEmpty");
    case ErrorCode::InvalidArgument:
        return QStringLiteral("InvalidArgument");
    case ErrorCode::Network:
        return QStringLiteral("Network");
    case ErrorCode::Timeout:
        return QStringLiteral("Timeout");
    case ErrorCode::Cancelled:
        return QStringLiteral("Cancelled");
    case ErrorCode::Unsupported:
        return QStringLiteral("Unsupported");
    case ErrorCode::Io:
        return QStringLiteral("Io");
    case ErrorCode::Authentication:
        return QStringLiteral("Authentication");
    case ErrorCode::Conflict:
        return QStringLiteral("Conflict");
    case ErrorCode::Throttled:
        return QStringLiteral("Throttled");
    }
    return QStringLiteral("Unknown");
}

Error Error::make(ErrorCode code, QString message, QString detail)
{
    Error e;
    e.code = code;
    e.message = std::move(message);
    e.detail = std::move(detail);
    e.retryable = code == ErrorCode::Network || code == ErrorCode::Timeout || code == ErrorCode::Throttled;
    return e;
}

Error Error::cancelled()
{
    return make(ErrorCode::Cancelled, QCoreApplication::translate("s3fm::Error", "Operation cancelled"));
}

QString Error::toString() const
{
    QString text = message.isEmpty() ? errorCodeName(code) : message;
    if (!detail.isEmpty())
        text += QStringLiteral(" (%1)").arg(detail);
    if (!requestId.isEmpty())
        text += QStringLiteral(" [request id: %1]").arg(requestId);
    return text;
}

} // namespace s3fm
