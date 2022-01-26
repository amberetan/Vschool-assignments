const { strikethrough } = require('chalk')
const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');



app.use(express.json())

//data
const bounties = [
    {
        firstName: "",
        lastName: "",
        isLiving: true,
        bountyAmount: 100,
        type: "Sith",
        _id: uuidv4(),
    }
]


//routes
app.use("/bounty", require("./routes/bountyjs"))

app.listen(7000, () => {console.log("Server is Running at 7000")})