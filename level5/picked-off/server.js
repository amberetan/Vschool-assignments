const express = require('express')
const app = express()

app.use(express.json())


const objectOfAnyKind = {
    name: "Bambi",
    brand: "Disney",
    genre: "fantasy"
}

const { middleware1 } = require("./separate.js")


app.get("/test", middleware1, (req,res,next) => {
    console.log("test successful")
    console.log(req.body)
    res.send(objectOfAnyKind)
})

app.listen(7500, () => {console.log("Server is running on 7500")})