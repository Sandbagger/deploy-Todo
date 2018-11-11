//When models dir is required it will look for this file first.
const mongoose = require('mongoose');
mongoose.set('debug', true); //catches errors
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");