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
        imgURL: "https://upload.wikimedia.org/wikipedia/en/a/a4/General_Hux_Star_Wars.jpg",
        _id: uuidv4(),
    },
    {
        firstName: "Moff",
        lastName: "Tarkin",
        isLiving: true,
        bountyAmount: 100,
        type: "Sith",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png",
        _id: uuidv4(),
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        isLiving: false,
        bountyAmount: 1000,
        type: "Sith",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png",
        _id: uuidv4(),
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        isLiving: false,
        bountyAmount: 1000,
        type: "Sith",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Darth_Vader_in_The_Empire_Strikes_Back.jpg",
        _id: uuidv4(),
    },
    {
        firstName: "Kylo",
        lastName: "Ren",
        isLiving: true,
        bountyAmount: 2000,
        type: "Sith",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/3/34/Kylo_Ren.png",
        _id: uuidv4(),
    },
    {
        firstName: "Sheev",
        lastName: "Palpotine",
        isLiving: true,
        bountyAmount: 10000,
        type: "Sith",
        imgURL: "https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png",
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
        res.send(newBounty)
    })

bountyRouter.put("/:bountyId",(req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})
bountyRouter.delete("/:bountyId",(req,res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully removed that bounty")
})





module.exports = bountyRouter