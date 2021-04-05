/**
* title: Morgan Logging
* Author: Professor Richard Krasso
* Modified by: Tierre Green
* March 4, 2021
* Description: Morgan logging example
*/

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(_dirname, "views")); //Tell Express the views are in the views directory

app.set("view engine", "ejs"); // Tell Express to use the ejs view engine

app.use(logger("dev"));

app.get("/", function(req, res) {

    res.render("index", {
        message: "I am working really hard!"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});