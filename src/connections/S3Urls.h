#pragma once

#include "connections/ConnectionProfile.h"
#include "core/Location.h"

namespace s3fm::s3urls {

// "s3://bucket/key" (the form used by the AWS CLI and SDKs; no connection id).
QString s3Uri(const Location& location);

// "arn:aws:s3:::bucket/key". Empty for non-AWS connections.
QString arn(const Location& location, const ConnectionProfile& profile);

// Public HTTPS (or the endpoint's scheme) URL of a bucket/object, percent-encoded.
// `bucketRegion` is used for AWS (falls back to the profile region).
QString objectUrl(const Location& location, const ConnectionProfile& profile,
                  const QString& bucketRegion = {});

// True when `bucket` can be used as a DNS label in virtual-hosted URLs.
bool isDnsCompatibleBucket(const QString& bucket);

} // namespace s3fm::s3urls
