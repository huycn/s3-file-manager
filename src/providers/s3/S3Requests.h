#pragma once

// Internal helpers that fill SDK requests from our types: requester pays, SSE-C
// key headers, encryption, editable headers and copy overrides. Header-only so the
// unit tests can check the requests they build (AWS-only behaviour without AWS).

#include "providers/s3/AwsConvert.h"
#include "providers/s3/S3Types.h"

#include <aws/core/utils/DateTime.h>
#include <aws/s3/model/CopyObjectRequest.h>
#include <aws/s3/model/MetadataDirective.h>
#include <aws/s3/model/RequestPayer.h>
#include <aws/s3/model/ServerSideEncryption.h>
#include <aws/s3/model/StorageClass.h>
#include <aws/s3/model/UploadPartCopyRequest.h>

namespace s3fm::aws {

namespace Model = Aws::S3::Model;

// The SDK percent-encodes the whole x-amz-copy-source value, which breaks the
// "?versionId=" suffix (and keys we already encoded). These requests send the
// value exactly as given: "bucket/percent-encoded-key[?versionId=…]".
template <class Base> class RawCopySourceRequest : public Base
{
public:
    void SetRawCopySource(const Aws::String& value)
    {
        m_raw = value;
        Base::SetCopySource(value); // marks the required field as set
    }
    Aws::Http::HeaderValueCollection GetRequestSpecificHeaders() const override
    {
        Aws::Http::HeaderValueCollection headers = Base::GetRequestSpecificHeaders();
        headers["x-amz-copy-source"] = m_raw;
        return headers;
    }

private:
    Aws::String m_raw;
};
using CopyObjectRequest = RawCopySourceRequest<Model::CopyObjectRequest>;
using UploadPartCopyRequest = RawCopySourceRequest<Model::UploadPartCopyRequest>;

template <class Req> void setRequesterPays(Req& req, bool enabled)
{
    if constexpr (requires { req.SetRequestPayer(Model::RequestPayer::requester); }) {
        if (enabled)
            req.SetRequestPayer(Model::RequestPayer::requester);
    }
}

template <class Req> void setSseCustomerKey(Req& req, const SseCustomerKey& key)
{
    req.SetSSECustomerAlgorithm("AES256");
    req.SetSSECustomerKey(toAws(key.keyBase64()));
    req.SetSSECustomerKeyMD5(toAws(key.keyMd5Base64()));
}

template <class Req> void setCopySourceSseCustomerKey(Req& req, const SseCustomerKey& key)
{
    req.SetCopySourceSSECustomerAlgorithm("AES256");
    req.SetCopySourceSSECustomerKey(toAws(key.keyBase64()));
    req.SetCopySourceSSECustomerKeyMD5(toAws(key.keyMd5Base64()));
}

// Requests that create an object (PutObject, CreateMultipartUpload, CopyObject).
// Returns false if SSE-C is requested without a key.
template <class Req> bool setEncryption(Req& req, const ObjectEncryption& enc, const SseCustomerKey* key)
{
    switch (enc.mode) {
    case ObjectEncryption::Mode::None:
        return true;
    case ObjectEncryption::Mode::S3:
        req.SetServerSideEncryption(Model::ServerSideEncryption::AES256);
        return true;
    case ObjectEncryption::Mode::Kms:
        req.SetServerSideEncryption(Model::ServerSideEncryption::aws_kms);
        if (!enc.kmsKeyId.isEmpty())
            req.SetSSEKMSKeyId(toAws(enc.kmsKeyId));
        return true;
    case ObjectEncryption::Mode::Customer:
        if (!key || !key->isValid())
            return false;
        setSseCustomerKey(req, *key);
        return true;
    }
    return true;
}

template <class Req> void setStorageClass(Req& req, const QString& storageClass)
{
    if (!storageClass.isEmpty())
        req.SetStorageClass(Model::StorageClassMapper::GetStorageClassForName(toAws(storageClass)));
}

// Content-* headers, Expires and user metadata (empty values are left out).
template <class Req> void setHeaders(Req& req, const ObjectHeaders& h)
{
    if (!h.contentType.isEmpty())
        req.SetContentType(toAws(h.contentType));
    if (!h.cacheControl.isEmpty())
        req.SetCacheControl(toAws(h.cacheControl));
    if (!h.contentDisposition.isEmpty())
        req.SetContentDisposition(toAws(h.contentDisposition));
    if (!h.contentEncoding.isEmpty())
        req.SetContentEncoding(toAws(h.contentEncoding));
    if (!h.contentLanguage.isEmpty())
        req.SetContentLanguage(toAws(h.contentLanguage));
    if (!h.expires.isEmpty()) {
        Aws::Utils::DateTime expires(toAws(h.expires), Aws::Utils::DateFormat::RFC822);
        if (!expires.WasParseSuccessful())
            expires = Aws::Utils::DateTime(toAws(h.expires), Aws::Utils::DateFormat::ISO_8601);
        if (expires.WasParseSuccessful())
            req.SetExpires(expires);
    }
    for (auto it = h.userMetadata.cbegin(); it != h.userMetadata.cend(); ++it)
        req.AddMetadata(toAws(it.key()), toAws(it.value()));
}

// What a copy of `source` should carry: the source's attributes with `overrides`
// applied. Storage class STANDARD is left implicit.
struct CopyPlan
{
    ObjectHeaders headers;
    bool replaceHeaders = false; // MetadataDirective REPLACE
    QString storageClass;
    ObjectEncryption encryption;
};

inline CopyPlan planCopy(const Entry& source, const CopyOverrides& o)
{
    CopyPlan p;
    p.headers = o.headers ? *o.headers : ObjectHeaders::fromEntry(source);
    p.replaceHeaders = o.headers.has_value();
    p.storageClass = o.storageClass.isEmpty() ? source.storageClass : o.storageClass;
    if (p.storageClass == u"STANDARD")
        p.storageClass.clear();
    p.encryption = o.encryption ? *o.encryption : ObjectEncryption::fromEntry(source);
    return p;
}

// CopyObject (also in place). `sourceKey`: SSE-C key of the source object, if it
// is SSE-C encrypted; `destKey`: key for an SSE-C destination.
template <class Req>
bool applyCopyPlan(Req& req, const CopyPlan& plan, const SseCustomerKey* sourceKey,
                   const SseCustomerKey* destKey)
{
    if constexpr (requires { req.SetMetadataDirective(Model::MetadataDirective::REPLACE); }) {
        if (plan.replaceHeaders) {
            req.SetMetadataDirective(Model::MetadataDirective::REPLACE);
            setHeaders(req, plan.headers);
        }
    } else {
        setHeaders(req, plan.headers); // CreateMultipartUpload: always explicit
    }
    setStorageClass(req, plan.storageClass);
    if constexpr (requires { req.SetCopySourceSSECustomerKey(Aws::String()); }) {
        if (sourceKey && sourceKey->isValid())
            setCopySourceSseCustomerKey(req, *sourceKey);
    }
    Q_UNUSED(sourceKey)
    return setEncryption(req, plan.encryption, destKey);
}

} // namespace s3fm::aws
