#include "providers/s3/S3BucketConvert.h"

#include "providers/s3/AwsConvert.h"

#include <QTimeZone>

#include <aws/s3/model/AbortIncompleteMultipartUpload.h>
#include <aws/s3/model/Condition.h>
#include <aws/s3/model/ErrorDocument.h>
#include <aws/s3/model/IndexDocument.h>
#include <aws/s3/model/LifecycleExpiration.h>
#include <aws/s3/model/LifecycleRuleAndOperator.h>
#include <aws/s3/model/LifecycleRuleFilter.h>
#include <aws/s3/model/NoncurrentVersionExpiration.h>
#include <aws/s3/model/NoncurrentVersionTransition.h>
#include <aws/s3/model/Redirect.h>
#include <aws/s3/model/RedirectAllRequestsTo.h>
#include <aws/s3/model/Tag.h>
#include <aws/s3/model/Transition.h>

namespace s3fm::aws {

namespace Model = Aws::S3::Model;

namespace {

Aws::Utils::DateTime toAwsDate(const QDate& date)
{
    return Aws::Utils::DateTime(int64_t(QDateTime(date, QTime(0, 0), QTimeZone::UTC).toMSecsSinceEpoch()));
}

QDate fromAwsDate(const Aws::Utils::DateTime& dt)
{
    const QDateTime t = fromAws(dt);
    return t.isValid() ? t.toUTC().date() : QDate();
}

Model::TransitionStorageClass transitionClass(const QString& name)
{
    return Model::TransitionStorageClassMapper::GetTransitionStorageClassForName(toAws(name));
}

QString transitionClassName(Model::TransitionStorageClass c)
{
    if (c == Model::TransitionStorageClass::NOT_SET)
        return {};
    return fromAws(Model::TransitionStorageClassMapper::GetNameForTransitionStorageClass(c));
}

QStringList fromAwsList(const Aws::Vector<Aws::String>& list)
{
    QStringList out;
    for (const auto& s : list)
        out.push_back(fromAws(s));
    return out;
}

Aws::Vector<Aws::String> toAwsList(const QStringList& list)
{
    Aws::Vector<Aws::String> out;
    for (const QString& s : list)
        out.push_back(toAws(s));
    return out;
}

} // namespace

Model::LifecycleRule toSdk(const LifecycleRule& rule)
{
    Model::LifecycleRule r;
    if (!rule.id.isEmpty())
        r.SetID(toAws(rule.id));
    r.SetStatus(rule.enabled ? Model::ExpirationStatus::Enabled : Model::ExpirationStatus::Disabled);

    // A single condition goes directly in the filter; several need <And>.
    const int conditions = (rule.prefix.isEmpty() ? 0 : 1) + int(rule.tags.size()) +
                           (rule.sizeGreaterThan >= 0) + (rule.sizeLessThan >= 0);
    Model::LifecycleRuleFilter filter;
    if (conditions > 1) {
        Model::LifecycleRuleAndOperator andOp;
        if (!rule.prefix.isEmpty())
            andOp.SetPrefix(toAws(rule.prefix));
        for (auto it = rule.tags.cbegin(); it != rule.tags.cend(); ++it)
            andOp.AddTags(Model::Tag().WithKey(toAws(it.key())).WithValue(toAws(it.value())));
        if (rule.sizeGreaterThan >= 0)
            andOp.SetObjectSizeGreaterThan(rule.sizeGreaterThan);
        if (rule.sizeLessThan >= 0)
            andOp.SetObjectSizeLessThan(rule.sizeLessThan);
        filter.SetAnd(andOp);
    } else if (rule.tags.size() == 1) {
        filter.SetTag(Model::Tag().WithKey(toAws(rule.tags.firstKey())).WithValue(toAws(rule.tags.first())));
    } else if (rule.sizeGreaterThan >= 0) {
        filter.SetObjectSizeGreaterThan(rule.sizeGreaterThan);
    } else if (rule.sizeLessThan >= 0) {
        filter.SetObjectSizeLessThan(rule.sizeLessThan);
    } else {
        filter.SetPrefix(toAws(rule.prefix)); // empty prefix: the whole bucket
    }
    r.SetFilter(filter);

    for (const LifecycleTransition& t : rule.transitions) {
        Model::Transition st;
        if (t.days >= 0)
            st.SetDays(t.days);
        else
            st.SetDate(toAwsDate(t.date));
        st.SetStorageClass(transitionClass(t.storageClass));
        r.AddTransitions(st);
    }
    if (rule.expirationDays > 0 || rule.expirationDate.isValid() || rule.expiredDeleteMarker) {
        Model::LifecycleExpiration e;
        if (rule.expirationDays > 0)
            e.SetDays(rule.expirationDays);
        if (rule.expirationDate.isValid())
            e.SetDate(toAwsDate(rule.expirationDate));
        if (rule.expiredDeleteMarker)
            e.SetExpiredObjectDeleteMarker(true);
        r.SetExpiration(e);
    }
    for (const NoncurrentTransition& t : rule.noncurrentTransitions) {
        Model::NoncurrentVersionTransition nt;
        nt.SetNoncurrentDays(t.days);
        nt.SetStorageClass(transitionClass(t.storageClass));
        if (t.newerVersions > 0)
            nt.SetNewerNoncurrentVersions(t.newerVersions);
        r.AddNoncurrentVersionTransitions(nt);
    }
    if (rule.noncurrentExpirationDays > 0) {
        Model::NoncurrentVersionExpiration ne;
        ne.SetNoncurrentDays(rule.noncurrentExpirationDays);
        if (rule.newerNoncurrentVersions > 0)
            ne.SetNewerNoncurrentVersions(rule.newerNoncurrentVersions);
        r.SetNoncurrentVersionExpiration(ne);
    }
    if (rule.abortUploadDays > 0)
        r.SetAbortIncompleteMultipartUpload(
            Model::AbortIncompleteMultipartUpload().WithDaysAfterInitiation(rule.abortUploadDays));
    return r;
}

LifecycleRule fromSdk(const Model::LifecycleRule& r)
{
    LifecycleRule rule;
    rule.id = fromAws(r.GetID());
    rule.enabled = r.GetStatus() == Model::ExpirationStatus::Enabled;
    if (r.FilterHasBeenSet()) {
        const Model::LifecycleRuleFilter& f = r.GetFilter();
        if (f.AndHasBeenSet()) {
            const Model::LifecycleRuleAndOperator& a = f.GetAnd();
            rule.prefix = fromAws(a.GetPrefix());
            for (const Model::Tag& t : a.GetTags())
                rule.tags.insert(fromAws(t.GetKey()), fromAws(t.GetValue()));
            if (a.ObjectSizeGreaterThanHasBeenSet())
                rule.sizeGreaterThan = a.GetObjectSizeGreaterThan();
            if (a.ObjectSizeLessThanHasBeenSet())
                rule.sizeLessThan = a.GetObjectSizeLessThan();
        } else {
            rule.prefix = fromAws(f.GetPrefix());
            if (f.TagHasBeenSet())
                rule.tags.insert(fromAws(f.GetTag().GetKey()), fromAws(f.GetTag().GetValue()));
            if (f.ObjectSizeGreaterThanHasBeenSet())
                rule.sizeGreaterThan = f.GetObjectSizeGreaterThan();
            if (f.ObjectSizeLessThanHasBeenSet())
                rule.sizeLessThan = f.GetObjectSizeLessThan();
        }
    }
    for (const Model::Transition& t : r.GetTransitions()) {
        LifecycleTransition lt;
        if (t.DaysHasBeenSet())
            lt.days = t.GetDays();
        else
            lt.date = fromAwsDate(t.GetDate());
        lt.storageClass = transitionClassName(t.GetStorageClass());
        rule.transitions.push_back(lt);
    }
    if (r.ExpirationHasBeenSet()) {
        const Model::LifecycleExpiration& e = r.GetExpiration();
        if (e.DaysHasBeenSet() && e.GetDays() > 0)
            rule.expirationDays = e.GetDays();
        if (e.DateHasBeenSet())
            rule.expirationDate = fromAwsDate(e.GetDate());
        rule.expiredDeleteMarker =
            e.ExpiredObjectDeleteMarkerHasBeenSet() && e.GetExpiredObjectDeleteMarker();
    }
    for (const Model::NoncurrentVersionTransition& t : r.GetNoncurrentVersionTransitions()) {
        NoncurrentTransition nt;
        nt.days = t.GetNoncurrentDays();
        nt.storageClass = transitionClassName(t.GetStorageClass());
        if (t.NewerNoncurrentVersionsHasBeenSet())
            nt.newerVersions = t.GetNewerNoncurrentVersions();
        rule.noncurrentTransitions.push_back(nt);
    }
    if (r.NoncurrentVersionExpirationHasBeenSet()) {
        const Model::NoncurrentVersionExpiration& ne = r.GetNoncurrentVersionExpiration();
        if (ne.NoncurrentDaysHasBeenSet())
            rule.noncurrentExpirationDays = ne.GetNoncurrentDays();
        if (ne.NewerNoncurrentVersionsHasBeenSet())
            rule.newerNoncurrentVersions = ne.GetNewerNoncurrentVersions();
    }
    if (r.AbortIncompleteMultipartUploadHasBeenSet())
        rule.abortUploadDays = r.GetAbortIncompleteMultipartUpload().GetDaysAfterInitiation();
    return rule;
}

Model::CORSRule toSdk(const CorsRule& rule)
{
    Model::CORSRule r;
    if (!rule.id.isEmpty())
        r.SetID(toAws(rule.id));
    r.SetAllowedOrigins(toAwsList(rule.allowedOrigins));
    r.SetAllowedMethods(toAwsList(rule.allowedMethods));
    if (!rule.allowedHeaders.isEmpty())
        r.SetAllowedHeaders(toAwsList(rule.allowedHeaders));
    if (!rule.exposeHeaders.isEmpty())
        r.SetExposeHeaders(toAwsList(rule.exposeHeaders));
    if (rule.maxAgeSeconds >= 0)
        r.SetMaxAgeSeconds(rule.maxAgeSeconds);
    return r;
}

CorsRule fromSdk(const Model::CORSRule& r)
{
    CorsRule rule;
    rule.id = fromAws(r.GetID());
    rule.allowedOrigins = fromAwsList(r.GetAllowedOrigins());
    rule.allowedMethods = fromAwsList(r.GetAllowedMethods());
    rule.allowedHeaders = fromAwsList(r.GetAllowedHeaders());
    rule.exposeHeaders = fromAwsList(r.GetExposeHeaders());
    if (r.MaxAgeSecondsHasBeenSet())
        rule.maxAgeSeconds = r.GetMaxAgeSeconds();
    return rule;
}

Model::RoutingRule toSdk(const RoutingRule& rule)
{
    Model::RoutingRule r;
    if (!rule.keyPrefixEquals.isEmpty() || !rule.errorCodeEquals.isEmpty()) {
        Model::Condition c;
        if (!rule.keyPrefixEquals.isEmpty())
            c.SetKeyPrefixEquals(toAws(rule.keyPrefixEquals));
        if (!rule.errorCodeEquals.isEmpty())
            c.SetHttpErrorCodeReturnedEquals(toAws(rule.errorCodeEquals));
        r.SetCondition(c);
    }
    Model::Redirect redirect;
    if (!rule.hostName.isEmpty())
        redirect.SetHostName(toAws(rule.hostName));
    if (!rule.protocol.isEmpty())
        redirect.SetProtocol(Model::ProtocolMapper::GetProtocolForName(toAws(rule.protocol)));
    if (!rule.httpRedirectCode.isEmpty())
        redirect.SetHttpRedirectCode(toAws(rule.httpRedirectCode));
    if (!rule.replaceKeyPrefixWith.isEmpty())
        redirect.SetReplaceKeyPrefixWith(toAws(rule.replaceKeyPrefixWith));
    if (!rule.replaceKeyWith.isEmpty())
        redirect.SetReplaceKeyWith(toAws(rule.replaceKeyWith));
    r.SetRedirect(redirect);
    return r;
}

RoutingRule fromSdk(const Model::RoutingRule& r)
{
    RoutingRule rule;
    rule.keyPrefixEquals = fromAws(r.GetCondition().GetKeyPrefixEquals());
    rule.errorCodeEquals = fromAws(r.GetCondition().GetHttpErrorCodeReturnedEquals());
    const Model::Redirect& redirect = r.GetRedirect();
    rule.hostName = fromAws(redirect.GetHostName());
    if (redirect.GetProtocol() != Model::Protocol::NOT_SET)
        rule.protocol = fromAws(Model::ProtocolMapper::GetNameForProtocol(redirect.GetProtocol()));
    rule.httpRedirectCode = fromAws(redirect.GetHttpRedirectCode());
    rule.replaceKeyPrefixWith = fromAws(redirect.GetReplaceKeyPrefixWith());
    rule.replaceKeyWith = fromAws(redirect.GetReplaceKeyWith());
    return rule;
}

Model::WebsiteConfiguration toSdk(const WebsiteConfig& config)
{
    Model::WebsiteConfiguration w;
    if (!config.redirectHost.isEmpty()) {
        Model::RedirectAllRequestsTo all;
        all.SetHostName(toAws(config.redirectHost));
        if (!config.redirectProtocol.isEmpty())
            all.SetProtocol(Model::ProtocolMapper::GetProtocolForName(toAws(config.redirectProtocol)));
        w.SetRedirectAllRequestsTo(all);
        return w;
    }
    w.SetIndexDocument(Model::IndexDocument().WithSuffix(toAws(config.indexDocument)));
    if (!config.errorDocument.isEmpty())
        w.SetErrorDocument(Model::ErrorDocument().WithKey(toAws(config.errorDocument)));
    for (const RoutingRule& r : config.routingRules)
        w.AddRoutingRules(toSdk(r));
    return w;
}

bool isNotConfigured(const Aws::Client::AWSError<Aws::S3::S3Errors>& error)
{
    const QString name = fromAws(error.GetExceptionName());
    if (name == u"NoSuchBucket" || name == u"NoSuchKey" || name == u"NoSuchUpload")
        return false;
    return (name.startsWith(QStringLiteral("NoSuch")) && name.size() > 6) ||
           name.endsWith(QStringLiteral("NotFoundError")) || name == u"NoSuchTagSetError";
}

} // namespace s3fm::aws
