# Integration tests run against a real S3 endpoint (MinIO by default, see
# scripts/dev-minio.sh). Tests that need the endpoint skip unless
# S3FM_TEST_ENDPOINT is set.
s3fm_add_test(tst_s3connection SOURCES tst_s3connection.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3provider SOURCES tst_s3provider.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3ui SOURCES tst_s3ui.cpp LABELS integration LIBS s3fm_ui)
s3fm_add_test(tst_s3transfer SOURCES tst_s3transfer.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3objectops SOURCES tst_s3objectops.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3versions SOURCES tst_s3versions.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3buckets SOURCES tst_s3buckets.cpp LABELS integration LIBS s3fm_core)
s3fm_add_test(tst_s3bucketui SOURCES tst_s3bucketui.cpp LABELS integration LIBS s3fm_ui)
