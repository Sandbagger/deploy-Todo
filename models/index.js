//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors
 
const dbDriver = process.env.MONGODB_URI || "mongodb://localhost/todo-api";

// Reference .env vars off of the process.env object
mongoose.connect(dbDriver, function(err, db) {
  if(!err) {
    console.log("Connected to " + dbDriver);
  }
})
mongoose.set('debug', true); //catches errors
   
const conn = mongoose.connection;             
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");