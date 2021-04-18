/**
 * Title: if-else-render
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date : April 17, 2021
 * Description: request for composers if else render
 */

//requires statement
var express = require('express');
var http = require('http');
var path = require('path');


//app function
var app = express();
app.set('views', path.resolve(_dirname, 'views'));
app.set('view engine', 'ejs');

//local composer array
var composer = [
    "bach",
    "Mozart",
    "Beethoven",
    "Verdi",
];


//routes
app.get('/', function(req, res) {
    res.render('index', {
        names: composers
    });
});

//create server
http.createServer(app).listen(3002, function() {
    console.log('Application started and listening on port 3002')

});
