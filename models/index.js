//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors
 
 
var mongodbUri = 'mongodb://todo:2a4b1c@ds261253.mlab.com:61253/heroku_081pxq13'

// Reference .env vars off of the process.env object
mongoose.connect(mongodbUri, function(err, db) {
  if(!err) {
    console.log("We are connected to db");
  }
})
mongoose.set('debug', true); //catches errors
   
const conn = mongoose.connection;             
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");