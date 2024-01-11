cmake_minimum_required(VERSION 3.26)
project(lombardyPollutionAnalyzer)
set(CMAKE_CXX_STANDARD 23)

add_executable(lombardyPollutionAnalyzer main.cpp
        Routes/Routes.h
        Routes/Routes.cpp
        Routes/Routes.cpp
        Routes/home.h
        Routes/macros.h
        Routes/imgRequest.h
)

FILE( COPY ${CMAKE_SOURCE_DIR}/files/home.html DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )
FILE( COPY ${CMAKE_SOURCE_DIR}/files/home.css DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )
FILE( COPY ${CMAKE_SOURCE_DIR}/files/home.js DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )
FILE( COPY ${CMAKE_SOURCE_DIR}/files/home.png DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )
FILE( COPY ${CMAKE_SOURCE_DIR}/files/menu.png DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )
FILE( COPY ${CMAKE_SOURCE_DIR}/files/icon.png DESTINATION ${CMAKE_CURRENT_BINARY_DIR}/templates )

find_package(Crow CONFIG REQUIRED)
target_link_libraries(lombardyPollutionAnalyzer  PRIVATE Crow::Crow ws2_32)