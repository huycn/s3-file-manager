#include "providers/s3/S3Errors.h"

#include "providers/s3/AwsConvert.h"

#include <QCoreApplication>

namespace s3fm::aws {

namespace {
QString tr(const char* text)
{
    return QCoreApplication::translate("s3fm::S3Errors", text);
}
} // namespace

Error toError(const Aws::Client::AWSError<Aws::S3::S3Errors>& error)
{
    using Aws::S3::S3Errors;
    const QString name = fromAws(error.GetExceptionName());
    const QString sdkMessage = fromAws(error.GetMessage());
    const int http = static_cast<int>(error.GetResponseCode());

    ErrorCode code = ErrorCode::Unknown;
    QString message;

    if (name == u"InvalidAccessKeyId" || name == u"SignatureDoesNotMatch" || name == u"ExpiredToken" ||
        name == u"InvalidToken" || name == u"TokenRefreshRequired" ||
        error.GetErrorType() == S3Errors::INVALID_ACCESS_KEY_ID ||
        error.GetErrorType() == S3Errors::SIGNATURE_DOES_NOT_MATCH ||
        error.GetErrorType() == S3Errors::UNRECOGNIZED_CLIENT ||
        error.GetErrorType() == S3Errors::MISSING_AUTHENTICATION_TOKEN ||
        error.GetErrorType() == S3Errors::INVALID_CLIENT_TOKEN_ID) {
        code = ErrorCode::Authentication;
        message = tr("Authentication failed: check the access key and secret");
    } else if (name == u"RequestTimeTooSkewed" || error.GetErrorType() == S3Errors::REQUEST_TIME_TOO_SKEWED) {
        code = ErrorCode::Authentication;
        message = tr("The computer's clock differs too much from the server's time");
    } else if (error.GetErrorType() == S3Errors::NO_SUCH_KEY || name == u"NoSuchKey") {
        code = ErrorCode::NotFound;
        message = tr("The object does not exist");
    } else if (error.GetErrorType() == S3Errors::NO_SUCH_BUCKET || name == u"NoSuchBucket") {
        code = ErrorCode::NotFound;
        message = tr("The bucket does not exist");
    } else if (error.GetErrorType() == S3Errors::NO_SUCH_UPLOAD || name == u"NoSuchUpload") {
        code = ErrorCode::NotFound;
        message = tr("The multipart upload does not exist");
    } else if (name == u"InvalidObjectState") { // archived (Glacier, Deep Archive): sent as 403
        code = ErrorCode::Conflict;
        message = tr("The object is archived; request a restore (File > Restore from Archive) and wait until "
                     "it is available");
    } else if (error.GetErrorType() == S3Errors::ACCESS_DENIED || name == u"AccessDenied" || http == 403) {
        code = ErrorCode::AccessDenied;
        message = tr("Access denied");
    } else if (error.GetErrorType() == S3Errors::BUCKET_ALREADY_EXISTS ||
               error.GetErrorType() == S3Errors::BUCKET_ALREADY_OWNED_BY_YOU) {
        code = ErrorCode::AlreadyExists;
        message = tr("The bucket already exists");
    } else if (name == u"BucketNotEmpty") {
        code = ErrorCode::NotEmpty;
        message = tr("The bucket is not empty");
    } else if (name == u"SlowDown" || error.GetErrorType() == S3Errors::THROTTLING ||
               error.GetErrorType() == S3Errors::SLOW_DOWN || http == 503 || http == 429) {
        code = ErrorCode::Throttled;
        message = tr("The service is throttling requests; try again later");
    } else if (error.GetErrorType() == S3Errors::NETWORK_CONNECTION) {
        code = ErrorCode::Network;
        message = tr("Network error: could not reach the endpoint");
    } else if (error.GetErrorType() == S3Errors::REQUEST_TIMEOUT || name == u"RequestTimeout") {
        code = ErrorCode::Timeout;
        message = tr("The request timed out");
    } else if (name == u"PermanentRedirect" || name == u"AuthorizationHeaderMalformed" || http == 301) {
        code = ErrorCode::InvalidArgument;
        message = tr("The bucket is in a different region than the one configured");
    } else if (name == u"NotImplemented" || http == 501) {
        code = ErrorCode::Unsupported;
        message = tr("The service does not support this operation");
    } else if (http == 404) {
        code = ErrorCode::NotFound;
        message = tr("Not found");
    } else if (http == 400 || error.GetErrorType() == S3Errors::INVALID_PARAMETER_VALUE ||
               error.GetErrorType() == S3Errors::INVALID_PARAMETER_COMBINATION ||
               error.GetErrorType() == S3Errors::MALFORMED_QUERY_STRING) {
        code = ErrorCode::InvalidArgument;
        message = tr("The request was rejected as invalid");
    } else {
        message = tr("S3 request failed");
    }

    QString detail = name.isEmpty() ? QString() : name;
    if (http > 0)
        detail += (detail.isEmpty() ? QString() : QStringLiteral(", ")) + QStringLiteral("HTTP %1").arg(http);
    if (!sdkMessage.isEmpty() && sdkMessage != name)
        detail += (detail.isEmpty() ? QString() : QStringLiteral(": ")) + sdkMessage;

    Error e = Error::make(code, message, detail);
    e.requestId = fromAws(error.GetRequestId());
    if (error.ShouldRetry())
        e.retryable = true;
    return e;
}

} // namespace s3fm::aws
