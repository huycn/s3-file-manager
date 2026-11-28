<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
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
        <translation>Zulässige Ursprünge</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Methoden</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Zulässige Header</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Offengelegte Header</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Max. Alter (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>Regel &amp;hinzufügen</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>Regel &amp;entfernen</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regeln</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Mehrere Werte durch Kommas trennen. Methoden: GET, PUT, POST, DELETE, HEAD. Pro Ursprung oder Header ist ein Platzhalter „*“ zulässig.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Übernehmen</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>CORS-Konfiguration entfernt</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>CORS-Regeln gespeichert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (von S3 verwaltete Schlüssel)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (AWS-KMS-Schlüssel)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (zweischichtig, AWS-KMS-Schlüssel)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>Standard&amp;verschlüsselung:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>Schlüssel-ID, ARN oder Alias (leer: von aws/s3 verwalteter Schlüssel)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>KMS-&amp;Schlüssel:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>S3-&amp;Bucket-Schlüssel verwenden (weniger KMS-Anfragen, geringere Kosten)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Gilt für ab jetzt geschriebene Objekte, die keine eigene Verschlüsselung anfordern. Vorhandene Objekte behalten ihre Verschlüsselung (zum Ändern mit „Objekte bearbeiten“ neu schreiben). Ist nichts festgelegt, verschlüsselt AWS mit SSE-S3.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Standardverschlüsselung gespeichert</translation>
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
        <translation>Gilt für</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Aktionen</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Hinzufügen…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Bearbeiten…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>Aktivieren/&amp;Deaktivieren</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Entfernen</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regeln</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Regeln werden einmal täglich ausgeführt. JSON verwendet das Format von &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-kompatible Dienste ignorieren möglicherweise nicht unterstützte Aktionen (MinIO benötigt für Übergänge Remote-Tiers).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Übernehmen</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(generiert)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Aktiviert</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Deaktiviert</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Regel geändert; „Übernehmen“ speichert die Regeln im Bucket.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Lebenszykluskonfiguration entfernt</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Lebenszyklusregeln gespeichert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>Objektsperre a&amp;ktivieren…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Governance (Benutzer mit besonderer Berechtigung können sie entfernen)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Compliance (niemand kann sie entfernen, auch nicht das Root-Konto)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>Standard-&amp;Aufbewahrung:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>Tage</translation>
    </message>
    <message>
        <source>years</source>
        <translation>Jahre</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Zeitraum:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Neue Objektversionen erhalten die Standardaufbewahrung, sofern der Upload keine eigene festlegt. Aufbewahrte Versionen können bis zum Ende des Zeitraums weder gelöscht noch überschrieben werden.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Objektsperre aktivieren</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Objektsperre für %1 aktivieren? Dies kann nicht rückgängig gemacht werden, und die Versionsverwaltung bleibt dauerhaft aktiviert. (Manche Dienste erlauben dies nur beim Erstellen des Buckets.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Objektsperre aktiviert</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n Tag</numerusform>
            <numerusform>%n Tage</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n Jahr</numerusform>
            <numerusform>%n Jahre</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objektsperre</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Aufbewahrung im Compliance-Modus kann von niemandem verkürzt oder entfernt werden. Neue Versionen sind %1 lang nicht löschbar. Fortfahren?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Standardaufbewahrung gespeichert</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Die Objektsperre ist für diesen Bucket aktiviert.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Die Objektsperre ist für diesen Bucket nicht aktiviert.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Region</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Erstellt</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Besitzer</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Bucket-Besitzer erzwungen (ACLs deaktiviert)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Bucket-Besitzer bevorzugt</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Objekt-Schreiber</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Objekteigentümerschaft</translation>
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
        <translation>&amp;Vorlagen</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Bucket-Richtlinie</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Den aktuellen Text durch die Vorlage ersetzen?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Formatieren</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Keine Bucket-Richtlinie. Wählen Sie eine Vorlage oder fügen Sie ein Richtliniendokument ein.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>Richtlinie &amp;löschen…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Übernehmen</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Formatieren nicht möglich: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Keine Richtlinie.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Keine Probleme gefunden.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Bucket-Richtlinie von %1 löschen?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Bucket-Richtlinie gelöscht</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Beheben Sie zuerst die Fehler in der Richtlinie: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Diese Richtlinie gewährt jedem im Internet Zugriff. Trotzdem übernehmen?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Bucket-Richtlinie gespeichert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Bucket-Eigenschaften – %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Übersicht</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versionsverwaltung</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Verschlüsselung</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Lebenszyklus</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Richtlinie</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Öffentlicher Zugriff</translation>
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
        <translation>Objektsperre</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Statistik</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: von diesem Endpunkt nicht unterstützt</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>&amp;Gesamten öffentlichen Zugriff blockieren</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Öffentlichen Zugriff über neue ACLs blockieren</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Öffentlichen Zugriff über beliebige ACLs ignorieren</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Öffentlichen Zugriff über neue Bucket-Richtlinien blockieren</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Zugriff auf Buckets mit öffentlichen Richtlinien auf AWS-Dienste und das Konto des Besitzers beschränken</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Einstellungen auf Kontoebene gelten zusätzlich und haben Vorrang. Das Ausschalten von Sperren macht für sich allein nichts öffentlich.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Öffentlicher Zugriff</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Einstellungen für öffentlichen Zugriff auf %1 zulassen? Objekte können dann über ACLs oder die Bucket-Richtlinie öffentlich werden.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Einstellungen für öffentlichen Zugriff gespeichert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Schlüsselpräfix:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(gesamter Bucket)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Berechnen</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Gezählt durch Auflisten jeder Objektversion (eine Anfrage pro 1000 Schlüssel); bei großen Buckets dauert das eine Weile. Für Buckets mit Millionen von Objekten sind S3 Storage Lens oder die CloudWatch-Metriken BucketSizeBytes/NumberOfObjects schneller (täglich aktualisiert).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Abbrechen</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Zählen…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 Byte</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Aktuelle Objekte</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Nicht aktuelle Versionen</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Löschmarkierungen</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Alle Versionen</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Unvollständige mehrteilige Uploads</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Fertig.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Abgebrochen: Teilergebnisse.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Übernehmen</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Wird übernommen…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Zählen… %L1 Elemente</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Schlüssel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Bis zu 50 Tags; für Kostenzuordnung und Zugriffskontrolle. Objekt-Tags sind davon getrennt („Objekte bearbeiten“).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Tags gespeichert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Versionsverwaltung:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>MFA-Löschen:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Mit Versionsverwaltung bleiben beim Überschreiben oder Löschen eines Objekts die alten Daten als nicht aktuelle Version erhalten (als Speicher abgerechnet). Einmal aktiviert, kann die Versionsverwaltung nicht ausgeschaltet, nur angehalten werden: Vorhandene Versionen bleiben erhalten. MFA-Löschen kann nur das Root-Konto über API/CLI ändern.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>Versionsverwaltung &amp;aktivieren</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>Versionsverwaltung an&amp;halten</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Versionsverwaltung aktiviert</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Versionsverwaltung anhalten</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Versionsverwaltung für %1 anhalten? Neue Schreibvorgänge ersetzen Objekte wieder; vorhandene Versionen bleiben erhalten.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Versionsverwaltung angehalten</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Deaktiviert (nie aktiviert)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Aktiviert</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Angehalten</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Deaktiviert</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Statisches &amp;Website-Hosting aktivieren</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>Website &amp;hosten</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>&amp;Indexdokument:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>optional, z. B. error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>&amp;Fehlerdokument:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Optionale Umleitungsregeln (JSON-Array), z. B.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>&amp;Routing-Regeln:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>&amp;Alle Anfragen an einen anderen Host umleiten</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>z. B. www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>Host&amp;name:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Wie die Anfrage</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Protokoll:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Website-Endpunkte liefern Objekte nur über unverschlüsseltes HTTP und nur öffentlich lesbare Objekte aus (Bucket-Richtlinie, Sperre des öffentlichen Zugriffs).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Übernehmen</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Website-Endpunkt: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Website-Konfiguration gespeichert</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Website-Hosting deaktiviert</translation>
    </message>
</context>
<context>
    <name>s3fm::Compare</name>
    <message>
        <source>only here</source>
        <translation>nur hier</translation>
    </message>
    <message>
        <source>newer</source>
        <translation>neuer</translation>
    </message>
    <message>
        <source>older</source>
        <translation>älter</translation>
    </message>
    <message>
        <source>different</source>
        <translation>verschieden</translation>
    </message>
    <message>
        <source>identical</source>
        <translation>identisch</translation>
    </message>
    <message>
        <source>same size and time</source>
        <translation>gleiche Größe und Zeit</translation>
    </message>
    <message>
        <source>file vs. folder</source>
        <translation>Datei/Ordner</translation>
    </message>
    <message>
        <source>Missing in the other panel.</source>
        <translation>Fehlt im anderen Bereich.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is newer.</source>
        <translation>Unterscheidet sich vom anderen Bereich und ist neuer.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is older.</source>
        <translation>Unterscheidet sich vom anderen Bereich und ist älter.</translation>
    </message>
    <message>
        <source>Differs from the other panel.</source>
        <translation>Unterscheidet sich vom anderen Bereich.</translation>
    </message>
    <message>
        <source>Same content as in the other panel.</source>
        <translation>Gleicher Inhalt wie im anderen Bereich.</translation>
    </message>
    <message>
        <source>Same size and time as in the other panel.</source>
        <translation>Gleiche Größe und Zeit wie im anderen Bereich.</translation>
    </message>
    <message>
        <source>The other panel has a file where this is a folder, or the other way round.</source>
        <translation>Im anderen Bereich steht hier eine Datei, wo dies ein Ordner ist, oder umgekehrt.</translation>
    </message>
    <message>
        <source>The content differs.</source>
        <translation>Der Inhalt unterscheidet sich.</translation>
    </message>
    <message>
        <source>The content could not be checked.</source>
        <translation>Der Inhalt konnte nicht geprüft werden.</translation>
    </message>
    <message numerus="yes">
        <source>%n only here</source>
        <translation>
            <numerusform>%n nur hier</numerusform>
            <numerusform>%n nur hier</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n newer</source>
        <translation>
            <numerusform>%n neuer</numerusform>
            <numerusform>%n neuer</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n older</source>
        <translation>
            <numerusform>%n älter</numerusform>
            <numerusform>%n älter</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n different</source>
        <translation>
            <numerusform>%n verschieden</numerusform>
            <numerusform>%n verschieden</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n identical</source>
        <translation>
            <numerusform>%n identisch</numerusform>
            <numerusform>%n identisch</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n not verified</source>
        <translation>
            <numerusform>%n nicht geprüft</numerusform>
            <numerusform>%n nicht geprüft</numerusform>
        </translation>
    </message>
    <message>
        <source>nothing to compare</source>
        <translation>nichts zu vergleichen</translation>
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
        <translation>Bereiche vergleichen</translation>
    </message>
    <message>
        <source>Compare modification &amp;times</source>
        <translation>Änderungs&amp;zeiten vergleichen</translation>
    </message>
    <message>
        <source> s</source>
        <comment>seconds</comment>
        <translation> s</translation>
    </message>
    <message>
        <source>T&amp;olerance:</source>
        <translation>T&amp;oleranz:</translation>
    </message>
    <message>
        <source>Compare the &amp;content of files with the same size</source>
        <translation>&amp;Inhalt von Dateien gleicher Größe vergleichen</translation>
    </message>
    <message>
        <source>&lt;small&gt;Local files are read. S3 objects are compared by ETag (the MD5 sum of single-part uploads) and stored checksums; when the ETag alone does not tell, one or two requests per object are needed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Lokale Dateien werden gelesen. S3-Objekte werden über das ETag (die MD5-Summe einteiliger Uploads) und gespeicherte Prüfsummen verglichen; wenn das ETag allein nichts aussagt, sind ein oder zwei Anfragen pro Objekt nötig.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Mark &amp;folders that exist on one side only</source>
        <translation>Ordner &amp;markieren, die es nur auf einer Seite gibt</translation>
    </message>
    <message>
        <source>&lt;small&gt;Only the listings shown are compared, not the contents of folders. Items missing on the other side, newer, or different are selected in both panels, ready to copy with F5. S3 times are upload times.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Verglichen werden nur die angezeigten Listen, nicht der Inhalt von Ordnern. Was auf der anderen Seite fehlt, neuer oder verschieden ist, wird in beiden Bereichen ausgewählt und lässt sich mit F5 kopieren. S3-Zeiten sind Upload-Zeiten.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Compare</source>
        <translation>Vergleichen</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Datei existiert bereits</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; existiert bereits im Ziel. Überschreiben?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Neu:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Vorhanden:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Die neue Datei ist neuer.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Die vorhandene Datei ist neuer oder gleich alt.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Beide haben dieselbe Größe.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Die Größen unterscheiden sich.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>Auf alle weiteren Konflikte dieser Übertragung &amp;anwenden</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>Über&amp;schreiben</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>Ü&amp;berspringen</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>Beide be&amp;halten</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Unter einem neuen Namen wie „Name (2).ext“ kopieren</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Wenn &amp;neuer</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Nur überschreiben, wenn die neue Datei neuer ist, sonst überspringen</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Wenn &amp;Größe abweicht</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Nur überschreiben, wenn die Größen abweichen, sonst überspringen</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Übertragung abbrechen</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Verbindungen</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplizieren</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>AWS-Profile importieren…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Verbindungen für die Profile in %1 erstellen</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbindung</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Wird in Adressen wie s3://&lt;id&gt;/bucket/key verwendet. Kann nach dem Speichern nicht geändert werden.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Anbieter:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Für Amazon S3 leer lassen</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>&amp;Endpunkt-URL:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Region:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Virtual-Hosted (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Pfadstil (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>A&amp;dressierung:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Anmeldedaten</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Zugriffsschlüssel und Geheimnis</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>AWS-Profil (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Umgebungsvariablen</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Standard-Anmeldedatenkette von AWS</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anonym (öffentliche Buckets)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>Zugriffsschlüssel-ID:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Anzeigen</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Geheimer Zugriffsschlüssel:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Optional (temporäre Anmeldedaten)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Sitzungstoken:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Geheimnisse werden im Schlüsselbund des Systems gespeichert, nie in Einstellungsdateien.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Unterstützt Profile mit statischen Schlüsseln, SSO, Assume-Role (role_arn / source_profile) und credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Erweitert</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>TLS-Zertifikate überprüfen</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Systemzertifikate</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Durchsuchen…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>CA-Bundle</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Zertifikate (*.pem *.crt);;Alle Dateien (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>CA-Bundle:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Wenn unterstützt (AWS-Standard)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Nur wenn erforderlich (am kompatibelsten)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Manche S3-kompatiblen Dienste lehnen die neueren Header für Integritätsprüfsummen ab.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Anfrage-Prüfsummen:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Bucket-Standard</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Speicherklasse für Uploads:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Buckets, die auch angezeigt werden, wenn die Anmeldedaten keine Buckets auflisten dürfen.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Angeheftete Buckets:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b oder * für alle</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Buckets mit Zahlung durch den Anforderer: Anfragen an sie werden Ihrem Konto berechnet (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Zahlung durch den Anforderer:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Zeitlimit für Anfragen:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>Verbindung &amp;testen</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>Ö&amp;ffnen</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Im Schlüsselbund gespeichert – leer lassen, um beizubehalten</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Neue %1-Verbindung</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (Kopie)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Verbindung löschen</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Die Verbindung „%1“ und ihr gespeichertes Geheimnis löschen?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>AWS-Profile importieren</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Keine Profile in %1 gefunden.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Alle AWS-Profile sind bereits importiert.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Verwendet AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY und AWS_SESSION_TOKEN aus der Umgebung, mit der die Anwendung gestartet wurde.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Versucht Umgebungsvariablen, das Standardprofil, SSO, Web-Identität und Container-/Instanz-Anmeldedaten in der Standardreihenfolge des AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Anfragen werden nicht signiert. Nur öffentliche Buckets und Objekte sind zugänglich.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Verbindung speichern</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Eine Verbindung mit der ID „%1“ existiert bereits.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Geben Sie den geheimen Zugriffsschlüssel ein.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Wird getestet…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Ungespeicherte Änderungen</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Änderungen an „%1“ speichern?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Verbindungen *</translation>
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
        <translation>Anderer S3-kompatibler Dienst</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Geben Sie einen Namen für die Verbindung ein.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>Die ID darf nur Kleinbuchstaben, Ziffern, „.“, „-“ und „_“ enthalten.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>Der Endpunkt muss eine http://- oder https://-URL sein.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Ersetzen Sie den Platzhalter in der Endpunkt-URL.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Geben Sie die Endpunkt-URL des S3-kompatiblen Dienstes ein.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Geben Sie eine Region ein (zum Beispiel us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Geben Sie die Zugriffsschlüssel-ID ein.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Wählen Sie ein AWS-Profil.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Die Einstellungsdatei konnte nicht geschrieben werden</translation>
    </message>
</context>
<context>
    <name>s3fm::ContentCompare</name>
    <message>
        <source>Error reading %1</source>
        <translation>Fehler beim Lesen von %1</translation>
    </message>
    <message>
        <source>The object has no checksum to compare with (encrypted with SSE-KMS or SSE-C, and no stored checksum).</source>
        <translation>Das Objekt hat keine Prüfsumme zum Vergleichen (mit SSE-KMS oder SSE-C verschlüsselt und keine gespeicherte Prüfsumme).</translation>
    </message>
    <message>
        <source>The objects were uploaded in different parts or are encrypted with SSE-KMS or SSE-C; their ETags do not tell whether the content is the same.</source>
        <translation>Die Objekte wurden in unterschiedlichen Teilen hochgeladen oder sind mit SSE-KMS oder SSE-C verschlüsselt; ihre ETags sagen nicht, ob der Inhalt gleich ist.</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Neuer Bucket</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>Kleinbuchstaben, Ziffern, Punkte und Bindestriche</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>Standard des Endpunkts</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Region:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Standard (Bucket-Besitzer erzwungen: ACLs deaktiviert)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Bucket-Besitzer bevorzugt (ACLs aktiviert)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Objekt-Schreiber (ACLs aktiviert)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>Objekt&amp;eigentümerschaft:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>Vordefinierte &amp;ACL:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>&amp;Objektsperre aktivieren (schaltet die Versionsverwaltung ein; kann nicht ausgeschaltet werden)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Neue AWS-Buckets blockieren standardmäßig den öffentlichen Zugriff; öffentliche ACLs schlagen fehl, bis die Sperre des öffentlichen Zugriffs gelockert wird.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Erstellen</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Geben Sie einen Bucket-Namen ein.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Bucket löschen</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Den leeren Bucket &lt;b&gt;%1&lt;/b&gt; endgültig löschen?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>Objekte</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>Objektversionen oder Löschmarkierungen</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>unvollständige mehrteilige Uploads</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; ist nicht leer: Er enthält %2.&lt;br&gt;&lt;br&gt;Zum Löschen werden zuerst alle Objekte, alle Versionen und alle unvollständigen Uploads gelöscht. &lt;b&gt;Dies kann nicht rückgängig gemacht werden.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>Bucket &amp;leeren und dann löschen</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>Aufbewahrung im Governance-Modus &amp;umgehen (erfordert s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Geben Sie zur Bestätigung den Bucket-Namen ein:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Leeren und löschen</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Unverändert / Bucket-Standard</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>KMS-Schlüssel-ID, ARN oder Alias (leer: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Kein Anbieter für %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbindung</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Ordner</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>%1-Datei</translation>
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
        <translation>Löschmarkierung (gelöscht)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Löschmarkierung</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (aktuell)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Name</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Geändert</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Speicherklasse</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Version</translation>
    </message>
    <message>
        <source>Comparison</source>
        <translation>Vergleich</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Vorgang abgebrochen</translation>
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
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> Tage</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>Byte (leer: keine Grenze)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Hinzufügen</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Lebenszyklusregel</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>optional; S3 erzeugt eine</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Aktiviert</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>Regel-&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filter</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>Aktuelle &amp;Versionen</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>&amp;Nicht aktuelle Versionen &amp;&amp; Uploads</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>Die Regel gilt für Objekte, die alle folgenden Bedingungen erfüllen; ohne Bedingungen gilt sie für den gesamten Bucket.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>z. B. logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>Schlüssel&amp;präfix:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Größer als:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Kleiner als:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Objekt-Tags:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>In Speicherklasse verschieben</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Nach (Tage oder JJJJ-MM-TT)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Übergänge:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nie</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Nach</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>Am Datum</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Objekte ablaufen lassen (löschen):</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Abgelaufene Löschmarkierungen entfernen (Markierungen ohne nicht aktuelle Versionen)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;In einem versionierten Bucket fügt das Ablaufen einer aktuellen Version eine Löschmarkierung hinzu; die Daten bleiben als nicht aktuelle Version erhalten.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Tage, nachdem sie nicht mehr aktuell sind</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Neueste behalten (optional)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Löschen nach</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>und die neuesten behalten:</translation>
    </message>
    <message>
        <source>none</source>
        <translation>keine</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Nicht aktuelle Versionen:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Unvollständige mehrteilige Uploads abbrechen nach</translation>
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
        <translation>Datei oder Verzeichnis nicht gefunden: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>Zugriff verweigert</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Kein lokaler Ort</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Kein Verzeichnis: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Zugriff verweigert: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Ungültiges Verzeichnis</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Existiert bereits: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Verzeichnis %1 kann nicht erstellt werden</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Das Löschen eines Dateisystem-Stammverzeichnisses wird verweigert</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: nicht gefunden</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… und %1 weitere</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>%n Element konnte nicht gelöscht werden</numerusform>
            <numerusform>%n Elemente konnten nicht gelöscht werden</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>%1 kann nicht verschoben werden</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Ein Verzeichnis kann nicht direkt zwischen Dateisystemen verschoben werden</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Ist ein Verzeichnis: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1 kann nicht gelesen werden</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1 kann nicht geschrieben werden</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Fehler beim Lesen von %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Fehler beim Schreiben von %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Integritätsprüfung für %1 fehlgeschlagen</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>%1 Byte geschrieben, %2 erwartet</translation>
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
        <translation>Hochgeladen: %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Anzeigen</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Bearbeiten</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Kopieren…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>&amp;Verschieben…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>&amp;Umbenennen…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>Neuer &amp;Ordner…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Löschen…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>E&amp;instellungen…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>Been&amp;den</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>&amp;Pfad kopieren</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>S3-U&amp;RI kopieren</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>&amp;HTTP-URL kopieren</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>AR&amp;N kopieren</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Eigenschaften</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Metadaten, &amp;Tags, Speicher bearbeiten…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>&amp;Freigabelink (vorsignierte URL)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>&amp;Versionen anzeigen</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Stand zu einem &amp;Zeitpunkt…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>V&amp;ersionsverlauf…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>Aus Archiv &amp;wiederherstellen…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>&amp;Unvollständige mehrteilige Uploads…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Neuer &amp;Bucket…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>Bucket-Eigen&amp;schaften…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Alle &amp;auswählen</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>Auswahl auf&amp;heben</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>Auswahl &amp;umkehren</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>Schnell&amp;filter…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>Dateien &amp;suchen…</translation>
    </message>
    <message>
        <source>&amp;Compare Panels…</source>
        <translation>Bereiche &amp;vergleichen…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>Zum &amp;enthaltenden Ordner</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Aktualisieren</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>&amp;Versteckte Dateien anzeigen</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>Bereiche &amp;tauschen</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Im anderen &amp;Bereich öffnen</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Zurück</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Vorwärts</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Persönlicher Ordner</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Wurzelverzeichnis</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>&amp;Adresse bearbeiten</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Orte im &amp;linken Bereich…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Orte im &amp;rechten Bereich…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Verbindungen verwalten…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>Übertragungen an&amp;zeigen</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>Alle &amp;anhalten</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>Alle &amp;fortsetzen</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>Abgeschlossene &amp;entfernen</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>Ü&amp;bertragungseinstellungen…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Tastenkürzel</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>Ü&amp;ber</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Datei</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>Aus&amp;wahl</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Ansicht</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>&amp;Gehe zu</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Übertragungen</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Verbindungen</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Hilfe</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Persönlicher Ordner</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Wurzelverzeichnis (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>S3-Verbindungen</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Alle Verbindungen</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Wie im anderen Bereich</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>Dateien suchen</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>Öffnen Sie einen Bucket, um darin zu suchen.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>Öffnen Sie ein Laufwerk, um darin zu suchen.</translation>
    </message>
    <message>
        <source>Compare Panels</source>
        <translation>Bereiche vergleichen</translation>
    </message>
    <message>
        <source>Both panels need to show a folder.</source>
        <translation>Beide Bereiche müssen einen Ordner zeigen.</translation>
    </message>
    <message>
        <source>Leave the versions view to compare the panels.</source>
        <translation>Verlassen Sie die Versionsansicht, um die Bereiche zu vergleichen.</translation>
    </message>
    <message>
        <source>Both panels show the same folder.</source>
        <translation>Beide Bereiche zeigen denselben Ordner.</translation>
    </message>
    <message>
        <source>Comparing contents…</source>
        <translation>Inhalte werden verglichen…</translation>
    </message>
    <message>
        <source>Comparison cancelled</source>
        <translation>Vergleich abgebrochen</translation>
    </message>
    <message>
        <source>A panel changed during the comparison; compare again.</source>
        <translation>Ein Bereich hat sich während des Vergleichs geändert; bitte erneut vergleichen.</translation>
    </message>
    <message numerus="yes">
        <source>%n content check(s) failed; see the tooltips in the comparison column.</source>
        <translation>
            <numerusform>%n Inhaltsprüfung fehlgeschlagen; siehe die Tooltips in der Spalte „Vergleich“.</numerusform>
            <numerusform>%n Inhaltsprüfungen fehlgeschlagen; siehe die Tooltips in der Spalte „Vergleich“.</numerusform>
        </translation>
    </message>
    <message>
        <source>Only the items loaded so far were compared (scroll down to load more).</source>
        <translation>Nur die bisher geladenen Einträge wurden verglichen (zum Nachladen nach unten scrollen).</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>%n Pfad in die Zwischenablage kopiert</numerusform>
            <numerusform>%n Pfade in die Zwischenablage kopiert</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>In Warteschlange: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>%n unterbrochene Übertragung wird fortgesetzt</numerusform>
            <numerusform>%n unterbrochene Übertragungen werden fortgesetzt</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>%n unterbrochene Übertragung wiederhergestellt; setzen Sie sie im Bereich „Übertragungen“ fort</numerusform>
            <numerusform>%n unterbrochene Übertragungen wiederhergestellt; setzen Sie sie im Bereich „Übertragungen“ fort</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Fertig: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n Fehler</numerusform>
            <numerusform>%1: %n Fehler</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Abgebrochen: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>Die neue Sprache wird nach einem Neustart von S3 File Manager verwendet.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Löschmarkierungen können nicht kopiert werden.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Versionen können nicht verschoben oder umbenannt werden; kopieren Sie sie oder verwenden Sie den Versionsverlauf.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Ordner würden mit ihrem aktuellen Inhalt kopiert. Verlassen Sie die Zeitpunktansicht, um Ordner zu kopieren, oder wählen Sie die Dateien aus.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Versionsansicht</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n Element</numerusform>
            <numerusform>%n Elemente</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>%1 verschieben nach:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>%1 kopieren nach:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 kennt kein Umbenennen: Objekte werden kopiert und dann die Originale gelöscht.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Verschieben</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Kopieren</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Ungültiges Ziel: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Umbenennen</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Neuer Name:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>Der Name darf keine Pfadtrennzeichen enthalten.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>In Suchergebnissen können keine Ordner erstellt werden</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Hier können keine Ordner erstellt werden</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Neuer Ordner</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Ordnername (/ für verschachtelte Ordner verwenden):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Ungültiger Ordnername: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>In der Versionsansicht können nur Versionen gelöscht werden. Verlassen Sie sie, um Ordner zu löschen.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Bucket löschen</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Löschen Sie Buckets einzeln.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Diese Elemente können hier nicht gelöscht werden</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Den Ordner „%1“ und seinen gesamten Inhalt endgültig löschen?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>„%1“ endgültig löschen?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>%n ausgewähltes Element endgültig löschen?</numerusform>
            <numerusform>%n ausgewählte Elemente endgültig löschen?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Keine Anwendung zum Öffnen von %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Eine Löschmarkierung hat keinen Inhalt</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Wählen Sie zu bearbeitende S3-Objekte oder -Ordner aus</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n ausgewähltes Element</numerusform>
            <numerusform>%n ausgewählte Elemente</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Objekte werden aktualisiert…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Abgebrochen nach %n Objekt</numerusform>
            <numerusform>Abgebrochen nach %n Objekten</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>%n Objekt aktualisiert</numerusform>
            <numerusform>%n Objekte aktualisiert</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Objekte bearbeiten</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Aktualisiert: %1 von %n Objekt; fehlgeschlagen: %2.</numerusform>
            <numerusform>Aktualisiert: %1 von %n Objekten; fehlgeschlagen: %2.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>Schließen Sie zuerst die Suchergebnisse</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Versionen können innerhalb von S3-Buckets angezeigt werden</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Die Versionsverwaltung war für %1 nie aktiviert: Jedes Objekt hat eine Version</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Die Versionsverwaltung ist für %1 angehalten</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>Das Durchsuchen zu einem Zeitpunkt funktioniert innerhalb von S3-Buckets</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Stand zu einem Zeitpunkt</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Diesen Bucket so anzeigen, wie er zu einem Zeitpunkt war, rekonstruiert aus seinem Versionsverlauf (nur versionierte Buckets).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Datum und Uhrzeit:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Zurück zum aktuellen Stand</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Wählen Sie ein S3-Objekt aus</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Versionen löschen</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n Version endgültig löschen? Dies kann nicht rückgängig gemacht werden.</numerusform>
            <numerusform>%n Versionen endgültig löschen? Dies kann nicht rückgängig gemacht werden.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>%n Version gelöscht</numerusform>
            <numerusform>%n Versionen gelöscht</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Wählen Sie archivierte S3-Objekte oder -Ordner aus</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Wiederherstellungen werden angefordert…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Wiederherstellung für %n Objekt angefordert</numerusform>
            <numerusform>Wiederherstellung für %n Objekte angefordert</numerusform>
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
            <numerusform>%n nicht archiviert, bereits wiederhergestellt oder in Bearbeitung</numerusform>
            <numerusform>%n nicht archiviert, bereits wiederhergestellt oder in Bearbeitung</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Aus Archiv wiederherstellen</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n fehlgeschlagen.</numerusform>
            <numerusform>%n fehlgeschlagen.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Öffnen Sie zuerst einen S3-Bucket</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Öffnen Sie zuerst eine S3-Verbindung</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Bucket %1 wird erstellt…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Neuer Bucket</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>%1 konnte nicht erstellt werden: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Bucket %1 erstellt</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Wählen Sie einen Bucket aus oder öffnen Sie einen</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Inhalt von %1 wird geprüft…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Inhalt von %1 wird gelöscht…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln Element gelöscht…</numerusform>
            <numerusform>%Ln Elemente gelöscht…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Bucket %1 gelöscht</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Abgebrochen; %n Element wurde bereits gelöscht</numerusform>
            <numerusform>Abgebrochen; %n Elemente wurden bereits gelöscht</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Der Bucket %1 konnte nicht gelöscht werden.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>Vor dem Fehler: %1, %2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n Element gelöscht</numerusform>
            <numerusform>%n Elemente gelöscht</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n Upload abgebrochen</numerusform>
            <numerusform>%n Uploads abgebrochen</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>%n Element konnte nicht gelöscht werden (Aufbewahrung, Aufbewahrungspflicht oder Berechtigungen).</numerusform>
            <numerusform>%n Elemente konnten nicht gelöscht werden (Aufbewahrung, Aufbewahrungspflicht oder Berechtigungen).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Wählen Sie ein S3-Objekt zum Freigeben aus</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Öffnen</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Mit Standardanwendung öffnen</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Diese Version zur aktuellen machen</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Version wiederherstellen</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Löschen rückgängig machen</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Nichts zu kopieren</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n Zeile in die Zwischenablage kopiert</numerusform>
            <numerusform>%n Zeilen in die Zwischenablage kopiert</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Bereich wechseln</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Rücktaste</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Öffnen / übergeordneter Ordner</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Leertaste</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Auswahl umschalten (und nach unten) / Auswahl umschalten</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+Pfeiltasten</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Auswahl erweitern</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Buchstaben eingeben</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Zu Namen springen</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Tastenkürzel</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Über S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Zweibereichs-Dateimanager für Amazon S3 und S3-kompatiblen Speicher.&lt;/p&gt;&lt;p&gt;Erstellt mit Qt %2 und dem AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT-Lizenz&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Nicht hochgeladene Bearbeitungen</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Einige bearbeitete Dateien haben Änderungen, die nicht hochgeladen wurden. Trotzdem beenden?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n Übertragung läuft noch. Beenden und beim nächsten Mal fortsetzen?</numerusform>
            <numerusform>%n Übertragungen laufen noch. Beenden und beim nächsten Mal fortsetzen?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n Übertragung läuft noch. Beenden und verwerfen?</numerusform>
            <numerusform>%n Übertragungen laufen noch. Beenden und verwerfen?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Laufende Übertragungen</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n Minute</numerusform>
            <numerusform>%n Minuten</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n Stunde</numerusform>
            <numerusform>%n Stunden</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n Tag</numerusform>
            <numerusform>%n Tage</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Unvollständige mehrteilige Uploads – %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Unterbrochene Uploads behalten ihre Teile (und deren Speicherkosten), bis sie abgeschlossen oder abgebrochen werden. Eine Lebenszyklusregel des Buckets kann sie automatisch abbrechen.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Schlüsselpräfix:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(gesamter Bucket)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Aktualisieren</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Schlüssel</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Gestartet</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Alter</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Teile</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Speicherklasse</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>&amp;Ausgewählte abbrechen…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>A&amp;lle abbrechen…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>Upload-ID: %1
Gestartet von: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Keine unvollständigen Uploads. (Manche S3-kompatiblen Dienste listen Uploads nur für einen exakten Objektschlüssel auf: Geben Sie ihn als Präfix ein.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n unvollständiger Upload, %1 gespeichert.</numerusform>
            <numerusform>%n unvollständige Uploads, %1 gespeichert.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Wird geladen…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Uploads abbrechen</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>%n Upload abbrechen? Die hochgeladenen Teile werden gelöscht.</numerusform>
            <numerusform>%n Uploads abbrechen? Die hochgeladenen Teile werden gelöscht.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Wird abgebrochen…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Objekte bearbeiten</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Zu ändern: %1. Nur markierte Abschnitte werden übernommen; Ordner schließen alles darunter ein.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Header und Metadaten</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(unverändert)</translation>
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
        <translation>Benutzermetadaten festlegen:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Schlüssel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Alle Benutzermetadaten ersetzen (sonst zusammenführen)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Schlüssel entfernen:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Speicherklasse</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Verschlüsselung</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Tags (Tag-Satz ersetzen)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Zugriffskontrolle (vordefinierte ACL)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Header, Speicherklasse und Verschlüsselung werden geändert, indem jedes Objekt auf sich selbst kopiert wird (anders kann S3 sie nicht ändern); dadurch wird seine ACL zurückgesetzt, sofern hier nicht auch eine ACL festgelegt ist. Archivierte Objekte (Glacier, Deep Archive) müssen zuerst wiederhergestellt werden.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Übernehmen</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Markieren Sie mindestens einen zu ändernden Abschnitt.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Ungültiger Metadatenschlüssel „%1“: Verwenden Sie Buchstaben, Ziffern, „-“, „_“ und „.“</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Orte und Verbindungen</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Persönlicher Ordner</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Wurzelverzeichnis</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Erneut versuchen</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Stopp</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>Suche anhalten (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>Neue Suche…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>Suchergebnisse schließen</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filter (Teilzeichenfolge oder Platzhalter * ?) – Esc zum Schließen</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>%1 kann nicht durchsucht werden</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>Suche fehlgeschlagen: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>Suchergebnisse: %1 in %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Unbekannte Adresse: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Ungültiger Ort: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>%1 kann nicht geöffnet werden: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>%1 von %2 ausgewählt, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n Ordner</numerusform>
            <numerusform>%n Ordner</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n Datei</numerusform>
            <numerusform>%n Dateien</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Stand %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Alle Versionen] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> – Suche läuft… (%1 durchsucht)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> – Suche nach %n Ergebnis angehalten</numerusform>
            <numerusform> – Suche nach %n Ergebnissen angehalten</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> – Suche angehalten</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> – %1 durchsucht</translation>
    </message>
    <message>
        <source> — compared: %1</source>
        <translation> – verglichen: %1</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> – wird geladen…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> – weitere Elemente verfügbar (nach unten scrollen)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Link freigeben – %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Herunterladen (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Hochladen / ersetzen (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Erlaubt:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>Minuten</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>Stunden</translation>
    </message>
    <message>
        <source>days</source>
        <translation>Tage</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Gültig für:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>URL &amp;kopieren</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>&amp;QR-Code anzeigen</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Vorsignierte URLs sind höchstens 7 Tage gültig; die Gültigkeitsdauer wurde verkürzt.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Läuft ab: %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Dies sind temporäre Anmeldedaten (Sitzungstoken, SSO oder übernommene Rolle): Die URL funktioniert nicht mehr, wenn sie ablaufen.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>Die Gültigkeitsdauer wurde entsprechend verkürzt.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Übernehmen</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Eigenschaften – %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadaten</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Speicher &amp;&amp; Verschlüsselung</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Berechtigungen</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objektsperre</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Prüfsummen</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Alle Header</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Schlüssel</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wert</translation>
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
        <translation>Benutzermetadaten (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 speichert Header mit dem Objekt: Beim Übernehmen wird das Objekt auf sich selbst kopiert. Seine ACL wird auf den Bucket-Standard zurückgesetzt; Tags bleiben erhalten.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bis zu 10 Tags; Schlüssel bis 128 und Werte bis 256 Zeichen.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Speicherklasse:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Verschlüsselung:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Kundenschlüssel (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Besitzer:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Berechtigter</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Berechtigung</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Durch vordefinierte ACL ersetzen:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Governance (mit besonderer Berechtigung aufhebbar)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Compliance (kann nicht verkürzt oder entfernt werden)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Aufbewahrungsmodus:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Aufbewahren bis:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Governance-Modus umgehen (erforderlich, um eine Governance-Aufbewahrung zu verkürzen oder zu entfernen)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Aufbewahrungspflicht (Legal Hold)</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algorithmus</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Gespeichert</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Lokale Datei</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Ergebnis</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Mit lokaler Datei vergleichen…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Wird geladen…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Das Objekt konnte nicht geladen werden: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Metadaten konnten nicht geladen werden: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Ort:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Datei</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Datei (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Ordner (Präfix)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Ordner</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Verbindung</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Größe:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Geändert:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Linkziel:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Berechtigungen:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Versteckt:</translation>
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
        <translation>Versions-ID:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Region:</translation>
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
        <translation>Tags sind nicht verfügbar: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Dieses Objekt ist archiviert; zum Ändern der Speicherklasse ist eine wiederhergestellte Kopie erforderlich.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Eine Änderung kopiert das Objekt auf sich selbst.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>ACLs sind für diesen Bucket deaktiviert (Objekteigentümerschaft: Bucket-Besitzer erzwungen). Verwenden Sie Bucket-Richtlinien, um Zugriff zu gewähren.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>Die ACL ist nicht verfügbar: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Objekteigentümerschaft: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Der Status der Objektsperre ist nicht verfügbar: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Die Objektsperre ist für diesen Bucket nicht aktiviert (sie kann nur beim Erstellen des Buckets aktiviert werden).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Aufbewahrt im Modus %1 bis %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Für diese Version ist keine Aufbewahrung festgelegt.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Wird übernommen…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Ungültiger Metadatenschlüssel „%1“: Verwenden Sie Buchstaben, Ziffern, „-“, „_“ und „.“</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Metadaten gespeichert.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Tags gespeichert.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Nichts geändert.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Speichereinstellungen gespeichert.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL auf %1 gesetzt.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Einstellungen der Objektsperre gespeichert.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Mit lokaler Datei vergleichen</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Prüfsummen von %1 werden berechnet…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Übereinstimmung</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>ABWEICHEND</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>Das Objekt hat keine vergleichbare Prüfsumme.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Die lokale Datei stimmt mit dem Objekt überein.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Die lokale Datei weicht vom Objekt ab.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Kundenschlüssel erfordern eine gespeicherte Verbindung.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Versionslisten werden hier nicht unterstützt</translation>
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
        <translation>Kein Anbieter</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Es kann kein temporäres Verzeichnis erstellt werden</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Große Datei</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>„%1“ ist %2 groß. In eine temporäre Datei herunterladen?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Ältere Versionen können nicht bearbeitet werden; stellen Sie die Version zuerst wieder her</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>%1 wird heruntergeladen…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>%1 kann nicht heruntergeladen werden</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Keine Anwendung zum Öffnen dieser Datei</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Keine Anwendung zum Bearbeiten dieser Datei</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Änderungen hochladen</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>„%1“ wurde geändert. Nach %2 hochladen?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Remote-Datei geändert</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 wurde seit dem Öffnen auf dem Server geändert. Mit Ihrer Version überschreiben?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>%1 kann nicht hochgeladen werden</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Aus Archiv wiederherstellen</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Fordern Sie eine temporäre, lesbare Kopie von %1 an. Das archivierte Objekt bleibt, wo es ist; die Kopie wird bis zu ihrem Ablauf zum Standardtarif des Buckets abgerechnet.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> Tag</numerusform>
            <numerusform> Tage</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Kopie behalten für:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Standard (Glacier: 3–5 Stunden, Deep Archive: innerhalb von 12 Stunden)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Massenabruf (am günstigsten; 5–12 Stunden, Deep Archive: innerhalb von 48 Stunden)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Beschleunigt (nur Glacier; 1–5 Minuten, am teuersten)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Abrufstufe:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Wiederherstellung anfordern</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Unbekannte Einstellung für Objekteigentümerschaft</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>JSON-Syntaxfehler in Zeile %1, Spalte %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Unbekanntes Feld „%1“ in %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versionsverwaltung</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Standardverschlüsselung</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Lebenszyklusregeln</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Bucket-Richtlinie</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Sperre des öffentlichen Zugriffs</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Statisches Website-Hosting</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Objektsperre</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Objekteigentümerschaft</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Bucket-Namen müssen 3 bis 63 Zeichen lang sein.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Bucket-Namen dürfen nur Kleinbuchstaben, Ziffern, Punkte und Bindestriche enthalten.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Bucket-Namen müssen mit einem Buchstaben oder einer Ziffer beginnen und enden.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Bucket-Namen dürfen keine zwei aufeinanderfolgenden Punkte enthalten.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Bucket-Namen dürfen nicht wie eine IP-Adresse aussehen.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Bucket-Namen dürfen nicht mit „%1“ beginnen (von AWS reserviert).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Bucket-Namen dürfen nicht mit „%1“ enden (von AWS reserviert).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Namen mit Punkten funktionieren nicht mit virtuell gehosteter HTTPS-Adressierung (das TLS-Zertifikat passt nicht) oder mit Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Regel-IDs dürfen höchstens 255 Zeichen haben.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Eine Regel benötigt mindestens eine Aktion: einen Übergang, einen Ablauf oder das Abbrechen unvollständiger Uploads.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>Die minimale Objektgröße muss kleiner als die maximale sein.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Tag-Schlüssel müssen 1 bis 128 Zeichen haben.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Tag-Werte dürfen höchstens 256 Zeichen haben.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Eine Regel, die nach Tags filtert, kann keine unvollständigen Uploads abbrechen (Uploads haben keine Tags).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Eine Regel, die nach Tags filtert, kann keine abgelaufenen Löschmarkierungen entfernen.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Objekte können frühestens nach 1 Tag ablaufen.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Wählen Sie für den Ablauf entweder eine Anzahl von Tagen oder ein Datum.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Das Entfernen abgelaufener Löschmarkierungen kann nicht mit dem Ablauf aktueller Versionen in derselben Regel kombiniert werden.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Unbekannte Speicherklasse für Übergang „%1“.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Zwei Übergänge zu %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Jeder Übergang benötigt eine Anzahl von Tagen oder ein Datum.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Objekte können frühestens nach 30 Tagen zu %1 wechseln.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Verwenden Sie für alle Übergänge und den Ablauf einer Regel entweder Tage oder Datumsangaben.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>Der Ablauf muss nach dem letzten Übergang liegen.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Zwei Übergänge nicht aktueller Versionen zu %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Nicht aktuelle Versionen können frühestens nach 1 Tag wechseln.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Die Anzahl der zu behaltenden neueren Versionen muss zwischen 1 und 100 liegen.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Nicht aktuelle Versionen können frühestens nach 1 Tag gelöscht werden.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Das Behalten neuerer nicht aktueller Versionen erfordert einen Ablauf für nicht aktuelle Versionen.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Unvollständige Uploads können frühestens nach 1 Tag abgebrochen werden.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>Präfix „%1“</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>Tag %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>größer als %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>kleiner als %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Gesamter Bucket</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>nach %2 T. zu %1</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>am %2 zu %1</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>Ablauf nach %1 T.</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>Ablauf am %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>abgelaufene Löschmarkierungen entfernen</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>nicht aktuelle nach %2 T. zu %1</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>nicht aktuelle nach %1 T. löschen (%2 behalten)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>nicht aktuelle nach %1 T. löschen</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>Uploads nach %1 T. abbrechen</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Ein Bucket kann höchstens 1000 Lebenszyklusregeln haben.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Regel %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Regel „%1“</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: Eine andere Regel hat dieselbe ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>der Konfiguration</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>Regel %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 ist kein Objekt</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status muss „Enabled“ oder „Disabled“ sein</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> (Filter)</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Eine CORS-Regel benötigt mindestens einen zulässigen Ursprung.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Eine CORS-Regel benötigt mindestens eine zulässige Methode.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Nicht unterstützte Methode „%1“ (verwenden Sie GET, PUT, POST, DELETE oder HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Ungültiger Ursprung „%1“: höchstens ein Platzhalter „*“.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Ungültiger Header „%1“: höchstens ein Platzhalter „*“.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>Das maximale Alter darf nicht negativ sein.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Ein Bucket kann höchstens 100 CORS-Regeln haben.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Regel %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Eine Richtlinie muss ein JSON-Objekt sein.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Keine „Version“: Fügen Sie &quot;Version&quot;: &quot;2012-10-17&quot; hinzu (ohne sie funktionieren Richtlinienvariablen nicht).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Unbekannte Richtlinienversion „%1“ (verwenden Sie „2012-10-17“).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>Version „2008-10-17“ ist veraltet; verwenden Sie „2012-10-17“.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>Die Richtlinie benötigt ein „Statement“ (ein Objekt oder ein Array von Objekten).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>Die Richtlinie hat keine Anweisungen.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>Anweisung %1 ist kein Objekt.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Anweisung %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Anweisung „%1“</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: Die Sid wird zweimal verwendet.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: „Effect“ muss „Allow“ oder „Deny“ sein.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: Bucket-Richtlinien benötigen einen „Principal“.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: „Action“ fehlt.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: „Resource“ fehlt.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: „%2“ ist keine S3-Aktion.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: „%2“ ist kein ARN einer S3-Ressource.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: „%2“ liegt nicht in diesem Bucket (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 gewährt jedem Zugriff (Principal „*“ ohne Bedingung).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Öffentlicher Lesezugriff (jeder kann Objekte herunterladen)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Anfragen ohne TLS ablehnen</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Schreibgeschützter Zugriff für ein anderes AWS-Konto</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Das Umleiten aller Anfragen kann nicht mit Dokumenten oder Routing-Regeln kombiniert werden.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Das Umleitungsprotokoll muss http oder https sein.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>Website-Hosting benötigt ein Indexdokument (oder eine Umleitung aller Anfragen).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Das Indexdokument darf kein „/“ enthalten (es ist ein Suffix, das an Ordneranfragen angehängt wird).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Jede Routing-Regel benötigt eine Umleitung.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Eine Routing-Regel kann den Schlüssel oder das Schlüsselpräfix ersetzen, nicht beides.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Routing-Regeln müssen ein JSON-Array sein.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>Routing-Regel %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>Der Aufbewahrungsmodus muss GOVERNANCE oder COMPLIANCE sein.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>Die Standardaufbewahrung erfordert, dass die Objektsperre für den Bucket aktiviert ist.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Legen Sie den Standardaufbewahrungszeitraum in Tagen oder in Jahren fest (eines davon).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>Der Standardaufbewahrungszeitraum darf höchstens 100 Jahre betragen.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Ein Bucket kann höchstens 50 Tags haben.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Authentifizierung fehlgeschlagen: Überprüfen Sie Zugriffsschlüssel und Geheimnis</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>Die Uhrzeit des Computers weicht zu stark von der Serverzeit ab</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>Das Objekt existiert nicht</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>Der Bucket existiert nicht</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>Der mehrteilige Upload existiert nicht</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>Das Objekt ist archiviert; fordern Sie eine Wiederherstellung an (S3 &gt; Aus Archiv wiederherstellen) und warten Sie, bis es verfügbar ist</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Zugriff verweigert</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Der Bucket existiert bereits</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>Der Bucket ist nicht leer</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>Der Dienst drosselt Anfragen; versuchen Sie es später erneut</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Netzwerkfehler: Der Endpunkt ist nicht erreichbar</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Zeitüberschreitung der Anfrage</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>Der Bucket befindet sich in einer anderen Region als der konfigurierten</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>Der Dienst unterstützt diesen Vorgang nicht</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Nicht gefunden</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>Die Anfrage wurde als ungültig abgelehnt</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>S3-Anfrage fehlgeschlagen</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>Unbekannte vordefinierte ACL: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Vorsignierte URLs gibt es nur für Objekte</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Die URL konnte nicht signiert werden (keine verwendbaren Anmeldedaten)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
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
        <translation>Kein S3-Ort</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Objekt oder Ordner nicht gefunden: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Das Erstellen von Buckets wird hier nicht unterstützt</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Der Bucket existiert bereits</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Existiert bereits: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Das Löschen von Buckets wird hier nicht unterstützt</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>%n Objekt konnte nicht gelöscht werden</numerusform>
            <numerusform>%n Objekte konnten nicht gelöscht werden</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 kennt kein Umbenennen; verwenden Sie Kopieren und Löschen</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Integritätsprüfung für %1 fehlgeschlagen</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Für Bucket %1 ist kein SSE-C-Schlüssel konfiguriert</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 weicht vom ETag %2 der Quelle ab</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>%1 Byte gespeichert, %2 erwartet</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Download unvollständig: %1 von %2 Byte</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 weicht vom ETag %2 ab</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>%1 kann nicht ersetzt werden</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>%1 kann nicht geschrieben werden</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Datei nicht gefunden: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Ist ein Verzeichnis: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Ungültiges Ziel: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>%1 kann nicht gelesen werden</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 weicht von der lokalen MD5 %2 ab</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Fehler beim Lesen von %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 weicht vom erwarteten %2 ab</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>In der Verbindungsliste nicht möglich</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Kein S3-Ort</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Unbekannte Verbindung</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>Für das AWS-Profil „%1“ konnten keine Anmeldedaten abgerufen werden. Wenn es AWS SSO (IAM Identity Center) verwendet, ist die Sitzung möglicherweise abgelaufen: Führen Sie „aws sso login“ aus und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>Keine AWS-Anmeldedaten in der Umgebung: Setzen Sie AWS_ACCESS_KEY_ID und AWS_SECRET_ACCESS_KEY, bevor Sie die Anwendung starten.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>Keine AWS-Anmeldedaten gefunden (Umgebung, ~/.aws-Profile, SSO, Web-Identität oder Instanz-Metadaten). Wenn Sie AWS SSO verwenden, führen Sie „aws sso login“ aus und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Für diese Verbindung ist kein geheimer Schlüssel gespeichert; bearbeiten Sie die Verbindung, um ihn einzugeben</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Verbunden: %n Bucket sichtbar</numerusform>
            <numerusform>Verbunden: %n Buckets sichtbar</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Verbunden (Auflisten von Buckets nicht erlaubt; %n angehefteter Bucket erreichbar)</numerusform>
            <numerusform>Verbunden (Auflisten von Buckets nicht erlaubt; %n angeheftete Buckets erreichbar)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Keine</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, von S3 verwaltete Schlüssel)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (AWS-KMS-Schlüssel)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (vom Kunden bereitgestellter Schlüssel)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Ein Objekt kann höchstens 10 Tags haben.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Tag-Schlüssel müssen 1 bis 128 Zeichen haben.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Tag-Werte dürfen höchstens 256 Zeichen haben.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Tag-Schlüssel dürfen nicht mit „aws:“ beginnen.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Nicht archiviert</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Archiviert; Wiederherstellung läuft</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Archiviert; wiederhergestellte Kopie verfügbar bis %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Archiviert; zum Lesen der Daten wiederherstellen</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Keine Version: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>%n Version konnte nicht gelöscht werden</numerusform>
            <numerusform>%n Versionen konnten nicht gelöscht werden</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 ist nicht gelöscht</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Keine Versionen von %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Unbekannte Abrufstufe: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Wiederherstellung für mindestens einen Tag</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>unter „%1“</translation>
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
        <translation>geändert nach %1</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>geändert vor %1</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>, </translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>Ungültiger regulärer Ausdruck an Position %1: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>Ungültiges Platzhaltermuster „%1“: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>Dateien suchen</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>Suchen in:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>z. B. *.log; bericht – leer: alles</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>Platzhalter: * beliebiger Text, ? ein Zeichen, [abc] eines dieser Zeichen. Mehrere Muster mit „;“ trennen. Text ohne Platzhalter wird an beliebiger Stelle im Namen gefunden.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Name:</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>Platzhalter</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>Regulärer Ausdruck</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>S&amp;yntax:</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>&amp;Groß-/Kleinschreibung beachten</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>Den vollständigen &amp;Pfad unterhalb des Suchordners vergleichen</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>„2024/*.csv“ mit „logs/2024/a.csv“ statt nur mit dem Namen vergleichen; * passt dann auch auf „/“</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>z. B. logs/2024- (optional)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>Nur Pfade unterhalb des Suchordners, die mit diesem Text beginnen, werden durchsucht. Bei S3 filtert der Server nach diesem Schlüsselpräfix – viel schneller, als alles aufzulisten.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>Pfad-P&amp;räfix:</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>z. B. 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>z. B. 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>Größe &amp;mindestens:</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>Größe hö&amp;chstens:</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>Geändert n&amp;ach:</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>Geändert &amp;vor:</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>Beliebig</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>Speicher&amp;klasse:</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>Dateien und Ordner</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>Nur Dateien</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>Nur Ordner</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>&amp;Einbeziehen:</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>Versteckte Dateien und Ordner einbe&amp;ziehen</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>Unbegrenzt</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>Ma&amp;ximale Trefferzahl:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Suchen</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>„%1“ ist keine Größe (Beispiele: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>Die Mindestgröße ist größer als die Höchstgröße.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>Das „Nach“-Datum liegt nach dem „Vor“-Datum.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>Ordner haben keine Größe, kein Datum und keine Speicherklasse: Suchen Sie nach Dateien, um diese Kriterien zu verwenden.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>Das Pfad-Präfix darf den Suchordner nicht verlassen.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Fehler im Schlüsselbund des Systems</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>Kein Geheimnis im Schlüsselbund des Systems gespeichert</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Geheimnis nicht gefunden</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Einstellungen</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Systemstandard (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Sprache:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Die neue Sprache wird nach einem Neustart von S3 File Manager verwendet.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Kundenschlüssel für Verschlüsselung (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>SSE-C-Objekte werden mit einem 256-Bit-Schlüssel verschlüsselt, den Sie aufbewahren. S3 speichert ihn nicht: &lt;b&gt;Geht der Schlüssel verloren, können die Objekte nicht gelesen werden&lt;/b&gt;. Der Schlüssel wird im Schlüsselbund des Systems aufbewahrt.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>Base64 (44 Zeichen) oder 64 Hexadezimalziffern</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Anzeigen</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Generieren</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Für jeden Bucket dieser Verbindung ohne eigenen Schlüssel verwenden</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Schlüssel entfernen</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Für Bucket %1 ist ein Schlüssel konfiguriert (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Für Bucket %1 ist kein Schlüssel konfiguriert.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>Der Schlüssel muss 32 Byte lang sein, als Base64 oder 64 Hexadezimalziffern.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Den Schlüssel für Bucket %1 entfernen? Damit verschlüsselte Objekte können ohne ihn nicht gelesen werden.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Optionen</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Nachfragen</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Überschreiben</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Überspringen</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Beide behalten (neue Datei umbenennen)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Überschreiben, wenn neuer</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Überschreiben, wenn die Größe abweicht</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Wenn eine Datei existiert:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>z. B. *.jpg; *.png (leer: alles)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Nur passende Dateien:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>z. B. *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Ausschließen:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Integrität nach der Übertragung überprüfen (Größe, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Änderungszeiten beibehalten</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Symbolischen Links folgen (sonst überspringen)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Verbindungsstandard</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>S3-Speicherklasse:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>S3-Verschlüsselung:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Übertragungen</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Anhalten</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Fortsetzen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Abbrechen</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Fehlgeschlagene wiederholen</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Nach oben</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Nach unten</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Entfernen</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Alle anhalten</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Alle fortsetzen</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Abgeschlossene entfernen</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Einstellungen…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 aktiv, %2 in Warteschlange</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 aktiv</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Übertragungsfehler</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>Anfrage-ID: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Übertragung abbrechen</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>„%1“ abbrechen? Teilweise übertragene Dateien werden verworfen.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Übertragung entfernen</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>„%1“ entfernen? Die Übertragung ist nicht abgeschlossen; Teildaten werden verworfen.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n Element</numerusform>
            <numerusform>%n Elemente</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>%1 nach %2 kopieren</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>%1 nach %2 verschieben</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 löschen</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Kein Anbieter für diesen Ort</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Quelle und Ziel sind identisch</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Ein Ordner kann nicht in sich selbst kopiert werden</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Kein freier Name gefunden</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Ein Ordner mit diesem Namen existiert bereits</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>In Warteschlange</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Angehalten</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Fertig, %n übersprungen</numerusform>
            <numerusform>Fertig, %n übersprungen</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Fertig</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Fehlgeschlagen</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Abgebrochen</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Wird gestartet</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Wird durchsucht</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Wird gelöscht</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Wird verschoben</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Wird kopiert</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Wird abgeschlossen</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n Fehler)</numerusform>
            <numerusform>(%n Fehler)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n Element</numerusform>
            <numerusform>%n Elemente</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n Datei</numerusform>
            <numerusform>%1 / %n Dateien</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Übertragung</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Fortschritt</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Geschwindigkeit</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Restzeit</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Übertragungseinstellungen</translation>
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
        <translation>Unbegrenzt</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Unterbrochene Übertragungen beim Start automatisch fortsetzen</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Gleichzeitige Übertragungen:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Parallele Dateien pro Übertragung:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Parallele Teile pro Datei:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Mehrteilig ab:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Teilgröße:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Bandbreitenbegrenzung:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Wiederholungen pro Datei:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Bei sehr großen Dateien wächst die Teilgröße automatisch (S3 erlaubt höchstens 10.000 Teile). Änderungen gelten für danach gestartete Übertragungen; die Bandbreitenbegrenzung gilt sofort.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Versionsverlauf – %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Geändert</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Größe</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Speicherklasse</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Zustand</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>Versions-ID</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Anzeigen</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Herunterladen…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>Als aktuelle &amp;wiederherstellen</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>&amp;Endgültig löschen…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>Löschen &amp;rückgängig machen</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Aufbewahrung im Governance-Modus beim Löschen umgehen</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Aktualisieren</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Versionen werden geladen…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Löschmarkierung (Objekt gelöscht)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Löschmarkierung</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Aktuell</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Vorherige</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Keine Versionen gefunden.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n Version oder Löschmarkierung.</numerusform>
            <numerusform>%n Versionen und Löschmarkierungen.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Wird bearbeitet…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Version herunterladen</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>%1 gespeichert</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>Die ausgewählte Version ist wieder die aktuelle Version.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Versionen löschen</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>%n Version endgültig löschen? Dies kann nicht rückgängig gemacht werden.</numerusform>
            <numerusform>%n Versionen endgültig löschen? Dies kann nicht rückgängig gemacht werden.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>%n Version gelöscht.</numerusform>
            <numerusform>%n Versionen gelöscht.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>Das Objekt ist wieder da.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Anzeigen – %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> – die ersten %1 werden angezeigt</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> – binär (%1), die ersten %2 als Hex angezeigt</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>In Standardanwendung öffnen</translation>
    </message>
</context>
</TS>
