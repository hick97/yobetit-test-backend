const express = require('express')
const cors = require('cors')
const countryRoutes = require('./routes/countries')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV === 'development'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use('/api/v1/country', countryRoutes)
  }
}

module.exports = new App().express
