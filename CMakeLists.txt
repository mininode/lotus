cmake_minimum_required(VERSION 3.0)
project (nymphaea)

#add_subdirectory(${PROJECT_SOURCE_DIR}/src/vendor/c-ares)
#add_subdirectory(${PROJECT_SOURCE_DIR}/src/vendor/libuv)
#add_subdirectory(${PROJECT_SOURCE_DIR}/src/vendor/mbedtls)
#add_subdirectory(${PROJECT_SOURCE_DIR}/src/vendor/zlib)
add_subdirectory(${PROJECT_SOURCE_DIR}/src/vendor/ChakraCore)

set (PROJECT_INCLUDE_DIR ${PROJECT_SOURCE_DIR}/src/include)
set (PROJECT_SOURCE_DIR ${PROJECT_SOURCE_DIR}/src)

set(PROJECT_SRCS
${PROJECT_SOURCE_DIR}/lotus.cpp
)

add_executable(lotus ${PROJECT_SOURCE_DIR}/lotus.cpp)

target_link_libraries(lotus uv ChakraCore z c-ares)

include_directories("${PROJECT_BINARY_DIR}")
include_directories("${PROJECT_INCLUDE_DIR}")

add_library(${PROJECT_NAME} SHARED ${PROJECT_SRCS})
