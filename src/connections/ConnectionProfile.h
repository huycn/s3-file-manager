#pragma once

#include <QMetaType>
#include <QString>
#include <QStringList>

class QSettings;

namespace s3fm {

// Non-secret description of an S3 endpoint and how to authenticate to it.
// Secrets (secret access key, session token) live in the SecretStore.
struct ConnectionProfile
{
    enum class Preset
    {
        AmazonS3,
        MinIO,
        CloudflareR2,
        Wasabi,
        BackblazeB2,
        DigitalOceanSpaces,
        Custom
    };
    enum class Addressing
    {
        Auto,
        VirtualHosted,
        Path
    };
    enum class CredentialSource
    {
        StaticKeys,   // access key id + secret (+ optional session token) from the keychain
        AwsProfile,   // named profile from ~/.aws/config|credentials (SSO, assume-role, process…)
        Environment,  // AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY / AWS_SESSION_TOKEN
        DefaultChain, // the SDK's default provider chain
        Anonymous,    // unsigned requests (public buckets)
    };
    enum class ChecksumMode
    {
        WhenSupported,
        WhenRequired
    };

    QString id;   // stable identifier used in s3:// URIs; immutable after creation
    QString name; // display name
    Preset preset = Preset::AmazonS3;
    QString endpoint; // empty = AWS default endpoints
    QString region = QStringLiteral("us-east-1");
    Addressing addressing = Addressing::Auto;
    CredentialSource credentialSource = CredentialSource::StaticKeys;
    QString accessKeyId;
    QString awsProfile;
    bool verifyTls = true;
    QString caBundlePath;
    ChecksumMode checksumMode = ChecksumMode::WhenSupported;
    QString defaultStorageClass;
    // Buckets listed even when ListBuckets is not permitted (bucket-scoped credentials).
    QStringList pinnedBuckets;
    // Buckets whose requests are billed to the requester ("*" = every bucket).
    QStringList requesterPaysBuckets;
    int connectTimeoutMs = 10000;
    int requestTimeoutMs = 60000;

    static QString presetName(Preset preset);
    static QList<Preset> allPresets();
    // Returns a profile pre-filled with the preset's endpoint/region/addressing defaults.
    static ConnectionProfile fromPreset(Preset preset);

    // Slug from `name` ("My MinIO" -> "my-minio"), made unique against `taken`.
    static QString makeId(const QString& name, const QStringList& taken);
    static bool isValidId(const QString& id);

    bool usesPathStyle() const;
    bool requesterPays(const QString& bucket) const;
    // Validation for the editor. Returns an empty string when valid.
    QString validate() const;

    void save(QSettings& settings) const; // into the current group
    static ConnectionProfile load(QSettings& settings);

    bool operator==(const ConnectionProfile&) const = default;
};

struct ConnectionSecret
{
    QString secretAccessKey;
    QString sessionToken;
    bool isEmpty() const { return secretAccessKey.isEmpty() && sessionToken.isEmpty(); }
};

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::ConnectionProfile)
