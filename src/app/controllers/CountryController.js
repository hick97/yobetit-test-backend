const axios = require('axios')
const BASE_URL = 'https://restcountries.eu/rest/v2'

class CountryController {
  async getCountryByName (req, res) {
    try {
      const { countryName } = req.body

      const { data: countryData } = await axios.get(`${BASE_URL}/name/${countryName}`)

      res.status(200).json(countryData[0])

    } catch (err) {
      const errorMessage = {
        status: 404,
        message: 'Not Found'
      }
      res.status(404).json(errorMessage)
    }
  }
}

module.exports = new CountryController()
