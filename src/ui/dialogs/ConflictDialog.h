#pragma once

#include "transfer/TransferTypes.h"

#include <QDialog>

class QCheckBox;

namespace s3fm {

// "File already exists" prompt shown during copy/move.
class ConflictDialog : public QDialog
{
    Q_OBJECT

public:
    ConflictDialog(const ConflictInfo& info, QWidget* parent = nullptr);
    ConflictAnswer answer() const { return m_answer; }

    // Convenience: shows the dialog modally and returns the answer (cancel if closed).
    static ConflictAnswer ask(const ConflictInfo& info, QWidget* parent);

private:
    ConflictAnswer m_answer{ConflictPolicy::Skip, false, true};
    QCheckBox* m_all;
};

} // namespace s3fm
