# s3fm_set_project_warnings(<target>)
# Applies the project's warning policy to a target.
function(s3fm_set_project_warnings target)
    if(MSVC)
        set(warnings /W4 /permissive- /utf-8 /Zc:__cplusplus /Zc:preprocessor
            /wd4251 # needs to have dll-interface (Qt / AWS headers)
        )
        if(S3FM_WARNINGS_AS_ERRORS)
            list(APPEND warnings /WX)
        endif()
    else()
        set(warnings -Wall -Wextra -Wpedantic -Wshadow -Wnon-virtual-dtor -Wold-style-cast
            -Wcast-align -Woverloaded-virtual -Wnull-dereference -Wimplicit-fallthrough)
        if(S3FM_WARNINGS_AS_ERRORS)
            list(APPEND warnings -Werror)
        endif()
    endif()
    target_compile_options(${target} PRIVATE ${warnings})
endfunction()
