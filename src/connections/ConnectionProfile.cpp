#include "connections/ConnectionProfile.h"

#include <QCoreApplication>
#include <QRegularExpression>
#include <QSettings>
#include <QUrl>

namespace s3fm {

namespace {

QString tr(const char* text)
{
    return QCoreApplication::translate("s3fm::ConnectionProfile", text);
}

template <class E> QString enumKey(E value, std::initializer_list<std::pair<E, const char*>> table)
{
    for (const auto& [v, k] : table) {
        if (v == value)
            return QString::fromLatin1(k);
    }
    return {};
}

template <class E>
E enumValue(const QString& key, E fallback, std::initializer_list<std::pair<E, const char*>> table)
{
    for (const auto& [v, k] : table) {
        if (key == QLatin1String(k))
            return v;
    }
    return fallback;
}

using P = ConnectionProfile::Preset;
using A = ConnectionProfile::Addressing;
using C = ConnectionProfile::CredentialSource;
using M = ConnectionProfile::ChecksumMode;

const std::initializer_list<std::pair<P, const char*>> kPresets = {
    {P::AmazonS3, "aws"},  {P::MinIO, "minio"},    {P::CloudflareR2, "r2"},
    {P::Wasabi, "wasabi"}, {P::BackblazeB2, "b2"}, {P::DigitalOceanSpaces, "spaces"},
    {P::Custom, "custom"}};
const std::initializer_list<std::pair<A, const char*>> kAddressing = {
    {A::Auto, "auto"}, {A::VirtualHosted, "virtual"}, {A::Path, "path"}};
const std::initializer_list<std::pair<C, const char*>> kCredentials = {{C::StaticKeys, "keys"},
                                                                       {C::AwsProfile, "profile"},
                                                                       {C::Environment, "env"},
                                                                       {C::DefaultChain, "default"},
                                                                       {C::Anonymous, "anonymous"}};
const std::initializer_list<std::pair<M, const char*>> kChecksum = {{M::WhenSupported, "when_supported"},
                                                                    {M::WhenRequired, "when_required"}};

} // namespace

QString ConnectionProfile::presetName(Preset preset)
{
    switch (preset) {
    case Preset::AmazonS3:
        return tr("Amazon S3");
    case Preset::MinIO:
        return tr("MinIO");
    case Preset::CloudflareR2:
        return tr("Cloudflare R2");
    case Preset::Wasabi:
        return tr("Wasabi");
    case Preset::BackblazeB2:
        return tr("Backblaze B2");
    case Preset::DigitalOceanSpaces:
        return tr("DigitalOcean Spaces");
    case Preset::Custom:
        return tr("Other S3-compatible");
    }
    return {};
}

QList<ConnectionProfile::Preset> ConnectionProfile::allPresets()
{
    return {Preset::AmazonS3, Preset::MinIO,       Preset::CloudflareR2,
            Preset::Wasabi,   Preset::BackblazeB2, Preset::DigitalOceanSpaces,
            Preset::Custom};
}

ConnectionProfile ConnectionProfile::fromPreset(Preset preset)
{
    ConnectionProfile p;
    p.preset = preset;
    switch (preset) {
    case Preset::AmazonS3:
        p.region = QStringLiteral("us-east-1");
        p.addressing = Addressing::Auto;
        break;
    case Preset::MinIO:
        p.endpoint = QStringLiteral("http://localhost:9000");
        p.region = QStringLiteral("us-east-1");
        p.addressing = Addressing::Path;
        break;
    case Preset::CloudflareR2:
        p.endpoint = QStringLiteral("https://<ACCOUNT_ID>.r2.cloudflarestorage.com");
        p.region = QStringLiteral("auto");
        p.addressing = Addressing::Path;
        p.checksumMode = ChecksumMode::WhenRequired;
        break;
    case Preset::Wasabi:
        p.endpoint = QStringLiteral("https://s3.us-east-1.wasabisys.com");
        p.region = QStringLiteral("us-east-1");
        p.addressing = Addressing::VirtualHosted;
        p.checksumMode = ChecksumMode::WhenRequired;
        break;
    case Preset::BackblazeB2:
        p.endpoint = QStringLiteral("https://s3.us-west-004.backblazeb2.com");
        p.region = QStringLiteral("us-west-004");
        p.addressing = Addressing::VirtualHosted;
        p.checksumMode = ChecksumMode::WhenRequired;
        break;
    case Preset::DigitalOceanSpaces:
        p.endpoint = QStringLiteral("https://nyc3.digitaloceanspaces.com");
        p.region = QStringLiteral("nyc3");
        p.addressing = Addressing::VirtualHosted;
        p.checksumMode = ChecksumMode::WhenRequired;
        break;
    case Preset::Custom:
        p.region = QStringLiteral("us-east-1");
        p.addressing = Addressing::Path;
        p.checksumMode = ChecksumMode::WhenRequired;
        break;
    }
    return p;
}

bool ConnectionProfile::isValidId(const QString& id)
{
    static const QRegularExpression re(QStringLiteral("^[a-z0-9][a-z0-9._-]{0,62}$"));
    return re.match(id).hasMatch();
}

QString ConnectionProfile::makeId(const QString& name, const QStringList& taken)
{
    QString base;
    bool lastDash = false;
    const auto folded = name.toLower().normalized(QString::NormalizationForm_KD);
    for (QChar c : folded) {
        if ((c >= u'a' && c <= u'z') || (c >= u'0' && c <= u'9')) {
            base += c;
            lastDash = false;
        } else if (c.isSpace() || c == u'-' || c == u'_' || c == u'.') {
            if (!base.isEmpty() && !lastDash) {
                base += u'-';
                lastDash = true;
            }
        }
    }
    while (base.endsWith(u'-'))
        base.chop(1);
    base = base.left(48);
    if (base.isEmpty())
        base = QStringLiteral("connection");
    QString id = base;
    for (int n = 2; taken.contains(id); ++n)
        id = QStringLiteral("%1-%2").arg(base).arg(n);
    return id;
}

bool ConnectionProfile::requesterPays(const QString& bucket) const
{
    return requesterPaysBuckets.contains(QStringLiteral("*")) || requesterPaysBuckets.contains(bucket);
}

bool ConnectionProfile::usesPathStyle() const
{
    switch (addressing) {
    case Addressing::Path:
        return true;
    case Addressing::VirtualHosted:
        return false;
    case Addressing::Auto:
        return !endpoint.isEmpty() && preset != Preset::AmazonS3;
    }
    return false;
}

QString ConnectionProfile::validate() const
{
    if (name.trimmed().isEmpty())
        return tr("Enter a name for the connection.");
    if (!isValidId(id))
        return tr("The ID may only contain lowercase letters, digits, '.', '-' and '_'.");
    if (!endpoint.isEmpty()) {
        const QUrl url(endpoint, QUrl::StrictMode);
        if (!url.isValid() || (url.scheme() != u"http" && url.scheme() != u"https") || url.host().isEmpty())
            return tr("The endpoint must be an http:// or https:// URL.");
        if (endpoint.contains(u'<'))
            return tr("Replace the placeholder in the endpoint URL.");
    } else if (preset != Preset::AmazonS3) {
        return tr("Enter the endpoint URL of the S3-compatible service.");
    }
    if (region.trimmed().isEmpty())
        return tr("Enter a region (for example us-east-1).");
    if (credentialSource == CredentialSource::StaticKeys && accessKeyId.trimmed().isEmpty())
        return tr("Enter the access key ID.");
    if (credentialSource == CredentialSource::AwsProfile && awsProfile.trimmed().isEmpty())
        return tr("Choose an AWS profile.");
    return {};
}

void ConnectionProfile::save(QSettings& s) const
{
    s.setValue(QStringLiteral("name"), name);
    s.setValue(QStringLiteral("preset"), enumKey(preset, kPresets));
    s.setValue(QStringLiteral("endpoint"), endpoint);
    s.setValue(QStringLiteral("region"), region);
    s.setValue(QStringLiteral("addressing"), enumKey(addressing, kAddressing));
    s.setValue(QStringLiteral("credentials"), enumKey(credentialSource, kCredentials));
    s.setValue(QStringLiteral("accessKeyId"), accessKeyId);
    s.setValue(QStringLiteral("awsProfile"), awsProfile);
    s.setValue(QStringLiteral("verifyTls"), verifyTls);
    s.setValue(QStringLiteral("caBundle"), caBundlePath);
    s.setValue(QStringLiteral("checksums"), enumKey(checksumMode, kChecksum));
    s.setValue(QStringLiteral("defaultStorageClass"), defaultStorageClass);
    s.setValue(QStringLiteral("pinnedBuckets"), pinnedBuckets);
    s.setValue(QStringLiteral("requesterPaysBuckets"), requesterPaysBuckets);
    s.setValue(QStringLiteral("connectTimeoutMs"), connectTimeoutMs);
    s.setValue(QStringLiteral("requestTimeoutMs"), requestTimeoutMs);
}

ConnectionProfile ConnectionProfile::load(QSettings& s)
{
    ConnectionProfile p;
    p.name = s.value(QStringLiteral("name")).toString();
    p.preset = enumValue(s.value(QStringLiteral("preset")).toString(), Preset::Custom, kPresets);
    p.endpoint = s.value(QStringLiteral("endpoint")).toString();
    p.region = s.value(QStringLiteral("region"), QStringLiteral("us-east-1")).toString();
    p.addressing = enumValue(s.value(QStringLiteral("addressing")).toString(), Addressing::Auto, kAddressing);
    p.credentialSource = enumValue(s.value(QStringLiteral("credentials")).toString(),
                                   CredentialSource::StaticKeys, kCredentials);
    p.accessKeyId = s.value(QStringLiteral("accessKeyId")).toString();
    p.awsProfile = s.value(QStringLiteral("awsProfile")).toString();
    p.verifyTls = s.value(QStringLiteral("verifyTls"), true).toBool();
    p.caBundlePath = s.value(QStringLiteral("caBundle")).toString();
    p.checksumMode =
        enumValue(s.value(QStringLiteral("checksums")).toString(), ChecksumMode::WhenSupported, kChecksum);
    p.defaultStorageClass = s.value(QStringLiteral("defaultStorageClass")).toString();
    p.pinnedBuckets = s.value(QStringLiteral("pinnedBuckets")).toStringList();
    p.requesterPaysBuckets = s.value(QStringLiteral("requesterPaysBuckets")).toStringList();
    p.connectTimeoutMs = s.value(QStringLiteral("connectTimeoutMs"), 10000).toInt();
    p.requestTimeoutMs = s.value(QStringLiteral("requestTimeoutMs"), 60000).toInt();
    return p;
}

} // namespace s3fm
