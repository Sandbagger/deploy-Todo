const express = require('express'),
    router = express.Router(),
    db = require('../models'),
    util = require('../util/todo');

router.route('/')
    .get(util.getTodos)
    .post(util.createTodo)

    router.route('/:id')
    .delete(util.deleteTodo)
    .put(util.updateTodo)
//f

module.exports = router;