#include "ui/dialogs/SearchDialog.h"

#include "providers/s3/S3Types.h"

#include <QCheckBox>
#include <QComboBox>
#include <QDateTimeEdit>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QHBoxLayout>
#include <QLabel>
#include <QLineEdit>
#include <QPushButton>
#include <QSpinBox>
#include <QVBoxLayout>

namespace s3fm {

namespace {

enum class Types
{
    Both,
    Files,
    Folders
};

} // namespace

SearchDialog::SearchDialog(const Location& root, const SearchCriteria& initial, QWidget* parent)
    : QDialog(parent), m_root(root)
{
    setWindowTitle(tr("Find Files"));
    setMinimumWidth(560);
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;
    layout->addLayout(form);

    auto* where = new QLineEdit(root.displayString(), this);
    where->setReadOnly(true);
    where->setFocusPolicy(Qt::ClickFocus);
    form->addRow(tr("Search in:"), where);

    m_pattern = new QLineEdit(this);
    m_pattern->setObjectName(QStringLiteral("pattern"));
    m_pattern->setPlaceholderText(tr("e.g. *.log; report — empty: everything"));
    m_pattern->setToolTip(tr("Wildcards: * any text, ? one character, [abc] one of these. Separate several "
                             "patterns with ';'. Text without wildcards matches anywhere in the name."));
    form->addRow(tr("&Name:"), m_pattern);

    m_syntax = new QComboBox(this);
    m_syntax->setObjectName(QStringLiteral("syntax"));
    m_syntax->addItem(tr("Wildcards"), int(SearchCriteria::Syntax::Wildcard));
    m_syntax->addItem(tr("Regular expression"), int(SearchCriteria::Syntax::RegularExpression));
    form->addRow(tr("S&yntax:"), m_syntax);

    m_caseSensitive = new QCheckBox(tr("&Case sensitive"), this);
    m_matchPath = new QCheckBox(tr("Match the full &path below the search folder"), this);
    m_matchPath->setToolTip(tr("Match \"2024/*.csv\" against \"logs/2024/a.csv\" instead of the name only; "
                               "* then also matches '/'"));
    form->addRow(m_caseSensitive);
    form->addRow(m_matchPath);

    m_prefix = new QLineEdit(this);
    m_prefix->setObjectName(QStringLiteral("prefix"));
    m_prefix->setPlaceholderText(tr("e.g. logs/2024- (optional)"));
    m_prefix->setToolTip(tr("Only paths below the search folder starting with this text are searched. "
                            "On S3 the server filters by this key prefix, which is much faster than "
                            "listing everything."));
    form->addRow(tr("Path p&refix:"), m_prefix);

    m_minSize = new QLineEdit(this);
    m_minSize->setObjectName(QStringLiteral("minSize"));
    m_minSize->setPlaceholderText(tr("e.g. 10 MB"));
    m_maxSize = new QLineEdit(this);
    m_maxSize->setObjectName(QStringLiteral("maxSize"));
    m_maxSize->setPlaceholderText(tr("e.g. 1.5 GB"));
    form->addRow(tr("Size at &least:"), m_minSize);
    form->addRow(tr("Size at m&ost:"), m_maxSize);

    auto dateRow = [this, form](const QString& label, QCheckBox** check, QDateTimeEdit** edit,
                                const QDateTime& initialValue) {
        auto* row = new QHBoxLayout;
        *check = new QCheckBox(label, this);
        *edit = new QDateTimeEdit(initialValue, this);
        (*edit)->setCalendarPopup(true);
        (*edit)->setDisplayFormat(QStringLiteral("yyyy-MM-dd HH:mm"));
        (*edit)->setEnabled(false);
        connect(*check, &QCheckBox::toggled, *edit, &QWidget::setEnabled);
        row->addWidget(*check);
        row->addWidget(*edit, 1);
        form->addRow(row);
    };
    const QDateTime now = QDateTime::currentDateTime();
    dateRow(tr("Modified &after:"), &m_afterCheck, &m_after, now.addDays(-7));
    dateRow(tr("Modified &before:"), &m_beforeCheck, &m_before, now);

    m_storageClass = new QComboBox(this);
    m_storageClass->setObjectName(QStringLiteral("storageClass"));
    m_storageClass->addItem(tr("Any"), QString());
    const QStringList classes = storageClassNames();
    for (const QString& sc : classes)
        m_storageClass->addItem(sc, sc);
    m_storageClass->setEnabled(root.isS3());
    form->addRow(tr("S&torage class:"), m_storageClass);

    m_types = new QComboBox(this);
    m_types->setObjectName(QStringLiteral("types"));
    m_types->addItem(tr("Files and folders"), int(Types::Both));
    m_types->addItem(tr("Files only"), int(Types::Files));
    m_types->addItem(tr("Folders only"), int(Types::Folders));
    form->addRow(tr("&Include:"), m_types);

    m_hidden = new QCheckBox(tr("Include &hidden files and folders"), this);
    m_hidden->setVisible(root.isLocal());
    form->addRow(m_hidden);

    m_maxResults = new QSpinBox(this);
    m_maxResults->setObjectName(QStringLiteral("maxResults"));
    m_maxResults->setRange(0, 10'000'000);
    m_maxResults->setSingleStep(1000);
    m_maxResults->setSpecialValueText(tr("No limit"));
    form->addRow(tr("Ma&ximum results:"), m_maxResults);

    m_error = new QLabel(this);
    m_error->setObjectName(QStringLiteral("error"));
    m_error->setWordWrap(true);
    m_error->setTextFormat(Qt::PlainText);
    QPalette pal = m_error->palette();
    pal.setColor(QPalette::WindowText, QColor(0xc0, 0x1c, 0x28));
    m_error->setPalette(pal);
    m_error->hide();
    layout->addWidget(m_error);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Cancel, this);
    m_searchButton = buttons->addButton(tr("&Search"), QDialogButtonBox::AcceptRole);
    m_searchButton->setDefault(true);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);

    setCriteria(initial);
    for (QLineEdit* edit : {m_pattern, m_prefix, m_minSize, m_maxSize})
        connect(edit, &QLineEdit::textChanged, this, &SearchDialog::validate);
    for (QCheckBox* box : {m_caseSensitive, m_matchPath, m_afterCheck, m_beforeCheck})
        connect(box, &QCheckBox::toggled, this, &SearchDialog::validate);
    connect(m_syntax, &QComboBox::currentIndexChanged, this, &SearchDialog::validate);
    connect(m_types, &QComboBox::currentIndexChanged, this, &SearchDialog::validate);
    connect(m_storageClass, &QComboBox::currentIndexChanged, this, &SearchDialog::validate);
    connect(m_after, &QDateTimeEdit::dateTimeChanged, this, &SearchDialog::validate);
    connect(m_before, &QDateTimeEdit::dateTimeChanged, this, &SearchDialog::validate);
    validate();
    m_pattern->setFocus();
    m_pattern->selectAll();
}

void SearchDialog::setCriteria(const SearchCriteria& c)
{
    m_pattern->setText(c.pattern);
    m_syntax->setCurrentIndex(qMax(0, m_syntax->findData(int(c.syntax))));
    m_caseSensitive->setChecked(c.caseSensitive);
    m_matchPath->setChecked(c.matchPath);
    m_prefix->setText(c.pathPrefix);
    m_minSize->setText(c.minSize >= 0 ? QString::number(c.minSize) : QString());
    m_maxSize->setText(c.maxSize >= 0 ? QString::number(c.maxSize) : QString());
    m_afterCheck->setChecked(c.modifiedAfter.isValid());
    if (c.modifiedAfter.isValid())
        m_after->setDateTime(c.modifiedAfter.toLocalTime());
    m_beforeCheck->setChecked(c.modifiedBefore.isValid());
    if (c.modifiedBefore.isValid())
        m_before->setDateTime(c.modifiedBefore.toLocalTime());
    m_storageClass->setCurrentIndex(
        c.storageClasses.isEmpty() ? 0 : qMax(0, m_storageClass->findData(c.storageClasses.first())));
    Types types = Types::Both;
    if (!c.includeDirectories)
        types = Types::Files;
    else if (!c.includeFiles)
        types = Types::Folders;
    m_types->setCurrentIndex(m_types->findData(int(types)));
    m_hidden->setChecked(c.includeHidden);
    m_maxResults->setValue(qMax(0, c.maxResults));
}

bool SearchDialog::readSize(const QLineEdit* edit, qint64* bytes, QString* error) const
{
    const QString text = edit->text().trimmed();
    *bytes = -1;
    if (text.isEmpty())
        return true;
    const std::optional<qint64> size = parseSize(text);
    if (!size) {
        *error = tr("\"%1\" is not a size (examples: 1500, 10 KB, 1.5 GB)").arg(text);
        return false;
    }
    *bytes = *size;
    return true;
}

SearchCriteria SearchDialog::criteria() const
{
    SearchCriteria c;
    c.pattern = m_pattern->text().trimmed();
    c.syntax = SearchCriteria::Syntax(m_syntax->currentData().toInt());
    c.caseSensitive = m_caseSensitive->isChecked();
    c.matchPath = m_matchPath->isChecked();
    c.pathPrefix = m_prefix->text();
    while (c.pathPrefix.startsWith(u'/'))
        c.pathPrefix.remove(0, 1);
    QString unused;
    readSize(m_minSize, &c.minSize, &unused);
    readSize(m_maxSize, &c.maxSize, &unused);
    if (m_afterCheck->isChecked())
        c.modifiedAfter = m_after->dateTime();
    if (m_beforeCheck->isChecked())
        c.modifiedBefore = m_before->dateTime();
    if (m_storageClass->isEnabled() && !m_storageClass->currentData().toString().isEmpty())
        c.storageClasses = {m_storageClass->currentData().toString()};
    const auto types = Types(m_types->currentData().toInt());
    c.includeFiles = types != Types::Folders;
    c.includeDirectories = types != Types::Files;
    c.includeHidden = m_root.isLocal() && m_hidden->isChecked();
    c.maxResults = m_maxResults->value();
    return c;
}

bool SearchDialog::isInputValid() const
{
    return m_searchButton->isEnabled();
}

void SearchDialog::validate()
{
    QString error;
    qint64 minSize = -1;
    qint64 maxSize = -1;
    if (readSize(m_minSize, &minSize, &error) && readSize(m_maxSize, &maxSize, &error)) {
        const SearchCriteria c = criteria();
        const SearchMatcher matcher(c);
        if (!matcher.isValid())
            error = matcher.errorString();
        else if (minSize >= 0 && maxSize >= 0 && minSize > maxSize)
            error = tr("The minimum size is larger than the maximum size.");
        else if (c.modifiedAfter.isValid() && c.modifiedBefore.isValid() && c.modifiedAfter > c.modifiedBefore)
            error = tr("The \"after\" date is later than the \"before\" date.");
        else if (!c.includeFiles && c.hasAttributeCriteria())
            error = tr("Folders have no size, date or storage class: search for files to use these criteria.");
        else if (c.pathPrefix.split(u'/').contains(QStringLiteral("..")))
            error = tr("The path prefix cannot leave the search folder.");
    }
    m_error->setText(error);
    m_error->setVisible(!error.isEmpty());
    m_searchButton->setEnabled(error.isEmpty());
}

} // namespace s3fm
