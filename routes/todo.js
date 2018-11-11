const express = require('express'),
    router = express.Router(),
    db = require('../models'),
    util = require('../util/todo');

router.route('/')
    .get(util.getTodos)
    .post(util.createTodo)

router.delete('/:id', util.deleteTodo);


module.exports = router;