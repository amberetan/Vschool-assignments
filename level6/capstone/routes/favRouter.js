const express = require("express")
const favRouter = express.Router()
const User = require("../models/user")

//favorites
favRouter.put("add/:userId", (req,res,next) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        {
            $addToSet: {favorites: req.body},
        },
        { new: true},
        (err, upVote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(upVote)
        }

    )
})
favRouter.put("remove/:userId", (req,res,next) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        {
            $pull: {downVoteUsers: req.body},
        },
        { new: true},
        (err, upVote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(upVote)
        }

    )
})

module.exports = favRouter