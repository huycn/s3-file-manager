#pragma once

#include "core/Compare.h"

namespace s3fm {

class ProviderRegistry;

// Content checks for panel comparison (see ContentComparer):
//  * local - local: byte by byte;
//  * local - S3: MD5 of the file against a single-part ETag, otherwise the object's stored
//    checksums or multipart ETag (S3ObjectService::compareWithLocal, one or two HEAD requests);
//  * S3 - S3: equal ETags, otherwise stored checksums and single-part ETags from HEAD requests.
// Pairs that cannot be told apart without downloading (different part sizes, SSE-KMS/SSE-C)
// are Unknown. `registry` must outlive the comparer.
ContentComparer makeContentComparer(ProviderRegistry* registry);

// Byte-by-byte comparison of two local files.
Result<ContentCheck> compareLocalFiles(const QString& a, const QString& b, OperationContext& ctx);

} // namespace s3fm
