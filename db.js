const mongoose = require('mongoose')
const mongooseURL = "mongodb://localhost:27017/hotels"
mongoose.connect(mongooseURL)


const db = mongoose.connection

db.on('connected', () => {
    console.log('Connected to MongoDB server')
})
db.on('error', (err) => {
    console.log(`MongoDB server error- ${err}`)
})
db.on('disconnected', () => {
    console.log('MongoDB server disconnected')
})

"export the DB connection"
module.exports = db
