const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo.cjs')



// Post

router.post('/addTodo', async(req, res) => {
    const { userId, title, completed } = req.body
    const newTodo = new Todo(
        { userId, title, completed }
    )
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
})

// Get 

router.get('/getTodo', async(req, res) => {
    const userId = req.query.userId
    try {
        const todos = await Todo.find({userId : userId})
        res.json({todos})
    }catch(e) {
        console.log(e);
    }
})

module.exports = router