#include "ui/dialogs/SettingsDialog.h"

#include "ui/I18n.h"

#include <QCollator>
#include <QComboBox>
#include <QDialogButtonBox>
#include <QFormLayout>
#include <QLabel>
#include <QVBoxLayout>

#include <algorithm>
#include <utility>

namespace s3fm {

SettingsDialog::SettingsDialog(QWidget* parent) : QDialog(parent)
{
    setWindowTitle(tr("Settings"));
    setMinimumWidth(420);
    auto* layout = new QVBoxLayout(this);
    auto* form = new QFormLayout;

    m_language = new QComboBox(this);
    m_language->setObjectName(QStringLiteral("language"));
    m_language->addItem(tr("System default (%1)").arg(nativeLanguageName(QLocale::system())), QString());
    // Each language under its own name, so everyone finds theirs; sorted alphabetically.
    QList<std::pair<QString, QString>> languages; // (name, code)
    const QStringList codes = availableLanguages();
    for (const QString& code : codes)
        languages.emplace_back(nativeLanguageName(QLocale(code)), code);
    QCollator collator;
    std::sort(languages.begin(), languages.end(),
              [&collator](const auto& a, const auto& b) { return collator.compare(a.first, b.first) < 0; });
    for (const auto& [name, code] : std::as_const(languages))
        m_language->addItem(name, code);
    const int current = m_language->findData(languageSetting());
    m_language->setCurrentIndex(current < 0 ? 0 : current);
    form->addRow(tr("&Language:"), m_language);
    layout->addLayout(form);

    auto* note =
        new QLabel(tr("<small>A new language is used after restarting S3 File Manager.</small>"), this);
    note->setWordWrap(true);
    layout->addWidget(note);

    auto* buttons = new QDialogButtonBox(QDialogButtonBox::Ok | QDialogButtonBox::Cancel, this);
    connect(buttons, &QDialogButtonBox::accepted, this, &QDialog::accept);
    connect(buttons, &QDialogButtonBox::rejected, this, &QDialog::reject);
    layout->addWidget(buttons);
}

QString SettingsDialog::language() const
{
    return m_language->currentData().toString();
}

} // namespace s3fm
