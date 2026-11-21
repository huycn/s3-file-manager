#pragma once

#include <QList>
#include <QString>

namespace s3fm {

// Summary of a profile from the AWS shared config/credentials files.
struct AwsProfileInfo
{
    QString name;
    QString region;
    QString endpointUrl;
    bool hasStaticKeys = false;
    bool isSso = false;
    bool assumesRole = false;
    bool usesProcess = false;
};

// Reads ~/.aws/config and ~/.aws/credentials (or AWS_CONFIG_FILE /
// AWS_SHARED_CREDENTIALS_FILE). Only metadata is extracted; secrets are never kept.
class AwsConfig
{
public:
    static QString configPath();
    static QString credentialsPath();
    static QList<AwsProfileInfo> profiles();
    static QList<AwsProfileInfo> parse(const QString& configText, const QString& credentialsText);
};

} // namespace s3fm
