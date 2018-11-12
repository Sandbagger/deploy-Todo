//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://thisShouldBeSecret:qwert1@ds063779.mlab.com:63779/heroku_wmgdfcm5';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");