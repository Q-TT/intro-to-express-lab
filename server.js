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


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
app.get("/roll/:number", (req,res) => {
    const num = parseInt(req.params.number)
    if (isNaN(num)) {
        res.send("You must specify a number.")
        
    } else {
        res.send(`here is your random number ${getRandomInt(num)}`)
    }
})


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


//task 4 bellow
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get("/shoes", (req,res) => {
    const minPrice = req.query['min-price']
    const maxPrice = req.query['max-price']
    const type = req.query.type

    const allFilteredShoes = shoes.filter((shoe) => shoe.type === type && shoe.price >= minPrice && shoe.price <= maxPrice) 
    const typeFilteredShoes = shoes.filter((shoe) => shoe.type === type) 
    const minPriceFilteredShoes = shoes.filter((shoe) => shoe.price >= minPrice)
    const maxPriceFilteredShoes = shoes.filter((shoe) => shoe.price <= maxPrice)
   
        
    if(!minPrice && !maxPrice && !type) {
        res.send(shoes)
        console.log(shoes)
    } else if (minPrice && maxPrice && type) {
        res.send(allFilteredShoes)
        console.log(allFilteredShoes)
    } else if (!minPrice && !maxPrice && type) {
        res.send(typeFilteredShoes)
        console.log(typeFilteredShoes)
    } else if (minPrice && !maxPrice && !type) {
        res.send(minPriceFilteredShoes)
        console.log(minPriceFilteredShoes)
    } else if (!minPrice && maxPrice && !type) {
        res.send(maxPriceFilteredShoes)
        console.log(maxPriceFilteredShoes)
    }
})
