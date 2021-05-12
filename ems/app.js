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

var helmet = require("helmet");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

// setup csrf protection
var csrfProtection = csrf({cookie: true});

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

app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(req, res, next) {

    var token = req.csrfToken();

    res.cookie('XSRF-TOKEN', token);

    res.locals.csrfToken = token;

    next();
});

//get homepage
app.get("/", function(req, res){

    res.render("index", {

        message: "XSS Prevention Example",

        title: "Home page"
    });

});

//about file
app.get('/about', function(req, res){
    
    res.render("About", {
        title: "About"
    });
});

//contact file
app.get('/contact', function(req, res){

    res.render('contact', {
        title: "Contact Us"
    });
});

//get the list file. 
app.get('/list', function(req, res){

    res.render('list',{

        title: "Employee Records"
    });
});

//new file. 
app.get('/new', function(req, res){

    res.render('new',{

        title: "New",

        message: "Please enter your first and last name..."
    });
});

//Form for persons first and last name. 
app.post("/process", function(req, res) {

    console.log(req.body.txtName);

    if (!req.body.firstName) {

        res.status(400).send("You must enter a first name.");

        return; 
    }

    if (!req.body.lastName) {

        res.status(400).send("You must enter a last name.");

        return; 
    }

    var firstName = req.body.firstName;

    var lastName = req.body.lastName;

    var employee = new Employee({

        firstName: firstName,

        lastName: lastName
    });

    employee.save(function (error) {

        if (error) throw error;

        console.log(firstName + lastName + " your entry is saved!")
    });
    res.redirect("/");

});

//get list page. 
app.get("/list", function(req, res) {

    Employee.find({}, function(error, employees) {

        if (error) throw error;

        res.render("list", {

            title: "Employee List",

            employees: employees
        });
    });
});

http.createServer(app).listen(3001, function() {

    console.log("Application started and listening on port 3001!");

});