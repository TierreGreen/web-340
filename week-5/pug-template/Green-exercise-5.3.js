/**
 * TItle: Exercise 5.3
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * date: April 18, 2021
 * description: Require statements and app setup.
 */

//require statements
var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");


//app setup
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("index",{

        message: "Welcome to my Pug where we do excellent work!"
    });
});


http.createServer(app).listen(3004, function() {
    console.log("Application started on port 3004!");
    
});
