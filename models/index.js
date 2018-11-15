//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); 
 
const dbDriver = process.env.MONGODB_URI || "mongodb://localhost/todo-api";
console.log(dbDriver)
mongoose.connect(dbDriver, function(err, db) {
  if(!err) {
    console.log("Connected to " + dbDriver);
  }
})
   
const conn = mongoose.connection;             

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");