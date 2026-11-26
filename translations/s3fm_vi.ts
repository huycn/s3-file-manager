<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="vi" sourcelanguage="en">
<context>
    <name>QGuiApplication</name>
    <message>
        <source>QT_LAYOUT_DIRECTION</source>
        <translation>LTR</translation>
    </message>
</context>
<context>
    <name>s3fm::AddressBar</name>
    <message>
        <source>Computer</source>
        <translation>Máy tính</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Nguồn gốc được phép</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Phương thức</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Tiêu đề được phép</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Tiêu đề hiển thị</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Thời gian tối đa (giây)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>&amp;Thêm quy tắc</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Xóa quy tắc</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Quy tắc</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Phân tách nhiều giá trị bằng dấu phẩy. Phương thức: GET, PUT, POST, DELETE, HEAD. Cho phép một ký tự đại diện &quot;*&quot; cho mỗi nguồn gốc hoặc tiêu đề.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Á&amp;p dụng</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Đã xóa cấu hình CORS</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Đã lưu quy tắc CORS</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Không có</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (khóa do S3 quản lý)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (khóa AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (hai lớp, khóa AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>&amp;Mã hóa mặc định:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>ID khóa, ARN hoặc bí danh (để trống: khóa do aws/s3 quản lý)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>&amp;Khóa KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>Dùng &amp;Bucket Key của S3 (ít yêu cầu KMS hơn, chi phí thấp hơn)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Áp dụng cho các đối tượng được ghi từ bây giờ mà không tự yêu cầu mã hóa riêng. Các đối tượng hiện có giữ nguyên mã hóa (ghi lại chúng bằng Chỉnh sửa đối tượng để thay đổi). AWS mã hóa bằng SSE-S3 khi không có thiết lập nào.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Đã lưu mã hóa mặc định</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketLifecycleTab</name>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Trạng thái</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Áp dụng cho</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Hành động</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Thêm…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Sửa…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>&amp;Bật/Tắt</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Xóa</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Quy tắc</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Quy tắc chạy mỗi ngày một lần. JSON dùng định dạng của &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. Các dịch vụ tương thích S3 có thể bỏ qua những hành động mà chúng không hỗ trợ (MinIO cần tầng lưu trữ từ xa cho việc chuyển đổi).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Á&amp;p dụng</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(tự tạo)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Đã bật</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Đã tắt</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Quy tắc đã thay đổi; Áp dụng sẽ lưu các quy tắc vào bucket.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Đã xóa cấu hình vòng đời</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Đã lưu quy tắc vòng đời</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Bật Khóa đối tượng…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Không có</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Governance (người dùng có quyền đặc biệt có thể gỡ bỏ)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Compliance (không ai có thể gỡ bỏ, kể cả tài khoản root)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>&amp;Lưu giữ mặc định:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>ngày</translation>
    </message>
    <message>
        <source>years</source>
        <translation>năm</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Thời hạn:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Các phiên bản đối tượng mới nhận chế độ lưu giữ mặc định trừ khi lần tải lên tự đặt chế độ riêng. Các phiên bản đang được lưu giữ không thể bị xóa hoặc ghi đè cho đến khi hết thời hạn.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Bật Khóa đối tượng</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Bật Khóa đối tượng cho %1? Thao tác này không thể hoàn tác và quản lý phiên bản sẽ luôn được bật. (Một số dịch vụ chỉ cho phép khi tạo bucket.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Đã bật Khóa đối tượng</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n ngày</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n năm</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Khóa đối tượng</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Không ai có thể rút ngắn hoặc gỡ bỏ chế độ lưu giữ Compliance. Các phiên bản mới sẽ không thể xóa trong %1. Tiếp tục?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Đã lưu chế độ lưu giữ mặc định</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Khóa đối tượng đã được bật cho bucket này.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Khóa đối tượng chưa được bật cho bucket này.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Tên</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Khu vực</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Ngày tạo</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Chủ sở hữu</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Bắt buộc chủ sở hữu bucket (đã tắt ACL)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Ưu tiên chủ sở hữu bucket</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Người ghi đối tượng</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Quyền sở hữu đối tượng</translation>
    </message>
    <message>
        <source>ARN</source>
        <translation>ARN</translation>
    </message>
    <message>
        <source>URL</source>
        <translation>URL</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPolicyTab</name>
    <message>
        <source>&amp;Templates</source>
        <translation>&amp;Mẫu</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Chính sách bucket</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Thay thế văn bản hiện tại bằng mẫu?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>Định &amp;dạng</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Không có chính sách bucket. Hãy chọn một mẫu hoặc dán một tài liệu chính sách.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Xóa chính sách…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Á&amp;p dụng</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Không thể định dạng: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Không có chính sách.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Không tìm thấy vấn đề nào.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Xóa chính sách bucket của %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Đã xóa chính sách bucket</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Hãy sửa các lỗi trong chính sách trước: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Chính sách này cấp quyền truy cập cho mọi người trên internet. Vẫn áp dụng?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Đã lưu chính sách bucket</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Thuộc tính bucket — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Tổng quan</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Quản lý phiên bản</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Mã hóa</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Vòng đời</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Chính sách</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Truy cập công khai</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Trang web</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Khóa đối tượng</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Thống kê</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: điểm cuối này không hỗ trợ</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Chặn &amp;mọi truy cập công khai</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Chặn truy cập công khai được cấp qua ACL mới</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Bỏ qua truy cập công khai được cấp qua bất kỳ ACL nào</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Chặn truy cập công khai được cấp qua chính sách bucket mới</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Chỉ cho phép dịch vụ AWS và tài khoản chủ sở hữu truy cập các bucket có chính sách công khai</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Các thiết lập cấp tài khoản cũng được áp dụng và được ưu tiên hơn các thiết lập này. Việc tắt chặn tự nó không làm cho bất cứ thứ gì trở nên công khai.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Truy cập công khai</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Cho phép thiết lập truy cập công khai cho %1? Khi đó các đối tượng có thể trở nên công khai qua ACL hoặc chính sách bucket.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Đã lưu thiết lập truy cập công khai</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Tiền tố khóa:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(toàn bộ bucket)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Tính toán</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Danh mục</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Đối tượng</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Được đếm bằng cách liệt kê mọi phiên bản đối tượng (một yêu cầu cho mỗi 1000 khóa), việc này mất khá lâu với bucket lớn. Với bucket có hàng triệu đối tượng, S3 Storage Lens hoặc các số liệu CloudWatch BucketSizeBytes/NumberOfObjects nhanh hơn (cập nhật hằng ngày).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Hủy</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Đang đếm…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 byte</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Đối tượng hiện hành</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Phiên bản không hiện hành</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Điểm đánh dấu xóa</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Tất cả phiên bản</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Tải lên nhiều phần chưa hoàn tất</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Xong.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Đã hủy: số đếm chưa đầy đủ.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>Á&amp;p dụng</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Đang áp dụng…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Đang đếm… %L1 mục</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Khóa</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Giá trị</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Tối đa 50 thẻ; dùng để phân bổ chi phí và kiểm soát truy cập. Thẻ đối tượng là riêng biệt (Chỉnh sửa đối tượng).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Đã lưu thẻ</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Quản lý phiên bản:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Xóa bằng MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Khi bật quản lý phiên bản, việc ghi đè hoặc xóa một đối tượng sẽ giữ lại dữ liệu cũ dưới dạng phiên bản không hiện hành (tính phí như dung lượng lưu trữ). Đã bật thì không thể tắt quản lý phiên bản, chỉ có thể tạm ngưng: các phiên bản hiện có vẫn được giữ. Chỉ tài khoản root mới có thể thay đổi Xóa bằng MFA thông qua API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Bật quản lý phiên bản</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>&amp;Tạm ngưng quản lý phiên bản</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Đã bật quản lý phiên bản</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Tạm ngưng quản lý phiên bản</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Tạm ngưng quản lý phiên bản cho %1? Các lần ghi mới sẽ lại thay thế đối tượng; các phiên bản hiện có vẫn được giữ.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Đã tạm ngưng quản lý phiên bản</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Đã tắt (chưa từng bật)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Đã bật</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Đã tạm ngưng</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Đã tắt</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Bật lưu trữ &amp;trang web tĩnh</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>Lưu trữ một trang &amp;web</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>Tài liệu &amp;chỉ mục:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>tùy chọn, ví dụ error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Tài liệu &amp;lỗi:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Quy tắc chuyển hướng tùy chọn (mảng JSON), ví dụ
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>Quy tắc đ&amp;iều hướng:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>Chuyển hướng &amp;mọi yêu cầu đến máy chủ khác</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>ví dụ www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>Tên má&amp;y chủ:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Giống như yêu cầu</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Giao thức:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Điểm cuối trang web phân phối đối tượng qua HTTP thuần và chỉ những đối tượng có thể đọc công khai (chính sách bucket, chặn truy cập công khai).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Á&amp;p dụng</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Điểm cuối trang web: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Đã lưu cấu hình trang web</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Đã tắt lưu trữ trang web</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Tệp đã tồn tại</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; đã tồn tại ở đích. Ghi đè?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Mới:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Hiện có:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Tệp mới mới hơn.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Tệp hiện có mới hơn hoặc cũ bằng.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Cả hai có cùng kích thước.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Kích thước khác nhau.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>Á&amp;p dụng cho mọi xung đột còn lại của lần truyền này</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>&amp;Ghi đè</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>&amp;Bỏ qua</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>Giữ &amp;cả hai</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Sao chép với tên mới, chẳng hạn &quot;name (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Nếu &amp;mới hơn</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Chỉ ghi đè nếu tệp mới mới hơn, nếu không thì bỏ qua</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Nếu &amp;kích thước khác</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Chỉ ghi đè nếu kích thước khác nhau, nếu không thì bỏ qua</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Hủy truyền</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Kết nối</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Thêm</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Nhân bản</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Xóa</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Nhập hồ sơ AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Tạo kết nối cho các hồ sơ trong %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Kết nối</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Tên:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Dùng trong địa chỉ như s3://&lt;id&gt;/bucket/key. Không thể thay đổi sau khi lưu.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Nhà cung cấp:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Để trống cho Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>URL điểm &amp;cuối:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Khu vực:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Tự động</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Virtual-hosted (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Kiểu đường dẫn (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>Kiểu đị&amp;a chỉ</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Thông tin xác thực</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Khóa truy cập và bí mật</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Hồ sơ AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Biến môi trường</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Chuỗi thông tin xác thực AWS mặc định</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Ẩn danh (bucket công khai)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>ID khóa truy cập:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Hiện</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Khóa truy cập bí mật:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Tùy chọn (thông tin xác thực tạm thời)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Mã phiên:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Thông tin bí mật được lưu trong chuỗi khóa của hệ thống, không bao giờ trong tệp cài đặt.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Hồ sơ:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Hỗ trợ hồ sơ khóa tĩnh, SSO, assume-role (role_arn / source_profile) và credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Nâng cao</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Xác minh chứng chỉ TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Chứng chỉ hệ thống</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Duyệt…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Gói CA</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Chứng chỉ (*.pem *.crt);;Tất cả tệp (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Gói CA:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Khi được hỗ trợ (mặc định AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Chỉ khi bắt buộc (tương thích nhất)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Một số dịch vụ tương thích S3 từ chối các tiêu đề checksum toàn vẹn mới hơn.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Checksum yêu cầu:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Mặc định của bucket</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Lớp lưu trữ khi tải lên:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Các bucket luôn hiển thị ngay cả khi thông tin xác thực có thể không liệt kê được bucket.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Bucket được ghim:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b, hoặc * cho tất cả</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Bucket người yêu cầu thanh toán: các yêu cầu tới chúng được tính phí vào tài khoản của bạn (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Người yêu cầu thanh toán:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> giây</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Thời gian chờ yêu cầu:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>Kiểm t&amp;ra kết nối</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Mở</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Đã lưu trong chuỗi khóa — để trống để giữ nguyên</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Kết nối %1 mới</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (bản sao)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Xóa kết nối</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Xóa kết nối &quot;%1&quot; và thông tin bí mật đã lưu của nó?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Nhập hồ sơ AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Không tìm thấy hồ sơ nào trong %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Tất cả hồ sơ AWS đã được nhập.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Dùng AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY và AWS_SESSION_TOKEN từ môi trường mà ứng dụng được khởi động.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Thử biến môi trường, hồ sơ mặc định, SSO, web identity và thông tin xác thực của container/máy ảo, theo thứ tự chuẩn của AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Các yêu cầu không được ký. Chỉ có thể truy cập bucket và đối tượng công khai.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Lưu kết nối</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Đã tồn tại một kết nối có ID &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Nhập khóa truy cập bí mật.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Đang kiểm tra…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Thay đổi chưa lưu</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Lưu các thay đổi cho &quot;%1&quot;?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Kết nối *</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionProfile</name>
    <message>
        <source>Amazon S3</source>
        <translation>Amazon S3</translation>
    </message>
    <message>
        <source>MinIO</source>
        <translation>MinIO</translation>
    </message>
    <message>
        <source>Cloudflare R2</source>
        <translation>Cloudflare R2</translation>
    </message>
    <message>
        <source>Wasabi</source>
        <translation>Wasabi</translation>
    </message>
    <message>
        <source>Backblaze B2</source>
        <translation>Backblaze B2</translation>
    </message>
    <message>
        <source>DigitalOcean Spaces</source>
        <translation>DigitalOcean Spaces</translation>
    </message>
    <message>
        <source>Other S3-compatible</source>
        <translation>Dịch vụ tương thích S3 khác</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Nhập tên cho kết nối.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>ID chỉ được chứa chữ thường, chữ số, &apos;.&apos;, &apos;-&apos; và &apos;_&apos;.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>Điểm cuối phải là URL http:// hoặc https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Thay thế phần giữ chỗ trong URL điểm cuối.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Nhập URL điểm cuối của dịch vụ tương thích S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Nhập khu vực (ví dụ us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Nhập ID khóa truy cập.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Chọn một hồ sơ AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Không thể ghi tệp cài đặt</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Bucket mới</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>chữ thường, chữ số, dấu chấm và dấu gạch nối</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Tên:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>mặc định của điểm cuối</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Khu vực:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Mặc định (bắt buộc chủ sở hữu bucket: đã tắt ACL)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Ưu tiên chủ sở hữu bucket (đã bật ACL)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Người ghi đối tượng (đã bật ACL)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Quyền sở hữu đối tượng:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Không có</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>&amp;ACL định sẵn:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Bật Khóa đối tượn&amp;g (bật quản lý phiên bản; không thể tắt)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bucket AWS mới mặc định chặn truy cập công khai; ACL công khai sẽ thất bại cho đến khi nới lỏng chặn truy cập công khai.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Tạo</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Nhập tên bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Xóa bucket</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Xóa vĩnh viễn bucket trống &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>đối tượng</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>phiên bản đối tượng hoặc điểm đánh dấu xóa</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>lần tải lên nhiều phần chưa hoàn tất</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; không trống: nó chứa %2.&lt;br&gt;&lt;br&gt;Để xóa, mọi đối tượng, mọi phiên bản và mọi lần tải lên chưa hoàn tất sẽ bị xóa trước. &lt;b&gt;Thao tác này không thể hoàn tác.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Làm trống bucket, sau đó xóa</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>&amp;Bỏ qua lưu giữ chế độ Governance (cần s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Nhập tên bucket để xác nhận:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Xóa</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Làm trống và xóa</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Không đổi / mặc định của bucket</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>ID khóa KMS, ARN hoặc bí danh (để trống: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Không có nhà cung cấp cho %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Kết nối</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Thư mục</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Tệp</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>Tệp %1</translation>
    </message>
    <message>
        <source>&lt;UP&gt;</source>
        <translation>&lt;UP&gt;</translation>
    </message>
    <message>
        <source>&lt;DIR&gt;</source>
        <translation>&lt;DIR&gt;</translation>
    </message>
    <message>
        <source>Delete marker (deleted)</source>
        <translation>Điểm đánh dấu xóa (đã xóa)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Điểm đánh dấu xóa</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (hiện hành)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Tên</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Ngày sửa đổi</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Loại</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Lớp lưu trữ</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Phiên bản</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Đã hủy thao tác</translation>
    </message>
</context>
<context>
    <name>s3fm::Format</name>
    <message>
        <source>%1 B</source>
        <comment>size in bytes</comment>
        <translation>%1 B</translation>
    </message>
    <message>
        <source>%1/s</source>
        <comment>transfer rate</comment>
        <translation>%1/s</translation>
    </message>
</context>
<context>
    <name>s3fm::KeyValueEditor</name>
    <message>
        <source>Add</source>
        <translation>Thêm</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Xóa</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> ngày</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>byte (để trống: không giới hạn)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Thêm</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Xóa</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Quy tắc vòng đời</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>tùy chọn; S3 sẽ tự tạo</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>Đã &amp;bật</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;ID quy tắc:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>Bộ &amp;lọc</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>Phiên bản &amp;hiện hành</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>Phiên bản &amp;không hiện hành &amp;&amp; tải lên</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>Quy tắc áp dụng cho các đối tượng khớp với mọi điều kiện bên dưới; nếu không có điều kiện, quy tắc áp dụng cho toàn bộ bucket.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>ví dụ logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Tiền tố khóa:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Lớn hơn:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Nhỏ hơn:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Giá trị</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Thẻ đối tượng:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Chuyển sang lớp lưu trữ</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Sau (số ngày hoặc YYYY-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Chuyển đổi:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Không bao giờ</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Sau</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>Vào ngày</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Hết hạn (xóa) đối tượng:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Xóa điểm đánh dấu xóa đã hết hạn (điểm đánh dấu không có phiên bản không hiện hành)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Trong bucket có quản lý phiên bản, việc hết hạn một phiên bản hiện hành sẽ thêm một điểm đánh dấu xóa; dữ liệu vẫn được giữ dưới dạng phiên bản không hiện hành.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Số ngày sau khi trở thành không hiện hành</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Giữ bản mới nhất (tùy chọn)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Xóa sau</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>giữ lại bản mới nhất</translation>
    </message>
    <message>
        <source>none</source>
        <translation>không</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Phiên bản không hiện hành:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Hủy tải lên nhiều phần chưa hoàn tất sau</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Tải lên:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>Không có tệp hoặc thư mục như vậy: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>không có quyền truy cập</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Không phải vị trí cục bộ</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Không phải thư mục: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Không có quyền truy cập: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Thư mục không hợp lệ</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Đã tồn tại: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Không thể tạo thư mục %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Từ chối xóa thư mục gốc của hệ thống tệp</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: không tìm thấy</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… và %1 mục khác</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>Không thể xóa %n mục</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Không thể di chuyển %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Không thể di chuyển trực tiếp thư mục giữa các hệ thống tệp</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Là một thư mục: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Không thể đọc %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Không thể ghi %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Lỗi khi đọc %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Lỗi khi ghi %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Kiểm tra toàn vẹn thất bại cho %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>Đã ghi %1 byte, cần %2 byte</translation>
    </message>
</context>
<context>
    <name>s3fm::MainWindow</name>
    <message>
        <source>S3 File Manager</source>
        <translation>S3 File Manager</translation>
    </message>
    <message>
        <source>Uploaded %1</source>
        <translation>Đã tải lên %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>X&amp;em</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Sửa</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>Sao &amp;chép…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>&amp;Di chuyển…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>Đổi tê&amp;n…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>Thư mục &amp;mới…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Xóa…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>Cà&amp;i đặt…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>Th&amp;oát</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Sao chép &amp;vị trí</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>Sao chép S3 &amp;URI</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Sao chép URL &amp;HTTP</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Sao chép &amp;ARN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Thuộc tính</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Sửa siêu dữ liệu, thẻ, lưu t&amp;rữ…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Chia sẻ &amp;liên kết (URL được ký trước)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Hiện &amp;phiên bản</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Duyệt &amp;theo thời điểm…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>Lịch &amp;sử phiên bản…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>&amp;Khôi phục từ lưu trữ…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>Tải lên nhiều phần &amp;chưa hoàn tất…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>&amp;Bucket mới…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>Th&amp;uộc tính bucket…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Chọn &amp;tất cả</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Bỏ chọn tất cả</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>Đảo &amp;ngược lựa chọn</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>&amp;Lọc nhanh…</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Làm mới</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>&amp;Hiện tệp ẩn</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>Đổi chỗ hai &amp;bảng</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Mở trong bảng &amp;kia</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Quay lại</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Tiến tới</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>Thư mục &amp;chính</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Gốc</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>Sửa đị&amp;a chỉ</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Vị trí bảng t&amp;rái…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Vị trí bảng &amp;phải…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Quản lý kết nối…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>&amp;Hiện bảng truyền</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>Tạm &amp;dừng tất cả</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>&amp;Tiếp tục tất cả</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Xóa mục đã xong</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Cài đặt truyền…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Phím tắt</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Giới thiệu</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Tệp</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Chọn</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Xem</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>Đ&amp;i đến</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>T&amp;ruyền</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Kết nối</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Trợ &amp;giúp</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Thư mục chính</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Gốc (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Kết nối S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Tất cả kết nối</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Giống bảng kia</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>Đã sao chép %n vị trí vào bảng nhớ tạm</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>Đã xếp hàng: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Đang tiếp tục %n lần truyền bị gián đoạn</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>Đã khôi phục %n lần truyền bị gián đoạn; hãy tiếp tục chúng trong bảng Truyền</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Xong: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n lỗi</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Đã hủy: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>Ngôn ngữ mới sẽ được dùng sau khi khởi động lại S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Không thể sao chép điểm đánh dấu xóa.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Không thể di chuyển hoặc đổi tên phiên bản; hãy sao chép chúng hoặc dùng Lịch sử phiên bản.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Thư mục sẽ được sao chép với nội dung hiện tại. Hãy rời chế độ xem &quot;theo thời điểm&quot; để sao chép thư mục, hoặc chọn các tệp.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Chế độ xem phiên bản</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n mục</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Di chuyển %1 đến:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Sao chép %1 đến:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 không có thao tác đổi tên: đối tượng được sao chép, sau đó bản gốc bị xóa.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Di chuyển</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Sao chép</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Đích không hợp lệ: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Đổi tên</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Tên mới:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>Tên không được chứa dấu phân cách đường dẫn.</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Không thể tạo thư mục ở đây</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Thư mục mới</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Tên thư mục (dùng / cho thư mục lồng nhau):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Tên thư mục không hợp lệ: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Xóa</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>Trong chế độ xem phiên bản chỉ có thể xóa phiên bản. Hãy rời chế độ này để xóa thư mục.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Xóa bucket</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Hãy xóa từng bucket một.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Không thể xóa các mục này ở đây</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Xóa vĩnh viễn thư mục &quot;%1&quot; và mọi thứ bên trong?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>Xóa vĩnh viễn &quot;%1&quot;?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>Xóa vĩnh viễn %n mục đã chọn?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Không có ứng dụng để mở %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Điểm đánh dấu xóa không có nội dung</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Chọn đối tượng hoặc thư mục S3 để chỉnh sửa</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n mục đã chọn</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Đang cập nhật đối tượng…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Hủy</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Đã hủy sau %n đối tượng</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>Đã cập nhật %n đối tượng</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Chỉnh sửa đối tượng</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Đã cập nhật %1/%n đối tượng; %2 thất bại.</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Chỉ có thể hiện phiên bản bên trong bucket S3</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Quản lý phiên bản chưa từng được bật cho %1: mỗi đối tượng chỉ có một phiên bản</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Quản lý phiên bản đang tạm ngưng cho %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>Duyệt theo thời điểm chỉ hoạt động bên trong bucket S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Duyệt theo thời điểm</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Hiển thị bucket này như tại một thời điểm, được dựng lại từ lịch sử phiên bản (chỉ bucket có quản lý phiên bản).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Ngày và giờ:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Quay lại hiện tại</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Chọn một đối tượng S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Xóa phiên bản</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Xóa vĩnh viễn %n phiên bản? Thao tác này không thể hoàn tác.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>Đã xóa %n phiên bản</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Chọn đối tượng hoặc thư mục S3 đã được lưu trữ</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Đang yêu cầu khôi phục…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Đã yêu cầu khôi phục %n đối tượng</numerusform>
        </translation>
    </message>
    <message>
        <source>%1; %2</source>
        <comment>restore summary: requested; skipped</comment>
        <translation>%1; %2</translation>
    </message>
    <message numerus="yes">
        <source>%n not archived, already restored or in progress</source>
        <translation>
            <numerusform>%n đối tượng không được lưu trữ, đã được khôi phục hoặc đang xử lý</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Khôi phục từ lưu trữ</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n thất bại.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Hãy mở một bucket S3 trước</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Hãy mở một kết nối S3 trước</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Đang tạo bucket %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Bucket mới</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Không thể tạo %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Đã tạo bucket %1</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Chọn hoặc mở một bucket</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Đang kiểm tra nội dung của %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Đang xóa nội dung của %1…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>Đã xóa %Ln mục…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Đã xóa bucket %1</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Đã hủy; %n mục đã bị xóa trước đó</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Không thể xóa bucket %1.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>Trước khi xảy ra lỗi: %1, %2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>đã xóa %n mục</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>đã hủy %n lần tải lên</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>Không thể xóa %n mục (lưu giữ, lưu giữ pháp lý hoặc quyền truy cập).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Chọn một đối tượng S3 để chia sẻ</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Mở</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Mở bằng ứng dụng mặc định</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Đặt phiên bản này làm hiện hành</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Khôi phục phiên bản</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Hủy xóa</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Không có gì để sao chép</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>Đã sao chép %n dòng vào bảng nhớ tạm</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Chuyển bảng</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Mở / thư mục cha</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Đảo chọn (và di chuyển xuống) / đảo chọn</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+Mũi tên</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Mở rộng vùng chọn</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Gõ chữ cái</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Nhảy đến tên</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Phím tắt</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Giới thiệu S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Trình quản lý tệp hai bảng cho Amazon S3 và bộ lưu trữ tương thích S3.&lt;/p&gt;&lt;p&gt;Được xây dựng bằng Qt %2 và AWS SDK cho C++.&lt;/p&gt;&lt;p&gt;Giấy phép MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Chỉnh sửa từ xa chưa lưu</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Một số tệp đã chỉnh sửa có thay đổi chưa được tải lên. Vẫn thoát?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n lần truyền vẫn đang chạy. Thoát và tiếp tục chúng vào lần sau?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n lần truyền vẫn đang chạy. Thoát và bỏ chúng?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Đang truyền</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n phút</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n giờ</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n ngày</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Tải lên nhiều phần chưa hoàn tất — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Các lần tải lên bị gián đoạn giữ lại các phần (và chi phí lưu trữ của chúng) cho đến khi được hoàn tất hoặc hủy. Một quy tắc vòng đời của bucket có thể tự động hủy chúng.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Tiền tố khóa:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(toàn bộ bucket)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Làm mới</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Khóa</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Bắt đầu</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Tuổi</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Phần</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Lớp lưu trữ</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Hủy mục đã &amp;chọn…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Hủy &amp;tất cả…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID tải lên: %1
Bắt đầu bởi: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Không có lần tải lên chưa hoàn tất. (Một số dịch vụ tương thích S3 chỉ liệt kê các lần tải lên cho một khóa đối tượng chính xác: hãy nhập khóa đó làm tiền tố.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n lần tải lên chưa hoàn tất, đang lưu trữ %1.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Đang tải…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Hủy tải lên</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>Hủy %n lần tải lên? Các phần đã tải lên sẽ bị xóa.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Đang hủy…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Chỉnh sửa đối tượng</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Thay đổi %1. Chỉ các phần được đánh dấu mới được áp dụng; thư mục bao gồm mọi thứ bên dưới.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Tiêu đề và siêu dữ liệu</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(không đổi)</translation>
    </message>
    <message>
        <source>Content-Type:</source>
        <translation>Content-Type:</translation>
    </message>
    <message>
        <source>Cache-Control:</source>
        <translation>Cache-Control:</translation>
    </message>
    <message>
        <source>Content-Disposition:</source>
        <translation>Content-Disposition:</translation>
    </message>
    <message>
        <source>Content-Encoding:</source>
        <translation>Content-Encoding:</translation>
    </message>
    <message>
        <source>Content-Language:</source>
        <translation>Content-Language:</translation>
    </message>
    <message>
        <source>Expires:</source>
        <translation>Expires:</translation>
    </message>
    <message>
        <source>Set user metadata:</source>
        <translation>Đặt siêu dữ liệu người dùng:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Khóa</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Giá trị</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Thay thế toàn bộ siêu dữ liệu người dùng (nếu không thì hợp nhất)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Xóa khóa:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Lớp lưu trữ</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Mã hóa</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Thẻ (thay thế bộ thẻ)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Kiểm soát truy cập (ACL định sẵn)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Tiêu đề, lớp lưu trữ và mã hóa được thay đổi bằng cách sao chép từng đối tượng lên chính nó (S3 không thể thay đổi chúng theo cách khác); việc này đặt lại ACL của đối tượng trừ khi ACL cũng được đặt ở đây. Đối tượng đã lưu trữ (Glacier, Deep Archive) phải được khôi phục trước.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Áp dụng</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Đánh dấu ít nhất một phần để thay đổi.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Khóa siêu dữ liệu không hợp lệ &quot;%1&quot;: hãy dùng chữ cái, chữ số, &apos;-&apos;, &apos;_&apos; và &apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Vị trí và kết nối</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Thư mục chính</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Gốc</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Thử lại</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Bộ lọc (chuỗi con hoặc ký tự đại diện * ?) — Esc để đóng</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Địa chỉ không xác định: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Vị trí không hợp lệ: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Không thể mở %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>Đã chọn %1/%2, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n thư mục</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n tệp</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Tại %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Tất cả phiên bản] </translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — đang tải…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — còn thêm mục (cuộn xuống)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Chia sẻ liên kết — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Tải xuống (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Tải lên / thay thế (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Cho phép:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>phút</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>giờ</translation>
    </message>
    <message>
        <source>days</source>
        <translation>ngày</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Hiệu lực trong:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>&amp;Sao chép URL</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>Hiện mã &amp;QR</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>URL được ký trước có hiệu lực tối đa 7 ngày; thời hạn đã được rút ngắn.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Hết hạn lúc %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Đây là thông tin xác thực tạm thời (mã phiên, SSO hoặc vai trò được đảm nhận): URL sẽ ngừng hoạt động khi chúng hết hạn.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>Thời hạn đã được rút ngắn cho phù hợp.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Áp dụng</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Thuộc tính — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Chung</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Siêu dữ liệu</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Lưu trữ &amp;&amp; mã hóa</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Quyền</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Khóa đối tượng</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Checksum</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Tất cả tiêu đề</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Khóa</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Giá trị</translation>
    </message>
    <message>
        <source>Content-Type:</source>
        <translation>Content-Type:</translation>
    </message>
    <message>
        <source>Cache-Control:</source>
        <translation>Cache-Control:</translation>
    </message>
    <message>
        <source>Content-Disposition:</source>
        <translation>Content-Disposition:</translation>
    </message>
    <message>
        <source>Content-Encoding:</source>
        <translation>Content-Encoding:</translation>
    </message>
    <message>
        <source>Content-Language:</source>
        <translation>Content-Language:</translation>
    </message>
    <message>
        <source>Expires:</source>
        <translation>Expires:</translation>
    </message>
    <message>
        <source>User metadata (x-amz-meta-…):</source>
        <translation>Siêu dữ liệu người dùng (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 lưu tiêu đề cùng với đối tượng: việc áp dụng sẽ sao chép đối tượng lên chính nó. ACL của đối tượng được đặt lại về mặc định của bucket; thẻ được giữ nguyên.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Tối đa 10 thẻ; khóa tối đa 128 và giá trị tối đa 256 ký tự.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Lớp lưu trữ:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Mã hóa:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Khóa của khách hàng (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Chủ sở hữu:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Người được cấp quyền</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Loại</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Quyền</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Thay bằng ACL định sẵn:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Không có</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Governance (có thể gỡ bỏ với quyền đặc biệt)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Compliance (không thể rút ngắn hoặc gỡ bỏ)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Chế độ lưu giữ:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Lưu giữ đến:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Bỏ qua chế độ Governance (cần để rút ngắn hoặc gỡ bỏ lưu giữ Governance)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Lưu giữ pháp lý</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Thuật toán</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Đã lưu</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Tệp cục bộ</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Kết quả</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>So sánh với tệp cục bộ…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Đang tải…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Không thể tải đối tượng: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Không thể tải siêu dữ liệu: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Vị trí:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Tệp</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Tệp (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Thư mục (tiền tố)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Thư mục</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Kết nối</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Loại:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Kích thước:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Ngày sửa đổi:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Đích liên kết:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Quyền:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Ẩn:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Có</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID phiên bản:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Khu vực:</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>S3 URI:</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation>URL:</translation>
    </message>
    <message>
        <source>ARN:</source>
        <translation>ARN:</translation>
    </message>
    <message>
        <source>Tags are not available: %1</source>
        <translation>Không có thẻ: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Đối tượng này đã được lưu trữ; việc thay đổi lớp lưu trữ cần một bản sao đã khôi phục.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Thay đổi các mục này sẽ sao chép đối tượng lên chính nó.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>ACL đã bị tắt cho bucket này (Quyền sở hữu đối tượng: bắt buộc chủ sở hữu bucket). Hãy dùng chính sách bucket để cấp quyền truy cập.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>Không có ACL: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Quyền sở hữu đối tượng: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Không có trạng thái Khóa đối tượng: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Khóa đối tượng chưa được bật cho bucket này (chỉ có thể bật khi tạo bucket).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Được lưu giữ ở chế độ %1 đến %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Phiên bản này chưa được đặt lưu giữ.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Đang áp dụng…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Khóa siêu dữ liệu không hợp lệ &quot;%1&quot;: hãy dùng chữ cái, chữ số, &apos;-&apos;, &apos;_&apos; và &apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Đã lưu siêu dữ liệu.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Đã lưu thẻ.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Không có gì thay đổi.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Đã lưu thiết lập lưu trữ.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>Đã đặt ACL thành %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Đã lưu thiết lập Khóa đối tượng.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>So sánh với tệp cục bộ</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Đang tính checksum của %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Khớp</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>KHÁC NHAU</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>Đối tượng không có checksum nào có thể so sánh.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Tệp cục bộ khớp với đối tượng.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Tệp cục bộ khác với đối tượng.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Khóa của khách hàng cần một kết nối đã lưu.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Không hỗ trợ liệt kê phiên bản ở đây</translation>
    </message>
</context>
<context>
    <name>s3fm::RemoteFiles</name>
    <message>
        <source>S3 File Manager</source>
        <translation>S3 File Manager</translation>
    </message>
    <message>
        <source>No provider</source>
        <translation>Không có nhà cung cấp</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Không thể tạo thư mục tạm</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Tệp lớn</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot; có kích thước %2. Tải xuống vào một tệp tạm?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Không thể chỉnh sửa phiên bản cũ; hãy khôi phục phiên bản trước</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Đang tải xuống %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Hủy</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Không thể tải xuống %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Không có ứng dụng để mở tệp này</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Không có ứng dụng để chỉnh sửa tệp này</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Tải lên thay đổi</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>&quot;%1&quot; đã bị sửa đổi. Tải lên %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Tệp từ xa đã thay đổi</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 đã bị thay đổi trên máy chủ kể từ khi bạn mở. Ghi đè bằng phiên bản của bạn?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Không thể tải lên %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Khôi phục từ lưu trữ</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Yêu cầu một bản sao tạm thời có thể đọc được của %1. Đối tượng đã lưu trữ vẫn ở nguyên chỗ; bản sao được tính phí theo mức chuẩn của bucket cho đến khi hết hạn.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> ngày</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Giữ bản sao trong:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Standard (Glacier: 3–5 giờ, Deep Archive: trong vòng 12 giờ)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Bulk (rẻ nhất; 5–12 giờ, Deep Archive: trong vòng 48 giờ)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Expedited (chỉ Glacier; 1–5 phút, đắt nhất)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Cấp truy xuất:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Yêu cầu khôi phục</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Thiết lập quyền sở hữu đối tượng không xác định</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Lỗi cú pháp JSON tại dòng %1, cột %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Trường không xác định &quot;%1&quot; trong %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Quản lý phiên bản</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Mã hóa mặc định</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Quy tắc vòng đời</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Chính sách bucket</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Chặn truy cập công khai</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Thẻ</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Lưu trữ trang web tĩnh</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Khóa đối tượng</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Quyền sở hữu đối tượng</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Tên bucket phải dài từ 3 đến 63 ký tự.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Tên bucket chỉ được chứa chữ thường, chữ số, dấu chấm và dấu gạch nối.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Tên bucket phải bắt đầu và kết thúc bằng chữ cái hoặc chữ số.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Tên bucket không được chứa hai dấu chấm liền nhau.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Tên bucket không được trông giống địa chỉ IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Tên bucket không được bắt đầu bằng &quot;%1&quot; (dành riêng cho AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Tên bucket không được kết thúc bằng &quot;%1&quot; (dành riêng cho AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Tên có dấu chấm không hoạt động với cách định địa chỉ HTTPS virtual-hosted (chứng chỉ TLS không khớp) hoặc Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>ID quy tắc có thể có tối đa 255 ký tự.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Quy tắc cần ít nhất một hành động: chuyển đổi, hết hạn hoặc hủy tải lên chưa hoàn tất.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>Kích thước đối tượng tối thiểu phải nhỏ hơn tối đa.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Khóa thẻ phải có từ 1 đến 128 ký tự.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Giá trị thẻ có thể có tối đa 256 ký tự.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Quy tắc lọc theo thẻ không thể hủy tải lên chưa hoàn tất (tải lên không có thẻ).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Quy tắc lọc theo thẻ không thể xóa điểm đánh dấu xóa đã hết hạn.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Đối tượng có thể hết hạn sớm nhất sau 1 ngày.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Chọn số ngày hoặc một ngày cụ thể cho việc hết hạn.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Không thể kết hợp việc xóa điểm đánh dấu xóa đã hết hạn với việc hết hạn phiên bản hiện hành trong cùng một quy tắc.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Lớp lưu trữ chuyển đổi không xác định &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Hai lần chuyển đổi sang %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Mỗi lần chuyển đổi cần số ngày hoặc một ngày cụ thể.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Đối tượng có thể chuyển sang %1 sớm nhất sau 30 ngày.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Hãy dùng số ngày hoặc ngày cụ thể cho tất cả các lần chuyển đổi và việc hết hạn của một quy tắc.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>Việc hết hạn phải diễn ra sau lần chuyển đổi cuối cùng.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Hai lần chuyển đổi phiên bản không hiện hành sang %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Phiên bản không hiện hành có thể chuyển sớm nhất sau 1 ngày.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Số phiên bản mới hơn cần giữ phải từ 1 đến 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Phiên bản không hiện hành có thể bị xóa sớm nhất sau 1 ngày.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Việc giữ các phiên bản không hiện hành mới hơn cần thiết lập hết hạn cho phiên bản không hiện hành.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Có thể hủy tải lên chưa hoàn tất sớm nhất sau 1 ngày.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>tiền tố &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>thẻ %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>lớn hơn %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>nhỏ hơn %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Toàn bộ bucket</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>sang %1 sau %2 ngày</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>sang %1 vào %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>hết hạn sau %1 ngày</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>hết hạn vào %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>xóa điểm đánh dấu xóa đã hết hạn</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>không hiện hành sang %1 sau %2 ngày</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>xóa bản không hiện hành sau %1 ngày (giữ %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>xóa bản không hiện hành sau %1 ngày</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>hủy tải lên sau %1 ngày</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Một bucket có thể có tối đa 1000 quy tắc vòng đời.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Quy tắc %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Quy tắc &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: một quy tắc khác có cùng ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>cấu hình</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>quy tắc %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 không phải là đối tượng JSON</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status phải là &quot;Enabled&quot; hoặc &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> (bộ lọc)</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Quy tắc CORS cần ít nhất một nguồn gốc được phép.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Quy tắc CORS cần ít nhất một phương thức được phép.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Phương thức không được hỗ trợ &quot;%1&quot; (dùng GET, PUT, POST, DELETE hoặc HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Nguồn gốc không hợp lệ &quot;%1&quot;: tối đa một ký tự đại diện &quot;*&quot;.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Tiêu đề không hợp lệ &quot;%1&quot;: tối đa một ký tự đại diện &quot;*&quot;.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>Thời gian tối đa không được âm.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Một bucket có thể có tối đa 100 quy tắc CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Quy tắc %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Chính sách phải là một đối tượng JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Không có &quot;Version&quot;: hãy thêm &quot;Version&quot;: &quot;2012-10-17&quot; (thiếu nó, biến chính sách sẽ không hoạt động).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Phiên bản chính sách không xác định &quot;%1&quot; (dùng &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>Phiên bản &quot;2008-10-17&quot; đã lỗi thời; hãy dùng &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>Chính sách cần có &quot;Statement&quot; (một đối tượng hoặc một mảng đối tượng).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>Chính sách không có câu lệnh nào.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>Câu lệnh %1 không phải là đối tượng JSON.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Câu lệnh %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Câu lệnh &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: Sid được dùng hai lần.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; phải là &quot;Allow&quot; hoặc &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: chính sách bucket cần có &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: thiếu &quot;Action&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: thiếu &quot;Resource&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; không phải là hành động S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; không phải là ARN tài nguyên S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; không thuộc bucket này (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 cấp quyền truy cập cho mọi người (Principal &quot;*&quot; không có điều kiện).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Đọc công khai (bất kỳ ai cũng có thể tải xuống đối tượng)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Từ chối yêu cầu không dùng TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Quyền chỉ đọc cho một tài khoản AWS khác</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Không thể kết hợp việc chuyển hướng mọi yêu cầu với tài liệu hoặc quy tắc định tuyến.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Giao thức chuyển hướng phải là http hoặc https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>Lưu trữ trang web cần một tài liệu chỉ mục (hoặc chuyển hướng mọi yêu cầu).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Tài liệu chỉ mục không được chứa &quot;/&quot; (đó là hậu tố được nối vào các yêu cầu thư mục).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Mỗi quy tắc định tuyến cần một chuyển hướng.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Quy tắc định tuyến có thể thay thế khóa hoặc tiền tố khóa, không phải cả hai.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Quy tắc định tuyến phải là một mảng JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>quy tắc định tuyến %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>Chế độ lưu giữ phải là GOVERNANCE hoặc COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>Lưu giữ mặc định cần bật Khóa đối tượng cho bucket.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Đặt thời hạn lưu giữ mặc định theo ngày hoặc theo năm (chọn một).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>Thời hạn lưu giữ mặc định tối đa là 100 năm.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Một bucket có thể có tối đa 50 thẻ.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Xác thực thất bại: hãy kiểm tra khóa truy cập và khóa bí mật</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>Đồng hồ của máy tính chênh lệch quá nhiều so với thời gian của máy chủ</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>Đối tượng không tồn tại</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>Bucket không tồn tại</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>Lần tải lên nhiều phần không tồn tại</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>Đối tượng đã được lưu trữ; hãy yêu cầu khôi phục (S3 &gt; Khôi phục từ lưu trữ) và đợi đến khi có sẵn</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Truy cập bị từ chối</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Bucket đã tồn tại</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>Bucket không trống</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>Dịch vụ đang giới hạn yêu cầu; hãy thử lại sau</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Lỗi mạng: không thể kết nối tới điểm cuối</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Yêu cầu đã hết thời gian chờ</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>Bucket nằm ở khu vực khác với khu vực đã cấu hình</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>Dịch vụ không hỗ trợ thao tác này</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Không tìm thấy</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>Yêu cầu bị từ chối vì không hợp lệ</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Yêu cầu S3 thất bại</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>ACL định sẵn không xác định: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>URL được ký trước chỉ dành cho đối tượng</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Không thể ký URL (không có thông tin xác thực khả dụng)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>MD5 (ETag)</source>
        <translation>MD5 (ETag)</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Provider</name>
    <message>
        <source>Not an S3 location</source>
        <translation>Không phải vị trí S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Không có đối tượng hoặc thư mục như vậy: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Không hỗ trợ tạo bucket ở đây</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Bucket đã tồn tại</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Đã tồn tại: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Không hỗ trợ xóa bucket ở đây</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>Không thể xóa %n đối tượng</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 không có thao tác đổi tên; hãy dùng sao chép và xóa</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Kiểm tra toàn vẹn thất bại cho %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Chưa cấu hình khóa SSE-C cho bucket %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 khác với ETag %2 của nguồn</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>Đã lưu %1 byte, cần %2 byte</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Tải xuống chưa hoàn tất: %1/%2 byte</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 khác với ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Không thể thay thế %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Không thể ghi %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Không có tệp như vậy: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Là một thư mục: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Đích không hợp lệ: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Không thể đọc %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 khác với MD5 cục bộ %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Lỗi khi đọc %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 khác với giá trị mong đợi %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Không thể thực hiện trong danh sách kết nối</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Không phải vị trí S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Kết nối không xác định</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Chưa lưu khóa bí mật cho kết nối này; hãy chỉnh sửa kết nối để nhập</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Đã kết nối: thấy %n bucket</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Đã kết nối (không được phép liệt kê bucket; có thể truy cập %n bucket được ghim)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Không có</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, khóa do S3 quản lý)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (khóa AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (khóa do khách hàng cung cấp)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Một đối tượng có thể có tối đa 10 thẻ.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Khóa thẻ phải có từ 1 đến 128 ký tự.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Giá trị thẻ có thể có tối đa 256 ký tự.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Khóa thẻ không được bắt đầu bằng &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Chưa lưu trữ</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Đã lưu trữ; đang khôi phục</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Đã lưu trữ; bản sao đã khôi phục có sẵn đến %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Đã lưu trữ; hãy khôi phục để đọc dữ liệu</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Không phải phiên bản: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>Không thể xóa %n phiên bản</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 chưa bị xóa</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Không có phiên bản nào của %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Cấp khôi phục không xác định: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Khôi phục trong ít nhất một ngày</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Lỗi chuỗi khóa hệ thống</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>Không có thông tin bí mật nào được lưu trong chuỗi khóa hệ thống</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Không tìm thấy thông tin bí mật</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Cài đặt</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Mặc định của hệ thống (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Ngôn ngữ:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ngôn ngữ mới sẽ được dùng sau khi khởi động lại S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Khóa mã hóa của khách hàng (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Đối tượng SSE-C được mã hóa bằng khóa 256 bit do bạn giữ. S3 không lưu khóa này: &lt;b&gt;nếu mất khóa, sẽ không thể đọc các đối tượng&lt;/b&gt;. Khóa được giữ trong chuỗi khóa hệ thống.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 ký tự) hoặc 64 chữ số thập lục phân</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Hiện</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Tạo</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Dùng cho mọi bucket của kết nối này không có khóa riêng</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Xóa khóa</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Đã cấu hình khóa cho bucket %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Chưa cấu hình khóa cho bucket %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>Khóa phải dài 32 byte, dưới dạng base64 hoặc 64 chữ số thập lục phân.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Xóa khóa của bucket %1? Không thể đọc các đối tượng được mã hóa bằng khóa này nếu không có nó.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Tùy chọn</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Hỏi</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Ghi đè</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Bỏ qua</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Giữ cả hai (đổi tên tệp mới)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Ghi đè nếu mới hơn</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Ghi đè nếu kích thước khác</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Nếu tệp đã tồn tại:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>ví dụ *.jpg; *.png (để trống: tất cả)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Chỉ các tệp khớp:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>ví dụ *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Loại trừ:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Kiểm tra toàn vẹn sau khi truyền (kích thước, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Giữ nguyên thời gian sửa đổi</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Theo liên kết tượng trưng (nếu không thì bỏ qua)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Mặc định của kết nối</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Lớp lưu trữ S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Mã hóa S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Truyền</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Tạm dừng</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Tiếp tục</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Hủy</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Thử lại mục thất bại</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Lên trên</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Xuống dưới</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Xóa</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Tạm dừng tất cả</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Tiếp tục tất cả</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Xóa mục đã xong</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Cài đặt…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 đang chạy, %2 đang chờ</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 đang chạy</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Lỗi truyền</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID yêu cầu: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Hủy truyền</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>Hủy &quot;%1&quot;? Các tệp đã truyền một phần sẽ bị loại bỏ.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Xóa lần truyền</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>Xóa &quot;%1&quot;? Lần truyền chưa hoàn tất; dữ liệu một phần sẽ bị loại bỏ.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n mục</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Sao chép %1 đến %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Di chuyển %1 đến %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Xóa %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Không có nhà cung cấp cho vị trí này</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Nguồn và đích giống nhau</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Không thể sao chép một thư mục vào chính nó</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Không tìm được tên trống</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Đã tồn tại thư mục có tên này</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>Đang chờ</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Đã tạm dừng</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Xong, bỏ qua %n</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Xong</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Thất bại</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Đã hủy</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Đang bắt đầu</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Đang quét</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Đang xóa</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Đang di chuyển</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Đang sao chép</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Đang hoàn tất</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n lỗi)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n mục</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n tệp</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Truyền</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Trạng thái</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Tiến độ</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Tốc độ</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Thời gian còn lại</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Cài đặt truyền</translation>
    </message>
    <message>
        <source> MiB</source>
        <translation> MiB</translation>
    </message>
    <message>
        <source> KiB/s</source>
        <translation> KiB/s</translation>
    </message>
    <message>
        <source>Unlimited</source>
        <translation>Không giới hạn</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Tự động tiếp tục các lần truyền bị gián đoạn khi khởi động</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Số lần truyền đồng thời:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Số tệp song song mỗi lần truyền:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Số phần song song mỗi tệp:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Tải lên nhiều phần khi lớn hơn:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Kích thước phần:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Giới hạn băng thông:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Số lần thử lại mỗi tệp:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Kích thước phần tự động tăng với tệp rất lớn (S3 cho phép tối đa 10.000 phần). Thay đổi áp dụng cho các lần truyền bắt đầu sau đó; giới hạn băng thông áp dụng ngay lập tức.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Lịch sử phiên bản — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Ngày sửa đổi</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Kích thước</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Lớp lưu trữ</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Trạng thái</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID phiên bản</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Xem</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Tải xuống…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>&amp;Khôi phục làm hiện hành</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Xóa &amp;vĩnh viễn…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>&amp;Hủy xóa</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Bỏ qua lưu giữ chế độ Governance khi xóa</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Làm mới</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Đang tải phiên bản…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Điểm đánh dấu xóa (đối tượng đã bị xóa)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Điểm đánh dấu xóa</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Hiện hành</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Trước đó</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Không tìm thấy phiên bản nào.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n phiên bản và điểm đánh dấu xóa.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Đang xử lý…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Tải xuống phiên bản</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>Đã lưu %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>Phiên bản đã chọn lại trở thành phiên bản hiện hành.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Xóa phiên bản</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Xóa vĩnh viễn %n phiên bản? Thao tác này không thể hoàn tác.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>Đã xóa %n phiên bản.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>Đối tượng đã được khôi phục.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Xem — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — hiển thị %1 đầu tiên</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — nhị phân (%1), %2 đầu tiên hiển thị dạng hex</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Mở bằng ứng dụng mặc định</translation>
    </message>
</context>
</TS>
