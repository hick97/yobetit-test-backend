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

  async getCountriesFromArray (req, res) {
    const { names } = req.body

    try {
      const { data: countries } = await axios.get(`${BASE_URL}/all`)
      
      const result = []
      names.forEach(country => {
        const keySearch = country.toLowerCase()

        let matches = countries.filter((item) => {
          const { name } = item
          return (
            name.toLowerCase().search(keySearch) !== -1
          )
        })
        result.push(matches)
      })
      res.status(200).json(result)
    } catch (err) {
      res.status(400).json(errorBadRequest)
    }
  }
}

module.exports = new CountryController()
