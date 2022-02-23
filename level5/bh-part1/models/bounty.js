const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isLiving: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        enum: ['jedi','sith', 'Jedi', 'Sith']
    },
    imgURL: String,
})

module.exports = mongoose.model('Bounty', bountySchema)