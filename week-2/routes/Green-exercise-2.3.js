/**
 * Title: Green-exercise-2.3
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: March 28, 2021
 * description: Routing url functions
 */

//express moduel required
const { response } = require('express');
var express = require('express');

var http = require('http');

//call express function and starting app
var app = express();

//middleware response function for the homepage
app.get('/',function(req, res) {

    res.end('Welcome to the homepage!');

});

//middleware response function for the about page
app.get('/about',function(req, res) {
    
    res.end('Welcome to the about page!');

});

//middleware response function for the contact
app.get('/contact',function(req, res) {

    res.end('Welcome to the contact page!');

});

//middleware response function for the 404 response page
app.use(function(req, res) {

    res.statusCode = 404;

    response.end('404!');

});

//starting server and verifying response with console.log
http.createServer(app).listen(4000, function(){
    console.log('The Application runs on port %s', 4000);

});

