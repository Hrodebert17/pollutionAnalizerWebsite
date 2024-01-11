#ifndef LOMBARDYPOLLUTIONANALYZER_ROUTES_H
#define LOMBARDYPOLLUTIONANALYZER_ROUTES_H
#include <iostream>
#include <crow.h>
#include <vector>



class Page {
public:
    Page (std::function<void(crow::SimpleApp &website)> function);

    void start(crow::SimpleApp &website);
private:
    std::function<void(crow::SimpleApp &website)> registerLambda;
};

// when this function is called it will register all the pages.
void registerPages(crow::SimpleApp &website);

#endif //LOMBARDYPOLLUTIONANALYZER_ROUTES_H
