cmake_minimum_required(VERSION 3.25)

project(S3FileManager
    VERSION 0.1.0
    DESCRIPTION "Dual-panel file manager for Amazon S3 and S3-compatible storage"
    HOMEPAGE_URL "https://github.com/huycn/s3-file-manager"
    LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

option(S3FM_BUILD_TESTS "Build the test suite" ON)
option(S3FM_WARNINGS_AS_ERRORS "Treat compiler warnings as errors" OFF)
option(S3FM_FETCH_QTKEYCHAIN "Download and build QtKeychain when it is not installed" ON)

list(APPEND CMAKE_MODULE_PATH "${CMAKE_CURRENT_SOURCE_DIR}/cmake")

find_package(Qt6 6.8 REQUIRED COMPONENTS Core Gui Widgets Network Concurrent LinguistTools)
# Translations live in translations/s3fm_<lang>.ts (see src/CMakeLists.txt).
qt_standard_project_setup(REQUIRES 6.8
    I18N_SOURCE_LANGUAGE en
    I18N_TRANSLATED_LANGUAGES zh_CN hi es ar fr bn pt ru de ja ko it nl pl ms vi)
set(CMAKE_AUTORCC ON)

# AWS SDK for C++ (Linux: distro packages; Windows: vcpkg manifest in vcpkg.json).
find_package(AWSSDK CONFIG REQUIRED COMPONENTS s3)

include(QtKeychain)
include(CompilerWarnings)

add_subdirectory(src)

if(S3FM_BUILD_TESTS)
    enable_testing()
    find_package(Qt6 REQUIRED COMPONENTS Test)
    add_subdirectory(tests)
endif()

include(DevTargets)
