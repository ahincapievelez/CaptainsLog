require('dotenv').config()

const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

// Load the log model
const Log = require('./models/logs')
console.log(Log)

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

// Load the method-override middleware
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to the Captain App')
})

app.get('/logs', async (req, res) => {
    const logs = await Log.find()
    res.render('./Index', { logs: logs })
})

app.get('/logs/new', (req, res) => {
    res.render('./New')
})

app.delete('/logs/:id', async (req, res) => {
    try{
        await Log.findByIdAndDelete(req.params.id)
        res.redirect('/logs')
    } catch(err) {
        res.send(err.message)
    }
})

app.get('/logs/:id', async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        res.render('./Show', { log: log})
    } catch(err) {
        console.log(err.message)
    }
})

app.post('/logs', async (req, res) => {

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
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

