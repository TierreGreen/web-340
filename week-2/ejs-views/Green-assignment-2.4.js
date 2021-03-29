/**
 * Title: Assignment-2.4-EJS Views
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: March 28, 2021
 * description: EJS views JS file for web-340
 */

//require module for express and http and path
const http = require('http');

const express = require('express');

const path = require('path');

let app = express();

//Tell express that the views are in the ejs-views directory
app.set('views', path.resolve(__dirname, '/views')); 

//tells express to use the EJS view engine
app.set('view engine', 'ejs');

app.set("port", process.env.PORT || 3000);

app.get('/', function(req, res){

    res.render('index',{
        message: "Welcome to the homepage!",
        firstName: "Tierre",
        lastName: "Green",
        address: "1234 Main Street",

    });

});

http.createServer(app).listen(app.get("port"), function() {
    console.log(`EJS-Views app started on port ${app.get("port")}`);

});

