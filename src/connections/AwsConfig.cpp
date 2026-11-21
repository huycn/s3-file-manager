#include "connections/AwsConfig.h"

#include <QDir>
#include <QFile>
#include <QMap>

namespace s3fm {

namespace {

using Sections = QMap<QString, QMap<QString, QString>>;

// Minimal INI reader for the AWS formats. Indented lines (nested settings such as
// "s3 =\n  addressing_style = path") are skipped.
Sections parseIni(const QString& text, bool isConfigFile)
{
    Sections out;
    QString current;
    bool skipSection = false;
    for (const QString& raw : text.split(u'\n')) {
        if (raw.isEmpty() || raw.front().isSpace())
            continue;
        const QString line = raw.trimmed();
        if (line.isEmpty() || line.startsWith(u'#') || line.startsWith(u';'))
            continue;
        if (line.startsWith(u'[') && line.endsWith(u']')) {
            QString name = line.mid(1, line.size() - 2).trimmed();
            skipSection = false;
            if (isConfigFile) {
                if (name.startsWith(QStringLiteral("profile ")))
                    name = name.mid(8).trimmed();
                else if (name != u"default")
                    skipSection = true; // [sso-session x], [services x], …
            }
            current = name;
            if (!skipSection)
                out[current];
            continue;
        }
        if (skipSection || current.isEmpty())
            continue;
        const qsizetype eq = line.indexOf(u'=');
        if (eq <= 0)
            continue;
        out[current].insert(line.left(eq).trimmed().toLower(), line.mid(eq + 1).trimmed());
    }
    return out;
}

QString readFile(const QString& path)
{
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly | QIODevice::Text))
        return {};
    return QString::fromUtf8(f.readAll());
}

} // namespace

QString AwsConfig::configPath()
{
    const QString env = qEnvironmentVariable("AWS_CONFIG_FILE");
    return env.isEmpty() ? QDir::homePath() + QStringLiteral("/.aws/config") : env;
}

QString AwsConfig::credentialsPath()
{
    const QString env = qEnvironmentVariable("AWS_SHARED_CREDENTIALS_FILE");
    return env.isEmpty() ? QDir::homePath() + QStringLiteral("/.aws/credentials") : env;
}

QList<AwsProfileInfo> AwsConfig::profiles()
{
    return parse(readFile(configPath()), readFile(credentialsPath()));
}

QList<AwsProfileInfo> AwsConfig::parse(const QString& configText, const QString& credentialsText)
{
    const Sections config = parseIni(configText, true);
    const Sections creds = parseIni(credentialsText, false);
    QMap<QString, AwsProfileInfo> merged;
    auto apply = [&merged](const Sections& sections) {
        for (auto it = sections.cbegin(); it != sections.cend(); ++it) {
            AwsProfileInfo& p = merged[it.key()];
            p.name = it.key();
            const auto& kv = it.value();
            if (kv.contains(QStringLiteral("region")))
                p.region = kv.value(QStringLiteral("region"));
            if (kv.contains(QStringLiteral("endpoint_url")))
                p.endpointUrl = kv.value(QStringLiteral("endpoint_url"));
            p.hasStaticKeys = p.hasStaticKeys || kv.contains(QStringLiteral("aws_access_key_id"));
            p.isSso = p.isSso || kv.contains(QStringLiteral("sso_session")) ||
                      kv.contains(QStringLiteral("sso_start_url"));
            p.assumesRole = p.assumesRole || kv.contains(QStringLiteral("role_arn"));
            p.usesProcess = p.usesProcess || kv.contains(QStringLiteral("credential_process"));
        }
    };
    apply(config);
    apply(creds);
    QList<AwsProfileInfo> out = merged.values();
    // "default" first, then alphabetical (QMap order).
    std::stable_partition(out.begin(), out.end(),
                          [](const AwsProfileInfo& p) { return p.name == u"default"; });
    return out;
}

} // namespace s3fm
