//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors
var options = { keepAlive: 300000, connectTimeoutMS: 30000, useNewUrlParser: true};
mongoose.connect("mongodb://todo:2a4b1c@ds261253.mlab.com:61253/heroku_081pxq13", options);

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");