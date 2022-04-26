const express = require ('express')
const commentRouter = express.Router()
const Comment = require("../models/comment")

//get all comments
    commentRouter.get("/", (req, res, next) =>{
        Comment.find((err, comments) =>{
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(comments)
        })
    })

//get comments for an issue
    commentRouter.get("/:issueId", (req, res, next) =>{
        Comment.find({ issue: req.params.issueId })
        .populate('user')
        .exec((err, comments) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send(comments)
        })
    })

//add comment to post
    commentRouter.post("/:issueId", (req, res, next) => {
        req.body.user = req.user._id
        req.body.issue = req.params.issueId
        const comment = new Comment(req.body)
        comment.save(function(err, newComment){
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newComment)
        })
    })
//edit comment
commentRouter.put("/:commentId", (req,res,next) => {
    Comment.findOneAndUpdate(
        { _id:req.params.commentId, user: req.user._id },
        req.body,
        { new: true },
        (err, comment) => {
            if(err){
                console.log("There was an error submitting the edits.")
                res.status(500)
                return next(err)
            }
            return res.send(comment)
        }
    )
})


//delete comment
commentRouter.delete("/:commentId", (req,res,next) => {
    Comment.findOneAndRemove({ _id: req.params.commentId, user: req.user._id}, (err, comment) =>{
         if(err){
            res.status(500)
            return next(err)
        }
        return res.send(comment)
    })
       
})


module.exports = commentRouter