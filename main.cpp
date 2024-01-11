#include "Routes/Routes.h"
#include <crow.h>

int main() {
    crow::SimpleApp app{};
    registerPages(app);
    app.multithreaded().run();
    return 0;
}
