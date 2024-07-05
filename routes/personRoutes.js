const express = require('express')
const Person = require('../models/Person')
const router = express.Router()


router.post("/", async (req, res) => {
    try {
        const data = req.body
        const newPerson = Person(data)
        const response = await newPerson.save()
        console.log(response)
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(500).json(({ error: err }))
    }
    // console.log(req.body)

})
router.get("/", async (req, res) => {
    try {
        const data = await Person.find()
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json(({ error: err }))
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const person = req.params.id
        const data = await Person.findByIdAndDelete(person)
        res.status(200).json({ message: "deleted sucessfully", data: data })
    } catch (err) {
        res.status(500).json(({ error: err }))
    }
})
router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id
        const updatedPersonData = req.body
        const data = await Person.findByIdAndUpdate(personId, updatedPersonData, { runValidators: true })
        res.status(200).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json(({ error: err }))
    }
})

// router.post("/menuItem", async (req, res) => {
//     try {
//         const data = req.body
//         const menuItem = await MenuItem(data)
//         const response = await menuItem.save()
//         res.status(200).json(response)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(({ error: err }))
//     }
// })

router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType
        if (workType == "chef" || workType == "waiter" || workType == "manager") {
            const response = await Person.find({ work: workType })
            res.status(200).json(response)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(({ error: err }))
    }
})
module.exports = router
