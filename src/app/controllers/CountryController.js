const axios = require('axios')
const BASE_URL = 'https://restcountries.eu/rest/v2'

const errorNotFound = {
  status: 404,
  message: 'Not Found'
}

const errorBadRequest = {
  status: 400,
  message: 'Bad Request'
}

class CountryController {
  async getAllCountries (req, res) {
    try {
      const { data: countries } = await axios.get(`${BASE_URL}/all`)
      console.log(countries)

      res.status(200).json(countries)

    } catch (err) {
      res.status(404).json(errorBadRequest)
    }

  }

  async getCountryByName (req, res) {
    try {
      const { countryName } = req.params

      const { data: countryData } = await axios.get(`${BASE_URL}/name/${countryName}`)

      res.status(200).json(countryData[0])

    } catch (err) {

      res.status(404).json(errorNotFound)
    }
  }
}

module.exports = new CountryController()
