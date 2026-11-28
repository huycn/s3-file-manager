# ---------------------------------------------------------------------------
# s3fm_core: everything that does not need QtWidgets (VFS, providers,
# connections, file operations). Unit tests link against this.
# ---------------------------------------------------------------------------
add_library(s3fm_core STATIC
    connections/AddressResolver.cpp connections/AddressResolver.h
    connections/AwsConfig.cpp connections/AwsConfig.h
    connections/ConnectionProfile.cpp connections/ConnectionProfile.h
    connections/ConnectionStore.cpp connections/ConnectionStore.h
    connections/S3Urls.cpp connections/S3Urls.h
    connections/SecretStore.cpp connections/SecretStore.h

    core/Async.cpp core/Async.h
    core/BandwidthLimiter.cpp core/BandwidthLimiter.h
    core/Entry.h
    core/Format.cpp core/Format.h
    core/NaturalSort.cpp core/NaturalSort.h
    core/Error.cpp core/Error.h
    core/Location.cpp core/Location.h
    core/Logging.cpp core/Logging.h
    core/OperationContext.h
    core/Provider.cpp core/Provider.h
    core/Search.cpp core/Search.h
    core/ProviderRegistry.cpp core/ProviderRegistry.h
    core/TransferParams.h

    providers/local/LocalProvider.cpp providers/local/LocalProvider.h

    providers/s3/AwsConvert.h
    providers/s3/AwsSdk.cpp providers/s3/AwsSdk.h
    providers/s3/S3BucketConvert.cpp providers/s3/S3BucketConvert.h
    providers/s3/S3BucketService.cpp providers/s3/S3BucketService.h
    providers/s3/S3BucketTypes.cpp providers/s3/S3BucketTypes.h
    providers/s3/S3Errors.cpp providers/s3/S3Errors.h
    providers/s3/Checksums.cpp providers/s3/Checksums.h
    providers/s3/S3ObjectService.cpp providers/s3/S3ObjectService.h
    providers/s3/S3Provider.cpp providers/s3/S3Provider.h
    providers/s3/S3RootProvider.cpp providers/s3/S3RootProvider.h
    providers/s3/S3Requests.h
    providers/s3/S3Session.cpp providers/s3/S3Session.h
    providers/s3/S3Types.cpp providers/s3/S3Types.h
    providers/s3/S3VersionService.cpp providers/s3/S3VersionService.h

    transfer/TransferJob.cpp transfer/TransferJob.h
    transfer/TransferMath.cpp transfer/TransferMath.h
    transfer/TransferQueue.cpp transfer/TransferQueue.h
    transfer/TransferRunner.cpp transfer/TransferRunner.h
    transfer/TransferStore.cpp transfer/TransferStore.h
    transfer/TransferTypes.cpp transfer/TransferTypes.h
)
target_include_directories(s3fm_core PUBLIC ${CMAKE_CURRENT_SOURCE_DIR})
target_link_libraries(s3fm_core
    PUBLIC Qt6::Core Qt6::Gui Qt6::Concurrent Qt6::Network
    PUBLIC aws-cpp-sdk-s3 aws-cpp-sdk-core
    PRIVATE S3FM::Keychain)
target_compile_definitions(s3fm_core PUBLIC
    S3FM_VERSION="${PROJECT_VERSION}"
    QT_NO_URL_CAST_FROM_STRING)
s3fm_set_project_warnings(s3fm_core)

# ---------------------------------------------------------------------------
# s3fm_ui: widgets, dialogs, main window.
# ---------------------------------------------------------------------------
add_library(s3fm_ui STATIC
    models/EntryListModel.cpp models/EntryListModel.h
    models/EntrySortProxy.cpp models/EntrySortProxy.h
    models/IconCache.cpp models/IconCache.h
    models/TransferModel.cpp models/TransferModel.h

    ui/dialogs/BucketPropertiesDialog.cpp ui/dialogs/BucketPropertiesDialog.h
    ui/dialogs/BucketRuleTabs.cpp
    ui/dialogs/BucketTabs.cpp ui/dialogs/BucketTabs.h
    ui/dialogs/ConflictDialog.cpp ui/dialogs/ConflictDialog.h
    ui/dialogs/ConnectionDialog.cpp ui/dialogs/ConnectionDialog.h
    ui/dialogs/CreateBucketDialog.cpp ui/dialogs/CreateBucketDialog.h
    ui/dialogs/DeleteBucketDialog.cpp ui/dialogs/DeleteBucketDialog.h
    ui/dialogs/LifecycleRuleDialog.cpp ui/dialogs/LifecycleRuleDialog.h
    ui/dialogs/MultipartUploadsDialog.cpp ui/dialogs/MultipartUploadsDialog.h
    ui/dialogs/ObjectEditDialog.cpp ui/dialogs/ObjectEditDialog.h
    ui/dialogs/PresignDialog.cpp ui/dialogs/PresignDialog.h
    ui/dialogs/PropertiesDialog.cpp ui/dialogs/PropertiesDialog.h
    ui/dialogs/RestoreArchiveDialog.cpp ui/dialogs/RestoreArchiveDialog.h
    ui/dialogs/SearchDialog.cpp ui/dialogs/SearchDialog.h
    ui/dialogs/SettingsDialog.cpp ui/dialogs/SettingsDialog.h
    ui/dialogs/SseKeyDialog.cpp ui/dialogs/SseKeyDialog.h
    ui/dialogs/TargetDialog.cpp ui/dialogs/TargetDialog.h
    ui/dialogs/TransferSettingsDialog.cpp ui/dialogs/TransferSettingsDialog.h
    ui/dialogs/VersionHistoryDialog.cpp ui/dialogs/VersionHistoryDialog.h
    ui/dialogs/ViewerDialog.cpp ui/dialogs/ViewerDialog.h
    ui/docks/TransferDock.cpp ui/docks/TransferDock.h
    ui/HeaderColors.cpp ui/HeaderColors.h
    ui/I18n.cpp ui/I18n.h
    ui/mainwindow/MainWindow.cpp ui/mainwindow/MainWindow.h
    ui/panel/AddressBar.cpp ui/panel/AddressBar.h
    ui/panel/PanelView.cpp ui/panel/PanelView.h
    ui/panel/PanelWidget.cpp ui/panel/PanelWidget.h
    ui/RemoteFiles.cpp ui/RemoteFiles.h
    ui/widgets/EncryptionPicker.cpp ui/widgets/EncryptionPicker.h
    ui/widgets/JsonEditor.cpp ui/widgets/JsonEditor.h
    ui/widgets/KeyValueEditor.cpp ui/widgets/KeyValueEditor.h
)
# qt_add_resources (not a .qrc in the sources) so the resources of this static
# library are registered automatically in every executable that links it.
qt_add_resources(s3fm_ui "s3fm_resources"
    PREFIX "/"
    BASE "${PROJECT_SOURCE_DIR}/resources"
    FILES
        "${PROJECT_SOURCE_DIR}/resources/icons/app.svg"
        "${PROJECT_SOURCE_DIR}/resources/icons/bucket.svg"
        "${PROJECT_SOURCE_DIR}/resources/icons/cloud.svg")
target_link_libraries(s3fm_ui PUBLIC s3fm_core Qt6::Widgets)
# Optional: QR codes for presigned URLs.
find_path(QRENCODE_INCLUDE_DIR qrencode.h)
find_library(QRENCODE_LIBRARY NAMES qrencode libqrencode)
if(QRENCODE_INCLUDE_DIR AND QRENCODE_LIBRARY)
    target_include_directories(s3fm_ui PRIVATE ${QRENCODE_INCLUDE_DIR})
    target_link_libraries(s3fm_ui PRIVATE ${QRENCODE_LIBRARY})
    target_compile_definitions(s3fm_ui PRIVATE S3FM_HAVE_QRENCODE)
    message(STATUS "qrencode found: QR codes for presigned URLs enabled")
endif()
s3fm_set_project_warnings(s3fm_ui)

# Translations: lupdate scans the sources of both libraries; the compiled .qm files are
# embedded in s3fm_ui under :/i18n and loaded by installTranslations() (ui/I18n.h).
# translations/s3fm_en.ts holds only the English plural forms ("%n file(s)" -> "1 file" /
# "3 files"). After adding or changing a %n string, refresh it and fill in the new forms:
#   cmake --build --preset debug --target update_translations
# Languages are listed in qt_standard_project_setup(I18N_TRANSLATED_LANGUAGES ...) in the
# top-level CMakeLists.txt; update_translations creates/refreshes their s3fm_<lang>.ts files.
qt_add_translations(TARGETS s3fm_ui
    SOURCE_TARGETS s3fm_core s3fm_ui
    TS_FILE_DIR "${PROJECT_SOURCE_DIR}/translations"
    TS_FILE_BASE s3fm
    PLURALS_TS_FILE "${PROJECT_SOURCE_DIR}/translations/s3fm_en.ts"
    LUPDATE_OPTIONS -no-obsolete -locations none)

# ---------------------------------------------------------------------------
# Application executable
# ---------------------------------------------------------------------------
qt_add_executable(s3fm WIN32 MACOSX_BUNDLE
    app/main.cpp
)
target_link_libraries(s3fm PRIVATE s3fm_ui)
set_target_properties(s3fm PROPERTIES OUTPUT_NAME s3fm)
s3fm_set_project_warnings(s3fm)

install(TARGETS s3fm
    BUNDLE DESTINATION .
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR})
