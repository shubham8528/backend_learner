const express = require('express')
const db = require("./db")
const MenuItem = require("./models/Menu")

const Person = require('./models/Person')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const port = 3000
// db()
app.get("/", (req, res) => {
    res.send("Welcome To Our Node Lession")
})
const personRouter = require("./routes/personRoutes")
const menuItemRouter = require("./routes/menuRoutes")
app.use("/user", personRouter)
app.use("/menuItem", menuItemRouter)
app.listen(port, () => {
    console.log(`listen port number- ${port}`)
})