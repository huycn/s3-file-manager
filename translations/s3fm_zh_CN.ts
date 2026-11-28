<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN" sourcelanguage="en">
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
        <translation>计算机</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>允许的源</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>方法</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>允许的标头</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>公开的标头</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>最长缓存时间（秒）</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>添加规则(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>删除规则(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>规则</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>多个值用逗号分隔。方法：GET、PUT、POST、DELETE、HEAD。每个源或标头只允许一个 &quot;*&quot; 通配符。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>应用(&amp;A)</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>已删除 CORS 配置</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>已保存 CORS 规则</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3（由 S3 管理密钥）</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS（AWS KMS 密钥）</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS（双层加密，AWS KMS 密钥）</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>默认加密(&amp;E)：</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>密钥 ID、ARN 或别名（留空：aws/s3 托管密钥）</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>KMS 密钥(&amp;K)：</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>使用 S3 存储桶密钥(&amp;B)（减少 KMS 请求，降低成本）</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>适用于此后写入且未自行指定加密方式的对象。现有对象保留其加密方式（可通过“编辑对象”重写以更改）。未设置时 AWS 使用 SSE-S3 加密。</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>已保存默认加密</translation>
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
        <translation>状态</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>适用范围</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>操作</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>添加(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>编辑(&amp;E)…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>启用/禁用(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>删除(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>规则</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>规则每天运行一次。JSON 使用 &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt; 的格式。S3 兼容服务可能会忽略其不支持的操作（MinIO 需要配置远程层才能进行转换）。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>应用(&amp;A)</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>（自动生成）</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>已启用</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>已禁用</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>规则已更改；点击“应用”将规则保存到存储桶。</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>已删除生命周期配置</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>已保存生命周期规则</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>启用对象锁定(&amp;E)…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>监管模式（拥有特殊权限的用户可以移除）</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>合规模式（任何人都无法移除，包括根账户）</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>默认保留(&amp;R)：</translation>
    </message>
    <message>
        <source>days</source>
        <translation>天</translation>
    </message>
    <message>
        <source>years</source>
        <translation>年</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>期限(&amp;P)：</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>新对象版本将使用默认保留设置，除非上传时自行指定。处于保留期内的版本在期限结束前无法删除或覆盖。</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>启用对象锁定</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>要在 %1 上启用对象锁定吗？此操作无法撤销，且版本控制将永久保持启用。（某些服务仅允许在创建存储桶时启用。）</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>已启用对象锁定</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n 天</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n 年</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>对象锁定</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>合规模式的保留期任何人都无法缩短或移除。新版本将在 %1 内无法删除。是否继续？</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>已保存默认保留设置</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>此存储桶已启用对象锁定。</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>此存储桶未启用对象锁定。</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>区域</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>创建时间</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>所有者</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>强制存储桶所有者（已禁用 ACL）</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>首选存储桶所有者</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>对象写入者</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>对象所有权</translation>
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
        <translation>模板(&amp;T)</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>存储桶策略</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>要用模板替换当前文本吗？</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>格式化(&amp;F)</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>没有存储桶策略。请选择模板或粘贴策略文档。</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>删除策略(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>应用(&amp;A)</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>无法格式化：%1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>无策略。</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>未发现问题。</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>要删除 %1 的存储桶策略吗？</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>已删除存储桶策略</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>请先修正策略中的错误：%1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>此策略向互联网上的所有人授予访问权限。仍要应用吗？</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>已保存存储桶策略</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>存储桶属性 — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>概述</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>版本控制</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>加密</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>生命周期</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>策略</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>公共访问</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>网站</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>对象锁定</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>统计信息</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1：此终端节点不支持</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>阻止所有公共访问(&amp;A)</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>阻止通过新 ACL 授予的公共访问</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>忽略通过任何 ACL 授予的公共访问</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>阻止通过新存储桶策略授予的公共访问</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>将对具有公共策略的存储桶的访问限制为 AWS 服务和所有者账户</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>账户级设置同样适用，且优先于这些设置。关闭阻止本身不会公开任何内容。</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>公共访问</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>要允许 %1 的公共访问设置吗？之后对象可能通过 ACL 或存储桶策略变为公开。</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>已保存公共访问设置</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>键前缀：</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>（整个存储桶）</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>计算(&amp;C)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>类别</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>对象</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>通过列出每个对象版本进行统计（每 1000 个键一次请求），大型存储桶需要一段时间。对于包含数百万个对象的存储桶，S3 Storage Lens 或 CloudWatch 指标 BucketSizeBytes/NumberOfObjects 更快（每日更新）。</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>取消(&amp;C)</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>正在统计…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 字节</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>当前对象</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>非当前版本</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>删除标记</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>所有版本</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>未完成的分段上传</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>完成。</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>已取消：统计结果不完整。</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>应用(&amp;A)</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>正在应用…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>正在统计… %L1 项</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>键</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>最多 50 个标签；用于成本分配和访问控制。对象标签是单独设置的（编辑对象）。</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>已保存标签</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>版本控制：</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>MFA 删除：</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>启用版本控制后，覆盖或删除对象会将旧数据保留为非当前版本（按存储计费）。版本控制一旦启用便无法关闭，只能暂停：现有版本会保留。MFA 删除只能由根账户通过 API/CLI 更改。</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>启用版本控制(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>暂停版本控制(&amp;S)</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>已启用版本控制</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>暂停版本控制</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>要暂停 %1 的版本控制吗？新的写入将再次替换对象；现有版本会保留。</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>已暂停版本控制</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>已禁用（从未启用）</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>已启用</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>已暂停</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>已禁用</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>启用静态网站托管(&amp;W)</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>托管网站(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>索引文档(&amp;I)：</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>可选，例如 error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>错误文档(&amp;E)：</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>可选的重定向规则（JSON 数组），例如
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>路由规则(&amp;R)：</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>将所有请求重定向到另一主机(&amp;T)</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>例如 www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>主机名(&amp;N)：</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>与请求相同</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>协议(&amp;P)：</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>网站终端节点仅通过纯 HTTP 提供可公开读取的对象（存储桶策略、公共访问阻止）。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>应用(&amp;A)</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>网站终端节点：&lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>已保存网站配置</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>已禁用网站托管</translation>
    </message>
</context>
<context>
    <name>s3fm::Compare</name>
    <message>
        <source>only here</source>
        <translation>仅此处</translation>
    </message>
    <message>
        <source>newer</source>
        <translation>较新</translation>
    </message>
    <message>
        <source>older</source>
        <translation>较旧</translation>
    </message>
    <message>
        <source>different</source>
        <translation>不同</translation>
    </message>
    <message>
        <source>identical</source>
        <translation>相同</translation>
    </message>
    <message>
        <source>same size and time</source>
        <translation>大小和时间相同</translation>
    </message>
    <message>
        <source>file vs. folder</source>
        <translation>文件/文件夹</translation>
    </message>
    <message>
        <source>Missing in the other panel.</source>
        <translation>另一面板中没有。</translation>
    </message>
    <message>
        <source>Differs from the other panel and is newer.</source>
        <translation>与另一面板不同，且较新。</translation>
    </message>
    <message>
        <source>Differs from the other panel and is older.</source>
        <translation>与另一面板不同，且较旧。</translation>
    </message>
    <message>
        <source>Differs from the other panel.</source>
        <translation>与另一面板不同。</translation>
    </message>
    <message>
        <source>Same content as in the other panel.</source>
        <translation>内容与另一面板相同。</translation>
    </message>
    <message>
        <source>Same size and time as in the other panel.</source>
        <translation>大小和时间与另一面板相同。</translation>
    </message>
    <message>
        <source>The other panel has a file where this is a folder, or the other way round.</source>
        <translation>这里是文件夹而另一面板中是文件，或者相反。</translation>
    </message>
    <message>
        <source>The content differs.</source>
        <translation>内容不同。</translation>
    </message>
    <message>
        <source>The content could not be checked.</source>
        <translation>无法检查内容。</translation>
    </message>
    <message numerus="yes">
        <source>%n only here</source>
        <translation>
            <numerusform>仅此处 %n 项</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n newer</source>
        <translation>
            <numerusform>较新 %n 项</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n older</source>
        <translation>
            <numerusform>较旧 %n 项</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n different</source>
        <translation>
            <numerusform>不同 %n 项</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n identical</source>
        <translation>
            <numerusform>相同 %n 项</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n not verified</source>
        <translation>
            <numerusform>未验证 %n 项</numerusform>
        </translation>
    </message>
    <message>
        <source>nothing to compare</source>
        <translation>没有可比较的项目</translation>
    </message>
    <message>
        <source>, </source>
        <comment>list separator in the comparison summary</comment>
        <translation>，</translation>
    </message>
</context>
<context>
    <name>s3fm::CompareDialog</name>
    <message>
        <source>Compare Panels</source>
        <translation>比较面板</translation>
    </message>
    <message>
        <source>Compare modification &amp;times</source>
        <translation>比较修改时间(&amp;T)</translation>
    </message>
    <message>
        <source> s</source>
        <comment>seconds</comment>
        <translation> 秒</translation>
    </message>
    <message>
        <source>T&amp;olerance:</source>
        <translation>容差(&amp;O)：</translation>
    </message>
    <message>
        <source>Compare the &amp;content of files with the same size</source>
        <translation>比较大小相同的文件的内容(&amp;C)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Local files are read. S3 objects are compared by ETag (the MD5 sum of single-part uploads) and stored checksums; when the ETag alone does not tell, one or two requests per object are needed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;将读取本地文件。S3 对象按 ETag（单部分上传的 MD5 值）和已存储的校验和进行比较；仅凭 ETag 无法判断时，每个对象需要一到两个请求。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Mark &amp;folders that exist on one side only</source>
        <translation>标记仅存在于一侧的文件夹(&amp;F)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Only the listings shown are compared, not the contents of folders. Items missing on the other side, newer, or different are selected in both panels, ready to copy with F5. S3 times are upload times.&lt;/small&gt;</source>
        <translation>&lt;small&gt;只比较显示的列表，不比较文件夹中的内容。另一侧缺少的、较新的或不同的项目会在两个面板中被选中，可直接按 F5 复制。S3 的时间是上传时间。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Compare</source>
        <translation>比较</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>文件已存在</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>目标位置已存在 &lt;b&gt;%1&lt;/b&gt;。要覆盖吗？</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>新文件：</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>现有文件：</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>新文件较新。</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>现有文件较新或相同。</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>两者大小相同。</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>大小不同。</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>对此传输中的所有剩余冲突执行相同操作(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>覆盖(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>跳过(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>保留两者(&amp;K)</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>以新名称复制，例如“name (2).ext”</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>如果较新(&amp;N)</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>仅当新文件较新时覆盖，否则跳过</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>如果大小不同(&amp;Z)</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>仅当大小不同时覆盖，否则跳过</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>取消传输</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>复制</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>导入 AWS 配置文件…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>为 %1 中的配置文件创建连接</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名称(&amp;N)：</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>用于 s3://&lt;id&gt;/bucket/key 之类的地址。保存后无法更改。</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>ID(&amp;I)：</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>提供商(&amp;P)：</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Amazon S3 请留空</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>终端节点 URL(&amp;E)：</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>区域(&amp;R)：</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>自动</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>虚拟托管（bucket.host）</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>路径样式（host/bucket）</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>寻址方式(&amp;A)：</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>凭证</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>访问密钥和私有密钥</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>AWS 配置文件（~/.aws）</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>环境变量</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>默认 AWS 凭证链</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>匿名（公共存储桶）</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>访问密钥 ID：</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>私有访问密钥：</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>可选（临时凭证）</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>会话令牌：</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>密钥存储在系统钥匙串中，绝不会存储在设置文件中。</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>配置文件：</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>支持静态密钥、SSO、assume-role（role_arn / source_profile）和 credential_process 配置文件。</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>验证 TLS 证书</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>系统证书</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>浏览…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>CA 证书包</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>证书 (*.pem *.crt);;所有文件 (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>CA 证书包：</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>支持时（AWS 默认）</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>仅在需要时（兼容性最佳）</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>某些 S3 兼容服务会拒绝较新的完整性校验和标头。</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>请求校验和：</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>存储桶默认值</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>上传存储类别：</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>即使凭证无权列出存储桶，也要显示的存储桶。</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>固定的存储桶：</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b，或 * 表示全部</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>申请方付款存储桶：对其发出的请求将计入您的账户（x-amz-request-payer）。</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>申请方付款：</translation>
    </message>
    <message>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>请求超时：</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>测试连接(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>打开(&amp;O)</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>已存储在钥匙串中 — 留空则保持不变</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>新建 %1 连接</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1（副本）</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>删除连接</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>要删除连接“%1”及其存储的密钥吗？</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS：%1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>导入 AWS 配置文件</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>在 %1 中未找到配置文件。</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>所有 AWS 配置文件均已导入。</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>使用启动应用程序时环境中的 AWS_ACCESS_KEY_ID、AWS_SECRET_ACCESS_KEY 和 AWS_SESSION_TOKEN。</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>按 AWS SDK 的标准顺序依次尝试环境变量、默认配置文件、SSO、Web 身份以及容器/实例凭证。</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>请求不签名。只能访问公共存储桶和对象。</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>保存连接</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>ID 为“%1”的连接已存在。</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>请输入私有访问密钥。</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>正在测试…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>未保存的更改</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>要保存对“%1”的更改吗？</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>连接 *</translation>
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
        <translation>其他 S3 兼容服务</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>请输入连接名称。</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>ID 只能包含小写字母、数字、“.”、“-”和“_”。</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>终端节点必须是 http:// 或 https:// URL。</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>请替换终端节点 URL 中的占位符。</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>请输入 S3 兼容服务的终端节点 URL。</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>请输入区域（例如 us-east-1）。</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>请输入访问密钥 ID。</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>请选择 AWS 配置文件。</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>无法写入设置文件</translation>
    </message>
</context>
<context>
    <name>s3fm::ContentCompare</name>
    <message>
        <source>Error reading %1</source>
        <translation>读取 %1 时出错</translation>
    </message>
    <message>
        <source>The object has no checksum to compare with (encrypted with SSE-KMS or SSE-C, and no stored checksum).</source>
        <translation>该对象没有可用于比较的校验和（使用 SSE-KMS 或 SSE-C 加密，且没有存储的校验和）。</translation>
    </message>
    <message>
        <source>The objects were uploaded in different parts or are encrypted with SSE-KMS or SSE-C; their ETags do not tell whether the content is the same.</source>
        <translation>这些对象以不同的分段上传，或使用 SSE-KMS 或 SSE-C 加密；无法通过 ETag 判断内容是否相同。</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>新建存储桶</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>小写字母、数字、点和连字符</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名称(&amp;N)：</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>终端节点默认值</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>区域(&amp;R)：</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>默认（强制存储桶所有者：已禁用 ACL）</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>首选存储桶所有者（已启用 ACL）</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>对象写入者（已启用 ACL）</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>对象所有权(&amp;O)：</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>预设 ACL(&amp;A)：</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>启用对象锁定(&amp;L)（将开启版本控制；无法关闭）</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;新建的 AWS 存储桶默认阻止公共访问；在放宽公共访问阻止之前，公共 ACL 会失败。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>创建</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>请输入存储桶名称。</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>删除存储桶</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>要永久删除空存储桶 &lt;b&gt;%1&lt;/b&gt; 吗？</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>对象</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>对象版本或删除标记</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>未完成的分段上传</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 不为空：其中包含 %2。&lt;br&gt;&lt;br&gt;要删除它，需要先删除所有对象、所有版本和所有未完成的上传。&lt;b&gt;此操作无法撤销。&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>清空存储桶，然后将其删除(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>绕过监管模式保留(&amp;B)（需要 s3:BypassGovernanceRetention 权限）</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>输入存储桶名称以确认：</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>清空并删除</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>不更改 / 存储桶默认值</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>KMS 密钥 ID、ARN 或别名（留空：aws/s3）</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>没有用于 %1 的提供程序</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>存储桶</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>%1 文件</translation>
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
        <translation>删除标记（已删除）</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>删除标记</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1（当前）</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>修改时间</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>存储类别</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>Comparison</source>
        <translation>比较</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>操作已取消</translation>
    </message>
</context>
<context>
    <name>s3fm::Format</name>
    <message>
        <source>%1 B</source>
        <comment>size in bytes</comment>
        <translation>%1 字节</translation>
    </message>
    <message>
        <source>%1/s</source>
        <comment>transfer rate</comment>
        <translation>%1/秒</translation>
    </message>
</context>
<context>
    <name>s3fm::KeyValueEditor</name>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> 天</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>字节（留空：无限制）</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>生命周期规则</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>可选；由 S3 生成</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>已启用(&amp;E)</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>规则 ID(&amp;I)：</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>筛选条件(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>当前版本(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>非当前版本 &amp;&amp; 上传(&amp;N)</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>规则适用于符合以下所有条件的对象；如果没有条件，则适用于整个存储桶。</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>例如 logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>键前缀(&amp;P)：</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>大于：</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>小于：</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>对象标签：</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>转换到存储类别</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>之后（天数或 YYYY-MM-DD）</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>转换：</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>从不</translation>
    </message>
    <message>
        <source>After</source>
        <translation>之后</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>在指定日期</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>使对象过期（删除）：</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>删除过期的删除标记（没有非当前版本的标记）</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;在启用版本控制的存储桶中，使当前版本过期会添加删除标记；数据将作为非当前版本保留。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>成为非当前版本后的天数</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>保留最新的版本数（可选）</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>删除时间</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>保留最新的</translation>
    </message>
    <message>
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>非当前版本：</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>在以下时间后中止未完成的分段上传</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>上传：</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>没有该文件或目录：%1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>权限被拒绝</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>不是本地位置</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>不是目录：%1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>权限被拒绝：%1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>无效的目录</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>已存在：%1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>无法创建目录 %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>拒绝删除文件系统根目录</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1：未找到</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… 以及其他 %1 项</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>%n 个项目无法删除</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>无法移动 %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>无法直接跨文件系统移动目录</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>是目录：%1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>无法读取 %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>无法写入 %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>读取 %1 时出错</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>写入 %1 时出错</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1 的完整性校验失败</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>已写入 %1 字节，预期 %2 字节</translation>
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
        <translation>已上传 %1</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>编辑(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>复制(&amp;C)…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>移动(&amp;M)…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>重命名(&amp;R)…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>新建文件夹(&amp;F)…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>删除(&amp;D)…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>设置(&amp;G)…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>退出(&amp;Q)</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>复制位置(&amp;L)</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>复制 S3 URI(&amp;U)</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>复制 HTTP URL(&amp;H)</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>复制 ARN(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>属性(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>共享链接（预签名 URL）(&amp;S)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>显示版本(&amp;V)</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>按时间点浏览(&amp;A)…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>版本历史记录(&amp;H)…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>从存档还原(&amp;R)…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>未完成的分段上传(&amp;I)…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>新建存储桶(&amp;B)…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>存储桶属性(&amp;U)…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>全选(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>取消全选(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>反向选择(&amp;I)</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>快速筛选(&amp;F)…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>查找文件(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Compare Panels…</source>
        <translation>比较面板(&amp;C)…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>转到所在文件夹(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>刷新(&amp;R)</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>显示隐藏文件(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>交换面板(&amp;S)</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>在另一面板中打开(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>后退(&amp;B)</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>前进(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>主目录(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>根目录(&amp;R)</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>编辑地址(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>左侧面板位置(&amp;L)…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>右侧面板位置(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>管理连接(&amp;M)…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>显示传输(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>全部暂停(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>全部继续(&amp;R)</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>清除已完成(&amp;C)</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>传输设置(&amp;S)…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>键盘快捷键(&amp;K)</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>关于(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>文件(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>选择(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>视图(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>转到(&amp;G)</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>传输(&amp;T)</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S3(&amp;3)</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>连接(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>帮助(&amp;H)</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>主目录</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>根目录 (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>S3 连接</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>所有连接</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>与另一面板相同</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>查找文件</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>请打开一个存储桶以在其中搜索。</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>请打开一个驱动器以在其中搜索。</translation>
    </message>
    <message>
        <source>Compare Panels</source>
        <translation>比较面板</translation>
    </message>
    <message>
        <source>Both panels need to show a folder.</source>
        <translation>两个面板都需要显示文件夹。</translation>
    </message>
    <message>
        <source>Leave the versions view to compare the panels.</source>
        <translation>请先退出版本视图再比较面板。</translation>
    </message>
    <message>
        <source>Both panels show the same folder.</source>
        <translation>两个面板显示的是同一个文件夹。</translation>
    </message>
    <message>
        <source>Comparing contents…</source>
        <translation>正在比较内容…</translation>
    </message>
    <message>
        <source>Comparison cancelled</source>
        <translation>已取消比较</translation>
    </message>
    <message>
        <source>A panel changed during the comparison; compare again.</source>
        <translation>比较期间面板发生了变化；请重新比较。</translation>
    </message>
    <message numerus="yes">
        <source>%n content check(s) failed; see the tooltips in the comparison column.</source>
        <translation>
            <numerusform>%n 项内容检查失败；请查看比较列中的工具提示。</numerusform>
        </translation>
    </message>
    <message>
        <source>Only the items loaded so far were compared (scroll down to load more).</source>
        <translation>仅比较了目前已加载的项目（向下滚动以加载更多）。</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>已将 %n 个位置复制到剪贴板</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>已排队：%1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>正在继续 %n 个中断的传输</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>已恢复 %n 个中断的传输；请在传输面板中继续</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>已完成：%1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1：%n 个错误</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>已取消：%1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>重启 S3 File Manager 后将使用新语言。</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>无法复制删除标记。</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>版本无法移动或重命名；请复制它们，或使用版本历史记录。</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>文件夹将按其当前内容进行复制。要复制文件夹，请退出“时间点”视图，或者选择文件。</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>版本视图</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 个项目</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>将 %1 移动到：</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>将 %1 复制到：</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 不支持重命名：会先复制对象，然后删除原始对象。</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>移动</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>无效的目标位置：%1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>重命名</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>新名称：</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>名称中不能包含路径分隔符。</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>无法在搜索结果中创建文件夹</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>无法在此处创建文件夹</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>新建文件夹</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>文件夹名称（使用 / 创建嵌套文件夹）：</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>无效的文件夹名称：%1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>在版本视图中只能删除版本。要删除文件夹，请退出该视图。</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>删除存储桶</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>请一次删除一个存储桶。</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>无法在此处删除这些项目</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>要永久删除文件夹“%1”及其中的所有内容吗？</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>要永久删除“%1”吗？</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>要永久删除所选的 %n 个项目吗？</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>没有可打开 %1 的应用程序</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>删除标记没有内容</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>请选择要编辑的 S3 对象或文件夹</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>已选择 %n 个项目</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>正在更新对象…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>已在处理 %n 个对象后取消</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>已更新 %n 个对象</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>编辑对象</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>已更新 %1/%n 个对象；%2 个失败。</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>请先关闭搜索结果</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>已删除 %Ln 个项目…</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>出错前%1，并%2。</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>已删除 %n 个项目</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>已中止 %n 个上传</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>只能在 S3 存储桶中显示版本</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>查看(&amp;V)</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>编辑元数据、标签、存储(&amp;T)…</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>%1 从未启用版本控制：每个对象只有一个版本</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>%1 的版本控制已暂停</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>时间点浏览仅适用于 S3 存储桶</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>按时间点浏览</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>显示此存储桶在某一时间点的状态，根据其版本历史记录重建（仅限启用了版本控制的存储桶）。</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>日期和时间：</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>返回当前</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>请选择一个 S3 对象</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>删除版本</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>要永久删除 %n 个版本吗？此操作无法撤销。</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>已删除 %n 个版本</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>请选择已存档的 S3 对象或文件夹</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>正在请求还原…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>已为 %n 个对象请求还原</numerusform>
        </translation>
    </message>
    <message>
        <source>%1; %2</source>
        <comment>restore summary: requested; skipped</comment>
        <translation>%1；%2</translation>
    </message>
    <message numerus="yes">
        <source>%n not archived, already restored or in progress</source>
        <translation>
            <numerusform>%n 个未存档、已还原或正在还原</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>从存档还原</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n 个失败。</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>请先打开一个 S3 存储桶</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>请先打开一个 S3 连接</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>正在创建存储桶 %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>新建存储桶</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>无法创建 %1：%2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>已创建存储桶 %1</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>请选择或打开一个存储桶</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>正在检查 %1 的内容…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>正在删除 %1 的内容…</translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>已删除存储桶 %1</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>已取消；已删除 %n 个项目</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>无法删除存储桶 %1。</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>%n 个项目无法删除（保留、合法保留或权限原因）。</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>请选择要共享的 S3 对象</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>打开</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>使用默认应用程序打开</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>设为当前版本</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>还原版本</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>取消删除</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>没有可复制的内容</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>已将 %n 行复制到剪贴板</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>切换面板</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>打开 / 上级文件夹</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>切换选择（并下移）/ 切换选择</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+方向键</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>扩展选择</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>输入字母</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>跳转到名称</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>键盘快捷键</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>关于 S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;适用于 Amazon S3 和 S3 兼容存储的双面板文件管理器。&lt;/p&gt;&lt;p&gt;基于 Qt %2 和 AWS SDK for C++ 构建。&lt;/p&gt;&lt;p&gt;MIT 许可证&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>未上传的远程编辑</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>部分已编辑的文件有尚未上传的更改。仍要退出吗？</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>仍有 %n 个传输正在进行。要退出并在下次启动时继续吗？</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>仍有 %n 个传输正在进行。要退出并放弃这些传输吗？</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>传输正在进行</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n 分钟</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n 小时</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n 天</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>未完成的分段上传 — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>中断的上传会保留其分段（及其存储费用），直到完成或中止为止。存储桶生命周期规则可以自动中止它们。</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>键前缀：</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>（整个存储桶）</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>键</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>开始时间</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>已持续</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>分段</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>存储类别</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>中止所选(&amp;S)…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>全部中止(&amp;A)…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>上传 ID：%1
发起者：%2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>没有未完成的上传。（某些 S3 兼容服务仅针对确切的对象键列出上传：请将其输入为前缀。）</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n 个未完成的上传，已存储 %1。</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>正在加载…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>中止上传</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>要中止 %n 个上传吗？其已上传的分段将被删除。</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>正在中止…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>编辑对象</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>更改 %1。只应用已勾选的部分；文件夹包括其下的所有内容。</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>标头和元数据</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>（不变）</translation>
    </message>
    <message>
        <source>Content-Type:</source>
        <translation>Content-Type：</translation>
    </message>
    <message>
        <source>Cache-Control:</source>
        <translation>Cache-Control：</translation>
    </message>
    <message>
        <source>Content-Disposition:</source>
        <translation>Content-Disposition：</translation>
    </message>
    <message>
        <source>Content-Encoding:</source>
        <translation>Content-Encoding：</translation>
    </message>
    <message>
        <source>Content-Language:</source>
        <translation>Content-Language：</translation>
    </message>
    <message>
        <source>Expires:</source>
        <translation>Expires：</translation>
    </message>
    <message>
        <source>Set user metadata:</source>
        <translation>设置用户元数据：</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>键</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>替换所有用户元数据（否则合并）</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>删除键：</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>存储类别</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>加密</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>标签（替换标签集）</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>访问控制（预设 ACL）</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;标头、存储类别和加密通过将每个对象复制到自身来更改（S3 无法以其他方式更改它们）；除非此处也设置了 ACL，否则这会重置其 ACL。已存档的对象（Glacier、Deep Archive）必须先还原。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>应用</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>请至少勾选一个要更改的部分。</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>无效的元数据键“%1”：请使用字母、数字、“-”、“_”和“.”</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>位置和连接</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>主目录</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>根目录</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>重试</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>停止搜索 (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>新建搜索…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>关闭搜索结果</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>筛选（子字符串或通配符 * ?）— 按 Esc 关闭</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>无法搜索 %1</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>搜索失败：%1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>搜索结果：%1，位于 %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>未知地址：%1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>无效的位置：%1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>无法打开 %1：%2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>已选择 %1/%2，%3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1，%2，%3</translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n 个文件</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n 个文件夹</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[截至 %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[所有版本] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — 正在搜索…（已扫描 %1 项）</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — 搜索已在 %n 个结果处停止</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — 搜索已停止</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — 已扫描 %1 项</translation>
    </message>
    <message>
        <source> — compared: %1</source>
        <translation> — 比较结果：%1</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — 正在加载…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — 还有更多项目（向下滚动）</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>共享链接 — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>下载 (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>上传/替换 (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>允许：</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>分钟</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>小时</translation>
    </message>
    <message>
        <source>days</source>
        <translation>天</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>有效期：</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>复制 URL(&amp;C)</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>显示二维码(&amp;Q)</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>预签名 URL 的有效期最长为 7 天；已缩短过期时间。</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>过期时间：%1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>这些是临时凭证（会话令牌、SSO 或代入的角色）：凭证过期后 URL 将失效。</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>过期时间已缩短以与之匹配。</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>应用</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>属性 — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>常规</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>元数据</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>存储和加密</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>权限</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>对象锁定</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>校验和</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>所有标头</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>键</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <source>Content-Type:</source>
        <translation>Content-Type：</translation>
    </message>
    <message>
        <source>Cache-Control:</source>
        <translation>Cache-Control：</translation>
    </message>
    <message>
        <source>Content-Disposition:</source>
        <translation>Content-Disposition：</translation>
    </message>
    <message>
        <source>Content-Encoding:</source>
        <translation>Content-Encoding：</translation>
    </message>
    <message>
        <source>Content-Language:</source>
        <translation>Content-Language：</translation>
    </message>
    <message>
        <source>Expires:</source>
        <translation>Expires：</translation>
    </message>
    <message>
        <source>User metadata (x-amz-meta-…):</source>
        <translation>用户元数据 (x-amz-meta-…)：</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 将标头与对象一起存储：应用时会将对象复制到自身。其 ACL 将重置为存储桶默认值；标签会保留。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;最多 10 个标签；键最长 128 个字符，值最长 256 个字符。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>存储类别：</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>加密：</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>客户密钥 (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>所有者：</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>被授权者</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>权限</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>替换为预设 ACL：</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>监管模式（拥有特殊权限可解除）</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>合规模式（无法缩短或移除）</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>保留模式：</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>保留至：</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>绕过监管模式（缩短或移除监管模式保留时需要）</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>合法保留</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>算法</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>已存储</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>本地文件</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>结果</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>与本地文件比较…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>正在加载…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>无法加载对象：%1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>无法加载元数据：%1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>位置：</translation>
    </message>
    <message>
        <source>File</source>
        <translation>文件</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>文件 (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>文件夹（前缀）</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>文件夹</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>存储桶</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>类型：</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>大小：</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>修改时间：</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>链接目标：</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>权限：</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>隐藏：</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag：</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>版本 ID：</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>区域：</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>S3 URI：</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation>URL：</translation>
    </message>
    <message>
        <source>ARN:</source>
        <translation>ARN：</translation>
    </message>
    <message>
        <source>Tags are not available: %1</source>
        <translation>标签不可用：%1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;此对象已存档；更改其存储类别需要先有还原的副本。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;更改这些设置会将对象复制到自身。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>此存储桶已禁用 ACL（对象所有权：强制存储桶所有者）。请使用存储桶策略授予访问权限。</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>ACL 不可用：%1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>对象所有权：%1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>对象锁定状态不可用：%1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>此存储桶未启用对象锁定（只能在创建存储桶时启用）。</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>以 %1 模式保留至 %2。</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>此版本未设置保留。</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>正在应用…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>无效的元数据键“%1”：请使用字母、数字、“-”、“_”和“.”</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>已保存元数据。</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>已保存标签。</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>没有任何更改。</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>已保存存储设置。</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL 已设置为 %1。</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>已保存对象锁定设置。</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>与本地文件比较</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>正在计算 %1 的校验和…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>匹配</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>不同</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>该对象没有可比较的校验和。</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>本地文件与对象一致。</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>本地文件与对象不同。</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>客户密钥需要已保存的连接。</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>此处不支持列出版本</translation>
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
        <translation>没有提供程序</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>无法创建临时目录</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>大文件</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>“%1”大小为 %2。要将其下载到临时文件吗？</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>无法编辑旧版本；请先还原该版本</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>正在下载 %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>无法下载 %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>没有可打开此文件的应用程序</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>没有可编辑此文件的应用程序</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>上传更改</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>“%1”已修改。要将其上传到 %2 吗？</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>远程文件已更改</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>自您打开 %1 以来，它已在服务器上被更改。要用您的版本覆盖它吗？</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>无法上传 %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>从存档还原</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>请求 %1 的临时可读副本。已存档的对象保持不变；副本在过期前按存储桶的标准费率计费。</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> 天</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>副本保留时长：</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>标准（Glacier：3–5 小时，Deep Archive：12 小时内）</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>批量（最便宜；5–12 小时，Deep Archive：48 小时内）</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>加急（仅限 Glacier；1–5 分钟，最昂贵）</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>检索层级：</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>请求还原</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>未知的对象所有权设置</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>JSON 语法错误，位于第 %1 行第 %2 列：%3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>%2 中存在未知字段“%1”</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>版本控制</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>默认加密</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>生命周期规则</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>存储桶策略</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>公共访问阻止</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>标签</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>静态网站托管</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>对象锁定</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>对象所有权</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>存储桶名称长度必须为 3 到 63 个字符。</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>存储桶名称只能包含小写字母、数字、点和连字符。</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>存储桶名称必须以字母或数字开头和结尾。</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>存储桶名称不能包含两个相邻的点。</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>存储桶名称不能采用 IP 地址格式。</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>存储桶名称不能以“%1”开头（AWS 保留）。</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>存储桶名称不能以“%1”结尾（AWS 保留）。</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>包含点的名称无法用于虚拟托管式 HTTPS 寻址（TLS 证书不匹配）或 Transfer Acceleration。</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>规则 ID 最多 255 个字符。</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>规则至少需要一个操作：转换、过期或中止未完成的上传。</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>最小对象大小必须小于最大值。</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>标签键必须为 1 到 128 个字符。</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>标签值最多 256 个字符。</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>按标签筛选的规则无法中止未完成的上传（上传没有标签）。</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>按标签筛选的规则无法删除过期的删除标记。</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>对象最早可在 1 天后过期。</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>请为过期设置选择天数或日期，二者选其一。</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>删除过期的删除标记不能与使当前版本过期在同一规则中组合使用。</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>未知的转换存储类别“%1”。</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>存在两个转换到 %1 的设置。</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>每个转换都需要天数或日期。</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>对象最早可在 30 天后转换到 %1。</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>规则中的所有转换和过期必须统一使用天数或日期。</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>过期时间必须晚于最后一次转换。</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>存在两个转换到 %1 的非当前版本转换。</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>非当前版本最早可在 1 天后转换。</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>要保留的较新版本数必须介于 1 到 100 之间。</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>非当前版本最早可在 1 天后删除。</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>保留较新的非当前版本需要设置非当前版本过期。</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>未完成的上传最早可在 1 天后中止。</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>前缀“%1”</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>标签 %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>大于 %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>小于 %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>整个存储桶</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>%2 天后转换到 %1</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>%2 转换到 %1</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>%1 天后过期</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>%1 过期</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>删除过期的删除标记</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>非当前版本 %2 天后转换到 %1</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>非当前版本 %1 天后删除（保留 %2 个）</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>非当前版本 %1 天后删除</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>%1 天后中止上传</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>一个存储桶最多可有 1000 条生命周期规则。</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>规则 %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>规则“%1”</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1：另一条规则具有相同的 ID。</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>配置</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>规则 %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 不是 JSON 对象</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1：Status 必须为 &quot;Enabled&quot; 或 &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> 筛选条件</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>CORS 规则至少需要一个允许的源。</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>CORS 规则至少需要一个允许的方法。</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>不支持的方法“%1”（请使用 GET、PUT、POST、DELETE 或 HEAD）。</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>无效的源“%1”：最多只能有一个 &quot;*&quot; 通配符。</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>无效的标头“%1”：最多只能有一个 &quot;*&quot; 通配符。</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>最长缓存时间不能为负数。</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>一个存储桶最多可有 100 条 CORS 规则。</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>规则 %1：%2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>策略必须是 JSON 对象。</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>缺少 &quot;Version&quot;：请添加 &quot;Version&quot;: &quot;2012-10-17&quot;（否则策略变量无法使用）。</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>未知的策略版本“%1”（请使用 &quot;2012-10-17&quot;）。</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>版本 &quot;2008-10-17&quot; 已过时；请使用 &quot;2012-10-17&quot;。</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>策略需要 &quot;Statement&quot;（一个对象或对象数组）。</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>策略中没有任何语句。</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>语句 %1 不是 JSON 对象。</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>语句 %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>语句“%1”</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1：Sid 重复使用。</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1：&quot;Effect&quot; 必须为 &quot;Allow&quot; 或 &quot;Deny&quot;。</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1：存储桶策略需要 &quot;Principal&quot;。</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1：缺少 &quot;Action&quot;。</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1：缺少 &quot;Resource&quot;。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1：“%2”不是 S3 操作。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1：“%2”不是 S3 资源 ARN。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1：“%2”不属于此存储桶（%3）。</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 向所有人授予访问权限（Principal 为 &quot;*&quot; 且没有条件）。</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>公共读取（任何人都可以下载对象）</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>拒绝未使用 TLS 的请求</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>向另一个 AWS 账户授予只读访问权限</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>重定向所有请求不能与文档或路由规则组合使用。</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>重定向协议必须为 http 或 https。</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>网站托管需要索引文档（或重定向所有请求）。</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>索引文档不能包含“/”（它是附加到文件夹请求的后缀）。</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>每条路由规则都需要一个重定向。</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>路由规则只能替换键或键前缀，不能同时替换两者。</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>路由规则必须是 JSON 数组。</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>路由规则 %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>保留模式必须为 GOVERNANCE 或 COMPLIANCE。</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>默认保留要求存储桶已启用对象锁定。</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>请以天或年为单位设置默认保留期限（二者选其一）。</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>默认保留期限最长为 100 年。</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>一个存储桶最多可有 50 个标签。</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>身份验证失败：请检查访问密钥和私有密钥</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>计算机时钟与服务器时间相差过大</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>对象不存在</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>存储桶不存在</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>分段上传不存在</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>该对象已存档；请请求还原（S3 &gt; 从存档还原），并等待其可用</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>访问被拒绝</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>存储桶已存在</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>存储桶不为空</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>服务正在限制请求速率；请稍后重试</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>网络错误：无法连接到终端节点</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>请求超时</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>存储桶所在区域与配置的区域不同</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>服务不支持此操作</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>未找到</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>请求因无效而被拒绝</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>S3 请求失败</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>未知的预设 ACL：%1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>预签名 URL 仅适用于对象</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>无法签名 URL（没有可用的凭证）</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
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
        <translation>不是 S3 位置</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>没有该对象或文件夹：%1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>此处不支持创建存储桶</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>存储桶已存在</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>已存在：%1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>此处不支持删除存储桶</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>%n 个对象无法删除</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 不支持重命名；请使用复制和删除</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1 的完整性校验失败</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>未为存储桶 %1 配置 SSE-C 密钥</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 与源的 %2 不同</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>已存储 %1 字节，预期 %2 字节</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>下载不完整：%1/%2 字节</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 与 ETag %2 不同</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>无法替换 %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>无法写入 %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>没有该文件：%1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>是目录：%1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>无效的目标位置：%1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>无法读取 %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 与本地 MD5 %2 不同</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>读取 %1 时出错</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 与预期的 %2 不同</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>在连接列表中无法执行此操作</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>不是 S3 位置</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>未知连接</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>无法获取 AWS 配置文件“%1”的凭证。如果它使用 AWS SSO（IAM Identity Center），会话可能已过期：请运行“aws sso login”后重试。</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>环境中没有 AWS 凭证：请在启动应用程序前设置 AWS_ACCESS_KEY_ID 和 AWS_SECRET_ACCESS_KEY。</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>未找到 AWS 凭证（环境变量、~/.aws 配置文件、SSO、Web 身份或实例元数据）。如果您使用 AWS SSO，请运行“aws sso login”后重试。</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>此连接未存储私有密钥；请编辑连接以输入密钥</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>已连接：可见 %n 个存储桶</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>已连接（无权列出存储桶；可访问 %n 个固定的存储桶）</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3（AES-256，由 S3 管理密钥）</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS（AWS KMS 密钥）</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C（客户提供的密钥）</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>一个对象最多可有 10 个标签。</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>标签键必须为 1 到 128 个字符。</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>标签值最多 256 个字符。</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>标签键不能以“aws:”开头。</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>未存档</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>已存档；正在还原</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>已存档；还原的副本可用至 %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>已存档；请还原后再读取数据</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>不是版本：%1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>%n 个版本无法删除</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 未被删除</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>%1 没有任何版本</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>未知的还原层级：%1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>还原时长至少为一天</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>位于“%1”下</translation>
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
        <translation>修改时间晚于 %1</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>修改时间早于 %1</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>，</translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>位置 %1 处的正则表达式无效：%2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>通配符模式“%1”无效：%2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>查找文件</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>搜索位置：</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>例如 *.log; report — 留空：全部</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>通配符：* 任意文本，? 一个字符，[abc] 其中之一。多个模式用“;”分隔。不含通配符的文本可匹配名称中的任意位置。</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名称(&amp;N)：</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>通配符</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>正则表达式</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>语法(&amp;Y)：</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>区分大小写(&amp;C)</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>匹配搜索文件夹下的完整路径(&amp;P)</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>用“2024/*.csv”匹配“logs/2024/a.csv”而不仅仅是名称；此时 * 也匹配“/”</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>例如 logs/2024-（可选）</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>只搜索搜索文件夹下以此文本开头的路径。在 S3 上由服务器按此键前缀筛选，比列出全部内容快得多。</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>路径前缀(&amp;R)：</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>例如 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>例如 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>最小大小(&amp;L)：</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>最大大小(&amp;O)：</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>修改时间晚于(&amp;A)：</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>修改时间早于(&amp;B)：</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>任意</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>存储类别(&amp;T)：</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>文件和文件夹</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>仅文件</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>仅文件夹</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>包括(&amp;I)：</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>包括隐藏的文件和文件夹(&amp;H)</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>无限制</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>最大结果数(&amp;X)：</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>搜索(&amp;S)</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>“%1”不是有效的大小（例如：1500、10 KB、1.5 GB）</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>最小大小大于最大大小。</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>“晚于”日期晚于“早于”日期。</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>文件夹没有大小、日期或存储类别：要使用这些条件，请搜索文件。</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>路径前缀不能超出搜索文件夹。</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>系统钥匙串错误</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>系统钥匙串中未存储密钥</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>未找到密钥</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>系统默认（%1）</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>语言(&amp;L)：</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;重启 S3 File Manager 后将使用新语言。&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>客户加密密钥 (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>SSE-C 对象使用由您保管的 256 位密钥加密。S3 不存储该密钥：&lt;b&gt;密钥一旦丢失，对象将无法读取&lt;/b&gt;。密钥保存在系统钥匙串中。</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64（44 个字符）或 64 位十六进制数</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>显示</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>生成</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>用于此连接下所有未设置自有密钥的存储桶</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>移除密钥</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>已为存储桶 %1 配置密钥（MD5 %2）。</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>未为存储桶 %1 配置密钥。</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>密钥必须为 32 字节，以 base64 或 64 位十六进制数表示。</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>要移除存储桶 %1 的密钥吗？使用该密钥加密的对象没有它将无法读取。</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>选项(&amp;O)</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>询问</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>覆盖</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>跳过</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>保留两者（重命名新文件）</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>如果较新则覆盖</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>如果大小不同则覆盖</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>如果文件已存在：</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>例如 *.jpg; *.png（留空：全部）</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>仅包含匹配的文件：</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>例如 *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>排除：</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>传输后校验完整性（大小、MD5/ETag）</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>保留修改时间</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>跟随符号链接（否则跳过）</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>连接默认值</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>S3 存储类别：</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>S3 加密：</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>传输</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>暂停</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>继续</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>重试失败项</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>上移</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>下移</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>移除</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>全部暂停</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>全部继续</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>清除已完成</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>设置…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 个正在进行，%2 个排队中</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 个正在进行</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>传输错误</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>请求 ID：%1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>取消传输</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>要取消“%1”吗？部分传输的文件将被丢弃。</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>移除传输</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>要移除“%1”吗？该传输尚未完成；部分数据将被丢弃。</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 个项目</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>将 %1 复制到 %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>将 %1 移动到 %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>删除 %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>没有用于此位置的提供程序</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>源和目标相同</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>无法将文件夹复制到其自身中</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>找不到可用的名称</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>已存在同名文件夹</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>排队中</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>已暂停</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>已完成，跳过 %n 个</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>已完成</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>失败</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>已取消</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>正在启动</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>正在扫描</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>正在删除</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>正在移动</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>正在复制</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>正在完成</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>（%n 个错误）</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 个项目</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n 个文件</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>传输</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>进度</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>剩余时间</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>传输设置</translation>
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
        <translation>无限制</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>启动时自动继续中断的传输</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>同时进行的传输数：</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>每个传输并行处理的文件数：</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>每个文件并行处理的分段数：</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>分段上传阈值：</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>分段大小：</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>带宽限制：</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>每个文件的重试次数：</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;对于非常大的文件，分段大小会自动增大（S3 最多允许 10,000 个分段）。更改适用于之后启动的传输；带宽限制立即生效。&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>版本历史记录 — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>修改时间</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>存储类别</translation>
    </message>
    <message>
        <source>State</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>版本 ID</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>查看(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>下载(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>还原为当前版本(&amp;R)</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>永久删除(&amp;P)…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>取消删除(&amp;U)</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>删除时绕过监管模式保留</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>正在加载版本…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>删除标记（对象已删除）</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>删除标记</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>当前</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>旧版本</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>未找到任何版本。</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n 个版本和删除标记。</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>正在处理…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>下载版本</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>已保存 %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>所选版本已重新成为当前版本。</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>删除版本</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>要永久删除 %n 个版本吗？此操作无法撤销。</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>已删除 %n 个版本。</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>对象已恢复。</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>查看 — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — 显示前 %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — 二进制文件（%1），以十六进制显示前 %2</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>使用默认应用程序打开</translation>
    </message>
</context>
</TS>
