// Import Express
const express = require('express')
// Create an Express app
const app = express()

app.listen(3000, () => {
    console.log("listening port on 3000")
})

app.get("/", (req,res) => {
    res.send("<h1>This is home page</h1>")
})


//task 1 below
app.get("/greetings/:username", (req,res) => {
    res.send(`Hello there, ${req.params.username}`)
})


