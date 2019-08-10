const express = require('express')

const routes = express.Router()

const countryController = require('./app/controllers/CountryController')

routes.post('/', countryController.getCountryByName)

module.exports = routes
