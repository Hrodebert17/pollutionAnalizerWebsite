#include "Routes/Routes.h"
#include <crow.h>

int main() {
    crow::SimpleApp app{};
    registerPages(app);
    app.multithreaded().port(1080).run();
    return 0;
}
