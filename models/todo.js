const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
       type: String,
        required:"Name is a required field",
    },
    completed: {
        type: Boolean,
        default: false, // only need to update field if true
    },
    entry_date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;