const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true
    },
    address: {
        type: String,

    }

})

const Person = mongoose.model("Person", personSchema)

module.exports = Person;