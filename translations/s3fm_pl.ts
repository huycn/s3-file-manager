<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl" sourcelanguage="en">
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
        <translation>Komputer</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Dozwolone źródła</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Metody</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Dozwolone nagłówki</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Udostępniane nagłówki</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Maks. wiek (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>&amp;Dodaj regułę</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Usuń regułę</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Reguły</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Kilka wartości należy rozdzielić przecinkami. Metody: GET, PUT, POST, DELETE, HEAD. Dozwolony jest jeden symbol wieloznaczny „*” na źródło lub nagłówek.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Usunięto konfigurację CORS</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Zapisano reguły CORS</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (klucze zarządzane przez S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (klucz AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (dwuwarstwowe, klucz AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>Domyślne &amp;szyfrowanie:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>identyfikator klucza, ARN lub alias (puste: klucz zarządzany aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>&amp;Klucz KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>&amp;Użyj klucza zasobnika S3 (mniej żądań KMS, niższy koszt)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Dotyczy obiektów zapisywanych od teraz, które nie żądają własnego szyfrowania. Istniejące obiekty zachowują swoje szyfrowanie (aby je zmienić, należy je przepisać za pomocą funkcji Edytuj obiekty). Jeśli nic nie ustawiono, AWS szyfruje za pomocą SSE-S3.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Zapisano szyfrowanie domyślne</translation>
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
        <translation>Stan</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Dotyczy</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Akcje</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Dodaj…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Edytuj…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>Włącz/wy&amp;łącz</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Reguły</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Reguły są wykonywane raz dziennie. JSON używa formatu &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. Usługi zgodne z S3 mogą ignorować nieobsługiwane akcje (MinIO wymaga zdalnych warstw do przenoszenia).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(wygenerowany)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Włączona</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Wyłączona</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Reguła została zmieniona; przycisk Zastosuj zapisuje reguły w zasobniku.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Usunięto konfigurację cyklu życia</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Zapisano reguły cyklu życia</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Włącz blokadę obiektów…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Zarządzanie (użytkownicy ze specjalnym uprawnieniem mogą ją usunąć)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Zgodność (nikt nie może jej usunąć, nawet konto główne)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>Domyślne &amp;przechowywanie:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>dni</translation>
    </message>
    <message>
        <source>years</source>
        <translation>lata</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Okres:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Nowe wersje obiektów otrzymują domyślne przechowywanie, chyba że przekazywanie ustawia własne. Przechowywanych wersji nie można usunąć ani zastąpić do końca okresu.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Włącz blokadę obiektów</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Włączyć blokadę obiektów w zasobniku %1? Tej operacji nie można cofnąć, a wersjonowanie pozostanie włączone na stałe. (Niektóre usługi pozwalają na to tylko przy tworzeniu zasobnika).</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Włączono blokadę obiektów</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n dzień</numerusform>
            <numerusform>%n dni</numerusform>
            <numerusform>%n dni</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n rok</numerusform>
            <numerusform>%n lata</numerusform>
            <numerusform>%n lat</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blokada obiektów</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Przechowywania w trybie zgodności nikt nie może skrócić ani usunąć. Nowych wersji nie będzie można usunąć przez okres: %1. Kontynuować?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Zapisano domyślne przechowywanie</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Blokada obiektów jest włączona w tym zasobniku.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Blokada obiektów nie jest włączona w tym zasobniku.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Region</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Utworzono</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Właściciel</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Wymuszony właściciel zasobnika (listy ACL wyłączone)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Preferowany właściciel zasobnika</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Zapisujący obiekt</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Własność obiektów</translation>
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
        <translation>&amp;Szablony</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Zasady zasobnika</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Zastąpić bieżący tekst szablonem?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Formatuj</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Brak zasad zasobnika. Wybierz szablon lub wklej dokument zasad.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Usuń zasady…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Nie można sformatować: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Brak zasad.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Nie znaleziono problemów.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Usunąć zasady zasobnika %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Usunięto zasady zasobnika</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Najpierw popraw błędy w zasadach: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Te zasady przyznają dostęp wszystkim użytkownikom internetu. Zastosować je mimo to?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Zapisano zasady zasobnika</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Właściwości zasobnika — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Przegląd</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Wersjonowanie</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Szyfrowanie</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Cykl życia</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Zasady</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Dostęp publiczny</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tagi</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Witryna</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blokada obiektów</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Statystyki</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: nieobsługiwane przez ten punkt końcowy</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Blokuj &amp;cały dostęp publiczny</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Blokuj dostęp publiczny przyznawany przez nowe listy ACL</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Ignoruj dostęp publiczny przyznawany przez dowolne listy ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Blokuj dostęp publiczny przyznawany przez nowe zasady zasobnika</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Ogranicz dostęp do zasobników z zasadami publicznymi do usług AWS i konta właściciela</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Ustawienia na poziomie konta również obowiązują i mają pierwszeństwo przed tymi. Wyłączenie blokad samo w sobie niczego nie upublicznia.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Dostęp publiczny</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Zezwolić na ustawienia dostępu publicznego w zasobniku %1? Obiekty mogą wtedy stać się publiczne przez listy ACL lub zasady zasobnika.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Zapisano ustawienia dostępu publicznego</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Prefiks klucza:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(cały zasobnik)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Oblicz</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategoria</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Obiekty</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Liczone przez wyświetlenie każdej wersji obiektu (jedno żądanie na 1000 kluczy), co w dużych zasobnikach trwa dość długo. Dla zasobników z milionami obiektów szybsze są S3 Storage Lens lub metryki CloudWatch BucketSizeBytes/NumberOfObjects (aktualizowane codziennie).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Liczenie…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>Bajty: %1</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Bieżące obiekty</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Wersje nieaktualne</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Znaczniki usunięcia</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Wszystkie wersje</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Niekompletne przekazywania wieloczęściowe</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Gotowe.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Anulowano: wyniki częściowe.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Stosowanie…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Liczenie… elementy: %L1</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Klucz</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Do 50 tagów; używane do alokacji kosztów i kontroli dostępu. Tagi obiektów są osobne (Edytuj obiekty).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Zapisano tagi</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Wersjonowanie:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Usuwanie MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Przy włączonym wersjonowaniu zastąpienie lub usunięcie obiektu zachowuje stare dane jako wersję nieaktualną (płatną jak magazyn). Po włączeniu wersjonowania nie można go wyłączyć, tylko zawiesić: istniejące wersje pozostają. Usuwanie MFA może zmienić tylko konto główne przez API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Włącz wersjonowanie</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>&amp;Zawieś wersjonowanie</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Włączono wersjonowanie</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Zawieś wersjonowanie</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Zawiesić wersjonowanie w zasobniku %1? Nowe zapisy będą ponownie zastępować obiekty; istniejące wersje zostaną zachowane.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Zawieszono wersjonowanie</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Wyłączone (nigdy niewłączone)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Włączone</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Zawieszone</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Wyłączone</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Włącz hosting statycznej &amp;witryny</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>&amp;Hostuj witrynę</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>Dokument &amp;indeksu:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>opcjonalnie, np. error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Dokument &amp;błędu:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Opcjonalne reguły przekierowania (tablica JSON), np.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>&amp;Reguły routingu:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>&amp;Przekieruj wszystkie żądania do innego hosta</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>np. www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>&amp;Nazwa hosta:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Taki sam jak w żądaniu</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>Pr&amp;otokół:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Punkty końcowe witryny udostępniają obiekty tylko przez zwykły HTTP i tylko obiekty publicznie odczytywalne (zasady zasobnika, blokowanie dostępu publicznego).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Zastosuj</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Punkt końcowy witryny: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Zapisano konfigurację witryny</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Wyłączono hosting witryny</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Plik już istnieje</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; już istnieje w miejscu docelowym. Zastąpić?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Nowy:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Istniejący:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Nowy plik jest nowszy.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Istniejący plik jest nowszy lub tak samo stary.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Oba mają ten sam rozmiar.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Rozmiary są różne.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Zastosuj do wszystkich pozostałych konfliktów tego transferu</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>Za&amp;stąp</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>&amp;Pomiń</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>Zachowaj &amp;oba</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Kopiuj pod nową nazwą, np. „nazwa (2).ext”</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Jeśli &amp;nowszy</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Zastąp tylko, jeśli nowy plik jest nowszy, w przeciwnym razie pomiń</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Jeśli &amp;rozmiar się różni</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Zastąp tylko, jeśli rozmiary się różnią, w przeciwnym razie pomiń</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Anuluj transfer</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Połączenia</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplikuj</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Importuj profile AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Utwórz połączenia dla profili w %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Połączenie</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Używany w adresach, np. s3://&lt;id&gt;/bucket/key. Nie można go zmienić po zapisaniu.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Dostawca:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Pozostaw puste dla Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>Adres URL &amp;punktu końcowego:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Region:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatycznie</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Wirtualnie hostowane (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Styl ścieżki (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>&amp;Adresowanie:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Poświadczenia</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Klucz dostępu i klucz tajny</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Profil AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Zmienne środowiskowe</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Domyślny łańcuch poświadczeń AWS</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anonimowo (zasobniki publiczne)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>Identyfikator klucza dostępu:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Pokaż</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Tajny klucz dostępu:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Opcjonalnie (poświadczenia tymczasowe)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Token sesji:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Dane tajne są przechowywane w systemowym magazynie kluczy, nigdy w plikach ustawień.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profil:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Obsługuje profile z kluczami statycznymi, SSO, przyjmowaniem roli (role_arn / source_profile) i credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Zaawansowane</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Weryfikuj certyfikaty TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Certyfikaty systemowe</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Przeglądaj…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Pakiet CA</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Certyfikaty (*.pem *.crt);;Wszystkie pliki (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Pakiet CA:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Gdy obsługiwane (domyślnie w AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Tylko gdy wymagane (najlepsza zgodność)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Niektóre usługi zgodne z S3 odrzucają nowsze nagłówki sum kontrolnych integralności.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Sumy kontrolne żądań:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Domyślna zasobnika</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Klasa magazynu przekazywania:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Zasobniki wyświetlane nawet wtedy, gdy poświadczenia nie pozwalają na listowanie zasobników.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Przypięte zasobniki:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b lub * dla wszystkich</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Zasobniki z płatnościami po stronie żądającego: żądania do nich są obciążane na Twoje konto (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Płatności po stronie żądającego:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Limit czasu żądania:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>&amp;Testuj połączenie</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Otwórz</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Zapisany w magazynie kluczy — pozostaw puste, aby zachować</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Nowe połączenie %1</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (kopia)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Usuń połączenie</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Usunąć połączenie „%1” i zapisane dla niego dane tajne?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Importuj profile AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Nie znaleziono profili w %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Wszystkie profile AWS zostały już zaimportowane.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Używa zmiennych AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY i AWS_SESSION_TOKEN ze środowiska, w którym uruchomiono aplikację.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Próbuje zmiennych środowiskowych, profilu domyślnego, SSO, tożsamości sieci Web oraz poświadczeń kontenera/instancji, w standardowej kolejności AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Żądania nie są podpisywane. Dostępne są tylko publiczne zasobniki i obiekty.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Zapisz połączenie</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Połączenie o ID „%1” już istnieje.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Wprowadź tajny klucz dostępu.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Testowanie…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Niezapisane zmiany</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Zapisać zmiany w „%1”?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Połączenia *</translation>
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
        <translation>Inna usługa zgodna z S3</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Wprowadź nazwę połączenia.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>ID może zawierać tylko małe litery, cyfry oraz znaki „.”, „-” i „_”.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>Punkt końcowy musi być adresem URL http:// lub https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Zastąp symbol zastępczy w adresie URL punktu końcowego.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Wprowadź adres URL punktu końcowego usługi zgodnej z S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Wprowadź region (na przykład us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Wprowadź identyfikator klucza dostępu.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Wybierz profil AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Nie można zapisać pliku ustawień</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Nowy zasobnik</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>małe litery, cyfry, kropki i łączniki</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>domyślny punktu końcowego</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Region:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Domyślnie (wymuszony właściciel zasobnika: listy ACL wyłączone)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Preferowany właściciel zasobnika (listy ACL włączone)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Zapisujący obiekt (listy ACL włączone)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Własność obiektów:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>Predefiniowana lista &amp;ACL:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Włącz &amp;blokadę obiektów (włącza wersjonowanie; nie można jej wyłączyć)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Nowe zasobniki AWS domyślnie blokują dostęp publiczny; publiczne listy ACL nie zadziałają, dopóki blokada dostępu publicznego nie zostanie złagodzona.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Utwórz</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Wprowadź nazwę zasobnika.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Usuń zasobnik</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Trwale usunąć pusty zasobnik &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>obiekty</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>wersje obiektów lub znaczniki usunięcia</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>niekompletne przekazywania wieloczęściowe</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>Zasobnik &lt;b&gt;%1&lt;/b&gt; nie jest pusty, zawiera: %2.&lt;br&gt;&lt;br&gt;Aby go usunąć, najpierw zostaną usunięte wszystkie obiekty, wszystkie wersje i wszystkie niekompletne przekazywania. &lt;b&gt;Tej operacji nie można cofnąć.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Opróżnij zasobnik, a następnie go usuń</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>&amp;Pomiń przechowywanie w trybie zarządzania (wymaga s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Wpisz nazwę zasobnika, aby potwierdzić:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Opróżnij i usuń</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Bez zmian / domyślne zasobnika</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>Identyfikator klucza KMS, ARN lub alias (puste: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Brak dostawcy dla %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Zasobnik</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Połączenie</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Folder</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>Plik %1</translation>
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
        <translation>Znacznik usunięcia (usunięty)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Znacznik usunięcia</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (bieżąca)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Zmodyfikowano</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Klasa magazynu</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Operacja anulowana</translation>
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
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> dni</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>bajty (puste: bez limitu)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Reguła cyklu życia</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>opcjonalnie; S3 wygeneruje identyfikator</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Włączona</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;ID reguły:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filtr</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>&amp;Bieżące wersje</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>Wersje &amp;nieaktualne &amp;&amp; przekazywania</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>Reguła dotyczy obiektów spełniających wszystkie poniższe warunki; bez warunków dotyczy całego zasobnika.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>np. logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Prefiks klucza:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Większe niż:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Mniejsze niż:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Tagi obiektów:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Przenieś do klasy magazynu</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Po (dni lub RRRR-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Przeniesienia:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nigdy</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Po upływie</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>W dniu</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Wygaś (usuń) obiekty:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Usuń wygasłe znaczniki usunięcia (znaczniki bez wersji nieaktualnych)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;W zasobniku z wersjonowaniem wygaśnięcie bieżącej wersji dodaje znacznik usunięcia; dane pozostają jako wersja nieaktualna.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Dni od stania się nieaktualną</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Zachowaj najnowsze (opcjonalnie)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Usuń po</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>zachowując najnowsze</translation>
    </message>
    <message>
        <source>none</source>
        <translation>brak</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Wersje nieaktualne:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Przerwij niekompletne przekazywania wieloczęściowe po</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Przekazywania:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>Nie ma takiego pliku ani katalogu: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>odmowa dostępu</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>To nie jest lokalizacja lokalna</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>To nie jest katalog: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Odmowa dostępu: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Nieprawidłowy katalog</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Już istnieje: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Nie można utworzyć katalogu %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Odmowa usunięcia katalogu głównego systemu plików</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: nie znaleziono</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… i %1 więcej</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>Nie udało się usunąć %n elementu</numerusform>
            <numerusform>Nie udało się usunąć %n elementów</numerusform>
            <numerusform>Nie udało się usunąć %n elementów</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Nie można przenieść %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Nie można bezpośrednio przenieść katalogu między systemami plików</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>To jest katalog: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Nie można odczytać %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Nie można zapisać %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Błąd odczytu %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Błąd zapisu %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Kontrola integralności nie powiodła się dla %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>Zapisano bajtów: %1, oczekiwano: %2</translation>
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
        <translation>Przekazano %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Podgląd</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Edytuj</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Kopiuj…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>P&amp;rzenieś…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>&amp;Zmień nazwę…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>&amp;Nowy folder…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Usuń…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>Us&amp;tawienia…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>Zakoń&amp;cz</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Kopiuj &amp;lokalizację</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>Kopiuj URI &amp;S3</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Kopiuj adres URL &amp;HTTP</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Kopiuj &amp;ARN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Właściwości</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Edytuj &amp;metadane, tagi, magazyn…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>U&amp;dostępnij link (wstępnie podpisany adres URL)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Pokaż &amp;wersje</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Przeglądaj stan &amp;na dzień…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>&amp;Historia wersji…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>P&amp;rzywróć z archiwum…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>N&amp;iekompletne przekazywania wieloczęściowe…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Nowy &amp;zasobnik…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>Właściwości z&amp;asobnika…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Zaznacz &amp;wszystko</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Odznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>O&amp;dwróć zaznaczenie</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>Szybki &amp;filtr…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>Znajdź pl&amp;iki…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>&amp;Otwórz folder zawierający</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Odśwież</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Pokaż &amp;ukryte pliki</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>Zamień &amp;panele</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Otwórz w &amp;drugim panelu</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Wstecz</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Dalej</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Folder domowy</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Katalog główny</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>Edytuj &amp;adres</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Miejsca &amp;lewego panelu…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Miejsca &amp;prawego panelu…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Zarządzaj połączeniami…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>Pokaż &amp;transfery</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>&amp;Wstrzymaj wszystkie</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>Wz&amp;nów wszystkie</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>Wy&amp;czyść zakończone</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Ustawienia transferów…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Skróty klawiaturowe</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;O programie</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Zaznacz</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Widok</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>Prz&amp;ejdź</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Transfery</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>P&amp;ołączenia</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Pomo&amp;c</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Folder domowy</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Katalog główny (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Połączenia S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Wszystkie połączenia</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Tak samo jak drugi panel</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>Znajdź pliki</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>Otwórz zasobnik, aby w nim wyszukać.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>Otwórz dysk, aby w nim wyszukać.</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>Skopiowano %n lokalizację do schowka</numerusform>
            <numerusform>Skopiowano %n lokalizacje do schowka</numerusform>
            <numerusform>Skopiowano %n lokalizacji do schowka</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>W kolejce: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Wznawianie %n przerwanego transferu</numerusform>
            <numerusform>Wznawianie %n przerwanych transferów</numerusform>
            <numerusform>Wznawianie %n przerwanych transferów</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>Przywrócono %n przerwany transfer; można go wznowić w panelu Transfery</numerusform>
            <numerusform>Przywrócono %n przerwane transfery; można je wznowić w panelu Transfery</numerusform>
            <numerusform>Przywrócono %n przerwanych transferów; można je wznowić w panelu Transfery</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Gotowe: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n błąd</numerusform>
            <numerusform>%1: %n błędy</numerusform>
            <numerusform>%1: %n błędów</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Anulowano: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>Nowy język zostanie użyty po ponownym uruchomieniu programu S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Nie można kopiować znaczników usunięcia.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Wersji nie można przenosić ani zmieniać ich nazw; można je skopiować lub użyć historii wersji.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Foldery zostałyby skopiowane z bieżącą zawartością. Aby skopiować foldery, opuść widok stanu na dzień albo zaznacz pliki.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Widok wersji</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n element</numerusform>
            <numerusform>%n elementy</numerusform>
            <numerusform>%n elementów</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Przenieś %1 do:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Kopiuj %1 do:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 nie obsługuje zmiany nazwy: obiekty są kopiowane, a następnie oryginały są usuwane.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Przenieś</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Kopiuj</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Nieprawidłowe miejsce docelowe: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Zmień nazwę</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Nowa nazwa:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>Nazwa nie może zawierać separatorów ścieżki.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>W wynikach wyszukiwania nie można tworzyć folderów</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Nie można tutaj tworzyć folderów</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nowy folder</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Nazwa folderu (użyj / dla folderów zagnieżdżonych):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Nieprawidłowa nazwa folderu: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>W widoku wersji można usuwać tylko wersje. Aby usunąć foldery, opuść ten widok.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Usuń zasobnik</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Zasobniki należy usuwać pojedynczo.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Tych elementów nie można tutaj usunąć</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Trwale usunąć folder „%1” i całą jego zawartość?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>Trwale usunąć „%1”?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>Trwale usunąć %n zaznaczony element?</numerusform>
            <numerusform>Trwale usunąć %n zaznaczone elementy?</numerusform>
            <numerusform>Trwale usunąć %n zaznaczonych elementów?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Brak aplikacji do otwarcia %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Znacznik usunięcia nie ma zawartości</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Zaznacz obiekty lub foldery S3 do edycji</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n zaznaczony element</numerusform>
            <numerusform>%n zaznaczone elementy</numerusform>
            <numerusform>%n zaznaczonych elementów</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Aktualizowanie obiektów…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Anulowano po %n obiekcie</numerusform>
            <numerusform>Anulowano po %n obiektach</numerusform>
            <numerusform>Anulowano po %n obiektach</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>Zaktualizowano %n obiekt</numerusform>
            <numerusform>Zaktualizowano %n obiekty</numerusform>
            <numerusform>Zaktualizowano %n obiektów</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Edytuj obiekty</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Zaktualizowano: %1 z %n obiektu; niepowodzenia: %2.</numerusform>
            <numerusform>Zaktualizowano: %1 z %n obiektów; niepowodzenia: %2.</numerusform>
            <numerusform>Zaktualizowano: %1 z %n obiektów; niepowodzenia: %2.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>Najpierw zamknij wyniki wyszukiwania</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Wersje można wyświetlać wewnątrz zasobników S3</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Wersjonowanie nigdy nie zostało włączone w zasobniku %1: każdy obiekt ma jedną wersję</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Wersjonowanie w zasobniku %1 jest zawieszone</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>Przeglądanie stanu na dzień działa wewnątrz zasobników S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Przeglądaj stan na dzień</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Pokaż ten zasobnik w stanie z wybranej chwili, odtworzonym z historii wersji (tylko zasobniki z wersjonowaniem).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Data i godzina:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Wróć do bieżącego</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Zaznacz obiekt S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Usuń wersje</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Trwale usunąć %n wersję? Tej operacji nie można cofnąć.</numerusform>
            <numerusform>Trwale usunąć %n wersje? Tej operacji nie można cofnąć.</numerusform>
            <numerusform>Trwale usunąć %n wersji? Tej operacji nie można cofnąć.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>Usunięto %n wersję</numerusform>
            <numerusform>Usunięto %n wersje</numerusform>
            <numerusform>Usunięto %n wersji</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Zaznacz zarchiwizowane obiekty lub foldery S3</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Żądanie przywrócenia…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Zażądano przywrócenia %n obiektu</numerusform>
            <numerusform>Zażądano przywrócenia %n obiektów</numerusform>
            <numerusform>Zażądano przywrócenia %n obiektów</numerusform>
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
            <numerusform>%n obiekt niezarchiwizowany, już przywrócony lub w trakcie przywracania</numerusform>
            <numerusform>%n obiekty niezarchiwizowane, już przywrócone lub w trakcie przywracania</numerusform>
            <numerusform>%n obiektów niezarchiwizowanych, już przywróconych lub w trakcie przywracania</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Przywróć z archiwum</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n niepowodzenie.</numerusform>
            <numerusform>%n niepowodzenia.</numerusform>
            <numerusform>%n niepowodzeń.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Najpierw otwórz zasobnik S3</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Najpierw otwórz połączenie S3</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Tworzenie zasobnika %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Nowy zasobnik</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Nie można utworzyć %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Utworzono zasobnik %1</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Zaznacz lub otwórz zasobnik</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Sprawdzanie zawartości zasobnika %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Usuwanie zawartości zasobnika %1…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>Usunięto %Ln element…</numerusform>
            <numerusform>Usunięto %Ln elementy…</numerusform>
            <numerusform>Usunięto %Ln elementów…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Usunięto zasobnik %1</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Anulowano; usunięto już %n element</numerusform>
            <numerusform>Anulowano; usunięto już %n elementy</numerusform>
            <numerusform>Anulowano; usunięto już %n elementów</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Nie można usunąć zasobnika %1.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>Przed błędem: %1, %2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>usunięto %n element</numerusform>
            <numerusform>usunięto %n elementy</numerusform>
            <numerusform>usunięto %n elementów</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>przerwano %n przekazywanie</numerusform>
            <numerusform>przerwano %n przekazywania</numerusform>
            <numerusform>przerwano %n przekazywań</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>Nie udało się usunąć %n elementu (przechowywanie, blokada prawna lub uprawnienia).</numerusform>
            <numerusform>Nie udało się usunąć %n elementów (przechowywanie, blokada prawna lub uprawnienia).</numerusform>
            <numerusform>Nie udało się usunąć %n elementów (przechowywanie, blokada prawna lub uprawnienia).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Zaznacz obiekt S3 do udostępnienia</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Otwórz w aplikacji domyślnej</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Ustaw tę wersję jako bieżącą</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Przywróć wersję</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Cofnij usunięcie</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Nic do skopiowania</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>Skopiowano %n wiersz do schowka</numerusform>
            <numerusform>Skopiowano %n wiersze do schowka</numerusform>
            <numerusform>Skopiowano %n wierszy do schowka</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Przełącz panel</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Otwórz / folder nadrzędny</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Spacja</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Przełącz zaznaczenie (i przejdź w dół) / przełącz zaznaczenie</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+strzałki</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Rozszerz zaznaczenie</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Wpisywanie liter</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Przejdź do nazwy</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Skróty klawiaturowe</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>O programie S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dwupanelowy menedżer plików dla Amazon S3 i magazynów zgodnych z S3.&lt;/p&gt;&lt;p&gt;Zbudowany przy użyciu Qt %2 i AWS SDK for C++.&lt;/p&gt;&lt;p&gt;Licencja MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Niezapisane zdalne zmiany</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Niektóre edytowane pliki mają zmiany, które nie zostały przekazane. Zakończyć mimo to?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n transfer nadal trwa. Zakończyć i kontynuować go następnym razem?</numerusform>
            <numerusform>%n transfery nadal trwają. Zakończyć i kontynuować je następnym razem?</numerusform>
            <numerusform>%n transferów nadal trwa. Zakończyć i kontynuować je następnym razem?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n transfer nadal trwa. Zakończyć i porzucić go?</numerusform>
            <numerusform>%n transfery nadal trwają. Zakończyć i porzucić je?</numerusform>
            <numerusform>%n transferów nadal trwa. Zakończyć i porzucić je?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Trwające transfery</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n minuta</numerusform>
            <numerusform>%n minuty</numerusform>
            <numerusform>%n minut</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n godzina</numerusform>
            <numerusform>%n godziny</numerusform>
            <numerusform>%n godzin</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n dzień</numerusform>
            <numerusform>%n dni</numerusform>
            <numerusform>%n dni</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Niekompletne przekazywania wieloczęściowe — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Przerwane przekazywania zachowują swoje części (i ich koszt przechowywania), dopóki nie zostaną ukończone lub przerwane. Reguła cyklu życia zasobnika może przerywać je automatycznie.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Prefiks klucza:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(cały zasobnik)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Odśwież</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Klucz</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Rozpoczęto</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Wiek</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Części</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Klasa magazynu</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Przerwij &amp;zaznaczone…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Przerwij &amp;wszystkie…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID przekazywania: %1
Rozpoczęte przez: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Brak niekompletnych przekazywań. (Niektóre usługi zgodne z S3 wyświetlają przekazywania tylko dla dokładnego klucza obiektu: wprowadź go jako prefiks).</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n niekompletne przekazywanie, zajęte miejsce: %1.</numerusform>
            <numerusform>%n niekompletne przekazywania, zajęte miejsce: %1.</numerusform>
            <numerusform>%n niekompletnych przekazywań, zajęte miejsce: %1.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Ładowanie…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Przerwij przekazywania</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>Przerwać %n przekazywanie? Jego przekazane części zostaną usunięte.</numerusform>
            <numerusform>Przerwać %n przekazywania? Ich przekazane części zostaną usunięte.</numerusform>
            <numerusform>Przerwać %n przekazywań? Ich przekazane części zostaną usunięte.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Przerywanie…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Edytuj obiekty</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Zmiana: %1. Stosowane są tylko zaznaczone sekcje; foldery obejmują całą swoją zawartość.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Nagłówki i metadane</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(bez zmian)</translation>
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
        <translation>Ustaw metadane użytkownika:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Klucz</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Zastąp wszystkie metadane użytkownika (w przeciwnym razie scal)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>klucz-a, klucz-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Usuń klucze:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Klasa magazynu</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Szyfrowanie</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Tagi (zastąp zestaw tagów)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Kontrola dostępu (predefiniowana lista ACL)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Nagłówki, klasa magazynu i szyfrowanie są zmieniane przez skopiowanie każdego obiektu na siebie (S3 nie pozwala zmienić ich inaczej); resetuje to jego listę ACL, chyba że lista ACL zostanie również ustawiona tutaj. Zarchiwizowane obiekty (Glacier, Deep Archive) należy najpierw przywrócić.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Zaznacz co najmniej jedną sekcję do zmiany.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Nieprawidłowy klucz metadanych „%1”: użyj liter, cyfr oraz znaków „-”, „_” i „.”</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Miejsca i połączenia</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Folder domowy</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Katalog główny</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Ponów</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Zatrzymaj</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>Zatrzymaj wyszukiwanie (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>Nowe wyszukiwanie…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>Zamknij wyniki wyszukiwania</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filtr (fragment tekstu lub symbole wieloznaczne * ?) — Esc, aby zamknąć</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>Nie można przeszukać %1</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>Wyszukiwanie nie powiodło się: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>Wyniki wyszukiwania: %1 w %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Nieznany adres: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Nieprawidłowa lokalizacja: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Nie można otworzyć %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>Zaznaczono %1 z %2, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n folder</numerusform>
            <numerusform>%n foldery</numerusform>
            <numerusform>%n folderów</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n plik</numerusform>
            <numerusform>%n pliki</numerusform>
            <numerusform>%n plików</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Stan na %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Wszystkie wersje] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — wyszukiwanie… (sprawdzono: %1)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — wyszukiwanie zatrzymane po %n wyniku</numerusform>
            <numerusform> — wyszukiwanie zatrzymane po %n wynikach</numerusform>
            <numerusform> — wyszukiwanie zatrzymane po %n wynikach</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — wyszukiwanie zatrzymane</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — sprawdzono: %1</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — ładowanie…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — dostępnych jest więcej elementów (przewiń w dół)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Udostępnij link — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Pobieranie (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Przekazywanie / zastępowanie (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Zezwala na:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>minuty</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>godziny</translation>
    </message>
    <message>
        <source>days</source>
        <translation>dni</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Ważny przez:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>&amp;Kopiuj adres URL</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>Pokaż kod &amp;QR</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Wstępnie podpisane adresy URL są ważne maksymalnie 7 dni; czas ważności został skrócony.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Wygasa: %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>To są poświadczenia tymczasowe (token sesji, SSO lub przyjęta rola): adres URL przestanie działać po ich wygaśnięciu.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>Czas ważności został skrócony, aby był z nimi zgodny.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Zastosuj</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Właściwości — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadane</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tagi</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Magazyn &amp;&amp; szyfrowanie</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Uprawnienia</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blokada obiektów</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Sumy kontrolne</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Wszystkie nagłówki</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Klucz</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
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
        <translation>Metadane użytkownika (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 przechowuje nagłówki razem z obiektem: zastosowanie zmian kopiuje obiekt na siebie. Jego lista ACL zostaje zresetowana do domyślnej zasobnika; tagi są zachowywane.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Do 10 tagów; klucze do 128 znaków, wartości do 256 znaków.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Klasa magazynu:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Szyfrowanie:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Klucz klienta (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Właściciel:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Uprawniony</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Uprawnienie</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Zastąp predefiniowaną listą ACL:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Zarządzanie (może zostać zniesione przy specjalnym uprawnieniu)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Zgodność (nie można skrócić ani usunąć)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Tryb przechowywania:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Przechowuj do:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Pomiń tryb zarządzania (wymagane do skrócenia lub usunięcia przechowywania w trybie zarządzania)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Blokada prawna</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algorytm</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Zapisana</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Plik lokalny</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Wynik</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Porównaj z plikiem lokalnym…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Ładowanie…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Nie można załadować obiektu: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Nie można załadować metadanych: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Lokalizacja:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Plik (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Folder (prefiks)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Folder</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Zasobnik</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Połączenie</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Rozmiar:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Zmodyfikowano:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Cel łącza:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Uprawnienia:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Ukryty:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Tak</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID wersji:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Region:</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>URI S3:</translation>
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
        <translation>Tagi są niedostępne: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Ten obiekt jest zarchiwizowany; zmiana jego klasy magazynu wymaga przywróconej kopii.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Zmiana tych ustawień kopiuje obiekt na siebie.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>Listy ACL są wyłączone dla tego zasobnika (własność obiektów: wymuszony właściciel zasobnika). Do przyznawania dostępu użyj zasad zasobnika.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>Lista ACL jest niedostępna: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Własność obiektów: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Stan blokady obiektów jest niedostępny: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Blokada obiektów nie jest włączona w tym zasobniku (można ją włączyć tylko podczas tworzenia zasobnika).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Przechowywane w trybie %1 do %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Dla tej wersji nie ustawiono przechowywania.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Stosowanie…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Nieprawidłowy klucz metadanych „%1”: użyj liter, cyfr oraz znaków „-”, „_” i „.”</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Zapisano metadane.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Zapisano tagi.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Nic nie zmieniono.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Zapisano ustawienia magazynu.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>Ustawiono listę ACL: %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Zapisano ustawienia blokady obiektów.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Porównaj z plikiem lokalnym</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Obliczanie sum kontrolnych %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Zgodne</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>RÓŻNE</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>Obiekt nie ma sumy kontrolnej, którą można porównać.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Plik lokalny jest zgodny z obiektem.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Plik lokalny różni się od obiektu.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Klucze klienta wymagają zapisanego połączenia.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Wyświetlanie wersji nie jest tutaj obsługiwane</translation>
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
        <translation>Brak dostawcy</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Nie można utworzyć katalogu tymczasowego</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Duży plik</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>„%1” ma rozmiar %2. Pobrać go do pliku tymczasowego?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Starszych wersji nie można edytować; najpierw przywróć wersję</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Pobieranie %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Nie można pobrać %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Brak aplikacji do otwarcia tego pliku</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Brak aplikacji do edycji tego pliku</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Przekaż zmiany</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>Plik „%1” został zmodyfikowany. Przekazać go do %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Plik zdalny został zmieniony</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>Plik %1 został zmieniony na serwerze od czasu jego otwarcia. Zastąpić go Twoją wersją?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Nie można przekazać %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Przywróć z archiwum</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Żądanie tymczasowej, możliwej do odczytu kopii %1. Zarchiwizowany obiekt pozostaje na miejscu; kopia jest rozliczana według standardowej stawki zasobnika aż do wygaśnięcia.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> dzień</numerusform>
            <numerusform> dni</numerusform>
            <numerusform> dni</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Zachowaj kopię przez:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Standardowa (Glacier: 3–5 godzin, Deep Archive: do 12 godzin)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Zbiorcza (najtańsza; 5–12 godzin, Deep Archive: do 48 godzin)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Przyspieszona (tylko Glacier; 1–5 minut, najdroższa)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Warstwa pobierania:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Zażądaj przywrócenia</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Nieznane ustawienie własności obiektów</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Błąd składni JSON w wierszu %1, kolumnie %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Nieznane pole „%1” (%2)</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Wersjonowanie</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Szyfrowanie domyślne</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Reguły cyklu życia</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Zasady zasobnika</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Blokowanie dostępu publicznego</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tagi</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Hosting statycznej witryny</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blokada obiektów</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Własność obiektów</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Nazwy zasobników muszą mieć od 3 do 63 znaków.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Nazwy zasobników mogą zawierać tylko małe litery, cyfry, kropki i łączniki.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Nazwy zasobników muszą zaczynać się i kończyć literą lub cyfrą.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Nazwy zasobników nie mogą zawierać dwóch sąsiadujących kropek.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Nazwy zasobników nie mogą wyglądać jak adres IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Nazwy zasobników nie mogą zaczynać się od „%1” (zarezerwowane przez AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Nazwy zasobników nie mogą kończyć się na „%1” (zarezerwowane przez AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Nazwy z kropkami nie działają z adresowaniem HTTPS w stylu wirtualnie hostowanym (certyfikat TLS nie pasuje) ani z Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Identyfikatory reguł mogą mieć maksymalnie 255 znaków.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Reguła wymaga co najmniej jednej akcji: przeniesienia, wygaśnięcia lub przerywania niekompletnych przekazywań.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>Minimalny rozmiar obiektu musi być mniejszy niż maksymalny.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Klucze tagów muszą mieć od 1 do 128 znaków.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Wartości tagów mogą mieć maksymalnie 256 znaków.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Reguła filtrująca według tagów nie może przerywać niekompletnych przekazywań (przekazywania nie mają tagów).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Reguła filtrująca według tagów nie może usuwać wygasłych znaczników usunięcia.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Obiekty mogą wygasnąć najwcześniej po 1 dniu.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Dla wygaśnięcia wybierz liczbę dni albo datę.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Usuwania wygasłych znaczników usunięcia nie można łączyć z wygasaniem bieżących wersji w tej samej regule.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Nieznana klasa magazynu przeniesienia „%1”.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Dwa przeniesienia do %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Każde przeniesienie wymaga liczby dni lub daty.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Obiekty mogą zostać przeniesione do %1 najwcześniej po 30 dniach.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>W regule używaj albo dni, albo dat dla wszystkich przeniesień i wygaśnięcia.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>Wygaśnięcie musi nastąpić po ostatnim przeniesieniu.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Dwa przeniesienia wersji nieaktualnych do %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Wersje nieaktualne mogą zostać przeniesione najwcześniej po 1 dniu.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Liczba nowszych wersji do zachowania musi wynosić od 1 do 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Wersje nieaktualne mogą zostać usunięte najwcześniej po 1 dniu.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Zachowywanie nowszych wersji nieaktualnych wymaga wygasania wersji nieaktualnych.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Niekompletne przekazywania mogą zostać przerwane najwcześniej po 1 dniu.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>prefiks „%1”</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>tag %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>większe niż %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>mniejsze niż %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Cały zasobnik</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>do %1 po %2 d</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>do %1 dnia %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>wygaśnięcie po %1 d</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>wygaśnięcie dnia %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>usuwanie wygasłych znaczników usunięcia</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>nieaktualne do %1 po %2 d</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>usuwanie nieaktualnych po %1 d (zachowaj %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>usuwanie nieaktualnych po %1 d</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>przerywanie przekazywań po %1 d</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Zasobnik może mieć maksymalnie 1000 reguł cyklu życia.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Reguła %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Reguła „%1”</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: inna reguła ma ten sam ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>konfiguracja</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>reguła %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1: to nie jest obiekt</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status musi mieć wartość „Enabled” lub „Disabled”</translation>
    </message>
    <message>
        <source> filter</source>
        <translation>, filtr</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Reguła CORS wymaga co najmniej jednego dozwolonego źródła.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Reguła CORS wymaga co najmniej jednej dozwolonej metody.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Nieobsługiwana metoda „%1” (użyj GET, PUT, POST, DELETE lub HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Nieprawidłowe źródło „%1”: dozwolony jest najwyżej jeden symbol wieloznaczny „*”.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Nieprawidłowy nagłówek „%1”: dozwolony jest najwyżej jeden symbol wieloznaczny „*”.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>Maksymalny wiek nie może być ujemny.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Zasobnik może mieć maksymalnie 100 reguł CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Reguła %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Zasady muszą być obiektem JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Brak pola &quot;Version&quot;: dodaj &quot;Version&quot;: &quot;2012-10-17&quot; (bez niego zmienne zasad nie działają).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Nieznana wersja zasad „%1” (użyj &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>Wersja &quot;2008-10-17&quot; jest przestarzała; użyj &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>Zasady wymagają pola &quot;Statement&quot; (obiektu lub tablicy obiektów).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>Zasady nie zawierają instrukcji.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>Instrukcja %1 nie jest obiektem.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Instrukcja %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Instrukcja „%1”</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: Sid jest użyty dwukrotnie.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; musi mieć wartość &quot;Allow&quot; lub &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: zasady zasobnika wymagają pola &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: brak pola &quot;Action&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: brak pola &quot;Resource&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: „%2” nie jest akcją S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: „%2” nie jest numerem ARN zasobu S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: „%2” nie należy do tego zasobnika (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 przyznaje dostęp wszystkim (Principal &quot;*&quot; bez warunku).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Publiczny odczyt (każdy może pobierać obiekty)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Odrzucaj żądania bez TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Dostęp tylko do odczytu dla innego konta AWS</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Przekierowania wszystkich żądań nie można łączyć z dokumentami ani regułami routingu.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Protokół przekierowania musi mieć wartość http lub https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>Hosting witryny wymaga dokumentu indeksu (lub przekierowania wszystkich żądań).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Dokument indeksu nie może zawierać znaku „/” (jest to sufiks dołączany do żądań folderów).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Każda reguła routingu wymaga przekierowania.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Reguła routingu może zastąpić klucz albo prefiks klucza, ale nie oba.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Reguły routingu muszą być tablicą JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>reguła routingu %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>Tryb przechowywania musi mieć wartość GOVERNANCE lub COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>Domyślne przechowywanie wymaga włączenia blokady obiektów w zasobniku.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Ustaw domyślny okres przechowywania w dniach albo w latach (jedno z nich).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>Domyślny okres przechowywania może wynosić maksymalnie 100 lat.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Zasobnik może mieć maksymalnie 50 tagów.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Uwierzytelnianie nie powiodło się: sprawdź klucz dostępu i klucz tajny</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>Zegar komputera zbyt mocno różni się od czasu serwera</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>Obiekt nie istnieje</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>Zasobnik nie istnieje</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>Przekazywanie wieloczęściowe nie istnieje</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>Obiekt jest zarchiwizowany; zażądaj przywrócenia (S3 &gt; Przywróć z archiwum) i poczekaj, aż będzie dostępny</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Odmowa dostępu</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Zasobnik już istnieje</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>Zasobnik nie jest pusty</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>Usługa ogranicza liczbę żądań; spróbuj ponownie później</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Błąd sieci: nie można połączyć się z punktem końcowym</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Upłynął limit czasu żądania</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>Zasobnik znajduje się w innym regionie niż skonfigurowany</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>Usługa nie obsługuje tej operacji</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Nie znaleziono</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>Żądanie zostało odrzucone jako nieprawidłowe</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Żądanie S3 nie powiodło się</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>Nieznana predefiniowana lista ACL: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Wstępnie podpisane adresy URL są dostępne tylko dla obiektów</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Nie można podpisać adresu URL (brak użytecznych poświadczeń)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
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
        <translation>To nie jest lokalizacja S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Nie ma takiego obiektu ani folderu: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Tworzenie zasobników nie jest tutaj obsługiwane</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Zasobnik już istnieje</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Już istnieje: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Usuwanie zasobników nie jest tutaj obsługiwane</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>Nie udało się usunąć %n obiektu</numerusform>
            <numerusform>Nie udało się usunąć %n obiektów</numerusform>
            <numerusform>Nie udało się usunąć %n obiektów</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 nie obsługuje zmiany nazwy; użyj kopiowania i usuwania</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Kontrola integralności nie powiodła się dla %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Nie skonfigurowano klucza SSE-C dla zasobnika %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>ETag %1 różni się od ETag źródła %2</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>Zapisano bajtów: %1, oczekiwano: %2</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Pobieranie niekompletne: %1 z %2 bajtów</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 różni się od ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Nie można zastąpić %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Nie można zapisać %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Nie ma takiego pliku: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>To jest katalog: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Nieprawidłowe miejsce docelowe: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Nie można odczytać %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>ETag %1 różni się od lokalnej sumy MD5 %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Błąd odczytu %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>ETag %1 różni się od oczekiwanego %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Niemożliwe na liście połączeń</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>To nie jest lokalizacja S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Nieznane połączenie</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>Nie można uzyskać poświadczeń dla profilu AWS „%1”. Jeśli używa on AWS SSO (IAM Identity Center), sesja mogła wygasnąć: uruchom „aws sso login” i spróbuj ponownie.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>Brak poświadczeń AWS w środowisku: ustaw AWS_ACCESS_KEY_ID i AWS_SECRET_ACCESS_KEY przed uruchomieniem aplikacji.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>Nie znaleziono poświadczeń AWS (środowisko, profile ~/.aws, SSO, tożsamość internetowa lub metadane instancji). Jeśli używasz AWS SSO, uruchom „aws sso login” i spróbuj ponownie.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Dla tego połączenia nie zapisano klucza tajnego; edytuj połączenie, aby go wprowadzić</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Połączono: widoczny %n zasobnik</numerusform>
            <numerusform>Połączono: widoczne %n zasobniki</numerusform>
            <numerusform>Połączono: widocznych %n zasobników</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Połączono (listowanie zasobników jest niedozwolone; dostępny %n przypięty zasobnik)</numerusform>
            <numerusform>Połączono (listowanie zasobników jest niedozwolone; dostępne %n przypięte zasobniki)</numerusform>
            <numerusform>Połączono (listowanie zasobników jest niedozwolone; dostępnych %n przypiętych zasobników)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, klucze zarządzane przez S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (klucz AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (klucz dostarczony przez klienta)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Obiekt może mieć maksymalnie 10 tagów.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Klucze tagów muszą mieć od 1 do 128 znaków.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Wartości tagów mogą mieć maksymalnie 256 znaków.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Klucze tagów nie mogą zaczynać się od „aws:”.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Niezarchiwizowany</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Zarchiwizowany; trwa przywracanie</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Zarchiwizowany; przywrócona kopia dostępna do %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Zarchiwizowany; przywróć go, aby odczytać dane</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>To nie jest wersja: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>Nie udało się usunąć %n wersji</numerusform>
            <numerusform>Nie udało się usunąć %n wersji</numerusform>
            <numerusform>Nie udało się usunąć %n wersji</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 nie jest usunięty</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Brak wersji %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Nieznana warstwa przywracania: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Przywróć na co najmniej jeden dzień</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>w „%1”</translation>
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
        <translation>zmodyfikowane po %1</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>zmodyfikowane przed %1</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>, </translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>Nieprawidłowe wyrażenie regularne na pozycji %1: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>Nieprawidłowy wzorzec wieloznaczny „%1”: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>Znajdź pliki</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>Szukaj w:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>np. *.log; raport — puste: wszystko</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>Symbole wieloznaczne: * dowolny tekst, ? jeden znak, [abc] jeden z tych znaków. Kilka wzorców oddziel znakiem „;”. Tekst bez symboli wieloznacznych jest wyszukiwany w dowolnym miejscu nazwy.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nazwa:</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>Symbole wieloznaczne</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>Wyrażenie regularne</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>Skł&amp;adnia:</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>&amp;Uwzględniaj wielkość liter</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>Dopasuj pełną ś&amp;cieżkę poniżej folderu wyszukiwania</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>Dopasuj „2024/*.csv” do „logs/2024/a.csv” zamiast tylko do nazwy; * pasuje wtedy także do „/”</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>np. logs/2024- (opcjonalnie)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>Przeszukiwane są tylko ścieżki poniżej folderu wyszukiwania, które zaczynają się od tego tekstu. W S3 filtruje serwer według tego prefiksu klucza, co jest znacznie szybsze niż wyświetlanie wszystkiego.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>&amp;Prefiks ścieżki:</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>np. 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>np. 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>Rozmiar co naj&amp;mniej:</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>Rozmiar co naj&amp;wyżej:</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>Zmodyfikowano p&amp;o:</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>Zmodyfikowano p&amp;rzed:</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>Dowolna</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>Klasa ma&amp;gazynu:</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>Pliki i foldery</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>Tylko pliki</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>Tylko foldery</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>Uwzględn&amp;ij:</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>Uwzględnij u&amp;kryte pliki i foldery</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>Bez limitu</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>Maksymalna &amp;liczba wyników:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Szukaj</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>„%1” nie jest rozmiarem (przykłady: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>Rozmiar minimalny jest większy niż maksymalny.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>Data „po” jest późniejsza niż data „przed”.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>Foldery nie mają rozmiaru, daty ani klasy magazynu: wyszukaj pliki, aby użyć tych kryteriów.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>Prefiks ścieżki nie może wychodzić poza folder wyszukiwania.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Błąd systemowego magazynu kluczy</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>W systemowym magazynie kluczy nie zapisano danych tajnych</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Nie znaleziono danych tajnych</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Domyślny systemowy (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Język:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Nowy język zostanie użyty po ponownym uruchomieniu programu S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Klucz szyfrowania klienta (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Obiekty SSE-C są szyfrowane 256-bitowym kluczem, który przechowujesz samodzielnie. S3 go nie przechowuje: &lt;b&gt;w przypadku utraty klucza obiektów nie będzie można odczytać&lt;/b&gt;. Klucz jest przechowywany w systemowym magazynie kluczy.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 znaki) lub 64 cyfry szesnastkowe</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Pokaż</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Generuj</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Używaj dla każdego zasobnika tego połączenia bez własnego klucza</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Usuń klucz</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Dla zasobnika %1 skonfigurowano klucz (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Dla zasobnika %1 nie skonfigurowano klucza.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>Klucz musi mieć 32 bajty, w formacie base64 lub jako 64 cyfry szesnastkowe.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Usunąć klucz dla zasobnika %1? Obiektów zaszyfrowanych tym kluczem nie będzie można bez niego odczytać.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Opcje</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Pytaj</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Zastąp</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Pomiń</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Zachowaj oba (zmień nazwę nowego pliku)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Zastąp, jeśli nowszy</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Zastąp, jeśli rozmiar się różni</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Jeśli plik istnieje:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>np. *.jpg; *.png (puste: wszystko)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Tylko pliki pasujące do:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>np. *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Wyklucz:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Weryfikuj integralność po transferze (rozmiar, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Zachowaj czasy modyfikacji</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Podążaj za dowiązaniami symbolicznymi (w przeciwnym razie pomiń je)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Domyślna połączenia</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Klasa magazynu S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Szyfrowanie S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Transfery</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Wstrzymaj</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Wznów</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Ponów nieudane</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Przenieś w górę</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Przenieś w dół</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Wstrzymaj wszystkie</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Wznów wszystkie</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Wyczyść zakończone</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Ustawienia…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>Uruchomione: %1, w kolejce: %2</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>Uruchomione: %1</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Błąd transferu</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID żądania: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Anuluj transfer</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>Anulować „%1”? Częściowo przesłane pliki zostaną odrzucone.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Usuń transfer</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>Usunąć „%1”? Transfer nie został ukończony; częściowe dane zostaną odrzucone.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n element</numerusform>
            <numerusform>%n elementy</numerusform>
            <numerusform>%n elementów</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Kopiowanie: %1 do %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Przenoszenie: %1 do %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Usuwanie: %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Brak dostawcy dla tej lokalizacji</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Źródło i miejsce docelowe są takie same</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Nie można skopiować folderu do niego samego</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Nie znaleziono wolnej nazwy</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Folder o tej nazwie już istnieje</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>W kolejce</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Wstrzymany</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Gotowe, pominięte: %n</numerusform>
            <numerusform>Gotowe, pominięte: %n</numerusform>
            <numerusform>Gotowe, pominięte: %n</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Gotowe</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Niepowodzenie</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Anulowany</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Uruchamianie</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Skanowanie</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Usuwanie</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Przenoszenie</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Kopiowanie</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Kończenie</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n błąd)</numerusform>
            <numerusform>(%n błędy)</numerusform>
            <numerusform>(%n błędów)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n element</numerusform>
            <numerusform>%n elementy</numerusform>
            <numerusform>%n elementów</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n plik</numerusform>
            <numerusform>%1 / %n pliki</numerusform>
            <numerusform>%1 / %n plików</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Transfer</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Stan</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Postęp</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Szybkość</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Pozostały czas</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Ustawienia transferów</translation>
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
        <translation>Bez limitu</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Automatycznie wznawiaj przerwane transfery przy uruchomieniu</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Jednoczesne transfery:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Równoległe pliki na transfer:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Równoległe części na plik:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Wieloczęściowe powyżej:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Rozmiar części:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Limit przepustowości:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Ponowne próby na plik:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Rozmiary części rosną automatycznie dla bardzo dużych plików (S3 pozwala na maksymalnie 10 000 części). Zmiany dotyczą transferów rozpoczętych później; limit przepustowości obowiązuje natychmiast.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Historia wersji — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Zmodyfikowano</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Klasa magazynu</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Stan</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID wersji</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Podgląd</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>Po&amp;bierz…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>P&amp;rzywróć jako bieżącą</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Usuń &amp;trwale…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>&amp;Cofnij usunięcie</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Pomiń przechowywanie w trybie zarządzania podczas usuwania</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Odśwież</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Ładowanie wersji…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Znacznik usunięcia (obiekt usunięty)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Znacznik usunięcia</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Bieżąca</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Poprzednia</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Nie znaleziono wersji.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>Wersje i znaczniki usunięcia: %n.</numerusform>
            <numerusform>Wersje i znaczniki usunięcia: %n.</numerusform>
            <numerusform>Wersje i znaczniki usunięcia: %n.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Przetwarzanie…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Pobierz wersję</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>Zapisano %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>Wybrana wersja jest ponownie wersją bieżącą.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Usuń wersje</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Trwale usunąć %n wersję? Tej operacji nie można cofnąć.</numerusform>
            <numerusform>Trwale usunąć %n wersje? Tej operacji nie można cofnąć.</numerusform>
            <numerusform>Trwale usunąć %n wersji? Tej operacji nie można cofnąć.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>Usunięto %n wersję.</numerusform>
            <numerusform>Usunięto %n wersje.</numerusform>
            <numerusform>Usunięto %n wersji.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>Obiekt został przywrócony.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Podgląd — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — wyświetlono początkowe %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — plik binarny (%1), początkowe %2 wyświetlono szesnastkowo</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Otwórz w aplikacji domyślnej</translation>
    </message>
</context>
</TS>
