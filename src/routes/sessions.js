const express = require('express')

const routes = express.Router()

const sessionController = require('../app/controllers/SessionController')

// Session routes

routes.post('/', sessionController.store)

module.exports = routes
