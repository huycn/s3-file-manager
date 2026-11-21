#pragma once

#include <QLoggingCategory>

// Logging categories, one per module. Enable with e.g.
//   QT_LOGGING_RULES="s3fm.s3.debug=true"
Q_DECLARE_LOGGING_CATEGORY(lcCore)
Q_DECLARE_LOGGING_CATEGORY(lcS3)
Q_DECLARE_LOGGING_CATEGORY(lcTransfer)
Q_DECLARE_LOGGING_CATEGORY(lcConnections)
Q_DECLARE_LOGGING_CATEGORY(lcUi)
