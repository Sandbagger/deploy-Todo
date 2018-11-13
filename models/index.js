//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.set('debug', true); //catches errors

       
 
var mongodbUri = 'mongodb://todo:2a4b1c.mlab.com:63779/heroku_wmgdfcm5';
=======
const dotenv = require('dotenv').config();
>>>>>>> 28c54d3490e334c4895843f3f4bdd820e50ce729

// Reference .env vars off of the process.env object
mongoose.connect(process.env.MONGODB_URI, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
})
mongoose.set('debug', true); //catches errors
   
const conn = mongoose.connection;             
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");