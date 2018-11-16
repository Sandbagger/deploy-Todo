//When models is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); 
 
const dbDriver = process.env.MONGODB_URI || "mongodb://localhost/todo-api";

mongoose.connect(dbDriver, function(err, db) {
  if(!err) {
    console.log("Connected to " + dbDriver);
  }
})
               
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");