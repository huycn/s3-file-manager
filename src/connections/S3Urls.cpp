#include "connections/S3Urls.h"

#include <QRegularExpression>
#include <QUrl>

namespace s3fm::s3urls {

namespace {
QString encodeKey(const QString& key)
{
    return QString::fromUtf8(QUrl::toPercentEncoding(key, "/~"));
}
} // namespace

QString s3Uri(const Location& location)
{
    if (!location.isS3() || location.bucket().isEmpty())
        return {};
    return QStringLiteral("s3://%1/%2").arg(location.bucket(), location.key());
}

QString arn(const Location& location, const ConnectionProfile& profile)
{
    if (!location.isS3() || location.bucket().isEmpty() || !profile.endpoint.isEmpty())
        return {};
    const QString partition = profile.region.startsWith(QStringLiteral("cn-")) ? QStringLiteral("aws-cn")
                              : profile.region.startsWith(QStringLiteral("us-gov-"))
                                  ? QStringLiteral("aws-us-gov")
                                  : QStringLiteral("aws");
    QString out = QStringLiteral("arn:%1:s3:::%2").arg(partition, location.bucket());
    if (!location.key().isEmpty())
        out += u'/' + location.key();
    return out;
}

bool isDnsCompatibleBucket(const QString& bucket)
{
    static const QRegularExpression re(QStringLiteral("^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$"));
    return re.match(bucket).hasMatch();
}

QString objectUrl(const Location& location, const ConnectionProfile& profile, const QString& bucketRegion)
{
    if (!location.isS3() || location.bucket().isEmpty())
        return {};
    const QString& bucket = location.bucket();
    const QString key = encodeKey(location.key());
    if (profile.endpoint.isEmpty()) {
        const QString region = bucketRegion.isEmpty() ? profile.region : bucketRegion;
        const QString suffix = region.startsWith(QStringLiteral("cn-")) ? QStringLiteral(".amazonaws.com.cn")
                                                                        : QStringLiteral(".amazonaws.com");
        if (isDnsCompatibleBucket(bucket) && profile.addressing != ConnectionProfile::Addressing::Path)
            return QStringLiteral("https://%1.s3.%2%3/%4").arg(bucket, region, suffix, key);
        return QStringLiteral("https://s3.%1%2/%3/%4").arg(region, suffix, bucket, key);
    }
    QUrl endpoint(profile.endpoint);
    QString base = profile.endpoint;
    while (base.endsWith(u'/'))
        base.chop(1);
    if (!profile.usesPathStyle() && isDnsCompatibleBucket(bucket)) {
        endpoint.setHost(bucket + u'.' + endpoint.host());
        QString host = endpoint.toString(QUrl::RemovePath | QUrl::RemoveQuery | QUrl::StripTrailingSlash);
        return host + u'/' + key;
    }
    return base + u'/' + bucket + u'/' + key;
}

} // namespace s3fm::s3urls
