#pragma once

#include <memory>

namespace s3fm {

// RAII guard for Aws::InitAPI / Aws::ShutdownAPI.
// Create exactly one, before any S3 client exists, and destroy it after the last
// S3 client has been destroyed (main() owns it).
class AwsSdkGuard
{
public:
    AwsSdkGuard();
    ~AwsSdkGuard();
    AwsSdkGuard(const AwsSdkGuard&) = delete;
    AwsSdkGuard& operator=(const AwsSdkGuard&) = delete;

private:
    struct Impl;
    std::unique_ptr<Impl> d;
};

} // namespace s3fm
