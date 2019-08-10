const express = require('express')

const routes = express.Router()

const countryController = require('./app/controllers/CountryController')

routes.get('/country/name/:countryName', countryController.getCountryByName)

routes.get('/country/all', countryController.getAllCountries)

module.exports = routes
