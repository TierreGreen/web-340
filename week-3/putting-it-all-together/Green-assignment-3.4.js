/**
 * Title: Putting it all together
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date April 4, 2021
 * description: Js file for assignment 3.4
 */

 var express = require("express"); // require express variable

 var http = require("http"); // require http variable
 
 var path = require("path"); // path variable require
 
 var logger = require("morgan");//morgan logger variable
 
 var app = express();//app
 
 app.set("views", path.resolve(__dirname, "views"));//tells app to look for files in views directory
 
 app.set("view engine", "ejs");
 
 app.use(logger("dev"));
 
 app.get("/", function(req, res) {
 
     res.render("index", {
 
         message: "home page"
 
     });
 
 });
 
 app.get("/about", function(req, res) {
 
     res.render("about", {
 
         message: "about page"
 
     });
 
 });
 
 app.get("/contact", function(req, res) {
 
     res.render("contact", {
 
         message: "contact page"
 
     })
 
 });
 
 app.get("/products", function(req, res) {
 
    res.render("products", {
 
        message: "products page"
 
    });
 
 });
 
 http.createServer(app).listen(3000, function() {
 
    console.log("Application started on port 3000.");
 
 });