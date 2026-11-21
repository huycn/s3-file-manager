#pragma once

#include "core/Location.h"

#include <QDateTime>
#include <QFileDevice>
#include <QList>
#include <QMap>
#include <QMetaType>
#include <QString>

namespace s3fm {

// One item in a directory listing (file, directory, bucket or connection).
struct Entry
{
    enum class Type : quint8
    {
        File,
        Directory,
        Bucket,
        Connection
    };

    QString name;
    Location location;
    Type type = Type::File;
    qint64 size = -1; // -1: unknown / not applicable
    QDateTime modified;

    // Local filesystem
    bool hidden = false;
    bool isSymlink = false;
    QString symlinkTarget;
    QFileDevice::Permissions permissions;

    // S3
    QString etag;
    QString storageClass;
    QString versionId;
    QString contentType;
    QString owner;
    QString region;
    bool isLatest = true;
    bool isDeleteMarker = false;
    // Extra properties shown in the properties dialog: system headers
    // (Cache-Control, Content-Encoding, x-amz-server-side-encryption, …) and
    // user metadata (prefixed "x-amz-meta-").
    QMap<QString, QString> metadata;

    bool isDirectory() const { return type != Type::File; }
};

using EntryList = QList<Entry>;

} // namespace s3fm

Q_DECLARE_METATYPE(s3fm::Entry)
