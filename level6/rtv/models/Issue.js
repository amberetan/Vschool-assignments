const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    upVoteUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User" 
    }],
    downVoteUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    voteTotal: {
        type: Number
    }
})

// issueSchema.pre('save', function(next){
//     this.voteTotal = this.upVoteUsers.length - this.downVoteUsers.length
//     console.log(this.voteTotal)
//     next()
// })

module.exports = mongoose.model("Issue", issueSchema)