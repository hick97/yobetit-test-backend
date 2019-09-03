const express = require('express')

const routes = express.Router()

const countryController = require('../app/controllers/CountryController')

// Country routes

routes.get('/all', countryController.getAllCountries)

routes.get('/name/:countryName', countryController.getCountryByName)

routes.post('/names', countryController.getCountriesFromArray)

module.exports = routes
