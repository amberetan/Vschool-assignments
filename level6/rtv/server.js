const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 6500

//middleware
app.use(morgan("dev"))
app.use(express.json())

//connect to database
mongoose.connect(
    "mongodb://localhost:27017/rockthevote",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(err) throw err
        console.log("Connected to the database")
    }
)

//routes
app.use("/api", expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))

//error handling
app.use((err, req, res, next) => {
    console.error(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ message: err.message })
})

//listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})