const mongoose = require("mongoose")
const Schema = mongoose.Schema


const tripSchema = new Schema({
    title: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: Date
    },
    good: {
        type: String
    },
    bad: {
        type: String
    },
    rememberNextTime: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Trip", tripSchema)