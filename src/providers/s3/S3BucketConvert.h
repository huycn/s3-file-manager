#pragma once

// Conversions between the bucket setting values (S3BucketTypes.h) and SDK models.
// Separate from S3BucketService so unit tests can check what is sent without a server.

#include "providers/s3/S3BucketTypes.h"

#include <aws/core/client/AWSError.h>
#include <aws/s3/S3Errors.h>
#include <aws/s3/model/CORSRule.h>
#include <aws/s3/model/LifecycleRule.h>
#include <aws/s3/model/RoutingRule.h>
#include <aws/s3/model/WebsiteConfiguration.h>

namespace s3fm::aws {

Aws::S3::Model::LifecycleRule toSdk(const LifecycleRule& rule);
LifecycleRule fromSdk(const Aws::S3::Model::LifecycleRule& rule);

Aws::S3::Model::CORSRule toSdk(const CorsRule& rule);
CorsRule fromSdk(const Aws::S3::Model::CORSRule& rule);

Aws::S3::Model::RoutingRule toSdk(const RoutingRule& rule);
RoutingRule fromSdk(const Aws::S3::Model::RoutingRule& rule);
Aws::S3::Model::WebsiteConfiguration toSdk(const WebsiteConfig& config);

// True for the "nothing configured" errors of bucket sub-resources
// (NoSuchLifecycleConfiguration, NoSuchBucketPolicy, …), which mean "empty".
bool isNotConfigured(const Aws::Client::AWSError<Aws::S3::S3Errors>& error);

} // namespace s3fm::aws
