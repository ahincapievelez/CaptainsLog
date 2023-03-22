const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const logController = require('../controllers/logController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', logController.index)

router.get('/new', logController.new)

// // Setup a "clear" route for removing all data from fruits collection
router.delete('/clear', logController.clear)

// Setup a "delete" route for removing a specific fruit
router.delete('/:id', logController.delete)

// Setup a "update" route for updating a specific fruit
router.put('/:id', logController.update)

// // Setup a "seed" route for repopulating our database
router.post('/seed', logController.seed)

// Setup a "create" route for adding fruit data
router.post('/', logController.create)

// Setup a "edit" route for editing a fruit
router.get('/:id/edit', logController.edit)

// Setup an "show" route for fruits, attach it to router along with the controller logic
router.get('/:id', logController.show)

module.exports = router