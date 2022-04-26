const express = require ('express')
const issueRouter = express.Router()
const Issue = require("../models/issue")

//get all issues by all users
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(issues)
    })
})

//get all issues by user
issueRouter.get("/:user", (req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(issues)
    })
})

//get issue by id
issueRouter.get("/:user/:issueId", (req, res, next) => {
    Issue.findOne({ user: req.user._id, _id: req.params.issueId }, (err, issue) =>{
        if(err){
            res.status(500)
            return next(err)
        } else if (!issue) {
            res.status(404)
            return next(new Error("No such issue found."))
        }
        return res.status(201).send(issue)
    })
})

//post new issue
issueRouter.post("/", (req, res, next) => {
    const issue = new Issue(req.body)
    issue.user = req.user._id
    issue.save((err, newIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newIssue)
    })
})

//edit an issue
issueRouter.put("/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.user._id },
        req.body,
        { new: true},
        (err, issue) => {
            if (err) {
                console.log("There was an error submitting the edits.")
                res.status(500)
                return next(err)
            }
            return res.send(issue)
        }
    )
})

//delete an issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndRemove({ _id: req.params.issueId, user: req.user._id }, (err, issue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(issue)
    })
})

//upvotes and downvotes
issueRouter.get("/upvote", (req,res,next) =>{
    Issue.find((err, votes) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(votes)
    })
})

issueRouter.put("/upvote/:issueId", (req,res,next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: {upVoteUsers: req.user._id},
            $pull: {downVoteUsers: req.user._id},
            // $set: {voteTotal: {$subtract: [upVoteUsers.length, downVoteUsers.length]}}

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

issueRouter.put("/downvote/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        {
            $addToSet: {downVoteUsers: req.user._id},
            $pull: {upVoteUsers: req.user._id},
            // $set: {voteTotal: {$subtract: [upVoteUsers.length, downVoteUsers.length]}}
        },
        {new:true},
        (err, downVote) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(downVote)
        }
    )
})
// issueRouter.put("/votes", (req,res,next) => {
//     Issue.updateMany(
//         {},
//         {
//             $set: {voteTotal: {$subtract: [upVoteUsers.length, downVoteUsers.length]}}
//         },
//         {new:true},
//         (err, totalVotes) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(totalVotes)
//         }
//     )
// })
// issueRouter.put("/vote/:issueId", (req, res, next) => {
//     Issue.findOneAndUpdate(
//         { _id: req.params.issueId, user: req.user._id },
//         { $set: {voteTotal: req.body }}, 
//         { new: true},
//         (err, issue) => {
//             if (err) {
//                 console.log("There was an error calculating votes")
//                 res.status(500)
//                 return next(err)
//             }
//             return res.send(issue)
//         }
//     )
// })

module.exports = issueRouter