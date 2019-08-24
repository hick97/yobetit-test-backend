const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const databaseConfig = require('./config/database')

const countryRoutes = require('./routes/countries')
const userRoutes = require('./routes/user')
const sessionsRoutes = require('./routes/sessions')
const machineRoutes = require('./routes/machine')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV === 'development'

    this.database()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  database () {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  routes () {
    this.express.use('/api/v1/country', countryRoutes)
    this.express.use('/api/v1/user', userRoutes)
    this.express.use('/api/v1/session', sessionsRoutes)
    this.express.use('/api/v1/machine', machineRoutes)
  }
}

module.exports = new App().express
