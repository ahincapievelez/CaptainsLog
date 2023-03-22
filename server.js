require('dotenv').config()

const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const logs = require('./models/logs')

// Load the log model
const Log = require('./models/logsModel')
console.log(Log)

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

// Load the method-override middleware
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

const logRoutes = require('./routes/logRoutes')

app.use('/logs', logRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Captain App')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

