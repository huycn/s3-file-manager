#pragma once

#include <QString>

#include <optional>
#include <utility>
#include <variant>

namespace s3fm {

enum class ErrorCode
{
    Unknown,
    NotFound,
    AccessDenied,
    AlreadyExists,
    NotEmpty,
    InvalidArgument,
    Network,
    Timeout,
    Cancelled,
    Unsupported,
    Io,
    Authentication,
    Conflict,
    Throttled,
};

QString errorCodeName(ErrorCode code);

// A failure reported by a provider or operation. `message` is meant for users;
// `detail` carries technical information (OS error text, S3 error code, failed keys).
struct Error
{
    ErrorCode code = ErrorCode::Unknown;
    QString message;
    QString detail;
    QString requestId; // S3 request id, when available
    bool retryable = false;

    static Error make(ErrorCode code, QString message, QString detail = {});
    static Error cancelled();

    bool isCancelled() const { return code == ErrorCode::Cancelled; }
    QString toString() const;
};

// Holds either a value or an Error. Minimal stand-in for std::expected (C++23).
template <class T> class [[nodiscard]] Result
{
public:
    Result()
        requires std::is_default_constructible_v<T>
        : m_data(std::in_place_index<0>)
    {
    }
    Result(T value) : m_data(std::in_place_index<0>, std::move(value)) {}
    Result(Error error) : m_data(std::in_place_index<1>, std::move(error)) {}

    bool ok() const { return m_data.index() == 0; }
    explicit operator bool() const { return ok(); }

    T& value() & { return std::get<0>(m_data); }
    const T& value() const& { return std::get<0>(m_data); }
    T&& value() && { return std::get<0>(std::move(m_data)); }
    T& operator*() & { return value(); }
    const T& operator*() const& { return value(); }
    T* operator->() { return &value(); }
    const T* operator->() const { return &value(); }

    const Error& error() const { return std::get<1>(m_data); }

private:
    std::variant<T, Error> m_data;
};

template <> class [[nodiscard]] Result<void>
{
public:
    Result() = default;
    Result(Error error) : m_error(std::move(error)) {}

    bool ok() const { return !m_error.has_value(); }
    explicit operator bool() const { return ok(); }
    const Error& error() const { return *m_error; }

private:
    std::optional<Error> m_error;
};

using VoidResult = Result<void>;

} // namespace s3fm
