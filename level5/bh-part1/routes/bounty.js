const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

//data
const bounties = [
    {
        firstName: "Armitage",
        lastName: "Hux",
        isLiving: true,
        bountyAmount: 100,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "Moff",
        lastName: "Tarkin",
        isLiving: true,
        bountyAmount: 100,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        isLiving: false,
        bountyAmount: 1000,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        isLiving: false,
        bountyAmount: 1000,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "Kylo",
        lastName: "Ren",
        isLiving: true,
        bountyAmount: 2000,
        type: "Sith",
        _id: uuidv4(),
    },
    {
        firstName: "Sheev",
        lastName: "Palpotine",
        isLiving: true,
        bountyAmount: 10000,
        type: "Sith",
        _id: uuidv4(),
    }
    
]

//routes
bountyRouter.get("/", (req,res) => {
    res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id= uuidv4()
    bounties.push(newBounty)
    res.send(`Successfully added ${newBounty} to the database!`)
})






module.exports = bountyRouter