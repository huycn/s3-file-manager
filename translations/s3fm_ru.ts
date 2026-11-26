<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru" sourcelanguage="en">
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
        <translation>Компьютер</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Разрешённые источники</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Методы</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Разрешённые заголовки</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Доступные заголовки</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Макс. время (с)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>&amp;Добавить правило</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Удалить правило</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Правила</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Несколько значений разделяйте запятыми. Методы: GET, PUT, POST, DELETE, HEAD. В каждом источнике или заголовке допускается один подстановочный знак «*».</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Конфигурация CORS удалена</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Правила CORS сохранены</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (ключи управляются S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (ключ AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (двухуровневое, ключ AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>&amp;Шифрование по умолчанию:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>ID ключа, ARN или псевдоним (пусто: управляемый ключ aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>К&amp;люч KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>&amp;Использовать ключ бакета S3 (меньше запросов к KMS, ниже стоимость)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Применяется к объектам, записываемым с этого момента без собственного шифрования. Существующие объекты сохраняют своё шифрование (чтобы изменить его, перезапишите их через «Изменить объекты»). Если ничего не задано, AWS шифрует с помощью SSE-S3.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Шифрование по умолчанию сохранено</translation>
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
        <translation>Состояние</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Применяется к</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Действия</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Добавить…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Изменить…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>&amp;Включить/отключить</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Удалить</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Правила</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Правила выполняются раз в сутки. JSON имеет формат &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-совместимые сервисы могут игнорировать неподдерживаемые действия (для переходов MinIO требуются удалённые уровни хранения).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(создан автоматически)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Включено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Правило изменено; нажмите «Применить», чтобы сохранить правила в бакете.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Конфигурация жизненного цикла удалена</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Правила жизненного цикла сохранены</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Включить блокировку объектов…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Режим управления (могут снять пользователи с особым разрешением)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Режим соответствия (не может снять никто, даже корневая учётная запись)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>&amp;Хранение по умолчанию:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>дн.</translation>
    </message>
    <message>
        <source>years</source>
        <translation>г.</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Срок:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Новые версии объектов получают хранение по умолчанию, если при загрузке не задано собственное. Версии на хранении нельзя удалить или перезаписать до окончания срока.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Включить блокировку объектов</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Включить блокировку объектов для %1? Это действие нельзя отменить, и управление версиями останется включённым навсегда. (Некоторые сервисы разрешают это только при создании бакета.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Блокировка объектов включена</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n день</numerusform>
            <numerusform>%n дня</numerusform>
            <numerusform>%n дней</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n год</numerusform>
            <numerusform>%n года</numerusform>
            <numerusform>%n лет</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Блокировка объектов</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Хранение в режиме соответствия никто не может сократить или снять. Новые версии будут защищены от удаления на %1. Продолжить?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Хранение по умолчанию сохранено</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Блокировка объектов для этого бакета включена.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Блокировка объектов для этого бакета не включена.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Регион</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Создан</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Владелец</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Принудительно владелец бакета (ACL отключены)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Предпочтительно владелец бакета</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Автор объекта</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Владение объектами</translation>
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
        <translation>&amp;Шаблоны</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Политика бакета</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Заменить текущий текст шаблоном?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Форматировать</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Политика бакета отсутствует. Выберите шаблон или вставьте документ политики.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Удалить политику…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Не удалось отформатировать: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Политика отсутствует.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Проблем не обнаружено.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Удалить политику бакета %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Политика бакета удалена</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Сначала исправьте ошибки в политике: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Эта политика предоставляет доступ всем пользователям интернета. Всё равно применить?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Политика бакета сохранена</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Свойства бакета — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Обзор</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Управление версиями</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Шифрование</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Жизненный цикл</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Политика</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Публичный доступ</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Теги</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Веб-сайт</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Блокировка объектов</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Статистика</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: не поддерживается этой конечной точкой</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Блокировать &amp;весь публичный доступ</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Блокировать публичный доступ, предоставленный через новые ACL</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Игнорировать публичный доступ, предоставленный через любые ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Блокировать публичный доступ, предоставленный через новые политики бакета</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Ограничить доступ к бакетам с публичными политиками сервисами AWS и учётной записью владельца</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Также действуют настройки уровня учётной записи, и они имеют приоритет над этими. Отключение блокировок само по себе ничего не делает публичным.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Публичный доступ</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Разрешить настройки публичного доступа для %1? Тогда объекты смогут стать публичными через ACL или политику бакета.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Настройки публичного доступа сохранены</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Префикс ключа:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(весь бакет)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Вычислить</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Категория</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Объекты</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Подсчёт выполняется перебором всех версий объектов (один запрос на 1000 ключей), поэтому на больших бакетах занимает время. Для бакетов с миллионами объектов быстрее S3 Storage Lens или метрики CloudWatch BucketSizeBytes/NumberOfObjects (обновляются ежедневно).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Отмена</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Подсчёт…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 байт</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Текущие объекты</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Неактуальные версии</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Маркеры удаления</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Все версии</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Незавершённые составные загрузки</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Готово.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Отменено: подсчёт неполный.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Применение…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Подсчёт… элементов: %L1</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Ключ</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>До 50 тегов; используются для распределения затрат и управления доступом. Теги объектов задаются отдельно («Изменить объекты»).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Теги сохранены</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Управление версиями:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Удаление с MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>При включённом управлении версиями перезапись или удаление объекта сохраняет старые данные как неактуальную версию (хранение оплачивается). После включения управление версиями нельзя отключить, только приостановить: существующие версии остаются. Удаление с MFA может изменить только корневая учётная запись через API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Включить управление версиями</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>Прио&amp;становить управление версиями</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Управление версиями включено</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Приостановить управление версиями</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Приостановить управление версиями для %1? Новые записи снова будут заменять объекты; существующие версии сохранятся.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Управление версиями приостановлено</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Отключено (никогда не включалось)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Включено</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Приостановлено</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Отключено</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Включить &amp;хостинг статического веб-сайта</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>&amp;Размещать веб-сайт</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>&amp;Индексный документ:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>необязательно, например error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Документ &amp;ошибки:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Необязательные правила перенаправления (массив JSON), например
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>Правила &amp;маршрутизации:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>Перенаправлять &amp;все запросы на другой узел</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>например www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>Имя &amp;узла:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Как в запросе</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>Прото&amp;кол:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Конечные точки веб-сайта отдают объекты только по обычному HTTP и только те, что доступны для публичного чтения (политика бакета, блокировка публичного доступа).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Применить</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Конечная точка веб-сайта: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Конфигурация веб-сайта сохранена</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Хостинг веб-сайта отключён</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Файл уже существует</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; уже существует в месте назначения. Перезаписать?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Новый:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Существующий:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Новый файл новее.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Существующий файл новее или того же возраста.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Размеры совпадают.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Размеры различаются.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Для всех остальных конфликтов этой передачи</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>&amp;Перезаписать</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>Пр&amp;опустить</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>&amp;Сохранить оба</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Скопировать под новым именем, например «имя (2).ext»</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Если &amp;новее</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Перезаписать, только если новый файл новее, иначе пропустить</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Если &amp;размер отличается</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Перезаписать, только если размеры различаются, иначе пропустить</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Отменить передачу</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Подключения</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Дублировать</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Импорт профилей AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Создать подключения для профилей из %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Подключение</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Название:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Используется в адресах вида s3://&lt;id&gt;/bucket/key. После сохранения изменить нельзя.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;Идентификатор:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Поставщик:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Оставьте пустым для Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>URL &amp;конечной точки:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Регион:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Автоматически</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Виртуальный хост (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Стиль пути (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>&amp;Адресация:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Учётные данные</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Ключ доступа и секретный ключ</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Профиль AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Переменные окружения</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Стандартная цепочка учётных данных AWS</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Анонимно (публичные бакеты)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>ID ключа доступа:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Показать</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Секретный ключ доступа:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Необязательно (временные учётные данные)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Токен сеанса:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Секреты хранятся в системной связке ключей и никогда — в файлах настроек.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Профиль:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Поддерживаются профили со статическими ключами, SSO, assume-role (role_arn / source_profile) и credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Дополнительно</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Проверять сертификаты TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Системные сертификаты</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Обзор…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Пакет сертификатов ЦС</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Сертификаты (*.pem *.crt);;Все файлы (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Пакет сертификатов ЦС:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Если поддерживается (по умолчанию в AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Только если требуется (наибольшая совместимость)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Некоторые S3-совместимые сервисы отклоняют новые заголовки контрольных сумм целостности.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Контрольные суммы запросов:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>По умолчанию для бакета</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Класс хранилища для загрузки:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Бакеты, которые показываются, даже если учётные данные не позволяют получить список бакетов.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Закреплённые бакеты:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b или * для всех</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Бакеты с оплатой запрашивающей стороной: запросы к ним оплачиваются с вашей учётной записи (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Оплата запрашивающей стороной:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> с</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Время ожидания запроса:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>Проверить по&amp;дключение</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Открыть</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Хранится в связке ключей — оставьте пустым, чтобы не менять</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Новое подключение %1</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (копия)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Удалить подключение</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Удалить подключение «%1» и сохранённый для него секрет?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Импорт профилей AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>В %1 профили не найдены.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Все профили AWS уже импортированы.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Использует AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY и AWS_SESSION_TOKEN из окружения, в котором было запущено приложение.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Перебирает переменные окружения, профиль по умолчанию, SSO, веб-удостоверение и учётные данные контейнера/экземпляра в стандартном порядке AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Запросы не подписываются. Доступны только публичные бакеты и объекты.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Сохранить подключение</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Подключение с идентификатором «%1» уже существует.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Введите секретный ключ доступа.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Проверка…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Несохранённые изменения</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Сохранить изменения в «%1»?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Подключения *</translation>
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
        <translation>Другой S3-совместимый</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Введите название подключения.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>Идентификатор может содержать только строчные латинские буквы, цифры, «.», «-» и «_».</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>Конечная точка должна быть URL вида http:// или https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Замените заполнитель в URL конечной точки.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Введите URL конечной точки S3-совместимого сервиса.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Введите регион (например, us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Введите ID ключа доступа.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Выберите профиль AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Не удалось записать файл настроек</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Новый бакет</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>строчные латинские буквы, цифры, точки и дефисы</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Имя:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>по умолчанию для конечной точки</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Регион:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>По умолчанию (принудительно владелец бакета: ACL отключены)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Предпочтительно владелец бакета (ACL включены)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Автор объекта (ACL включены)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Владение объектами:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>&amp;Стандартный ACL:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Включить &amp;блокировку объектов (включает управление версиями; отключить нельзя)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;В новых бакетах AWS публичный доступ по умолчанию заблокирован; публичные ACL не будут работать, пока блокировка публичного доступа не ослаблена.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Создать</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Введите имя бакета.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Удалить бакет</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Безвозвратно удалить пустой бакет &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>объекты</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>версии объектов или маркеры удаления</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>незавершённые составные загрузки</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>Бакет &lt;b&gt;%1&lt;/b&gt; не пуст: он содержит %2.&lt;br&gt;&lt;br&gt;Чтобы удалить его, сначала будут удалены все объекты, все версии и все незавершённые загрузки. &lt;b&gt;Это действие нельзя отменить.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Очистить бакет, затем удалить его</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>О&amp;бойти хранение в режиме управления (требуется s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Введите имя бакета для подтверждения:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Очистить и удалить</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Без изменений / по умолчанию для бакета</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>ID ключа KMS, ARN или псевдоним (пусто: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Нет поставщика для %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Бакет</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Подключение</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Папка</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>Файл %1</translation>
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
        <translation>Маркер удаления (удалён)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Маркер удаления</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (текущая)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Имя</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Изменён</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Класс хранилища</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Версия</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Операция отменена</translation>
    </message>
</context>
<context>
    <name>s3fm::Format</name>
    <message>
        <source>%1 B</source>
        <comment>size in bytes</comment>
        <translation>%1 Б</translation>
    </message>
    <message>
        <source>%1/s</source>
        <comment>transfer rate</comment>
        <translation>%1/с</translation>
    </message>
</context>
<context>
    <name>s3fm::KeyValueEditor</name>
    <message>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> дн.</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>байт (пусто: без ограничения)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Добавить</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Правило жизненного цикла</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>необязательно; S3 создаст его сам</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Включено</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;Идентификатор правила:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Фильтр</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>&amp;Текущие версии</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>&amp;Неактуальные версии &amp;&amp; загрузки</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>Правило применяется к объектам, удовлетворяющим всем условиям ниже; без условий оно применяется ко всему бакету.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>например logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Префикс ключа:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Больше чем:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Меньше чем:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Тег</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Теги объектов:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Переместить в класс хранилища</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Через (дней или ГГГГ-ММ-ДД)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Переходы:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Никогда</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Через</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>В дату</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Истечение срока (удаление) объектов:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Удалять маркеры удаления с истёкшим сроком (маркеры без неактуальных версий)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;В бакете с управлением версиями истечение срока текущей версии добавляет маркер удаления; данные остаются в виде неактуальной версии.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Дней после перехода в неактуальные</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Сохранять новейшие (необязательно)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Удалять через</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>сохраняя новейшие</translation>
    </message>
    <message>
        <source>none</source>
        <translation>нет</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Неактуальные версии:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Прерывать незавершённые составные загрузки через</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Загрузки:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>Нет такого файла или каталога: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>доступ запрещён</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Не локальное расположение</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Не является каталогом: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Доступ запрещён: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Недопустимый каталог</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Уже существует: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Не удалось создать каталог %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Удаление корня файловой системы запрещено</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: не найден</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… и ещё %1</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>Не удалось удалить %n элемент</numerusform>
            <numerusform>Не удалось удалить %n элемента</numerusform>
            <numerusform>Не удалось удалить %n элементов</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Не удалось переместить %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Нельзя напрямую переместить каталог между файловыми системами</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Является каталогом: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Не удалось прочитать %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Не удалось записать %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Ошибка чтения %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Ошибка записи %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Ошибка проверки целостности %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>Записано байт: %1, ожидалось: %2</translation>
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
        <translation>Загружено: %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Просмотр</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Изменить</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Копировать…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>Пере&amp;местить…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>П&amp;ереименовать…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>&amp;Новая папка…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Удалить…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>Настро&amp;йки…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Выход</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Копировать &amp;расположение</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>К&amp;опировать S3 URI</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Копировать HTTP-&amp;адрес</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Копирова&amp;ть ARN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Свойства</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Изменить метаданные, теги, к&amp;ласс хранилища…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Ссылка для &amp;доступа (предварительно подписанный URL)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Показать &amp;версии</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Просмотр на &amp;момент времени…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>&amp;История версий…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>Восстановить из &amp;архива…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>&amp;Незавершённые составные загрузки…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Новый &amp;бакет…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>&amp;Свойства бакета…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Выделить &amp;всё</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Снять выделение</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>&amp;Инвертировать выделение</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>&amp;Быстрый фильтр…</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Обновить</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Показать &amp;скрытые файлы</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>Поменять панели &amp;местами</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Открыть в &amp;другой панели</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Назад</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Вперёд</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Домой</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Корень</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>Изменить &amp;адрес</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Места &amp;левой панели…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Места &amp;правой панели…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Управление подключениями…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>&amp;Показать передачи</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>П&amp;риостановить все</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>&amp;Возобновить все</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Очистить завершённые</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Настройки передачи…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Сочетания клавиш</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;О программе</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Файл</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>В&amp;ыделение</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Вид</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>П&amp;ереход</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>Пе&amp;редачи</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>По&amp;дключения</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Справка</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Домашняя папка</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Корень (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Подключения S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Все подключения</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Как в другой панели</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>В буфер обмена скопировано %n расположение</numerusform>
            <numerusform>В буфер обмена скопировано %n расположения</numerusform>
            <numerusform>В буфер обмена скопировано %n расположений</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>В очереди: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Возобновление %n прерванной передачи</numerusform>
            <numerusform>Возобновление %n прерванных передач</numerusform>
            <numerusform>Возобновление %n прерванных передач</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>Восстановлена %n прерванная передача; возобновите её на панели «Передачи»</numerusform>
            <numerusform>Восстановлены %n прерванные передачи; возобновите их на панели «Передачи»</numerusform>
            <numerusform>Восстановлено %n прерванных передач; возобновите их на панели «Передачи»</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Готово: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n ошибка</numerusform>
            <numerusform>%1: %n ошибки</numerusform>
            <numerusform>%1: %n ошибок</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Отменено: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>Новый язык будет применён после перезапуска S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Маркеры удаления нельзя копировать.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Версии нельзя перемещать или переименовывать; скопируйте их или воспользуйтесь историей версий.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Папки будут скопированы с текущим содержимым. Чтобы копировать папки, выйдите из режима просмотра на момент времени или выберите файлы.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Режим версий</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n элемент</numerusform>
            <numerusform>%n элемента</numerusform>
            <numerusform>%n элементов</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Переместить %1 в:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Копировать %1 в:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>В S3 нет переименования: объекты копируются, затем оригиналы удаляются.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Переместить</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Копировать</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Недопустимое место назначения: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Переименовать</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Новое имя:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>Имя не должно содержать разделителей пути.</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Здесь нельзя создавать папки</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Новая папка</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Имя папки (вложенные папки разделяйте символом /):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Недопустимое имя папки: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>В режиме версий можно удалять только версии. Чтобы удалить папки, выйдите из него.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Удалить бакет</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Удаляйте бакеты по одному.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Эти элементы нельзя удалить здесь</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Безвозвратно удалить папку «%1» со всем содержимым?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>Безвозвратно удалить «%1»?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>Безвозвратно удалить %n выбранный элемент?</numerusform>
            <numerusform>Безвозвратно удалить %n выбранных элемента?</numerusform>
            <numerusform>Безвозвратно удалить %n выбранных элементов?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Нет приложения для открытия %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>У маркера удаления нет содержимого</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Выберите объекты или папки S3 для изменения</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n выбранный элемент</numerusform>
            <numerusform>%n выбранных элемента</numerusform>
            <numerusform>%n выбранных элементов</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Обновление объектов…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Отменено после %n объекта</numerusform>
            <numerusform>Отменено после %n объектов</numerusform>
            <numerusform>Отменено после %n объектов</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>Обновлён %n объект</numerusform>
            <numerusform>Обновлено %n объекта</numerusform>
            <numerusform>Обновлено %n объектов</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Изменить объекты</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Обновлено объектов: %1 из %n; с ошибкой: %2.</numerusform>
            <numerusform>Обновлено объектов: %1 из %n; с ошибкой: %2.</numerusform>
            <numerusform>Обновлено объектов: %1 из %n; с ошибкой: %2.</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Версии можно показать только внутри бакетов S3</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Для %1 управление версиями никогда не включалось: у каждого объекта одна версия</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Управление версиями для %1 приостановлено</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>Просмотр на момент времени доступен только внутри бакетов S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Просмотр на момент времени</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Показать бакет в состоянии на заданный момент времени, восстановленном по истории версий (только для бакетов с управлением версиями).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Дата и время:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Вернуться к текущему</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Выберите объект S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Удалить версии</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Безвозвратно удалить %n версию? Это действие нельзя отменить.</numerusform>
            <numerusform>Безвозвратно удалить %n версии? Это действие нельзя отменить.</numerusform>
            <numerusform>Безвозвратно удалить %n версий? Это действие нельзя отменить.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>Удалена %n версия</numerusform>
            <numerusform>Удалено %n версии</numerusform>
            <numerusform>Удалено %n версий</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Выберите архивные объекты или папки S3</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Запрос восстановления…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Запрошено восстановление %n объекта</numerusform>
            <numerusform>Запрошено восстановление %n объектов</numerusform>
            <numerusform>Запрошено восстановление %n объектов</numerusform>
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
            <numerusform>%n объект не в архиве, уже восстановлен или восстанавливается</numerusform>
            <numerusform>%n объекта не в архиве, уже восстановлены или восстанавливаются</numerusform>
            <numerusform>%n объектов не в архиве, уже восстановлены или восстанавливаются</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Восстановить из архива</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>Не удалось для %n объекта.</numerusform>
            <numerusform>Не удалось для %n объектов.</numerusform>
            <numerusform>Не удалось для %n объектов.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Сначала откройте бакет S3</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Сначала откройте подключение S3</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Создание бакета %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Новый бакет</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Не удалось создать %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Бакет %1 создан</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Выберите или откройте бакет</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Проверка содержимого %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Удаление содержимого %1…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>Удалён %Ln элемент…</numerusform>
            <numerusform>Удалено %Ln элемента…</numerusform>
            <numerusform>Удалено %Ln элементов…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Бакет %1 удалён</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Отменено; %n элемент уже удалён</numerusform>
            <numerusform>Отменено; %n элемента уже удалены</numerusform>
            <numerusform>Отменено; %n элементов уже удалено</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Не удалось удалить бакет %1.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>%1 и %2 до возникновения ошибки.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n элемент удалён</numerusform>
            <numerusform>%n элемента удалены</numerusform>
            <numerusform>%n элементов удалено</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n загрузка прервана</numerusform>
            <numerusform>%n загрузки прерваны</numerusform>
            <numerusform>%n загрузок прервано</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>Не удалось удалить %n элемент (хранение, юридическое удержание или права доступа).</numerusform>
            <numerusform>Не удалось удалить %n элемента (хранение, юридическое удержание или права доступа).</numerusform>
            <numerusform>Не удалось удалить %n элементов (хранение, юридическое удержание или права доступа).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Выберите объект S3, чтобы поделиться им</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Открыть</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Открыть в приложении по умолчанию</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Сделать эту версию текущей</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Восстановить версию</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Отменить удаление</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Нечего копировать</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>В буфер обмена скопирована %n строка</numerusform>
            <numerusform>В буфер обмена скопированы %n строки</numerusform>
            <numerusform>В буфер обмена скопировано %n строк</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Переключить панель</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Открыть / родительская папка</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Space</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Переключить выделение (и перейти вниз) / переключить выделение</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+стрелки</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Расширить выделение</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Ввод букв</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Переход к имени</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Сочетания клавиш</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>О программе S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Двухпанельный файловый менеджер для Amazon S3 и S3-совместимых хранилищ.&lt;/p&gt;&lt;p&gt;Создан с использованием Qt %2 и AWS SDK for C++.&lt;/p&gt;&lt;p&gt;Лицензия MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Неотправленные изменения</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Изменения в некоторых отредактированных файлах не были загружены. Всё равно выйти?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n передача ещё выполняется. Выйти и продолжить её при следующем запуске?</numerusform>
            <numerusform>%n передачи ещё выполняются. Выйти и продолжить их при следующем запуске?</numerusform>
            <numerusform>%n передач ещё выполняется. Выйти и продолжить их при следующем запуске?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n передача ещё выполняется. Выйти и отказаться от неё?</numerusform>
            <numerusform>%n передачи ещё выполняются. Выйти и отказаться от них?</numerusform>
            <numerusform>%n передач ещё выполняется. Выйти и отказаться от них?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Выполняются передачи</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n минута</numerusform>
            <numerusform>%n минуты</numerusform>
            <numerusform>%n минут</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n час</numerusform>
            <numerusform>%n часа</numerusform>
            <numerusform>%n часов</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n день</numerusform>
            <numerusform>%n дня</numerusform>
            <numerusform>%n дней</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Незавершённые составные загрузки — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Прерванные загрузки сохраняют свои части (и плату за их хранение), пока не будут завершены или прерваны. Правило жизненного цикла бакета может прерывать их автоматически.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Префикс ключа:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(весь бакет)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Обновить</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Ключ</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Начата</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Возраст</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Части</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Класс хранилища</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Прервать &amp;выбранные…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Прервать в&amp;се…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID загрузки: %1
Начата: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Незавершённых загрузок нет. (Некоторые S3-совместимые сервисы показывают загрузки только для точного ключа объекта: введите его в качестве префикса.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n незавершённая загрузка, объём %1.</numerusform>
            <numerusform>%n незавершённые загрузки, объём %1.</numerusform>
            <numerusform>%n незавершённых загрузок, объём %1.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Загрузка…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Прервать загрузки</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>Прервать %n загрузку? Загруженные части будут удалены.</numerusform>
            <numerusform>Прервать %n загрузки? Загруженные части будут удалены.</numerusform>
            <numerusform>Прервать %n загрузок? Загруженные части будут удалены.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Прерывание…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Изменить объекты</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Изменить: %1. Применяются только отмеченные разделы; для папок — всё их содержимое.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Заголовки и метаданные</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(без изменений)</translation>
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
        <translation>Задать пользовательские метаданные:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Ключ</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Заменить все пользовательские метаданные (иначе объединить)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Удалить ключи:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Класс хранилища</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Шифрование</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Теги (заменить набор тегов)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Тег</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Управление доступом (стандартный ACL)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Заголовки, класс хранилища и шифрование изменяются копированием каждого объекта в самого себя (иначе S3 не позволяет их изменить); при этом ACL сбрасывается, если он тоже не задан здесь. Архивные объекты (Glacier, Deep Archive) нужно сначала восстановить.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Применить</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Отметьте хотя бы один раздел для изменения.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Недопустимый ключ метаданных «%1»: используйте латинские буквы, цифры, «-», «_» и «.»</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Места и подключения</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Домашняя папка</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Корень</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Повторить</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Фильтр (подстрока или подстановочные знаки * ?) — Esc для закрытия</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Неизвестный адрес: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Недопустимое расположение: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Не удалось открыть %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>Выбрано %1 из %2, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n папка</numerusform>
            <numerusform>%n папки</numerusform>
            <numerusform>%n папок</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n файл</numerusform>
            <numerusform>%n файла</numerusform>
            <numerusform>%n файлов</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[На %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Все версии] </translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — загрузка…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — есть ещё элементы (прокрутите вниз)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Ссылка для доступа — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Скачивание (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Загрузка / замена (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Разрешает:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>мин</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>ч</translation>
    </message>
    <message>
        <source>days</source>
        <translation>дн.</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Срок действия:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>&amp;Копировать URL</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>&amp;Показать QR-код</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Предварительно подписанные URL действуют не более 7 дней; срок действия сокращён.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Истекает %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Это временные учётные данные (токен сеанса, SSO или принятая роль): URL перестанет работать, когда истечёт их срок действия.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>Срок действия сокращён до их срока.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Применить</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Свойства — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Общие</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Метаданные</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Теги</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Хранилище и шифрование</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Разрешения</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Блокировка объектов</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Контрольные суммы</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Все заголовки</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Ключ</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Значение</translation>
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
        <translation>Пользовательские метаданные (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 хранит заголовки вместе с объектом: при применении объект копируется в самого себя. Его ACL сбрасывается до значения по умолчанию для бакета; теги сохраняются.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Тег</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;До 10 тегов; ключи — до 128 символов, значения — до 256 символов.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Класс хранилища:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Шифрование:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Ключ клиента (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Владелец:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Получатель прав</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Тип</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Разрешение</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Заменить стандартным ACL:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Режим управления (можно снять при наличии особого разрешения)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Режим соответствия (нельзя сократить или снять)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Режим хранения:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Хранить до:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Обойти режим управления (нужно, чтобы сократить или снять хранение в режиме управления)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Юридическое удержание</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Алгоритм</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Сохранённая</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Локальный файл</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Результат</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Сравнить с локальным файлом…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Загрузка…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Не удалось загрузить объект: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Не удалось загрузить метаданные: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Расположение:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Файл</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Файл (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Папка (префикс)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Папка</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Бакет</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Подключение</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Тип:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Размер:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Изменён:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Цель ссылки:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Права доступа:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Скрытый:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Да</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID версии:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Регион:</translation>
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
        <translation>Теги недоступны: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Этот объект находится в архиве; для изменения класса хранилища нужна восстановленная копия.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Изменение этих параметров копирует объект в самого себя.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>Для этого бакета ACL отключены (владение объектами: принудительно владелец бакета). Для предоставления доступа используйте политики бакета.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>ACL недоступен: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Владение объектами: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Состояние блокировки объектов недоступно: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Блокировка объектов для этого бакета не включена (её можно включить только при создании бакета).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Хранится в режиме %1 до %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Для этой версии хранение не задано.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Применение…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Недопустимый ключ метаданных «%1»: используйте латинские буквы, цифры, «-», «_» и «.»</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Метаданные сохранены.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Теги сохранены.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Ничего не изменено.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Параметры хранилища сохранены.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>Установлен ACL: %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Параметры блокировки объектов сохранены.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Сравнить с локальным файлом</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Вычисление контрольных сумм %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Совпадает</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>РАЗЛИЧАЕТСЯ</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>У объекта нет контрольной суммы, которую можно сравнить.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Локальный файл совпадает с объектом.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Локальный файл отличается от объекта.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Для ключей клиента нужно сохранённое подключение.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Списки версий здесь не поддерживаются</translation>
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
        <translation>Нет поставщика</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Не удалось создать временный каталог</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Большой файл</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>Размер «%1» — %2. Скачать его во временный файл?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Старые версии нельзя редактировать; сначала восстановите версию</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Скачивание %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Не удалось скачать %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Нет приложения для открытия этого файла</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Нет приложения для редактирования этого файла</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Загрузить изменения</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>Файл «%1» изменён. Загрузить его в %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Удалённый файл изменён</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 изменён на сервере после того, как вы его открыли. Перезаписать его вашей версией?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Не удалось загрузить %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Восстановить из архива</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Запросить временную копию %1, доступную для чтения. Архивный объект остаётся на месте; копия оплачивается по стандартному тарифу бакета, пока не истечёт её срок.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> день</numerusform>
            <numerusform> дня</numerusform>
            <numerusform> дней</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Хранить копию:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Стандартный (Glacier: 3–5 часов, Deep Archive: до 12 часов)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Пакетный (самый дешёвый; 5–12 часов, Deep Archive: до 48 часов)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Ускоренный (только Glacier; 1–5 минут, самый дорогой)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Уровень извлечения:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Запросить восстановление</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Неизвестный параметр владения объектами</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Синтаксическая ошибка JSON в строке %1, столбце %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Неизвестное поле «%1» (%2)</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Управление версиями</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Шифрование по умолчанию</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Правила жизненного цикла</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Политика бакета</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Блокировка публичного доступа</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Теги</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Хостинг статического веб-сайта</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Блокировка объектов</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Владение объектами</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Имя бакета должно содержать от 3 до 63 символов.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Имя бакета может содержать только строчные латинские буквы, цифры, точки и дефисы.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Имя бакета должно начинаться и заканчиваться буквой или цифрой.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Имя бакета не должно содержать две точки подряд.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Имя бакета не должно выглядеть как IP-адрес.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Имя бакета не должно начинаться с «%1» (зарезервировано AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Имя бакета не должно заканчиваться на «%1» (зарезервировано AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Имена с точками не работают с адресацией виртуального хоста по HTTPS (сертификат TLS не совпадает) и с Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>ID правила может содержать не более 255 символов.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Правилу нужно хотя бы одно действие: переход, истечение срока или прерывание незавершённых загрузок.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>Минимальный размер объекта должен быть меньше максимального.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Ключ тега должен содержать от 1 до 128 символов.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Значение тега может содержать не более 256 символов.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Правило с фильтром по тегам не может прерывать незавершённые загрузки (у загрузок нет тегов).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Правило с фильтром по тегам не может удалять маркеры удаления с истёкшим сроком.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Срок действия объектов может истечь не ранее чем через 1 день.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Для истечения срока укажите либо число дней, либо дату.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Удаление маркеров удаления с истёкшим сроком нельзя сочетать с истечением срока текущих версий в одном правиле.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Неизвестный класс хранилища для перехода «%1».</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Два перехода в %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Для каждого перехода нужно число дней или дата.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Объекты можно переместить в %1 не ранее чем через 30 дней.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Используйте либо дни, либо даты для всех переходов и истечения срока в правиле.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>Истечение срока должно наступать после последнего перехода.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Два перехода неактуальных версий в %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Неактуальные версии можно перемещать не ранее чем через 1 день.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Число сохраняемых более новых версий должно быть от 1 до 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Неактуальные версии можно удалять не ранее чем через 1 день.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Для сохранения более новых неактуальных версий нужно истечение срока неактуальных версий.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Незавершённые загрузки можно прерывать не ранее чем через 1 день.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>префикс «%1»</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>тег %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>больше %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>меньше %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Весь бакет</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>в %1 через %2 дн.</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>в %1 с %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>истечение через %1 дн.</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>истечение %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>удаление маркеров удаления с истёкшим сроком</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>неактуальные в %1 через %2 дн.</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>удаление неактуальных через %1 дн. (хранить %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>удаление неактуальных через %1 дн.</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>прерывание загрузок через %1 дн.</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>В бакете может быть не более 1000 правил жизненного цикла.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Правило %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Правило «%1»</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: другое правило имеет тот же ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>конфигурация</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>правило %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1: не является объектом</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: значение Status должно быть «Enabled» или «Disabled»</translation>
    </message>
    <message>
        <source> filter</source>
        <translation>, фильтр</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Правилу CORS нужен хотя бы один разрешённый источник.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Правилу CORS нужен хотя бы один разрешённый метод.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Неподдерживаемый метод «%1» (используйте GET, PUT, POST, DELETE или HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Недопустимый источник «%1»: допускается не более одного подстановочного знака «*».</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Недопустимый заголовок «%1»: допускается не более одного подстановочного знака «*».</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>Максимальное время не может быть отрицательным.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>В бакете может быть не более 100 правил CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Правило %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Политика должна быть объектом JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Нет поля &quot;Version&quot;: добавьте &quot;Version&quot;: &quot;2012-10-17&quot; (без него переменные политики не работают).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Неизвестная версия политики «%1» (используйте «2012-10-17»).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>Версия «2008-10-17» устарела; используйте «2012-10-17».</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>Политике нужно поле &quot;Statement&quot; (объект или массив объектов).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>В политике нет инструкций.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>Инструкция %1 не является объектом.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Инструкция %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Инструкция «%1»</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: Sid используется дважды.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; должно быть &quot;Allow&quot; или &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: политикам бакета нужен &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: отсутствует &quot;Action&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: отсутствует &quot;Resource&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: «%2» не является действием S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: «%2» не является ARN ресурса S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: «%2» не относится к этому бакету (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 предоставляет доступ всем (Principal &quot;*&quot; без условия).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Публичное чтение (любой может скачивать объекты)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Запрещать запросы без TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Доступ только для чтения для другой учётной записи AWS</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Перенаправление всех запросов нельзя сочетать с документами или правилами маршрутизации.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Протокол перенаправления должен быть http или https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>Для хостинга веб-сайта нужен индексный документ (или перенаправление всех запросов).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Индексный документ не должен содержать «/» (это суффикс, добавляемый к запросам папок).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Каждому правилу маршрутизации нужно перенаправление.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Правило маршрутизации может заменять ключ или префикс ключа, но не то и другое.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Правила маршрутизации должны быть массивом JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>правило маршрутизации %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>Режим хранения должен быть GOVERNANCE или COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>Для хранения по умолчанию в бакете должна быть включена блокировка объектов.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Задайте срок хранения по умолчанию в днях или в годах (что-то одно).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>Срок хранения по умолчанию не может превышать 100 лет.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>В бакете может быть не более 50 тегов.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Ошибка аутентификации: проверьте ключ доступа и секретный ключ</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>Часы компьютера слишком сильно расходятся со временем сервера</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>Объект не существует</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>Бакет не существует</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>Составная загрузка не существует</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>Объект находится в архиве; запросите восстановление (S3 &gt; Восстановить из архива) и дождитесь его доступности</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Доступ запрещён</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Бакет уже существует</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>Бакет не пуст</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>Сервис ограничивает частоту запросов; повторите попытку позже</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Ошибка сети: не удалось связаться с конечной точкой</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Истекло время ожидания запроса</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>Бакет находится в другом регионе, чем указан в настройках</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>Сервис не поддерживает эту операцию</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Не найдено</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>Запрос отклонён как недопустимый</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Ошибка запроса S3</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>Неизвестный стандартный ACL: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Предварительно подписанные URL доступны только для объектов</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Не удалось подписать URL (нет пригодных учётных данных)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
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
        <translation>Не расположение S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Нет такого объекта или папки: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Создание бакетов здесь не поддерживается</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Бакет уже существует</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Уже существует: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Удаление бакетов здесь не поддерживается</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>Не удалось удалить %n объект</numerusform>
            <numerusform>Не удалось удалить %n объекта</numerusform>
            <numerusform>Не удалось удалить %n объектов</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>В S3 нет переименования; используйте копирование и удаление</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Ошибка проверки целостности %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Для бакета %1 не настроен ключ SSE-C</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 отличается от ETag источника %2</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>Сохранено байт: %1, ожидалось: %2</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Скачивание не завершено: %1 из %2 байт</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 отличается от ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Не удалось заменить %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Не удалось записать %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Нет такого файла: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Является каталогом: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Недопустимое место назначения: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Не удалось прочитать %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 отличается от локального MD5 %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Ошибка чтения %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 отличается от ожидаемого %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Невозможно в списке подключений</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Не расположение S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Неизвестное подключение</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Для этого подключения не сохранён секретный ключ; измените подключение, чтобы ввести его</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Подключено: доступен %n бакет</numerusform>
            <numerusform>Подключено: доступно %n бакета</numerusform>
            <numerusform>Подключено: доступно %n бакетов</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Подключено (получение списка бакетов запрещено; доступен %n закреплённый бакет)</numerusform>
            <numerusform>Подключено (получение списка бакетов запрещено; доступно %n закреплённых бакета)</numerusform>
            <numerusform>Подключено (получение списка бакетов запрещено; доступно %n закреплённых бакетов)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Нет</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, ключи управляются S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (ключ AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (ключ, предоставленный клиентом)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>У объекта может быть не более 10 тегов.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Ключ тега должен содержать от 1 до 128 символов.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Значение тега может содержать не более 256 символов.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Ключ тега не должен начинаться с «aws:».</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Не в архиве</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>В архиве; выполняется восстановление</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>В архиве; восстановленная копия доступна до %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>В архиве; восстановите, чтобы прочитать данные</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Не является версией: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>Не удалось удалить %n версию</numerusform>
            <numerusform>Не удалось удалить %n версии</numerusform>
            <numerusform>Не удалось удалить %n версий</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 не удалён</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Нет версий %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Неизвестный уровень восстановления: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Восстанавливайте не менее чем на один день</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Ошибка системной связки ключей</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>В системной связке ключей нет сохранённого секрета</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Секрет не найден</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Настройки</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Как в системе (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Язык:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Новый язык будет применён после перезапуска S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Ключ шифрования клиента (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Объекты SSE-C шифруются 256-битным ключом, который храните вы. S3 его не сохраняет: &lt;b&gt;если ключ утерян, объекты невозможно прочитать&lt;/b&gt;. Ключ хранится в системной связке ключей.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 символа) или 64 шестнадцатеричные цифры</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Показать</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Сгенерировать</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Использовать для всех бакетов этого подключения, у которых нет собственного ключа</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Удалить ключ</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Для бакета %1 настроен ключ (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Для бакета %1 ключ не настроен.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>Ключ должен иметь длину 32 байта в виде base64 или 64 шестнадцатеричных цифр.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Удалить ключ для бакета %1? Объекты, зашифрованные им, невозможно будет прочитать без него.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Параметры</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Спрашивать</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Перезаписать</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Пропустить</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Сохранить оба (переименовать новый файл)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Перезаписать, если новее</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Перезаписать, если размер отличается</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Если файл существует:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>например *.jpg; *.png (пусто: всё)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Только файлы по маске:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>например *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Исключить:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Проверять целостность после передачи (размер, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Сохранять время изменения</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Следовать по символическим ссылкам (иначе пропускать их)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>По умолчанию для подключения</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Класс хранилища S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Шифрование S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Передачи</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Приостановить</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Возобновить</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Отмена</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Повторить неудачные</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Переместить вверх</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Переместить вниз</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Удалить</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Приостановить все</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Возобновить все</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Очистить завершённые</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Настройки…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>Выполняется: %1, в очереди: %2</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>Выполняется: %1</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Ошибка передачи</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID запроса: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Отменить передачу</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>Отменить «%1»? Частично переданные файлы будут удалены.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Удалить передачу</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>Удалить «%1»? Передача не завершена; частично переданные данные будут удалены.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n элемент</numerusform>
            <numerusform>%n элемента</numerusform>
            <numerusform>%n элементов</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Копирование %1 в %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Перемещение %1 в %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Удаление %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Нет поставщика для этого расположения</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Источник и место назначения совпадают</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Нельзя скопировать папку саму в себя</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Не найдено свободное имя</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Папка с таким именем уже существует</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>В очереди</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Приостановлено</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Готово, пропущен %n</numerusform>
            <numerusform>Готово, пропущено %n</numerusform>
            <numerusform>Готово, пропущено %n</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Готово</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Ошибка</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Отменено</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Запуск</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Сканирование</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Удаление</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Перемещение</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Копирование</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Завершение</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n ошибка)</numerusform>
            <numerusform>(%n ошибки)</numerusform>
            <numerusform>(%n ошибок)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n элемент</numerusform>
            <numerusform>%n элемента</numerusform>
            <numerusform>%n элементов</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n файл</numerusform>
            <numerusform>%1 / %n файла</numerusform>
            <numerusform>%1 / %n файлов</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Передача</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Состояние</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Ход выполнения</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Скорость</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Осталось</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Настройки передачи</translation>
    </message>
    <message>
        <source> MiB</source>
        <translation> МиБ</translation>
    </message>
    <message>
        <source> KiB/s</source>
        <translation> КиБ/с</translation>
    </message>
    <message>
        <source>Unlimited</source>
        <translation>Без ограничений</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Автоматически возобновлять прерванные передачи при запуске</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Одновременных передач:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Параллельных файлов на передачу:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Параллельных частей на файл:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Составная загрузка от:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Размер части:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Ограничение скорости:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Повторов на файл:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Для очень больших файлов размер части увеличивается автоматически (S3 допускает не более 10 000 частей). Изменения применяются к передачам, запущенным после этого; ограничение скорости действует сразу.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>История версий — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Изменена</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Размер</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Класс хранилища</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Состояние</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID версии</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Просмотр</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Скачать…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>Сделать &amp;текущей</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>&amp;Удалить безвозвратно…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>&amp;Отменить удаление</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Обходить хранение в режиме управления при удалении</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Обновить</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Загрузка версий…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Маркер удаления (объект удалён)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Маркер удаления</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Текущая</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Предыдущая</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Версии не найдены.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>Версий и маркеров удаления: %n.</numerusform>
            <numerusform>Версий и маркеров удаления: %n.</numerusform>
            <numerusform>Версий и маркеров удаления: %n.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Выполнение…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Скачать версию</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>Сохранено: %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>Выбранная версия снова стала текущей.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Удалить версии</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Безвозвратно удалить %n версию? Это действие нельзя отменить.</numerusform>
            <numerusform>Безвозвратно удалить %n версии? Это действие нельзя отменить.</numerusform>
            <numerusform>Безвозвратно удалить %n версий? Это действие нельзя отменить.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>Удалена %n версия.</numerusform>
            <numerusform>Удалено %n версии.</numerusform>
            <numerusform>Удалено %n версий.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>Объект восстановлен.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Просмотр — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — показаны первые %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — двоичный файл (%1), первые %2 показаны в шестнадцатеричном виде</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Открыть в приложении по умолчанию</translation>
    </message>
</context>
</TS>
