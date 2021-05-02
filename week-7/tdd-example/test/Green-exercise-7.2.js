/**
 * Title: exercise 7.2 TDD in action
 * author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: May 2, 2021
 * description: JS file for TDD test
 */

var assert = require("assert");

describe("string#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });
});

function getFruits(str) {

    return str.split(',');

}

module.exports = getFruits;