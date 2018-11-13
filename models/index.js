//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors

       
 
var mongodbUri = 'mongodb://todo:2a4b1c.mlab.com:63779/heroku_wmgdfcm5';

mongoose.connect(mongodbUri, {
    useMongoClient: true
});
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");