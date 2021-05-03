/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Modified By: Tierre Green
; Date: May 2, 2021
; Description: File for the employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, require: true},
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);