const express = require('express')

const routes = express.Router()

const countryController = require('./app/controllers/CountryController')

routes.get('/country/all', countryController.getAllCountries)

routes.get('/country/name/:countryName', countryController.getCountryByName)

routes.post('/country/names', countryController.getCountriesFromArray)

module.exports = routes
