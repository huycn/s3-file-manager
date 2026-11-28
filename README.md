# S3 File Manager

A dual-panel (Commander-style) file manager for Amazon S3 and S3-compatible storage
(MinIO, Cloudflare R2, Wasabi, Backblaze B2, Ceph RGW…), built with C++20 and Qt 6.

> Status: early development. See [PLAN.md](PLAN.md) for the roadmap and progress.

## Features so far

- Two panels, Commander-style keyboard workflow (F3 view, F4 edit, F5 copy, F6 move,
  F7 new folder, F8 delete, Tab to switch panels, Insert/Space to select; F1 lists all keys)
- Local disk and S3 in either panel; copy and move in any direction
  (local ↔ S3, S3 ↔ S3 server-side or across connections)
- Transfer queue (Ctrl+J): several jobs and files in parallel, pause/resume/cancel,
  reorder, retry failed items, bandwidth limit; interrupted transfers resume after a
  restart (even a crash) from the last completed multipart part or downloaded byte;
  integrity checks (Content-MD5, ETag/MD5, size); conflict choices (overwrite, skip,
  keep both, if newer, if size differs, apply to all); include/exclude filters
- S3 connections for Amazon S3, MinIO, Cloudflare R2, Wasabi, Backblaze B2,
  DigitalOcean Spaces or any S3-compatible endpoint; secrets in the OS keychain;
  AWS profiles (SSO, assume-role, credential_process) can be imported from `~/.aws`
- Large uploads and copies use parallel multipart transfers; paginated listings
  handle big prefixes
- Object properties with tabs to edit metadata, tags, storage class, encryption
  (SSE-S3, SSE-KMS, SSE-C with keys in the keychain), ACLs and Object Lock, and to
  compare stored checksums with a local file; the same changes in bulk (Ctrl+E)
- Share links (presigned GET/PUT URLs, with QR code), requester-pays buckets
- Versioning: show all versions and delete markers, browse a bucket as of a point in
  time, version history (download, make current, delete, undelete); restore from
  Glacier / Deep Archive; find and abort incomplete multipart uploads
- Internal viewer, edit-and-upload with conflict detection, copy S3 URI / HTTP URL / ARN
- The address bar accepts `s3://bucket/key` and pasted `https://…amazonaws.com/…` URLs
- Find Files (Alt+F7): recursive search by name (wildcards or regular expression), path,
  size, date and storage class; on S3 a path prefix is filtered by the server. Results open
  in the panel, where every operation works on them (Ctrl+G goes to a file's folder)

## Using it

1. Start the app and open **Connections → Manage Connections…** (Ctrl+K).
2. Add a connection (pick the provider preset), enter the keys, press
   **Test Connection**, then **Open**.
3. Press Alt+F1 / Alt+F2 to switch either panel between local places and S3 connections.

## Building

### Requirements

| Dependency          | Version | Linux (Arch)                                   | Windows                      |
|---------------------|---------|------------------------------------------------|------------------------------|
| C++20 compiler      |         | GCC ≥ 13 or Clang ≥ 17                         | MSVC 2022                    |
| CMake + Ninja       | ≥ 3.25  | `cmake ninja`                                  | bundled with Visual Studio   |
| Qt                  | ≥ 6.8   | `qt6-base qt6-svg`                             | Qt online installer          |
| AWS SDK for C++ (S3)| 1.11    | `aws-sdk-cpp-core aws-sdk-cpp-s3`              | vcpkg (`vcpkg.json`)         |
| QtKeychain          | ≥ 0.14  | `qtkeychain-qt6`                               | fetched automatically        |

On Arch Linux:

```sh
sudo pacman -S --needed base-devel cmake ninja qt6-base qt6-svg qtkeychain-qt6 \
    aws-sdk-cpp-core aws-sdk-cpp-s3
```

If QtKeychain is not installed, CMake downloads and builds it (disable with
`-DS3FM_FETCH_QTKEYCHAIN=OFF`).

### Linux

```sh
cmake --preset debug
cmake --build --preset debug
ctest --preset debug          # unit + UI tests (integration tests skip without MinIO)
./build/debug/src/s3fm
```

Other presets: `release`, `asan-ubsan`, `ci` (warnings as errors).

### Windows

From a *x64 Native Tools Command Prompt for VS 2022*, with Qt installed and
`VCPKG_ROOT` pointing to a vcpkg checkout:

```bat
set CMAKE_PREFIX_PATH=C:\Qt\6.8.3\msvc2022_64
cmake --preset windows-vcpkg
cmake --build --preset windows-vcpkg
ctest --preset windows-vcpkg
```

vcpkg builds the AWS SDK (S3 only) from `vcpkg.json` on the first configure.

## Development

### Local S3 sandbox

`scripts/dev-minio.sh` runs MinIO in Podman or Docker and seeds test buckets:

```sh
scripts/dev-minio.sh start                 # http://127.0.0.1:9000, console on :9001
eval "$(scripts/dev-minio.sh env)"         # exports S3FM_TEST_* variables
ctest --preset integration                 # integration tests against MinIO
scripts/dev-minio.sh stop
```

Credentials: `s3fmadmin` / `s3fmadmin-secret`. Buckets: `s3fm-test` (sample tree),
`s3fm-versioned` (versioning on), `s3fm-locked` (object lock).

### Minimum Qt check

Linux CI builds with Arch's current Qt; only the Windows job uses the minimum supported
version (6.8). To catch newer-Qt APIs before pushing, build and run the unit + UI tests
against that version in a container (Podman or Docker; Qt is cached between runs):

```sh
scripts/check-qt-min.sh        # all errors in one pass; logs in build/qt-min/
```

### Code style

```sh
cmake --build --preset debug --target format        # clang-format in place
cmake --build --preset debug --target format-check
cmake --build --preset debug --target tidy          # clang-tidy (needs run-clang-tidy)
```

### Logging

Each module has a Qt logging category (`s3fm.core`, `s3fm.s3`, `s3fm.transfer`,
`s3fm.connections`, `s3fm.ui`). Enable debug output with, for example:

```sh
QT_LOGGING_RULES="s3fm.*.debug=true" ./build/debug/src/s3fm
```

Set `S3FM_AWS_TRACE=1` to enable the AWS SDK's own trace log.

## License

[MIT](LICENSE)
