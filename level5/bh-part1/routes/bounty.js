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
 bountyRouter.route("/")
    .get((req,res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id= uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty} to the database!`)
    })
    .put("/:bountyId",(req,res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })
    .delete("/:bountyId",(req,res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send("Successfully removed that bounty")
    })





module.exports = bountyRouter