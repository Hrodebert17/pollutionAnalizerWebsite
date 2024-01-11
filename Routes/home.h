#ifndef LOMBARDYPOLLUTIONANALYZER_HOME_H
#define LOMBARDYPOLLUTIONANALYZER_HOME_H
#include "Routes.h"
#include "macros.h"
#include <crow.h>

std::function<void(crow::SimpleApp &website)> homeLambda = [](crow::SimpleApp &website) -> void{
    // put all the file paths here:
    std::string html;
    std::string css;
    std::string javaScript;

    // define the route here
    CROW_ROUTE(website,"/")([](){
        std::string page = crow::mustache::load_text("home.html");
        return page;
    });
    CROW_ROUTE(website,"/home.css")([](){
        std::string page = crow::mustache::load_text("home.css");
        return page;
    });
    CROW_ROUTE(website,"/home.js")([](){
        std::string page = crow::mustache::load_text("home.js");
        return page;
    });
};

Page home{homeLambda};
#endif //LOMBARDYPOLLUTIONANALYZER_HOME_H
