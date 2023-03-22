const logs = require('../models/logs')

// Load the fruit model
const Log = require('../models/logsModel')

module.exports.index = async (req, res) => {
    const logs = await Log.find()
    res.render('./Index', { logs: logs })
}

module.exports.new = async (req, res) => {
    res.render('./New')
}

module.exports.delete = async (req, res) => {
    try{
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch(err) {
        res.send(err.message)
    }
}

module.exports.update = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }

    try {
        // pass the id to find the document in the db and the form data (req.body) to update it
        await Log.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/logs/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.send(err.message)
   }
}

module.exports.create = async (req, res) => {

    if (req.body.shipIsBroken) {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    
    try{
        const log = await Log.create(req.body)
        console.log(log)
        res.redirect('/logs')
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.edit = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        res.render('./Edit', { log: log })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    } 
}

module.exports.show = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        res.render('./Show', { log: log})
    } catch(err) {
        console.log(err.message)
    }
}

// POST /fruits/seed
module.exports.seed = async (req, res) => {
    console.log('POST /logs/seed')

    try {
        await Log.deleteMany({})
        await Log.create(logs)
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

// DELETE /fruits/clear
module.exports.clear = async (req, res) => {
    console.log('DELETE /logs/clear')

    try {
        await Log.deleteMany({})
        res.redirect('/logs')
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}