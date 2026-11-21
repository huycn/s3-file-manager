#pragma once

#include "core/Error.h"

#include <aws/core/client/AWSError.h>
#include <aws/s3/S3Errors.h>

namespace s3fm::aws {

// Translates an SDK error into an Error with a user-facing message, the S3 error
// code and HTTP status in `detail`, and the request id.
Error toError(const Aws::Client::AWSError<Aws::S3::S3Errors>& error);

} // namespace s3fm::aws
