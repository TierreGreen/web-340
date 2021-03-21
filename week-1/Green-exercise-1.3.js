/**
 * Title: Exercise 1.3
 * Author: Professor Richard Krasso
 * Date: March 21, 20221
 * Modified by: Tierre Green
 * Description: node file parsed URL
 */

//url required code
var url = require('url');

//url to be parsed and debugged
var parsedURL = url.parse('https://tierregreen.github.io/web-231/?name=green');

//parsed URL console.log protocol host and query
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);