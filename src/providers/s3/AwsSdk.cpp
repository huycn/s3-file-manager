#include "providers/s3/AwsSdk.h"

#include "core/Logging.h"

#include <aws/core/Aws.h>
#include <aws/core/utils/logging/LogLevel.h>

namespace s3fm {

struct AwsSdkGuard::Impl
{
    Aws::SDKOptions options;
};

AwsSdkGuard::AwsSdkGuard() : d(std::make_unique<Impl>())
{
    d->options.loggingOptions.logLevel = qEnvironmentVariableIsSet("S3FM_AWS_TRACE")
                                             ? Aws::Utils::Logging::LogLevel::Trace
                                             : Aws::Utils::Logging::LogLevel::Off;
    Aws::InitAPI(d->options);
    qCDebug(lcS3) << "AWS SDK initialised";
}

AwsSdkGuard::~AwsSdkGuard()
{
    Aws::ShutdownAPI(d->options);
    qCDebug(lcS3) << "AWS SDK shut down";
}

} // namespace s3fm
