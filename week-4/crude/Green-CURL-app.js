/**
============================================
; Title:  app.js
; Author: Professor Richard Krasso
; Modified by: Tierre Green
; Date:  April 10, 2021
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

const express = require("express");

const http = require("http");

let logger = require("morgan");

let app = express();

app.set("port", process.env.PORT || 3000);

app.use(logger('dev'));

//http get request
app.get("/", function(req, res) {
    
    res.send("API invoked as an HTTP GET Request.");
});

//HTTP PUT request
app.put("/", function(req, res) {

    res.send("API invoked as an HTTP PUT Request.");
});

//http POST request
app.post("/", function(req, res) {

    res.send("API invoked as an HTTP POST Request.");
});

//HTTP Delete Request
app.delete("/", function(req, res) {

    res.send("API invoked as an HTTP DELETE Request.");
});

//create server
http.createServer(app).listen(app.get("port"), function() {
    console.log(`Application started and is listening on port ${app.get("port")}`);
});


