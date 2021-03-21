var url = require('url');

var parsedURL = url.parse('https://tierregreen.github.io/web-231/?name=green');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);