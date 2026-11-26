<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ar" sourcelanguage="en">
<context>
    <name>QGuiApplication</name>
    <message>
        <source>QT_LAYOUT_DIRECTION</source>
        <translation>RTL</translation>
    </message>
</context>
<context>
    <name>s3fm::AddressBar</name>
    <message>
        <source>Computer</source>
        <translation>الكمبيوتر</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>المصادر المسموح بها</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>الأساليب</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>الرؤوس المسموح بها</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>الرؤوس المكشوفة</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>الحد الأقصى للعمر (ث)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>المعرّف</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>إضافة قاعدة(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>إزالة القاعدة(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>القواعد</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>افصل بين القيم المتعددة بفواصل. الأساليب: GET وPUT وPOST وDELETE وHEAD. يُسمح بحرف بدل &quot;*&quot; واحد لكل مصدر أو رأس.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>تطبيق(&amp;A)</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>تمت إزالة تكوين CORS</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>تم حفظ قواعد CORS</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (مفاتيح يديرها S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (مفتاح AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (ثنائي الطبقة، مفتاح AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>التشفير الافتراضي(&amp;E):</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>معرّف المفتاح أو ARN أو الاسم المستعار (فارغ: المفتاح المُدار aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>مفتاح KMS(&amp;K):</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>استخدام مفتاح حاوية S3(&amp;B) (طلبات KMS أقل، تكلفة أقل)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>ينطبق على الكائنات المكتوبة من الآن فصاعدًا والتي لا تطلب تشفيرًا خاصًا بها. تحتفظ الكائنات الموجودة بتشفيرها (أعد كتابتها باستخدام &quot;تحرير الكائنات&quot; لتغييره). يشفّر AWS باستخدام SSE-S3 عند عدم تعيين أي شيء.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>تم حفظ التشفير الافتراضي</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketLifecycleTab</name>
    <message>
        <source>ID</source>
        <translation>المعرّف</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>الحالة</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>ينطبق على</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>الإجراءات</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>إضافة(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>تحرير(&amp;E)…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>تمكين/تعطيل(&amp;N)</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>إزالة(&amp;R)</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>القواعد</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>تُنفَّذ القواعد مرة واحدة يوميًا. يستخدم JSON تنسيق &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. قد تتجاهل الخدمات المتوافقة مع S3 الإجراءات التي لا تدعمها (يحتاج MinIO إلى مستويات بعيدة لعمليات الانتقال).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>تطبيق(&amp;A)</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(مُنشأ تلقائيًا)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>ممكّنة</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>معطّلة</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>تم تغيير القاعدة؛ يحفظ &quot;تطبيق&quot; القواعد في الحاوية.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>تمت إزالة تكوين دورة الحياة</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>تم حفظ قواعد دورة الحياة</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>تمكين قفل الكائنات(&amp;E)…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>الحوكمة (يمكن للمستخدمين ذوي الإذن الخاص إزالته)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>التوافق (لا يمكن لأحد إزالته، ولا حتى حساب الجذر)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>الاحتفاظ الافتراضي(&amp;R):</translation>
    </message>
    <message>
        <source>days</source>
        <translation>أيام</translation>
    </message>
    <message>
        <source>years</source>
        <translation>سنوات</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>المدة(&amp;P):</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>تحصل إصدارات الكائنات الجديدة على الاحتفاظ الافتراضي ما لم يعيّن الرفع احتفاظًا خاصًا به. لا يمكن حذف الإصدارات المحتفظ بها أو الكتابة فوقها حتى تنتهي المدة.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>تمكين قفل الكائنات</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>هل تريد تمكين قفل الكائنات على %1؟ لا يمكن التراجع عن ذلك، ويظل تعيين الإصدارات ممكّنًا نهائيًا. (تسمح بعض الخدمات بذلك فقط عند إنشاء الحاوية.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>تم تمكين قفل الكائنات</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n يوم</numerusform>
            <numerusform>يوم واحد</numerusform>
            <numerusform>يومين</numerusform>
            <numerusform>%n أيام</numerusform>
            <numerusform>%n يومًا</numerusform>
            <numerusform>%n يوم</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n سنة</numerusform>
            <numerusform>سنة واحدة</numerusform>
            <numerusform>سنتين</numerusform>
            <numerusform>%n سنوات</numerusform>
            <numerusform>%n سنة</numerusform>
            <numerusform>%n سنة</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>قفل الكائنات</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>لا يمكن لأي أحد تقصير الاحتفاظ في وضع التوافق أو إزالته. ستكون الإصدارات الجديدة غير قابلة للحذف لمدة %1. هل تريد المتابعة؟</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>تم حفظ الاحتفاظ الافتراضي</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>قفل الكائنات ممكّن على هذه الحاوية.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>قفل الكائنات غير ممكّن على هذه الحاوية.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>الاسم</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>المنطقة</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>تاريخ الإنشاء</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>المالك</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>فرض مالك الحاوية (قوائم ACL معطّلة)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>تفضيل مالك الحاوية</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>كاتب الكائن</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>ملكية الكائنات</translation>
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
        <translation>القوالب(&amp;T)</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>سياسة الحاوية</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>هل تريد استبدال النص الحالي بالقالب؟</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>تنسيق(&amp;F)</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>لا توجد سياسة للحاوية. اختر قالبًا أو الصق مستند سياسة.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>حذف السياسة(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>تطبيق(&amp;A)</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>تعذّر التنسيق: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>لا توجد سياسة.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>لم يتم العثور على مشكلات.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>هل تريد حذف سياسة الحاوية %1؟</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>تم حذف سياسة الحاوية</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>أصلح الأخطاء في السياسة أولًا: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>تمنح هذه السياسة حق الوصول لأي شخص على الإنترنت. هل تريد تطبيقها على أي حال؟</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>تم حفظ سياسة الحاوية</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>خصائص الحاوية — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>نظرة عامة</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>تعيين الإصدارات</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>التشفير</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>دورة الحياة</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>السياسة</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>الوصول العام</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>علامات التصنيف</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>موقع الويب</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>قفل الكائنات</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>الإحصاءات</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: غير مدعوم بواسطة نقطة النهاية هذه</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>حظر كل الوصول العام(&amp;A)</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>حظر الوصول العام الممنوح عبر قوائم ACL الجديدة</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>تجاهل الوصول العام الممنوح عبر أي قائمة ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>حظر الوصول العام الممنوح عبر سياسات الحاويات الجديدة</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>تقييد الوصول إلى الحاويات ذات السياسات العامة على خدمات AWS وحساب المالك</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>تنطبق إعدادات مستوى الحساب أيضًا ولها الأولوية على هذه الإعدادات. إيقاف الحظر لا يجعل أي شيء عامًا بحد ذاته.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>الوصول العام</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>هل تريد السماح بإعدادات الوصول العام على %1؟ يمكن حينها أن تصبح الكائنات عامة عبر قوائم ACL أو سياسة الحاوية.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>تم حفظ إعدادات الوصول العام</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>بادئة المفتاح:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(الحاوية بأكملها)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>حساب(&amp;C)</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>الفئة</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>الكائنات</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>يتم العدّ عبر سرد كل إصدارات الكائنات (طلب واحد لكل 1000 مفتاح)، وهو ما يستغرق وقتًا في الحاويات الكبيرة. للحاويات التي تضم ملايين الكائنات، يكون S3 Storage Lens أو مقاييس CloudWatch ‏BucketSizeBytes/NumberOfObjects أسرع (تُحدَّث يوميًا).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>إلغاء(&amp;C)</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>جارٍ العدّ…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 بايت</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>الكائنات الحالية</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>الإصدارات غير الحالية</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>علامات الحذف</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>كل الإصدارات</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>عمليات التحميل متعدد الأجزاء غير المكتملة</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>تم.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>تم الإلغاء: أعداد جزئية.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>تطبيق(&amp;A)</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>جارٍ التطبيق…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>جارٍ العدّ… %L1 عنصر</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>المفتاح</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>القيمة</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>حتى 50 علامة تصنيف؛ تُستخدم لتوزيع التكاليف والتحكم في الوصول. علامات تصنيف الكائنات منفصلة (تحرير الكائنات).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>تم حفظ علامات التصنيف</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>تعيين الإصدارات:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>حذف MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>مع تعيين الإصدارات، تؤدي الكتابة فوق كائن أو حذفه إلى الاحتفاظ بالبيانات القديمة كإصدار غير حالي (يُحتسب كتخزين). لا يمكن إيقاف تعيين الإصدارات بعد تمكينه، بل تعليقه فقط: تبقى الإصدارات الموجودة. لا يمكن تغيير حذف MFA إلا بواسطة حساب الجذر عبر API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>تمكين تعيين الإصدارات(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>تعليق تعيين الإصدارات(&amp;S)</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>تم تمكين تعيين الإصدارات</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>تعليق تعيين الإصدارات</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>هل تريد تعليق تعيين الإصدارات على %1؟ ستستبدل عمليات الكتابة الجديدة الكائنات مجددًا؛ ويتم الاحتفاظ بالإصدارات الموجودة.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>تم تعليق تعيين الإصدارات</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>معطّل (لم يُمكَّن قط)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>ممكّن</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>معلّق</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>معطّل</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>تمكين استضافة موقع ويب ثابت(&amp;W)</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>استضافة موقع ويب(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>مستند الفهرس(&amp;I):</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>اختياري، مثل error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>مستند الخطأ(&amp;E):</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>قواعد إعادة توجيه اختيارية (مصفوفة JSON)، مثل
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>قواعد التوجيه(&amp;R):</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>إعادة توجيه كل الطلبات إلى مضيف آخر(&amp;T)</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>مثل www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>اسم المضيف(&amp;N):</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>مثل الطلب</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>البروتوكول(&amp;P):</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>تقدّم نقاط نهاية مواقع الويب الكائنات عبر HTTP العادي، وفقط الكائنات القابلة للقراءة علنًا (سياسة الحاوية، حظر الوصول العام).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>تطبيق(&amp;A)</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>نقطة نهاية موقع الويب: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>تم حفظ تكوين موقع الويب</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>تم تعطيل استضافة موقع الويب</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>الملف موجود بالفعل</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; موجود بالفعل في الوجهة. هل تريد الكتابة فوقه؟</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>الجديد:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>الموجود:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>الملف الجديد أحدث.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>الملف الموجود أحدث أو بنفس القِدم.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>لكليهما الحجم نفسه.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>الحجمان مختلفان.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>تطبيق على كل التعارضات المتبقية في عملية النقل هذه(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>الكتابة فوقه(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>تخطٍّ(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>الاحتفاظ بكليهما(&amp;K)</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>النسخ باسم جديد مثل &quot;name (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>إذا كان أحدث(&amp;N)</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>الكتابة فوقه فقط إذا كان الملف الجديد أحدث، وإلا التخطي</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>إذا اختلف الحجم(&amp;Z)</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>الكتابة فوقه فقط إذا اختلف الحجمان، وإلا التخطي</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>إلغاء النقل</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>الاتصالات</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>إضافة</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>تكرار</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>حذف</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>استيراد ملفات تعريف AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>إنشاء اتصالات لملفات التعريف الموجودة في %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>الاتصال</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>الاسم(&amp;N):</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>يُستخدم في العناوين مثل s3://&lt;id&gt;/bucket/key. لا يمكن تغييره بعد الحفظ.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>المعرّف(&amp;I):</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>الموفّر(&amp;P):</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>اتركه فارغًا لـ Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>عنوان URL لنقطة النهاية(&amp;E):</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>المنطقة(&amp;R):</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>تلقائي</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>استضافة افتراضية (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>نمط المسار (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>العنونة(&amp;A):</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>بيانات الاعتماد</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>مفتاح الوصول والسر</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>ملف تعريف AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>متغيرات البيئة</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>سلسلة بيانات اعتماد AWS الافتراضية</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>مجهول (حاويات عامة)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>معرّف مفتاح الوصول:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>إظهار</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>مفتاح الوصول السري:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>اختياري (بيانات اعتماد مؤقتة)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>رمز الجلسة المميز:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>تُخزَّن الأسرار في سلسلة مفاتيح النظام، وليس في ملفات الإعدادات أبدًا.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>ملف التعريف:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>يدعم ملفات التعريف ذات المفاتيح الثابتة وSSO وassume-role ‏(role_arn / source_profile) وcredential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>متقدم</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>التحقق من شهادات TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>شهادات النظام</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>استعراض…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>حزمة CA</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>الشهادات (*.pem *.crt);;كل الملفات (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>حزمة CA:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>عند الدعم (افتراضي AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>فقط عند الحاجة (الأكثر توافقًا)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>ترفض بعض الخدمات المتوافقة مع S3 رؤوس المجاميع الاختبارية الأحدث للتحقق من السلامة.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>المجاميع الاختبارية للطلبات:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>افتراضي الحاوية</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>فئة التخزين للرفع:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>الحاويات التي تُعرض حتى عندما لا تسمح بيانات الاعتماد بسرد الحاويات.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>الحاويات المثبّتة:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b، أو * للكل</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>حاويات الدفع على مقدم الطلب: تُحتسب تكلفة الطلبات إليها على حسابك (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>الدفع على مقدم الطلب:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> ث</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>مهلة الطلب:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>اختبار الاتصال(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>فتح(&amp;O)</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>مخزّن في سلسلة المفاتيح — اتركه فارغًا للإبقاء عليه</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>اتصال %1 جديد</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (نسخة)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>حذف الاتصال</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>هل تريد حذف الاتصال &quot;%1&quot; والسر المخزّن الخاص به؟</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>استيراد ملفات تعريف AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>لم يتم العثور على ملفات تعريف في %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>تم استيراد كل ملفات تعريف AWS بالفعل.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>يستخدم AWS_ACCESS_KEY_ID وAWS_SECRET_ACCESS_KEY وAWS_SESSION_TOKEN من البيئة التي بدأ التطبيق بها.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>يجرّب متغيرات البيئة، وملف التعريف الافتراضي، وSSO، وهوية الويب، وبيانات اعتماد الحاوية/المثيل، بالترتيب القياسي لـ AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>الطلبات غير موقّعة. يمكن الوصول إلى الحاويات والكائنات العامة فقط.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>حفظ الاتصال</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>يوجد اتصال بالمعرّف &quot;%1&quot; بالفعل.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>أدخل مفتاح الوصول السري.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>جارٍ الاختبار…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>تغييرات غير محفوظة</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>هل تريد حفظ التغييرات على &quot;%1&quot;؟</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>الاتصالات *</translation>
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
        <translation>خدمة أخرى متوافقة مع S3</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>أدخل اسمًا للاتصال.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>يجب أن يحتوي المعرّف على أحرف لاتينية صغيرة وأرقام و&apos;.&apos; و&apos;-&apos; و&apos;_&apos; فقط.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>يجب أن تكون نقطة النهاية عنوان URL من نوع http:// أو https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>استبدل العنصر النائب في عنوان URL لنقطة النهاية.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>أدخل عنوان URL لنقطة نهاية الخدمة المتوافقة مع S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>أدخل منطقة (على سبيل المثال us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>أدخل معرّف مفتاح الوصول.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>اختر ملف تعريف AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>تعذّرت كتابة ملف الإعدادات</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>حاوية جديدة</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>أحرف لاتينية صغيرة وأرقام ونقاط وشرطات</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>الاسم(&amp;N):</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>افتراضي نقطة النهاية</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>المنطقة(&amp;R):</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>افتراضي (فرض مالك الحاوية: قوائم ACL معطّلة)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>تفضيل مالك الحاوية (قوائم ACL ممكّنة)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>كاتب الكائن (قوائم ACL ممكّنة)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>ملكية الكائنات(&amp;O):</translation>
    </message>
    <message>
        <source>None</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>ACL جاهزة(&amp;A):</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>تمكين قفل الكائنات(&amp;L) (يشغّل تعيين الإصدارات؛ لا يمكن إيقافه)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;تحظر حاويات AWS الجديدة الوصول العام افتراضيًا؛ تفشل قوائم ACL العامة حتى يتم تخفيف حظر الوصول العام.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>إنشاء</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>أدخل اسم الحاوية.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>حذف الحاوية</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>هل تريد حذف الحاوية الفارغة &lt;b&gt;%1&lt;/b&gt; نهائيًا؟</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>كائنات</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>إصدارات كائنات أو علامات حذف</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>عمليات تحميل متعدد الأجزاء غير مكتملة</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; ليست فارغة: تحتوي على %2.&lt;br&gt;&lt;br&gt;لحذفها، يتم أولًا حذف كل كائن وكل إصدار وكل عملية رفع غير مكتملة. &lt;b&gt;لا يمكن التراجع عن ذلك.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>إفراغ الحاوية ثم حذفها(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>تجاوز الاحتفاظ في وضع الحوكمة(&amp;B) (يتطلب s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>اكتب اسم الحاوية للتأكيد:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>حذف</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>إفراغ وحذف</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>بلا تغيير / افتراضي الحاوية</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>معرّف مفتاح KMS أو ARN أو الاسم المستعار (فارغ: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>لا يوجد موفّر لـ %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>حاوية</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>اتصال</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>مجلد</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ملف</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>ملف %1</translation>
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
        <translation>علامة حذف (محذوف)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>علامة حذف</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (الحالي)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>الاسم</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>تاريخ التعديل</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>النوع</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>فئة التخزين</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>الإصدار</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>تم إلغاء العملية</translation>
    </message>
</context>
<context>
    <name>s3fm::Format</name>
    <message>
        <source>%1 B</source>
        <comment>size in bytes</comment>
        <translation>%1 بايت</translation>
    </message>
    <message>
        <source>%1/s</source>
        <comment>transfer rate</comment>
        <translation>%1/ث</translation>
    </message>
</context>
<context>
    <name>s3fm::KeyValueEditor</name>
    <message>
        <source>Add</source>
        <translation>إضافة</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>إزالة</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> يوم</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>بايت (فارغ: بلا حد)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>إضافة</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>إزالة</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>قاعدة دورة الحياة</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>اختياري؛ ينشئ S3 معرّفًا</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>ممكّنة(&amp;E)</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>معرّف القاعدة(&amp;I):</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>عامل التصفية(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>الإصدارات الحالية(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>الإصدارات غير الحالية &amp;&amp; عمليات الرفع(&amp;N)</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>تنطبق القاعدة على الكائنات المطابقة لكل الشروط أدناه؛ وبدون شروط تنطبق على الحاوية بأكملها.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>مثل logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>بادئة المفتاح(&amp;P):</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>أكبر من:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>أصغر من:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>علامة التصنيف</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>القيمة</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>علامات تصنيف الكائن:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>النقل إلى فئة التخزين</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>بعد (أيام أو YYYY-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>عمليات الانتقال:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>أبدًا</translation>
    </message>
    <message>
        <source>After</source>
        <translation>بعد</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>في تاريخ</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>انتهاء صلاحية الكائنات (حذفها):</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>إزالة علامات الحذف المنتهية الصلاحية (العلامات التي ليس لها إصدارات غير حالية)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;في حاوية ذات إصدارات، يؤدي انتهاء صلاحية الإصدار الحالي إلى إضافة علامة حذف؛ وتبقى البيانات كإصدار غير حالي.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>الأيام بعد أن يصبح غير حالي</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>الاحتفاظ بالأحدث (اختياري)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>الحذف بعد</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>مع الاحتفاظ بالأحدث</translation>
    </message>
    <message>
        <source>none</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>الإصدارات غير الحالية:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>إلغاء عمليات التحميل متعدد الأجزاء غير المكتملة بعد</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>عمليات الرفع:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>لا يوجد ملف أو دليل بهذا الاسم: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>تم رفض الإذن</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>ليس موقعًا محليًا</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>ليس دليلًا: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>تم رفض الإذن: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>دليل غير صالح</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>موجود بالفعل: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>تعذّر إنشاء الدليل %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>رفض حذف جذر نظام ملفات</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: غير موجود</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… و%1 أخرى</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>لم يتعذّر حذف أي عنصر</numerusform>
            <numerusform>تعذّر حذف عنصر واحد</numerusform>
            <numerusform>تعذّر حذف عنصرين</numerusform>
            <numerusform>تعذّر حذف %n عناصر</numerusform>
            <numerusform>تعذّر حذف %n عنصرًا</numerusform>
            <numerusform>تعذّر حذف %n عنصر</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>تعذّر نقل %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>لا يمكن نقل دليل بين أنظمة ملفات مباشرةً</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>هذا دليل: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>تعذّرت قراءة %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>تعذّرت كتابة %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>خطأ في قراءة %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>خطأ في كتابة %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>فشل التحقق من السلامة لـ %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>تمت كتابة %1 بايت، والمتوقع %2</translation>
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
        <translation>تم رفع %1</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>تحرير(&amp;E)</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>نسخ(&amp;C)…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>نقل(&amp;M)…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>إعادة تسمية(&amp;R)…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>مجلد جديد(&amp;F)…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>حذف(&amp;D)…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>الإعدادات(&amp;G)…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>إنهاء(&amp;Q)</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>نسخ الموقع(&amp;L)</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>نسخ S3 URI(&amp;U)</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>نسخ عنوان HTTP URL(&amp;H)</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>نسخ ARN(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>الخصائص(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>مشاركة رابط (عنوان URL موقّع مسبقًا)(&amp;S)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>إظهار الإصدارات(&amp;V)</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>استعراض كما في تاريخ(&amp;A)…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>سجل الإصدارات(&amp;H)…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>استعادة من الأرشيف(&amp;R)…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>عمليات التحميل متعدد الأجزاء غير المكتملة(&amp;I)…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>حاوية جديدة(&amp;B)…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>خصائص الحاوية(&amp;U)…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>تحديد الكل(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>إلغاء تحديد الكل(&amp;D)</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>عكس التحديد(&amp;I)</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>تصفية سريعة(&amp;F)…</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>تحديث(&amp;R)</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>إظهار الملفات المخفية(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>تبديل اللوحتين(&amp;S)</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>فتح في اللوحة الأخرى(&amp;O)</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>رجوع(&amp;B)</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>تقدّم(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>المجلد الرئيسي(&amp;H)</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>الجذر(&amp;R)</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>تحرير العنوان(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>أماكن اللوحة اليسرى(&amp;L)…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>أماكن اللوحة اليمنى(&amp;I)…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>إدارة الاتصالات(&amp;M)…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>إظهار عمليات النقل(&amp;T)</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>إيقاف الكل مؤقتًا(&amp;P)</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>استئناف الكل(&amp;R)</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>مسح المكتملة(&amp;C)</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>إعدادات النقل(&amp;S)…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>اختصارات لوحة المفاتيح(&amp;K)</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>حول(&amp;A)</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>ملف(&amp;F)</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>تحديد(&amp;S)</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>عرض(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>انتقال(&amp;G)</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>عمليات النقل(&amp;T)</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>الاتصالات(&amp;C)</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>تعليمات(&amp;H)</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>المجلد الرئيسي</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>الجذر (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>اتصالات S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>كل الاتصالات</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>مثل اللوحة الأخرى</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>لم يتم نسخ أي موقع إلى الحافظة</numerusform>
            <numerusform>تم نسخ موقع واحد إلى الحافظة</numerusform>
            <numerusform>تم نسخ موقعين إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n مواقع إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n موقعًا إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n موقع إلى الحافظة</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>في قائمة الانتظار: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>لا توجد عمليات نقل متقطعة للاستئناف</numerusform>
            <numerusform>جارٍ استئناف عملية نقل متقطعة واحدة</numerusform>
            <numerusform>جارٍ استئناف عمليتي نقل متقطعتين</numerusform>
            <numerusform>جارٍ استئناف %n عمليات نقل متقطعة</numerusform>
            <numerusform>جارٍ استئناف %n عملية نقل متقطعة</numerusform>
            <numerusform>جارٍ استئناف %n عملية نقل متقطعة</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>لم تتم استعادة أي عملية نقل متقطعة؛ استأنفها في لوحة عمليات النقل</numerusform>
            <numerusform>تمت استعادة عملية نقل متقطعة واحدة؛ استأنفها في لوحة عمليات النقل</numerusform>
            <numerusform>تمت استعادة عمليتي نقل متقطعتين؛ استأنفهما في لوحة عمليات النقل</numerusform>
            <numerusform>تمت استعادة %n عمليات نقل متقطعة؛ استأنفها في لوحة عمليات النقل</numerusform>
            <numerusform>تمت استعادة %n عملية نقل متقطعة؛ استأنفها في لوحة عمليات النقل</numerusform>
            <numerusform>تمت استعادة %n عملية نقل متقطعة؛ استأنفها في لوحة عمليات النقل</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>تم: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: لا توجد أخطاء</numerusform>
            <numerusform>%1: خطأ واحد</numerusform>
            <numerusform>%1: خطآن</numerusform>
            <numerusform>%1: %n أخطاء</numerusform>
            <numerusform>%1: %n خطأً</numerusform>
            <numerusform>%1: %n خطأ</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>تم الإلغاء: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>تُستخدم اللغة الجديدة بعد إعادة تشغيل S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>لا يمكن نسخ علامات الحذف.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>لا يمكن نقل الإصدارات أو إعادة تسميتها؛ انسخها، أو استخدم سجل الإصدارات.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>سيتم نسخ المجلدات بمحتوياتها الحالية. اخرج من عرض &quot;كما في تاريخ&quot; لنسخ المجلدات، أو حدد الملفات.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>عرض الإصدارات</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>لا توجد عناصر</numerusform>
            <numerusform>عنصر واحد</numerusform>
            <numerusform>عنصران</numerusform>
            <numerusform>%n عناصر</numerusform>
            <numerusform>%n عنصرًا</numerusform>
            <numerusform>%n عنصر</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>نقل %1 إلى:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>نسخ %1 إلى:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>لا تدعم S3 إعادة التسمية: يتم نسخ الكائنات، ثم حذف الأصلية.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>نقل</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>نسخ</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>وجهة غير صالحة: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>إعادة تسمية</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>الاسم الجديد:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>يجب ألا يحتوي الاسم على فواصل مسارات.</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>لا يمكن إنشاء مجلدات هنا</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>مجلد جديد</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>اسم المجلد (استخدم / للمجلدات المتداخلة):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>اسم مجلد غير صالح: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>حذف</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>في عرض الإصدارات، يمكن حذف الإصدارات فقط. اخرج منه لحذف المجلدات.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>حذف الحاوية</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>احذف الحاويات واحدة تلو الأخرى.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>لا يمكن حذف هذه العناصر هنا</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>هل تريد حذف المجلد &quot;%1&quot; وكل محتوياته نهائيًا؟</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>هل تريد حذف &quot;%1&quot; نهائيًا؟</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>هل تريد حذف العناصر المحددة نهائيًا؟</numerusform>
            <numerusform>هل تريد حذف العنصر المحدد نهائيًا؟</numerusform>
            <numerusform>هل تريد حذف العنصرين المحددين نهائيًا؟</numerusform>
            <numerusform>هل تريد حذف %n عناصر محددة نهائيًا؟</numerusform>
            <numerusform>هل تريد حذف %n عنصرًا محددًا نهائيًا؟</numerusform>
            <numerusform>هل تريد حذف %n عنصر محدد نهائيًا؟</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>لا يوجد تطبيق لفتح %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>لا تحتوي علامة الحذف على أي محتوى</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>حدد كائنات أو مجلدات S3 لتحريرها</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>لا توجد عناصر محددة</numerusform>
            <numerusform>عنصر واحد محدد</numerusform>
            <numerusform>عنصران محددان</numerusform>
            <numerusform>%n عناصر محددة</numerusform>
            <numerusform>%n عنصرًا محددًا</numerusform>
            <numerusform>%n عنصر محدد</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>جارٍ تحديث الكائنات…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>إلغاء</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>تم الإلغاء قبل تحديث أي كائن</numerusform>
            <numerusform>تم الإلغاء بعد كائن واحد</numerusform>
            <numerusform>تم الإلغاء بعد كائنين</numerusform>
            <numerusform>تم الإلغاء بعد %n كائنات</numerusform>
            <numerusform>تم الإلغاء بعد %n كائنًا</numerusform>
            <numerusform>تم الإلغاء بعد %n كائن</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>لم يتم تحديث أي كائن</numerusform>
            <numerusform>تم تحديث كائن واحد</numerusform>
            <numerusform>تم تحديث كائنين</numerusform>
            <numerusform>تم تحديث %n كائنات</numerusform>
            <numerusform>تم تحديث %n كائنًا</numerusform>
            <numerusform>تم تحديث %n كائن</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>تحرير الكائنات</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
            <numerusform>الكائنات المحدَّثة: %1 من %n؛ الفاشلة: %2.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>لم يُحذف أي عنصر بعد…</numerusform>
            <numerusform>تم حذف عنصر واحد…</numerusform>
            <numerusform>تم حذف عنصرين…</numerusform>
            <numerusform>تم حذف %Ln عناصر…</numerusform>
            <numerusform>تم حذف %Ln عنصرًا…</numerusform>
            <numerusform>تم حذف %Ln عنصر…</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>قبل حدوث الخطأ: %1 و%2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>لم يُحذف أي عنصر</numerusform>
            <numerusform>تم حذف عنصر واحد</numerusform>
            <numerusform>تم حذف عنصرين</numerusform>
            <numerusform>تم حذف %n عناصر</numerusform>
            <numerusform>تم حذف %n عنصرًا</numerusform>
            <numerusform>تم حذف %n عنصر</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>لم تُلغَ أي عملية رفع</numerusform>
            <numerusform>تم إلغاء عملية رفع واحدة</numerusform>
            <numerusform>تم إلغاء عمليتي رفع</numerusform>
            <numerusform>تم إلغاء %n عمليات رفع</numerusform>
            <numerusform>تم إلغاء %n عملية رفع</numerusform>
            <numerusform>تم إلغاء %n عملية رفع</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>يمكن إظهار الإصدارات داخل حاويات S3</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>عرض(&amp;V)</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>تحرير البيانات الوصفية وعلامات التصنيف والتخزين(&amp;T)…</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>لم يتم تمكين تعيين الإصدارات قط على %1: لكل كائن إصدار واحد</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>تعيين الإصدارات معلّق على %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>يعمل الاستعراض حسب نقطة زمنية داخل حاويات S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>استعراض كما في تاريخ</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>إظهار هذه الحاوية كما كانت في نقطة زمنية معينة، بإعادة بنائها من سجل إصداراتها (للحاويات ذات الإصدارات فقط).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>التاريخ والوقت:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>العودة إلى الحالي</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>حدد كائن S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>حذف الإصدارات</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>هل تريد حذف الإصدارات نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف إصدار واحد نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف إصدارين نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدارات نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدارًا نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدار نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>لم يتم حذف أي إصدار</numerusform>
            <numerusform>تم حذف إصدار واحد</numerusform>
            <numerusform>تم حذف إصدارين</numerusform>
            <numerusform>تم حذف %n إصدارات</numerusform>
            <numerusform>تم حذف %n إصدارًا</numerusform>
            <numerusform>تم حذف %n إصدار</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>حدد كائنات أو مجلدات S3 مؤرشفة</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>جارٍ طلب عمليات الاستعادة…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>لم يتم طلب استعادة أي كائن</numerusform>
            <numerusform>تم طلب الاستعادة لكائن واحد</numerusform>
            <numerusform>تم طلب الاستعادة لكائنين</numerusform>
            <numerusform>تم طلب الاستعادة لـ %n كائنات</numerusform>
            <numerusform>تم طلب الاستعادة لـ %n كائنًا</numerusform>
            <numerusform>تم طلب الاستعادة لـ %n كائن</numerusform>
        </translation>
    </message>
    <message>
        <source>%1; %2</source>
        <comment>restore summary: requested; skipped</comment>
        <translation>%1؛ %2</translation>
    </message>
    <message numerus="yes">
        <source>%n not archived, already restored or in progress</source>
        <translation>
            <numerusform>لا توجد كائنات غير مؤرشفة أو مستعادة بالفعل أو قيد الاستعادة</numerusform>
            <numerusform>كائن واحد غير مؤرشف أو مستعاد بالفعل أو قيد الاستعادة</numerusform>
            <numerusform>كائنان غير مؤرشفين أو مستعادان بالفعل أو قيد الاستعادة</numerusform>
            <numerusform>%n كائنات غير مؤرشفة أو مستعادة بالفعل أو قيد الاستعادة</numerusform>
            <numerusform>%n كائنًا غير مؤرشف أو مستعاد بالفعل أو قيد الاستعادة</numerusform>
            <numerusform>%n كائن غير مؤرشف أو مستعاد بالفعل أو قيد الاستعادة</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>استعادة من الأرشيف</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>لم يفشل أي منها.</numerusform>
            <numerusform>فشل واحد.</numerusform>
            <numerusform>فشل اثنان.</numerusform>
            <numerusform>فشل %n.</numerusform>
            <numerusform>فشل %n.</numerusform>
            <numerusform>فشل %n.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>افتح حاوية S3 أولًا</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>افتح اتصال S3 أولًا</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>جارٍ إنشاء الحاوية %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>حاوية جديدة</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>تعذّر إنشاء %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>تم إنشاء الحاوية %1</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>حدد حاوية أو افتح واحدة</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>جارٍ التحقق من محتويات %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>جارٍ حذف محتويات %1…</translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>تم حذف الحاوية %1</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>تم الإلغاء؛ لم يتم حذف أي عنصر بعد</numerusform>
            <numerusform>تم الإلغاء؛ تم حذف عنصر واحد بالفعل</numerusform>
            <numerusform>تم الإلغاء؛ تم حذف عنصرين بالفعل</numerusform>
            <numerusform>تم الإلغاء؛ تم حذف %n عناصر بالفعل</numerusform>
            <numerusform>تم الإلغاء؛ تم حذف %n عنصرًا بالفعل</numerusform>
            <numerusform>تم الإلغاء؛ تم حذف %n عنصر بالفعل</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>تعذّر حذف الحاوية %1.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>لم يتعذّر حذف أي عنصر.</numerusform>
            <numerusform>تعذّر حذف عنصر واحد (الاحتفاظ أو الحجز القانوني أو الأذونات).</numerusform>
            <numerusform>تعذّر حذف عنصرين (الاحتفاظ أو الحجز القانوني أو الأذونات).</numerusform>
            <numerusform>تعذّر حذف %n عناصر (الاحتفاظ أو الحجز القانوني أو الأذونات).</numerusform>
            <numerusform>تعذّر حذف %n عنصرًا (الاحتفاظ أو الحجز القانوني أو الأذونات).</numerusform>
            <numerusform>تعذّر حذف %n عنصر (الاحتفاظ أو الحجز القانوني أو الأذونات).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>حدد كائن S3 لمشاركته</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>فتح</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>فتح باستخدام التطبيق الافتراضي</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>جعل هذا الإصدار هو الحالي</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>استعادة الإصدار</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>إلغاء الحذف</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>لا يوجد شيء لنسخه</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>لم يتم نسخ أي سطر إلى الحافظة</numerusform>
            <numerusform>تم نسخ سطر واحد إلى الحافظة</numerusform>
            <numerusform>تم نسخ سطرين إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n أسطر إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n سطرًا إلى الحافظة</numerusform>
            <numerusform>تم نسخ %n سطر إلى الحافظة</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>تبديل اللوحة</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>فتح / المجلد الأصل</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>تبديل التحديد (والانتقال لأسفل) / تبديل التحديد</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+Arrows</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>توسيع التحديد</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>كتابة أحرف</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>الانتقال إلى الاسم</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>اختصارات لوحة المفاتيح</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>حول S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;مدير ملفات بلوحتين لـ Amazon S3 والتخزين المتوافق مع S3.&lt;/p&gt;&lt;p&gt;مبني باستخدام Qt %2 وAWS SDK for C++.&lt;/p&gt;&lt;p&gt;ترخيص MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>تعديلات بعيدة غير محفوظة</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>تحتوي بعض الملفات المحررة على تغييرات لم يتم رفعها. هل تريد الإنهاء على أي حال؟</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>لا توجد عمليات نقل قيد التشغيل. هل تريد الإنهاء؟</numerusform>
            <numerusform>لا تزال عملية نقل واحدة قيد التشغيل. هل تريد الإنهاء ومتابعتها في المرة القادمة؟</numerusform>
            <numerusform>لا تزال عمليتا نقل قيد التشغيل. هل تريد الإنهاء ومتابعتهما في المرة القادمة؟</numerusform>
            <numerusform>لا تزال %n عمليات نقل قيد التشغيل. هل تريد الإنهاء ومتابعتها في المرة القادمة؟</numerusform>
            <numerusform>لا تزال %n عملية نقل قيد التشغيل. هل تريد الإنهاء ومتابعتها في المرة القادمة؟</numerusform>
            <numerusform>لا تزال %n عملية نقل قيد التشغيل. هل تريد الإنهاء ومتابعتها في المرة القادمة؟</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>لا توجد عمليات نقل قيد التشغيل. هل تريد الإنهاء؟</numerusform>
            <numerusform>لا تزال عملية نقل واحدة قيد التشغيل. هل تريد الإنهاء والتخلي عنها؟</numerusform>
            <numerusform>لا تزال عمليتا نقل قيد التشغيل. هل تريد الإنهاء والتخلي عنهما؟</numerusform>
            <numerusform>لا تزال %n عمليات نقل قيد التشغيل. هل تريد الإنهاء والتخلي عنها؟</numerusform>
            <numerusform>لا تزال %n عملية نقل قيد التشغيل. هل تريد الإنهاء والتخلي عنها؟</numerusform>
            <numerusform>لا تزال %n عملية نقل قيد التشغيل. هل تريد الإنهاء والتخلي عنها؟</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>عمليات نقل قيد التشغيل</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n دقيقة</numerusform>
            <numerusform>دقيقة واحدة</numerusform>
            <numerusform>دقيقتان</numerusform>
            <numerusform>%n دقائق</numerusform>
            <numerusform>%n دقيقة</numerusform>
            <numerusform>%n دقيقة</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n ساعة</numerusform>
            <numerusform>ساعة واحدة</numerusform>
            <numerusform>ساعتان</numerusform>
            <numerusform>%n ساعات</numerusform>
            <numerusform>%n ساعة</numerusform>
            <numerusform>%n ساعة</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n يوم</numerusform>
            <numerusform>يوم واحد</numerusform>
            <numerusform>يومان</numerusform>
            <numerusform>%n أيام</numerusform>
            <numerusform>%n يومًا</numerusform>
            <numerusform>%n يوم</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>عمليات التحميل متعدد الأجزاء غير المكتملة — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>تحتفظ عمليات الرفع المتقطعة بأجزائها (وبتكلفة تخزينها) حتى يتم إكمالها أو إلغاؤها. يمكن لقاعدة دورة الحياة في الحاوية إلغاؤها تلقائيًا.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>بادئة المفتاح:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(الحاوية بأكملها)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>تحديث</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>المفتاح</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>تاريخ البدء</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>العمر</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>الأجزاء</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>فئة التخزين</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>إلغاء المحدد(&amp;S)…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>إلغاء الكل(&amp;A)…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>معرّف الرفع: %1
بدأه: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>لا توجد عمليات رفع غير مكتملة. (تسرد بعض الخدمات المتوافقة مع S3 عمليات الرفع لمفتاح كائن محدد فقط: أدخله كبادئة.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>لا توجد عمليات رفع غير مكتملة، %1 مخزّنة.</numerusform>
            <numerusform>عملية رفع واحدة غير مكتملة، %1 مخزّنة.</numerusform>
            <numerusform>عمليتا رفع غير مكتملتين، %1 مخزّنة.</numerusform>
            <numerusform>%n عمليات رفع غير مكتملة، %1 مخزّنة.</numerusform>
            <numerusform>%n عملية رفع غير مكتملة، %1 مخزّنة.</numerusform>
            <numerusform>%n عملية رفع غير مكتملة، %1 مخزّنة.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>جارٍ التحميل…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>إلغاء عمليات الرفع</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>هل تريد إلغاء عمليات الرفع؟ سيتم حذف أجزائها المرفوعة.</numerusform>
            <numerusform>هل تريد إلغاء عملية رفع واحدة؟ سيتم حذف أجزائها المرفوعة.</numerusform>
            <numerusform>هل تريد إلغاء عمليتي رفع؟ سيتم حذف أجزائهما المرفوعة.</numerusform>
            <numerusform>هل تريد إلغاء %n عمليات رفع؟ سيتم حذف أجزائها المرفوعة.</numerusform>
            <numerusform>هل تريد إلغاء %n عملية رفع؟ سيتم حذف أجزائها المرفوعة.</numerusform>
            <numerusform>هل تريد إلغاء %n عملية رفع؟ سيتم حذف أجزائها المرفوعة.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>جارٍ الإلغاء…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>تحرير الكائنات</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>تغيير %1. يتم تطبيق الأقسام المحددة فقط؛ تشمل المجلدات كل ما بداخلها.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>الرؤوس والبيانات الوصفية</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(بلا تغيير)</translation>
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
        <translation>تعيين بيانات المستخدم الوصفية:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>المفتاح</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>القيمة</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>استبدال كل بيانات المستخدم الوصفية (وإلا الدمج)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>إزالة المفاتيح:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>فئة التخزين</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>التشفير</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>علامات التصنيف (استبدال مجموعة العلامات)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>علامة التصنيف</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>التحكم في الوصول (ACL جاهزة)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;يتم تغيير الرؤوس وفئة التخزين والتشفير عبر نسخ كل كائن فوق نفسه (لا يمكن لـ S3 تغييرها بطريقة أخرى)؛ ويؤدي ذلك إلى إعادة تعيين ACL الخاصة به ما لم يتم تعيين ACL هنا أيضًا. يجب استعادة الكائنات المؤرشفة (Glacier وDeep Archive) أولًا.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>تطبيق</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>حدد قسمًا واحدًا على الأقل لتغييره.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>مفتاح بيانات وصفية غير صالح &quot;%1&quot;: استخدم أحرفًا وأرقامًا و&apos;-&apos; و&apos;_&apos; و&apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>الأماكن والاتصالات</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>المجلد الرئيسي</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>الجذر</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>إعادة المحاولة</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>تصفية (جزء من النص، أو أحرف البدل * ?) — Esc للإغلاق</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>عنوان غير معروف: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>موقع غير صالح: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>تعذّر فتح %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>تم تحديد %1 من %2، %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1، %2، %3</translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>لا توجد ملفات</numerusform>
            <numerusform>ملف واحد</numerusform>
            <numerusform>ملفان</numerusform>
            <numerusform>%n ملفات</numerusform>
            <numerusform>%n ملفًا</numerusform>
            <numerusform>%n ملف</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>لا توجد مجلدات</numerusform>
            <numerusform>مجلد واحد</numerusform>
            <numerusform>مجلدان</numerusform>
            <numerusform>%n مجلدات</numerusform>
            <numerusform>%n مجلدًا</numerusform>
            <numerusform>%n مجلد</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[كما في %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[كل الإصدارات] </translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — جارٍ التحميل…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — تتوفر عناصر إضافية (مرّر لأسفل)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>مشاركة رابط — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>تنزيل (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>رفع / استبدال (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>يسمح بـ:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>دقائق</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>ساعات</translation>
    </message>
    <message>
        <source>days</source>
        <translation>أيام</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>صالح لمدة:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>نسخ عنوان URL(&amp;C)</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>إظهار رمز QR(&amp;Q)</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>تكون عناوين URL الموقّعة مسبقًا صالحة لمدة 7 أيام كحد أقصى؛ تم تقصير مدة الصلاحية.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>تنتهي الصلاحية في %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>هذه بيانات اعتماد مؤقتة (رمز جلسة مميز أو SSO أو دور مفترض): يتوقف عنوان URL عن العمل عند انتهاء صلاحيتها.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>تم تقصير مدة الصلاحية لتتوافق معها.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>تطبيق</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>الخصائص — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>عام</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>البيانات الوصفية</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>علامات التصنيف</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>التخزين &amp;&amp; التشفير</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>الأذونات</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>قفل الكائنات</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>المجاميع الاختبارية</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>كل الرؤوس</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>المفتاح</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>القيمة</translation>
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
        <translation>بيانات المستخدم الوصفية (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;يخزّن S3 الرؤوس مع الكائن: يؤدي التطبيق إلى نسخ الكائن فوق نفسه. تتم إعادة تعيين ACL الخاصة به إلى افتراضي الحاوية؛ ويتم الاحتفاظ بعلامات التصنيف.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>علامة التصنيف</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;حتى 10 علامات تصنيف؛ المفاتيح حتى 128 حرفًا والقيم حتى 256 حرفًا.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>فئة التخزين:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>التشفير:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>مفتاح العميل (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>المالك:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>الجهة الممنوحة</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>النوع</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>الإذن</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>الاستبدال بـ ACL جاهزة:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>الحوكمة (يمكن رفعه بإذن خاص)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>التوافق (لا يمكن تقصيره أو إزالته)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>وضع الاحتفاظ:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>الاحتفاظ حتى:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>تجاوز وضع الحوكمة (مطلوب لتقصير احتفاظ الحوكمة أو إزالته)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>حجز قانوني</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>الخوارزمية</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>المخزّن</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>الملف المحلي</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>النتيجة</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>مقارنة بملف محلي…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>جارٍ التحميل…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>تعذّر تحميل الكائن: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>تعذّر تحميل البيانات الوصفية: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>الموقع:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>ملف</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>ملف (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>مجلد (بادئة)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>مجلد</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>حاوية</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>اتصال</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>النوع:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>الحجم:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>تاريخ التعديل:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>هدف الارتباط:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>الأذونات:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>مخفي:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>نعم</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>معرّف الإصدار:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>المنطقة:</translation>
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
        <translation>علامات التصنيف غير متاحة: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;هذا الكائن مؤرشف؛ يتطلب تغيير فئة التخزين الخاصة به نسخة مستعادة.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;يؤدي تغيير هذه الإعدادات إلى نسخ الكائن فوق نفسه.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>قوائم ACL معطّلة لهذه الحاوية (ملكية الكائنات: فرض مالك الحاوية). استخدم سياسات الحاويات لمنح حق الوصول.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>قائمة ACL غير متاحة: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>ملكية الكائنات: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>حالة قفل الكائنات غير متاحة: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>قفل الكائنات غير ممكّن على هذه الحاوية (لا يمكن تمكينه إلا عند إنشاء الحاوية).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>محتفظ به في وضع %1 حتى %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>لم يتم تعيين احتفاظ على هذا الإصدار.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>جارٍ التطبيق…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>مفتاح بيانات وصفية غير صالح &quot;%1&quot;: استخدم أحرفًا وأرقامًا و&apos;-&apos; و&apos;_&apos; و&apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>تم حفظ البيانات الوصفية.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>تم حفظ علامات التصنيف.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>لم يتغير شيء.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>تم حفظ إعدادات التخزين.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>تم تعيين ACL إلى %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>تم حفظ إعدادات قفل الكائنات.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>مقارنة بملف محلي</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>جارٍ حساب المجاميع الاختبارية لـ %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>متطابق</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>مختلف</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>لا يحتوي الكائن على مجموع اختباري يمكن مقارنته.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>الملف المحلي يطابق الكائن.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>الملف المحلي يختلف عن الكائن.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>تتطلب مفاتيح العميل اتصالًا محفوظًا.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>سرد الإصدارات غير مدعوم هنا</translation>
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
        <translation>لا يوجد موفّر</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>تعذّر إنشاء دليل مؤقت</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>ملف كبير</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>حجم &quot;%1&quot; هو %2. هل تريد تنزيله إلى ملف مؤقت؟</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>لا يمكن تحرير الإصدارات الأقدم؛ استعد الإصدار أولًا</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>جارٍ تنزيل %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>إلغاء</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>تعذّر تنزيل %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>لا يوجد تطبيق لفتح هذا الملف</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>لا يوجد تطبيق لتحرير هذا الملف</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>رفع التغييرات</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>تم تعديل &quot;%1&quot;. هل تريد رفعه إلى %2؟</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>تم تغيير الملف البعيد</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>تم تغيير %1 على الخادم منذ أن فتحته. هل تريد الكتابة فوقه بإصدارك؟</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>تعذّر رفع %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>استعادة من الأرشيف</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>اطلب نسخة مؤقتة قابلة للقراءة من %1. يبقى الكائن المؤرشف في مكانه؛ وتُحتسب تكلفة النسخة بالسعر القياسي للحاوية حتى تنتهي صلاحيتها.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> يوم</numerusform>
            <numerusform> يوم</numerusform>
            <numerusform> يوم</numerusform>
            <numerusform> أيام</numerusform>
            <numerusform> يومًا</numerusform>
            <numerusform> يوم</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>الاحتفاظ بالنسخة لمدة:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>قياسي (Glacier: من 3 إلى 5 ساعات، Deep Archive: خلال 12 ساعة)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>مجمّع (الأرخص؛ من 5 إلى 12 ساعة، Deep Archive: خلال 48 ساعة)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>مُعجَّل (Glacier فقط؛ من 1 إلى 5 دقائق، الأغلى)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>مستوى الاسترداد:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>طلب الاستعادة</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>إعداد ملكية كائنات غير معروف</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>خطأ في بناء جملة JSON في السطر %1، العمود %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>حقل غير معروف &quot;%1&quot; في %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>تعيين الإصدارات</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>التشفير الافتراضي</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>قواعد دورة الحياة</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>سياسة الحاوية</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>حظر الوصول العام</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>علامات التصنيف</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>استضافة موقع ويب ثابت</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>قفل الكائنات</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>ملكية الكائنات</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>يجب أن يتراوح طول أسماء الحاويات بين 3 و63 حرفًا.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>يمكن أن تحتوي أسماء الحاويات على أحرف لاتينية صغيرة وأرقام ونقاط وشرطات فقط.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>يجب أن تبدأ أسماء الحاويات وتنتهي بحرف أو رقم.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>يجب ألا تحتوي أسماء الحاويات على نقطتين متجاورتين.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>يجب ألا تبدو أسماء الحاويات كعنوان IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>يجب ألا تبدأ أسماء الحاويات بـ &quot;%1&quot; (محجوز بواسطة AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>يجب ألا تنتهي أسماء الحاويات بـ &quot;%1&quot; (محجوز بواسطة AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>لا تعمل الأسماء التي تحتوي على نقاط مع عنونة HTTPS بالاستضافة الافتراضية (لا تتطابق شهادة TLS) ولا مع Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>يمكن أن تحتوي معرّفات القواعد على 255 حرفًا كحد أقصى.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>تحتاج القاعدة إلى إجراء واحد على الأقل: انتقال، أو انتهاء صلاحية، أو إلغاء عمليات الرفع غير المكتملة.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>يجب أن يكون الحد الأدنى لحجم الكائن أصغر من الحد الأقصى.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>يجب أن تتكون مفاتيح علامات التصنيف من 1 إلى 128 حرفًا.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>يمكن أن تحتوي قيم علامات التصنيف على 256 حرفًا كحد أقصى.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>لا يمكن لقاعدة تُصفّي حسب علامات التصنيف إلغاء عمليات الرفع غير المكتملة (لا تحتوي عمليات الرفع على علامات تصنيف).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>لا يمكن لقاعدة تُصفّي حسب علامات التصنيف إزالة علامات الحذف المنتهية الصلاحية.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>يمكن أن تنتهي صلاحية الكائنات بعد يوم واحد على أقرب تقدير.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>اختر إما عدد أيام أو تاريخًا لانتهاء الصلاحية.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>لا يمكن الجمع بين إزالة علامات الحذف المنتهية الصلاحية وانتهاء صلاحية الإصدارات الحالية في القاعدة نفسها.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>فئة تخزين انتقال غير معروفة &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>انتقالان إلى %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>يحتاج كل انتقال إلى عدد أيام أو تاريخ.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>يمكن نقل الكائنات إلى %1 بعد 30 يومًا على أقرب تقدير.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>استخدم إما الأيام أو التواريخ لكل عمليات الانتقال وانتهاء الصلاحية في القاعدة.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>يجب أن يأتي انتهاء الصلاحية بعد آخر انتقال.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>انتقالان للإصدارات غير الحالية إلى %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>يمكن نقل الإصدارات غير الحالية بعد يوم واحد على أقرب تقدير.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>يجب أن يكون عدد الإصدارات الأحدث المراد الاحتفاظ بها بين 1 و100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>يمكن حذف الإصدارات غير الحالية بعد يوم واحد على أقرب تقدير.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>يتطلب الاحتفاظ بالإصدارات غير الحالية الأحدث انتهاء صلاحية للإصدارات غير الحالية.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>يمكن إلغاء عمليات الرفع غير المكتملة بعد يوم واحد على أقرب تقدير.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>البادئة &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>علامة التصنيف %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>أكبر من %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>أصغر من %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>الحاوية بأكملها</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>إلى %1 بعد %2 يوم</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>إلى %1 في %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>انتهاء الصلاحية بعد %1 يوم</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>انتهاء الصلاحية في %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>إزالة علامات الحذف المنتهية الصلاحية</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>غير الحالية إلى %1 بعد %2 يوم</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>حذف غير الحالية بعد %1 يوم (الاحتفاظ بـ %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>حذف غير الحالية بعد %1 يوم</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>إلغاء عمليات الرفع بعد %1 يوم</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>يمكن أن تحتوي الحاوية على 1000 قاعدة دورة حياة كحد أقصى.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>القاعدة %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>القاعدة &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: توجد قاعدة أخرى بالمعرّف نفسه.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>التكوين</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>القاعدة %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 ليس كائنًا</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: يجب أن تكون Status إما &quot;Enabled&quot; أو &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> عامل التصفية</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>تحتاج قاعدة CORS إلى مصدر مسموح به واحد على الأقل.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>تحتاج قاعدة CORS إلى أسلوب مسموح به واحد على الأقل.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>أسلوب غير مدعوم &quot;%1&quot; (استخدم GET أو PUT أو POST أو DELETE أو HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>مصدر غير صالح &quot;%1&quot;: حرف بدل &quot;*&quot; واحد كحد أقصى.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>رأس غير صالح &quot;%1&quot;: حرف بدل &quot;*&quot; واحد كحد أقصى.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>لا يمكن أن يكون الحد الأقصى للعمر سالبًا.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>يمكن أن تحتوي الحاوية على 100 قاعدة CORS كحد أقصى.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>القاعدة %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>يجب أن تكون السياسة كائن JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>لا يوجد &quot;Version&quot;: أضف &quot;Version&quot;: &quot;2012-10-17&quot; (بدونه لا تعمل متغيرات السياسة).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>إصدار سياسة غير معروف &quot;%1&quot; (استخدم &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>الإصدار &quot;2008-10-17&quot; قديم؛ استخدم &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>تحتاج السياسة إلى &quot;Statement&quot; (كائن أو مصفوفة من الكائنات).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>لا تحتوي السياسة على أي عبارات.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>العبارة %1 ليست كائنًا.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>العبارة %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>العبارة &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: يُستخدم Sid مرتين.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: يجب أن تكون &quot;Effect&quot; إما &quot;Allow&quot; أو &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: تحتاج سياسات الحاويات إلى &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: &quot;Action&quot; مفقود.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: &quot;Resource&quot; مفقود.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; ليس إجراء S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; ليس ARN لمورد S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; ليس في هذه الحاوية (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 يمنح حق الوصول للجميع (Principal &quot;*&quot; بدون شرط).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>قراءة عامة (يمكن لأي شخص تنزيل الكائنات)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>رفض الطلبات بدون TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>وصول للقراءة فقط لحساب AWS آخر</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>لا يمكن الجمع بين إعادة توجيه كل الطلبات والمستندات أو قواعد التوجيه.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>يجب أن يكون بروتوكول إعادة التوجيه http أو https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>تحتاج استضافة موقع الويب إلى مستند فهرس (أو إعادة توجيه كل الطلبات).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>يجب ألا يحتوي مستند الفهرس على &quot;/&quot; (فهو لاحقة تُضاف إلى طلبات المجلدات).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>تحتاج كل قاعدة توجيه إلى إعادة توجيه.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>يمكن لقاعدة التوجيه استبدال المفتاح أو بادئة المفتاح، وليس كليهما.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>يجب أن تكون قواعد التوجيه مصفوفة JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>قاعدة التوجيه %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>يجب أن يكون وضع الاحتفاظ GOVERNANCE أو COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>يتطلب الاحتفاظ الافتراضي تمكين قفل الكائنات على الحاوية.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>عيّن مدة الاحتفاظ الافتراضية بالأيام أو بالسنوات (أحدهما فقط).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>يمكن أن تكون مدة الاحتفاظ الافتراضية 100 سنة كحد أقصى.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>يمكن أن تحتوي الحاوية على 50 علامة تصنيف كحد أقصى.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>فشلت المصادقة: تحقق من مفتاح الوصول والسر</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>تختلف ساعة الكمبيوتر كثيرًا عن وقت الخادم</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>الكائن غير موجود</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>الحاوية غير موجودة</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>عملية التحميل متعدد الأجزاء غير موجودة</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>الكائن مؤرشف؛ اطلب استعادته (S3 &gt; استعادة من الأرشيف) وانتظر حتى يصبح متاحًا</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>تم رفض الوصول</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>الحاوية موجودة بالفعل</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>الحاوية ليست فارغة</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>تقوم الخدمة بتقييد معدل الطلبات؛ حاول مرة أخرى لاحقًا</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>خطأ في الشبكة: تعذّر الوصول إلى نقطة النهاية</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>انتهت مهلة الطلب</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>الحاوية في منطقة مختلفة عن المنطقة المكوّنة</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>لا تدعم الخدمة هذه العملية</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>غير موجود</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>تم رفض الطلب لأنه غير صالح</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>فشل طلب S3</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>ACL جاهزة غير معروفة: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>عناوين URL الموقّعة مسبقًا مخصصة للكائنات فقط</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>تعذّر توقيع عنوان URL (لا توجد بيانات اعتماد قابلة للاستخدام)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
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
        <translation>ليس موقع S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>لا يوجد كائن أو مجلد بهذا الاسم: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>إنشاء الحاويات غير مدعوم هنا</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>الحاوية موجودة بالفعل</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>موجود بالفعل: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>حذف الحاويات غير مدعوم هنا</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>لم يتعذّر حذف أي كائن</numerusform>
            <numerusform>تعذّر حذف كائن واحد</numerusform>
            <numerusform>تعذّر حذف كائنين</numerusform>
            <numerusform>تعذّر حذف %n كائنات</numerusform>
            <numerusform>تعذّر حذف %n كائنًا</numerusform>
            <numerusform>تعذّر حذف %n كائن</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>لا تدعم S3 إعادة التسمية؛ استخدم النسخ والحذف</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>فشل التحقق من السلامة لـ %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>لم يتم تكوين مفتاح SSE-C للحاوية %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>يختلف ETag ‏%1 عن ETag المصدر %2</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>تم تخزين %1 بايت، والمتوقع %2</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>التنزيل غير مكتمل: %1 من %2 بايت</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>يختلف MD5 ‏%1 عن ETag ‏%2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>تعذّر استبدال %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>تعذّرت كتابة %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>لا يوجد ملف بهذا الاسم: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>هذا دليل: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>وجهة غير صالحة: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>تعذّرت قراءة %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>يختلف ETag ‏%1 عن MD5 المحلي %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>خطأ في قراءة %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>يختلف ETag ‏%1 عن القيمة المتوقعة %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>غير ممكن في قائمة الاتصالات</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>ليس موقع S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>اتصال غير معروف</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>لا يوجد مفتاح سري مخزّن لهذا الاتصال؛ حرّر الاتصال لإدخاله</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>متصل: لا توجد حاويات مرئية</numerusform>
            <numerusform>متصل: حاوية واحدة مرئية</numerusform>
            <numerusform>متصل: حاويتان مرئيتان</numerusform>
            <numerusform>متصل: %n حاويات مرئية</numerusform>
            <numerusform>متصل: %n حاوية مرئية</numerusform>
            <numerusform>متصل: %n حاوية مرئية</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ لا توجد حاويات مثبّتة يمكن الوصول إليها)</numerusform>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ يمكن الوصول إلى حاوية مثبّتة واحدة)</numerusform>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ يمكن الوصول إلى حاويتين مثبّتتين)</numerusform>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ يمكن الوصول إلى %n حاويات مثبّتة)</numerusform>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ يمكن الوصول إلى %n حاوية مثبّتة)</numerusform>
            <numerusform>متصل (سرد الحاويات غير مسموح به؛ يمكن الوصول إلى %n حاوية مثبّتة)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>بلا</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256، مفاتيح يديرها S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (مفتاح AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (مفتاح يوفره العميل)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>يمكن أن يحتوي الكائن على 10 علامات تصنيف كحد أقصى.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>يجب أن تتكون مفاتيح علامات التصنيف من 1 إلى 128 حرفًا.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>يمكن أن تحتوي قيم علامات التصنيف على 256 حرفًا كحد أقصى.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>يجب ألا تبدأ مفاتيح علامات التصنيف بـ &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>غير مؤرشف</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>مؤرشف؛ الاستعادة قيد التقدم</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>مؤرشف؛ النسخة المستعادة متاحة حتى %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>مؤرشف؛ استعده لقراءة البيانات</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>ليس إصدارًا: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>لم يتعذّر حذف أي إصدار</numerusform>
            <numerusform>تعذّر حذف إصدار واحد</numerusform>
            <numerusform>تعذّر حذف إصدارين</numerusform>
            <numerusform>تعذّر حذف %n إصدارات</numerusform>
            <numerusform>تعذّر حذف %n إصدارًا</numerusform>
            <numerusform>تعذّر حذف %n إصدار</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 غير محذوف</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>لا توجد إصدارات لـ %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>مستوى استعادة غير معروف: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>الاستعادة لمدة يوم واحد على الأقل</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>خطأ في سلسلة مفاتيح النظام</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>لا يوجد سر مخزّن في سلسلة مفاتيح النظام</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>لم يتم العثور على السر</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>الإعدادات</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>افتراضي النظام (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>اللغة(&amp;L):</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;تُستخدم اللغة الجديدة بعد إعادة تشغيل S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>مفتاح تشفير العميل (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>يتم تشفير كائنات SSE-C بمفتاح 256 بت تحتفظ به أنت. لا يخزّنه S3: &lt;b&gt;إذا فُقد المفتاح، فلا يمكن قراءة الكائنات&lt;/b&gt;. يُحفظ المفتاح في سلسلة مفاتيح النظام.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 حرفًا) أو 64 رقمًا ست عشريًا</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>إظهار</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>إنشاء</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>الاستخدام لكل حاوية في هذا الاتصال ليس لها مفتاح خاص بها</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>إزالة المفتاح</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>تم تكوين مفتاح للحاوية %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>لم يتم تكوين مفتاح للحاوية %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>يجب أن يكون المفتاح 32 بايت، بتنسيق base64 أو 64 رقمًا ست عشريًا.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>هل تريد إزالة مفتاح الحاوية %1؟ لا يمكن قراءة الكائنات المشفرة به بدونه.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>الخيارات(&amp;O)</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>السؤال</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>الكتابة فوقه</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>تخطٍّ</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>الاحتفاظ بكليهما (إعادة تسمية الملف الجديد)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>الكتابة فوقه إذا كان أحدث</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>الكتابة فوقه إذا اختلف الحجم</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>إذا كان الملف موجودًا:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>مثل *.jpg; *.png (فارغ: كل شيء)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>الملفات المطابقة فقط:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>مثل *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>استبعاد:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>التحقق من السلامة بعد النقل (الحجم، MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>الحفاظ على أوقات التعديل</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>تتبّع الارتباطات الرمزية (وإلا تخطيها)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>افتراضي الاتصال</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>فئة تخزين S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>تشفير S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>عمليات النقل</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>إيقاف مؤقت</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>استئناف</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>إلغاء</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>إعادة محاولة الفاشلة</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>نقل لأعلى</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>نقل لأسفل</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>إزالة</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>إيقاف الكل مؤقتًا</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>استئناف الكل</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>مسح المكتملة</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>الإعدادات…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 قيد التشغيل، %2 في قائمة الانتظار</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 قيد التشغيل</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>خطأ في النقل</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>معرّف الطلب: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>إلغاء النقل</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>هل تريد إلغاء &quot;%1&quot;؟ سيتم تجاهل الملفات المنقولة جزئيًا.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>إزالة عملية النقل</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>هل تريد إزالة &quot;%1&quot;؟ لم تنتهِ بعد؛ سيتم تجاهل البيانات الجزئية.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>لا توجد عناصر</numerusform>
            <numerusform>عنصر واحد</numerusform>
            <numerusform>عنصران</numerusform>
            <numerusform>%n عناصر</numerusform>
            <numerusform>%n عنصرًا</numerusform>
            <numerusform>%n عنصر</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>نسخ %1 إلى %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>نقل %1 إلى %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>حذف %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>لا يوجد موفّر لهذا الموقع</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>المصدر والوجهة متطابقان</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>لا يمكن نسخ مجلد إلى داخل نفسه</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>لم يتم العثور على اسم متاح</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>يوجد مجلد بهذا الاسم بالفعل</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>في قائمة الانتظار</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>متوقف مؤقتًا</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>تم، دون تخطي أي عنصر</numerusform>
            <numerusform>تم، تم تخطي عنصر واحد</numerusform>
            <numerusform>تم، تم تخطي عنصرين</numerusform>
            <numerusform>تم، تم تخطي %n عناصر</numerusform>
            <numerusform>تم، تم تخطي %n عنصرًا</numerusform>
            <numerusform>تم، تم تخطي %n عنصر</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>تم</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>فشل</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>تم الإلغاء</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>جارٍ البدء</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>جارٍ الفحص</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>جارٍ الحذف</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>جارٍ النقل</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>جارٍ النسخ</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>جارٍ الإنهاء</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(لا توجد أخطاء)</numerusform>
            <numerusform>(خطأ واحد)</numerusform>
            <numerusform>(خطآن)</numerusform>
            <numerusform>(%n أخطاء)</numerusform>
            <numerusform>(%n خطأً)</numerusform>
            <numerusform>(%n خطأ)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>لا توجد عناصر</numerusform>
            <numerusform>عنصر واحد</numerusform>
            <numerusform>عنصران</numerusform>
            <numerusform>%n عناصر</numerusform>
            <numerusform>%n عنصرًا</numerusform>
            <numerusform>%n عنصر</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / لا توجد ملفات</numerusform>
            <numerusform>%1 / ملف واحد</numerusform>
            <numerusform>%1 / ملفان</numerusform>
            <numerusform>%1 / %n ملفات</numerusform>
            <numerusform>%1 / %n ملفًا</numerusform>
            <numerusform>%1 / %n ملف</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>النقل</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>الحالة</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>التقدم</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>السرعة</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>الوقت المتبقي</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>إعدادات النقل</translation>
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
        <translation>غير محدود</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>استئناف عمليات النقل المتقطعة تلقائيًا عند بدء التشغيل</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>عمليات النقل في الوقت نفسه:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>الملفات المتوازية لكل عملية نقل:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>الأجزاء المتوازية لكل ملف:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>متعدد الأجزاء فوق:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>حجم الجزء:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>حد عرض النطاق الترددي:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>مرات إعادة المحاولة لكل ملف:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;تزداد أحجام الأجزاء تلقائيًا للملفات الكبيرة جدًا (يسمح S3 بـ 10,000 جزء كحد أقصى). تنطبق التغييرات على عمليات النقل التي تبدأ بعد ذلك؛ ويُطبَّق حد عرض النطاق الترددي فورًا.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>سجل الإصدارات — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>تاريخ التعديل</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>الحجم</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>فئة التخزين</translation>
    </message>
    <message>
        <source>State</source>
        <translation>الحالة</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>معرّف الإصدار</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>عرض(&amp;V)</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>تنزيل(&amp;D)…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>استعادة كإصدار حالي(&amp;R)</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>حذف نهائي(&amp;P)…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>إلغاء الحذف(&amp;U)</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>تجاوز الاحتفاظ في وضع الحوكمة عند الحذف</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>تحديث</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>جارٍ تحميل الإصدارات…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>علامة حذف (الكائن محذوف)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>علامة حذف</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>الحالي</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>سابق</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>لم يتم العثور على إصدارات.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>لا توجد إصدارات أو علامات حذف.</numerusform>
            <numerusform>إصدار أو علامة حذف واحدة.</numerusform>
            <numerusform>اثنان من الإصدارات وعلامات الحذف.</numerusform>
            <numerusform>%n إصدارات وعلامات حذف.</numerusform>
            <numerusform>%n إصدارًا وعلامة حذف.</numerusform>
            <numerusform>%n إصدار وعلامة حذف.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>جارٍ العمل…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>تنزيل الإصدار</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>تم حفظ %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>أصبح الإصدار المحدد هو الإصدار الحالي مجددًا.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>حذف الإصدارات</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>هل تريد حذف الإصدارات نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف إصدار واحد نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف إصدارين نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدارات نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدارًا نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
            <numerusform>هل تريد حذف %n إصدار نهائيًا؟ لا يمكن التراجع عن ذلك.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>لم يتم حذف أي إصدار.</numerusform>
            <numerusform>تم حذف إصدار واحد.</numerusform>
            <numerusform>تم حذف إصدارين.</numerusform>
            <numerusform>تم حذف %n إصدارات.</numerusform>
            <numerusform>تم حذف %n إصدارًا.</numerusform>
            <numerusform>تم حذف %n إصدار.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>عاد الكائن.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>عرض — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — يتم عرض أول %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — ثنائي (%1)، يتم عرض أول %2 بالتنسيق الست عشري</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>فتح في التطبيق الافتراضي</translation>
    </message>
</context>
</TS>
