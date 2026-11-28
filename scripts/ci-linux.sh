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
        qt6-base qt6-declarative qt6-svg qt6-tools qtkeychain-qt6 aws-sdk-cpp-core aws-sdk-cpp-s3
    ;;
build)
    cmake --preset ci
    cmake --build --preset ci
    # translations/ must match the sources: a new or changed %n string needs its English forms.
    cmake --build --preset ci --target update_translations
    if ! git diff --exit-code -- translations/; then
        echo "translations/ is out of date: run the update_translations target and fill in the new forms" >&2
        exit 1
    fi
    # Translated strings keep their placeholders, tags and accelerators. Untranslated new
    # strings are allowed (they show in English); English plurals are checked by tst_i18n.
    python scripts/ts_tool.py check --allow-unfinished translations/s3fm_*.ts
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
