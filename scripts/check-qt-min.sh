#!/usr/bin/env bash
# Build and run the unit + UI tests against the minimum supported Qt, in an Arch container.
# Linux CI uses Arch's current Qt; only Windows CI builds with the minimum. Run this before
# pushing changes that may use newer Qt APIs, to see every incompatibility in one pass.
#
#   scripts/check-qt-min.sh          build with -k 0, then run ctest -LE integration
#   scripts/check-qt-min.sh clean    delete the cached Qt and pacman volumes
#
# Logs go to build/qt-min/{configure,build,test}.log.
#
# Environment overrides:
#   S3FM_CONTAINER_ENGINE  podman | docker (default: podman if installed, else docker)
#   S3FM_QT_MIN_VERSION    Qt version (default: the one the Windows CI job installs)
set -euo pipefail

cd "$(dirname "$0")/.."

QT_VOLUME="s3fm-qt-min"
PACMAN_VOLUME="s3fm-qt-min-pacman"
OUT="build/qt-min"

engine() {
    local e="${S3FM_CONTAINER_ENGINE:-}"
    if [[ -z "$e" ]]; then
        if command -v podman >/dev/null 2>&1; then e=podman; else e=docker; fi
    fi
    if [[ "$e" == podman && -z "${CONTAINER_HOST:-}" && "${DOCKER_HOST:-}" == unix://* ]]; then
        # A podman API socket is configured through DOCKER_HOST: talk to it remotely.
        podman --remote --url "$DOCKER_HOST" "$@"
    else
        "$e" "$@"
    fi
}

if [[ "${1:-}" == clean ]]; then
    engine volume rm -f "$QT_VOLUME" "$PACMAN_VOLUME"
    exit 0
elif [[ -n "${1:-}" ]]; then
    sed -n '2,13p' "$0"
    exit 1
fi

QT_VERSION="${S3FM_QT_MIN_VERSION:-$(sed -n "s/^ *version: '\([0-9.]*\)'.*/\1/p" .github/workflows/ci.yml | head -1)}"
if [[ -z "$QT_VERSION" ]]; then
    echo "Could not read the Qt version from .github/workflows/ci.yml; set S3FM_QT_MIN_VERSION" >&2
    exit 1
fi

mkdir -p "$OUT"
rm -f "$OUT"/*.log
echo "Checking against Qt $QT_VERSION (logs in $OUT/)"

# The source tree is mounted read-only and copied, so the host build trees are untouched.
# QtKeychain is not installed: Arch's package is built against Arch's Qt, so CMake fetches it.
engine run --rm \
    -v "$PWD:/src:ro" -v "$PWD/$OUT:/out" \
    -v "$QT_VOLUME:/opt/qt" -v "$PACMAN_VOLUME:/var/cache/pacman/pkg" \
    -e QT_VERSION="$QT_VERSION" \
    docker.io/library/archlinux:latest bash -c '
set -u
pacman -Syu --noconfirm --needed base-devel git cmake ninja python aws-sdk-cpp-core aws-sdk-cpp-s3 \
    libxkbcommon libgl fontconfig freetype2 dbus libxcb xcb-util-cursor >/out/pacman.log 2>&1 ||
    { echo "pacman failed, see /out/pacman.log"; exit 1; }
QT_DIR=/opt/qt/$QT_VERSION/gcc_64
if [[ ! -d $QT_DIR ]]; then
    echo "Downloading Qt $QT_VERSION (cached for later runs)"
    python -m venv /venv && /venv/bin/pip -q --disable-pip-version-check install "aqtinstall==3.3.*" &&
        /venv/bin/aqt install-qt linux desktop "$QT_VERSION" linux_gcc_64 -O /opt/qt >/out/aqt.log 2>&1 ||
        { echo "Qt download failed, see aqt.log"; exit 1; }
fi
cp -r /src /work && cd /work && rm -rf build
cmake -S . -B build/qt-min -G Ninja -DCMAKE_BUILD_TYPE=Debug -DCMAKE_PREFIX_PATH="$QT_DIR" \
    >/out/configure.log 2>&1 || { tail -30 /out/configure.log; exit 1; }
if ! cmake --build build/qt-min -- -k 0 >/out/build.log 2>&1; then
    grep -E "error|FAILED" /out/build.log | sed "s|/work/||"
    echo "Build failed against Qt $QT_VERSION"
    exit 1
fi
QT_QPA_PLATFORM=offscreen ctest --test-dir build/qt-min -LE integration --output-on-failure \
    >/out/test.log 2>&1
rc=$?
grep -E "tests passed|\*\*\*|FAIL!" /out/test.log
exit $rc
'
echo "OK: builds and passes unit + UI tests against Qt $QT_VERSION"
