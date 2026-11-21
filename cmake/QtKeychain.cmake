# Provides the target S3FM::Keychain.
# Header include differs: installed  -> <qt6keychain/keychain.h>
#                         fetched    -> <qtkeychain/keychain.h>
# (code uses __has_include to pick the right one).
# Uses an installed Qt6Keychain when available (Linux distro packages), otherwise
# fetches and builds it (Windows CI, developer machines without the package).

find_package(Qt6Keychain CONFIG QUIET)

if(NOT Qt6Keychain_FOUND)
    if(NOT S3FM_FETCH_QTKEYCHAIN)
        message(FATAL_ERROR "Qt6Keychain not found and S3FM_FETCH_QTKEYCHAIN is OFF")
    endif()
    message(STATUS "Qt6Keychain not found; fetching QtKeychain sources")
    include(FetchContent)
    set(BUILD_WITH_QT6 ON CACHE BOOL "" FORCE)
    set(BUILD_TRANSLATIONS OFF CACHE BOOL "" FORCE)
    set(BUILD_TEST_APPLICATION OFF CACHE BOOL "" FORCE)
    FetchContent_Declare(qtkeychain
        GIT_REPOSITORY https://github.com/frankosterfeld/qtkeychain.git
        GIT_TAG 0.15.0
        GIT_SHALLOW TRUE
        EXCLUDE_FROM_ALL)
    block()
        # Build QtKeychain as a static library without affecting our own targets.
        set(BUILD_SHARED_LIBS OFF)
        FetchContent_MakeAvailable(qtkeychain)
    endblock()
    add_library(S3FM::Keychain ALIAS qt6keychain)
else()
    add_library(S3FM::Keychain INTERFACE IMPORTED)
    target_link_libraries(S3FM::Keychain INTERFACE Qt6Keychain::Qt6Keychain)
endif()
