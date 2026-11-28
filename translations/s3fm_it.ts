<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it" sourcelanguage="en">
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
        <translation>Origini consentite</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Metodi</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Intestazioni consentite</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Intestazioni esposte</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Durata max (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>&amp;Aggiungi regola</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Rimuovi regola</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regole</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Separare più valori con virgole. Metodi: GET, PUT, POST, DELETE, HEAD. È consentito un solo carattere jolly &quot;*&quot; per origine o intestazione.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;pplica</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Configurazione CORS rimossa</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Regole CORS salvate</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Nessuna</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (chiavi gestite da S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (chiave AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (doppio livello, chiave AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>&amp;Crittografia predefinita:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>ID chiave, ARN o alias (vuoto: chiave gestita aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>C&amp;hiave KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>Usa una chiave &amp;bucket S3 (meno richieste KMS, costi inferiori)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Si applica agli oggetti scritti da ora in poi che non richiedono una propria crittografia. Gli oggetti esistenti mantengono la loro crittografia (riscriverli con Modifica oggetti per cambiarla). Se non è impostato nulla, AWS esegue la crittografia con SSE-S3.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Crittografia predefinita salvata</translation>
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
        <translation>Stato</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Si applica a</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Azioni</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Aggiungi…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Modifica…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>Abilita/&amp;disabilita</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Rimuovi</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regole</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Le regole vengono eseguite una volta al giorno. Il JSON usa il formato di &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. I servizi compatibili con S3 possono ignorare le azioni che non supportano (MinIO richiede tier remoti per le transizioni).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;pplica</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(generato)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Abilitata</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Disabilitata</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Regola modificata; Applica salva le regole nel bucket.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Configurazione del ciclo di vita rimossa</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Regole del ciclo di vita salvate</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Abilita Blocco oggetti…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nessuna</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Governance (gli utenti con autorizzazione speciale possono rimuoverla)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Conformità (nessuno può rimuoverla, nemmeno l&apos;account root)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>&amp;Conservazione predefinita:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>giorni</translation>
    </message>
    <message>
        <source>years</source>
        <translation>anni</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Periodo:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Le nuove versioni degli oggetti ricevono la conservazione predefinita, a meno che il caricamento non ne imposti una propria. Le versioni conservate non possono essere eliminate né sovrascritte fino al termine del periodo.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Abilita Blocco oggetti</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Abilitare Blocco oggetti su %1? L&apos;operazione non può essere annullata e il controllo delle versioni resta abilitato in modo permanente. (Alcuni servizi lo consentono solo alla creazione del bucket.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Blocco oggetti abilitato</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n giorno</numerusform>
            <numerusform>%n giorni</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n anno</numerusform>
            <numerusform>%n anni</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blocco oggetti</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>La conservazione in modalità conformità non può essere ridotta né rimossa da nessuno. Le nuove versioni non potranno essere eliminate per %1. Continuare?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Conservazione predefinita salvata</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>Blocco oggetti è abilitato su questo bucket.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>Blocco oggetti non è abilitato su questo bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Regione</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Creato</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Proprietario</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Proprietario del bucket imposto (ACL disabilitate)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Proprietario del bucket preferito</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Autore dell&apos;oggetto</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Proprietà degli oggetti</translation>
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
        <translation>&amp;Modelli</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Policy del bucket</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Sostituire il testo corrente con il modello?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Formatta</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Nessuna policy del bucket. Scegliere un modello o incollare un documento di policy.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Elimina policy…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Applica</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Impossibile formattare: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Nessuna policy.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Nessun problema rilevato.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Eliminare la policy del bucket %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Policy del bucket eliminata</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Correggere prima gli errori nella policy: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Questa policy concede l&apos;accesso a chiunque su Internet. Applicarla comunque?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Policy del bucket salvata</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Proprietà del bucket — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Panoramica</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Controllo delle versioni</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Crittografia</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Ciclo di vita</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Policy</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Accesso pubblico</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Sito web</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blocco oggetti</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Statistiche</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: non supportato da questo endpoint</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Blocca &amp;tutto l&apos;accesso pubblico</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Blocca l&apos;accesso pubblico concesso tramite nuove ACL</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Ignora l&apos;accesso pubblico concesso tramite qualsiasi ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Blocca l&apos;accesso pubblico concesso tramite nuove policy del bucket</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Limita l&apos;accesso ai bucket con policy pubbliche ai servizi AWS e all&apos;account del proprietario</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>Si applicano anche le impostazioni a livello di account, che prevalgono su queste. Disattivare i blocchi non rende di per sé pubblico nulla.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Accesso pubblico</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Consentire le impostazioni di accesso pubblico su %1? Gli oggetti potranno quindi diventare pubblici tramite ACL o la policy del bucket.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Impostazioni di accesso pubblico salvate</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Prefisso chiave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(intero bucket)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Calcola</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Oggetti</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Conteggio effettuato elencando ogni versione degli oggetti (una richiesta ogni 1000 chiavi), operazione lunga sui bucket di grandi dimensioni. Per bucket con milioni di oggetti, S3 Storage Lens o le metriche CloudWatch BucketSizeBytes/NumberOfObjects sono più rapidi (aggiornati giornalmente).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annulla</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Conteggio…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 byte</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Oggetti correnti</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Versioni non correnti</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Contrassegni di eliminazione</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Tutte le versioni</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Caricamenti in più parti incompleti</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Completato.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Annullato: conteggi parziali.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Applica</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Applicazione…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Conteggio… %L1 elementi</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Chiave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Fino a 50 tag; usati per l&apos;allocazione dei costi e il controllo degli accessi. I tag degli oggetti sono separati (Modifica oggetti).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Tag salvati</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Controllo delle versioni:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Eliminazione MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Con il controllo delle versioni, sovrascrivere o eliminare un oggetto conserva i dati precedenti come versione non corrente (fatturata come archiviazione). Una volta abilitato, il controllo delle versioni non può essere disattivato, solo sospeso: le versioni esistenti restano. L&apos;eliminazione MFA può essere modificata solo dall&apos;account root tramite API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Abilita controllo delle versioni</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>&amp;Sospendi controllo delle versioni</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Controllo delle versioni abilitato</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Sospendi controllo delle versioni</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Sospendere il controllo delle versioni su %1? Le nuove scritture tornano a sostituire gli oggetti; le versioni esistenti vengono mantenute.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Controllo delle versioni sospeso</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Disabilitato (mai abilitato)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Abilitato</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Sospeso</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Disabilitato</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Abilita &amp;hosting di siti web statici</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>&amp;Ospita un sito web</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>Documento &amp;indice:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>facoltativo, ad es. error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Documento di &amp;errore:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Regole di reindirizzamento facoltative (array JSON), ad es.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>Regole di &amp;routing:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>Reindirizza &amp;tutte le richieste a un altro host</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>ad es. www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>&amp;Nome host:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Uguale alla richiesta</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Protocollo:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Gli endpoint di siti web servono gli oggetti solo tramite HTTP semplice e solo se leggibili pubblicamente (policy del bucket, blocco dell&apos;accesso pubblico).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Applica</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Endpoint del sito web: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Configurazione del sito web salvata</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Hosting del sito web disabilitato</translation>
    </message>
</context>
<context>
    <name>s3fm::Compare</name>
    <message>
        <source>only here</source>
        <translation>solo qui</translation>
    </message>
    <message>
        <source>newer</source>
        <translation>più recente</translation>
    </message>
    <message>
        <source>older</source>
        <translation>meno recente</translation>
    </message>
    <message>
        <source>different</source>
        <translation>diverso</translation>
    </message>
    <message>
        <source>identical</source>
        <translation>identico</translation>
    </message>
    <message>
        <source>same size and time</source>
        <translation>stesse dimensioni e data</translation>
    </message>
    <message>
        <source>file vs. folder</source>
        <translation>file/cartella</translation>
    </message>
    <message>
        <source>Missing in the other panel.</source>
        <translation>Manca nell&apos;altro pannello.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is newer.</source>
        <translation>Diverso dall&apos;altro pannello e più recente.</translation>
    </message>
    <message>
        <source>Differs from the other panel and is older.</source>
        <translation>Diverso dall&apos;altro pannello e meno recente.</translation>
    </message>
    <message>
        <source>Differs from the other panel.</source>
        <translation>Diverso dall&apos;altro pannello.</translation>
    </message>
    <message>
        <source>Same content as in the other panel.</source>
        <translation>Stesso contenuto dell&apos;altro pannello.</translation>
    </message>
    <message>
        <source>Same size and time as in the other panel.</source>
        <translation>Stesse dimensioni e data dell&apos;altro pannello.</translation>
    </message>
    <message>
        <source>The other panel has a file where this is a folder, or the other way round.</source>
        <translation>L&apos;altro pannello ha un file dove qui c&apos;è una cartella, o viceversa.</translation>
    </message>
    <message>
        <source>The content differs.</source>
        <translation>Il contenuto è diverso.</translation>
    </message>
    <message>
        <source>The content could not be checked.</source>
        <translation>Impossibile verificare il contenuto.</translation>
    </message>
    <message numerus="yes">
        <source>%n only here</source>
        <translation>
            <numerusform>%n solo qui</numerusform>
            <numerusform>%n solo qui</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n newer</source>
        <translation>
            <numerusform>%n più recente</numerusform>
            <numerusform>%n più recenti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n older</source>
        <translation>
            <numerusform>%n meno recente</numerusform>
            <numerusform>%n meno recenti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n different</source>
        <translation>
            <numerusform>%n diverso</numerusform>
            <numerusform>%n diversi</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n identical</source>
        <translation>
            <numerusform>%n identico</numerusform>
            <numerusform>%n identici</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n not verified</source>
        <translation>
            <numerusform>%n non verificato</numerusform>
            <numerusform>%n non verificati</numerusform>
        </translation>
    </message>
    <message>
        <source>nothing to compare</source>
        <translation>niente da confrontare</translation>
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
        <translation>Confronta pannelli</translation>
    </message>
    <message>
        <source>Compare modification &amp;times</source>
        <translation>Confronta le date di &amp;modifica</translation>
    </message>
    <message>
        <source> s</source>
        <comment>seconds</comment>
        <translation> s</translation>
    </message>
    <message>
        <source>T&amp;olerance:</source>
        <translation>T&amp;olleranza:</translation>
    </message>
    <message>
        <source>Compare the &amp;content of files with the same size</source>
        <translation>Confronta il &amp;contenuto dei file con le stesse dimensioni</translation>
    </message>
    <message>
        <source>&lt;small&gt;Local files are read. S3 objects are compared by ETag (the MD5 sum of single-part uploads) and stored checksums; when the ETag alone does not tell, one or two requests per object are needed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;I file locali vengono letti. Gli oggetti S3 vengono confrontati tramite ETag (la somma MD5 dei caricamenti in una sola parte) e i checksum memorizzati; quando l&apos;ETag da solo non basta, servono una o due richieste per oggetto.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Mark &amp;folders that exist on one side only</source>
        <translation>Segna le c&amp;artelle presenti su un solo lato</translation>
    </message>
    <message>
        <source>&lt;small&gt;Only the listings shown are compared, not the contents of folders. Items missing on the other side, newer, or different are selected in both panels, ready to copy with F5. S3 times are upload times.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Vengono confrontati solo gli elenchi visualizzati, non il contenuto delle cartelle. Gli elementi mancanti dall&apos;altro lato, più recenti o diversi vengono selezionati in entrambi i pannelli, pronti per la copia con F5. Le date S3 sono le date di caricamento.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Compare</source>
        <translation>Confronta</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>Il file esiste già</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; esiste già nella destinazione. Sovrascriverlo?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Nuovo:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Esistente:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>Il nuovo file è più recente.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>Il file esistente è più recente o ha la stessa data.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Hanno entrambi la stessa dimensione.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Le dimensioni sono diverse.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Applica a tutti i conflitti rimanenti di questo trasferimento</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>&amp;Sovrascrivi</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>Sa&amp;lta</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>&amp;Mantieni entrambi</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Copia con un nuovo nome, ad esempio &quot;nome (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Se più &amp;recente</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Sovrascrivi solo se il nuovo file è più recente, altrimenti salta</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Se la &amp;dimensione è diversa</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Sovrascrivi solo se le dimensioni sono diverse, altrimenti salta</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Annulla trasferimento</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Connessioni</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Aggiungi</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplica</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Importa profili AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Crea connessioni per i profili in %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Connessione</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Usato in indirizzi come s3://&lt;id&gt;/bucket/key. Non può essere modificato dopo il salvataggio.</translation>
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
        <translation>Lasciare vuoto per Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>URL &amp;endpoint:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Regione:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatico</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Virtual-hosted (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Stile percorso (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>In&amp;dirizzamento:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Credenziali</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Chiave di accesso e segreto</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Profilo AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Variabili d&apos;ambiente</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Catena di credenziali AWS predefinita</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anonimo (bucket pubblici)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>ID chiave di accesso:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostra</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Chiave di accesso segreta:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Facoltativo (credenziali temporanee)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Token di sessione:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>I segreti vengono archiviati nel portachiavi di sistema, mai nei file di impostazioni.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profilo:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Supporta profili con chiavi statiche, SSO, assunzione di ruolo (role_arn / source_profile) e credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avanzate</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Verifica i certificati TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Certificati di sistema</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Sfoglia…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Bundle CA</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Certificati (*.pem *.crt);;Tutti i file (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Bundle CA:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Se supportati (predefinito AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Solo se richiesti (massima compatibilità)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Alcuni servizi compatibili con S3 rifiutano le intestazioni di checksum di integrità più recenti.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Checksum delle richieste:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Predefinita del bucket</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Classe di archiviazione per i caricamenti:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Bucket da mostrare anche quando le credenziali non consentono di elencare i bucket.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Bucket fissati:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b, o * per tutti</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Bucket con pagamento a carico del richiedente: le richieste verso di essi vengono addebitate al proprio account (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Pagamento a carico del richiedente:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Timeout richiesta:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>&amp;Verifica connessione</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Apri</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Archiviato nel portachiavi — lasciare vuoto per mantenerlo</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Nuova connessione %1</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (copia)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Elimina connessione</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Eliminare la connessione &quot;%1&quot; e il relativo segreto archiviato?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Importa profili AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Nessun profilo trovato in %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Tutti i profili AWS sono già stati importati.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Usa AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY e AWS_SESSION_TOKEN dall&apos;ambiente con cui è stata avviata l&apos;applicazione.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Prova variabili d&apos;ambiente, profilo predefinito, SSO, identità web e credenziali di container/istanza, nell&apos;ordine standard dell&apos;SDK AWS.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Le richieste non vengono firmate. Sono accessibili solo bucket e oggetti pubblici.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Salva connessione</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Esiste già una connessione con l&apos;ID &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Immettere la chiave di accesso segreta.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Verifica in corso…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Modifiche non salvate</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Salvare le modifiche a &quot;%1&quot;?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Connessioni *</translation>
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
        <translation>Altro compatibile con S3</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Immettere un nome per la connessione.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>L&apos;ID può contenere solo lettere minuscole, cifre, &apos;.&apos;, &apos;-&apos; e &apos;_&apos;.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>L&apos;endpoint deve essere un URL http:// o https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Sostituire il segnaposto nell&apos;URL dell&apos;endpoint.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Immettere l&apos;URL dell&apos;endpoint del servizio compatibile con S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Immettere una regione (ad esempio us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Immettere l&apos;ID della chiave di accesso.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Scegliere un profilo AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Impossibile scrivere il file delle impostazioni</translation>
    </message>
</context>
<context>
    <name>s3fm::ContentCompare</name>
    <message>
        <source>Error reading %1</source>
        <translation>Errore durante la lettura di %1</translation>
    </message>
    <message>
        <source>The object has no checksum to compare with (encrypted with SSE-KMS or SSE-C, and no stored checksum).</source>
        <translation>L&apos;oggetto non ha alcun checksum da confrontare (cifrato con SSE-KMS o SSE-C e senza checksum memorizzato).</translation>
    </message>
    <message>
        <source>The objects were uploaded in different parts or are encrypted with SSE-KMS or SSE-C; their ETags do not tell whether the content is the same.</source>
        <translation>Gli oggetti sono stati caricati in parti diverse o sono cifrati con SSE-KMS o SSE-C; i loro ETag non dicono se il contenuto è lo stesso.</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Nuovo bucket</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>lettere minuscole, cifre, punti e trattini</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>predefinita dell&apos;endpoint</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Regione:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Predefinito (proprietario del bucket imposto: ACL disabilitate)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Proprietario del bucket preferito (ACL abilitate)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Autore dell&apos;oggetto (ACL abilitate)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Proprietà degli oggetti:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nessuna</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>&amp;ACL predefinita:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Abilita &amp;Blocco oggetti (attiva il controllo delle versioni; non può essere disattivato)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;I nuovi bucket AWS bloccano l&apos;accesso pubblico per impostazione predefinita; le ACL pubbliche non riescono finché il blocco dell&apos;accesso pubblico non viene allentato.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Crea</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Immettere un nome per il bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Elimina bucket</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Eliminare definitivamente il bucket vuoto &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>oggetti</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>versioni di oggetti o contrassegni di eliminazione</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>caricamenti in più parti incompleti</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; non è vuoto: contiene %2.&lt;br&gt;&lt;br&gt;Per eliminarlo, vengono prima eliminati tutti gli oggetti, tutte le versioni e tutti i caricamenti incompleti. &lt;b&gt;L&apos;operazione non può essere annullata.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Svuota il bucket, quindi eliminalo</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>&amp;Ignora la conservazione in modalità governance (richiede s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Digitare il nome del bucket per confermare:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Svuota ed elimina</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Invariata / predefinita del bucket</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>ID chiave KMS, ARN o alias (vuoto: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Nessun provider per %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Connessione</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Cartella</translation>
    </message>
    <message>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>File %1</translation>
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
        <translation>Contrassegno di eliminazione (eliminato)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Contrassegno di eliminazione</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (corrente)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificato</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe di archiviazione</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Versione</translation>
    </message>
    <message>
        <source>Comparison</source>
        <translation>Confronto</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Operazione annullata</translation>
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
        <translation>Aggiungi</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> giorni</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>byte (vuoto: nessun limite)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Aggiungi</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Regola del ciclo di vita</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>facoltativo; viene generato da S3</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Abilitata</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;ID regola:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filtro</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>Versioni &amp;correnti</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>Versioni &amp;non correnti &amp;&amp; caricamenti</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>La regola si applica agli oggetti che soddisfano tutte le condizioni seguenti; senza condizioni si applica all&apos;intero bucket.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>ad es. logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Prefisso chiave:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Più grande di:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Più piccolo di:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Tag degli oggetti:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Sposta nella classe di archiviazione</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Dopo (giorni o AAAA-MM-GG)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Transizioni:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Mai</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Dopo</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>In data</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Scadenza (eliminazione) degli oggetti:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Rimuovi i contrassegni di eliminazione scaduti (contrassegni senza versioni non correnti)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;In un bucket con controllo delle versioni, la scadenza di una versione corrente aggiunge un contrassegno di eliminazione; i dati restano come versione non corrente.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Giorni dopo essere diventate non correnti</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Mantieni le più recenti (facoltativo)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Elimina dopo</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>mantenendo le più recenti</translation>
    </message>
    <message>
        <source>none</source>
        <translation>nessuna</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Versioni non correnti:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Interrompi i caricamenti in più parti incompleti dopo</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Caricamenti:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>File o directory inesistente: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>autorizzazione negata</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Non è un percorso locale</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Non è una directory: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Autorizzazione negata: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Directory non valida</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Esiste già: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Impossibile creare la directory %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Eliminazione della radice di un file system rifiutata</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: non trovato</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… e altri %1</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>Impossibile eliminare %n elemento</numerusform>
            <numerusform>Impossibile eliminare %n elementi</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Impossibile spostare %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Impossibile spostare direttamente una directory tra file system diversi</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>È una directory: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Impossibile leggere %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Impossibile scrivere %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Errore durante la lettura di %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Errore durante la scrittura di %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Verifica di integrità non riuscita per %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>Byte scritti: %1, previsti: %2</translation>
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
        <translation>Caricato: %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modifica</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Copia…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>&amp;Sposta…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>&amp;Rinomina…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>&amp;Nuova cartella…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>E&amp;limina…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>&amp;Impostazioni…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Esci</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Copia &amp;percorso</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>Copia &amp;URI S3</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Copia URL &amp;HTTP</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Copia &amp;ARN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>Pr&amp;oprietà</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Modifica me&amp;tadati, tag, archiviazione…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Con&amp;dividi link (URL prefirmato)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Mostra &amp;versioni</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Sfoglia &amp;alla data…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>&amp;Cronologia versioni…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>&amp;Ripristina dall&apos;archivio…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>Caricamenti in più parti &amp;incompleti…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Nuovo &amp;bucket…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>&amp;Proprietà bucket…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleziona &amp;tutto</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Deseleziona tutto</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>&amp;Inverti selezione</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>&amp;Filtro rapido…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>Cerca &amp;file…</translation>
    </message>
    <message>
        <source>&amp;Compare Panels…</source>
        <translation>&amp;Confronta pannelli…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>Vai alla &amp;cartella contenitore</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Aggiorna</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Mostra file &amp;nascosti</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>&amp;Scambia pannelli</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Apri nell&apos;altro &amp;pannello</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Indietro</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Avanti</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Home</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Radice</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>&amp;Modifica indirizzo</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Posizioni pannello &amp;sinistro…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Posizioni pannello &amp;destro…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Gestisci connessioni…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>Mostra &amp;trasferimenti</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>&amp;Metti in pausa tutti</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>&amp;Riprendi tutti</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Cancella completati</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Impostazioni di trasferimento…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Scorciatoie da tastiera</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Informazioni</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;File</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Seleziona</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>V&amp;ai</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Trasferimenti</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Connessioni</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Guida</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Radice (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Connessioni S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Tutte le connessioni</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Come l&apos;altro pannello</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>Cerca file</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>Apri un bucket per cercarvi.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>Apri un&apos;unità per cercarvi.</translation>
    </message>
    <message>
        <source>Compare Panels</source>
        <translation>Confronta pannelli</translation>
    </message>
    <message>
        <source>Both panels need to show a folder.</source>
        <translation>Entrambi i pannelli devono mostrare una cartella.</translation>
    </message>
    <message>
        <source>Leave the versions view to compare the panels.</source>
        <translation>Esci dalla vista delle versioni per confrontare i pannelli.</translation>
    </message>
    <message>
        <source>Both panels show the same folder.</source>
        <translation>Entrambi i pannelli mostrano la stessa cartella.</translation>
    </message>
    <message>
        <source>Comparing contents…</source>
        <translation>Confronto dei contenuti…</translation>
    </message>
    <message>
        <source>Comparison cancelled</source>
        <translation>Confronto annullato</translation>
    </message>
    <message>
        <source>A panel changed during the comparison; compare again.</source>
        <translation>Un pannello è cambiato durante il confronto; ripeti il confronto.</translation>
    </message>
    <message numerus="yes">
        <source>%n content check(s) failed; see the tooltips in the comparison column.</source>
        <translation>
            <numerusform>%n verifica del contenuto non riuscita; vedi i suggerimenti nella colonna Confronto.</numerusform>
            <numerusform>%n verifiche del contenuto non riuscite; vedi i suggerimenti nella colonna Confronto.</numerusform>
        </translation>
    </message>
    <message>
        <source>Only the items loaded so far were compared (scroll down to load more).</source>
        <translation>Sono stati confrontati solo gli elementi caricati finora (scorri in basso per caricarne altri).</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>%n percorso copiato negli appunti</numerusform>
            <numerusform>%n percorsi copiati negli appunti</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>In coda: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Ripresa di %n trasferimento interrotto</numerusform>
            <numerusform>Ripresa di %n trasferimenti interrotti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>%n trasferimento interrotto ripristinato; riprenderlo nel pannello Trasferimenti</numerusform>
            <numerusform>%n trasferimenti interrotti ripristinati; riprenderli nel pannello Trasferimenti</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Completato: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n errore</numerusform>
            <numerusform>%1: %n errori</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Annullato: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>La nuova lingua verrà usata al riavvio di S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>I contrassegni di eliminazione non possono essere copiati.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Le versioni non possono essere spostate o rinominate; copiarle oppure usare Cronologia versioni.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Le cartelle verrebbero copiate con il contenuto attuale. Uscire dalla vista &quot;alla data&quot; per copiare le cartelle, oppure selezionare i file.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Vista versioni</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementi</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Sposta %1 in:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Copia %1 in:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 non supporta la ridenominazione: gli oggetti vengono copiati, quindi gli originali vengono eliminati.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Sposta</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Destinazione non valida: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Rinomina</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Nuovo nome:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>Il nome non deve contenere separatori di percorso.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>Non è possibile creare cartelle nei risultati della ricerca</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Impossibile creare cartelle in questa posizione</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nuova cartella</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Nome della cartella (usare / per cartelle nidificate):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Nome di cartella non valido: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Elimina</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>Nella vista versioni è possibile eliminare solo versioni. Uscire dalla vista per eliminare cartelle.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Elimina bucket</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Eliminare i bucket uno alla volta.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Questi elementi non possono essere eliminati qui</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Eliminare definitivamente la cartella &quot;%1&quot; e tutto il suo contenuto?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>Eliminare definitivamente &quot;%1&quot;?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>Eliminare definitivamente %n elemento selezionato?</numerusform>
            <numerusform>Eliminare definitivamente %n elementi selezionati?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Nessuna applicazione per aprire %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Un contrassegno di eliminazione non ha contenuto</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Selezionare oggetti o cartelle S3 da modificare</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n elemento selezionato</numerusform>
            <numerusform>%n elementi selezionati</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Aggiornamento degli oggetti…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Annullato dopo %n oggetto</numerusform>
            <numerusform>Annullato dopo %n oggetti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>%n oggetto aggiornato</numerusform>
            <numerusform>%n oggetti aggiornati</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Modifica oggetti</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>Oggetti aggiornati: %1 di %n; non riusciti: %2.</numerusform>
            <numerusform>Oggetti aggiornati: %1 di %n; non riusciti: %2.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>Chiudi prima i risultati della ricerca</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Le versioni possono essere mostrate all&apos;interno dei bucket S3</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>Il controllo delle versioni non è mai stato abilitato su %1: ogni oggetto ha una sola versione</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>Il controllo delle versioni è sospeso su %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>La navigazione a un momento specifico funziona all&apos;interno dei bucket S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Sfoglia alla data</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Mostra questo bucket com&apos;era in un determinato momento, ricostruito dalla cronologia delle versioni (solo bucket con controllo delle versioni).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Data e ora:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Torna alla versione corrente</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Selezionare un oggetto S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Elimina versioni</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Eliminare definitivamente %n versione? L&apos;operazione non può essere annullata.</numerusform>
            <numerusform>Eliminare definitivamente %n versioni? L&apos;operazione non può essere annullata.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>%n versione eliminata</numerusform>
            <numerusform>%n versioni eliminate</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Selezionare oggetti o cartelle S3 archiviati</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Richiesta dei ripristini…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Ripristino richiesto per %n oggetto</numerusform>
            <numerusform>Ripristino richiesto per %n oggetti</numerusform>
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
            <numerusform>%n non archiviato, già ripristinato o in corso</numerusform>
            <numerusform>%n non archiviati, già ripristinati o in corso</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Ripristina dall&apos;archivio</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n non riuscito.</numerusform>
            <numerusform>%n non riusciti.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Aprire prima un bucket S3</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Aprire prima una connessione S3</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Creazione del bucket %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Nuovo bucket</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Impossibile creare %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Bucket %1 creato</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Selezionare o aprire un bucket</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Verifica del contenuto di %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Eliminazione del contenuto di %1…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln elemento eliminato…</numerusform>
            <numerusform>%Ln elementi eliminati…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Bucket %1 eliminato</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Annullato; %n elemento era già stato eliminato</numerusform>
            <numerusform>Annullato; %n elementi erano già stati eliminati</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Impossibile eliminare il bucket %1.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>%1 e %2 prima dell&apos;errore.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n elemento eliminato</numerusform>
            <numerusform>%n elementi eliminati</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n caricamento interrotto</numerusform>
            <numerusform>%n caricamenti interrotti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>Impossibile eliminare %n elemento (conservazione, blocco a fini legali o autorizzazioni).</numerusform>
            <numerusform>Impossibile eliminare %n elementi (conservazione, blocco a fini legali o autorizzazioni).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Selezionare un oggetto S3 da condividere</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Apri</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Apri con l&apos;applicazione predefinita</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Rendi corrente questa versione</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Ripristina versione</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Annulla eliminazione</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Niente da copiare</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n riga copiata negli appunti</numerusform>
            <numerusform>%n righe copiate negli appunti</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Cambia pannello</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Apri / cartella superiore</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Spazio</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Inverti selezione (e scendi) / inverti selezione</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+Frecce</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Estendi selezione</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Digitare lettere</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Vai al nome</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Scorciatoie da tastiera</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Informazioni su S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;File manager a doppio pannello per Amazon S3 e storage compatibili con S3.&lt;/p&gt;&lt;p&gt;Realizzato con Qt %2 e AWS SDK per C++.&lt;/p&gt;&lt;p&gt;Licenza MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Modifiche remote non salvate</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Alcuni file modificati contengono modifiche non caricate. Uscire comunque?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n trasferimento ancora in corso. Uscire e continuarlo la prossima volta?</numerusform>
            <numerusform>%n trasferimenti ancora in corso. Uscire e continuarli la prossima volta?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n trasferimento ancora in corso. Uscire e abbandonarlo?</numerusform>
            <numerusform>%n trasferimenti ancora in corso. Uscire e abbandonarli?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Trasferimenti in corso</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n minuto</numerusform>
            <numerusform>%n minuti</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n ora</numerusform>
            <numerusform>%n ore</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n giorno</numerusform>
            <numerusform>%n giorni</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Caricamenti in più parti incompleti — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>I caricamenti interrotti mantengono le loro parti (e il relativo costo di archiviazione) finché non vengono completati o interrotti. Una regola del ciclo di vita del bucket può interromperli automaticamente.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Prefisso chiave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(intero bucket)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Aggiorna</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chiave</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Avviato</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Età</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Parti</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe di archiviazione</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Interrompi &amp;selezionati…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Interrompi &amp;tutti…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID caricamento: %1
Avviato da: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Nessun caricamento incompleto. (Alcuni servizi compatibili con S3 elencano i caricamenti solo per una chiave di oggetto esatta: immetterla come prefisso.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n caricamento incompleto, %1 occupati.</numerusform>
            <numerusform>%n caricamenti incompleti, %1 occupati.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Caricamento…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Interrompi caricamenti</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>Interrompere %n caricamento? Le parti caricate vengono eliminate.</numerusform>
            <numerusform>Interrompere %n caricamenti? Le parti caricate vengono eliminate.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Interruzione…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Modifica oggetti</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Modifica %1. Vengono applicate solo le sezioni selezionate; le cartelle includono tutto ciò che contengono.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Intestazioni e metadati</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(invariato)</translation>
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
        <translation>Imposta metadati utente:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chiave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Sostituisci tutti i metadati utente (altrimenti unisci)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>chiave-a, chiave-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Rimuovi chiavi:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe di archiviazione</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Crittografia</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Tag (sostituisce il set di tag)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Controllo degli accessi (ACL predefinita)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Intestazioni, classe di archiviazione e crittografia vengono modificate copiando ogni oggetto su se stesso (S3 non consente di modificarle altrimenti); questo reimposta l&apos;ACL, a meno che non venga impostata anche qui. Gli oggetti archiviati (Glacier, Deep Archive) devono prima essere ripristinati.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Applica</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Selezionare almeno una sezione da modificare.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Chiave di metadati non valida &quot;%1&quot;: usare lettere, cifre, &apos;-&apos;, &apos;_&apos; e &apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Posizioni e connessioni</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Home</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Radice</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Riprova</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Ferma</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>Interrompi la ricerca (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>Nuova ricerca…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>Chiudi i risultati della ricerca</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filtro (sottostringa o caratteri jolly * ?) — Esc per chiudere</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>Impossibile cercare in %1</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>Ricerca non riuscita: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>Risultati della ricerca: %1 in %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Indirizzo sconosciuto: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Posizione non valida: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Impossibile aprire %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>Selezionati: %1 di %2, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n cartella</numerusform>
            <numerusform>%n cartelle</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n file</numerusform>
            <numerusform>%n file</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Alla data %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Tutte le versioni] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — ricerca in corso… (%1 esaminati)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — ricerca interrotta a %n risultato</numerusform>
            <numerusform> — ricerca interrotta a %n risultati</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — ricerca interrotta</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — %1 esaminati</translation>
    </message>
    <message>
        <source> — compared: %1</source>
        <translation> — confronto: %1</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — caricamento…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — altri elementi disponibili (scorrere verso il basso)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Condividi link — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Download (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Caricamento / sostituzione (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Consente:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>minuti</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>ore</translation>
    </message>
    <message>
        <source>days</source>
        <translation>giorni</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Valido per:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>&amp;Copia URL</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>Mostra codice &amp;QR</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Gli URL prefirmati sono validi al massimo 7 giorni; la scadenza è stata ridotta.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Scadenza: %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Queste sono credenziali temporanee (token di sessione, SSO o ruolo assunto): l&apos;URL smette di funzionare quando scadono.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>La scadenza è stata ridotta di conseguenza.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Applica</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Proprietà — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Generale</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadati</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Archiviazione &amp;&amp; crittografia</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Autorizzazioni</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blocco oggetti</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Checksum</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Tutte le intestazioni</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chiave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valore</translation>
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
        <translation>Metadati utente (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 archivia le intestazioni con l&apos;oggetto: l&apos;applicazione copia l&apos;oggetto su se stesso. La sua ACL viene reimpostata sul valore predefinito del bucket; i tag vengono mantenuti.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Fino a 10 tag; chiavi fino a 128 caratteri e valori fino a 256.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Classe di archiviazione:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Crittografia:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Chiave del cliente (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Proprietario:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Beneficiario</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Autorizzazione</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Sostituisci con ACL predefinita:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nessuna</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Governance (può essere rimossa con un&apos;autorizzazione speciale)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Conformità (non può essere ridotta né rimossa)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Modalità di conservazione:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Conserva fino al:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Ignora la modalità governance (necessario per ridurre o rimuovere una conservazione in modalità governance)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Blocco a fini legali</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algoritmo</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Archiviato</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>File locale</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Risultato</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Confronta con file locale…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Caricamento…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Impossibile caricare l&apos;oggetto: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Impossibile caricare i metadati: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Posizione:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>File (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Cartella (prefisso)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Cartella</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Connessione</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Dimensione:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Modificato:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Destinazione del collegamento:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Autorizzazioni:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Nascosto:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Sì</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID versione:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Regione:</translation>
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
        <translation>Tag non disponibili: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Questo oggetto è archiviato; per cambiarne la classe di archiviazione serve una copia ripristinata.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;La modifica di questi valori copia l&apos;oggetto su se stesso.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>Le ACL sono disabilitate per questo bucket (Proprietà degli oggetti: proprietario del bucket imposto). Usare le policy del bucket per concedere l&apos;accesso.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>ACL non disponibile: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Proprietà degli oggetti: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>Stato di Blocco oggetti non disponibile: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>Blocco oggetti non è abilitato su questo bucket (può essere abilitato solo alla creazione del bucket).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Conservato in modalità %1 fino al %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Nessuna conservazione impostata su questa versione.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Applicazione…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Chiave di metadati non valida &quot;%1&quot;: usare lettere, cifre, &apos;-&apos;, &apos;_&apos; e &apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Metadati salvati.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Tag salvati.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Nessuna modifica.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Impostazioni di archiviazione salvate.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL impostata su %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Impostazioni di Blocco oggetti salvate.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Confronta con file locale</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Calcolo dei checksum di %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Corrisponde</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>DIVERSO</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>L&apos;oggetto non ha un checksum confrontabile.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>Il file locale corrisponde all&apos;oggetto.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>Il file locale è diverso dall&apos;oggetto.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Le chiavi del cliente richiedono una connessione salvata.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Elenchi delle versioni non supportati in questa posizione</translation>
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
        <translation>Nessun provider</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Impossibile creare una directory temporanea</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>File di grandi dimensioni</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot; occupa %2. Scaricarlo in un file temporaneo?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Le versioni precedenti non possono essere modificate; ripristinare prima la versione</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Download di %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Impossibile scaricare %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Nessuna applicazione per aprire questo file</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Nessuna applicazione per modificare questo file</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Carica modifiche</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>&quot;%1&quot; è stato modificato. Caricarlo in %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>File remoto modificato</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 è stato modificato sul server dopo l&apos;apertura. Sovrascriverlo con la propria versione?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Impossibile caricare %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Ripristina dall&apos;archivio</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Richiedere una copia temporanea leggibile di %1. L&apos;oggetto archiviato resta dov&apos;è; la copia viene fatturata alla tariffa standard del bucket fino alla scadenza.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> giorno</numerusform>
            <numerusform> giorni</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Conserva la copia per:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Standard (Glacier: 3–5 ore, Deep Archive: entro 12 ore)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Bulk (il più economico; 5–12 ore, Deep Archive: entro 48 ore)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Expedited (solo Glacier; 1–5 minuti, il più costoso)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Livello di recupero:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Richiedi ripristino</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Impostazione di proprietà degli oggetti sconosciuta</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Errore di sintassi JSON alla riga %1, colonna %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Campo sconosciuto &quot;%1&quot; in: %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Controllo delle versioni</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Crittografia predefinita</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Regole del ciclo di vita</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Policy del bucket</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Blocco dell&apos;accesso pubblico</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Hosting di siti web statici</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Blocco oggetti</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Proprietà degli oggetti</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>I nomi dei bucket devono contenere da 3 a 63 caratteri.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>I nomi dei bucket possono contenere solo lettere minuscole, cifre, punti e trattini.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>I nomi dei bucket devono iniziare e terminare con una lettera o una cifra.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>I nomi dei bucket non devono contenere due punti consecutivi.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>I nomi dei bucket non devono essere simili a un indirizzo IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>I nomi dei bucket non devono iniziare con &quot;%1&quot; (riservato da AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>I nomi dei bucket non devono terminare con &quot;%1&quot; (riservato da AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>I nomi con punti non funzionano con l&apos;indirizzamento HTTPS virtual-hosted (il certificato TLS non corrisponde) né con Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Gli ID delle regole possono contenere al massimo 255 caratteri.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Una regola richiede almeno un&apos;azione: una transizione, una scadenza o l&apos;interruzione dei caricamenti incompleti.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>La dimensione minima degli oggetti deve essere inferiore alla massima.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Le chiavi dei tag devono contenere da 1 a 128 caratteri.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>I valori dei tag possono contenere al massimo 256 caratteri.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Una regola che filtra in base ai tag non può interrompere i caricamenti incompleti (i caricamenti non hanno tag).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Una regola che filtra in base ai tag non può rimuovere i contrassegni di eliminazione scaduti.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Gli oggetti possono scadere al più presto dopo 1 giorno.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Scegliere un numero di giorni oppure una data per la scadenza.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>La rimozione dei contrassegni di eliminazione scaduti non può essere combinata con la scadenza delle versioni correnti nella stessa regola.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Classe di archiviazione di transizione sconosciuta &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Due transizioni a %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Ogni transizione richiede un numero di giorni o una data.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Gli oggetti possono passare a %1 al più presto dopo 30 giorni.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Usare giorni oppure date per tutte le transizioni e la scadenza di una regola.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>La scadenza deve essere successiva all&apos;ultima transizione.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Due transizioni di versioni non correnti a %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Le versioni non correnti possono essere spostate al più presto dopo 1 giorno.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>Il numero di versioni più recenti da mantenere deve essere compreso tra 1 e 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Le versioni non correnti possono essere eliminate al più presto dopo 1 giorno.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Per mantenere le versioni non correnti più recenti è necessaria una scadenza delle versioni non correnti.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>I caricamenti incompleti possono essere interrotti al più presto dopo 1 giorno.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>prefisso &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>tag %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>più grande di %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>più piccolo di %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Intero bucket</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>a %1 dopo %2 g</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>a %1 il %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>scadenza dopo %1 g</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>scadenza il %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>rimuovi contrassegni di eliminazione scaduti</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>non correnti a %1 dopo %2 g</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>elimina non correnti dopo %1 g (mantieni %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>elimina non correnti dopo %1 g</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>interrompi caricamenti dopo %1 g</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Un bucket può avere al massimo 1000 regole del ciclo di vita.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Regola %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Regola &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: un&apos;altra regola ha lo stesso ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>configurazione</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>regola %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 non è un oggetto</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status deve essere &quot;Enabled&quot; o &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation>, filtro</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Una regola CORS richiede almeno un&apos;origine consentita.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Una regola CORS richiede almeno un metodo consentito.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Metodo non supportato &quot;%1&quot; (usare GET, PUT, POST, DELETE o HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Origine non valida &quot;%1&quot;: al massimo un carattere jolly &quot;*&quot;.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Intestazione non valida &quot;%1&quot;: al massimo un carattere jolly &quot;*&quot;.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>La durata massima non può essere negativa.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Un bucket può avere al massimo 100 regole CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Regola %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Una policy deve essere un oggetto JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Manca &quot;Version&quot;: aggiungere &quot;Version&quot;: &quot;2012-10-17&quot; (senza di essa le variabili di policy non funzionano).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Versione di policy sconosciuta &quot;%1&quot; (usare &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>La versione &quot;2008-10-17&quot; è obsoleta; usare &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>La policy richiede uno &quot;Statement&quot; (un oggetto o un array di oggetti).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>La policy non contiene istruzioni.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>L&apos;istruzione %1 non è un oggetto.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Istruzione %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Istruzione &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: il Sid è usato due volte.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; deve essere &quot;Allow&quot; o &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: le policy del bucket richiedono un &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: manca &quot;Action&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: manca &quot;Resource&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; non è un&apos;azione S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; non è un ARN di risorsa S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; non appartiene a questo bucket (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 concede l&apos;accesso a chiunque (Principal &quot;*&quot; senza condizione).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Lettura pubblica (chiunque può scaricare gli oggetti)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Nega le richieste senza TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Accesso in sola lettura per un altro account AWS</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Il reindirizzamento di tutte le richieste non può essere combinato con documenti o regole di routing.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>Il protocollo di reindirizzamento deve essere http o https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>L&apos;hosting di siti web richiede un documento indice (o il reindirizzamento di tutte le richieste).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>Il documento indice non deve contenere &quot;/&quot; (è un suffisso aggiunto alle richieste di cartelle).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Ogni regola di routing richiede un reindirizzamento.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Una regola di routing può sostituire la chiave o il prefisso della chiave, non entrambi.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Le regole di routing devono essere un array JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>regola di routing %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>La modalità di conservazione deve essere GOVERNANCE o COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>La conservazione predefinita richiede che Blocco oggetti sia abilitato sul bucket.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Impostare il periodo di conservazione predefinito in giorni o in anni (uno dei due).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>Il periodo di conservazione predefinito può essere al massimo di 100 anni.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Un bucket può avere al massimo 50 tag.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Autenticazione non riuscita: verificare la chiave di accesso e il segreto</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>L&apos;orologio del computer differisce troppo dall&apos;ora del server</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>L&apos;oggetto non esiste</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>Il bucket non esiste</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>Il caricamento in più parti non esiste</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>L&apos;oggetto è archiviato; richiederne il ripristino (S3 &gt; Ripristina dall&apos;archivio) e attendere che sia disponibile</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Accesso negato</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Il bucket esiste già</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>Il bucket non è vuoto</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>Il servizio sta limitando le richieste; riprovare più tardi</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Errore di rete: impossibile raggiungere l&apos;endpoint</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Timeout della richiesta</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>Il bucket si trova in una regione diversa da quella configurata</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>Il servizio non supporta questa operazione</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Non trovato</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>La richiesta è stata rifiutata perché non valida</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Richiesta S3 non riuscita</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>ACL predefinita sconosciuta: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Gli URL prefirmati sono solo per gli oggetti</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Impossibile firmare l&apos;URL (nessuna credenziale utilizzabile)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
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
        <translation>Non è una posizione S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Oggetto o cartella inesistente: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Creazione di bucket non supportata in questa posizione</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>Il bucket esiste già</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Esiste già: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Eliminazione di bucket non supportata in questa posizione</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>Impossibile eliminare %n oggetto</numerusform>
            <numerusform>Impossibile eliminare %n oggetti</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 non supporta la ridenominazione; usare copia ed eliminazione</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Verifica di integrità non riuscita per %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Nessuna chiave SSE-C configurata per il bucket %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>L&apos;ETag %1 differisce da quello dell&apos;origine %2</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>Byte archiviati: %1, previsti: %2</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Download incompleto: %1 di %2 byte</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>MD5 %1 differisce dall&apos;ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Impossibile sostituire %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Impossibile scrivere %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>File inesistente: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>È una directory: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Destinazione non valida: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Impossibile leggere %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>L&apos;ETag %1 differisce dall&apos;MD5 locale %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Errore durante la lettura di %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>L&apos;ETag %1 differisce da quello previsto %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Non possibile nell&apos;elenco delle connessioni</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Non è una posizione S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Connessione sconosciuta</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>Impossibile ottenere le credenziali per il profilo AWS &quot;%1&quot;. Se usa AWS SSO (IAM Identity Center), la sessione potrebbe essere scaduta: esegui &quot;aws sso login&quot; e riprova.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>Nessuna credenziale AWS nell&apos;ambiente: imposta AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY prima di avviare l&apos;applicazione.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>Nessuna credenziale AWS trovata (ambiente, profili ~/.aws, SSO, identità web o metadati dell&apos;istanza). Se usi AWS SSO, esegui &quot;aws sso login&quot; e riprova.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Nessuna chiave segreta archiviata per questa connessione; modificare la connessione per immetterla</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Connesso: %n bucket visibile</numerusform>
            <numerusform>Connesso: %n bucket visibili</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Connesso (elenco dei bucket non consentito; %n bucket fissato raggiungibile)</numerusform>
            <numerusform>Connesso (elenco dei bucket non consentito; %n bucket fissati raggiungibili)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Nessuna</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, chiavi gestite da S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (chiave AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (chiave fornita dal cliente)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Un oggetto può avere al massimo 10 tag.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Le chiavi dei tag devono contenere da 1 a 128 caratteri.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>I valori dei tag possono contenere al massimo 256 caratteri.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Le chiavi dei tag non devono iniziare con &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Non archiviato</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Archiviato; ripristino in corso</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Archiviato; copia ripristinata disponibile fino al %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Archiviato; ripristinarlo per leggere i dati</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Non è una versione: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>Impossibile eliminare %n versione</numerusform>
            <numerusform>Impossibile eliminare %n versioni</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 non è eliminato</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Nessuna versione di %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Livello di ripristino sconosciuto: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Ripristinare per almeno un giorno</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>in &quot;%1&quot;</translation>
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
        <translation>modificato dopo il %1</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>modificato prima del %1</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>, </translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>Espressione regolare non valida alla posizione %1: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>Modello con caratteri jolly &quot;%1&quot; non valido: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>Cerca file</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>Cerca in:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>ad es. *.log; report — vuoto: tutto</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>Caratteri jolly: * qualsiasi testo, ? un carattere, [abc] uno di questi. Separa più modelli con &apos;;&apos;. Il testo senza caratteri jolly viene cercato in qualsiasi punto del nome.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>Caratteri jolly</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>Espressione regolare</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>Sint&amp;assi:</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>Distingui &amp;maiuscole/minuscole</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>Confronta il &amp;percorso completo sotto la cartella di ricerca</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>Confronta &quot;2024/*.csv&quot; con &quot;logs/2024/a.csv&quot; invece che con il solo nome; * corrisponde allora anche a &apos;/&apos;</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>ad es. logs/2024- (facoltativo)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>Vengono cercati solo i percorsi sotto la cartella di ricerca che iniziano con questo testo. Su S3 il server filtra in base a questo prefisso di chiave, molto più velocemente che elencando tutto.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>P&amp;refisso del percorso:</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>ad es. 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>ad es. 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>Dimensione m&amp;inima:</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>Dimensione ma&amp;ssima:</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>Modificato &amp;dopo il:</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>Modificato prima de&amp;l:</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>Qualsiasi</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>Classe di archi&amp;viazione:</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>File e cartelle</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>Solo file</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>Solo cartelle</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>Incl&amp;udi:</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>Includi file e cartelle nascos&amp;ti</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>Nessun limite</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>Numer&amp;o massimo di risultati:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Cerca</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>&quot;%1&quot; non è una dimensione (esempi: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>La dimensione minima è maggiore di quella massima.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>La data &quot;dopo&quot; è successiva alla data &quot;prima&quot;.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>Le cartelle non hanno dimensione, data né classe di archiviazione: cerca file per usare questi criteri.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>Il prefisso del percorso non può uscire dalla cartella di ricerca.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Errore del portachiavi di sistema</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>Nessun segreto archiviato nel portachiavi di sistema</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Segreto non trovato</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Impostazioni</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Predefinita di sistema (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Lingua:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;La nuova lingua verrà usata al riavvio di S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Chiave di crittografia del cliente (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Gli oggetti SSE-C sono crittografati con una chiave a 256 bit conservata dall&apos;utente. S3 non la archivia: &lt;b&gt;se la chiave viene persa, gli oggetti non possono essere letti&lt;/b&gt;. La chiave viene conservata nel portachiavi di sistema.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 caratteri) o 64 cifre esadecimali</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostra</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Genera</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Usa per ogni bucket di questa connessione senza una chiave propria</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Rimuovi chiave</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>È configurata una chiave per il bucket %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Nessuna chiave configurata per il bucket %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>La chiave deve essere di 32 byte, in base64 o 64 cifre esadecimali.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Rimuovere la chiave per il bucket %1? Gli oggetti crittografati con essa non potranno essere letti senza di essa.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Opzioni</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Chiedi</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Sovrascrivi</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Salta</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Mantieni entrambi (rinomina il nuovo file)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Sovrascrivi se più recente</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Sovrascrivi se la dimensione è diversa</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Se un file esiste:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>ad es. *.jpg; *.png (vuoto: tutto)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Solo i file corrispondenti a:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>ad es. *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Escludi:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Verifica l&apos;integrità dopo il trasferimento (dimensione, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Mantieni le date di modifica</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Segui i collegamenti simbolici (altrimenti saltali)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Predefinita della connessione</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Classe di archiviazione S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Crittografia S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Trasferimenti</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Pausa</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Riprendi</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Riprova non riusciti</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Sposta su</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Sposta giù</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Rimuovi</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Metti in pausa tutti</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Riprendi tutti</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Cancella completati</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Impostazioni…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>In corso: %1, in coda: %2</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>In corso: %1</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Errore di trasferimento</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID richiesta: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Annulla trasferimento</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>Annullare &quot;%1&quot;? I file trasferiti parzialmente vengono scartati.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Rimuovi trasferimento</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>Rimuovere &quot;%1&quot;? Non è stato completato; i dati parziali vengono scartati.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementi</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Copia %1 in %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Sposta %1 in %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Elimina %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Nessun provider per questa posizione</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>Origine e destinazione coincidono</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Impossibile copiare una cartella in se stessa</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Nessun nome libero trovato</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Esiste già una cartella con questo nome</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>In coda</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>In pausa</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Completato, %n saltato</numerusform>
            <numerusform>Completato, %n saltati</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Completato</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Non riuscito</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Annullato</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Avvio</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Analisi</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Eliminazione</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Spostamento</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Copia</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Finalizzazione</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n errore)</numerusform>
            <numerusform>(%n errori)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementi</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n file</numerusform>
            <numerusform>%1 / %n file</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Trasferimento</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Stato</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Avanzamento</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Velocità</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Tempo rimanente</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Impostazioni di trasferimento</translation>
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
        <translation>Illimitata</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Riprendi automaticamente all&apos;avvio i trasferimenti interrotti</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Trasferimenti contemporanei:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>File in parallelo per trasferimento:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Parti in parallelo per file:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>In più parti oltre:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Dimensione delle parti:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Limite di larghezza di banda:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Tentativi per file:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;La dimensione delle parti aumenta automaticamente per i file molto grandi (S3 consente al massimo 10.000 parti). Le modifiche si applicano ai trasferimenti avviati successivamente; il limite di larghezza di banda si applica immediatamente.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Cronologia versioni — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificato</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe di archiviazione</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Stato</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID versione</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Visualizza</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Scarica…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>&amp;Ripristina come corrente</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Elimina &amp;definitivamente…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>&amp;Annulla eliminazione</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Ignora la conservazione in modalità governance durante l&apos;eliminazione</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Aggiorna</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Caricamento delle versioni…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Contrassegno di eliminazione (oggetto eliminato)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Contrassegno di eliminazione</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Corrente</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Precedente</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Nessuna versione trovata.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>Versioni e contrassegni di eliminazione: %n.</numerusform>
            <numerusform>Versioni e contrassegni di eliminazione: %n.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Elaborazione…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Scarica versione</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>Salvato: %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>La versione selezionata è di nuovo la versione corrente.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Elimina versioni</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Eliminare definitivamente %n versione? L&apos;operazione non può essere annullata.</numerusform>
            <numerusform>Eliminare definitivamente %n versioni? L&apos;operazione non può essere annullata.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>%n versione eliminata.</numerusform>
            <numerusform>%n versioni eliminate.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>L&apos;oggetto è stato ripristinato.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Visualizza — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — vengono mostrati i primi %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — binario (%1), primi %2 mostrati in esadecimale</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Apri con l&apos;applicazione predefinita</translation>
    </message>
</context>
</TS>
