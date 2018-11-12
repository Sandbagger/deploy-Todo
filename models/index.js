//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors
mongoose.connect("mongodb://thisShouldBeSecret:qwert1@ds063779.mlab.com:63779/heroku_wmgdfcm5");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");