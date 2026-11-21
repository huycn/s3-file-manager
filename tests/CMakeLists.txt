# s3fm_add_test(<name> SOURCES <files...> LABELS <labels...> [LIBS <libs...>])
# Builds a Qt Test executable and registers it with CTest.
function(s3fm_add_test name)
    cmake_parse_arguments(ARG "" "" "SOURCES;LABELS;LIBS" ${ARGN})
    add_executable(${name} ${ARG_SOURCES})
    target_link_libraries(${name} PRIVATE Qt6::Test ${ARG_LIBS})
    target_include_directories(${name} PRIVATE ${PROJECT_SOURCE_DIR}/tests)
    s3fm_set_project_warnings(${name})
    add_test(NAME ${name} COMMAND ${name})
    set_tests_properties(${name} PROPERTIES
        LABELS "${ARG_LABELS}"
        ENVIRONMENT "QT_QPA_PLATFORM=offscreen")
endfunction()

add_subdirectory(unit)
add_subdirectory(ui)
add_subdirectory(integration)
