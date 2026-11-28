<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja" sourcelanguage="en">
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
        <translation>コンピューター</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>許可するオリジン</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>メソッド</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>許可するヘッダー</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>公開するヘッダー</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>最大有効期間（秒）</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>ルールを追加(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>ルールを削除(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>ルール</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>複数の値はカンマで区切ります。メソッド：GET、PUT、POST、DELETE、HEAD。オリジンまたはヘッダーごとにワイルドカード「*」を 1 つ使用できます。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>適用(&amp;A)</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>CORS 設定を削除しました</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>CORS ルールを保存しました</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3（S3 が管理するキー）</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS（AWS KMS キー）</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS（二層、AWS KMS キー）</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>デフォルトの暗号化(&amp;E)：</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>キー ID、ARN またはエイリアス（空欄：aws/s3 マネージドキー）</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>KMS キー(&amp;K)：</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>S3 バケットキーを使用（KMS リクエストが減り、コストを削減）(&amp;B)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>今後書き込まれるオブジェクトのうち、独自の暗号化を指定しないものに適用されます。既存のオブジェクトの暗号化は変わりません（変更するには「オブジェクトの編集」で書き換えてください）。何も設定されていない場合、AWS は SSE-S3 で暗号化します。</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>デフォルトの暗号化を保存しました</translation>
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
        <translation>ステータス</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>適用対象</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>アクション</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>追加(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>編集(&amp;E)…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>有効化/無効化(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>削除(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>ルール</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>ルールは 1 日に 1 回実行されます。JSON は &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt; の形式を使用します。S3 互換サービスは、サポートしていないアクションを無視する場合があります（MinIO で移行を行うにはリモート階層が必要です）。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>適用(&amp;A)</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>（自動生成）</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>有効</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>無効</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>ルールが変更されました。「適用」でルールをバケットに保存します。</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>ライフサイクル設定を削除しました</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>ライフサイクルルールを保存しました</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>オブジェクトロックを有効化(&amp;E)…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>ガバナンス（特別な権限を持つユーザーは解除できます）</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>コンプライアンス（root アカウントを含め、誰も解除できません）</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>デフォルトの保持(&amp;R)：</translation>
    </message>
    <message>
        <source>days</source>
        <translation>日</translation>
    </message>
    <message>
        <source>years</source>
        <translation>年</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>期間(&amp;P)：</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>新しいオブジェクトバージョンには、アップロード時に独自の保持が設定されない限り、デフォルトの保持が適用されます。保持中のバージョンは、期間が終わるまで削除も上書きもできません。</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>オブジェクトロックの有効化</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>%1 でオブジェクトロックを有効にしますか？これは元に戻せません。また、バージョニングも恒久的に有効のままになります。（サービスによっては、バケットの作成時にのみ有効にできます。）</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>オブジェクトロックを有効にしました</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n 日</numerusform>
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
        <translation>オブジェクトロック</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>コンプライアンスモードの保持は、誰も短縮・解除できません。新しいバージョンは %1 の間、削除できなくなります。続行しますか？</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>デフォルトの保持を保存しました</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>このバケットではオブジェクトロックが有効です。</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>このバケットではオブジェクトロックが有効になっていません。</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>リージョン</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>作成日時</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>所有者</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>バケット所有者の強制（ACL 無効）</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>希望するバケット所有者</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>オブジェクトライター</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>オブジェクト所有者</translation>
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
        <translation>テンプレート(&amp;T)</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>バケットポリシー</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>現在のテキストをテンプレートで置き換えますか？</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>整形(&amp;F)</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>バケットポリシーがありません。テンプレートを選択するか、ポリシードキュメントを貼り付けてください。</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>ポリシーを削除(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>適用(&amp;A)</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>整形できません：%1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>ポリシーなし。</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>問題は見つかりませんでした。</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>%1 のバケットポリシーを削除しますか？</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>バケットポリシーを削除しました</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>先にポリシーのエラーを修正してください：%1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>このポリシーは、インターネット上のすべてのユーザーにアクセスを許可します。それでも適用しますか？</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>バケットポリシーを保存しました</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>バケットのプロパティ — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>概要</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>バージョニング</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>ライフサイクル</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>ポリシー</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>パブリックアクセス</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>ウェブサイト</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>オブジェクトロック</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>統計</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1：このエンドポイントではサポートされていません</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>パブリックアクセスをすべてブロック(&amp;A)</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>新しい ACL を介して付与されたパブリックアクセスをブロックする</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>任意の ACL を介して付与されたパブリックアクセスを無視する</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>新しいバケットポリシーを介して付与されたパブリックアクセスをブロックする</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>パブリックポリシーを持つバケットへのアクセスを、AWS サービスと所有者のアカウントに制限する</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>アカウントレベルの設定も適用され、こちらより優先されます。ブロックをオフにしても、それだけで何かが公開されることはありません。</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>パブリックアクセス</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>%1 でパブリックアクセスを許可しますか？ACL やバケットポリシーによって、オブジェクトが公開される可能性があります。</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>パブリックアクセス設定を保存しました</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>キープレフィックス：</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>（バケット全体）</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>計算(&amp;C)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>カテゴリ</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>オブジェクト</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>すべてのオブジェクトバージョンを一覧表示して集計するため（1000 キーごとに 1 リクエスト）、大きなバケットでは時間がかかります。数百万のオブジェクトを持つバケットでは、S3 Storage Lens や CloudWatch メトリクス BucketSizeBytes/NumberOfObjects の方が高速です（毎日更新）。</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>キャンセル(&amp;C)</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>集計中…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 バイト</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>現在のオブジェクト</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>非現行バージョン</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>削除マーカー</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>すべてのバージョン</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>未完了のマルチパートアップロード</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>完了しました。</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>キャンセルしました：集計は途中までです。</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>適用(&amp;A)</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>適用中…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>集計中… %L1 項目</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>キー</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>値</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>最大 50 個のタグ。コスト配分とアクセス制御に使用されます。オブジェクトのタグは別に設定します（「オブジェクトの編集」）。</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>タグを保存しました</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>バージョニング：</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>MFA 削除：</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>バージョニングを有効にすると、オブジェクトを上書きまたは削除しても、古いデータが非現行バージョンとして保持されます（ストレージとして課金されます）。バージョニングは一度有効にするとオフにできず、停止のみ可能です。既存のバージョンは残ります。MFA 削除は、root アカウントが API/CLI を通じてのみ変更できます。</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>バージョニングを有効化(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>バージョニングを停止(&amp;S)</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>バージョニングを有効にしました</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>バージョニングの停止</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>%1 のバージョニングを停止しますか？新しい書き込みは再びオブジェクトを置き換えます。既存のバージョンは保持されます。</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>バージョニングを停止しました</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>無効（一度も有効化されていません）</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>有効</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>停止中</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>無効</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>静的ウェブサイトホスティングを有効にする(&amp;W)</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>ウェブサイトをホストする(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>インデックスドキュメント(&amp;I)：</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>省略可能（例：error.html）</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>エラードキュメント(&amp;E)：</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>省略可能なリダイレクトルール（JSON 配列）。例：
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>ルーティングルール(&amp;R)：</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>すべてのリクエストを別のホストにリダイレクト(&amp;T)</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>例：www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>ホスト名(&amp;N)：</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>リクエストと同じ</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>プロトコル(&amp;P)：</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>ウェブサイトエンドポイントは、プレーンな HTTP で、パブリックに読み取り可能なオブジェクトのみを配信します（バケットポリシー、パブリックアクセスブロック）。</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>適用(&amp;A)</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>ウェブサイトエンドポイント：&lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>ウェブサイト設定を保存しました</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>ウェブサイトホスティングを無効にしました</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>ファイルは既に存在します</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; は転送先に既に存在します。上書きしますか？</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>新規：</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>既存：</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>新しいファイルの方が新しいです。</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>既存のファイルの方が新しいか、同じ日時です。</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>両方とも同じサイズです。</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>サイズが異なります。</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>この転送の残りの競合すべてに適用(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>上書き(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>スキップ(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>両方を保持(&amp;K)</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>「name (2).ext」のような新しい名前でコピーします</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>新しい場合(&amp;N)</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>新しいファイルの方が新しい場合のみ上書きし、それ以外はスキップします</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>サイズが異なる場合(&amp;Z)</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>サイズが異なる場合のみ上書きし、それ以外はスキップします</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>転送をキャンセル</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>接続</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>追加</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>複製</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>AWS プロファイルをインポート…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>%1 のプロファイルの接続を作成します</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>接続</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名前(&amp;N)：</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>s3://&lt;id&gt;/bucket/key のようなアドレスで使用されます。保存後は変更できません。</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>ID(&amp;I)：</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>プロバイダー(&amp;P)：</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Amazon S3 の場合は空欄にします</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>エンドポイント URL(&amp;E)：</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>リージョン(&amp;R)：</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>自動</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>仮想ホスト形式（bucket.host）</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>パス形式（host/bucket）</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>アドレス指定(&amp;A)：</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>認証情報</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>アクセスキーとシークレット</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>AWS プロファイル（~/.aws）</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>環境変数</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>デフォルトの AWS 認証情報チェーン</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>匿名（パブリックバケット）</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>アクセスキー ID：</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>表示</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>シークレットアクセスキー：</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>省略可能（一時的な認証情報）</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>セッショントークン：</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>シークレットはシステムのキーチェーンに保存され、設定ファイルには保存されません。</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>プロファイル：</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>静的キー、SSO、ロールの引き受け（role_arn / source_profile）、credential_process の各プロファイルに対応しています。</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>詳細設定</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>TLS 証明書を検証する</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>システム証明書</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>参照…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>CA バンドル</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>証明書 (*.pem *.crt);;すべてのファイル (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>CA バンドル：</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>サポートされている場合（AWS のデフォルト）</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>必要な場合のみ（互換性重視）</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>一部の S3 互換サービスは、新しい整合性チェックサムヘッダーを拒否します。</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>リクエストのチェックサム：</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>バケットのデフォルト</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>アップロードのストレージクラス：</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>認証情報でバケットを一覧表示できない場合でも表示するバケット。</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>ピン留めしたバケット：</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b、またはすべての場合は *</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>リクエスタ支払いバケット：これらへのリクエストは、あなたのアカウントに課金されます（x-amz-request-payer）。</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>リクエスタ支払い：</translation>
    </message>
    <message>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>リクエストのタイムアウト：</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>接続をテスト(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>開く(&amp;O)</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>キーチェーンに保存済み — 変更しない場合は空欄のまま</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>新しい %1 接続</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1（コピー）</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>接続の削除</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>接続「%1」と保存されたシークレットを削除しますか？</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>AWS プロファイルのインポート</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>%1 にプロファイルが見つかりません。</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>すべての AWS プロファイルは既にインポートされています。</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>アプリケーションの起動時の環境にある AWS_ACCESS_KEY_ID、AWS_SECRET_ACCESS_KEY、AWS_SESSION_TOKEN を使用します。</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>環境変数、デフォルトプロファイル、SSO、ウェブ ID、コンテナー/インスタンスの認証情報を、AWS SDK の標準の順序で試します。</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>リクエストは署名されません。パブリックなバケットとオブジェクトにのみアクセスできます。</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>接続の保存</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>ID「%1」の接続は既に存在します。</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>シークレットアクセスキーを入力してください。</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>テスト中…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>未保存の変更</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>「%1」への変更を保存しますか？</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>接続 *</translation>
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
        <translation>その他の S3 互換サービス</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>接続の名前を入力してください。</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>ID に使用できるのは、英小文字、数字、「.」、「-」、「_」のみです。</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>エンドポイントは http:// または https:// の URL である必要があります。</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>エンドポイント URL のプレースホルダーを置き換えてください。</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>S3 互換サービスのエンドポイント URL を入力してください。</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>リージョンを入力してください（例：us-east-1）。</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>アクセスキー ID を入力してください。</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>AWS プロファイルを選択してください。</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>設定ファイルに書き込めませんでした</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>新しいバケット</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>英小文字、数字、ドット、ハイフン</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名前(&amp;N)：</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>エンドポイントのデフォルト</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>リージョン(&amp;R)：</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>デフォルト（バケット所有者の強制：ACL 無効）</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>希望するバケット所有者（ACL 有効）</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>オブジェクトライター（ACL 有効）</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>オブジェクト所有者(&amp;O)：</translation>
    </message>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>既定 ACL(&amp;A)：</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>オブジェクトロックを有効にする（バージョニングが有効になり、無効にはできません）(&amp;L)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;新しい AWS バケットは、デフォルトでパブリックアクセスをブロックします。パブリックアクセスブロックを緩和するまで、パブリック ACL は失敗します。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>作成</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>バケット名を入力してください。</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>バケットの削除</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>空のバケット &lt;b&gt;%1&lt;/b&gt; を完全に削除しますか？</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>オブジェクト</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>オブジェクトバージョンまたは削除マーカー</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>未完了のマルチパートアップロード</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; は空ではありません：%2 が含まれています。&lt;br&gt;&lt;br&gt;削除するには、先にすべてのオブジェクト、すべてのバージョン、すべての未完了のアップロードを削除します。&lt;b&gt;この操作は元に戻せません。&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>バケットを空にしてから削除する(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>ガバナンスモードの保持をバイパスする（s3:BypassGovernanceRetention が必要）(&amp;B)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>確認のため、バケット名を入力してください：</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>空にして削除</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>変更しない / バケットのデフォルト</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>KMS キー ID、ARN またはエイリアス（空欄：aws/s3）</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>%1 のプロバイダーがありません</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>バケット</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>接続</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>フォルダー</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>%1 ファイル</translation>
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
        <translation>削除マーカー（削除済み）</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>削除マーカー</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1（現行）</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名前</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>更新日時</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>ストレージクラス</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>バージョン</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>操作はキャンセルされました</translation>
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
        <translation>追加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> 日</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>バイト（空欄：制限なし）</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>追加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>ライフサイクルルール</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>省略可能。S3 が生成します</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>有効(&amp;E)</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>ルール ID(&amp;I)：</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>フィルター(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>現行バージョン(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>非現行バージョン &amp;&amp; アップロード(&amp;N)</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>ルールは、以下のすべての条件に一致するオブジェクトに適用されます。条件がない場合は、バケット全体に適用されます。</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>例：logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>キープレフィックス(&amp;P)：</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>次より大きい：</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>次より小さい：</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>値</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>オブジェクトタグ：</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>移行先のストレージクラス</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>移行時期（日数または YYYY-MM-DD）</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>移行：</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>しない</translation>
    </message>
    <message>
        <source>After</source>
        <translation>経過日数で</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>日付で</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>オブジェクトの有効期限（削除）：</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>期限切れの削除マーカーを削除（非現行バージョンのないマーカー）</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;バージョニングが有効なバケットでは、現行バージョンを期限切れにすると削除マーカーが追加され、データは非現行バージョンとして残ります。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>非現行になってからの日数</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>保持する最新バージョン数（省略可能）</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>次の期間後に削除：</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>保持する最新バージョン数：</translation>
    </message>
    <message>
        <source>none</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>非現行バージョン：</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>未完了のマルチパートアップロードを次の期間後に中止：</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>アップロード：</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>そのようなファイルまたはディレクトリはありません：%1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>アクセスが拒否されました</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>ローカルの場所ではありません</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>ディレクトリではありません：%1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>アクセスが拒否されました：%1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>無効なディレクトリです</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>既に存在します：%1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>ディレクトリ %1 を作成できません</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>ファイルシステムのルートは削除できません</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1：見つかりません</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… ほか %1 件</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>%n 個の項目を削除できませんでした</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>%1 を移動できません</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>ディレクトリをファイルシステム間で直接移動することはできません</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>ディレクトリです：%1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1 を読み取れません</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1 に書き込めません</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>%1 の読み取り中にエラーが発生しました</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>%1 の書き込み中にエラーが発生しました</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1 の整合性チェックに失敗しました</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>書き込み：%1 バイト、想定：%2 バイト</translation>
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
        <translation>%1 をアップロードしました</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>編集(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>コピー(&amp;C)…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>移動(&amp;M)…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>名前の変更(&amp;R)…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>新しいフォルダー(&amp;F)…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>削除(&amp;D)…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>設定(&amp;G)…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>終了(&amp;Q)</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>場所をコピー(&amp;L)</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>S3 URI をコピー(&amp;U)</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>HTTP URL をコピー(&amp;H)</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>ARN をコピー(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>プロパティ(&amp;P)</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>メタデータ、タグ、ストレージを編集(&amp;T)…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>共有リンク（署名付き URL）(&amp;S)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>バージョンを表示(&amp;V)</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>指定日時の状態を参照(&amp;A)…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>バージョン履歴(&amp;H)…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>アーカイブから復元(&amp;R)…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>未完了のマルチパートアップロード(&amp;I)…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>新しいバケット(&amp;B)…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>バケットのプロパティ(&amp;U)…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>すべて選択(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>すべて選択解除(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>選択を反転(&amp;I)</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>クイックフィルター(&amp;F)…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>ファイルを検索(&amp;I)…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>含まれるフォルダーへ移動(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>最新の情報に更新(&amp;R)</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>隠しファイルを表示(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>パネルを入れ替え(&amp;S)</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>反対側のパネルで開く(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>戻る(&amp;B)</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>進む(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>ホーム(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>ルート(&amp;R)</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>アドレスを編集(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>左パネルの場所(&amp;L)…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>右パネルの場所(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>接続の管理(&amp;M)…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>転送を表示(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>すべて一時停止(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>すべて再開(&amp;R)</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>完了した転送をクリア(&amp;C)</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>転送の設定(&amp;S)…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>キーボードショートカット(&amp;K)</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>バージョン情報(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>ファイル(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>選択(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>移動(&amp;G)</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>転送(&amp;T)</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S3(&amp;3)</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>接続(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>ヘルプ(&amp;H)</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>ホーム</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>ルート（/）</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>S3 接続</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>すべての接続</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>反対側のパネルと同じ</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>ファイルを検索</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>検索するにはバケットを開いてください。</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>検索するにはドライブを開いてください。</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>%n 個の場所をクリップボードにコピーしました</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>キューに追加：%1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>中断された %n 件の転送を再開しています</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>中断された %n 件の転送を復元しました。転送パネルで再開してください</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>完了：%1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1：%n 件のエラー</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>キャンセル：%1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>新しい言語は S3 File Manager の再起動後に使用されます。</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>削除マーカーはコピーできません。</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>バージョンは移動や名前の変更ができません。コピーするか、バージョン履歴を使用してください。</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>フォルダーは現在の内容でコピーされます。フォルダーをコピーするには指定日時の表示を終了するか、ファイルを選択してください。</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>バージョン表示</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 個の項目</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>%1 の移動先：</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>%1 のコピー先：</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 には名前の変更がありません。オブジェクトをコピーしてから、元のオブジェクトを削除します。</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>移動</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>コピー</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>無効な宛先です：%1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>名前の変更</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>新しい名前：</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>名前にパス区切り文字を含めることはできません。</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>検索結果にはフォルダーを作成できません</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>ここにはフォルダーを作成できません</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>新しいフォルダー</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>フォルダー名（入れ子のフォルダーには / を使用）：</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>無効なフォルダー名です：%1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>バージョン表示では、バージョンのみ削除できます。フォルダーを削除するには、バージョン表示を終了してください。</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>バケットの削除</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>バケットは 1 つずつ削除してください。</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>これらの項目はここでは削除できません</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>フォルダー「%1」とその中のすべてを完全に削除しますか？</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>「%1」を完全に削除しますか？</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>選択した %n 個の項目を完全に削除しますか？</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>%1 を開くアプリケーションがありません</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>削除マーカーには内容がありません</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>編集する S3 オブジェクトまたはフォルダーを選択してください</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>選択した %n 個の項目</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>オブジェクトを更新しています…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>%n 個のオブジェクトを処理した後、キャンセルしました</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>%n 個のオブジェクトを更新しました</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>オブジェクトの編集</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>%n 個中 %1 個のオブジェクトを更新しました。%2 個は失敗しました。</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>先に検索結果を閉じてください</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>バージョンは S3 バケット内でのみ表示できます</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>%1 ではバージョニングが一度も有効化されていません：各オブジェクトのバージョンは 1 つです</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>%1 ではバージョニングが停止されています</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>特定時点の参照は S3 バケット内でのみ使用できます</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>指定日時の状態を参照</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>このバケットを、バージョン履歴から再構築して特定の時点の状態で表示します（バージョニングが有効なバケットのみ）。</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>日時：</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>現在に戻る</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>S3 オブジェクトを選択してください</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>バージョンの削除</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n 個のバージョンを完全に削除しますか？この操作は元に戻せません。</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>%n 個のバージョンを削除しました</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>アーカイブされた S3 オブジェクトまたはフォルダーを選択してください</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>復元をリクエストしています…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>%n 個のオブジェクトの復元をリクエストしました</numerusform>
        </translation>
    </message>
    <message>
        <source>%1; %2</source>
        <comment>restore summary: requested; skipped</comment>
        <translation>%1。%2</translation>
    </message>
    <message numerus="yes">
        <source>%n not archived, already restored or in progress</source>
        <translation>
            <numerusform>%n 個はアーカイブされていないか、復元済みまたは復元中です</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>アーカイブから復元</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n 個が失敗しました。</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>先に S3 バケットを開いてください</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>先に S3 接続を開いてください</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>バケット %1 を作成しています…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>新しいバケット</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>%1 を作成できませんでした：%2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>バケット %1 を作成しました</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>バケットを選択するか、開いてください</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>%1 の内容を確認しています…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>%1 の内容を削除しています…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln 個の項目を削除しました…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>バケット %1 を削除しました</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>キャンセルしました。%n 個の項目は既に削除されています</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>バケット %1 を削除できませんでした。</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>エラー発生前の処理：%1、%2。</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n 個の項目を削除</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n 件のアップロードを中止</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>%n 個の項目を削除できませんでした（保持、リーガルホールド、またはアクセス許可のため）。</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>共有する S3 オブジェクトを選択してください</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>開く</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>既定のアプリケーションで開く</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>このバージョンを現行にする</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>バージョンを復元</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>削除を取り消す</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>コピーするものがありません</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n 行をクリップボードにコピーしました</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>パネルの切り替え</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>開く / 親フォルダー</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>選択を切り替えて下へ移動 / 選択を切り替え</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+矢印キー</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>選択範囲を拡張</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>文字を入力</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>名前にジャンプ</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>キーボードショートカット</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>S3 File Manager について</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Amazon S3 および S3 互換ストレージ用のデュアルパネルファイルマネージャー。&lt;/p&gt;&lt;p&gt;Qt %2 と AWS SDK for C++ で構築されています。&lt;/p&gt;&lt;p&gt;MIT ライセンス&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>未アップロードのリモート編集</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>編集したファイルの一部に、アップロードされていない変更があります。それでも終了しますか？</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n 件の転送が実行中です。終了して、次回続行しますか？</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n 件の転送が実行中です。終了して、転送を破棄しますか？</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>転送の実行中</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n 分</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n 時間</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n 日</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>未完了のマルチパートアップロード — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>中断されたアップロードは、完了または中止されるまでパート（およびそのストレージコスト）を保持します。バケットのライフサイクルルールで自動的に中止できます。</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>キープレフィックス：</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>（バケット全体）</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>最新の情報に更新</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>キー</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>開始日時</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>経過時間</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>パート</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>ストレージクラス</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>選択したアップロードを中止(&amp;S)…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>すべて中止(&amp;A)…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>アップロード ID：%1
開始者：%2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>未完了のアップロードはありません。（一部の S3 互換サービスは、正確なオブジェクトキーに対してのみアップロードを一覧表示します。その場合はキーをプレフィックスとして入力してください。）</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n 件の未完了のアップロード（%1 を使用中）。</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>読み込み中…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>アップロードの中止</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>%n 件のアップロードを中止しますか？アップロード済みのパートは削除されます。</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>中止しています…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>オブジェクトの編集</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>%1 を変更します。チェックしたセクションのみが適用されます。フォルダーには、その下のすべてが含まれます。</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>ヘッダーとメタデータ</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>（変更しない）</translation>
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
        <translation>ユーザーメタデータを設定：</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>キー</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>値</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>すべてのユーザーメタデータを置き換える（オフの場合はマージ）</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>削除するキー：</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>ストレージクラス</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>暗号化</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>タグ（タグセットを置き換え）</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>アクセス制御（既定 ACL）</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;ヘッダー、ストレージクラス、暗号化は、各オブジェクトをそれ自体にコピーすることで変更されます（S3 では他の方法で変更できません）。ここで ACL も設定しない限り、ACL はリセットされます。アーカイブされたオブジェクト（Glacier、Deep Archive）は、先に復元する必要があります。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>適用</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>変更するセクションを少なくとも 1 つチェックしてください。</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>無効なメタデータキー「%1」：英字、数字、「-」、「_」、「.」を使用してください</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>場所と接続</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>ホーム</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>ルート</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>再試行</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>検索を停止 (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>新しい検索…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>検索結果を閉じる</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>フィルター（部分文字列、またはワイルドカード * ?）— Esc で閉じる</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>%1 を検索できません</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>検索に失敗しました：%1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>検索結果：%2 で %1</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>不明なアドレス：%1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>無効な場所：%1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>%1 を開けません：%2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>%2 個中 %1 個を選択、%3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1、%2、%3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n 個のフォルダー</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n 個のファイル</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[%1 時点] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[全バージョン] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — 検索中…（%1 件を走査）</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — %n 件で検索を停止</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — 検索を停止しました</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — %1 件を走査</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — 読み込み中…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — さらに項目があります（下にスクロール）</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>共有リンク — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>ダウンロード（GET）</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>アップロード/置き換え（PUT）</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>許可する操作：</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>分</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>時間</translation>
    </message>
    <message>
        <source>days</source>
        <translation>日</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>有効期間：</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>URL をコピー(&amp;C)</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>QR コードを表示(&amp;Q)</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>署名付き URL の有効期間は最大 7 日間です。有効期限を短縮しました。</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>有効期限：%1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>これは一時的な認証情報です（セッショントークン、SSO、または引き受けたロール）。認証情報の有効期限が切れると、URL は機能しなくなります。</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>有効期限はそれに合わせて短縮されました。</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>適用</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>プロパティ — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>全般</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>メタデータ</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>ストレージ &amp;&amp; 暗号化</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>アクセス許可</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>オブジェクトロック</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>チェックサム</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>すべてのヘッダー</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>キー</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>値</translation>
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
        <translation>ユーザーメタデータ（x-amz-meta-…）：</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 はヘッダーをオブジェクトと共に保存します。適用すると、オブジェクトがそれ自体にコピーされます。ACL はバケットのデフォルトにリセットされ、タグは保持されます。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;最大 10 個のタグ。キーは最大 128 文字、値は最大 256 文字です。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>ストレージクラス：</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>暗号化：</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>カスタマーキー（SSE-C）…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>所有者：</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>被付与者</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>種類</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>アクセス許可</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>既定 ACL で置き換え：</translation>
    </message>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>ガバナンス（特別な権限があれば解除可能）</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>コンプライアンス（短縮・解除不可）</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>保持モード：</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>保持期限：</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>ガバナンスモードをバイパス（ガバナンスモードの保持を短縮または解除するために必要）</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>リーガルホールド</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>アルゴリズム</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>保存値</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>ローカルファイル</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>結果</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>ローカルファイルと比較…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>読み込み中…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>オブジェクトを読み込めませんでした：%1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>メタデータを読み込めませんでした：%1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>場所：</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>ファイル（%1）</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>フォルダー（プレフィックス）</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>フォルダー</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>バケット</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>接続</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>種類：</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>サイズ：</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>更新日時：</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>リンク先：</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>アクセス許可：</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>隠しファイル：</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>はい</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag：</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>バージョン ID：</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>リージョン：</translation>
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
        <translation>タグを利用できません：%1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;このオブジェクトはアーカイブされています。ストレージクラスを変更するには、復元されたコピーが必要です。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;これらを変更すると、オブジェクトがそれ自体にコピーされます。&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>このバケットでは ACL が無効です（オブジェクト所有者：バケット所有者の強制）。アクセスを許可するには、バケットポリシーを使用してください。</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>ACL を利用できません：%1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>オブジェクト所有者：%1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>オブジェクトロックの状態を利用できません：%1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>このバケットではオブジェクトロックが有効になっていません（バケットの作成時にのみ有効にできます）。</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>%2 まで %1 モードで保持されます。</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>このバージョンには保持が設定されていません。</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>適用中…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>無効なメタデータキー「%1」：英字、数字、「-」、「_」、「.」を使用してください</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>メタデータを保存しました。</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>タグを保存しました。</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>変更はありません。</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>ストレージ設定を保存しました。</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL を %1 に設定しました。</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>オブジェクトロックの設定を保存しました。</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>ローカルファイルと比較</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>%1 のチェックサムを計算しています…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>一致</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>不一致</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>このオブジェクトには、比較できるチェックサムがありません。</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>ローカルファイルはオブジェクトと一致します。</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>ローカルファイルはオブジェクトと異なります。</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>カスタマーキーを使用するには、接続を保存する必要があります。</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>ここではバージョンの一覧表示はサポートされていません</translation>
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
        <translation>プロバイダーがありません</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>一時ディレクトリを作成できません</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>大きなファイル</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>「%1」のサイズは %2 です。一時ファイルにダウンロードしますか？</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>古いバージョンは編集できません。先にバージョンを復元してください</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>%1 をダウンロードしています…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>%1 をダウンロードできません</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>このファイルを開くアプリケーションがありません</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>このファイルを編集するアプリケーションがありません</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>変更のアップロード</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>「%1」が変更されました。%2 にアップロードしますか？</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>リモートファイルの変更</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 は、開いた後にサーバー上で変更されました。自分のバージョンで上書きしますか？</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>%1 をアップロードできません</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>アーカイブから復元</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>%1 の一時的な読み取り可能なコピーをリクエストします。アーカイブされたオブジェクトはそのまま残ります。コピーは有効期限が切れるまで、バケットの標準料金で課金されます。</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> 日</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>コピーの保持期間：</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>標準（Glacier：3～5 時間、Deep Archive：12 時間以内）</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>一括（最も安価。5～12 時間、Deep Archive：48 時間以内）</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>迅速（Glacier のみ。1～5 分、最も高価）</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>取得階層：</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>復元をリクエスト</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>不明なオブジェクト所有者の設定です</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>JSON の構文エラー（%1 行、%2 列）：%3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>%2 に不明なフィールド「%1」があります</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>バージョニング</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>デフォルトの暗号化</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>ライフサイクルルール</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>バケットポリシー</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>パブリックアクセスブロック</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>タグ</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>静的ウェブサイトホスティング</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>オブジェクトロック</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>オブジェクト所有者</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>バケット名は 3～63 文字にする必要があります。</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>バケット名に使用できるのは、英小文字、数字、ドット、ハイフンのみです。</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>バケット名は英字または数字で始まり、英字または数字で終わる必要があります。</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>バケット名に連続する 2 つのドットを含めることはできません。</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>バケット名を IP アドレスの形式にすることはできません。</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>バケット名を「%1」で始めることはできません（AWS により予約済み）。</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>バケット名を「%1」で終えることはできません（AWS により予約済み）。</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>ドットを含む名前は、仮想ホスト形式の HTTPS アドレス指定（TLS 証明書が一致しないため）や Transfer Acceleration では機能しません。</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>ルール ID は最大 255 文字です。</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>ルールには少なくとも 1 つのアクション（移行、有効期限、または未完了のアップロードの中止）が必要です。</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>最小オブジェクトサイズは、最大サイズより小さくする必要があります。</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>タグキーは 1～128 文字にする必要があります。</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>タグ値は最大 256 文字です。</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>タグでフィルタリングするルールでは、未完了のアップロードを中止できません（アップロードにはタグがありません）。</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>タグでフィルタリングするルールでは、期限切れの削除マーカーを削除できません。</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>オブジェクトを期限切れにできるのは、最短で 1 日後です。</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>有効期限には、日数または日付のいずれかを選択してください。</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>期限切れの削除マーカーの削除は、同じルール内で現行バージョンの有効期限と組み合わせることはできません。</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>不明な移行先ストレージクラス「%1」です。</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>%1 への移行が 2 つあります。</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>各移行には日数または日付が必要です。</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>オブジェクトを %1 に移行できるのは、最短で 30 日後です。</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>ルールのすべての移行と有効期限には、日数または日付のどちらか一方を使用してください。</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>有効期限は、最後の移行より後にする必要があります。</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>%1 への非現行バージョンの移行が 2 つあります。</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>非現行バージョンを移行できるのは、最短で 1 日後です。</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>保持する新しいバージョンの数は 1～100 にする必要があります。</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>非現行バージョンを削除できるのは、最短で 1 日後です。</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>新しい非現行バージョンを保持するには、非現行バージョンの有効期限が必要です。</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>未完了のアップロードを中止できるのは、最短で 1 日後です。</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>プレフィックス「%1」</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>タグ %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>%1 より大きい</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>%1 より小さい</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>バケット全体</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>%2 日後に %1 へ</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>%2 に %1 へ</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>%1 日後に期限切れ</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>%1 に期限切れ</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>期限切れの削除マーカーを削除</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>非現行を %2 日後に %1 へ</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>非現行を %1 日後に削除（%2 個を保持）</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>非現行を %1 日後に削除</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>%1 日後にアップロードを中止</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>バケットのライフサイクルルールは最大 1000 個です。</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>ルール %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>ルール「%1」</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1：別のルールに同じ ID があります。</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>設定</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>ルール %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 が JSON オブジェクトではありません</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1：Status は &quot;Enabled&quot; または &quot;Disabled&quot; である必要があります</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> のフィルター</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>CORS ルールには、許可するオリジンが少なくとも 1 つ必要です。</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>CORS ルールには、許可するメソッドが少なくとも 1 つ必要です。</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>サポートされていないメソッド「%1」です（GET、PUT、POST、DELETE、HEAD のいずれかを使用してください）。</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>無効なオリジン「%1」：ワイルドカード「*」は 1 つまでです。</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>無効なヘッダー「%1」：ワイルドカード「*」は 1 つまでです。</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>最大有効期間に負の値は指定できません。</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>バケットの CORS ルールは最大 100 個です。</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>ルール %1：%2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>ポリシーは JSON オブジェクトである必要があります。</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>&quot;Version&quot; がありません：&quot;Version&quot;: &quot;2012-10-17&quot; を追加してください（これがないと、ポリシー変数は機能しません）。</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>不明なポリシーバージョン &quot;%1&quot; です（&quot;2012-10-17&quot; を使用してください）。</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>バージョン &quot;2008-10-17&quot; は古い形式です。&quot;2012-10-17&quot; を使用してください。</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>ポリシーには &quot;Statement&quot;（オブジェクト、またはオブジェクトの配列）が必要です。</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>ポリシーにステートメントがありません。</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>ステートメント %1 がオブジェクトではありません。</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>ステートメント %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>ステートメント「%1」</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1：Sid が重複しています。</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1：&quot;Effect&quot; は &quot;Allow&quot; または &quot;Deny&quot; である必要があります。</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1：バケットポリシーには &quot;Principal&quot; が必要です。</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1：&quot;Action&quot; がありません。</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1：&quot;Resource&quot; がありません。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1：&quot;%2&quot; は S3 アクションではありません。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1：&quot;%2&quot; は S3 リソースの ARN ではありません。</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1：&quot;%2&quot; はこのバケット（%3）内にありません。</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 はすべてのユーザーにアクセスを許可します（条件のない Principal &quot;*&quot;）。</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>パブリック読み取り（誰でもオブジェクトをダウンロード可能）</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>TLS を使用しないリクエストを拒否</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>別の AWS アカウントへの読み取り専用アクセス</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>すべてのリクエストのリダイレクトは、ドキュメントやルーティングルールと組み合わせることはできません。</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>リダイレクトのプロトコルは http または https である必要があります。</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>ウェブサイトホスティングには、インデックスドキュメント（またはすべてのリクエストのリダイレクト）が必要です。</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>インデックスドキュメントに「/」を含めることはできません（フォルダーへのリクエストに付加されるサフィックスです）。</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>各ルーティングルールにはリダイレクトが必要です。</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>ルーティングルールで置き換えられるのは、キーまたはキープレフィックスのどちらか一方です。</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>ルーティングルールは JSON 配列である必要があります。</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>ルーティングルール %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>保持モードは GOVERNANCE または COMPLIANCE である必要があります。</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>デフォルトの保持を設定するには、バケットでオブジェクトロックを有効にする必要があります。</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>デフォルトの保持期間を、日数または年数（どちらか一方）で設定してください。</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>デフォルトの保持期間は最大 100 年です。</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>バケットのタグは最大 50 個です。</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>認証に失敗しました：アクセスキーとシークレットを確認してください</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>コンピューターの時計がサーバーの時刻と大きくずれています</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>オブジェクトが存在しません</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>バケットが存在しません</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>マルチパートアップロードが存在しません</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>オブジェクトはアーカイブされています。復元をリクエストし（S3 &gt; アーカイブから復元）、利用可能になるまでお待ちください</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>アクセスが拒否されました</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>バケットは既に存在します</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>バケットが空ではありません</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>サービスがリクエストを制限しています。しばらくしてから再試行してください</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>ネットワークエラー：エンドポイントに接続できませんでした</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>リクエストがタイムアウトしました</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>バケットは、設定されているリージョンとは異なるリージョンにあります</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>サービスはこの操作をサポートしていません</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>見つかりません</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>リクエストは無効として拒否されました</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>S3 リクエストが失敗しました</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>不明な既定 ACL：%1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>署名付き URL はオブジェクトでのみ使用できます</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>URL に署名できませんでした（使用可能な認証情報がありません）</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>MD5 (ETag)</source>
        <translation>MD5（ETag）</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Provider</name>
    <message>
        <source>Not an S3 location</source>
        <translation>S3 の場所ではありません</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>そのようなオブジェクトまたはフォルダーはありません：%1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>ここではバケットの作成はサポートされていません</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>バケットは既に存在します</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>既に存在します：%1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>ここではバケットの削除はサポートされていません</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>%n 個のオブジェクトを削除できませんでした</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 には名前の変更がありません。コピーと削除を使用してください</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>%1 の整合性チェックに失敗しました</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>バケット %1 に SSE-C キーが設定されていません</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 がソースの ETag %2 と異なります</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>保存：%1 バイト、想定：%2 バイト</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>ダウンロードが不完全です：%2 バイト中 %1 バイト</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 が ETag %2 と異なります</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>%1 を置き換えられません</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1 に書き込めません</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>そのようなファイルはありません：%1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>ディレクトリです：%1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>無効な宛先です：%1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1 を読み取れません</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 がローカルの MD5 %2 と異なります</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>%1 の読み取り中にエラーが発生しました</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 が想定値 %2 と異なります</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>接続の一覧では実行できません</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>S3 の場所ではありません</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>不明な接続です</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>AWS プロファイル「%1」の認証情報を取得できませんでした。AWS SSO (IAM Identity Center) を使用している場合はセッションの有効期限が切れている可能性があります。「aws sso login」を実行してから再試行してください。</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>環境変数に AWS 認証情報がありません。アプリケーションを起動する前に AWS_ACCESS_KEY_ID と AWS_SECRET_ACCESS_KEY を設定してください。</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>AWS 認証情報が見つかりません（環境変数、~/.aws プロファイル、SSO、Web ID、インスタンスメタデータ）。AWS SSO を使用している場合は「aws sso login」を実行してから再試行してください。</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>この接続にはシークレットキーが保存されていません。接続を編集して入力してください</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>接続しました：%n 個のバケットが表示されています</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>接続しました（バケットの一覧表示は許可されていません。ピン留めした %n 個のバケットにアクセスできます）</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3（AES-256、S3 が管理するキー）</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS（AWS KMS キー）</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C（お客様が指定するキー）</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>オブジェクトのタグは最大 10 個です。</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>タグキーは 1～128 文字にする必要があります。</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>タグ値は最大 256 文字です。</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>タグキーを「aws:」で始めることはできません。</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>アーカイブされていません</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>アーカイブ済み。復元中</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>アーカイブ済み。復元されたコピーは %1 まで利用可能</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>アーカイブ済み。データを読み取るには復元してください</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>バージョンではありません：%1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>%n 個のバージョンを削除できませんでした</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 は削除されていません</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>%1 のバージョンがありません</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>不明な復元階層：%1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>少なくとも 1 日間は復元してください</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>「%1」以下</translation>
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
        <translation>%1 より後に更新</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>%1 より前に更新</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>、</translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>位置 %1 の正規表現が無効です：%2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>ワイルドカードパターン「%1」が無効です：%2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>ファイルを検索</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>検索場所：</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>例：*.log; report — 空欄：すべて</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>ワイルドカード：* 任意の文字列、? 任意の 1 文字、[abc] いずれか 1 文字。複数のパターンは「;」で区切ります。ワイルドカードを含まない文字列は名前のどこにあっても一致します。</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>名前(&amp;N)：</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>ワイルドカード</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>正規表現</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>構文(&amp;Y)：</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>大文字と小文字を区別(&amp;C)</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>検索フォルダー以下のフルパスと照合(&amp;P)</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>名前だけでなく「logs/2024/a.csv」に対して「2024/*.csv」を照合します。この場合 * は「/」にも一致します</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>例：logs/2024-（省略可）</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>検索フォルダー以下で、この文字列で始まるパスだけを検索します。S3 ではサーバーがこのキープレフィックスで絞り込むため、すべてを一覧表示するよりはるかに高速です。</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>パスのプレフィックス(&amp;R)：</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>例：10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>例：1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>最小サイズ(&amp;L)：</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>最大サイズ(&amp;O)：</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>更新日時がこれより後(&amp;A)：</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>更新日時がこれより前(&amp;B)：</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>すべて</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>ストレージクラス(&amp;T)：</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>ファイルとフォルダー</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>ファイルのみ</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>フォルダーのみ</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>対象(&amp;I)：</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>隠しファイルと隠しフォルダーを含める(&amp;H)</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>制限なし</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>最大結果数(&amp;X)：</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>検索(&amp;S)</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>「%1」はサイズではありません（例：1500、10 KB、1.5 GB）</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>最小サイズが最大サイズより大きくなっています。</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>「後」の日時が「前」の日時より後になっています。</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>フォルダーにはサイズ、日時、ストレージクラスがありません。これらの条件を使うにはファイルを検索してください。</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>パスのプレフィックスで検索フォルダーの外を指定することはできません。</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>システムキーチェーンのエラー</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>システムキーチェーンにシークレットが保存されていません</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>シークレットが見つかりません</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>システムの既定（%1）</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>言語(&amp;L)：</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;新しい言語は S3 File Manager の再起動後に使用されます。&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>カスタマー暗号化キー（SSE-C）</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>SSE-C オブジェクトは、お客様が保管する 256 ビットのキーで暗号化されます。S3 はキーを保存しません。&lt;b&gt;キーを紛失すると、オブジェクトを読み取れなくなります&lt;/b&gt;。キーはシステムのキーチェーンに保存されます。</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64（44 文字）または 16 進数 64 桁</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>表示</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>生成</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>独自のキーがない、この接続のすべてのバケットに使用する</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>キーを削除</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>バケット %1 にキーが設定されています（MD5 %2）。</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>バケット %1 にキーは設定されていません。</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>キーは 32 バイトで、base64 または 16 進数 64 桁で指定する必要があります。</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>バケット %1 のキーを削除しますか？このキーで暗号化されたオブジェクトは、キーなしでは読み取れません。</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>オプション(&amp;O)</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>確認する</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>上書き</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>スキップ</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>両方を保持（新しいファイルの名前を変更）</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>新しい場合は上書き</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>サイズが異なる場合は上書き</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>ファイルが存在する場合：</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>例：*.jpg; *.png（空欄：すべて）</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>対象とするファイル：</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>例：*.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>除外：</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>転送後に整合性を検証する（サイズ、MD5/ETag）</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>更新日時を保持する</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>シンボリックリンクをたどる（オフの場合はスキップ）</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>接続のデフォルト</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>S3 ストレージクラス：</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>S3 暗号化：</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>転送</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>一時停止</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>再開</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>失敗した項目を再試行</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>上へ移動</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>下へ移動</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>削除</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>すべて一時停止</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>すべて再開</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>完了した転送をクリア</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>設定…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>実行中：%1、待機中：%2</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>実行中：%1</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>転送エラー</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>リクエスト ID：%1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>転送のキャンセル</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>「%1」をキャンセルしますか？部分的に転送されたファイルは破棄されます。</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>転送の削除</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>「%1」を削除しますか？完了していないため、部分的なデータは破棄されます。</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 個の項目</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>%1 を %2 にコピー</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>%1 を %2 に移動</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 を削除</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>この場所のプロバイダーがありません</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>転送元と転送先が同じです</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>フォルダーをそれ自体の中にコピーすることはできません</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>使用可能な名前が見つかりません</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>この名前のフォルダーは既に存在します</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>待機中</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>一時停止中</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>完了（%n 個をスキップ）</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>完了</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>失敗</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>キャンセル済み</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>開始中</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>スキャン中</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>削除中</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>移動中</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>コピー中</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>終了処理中</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>（%n 件のエラー）</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n 個の項目</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n ファイル</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>転送</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>ステータス</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>進行状況</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>残り時間</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>転送の設定</translation>
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
        <translation>無制限</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>起動時に中断された転送を自動的に再開する</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>同時に実行する転送数：</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>転送あたりの並列ファイル数：</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>ファイルあたりの並列パート数：</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>マルチパートを使用するサイズ：</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>パートサイズ：</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>帯域幅の制限：</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>ファイルあたりの再試行回数：</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;非常に大きなファイルでは、パートサイズが自動的に大きくなります（S3 で許可されるパート数は最大 10,000 です）。変更は、その後に開始した転送に適用されます。帯域幅の制限はすぐに適用されます。&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>バージョン履歴 — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>更新日時</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>サイズ</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>ストレージクラス</translation>
    </message>
    <message>
        <source>State</source>
        <translation>状態</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>バージョン ID</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>表示(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>ダウンロード(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>現行として復元(&amp;R)</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>完全に削除(&amp;P)…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>削除を取り消す(&amp;U)</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>削除時にガバナンスモードの保持をバイパスする</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>最新の情報に更新</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>バージョンを読み込んでいます…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>削除マーカー（オブジェクトは削除済み）</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>削除マーカー</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>現行</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>以前</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>バージョンが見つかりません。</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n 個のバージョンと削除マーカー。</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>処理中…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>バージョンのダウンロード</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>%1 を保存しました</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>選択したバージョンが再び現行バージョンになりました。</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>バージョンの削除</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n 個のバージョンを完全に削除しますか？この操作は元に戻せません。</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>%n 個のバージョンを削除しました。</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>オブジェクトが復活しました。</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>表示 — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — 先頭の %1 を表示</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — バイナリ（%1）、先頭の %2 を 16 進数で表示</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>既定のアプリケーションで開く</translation>
    </message>
</context>
</TS>
