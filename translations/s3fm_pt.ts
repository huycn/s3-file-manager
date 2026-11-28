<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt" sourcelanguage="en">
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
        <translation>Computador</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketCorsTab</name>
    <message>
        <source>Allowed origins</source>
        <translation>Origens permitidas</translation>
    </message>
    <message>
        <source>Methods</source>
        <translation>Métodos</translation>
    </message>
    <message>
        <source>Allowed headers</source>
        <translation>Cabeçalhos permitidos</translation>
    </message>
    <message>
        <source>Expose headers</source>
        <translation>Cabeçalhos expostos</translation>
    </message>
    <message>
        <source>Max age (s)</source>
        <translation>Idade máxima (s)</translation>
    </message>
    <message>
        <source>ID</source>
        <translation>ID</translation>
    </message>
    <message>
        <source>A&amp;dd Rule</source>
        <translation>A&amp;dicionar regra</translation>
    </message>
    <message>
        <source>&amp;Remove Rule</source>
        <translation>&amp;Remover regra</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regras</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Separate several values with commas. Methods: GET, PUT, POST, DELETE, HEAD. One &quot;*&quot; wildcard per origin or header is allowed.</source>
        <translation>Separe vários valores com vírgulas. Métodos: GET, PUT, POST, DELETE, HEAD. É permitido um curinga &quot;*&quot; por origem ou cabeçalho.</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>CORS configuration removed</source>
        <translation>Configuração de CORS removida</translation>
    </message>
    <message>
        <source>CORS rules saved</source>
        <translation>Regras de CORS salvas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketEncryptionTab</name>
    <message>
        <source>None</source>
        <translation>Nenhuma</translation>
    </message>
    <message>
        <source>SSE-S3 (keys managed by S3)</source>
        <translation>SSE-S3 (chaves gerenciadas pelo S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (chave do AWS KMS)</translation>
    </message>
    <message>
        <source>DSSE-KMS (dual-layer, AWS KMS key)</source>
        <translation>DSSE-KMS (camada dupla, chave do AWS KMS)</translation>
    </message>
    <message>
        <source>Default &amp;encryption:</source>
        <translation>&amp;Criptografia padrão:</translation>
    </message>
    <message>
        <source>key id, ARN or alias (empty: aws/s3 managed key)</source>
        <translation>ID da chave, ARN ou alias (vazio: chave gerenciada aws/s3)</translation>
    </message>
    <message>
        <source>KMS &amp;key:</source>
        <translation>C&amp;have do KMS:</translation>
    </message>
    <message>
        <source>Use an S3 &amp;Bucket Key (fewer KMS requests, lower cost)</source>
        <translation>Usar uma chave de &amp;bucket do S3 (menos solicitações ao KMS, custo menor)</translation>
    </message>
    <message>
        <source>Applies to objects written from now on that do not ask for their own encryption. Existing objects keep their encryption (rewrite them with Edit Objects to change it). AWS encrypts with SSE-S3 when nothing is set.</source>
        <translation>Aplica-se a objetos gravados a partir de agora que não solicitem sua própria criptografia. Objetos existentes mantêm sua criptografia (regrave-os com Editar objetos para alterá-la). A AWS criptografa com SSE-S3 quando nada está definido.</translation>
    </message>
    <message>
        <source>Default encryption saved</source>
        <translation>Criptografia padrão salva</translation>
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
        <translation>Aplica-se a</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Ações</translation>
    </message>
    <message>
        <source>A&amp;dd…</source>
        <translation>A&amp;dicionar…</translation>
    </message>
    <message>
        <source>&amp;Edit…</source>
        <translation>&amp;Editar…</translation>
    </message>
    <message>
        <source>E&amp;nable/Disable</source>
        <translation>&amp;Ativar/desativar</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Remover</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>Regras</translation>
    </message>
    <message>
        <source>JSON</source>
        <translation>JSON</translation>
    </message>
    <message>
        <source>Rules run once a day. JSON uses the format of &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. S3-compatible services may ignore actions they do not support (MinIO needs remote tiers for transitions).</source>
        <translation>As regras são executadas uma vez por dia. O JSON usa o formato de &lt;tt&gt;aws s3api put-bucket-lifecycle-configuration&lt;/tt&gt;. Serviços compatíveis com S3 podem ignorar ações que não suportam (o MinIO precisa de camadas remotas para transições).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>A&amp;plicar</translation>
    </message>
    <message>
        <source>(generated)</source>
        <translation>(gerado)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Ativada</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Desativada</translation>
    </message>
    <message>
        <source>Rule changed; Apply saves the rules to the bucket.</source>
        <translation>Regra alterada; Aplicar salva as regras no bucket.</translation>
    </message>
    <message>
        <source>Lifecycle configuration removed</source>
        <translation>Configuração de ciclo de vida removida</translation>
    </message>
    <message>
        <source>Lifecycle rules saved</source>
        <translation>Regras de ciclo de vida salvas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketObjectLockTab</name>
    <message>
        <source>&amp;Enable Object Lock…</source>
        <translation>&amp;Ativar Bloqueio de objetos…</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nenhuma</translation>
    </message>
    <message>
        <source>Governance (users with special permission can remove it)</source>
        <translation>Governança (usuários com permissão especial podem removê-la)</translation>
    </message>
    <message>
        <source>Compliance (nobody can remove it, not even the root account)</source>
        <translation>Conformidade (ninguém pode removê-la, nem mesmo a conta raiz)</translation>
    </message>
    <message>
        <source>Default &amp;retention:</source>
        <translation>&amp;Retenção padrão:</translation>
    </message>
    <message>
        <source>days</source>
        <translation>dias</translation>
    </message>
    <message>
        <source>years</source>
        <translation>anos</translation>
    </message>
    <message>
        <source>&amp;Period:</source>
        <translation>&amp;Período:</translation>
    </message>
    <message>
        <source>New object versions get the default retention unless the upload sets its own. Retained versions cannot be deleted or overwritten until the period ends.</source>
        <translation>Novas versões de objetos recebem a retenção padrão, a menos que o upload defina a sua própria. Versões retidas não podem ser excluídas nem sobrescritas até o fim do período.</translation>
    </message>
    <message>
        <source>Enable Object Lock</source>
        <translation>Ativar Bloqueio de objetos</translation>
    </message>
    <message>
        <source>Enable Object Lock on %1? This cannot be undone, and versioning stays enabled for good. (Some services only allow it when the bucket is created.)</source>
        <translation>Ativar o Bloqueio de objetos em %1? Isso não pode ser desfeito, e o versionamento permanece ativado para sempre. (Alguns serviços só permitem isso na criação do bucket.)</translation>
    </message>
    <message>
        <source>Object Lock enabled</source>
        <translation>Bloqueio de objetos ativado</translation>
    </message>
    <message numerus="yes">
        <source>%n day(s)</source>
        <translation>
            <numerusform>%n dia</numerusform>
            <numerusform>%n dias</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n year(s)</source>
        <translation>
            <numerusform>%n ano</numerusform>
            <numerusform>%n anos</numerusform>
        </translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueio de objetos</translation>
    </message>
    <message>
        <source>Compliance-mode retention cannot be shortened or removed by anyone. New versions will be undeletable for %1. Continue?</source>
        <translation>A retenção no modo de conformidade não pode ser reduzida nem removida por ninguém. Novas versões não poderão ser excluídas por %1. Continuar?</translation>
    </message>
    <message>
        <source>Default retention saved</source>
        <translation>Retenção padrão salva</translation>
    </message>
    <message>
        <source>Object Lock is enabled on this bucket.</source>
        <translation>O Bloqueio de objetos está ativado neste bucket.</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket.</source>
        <translation>O Bloqueio de objetos não está ativado neste bucket.</translation>
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
        <translation>Região</translation>
    </message>
    <message>
        <source>Created</source>
        <translation>Criado em</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Proprietário</translation>
    </message>
    <message>
        <source>Bucket owner enforced (ACLs disabled)</source>
        <translation>Proprietário do bucket imposto (ACLs desativadas)</translation>
    </message>
    <message>
        <source>Bucket owner preferred</source>
        <translation>Proprietário do bucket preferido</translation>
    </message>
    <message>
        <source>Object writer</source>
        <translation>Gravador de objetos</translation>
    </message>
    <message>
        <source>Object ownership</source>
        <translation>Propriedade de objetos</translation>
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
        <translation>&amp;Modelos</translation>
    </message>
    <message>
        <source>Bucket Policy</source>
        <translation>Política do bucket</translation>
    </message>
    <message>
        <source>Replace the current text with the template?</source>
        <translation>Substituir o texto atual pelo modelo?</translation>
    </message>
    <message>
        <source>&amp;Format</source>
        <translation>&amp;Formatar</translation>
    </message>
    <message>
        <source>No bucket policy. Pick a template or paste a policy document.</source>
        <translation>Nenhuma política de bucket. Escolha um modelo ou cole um documento de política.</translation>
    </message>
    <message>
        <source>&amp;Delete Policy…</source>
        <translation>&amp;Excluir política…</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>Cannot format: %1</source>
        <translation>Não é possível formatar: %1</translation>
    </message>
    <message>
        <source>No policy.</source>
        <translation>Nenhuma política.</translation>
    </message>
    <message>
        <source>No problems found.</source>
        <translation>Nenhum problema encontrado.</translation>
    </message>
    <message>
        <source>Delete the bucket policy of %1?</source>
        <translation>Excluir a política do bucket %1?</translation>
    </message>
    <message>
        <source>Bucket policy deleted</source>
        <translation>Política do bucket excluída</translation>
    </message>
    <message>
        <source>Fix the errors in the policy first: %1</source>
        <translation>Corrija primeiro os erros na política: %1</translation>
    </message>
    <message>
        <source>This policy grants access to everyone on the internet. Apply it anyway?</source>
        <translation>Esta política concede acesso a qualquer pessoa na internet. Aplicar mesmo assim?</translation>
    </message>
    <message>
        <source>Bucket policy saved</source>
        <translation>Política do bucket salva</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPropertiesDialog</name>
    <message>
        <source>Bucket Properties — %1</source>
        <translation>Propriedades do bucket — %1</translation>
    </message>
    <message>
        <source>Overview</source>
        <translation>Visão geral</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versionamento</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Criptografia</translation>
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
        <translation>Acesso público</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Website</source>
        <translation>Site</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueio de objetos</translation>
    </message>
    <message>
        <source>Statistics</source>
        <translation>Estatísticas</translation>
    </message>
    <message>
        <source>%1: not supported by this endpoint</source>
        <translation>%1: sem suporte neste endpoint</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketPublicAccessTab</name>
    <message>
        <source>Block &amp;all public access</source>
        <translation>Bloquear &amp;todo o acesso público</translation>
    </message>
    <message>
        <source>Block public access granted through new ACLs</source>
        <translation>Bloquear acesso público concedido por novas ACLs</translation>
    </message>
    <message>
        <source>Ignore public access granted through any ACL</source>
        <translation>Ignorar acesso público concedido por qualquer ACL</translation>
    </message>
    <message>
        <source>Block public access granted through new bucket policies</source>
        <translation>Bloquear acesso público concedido por novas políticas de bucket</translation>
    </message>
    <message>
        <source>Restrict access to buckets with public policies to AWS services and the owner&apos;s account</source>
        <translation>Restringir o acesso a buckets com políticas públicas aos serviços da AWS e à conta do proprietário</translation>
    </message>
    <message>
        <source>Account-level settings apply as well and win over these. Turning blocks off does not make anything public by itself.</source>
        <translation>As configurações no nível da conta também se aplicam e prevalecem sobre estas. Desativar bloqueios não torna nada público por si só.</translation>
    </message>
    <message>
        <source>Public Access</source>
        <translation>Acesso público</translation>
    </message>
    <message>
        <source>Allow public access settings on %1? Objects can then become public through ACLs or the bucket policy.</source>
        <translation>Permitir configurações de acesso público em %1? Os objetos poderão se tornar públicos por meio de ACLs ou da política do bucket.</translation>
    </message>
    <message>
        <source>Public access settings saved</source>
        <translation>Configurações de acesso público salvas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketStatisticsTab</name>
    <message>
        <source>Key prefix:</source>
        <translation>Prefixo da chave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(bucket inteiro)</translation>
    </message>
    <message>
        <source>&amp;Calculate</source>
        <translation>&amp;Calcular</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <source>Objects</source>
        <translation>Objetos</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Counted by listing every object version (one request per 1000 keys), which takes a while on large buckets. For buckets with millions of objects, S3 Storage Lens or the CloudWatch metrics BucketSizeBytes/NumberOfObjects are faster (updated daily).</source>
        <translation>Contado listando todas as versões de objetos (uma solicitação a cada 1000 chaves), o que demora em buckets grandes. Para buckets com milhões de objetos, o S3 Storage Lens ou as métricas BucketSizeBytes/NumberOfObjects do CloudWatch são mais rápidos (atualizados diariamente).</translation>
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
        <translation>Objetos atuais</translation>
    </message>
    <message>
        <source>Noncurrent versions</source>
        <translation>Versões não atuais</translation>
    </message>
    <message>
        <source>Delete markers</source>
        <translation>Marcadores de exclusão</translation>
    </message>
    <message>
        <source>All versions</source>
        <translation>Todas as versões</translation>
    </message>
    <message>
        <source>Incomplete multipart uploads</source>
        <translation>Uploads fracionados incompletos</translation>
    </message>
    <message>
        <source>Done.</source>
        <translation>Concluído.</translation>
    </message>
    <message>
        <source>Cancelled: partial counts.</source>
        <translation>Cancelado: contagens parciais.</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTab</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Aplicando…</translation>
    </message>
    <message>
        <source>Counting… %L1 items</source>
        <translation>Contando… %L1 itens</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketTagsTab</name>
    <message>
        <source>Key</source>
        <translation>Chave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Up to 50 tags; used for cost allocation and access control. Object tags are separate (Edit Objects).</source>
        <translation>Até 50 tags; usadas para alocação de custos e controle de acesso. As tags de objetos são separadas (Editar objetos).</translation>
    </message>
    <message>
        <source>Tags saved</source>
        <translation>Tags salvas</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketVersioningTab</name>
    <message>
        <source>Versioning:</source>
        <translation>Versionamento:</translation>
    </message>
    <message>
        <source>MFA delete:</source>
        <translation>Exclusão com MFA:</translation>
    </message>
    <message>
        <source>With versioning, overwriting or deleting an object keeps the old data as a noncurrent version (billed as storage). Versioning cannot be turned off once enabled, only suspended: existing versions stay. MFA delete can only be changed by the root account through the API/CLI.</source>
        <translation>Com o versionamento, sobrescrever ou excluir um objeto mantém os dados antigos como uma versão não atual (cobrada como armazenamento). O versionamento não pode ser desativado depois de ativado, apenas suspenso: as versões existentes permanecem. A exclusão com MFA só pode ser alterada pela conta raiz por meio da API/CLI.</translation>
    </message>
    <message>
        <source>&amp;Enable Versioning</source>
        <translation>&amp;Ativar versionamento</translation>
    </message>
    <message>
        <source>&amp;Suspend Versioning</source>
        <translation>&amp;Suspender versionamento</translation>
    </message>
    <message>
        <source>Versioning enabled</source>
        <translation>Versionamento ativado</translation>
    </message>
    <message>
        <source>Suspend Versioning</source>
        <translation>Suspender versionamento</translation>
    </message>
    <message>
        <source>Suspend versioning on %1? New writes replace objects again; existing versions are kept.</source>
        <translation>Suspender o versionamento em %1? Novas gravações voltam a substituir os objetos; as versões existentes são mantidas.</translation>
    </message>
    <message>
        <source>Versioning suspended</source>
        <translation>Versionamento suspenso</translation>
    </message>
    <message>
        <source>Disabled (never enabled)</source>
        <translation>Desativado (nunca ativado)</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Ativado</translation>
    </message>
    <message>
        <source>Suspended</source>
        <translation>Suspenso</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Desativado</translation>
    </message>
</context>
<context>
    <name>s3fm::BucketWebsiteTab</name>
    <message>
        <source>Enable static &amp;website hosting</source>
        <translation>Ativar hospedagem de &amp;site estático</translation>
    </message>
    <message>
        <source>&amp;Host a website</source>
        <translation>&amp;Hospedar um site</translation>
    </message>
    <message>
        <source>&amp;Index document:</source>
        <translation>Documento de &amp;índice:</translation>
    </message>
    <message>
        <source>optional, e.g. error.html</source>
        <translation>opcional, por exemplo, error.html</translation>
    </message>
    <message>
        <source>&amp;Error document:</source>
        <translation>Documento de &amp;erro:</translation>
    </message>
    <message>
        <source>Optional redirection rules (JSON array), e.g.
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</source>
        <translation>Regras de redirecionamento opcionais (array JSON), por exemplo,
[{&quot;Condition&quot;: {&quot;KeyPrefixEquals&quot;: &quot;docs/&quot;},
  &quot;Redirect&quot;: {&quot;ReplaceKeyPrefixWith&quot;: &quot;documents/&quot;}}]</translation>
    </message>
    <message>
        <source>&amp;Routing rules:</source>
        <translation>Regras de &amp;roteamento:</translation>
    </message>
    <message>
        <source>Redirec&amp;t all requests to another host</source>
        <translation>Redirecionar &amp;todas as solicitações para outro host</translation>
    </message>
    <message>
        <source>e.g. www.example.com</source>
        <translation>por exemplo, www.example.com</translation>
    </message>
    <message>
        <source>Host &amp;name:</source>
        <translation>&amp;Nome do host:</translation>
    </message>
    <message>
        <source>Same as the request</source>
        <translation>Igual ao da solicitação</translation>
    </message>
    <message>
        <source>&amp;Protocol:</source>
        <translation>&amp;Protocolo:</translation>
    </message>
    <message>
        <source>Website endpoints serve objects over plain HTTP and only objects that are publicly readable (bucket policy, public access block).</source>
        <translation>Endpoints de site servem objetos apenas por HTTP simples e somente objetos legíveis publicamente (política do bucket, bloqueio de acesso público).</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>Website endpoint: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</source>
        <translation>Endpoint do site: &lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;</translation>
    </message>
    <message>
        <source>Website configuration saved</source>
        <translation>Configuração do site salva</translation>
    </message>
    <message>
        <source>Website hosting disabled</source>
        <translation>Hospedagem de site desativada</translation>
    </message>
</context>
<context>
    <name>s3fm::ConflictDialog</name>
    <message>
        <source>File already exists</source>
        <translation>O arquivo já existe</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; already exists in the destination. Overwrite it?</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; já existe no destino. Sobrescrever?</translation>
    </message>
    <message>
        <source>New:</source>
        <translation>Novo:</translation>
    </message>
    <message>
        <source>Existing:</source>
        <translation>Existente:</translation>
    </message>
    <message>
        <source>The new file is newer.</source>
        <translation>O arquivo novo é mais recente.</translation>
    </message>
    <message>
        <source>The existing file is newer or as old.</source>
        <translation>O arquivo existente é mais recente ou tem a mesma idade.</translation>
    </message>
    <message>
        <source>Both have the same size.</source>
        <translation>Ambos têm o mesmo tamanho.</translation>
    </message>
    <message>
        <source>The sizes differ.</source>
        <translation>Os tamanhos são diferentes.</translation>
    </message>
    <message>
        <source>&amp;Apply to all remaining conflicts of this transfer</source>
        <translation>&amp;Aplicar a todos os conflitos restantes desta transferência</translation>
    </message>
    <message>
        <source>&amp;Overwrite</source>
        <translation>S&amp;obrescrever</translation>
    </message>
    <message>
        <source>&amp;Skip</source>
        <translation>&amp;Ignorar</translation>
    </message>
    <message>
        <source>&amp;Keep Both</source>
        <translation>&amp;Manter ambos</translation>
    </message>
    <message>
        <source>Copy under a new name such as &quot;name (2).ext&quot;</source>
        <translation>Copiar com um novo nome, como &quot;nome (2).ext&quot;</translation>
    </message>
    <message>
        <source>If &amp;Newer</source>
        <translation>Se for mais &amp;novo</translation>
    </message>
    <message>
        <source>Overwrite only if the new file is newer, otherwise skip</source>
        <translation>Sobrescrever somente se o arquivo novo for mais recente; caso contrário, ignorar</translation>
    </message>
    <message>
        <source>If Si&amp;ze Differs</source>
        <translation>Se o &amp;tamanho for diferente</translation>
    </message>
    <message>
        <source>Overwrite only if the sizes differ, otherwise skip</source>
        <translation>Sobrescrever somente se os tamanhos forem diferentes; caso contrário, ignorar</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Cancelar transferência</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionDialog</name>
    <message>
        <source>Connections</source>
        <translation>Conexões</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Adicionar</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation>Duplicar</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Excluir</translation>
    </message>
    <message>
        <source>Import AWS Profiles…</source>
        <translation>Importar perfis da AWS…</translation>
    </message>
    <message>
        <source>Create connections for the profiles in %1</source>
        <translation>Criar conexões para os perfis em %1</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexão</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Used in addresses such as s3://&lt;id&gt;/bucket/key. Cannot be changed after saving.</source>
        <translation>Usado em endereços como s3://&lt;id&gt;/bucket/key. Não pode ser alterado depois de salvo.</translation>
    </message>
    <message>
        <source>&amp;ID:</source>
        <translation>&amp;ID:</translation>
    </message>
    <message>
        <source>&amp;Provider:</source>
        <translation>&amp;Provedor:</translation>
    </message>
    <message>
        <source>Leave empty for Amazon S3</source>
        <translation>Deixe em branco para o Amazon S3</translation>
    </message>
    <message>
        <source>&amp;Endpoint URL:</source>
        <translation>URL do &amp;endpoint:</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Região:</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automático</translation>
    </message>
    <message>
        <source>Virtual-hosted (bucket.host)</source>
        <translation>Hospedado virtualmente (bucket.host)</translation>
    </message>
    <message>
        <source>Path style (host/bucket)</source>
        <translation>Estilo de caminho (host/bucket)</translation>
    </message>
    <message>
        <source>&amp;Addressing:</source>
        <translation>En&amp;dereçamento:</translation>
    </message>
    <message>
        <source>Credentials</source>
        <translation>Credenciais</translation>
    </message>
    <message>
        <source>Access key and secret</source>
        <translation>Chave de acesso e segredo</translation>
    </message>
    <message>
        <source>AWS profile (~/.aws)</source>
        <translation>Perfil da AWS (~/.aws)</translation>
    </message>
    <message>
        <source>Environment variables</source>
        <translation>Variáveis de ambiente</translation>
    </message>
    <message>
        <source>Default AWS credential chain</source>
        <translation>Cadeia de credenciais padrão da AWS</translation>
    </message>
    <message>
        <source>Anonymous (public buckets)</source>
        <translation>Anônimo (buckets públicos)</translation>
    </message>
    <message>
        <source>Access key ID:</source>
        <translation>ID da chave de acesso:</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostrar</translation>
    </message>
    <message>
        <source>Secret access key:</source>
        <translation>Chave de acesso secreta:</translation>
    </message>
    <message>
        <source>Optional (temporary credentials)</source>
        <translation>Opcional (credenciais temporárias)</translation>
    </message>
    <message>
        <source>Session token:</source>
        <translation>Token de sessão:</translation>
    </message>
    <message>
        <source>Secrets are stored in the system keychain, never in settings files.</source>
        <translation>Os segredos são armazenados no chaveiro do sistema, nunca em arquivos de configuração.</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Perfil:</translation>
    </message>
    <message>
        <source>Supports static keys, SSO, assume-role (role_arn / source_profile) and credential_process profiles.</source>
        <translation>Suporta perfis com chaves estáticas, SSO, assume-role (role_arn / source_profile) e credential_process.</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>Avançado</translation>
    </message>
    <message>
        <source>Verify TLS certificates</source>
        <translation>Verificar certificados TLS</translation>
    </message>
    <message>
        <source>System certificates</source>
        <translation>Certificados do sistema</translation>
    </message>
    <message>
        <source>Browse…</source>
        <translation>Procurar…</translation>
    </message>
    <message>
        <source>CA Bundle</source>
        <translation>Pacote de CAs</translation>
    </message>
    <message>
        <source>Certificates (*.pem *.crt);;All files (*)</source>
        <translation>Certificados (*.pem *.crt);;Todos os arquivos (*)</translation>
    </message>
    <message>
        <source>CA bundle:</source>
        <translation>Pacote de CAs:</translation>
    </message>
    <message>
        <source>When supported (AWS default)</source>
        <translation>Quando houver suporte (padrão da AWS)</translation>
    </message>
    <message>
        <source>Only when required (most compatible)</source>
        <translation>Somente quando exigido (mais compatível)</translation>
    </message>
    <message>
        <source>Some S3-compatible services reject the newer integrity checksum headers.</source>
        <translation>Alguns serviços compatíveis com S3 rejeitam os cabeçalhos de checksum de integridade mais recentes.</translation>
    </message>
    <message>
        <source>Request checksums:</source>
        <translation>Checksums de solicitação:</translation>
    </message>
    <message>
        <source>Bucket default</source>
        <translation>Padrão do bucket</translation>
    </message>
    <message>
        <source>Upload storage class:</source>
        <translation>Classe de armazenamento de upload:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b</source>
        <translation>bucket-a, bucket-b</translation>
    </message>
    <message>
        <source>Buckets to show even when the credentials may not list buckets.</source>
        <translation>Buckets a mostrar mesmo quando as credenciais não puderem listar buckets.</translation>
    </message>
    <message>
        <source>Pinned buckets:</source>
        <translation>Buckets fixados:</translation>
    </message>
    <message>
        <source>bucket-a, bucket-b, or * for all</source>
        <translation>bucket-a, bucket-b ou * para todos</translation>
    </message>
    <message>
        <source>Requester Pays buckets: requests to them are billed to your account (x-amz-request-payer).</source>
        <translation>Buckets com pagamento pelo solicitante: as solicitações a eles são cobradas na sua conta (x-amz-request-payer).</translation>
    </message>
    <message>
        <source>Requester pays:</source>
        <translation>Pagamento pelo solicitante:</translation>
    </message>
    <message>
        <source> s</source>
        <translation> s</translation>
    </message>
    <message>
        <source>Request timeout:</source>
        <translation>Tempo limite da solicitação:</translation>
    </message>
    <message>
        <source>&amp;Test Connection</source>
        <translation>&amp;Testar conexão</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>Stored in keychain — leave empty to keep</source>
        <translation>Armazenado no chaveiro — deixe em branco para manter</translation>
    </message>
    <message>
        <source>New %1 connection</source>
        <translation>Nova conexão %1</translation>
    </message>
    <message>
        <source>%1 (copy)</source>
        <translation>%1 (cópia)</translation>
    </message>
    <message>
        <source>Delete Connection</source>
        <translation>Excluir conexão</translation>
    </message>
    <message>
        <source>Delete the connection &quot;%1&quot; and its stored secret?</source>
        <translation>Excluir a conexão &quot;%1&quot; e o segredo armazenado?</translation>
    </message>
    <message>
        <source>AWS: %1</source>
        <translation>AWS: %1</translation>
    </message>
    <message>
        <source>Import AWS Profiles</source>
        <translation>Importar perfis da AWS</translation>
    </message>
    <message>
        <source>No profiles found in %1.</source>
        <translation>Nenhum perfil encontrado em %1.</translation>
    </message>
    <message>
        <source>All AWS profiles are already imported.</source>
        <translation>Todos os perfis da AWS já foram importados.</translation>
    </message>
    <message>
        <source>Uses AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_SESSION_TOKEN from the environment the application was started with.</source>
        <translation>Usa AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY e AWS_SESSION_TOKEN do ambiente em que o aplicativo foi iniciado.</translation>
    </message>
    <message>
        <source>Tries environment variables, the default profile, SSO, web identity and container/instance credentials, in the AWS SDK&apos;s standard order.</source>
        <translation>Tenta variáveis de ambiente, o perfil padrão, SSO, identidade web e credenciais de contêiner/instância, na ordem padrão do AWS SDK.</translation>
    </message>
    <message>
        <source>Requests are not signed. Only public buckets and objects are accessible.</source>
        <translation>As solicitações não são assinadas. Somente buckets e objetos públicos são acessíveis.</translation>
    </message>
    <message>
        <source>Save Connection</source>
        <translation>Salvar conexão</translation>
    </message>
    <message>
        <source>A connection with the ID &quot;%1&quot; already exists.</source>
        <translation>Já existe uma conexão com o ID &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Enter the secret access key.</source>
        <translation>Insira a chave de acesso secreta.</translation>
    </message>
    <message>
        <source>Testing…</source>
        <translation>Testando…</translation>
    </message>
    <message>
        <source>Unsaved Changes</source>
        <translation>Alterações não salvas</translation>
    </message>
    <message>
        <source>Save the changes to &quot;%1&quot;?</source>
        <translation>Salvar as alterações em &quot;%1&quot;?</translation>
    </message>
    <message>
        <source>Connections *</source>
        <translation>Conexões *</translation>
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
        <translation>Outro compatível com S3</translation>
    </message>
    <message>
        <source>Enter a name for the connection.</source>
        <translation>Insira um nome para a conexão.</translation>
    </message>
    <message>
        <source>The ID may only contain lowercase letters, digits, &apos;.&apos;, &apos;-&apos; and &apos;_&apos;.</source>
        <translation>O ID só pode conter letras minúsculas, dígitos, &apos;.&apos;, &apos;-&apos; e &apos;_&apos;.</translation>
    </message>
    <message>
        <source>The endpoint must be an http:// or https:// URL.</source>
        <translation>O endpoint deve ser uma URL http:// ou https://.</translation>
    </message>
    <message>
        <source>Replace the placeholder in the endpoint URL.</source>
        <translation>Substitua o espaço reservado na URL do endpoint.</translation>
    </message>
    <message>
        <source>Enter the endpoint URL of the S3-compatible service.</source>
        <translation>Insira a URL do endpoint do serviço compatível com S3.</translation>
    </message>
    <message>
        <source>Enter a region (for example us-east-1).</source>
        <translation>Insira uma região (por exemplo, us-east-1).</translation>
    </message>
    <message>
        <source>Enter the access key ID.</source>
        <translation>Insira o ID da chave de acesso.</translation>
    </message>
    <message>
        <source>Choose an AWS profile.</source>
        <translation>Escolha um perfil da AWS.</translation>
    </message>
</context>
<context>
    <name>s3fm::ConnectionStore</name>
    <message>
        <source>Could not write the settings file</source>
        <translation>Não foi possível gravar o arquivo de configurações</translation>
    </message>
</context>
<context>
    <name>s3fm::CreateBucketDialog</name>
    <message>
        <source>New Bucket</source>
        <translation>Novo bucket</translation>
    </message>
    <message>
        <source>lowercase letters, digits, dots and hyphens</source>
        <translation>letras minúsculas, dígitos, pontos e hifens</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>endpoint default</source>
        <translation>padrão do endpoint</translation>
    </message>
    <message>
        <source>&amp;Region:</source>
        <translation>&amp;Região:</translation>
    </message>
    <message>
        <source>Default (bucket owner enforced: ACLs disabled)</source>
        <translation>Padrão (proprietário do bucket imposto: ACLs desativadas)</translation>
    </message>
    <message>
        <source>Bucket owner preferred (ACLs enabled)</source>
        <translation>Proprietário do bucket preferido (ACLs ativadas)</translation>
    </message>
    <message>
        <source>Object writer (ACLs enabled)</source>
        <translation>Gravador de objetos (ACLs ativadas)</translation>
    </message>
    <message>
        <source>Object &amp;ownership:</source>
        <translation>&amp;Propriedade de objetos:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nenhuma</translation>
    </message>
    <message>
        <source>Canned &amp;ACL:</source>
        <translation>&amp;ACL predefinida:</translation>
    </message>
    <message>
        <source>Enable Object &amp;Lock (turns on versioning; cannot be turned off)</source>
        <translation>Ativar &amp;Bloqueio de objetos (ativa o versionamento; não pode ser desativado)</translation>
    </message>
    <message>
        <source>&lt;small&gt;New AWS buckets block public access by default; public ACLs fail until the public access block is relaxed.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Novos buckets da AWS bloqueiam o acesso público por padrão; ACLs públicas falham até que o bloqueio de acesso público seja flexibilizado.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Criar</translation>
    </message>
    <message>
        <source>Enter a bucket name.</source>
        <translation>Insira um nome de bucket.</translation>
    </message>
</context>
<context>
    <name>s3fm::DeleteBucketDialog</name>
    <message>
        <source>Delete Bucket</source>
        <translation>Excluir bucket</translation>
    </message>
    <message>
        <source>Permanently delete the empty bucket &lt;b&gt;%1&lt;/b&gt;?</source>
        <translation>Excluir permanentemente o bucket vazio &lt;b&gt;%1&lt;/b&gt;?</translation>
    </message>
    <message>
        <source>objects</source>
        <translation>objetos</translation>
    </message>
    <message>
        <source>object versions or delete markers</source>
        <translation>versões de objetos ou marcadores de exclusão</translation>
    </message>
    <message>
        <source>incomplete multipart uploads</source>
        <translation>uploads fracionados incompletos</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; is not empty: it contains %2.&lt;br&gt;&lt;br&gt;To delete it, every object, every version and every incomplete upload is deleted first. &lt;b&gt;This cannot be undone.&lt;/b&gt;</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; não está vazio: contém %2.&lt;br&gt;&lt;br&gt;Para excluí-lo, todos os objetos, todas as versões e todos os uploads incompletos são excluídos primeiro. &lt;b&gt;Isso não pode ser desfeito.&lt;/b&gt;</translation>
    </message>
    <message>
        <source>&amp;Empty the bucket, then delete it</source>
        <translation>&amp;Esvaziar o bucket e depois excluí-lo</translation>
    </message>
    <message>
        <source>&amp;Bypass governance-mode retention (needs s3:BypassGovernanceRetention)</source>
        <translation>&amp;Ignorar a retenção no modo de governança (requer s3:BypassGovernanceRetention)</translation>
    </message>
    <message>
        <source>Type the bucket name to confirm:</source>
        <translation>Digite o nome do bucket para confirmar:</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Excluir</translation>
    </message>
    <message>
        <source>Empty and Delete</source>
        <translation>Esvaziar e excluir</translation>
    </message>
</context>
<context>
    <name>s3fm::EncryptionPicker</name>
    <message>
        <source>Unchanged / bucket default</source>
        <translation>Inalterada / padrão do bucket</translation>
    </message>
    <message>
        <source>KMS key id, ARN or alias (empty: aws/s3)</source>
        <translation>ID da chave do KMS, ARN ou alias (vazio: aws/s3)</translation>
    </message>
</context>
<context>
    <name>s3fm::EntryListModel</name>
    <message>
        <source>No provider for %1</source>
        <translation>Nenhum provedor para %1</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexão</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Pasta</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Arquivo</translation>
    </message>
    <message>
        <source>%1 file</source>
        <translation>Arquivo %1</translation>
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
        <translation>Marcador de exclusão (excluído)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Marcador de exclusão</translation>
    </message>
    <message>
        <source>%1 (current)</source>
        <translation>%1 (atual)</translation>
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
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificado</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe de armazenamento</translation>
    </message>
    <message>
        <source>ETag</source>
        <translation>ETag</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Versão</translation>
    </message>
</context>
<context>
    <name>s3fm::Error</name>
    <message>
        <source>Operation cancelled</source>
        <translation>Operação cancelada</translation>
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
        <translation>Adicionar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
</context>
<context>
    <name>s3fm::LifecycleRuleDialog</name>
    <message>
        <source> days</source>
        <translation> dias</translation>
    </message>
    <message>
        <source>bytes (empty: no limit)</source>
        <translation>bytes (vazio: sem limite)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Adicionar</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <source>Lifecycle Rule</source>
        <translation>Regra de ciclo de vida</translation>
    </message>
    <message>
        <source>optional; S3 generates one</source>
        <translation>opcional; o S3 gera um</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation>&amp;Ativada</translation>
    </message>
    <message>
        <source>Rule &amp;ID:</source>
        <translation>&amp;ID da regra:</translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation>&amp;Filtro</translation>
    </message>
    <message>
        <source>&amp;Current Versions</source>
        <translation>&amp;Versões atuais</translation>
    </message>
    <message>
        <source>&amp;Noncurrent Versions &amp;&amp; Uploads</source>
        <translation>Versões &amp;não atuais &amp;&amp; uploads</translation>
    </message>
    <message>
        <source>The rule applies to objects matching every condition below; with no conditions it applies to the whole bucket.</source>
        <translation>A regra se aplica a objetos que atendem a todas as condições abaixo; sem condições, ela se aplica ao bucket inteiro.</translation>
    </message>
    <message>
        <source>e.g. logs/</source>
        <translation>por exemplo, logs/</translation>
    </message>
    <message>
        <source>Key &amp;prefix:</source>
        <translation>&amp;Prefixo da chave:</translation>
    </message>
    <message>
        <source>Larger than:</source>
        <translation>Maior que:</translation>
    </message>
    <message>
        <source>Smaller than:</source>
        <translation>Menor que:</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Object tags:</source>
        <translation>Tags de objeto:</translation>
    </message>
    <message>
        <source>Move to storage class</source>
        <translation>Mover para a classe de armazenamento</translation>
    </message>
    <message>
        <source>After (days or YYYY-MM-DD)</source>
        <translation>Após (dias ou AAAA-MM-DD)</translation>
    </message>
    <message>
        <source>Transitions:</source>
        <translation>Transições:</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nunca</translation>
    </message>
    <message>
        <source>After</source>
        <translation>Após</translation>
    </message>
    <message>
        <source>On date</source>
        <translation>Na data</translation>
    </message>
    <message>
        <source>Expire (delete) objects:</source>
        <translation>Expirar (excluir) objetos:</translation>
    </message>
    <message>
        <source>Remove expired delete markers (markers without noncurrent versions)</source>
        <translation>Remover marcadores de exclusão expirados (marcadores sem versões não atuais)</translation>
    </message>
    <message>
        <source>&lt;small&gt;In a versioned bucket, expiring a current version adds a delete marker; the data stays as a noncurrent version.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Em um bucket versionado, expirar uma versão atual adiciona um marcador de exclusão; os dados permanecem como uma versão não atual.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Days after becoming noncurrent</source>
        <translation>Dias após se tornar não atual</translation>
    </message>
    <message>
        <source>Keep newest (optional)</source>
        <translation>Manter as mais recentes (opcional)</translation>
    </message>
    <message>
        <source>Delete after</source>
        <translation>Excluir após</translation>
    </message>
    <message>
        <source>keeping the newest</source>
        <translation>mantendo as mais recentes</translation>
    </message>
    <message>
        <source>none</source>
        <translation>nenhuma</translation>
    </message>
    <message>
        <source>Noncurrent versions:</source>
        <translation>Versões não atuais:</translation>
    </message>
    <message>
        <source>Abort incomplete multipart uploads after</source>
        <translation>Abortar uploads fracionados incompletos após</translation>
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
        <translation>Arquivo ou diretório inexistente: %1</translation>
    </message>
    <message>
        <source>permission denied</source>
        <translation>permissão negada</translation>
    </message>
    <message>
        <source>Not a local location</source>
        <translation>Não é um local do computador</translation>
    </message>
    <message>
        <source>Not a directory: %1</source>
        <translation>Não é um diretório: %1</translation>
    </message>
    <message>
        <source>Permission denied: %1</source>
        <translation>Permissão negada: %1</translation>
    </message>
    <message>
        <source>Invalid directory</source>
        <translation>Diretório inválido</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Já existe: %1</translation>
    </message>
    <message>
        <source>Cannot create directory %1</source>
        <translation>Não é possível criar o diretório %1</translation>
    </message>
    <message>
        <source>Refusing to delete a filesystem root</source>
        <translation>Recusando excluir a raiz de um sistema de arquivos</translation>
    </message>
    <message>
        <source>%1: not found</source>
        <translation>%1: não encontrado</translation>
    </message>
    <message>
        <source>… and %1 more</source>
        <translation>… e mais %1</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted</source>
        <translation>
            <numerusform>%n item não pôde ser excluído</numerusform>
            <numerusform>%n itens não puderam ser excluídos</numerusform>
        </translation>
    </message>
    <message>
        <source>Cannot move %1</source>
        <translation>Não é possível mover %1</translation>
    </message>
    <message>
        <source>Cannot move a directory across filesystems directly</source>
        <translation>Não é possível mover um diretório diretamente entre sistemas de arquivos</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>É um diretório: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Não é possível ler %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Não é possível gravar %1</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Erro ao ler %1</translation>
    </message>
    <message>
        <source>Error writing %1</source>
        <translation>Erro ao gravar %1</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Falha na verificação de integridade de %1</translation>
    </message>
    <message>
        <source>%1 bytes written, %2 expected</source>
        <translation>%1 bytes gravados, %2 esperados</translation>
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
        <translation>Upload concluído: %1</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>action: view the current file (F3)</comment>
        <translation>E&amp;xibir</translation>
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
        <translation>Mo&amp;ver…</translation>
    </message>
    <message>
        <source>&amp;Rename…</source>
        <translation>&amp;Renomear…</translation>
    </message>
    <message>
        <source>New &amp;Folder…</source>
        <translation>Nova &amp;pasta…</translation>
    </message>
    <message>
        <source>&amp;Delete…</source>
        <translation>&amp;Excluir…</translation>
    </message>
    <message>
        <source>Settin&amp;gs…</source>
        <translation>Co&amp;nfigurações…</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Sair</translation>
    </message>
    <message>
        <source>Copy &amp;Location</source>
        <translation>Copiar &amp;local</translation>
    </message>
    <message>
        <source>Copy S3 &amp;URI</source>
        <translation>Copiar &amp;URI do S3</translation>
    </message>
    <message>
        <source>Copy &amp;HTTP URL</source>
        <translation>Copiar URL &amp;HTTP</translation>
    </message>
    <message>
        <source>Copy &amp;ARN</source>
        <translation>Copiar &amp;ARN</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>Pr&amp;opriedades</translation>
    </message>
    <message>
        <source>Edit Metadata, &amp;Tags, Storage…</source>
        <translation>Editar &amp;metadados, tags, armazenamento…</translation>
    </message>
    <message>
        <source>&amp;Share Link (Presigned URL)…</source>
        <translation>Compartilhar lin&amp;k (URL pré-assinada)…</translation>
    </message>
    <message>
        <source>Show &amp;Versions</source>
        <translation>Mostrar &amp;versões</translation>
    </message>
    <message>
        <source>Browse &amp;As Of…</source>
        <translation>Navegar em uma &amp;data…</translation>
    </message>
    <message>
        <source>Version &amp;History…</source>
        <translation>&amp;Histórico de versões…</translation>
    </message>
    <message>
        <source>&amp;Restore from Archive…</source>
        <translation>&amp;Restaurar do arquivamento…</translation>
    </message>
    <message>
        <source>&amp;Incomplete Multipart Uploads…</source>
        <translation>Uploads fracionados &amp;incompletos…</translation>
    </message>
    <message>
        <source>New &amp;Bucket…</source>
        <translation>Novo &amp;bucket…</translation>
    </message>
    <message>
        <source>B&amp;ucket Properties…</source>
        <translation>Propriedades do b&amp;ucket…</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Selecionar &amp;tudo</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>&amp;Desmarcar tudo</translation>
    </message>
    <message>
        <source>&amp;Invert Selection</source>
        <translation>&amp;Inverter seleção</translation>
    </message>
    <message>
        <source>Quick &amp;Filter…</source>
        <translation>&amp;Filtro rápido…</translation>
    </message>
    <message>
        <source>F&amp;ind Files…</source>
        <translation>&amp;Buscar arquivos…</translation>
    </message>
    <message>
        <source>Go to &amp;Containing Folder</source>
        <translation>Ir para a &amp;pasta que contém</translation>
    </message>
    <message>
        <source>&amp;Refresh</source>
        <translation>&amp;Atualizar</translation>
    </message>
    <message>
        <source>Show &amp;Hidden Files</source>
        <translation>Mostrar arquivos &amp;ocultos</translation>
    </message>
    <message>
        <source>&amp;Swap Panels</source>
        <translation>&amp;Trocar painéis</translation>
    </message>
    <message>
        <source>Open in &amp;Other Panel</source>
        <translation>Abrir no outro &amp;painel</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Voltar</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Avançar</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Início</translation>
    </message>
    <message>
        <source>&amp;Root</source>
        <translation>&amp;Raiz</translation>
    </message>
    <message>
        <source>Edit &amp;Address</source>
        <translation>Editar &amp;endereço</translation>
    </message>
    <message>
        <source>&amp;Left Panel Places…</source>
        <translation>Locais do painel es&amp;querdo…</translation>
    </message>
    <message>
        <source>R&amp;ight Panel Places…</source>
        <translation>Locais do painel &amp;direito…</translation>
    </message>
    <message>
        <source>&amp;Manage Connections…</source>
        <translation>&amp;Gerenciar conexões…</translation>
    </message>
    <message>
        <source>Show &amp;Transfers</source>
        <translation>Mostrar &amp;transferências</translation>
    </message>
    <message>
        <source>&amp;Pause All</source>
        <translation>&amp;Pausar tudo</translation>
    </message>
    <message>
        <source>&amp;Resume All</source>
        <translation>&amp;Retomar tudo</translation>
    </message>
    <message>
        <source>&amp;Clear Finished</source>
        <translation>&amp;Limpar concluídas</translation>
    </message>
    <message>
        <source>Transfer &amp;Settings…</source>
        <translation>&amp;Configurações de transferência…</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts</source>
        <translation>&amp;Atalhos de teclado</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Sobre</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Arquivo</translation>
    </message>
    <message>
        <source>&amp;Select</source>
        <translation>&amp;Selecionar</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <comment>menu</comment>
        <translation>E&amp;xibir</translation>
    </message>
    <message>
        <source>&amp;Go</source>
        <translation>&amp;Ir</translation>
    </message>
    <message>
        <source>&amp;Transfers</source>
        <translation>&amp;Transferências</translation>
    </message>
    <message>
        <source>S&amp;3</source>
        <translation>S&amp;3</translation>
    </message>
    <message>
        <source>&amp;Connections</source>
        <translation>&amp;Conexões</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Aj&amp;uda</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Início</translation>
    </message>
    <message>
        <source>Root (/)</source>
        <translation>Raiz (/)</translation>
    </message>
    <message>
        <source>S3 Connections</source>
        <translation>Conexões S3</translation>
    </message>
    <message>
        <source>All Connections</source>
        <translation>Todas as conexões</translation>
    </message>
    <message>
        <source>Same as Other Panel</source>
        <translation>Igual ao outro painel</translation>
    </message>
    <message>
        <source>Find Files</source>
        <translation>Buscar arquivos</translation>
    </message>
    <message>
        <source>Open a bucket to search in it.</source>
        <translation>Abra um bucket para buscar nele.</translation>
    </message>
    <message>
        <source>Open a drive to search in it.</source>
        <translation>Abra uma unidade para buscar nela.</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n location(s) to the clipboard</source>
        <translation>
            <numerusform>%n local copiado para a área de transferência</numerusform>
            <numerusform>%n locais copiados para a área de transferência</numerusform>
        </translation>
    </message>
    <message>
        <source>Queued: %1</source>
        <translation>Na fila: %1</translation>
    </message>
    <message numerus="yes">
        <source>Resuming %n interrupted transfer(s)</source>
        <translation>
            <numerusform>Retomando %n transferência interrompida</numerusform>
            <numerusform>Retomando %n transferências interrompidas</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n interrupted transfer(s) restored; resume them in the Transfers panel</source>
        <translation>
            <numerusform>%n transferência interrompida restaurada; retome-a no painel Transferências</numerusform>
            <numerusform>%n transferências interrompidas restauradas; retome-as no painel Transferências</numerusform>
        </translation>
    </message>
    <message>
        <source>Done: %1</source>
        <translation>Concluído: %1</translation>
    </message>
    <message numerus="yes">
        <source>%1: %n error(s)</source>
        <translation>
            <numerusform>%1: %n erro</numerusform>
            <numerusform>%1: %n erros</numerusform>
        </translation>
    </message>
    <message>
        <source>Cancelled: %1</source>
        <translation>Cancelado: %1</translation>
    </message>
    <message>
        <source>The new language is used after restarting S3 File Manager.</source>
        <translation>O novo idioma será usado após reiniciar o S3 File Manager.</translation>
    </message>
    <message>
        <source>Delete markers cannot be copied.</source>
        <translation>Marcadores de exclusão não podem ser copiados.</translation>
    </message>
    <message>
        <source>Versions cannot be moved or renamed; copy them, or use Version History.</source>
        <translation>Versões não podem ser movidas nem renomeadas; copie-as ou use o Histórico de versões.</translation>
    </message>
    <message>
        <source>Folders would be copied with their current contents. Leave the &quot;as of&quot; view to copy folders, or select the files.</source>
        <translation>As pastas seriam copiadas com o conteúdo atual. Saia da visualização &quot;em uma data&quot; para copiar pastas ou selecione os arquivos.</translation>
    </message>
    <message>
        <source>Versions View</source>
        <translation>Visualização de versões</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n itens</numerusform>
        </translation>
    </message>
    <message>
        <source>Move %1 to:</source>
        <translation>Mover %1 para:</translation>
    </message>
    <message>
        <source>Copy %1 to:</source>
        <translation>Copiar %1 para:</translation>
    </message>
    <message>
        <source>S3 has no rename: objects are copied, then the originals are deleted.</source>
        <translation>O S3 não tem renomeação: os objetos são copiados e, em seguida, os originais são excluídos.</translation>
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
        <translation>Destino inválido: %1</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Renomear</translation>
    </message>
    <message>
        <source>New name:</source>
        <translation>Novo nome:</translation>
    </message>
    <message>
        <source>The name must not contain path separators.</source>
        <translation>O nome não deve conter separadores de caminho.</translation>
    </message>
    <message>
        <source>Folders cannot be created in search results</source>
        <translation>Não é possível criar pastas nos resultados da busca</translation>
    </message>
    <message>
        <source>Folders cannot be created here</source>
        <translation>Não é possível criar pastas aqui</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nova pasta</translation>
    </message>
    <message>
        <source>Folder name (use / for nested folders):</source>
        <translation>Nome da pasta (use / para pastas aninhadas):</translation>
    </message>
    <message>
        <source>Invalid folder name: %1</source>
        <translation>Nome de pasta inválido: %1</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Excluir</translation>
    </message>
    <message>
        <source>In the versions view only versions can be deleted. Leave it to delete folders.</source>
        <translation>Na visualização de versões, somente versões podem ser excluídas. Saia dela para excluir pastas.</translation>
    </message>
    <message>
        <source>Delete Bucket</source>
        <translation>Excluir bucket</translation>
    </message>
    <message>
        <source>Delete buckets one at a time.</source>
        <translation>Exclua os buckets um de cada vez.</translation>
    </message>
    <message>
        <source>These items cannot be deleted here</source>
        <translation>Estes itens não podem ser excluídos aqui</translation>
    </message>
    <message>
        <source>Permanently delete the folder &quot;%1&quot; and everything in it?</source>
        <translation>Excluir permanentemente a pasta &quot;%1&quot; e todo o seu conteúdo?</translation>
    </message>
    <message>
        <source>Permanently delete &quot;%1&quot;?</source>
        <translation>Excluir permanentemente &quot;%1&quot;?</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n selected item(s)?</source>
        <translation>
            <numerusform>Excluir permanentemente %n item selecionado?</numerusform>
            <numerusform>Excluir permanentemente %n itens selecionados?</numerusform>
        </translation>
    </message>
    <message>
        <source>No application to open %1</source>
        <translation>Nenhum aplicativo para abrir %1</translation>
    </message>
    <message>
        <source>A delete marker has no content</source>
        <translation>Um marcador de exclusão não tem conteúdo</translation>
    </message>
    <message>
        <source>Select S3 objects or folders to edit</source>
        <translation>Selecione objetos ou pastas do S3 para editar</translation>
    </message>
    <message numerus="yes">
        <source>%n selected item(s)</source>
        <translation>
            <numerusform>%n item selecionado</numerusform>
            <numerusform>%n itens selecionados</numerusform>
        </translation>
    </message>
    <message>
        <source>Updating objects…</source>
        <translation>Atualizando objetos…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled after %n object(s)</source>
        <translation>
            <numerusform>Cancelado após %n objeto</numerusform>
            <numerusform>Cancelado após %n objetos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Updated %n object(s)</source>
        <translation>
            <numerusform>%n objeto atualizado</numerusform>
            <numerusform>%n objetos atualizados</numerusform>
        </translation>
    </message>
    <message>
        <source>Edit Objects</source>
        <translation>Editar objetos</translation>
    </message>
    <message numerus="yes">
        <source>%1 of %n object(s) updated; %2 failed.</source>
        <translation>
            <numerusform>%1 de %n objeto atualizado; %2 com falha.</numerusform>
            <numerusform>%1 de %n objetos atualizados; %2 com falha.</numerusform>
        </translation>
    </message>
    <message>
        <source>Close the search results first</source>
        <translation>Feche primeiro os resultados da busca</translation>
    </message>
    <message>
        <source>Versions can be shown inside S3 buckets</source>
        <translation>As versões podem ser mostradas dentro de buckets do S3</translation>
    </message>
    <message>
        <source>Versioning has never been enabled on %1: each object has one version</source>
        <translation>O versionamento nunca foi ativado em %1: cada objeto tem uma versão</translation>
    </message>
    <message>
        <source>Versioning is suspended on %1</source>
        <translation>O versionamento está suspenso em %1</translation>
    </message>
    <message>
        <source>Point-in-time browsing works inside S3 buckets</source>
        <translation>A navegação em uma data funciona dentro de buckets do S3</translation>
    </message>
    <message>
        <source>Browse As Of</source>
        <translation>Navegar em uma data</translation>
    </message>
    <message>
        <source>Show this bucket as it was at a point in time, rebuilt from its version history (versioned buckets only).</source>
        <translation>Mostrar este bucket como estava em um momento específico, reconstruído a partir do histórico de versões (somente buckets versionados).</translation>
    </message>
    <message>
        <source>Date and time:</source>
        <translation>Data e hora:</translation>
    </message>
    <message>
        <source>Back to Current</source>
        <translation>Voltar ao atual</translation>
    </message>
    <message>
        <source>Select an S3 object</source>
        <translation>Selecione um objeto do S3</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Excluir versões</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Excluir permanentemente %n versão? Isso não pode ser desfeito.</numerusform>
            <numerusform>Excluir permanentemente %n versões? Isso não pode ser desfeito.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s)</source>
        <translation>
            <numerusform>%n versão excluída</numerusform>
            <numerusform>%n versões excluídas</numerusform>
        </translation>
    </message>
    <message>
        <source>Select archived S3 objects or folders</source>
        <translation>Selecione objetos ou pastas arquivados do S3</translation>
    </message>
    <message>
        <source>Requesting restores…</source>
        <translation>Solicitando restaurações…</translation>
    </message>
    <message numerus="yes">
        <source>Restore requested for %n object(s)</source>
        <translation>
            <numerusform>Restauração solicitada para %n objeto</numerusform>
            <numerusform>Restauração solicitada para %n objetos</numerusform>
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
            <numerusform>%n não arquivado, já restaurado ou em andamento</numerusform>
            <numerusform>%n não arquivados, já restaurados ou em andamento</numerusform>
        </translation>
    </message>
    <message>
        <source>Restore from Archive</source>
        <translation>Restaurar do arquivamento</translation>
    </message>
    <message numerus="yes">
        <source>%n failed.</source>
        <translation>
            <numerusform>%n com falha.</numerusform>
            <numerusform>%n com falha.</numerusform>
        </translation>
    </message>
    <message>
        <source>Open an S3 bucket first</source>
        <translation>Abra um bucket do S3 primeiro</translation>
    </message>
    <message>
        <source>Open an S3 connection first</source>
        <translation>Abra uma conexão S3 primeiro</translation>
    </message>
    <message>
        <source>Creating bucket %1…</source>
        <translation>Criando o bucket %1…</translation>
    </message>
    <message>
        <source>New Bucket</source>
        <translation>Novo bucket</translation>
    </message>
    <message>
        <source>Could not create %1: %2</source>
        <translation>Não foi possível criar %1: %2</translation>
    </message>
    <message>
        <source>Created bucket %1</source>
        <translation>Bucket %1 criado</translation>
    </message>
    <message>
        <source>Select a bucket or open one</source>
        <translation>Selecione ou abra um bucket</translation>
    </message>
    <message>
        <source>Checking the contents of %1…</source>
        <translation>Verificando o conteúdo de %1…</translation>
    </message>
    <message>
        <source>Deleting the contents of %1…</source>
        <translation>Excluindo o conteúdo de %1…</translation>
    </message>
    <message numerus="yes">
        <source>Deleted %Ln item(s)…</source>
        <translation>
            <numerusform>%Ln item excluído…</numerusform>
            <numerusform>%Ln itens excluídos…</numerusform>
        </translation>
    </message>
    <message>
        <source>Deleted bucket %1</source>
        <translation>Bucket %1 excluído</translation>
    </message>
    <message numerus="yes">
        <source>Cancelled; %n item(s) were deleted already</source>
        <translation>
            <numerusform>Cancelado; %n item já havia sido excluído</numerusform>
            <numerusform>Cancelado; %n itens já haviam sido excluídos</numerusform>
        </translation>
    </message>
    <message>
        <source>Could not delete the bucket %1.</source>
        <translation>Não foi possível excluir o bucket %1.</translation>
    </message>
    <message>
        <source>%1 and %2 before the error.</source>
        <comment>deleting a bucket: items deleted, uploads aborted</comment>
        <translation>%1 e %2 antes do erro.</translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) deleted</source>
        <translation>
            <numerusform>%n item excluído</numerusform>
            <numerusform>%n itens excluídos</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n upload(s) aborted</source>
        <translation>
            <numerusform>%n upload abortado</numerusform>
            <numerusform>%n uploads abortados</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s) could not be deleted (retention, legal hold or permissions).</source>
        <translation>
            <numerusform>%n item não pôde ser excluído (retenção, retenção legal ou permissões).</numerusform>
            <numerusform>%n itens não puderam ser excluídos (retenção, retenção legal ou permissões).</numerusform>
        </translation>
    </message>
    <message>
        <source>Select an S3 object to share</source>
        <translation>Selecione um objeto do S3 para compartilhar</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Open with Default Application</source>
        <translation>Abrir com o aplicativo padrão</translation>
    </message>
    <message>
        <source>Make This Version Current</source>
        <translation>Tornar esta versão a atual</translation>
    </message>
    <message>
        <source>Restore Version</source>
        <translation>Restaurar versão</translation>
    </message>
    <message>
        <source>Undelete</source>
        <translation>Desfazer exclusão</translation>
    </message>
    <message>
        <source>Nothing to copy</source>
        <translation>Nada para copiar</translation>
    </message>
    <message numerus="yes">
        <source>Copied %n line(s) to the clipboard</source>
        <translation>
            <numerusform>%n linha copiada para a área de transferência</numerusform>
            <numerusform>%n linhas copiadas para a área de transferência</numerusform>
        </translation>
    </message>
    <message>
        <source>Tab</source>
        <translation>Tab</translation>
    </message>
    <message>
        <source>Switch panel</source>
        <translation>Alternar painel</translation>
    </message>
    <message>
        <source>Enter / Backspace</source>
        <translation>Enter / Backspace</translation>
    </message>
    <message>
        <source>Open / parent folder</source>
        <translation>Abrir / pasta pai</translation>
    </message>
    <message>
        <source>Insert / Space</source>
        <translation>Insert / Espaço</translation>
    </message>
    <message>
        <source>Toggle selection (and move down) / toggle selection</source>
        <translation>Alternar seleção (e descer) / alternar seleção</translation>
    </message>
    <message>
        <source>Shift+Arrows</source>
        <translation>Shift+Setas</translation>
    </message>
    <message>
        <source>Extend selection</source>
        <translation>Estender seleção</translation>
    </message>
    <message>
        <source>Type letters</source>
        <translation>Digitar letras</translation>
    </message>
    <message>
        <source>Jump to name</source>
        <translation>Ir para o nome</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Atalhos de teclado</translation>
    </message>
    <message>
        <source>About S3 File Manager</source>
        <translation>Sobre o S3 File Manager</translation>
    </message>
    <message>
        <source>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Dual-panel file manager for Amazon S3 and S3-compatible storage.&lt;/p&gt;&lt;p&gt;Built with Qt %2 and the AWS SDK for C++.&lt;/p&gt;&lt;p&gt;MIT License&lt;/p&gt;</source>
        <translation>&lt;h3&gt;S3 File Manager %1&lt;/h3&gt;&lt;p&gt;Gerenciador de arquivos de dois painéis para o Amazon S3 e armazenamento compatível com S3.&lt;/p&gt;&lt;p&gt;Criado com Qt %2 e o AWS SDK for C++.&lt;/p&gt;&lt;p&gt;Licença MIT&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Unsaved Remote Edits</source>
        <translation>Edições remotas não enviadas</translation>
    </message>
    <message>
        <source>Some edited files have changes that were not uploaded. Quit anyway?</source>
        <translation>Alguns arquivos editados têm alterações que não foram enviadas. Sair mesmo assim?</translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and continue them next time?</source>
        <translation>
            <numerusform>%n transferência ainda em execução. Sair e continuá-la na próxima vez?</numerusform>
            <numerusform>%n transferências ainda em execução. Sair e continuá-las na próxima vez?</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n transfer(s) still running. Quit and abandon them?</source>
        <translation>
            <numerusform>%n transferência ainda em execução. Sair e abandoná-la?</numerusform>
            <numerusform>%n transferências ainda em execução. Sair e abandoná-las?</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfers Running</source>
        <translation>Transferências em execução</translation>
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
            <numerusform>%n dia</numerusform>
            <numerusform>%n dias</numerusform>
        </translation>
    </message>
    <message>
        <source>Incomplete Multipart Uploads — %1</source>
        <translation>Uploads fracionados incompletos — %1</translation>
    </message>
    <message>
        <source>Interrupted uploads keep their parts (and their storage cost) until they are completed or aborted. A bucket lifecycle rule can abort them automatically.</source>
        <translation>Uploads interrompidos mantêm suas partes (e o custo de armazenamento) até serem concluídos ou abortados. Uma regra de ciclo de vida do bucket pode abortá-los automaticamente.</translation>
    </message>
    <message>
        <source>Key prefix:</source>
        <translation>Prefixo da chave:</translation>
    </message>
    <message>
        <source>(whole bucket)</source>
        <translation>(bucket inteiro)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Atualizar</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chave</translation>
    </message>
    <message>
        <source>Started</source>
        <translation>Iniciado em</translation>
    </message>
    <message>
        <source>Age</source>
        <translation>Idade</translation>
    </message>
    <message>
        <source>Parts</source>
        <translation>Partes</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe de armazenamento</translation>
    </message>
    <message>
        <source>Abort &amp;Selected…</source>
        <translation>Abortar &amp;selecionados…</translation>
    </message>
    <message>
        <source>Abort &amp;All…</source>
        <translation>Abortar &amp;todos…</translation>
    </message>
    <message>
        <source>Upload ID: %1
Started by: %2</source>
        <translation>ID do upload: %1
Iniciado por: %2</translation>
    </message>
    <message>
        <source>No incomplete uploads. (Some S3-compatible services list uploads only for an exact object key: enter it as the prefix.)</source>
        <translation>Nenhum upload incompleto. (Alguns serviços compatíveis com S3 listam uploads somente para uma chave de objeto exata: insira-a como prefixo.)</translation>
    </message>
    <message numerus="yes">
        <source>%n incomplete upload(s), %1 stored.</source>
        <translation>
            <numerusform>%n upload incompleto, ocupando %1.</numerusform>
            <numerusform>%n uploads incompletos, ocupando %1.</numerusform>
        </translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Carregando…</translation>
    </message>
    <message>
        <source>Abort Uploads</source>
        <translation>Abortar uploads</translation>
    </message>
    <message numerus="yes">
        <source>Abort %n upload(s)? Their uploaded parts are deleted.</source>
        <translation>
            <numerusform>Abortar %n upload? As partes enviadas serão excluídas.</numerusform>
            <numerusform>Abortar %n uploads? As partes enviadas serão excluídas.</numerusform>
        </translation>
    </message>
    <message>
        <source>Aborting…</source>
        <translation>Abortando…</translation>
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
        <translation>Alterar %1. Somente as seções marcadas são aplicadas; as pastas incluem tudo o que está abaixo delas.</translation>
    </message>
    <message>
        <source>Headers and metadata</source>
        <translation>Cabeçalhos e metadados</translation>
    </message>
    <message>
        <source>(unchanged)</source>
        <translation>(inalterado)</translation>
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
        <translation>Definir metadados do usuário:</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chave</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Replace all user metadata (otherwise merge)</source>
        <translation>Substituir todos os metadados do usuário (caso contrário, mesclar)</translation>
    </message>
    <message>
        <source>key-a, key-b</source>
        <translation>key-a, key-b</translation>
    </message>
    <message>
        <source>Remove keys:</source>
        <translation>Remover chaves:</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe de armazenamento</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>Criptografia</translation>
    </message>
    <message>
        <source>Tags (replace the tag set)</source>
        <translation>Tags (substituir o conjunto de tags)</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>Access control (canned ACL)</source>
        <translation>Controle de acesso (ACL predefinida)</translation>
    </message>
    <message>
        <source>&lt;small&gt;Headers, storage class and encryption are changed by copying each object onto itself (S3 cannot change them otherwise); that resets its ACL unless an ACL is set here too. Archived objects (Glacier, Deep Archive) must be restored first.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Cabeçalhos, classe de armazenamento e criptografia são alterados copiando cada objeto sobre si mesmo (o S3 não permite alterá-los de outra forma); isso redefine a ACL, a menos que uma ACL também seja definida aqui. Objetos arquivados (Glacier, Deep Archive) devem ser restaurados primeiro.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Check at least one section to change.</source>
        <translation>Marque pelo menos uma seção para alterar.</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Chave de metadados inválida &quot;%1&quot;: use letras, dígitos, &apos;-&apos;, &apos;_&apos; e &apos;.&apos;</translation>
    </message>
</context>
<context>
    <name>s3fm::PanelWidget</name>
    <message>
        <source>Places and connections</source>
        <translation>Locais e conexões</translation>
    </message>
    <message>
        <source>Home</source>
        <translation>Início</translation>
    </message>
    <message>
        <source>Root</source>
        <translation>Raiz</translation>
    </message>
    <message>
        <source>Retry</source>
        <translation>Tentar novamente</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Parar</translation>
    </message>
    <message>
        <source>Stop searching (Esc)</source>
        <translation>Parar a busca (Esc)</translation>
    </message>
    <message>
        <source>New Search…</source>
        <translation>Nova busca…</translation>
    </message>
    <message>
        <source>Close the search results</source>
        <translation>Fechar os resultados da busca</translation>
    </message>
    <message>
        <source>Filter (substring, or wildcards * ?) — Esc to close</source>
        <translation>Filtro (substring ou curingas * ?) — Esc para fechar</translation>
    </message>
    <message>
        <source>Cannot search %1</source>
        <translation>Não é possível buscar em %1</translation>
    </message>
    <message>
        <source>Search failed: %1</source>
        <translation>Falha na busca: %1</translation>
    </message>
    <message>
        <source>Search results: %1 in %2</source>
        <translation>Resultados da busca: %1 em %2</translation>
    </message>
    <message>
        <source>Unknown address: %1</source>
        <translation>Endereço desconhecido: %1</translation>
    </message>
    <message>
        <source>Invalid location: %1</source>
        <translation>Local inválido: %1</translation>
    </message>
    <message>
        <source>Cannot open %1: %2</source>
        <translation>Não é possível abrir %1: %2</translation>
    </message>
    <message>
        <source>%1 of %2 selected, %3</source>
        <translation>Selecionados: %1 de %2, %3</translation>
    </message>
    <message>
        <source>%1, %2, %3</source>
        <comment>panel status: folders, files, total size</comment>
        <translation>%1, %2, %3</translation>
    </message>
    <message numerus="yes">
        <source>%n folder(s)</source>
        <translation>
            <numerusform>%n pasta</numerusform>
            <numerusform>%n pastas</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n file(s)</source>
        <translation>
            <numerusform>%n arquivo</numerusform>
            <numerusform>%n arquivos</numerusform>
        </translation>
    </message>
    <message>
        <source>[As of %1] </source>
        <translation>[Em %1] </translation>
    </message>
    <message>
        <source>[All versions] </source>
        <translation>[Todas as versões] </translation>
    </message>
    <message>
        <source> — searching… (%1 scanned)</source>
        <translation> — buscando… (%1 verificados)</translation>
    </message>
    <message numerus="yes">
        <source> — search stopped at %n result(s)</source>
        <translation>
            <numerusform> — busca interrompida em %n resultado</numerusform>
            <numerusform> — busca interrompida em %n resultados</numerusform>
        </translation>
    </message>
    <message>
        <source> — search stopped</source>
        <translation> — busca interrompida</translation>
    </message>
    <message>
        <source> — %1 scanned</source>
        <translation> — %1 verificados</translation>
    </message>
    <message>
        <source> — loading…</source>
        <translation> — carregando…</translation>
    </message>
    <message>
        <source> — more items available (scroll down)</source>
        <translation> — há mais itens disponíveis (role para baixo)</translation>
    </message>
</context>
<context>
    <name>s3fm::PresignDialog</name>
    <message>
        <source>Share Link — %1</source>
        <translation>Compartilhar link — %1</translation>
    </message>
    <message>
        <source>Download (GET)</source>
        <translation>Download (GET)</translation>
    </message>
    <message>
        <source>Upload / replace (PUT)</source>
        <translation>Upload / substituição (PUT)</translation>
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
        <translation>dias</translation>
    </message>
    <message>
        <source>Valid for:</source>
        <translation>Válido por:</translation>
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
        <translation>URLs pré-assinadas são válidas por no máximo 7 dias; a validade foi reduzida.</translation>
    </message>
    <message>
        <source>Expires %1</source>
        <translation>Expira em %1</translation>
    </message>
    <message>
        <source>These are temporary credentials (session token, SSO or assumed role): the URL stops working when they expire.</source>
        <translation>Estas são credenciais temporárias (token de sessão, SSO ou função assumida): a URL deixa de funcionar quando elas expirarem.</translation>
    </message>
    <message>
        <source>The expiry was shortened to match them.</source>
        <translation>A validade foi reduzida para corresponder a elas.</translation>
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
        <translation>Propriedades — %1</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Geral</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadados</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Storage &amp;&amp; Encryption</source>
        <translation>Armazenamento e criptografia</translation>
    </message>
    <message>
        <source>Permissions</source>
        <translation>Permissões</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueio de objetos</translation>
    </message>
    <message>
        <source>Checksums</source>
        <translation>Checksums</translation>
    </message>
    <message>
        <source>All headers</source>
        <translation>Todos os cabeçalhos</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>Chave</translation>
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
        <translation>Metadados do usuário (x-amz-meta-…):</translation>
    </message>
    <message>
        <source>&lt;small&gt;S3 stores headers with the object: applying copies the object onto itself. Its ACL is reset to the bucket default; tags are kept.&lt;/small&gt;</source>
        <translation>&lt;small&gt;O S3 armazena os cabeçalhos com o objeto: aplicar copia o objeto sobre si mesmo. A ACL é redefinida para o padrão do bucket; as tags são mantidas.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Tag</source>
        <translation>Tag</translation>
    </message>
    <message>
        <source>&lt;small&gt;Up to 10 tags; keys up to 128 and values up to 256 characters.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Até 10 tags; chaves com até 128 e valores com até 256 caracteres.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>Storage class:</source>
        <translation>Classe de armazenamento:</translation>
    </message>
    <message>
        <source>Encryption:</source>
        <translation>Criptografia:</translation>
    </message>
    <message>
        <source>Customer Key (SSE-C)…</source>
        <translation>Chave do cliente (SSE-C)…</translation>
    </message>
    <message>
        <source>Owner:</source>
        <translation>Proprietário:</translation>
    </message>
    <message>
        <source>Grantee</source>
        <translation>Beneficiário</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Permission</source>
        <translation>Permissão</translation>
    </message>
    <message>
        <source>Replace with canned ACL:</source>
        <translation>Substituir por ACL predefinida:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nenhum</translation>
    </message>
    <message>
        <source>Governance (can be lifted with special permission)</source>
        <translation>Governança (pode ser suspensa com permissão especial)</translation>
    </message>
    <message>
        <source>Compliance (cannot be shortened or removed)</source>
        <translation>Conformidade (não pode ser reduzida nem removida)</translation>
    </message>
    <message>
        <source>Retention mode:</source>
        <translation>Modo de retenção:</translation>
    </message>
    <message>
        <source>Retain until:</source>
        <translation>Reter até:</translation>
    </message>
    <message>
        <source>Bypass governance mode (needed to shorten or remove a governance retention)</source>
        <translation>Ignorar o modo de governança (necessário para reduzir ou remover uma retenção de governança)</translation>
    </message>
    <message>
        <source>Legal hold</source>
        <translation>Retenção legal</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>Algoritmo</translation>
    </message>
    <message>
        <source>Stored</source>
        <translation>Armazenado</translation>
    </message>
    <message>
        <source>Local file</source>
        <translation>Arquivo local</translation>
    </message>
    <message>
        <source>Result</source>
        <translation>Resultado</translation>
    </message>
    <message>
        <source>Compare with Local File…</source>
        <translation>Comparar com arquivo local…</translation>
    </message>
    <message>
        <source>Loading…</source>
        <translation>Carregando…</translation>
    </message>
    <message>
        <source>Could not load the object: %1</source>
        <translation>Não foi possível carregar o objeto: %1</translation>
    </message>
    <message>
        <source>Could not load metadata: %1</source>
        <translation>Não foi possível carregar os metadados: %1</translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Local:</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Arquivo</translation>
    </message>
    <message>
        <source>File (%1)</source>
        <translation>Arquivo (%1)</translation>
    </message>
    <message>
        <source>Folder (prefix)</source>
        <translation>Pasta (prefixo)</translation>
    </message>
    <message>
        <source>Folder</source>
        <translation>Pasta</translation>
    </message>
    <message>
        <source>Bucket</source>
        <translation>Bucket</translation>
    </message>
    <message>
        <source>Connection</source>
        <translation>Conexão</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Tamanho:</translation>
    </message>
    <message>
        <source>Modified:</source>
        <translation>Modificado:</translation>
    </message>
    <message>
        <source>Link target:</source>
        <translation>Destino do link:</translation>
    </message>
    <message>
        <source>Permissions:</source>
        <translation>Permissões:</translation>
    </message>
    <message>
        <source>Hidden:</source>
        <translation>Oculto:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Sim</translation>
    </message>
    <message>
        <source>ETag:</source>
        <translation>ETag:</translation>
    </message>
    <message>
        <source>Version ID:</source>
        <translation>ID da versão:</translation>
    </message>
    <message>
        <source>Region:</source>
        <translation>Região:</translation>
    </message>
    <message>
        <source>S3 URI:</source>
        <translation>URI do S3:</translation>
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
        <translation>As tags não estão disponíveis: %1</translation>
    </message>
    <message>
        <source>&lt;small&gt;This object is archived; changing its storage class needs a restored copy.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Este objeto está arquivado; alterar sua classe de armazenamento requer uma cópia restaurada.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>&lt;small&gt;Changing these copies the object onto itself.&lt;/small&gt;</source>
        <translation>&lt;small&gt;Alterar estes campos copia o objeto sobre si mesmo.&lt;/small&gt;</translation>
    </message>
    <message>
        <source>ACLs are disabled for this bucket (Object Ownership: bucket owner enforced). Use bucket policies to grant access.</source>
        <translation>As ACLs estão desativadas para este bucket (Propriedade de objetos: proprietário do bucket imposto). Use políticas de bucket para conceder acesso.</translation>
    </message>
    <message>
        <source>The ACL is not available: %1</source>
        <translation>A ACL não está disponível: %1</translation>
    </message>
    <message>
        <source>Object Ownership: %1</source>
        <translation>Propriedade de objetos: %1</translation>
    </message>
    <message>
        <source>Object Lock state is not available: %1</source>
        <translation>O estado do Bloqueio de objetos não está disponível: %1</translation>
    </message>
    <message>
        <source>Object Lock is not enabled on this bucket (it can only be enabled when the bucket is created).</source>
        <translation>O Bloqueio de objetos não está ativado neste bucket (ele só pode ser ativado quando o bucket é criado).</translation>
    </message>
    <message>
        <source>Retained in %1 mode until %2.</source>
        <translation>Retido no modo %1 até %2.</translation>
    </message>
    <message>
        <source>No retention is set on this version.</source>
        <translation>Nenhuma retenção definida nesta versão.</translation>
    </message>
    <message>
        <source>Applying…</source>
        <translation>Aplicando…</translation>
    </message>
    <message>
        <source>Invalid metadata key &quot;%1&quot;: use letters, digits, &apos;-&apos;, &apos;_&apos; and &apos;.&apos;</source>
        <translation>Chave de metadados inválida &quot;%1&quot;: use letras, dígitos, &apos;-&apos;, &apos;_&apos; e &apos;.&apos;</translation>
    </message>
    <message>
        <source>Metadata saved.</source>
        <translation>Metadados salvos.</translation>
    </message>
    <message>
        <source>Tags saved.</source>
        <translation>Tags salvas.</translation>
    </message>
    <message>
        <source>Nothing changed.</source>
        <translation>Nada foi alterado.</translation>
    </message>
    <message>
        <source>Storage settings saved.</source>
        <translation>Configurações de armazenamento salvas.</translation>
    </message>
    <message>
        <source>ACL set to %1.</source>
        <translation>ACL definida como %1.</translation>
    </message>
    <message>
        <source>Object Lock settings saved.</source>
        <translation>Configurações do Bloqueio de objetos salvas.</translation>
    </message>
    <message>
        <source>Compare with Local File</source>
        <translation>Comparar com arquivo local</translation>
    </message>
    <message>
        <source>Computing checksums of %1…</source>
        <translation>Calculando checksums de %1…</translation>
    </message>
    <message>
        <source>Match</source>
        <translation>Corresponde</translation>
    </message>
    <message>
        <source>DIFFERENT</source>
        <translation>DIFERENTE</translation>
    </message>
    <message>
        <source>The object has no checksum that can be compared.</source>
        <translation>O objeto não tem um checksum que possa ser comparado.</translation>
    </message>
    <message>
        <source>The local file matches the object.</source>
        <translation>O arquivo local corresponde ao objeto.</translation>
    </message>
    <message>
        <source>The local file differs from the object.</source>
        <translation>O arquivo local é diferente do objeto.</translation>
    </message>
    <message>
        <source>Customer keys need a saved connection.</source>
        <translation>Chaves do cliente exigem uma conexão salva.</translation>
    </message>
</context>
<context>
    <name>s3fm::Provider</name>
    <message>
        <source>Version listings are not supported here</source>
        <translation>Listagens de versões não são suportadas aqui</translation>
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
        <translation>Nenhum provedor</translation>
    </message>
    <message>
        <source>Cannot create a temporary directory</source>
        <translation>Não é possível criar um diretório temporário</translation>
    </message>
    <message>
        <source>Large File</source>
        <translation>Arquivo grande</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is %2. Download it to a temporary file?</source>
        <translation>&quot;%1&quot; tem %2. Baixá-lo para um arquivo temporário?</translation>
    </message>
    <message>
        <source>Older versions cannot be edited; restore the version first</source>
        <translation>Versões antigas não podem ser editadas; restaure a versão primeiro</translation>
    </message>
    <message>
        <source>Downloading %1…</source>
        <translation>Baixando %1…</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Cannot download %1</source>
        <translation>Não é possível baixar %1</translation>
    </message>
    <message>
        <source>No application to open this file</source>
        <translation>Nenhum aplicativo para abrir este arquivo</translation>
    </message>
    <message>
        <source>No application to edit this file</source>
        <translation>Nenhum aplicativo para editar este arquivo</translation>
    </message>
    <message>
        <source>Upload Changes</source>
        <translation>Enviar alterações</translation>
    </message>
    <message>
        <source>&quot;%1&quot; was modified. Upload it to %2?</source>
        <translation>&quot;%1&quot; foi modificado. Enviá-lo para %2?</translation>
    </message>
    <message>
        <source>Remote File Changed</source>
        <translation>Arquivo remoto alterado</translation>
    </message>
    <message>
        <source>%1 was changed on the server since you opened it. Overwrite it with your version?</source>
        <translation>%1 foi alterado no servidor desde que você o abriu. Sobrescrevê-lo com a sua versão?</translation>
    </message>
    <message>
        <source>Cannot upload %1</source>
        <translation>Não é possível enviar %1</translation>
    </message>
</context>
<context>
    <name>s3fm::RestoreArchiveDialog</name>
    <message>
        <source>Restore from Archive</source>
        <translation>Restaurar do arquivamento</translation>
    </message>
    <message>
        <source>Request a temporary, readable copy of %1. The archived object stays where it is; the copy is billed at the bucket&apos;s standard rate until it expires.</source>
        <translation>Solicitar uma cópia temporária e legível de %1. O objeto arquivado permanece onde está; a cópia é cobrada pela tarifa padrão do bucket até expirar.</translation>
    </message>
    <message numerus="yes">
        <source> day(s)</source>
        <translation>
            <numerusform> dia</numerusform>
            <numerusform> dias</numerusform>
        </translation>
    </message>
    <message>
        <source>Keep the copy for:</source>
        <translation>Manter a cópia por:</translation>
    </message>
    <message>
        <source>Standard (Glacier: 3–5 hours, Deep Archive: within 12 hours)</source>
        <translation>Padrão (Glacier: 3–5 horas, Deep Archive: em até 12 horas)</translation>
    </message>
    <message>
        <source>Bulk (cheapest; 5–12 hours, Deep Archive: within 48 hours)</source>
        <translation>Em massa (mais barato; 5–12 horas, Deep Archive: em até 48 horas)</translation>
    </message>
    <message>
        <source>Expedited (Glacier only; 1–5 minutes, most expensive)</source>
        <translation>Acelerada (somente Glacier; 1–5 minutos, mais caro)</translation>
    </message>
    <message>
        <source>Retrieval tier:</source>
        <translation>Nível de recuperação:</translation>
    </message>
    <message>
        <source>Request Restore</source>
        <translation>Solicitar restauração</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketService</name>
    <message>
        <source>Unknown object ownership setting</source>
        <translation>Configuração de propriedade de objetos desconhecida</translation>
    </message>
</context>
<context>
    <name>s3fm::S3BucketTypes</name>
    <message>
        <source>JSON syntax error at line %1, column %2: %3</source>
        <translation>Erro de sintaxe JSON na linha %1, coluna %2: %3</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot; in %2</source>
        <translation>Campo desconhecido &quot;%1&quot; em %2</translation>
    </message>
    <message>
        <source>Versioning</source>
        <translation>Versionamento</translation>
    </message>
    <message>
        <source>Default encryption</source>
        <translation>Criptografia padrão</translation>
    </message>
    <message>
        <source>Lifecycle rules</source>
        <translation>Regras de ciclo de vida</translation>
    </message>
    <message>
        <source>CORS</source>
        <translation>CORS</translation>
    </message>
    <message>
        <source>Bucket policy</source>
        <translation>Política do bucket</translation>
    </message>
    <message>
        <source>Public access block</source>
        <translation>Bloqueio de acesso público</translation>
    </message>
    <message>
        <source>Tags</source>
        <translation>Tags</translation>
    </message>
    <message>
        <source>Static website hosting</source>
        <translation>Hospedagem de site estático</translation>
    </message>
    <message>
        <source>Object Lock</source>
        <translation>Bloqueio de objetos</translation>
    </message>
    <message>
        <source>Object Ownership</source>
        <translation>Propriedade de objetos</translation>
    </message>
    <message>
        <source>Bucket names must be 3 to 63 characters long.</source>
        <translation>Os nomes de bucket devem ter de 3 a 63 caracteres.</translation>
    </message>
    <message>
        <source>Bucket names can contain only lowercase letters, digits, dots and hyphens.</source>
        <translation>Os nomes de bucket só podem conter letras minúsculas, dígitos, pontos e hifens.</translation>
    </message>
    <message>
        <source>Bucket names must begin and end with a letter or digit.</source>
        <translation>Os nomes de bucket devem começar e terminar com uma letra ou dígito.</translation>
    </message>
    <message>
        <source>Bucket names must not contain two adjacent dots.</source>
        <translation>Os nomes de bucket não devem conter dois pontos adjacentes.</translation>
    </message>
    <message>
        <source>Bucket names must not look like an IP address.</source>
        <translation>Os nomes de bucket não devem se parecer com um endereço IP.</translation>
    </message>
    <message>
        <source>Bucket names must not start with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Os nomes de bucket não devem começar com &quot;%1&quot; (reservado pela AWS).</translation>
    </message>
    <message>
        <source>Bucket names must not end with &quot;%1&quot; (reserved by AWS).</source>
        <translation>Os nomes de bucket não devem terminar com &quot;%1&quot; (reservado pela AWS).</translation>
    </message>
    <message>
        <source>Names with dots do not work with virtual-hosted HTTPS addressing (the TLS certificate does not match) or Transfer Acceleration.</source>
        <translation>Nomes com pontos não funcionam com endereçamento HTTPS hospedado virtualmente (o certificado TLS não corresponde) nem com o Transfer Acceleration.</translation>
    </message>
    <message>
        <source>Rule IDs can have at most 255 characters.</source>
        <translation>Os IDs de regra podem ter no máximo 255 caracteres.</translation>
    </message>
    <message>
        <source>A rule needs at least one action: a transition, an expiration, or aborting incomplete uploads.</source>
        <translation>Uma regra precisa de pelo menos uma ação: uma transição, uma expiração ou abortar uploads incompletos.</translation>
    </message>
    <message>
        <source>The minimum object size must be smaller than the maximum.</source>
        <translation>O tamanho mínimo do objeto deve ser menor que o máximo.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>As chaves de tag devem ter de 1 a 128 caracteres.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Os valores de tag podem ter no máximo 256 caracteres.</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot abort incomplete uploads (uploads have no tags).</source>
        <translation>Uma regra que filtra por tags não pode abortar uploads incompletos (uploads não têm tags).</translation>
    </message>
    <message>
        <source>A rule that filters on tags cannot remove expired delete markers.</source>
        <translation>Uma regra que filtra por tags não pode remover marcadores de exclusão expirados.</translation>
    </message>
    <message>
        <source>Objects can expire after 1 day at the earliest.</source>
        <translation>Os objetos podem expirar no mínimo após 1 dia.</translation>
    </message>
    <message>
        <source>Choose either a number of days or a date for the expiration.</source>
        <translation>Escolha um número de dias ou uma data para a expiração.</translation>
    </message>
    <message>
        <source>Removing expired delete markers cannot be combined with expiring current versions in the same rule.</source>
        <translation>Remover marcadores de exclusão expirados não pode ser combinado com a expiração de versões atuais na mesma regra.</translation>
    </message>
    <message>
        <source>Unknown transition storage class &quot;%1&quot;.</source>
        <translation>Classe de armazenamento de transição desconhecida &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Two transitions to %1.</source>
        <translation>Duas transições para %1.</translation>
    </message>
    <message>
        <source>Each transition needs a number of days or a date.</source>
        <translation>Cada transição precisa de um número de dias ou de uma data.</translation>
    </message>
    <message>
        <source>Objects can move to %1 after 30 days at the earliest.</source>
        <translation>Os objetos podem ser movidos para %1 no mínimo após 30 dias.</translation>
    </message>
    <message>
        <source>Use either days or dates for all transitions and the expiration of a rule.</source>
        <translation>Use dias ou datas para todas as transições e para a expiração de uma regra.</translation>
    </message>
    <message>
        <source>The expiration must come after the last transition.</source>
        <translation>A expiração deve ocorrer depois da última transição.</translation>
    </message>
    <message>
        <source>Two noncurrent-version transitions to %1.</source>
        <translation>Duas transições de versões não atuais para %1.</translation>
    </message>
    <message>
        <source>Noncurrent versions can move after 1 day at the earliest.</source>
        <translation>Versões não atuais podem ser movidas no mínimo após 1 dia.</translation>
    </message>
    <message>
        <source>The number of newer versions to keep must be between 1 and 100.</source>
        <translation>O número de versões mais recentes a manter deve estar entre 1 e 100.</translation>
    </message>
    <message>
        <source>Noncurrent versions can be deleted after 1 day at the earliest.</source>
        <translation>Versões não atuais podem ser excluídas no mínimo após 1 dia.</translation>
    </message>
    <message>
        <source>Keeping newer noncurrent versions needs a noncurrent expiration.</source>
        <translation>Manter versões não atuais mais recentes requer uma expiração de versões não atuais.</translation>
    </message>
    <message>
        <source>Incomplete uploads can be aborted after 1 day at the earliest.</source>
        <translation>Uploads incompletos podem ser abortados no mínimo após 1 dia.</translation>
    </message>
    <message>
        <source>prefix &quot;%1&quot;</source>
        <translation>prefixo &quot;%1&quot;</translation>
    </message>
    <message>
        <source>tag %1=%2</source>
        <translation>tag %1=%2</translation>
    </message>
    <message>
        <source>larger than %1</source>
        <translation>maior que %1</translation>
    </message>
    <message>
        <source>smaller than %1</source>
        <translation>menor que %1</translation>
    </message>
    <message>
        <source>Whole bucket</source>
        <translation>Bucket inteiro</translation>
    </message>
    <message>
        <source>to %1 after %2 d</source>
        <translation>para %1 após %2 d</translation>
    </message>
    <message>
        <source>to %1 on %2</source>
        <translation>para %1 em %2</translation>
    </message>
    <message>
        <source>expire after %1 d</source>
        <translation>expirar após %1 d</translation>
    </message>
    <message>
        <source>expire on %1</source>
        <translation>expirar em %1</translation>
    </message>
    <message>
        <source>remove expired delete markers</source>
        <translation>remover marcadores de exclusão expirados</translation>
    </message>
    <message>
        <source>noncurrent to %1 after %2 d</source>
        <translation>não atuais para %1 após %2 d</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d (keep %2)</source>
        <translation>excluir não atuais após %1 d (manter %2)</translation>
    </message>
    <message>
        <source>delete noncurrent after %1 d</source>
        <translation>excluir não atuais após %1 d</translation>
    </message>
    <message>
        <source>abort uploads after %1 d</source>
        <translation>abortar uploads após %1 d</translation>
    </message>
    <message>
        <source>A bucket can have at most 1000 lifecycle rules.</source>
        <translation>Um bucket pode ter no máximo 1000 regras de ciclo de vida.</translation>
    </message>
    <message>
        <source>Rule %1</source>
        <translation>Regra %1</translation>
    </message>
    <message>
        <source>Rule &quot;%1&quot;</source>
        <translation>Regra &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: another rule has the same ID.</source>
        <translation>%1: outra regra tem o mesmo ID.</translation>
    </message>
    <message>
        <source>the configuration</source>
        <translation>a configuração</translation>
    </message>
    <message>
        <source>rule %1</source>
        <translation>regra %1</translation>
    </message>
    <message>
        <source>%1 is not an object</source>
        <translation>%1: não é um objeto</translation>
    </message>
    <message>
        <source>%1: Status must be &quot;Enabled&quot; or &quot;Disabled&quot;</source>
        <translation>%1: Status deve ser &quot;Enabled&quot; ou &quot;Disabled&quot;</translation>
    </message>
    <message>
        <source> filter</source>
        <translation> (filtro)</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed origin.</source>
        <translation>Uma regra de CORS precisa de pelo menos uma origem permitida.</translation>
    </message>
    <message>
        <source>A CORS rule needs at least one allowed method.</source>
        <translation>Uma regra de CORS precisa de pelo menos um método permitido.</translation>
    </message>
    <message>
        <source>Unsupported method &quot;%1&quot; (use GET, PUT, POST, DELETE or HEAD).</source>
        <translation>Método sem suporte &quot;%1&quot; (use GET, PUT, POST, DELETE ou HEAD).</translation>
    </message>
    <message>
        <source>Invalid origin &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Origem inválida &quot;%1&quot;: no máximo um curinga &quot;*&quot;.</translation>
    </message>
    <message>
        <source>Invalid header &quot;%1&quot;: at most one &quot;*&quot; wildcard.</source>
        <translation>Cabeçalho inválido &quot;%1&quot;: no máximo um curinga &quot;*&quot;.</translation>
    </message>
    <message>
        <source>The max age cannot be negative.</source>
        <translation>A idade máxima não pode ser negativa.</translation>
    </message>
    <message>
        <source>A bucket can have at most 100 CORS rules.</source>
        <translation>Um bucket pode ter no máximo 100 regras de CORS.</translation>
    </message>
    <message>
        <source>Rule %1: %2</source>
        <translation>Regra %1: %2</translation>
    </message>
    <message>
        <source>A policy must be a JSON object.</source>
        <translation>Uma política deve ser um objeto JSON.</translation>
    </message>
    <message>
        <source>No &quot;Version&quot;: add &quot;Version&quot;: &quot;2012-10-17&quot; (without it, policy variables do not work).</source>
        <translation>Sem &quot;Version&quot;: adicione &quot;Version&quot;: &quot;2012-10-17&quot; (sem isso, as variáveis de política não funcionam).</translation>
    </message>
    <message>
        <source>Unknown policy version &quot;%1&quot; (use &quot;2012-10-17&quot;).</source>
        <translation>Versão de política desconhecida &quot;%1&quot; (use &quot;2012-10-17&quot;).</translation>
    </message>
    <message>
        <source>Version &quot;2008-10-17&quot; is outdated; use &quot;2012-10-17&quot;.</source>
        <translation>A versão &quot;2008-10-17&quot; está desatualizada; use &quot;2012-10-17&quot;.</translation>
    </message>
    <message>
        <source>The policy needs a &quot;Statement&quot; (an object or an array of objects).</source>
        <translation>A política precisa de um &quot;Statement&quot; (um objeto ou um array de objetos).</translation>
    </message>
    <message>
        <source>The policy has no statements.</source>
        <translation>A política não tem instruções.</translation>
    </message>
    <message>
        <source>Statement %1 is not an object.</source>
        <translation>A instrução %1 não é um objeto.</translation>
    </message>
    <message>
        <source>Statement %1</source>
        <translation>Instrução %1</translation>
    </message>
    <message>
        <source>Statement &quot;%1&quot;</source>
        <translation>Instrução &quot;%1&quot;</translation>
    </message>
    <message>
        <source>%1: the Sid is used twice.</source>
        <translation>%1: o Sid é usado duas vezes.</translation>
    </message>
    <message>
        <source>%1: &quot;Effect&quot; must be &quot;Allow&quot; or &quot;Deny&quot;.</source>
        <translation>%1: &quot;Effect&quot; deve ser &quot;Allow&quot; ou &quot;Deny&quot;.</translation>
    </message>
    <message>
        <source>%1: bucket policies need a &quot;Principal&quot;.</source>
        <translation>%1: políticas de bucket precisam de um &quot;Principal&quot;.</translation>
    </message>
    <message>
        <source>%1: &quot;Action&quot; is missing.</source>
        <translation>%1: &quot;Action&quot; está ausente.</translation>
    </message>
    <message>
        <source>%1: &quot;Resource&quot; is missing.</source>
        <translation>%1: &quot;Resource&quot; está ausente.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 action.</source>
        <translation>%1: &quot;%2&quot; não é uma ação do S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not an S3 resource ARN.</source>
        <translation>%1: &quot;%2&quot; não é um ARN de recurso do S3.</translation>
    </message>
    <message>
        <source>%1: &quot;%2&quot; is not in this bucket (%3).</source>
        <translation>%1: &quot;%2&quot; não está neste bucket (%3).</translation>
    </message>
    <message>
        <source>%1 grants access to everyone (Principal &quot;*&quot; without a condition).</source>
        <translation>%1 concede acesso a todos (Principal &quot;*&quot; sem condição).</translation>
    </message>
    <message>
        <source>Public read (anyone can download objects)</source>
        <translation>Leitura pública (qualquer pessoa pode baixar objetos)</translation>
    </message>
    <message>
        <source>Deny requests without TLS</source>
        <translation>Negar solicitações sem TLS</translation>
    </message>
    <message>
        <source>Read-only access for another AWS account</source>
        <translation>Acesso somente leitura para outra conta da AWS</translation>
    </message>
    <message>
        <source>Redirecting all requests cannot be combined with documents or routing rules.</source>
        <translation>Redirecionar todas as solicitações não pode ser combinado com documentos ou regras de roteamento.</translation>
    </message>
    <message>
        <source>The redirect protocol must be http or https.</source>
        <translation>O protocolo de redirecionamento deve ser http ou https.</translation>
    </message>
    <message>
        <source>Website hosting needs an index document (or a redirect of all requests).</source>
        <translation>A hospedagem de site precisa de um documento de índice (ou de um redirecionamento de todas as solicitações).</translation>
    </message>
    <message>
        <source>The index document must not contain &quot;/&quot; (it is a suffix appended to folder requests).</source>
        <translation>O documento de índice não deve conter &quot;/&quot; (é um sufixo anexado às solicitações de pastas).</translation>
    </message>
    <message>
        <source>Each routing rule needs a redirect.</source>
        <translation>Cada regra de roteamento precisa de um redirecionamento.</translation>
    </message>
    <message>
        <source>A routing rule can replace the key or the key prefix, not both.</source>
        <translation>Uma regra de roteamento pode substituir a chave ou o prefixo da chave, não ambos.</translation>
    </message>
    <message>
        <source>Routing rules must be a JSON array.</source>
        <translation>As regras de roteamento devem ser um array JSON.</translation>
    </message>
    <message>
        <source>routing rule %1</source>
        <translation>regra de roteamento %1</translation>
    </message>
    <message>
        <source>The retention mode must be GOVERNANCE or COMPLIANCE.</source>
        <translation>O modo de retenção deve ser GOVERNANCE ou COMPLIANCE.</translation>
    </message>
    <message>
        <source>Default retention needs Object Lock to be enabled on the bucket.</source>
        <translation>A retenção padrão requer que o Bloqueio de objetos esteja ativado no bucket.</translation>
    </message>
    <message>
        <source>Set the default retention period in days or in years (one of them).</source>
        <translation>Defina o período de retenção padrão em dias ou em anos (um deles).</translation>
    </message>
    <message>
        <source>The default retention period can be at most 100 years.</source>
        <translation>O período de retenção padrão pode ser de no máximo 100 anos.</translation>
    </message>
    <message>
        <source>A bucket can have at most 50 tags.</source>
        <translation>Um bucket pode ter no máximo 50 tags.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Errors</name>
    <message>
        <source>Authentication failed: check the access key and secret</source>
        <translation>Falha na autenticação: verifique a chave de acesso e o segredo</translation>
    </message>
    <message>
        <source>The computer&apos;s clock differs too much from the server&apos;s time</source>
        <translation>O relógio do computador difere demais do horário do servidor</translation>
    </message>
    <message>
        <source>The object does not exist</source>
        <translation>O objeto não existe</translation>
    </message>
    <message>
        <source>The bucket does not exist</source>
        <translation>O bucket não existe</translation>
    </message>
    <message>
        <source>The multipart upload does not exist</source>
        <translation>O upload fracionado não existe</translation>
    </message>
    <message>
        <source>The object is archived; request a restore (S3 &gt; Restore from Archive) and wait until it is available</source>
        <translation>O objeto está arquivado; solicite uma restauração (S3 &gt; Restaurar do arquivamento) e aguarde até que esteja disponível</translation>
    </message>
    <message>
        <source>Access denied</source>
        <translation>Acesso negado</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>O bucket já existe</translation>
    </message>
    <message>
        <source>The bucket is not empty</source>
        <translation>O bucket não está vazio</translation>
    </message>
    <message>
        <source>The service is throttling requests; try again later</source>
        <translation>O serviço está limitando as solicitações; tente novamente mais tarde</translation>
    </message>
    <message>
        <source>Network error: could not reach the endpoint</source>
        <translation>Erro de rede: não foi possível acessar o endpoint</translation>
    </message>
    <message>
        <source>The request timed out</source>
        <translation>A solicitação expirou</translation>
    </message>
    <message>
        <source>The bucket is in a different region than the one configured</source>
        <translation>O bucket está em uma região diferente da configurada</translation>
    </message>
    <message>
        <source>The service does not support this operation</source>
        <translation>O serviço não suporta esta operação</translation>
    </message>
    <message>
        <source>Not found</source>
        <translation>Não encontrado</translation>
    </message>
    <message>
        <source>The request was rejected as invalid</source>
        <translation>A solicitação foi rejeitada como inválida</translation>
    </message>
    <message>
        <source>S3 request failed</source>
        <translation>Falha na solicitação ao S3</translation>
    </message>
</context>
<context>
    <name>s3fm::S3ObjectService</name>
    <message>
        <source>Unknown canned ACL: %1</source>
        <translation>ACL predefinida desconhecida: %1</translation>
    </message>
    <message>
        <source>Presigned URLs are for objects only</source>
        <translation>URLs pré-assinadas são apenas para objetos</translation>
    </message>
    <message>
        <source>Could not sign the URL (no usable credentials)</source>
        <translation>Não foi possível assinar a URL (nenhuma credencial utilizável)</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
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
        <translation>Não é um local do S3</translation>
    </message>
    <message>
        <source>No such object or folder: %1</source>
        <translation>Objeto ou pasta inexistente: %1</translation>
    </message>
    <message>
        <source>Creating buckets is not supported here</source>
        <translation>A criação de buckets não é suportada aqui</translation>
    </message>
    <message>
        <source>The bucket already exists</source>
        <translation>O bucket já existe</translation>
    </message>
    <message>
        <source>Already exists: %1</source>
        <translation>Já existe: %1</translation>
    </message>
    <message>
        <source>Deleting buckets is not supported here</source>
        <translation>A exclusão de buckets não é suportada aqui</translation>
    </message>
    <message numerus="yes">
        <source>%n object(s) could not be deleted</source>
        <translation>
            <numerusform>%n objeto não pôde ser excluído</numerusform>
            <numerusform>%n objetos não puderam ser excluídos</numerusform>
        </translation>
    </message>
    <message>
        <source>S3 has no rename; use copy and delete</source>
        <translation>O S3 não tem renomeação; use copiar e excluir</translation>
    </message>
    <message>
        <source>Integrity check failed for %1</source>
        <translation>Falha na verificação de integridade de %1</translation>
    </message>
    <message>
        <source>No SSE-C key is configured for bucket %1</source>
        <translation>Nenhuma chave SSE-C configurada para o bucket %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the source&apos;s %2</source>
        <translation>A ETag %1 difere da ETag %2 da origem</translation>
    </message>
    <message>
        <source>%1 bytes stored, %2 expected</source>
        <translation>%1 bytes armazenados, %2 esperados</translation>
    </message>
    <message>
        <source>Download incomplete: %1 of %2 bytes</source>
        <translation>Download incompleto: %1 de %2 bytes</translation>
    </message>
    <message>
        <source>MD5 %1 differs from the ETag %2</source>
        <translation>O MD5 %1 difere da ETag %2</translation>
    </message>
    <message>
        <source>Cannot replace %1</source>
        <translation>Não é possível substituir %1</translation>
    </message>
    <message>
        <source>Cannot write %1</source>
        <translation>Não é possível gravar %1</translation>
    </message>
    <message>
        <source>No such file: %1</source>
        <translation>Arquivo inexistente: %1</translation>
    </message>
    <message>
        <source>Is a directory: %1</source>
        <translation>É um diretório: %1</translation>
    </message>
    <message>
        <source>Invalid destination: %1</source>
        <translation>Destino inválido: %1</translation>
    </message>
    <message>
        <source>Cannot read %1</source>
        <translation>Não é possível ler %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the local MD5 %2</source>
        <translation>A ETag %1 difere do MD5 local %2</translation>
    </message>
    <message>
        <source>Error reading %1</source>
        <translation>Erro ao ler %1</translation>
    </message>
    <message>
        <source>ETag %1 differs from the expected %2</source>
        <translation>A ETag %1 difere da esperada %2</translation>
    </message>
</context>
<context>
    <name>s3fm::S3RootProvider</name>
    <message>
        <source>Not possible in the connection list</source>
        <translation>Não é possível na lista de conexões</translation>
    </message>
    <message>
        <source>Not an S3 location</source>
        <translation>Não é um local do S3</translation>
    </message>
    <message>
        <source>Unknown connection</source>
        <translation>Conexão desconhecida</translation>
    </message>
</context>
<context>
    <name>s3fm::S3Session</name>
    <message>
        <source>Could not get credentials for AWS profile &quot;%1&quot;. If it uses AWS SSO (IAM Identity Center), the session may have expired: run &quot;aws sso login&quot; and try again.</source>
        <translation>Não foi possível obter credenciais para o perfil da AWS &quot;%1&quot;. Se ele usa o AWS SSO (IAM Identity Center), a sessão pode ter expirado: execute &quot;aws sso login&quot; e tente novamente.</translation>
    </message>
    <message>
        <source>No AWS credentials in the environment: set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY before starting the application.</source>
        <translation>Nenhuma credencial da AWS no ambiente: defina AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY antes de iniciar o aplicativo.</translation>
    </message>
    <message>
        <source>No AWS credentials found (environment, ~/.aws profiles, SSO, web identity or instance metadata). If you use AWS SSO, run &quot;aws sso login&quot; and try again.</source>
        <translation>Nenhuma credencial da AWS encontrada (ambiente, perfis do ~/.aws, SSO, identidade web ou metadados da instância). Se você usa o AWS SSO, execute &quot;aws sso login&quot; e tente novamente.</translation>
    </message>
    <message>
        <source>No secret key is stored for this connection; edit the connection to enter it</source>
        <translation>Nenhuma chave secreta armazenada para esta conexão; edite a conexão para inseri-la</translation>
    </message>
    <message numerus="yes">
        <source>Connected: %n bucket(s) visible</source>
        <translation>
            <numerusform>Conectado: %n bucket visível</numerusform>
            <numerusform>Conectado: %n buckets visíveis</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Connected (listing buckets is not permitted; %n pinned bucket(s) reachable)</source>
        <translation>
            <numerusform>Conectado (listar buckets não é permitido; %n bucket fixado acessível)</numerusform>
            <numerusform>Conectado (listar buckets não é permitido; %n buckets fixados acessíveis)</numerusform>
        </translation>
    </message>
</context>
<context>
    <name>s3fm::S3Types</name>
    <message>
        <source>None</source>
        <translation>Nenhuma</translation>
    </message>
    <message>
        <source>SSE-S3 (AES-256, keys managed by S3)</source>
        <translation>SSE-S3 (AES-256, chaves gerenciadas pelo S3)</translation>
    </message>
    <message>
        <source>SSE-KMS (AWS KMS key)</source>
        <translation>SSE-KMS (chave do AWS KMS)</translation>
    </message>
    <message>
        <source>SSE-C (customer-provided key)</source>
        <translation>SSE-C (chave fornecida pelo cliente)</translation>
    </message>
    <message>
        <source>An object can have at most 10 tags.</source>
        <translation>Um objeto pode ter no máximo 10 tags.</translation>
    </message>
    <message>
        <source>Tag keys must have 1 to 128 characters.</source>
        <translation>As chaves de tag devem ter de 1 a 128 caracteres.</translation>
    </message>
    <message>
        <source>Tag values can have at most 256 characters.</source>
        <translation>Os valores de tag podem ter no máximo 256 caracteres.</translation>
    </message>
    <message>
        <source>Tag keys must not start with &quot;aws:&quot;.</source>
        <translation>As chaves de tag não devem começar com &quot;aws:&quot;.</translation>
    </message>
</context>
<context>
    <name>s3fm::S3VersionService</name>
    <message>
        <source>Not archived</source>
        <translation>Não arquivado</translation>
    </message>
    <message>
        <source>Archived; restore in progress</source>
        <translation>Arquivado; restauração em andamento</translation>
    </message>
    <message>
        <source>Archived; restored copy available until %1</source>
        <translation>Arquivado; cópia restaurada disponível até %1</translation>
    </message>
    <message>
        <source>Archived; restore it to read the data</source>
        <translation>Arquivado; restaure-o para ler os dados</translation>
    </message>
    <message>
        <source>Not a version: %1</source>
        <translation>Não é uma versão: %1</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) could not be deleted</source>
        <translation>
            <numerusform>%n versão não pôde ser excluída</numerusform>
            <numerusform>%n versões não puderam ser excluídas</numerusform>
        </translation>
    </message>
    <message>
        <source>%1 is not deleted</source>
        <translation>%1 não está excluído</translation>
    </message>
    <message>
        <source>No versions of %1</source>
        <translation>Nenhuma versão de %1</translation>
    </message>
    <message>
        <source>Unknown restore tier: %1</source>
        <translation>Nível de restauração desconhecido: %1</translation>
    </message>
    <message>
        <source>Restore for at least one day</source>
        <translation>Restaure por pelo menos um dia</translation>
    </message>
</context>
<context>
    <name>s3fm::Search</name>
    <message>
        <source>under &quot;%1&quot;</source>
        <translation>em &quot;%1&quot;</translation>
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
        <translation>modificado depois de %1</translation>
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
        <translation>Expressão regular inválida na posição %1: %2</translation>
    </message>
    <message>
        <source>Invalid wildcard pattern &quot;%1&quot;: %2</source>
        <translation>Padrão curinga inválido &quot;%1&quot;: %2</translation>
    </message>
</context>
<context>
    <name>s3fm::SearchDialog</name>
    <message>
        <source>Find Files</source>
        <translation>Buscar arquivos</translation>
    </message>
    <message>
        <source>Search in:</source>
        <translation>Buscar em:</translation>
    </message>
    <message>
        <source>e.g. *.log; report — empty: everything</source>
        <translation>por exemplo, *.log; relatorio — vazio: tudo</translation>
    </message>
    <message>
        <source>Wildcards: * any text, ? one character, [abc] one of these. Separate several patterns with &apos;;&apos;. Text without wildcards matches anywhere in the name.</source>
        <translation>Curingas: * qualquer texto, ? um caractere, [abc] um destes. Separe vários padrões com &apos;;&apos;. Texto sem curingas é encontrado em qualquer parte do nome.</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Wildcards</source>
        <translation>Curingas</translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation>Expressão regular</translation>
    </message>
    <message>
        <source>S&amp;yntax:</source>
        <translation>S&amp;intaxe:</translation>
    </message>
    <message>
        <source>&amp;Case sensitive</source>
        <translation>Diferenciar &amp;maiúsculas e minúsculas</translation>
    </message>
    <message>
        <source>Match the full &amp;path below the search folder</source>
        <translation>Comparar o &amp;caminho completo abaixo da pasta de busca</translation>
    </message>
    <message>
        <source>Match &quot;2024/*.csv&quot; against &quot;logs/2024/a.csv&quot; instead of the name only; * then also matches &apos;/&apos;</source>
        <translation>Comparar &quot;2024/*.csv&quot; com &quot;logs/2024/a.csv&quot; em vez de só com o nome; * então também corresponde a &apos;/&apos;</translation>
    </message>
    <message>
        <source>e.g. logs/2024- (optional)</source>
        <translation>por exemplo, logs/2024- (opcional)</translation>
    </message>
    <message>
        <source>Only paths below the search folder starting with this text are searched. On S3 the server filters by this key prefix, which is much faster than listing everything.</source>
        <translation>Só são verificados os caminhos abaixo da pasta de busca que começam com este texto. No S3 o servidor filtra por este prefixo de chave, o que é muito mais rápido do que listar tudo.</translation>
    </message>
    <message>
        <source>Path p&amp;refix:</source>
        <translation>&amp;Prefixo do caminho:</translation>
    </message>
    <message>
        <source>e.g. 10 MB</source>
        <translation>por exemplo, 10 MB</translation>
    </message>
    <message>
        <source>e.g. 1.5 GB</source>
        <translation>por exemplo, 1.5 GB</translation>
    </message>
    <message>
        <source>Size at &amp;least:</source>
        <translation>Tamanho mínim&amp;o:</translation>
    </message>
    <message>
        <source>Size at m&amp;ost:</source>
        <translation>Tamanho má&amp;ximo:</translation>
    </message>
    <message>
        <source>Modified &amp;after:</source>
        <translation>Modificado &amp;depois de:</translation>
    </message>
    <message>
        <source>Modified &amp;before:</source>
        <translation>Modificado &amp;antes de:</translation>
    </message>
    <message>
        <source>Any</source>
        <translation>Qualquer</translation>
    </message>
    <message>
        <source>S&amp;torage class:</source>
        <translation>Classe de arma&amp;zenamento:</translation>
    </message>
    <message>
        <source>Files and folders</source>
        <translation>Arquivos e pastas</translation>
    </message>
    <message>
        <source>Files only</source>
        <translation>Somente arquivos</translation>
    </message>
    <message>
        <source>Folders only</source>
        <translation>Somente pastas</translation>
    </message>
    <message>
        <source>&amp;Include:</source>
        <translation>Inc&amp;luir:</translation>
    </message>
    <message>
        <source>Include &amp;hidden files and folders</source>
        <translation>Incluir arquivos e pastas ocul&amp;tos</translation>
    </message>
    <message>
        <source>No limit</source>
        <translation>Sem limite</translation>
    </message>
    <message>
        <source>Ma&amp;ximum results:</source>
        <translation>Máximo de &amp;resultados:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Buscar</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a size (examples: 1500, 10 KB, 1.5 GB)</source>
        <translation>&quot;%1&quot; não é um tamanho (exemplos: 1500, 10 KB, 1.5 GB)</translation>
    </message>
    <message>
        <source>The minimum size is larger than the maximum size.</source>
        <translation>O tamanho mínimo é maior que o máximo.</translation>
    </message>
    <message>
        <source>The &quot;after&quot; date is later than the &quot;before&quot; date.</source>
        <translation>A data &quot;depois de&quot; é posterior à data &quot;antes de&quot;.</translation>
    </message>
    <message>
        <source>Folders have no size, date or storage class: search for files to use these criteria.</source>
        <translation>Pastas não têm tamanho, data nem classe de armazenamento: busque arquivos para usar esses critérios.</translation>
    </message>
    <message>
        <source>The path prefix cannot leave the search folder.</source>
        <translation>O prefixo do caminho não pode sair da pasta de busca.</translation>
    </message>
</context>
<context>
    <name>s3fm::SecretStore</name>
    <message>
        <source>System keychain error</source>
        <translation>Erro no chaveiro do sistema</translation>
    </message>
    <message>
        <source>No secret stored in the system keychain</source>
        <translation>Nenhum segredo armazenado no chaveiro do sistema</translation>
    </message>
    <message>
        <source>Secret not found</source>
        <translation>Segredo não encontrado</translation>
    </message>
</context>
<context>
    <name>s3fm::SettingsDialog</name>
    <message>
        <source>Settings</source>
        <translation>Configurações</translation>
    </message>
    <message>
        <source>System default (%1)</source>
        <translation>Padrão do sistema (%1)</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Idioma:</translation>
    </message>
    <message>
        <source>&lt;small&gt;A new language is used after restarting S3 File Manager.&lt;/small&gt;</source>
        <translation>&lt;small&gt;O novo idioma será usado após reiniciar o S3 File Manager.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::SseKeyDialog</name>
    <message>
        <source>Customer Encryption Key (SSE-C)</source>
        <translation>Chave de criptografia do cliente (SSE-C)</translation>
    </message>
    <message>
        <source>SSE-C objects are encrypted with a 256-bit key that you keep. S3 does not store it: &lt;b&gt;if the key is lost, the objects cannot be read&lt;/b&gt;. The key is kept in the system keychain.</source>
        <translation>Objetos SSE-C são criptografados com uma chave de 256 bits que você guarda. O S3 não a armazena: &lt;b&gt;se a chave for perdida, os objetos não poderão ser lidos&lt;/b&gt;. A chave é mantida no chaveiro do sistema.</translation>
    </message>
    <message>
        <source>base64 (44 characters) or 64 hex digits</source>
        <translation>base64 (44 caracteres) ou 64 dígitos hexadecimais</translation>
    </message>
    <message>
        <source>Show</source>
        <translation>Mostrar</translation>
    </message>
    <message>
        <source>Generate</source>
        <translation>Gerar</translation>
    </message>
    <message>
        <source>Use for every bucket of this connection without its own key</source>
        <translation>Usar para todos os buckets desta conexão que não tenham chave própria</translation>
    </message>
    <message>
        <source>Remove Key</source>
        <translation>Remover chave</translation>
    </message>
    <message>
        <source>A key is configured for bucket %1 (MD5 %2).</source>
        <translation>Há uma chave configurada para o bucket %1 (MD5 %2).</translation>
    </message>
    <message>
        <source>No key is configured for bucket %1.</source>
        <translation>Nenhuma chave configurada para o bucket %1.</translation>
    </message>
    <message>
        <source>The key must be 32 bytes, as base64 or 64 hex digits.</source>
        <translation>A chave deve ter 32 bytes, em base64 ou 64 dígitos hexadecimais.</translation>
    </message>
    <message>
        <source>Remove the key for bucket %1? Objects encrypted with it cannot be read without it.</source>
        <translation>Remover a chave do bucket %1? Os objetos criptografados com ela não poderão ser lidos sem ela.</translation>
    </message>
</context>
<context>
    <name>s3fm::TargetDialog</name>
    <message>
        <source>&amp;Options</source>
        <translation>&amp;Opções</translation>
    </message>
    <message>
        <source>Ask</source>
        <translation>Perguntar</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Sobrescrever</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Ignorar</translation>
    </message>
    <message>
        <source>Keep both (rename the new file)</source>
        <translation>Manter ambos (renomear o arquivo novo)</translation>
    </message>
    <message>
        <source>Overwrite if newer</source>
        <translation>Sobrescrever se for mais recente</translation>
    </message>
    <message>
        <source>Overwrite if the size differs</source>
        <translation>Sobrescrever se o tamanho for diferente</translation>
    </message>
    <message>
        <source>If a file exists:</source>
        <translation>Se um arquivo existir:</translation>
    </message>
    <message>
        <source>e.g. *.jpg; *.png (empty: everything)</source>
        <translation>por exemplo, *.jpg; *.png (vazio: tudo)</translation>
    </message>
    <message>
        <source>Only files matching:</source>
        <translation>Somente arquivos correspondentes a:</translation>
    </message>
    <message>
        <source>e.g. *.tmp; .git; build/*</source>
        <translation>por exemplo, *.tmp; .git; build/*</translation>
    </message>
    <message>
        <source>Exclude:</source>
        <translation>Exceto:</translation>
    </message>
    <message>
        <source>Verify integrity after transfer (size, MD5/ETag)</source>
        <translation>Verificar a integridade após a transferência (tamanho, MD5/ETag)</translation>
    </message>
    <message>
        <source>Preserve modification times</source>
        <translation>Preservar datas de modificação</translation>
    </message>
    <message>
        <source>Follow symbolic links (otherwise skip them)</source>
        <translation>Seguir links simbólicos (caso contrário, ignorá-los)</translation>
    </message>
    <message>
        <source>Connection default</source>
        <translation>Padrão da conexão</translation>
    </message>
    <message>
        <source>S3 storage class:</source>
        <translation>Classe de armazenamento do S3:</translation>
    </message>
    <message>
        <source>S3 encryption:</source>
        <translation>Criptografia do S3:</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferDock</name>
    <message>
        <source>Transfers</source>
        <translation>Transferências</translation>
    </message>
    <message>
        <source>Pause</source>
        <translation>Pausar</translation>
    </message>
    <message>
        <source>Resume</source>
        <translation>Retomar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Retry Failed</source>
        <translation>Tentar novamente as com falha</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>Mover para cima</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>Mover para baixo</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Remover</translation>
    </message>
    <message>
        <source>Pause All</source>
        <translation>Pausar tudo</translation>
    </message>
    <message>
        <source>Resume All</source>
        <translation>Retomar tudo</translation>
    </message>
    <message>
        <source>Clear Finished</source>
        <translation>Limpar concluídas</translation>
    </message>
    <message>
        <source>Settings…</source>
        <translation>Configurações…</translation>
    </message>
    <message>
        <source>%1 running, %2 queued</source>
        <translation>%1 em execução, %2 na fila</translation>
    </message>
    <message>
        <source>%1 running</source>
        <translation>%1 em execução</translation>
    </message>
    <message>
        <source>Transfer Error</source>
        <translation>Erro de transferência</translation>
    </message>
    <message>
        <source>Request ID: %1</source>
        <translation>ID da solicitação: %1</translation>
    </message>
    <message>
        <source>Cancel Transfer</source>
        <translation>Cancelar transferência</translation>
    </message>
    <message>
        <source>Cancel &quot;%1&quot;? Partially transferred files are discarded.</source>
        <translation>Cancelar &quot;%1&quot;? Os arquivos transferidos parcialmente serão descartados.</translation>
    </message>
    <message>
        <source>Remove Transfer</source>
        <translation>Remover transferência</translation>
    </message>
    <message>
        <source>Remove &quot;%1&quot;? It has not finished; partial data is discarded.</source>
        <translation>Remover &quot;%1&quot;? Ela não foi concluída; os dados parciais serão descartados.</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferJob</name>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n itens</numerusform>
        </translation>
    </message>
    <message>
        <source>Copy %1 to %2</source>
        <translation>Copiar %1 para %2</translation>
    </message>
    <message>
        <source>Move %1 to %2</source>
        <translation>Mover %1 para %2</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Excluir %1</translation>
    </message>
    <message>
        <source>No provider for this location</source>
        <translation>Nenhum provedor para este local</translation>
    </message>
    <message>
        <source>Source and destination are the same</source>
        <translation>A origem e o destino são iguais</translation>
    </message>
    <message>
        <source>Cannot copy a folder into itself</source>
        <translation>Não é possível copiar uma pasta para dentro dela mesma</translation>
    </message>
    <message>
        <source>No free name found</source>
        <translation>Nenhum nome livre encontrado</translation>
    </message>
    <message>
        <source>A folder with this name already exists</source>
        <translation>Já existe uma pasta com este nome</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferModel</name>
    <message>
        <source>Queued</source>
        <translation>Na fila</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>Pausada</translation>
    </message>
    <message numerus="yes">
        <source>Done, %n skipped</source>
        <translation>
            <numerusform>Concluída, %n ignorado</numerusform>
            <numerusform>Concluída, %n ignorados</numerusform>
        </translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Concluída</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Com falha</translation>
    </message>
    <message>
        <source>Cancelled</source>
        <translation>Cancelada</translation>
    </message>
    <message>
        <source>Starting</source>
        <translation>Iniciando</translation>
    </message>
    <message>
        <source>Scanning</source>
        <translation>Verificando</translation>
    </message>
    <message>
        <source>Deleting</source>
        <translation>Excluindo</translation>
    </message>
    <message>
        <source>Moving</source>
        <translation>Movendo</translation>
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
            <numerusform>(%n erro)</numerusform>
            <numerusform>(%n erros)</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n item(s)</source>
        <translation>
            <numerusform>%n item</numerusform>
            <numerusform>%n itens</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%1 / %n file(s)</source>
        <translation>
            <numerusform>%1 / %n arquivo</numerusform>
            <numerusform>%1 / %n arquivos</numerusform>
        </translation>
    </message>
    <message>
        <source>Transfer</source>
        <translation>Transferência</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation>Progresso</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>Velocidade</translation>
    </message>
    <message>
        <source>Time Left</source>
        <translation>Tempo restante</translation>
    </message>
</context>
<context>
    <name>s3fm::TransferSettingsDialog</name>
    <message>
        <source>Transfer Settings</source>
        <translation>Configurações de transferência</translation>
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
        <translation>Retomar transferências interrompidas automaticamente na inicialização</translation>
    </message>
    <message>
        <source>Transfers at the same time:</source>
        <translation>Transferências simultâneas:</translation>
    </message>
    <message>
        <source>Files per transfer in parallel:</source>
        <translation>Arquivos em paralelo por transferência:</translation>
    </message>
    <message>
        <source>Parts per file in parallel:</source>
        <translation>Partes em paralelo por arquivo:</translation>
    </message>
    <message>
        <source>Multipart above:</source>
        <translation>Upload fracionado acima de:</translation>
    </message>
    <message>
        <source>Part size:</source>
        <translation>Tamanho da parte:</translation>
    </message>
    <message>
        <source>Bandwidth limit:</source>
        <translation>Limite de largura de banda:</translation>
    </message>
    <message>
        <source>Retries per file:</source>
        <translation>Novas tentativas por arquivo:</translation>
    </message>
    <message>
        <source>&lt;small&gt;Part sizes grow automatically for very large files (S3 allows at most 10,000 parts). Changes apply to transfers started afterwards; the bandwidth limit applies immediately.&lt;/small&gt;</source>
        <translation>&lt;small&gt;O tamanho das partes aumenta automaticamente para arquivos muito grandes (o S3 permite no máximo 10.000 partes). As alterações se aplicam às transferências iniciadas depois; o limite de largura de banda se aplica imediatamente.&lt;/small&gt;</translation>
    </message>
</context>
<context>
    <name>s3fm::VersionHistoryDialog</name>
    <message>
        <source>Version History — %1</source>
        <translation>Histórico de versões — %1</translation>
    </message>
    <message>
        <source>Modified</source>
        <translation>Modificado</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamanho</translation>
    </message>
    <message>
        <source>Storage class</source>
        <translation>Classe de armazenamento</translation>
    </message>
    <message>
        <source>State</source>
        <translation>Estado</translation>
    </message>
    <message>
        <source>Version ID</source>
        <translation>ID da versão</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Exibir</translation>
    </message>
    <message>
        <source>&amp;Download…</source>
        <translation>&amp;Baixar…</translation>
    </message>
    <message>
        <source>&amp;Restore as Current</source>
        <translation>&amp;Restaurar como atual</translation>
    </message>
    <message>
        <source>Delete &amp;Permanently…</source>
        <translation>Excluir &amp;permanentemente…</translation>
    </message>
    <message>
        <source>&amp;Undelete</source>
        <translation>&amp;Desfazer exclusão</translation>
    </message>
    <message>
        <source>Bypass governance-mode retention when deleting</source>
        <translation>Ignorar a retenção no modo de governança ao excluir</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Atualizar</translation>
    </message>
    <message>
        <source>Loading versions…</source>
        <translation>Carregando versões…</translation>
    </message>
    <message>
        <source>Delete marker (object deleted)</source>
        <translation>Marcador de exclusão (objeto excluído)</translation>
    </message>
    <message>
        <source>Delete marker</source>
        <translation>Marcador de exclusão</translation>
    </message>
    <message>
        <source>Current</source>
        <translation>Atual</translation>
    </message>
    <message>
        <source>Previous</source>
        <translation>Anterior</translation>
    </message>
    <message>
        <source>No versions found.</source>
        <translation>Nenhuma versão encontrada.</translation>
    </message>
    <message numerus="yes">
        <source>%n version(s) and delete marker(s).</source>
        <translation>
            <numerusform>%n versão ou marcador de exclusão.</numerusform>
            <numerusform>%n versões e marcadores de exclusão.</numerusform>
        </translation>
    </message>
    <message>
        <source>Working…</source>
        <translation>Processando…</translation>
    </message>
    <message>
        <source>Download Version</source>
        <translation>Baixar versão</translation>
    </message>
    <message>
        <source>Saved %1</source>
        <translation>%1 salvo</translation>
    </message>
    <message>
        <source>The selected version is the current version again.</source>
        <translation>A versão selecionada voltou a ser a versão atual.</translation>
    </message>
    <message>
        <source>Delete Versions</source>
        <translation>Excluir versões</translation>
    </message>
    <message numerus="yes">
        <source>Permanently delete %n version(s)? This cannot be undone.</source>
        <translation>
            <numerusform>Excluir permanentemente %n versão? Isso não pode ser desfeito.</numerusform>
            <numerusform>Excluir permanentemente %n versões? Isso não pode ser desfeito.</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>Deleted %n version(s).</source>
        <translation>
            <numerusform>%n versão excluída.</numerusform>
            <numerusform>%n versões excluídas.</numerusform>
        </translation>
    </message>
    <message>
        <source>The object is back.</source>
        <translation>O objeto está de volta.</translation>
    </message>
</context>
<context>
    <name>s3fm::ViewerDialog</name>
    <message>
        <source>View — %1</source>
        <translation>Exibir — %1</translation>
    </message>
    <message>
        <source> — showing the first %1</source>
        <translation> — mostrando os primeiros %1</translation>
    </message>
    <message>
        <source> — binary (%1), first %2 shown as hex</source>
        <translation> — binário (%1), primeiros %2 mostrados em hexadecimal</translation>
    </message>
    <message>
        <source>Open in Default Application</source>
        <translation>Abrir no aplicativo padrão</translation>
    </message>
</context>
</TS>
