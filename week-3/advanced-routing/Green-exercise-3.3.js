/**
 * Title: Exercise 3.3
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: April 4, 2021
 * description: 3.3 exercise
 *  
 * */


var express = require("express");

var http = require("http");
 
var path = require("path");
 
var logger = require("morgan");
 
var app = express();
 
app.set("views", path.resolve(__dirname, "views"));
 
app.set("view engine", "ejs");
 
app.use(logger("dev"));
 
app.get("/:employeeId", function(req, res) {
 
    var employeeId = parseInt(req.params.employeeId, 10);
 
    res.render("index", {
 
         employeeId: employeeId
 
    })
 
 });
 
  http.createServer(app).listen(8080, function() {
 
    console.log("Application started on port 8080");
 
 });