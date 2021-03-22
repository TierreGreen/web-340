/**
 * TItle: Assignment 1.5 Hello World
 * Author: Professor Richard Krasso
 * Date: March 21, 2021
 * Modified By: Tierre Green
 * Description: Assignment 1.5 Hello World
 */

//Variable declaration:
var http = require('http');

http.createServer(function(req, res){

  res.writeHead( 200, { "content-Type" : 'text/plain' } )
  res.end('My world is all over the map.');

}).listen(1337);