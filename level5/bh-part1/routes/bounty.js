const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../models/bounty.js")

//data
// const bounties = [
//     {
//         firstName: "Armitage",
//         lastName: "Hux",
//         isLiving: true,
//         bountyAmount: 100,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/a/a4/General_Hux_Star_Wars.jpg",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Moff",
//         lastName: "Tarkin",
//         isLiving: true,
//         bountyAmount: 100,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/Grand_Moff_Tarkin.png",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Darth",
//         lastName: "Maul",
//         isLiving: false,
//         bountyAmount: 1000,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/b/bf/Darth_Maul.png",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Darth",
//         lastName: "Vader",
//         isLiving: false,
//         bountyAmount: 1000,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Darth_Vader_in_The_Empire_Strikes_Back.jpg",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Kylo",
//         lastName: "Ren",
//         isLiving: true,
//         bountyAmount: 2000,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/3/34/Kylo_Ren.png",
//         _id: uuidv4(),
//     },
//     {
//         firstName: "Sheev",
//         lastName: "Palpotine",
//         isLiving: true,
//         bountyAmount: 10000,
//         type: "Sith",
//         imgURL: "https://upload.wikimedia.org/wikipedia/en/8/8f/Emperor_RotJ.png",
//         _id: uuidv4(),
//     }
    
// ]

//routes
//  bountyRouter.route("/")
//     .get((req,res) => {
//         res.send(bounties)
//     })
//     .post((req, res) => {
//         const newBounty = req.body
//         newBounty._id= uuidv4()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })

//Get All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(bounties)
    })
})

//Get One
bountyRouter.get("/:bountyId", (req, res, next) => {
    Bounty.findOne({ _id: req.params.bountyId}, (err, foundBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundBounty)
    })
})

//Post

bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//Delete One
bountyRouter.delete("/:bountyId",(req, res, next) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(`Successfully removed ${deletedBounty.firstName} ${deletedBounty.lastName}`)
    })
})

//Put
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate({ _id: req.params.bountyId }, req.body, {new: true}, (err, updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(200).send(updatedBounty)
    })
})



module.exports = bountyRouter