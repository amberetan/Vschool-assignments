const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/crudstoredb', () => console.log("Connected to the database"))

app.use("/inventory", require("./routes/inventory.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7700, () => {console.log("Server is running on 7700")})