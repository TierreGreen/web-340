/**
 * Title: App.js file for Milestone
 * Author: Professor Krasso
 * Modified by: Tierre Green
 * Description: Milestone App.js file
 */


var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoDB = "mongodb+srv://TGreen3023:*****@buwebdev-cluster-1.bxuwh.mongodb.net/test?authSource=admin&replicaSet=atlas-7omegc-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

const Employee = require("./models/employee");



app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

//get the contact file. 
app.get('/list', function(request, response){
    response.render('list',{
        title: "Employee Records"
    });
}); 


http.createServer(app).listen(3001, function() {

    console.log("Application started and listening on port 3001!");

});