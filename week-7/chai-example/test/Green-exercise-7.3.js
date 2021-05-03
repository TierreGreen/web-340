/**
 * Title: exercise 7.3 Mocha Chai
 * author: Professor Richard Krasso
 * Modified by: Tierre Green
 * Date: May 2, 2021
 * description: JS file for TDD test
 */

var fruits = require("../Green-fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits("Apple,Orange,Mango");

        assert(Array.isArray(f));
    });
});