//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
require('dotenv').config();

// Reference .env vars off of the process.env object
MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }

mongoose.set('debug', true); //catches errors
   
const conn = mongoose.connection;             
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");