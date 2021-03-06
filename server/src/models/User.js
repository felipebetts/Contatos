
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contacts: {
        type: [Object],
        default: []
    }
})

module.exports = mongoose.model('User', schema, 'user')