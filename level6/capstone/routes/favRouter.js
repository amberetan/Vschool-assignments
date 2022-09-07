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
        (err, addFav) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(addFav)
        }

    )
})
favRouter.put("remove/:userId", (req,res,next) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        {
            $pull: {favorites: req.body},
        },
        { new: true},
        (err, removeFav) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(removeFav)
        }

    )
})

module.exports = favRouter