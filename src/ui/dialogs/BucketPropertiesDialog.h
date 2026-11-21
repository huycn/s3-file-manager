#pragma once

#include "providers/s3/S3BucketTypes.h"

#include <QDialog>

#include <memory>

class QLabel;
class QTabWidget;

namespace s3fm {

class BucketTab;
class S3BucketService;

// Bucket settings, one tab per sub-resource: overview, versioning, default
// encryption, lifecycle, CORS, policy, public access block, tags, website, Object
// Lock and statistics. Tabs the endpoint does not support are disabled (feature
// probing per connection, see S3BucketService::isUnsupported()).
class BucketPropertiesDialog : public QDialog
{
    Q_OBJECT

public:
    BucketPropertiesDialog(std::shared_ptr<S3BucketService> service, const QString& bucket,
                           QWidget* parent = nullptr);

    QTabWidget* tabs() const { return m_tabs; }
    bool isLoading() const;
    QString statusText() const;
    // Index of the tab for `feature`, or -1.
    int tabIndex(BucketFeature feature) const { return m_featureTabs.value(feature, -1); }

Q_SIGNALS:
    void bucketChanged(const QString& bucket);

private:
    void addTab(BucketTab* tab, const QString& title, std::optional<BucketFeature> feature);
    void disableTab(int index, const QString& title);
    void setStatus(const QString& text, bool error);

    std::shared_ptr<S3BucketService> m_service;
    QString m_bucket;
    QTabWidget* m_tabs;
    QLabel* m_status;
    QList<BucketTab*> m_tabList;
    QHash<BucketFeature, int> m_featureTabs;
};

} // namespace s3fm
