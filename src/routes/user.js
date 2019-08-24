const express = require('express')

const routes = express.Router()

const userController = require('../app/controllers/UserController')

// User routes

routes.post('/', userController.store)

module.exports = routes
