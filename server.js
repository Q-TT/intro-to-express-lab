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


//task 2 below
//you need either manually code the random fucntion or import a library to the server, given the function is simple you should totally just wirt the function


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
// app.get("/roll/:number", (req,res) => {
//     const num = parseInt(req.params.number)
//     if (typeof num === "NaN") {
//         res.send("You must specify a number.")
        
//     } else {
//         res.send(`here is your reandom number ${getRandomInt(num)}`)
//     }
// })


//task 3 bellow
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
app.get("/collectibles/:index", (req,res) => {
    if (req.params.index >= 0 && req.params.index < collectibles.length) {
        res.send(`So, you want the ${collectibles[req.params.index].name}? For ${collectibles[req.params.index].price}, it can be yours! `)
    } else {
        res.send(`This item is not yet in stock. Check back soon!`)
    }
})


