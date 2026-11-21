#include "ui/dialogs/BucketPropertiesDialog.h"

#include "connections/S3Urls.h"
#include "providers/s3/S3BucketService.h"
#include "providers/s3/S3Provider.h"
#include "providers/s3/S3Session.h"
#include "ui/dialogs/BucketTabs.h"

#include <QDialogButtonBox>
#include <QLabel>
#include <QTabWidget>
#include <QVBoxLayout>

namespace s3fm {

BucketPropertiesDialog::BucketPropertiesDialog(std::shared_ptr<S3BucketService> service,
                                               const QString& bucket, QWidget* parent)
    : QDialog(parent), m_service(std::move(service)), m_bucket(bucket)
{
    setWindowTitle(tr("Bucket Properties — %1").arg(bucket));
    resize(760, 560);
    auto* layout = new QVBoxLayout(this);
    m_tabs = new QTabWidget(this);
    m_tabs->setUsesScrollButtons(true);
    layout->addWidget(m_tabs, 1);
    m_status = new QLabel(this);
    m_status->setObjectName(QStringLiteral("status"));
    m_status->setWordWrap(true);
    m_status->setTextInteractionFlags(Qt::TextSelectableByMouse);
    layout->addWidget(m_status);
    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Close, this);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);

    S3Session& session = m_service->provider().session();
    const ConnectionProfile& profile = session.profile();
    QString region = session.bucketRegion(bucket);
    if (region.isEmpty())
        region = profile.region;
    const QString url = s3urls::objectUrl(Location::s3(profile.id, bucket), profile, region);

    addTab(new BucketOverviewTab(m_service, bucket, url, this), tr("Overview"), std::nullopt);
    addTab(new BucketVersioningTab(m_service, bucket, this), tr("Versioning"), BucketFeature::Versioning);
    addTab(new BucketEncryptionTab(m_service, bucket, this), tr("Encryption"), BucketFeature::Encryption);
    addTab(new BucketLifecycleTab(m_service, bucket, this), tr("Lifecycle"), BucketFeature::Lifecycle);
    addTab(new BucketCorsTab(m_service, bucket, this), tr("CORS"), BucketFeature::Cors);
    addTab(new BucketPolicyTab(m_service, bucket, this), tr("Policy"), BucketFeature::Policy);
    addTab(new BucketPublicAccessTab(m_service, bucket, this), tr("Public Access"),
           BucketFeature::PublicAccessBlock);
    addTab(new BucketTagsTab(m_service, bucket, this), tr("Tags"), BucketFeature::Tagging);
    addTab(new BucketWebsiteTab(m_service, bucket, region, this), tr("Website"), BucketFeature::Website);
    addTab(new BucketObjectLockTab(m_service, bucket, this), tr("Object Lock"), BucketFeature::ObjectLock);
    addTab(new BucketStatisticsTab(m_service, bucket, this), tr("Statistics"), std::nullopt);
}

void BucketPropertiesDialog::addTab(BucketTab* tab, const QString& title,
                                    std::optional<BucketFeature> feature)
{
    const int index = m_tabs->addTab(tab, title);
    m_tabList.push_back(tab);
    connect(tab, &BucketTab::statusChanged, this, &BucketPropertiesDialog::setStatus);
    connect(tab, &BucketTab::settingsChanged, this, [this] { Q_EMIT bucketChanged(m_bucket); });
    if (feature) {
        m_featureTabs.insert(*feature, index);
        if (m_service->isUnsupported(*feature)) {
            disableTab(index, title);
            return;
        }
        connect(tab, &BucketTab::unsupported, this, [this, index, title] { disableTab(index, title); });
    }
    tab->load();
}

void BucketPropertiesDialog::disableTab(int index, const QString& title)
{
    m_tabs->setTabEnabled(index, false);
    m_tabs->setTabToolTip(index, tr("%1: not supported by this endpoint").arg(title));
}

bool BucketPropertiesDialog::isLoading() const
{
    for (const BucketTab* tab : m_tabList) {
        if (tab->isBusy())
            return true;
    }
    return false;
}

QString BucketPropertiesDialog::statusText() const
{
    return m_status->text();
}

void BucketPropertiesDialog::setStatus(const QString& text, bool error)
{
    m_status->setText(text);
    m_status->setStyleSheet(
        error ? QStringLiteral("color: palette(bright-text); background: #b3261e; padding: 4px") : QString());
}

} // namespace s3fm
