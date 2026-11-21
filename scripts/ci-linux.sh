#!/usr/bin/env bash
# Install build dependencies on Arch Linux and build/test the project.
# Used by GitHub Actions (archlinux container); also handy for local clean builds.
#
#   scripts/ci-linux.sh deps          install packages (needs root)
#   scripts/ci-linux.sh build         configure + build with the `ci` preset
#   scripts/ci-linux.sh test [label]  run ctest (optionally only one label)
set -euo pipefail

case "${1:-}" in
deps)
    pacman -Syu --noconfirm --needed base-devel git cmake ninja curl python \
        qt6-base qt6-svg qtkeychain-qt6 aws-sdk-cpp-core aws-sdk-cpp-s3
    ;;
build)
    cmake --preset ci
    cmake --build --preset ci
    ;;
test)
    if [[ -n "${2:-}" ]]; then
        ctest --preset ci -L "$2"
    else
        ctest --preset ci -LE integration
    fi
    ;;
*)
    sed -n '2,8p' "$0"
    exit 1
    ;;
esac
