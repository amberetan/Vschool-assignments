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
    Issue.findOne({ _id: req.params.issueId, user: req.user._id}, (err, issue) =>{
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




module.exports = issueRouter