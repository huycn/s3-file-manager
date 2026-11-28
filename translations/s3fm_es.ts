<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es" sourcelanguage="en">
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
        <translation>Equipo</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Orígenes permitidos</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Métodos</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Encabezados permitidos</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Encabezados expuestos</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Antigüedad máx. (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>&amp;Agregar regla</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Quitar regla</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Reglas</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Separe varios valores con comas. Métodos: GET, PUT, POST, DELETE, HEAD. Se permite un comodín &quot;*&quot; por origen o encabezado.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;plicar</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Configuración CORS eliminada</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Reglas CORS guardadas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Ninguno</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (claves administradas por S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (clave de AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (doble capa, clave de AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>&amp;Cifrado predeterminado:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>ID de clave, ARN o alias (vacío: clave administrada aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>C&amp;lave KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>Usar una clave de &amp;bucket de S3 (menos solicitudes a KMS, menor costo)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Se aplica a los objetos que se escriban a partir de ahora y que no soliciten su propio cifrado. Los objetos existentes conservan su cifrado (vuelva a escribirlos con Editar objetos para cambiarlo). AWS cifra con SSE-S3 cuando no hay nada configurado.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Cifrado predeterminado guardado</translation>
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
        <translation>Estado</translation>
    </message>
    <message>
        <source>Applies to</source>
        <translation>Se aplica a</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Acciones</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>&amp;Agregar…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Editar…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>Habilitar/&amp;deshabilitar</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Quitar</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Reglas</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>Las reglas se ejecutan una vez al día. El JSON usa el formato de &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. Los servicios compatibles con S3 pueden ignorar las acciones que no admiten (MinIO necesita niveles remotos para las transiciones).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;plicar</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(generado)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Habilitada</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Deshabilitada</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Regla modificada; Aplicar guarda las reglas en el bucket.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Configuración del ciclo de vida eliminada</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Reglas de ciclo de vida guardadas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Habilitar Bloqueo de objetos…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ninguno</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Gobierno (los usuarios con permisos especiales pueden quitarla)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Cumplimiento (nadie puede quitarla, ni siquiera la cuenta raíz)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>&amp;Retención predeterminada:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>días</translation>
    </message>
    <message>
        <source>years</source>
        <translation>años</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Período:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Las nuevas versiones de objetos reciben la retención predeterminada, a menos que la carga establezca la suya propia. Las versiones retenidas no se pueden eliminar ni sobrescribir hasta que finalice el período.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Habilitar Bloqueo de objetos</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>¿Habilitar Bloqueo de objetos en %1? No se puede deshacer y el control de versiones quedará habilitado de forma permanente. (Algunos servicios solo lo permiten al crear el bucket).</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Bloqueo de objetos habilitado</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n día</numerusform>
            <numerusform>%n días</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n año</numerusform>
            <numerusform>%n años</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueo de objetos</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>Nadie puede acortar ni quitar una retención en modo de cumplimiento. Las nuevas versiones no se podrán eliminar durante %1. ¿Desea continuar?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Retención predeterminada guardada</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>El Bloqueo de objetos está habilitado en este bucket.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>El Bloqueo de objetos no está habilitado en este bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketOverviewTab</name>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <source>Region</source>
        <translation>Región</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Creación</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Propietario</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Propietario del bucket obligatorio (ACL deshabilitadas)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Propietario del bucket preferido</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Escritor del objeto</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Propiedad de objetos</translation>
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
        <translation>&amp;Plantillas</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Política del bucket</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>¿Reemplazar el texto actual por la plantilla?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Formatear</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>No hay política del bucket. Elija una plantilla o pegue un documento de política.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Eliminar política…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>No se puede formatear: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Sin política.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>No se encontraron problemas.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>¿Eliminar la política del bucket %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Política del bucket eliminada</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Corrija primero los errores de la política: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Esta política concede acceso a cualquier persona en Internet. ¿Aplicarla de todos modos?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Política del bucket guardada</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Propiedades del bucket — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Información general</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Control de versiones</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Cifrado</translation>
    </message>
    <message>
        <source>Lifecycle</source>
        <translation>Ciclo de vida</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Policy</source>
        <translation>Política</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Acceso público</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Sitio web</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueo de objetos</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Estadísticas</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: no compatible con este punto de enlace</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Bloquear &amp;todo el acceso público</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Bloquear el acceso público concedido mediante nuevas ACL</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Ignorar el acceso público concedido mediante cualquier ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Bloquear el acceso público concedido mediante nuevas políticas de bucket</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Restringir el acceso a los buckets con políticas públicas a los servicios de AWS y a la cuenta del propietario</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>La configuración de nivel de cuenta también se aplica y prevalece sobre esta. Desactivar los bloqueos no hace público nada por sí mismo.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Acceso público</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>¿Permitir la configuración de acceso público en %1? Los objetos podrán hacerse públicos mediante ACL o la política del bucket.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Configuración de acceso público guardada</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Prefijo de clave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(todo el bucket)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Calcular</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Objetos</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Se cuenta enumerando cada versión de objeto (una solicitud por cada 1000 claves), lo que tarda en buckets grandes. Para buckets con millones de objetos, S3 Storage Lens o las métricas de CloudWatch BucketSizeBytes/NumberOfObjects son más rápidos (se actualizan a diario).</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Counting…</source>
        <translation>Contando…</translation>
    </message>
    <message>
        <source>%1 bytes</source>
        <translation>%1 bytes</translation>
    </message>
    <message>
        <source>Current objects</source>
        <translation>Objetos actuales</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Versiones no actuales</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Marcadores de eliminación</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Todas las versiones</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Cargas multiparte incompletas</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Listo.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Cancelado: recuentos parciales.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;plicar</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Aplicando…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Contando… %L1 elementos</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Clave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Hasta 50 etiquetas; se usan para la asignación de costos y el control de acceso. Las etiquetas de objeto son independientes (Editar objetos).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Etiquetas guardadas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Control de versiones:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Eliminación con MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Con el control de versiones, al sobrescribir o eliminar un objeto se conservan los datos anteriores como versión no actual (facturada como almacenamiento). Una vez habilitado, el control de versiones no se puede desactivar, solo suspender: las versiones existentes se conservan. Solo la cuenta raíz puede cambiar la eliminación con MFA mediante la API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Habilitar control de versiones</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>&amp;Suspender control de versiones</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Control de versiones habilitado</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Suspender control de versiones</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>¿Suspender el control de versiones en %1? Las nuevas escrituras volverán a reemplazar los objetos; las versiones existentes se conservan.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Control de versiones suspendido</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Deshabilitado (nunca se habilitó)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Habilitado</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Suspendido</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Deshabilitado</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Habilitar el alojamiento de sitios &amp;web estáticos</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>&amp;Alojar un sitio web</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>Documento de &amp;índice:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>opcional, p. ej., error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Documento de &amp;error:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Reglas de redirección opcionales (matriz JSON), p. ej.:
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>&amp;Reglas de enrutamiento:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>Redirigir &amp;todas las solicitudes a otro host</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>p. ej., www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>&amp;Nombre de host:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Igual que la solicitud</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Protocolo:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Los puntos de enlace de sitio web sirven objetos mediante HTTP sin cifrar y solo los objetos con lectura pública (política del bucket, bloqueo de acceso público).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>Ap&amp;licar</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Punto de enlace del sitio web: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Configuración del sitio web guardada</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Alojamiento de sitio web deshabilitado</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>El archivo ya existe</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; ya existe en el destino. ¿Desea sobrescribirlo?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Nuevo:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Existente:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>El archivo nuevo es más reciente.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>El archivo existente es más reciente o igual de antiguo.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Ambos tienen el mismo tamaño.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Los tamaños son distintos.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Aplicar a todos los conflictos restantes de esta transferencia</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>S&amp;obrescribir</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>O&amp;mitir</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>&amp;Conservar ambos</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Copiar con un nombre nuevo, como &quot;nombre (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Si es más &amp;reciente</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Sobrescribir solo si el archivo nuevo es más reciente; de lo contrario, omitir</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>&amp;Si el tamaño difiere</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Sobrescribir solo si los tamaños son distintos; de lo contrario, omitir</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Cancelar transferencia</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Conexiones</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Agregar</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplicar</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Importar perfiles de AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Crear conexiones para los perfiles de %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexión</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nombre:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Se usa en direcciones como s3://&lt;id&gt;/bucket/key. No se puede cambiar después de guardar.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Proveedor:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Dejar vacío para Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>&amp;URL del punto de enlace:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Región:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automático</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Alojamiento virtual (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Estilo de ruta (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>&amp;Direccionamiento:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Credenciales</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Clave de acceso y secreto</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Perfil de AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Variables de entorno</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Cadena de credenciales predeterminada de AWS</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anónimo (buckets públicos)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>ID de clave de acceso:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostrar</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Clave de acceso secreta:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Opcional (credenciales temporales)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Token de sesión:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Los secretos se guardan en el llavero del sistema, nunca en archivos de configuración.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Perfil:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Admite perfiles con claves estáticas, SSO, asunción de rol (role_arn / source_profile) y credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avanzado</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Verificar certificados TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Certificados del sistema</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Examinar…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Paquete de CA</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Certificados (*.pem *.crt);;Todos los archivos (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Paquete de CA:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Cuando se admitan (predeterminado de AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Solo cuando sean necesarias (más compatible)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Algunos servicios compatibles con S3 rechazan los encabezados de suma de comprobación de integridad más recientes.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Sumas de comprobación de solicitudes:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Predeterminada del bucket</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Clase de almacenamiento de carga:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Buckets que se muestran aunque las credenciales no permitan enumerar buckets.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Buckets fijados:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b o * para todos</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Buckets con pago por solicitante: las solicitudes a ellos se facturan a su cuenta (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Pago por solicitante:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Tiempo de espera de solicitud:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>Pr&amp;obar conexión</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Guardado en el llavero; déjelo vacío para conservarlo</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Nueva conexión de %1</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (copia)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Eliminar conexión</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>¿Eliminar la conexión &quot;%1&quot; y su secreto guardado?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Importar perfiles de AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>No se encontraron perfiles en %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Todos los perfiles de AWS ya están importados.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Usa AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY y AWS_SESSION_TOKEN del entorno con el que se inició la aplicación.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Prueba las variables de entorno, el perfil predeterminado, SSO, la identidad web y las credenciales de contenedor/instancia, en el orden estándar del SDK de AWS.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>Las solicitudes no se firman. Solo se puede acceder a buckets y objetos públicos.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Guardar conexión</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Ya existe una conexión con el ID &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Introduzca la clave de acceso secreta.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Probando…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Cambios sin guardar</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>¿Guardar los cambios en &quot;%1&quot;?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Conexiones *</translation>
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
        <translation>Otro compatible con S3</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Introduzca un nombre para la conexión.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>El ID solo puede contener letras minúsculas, dígitos, &apos;.&apos;, &apos;-&apos; y &apos;_&apos;.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>El punto de enlace debe ser una URL http:// o https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Reemplace el marcador de posición en la URL del punto de enlace.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Introduzca la URL del punto de enlace del servicio compatible con S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Introduzca una región (por ejemplo, us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Introduzca el ID de clave de acceso.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Elija un perfil de AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>No se pudo escribir el archivo de configuración</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Nuevo bucket</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>letras minúsculas, dígitos, puntos y guiones</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nombre:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>predeterminada del punto de enlace</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Región:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Predeterminado (propietario del bucket obligatorio: ACL deshabilitadas)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Propietario del bucket preferido (ACL habilitadas)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Escritor del objeto (ACL habilitadas)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Propiedad de objetos:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ninguna</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>&amp;ACL predefinida:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Habilitar &amp;Bloqueo de objetos (activa el control de versiones; no se puede desactivar)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Los nuevos buckets de AWS bloquean el acceso público de forma predeterminada; las ACL públicas fallan hasta que se flexibilice el bloqueo de acceso público.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Crear</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Introduzca un nombre de bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Eliminar bucket</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>¿Eliminar de forma permanente el bucket vacío &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>objetos</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>versiones de objetos o marcadores de eliminación</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>cargas multiparte incompletas</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; no está vacío: contiene %2.&lt;br&gt;&lt;br&gt;Para eliminarlo, primero se eliminan todos los objetos, todas las versiones y todas las cargas incompletas. &lt;b&gt;No se puede deshacer.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Vaciar el bucket y luego eliminarlo</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>&amp;Omitir la retención en modo de gobierno (requiere s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Escriba el nombre del bucket para confirmar:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Vaciar y eliminar</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Sin cambios / predeterminado del bucket</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>ID de clave KMS, ARN o alias (vacío: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>No hay proveedor para %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexión</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Carpeta</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>Archivo %1</translation>
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
        <translation>Marcador de eliminación (eliminado)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Marcador de eliminación</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (actual)</translation>
    </message>
    <message>
        <source>%1
→ %2</source>
        <translation>%1
→ %2</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nombre</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificación</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Clase de almacenamiento</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Versión</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Operación cancelada</translation>
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
        <translation>Agregar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Quitar</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> días</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>bytes (vacío: sin límite)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Agregar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Quitar</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Regla de ciclo de vida</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>opcional; S3 genera uno</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Habilitada</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;ID de regla:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filtro</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>Versiones a&amp;ctuales</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>Versiones &amp;no actuales &amp;&amp; cargas</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>La regla se aplica a los objetos que cumplen todas las condiciones siguientes; sin condiciones, se aplica a todo el bucket.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>p. ej., logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Prefijo de clave:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Mayor que:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Menor que:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Etiquetas de objeto:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Mover a la clase de almacenamiento</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Después de (días o AAAA-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Transiciones:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nunca</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Después de</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>En la fecha</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Hacer vencer (eliminar) objetos:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Quitar marcadores de eliminación vencidos (marcadores sin versiones no actuales)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;En un bucket con control de versiones, el vencimiento de una versión actual agrega un marcador de eliminación; los datos se conservan como versión no actual.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Días después de pasar a no actual</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Conservar las más recientes (opcional)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Eliminar después de</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>conservando las más recientes</translation>
    </message>
    <message>
        <source>none</source>
        <translation>ninguna</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Versiones no actuales:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Anular cargas multiparte incompletas después de</translation>
    </message>
    <message>
        <source>Uploads:</source>
        <translation>Cargas:</translation>
    </message>
</context>
<context>
    <name>s3fm::LocalProvider</name>
    <message>
        <source>No such file or directory: %1</source>
        <translation>No existe el archivo o directorio: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>permiso denegado</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>No es una ubicación local</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>No es un directorio: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Permiso denegado: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Directorio no válido</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Ya existe: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>No se puede crear el directorio %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>No se permite eliminar la raíz de un sistema de archivos</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: no se encontró</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… y %1 más</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>No se pudo eliminar %n elemento</numerusform>
            <numerusform>No se pudieron eliminar %n elementos</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>No se puede mover %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>No se puede mover un directorio directamente entre sistemas de archivos</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Es un directorio: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>No se puede leer %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>No se puede escribir %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Error al leer %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Error al escribir %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Falló la comprobación de integridad de %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>Se escribieron %1 bytes; se esperaban %2</translation>
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
        <translation>Cargado: %1</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>E&amp;ditar</translation>
    </message>
    <message>
        <source>&amp;Copy…</source>
        <translation>&amp;Copiar…</translation>
    </message>
    <message>
        <source>&amp;Move…</source>
        <translation>&amp;Mover…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>Cambiar &amp;nombre…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>Nueva c&amp;arpeta…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Eliminar…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>C&amp;onfiguración…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Salir</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Copiar &amp;ubicación</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>Copiar URI de S&amp;3</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Copiar URL &amp;HTTP</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Copiar A&amp;RN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Propiedades</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Compartir en&amp;lace (URL prefirmada)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Mostrar &amp;versiones</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Explorar en una &amp;fecha…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>&amp;Historial de versiones…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>&amp;Restaurar desde archivado…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>Cargas multiparte &amp;incompletas…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Nuevo &amp;bucket…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>Propiedades del b&amp;ucket…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleccionar &amp;todo</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Deseleccionar todo</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>&amp;Invertir selección</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>&amp;Filtro rápido…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>&amp;Buscar archivos…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>Ir a la &amp;carpeta contenedora</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Actualizar</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Mostrar archivos &amp;ocultos</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>&amp;Intercambiar paneles</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Abrir en el otro &amp;panel</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Atrás</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>Ade&amp;lante</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Inicio</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Raíz</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>Editar &amp;dirección</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Ubicaciones del panel i&amp;zquierdo…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Ubicaciones del panel d&amp;erecho…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Administrar conexiones…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>Mostrar &amp;transferencias</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>&amp;Pausar todo</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>&amp;Reanudar todo</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Limpiar finalizadas</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Configuración de transferencias…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Atajos de teclado</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>Acerca &amp;de</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Archivo</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Seleccionar</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>&amp;Ir</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Transferencias</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Conexiones</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Ay&amp;uda</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Raíz (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Conexiones S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Todas las conexiones</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Igual que el otro panel</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>Buscar archivos</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>Abra un bucket para buscar en él.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>Abra una unidad para buscar en ella.</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>Se copió %n ubicación al portapapeles</numerusform>
            <numerusform>Se copiaron %n ubicaciones al portapapeles</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>En cola: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Reanudando %n transferencia interrumpida</numerusform>
            <numerusform>Reanudando %n transferencias interrumpidas</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>Se restauró %n transferencia interrumpida; reanúdela en el panel Transferencias</numerusform>
            <numerusform>Se restauraron %n transferencias interrumpidas; reanúdelas en el panel Transferencias</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Finalizado: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n error</numerusform>
            <numerusform>%1: %n errores</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Cancelado: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>El nuevo idioma se usará al reiniciar S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Los marcadores de eliminación no se pueden copiar.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Las versiones no se pueden mover ni cambiar de nombre; cópielas o use Historial de versiones.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>Las carpetas se copiarían con su contenido actual. Salga de la vista &quot;en una fecha&quot; para copiar carpetas, o seleccione los archivos.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Vista de versiones</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementos</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Mover %1 a:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Copiar %1 a:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>S3 no permite cambiar nombres: los objetos se copian y luego se eliminan los originales.</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Mover</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>Copiar</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Destino no válido: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Cambiar nombre</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Nombre nuevo:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>El nombre no debe contener separadores de ruta.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>No se pueden crear carpetas en los resultados de búsqueda</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>No se pueden crear carpetas aquí</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nueva carpeta</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Nombre de carpeta (use / para carpetas anidadas):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Nombre de carpeta no válido: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>En la vista de versiones solo se pueden eliminar versiones. Salga de ella para eliminar carpetas.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Eliminar bucket</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Elimine los buckets de uno en uno.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Estos elementos no se pueden eliminar aquí</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>¿Eliminar de forma permanente la carpeta &quot;%1&quot; y todo su contenido?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>¿Eliminar &quot;%1&quot; de forma permanente?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>¿Eliminar de forma permanente %n elemento seleccionado?</numerusform>
            <numerusform>¿Eliminar de forma permanente %n elementos seleccionados?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>No hay ninguna aplicación para abrir %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Un marcador de eliminación no tiene contenido</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Seleccione objetos o carpetas de S3 para editar</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n elemento seleccionado</numerusform>
            <numerusform>%n elementos seleccionados</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Actualizando objetos…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Cancelado después de %n objeto</numerusform>
            <numerusform>Cancelado después de %n objetos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>Se actualizó %n objeto</numerusform>
            <numerusform>Se actualizaron %n objetos</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Editar objetos</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>%1 de %n objeto actualizado; %2 con errores.</numerusform>
            <numerusform>%1 de %n objetos actualizados; %2 con errores.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>Cierre primero los resultados de búsqueda</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln elemento eliminado…</numerusform>
            <numerusform>%Ln elementos eliminados…</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>Antes del error: %1 y %2.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n elemento eliminado</numerusform>
            <numerusform>%n elementos eliminados</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n carga anulada</numerusform>
            <numerusform>%n cargas anuladas</numerusform>
        </translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>Las versiones se pueden mostrar dentro de buckets de S3</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Editar metadatos, eti&amp;quetas, almacenamiento…</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>El control de versiones nunca se ha habilitado en %1: cada objeto tiene una sola versión</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>El control de versiones está suspendido en %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>La exploración en un momento dado funciona dentro de buckets de S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Explorar en una fecha</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Muestra este bucket tal como estaba en un momento dado, reconstruido a partir de su historial de versiones (solo buckets con control de versiones).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Fecha y hora:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Volver al estado actual</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Seleccione un objeto de S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Eliminar versiones</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>¿Eliminar de forma permanente %n versión? No se puede deshacer.</numerusform>
            <numerusform>¿Eliminar de forma permanente %n versiones? No se puede deshacer.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>Se eliminó %n versión</numerusform>
            <numerusform>Se eliminaron %n versiones</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Seleccione objetos o carpetas de S3 archivados</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Solicitando restauraciones…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Restauración solicitada para %n objeto</numerusform>
            <numerusform>Restauración solicitada para %n objetos</numerusform>
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
            <numerusform>%n no archivado, ya restaurado o en curso</numerusform>
            <numerusform>%n no archivados, ya restaurados o en curso</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Restaurar desde archivado</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n con error.</numerusform>
            <numerusform>%n con errores.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Abra primero un bucket de S3</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Abra primero una conexión S3</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Creando el bucket %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Nuevo bucket</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>No se pudo crear %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Bucket %1 creado</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Seleccione un bucket o abra uno</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Comprobando el contenido de %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Eliminando el contenido de %1…</translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Bucket %1 eliminado</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Cancelado; ya se había eliminado %n elemento</numerusform>
            <numerusform>Cancelado; ya se habían eliminado %n elementos</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>No se pudo eliminar el bucket %1.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>No se pudo eliminar %n elemento (retención, retención legal o permisos).</numerusform>
            <numerusform>No se pudieron eliminar %n elementos (retención, retención legal o permisos).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Seleccione un objeto de S3 para compartir</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Abrir con la aplicación predeterminada</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Convertir en versión actual</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Restaurar versión</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Recuperar</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Nada que copiar</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>Se copió %n línea al portapapeles</numerusform>
            <numerusform>Se copiaron %n líneas al portapapeles</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Cambiar de panel</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Abrir / carpeta superior</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Espacio</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Alternar selección (y bajar) / alternar selección</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+flechas</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Ampliar selección</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Escribir letras</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Saltar al nombre</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Atajos de teclado</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Acerca de S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Administrador de archivos de doble panel para Amazon S3 y almacenamiento compatible con S3.&lt;/p&gt;&lt;p&gt;Creado con Qt %2 y el AWS SDK for C++.&lt;/p&gt;&lt;p&gt;Licencia MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Ediciones remotas sin guardar</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Algunos archivos editados tienen cambios que no se cargaron. ¿Desea salir de todos modos?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n transferencia sigue en curso. ¿Salir y continuarla la próxima vez?</numerusform>
            <numerusform>%n transferencias siguen en curso. ¿Salir y continuarlas la próxima vez?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n transferencia sigue en curso. ¿Salir y abandonarla?</numerusform>
            <numerusform>%n transferencias siguen en curso. ¿Salir y abandonarlas?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Transferencias en curso</translation>
    </message>
</context>
<context>
    <name>s3fm::MultipartUploadsDialog</name>
    <message numerus="yes">
        <source>%n minute(s)</source>
        <translation>
            <numerusform>%n minuto</numerusform>
            <numerusform>%n minutos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n hour(s)</source>
        <translation>
            <numerusform>%n hora</numerusform>
            <numerusform>%n horas</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n día</numerusform>
            <numerusform>%n días</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Cargas multiparte incompletas — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Las cargas interrumpidas conservan sus partes (y su costo de almacenamiento) hasta que se completan o se anulan. Una regla de ciclo de vida del bucket puede anularlas automáticamente.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Prefijo de clave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(todo el bucket)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Clave</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Antigüedad</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Partes</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Clase de almacenamiento</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Anular &amp;seleccionadas…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Anular &amp;todas…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID de carga: %1
Iniciada por: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>No hay cargas incompletas. (Algunos servicios compatibles con S3 solo enumeran las cargas de una clave de objeto exacta: introdúzcala como prefijo).</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n carga incompleta, %1 almacenados.</numerusform>
            <numerusform>%n cargas incompletas, %1 almacenados.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Cargando…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Anular cargas</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>¿Anular %n carga? Se eliminarán sus partes cargadas.</numerusform>
            <numerusform>¿Anular %n cargas? Se eliminarán sus partes cargadas.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Anulando…</translation>
    </message>
</context>
<context>
    <name>s3fm::ObjectEditDialog</name>
    <message>
        <source>Edit Objects</source>
        <translation>Editar objetos</translation>
    </message>
    <message>
        <source>Change %1. Only checked sections are applied; folders include everything below them.</source>
        <translation>Cambiar %1. Solo se aplican las secciones marcadas; las carpetas incluyen todo su contenido.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Encabezados y metadatos</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(sin cambios)</translation>
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
        <translation>Establecer metadatos de usuario:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Clave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Reemplazar todos los metadatos de usuario (de lo contrario, combinar)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>clave-a, clave-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Quitar claves:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Clase de almacenamiento</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Cifrado</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Etiquetas (reemplazar el conjunto de etiquetas)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Control de acceso (ACL predefinida)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Los encabezados, la clase de almacenamiento y el cifrado se cambian copiando cada objeto sobre sí mismo (S3 no permite cambiarlos de otro modo); esto restablece su ACL, salvo que también se establezca una ACL aquí. Los objetos archivados (Glacier, Deep Archive) deben restaurarse primero.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Marque al menos una sección para cambiar.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Clave de metadatos no válida &quot;%1&quot;: use letras, dígitos, &apos;-&apos;, &apos;_&apos; y &apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Ubicaciones y conexiones</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Raíz</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Reintentar</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Detener</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>Detener la búsqueda (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>Nueva búsqueda…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>Cerrar los resultados de búsqueda</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filtro (subcadena o comodines * ?) — Esc para cerrar</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>No se puede buscar en %1</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>La búsqueda falló: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>Resultados de búsqueda: %1 en %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Dirección desconocida: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Ubicación no válida: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>No se puede abrir %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>%1 de %2 seleccionados, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n archivo</numerusform>
            <numerusform>%n archivos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n carpeta</numerusform>
            <numerusform>%n carpetas</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[En %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Todas las versiones] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — buscando… (%1 revisados)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — búsqueda detenida en %n resultado</numerusform>
            <numerusform> — búsqueda detenida en %n resultados</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — búsqueda detenida</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — %1 revisados</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — cargando…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — hay más elementos (desplácese hacia abajo)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Compartir enlace — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Descarga (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Carga / reemplazo (PUT)</translation>
    </message>
    <message>
        <source>Allows:</source>
        <translation>Permite:</translation>
    </message>
    <message>
        <source>minutes</source>
        <translation>minutos</translation>
    </message>
    <message>
        <source>hours</source>
        <translation>horas</translation>
    </message>
    <message>
        <source>days</source>
        <translation>días</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Válida durante:</translation>
    </message>
    <message>
        <source>&amp;Copy URL</source>
        <translation>&amp;Copiar URL</translation>
    </message>
    <message>
        <source>Show &amp;QR Code</source>
        <translation>Mostrar código &amp;QR</translation>
    </message>
    <message>
        <source>Presigned URLs are valid for at most 7 days; the expiry was shortened.</source>
        <translation>Las URL prefirmadas son válidas durante 7 días como máximo; se acortó la caducidad.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Caduca el %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Son credenciales temporales (token de sesión, SSO o rol asumido): la URL deja de funcionar cuando caducan.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>Se acortó la caducidad para que coincida con ellas.</translation>
    </message>
</context>
<context>
    <name>s3fm::PropertiesDialog</name>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Properties — %1</source>
        <translation>Propiedades — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadatos</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Almacenamiento y cifrado</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Permisos</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueo de objetos</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Sumas de comprobación</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Todos los encabezados</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Clave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
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
        <translation>Metadatos de usuario (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;S3 guarda los encabezados con el objeto: al aplicar, el objeto se copia sobre sí mismo. Su ACL se restablece a la predeterminada del bucket; las etiquetas se conservan.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Hasta 10 etiquetas; claves de hasta 128 caracteres y valores de hasta 256.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Clase de almacenamiento:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Cifrado:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Clave del cliente (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Propietario:</translation>
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
        <translation>Permiso</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Reemplazar por ACL predefinida:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Ninguno</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Gobierno (se puede levantar con un permiso especial)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Cumplimiento (no se puede acortar ni quitar)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Modo de retención:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Retener hasta:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Omitir el modo de gobierno (necesario para acortar o quitar una retención de gobierno)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Retención legal</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algoritmo</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Almacenada</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Archivo local</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Resultado</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Comparar con archivo local…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Cargando…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>No se pudo cargar el objeto: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>No se pudieron cargar los metadatos: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Ubicación:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Archivo (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Carpeta (prefijo)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Carpeta</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexión</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Tamaño:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Modificación:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Destino del enlace:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Permisos:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Oculto:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Sí</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID de versión:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Región:</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>URI de S3:</translation>
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
        <translation>Las etiquetas no están disponibles: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Este objeto está archivado; cambiar su clase de almacenamiento requiere una copia restaurada.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Al cambiar estos valores, el objeto se copia sobre sí mismo.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>Las ACL están deshabilitadas para este bucket (Propiedad de objetos: propietario del bucket obligatorio). Use políticas de bucket para conceder acceso.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>La ACL no está disponible: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Propiedad de objetos: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>El estado del Bloqueo de objetos no está disponible: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>El Bloqueo de objetos no está habilitado en este bucket (solo se puede habilitar al crear el bucket).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Retenido en modo %1 hasta %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>No hay retención establecida en esta versión.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Aplicando…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Clave de metadatos no válida &quot;%1&quot;: use letras, dígitos, &apos;-&apos;, &apos;_&apos; y &apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Metadatos guardados.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Etiquetas guardadas.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>No hubo cambios.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Configuración de almacenamiento guardada.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL establecida en %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Configuración del Bloqueo de objetos guardada.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Comparar con archivo local</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Calculando las sumas de comprobación de %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Coincide</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>DIFERENTE</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>El objeto no tiene ninguna suma de comprobación que se pueda comparar.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>El archivo local coincide con el objeto.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>El archivo local difiere del objeto.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Las claves del cliente requieren una conexión guardada.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Aquí no se admiten listas de versiones</translation>
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
        <translation>Sin proveedor</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>No se puede crear un directorio temporal</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Archivo grande</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot; ocupa %2. ¿Descargarlo en un archivo temporal?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Las versiones anteriores no se pueden editar; restaure primero la versión</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Descargando %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>No se puede descargar %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>No hay ninguna aplicación para abrir este archivo</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>No hay ninguna aplicación para editar este archivo</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Cargar cambios</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>Se modificó &quot;%1&quot;. ¿Cargarlo en %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>El archivo remoto cambió</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 cambió en el servidor desde que lo abrió. ¿Sobrescribirlo con su versión?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>No se puede cargar %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Restaurar desde archivado</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Solicite una copia temporal y legible de %1. El objeto archivado permanece donde está; la copia se factura a la tarifa estándar del bucket hasta que vence.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> día</numerusform>
            <numerusform> días</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Conservar la copia durante:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Estándar (Glacier: 3–5 horas; Deep Archive: en 12 horas)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Masiva (la más económica; 5–12 horas; Deep Archive: en 48 horas)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Acelerada (solo Glacier; 1–5 minutos, la más cara)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Nivel de recuperación:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Solicitar restauración</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Configuración de propiedad de objetos desconocida</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Error de sintaxis JSON en la línea %1, columna %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Campo desconocido &quot;%1&quot; en %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Control de versiones</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Cifrado predeterminado</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Reglas de ciclo de vida</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Política del bucket</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Bloqueo de acceso público</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Alojamiento de sitios web estáticos</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueo de objetos</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Propiedad de objetos</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Los nombres de bucket deben tener entre 3 y 63 caracteres.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Los nombres de bucket solo pueden contener letras minúsculas, dígitos, puntos y guiones.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Los nombres de bucket deben empezar y terminar con una letra o un dígito.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Los nombres de bucket no deben contener dos puntos consecutivos.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Los nombres de bucket no deben tener formato de dirección IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Los nombres de bucket no deben empezar por &quot;%1&quot; (reservado por AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Los nombres de bucket no deben terminar en &quot;%1&quot; (reservado por AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Los nombres con puntos no funcionan con el direccionamiento HTTPS de alojamiento virtual (el certificado TLS no coincide) ni con Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Los ID de regla pueden tener como máximo 255 caracteres.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Una regla necesita al menos una acción: una transición, un vencimiento o la anulación de cargas incompletas.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>El tamaño mínimo de objeto debe ser menor que el máximo.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Las claves de etiqueta deben tener entre 1 y 128 caracteres.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Los valores de etiqueta pueden tener como máximo 256 caracteres.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Una regla que filtra por etiquetas no puede anular cargas incompletas (las cargas no tienen etiquetas).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Una regla que filtra por etiquetas no puede quitar marcadores de eliminación vencidos.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Los objetos pueden vencer como mínimo después de 1 día.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Elija un número de días o una fecha para el vencimiento, no ambos.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Quitar marcadores de eliminación vencidos no se puede combinar con el vencimiento de versiones actuales en la misma regla.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Clase de almacenamiento de transición desconocida &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Dos transiciones a %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Cada transición necesita un número de días o una fecha.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Los objetos pueden pasar a %1 como mínimo después de 30 días.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Use días o fechas para todas las transiciones y el vencimiento de una regla, pero no ambos.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>El vencimiento debe ser posterior a la última transición.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Dos transiciones de versiones no actuales a %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Las versiones no actuales pueden moverse como mínimo después de 1 día.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>El número de versiones más recientes que se conservan debe estar entre 1 y 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Las versiones no actuales pueden eliminarse como mínimo después de 1 día.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Conservar versiones no actuales más recientes requiere un vencimiento de versiones no actuales.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Las cargas incompletas pueden anularse como mínimo después de 1 día.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>prefijo &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>etiqueta %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>mayor que %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>menor que %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Todo el bucket</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>a %1 tras %2 d</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>a %1 el %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>vencer tras %1 d</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>vencer el %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>quitar marcadores de eliminación vencidos</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>no actuales a %1 tras %2 d</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>eliminar no actuales tras %1 d (conservar %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>eliminar no actuales tras %1 d</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>anular cargas tras %1 d</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Un bucket puede tener como máximo 1000 reglas de ciclo de vida.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Regla %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Regla &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: otra regla tiene el mismo ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>la configuración</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>regla %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1 no es un objeto</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status debe ser &quot;Enabled&quot; o &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> filtro</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Una regla CORS necesita al menos un origen permitido.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Una regla CORS necesita al menos un método permitido.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Método no admitido &quot;%1&quot; (use GET, PUT, POST, DELETE o HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Origen no válido &quot;%1&quot;: como máximo un comodín &quot;*&quot;.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Encabezado no válido &quot;%1&quot;: como máximo un comodín &quot;*&quot;.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>La antigüedad máxima no puede ser negativa.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Un bucket puede tener como máximo 100 reglas CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Regla %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Una política debe ser un objeto JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Falta &quot;Version&quot;: agregue &quot;Version&quot;: &quot;2012-10-17&quot; (sin ella, las variables de política no funcionan).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Versión de política desconocida &quot;%1&quot; (use &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>La versión &quot;2008-10-17&quot; está obsoleta; use &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>La política necesita un &quot;Statement&quot; (un objeto o una matriz de objetos).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>La política no tiene instrucciones.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>La instrucción %1 no es un objeto.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Instrucción %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Instrucción &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: el Sid se usa dos veces.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; debe ser &quot;Allow&quot; o &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: las políticas de bucket necesitan un &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: falta &quot;Action&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: falta &quot;Resource&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; no es una acción de S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; no es un ARN de recurso de S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; no está en este bucket (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 concede acceso a todo el mundo (Principal &quot;*&quot; sin condición).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Lectura pública (cualquiera puede descargar objetos)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Denegar solicitudes sin TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Acceso de solo lectura para otra cuenta de AWS</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Redirigir todas las solicitudes no se puede combinar con documentos ni reglas de enrutamiento.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>El protocolo de redirección debe ser http o https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>El alojamiento de sitios web necesita un documento de índice (o una redirección de todas las solicitudes).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>El documento de índice no debe contener &quot;/&quot; (es un sufijo que se añade a las solicitudes de carpetas).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Cada regla de enrutamiento necesita una redirección.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Una regla de enrutamiento puede reemplazar la clave o el prefijo de clave, no ambos.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>Las reglas de enrutamiento deben ser una matriz JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>regla de enrutamiento %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>El modo de retención debe ser GOVERNANCE o COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>La retención predeterminada requiere que el Bloqueo de objetos esté habilitado en el bucket.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Establezca el período de retención predeterminado en días o en años (solo uno de ellos).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>El período de retención predeterminado puede ser como máximo de 100 años.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Un bucket puede tener como máximo 50 etiquetas.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Error de autenticación: compruebe la clave de acceso y el secreto</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>El reloj del equipo difiere demasiado de la hora del servidor</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>El objeto no existe</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>El bucket no existe</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>La carga multiparte no existe</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>El objeto está archivado; solicite una restauración (S3 &gt; Restaurar desde archivado) y espere a que esté disponible</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Acceso denegado</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>El bucket ya existe</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>El bucket no está vacío</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>El servicio está limitando las solicitudes; inténtelo de nuevo más tarde</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Error de red: no se pudo acceder al punto de enlace</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>Se agotó el tiempo de espera de la solicitud</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>El bucket está en una región distinta de la configurada</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>El servicio no admite esta operación</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>No se encontró</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>La solicitud se rechazó por no ser válida</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Error en la solicitud a S3</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>ACL predefinida desconocida: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>Las URL prefirmadas solo son para objetos</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>No se pudo firmar la URL (no hay credenciales utilizables)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
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
        <translation>No es una ubicación de S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>No existe el objeto o la carpeta: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>Aquí no se admite crear buckets</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>El bucket ya existe</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Ya existe: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>Aquí no se admite eliminar buckets</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>No se pudo eliminar %n objeto</numerusform>
            <numerusform>No se pudieron eliminar %n objetos</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>S3 no permite cambiar nombres; use copiar y eliminar</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Falló la comprobación de integridad de %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>No hay ninguna clave SSE-C configurada para el bucket %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>La ETag %1 difiere de la del origen, %2</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>Se almacenaron %1 bytes; se esperaban %2</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Descarga incompleta: %1 de %2 bytes</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>El MD5 %1 difiere de la ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>No se puede reemplazar %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>No se puede escribir %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>No existe el archivo: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>Es un directorio: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Destino no válido: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>No se puede leer %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>La ETag %1 difiere del MD5 local %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Error al leer %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>La ETag %1 difiere de la esperada, %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>No es posible en la lista de conexiones</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>No es una ubicación de S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Conexión desconocida</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>No se pudieron obtener credenciales para el perfil de AWS &quot;%1&quot;. Si usa AWS SSO (IAM Identity Center), puede que la sesión haya caducado: ejecute &quot;aws sso login&quot; e inténtelo de nuevo.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>No hay credenciales de AWS en el entorno: defina AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY antes de iniciar la aplicación.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>No se encontraron credenciales de AWS (entorno, perfiles de ~/.aws, SSO, identidad web o metadatos de instancia). Si usa AWS SSO, ejecute &quot;aws sso login&quot; e inténtelo de nuevo.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>No hay ninguna clave secreta guardada para esta conexión; edite la conexión para introducirla</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Conectado: %n bucket visible</numerusform>
            <numerusform>Conectado: %n buckets visibles</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Conectado (no se permite enumerar buckets; se puede acceder a %n bucket fijado)</numerusform>
            <numerusform>Conectado (no se permite enumerar buckets; se puede acceder a %n buckets fijados)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Ninguno</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, claves administradas por S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (clave de AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (clave proporcionada por el cliente)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Un objeto puede tener como máximo 10 etiquetas.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>Las claves de etiqueta deben tener entre 1 y 128 caracteres.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Los valores de etiqueta pueden tener como máximo 256 caracteres.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>Las claves de etiqueta no deben empezar por &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>No archivado</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Archivado; restauración en curso</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Archivado; copia restaurada disponible hasta %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Archivado; restáurelo para leer los datos</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>No es una versión: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>No se pudo eliminar %n versión</numerusform>
            <numerusform>No se pudieron eliminar %n versiones</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 no está eliminado</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>No hay versiones de %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Nivel de restauración desconocido: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Restaurar durante al menos un día</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>bajo &quot;%1&quot;</translation>
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
        <translation>modificado después de %1</translation>
    </message>
    <message>
        <source>modified before %1</source>
        <translation>modificado antes de %1</translation>
    </message>
    <message>
        <source>, </source>
        <comment>separator between search criteria</comment>
        <translation>, </translation>
    </message>
    <message>
        <source>Invalid regular expression at position %1: %2</source>
        <translation>Expresión regular no válida en la posición %1: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>Patrón de comodines no válido &quot;%1&quot;: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>Buscar archivos</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>Buscar en:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>p. ej., *.log; informe — vacío: todo</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>Comodines: * cualquier texto, ? un carácter, [abc] uno de estos. Separe varios patrones con &apos;;&apos;. El texto sin comodines coincide en cualquier parte del nombre.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nombre:</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>Comodines</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>Expresión regular</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>S&amp;intaxis:</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>&amp;Distinguir mayúsculas y minúsculas</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>Comparar la &amp;ruta completa bajo la carpeta de búsqueda</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>Comparar &quot;2024/*.csv&quot; con &quot;logs/2024/a.csv&quot; en lugar de solo con el nombre; * también coincide entonces con &apos;/&apos;</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>p. ej., logs/2024- (opcional)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>Solo se buscan las rutas bajo la carpeta de búsqueda que empiezan por este texto. En S3 el servidor filtra por este prefijo de clave, lo que es mucho más rápido que listarlo todo.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>&amp;Prefijo de ruta:</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>p. ej., 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>p. ej., 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>Tamaño mínim&amp;o:</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>Tamaño &amp;máximo:</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>Modificado d&amp;espués de:</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>Modificado &amp;antes de:</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>Cualquiera</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>Clase de almacenamien&amp;to:</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>Archivos y carpetas</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>Solo archivos</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>Solo carpetas</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>Inc&amp;luir:</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>Incluir archivos y carpetas o&amp;cultos</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>Sin límite</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>Má&amp;ximo de resultados:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Buscar</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>&quot;%1&quot; no es un tamaño (ejemplos: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>El tamaño mínimo es mayor que el máximo.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>La fecha &quot;después de&quot; es posterior a la fecha &quot;antes de&quot;.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>Las carpetas no tienen tamaño, fecha ni clase de almacenamiento: busque archivos para usar estos criterios.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>El prefijo de ruta no puede salir de la carpeta de búsqueda.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Error del llavero del sistema</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>No hay ningún secreto guardado en el llavero del sistema</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>No se encontró el secreto</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Configuración</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Predeterminado del sistema (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;El nuevo idioma se usará al reiniciar S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Clave de cifrado del cliente (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Los objetos SSE-C se cifran con una clave de 256 bits que usted conserva. S3 no la almacena: &lt;b&gt;si se pierde la clave, los objetos no se pueden leer&lt;/b&gt;. La clave se guarda en el llavero del sistema.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 caracteres) o 64 dígitos hexadecimales</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostrar</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Generar</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Usar para todos los buckets de esta conexión que no tengan clave propia</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Quitar clave</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Hay una clave configurada para el bucket %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>No hay ninguna clave configurada para el bucket %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>La clave debe tener 32 bytes, en base64 o como 64 dígitos hexadecimales.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>¿Quitar la clave del bucket %1? Los objetos cifrados con ella no se pueden leer sin ella.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Opciones</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Preguntar</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Sobrescribir</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Omitir</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Conservar ambos (cambiar el nombre del archivo nuevo)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Sobrescribir si es más reciente</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Sobrescribir si el tamaño difiere</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Si el archivo existe:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>p. ej., *.jpg; *.png (vacío: todo)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Solo archivos que coincidan con:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>p. ej., *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Excluir:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Verificar la integridad después de la transferencia (tamaño, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Conservar las fechas de modificación</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Seguir vínculos simbólicos (de lo contrario, omitirlos)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Predeterminado de la conexión</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Clase de almacenamiento de S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Cifrado de S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Transferencias</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Pausar</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Reanudar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Reintentar fallidas</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Subir</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Bajar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Quitar</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Pausar todo</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Reanudar todo</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Limpiar finalizadas</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Configuración…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 en curso, %2 en cola</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 en curso</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Error de transferencia</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID de solicitud: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Cancelar transferencia</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>¿Cancelar &quot;%1&quot;? Se descartarán los archivos transferidos parcialmente.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Quitar transferencia</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>¿Quitar &quot;%1&quot;? No ha finalizado; se descartarán los datos parciales.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementos</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Copiar %1 a %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Mover %1 a %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Eliminar %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>No hay proveedor para esta ubicación</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>El origen y el destino son el mismo</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>No se puede copiar una carpeta dentro de sí misma</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>No se encontró ningún nombre libre</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Ya existe una carpeta con este nombre</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>En cola</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>En pausa</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Finalizado, %n omitido</numerusform>
            <numerusform>Finalizado, %n omitidos</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Finalizado</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Con errores</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Cancelado</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Iniciando</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Examinando</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Eliminando</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Moviendo</translation>
    </message>
    <message>
        <source>Copying</source>
        <translation>Copiando</translation>
    </message>
    <message>
        <source>Finishing</source>
        <translation>Finalizando</translation>
    </message>
    <message numerus="yes">
        <source>(%n error(s))</source>
        <translation>
            <numerusform>(%n error)</numerusform>
            <numerusform>(%n errores)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n archivo</numerusform>
            <numerusform>%1 / %n archivos</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Transferencia</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Estado</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Progreso</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Velocidad</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Tiempo restante</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Configuración de transferencias</translation>
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
        <translation>Ilimitado</translation>
    </message>
    <message>
        <source>Resume interrupted transfers automatically at startup</source>
        <translation>Reanudar automáticamente las transferencias interrumpidas al iniciar</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Transferencias simultáneas:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Archivos en paralelo por transferencia:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Partes en paralelo por archivo:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Multiparte a partir de:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Tamaño de parte:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Límite de ancho de banda:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Reintentos por archivo:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;El tamaño de las partes aumenta automáticamente para archivos muy grandes (S3 permite como máximo 10.000 partes). Los cambios se aplican a las transferencias que se inicien después; el límite de ancho de banda se aplica de inmediato.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Historial de versiones — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificación</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Clase de almacenamiento</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Estado</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID de versión</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Descargar…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>&amp;Restaurar como actual</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Eliminar &amp;permanentemente…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>Rec&amp;uperar</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Omitir la retención en modo de gobierno al eliminar</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Actualizar</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Cargando versiones…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Marcador de eliminación (objeto eliminado)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Marcador de eliminación</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Actual</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Anterior</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>No se encontraron versiones.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n versión o marcador de eliminación.</numerusform>
            <numerusform>%n versiones y marcadores de eliminación.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Procesando…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Descargar versión</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>Guardado: %1</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>La versión seleccionada vuelve a ser la versión actual.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Eliminar versiones</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>¿Eliminar de forma permanente %n versión? No se puede deshacer.</numerusform>
            <numerusform>¿Eliminar de forma permanente %n versiones? No se puede deshacer.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>Se eliminó %n versión.</numerusform>
            <numerusform>Se eliminaron %n versiones.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>El objeto se ha recuperado.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Ver — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — se muestran los primeros %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — binario (%1), se muestran los primeros %2 en hexadecimal</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Abrir en la aplicación predeterminada</translation>
    </message>
</context>
</TS>
