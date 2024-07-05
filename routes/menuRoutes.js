const express = require("express")
const MenuItem = require("../models/Menu")
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const menuItemReq = req.body
        const response = await MenuItem(menuItemReq).save()
        res.status(200).json(response)
        console.log(menuItem)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

router.get("/", async (req, res) => {
    try {
        const menuItemList = await MenuItem.find()
        res.status(200).json(menuItemList)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const menuItemId = req.params.id
        const response = await MenuItem.findByIdAndDelete(menuItemId)
        console.log(response)
        res.status(200).json({ message: `${response?.name} item delete sucessfully` })
    } catch (err) {
        res.status(200).json({ err: err.message })
    }

})
module.exports = router