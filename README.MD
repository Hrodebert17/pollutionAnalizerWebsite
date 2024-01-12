# Lombardy Pollution Analyzer

## Requirements

This project has the following requirements:

- Microsoft Visual Studio Compiler
- vcpkg package manager
- CMake
- Crow, installed via vcpkg

### Installation and Setup

1. **Microsoft Visual Studio Compiler**: Install from the official Microsoft Visual Studio Website.

2. **vcpkg package manager**: It's a cross-platform package manager from Microsoft. You can install it by following the instructions on their GitHub page.

3. **Crow**: Once you have vcpkg installed, you can use it to install Crow with the following command in your terminal:
    ```shell
    vcpkg install crow
    ```
4. **CMake**: You can download and install it from the official CMake website.

After installing these, please make sure to set up your environment variables properly.

## How to Use

This project uses the Crow C++ microframework to create an HTTP server and handle web requests. The server runs on port 1080 and is configured to use multiple threads for better performance when serving multiple users.

The `registerPages(app)` function, presumably defined in the `Routes/Routes.h` files, is used to establish different routes (URLs) that your server will respond to. The exact usage of this function will depend on its implementation.

Here is a general workflow to use the server:

1. Ensure you've met all requirements and installed all necessary libraries.

2. Compile your C++ project with your favorite compiler, linked against the Crow library.

3. Run the compiled executable. Your server should now be accessible at `http://localhost:1080`.

4. To create a new route, you have to add it in the `registerPages(app)` function in `Routes/Routes.h`. The definitions of new routes will depend on how the `Routes` class or namespace is implemented.

Please refer to the Crow documentation for specific ways to define routes and their behavior.