#!/usr/bin/env bash
# Local S3 sandbox for development and integration tests.
#
#   scripts/dev-minio.sh start     start MinIO in a container and seed test data
#   scripts/dev-minio.sh seed      (re)create test buckets and objects
#   scripts/dev-minio.sh env       print the S3FM_TEST_* variables (eval "$(scripts/dev-minio.sh env)")
#   scripts/dev-minio.sh status    show container status
#   scripts/dev-minio.sh stop      stop and remove the container (data volume is kept;
#                                  run stop + start after changing the container settings)
#   scripts/dev-minio.sh purge     stop and delete the data volume too
#
# Environment overrides:
#   S3FM_CONTAINER_ENGINE  podman | docker (default: podman if installed, else docker)
#   S3FM_MINIO_IMAGE       image to run (default: docker.io/pgsty/minio:latest; upstream
#                          MinIO no longer publishes images, pgsty/minio is a maintained build)
#   S3FM_MINIO_PORT        API port on 127.0.0.1 (default 9000; console is PORT+1)
#
# Seeding only needs curl >= 7.75 (for --aws-sigv4).
set -euo pipefail

IMAGE="${S3FM_MINIO_IMAGE:-docker.io/pgsty/minio:latest}"
PORT="${S3FM_MINIO_PORT:-9000}"
CONSOLE_PORT=$((PORT + 1))
NAME="s3fm-minio"
VOLUME="s3fm-minio-data"
ACCESS_KEY="s3fmadmin"
SECRET_KEY="s3fmadmin-secret"
REGION="us-east-1"
ENDPOINT="http://127.0.0.1:${PORT}"

# Static KMS key so SSE-S3 and SSE-KMS work (sandbox only, not a secret).
KMS_KEY_ID="s3fm-key"
KMS_KEY="${KMS_KEY_ID}:c3RhdGljLWRldi1rZXktZm9yLXMzZm0tc2FuZGJveCE="

BUCKET_PLAIN="s3fm-test"
BUCKET_VERSIONED="s3fm-versioned"
BUCKET_LOCKED="s3fm-locked"

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

s3() { # s3 <method> <path> [curl args...]
    local method="$1" path="$2"
    shift 2
    curl -fsS --aws-sigv4 "aws:amz:${REGION}:s3" --user "${ACCESS_KEY}:${SECRET_KEY}" \
        -X "$method" "${ENDPOINT}${path}" "$@"
}

wait_ready() {
    for _ in $(seq 1 60); do
        if curl -fsS "${ENDPOINT}/minio/health/live" >/dev/null 2>&1; then
            return 0
        fi
        sleep 0.5
    done
    echo "MinIO did not become ready at ${ENDPOINT}" >&2
    return 1
}

put_object() { # put_object <bucket> <key> <content>
    local key_enc
    key_enc=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1], safe="/"))' "$2" 2>/dev/null ||
        printf '%s' "$2" | sed 's/ /%20/g')
    printf '%s' "$3" | s3 PUT "/$1/${key_enc}" --data-binary @- -H 'Content-Type: text/plain' >/dev/null
}

make_bucket() { # make_bucket <bucket> [extra curl args]
    local b="$1"
    shift
    if s3 GET "/$b?location" -o /dev/null 2>/dev/null; then
        return 0
    fi
    s3 PUT "/$b" "$@" >/dev/null
}

cmd_seed() {
    wait_ready
    make_bucket "$BUCKET_PLAIN"
    make_bucket "$BUCKET_VERSIONED"
    s3 PUT "/${BUCKET_VERSIONED}?versioning" -H 'Content-Type: application/xml' --data-binary \
        '<VersioningConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Status>Enabled</Status></VersioningConfiguration>' \
        >/dev/null
    make_bucket "$BUCKET_LOCKED" -H 'x-amz-bucket-object-lock-enabled: true'

    put_object "$BUCKET_PLAIN" "readme.txt" "Hello from the S3 File Manager sandbox."
    put_object "$BUCKET_PLAIN" "docs/guide.md" "# Guide"
    put_object "$BUCKET_PLAIN" "docs/notes/todo.txt" "- write tests"
    put_object "$BUCKET_PLAIN" "empty-folder/" ""
    put_object "$BUCKET_PLAIN" "space dir/file with spaces.txt" "spaces"
    put_object "$BUCKET_PLAIN" "unicode/héllo wörld ✓.txt" "unicode"
    for i in $(seq -w 1 250); do
        put_object "$BUCKET_PLAIN" "many/item-${i}.txt" "item ${i}" &
        if ((10#$i % 25 == 0)); then wait; fi
    done
    wait

    put_object "$BUCKET_VERSIONED" "history.txt" "version 1"
    put_object "$BUCKET_VERSIONED" "history.txt" "version 2"
    put_object "$BUCKET_VERSIONED" "history.txt" "version 3"
    echo "Seeded buckets: ${BUCKET_PLAIN}, ${BUCKET_VERSIONED}, ${BUCKET_LOCKED}"
}

cmd_start() {
    if engine inspect "$NAME" >/dev/null 2>&1; then
        engine start "$NAME" >/dev/null
    else
        engine run -d --name "$NAME" \
            -p "127.0.0.1:${PORT}:9000" -p "127.0.0.1:${CONSOLE_PORT}:9001" \
            -e "MINIO_ROOT_USER=${ACCESS_KEY}" -e "MINIO_ROOT_PASSWORD=${SECRET_KEY}" \
            -e "MINIO_KMS_SECRET_KEY=${KMS_KEY}" \
            -v "${VOLUME}:/data" \
            "$IMAGE" server /data --console-address ":9001" >/dev/null
    fi
    cmd_seed
    echo "MinIO API:     ${ENDPOINT}"
    echo "MinIO console: http://127.0.0.1:${CONSOLE_PORT}  (${ACCESS_KEY} / ${SECRET_KEY})"
    echo 'Run integration tests with:  eval "$(scripts/dev-minio.sh env)" && ctest --preset integration'
}

cmd_env() {
    cat <<EOF
export S3FM_TEST_ENDPOINT=${ENDPOINT}
export S3FM_TEST_ACCESS_KEY=${ACCESS_KEY}
export S3FM_TEST_SECRET_KEY=${SECRET_KEY}
export S3FM_TEST_REGION=${REGION}
export S3FM_TEST_BUCKET=${BUCKET_PLAIN}
export S3FM_TEST_VERSIONED_BUCKET=${BUCKET_VERSIONED}
export S3FM_TEST_LOCKED_BUCKET=${BUCKET_LOCKED}
export S3FM_TEST_KMS_KEY=${KMS_KEY_ID}
EOF
}

case "${1:-}" in
start) cmd_start ;;
seed) cmd_seed ;;
env) cmd_env ;;
status) engine ps -a --filter "name=${NAME}" ;;
stop) engine rm -f "$NAME" >/dev/null && echo "stopped" ;;
purge)
    engine rm -f "$NAME" >/dev/null 2>&1 || true
    engine volume rm -f "$VOLUME" >/dev/null && echo "purged"
    ;;
*)
    sed -n '2,17p' "$0"
    exit 1
    ;;
esac
