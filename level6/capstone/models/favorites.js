const mongoose = require("mongoose")
const Schema = mongoose.Schema


const favoritesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    webURL: [{
        type: URL
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Favorites", favoritesSchema)