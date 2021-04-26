//require
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');


var mongoDB = 'mongodb+srv://TGreen3023:Nebraska%21Huskers%2330@buwebdev-cluster-1.bxuwh.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.promise = global.promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to MongoDB');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function() {
    console.log('Application started listening on port 5000');
});