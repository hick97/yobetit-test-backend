const express = require('express')

const routes = express.Router()

const machineController = require('../app/controllers/MachineController')
const authMiddleware = require('../app/middlewares/auth')

// Machine routes

routes.use(authMiddleware)

routes.get('/', machineController.index)

module.exports = routes
