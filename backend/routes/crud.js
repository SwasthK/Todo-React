const express = require('express')
const Todo = require('../db/db')
const TodoRoutes = express.Router()

TodoRoutes.get('/todos', async (req, res) => {
    try {
        const todo = await Todo.find({})
        res.status(200).json({
            todo
        })
    } catch (error) {
        res.status.send("Todos cannot be fetched")
    }
})

TodoRoutes.post("/todos", async (req, res) => {
    const { title, description } = req.body;

    try {
        const addtodo = new Todo({
            title,
            description,
        });

        const doc = await addtodo.save();
        res.status(200).json({ doc });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Sorry something went wrong" });
    }
});


TodoRoutes.delete('/todos/:id', async (req, res) => {
    const deleteId = req.params.id
    try {
        const deleted = await Todo.deleteOne({
            _id: deleteId
        })
        res.status(200).json({
            message: "REQUEST DONE DELETE",
            dlt: deleted
        })
    } catch (error) {
        res.status(411).json({
            message: "Todo Cannot be Deleted"
        })
    }
})

TodoRoutes.put('/todos/:id', async (req, res) => {
    const updateId = req.params.id
    const { completed } = req.body
    const findtodo = await Todo.findOne({ _id: updateId })
    if (!findtodo) {
        return res.status(200).json({
            message: "Todo Cannot be found"
        })
    }
    try {
        await Todo.updateOne({
            _id: updateId
        }, { $set: { completed: completed } })

        res.status(200).json({
            message: "REQUEST DONE PUT"
        })
    } catch (error) {
        res.status(411).json({  
            message: "Todo Cannot be Updated"
        })
    }

})

module.exports = TodoRoutes