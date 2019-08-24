const Yup = require('yup')
const axios = require('axios')
const BASE_URL = 'https://restcountries.eu/rest/v2'

class CountryController {
  // Getting all countries
  async getAllCountries (req, res) {
    try {
      const { data: countries } = await axios.get(`${BASE_URL}/all`)

      return res.json(countries)
    } catch (err) {
      return res.status(400).json({ error: 'Bad request' })
    }
  }

  // Getting country by name
  async getCountryByName (req, res) {
    try {
      const { countryName } = req.params

      const { data: countryData } = await axios.get(`${BASE_URL}/name/${countryName}`)

      // Returns only one country
      return res.json(countryData[0])
    } catch (err) {
      return res.status(404).json({ error: 'Country is not found' })
    }
  }

  // Getting data from array
  async getCountriesFromArray (req, res) {
    // Yup validation
    const schema = Yup.object().shape({
      names: Yup.array().required()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }
    const { names } = req.body

    const { data: countries } = await axios.get(`${BASE_URL}/all`)

    const result = []

    // Preventing duplicated values in array
    const namesSet = new Set(names)

    // Filtering countries by name
    namesSet.forEach(country => {
      const keySearch = country.toLowerCase()

      const matches = countries.filter((item) => {
        const { name } = item
        return (
          name.toLowerCase().search(keySearch) !== -1
        )
      })
      if (matches.length > 0) {
        result.push(matches)
      }
    })

    if (result.length === 0) {
      return res.status(404).json({ error: 'Countries are not found' })
    }

    return res.json(result)
  }
}

module.exports = new CountryController()
