#pragma once

#include "core/Location.h"
#include "core/Search.h"

#include <QDialog>

class QCheckBox;
class QComboBox;
class QDateTimeEdit;
class QLabel;
class QLineEdit;
class QPushButton;
class QSpinBox;

namespace s3fm {

// "Find Files" (Alt+F7): criteria for a recursive search below `root`. The results open
// in the panel (PanelWidget::startSearch).
class SearchDialog : public QDialog
{
    Q_OBJECT

public:
    SearchDialog(const Location& root, const SearchCriteria& initial, QWidget* parent = nullptr);

    // Valid only when the dialog was accepted (or isInputValid()).
    SearchCriteria criteria() const;
    bool isInputValid() const;

private:
    void setCriteria(const SearchCriteria& c);
    void validate();
    // Parses a size field; false (and `error` set) if the text is not a size.
    bool readSize(const QLineEdit* edit, qint64* bytes, QString* error) const;

    Location m_root;
    QLineEdit* m_pattern;
    QComboBox* m_syntax;
    QCheckBox* m_caseSensitive;
    QCheckBox* m_matchPath;
    QLineEdit* m_prefix;
    QLineEdit* m_minSize;
    QLineEdit* m_maxSize;
    QCheckBox* m_afterCheck;
    QDateTimeEdit* m_after;
    QCheckBox* m_beforeCheck;
    QDateTimeEdit* m_before;
    QComboBox* m_storageClass;
    QComboBox* m_types;
    QCheckBox* m_hidden;
    QSpinBox* m_maxResults;
    QLabel* m_error;
    QPushButton* m_searchButton;
};

} // namespace s3fm
