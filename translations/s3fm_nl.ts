<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl" sourcelanguage="en">
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
        <translation>Computer</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Toegestane origins</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Methoden</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Toegestane headers</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Zichtbare headers</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Max. leeftijd (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>Regel &amp;toevoegen</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>Regel &amp;verwijderen</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regels</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Scheid meerdere waarden met komma&apos;s. Methoden: GET, PUT, POST, DELETE, HEAD. Per origin of header is één jokerteken &quot;*&quot; toegestaan.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Toe&amp;passen</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>CORS-configuratie verwijderd</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>CORS-regels opgeslagen</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (sleutels beheerd door S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (AWS KMS-sleutel)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (dubbele laag, AWS KMS-sleutel)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>Standaard&amp;versleuteling:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>sleutel-ID, ARN of alias (leeg: door aws/s3 beheerde sleutel)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>KMS-&amp;sleutel:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>Een S3-&amp;bucketsleutel gebruiken (minder KMS-aanvragen, lagere kosten)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Geldt voor objecten die vanaf nu worden geschreven en niet zelf om versleuteling vragen. Bestaande objecten behouden hun versleuteling (herschrijf ze met Objecten bewerken om dit te wijzigen). AWS versleutelt met SSE-S3 als er niets is ingesteld.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Standaardversleuteling opgeslagen</translation>
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
        <translation>Status</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Van toepassing op</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Acties</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Toevoegen…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Bewerken…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>In-/&amp;uitschakelen</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Verwijderen</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regels</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Regels worden eenmaal per dag uitgevoerd. De JSON gebruikt de indeling van &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatibele services kunnen acties negeren die ze niet ondersteunen (MinIO heeft externe tiers nodig voor overgangen).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Toe&amp;passen</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(gegenereerd)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Ingeschakeld</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Uitgeschakeld</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Regel gewijzigd; met Toepassen worden de regels in de bucket opgeslagen.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Levenscyclusconfiguratie verwijderd</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Levenscyclusregels opgeslagen</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>Objectvergrendeling &amp;inschakelen…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Governance (gebruikers met speciale machtiging kunnen deze verwijderen)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Compliance (niemand kan deze verwijderen, zelfs het root-account niet)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>Standaard&amp;bewaring:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>dagen</translation>
    </message>
    <message>
        <source>years</source>
        <translation>jaren</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Periode:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Nieuwe objectversies krijgen de standaardbewaring, tenzij de upload een eigen bewaring instelt. Bewaarde versies kunnen pas worden verwijderd of overschreven als de periode is verstreken.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Objectvergrendeling inschakelen</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Objectvergrendeling inschakelen voor %1? Dit kan niet ongedaan worden gemaakt en versiebeheer blijft voorgoed ingeschakeld. (Sommige services staan dit alleen toe bij het maken van de bucket.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Objectvergrendeling ingeschakeld</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n dag</numerusform>
            <numerusform>%n dagen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n jaar</numerusform>
            <numerusform>%n jaar</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objectvergrendeling</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Bewaring in compliancemodus kan door niemand worden ingekort of verwijderd. Nieuwe versies kunnen %1 lang niet worden verwijderd. Doorgaan?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Standaardbewaring opgeslagen</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Objectvergrendeling is ingeschakeld voor deze bucket.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Objectvergrendeling is niet ingeschakeld voor deze bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Regio</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Gemaakt</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Eigenaar</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Bucketeigenaar afgedwongen (ACL&apos;s uitgeschakeld)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Voorkeur voor bucketeigenaar</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Objectschrijver</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Objecteigendom</translation>
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
        <translation>&amp;Sjablonen</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Bucketbeleid</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>De huidige tekst door het sjabloon vervangen?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Opmaken</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Geen bucketbeleid. Kies een sjabloon of plak een beleidsdocument.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>Beleid &amp;verwijderen…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Toepassen</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Kan niet opmaken: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Geen beleid.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Geen problemen gevonden.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Het bucketbeleid van %1 verwijderen?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Bucketbeleid verwijderd</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Corrigeer eerst de fouten in het beleid: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Dit beleid geeft iedereen op internet toegang. Toch toepassen?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Bucketbeleid opgeslagen</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Bucket-eigenschappen — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Overzicht</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versiebeheer</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Versleuteling</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Levenscyclus</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Beleid</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Openbare toegang</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Website</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objectvergrendeling</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Statistieken</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: niet ondersteund door dit eindpunt</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>&amp;Alle openbare toegang blokkeren</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Openbare toegang blokkeren die via nieuwe ACL&apos;s wordt verleend</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Openbare toegang negeren die via een ACL wordt verleend</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Openbare toegang blokkeren die via nieuw bucketbeleid wordt verleend</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Toegang tot buckets met openbaar beleid beperken tot AWS-services en het account van de eigenaar</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Instellingen op accountniveau gelden ook en hebben voorrang op deze. Het uitschakelen van blokkeringen maakt op zich niets openbaar.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Openbare toegang</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Instellingen voor openbare toegang op %1 toestaan? Objecten kunnen dan openbaar worden via ACL&apos;s of het bucketbeleid.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Instellingen voor openbare toegang opgeslagen</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Sleutelvoorvoegsel:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(hele bucket)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Berekenen</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categorie</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Objecten</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Geteld door elke objectversie op te sommen (één aanvraag per 1000 sleutels), wat bij grote buckets even duurt. Voor buckets met miljoenen objecten zijn S3 Storage Lens of de CloudWatch-metrics BucketSizeBytes/NumberOfObjects sneller (dagelijks bijgewerkt).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Tellen…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 bytes</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Huidige objecten</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Niet-huidige versies</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Verwijdermarkeringen</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Alle versies</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Onvoltooide meerdelige uploads</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Gereed.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Geannuleerd: gedeeltelijke tellingen.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Toepassen</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Toepassen…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Tellen… %L1 items</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Sleutel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Maximaal 50 tags; gebruikt voor kostentoewijzing en toegangsbeheer. Objecttags staan los hiervan (Objecten bewerken).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Tags opgeslagen</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Versiebeheer:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>MFA-verwijdering:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Met versiebeheer blijven bij het overschrijven of verwijderen van een object de oude gegevens bewaard als niet-huidige versie (gefactureerd als opslag). Versiebeheer kan na inschakelen niet meer worden uitgeschakeld, alleen opgeschort: bestaande versies blijven bestaan. MFA-verwijdering kan alleen door het root-account via de API/CLI worden gewijzigd.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>Versiebeheer &amp;inschakelen</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>Versiebeheer &amp;opschorten</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Versiebeheer ingeschakeld</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Versiebeheer opschorten</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Versiebeheer opschorten voor %1? Nieuwe schrijfbewerkingen vervangen objecten dan weer; bestaande versies blijven behouden.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Versiebeheer opgeschort</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Uitgeschakeld (nooit ingeschakeld)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Ingeschakeld</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Opgeschort</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Uitgeschakeld</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Statische &amp;websitehosting inschakelen</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>Een website &amp;hosten</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>&amp;Indexdocument:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>optioneel, bijv. error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>&amp;Foutdocument:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Optionele omleidingsregels (JSON-array), bijv.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>&amp;Routeringsregels:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>&amp;Alle aanvragen omleiden naar een andere host</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>bijv. www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>Host&amp;naam:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Zelfde als de aanvraag</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Protocol:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Website-eindpunten leveren objecten via gewone HTTP en alleen objecten die openbaar leesbaar zijn (bucketbeleid, blokkering van openbare toegang).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Toepassen</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Website-eindpunt: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Websiteconfiguratie opgeslagen</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Websitehosting uitgeschakeld</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Bestand bestaat al</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; bestaat al op de bestemming. Overschrijven?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Nieuw:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Bestaand:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Het nieuwe bestand is nieuwer.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Het bestaande bestand is nieuwer of even oud.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Beide hebben dezelfde grootte.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>De groottes verschillen.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Toepassen op alle resterende conflicten van deze overdracht</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>&amp;Overschrijven</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>Over&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>&amp;Beide behouden</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Kopiëren onder een nieuwe naam zoals &quot;naam (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Als &amp;nieuwer</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Alleen overschrijven als het nieuwe bestand nieuwer is, anders overslaan</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Als &amp;grootte verschilt</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Alleen overschrijven als de groottes verschillen, anders overslaan</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Overdracht annuleren</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Verbindingen</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Toevoegen</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Dupliceren</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>AWS-profielen importeren…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Verbindingen maken voor de profielen in %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbinding</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Gebruikt in adressen zoals s3://&lt;id&gt;/bucket/key. Kan na opslaan niet meer worden gewijzigd.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Provider:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Leeg laten voor Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>&amp;Eindpunt-URL:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Regio:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Virtual-hosted (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Padstijl (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>&amp;Adressering:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Referenties</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Toegangssleutel en geheim</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>AWS-profiel (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Omgevingsvariabelen</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Standaard AWS-referentieketen</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anoniem (openbare buckets)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>Toegangssleutel-ID:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Tonen</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Geheime toegangssleutel:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Optioneel (tijdelijke referenties)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Sessietoken:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Geheimen worden opgeslagen in de sleutelbos van het systeem, nooit in instellingenbestanden.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profiel:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Ondersteunt profielen met statische sleutels, SSO, assume-role (role_arn / source_profile) en credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Geavanceerd</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>TLS-certificaten verifiëren</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Systeemcertificaten</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Bladeren…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>CA-bundel</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Certificaten (*.pem *.crt);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>CA-bundel:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Indien ondersteund (AWS-standaard)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Alleen indien vereist (meest compatibel)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Sommige S3-compatibele services weigeren de nieuwere headers voor integriteitscontrolesommen.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Controlesommen bij aanvragen:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Bucketstandaard</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Opslagklasse voor uploads:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Buckets die worden getoond, ook als de referenties geen buckets mogen opsommen.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Vastgezette buckets:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b, of * voor alle</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Buckets met betaling door aanvrager: aanvragen daarvoor worden aan uw account gefactureerd (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Betaling door aanvrager:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Time-out voor aanvragen:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>Verbinding &amp;testen</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Opgeslagen in sleutelbos — leeg laten om te behouden</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Nieuwe %1-verbinding</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (kopie)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Verbinding verwijderen</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>De verbinding &quot;%1&quot; en het opgeslagen geheim verwijderen?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>AWS-profielen importeren</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Geen profielen gevonden in %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Alle AWS-profielen zijn al geïmporteerd.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Gebruikt AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY en AWS_SESSION_TOKEN uit de omgeving waarin de toepassing is gestart.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Probeert omgevingsvariabelen, het standaardprofiel, SSO, webidentiteit en container-/instantiereferenties, in de standaardvolgorde van de AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Aanvragen worden niet ondertekend. Alleen openbare buckets en objecten zijn toegankelijk.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Verbinding opslaan</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Er bestaat al een verbinding met de ID &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Voer de geheime toegangssleutel in.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Testen…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Niet-opgeslagen wijzigingen</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>De wijzigingen in &quot;%1&quot; opslaan?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Verbindingen *</translation>
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
        <translation>Andere S3-compatibele service</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Voer een naam in voor de verbinding.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>De ID mag alleen kleine letters, cijfers, &apos;.&apos;, &apos;-&apos; en &apos;_&apos; bevatten.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>Het eindpunt moet een http://- of https://-URL zijn.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Vervang de tijdelijke aanduiding in de eindpunt-URL.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Voer de eindpunt-URL van de S3-compatibele service in.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Voer een regio in (bijvoorbeeld us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Voer de toegangssleutel-ID in.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Kies een AWS-profiel.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Kan het instellingenbestand niet schrijven</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Nieuwe bucket</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>kleine letters, cijfers, punten en koppeltekens</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>standaard van eindpunt</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Regio:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Standaard (bucketeigenaar afgedwongen: ACL&apos;s uitgeschakeld)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Voorkeur voor bucketeigenaar (ACL&apos;s ingeschakeld)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Objectschrijver (ACL&apos;s ingeschakeld)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>Object&amp;eigendom:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>Standaard-&amp;ACL:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>&amp;Objectvergrendeling inschakelen (schakelt versiebeheer in; kan niet worden uitgeschakeld)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Nieuwe AWS-buckets blokkeren standaard openbare toegang; openbare ACL&apos;s mislukken totdat de blokkering van openbare toegang wordt versoepeld.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Maken</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Voer een bucketnaam in.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Bucket verwijderen</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>De lege bucket &lt;b&gt;%1&lt;/b&gt; definitief verwijderen?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>objecten</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>objectversies of verwijdermarkeringen</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>onvoltooide meerdelige uploads</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; is niet leeg: de bucket bevat %2.&lt;br&gt;&lt;br&gt;Om de bucket te verwijderen, worden eerst alle objecten, alle versies en alle onvoltooide uploads verwijderd. &lt;b&gt;Dit kan niet ongedaan worden gemaakt.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>Bucket &amp;leegmaken en daarna verwijderen</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>Bewaring in governancemodus &amp;omzeilen (vereist s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Typ de bucketnaam ter bevestiging:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Leegmaken en verwijderen</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Ongewijzigd / bucketstandaard</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>KMS-sleutel-ID, ARN of alias (leeg: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Geen provider voor %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbinding</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Map</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>%1-bestand</translation>
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
        <translation>Verwijdermarkering (verwijderd)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Verwijdermarkering</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (huidig)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Gewijzigd</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Opslagklasse</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Versie</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Bewerking geannuleerd</translation>
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
        <translation>Toevoegen</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> dagen</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>bytes (leeg: geen limiet)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Toevoegen</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Levenscyclusregel</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>optioneel; S3 genereert er een</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Ingeschakeld</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>Regel-I&amp;D:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filter</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>&amp;Huidige versies</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>&amp;Niet-huidige versies &amp;&amp; uploads</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>De regel geldt voor objecten die aan alle onderstaande voorwaarden voldoen; zonder voorwaarden geldt hij voor de hele bucket.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>bijv. logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>Sleutel&amp;voorvoegsel:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Groter dan:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Kleiner dan:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Objecttags:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Verplaatsen naar opslagklasse</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Na (dagen of JJJJ-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Overgangen:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nooit</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Na</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>Op datum</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Objecten laten verlopen (verwijderen):</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Verlopen verwijdermarkeringen verwijderen (markeringen zonder niet-huidige versies)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;In een bucket met versiebeheer voegt het laten verlopen van een huidige versie een verwijdermarkering toe; de gegevens blijven bewaard als niet-huidige versie.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Dagen na niet-huidig worden</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Nieuwste behouden (optioneel)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Verwijderen na</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>nieuwste behouden</translation>
    </message>
    <message>
        <source>none</source>
        <translation>geen</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Niet-huidige versies:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Onvoltooide meerdelige uploads afbreken na</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Uploads:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>Bestand of map bestaat niet: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>toegang geweigerd</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Geen lokale locatie</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Geen map: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Toegang geweigerd: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Ongeldige map</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Bestaat al: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Kan map %1 niet maken</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Weigering om de hoofdmap van een bestandssysteem te verwijderen</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: niet gevonden</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… en nog %1</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>%n item kon niet worden verwijderd</numerusform>
            <numerusform>%n items konden niet worden verwijderd</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Kan %1 niet verplaatsen</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Kan een map niet rechtstreeks naar een ander bestandssysteem verplaatsen</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Is een map: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Kan %1 niet lezen</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Kan %1 niet schrijven</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Fout bij lezen van %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Fout bij schrijven van %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Integriteitscontrole mislukt voor %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>%1 bytes geschreven, %2 verwacht</translation>
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
        <translation>%1 geüpload</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Bekijken</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Kopiëren…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>&amp;Verplaatsen…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>&amp;Naam wijzigen…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>Nieuwe &amp;map…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>Verwij&amp;deren…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>Instellin&amp;gen…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>Afslu&amp;iten</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>&amp;Locatie kopiëren</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>S3-&amp;URI kopiëren</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>&amp;HTTP-URL kopiëren</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>&amp;ARN kopiëren</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>Eigen&amp;schappen</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Metadata, &amp;tags, opslag bewerken…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Koppeling d&amp;elen (vooraf ondertekende URL)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>&amp;Versies tonen</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Bladeren op &amp;datum…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>Versie&amp;geschiedenis…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>&amp;Herstellen uit archief…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>&amp;Onvoltooide meerdelige uploads…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Nieuwe &amp;bucket…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>B&amp;ucket-eigenschappen…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>Alles &amp;deselecteren</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>Selectie &amp;omkeren</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>Snel&amp;filter…</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Vernieuwen</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Verborgen bestanden &amp;tonen</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>Panelen &amp;wisselen</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Openen in het &amp;andere paneel</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Terug</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Vooruit</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Startmap</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Hoofdmap</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>&amp;Adres bewerken</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Locaties &amp;linkerpaneel…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Locaties &amp;rechterpaneel…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>Verbindingen &amp;beheren…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>&amp;Overdrachten tonen</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>Alles &amp;pauzeren</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>Alles &amp;hervatten</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Voltooide wissen</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>Overdracht&amp;instellingen…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Sneltoetsen</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Over</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Selecteren</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>B&amp;eeld</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>&amp;Ga</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Overdrachten</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Verbindingen</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Help</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Persoonlijke map</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Hoofdmap (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>S3-verbindingen</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Alle verbindingen</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Zelfde als ander paneel</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>%n locatie naar het klembord gekopieerd</numerusform>
            <numerusform>%n locaties naar het klembord gekopieerd</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>In wachtrij: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>%n onderbroken overdracht wordt hervat</numerusform>
            <numerusform>%n onderbroken overdrachten worden hervat</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>%n onderbroken overdracht hersteld; hervat deze in het paneel Overdrachten</numerusform>
            <numerusform>%n onderbroken overdrachten hersteld; hervat deze in het paneel Overdrachten</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Gereed: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n fout</numerusform>
            <numerusform>%1: %n fouten</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Geannuleerd: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>De nieuwe taal wordt gebruikt na het herstarten van S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Verwijdermarkeringen kunnen niet worden gekopieerd.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Versies kunnen niet worden verplaatst of hernoemd; kopieer ze of gebruik Versiegeschiedenis.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Mappen zouden met hun huidige inhoud worden gekopieerd. Verlaat de weergave op datum om mappen te kopiëren, of selecteer de bestanden.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Versieweergave</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n items</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>%1 verplaatsen naar:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>%1 kopiëren naar:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 kent geen hernoemen: objecten worden gekopieerd en daarna worden de originelen verwijderd.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Verplaatsen</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Kopiëren</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Ongeldige bestemming: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Naam wijzigen</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Nieuwe naam:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>De naam mag geen padscheidingstekens bevatten.</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Hier kunnen geen mappen worden gemaakt</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nieuwe map</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Mapnaam (gebruik / voor geneste mappen):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Ongeldige mapnaam: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>In de versieweergave kunnen alleen versies worden verwijderd. Verlaat deze weergave om mappen te verwijderen.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Bucket verwijderen</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Verwijder buckets één voor één.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Deze items kunnen hier niet worden verwijderd</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>De map &quot;%1&quot; en alles erin definitief verwijderen?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>&quot;%1&quot; definitief verwijderen?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>%n geselecteerd item definitief verwijderen?</numerusform>
            <numerusform>%n geselecteerde items definitief verwijderen?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Geen toepassing om %1 te openen</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Een verwijdermarkering heeft geen inhoud</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Selecteer S3-objecten of -mappen om te bewerken</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n geselecteerd item</numerusform>
            <numerusform>%n geselecteerde items</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Objecten bijwerken…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Geannuleerd na %n object</numerusform>
            <numerusform>Geannuleerd na %n objecten</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>%n object bijgewerkt</numerusform>
            <numerusform>%n objecten bijgewerkt</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Objecten bewerken</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Bijgewerkt: %1 van %n object; mislukt: %2.</numerusform>
            <numerusform>Bijgewerkt: %1 van %n objecten; mislukt: %2.</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Versies kunnen binnen S3-buckets worden getoond</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Versiebeheer is nooit ingeschakeld voor %1: elk object heeft één versie</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Versiebeheer is opgeschort voor %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>Bladeren op een tijdstip werkt binnen S3-buckets</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Bladeren op datum</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Deze bucket tonen zoals hij was op een bepaald tijdstip, opgebouwd uit de versiegeschiedenis (alleen buckets met versiebeheer).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Datum en tijd:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Terug naar huidig</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Selecteer een S3-object</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Versies verwijderen</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n versie definitief verwijderen? Dit kan niet ongedaan worden gemaakt.</numerusform>
            <numerusform>%n versies definitief verwijderen? Dit kan niet ongedaan worden gemaakt.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>%n versie verwijderd</numerusform>
            <numerusform>%n versies verwijderd</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Selecteer gearchiveerde S3-objecten of -mappen</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Herstel aanvragen…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Herstel aangevraagd voor %n object</numerusform>
            <numerusform>Herstel aangevraagd voor %n objecten</numerusform>
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
            <numerusform>%n niet gearchiveerd, al hersteld of bezig</numerusform>
            <numerusform>%n niet gearchiveerd, al hersteld of bezig</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Herstellen uit archief</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n mislukt.</numerusform>
            <numerusform>%n mislukt.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Open eerst een S3-bucket</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Open eerst een S3-verbinding</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Bucket %1 maken…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Nieuwe bucket</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Kan %1 niet maken: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Bucket %1 gemaakt</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Selecteer of open een bucket</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Inhoud van %1 controleren…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Inhoud van %1 verwijderen…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln item verwijderd…</numerusform>
            <numerusform>%Ln items verwijderd…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Bucket %1 verwijderd</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Geannuleerd; %n item was al verwijderd</numerusform>
            <numerusform>Geannuleerd; %n items waren al verwijderd</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Kan de bucket %1 niet verwijderen.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>%1 en %2 vóór de fout.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n item verwijderd</numerusform>
            <numerusform>%n items verwijderd</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n upload afgebroken</numerusform>
            <numerusform>%n uploads afgebroken</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>%n item kon niet worden verwijderd (bewaring, juridische bewaring of machtigingen).</numerusform>
            <numerusform>%n items konden niet worden verwijderd (bewaring, juridische bewaring of machtigingen).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Selecteer een S3-object om te delen</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Openen met standaardtoepassing</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Deze versie huidig maken</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Versie herstellen</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Verwijdering ongedaan maken</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Niets te kopiëren</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n regel naar het klembord gekopieerd</numerusform>
            <numerusform>%n regels naar het klembord gekopieerd</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Van paneel wisselen</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Openen / bovenliggende map</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Spatie</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Selectie omschakelen (en omlaag) / selectie omschakelen</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+pijltoetsen</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Selectie uitbreiden</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Letters typen</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Naar naam springen</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Sneltoetsen</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Over S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Bestandsbeheerder met twee panelen voor Amazon S3 en S3-compatibele opslag.&lt;/p&gt;&lt;p&gt;Gebouwd met Qt %2 en de AWS SDK voor C++.&lt;/p&gt;&lt;p&gt;MIT-licentie&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Niet-geüploade externe bewerkingen</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Sommige bewerkte bestanden hebben wijzigingen die niet zijn geüpload. Toch afsluiten?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n overdracht loopt nog. Afsluiten en de volgende keer voortzetten?</numerusform>
            <numerusform>%n overdrachten lopen nog. Afsluiten en de volgende keer voortzetten?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n overdracht loopt nog. Afsluiten en deze afbreken?</numerusform>
            <numerusform>%n overdrachten lopen nog. Afsluiten en deze afbreken?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Overdrachten actief</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n minuut</numerusform>
            <numerusform>%n minuten</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n uur</numerusform>
            <numerusform>%n uur</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n dag</numerusform>
            <numerusform>%n dagen</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Onvoltooide meerdelige uploads — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Onderbroken uploads behouden hun delen (en de opslagkosten daarvan) totdat ze worden voltooid of afgebroken. Een levenscyclusregel van de bucket kan ze automatisch afbreken.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Sleutelvoorvoegsel:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(hele bucket)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Vernieuwen</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Sleutel</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Gestart</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Leeftijd</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Delen</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Opslagklasse</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>&amp;Geselecteerde afbreken…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>&amp;Alle afbreken…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>Upload-ID: %1
Gestart door: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Geen onvoltooide uploads. (Sommige S3-compatibele services tonen uploads alleen voor een exacte objectsleutel: voer die in als voorvoegsel.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n onvoltooide upload, %1 opgeslagen.</numerusform>
            <numerusform>%n onvoltooide uploads, %1 opgeslagen.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Laden…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Uploads afbreken</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>%n upload afbreken? De geüploade delen worden verwijderd.</numerusform>
            <numerusform>%n uploads afbreken? De geüploade delen worden verwijderd.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Afbreken…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Objecten bewerken</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>%1 wijzigen. Alleen aangevinkte onderdelen worden toegepast; mappen omvatten alles wat eronder valt.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Headers en metadata</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(ongewijzigd)</translation>
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
        <translation>Gebruikersmetadata instellen:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Sleutel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Alle gebruikersmetadata vervangen (anders samenvoegen)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Sleutels verwijderen:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Opslagklasse</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Versleuteling</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Tags (de tagset vervangen)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Toegangsbeheer (standaard-ACL)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Headers, opslagklasse en versleuteling worden gewijzigd door elk object naar zichzelf te kopiëren (S3 kan ze niet op een andere manier wijzigen); daarbij wordt de ACL opnieuw ingesteld, tenzij hier ook een ACL wordt ingesteld. Gearchiveerde objecten (Glacier, Deep Archive) moeten eerst worden hersteld.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Vink ten minste één onderdeel aan om te wijzigen.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Ongeldige metadatasleutel &quot;%1&quot;: gebruik letters, cijfers, &apos;-&apos;, &apos;_&apos; en &apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Locaties en verbindingen</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Persoonlijke map</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Hoofdmap</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Opnieuw proberen</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filter (deeltekenreeks of jokertekens * ?) — Esc om te sluiten</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Onbekend adres: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Ongeldige locatie: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Kan %1 niet openen: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>%1 van %2 geselecteerd, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n map</numerusform>
            <numerusform>%n mappen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n bestand</numerusform>
            <numerusform>%n bestanden</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Op %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Alle versies] </translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — laden…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — meer items beschikbaar (scroll omlaag)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Koppeling delen — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Downloaden (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Uploaden / vervangen (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Staat toe:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>minuten</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>uur</translation>
    </message>
    <message>
        <source>days</source>
        <translation>dagen</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Geldig voor:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>URL &amp;kopiëren</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>&amp;QR-code tonen</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Vooraf ondertekende URL&apos;s zijn maximaal 7 dagen geldig; de vervaltijd is ingekort.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Verloopt %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Dit zijn tijdelijke referenties (sessietoken, SSO of aangenomen rol): de URL werkt niet meer zodra ze verlopen.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>De vervaltijd is daaraan aangepast.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Eigenschappen — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadata</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Opslag &amp;&amp; versleuteling</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Machtigingen</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objectvergrendeling</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Controlesommen</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Alle headers</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Sleutel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
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
        <translation>Gebruikersmetadata (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 slaat headers op bij het object: bij toepassen wordt het object naar zichzelf gekopieerd. De ACL wordt teruggezet naar de bucketstandaard; tags blijven behouden.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Maximaal 10 tags; sleutels maximaal 128 en waarden maximaal 256 tekens.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Opslagklasse:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Versleuteling:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Klantsleutel (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Eigenaar:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Begunstigde</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Machtiging</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Vervangen door standaard-ACL:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Governance (kan met speciale machtiging worden opgeheven)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Compliance (kan niet worden ingekort of verwijderd)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Bewaringsmodus:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Bewaren tot:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Governancemodus omzeilen (nodig om een governance-bewaring in te korten of te verwijderen)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Juridische bewaring</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algoritme</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Opgeslagen</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Lokaal bestand</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Resultaat</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Vergelijken met lokaal bestand…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Laden…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Kan het object niet laden: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Kan metadata niet laden: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Locatie:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Bestand (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Map (voorvoegsel)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Map</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbinding</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Grootte:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Gewijzigd:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Koppelingsdoel:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Machtigingen:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Verborgen:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>Versie-ID:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Regio:</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>S3-URI:</translation>
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
        <translation>Tags zijn niet beschikbaar: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Dit object is gearchiveerd; voor het wijzigen van de opslagklasse is een herstelde kopie nodig.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bij wijzigen hiervan wordt het object naar zichzelf gekopieerd.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>ACL&apos;s zijn uitgeschakeld voor deze bucket (objecteigendom: bucketeigenaar afgedwongen). Gebruik bucketbeleid om toegang te verlenen.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>De ACL is niet beschikbaar: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Objecteigendom: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Status van objectvergrendeling is niet beschikbaar: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Objectvergrendeling is niet ingeschakeld voor deze bucket (dit kan alleen worden ingeschakeld bij het maken van de bucket).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Bewaard in modus %1 tot %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Er is geen bewaring ingesteld voor deze versie.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Toepassen…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Ongeldige metadatasleutel &quot;%1&quot;: gebruik letters, cijfers, &apos;-&apos;, &apos;_&apos; en &apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Metadata opgeslagen.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Tags opgeslagen.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Niets gewijzigd.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Opslaginstellingen opgeslagen.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL ingesteld op %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Instellingen voor objectvergrendeling opgeslagen.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Vergelijken met lokaal bestand</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Controlesommen van %1 berekenen…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Komt overeen</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>VERSCHILLEND</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>Het object heeft geen controlesom die kan worden vergeleken.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Het lokale bestand komt overeen met het object.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Het lokale bestand verschilt van het object.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Klantsleutels vereisen een opgeslagen verbinding.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Versieoverzichten worden hier niet ondersteund</translation>
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
        <translation>Geen provider</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Kan geen tijdelijke map maken</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Groot bestand</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot; is %2. Downloaden naar een tijdelijk bestand?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Oudere versies kunnen niet worden bewerkt; herstel eerst de versie</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>%1 downloaden…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Kan %1 niet downloaden</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Geen toepassing om dit bestand te openen</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Geen toepassing om dit bestand te bewerken</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Wijzigingen uploaden</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>&quot;%1&quot; is gewijzigd. Uploaden naar %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Extern bestand gewijzigd</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 is op de server gewijzigd sinds u het hebt geopend. Overschrijven met uw versie?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Kan %1 niet uploaden</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Herstellen uit archief</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Vraag een tijdelijke, leesbare kopie van %1 aan. Het gearchiveerde object blijft waar het is; de kopie wordt tegen het standaardtarief van de bucket gefactureerd totdat deze verloopt.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> dag</numerusform>
            <numerusform> dagen</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Kopie bewaren gedurende:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Standard (Glacier: 3–5 uur, Deep Archive: binnen 12 uur)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Bulk (goedkoopst; 5–12 uur, Deep Archive: binnen 48 uur)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Expedited (alleen Glacier; 1–5 minuten, duurst)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Ophaallaag:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Herstel aanvragen</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Onbekende instelling voor objecteigendom</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>JSON-syntaxisfout op regel %1, kolom %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Onbekend veld &quot;%1&quot; in %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versiebeheer</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Standaardversleuteling</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Levenscyclusregels</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Bucketbeleid</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Blokkering van openbare toegang</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Hosting van statische websites</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objectvergrendeling</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Objecteigendom</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Bucketnamen moeten 3 tot 63 tekens lang zijn.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Bucketnamen mogen alleen kleine letters, cijfers, punten en koppeltekens bevatten.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Bucketnamen moeten beginnen en eindigen met een letter of cijfer.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Bucketnamen mogen geen twee opeenvolgende punten bevatten.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Bucketnamen mogen niet op een IP-adres lijken.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Bucketnamen mogen niet beginnen met &quot;%1&quot; (gereserveerd door AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Bucketnamen mogen niet eindigen op &quot;%1&quot; (gereserveerd door AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Namen met punten werken niet met virtual-hosted HTTPS-adressering (het TLS-certificaat komt niet overeen) of Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Regel-ID&apos;s mogen maximaal 255 tekens bevatten.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Een regel heeft ten minste één actie nodig: een overgang, een vervaldatum of het afbreken van onvoltooide uploads.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>De minimale objectgrootte moet kleiner zijn dan de maximale.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Tagsleutels moeten 1 tot 128 tekens bevatten.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Tagwaarden mogen maximaal 256 tekens bevatten.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Een regel die op tags filtert, kan geen onvoltooide uploads afbreken (uploads hebben geen tags).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Een regel die op tags filtert, kan geen verlopen verwijdermarkeringen verwijderen.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Objecten kunnen op zijn vroegst na 1 dag verlopen.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Kies voor het verlopen een aantal dagen of een datum.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Het verwijderen van verlopen verwijdermarkeringen kan niet in dezelfde regel worden gecombineerd met het laten verlopen van huidige versies.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Onbekende opslagklasse voor overgang &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Twee overgangen naar %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Elke overgang heeft een aantal dagen of een datum nodig.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Objecten kunnen op zijn vroegst na 30 dagen naar %1 worden verplaatst.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Gebruik voor alle overgangen en het verlopen van een regel ofwel dagen ofwel datums.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>Het verlopen moet na de laatste overgang komen.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Twee overgangen van niet-huidige versies naar %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Niet-huidige versies kunnen op zijn vroegst na 1 dag worden verplaatst.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Het aantal te behouden nieuwere versies moet tussen 1 en 100 liggen.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Niet-huidige versies kunnen op zijn vroegst na 1 dag worden verwijderd.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Het behouden van nieuwere niet-huidige versies vereist een vervaldatum voor niet-huidige versies.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Onvoltooide uploads kunnen op zijn vroegst na 1 dag worden afgebroken.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>voorvoegsel &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>tag %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>groter dan %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>kleiner dan %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Hele bucket</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>naar %1 na %2 d</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>naar %1 op %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>verlopen na %1 d</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>verlopen op %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>verlopen verwijdermarkeringen verwijderen</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>niet-huidig naar %1 na %2 d</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>niet-huidig verwijderen na %1 d (%2 behouden)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>niet-huidig verwijderen na %1 d</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>uploads afbreken na %1 d</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Een bucket kan maximaal 1000 levenscyclusregels hebben.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Regel %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Regel &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: een andere regel heeft dezelfde ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>de configuratie</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>regel %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 is geen object</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status moet &quot;Enabled&quot; of &quot;Disabled&quot; zijn</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> (filter)</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Een CORS-regel heeft ten minste één toegestane origin nodig.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Een CORS-regel heeft ten minste één toegestane methode nodig.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Niet-ondersteunde methode &quot;%1&quot; (gebruik GET, PUT, POST, DELETE of HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Ongeldige origin &quot;%1&quot;: maximaal één jokerteken &quot;*&quot;.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Ongeldige header &quot;%1&quot;: maximaal één jokerteken &quot;*&quot;.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>De maximale leeftijd kan niet negatief zijn.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Een bucket kan maximaal 100 CORS-regels hebben.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Regel %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Een beleid moet een JSON-object zijn.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Geen &quot;Version&quot;: voeg &quot;Version&quot;: &quot;2012-10-17&quot; toe (zonder werken beleidsvariabelen niet).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Onbekende beleidsversie &quot;%1&quot; (gebruik &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>Versie &quot;2008-10-17&quot; is verouderd; gebruik &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>Het beleid heeft een &quot;Statement&quot; nodig (een object of een array van objecten).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>Het beleid heeft geen statements.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>Statement %1 is geen object.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Statement %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Statement &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: de Sid wordt twee keer gebruikt.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; moet &quot;Allow&quot; of &quot;Deny&quot; zijn.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: bucketbeleid heeft een &quot;Principal&quot; nodig.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: &quot;Action&quot; ontbreekt.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: &quot;Resource&quot; ontbreekt.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; is geen S3-actie.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; is geen ARN van een S3-resource.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; valt niet binnen deze bucket (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 geeft iedereen toegang (Principal &quot;*&quot; zonder voorwaarde).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Openbaar lezen (iedereen kan objecten downloaden)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Aanvragen zonder TLS weigeren</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Alleen-lezentoegang voor een ander AWS-account</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Het omleiden van alle aanvragen kan niet worden gecombineerd met documenten of routeringsregels.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Het omleidingsprotocol moet http of https zijn.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>Websitehosting heeft een indexdocument nodig (of een omleiding van alle aanvragen).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Het indexdocument mag geen &quot;/&quot; bevatten (het is een achtervoegsel dat aan mapaanvragen wordt toegevoegd).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Elke routeringsregel heeft een omleiding nodig.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Een routeringsregel kan de sleutel of het sleutelvoorvoegsel vervangen, niet allebei.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Routeringsregels moeten een JSON-array zijn.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>routeringsregel %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>De bewaringsmodus moet GOVERNANCE of COMPLIANCE zijn.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>Standaardbewaring vereist dat objectvergrendeling is ingeschakeld voor de bucket.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Stel de standaardbewaringsperiode in dagen of in jaren in (een van beide).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>De standaardbewaringsperiode mag maximaal 100 jaar zijn.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Een bucket kan maximaal 50 tags hebben.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Verificatie mislukt: controleer de toegangssleutel en het geheim</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>De klok van de computer wijkt te veel af van de tijd van de server</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>Het object bestaat niet</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>De bucket bestaat niet</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>De meerdelige upload bestaat niet</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>Het object is gearchiveerd; vraag herstel aan (S3 &gt; Herstellen uit archief) en wacht tot het beschikbaar is</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Toegang geweigerd</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>De bucket bestaat al</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>De bucket is niet leeg</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>De service beperkt het aantal aanvragen; probeer het later opnieuw</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Netwerkfout: het eindpunt is niet bereikbaar</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Time-out bij de aanvraag</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>De bucket bevindt zich in een andere regio dan de geconfigureerde</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>De service ondersteunt deze bewerking niet</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Niet gevonden</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>De aanvraag is als ongeldig geweigerd</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>S3-aanvraag mislukt</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>Onbekende standaard-ACL: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Vooraf ondertekende URL&apos;s zijn alleen voor objecten</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Kan de URL niet ondertekenen (geen bruikbare referenties)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
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
        <translation>Geen S3-locatie</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Object of map bestaat niet: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Buckets maken wordt hier niet ondersteund</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>De bucket bestaat al</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Bestaat al: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Buckets verwijderen wordt hier niet ondersteund</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>%n object kon niet worden verwijderd</numerusform>
            <numerusform>%n objecten konden niet worden verwijderd</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 kent geen hernoemen; gebruik kopiëren en verwijderen</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Integriteitscontrole mislukt voor %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Er is geen SSE-C-sleutel geconfigureerd voor bucket %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 verschilt van %2 van de bron</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>%1 bytes opgeslagen, %2 verwacht</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Download onvolledig: %1 van %2 bytes</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 verschilt van de ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Kan %1 niet vervangen</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Kan %1 niet schrijven</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Bestand bestaat niet: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Is een map: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Ongeldige bestemming: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Kan %1 niet lezen</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 verschilt van de lokale MD5 %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Fout bij lezen van %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 verschilt van de verwachte %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Niet mogelijk in de verbindingenlijst</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Geen S3-locatie</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Onbekende verbinding</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Er is geen geheime sleutel opgeslagen voor deze verbinding; bewerk de verbinding om deze in te voeren</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Verbonden: %n bucket zichtbaar</numerusform>
            <numerusform>Verbonden: %n buckets zichtbaar</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Verbonden (buckets opsommen is niet toegestaan; %n vastgezette bucket bereikbaar)</numerusform>
            <numerusform>Verbonden (buckets opsommen is niet toegestaan; %n vastgezette buckets bereikbaar)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, sleutels beheerd door S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (AWS KMS-sleutel)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (door klant verstrekte sleutel)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Een object kan maximaal 10 tags hebben.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Tagsleutels moeten 1 tot 128 tekens bevatten.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Tagwaarden mogen maximaal 256 tekens bevatten.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Tagsleutels mogen niet beginnen met &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Niet gearchiveerd</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Gearchiveerd; herstel bezig</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Gearchiveerd; herstelde kopie beschikbaar tot %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Gearchiveerd; herstel het om de gegevens te lezen</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Geen versie: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>%n versie kon niet worden verwijderd</numerusform>
            <numerusform>%n versies konden niet worden verwijderd</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 is niet verwijderd</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Geen versies van %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Onbekende herstellaag: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Herstel voor minimaal één dag</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Fout in de sleutelbos van het systeem</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>Geen geheim opgeslagen in de sleutelbos van het systeem</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Geheim niet gevonden</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Instellingen</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Systeemstandaard (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;De nieuwe taal wordt gebruikt na het herstarten van S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Versleutelingssleutel van klant (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>SSE-C-objecten worden versleuteld met een 256-bits sleutel die u zelf bewaart. S3 slaat deze niet op: &lt;b&gt;als de sleutel verloren gaat, kunnen de objecten niet worden gelezen&lt;/b&gt;. De sleutel wordt bewaard in de sleutelbos van het systeem.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 tekens) of 64 hexadecimale cijfers</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Tonen</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Genereren</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Gebruiken voor elke bucket van deze verbinding zonder eigen sleutel</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Sleutel verwijderen</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Er is een sleutel geconfigureerd voor bucket %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Er is geen sleutel geconfigureerd voor bucket %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>De sleutel moet 32 bytes zijn, als base64 of 64 hexadecimale cijfers.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>De sleutel voor bucket %1 verwijderen? Objecten die ermee zijn versleuteld, kunnen zonder deze sleutel niet worden gelezen.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Opties</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Vragen</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Overschrijven</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Overslaan</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Beide behouden (nieuw bestand hernoemen)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Overschrijven indien nieuwer</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Overschrijven als de grootte verschilt</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Als een bestand bestaat:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>bijv. *.jpg; *.png (leeg: alles)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Alleen bestanden die overeenkomen met:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>bijv. *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Uitsluiten:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Integriteit controleren na overdracht (grootte, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Wijzigingstijden behouden</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Symbolische koppelingen volgen (anders overslaan)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Standaard van verbinding</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>S3-opslagklasse:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>S3-versleuteling:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Overdrachten</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Pauzeren</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Hervatten</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Mislukte opnieuw proberen</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Omhoog</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Omlaag</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Alles pauzeren</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Alles hervatten</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Voltooide wissen</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Instellingen…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 actief, %2 in wachtrij</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 actief</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Overdrachtsfout</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>Aanvraag-ID: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Overdracht annuleren</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>&quot;%1&quot; annuleren? Gedeeltelijk overgedragen bestanden worden verwijderd.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Overdracht verwijderen</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>&quot;%1&quot; verwijderen? De overdracht is niet voltooid; gedeeltelijke gegevens worden verwijderd.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n items</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>%1 kopiëren naar %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>%1 verplaatsen naar %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 verwijderen</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Geen provider voor deze locatie</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Bron en bestemming zijn hetzelfde</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Kan een map niet naar zichzelf kopiëren</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Geen vrije naam gevonden</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Er bestaat al een map met deze naam</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>In wachtrij</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Gepauzeerd</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Gereed, %n overgeslagen</numerusform>
            <numerusform>Gereed, %n overgeslagen</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Gereed</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Mislukt</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Geannuleerd</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Starten</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Scannen</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Verplaatsen</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Kopiëren</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Afronden</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n fout)</numerusform>
            <numerusform>(%n fouten)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n items</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n bestand</numerusform>
            <numerusform>%1 / %n bestanden</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Overdracht</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Voortgang</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Snelheid</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Resterende tijd</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Overdrachtinstellingen</translation>
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
        <translation>Onbeperkt</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Onderbroken overdrachten automatisch hervatten bij het opstarten</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Gelijktijdige overdrachten:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Parallelle bestanden per overdracht:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Parallelle delen per bestand:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Meerdelig vanaf:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Deelgrootte:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Bandbreedtelimiet:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Pogingen per bestand:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;De deelgrootte groeit automatisch voor zeer grote bestanden (S3 staat maximaal 10.000 delen toe). Wijzigingen gelden voor overdrachten die daarna worden gestart; de bandbreedtelimiet geldt direct.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Versiegeschiedenis — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Gewijzigd</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Opslagklasse</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>Versie-ID</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Bekijken</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Downloaden…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>&amp;Herstellen als huidige</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Definitief &amp;verwijderen…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>Verwijdering &amp;ongedaan maken</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Bewaring in governancemodus omzeilen bij verwijderen</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Vernieuwen</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Versies laden…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Verwijdermarkering (object verwijderd)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Verwijdermarkering</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Huidig</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Vorige</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Geen versies gevonden.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n versie of verwijdermarkering.</numerusform>
            <numerusform>%n versies en verwijdermarkeringen.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Bezig…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Versie downloaden</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>%1 opgeslagen</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>De geselecteerde versie is weer de huidige versie.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Versies verwijderen</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n versie definitief verwijderen? Dit kan niet ongedaan worden gemaakt.</numerusform>
            <numerusform>%n versies definitief verwijderen? Dit kan niet ongedaan worden gemaakt.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>%n versie verwijderd.</numerusform>
            <numerusform>%n versies verwijderd.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>Het object is terug.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Weergave — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — eerste %1 getoond</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — binair (%1), eerste %2 als hex getoond</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Openen in standaardtoepassing</translation>
    </message>
</context>
</TS>
