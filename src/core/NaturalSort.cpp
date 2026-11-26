#include "core/NaturalSort.h"

#include <QLocale>

namespace s3fm {

QCollator naturalCollator()
{
    QLocale locale;
    if (locale.language() == QLocale::C)
        locale = QLocale(QLocale::English, QLocale::UnitedStates);
    QCollator collator(locale);
    collator.setNumericMode(true);
    collator.setCaseSensitivity(Qt::CaseInsensitive);
    return collator;
}

} // namespace s3fm
