/**
 * Title: Green-exercise-2.2
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: March 28, 2021
 * description: hello world express app.
 */


//required express module
var express = require('express');
var http = require('http');

//express function called  to start express
var app = express();

//middle ware passing function through request handler
app.use(function(req, res) {
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');
})

//starts server and console log to verify response
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});