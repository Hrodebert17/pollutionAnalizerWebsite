// importiamo i moduli necessari
const http = require('http')
const file_system = require('fs');
// creiamo la variabile port come una costante
const port = 8000

console.log("defining the server.") // diciamo all'utente che il server sta venendo definito
// definiamo il server
const server = http.createServer((request,response) => {
    // salviamo la richiesta in una variabile
    let page = request.url  

    // avvertiamo l'utente in console che è stata ricevuta una richesta per una pagina
    console.log("recived a request for: " + page+ "from " + request.socket.remoteAddress)

    // gestiamo la richiesta in base a cosa contiene 
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
    if (page === "/inquinamento" ) {
        file_system.readFile("./assets/inquinamento.html",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/html")
            response.write(html)
            response.end();
        })
        return
    } 
    if (page === "/sostanze_inquinanti" ) {
        file_system.readFile("./assets/sostanze_inquinanti.html",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/html")
            response.write(html)
            response.end();
        })
        return
    } 
    if (page === "/effetti" ) {
        file_system.readFile("./assets/effetti.html",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/html")
            response.write(html)
            response.end();
        })
        return
    } 
    if (page === "/sitografia" ) {
        file_system.readFile("./assets/sitorafia.html",function(error,html) {
            response.statusCode = 200
            response.setHeader("Content-Type", "text/html")
            response.write(html)
            response.end();
        })
        return
    } 
    else
    if (page === "/inquinamento1.png" ) {
        file_system.readFile("./assets/inquinamento1.png",function(error,html) {
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

    // se nessuna pagina con quel nome esiste gti mandiamo una risposta con status code 404 (page not found)
    response.statusCode = 404;
    response.write("404, page not found!")
    response.end();
})

// avvertiamo l'utente che il server è stato definito
console.log("the server was defined.")
// diciamo al server di ascoltare per eventuali richieste tramite la porta definita prima
server.listen(port);

// avvertiamo l'utente che il server è pronto per l'uso
console.log("listening on port " + port)
