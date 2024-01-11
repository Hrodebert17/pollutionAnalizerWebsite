#include "home.h"
#include <crow.h>
#include "Routes.h"
#include "imgRequest.h"

void registerPages(crow::SimpleApp &website) {
    std::cout << "ended registering the pages" << std::endl;
    home.start(website);
    imgRequest.start(website);
}

Page::Page(std::function<void(crow::SimpleApp &)> function) {
    this->registerLambda = function;
    std::cout << "created an instance of page." << std::endl;
}

void Page::start(crow::SimpleApp &website) {
    this->registerLambda(website);

}