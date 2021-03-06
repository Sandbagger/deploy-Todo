const db = require('../models');

module.exports = {
    getTodos: getTodos,
    createTodo: createTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
}

function getTodos (req, res){
    db.Todo.find()
    .then((todos)=>{
        res.json(todos)
    }).catch((err)=>{
        res.send(err);
    })
}

function createTodo (req, res){
    db.Todo.create(req.body)
    .then((todo)=>{
        res.status(201).json(todo)
    } )
    .catch((err)=>{
        res.send(err);
    })
}

function deleteTodo (req, res){
    db.Todo.remove({_id: req.params.id})
        .then(()=>{
            res.json({message: "Todo has been deleted"})
        })
        .catch((err)=>{
            res.send(err)
        })
}

function updateTodo (req, res){
    db.Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((t)=>{
            res.json(t)
        })
        .catch((err)=>{
            res.send(err)
        })
}
