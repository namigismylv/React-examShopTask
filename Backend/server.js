const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
require("dotenv").config()

const homesSchema = mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: false
    }
})
const homes = mongoose.model("home", homesSchema)

app.get("/home", async (req, res) => {
    const target = await homes.find()
    res.send(target)
})
app.get("/home/:id", async (req, res) => {
    const { id } = req.params
    const target = await homes.findById(id)
    res.send(target)
})
app.delete("/home/:id", async (req, res) => {
    const { id } = req.params
    await homes.findByIdAndDelete(id)
    const local = await homes.find()
    res.send(local)
})
app.post("/home", async (req, res) => {
    const { image, title, desc, price } = req.body
    const newHomes = new homes({ image: image, title: title, desc: desc, price: price })
    const target = await newHomes.save()
    res.send(target)
})
app.put("/home/:id", async (req, res) => {
    const { image, title, desc, price } = req.body
    const { id } = req.params
    const target = await homes.findByIdAndUpdate(id, { ...req.body })
    res.send(target)
})
mongoose.connect(process.env.CS).then((res) => {
    console.log("db connected");
})
app.listen(process.env.PORT, (req, res) => {
    console.log("bu server işləyir");
})