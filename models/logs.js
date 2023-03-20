const mongoose = require('mongoose')

const Schema = mongoose.Schema

const logsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    entry: {type: String},
    shipIsBroken: {type: Boolean}
}, {timestamps: true})

const Log = mongoose.model('logs', logsSchema)

module.exports = Log