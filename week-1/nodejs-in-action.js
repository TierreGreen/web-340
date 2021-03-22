/**
 * TItle: Assignment 1.5 Hello World
 * Author: Professor Richard Krasso
 * Date: March 21, 2021
 * Modified By: Tierre Green
 * Description: Assignment 1.5 Hello World
 */

//Variable declaration:

const { Server } = require("engine.io");
let http = require("http");

function processRequest(request, response) {

let body = "Hello World! Tierre is really starting to learn some code now! Thanks Professors!";

    let contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    response.end(body);

}

let server = http.createServer(processRequest);

server.listen(8080);


