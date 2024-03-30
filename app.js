const http = require('http')
const file_system = require('fs');
const port = 8000

console.log("defined the server.")

const server = http.createServer((request,response) => {
    let page = request.url  

    if ( page === "/" || page === "/home" ) {
            file_system.readFile("./assets/home.html",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/html")
            response.write(html)
            response.end();
        })
        return
    } 
    else  
    if ( page === "/home.js") {
        file_system.readFile("./assets/home.js",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/javascript")
            response.write(html)
            response.end();
        })
        return
    }
    else
    if ( page === "/home.css") {
        file_system.readFile("./assets/home.css",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "image/png")
            response.write(html)
            response.end();
        })
        return
    }  
    else
    if ( page === "/img/home_icon.png") {
        file_system.readFile("./assets/home_icon.png",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "image/png")
            response.write(html)
            response.end();
        })
        return
    }  
    else 
    if ( page === "/img/icon.png") {
        file_system.readFile("./assets/icon.png",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "image/png")
            response.write(html)
            response.end();
        })
        return
    }  
    if ( page === "/img/menu.png") {
        file_system.readFile("./assets/menu.png",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "image/png")
            response.write(html)
            response.end();
        })
        return
    }  

    response.statusCode = 404;
    response.write("404, page not found!")
    response.end();
})

server.listen(port);

console.log("listening on port " + port)