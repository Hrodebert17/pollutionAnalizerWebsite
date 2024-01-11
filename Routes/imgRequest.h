#ifndef LOMBARDYPOLLUTIONANALYZER_IMGREQUEST_H
#define LOMBARDYPOLLUTIONANALYZER_IMGREQUEST_H
#include "Routes.h"
#include <fstream>
#include "macros.h"
#include <crow.h>
std::vector<std::string> allowed {
    std::string("home.png"),
    std::string("menu.png"),
    std::string("icon.png")
};

std::function<void(crow::SimpleApp &website)> handler = [](crow::SimpleApp &website) -> void {
    CROW_ROUTE(website,"/img/<string>")([](std::string img){
        crow::response resp;
        resp.code = 404;
        for (auto allowedImg : allowed) {
            if (allowedImg == img) {
                std::ifstream imgFile("templates/" + img, std::ios::binary);
                resp = crow::response(std::string(std::istreambuf_iterator<char>(imgFile), std::istreambuf_iterator<char>()));
                imgFile.close();
                resp.code = 200;
                return resp;
            }
        }
        return resp;
    });
};

Page imgRequest(handler);

#endif //LOMBARDYPOLLUTIONANALYZER_IMGREQUEST_H
