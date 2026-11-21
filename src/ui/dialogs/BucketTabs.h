#pragma once

// The tabs of the bucket properties dialog. Each tab loads its own sub-resource
// on the I/O pool and applies changes with its own button, so one failing or
// unsupported setting does not block the others.

#include "core/Async.h"
#include "providers/s3/S3BucketService.h"

#include <QPointer>
#include <QWidget>

#include <functional>
#include <memory>

class QCheckBox;
class QComboBox;
class QFormLayout;
class QGroupBox;
class QLabel;
class QLineEdit;
class QListWidget;
class QPushButton;
class QRadioButton;
class QSpinBox;
class QStackedWidget;
class QTabWidget;
class QTableWidget;
class QTimer;

namespace s3fm {

class JsonEditor;
class KeyValueEditor;

class BucketTab : public QWidget
{
    Q_OBJECT

public:
    BucketTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent = nullptr);

    virtual void load() = 0;
    bool isBusy() const { return m_busy > 0; }

Q_SIGNALS:
    void statusChanged(const QString& text, bool error);
    // The endpoint answered NotImplemented: the dialog disables the tab.
    void unsupported();
    void settingsChanged();

protected:
    // Runs `fn` on the I/O pool; `show` gets the value on the GUI thread. Errors go
    // to statusChanged() (or unsupported()).
    template <class T> void fetch(std::function<Result<T>()> fn, std::function<void(const T&)> show)
    {
        begin();
        QPointer<BucketTab> self(this);
        runIo(std::move(fn)).then(this, [self, show](Result<T> result) {
            if (!self)
                return;
            if (!self->end(result ? nullptr : &result.error()))
                return;
            show(result.value());
        });
    }
    // Runs a change on the I/O pool, then reloads the tab and reports `done`.
    void apply(const QString& done, std::function<VoidResult()> fn);
    void report(const QString& text, bool error = false) { Q_EMIT statusChanged(text, error); }

    std::shared_ptr<S3BucketService> m_service;
    QString m_bucket;

private:
    void begin();
    bool end(const Error* error); // false on error
    int m_busy = 0;
};

class BucketOverviewTab : public BucketTab
{
    Q_OBJECT
public:
    BucketOverviewTab(std::shared_ptr<S3BucketService> service, const QString& bucket, const QString& url,
                      QWidget* parent = nullptr);
    void load() override;
    QList<QPair<QString, QString>> rows() const { return m_rows; }

private:
    void addRow(const QString& label, const QString& value);
    QFormLayout* m_form;
    QString m_url;
    QList<QPair<QString, QString>> m_rows;
};

class BucketVersioningTab : public BucketTab
{
    Q_OBJECT
public:
    BucketVersioningTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                        QWidget* parent = nullptr);
    void load() override;

private:
    void build();
    QLabel* m_state = nullptr;
    QLabel* m_mfa = nullptr;
    QPushButton* m_enable = nullptr;
    QPushButton* m_suspend = nullptr;
};

class BucketEncryptionTab : public BucketTab
{
    Q_OBJECT
public:
    BucketEncryptionTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                        QWidget* parent = nullptr);
    void load() override;

private:
    void build();
    void updateFields();
    QComboBox* m_mode = nullptr;
    QLineEdit* m_key = nullptr;
    QCheckBox* m_bucketKey = nullptr;
};

class BucketLifecycleTab : public BucketTab
{
    Q_OBJECT
public:
    BucketLifecycleTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                       QWidget* parent = nullptr);
    void load() override;
    QList<LifecycleRule> rules() const { return m_rules; }
    void setRules(const QList<LifecycleRule>& rules); // as if edited by the user
    bool syncFromJson();                              // JSON view -> rules; false (and a message) on errors

private:
    void build();
    void fill();
    void editRule(int row);
    void save();
    QList<LifecycleRule> m_rules;
    QTabWidget* m_views = nullptr;
    QTableWidget* m_table = nullptr;
    JsonEditor* m_json = nullptr;
};

class BucketCorsTab : public BucketTab
{
    Q_OBJECT
public:
    BucketCorsTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent = nullptr);
    void load() override;
    QList<CorsRule> rulesFromTable() const;

private:
    void build();
    void fill(const QList<CorsRule>& rules);
    bool syncFromJson();
    void save();
    QTabWidget* m_views = nullptr;
    QTableWidget* m_table = nullptr;
    JsonEditor* m_json = nullptr;
};

class BucketPolicyTab : public BucketTab
{
    Q_OBJECT
public:
    BucketPolicyTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                    QWidget* parent = nullptr);
    void load() override;
    JsonEditor* editor() const { return m_editor; }
    QList<PolicyIssue> issues() const { return m_issues; }
    void validateNow();

private:
    void build();
    void save(bool remove);
    JsonEditor* m_editor = nullptr;
    QListWidget* m_issueList = nullptr;
    QTimer* m_timer = nullptr;
    QList<PolicyIssue> m_issues;
};

class BucketPublicAccessTab : public BucketTab
{
    Q_OBJECT
public:
    BucketPublicAccessTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                          QWidget* parent = nullptr);
    void load() override;

private:
    void build();
    QCheckBox* m_all = nullptr;
    QCheckBox* m_boxes[4] = {};
};

class BucketTagsTab : public BucketTab
{
    Q_OBJECT
public:
    BucketTagsTab(std::shared_ptr<S3BucketService> service, const QString& bucket, QWidget* parent = nullptr);
    void load() override;
    KeyValueEditor* editor() const { return m_tags; }
    void save();

private:
    void build();
    KeyValueEditor* m_tags = nullptr;
};

class BucketWebsiteTab : public BucketTab
{
    Q_OBJECT
public:
    BucketWebsiteTab(std::shared_ptr<S3BucketService> service, const QString& bucket, const QString& region,
                     QWidget* parent = nullptr);
    void load() override;

private:
    void build();
    void updateFields();
    void save();
    QString m_region;
    QGroupBox* m_enabled = nullptr;
    QRadioButton* m_host = nullptr;
    QRadioButton* m_redirect = nullptr;
    QLineEdit* m_index = nullptr;
    QLineEdit* m_error = nullptr;
    JsonEditor* m_rules = nullptr;
    QLineEdit* m_redirectHost = nullptr;
    QComboBox* m_redirectProtocol = nullptr;
    QLabel* m_endpoint = nullptr;
};

class BucketObjectLockTab : public BucketTab
{
    Q_OBJECT
public:
    BucketObjectLockTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                        QWidget* parent = nullptr);
    void load() override;

private:
    void build();
    void updateFields();
    ObjectLockDefaults m_state;
    QLabel* m_status = nullptr;
    QPushButton* m_enable = nullptr;
    QComboBox* m_mode = nullptr;
    QSpinBox* m_period = nullptr;
    QComboBox* m_unit = nullptr;
    QPushButton* m_apply = nullptr;
};

class BucketStatisticsTab : public BucketTab
{
    Q_OBJECT
public:
    BucketStatisticsTab(std::shared_ptr<S3BucketService> service, const QString& bucket,
                        QWidget* parent = nullptr);
    ~BucketStatisticsTab() override;
    void load() override {} // computed on request
    void calculate();
    bool isCalculating() const { return m_ctx != nullptr; }
    QTableWidget* table() const { return m_table; }

private:
    void build();
    void show(const BucketStats& stats);
    QLineEdit* m_prefix = nullptr;
    QPushButton* m_run = nullptr;
    QLabel* m_progress = nullptr;
    QTableWidget* m_table = nullptr;
    std::shared_ptr<OperationContext> m_ctx;
};

} // namespace s3fm
