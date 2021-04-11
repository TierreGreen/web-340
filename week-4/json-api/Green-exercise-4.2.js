/**
 * Title: JSON-APIs 
 * Author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date : April 10, 2021
 * Description: Get request for for JSON Object
 */

//express require statement

var express = require("express");

var logger = require("morgan");

var http = require("http");


var app = express();

app.use(logger("dev"));

app.get("/customer/:id",function(req, res) {

    var id = parseInt(req.params.id, 10);

    res.json({
        firstName: "Tierre",

        lastNmae: "Green",

        email: "tierre.green@gmail.com",

        address: "3909 Reserve Drive, Apt. 133",

        city: "Tallahassee",

        state: "Florida",

        zip: "32311",

        employeeId: id,
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started on port 3000')

});