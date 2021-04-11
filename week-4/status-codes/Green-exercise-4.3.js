/**
 * Title: Exercise 4.3 Status Codes
 * Author: Professor Richard Krasso
 * Modified By: Tierre Green
 * Date: April 10, 2021
 * Description: Setting status codes exercise 4.3
 */

const { response } = require("express");
var express = require("express");

var http = require("http");

var logger = require("morgan");

var app = express();

app.use(logger('dev'));

app.get("/not-found", function(req, res) {

    res.status(404);

    res.json({
        error: "Resource was not found."
    })
});

app.get("/ok", function(req, res) {

    res.status(200);

    res.json({

        message:"Page was loaded correctly."
    })

});

app.get("/not-implemented", function(req, res) {

    res.status(501);

    res.json({

        error:"Page was not implemented."

    })
});

http.createServer(app).listen(8080, function() {

    console.log("Application is started and listening on port 8080!");

});