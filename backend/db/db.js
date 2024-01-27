const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.M_KEY)

    .then(() => {
        console.log("connected to db");
    })
    .catch((error) => {
        console.log(error)
    })

const TodoShema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = new mongoose.model('todos', TodoShema)

module.exports = Todo