#pragma once

#include "connections/ConnectionProfile.h"
#include "core/Location.h"

#include <QList>

namespace s3fm {

// Turns what users paste into the address bar into a Location:
//   s3://<connection>/<bucket>/<key>        saved connection id
//   s3://<bucket>/<key>                     bucket on the current (or first AWS) connection
//   https://<bucket>.s3.<region>.amazonaws.com/<key>, https://s3.<region>.amazonaws.com/<bucket>/<key>
//   https://<endpoint-host>/<bucket>/<key>  path-style URL of a saved S3-compatible endpoint
//   https://<bucket>.<endpoint-host>/<key>  virtual-hosted URL of a saved endpoint
//   anything Location::fromString() accepts (local paths, file:// URLs)
// Returns an invalid Location when nothing matches.
Location resolveAddress(const QString& text, const Location& current,
                        const QList<ConnectionProfile>& profiles);

} // namespace s3fm
