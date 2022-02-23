const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    length: Number,
    price: {
        type: Number,
        required: true
    },
    description: String

})

module.exports = mongoose.model("Inventory", inventorySchema)