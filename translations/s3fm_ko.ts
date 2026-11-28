<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko" sourcelanguage="en">
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
        <translation>컴퓨터</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>허용된 오리진</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>메서드</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>허용된 헤더</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>노출 헤더</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>최대 기간(초)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>규칙 추가(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>규칙 제거(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>규칙</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>여러 값은 쉼표로 구분합니다. 메서드: GET, PUT, POST, DELETE, HEAD. 오리진 또는 헤더마다 &quot;*&quot; 와일드카드를 하나만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>적용(&amp;A)</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>CORS 구성이 제거되었습니다</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>CORS 규칙이 저장되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3(S3에서 관리하는 키)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS(AWS KMS 키)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS(이중 계층, AWS KMS 키)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>기본 암호화(&amp;E):</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>키 ID, ARN 또는 별칭(비워 두면 aws/s3 관리형 키)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>KMS 키(&amp;K):</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>S3 버킷 키 사용(&amp;B)(KMS 요청 감소, 비용 절감)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>자체 암호화를 요청하지 않는 객체 중 지금부터 기록되는 객체에 적용됩니다. 기존 객체는 현재 암호화를 유지합니다(변경하려면 객체 편집으로 다시 기록하십시오). 아무것도 설정하지 않으면 AWS는 SSE-S3로 암호화합니다.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>기본 암호화가 저장되었습니다</translation>
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
        <translation>상태</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>적용 대상</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>작업</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>추가(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>편집(&amp;E)…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>활성화/비활성화(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>제거(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>규칙</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>규칙은 하루에 한 번 실행됩니다. JSON은 &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt; 형식을 사용합니다. S3 호환 서비스는 지원하지 않는 작업을 무시할 수 있습니다(MinIO에서 전환을 사용하려면 원격 계층이 필요합니다).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>적용(&amp;A)</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(자동 생성)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>활성화됨</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>비활성화됨</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>규칙이 변경되었습니다. 적용을 누르면 규칙이 버킷에 저장됩니다.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>수명 주기 구성이 제거되었습니다</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>수명 주기 규칙이 저장되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>객체 잠금 활성화(&amp;E)…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>거버넌스(특별 권한이 있는 사용자는 제거할 수 있음)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>규정 준수(루트 계정을 포함하여 누구도 제거할 수 없음)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>기본 보존(&amp;R):</translation>
    </message>
    <message>
        <source>days</source>
        <translation>일</translation>
    </message>
    <message>
        <source>years</source>
        <translation>년</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>기간(&amp;P):</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>업로드 시 자체 보존을 설정하지 않으면 새 객체 버전에 기본 보존이 적용됩니다. 보존된 버전은 기간이 끝날 때까지 삭제하거나 덮어쓸 수 없습니다.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>객체 잠금 활성화</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>%1에서 객체 잠금을 활성화하시겠습니까? 이 작업은 취소할 수 없으며 버전 관리가 영구적으로 활성화된 상태로 유지됩니다. (일부 서비스는 버킷을 생성할 때만 허용합니다.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>객체 잠금이 활성화되었습니다</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n일</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n년</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>객체 잠금</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>규정 준수 모드 보존은 누구도 단축하거나 제거할 수 없습니다. 새 버전은 %1 동안 삭제할 수 없게 됩니다. 계속하시겠습니까?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>기본 보존이 저장되었습니다</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>이 버킷에서 객체 잠금이 활성화되어 있습니다.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>이 버킷에서 객체 잠금이 활성화되어 있지 않습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>리전</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>생성 날짜</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>소유자</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>버킷 소유자 적용(ACL 비활성화됨)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>버킷 소유자 선호</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>객체 라이터</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>객체 소유권</translation>
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
        <translation>템플릿(&amp;T)</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>버킷 정책</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>현재 텍스트를 템플릿으로 바꾸시겠습니까?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>서식 지정(&amp;F)</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>버킷 정책이 없습니다. 템플릿을 선택하거나 정책 문서를 붙여 넣으십시오.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>정책 삭제(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>적용(&amp;A)</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>서식을 지정할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>정책이 없습니다.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>문제가 없습니다.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>%1의 버킷 정책을 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>버킷 정책이 삭제되었습니다</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>먼저 정책의 오류를 수정하십시오: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>이 정책은 인터넷의 모든 사용자에게 액세스 권한을 부여합니다. 그래도 적용하시겠습니까?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>버킷 정책이 저장되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>버킷 속성 — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>개요</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>버전 관리</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>암호화</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>수명 주기</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>정책</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>퍼블릭 액세스</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>웹 사이트</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>객체 잠금</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>통계</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: 이 엔드포인트에서 지원되지 않습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>모든 퍼블릭 액세스 차단(&amp;A)</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>새 ACL을 통해 부여된 퍼블릭 액세스 차단</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>모든 ACL을 통해 부여된 퍼블릭 액세스 무시</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>새 버킷 정책을 통해 부여된 퍼블릭 액세스 차단</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>퍼블릭 정책이 있는 버킷에 대한 액세스를 AWS 서비스와 소유자 계정으로 제한</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>계정 수준 설정도 적용되며 이 설정보다 우선합니다. 차단을 해제해도 그 자체로 퍼블릭이 되는 것은 없습니다.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>퍼블릭 액세스</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>%1에서 퍼블릭 액세스 설정을 허용하시겠습니까? 그러면 ACL이나 버킷 정책을 통해 객체가 퍼블릭이 될 수 있습니다.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>퍼블릭 액세스 설정이 저장되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>키 접두사:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(전체 버킷)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>계산(&amp;C)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>범주</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>객체</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>모든 객체 버전을 나열하여 계산하므로(키 1000개당 요청 1회) 큰 버킷에서는 시간이 걸립니다. 객체가 수백만 개인 버킷에서는 S3 Storage Lens 또는 CloudWatch 지표 BucketSizeBytes/NumberOfObjects가 더 빠릅니다(매일 업데이트됨).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>취소(&amp;C)</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>계산 중…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1바이트</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>현재 객체</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>최신이 아닌 버전</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>삭제 마커</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>모든 버전</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>불완전한 멀티파트 업로드</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>완료되었습니다.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>취소됨: 일부만 계산되었습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>적용(&amp;A)</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>적용 중…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>계산 중… 항목 %L1개</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>키</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>값</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>최대 50개의 태그. 비용 할당 및 액세스 제어에 사용됩니다. 객체 태그는 별도입니다(객체 편집).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>태그가 저장되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>버전 관리:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>MFA 삭제:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>버전 관리를 사용하면 객체를 덮어쓰거나 삭제해도 이전 데이터가 최신이 아닌 버전으로 유지됩니다(스토리지 요금 부과). 버전 관리는 한 번 활성화하면 끌 수 없고 일시 중지만 할 수 있으며, 기존 버전은 유지됩니다. MFA 삭제는 루트 계정만 API/CLI를 통해 변경할 수 있습니다.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>버전 관리 활성화(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>버전 관리 일시 중지(&amp;S)</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>버전 관리가 활성화되었습니다</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>버전 관리 일시 중지</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>%1에서 버전 관리를 일시 중지하시겠습니까? 새로 기록하면 다시 객체가 대체되며, 기존 버전은 유지됩니다.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>버전 관리가 일시 중지되었습니다</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>비활성화됨(활성화된 적 없음)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>활성화됨</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>일시 중지됨</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>비활성화됨</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>정적 웹 사이트 호스팅 활성화(&amp;W)</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>웹 사이트 호스팅(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>인덱스 문서(&amp;I):</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>선택 사항, 예: error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>오류 문서(&amp;E):</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>선택적 리디렉션 규칙(JSON 배열), 예:
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>리디렉션 규칙(&amp;R):</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>모든 요청을 다른 호스트로 리디렉션(&amp;T)</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>예: www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>호스트 이름(&amp;N):</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>요청과 동일</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>프로토콜(&amp;P):</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>웹 사이트 엔드포인트는 일반 HTTP를 통해 객체를 제공하며, 퍼블릭으로 읽을 수 있는 객체만 제공합니다(버킷 정책, 퍼블릭 액세스 차단).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>적용(&amp;A)</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>웹 사이트 엔드포인트: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>웹 사이트 구성이 저장되었습니다</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>웹 사이트 호스팅이 비활성화되었습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::Compare</name>
    <message>
        <source>only here</source>
        <translation>여기만</translation>
    </message>
    <message>
        <source>newer</source>
        <translation>최신</translation>
    </message>
    <message>
        <source>older</source>
        <translation>이전</translation>
    </message>
    <message>
        <source>different</source>
        <translation>다름</translation>
    </message>
    <message>
        <source>identical</source>
        <translation>동일</translation>
    </message>
    <message>
        <source>same size and time</source>
        <translation>크기와 시간 같음</translation>
    </message>
    <message>
        <source>file vs. folder</source>
        <translation>파일/폴더</translation>
    </message>
    <message>
        <source>Missing in the other panel.</source>
        <translation>다른 패널에 없습니다.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is newer.</source>
        <translation>다른 패널과 다르며 더 최신입니다.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is older.</source>
        <translation>다른 패널과 다르며 더 오래되었습니다.</translation>
    </message>
    <message>
        <source>Differs from the other panel.</source>
        <translation>다른 패널과 다릅니다.</translation>
    </message>
    <message>
        <source>Same content as in the other panel.</source>
        <translation>다른 패널과 내용이 같습니다.</translation>
    </message>
    <message>
        <source>Same size and time as in the other panel.</source>
        <translation>다른 패널과 크기와 시간이 같습니다.</translation>
    </message>
    <message>
        <source>The other panel has a file where this is a folder, or the other way round.</source>
        <translation>한쪽은 파일이고 다른 쪽은 폴더입니다.</translation>
    </message>
    <message>
        <source>The content differs.</source>
        <translation>내용이 다릅니다.</translation>
    </message>
    <message>
        <source>The content could not be checked.</source>
        <translation>내용을 확인할 수 없습니다.</translation>
    </message>
    <message numerus="yes">
        <source>%n only here</source>
        <translation>
            <numerusform>여기만 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n newer</source>
        <translation>
            <numerusform>최신 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n older</source>
        <translation>
            <numerusform>이전 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n different</source>
        <translation>
            <numerusform>다름 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n identical</source>
        <translation>
            <numerusform>동일 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n not verified</source>
        <translation>
            <numerusform>미확인 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>nothing to compare</source>
        <translation>비교할 항목 없음</translation>
    </message>
    <message>
        <source>, </source>
        <comment>list separator in the comparison summary</comment>
        <translation>, </translation>
    </message>
</context>
<context>
    <name>s3fm::CompareDialog</name>
    <message>
        <source>Compare Panels</source>
        <translation>패널 비교</translation>
    </message>
    <message>
        <source>Compare modification &amp;times</source>
        <translation>수정 시간 비교(&amp;T)</translation>
    </message>
    <message>
        <source> s</source>
        <comment>seconds</comment>
        <translation>초</translation>
    </message>
    <message>
        <source>T&amp;olerance:</source>
        <translation>허용 오차(&amp;O):</translation>
    </message>
    <message>
        <source>Compare the &amp;content of files with the same size</source>
        <translation>크기가 같은 파일의 내용 비교(&amp;C)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Local files are read. S3 objects are compared by ETag (the MD5 sum of single-part uploads) and stored checksums; when the ETag alone does not tell, one or two requests per object are needed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;로컬 파일을 읽습니다. S3 객체는 ETag(단일 파트 업로드의 MD5 합계)와 저장된 체크섬으로 비교합니다. ETag만으로 판단할 수 없으면 객체마다 요청이 한두 번 필요합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Mark &amp;folders that exist on one side only</source>
        <translation>한쪽에만 있는 폴더 표시(&amp;F)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Only the listings shown are compared, not the contents of folders. Items missing on the other side, newer, or different are selected in both panels, ready to copy with F5. S3 times are upload times.&lt;/small&gt;</source>
        <translation>&lt;small&gt;표시된 목록만 비교하며 폴더 내용은 비교하지 않습니다. 다른 쪽에 없거나, 더 최신이거나, 다른 항목은 두 패널 모두에서 선택되어 F5로 바로 복사할 수 있습니다. S3 시간은 업로드 시간입니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Compare</source>
        <translation>비교</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>파일이 이미 있음</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>대상에 &lt;b&gt;%1&lt;/b&gt;이(가) 이미 있습니다. 덮어쓰시겠습니까?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>새 파일:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>기존 파일:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>새 파일이 더 최신입니다.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>기존 파일이 더 최신이거나 같습니다.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>두 파일의 크기가 같습니다.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>크기가 다릅니다.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>이 전송의 나머지 모든 충돌에 적용(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>덮어쓰기(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>건너뛰기(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>모두 유지(&amp;K)</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>&quot;이름 (2).확장자&quot;와 같은 새 이름으로 복사합니다</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>더 최신이면(&amp;N)</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>새 파일이 더 최신인 경우에만 덮어쓰고, 그렇지 않으면 건너뜁니다</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>크기가 다르면(&amp;Z)</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>크기가 다른 경우에만 덮어쓰고, 그렇지 않으면 건너뜁니다</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>전송 취소</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>연결</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>추가</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>복제</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>AWS 프로필 가져오기…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>%1의 프로필에 대한 연결을 만듭니다</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>연결</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>s3://&lt;id&gt;/bucket/key와 같은 주소에 사용됩니다. 저장한 후에는 변경할 수 없습니다.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>ID(&amp;I):</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>공급자(&amp;P):</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Amazon S3를 사용하려면 비워 두십시오</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>엔드포인트 URL(&amp;E):</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>리전(&amp;R):</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>자동</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>가상 호스팅(bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>경로 스타일(host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>주소 지정(&amp;A):</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>자격 증명</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>액세스 키 및 시크릿</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>AWS 프로필(~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>환경 변수</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>기본 AWS 자격 증명 체인</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>익명(퍼블릭 버킷)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>액세스 키 ID:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>표시</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>보안 액세스 키:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>선택 사항(임시 자격 증명)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>세션 토큰:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>시크릿은 설정 파일이 아닌 시스템 키체인에 저장됩니다.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>프로필:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>정적 키, SSO, 역할 수임(role_arn / source_profile) 및 credential_process 프로필을 지원합니다.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>고급</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>TLS 인증서 확인</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>시스템 인증서</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>찾아보기…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>CA 번들</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>인증서 (*.pem *.crt);;모든 파일 (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>CA 번들:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>지원되는 경우(AWS 기본값)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>필요한 경우에만(호환성 최대)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>일부 S3 호환 서비스는 최신 무결성 체크섬 헤더를 거부합니다.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>요청 체크섬:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>버킷 기본값</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>업로드 스토리지 클래스:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>자격 증명으로 버킷을 나열할 수 없는 경우에도 표시할 버킷입니다.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>고정된 버킷:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b 또는 전체는 *</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>요청자 지불 버킷: 해당 버킷에 대한 요청은 사용자 계정에 청구됩니다(x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>요청자 지불:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> 초</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>요청 시간 제한:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>연결 테스트(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>열기(&amp;O)</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>키체인에 저장됨 — 유지하려면 비워 두십시오</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>새 %1 연결</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1(사본)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>연결 삭제</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>연결 &quot;%1&quot; 및 저장된 시크릿을 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>AWS 프로필 가져오기</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>%1에서 프로필을 찾을 수 없습니다.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>모든 AWS 프로필을 이미 가져왔습니다.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>애플리케이션을 시작한 환경의 AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY 및 AWS_SESSION_TOKEN을 사용합니다.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>AWS SDK의 표준 순서에 따라 환경 변수, 기본 프로필, SSO, 웹 자격 증명 및 컨테이너/인스턴스 자격 증명을 시도합니다.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>요청에 서명하지 않습니다. 퍼블릭 버킷과 객체에만 액세스할 수 있습니다.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>연결 저장</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>ID가 &quot;%1&quot;인 연결이 이미 있습니다.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>보안 액세스 키를 입력하십시오.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>테스트 중…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>저장되지 않은 변경 내용</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>&quot;%1&quot;의 변경 내용을 저장하시겠습니까?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>연결 *</translation>
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
        <translation>기타 S3 호환</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>연결 이름을 입력하십시오.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>ID에는 영문 소문자, 숫자, &apos;.&apos;, &apos;-&apos;, &apos;_&apos;만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>엔드포인트는 http:// 또는 https:// URL이어야 합니다.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>엔드포인트 URL의 자리 표시자를 바꾸십시오.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>S3 호환 서비스의 엔드포인트 URL을 입력하십시오.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>리전을 입력하십시오(예: us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>액세스 키 ID를 입력하십시오.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>AWS 프로필을 선택하십시오.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>설정 파일을 쓸 수 없습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::ContentCompare</name>
    <message>
        <source>Error reading %1</source>
        <translation>%1을(를) 읽는 중 오류가 발생했습니다</translation>
    </message>
    <message>
        <source>The object has no checksum to compare with (encrypted with SSE-KMS or SSE-C, and no stored checksum).</source>
        <translation>비교할 체크섬이 없습니다(SSE-KMS 또는 SSE-C로 암호화되었고 저장된 체크섬이 없음).</translation>
    </message>
    <message>
        <source>The objects were uploaded in different parts or are encrypted with SSE-KMS or SSE-C; their ETags do not tell whether the content is the same.</source>
        <translation>객체가 서로 다른 파트로 업로드되었거나 SSE-KMS 또는 SSE-C로 암호화되어 있어 ETag만으로는 내용이 같은지 알 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>새 버킷</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>영문 소문자, 숫자, 점, 하이픈</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>엔드포인트 기본값</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>리전(&amp;R):</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>기본값(버킷 소유자 적용: ACL 비활성화됨)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>버킷 소유자 선호(ACL 활성화됨)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>객체 라이터(ACL 활성화됨)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>객체 소유권(&amp;O):</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>미리 제공된 ACL(&amp;A):</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>객체 잠금 활성화(&amp;L)(버전 관리가 켜지며 끌 수 없음)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;새 AWS 버킷은 기본적으로 퍼블릭 액세스를 차단합니다. 퍼블릭 액세스 차단을 완화하기 전에는 퍼블릭 ACL이 실패합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>생성</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>버킷 이름을 입력하십시오.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>버킷 삭제</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>빈 버킷 &lt;b&gt;%1&lt;/b&gt;을(를) 영구적으로 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>객체</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>객체 버전 또는 삭제 마커</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>불완전한 멀티파트 업로드</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;이(가) 비어 있지 않습니다. 포함된 항목: %2.&lt;br&gt;&lt;br&gt;삭제하려면 먼저 모든 객체, 모든 버전 및 모든 불완전한 업로드를 삭제합니다. &lt;b&gt;이 작업은 취소할 수 없습니다.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>버킷을 비운 다음 삭제(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>거버넌스 모드 보존 우회(&amp;B)(s3:BypassGovernanceRetention 필요)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>확인하려면 버킷 이름을 입력하십시오:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>비우고 삭제</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>변경 안 함 / 버킷 기본값</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>KMS 키 ID, ARN 또는 별칭(비워 두면 aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>%1에 대한 공급자가 없습니다</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>버킷</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>연결</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>폴더</translation>
    </message>
    <message>
        <source>File</source>
        <translation>파일</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>%1 파일</translation>
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
        <translation>삭제 마커(삭제됨)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>삭제 마커</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1(현재)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>이름</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>수정한 날짜</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>유형</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>스토리지 클래스</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>버전</translation>
    </message>
    <message>
        <source>Comparison</source>
        <translation>비교</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>작업이 취소되었습니다</translation>
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
        <translation>추가</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>제거</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> 일</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>바이트(비워 두면 제한 없음)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>추가</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>제거</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>수명 주기 규칙</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>선택 사항. S3에서 생성합니다</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>활성화(&amp;E)</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>규칙 ID(&amp;I):</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>필터(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>현재 버전(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>최신이 아닌 버전 및 업로드(&amp;N)</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>규칙은 아래의 모든 조건과 일치하는 객체에 적용됩니다. 조건이 없으면 전체 버킷에 적용됩니다.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>예: logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>키 접두사(&amp;P):</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>다음보다 큼:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>다음보다 작음:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>값</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>객체 태그:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>이동할 스토리지 클래스</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>경과 후(일 수 또는 YYYY-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>전환:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>안 함</translation>
    </message>
    <message>
        <source>After</source>
        <translation>경과 후</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>지정 날짜</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>객체 만료(삭제):</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>만료된 삭제 마커 제거(최신이 아닌 버전이 없는 마커)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;버전 관리 버킷에서 현재 버전이 만료되면 삭제 마커가 추가되고 데이터는 최신이 아닌 버전으로 남습니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>최신이 아닌 버전이 된 후 경과 일수</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>보존할 최신 버전 수(선택 사항)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>다음 기간 후 삭제</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>보존할 최신 버전 수</translation>
    </message>
    <message>
        <source>none</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>최신이 아닌 버전:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>다음 기간 후 불완전한 멀티파트 업로드 중단</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>업로드:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>해당 파일 또는 디렉터리가 없습니다: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>권한이 거부되었습니다</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>로컬 위치가 아닙니다</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>디렉터리가 아닙니다: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>권한이 거부되었습니다: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>잘못된 디렉터리</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>이미 있습니다: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>디렉터리 %1을(를) 만들 수 없습니다</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>파일 시스템 루트는 삭제할 수 없습니다</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: 찾을 수 없음</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… 외 %1개</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>항목 %n개를 삭제할 수 없습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>%1을(를) 이동할 수 없습니다</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>디렉터리를 다른 파일 시스템으로 직접 이동할 수 없습니다</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>디렉터리입니다: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1을(를) 읽을 수 없습니다</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1에 쓸 수 없습니다</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>%1을(를) 읽는 중 오류가 발생했습니다</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>%1에 쓰는 중 오류가 발생했습니다</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1의 무결성 검사에 실패했습니다</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>%1바이트 기록됨, %2바이트 예상됨</translation>
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
        <translation>%1 업로드됨</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>보기(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>편집(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>복사(&amp;C)…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>이동(&amp;M)…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>이름 바꾸기(&amp;R)…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>새 폴더(&amp;F)…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>삭제(&amp;D)…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>설정(&amp;G)…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>끝내기(&amp;Q)</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>위치 복사(&amp;L)</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>S3 URI 복사(&amp;U)</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>HTTP URL 복사(&amp;H)</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>ARN 복사(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>속성(&amp;P)</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>메타데이터, 태그, 스토리지 편집(&amp;T)…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>공유 링크(미리 서명된 URL)(&amp;S)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>버전 표시(&amp;V)</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>특정 시점 기준 찾아보기(&amp;A)…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>버전 기록(&amp;H)…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>아카이브에서 복원(&amp;R)…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>불완전한 멀티파트 업로드(&amp;I)…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>새 버킷(&amp;B)…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>버킷 속성(&amp;U)…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>모두 선택(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>모두 선택 해제(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>선택 반전(&amp;I)</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>빠른 필터(&amp;F)…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>파일 찾기(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Compare Panels…</source>
        <translation>패널 비교(&amp;C)…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>포함된 폴더로 이동(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>새로 고침(&amp;R)</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>숨김 파일 표시(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>패널 바꾸기(&amp;S)</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>다른 패널에서 열기(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>뒤로(&amp;B)</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>앞으로(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>홈(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>루트(&amp;R)</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>주소 편집(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>왼쪽 패널 위치(&amp;L)…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>오른쪽 패널 위치(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>연결 관리(&amp;M)…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>전송 표시(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>모두 일시 중지(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>모두 다시 시작(&amp;R)</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>완료된 항목 지우기(&amp;C)</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>전송 설정(&amp;S)…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>바로 가기 키(&amp;K)</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>정보(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>파일(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>선택(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>보기(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>이동(&amp;G)</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>전송(&amp;T)</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S3(&amp;3)</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>연결(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>도움말(&amp;H)</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>홈</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>루트(/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>S3 연결</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>모든 연결</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>다른 패널과 동일</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>파일 찾기</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>검색하려면 버킷을 여세요.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>검색하려면 드라이브를 여세요.</translation>
    </message>
    <message>
        <source>Compare Panels</source>
        <translation>패널 비교</translation>
    </message>
    <message>
        <source>Both panels need to show a folder.</source>
        <translation>두 패널 모두 폴더를 표시해야 합니다.</translation>
    </message>
    <message>
        <source>Leave the versions view to compare the panels.</source>
        <translation>패널을 비교하려면 버전 보기를 종료하세요.</translation>
    </message>
    <message>
        <source>Both panels show the same folder.</source>
        <translation>두 패널이 같은 폴더를 표시하고 있습니다.</translation>
    </message>
    <message>
        <source>Comparing contents…</source>
        <translation>내용 비교 중…</translation>
    </message>
    <message>
        <source>Comparison cancelled</source>
        <translation>비교가 취소됨</translation>
    </message>
    <message>
        <source>A panel changed during the comparison; compare again.</source>
        <translation>비교 중에 패널이 변경되었습니다. 다시 비교하세요.</translation>
    </message>
    <message numerus="yes">
        <source>%n content check(s) failed; see the tooltips in the comparison column.</source>
        <translation>
            <numerusform>내용 확인 %n개가 실패했습니다. 비교 열의 도구 설명을 확인하세요.</numerusform>
        </translation>
    </message>
    <message>
        <source>Only the items loaded so far were compared (scroll down to load more).</source>
        <translation>지금까지 불러온 항목만 비교했습니다(더 불러오려면 아래로 스크롤하세요).</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>위치 %n개를 클립보드에 복사했습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>대기 중: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>중단된 전송 %n개를 다시 시작하는 중</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>중단된 전송 %n개를 복원했습니다. 전송 패널에서 다시 시작하십시오</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>완료: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: 오류 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>취소됨: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>새 언어는 S3 File Manager을(를) 다시 시작한 후에 적용됩니다.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>삭제 마커는 복사할 수 없습니다.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>버전은 이동하거나 이름을 바꿀 수 없습니다. 복사하거나 버전 기록을 사용하십시오.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>폴더는 현재 내용으로 복사됩니다. 폴더를 복사하려면 &quot;특정 시점 기준&quot; 보기를 종료하거나 파일을 선택하십시오.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>버전 보기</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>항목 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>%1을(를) 다음 위치로 이동:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>%1을(를) 다음 위치로 복사:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3에는 이름 바꾸기가 없습니다. 객체를 복사한 다음 원본을 삭제합니다.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>이동</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>복사</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>잘못된 대상: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>이름 바꾸기</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>새 이름:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>이름에 경로 구분 기호를 포함할 수 없습니다.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>검색 결과에는 폴더를 만들 수 없습니다</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>여기에는 폴더를 만들 수 없습니다</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>새 폴더</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>폴더 이름(중첩 폴더는 / 사용):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>잘못된 폴더 이름: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>삭제</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>버전 보기에서는 버전만 삭제할 수 있습니다. 폴더를 삭제하려면 버전 보기를 종료하십시오.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>버킷 삭제</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>버킷은 한 번에 하나씩 삭제하십시오.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>이 항목은 여기에서 삭제할 수 없습니다</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>폴더 &quot;%1&quot; 및 그 안의 모든 항목을 영구적으로 삭제하시겠습니까?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>&quot;%1&quot;을(를) 영구적으로 삭제하시겠습니까?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>선택한 항목 %n개를 영구적으로 삭제하시겠습니까?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>%1을(를) 열 애플리케이션이 없습니다</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>삭제 마커에는 내용이 없습니다</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>편집할 S3 객체 또는 폴더를 선택하십시오</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>선택한 항목 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>객체 업데이트 중…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>취소</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>객체 %n개 처리 후 취소되었습니다</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>객체 %n개를 업데이트했습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>객체 편집</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>업데이트됨: 객체 %n개 중 %1개, 실패: %2개.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>먼저 검색 결과를 닫으세요</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>버전은 S3 버킷 안에서만 표시할 수 있습니다</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>%1에서 버전 관리를 활성화한 적이 없습니다. 각 객체에 버전이 하나뿐입니다</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>%1에서 버전 관리가 일시 중지되었습니다</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>특정 시점 찾아보기는 S3 버킷 안에서만 작동합니다</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>특정 시점 기준 찾아보기</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>버전 기록을 바탕으로 이 버킷을 특정 시점의 상태로 표시합니다(버전 관리 버킷만 해당).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>날짜 및 시간:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>현재로 돌아가기</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>S3 객체를 선택하십시오</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>버전 삭제</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>버전 %n개를 영구적으로 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>버전 %n개를 삭제했습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>아카이브된 S3 객체 또는 폴더를 선택하십시오</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>복원 요청 중…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>객체 %n개에 대한 복원을 요청했습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>%1; %2</source>
        <comment>restore summary: requested; skipped</comment>
        <translation>%1. %2</translation>
    </message>
    <message numerus="yes">
        <source>%n not archived, already restored or in progress</source>
        <translation>
            <numerusform>%n개는 아카이브되지 않았거나 이미 복원되었거나 복원 중입니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>아카이브에서 복원</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n개 실패했습니다.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>먼저 S3 버킷을 여십시오</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>먼저 S3 연결을 여십시오</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>버킷 %1 생성 중…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>새 버킷</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>%1을(를) 생성할 수 없습니다: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>버킷 %1을(를) 생성했습니다</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>버킷을 선택하거나 여십시오</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>%1의 내용 확인 중…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>%1의 내용 삭제 중…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>항목 %Ln개 삭제됨…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>버킷 %1을(를) 삭제했습니다</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>취소되었습니다. 항목 %n개는 이미 삭제되었습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>버킷 %1을(를) 삭제할 수 없습니다.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>오류 발생 전: %1, %2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>항목 %n개 삭제됨</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>업로드 %n개 중단됨</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>항목 %n개를 삭제할 수 없습니다(보존, 법적 보존 또는 권한).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>공유할 S3 객체를 선택하십시오</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>열기</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>기본 애플리케이션으로 열기</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>이 버전을 현재 버전으로 만들기</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>버전 복원</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>삭제 취소</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>복사할 항목이 없습니다</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n줄을 클립보드에 복사했습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>패널 전환</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>열기 / 상위 폴더</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>선택 전환(및 아래로 이동) / 선택 전환</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+화살표</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>선택 영역 확장</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>문자 입력</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>이름으로 이동</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>바로 가기 키</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>S3 File Manager 정보</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Amazon S3 및 S3 호환 스토리지를 위한 2패널 파일 관리자입니다.&lt;/p&gt;&lt;p&gt;Qt %2 및 AWS SDK for C++로 빌드되었습니다.&lt;/p&gt;&lt;p&gt;MIT 라이선스&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>업로드되지 않은 원격 편집 내용</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>편집한 일부 파일에 업로드되지 않은 변경 내용이 있습니다. 그래도 끝내시겠습니까?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>전송 %n개가 아직 실행 중입니다. 끝내고 다음에 계속하시겠습니까?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>전송 %n개가 아직 실행 중입니다. 끝내고 전송을 중단하시겠습니까?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>실행 중인 전송</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n분</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n시간</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n일</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>불완전한 멀티파트 업로드 — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>중단된 업로드는 완료되거나 중단될 때까지 파트(및 해당 스토리지 비용)가 유지됩니다. 버킷 수명 주기 규칙으로 자동으로 중단할 수 있습니다.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>키 접두사:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(전체 버킷)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>새로 고침</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>키</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>시작 시간</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>경과 시간</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>파트</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>스토리지 클래스</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>선택 항목 중단(&amp;S)…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>모두 중단(&amp;A)…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>업로드 ID: %1
시작한 사용자: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>불완전한 업로드가 없습니다. (일부 S3 호환 서비스는 정확한 객체 키에 대해서만 업로드를 나열합니다. 키를 접두사로 입력하십시오.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>불완전한 업로드 %n개, %1 저장됨.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>로드 중…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>업로드 중단</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>업로드 %n개를 중단하시겠습니까? 업로드된 파트가 삭제됩니다.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>중단 중…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>객체 편집</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>%1을(를) 변경합니다. 선택한 섹션만 적용되며, 폴더는 그 아래의 모든 항목을 포함합니다.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>헤더 및 메타데이터</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(변경 안 함)</translation>
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
        <translation>사용자 메타데이터 설정:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>키</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>값</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>모든 사용자 메타데이터 바꾸기(선택하지 않으면 병합)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>제거할 키:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>스토리지 클래스</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>암호화</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>태그(태그 세트 바꾸기)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>액세스 제어(미리 제공된 ACL)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;헤더, 스토리지 클래스 및 암호화는 각 객체를 자기 자신에게 복사하여 변경합니다(S3에서는 다른 방법으로 변경할 수 없음). 이때 여기서 ACL도 설정하지 않으면 ACL이 재설정됩니다. 아카이브된 객체(Glacier, Deep Archive)는 먼저 복원해야 합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>적용</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>변경할 섹션을 하나 이상 선택하십시오.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>잘못된 메타데이터 키 &quot;%1&quot;: 영문자, 숫자, &apos;-&apos;, &apos;_&apos;, &apos;.&apos;를 사용하십시오</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>위치 및 연결</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>홈</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>루트</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>다시 시도</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>중지</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>검색 중지 (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>새 검색…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>검색 결과 닫기</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>필터(부분 문자열 또는 와일드카드 * ?) — 닫으려면 Esc</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>%1에서 검색할 수 없습니다</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>검색 실패: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>검색 결과: %2에서 %1</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>알 수 없는 주소: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>잘못된 위치: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>%1을(를) 열 수 없습니다: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>%2개 중 %1개 선택됨, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>폴더 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>파일 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[%1 기준] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[모든 버전] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — 검색 중… (%1개 검사함)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — 결과 %n개에서 검색 중지됨</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — 검색 중지됨</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — %1개 검사함</translation>
    </message>
    <message>
        <source> — compared: %1</source>
        <translation> — 비교: %1</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — 로드 중…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — 항목이 더 있습니다(아래로 스크롤)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>공유 링크 — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>다운로드(GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>업로드/바꾸기(PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>허용:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>분</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>시간</translation>
    </message>
    <message>
        <source>days</source>
        <translation>일</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>유효 기간:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>URL 복사(&amp;C)</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>QR 코드 표시(&amp;Q)</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>미리 서명된 URL은 최대 7일 동안 유효합니다. 만료 기간이 단축되었습니다.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>만료: %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>임시 자격 증명(세션 토큰, SSO 또는 수임된 역할)입니다. 자격 증명이 만료되면 URL도 작동하지 않습니다.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>만료 기간이 자격 증명에 맞게 단축되었습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>적용</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>속성 — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>일반</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>메타데이터</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>스토리지 및 암호화</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>권한</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>객체 잠금</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>체크섬</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>모든 헤더</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>키</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>값</translation>
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
        <translation>사용자 메타데이터(x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3는 헤더를 객체와 함께 저장하므로, 적용하면 객체를 자기 자신에게 복사합니다. ACL은 버킷 기본값으로 재설정되며 태그는 유지됩니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;최대 10개의 태그. 키는 최대 128자, 값은 최대 256자입니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>스토리지 클래스:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>암호화:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>고객 키(SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>소유자:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>피부여자</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>유형</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>권한</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>미리 제공된 ACL로 바꾸기:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>거버넌스(특별 권한으로 해제 가능)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>규정 준수(단축하거나 제거할 수 없음)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>보존 모드:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>보존 기한:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>거버넌스 모드 우회(거버넌스 보존을 단축하거나 제거하는 데 필요)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>법적 보존</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>알고리즘</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>저장된 값</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>로컬 파일</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>결과</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>로컬 파일과 비교…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>로드 중…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>객체를 로드할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>메타데이터를 로드할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>위치:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>파일</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>파일(%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>폴더(접두사)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>폴더</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>버킷</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>연결</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>유형:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>크기:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>수정한 날짜:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>링크 대상:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>권한:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>숨김:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>예</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>버전 ID:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>리전:</translation>
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
        <translation>태그를 사용할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;이 객체는 아카이브되었습니다. 스토리지 클래스를 변경하려면 복원된 사본이 필요합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;이 항목을 변경하면 객체를 자기 자신에게 복사합니다.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>이 버킷에서는 ACL이 비활성화되어 있습니다(객체 소유권: 버킷 소유자 적용). 액세스 권한을 부여하려면 버킷 정책을 사용하십시오.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>ACL을 사용할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>객체 소유권: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>객체 잠금 상태를 사용할 수 없습니다: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>이 버킷에서 객체 잠금이 활성화되어 있지 않습니다(버킷을 생성할 때만 활성화할 수 있음).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>%2까지 %1 모드로 보존됩니다.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>이 버전에는 보존이 설정되어 있지 않습니다.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>적용 중…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>잘못된 메타데이터 키 &quot;%1&quot;: 영문자, 숫자, &apos;-&apos;, &apos;_&apos;, &apos;.&apos;를 사용하십시오</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>메타데이터가 저장되었습니다.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>태그가 저장되었습니다.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>변경된 내용이 없습니다.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>스토리지 설정이 저장되었습니다.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL이 %1(으)로 설정되었습니다.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>객체 잠금 설정이 저장되었습니다.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>로컬 파일과 비교</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>%1의 체크섬 계산 중…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>일치</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>다름</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>객체에 비교할 수 있는 체크섬이 없습니다.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>로컬 파일이 객체와 일치합니다.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>로컬 파일이 객체와 다릅니다.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>고객 키를 사용하려면 저장된 연결이 필요합니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>여기에서는 버전 목록이 지원되지 않습니다</translation>
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
        <translation>공급자 없음</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>임시 디렉터리를 만들 수 없습니다</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>큰 파일</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot;의 크기는 %2입니다. 임시 파일로 다운로드하시겠습니까?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>이전 버전은 편집할 수 없습니다. 먼저 버전을 복원하십시오</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>%1 다운로드 중…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>취소</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>%1을(를) 다운로드할 수 없습니다</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>이 파일을 열 애플리케이션이 없습니다</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>이 파일을 편집할 애플리케이션이 없습니다</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>변경 내용 업로드</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>&quot;%1&quot;이(가) 수정되었습니다. %2에 업로드하시겠습니까?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>원격 파일이 변경됨</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1을(를) 연 이후 서버에서 변경되었습니다. 내 버전으로 덮어쓰시겠습니까?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>%1을(를) 업로드할 수 없습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>아카이브에서 복원</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>%1의 읽을 수 있는 임시 사본을 요청합니다. 아카이브된 객체는 그대로 유지되며, 사본은 만료될 때까지 버킷의 표준 요금으로 청구됩니다.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> 일</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>사본 보관 기간:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>표준(Glacier: 3–5시간, Deep Archive: 12시간 이내)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>대량(가장 저렴, 5–12시간, Deep Archive: 48시간 이내)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>신속(Glacier만 해당, 1–5분, 가장 비쌈)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>검색 계층:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>복원 요청</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>알 수 없는 객체 소유권 설정</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>JSON 구문 오류(%1행, %2열): %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>%2에 알 수 없는 필드 &quot;%1&quot;이(가) 있습니다</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>버전 관리</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>기본 암호화</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>수명 주기 규칙</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>버킷 정책</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>퍼블릭 액세스 차단</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>태그</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>정적 웹 사이트 호스팅</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>객체 잠금</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>객체 소유권</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>버킷 이름은 3~63자여야 합니다.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>버킷 이름에는 영문 소문자, 숫자, 점, 하이픈만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>버킷 이름은 문자나 숫자로 시작하고 끝나야 합니다.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>버킷 이름에 점을 두 개 연속으로 사용할 수 없습니다.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>버킷 이름은 IP 주소 형식일 수 없습니다.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>버킷 이름은 &quot;%1&quot;(으)로 시작할 수 없습니다(AWS에서 예약됨).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>버킷 이름은 &quot;%1&quot;(으)로 끝날 수 없습니다(AWS에서 예약됨).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>점이 포함된 이름은 가상 호스팅 방식 HTTPS 주소 지정(TLS 인증서가 일치하지 않음) 또는 Transfer Acceleration에서 작동하지 않습니다.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>규칙 ID는 최대 255자까지 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>규칙에는 전환, 만료 또는 불완전한 업로드 중단 중 하나 이상의 작업이 필요합니다.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>최소 객체 크기는 최대 크기보다 작아야 합니다.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>태그 키는 1~128자여야 합니다.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>태그 값은 최대 256자까지 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>태그로 필터링하는 규칙은 불완전한 업로드를 중단할 수 없습니다(업로드에는 태그가 없음).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>태그로 필터링하는 규칙은 만료된 삭제 마커를 제거할 수 없습니다.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>객체는 빨라도 1일 후에 만료될 수 있습니다.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>만료에는 일 수 또는 날짜 중 하나를 선택하십시오.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>만료된 삭제 마커 제거는 같은 규칙에서 현재 버전 만료와 함께 사용할 수 없습니다.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>알 수 없는 전환 스토리지 클래스 &quot;%1&quot;입니다.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>%1(으)로의 전환이 두 개 있습니다.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>각 전환에는 일 수 또는 날짜가 필요합니다.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>객체는 빨라도 30일 후에 %1(으)로 이동할 수 있습니다.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>규칙의 모든 전환과 만료에 일 수 또는 날짜 중 한 가지만 사용하십시오.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>만료는 마지막 전환 이후여야 합니다.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>%1(으)로의 최신이 아닌 버전 전환이 두 개 있습니다.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>최신이 아닌 버전은 빨라도 1일 후에 이동할 수 있습니다.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>보존할 최신 버전 수는 1~100 사이여야 합니다.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>최신이 아닌 버전은 빨라도 1일 후에 삭제할 수 있습니다.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>최신 버전을 보존하려면 최신이 아닌 버전 만료가 필요합니다.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>불완전한 업로드는 빨라도 1일 후에 중단할 수 있습니다.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>접두사 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>태그 %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>%1보다 큼</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>%1보다 작음</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>전체 버킷</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>%2일 후 %1(으)로</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>%2에 %1(으)로</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>%1일 후 만료</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>%1에 만료</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>만료된 삭제 마커 제거</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>%2일 후 최신이 아닌 버전을 %1(으)로</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>%1일 후 최신이 아닌 버전 삭제(%2개 유지)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>%1일 후 최신이 아닌 버전 삭제</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>%1일 후 업로드 중단</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>버킷에는 최대 1000개의 수명 주기 규칙을 지정할 수 있습니다.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>규칙 %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>규칙 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: 다른 규칙과 ID가 같습니다.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>구성</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>규칙 %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1: JSON 객체가 아닙니다</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status는 &quot;Enabled&quot; 또는 &quot;Disabled&quot;여야 합니다</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> 필터</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>CORS 규칙에는 허용된 오리진이 하나 이상 필요합니다.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>CORS 규칙에는 허용된 메서드가 하나 이상 필요합니다.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>지원되지 않는 메서드 &quot;%1&quot;입니다(GET, PUT, POST, DELETE 또는 HEAD 사용).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>잘못된 오리진 &quot;%1&quot;: &quot;*&quot; 와일드카드는 하나만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>잘못된 헤더 &quot;%1&quot;: &quot;*&quot; 와일드카드는 하나만 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>최대 기간은 음수일 수 없습니다.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>버킷에는 최대 100개의 CORS 규칙을 지정할 수 있습니다.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>규칙 %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>정책은 JSON 객체여야 합니다.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>&quot;Version&quot;이 없습니다. &quot;Version&quot;: &quot;2012-10-17&quot;을 추가하십시오(없으면 정책 변수가 작동하지 않음).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>알 수 없는 정책 버전 &quot;%1&quot;입니다(&quot;2012-10-17&quot; 사용).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>버전 &quot;2008-10-17&quot;은 오래되었습니다. &quot;2012-10-17&quot;을 사용하십시오.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>정책에는 &quot;Statement&quot;(객체 또는 객체 배열)가 필요합니다.</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>정책에 문이 없습니다.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>문 %1은(는) 객체가 아닙니다.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>문 %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>문 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: Sid가 두 번 사용되었습니다.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot;는 &quot;Allow&quot; 또는 &quot;Deny&quot;여야 합니다.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: 버킷 정책에는 &quot;Principal&quot;이 필요합니다.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: &quot;Action&quot;이 없습니다.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: &quot;Resource&quot;가 없습니다.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot;은(는) S3 작업이 아닙니다.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot;은(는) S3 리소스 ARN이 아닙니다.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot;은(는) 이 버킷(%3)에 속하지 않습니다.</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1은(는) 모든 사용자에게 액세스 권한을 부여합니다(조건 없는 Principal &quot;*&quot;).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>퍼블릭 읽기(누구나 객체를 다운로드할 수 있음)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>TLS를 사용하지 않는 요청 거부</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>다른 AWS 계정에 대한 읽기 전용 액세스</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>모든 요청 리디렉션은 문서 또는 리디렉션 규칙과 함께 사용할 수 없습니다.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>리디렉션 프로토콜은 http 또는 https여야 합니다.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>웹 사이트 호스팅에는 인덱스 문서(또는 모든 요청 리디렉션)가 필요합니다.</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>인덱스 문서에는 &quot;/&quot;를 포함할 수 없습니다(폴더 요청에 추가되는 접미사임).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>각 리디렉션 규칙에는 리디렉션이 필요합니다.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>리디렉션 규칙은 키 또는 키 접두사 중 하나만 바꿀 수 있습니다.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>리디렉션 규칙은 JSON 배열이어야 합니다.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>리디렉션 규칙 %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>보존 모드는 GOVERNANCE 또는 COMPLIANCE여야 합니다.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>기본 보존을 사용하려면 버킷에서 객체 잠금이 활성화되어 있어야 합니다.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>기본 보존 기간을 일 또는 년 중 하나로 설정하십시오.</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>기본 보존 기간은 최대 100년입니다.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>버킷에는 최대 50개의 태그를 지정할 수 있습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>인증에 실패했습니다. 액세스 키와 시크릿을 확인하십시오</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>컴퓨터 시계가 서버 시간과 너무 많이 다릅니다</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>객체가 없습니다</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>버킷이 없습니다</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>멀티파트 업로드가 없습니다</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>객체가 아카이브되었습니다. 복원을 요청하고(S3 &gt; 아카이브에서 복원) 사용할 수 있을 때까지 기다리십시오</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>액세스가 거부되었습니다</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>버킷이 이미 있습니다</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>버킷이 비어 있지 않습니다</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>서비스가 요청을 제한하고 있습니다. 나중에 다시 시도하십시오</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>네트워크 오류: 엔드포인트에 연결할 수 없습니다</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>요청 시간이 초과되었습니다</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>버킷이 구성된 리전과 다른 리전에 있습니다</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>서비스에서 이 작업을 지원하지 않습니다</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>찾을 수 없음</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>요청이 잘못되어 거부되었습니다</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>S3 요청이 실패했습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>알 수 없는 미리 제공된 ACL: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>미리 서명된 URL은 객체에만 사용할 수 있습니다</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>URL에 서명할 수 없습니다(사용 가능한 자격 증명 없음)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>MD5 (ETag)</source>
        <translation>MD5(ETag)</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Provider</name>
    <message>
        <source>Not an S3 location</source>
        <translation>S3 위치가 아닙니다</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>해당 객체 또는 폴더가 없습니다: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>여기에서는 버킷 생성이 지원되지 않습니다</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>버킷이 이미 있습니다</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>이미 있습니다: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>여기에서는 버킷 삭제가 지원되지 않습니다</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>객체 %n개를 삭제할 수 없습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3에는 이름 바꾸기가 없습니다. 복사 후 삭제하십시오</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1의 무결성 검사에 실패했습니다</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>버킷 %1에 구성된 SSE-C 키가 없습니다</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1이(가) 원본의 %2와(과) 다릅니다</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>%1바이트 저장됨, %2바이트 예상됨</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>다운로드 불완전: %2바이트 중 %1바이트</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1이(가) ETag %2와(과) 다릅니다</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>%1을(를) 바꿀 수 없습니다</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1에 쓸 수 없습니다</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>해당 파일이 없습니다: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>디렉터리입니다: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>잘못된 대상: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1을(를) 읽을 수 없습니다</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1이(가) 로컬 MD5 %2와(과) 다릅니다</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>%1을(를) 읽는 중 오류가 발생했습니다</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1이(가) 예상 값 %2와(과) 다릅니다</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>연결 목록에서는 사용할 수 없습니다</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>S3 위치가 아닙니다</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>알 수 없는 연결</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>AWS 프로필 &quot;%1&quot;의 자격 증명을 가져올 수 없습니다. AWS SSO(IAM Identity Center)를 사용하는 경우 세션이 만료되었을 수 있습니다. &quot;aws sso login&quot;을 실행한 후 다시 시도하세요.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>환경에 AWS 자격 증명이 없습니다. 애플리케이션을 시작하기 전에 AWS_ACCESS_KEY_ID와 AWS_SECRET_ACCESS_KEY를 설정하세요.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>AWS 자격 증명을 찾을 수 없습니다(환경, ~/.aws 프로필, SSO, 웹 ID 또는 인스턴스 메타데이터). AWS SSO를 사용하는 경우 &quot;aws sso login&quot;을 실행한 후 다시 시도하세요.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>이 연결에 저장된 보안 키가 없습니다. 연결을 편집하여 입력하십시오</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>연결됨: 버킷 %n개 표시</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>연결됨(버킷 나열 권한 없음, 고정된 버킷 %n개에 액세스 가능)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3(AES-256, S3에서 관리하는 키)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS(AWS KMS 키)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C(고객 제공 키)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>객체에는 최대 10개의 태그를 지정할 수 있습니다.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>태그 키는 1~128자여야 합니다.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>태그 값은 최대 256자까지 사용할 수 있습니다.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>태그 키는 &quot;aws:&quot;로 시작할 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>아카이브되지 않음</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>아카이브됨, 복원 진행 중</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>아카이브됨, 복원된 사본을 %1까지 사용 가능</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>아카이브됨, 데이터를 읽으려면 복원하십시오</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>버전이 아닙니다: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>버전 %n개를 삭제할 수 없습니다</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1은(는) 삭제되지 않았습니다</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>%1의 버전이 없습니다</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>알 수 없는 복원 계층: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>하루 이상 복원하십시오</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>&quot;%1&quot; 아래</translation>
    </message>
    <message>
        <source>≥ %1</source>
        <translation>≥ %1</translation>
    </message>
    <message>
        <source>≤ %1</source>
        <translation>≤ %1</translation>
    </message>
    <message>
        <source>modified after %1</source>
        <translation>%1 이후 수정됨</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>%1 이전 수정됨</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>, </translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>위치 %1의 정규식이 잘못되었습니다: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>와일드카드 패턴 &quot;%1&quot;이(가) 잘못되었습니다: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>파일 찾기</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>검색 위치:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>예: *.log; report — 비워 두면 모두</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>와일드카드: * 임의의 텍스트, ? 한 문자, [abc] 이 중 하나. 여러 패턴은 &apos;;&apos;로 구분합니다. 와일드카드가 없는 텍스트는 이름의 어느 위치에서든 일치합니다.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>이름(&amp;N):</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>와일드카드</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>정규식</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>구문(&amp;Y):</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>대/소문자 구분(&amp;C)</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>검색 폴더 아래의 전체 경로와 비교(&amp;P)</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>이름만이 아니라 &quot;logs/2024/a.csv&quot;에 대해 &quot;2024/*.csv&quot;를 비교합니다. 이때 *는 &apos;/&apos;와도 일치합니다</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>예: logs/2024- (선택 사항)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>검색 폴더 아래에서 이 텍스트로 시작하는 경로만 검색합니다. S3에서는 서버가 이 키 접두사로 필터링하므로 전체를 나열하는 것보다 훨씬 빠릅니다.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>경로 접두사(&amp;R):</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>예: 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>예: 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>최소 크기(&amp;L):</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>최대 크기(&amp;O):</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>이후 수정됨(&amp;A):</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>이전 수정됨(&amp;B):</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>모두</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>스토리지 클래스(&amp;T):</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>파일 및 폴더</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>파일만</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>폴더만</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>포함(&amp;I):</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>숨김 파일 및 폴더 포함(&amp;H)</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>제한 없음</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>최대 결과 수(&amp;X):</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>검색(&amp;S)</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>&quot;%1&quot;은(는) 크기가 아닙니다(예: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>최소 크기가 최대 크기보다 큽니다.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>&quot;이후&quot; 날짜가 &quot;이전&quot; 날짜보다 늦습니다.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>폴더에는 크기, 날짜, 스토리지 클래스가 없습니다. 이 조건을 사용하려면 파일을 검색하세요.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>경로 접두사는 검색 폴더 밖을 가리킬 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>시스템 키체인 오류</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>시스템 키체인에 저장된 시크릿이 없습니다</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>시크릿을 찾을 수 없습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>설정</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>시스템 기본값(%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>언어(&amp;L):</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;새 언어는 S3 File Manager을(를) 다시 시작한 후에 적용됩니다.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>고객 암호화 키(SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>SSE-C 객체는 사용자가 보관하는 256비트 키로 암호화됩니다. S3는 키를 저장하지 않으므로 &lt;b&gt;키를 잃어버리면 객체를 읽을 수 없습니다&lt;/b&gt;. 키는 시스템 키체인에 보관됩니다.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64(44자) 또는 16진수 64자리</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>표시</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>생성</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>자체 키가 없는 이 연결의 모든 버킷에 사용</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>키 제거</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>버킷 %1에 키가 구성되어 있습니다(MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>버킷 %1에 구성된 키가 없습니다.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>키는 base64 또는 16진수 64자리 형식의 32바이트여야 합니다.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>버킷 %1의 키를 제거하시겠습니까? 이 키로 암호화된 객체는 키 없이 읽을 수 없습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>옵션(&amp;O)</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>묻기</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>덮어쓰기</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>건너뛰기</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>모두 유지(새 파일 이름 바꾸기)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>더 최신이면 덮어쓰기</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>크기가 다르면 덮어쓰기</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>파일이 있는 경우:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>예: *.jpg; *.png(비워 두면 모두)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>다음과 일치하는 파일만:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>예: *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>제외:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>전송 후 무결성 확인(크기, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>수정 시간 유지</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>심볼릭 링크 따라가기(그렇지 않으면 건너뜀)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>연결 기본값</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>S3 스토리지 클래스:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>S3 암호화:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>전송</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>일시 중지</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>다시 시작</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>취소</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>실패한 항목 다시 시도</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>위로 이동</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>아래로 이동</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>제거</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>모두 일시 중지</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>모두 다시 시작</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>완료된 항목 지우기</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>설정…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1개 실행 중, %2개 대기 중</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1개 실행 중</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>전송 오류</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>요청 ID: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>전송 취소</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>&quot;%1&quot;을(를) 취소하시겠습니까? 일부 전송된 파일은 삭제됩니다.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>전송 제거</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>&quot;%1&quot;을(를) 제거하시겠습니까? 완료되지 않았으므로 일부 전송된 데이터는 삭제됩니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>항목 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>%1을(를) %2(으)로 복사</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>%1을(를) %2(으)로 이동</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 삭제</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>이 위치에 대한 공급자가 없습니다</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>원본과 대상이 같습니다</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>폴더를 자기 자신 안으로 복사할 수 없습니다</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>사용 가능한 이름을 찾을 수 없습니다</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>같은 이름의 폴더가 이미 있습니다</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>대기 중</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>일시 중지됨</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>완료, %n개 건너뜀</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>완료</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>실패</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>취소됨</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>시작 중</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>검색 중</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>삭제 중</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>이동 중</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>복사 중</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>마무리 중</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(오류 %n개)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>항목 %n개</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / 파일 %n개</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>전송</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>상태</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>진행률</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>속도</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>남은 시간</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>전송 설정</translation>
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
        <translation>무제한</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>시작 시 중단된 전송 자동으로 다시 시작</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>동시 전송 수:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>전송당 병렬 파일 수:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>파일당 병렬 파트 수:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>멀티파트 사용 기준 크기:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>파트 크기:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>대역폭 제한:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>파일당 재시도 횟수:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;매우 큰 파일의 경우 파트 크기가 자동으로 커집니다(S3는 최대 10,000개의 파트를 허용). 변경 내용은 이후에 시작되는 전송에 적용되며, 대역폭 제한은 즉시 적용됩니다.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>버전 기록 — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>수정한 날짜</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>크기</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>스토리지 클래스</translation>
    </message>
    <message>
        <source>State</source>
        <translation>상태</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>버전 ID</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>보기(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>다운로드(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>현재 버전으로 복원(&amp;R)</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>영구적으로 삭제(&amp;P)…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>삭제 취소(&amp;U)</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>삭제할 때 거버넌스 모드 보존 우회</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>새로 고침</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>버전 로드 중…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>삭제 마커(객체 삭제됨)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>삭제 마커</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>현재</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>이전</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>버전이 없습니다.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>버전 및 삭제 마커 %n개.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>작업 중…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>버전 다운로드</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>%1 저장됨</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>선택한 버전이 다시 현재 버전이 되었습니다.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>버전 삭제</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>버전 %n개를 영구적으로 삭제하시겠습니까? 이 작업은 취소할 수 없습니다.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>버전 %n개를 삭제했습니다.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>객체가 복원되었습니다.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>보기 — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — 처음 %1 표시</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — 바이너리(%1), 처음 %2을(를) 16진수로 표시</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>기본 애플리케이션으로 열기</translation>
    </message>
</context>
</TS>
