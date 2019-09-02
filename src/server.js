require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Youch = require('youch')
const Sentry = require('@sentry/node')
const cors = require('cors')

const databaseConfig = require('./config/database')

const countryRoutes = require('./routes/countries')
const userRoutes = require('./routes/user')
const sessionsRoutes = require('./routes/sessions')
const machineRoutes = require('./routes/machine')

const sentryConfig = require('./config/sentry')

class App {
  constructor () {
    this.express = express()

    Sentry.init(sentryConfig)

    this.database()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(Sentry.Handlers.requestHandler())
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
    this.express.use(Sentry.Handlers.errorHandler())
  }

  exceptionHandler () {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON()

        return res.status(500).json(errors)
      }
      return res.status(500).json({ error: 'Internal server error' })
    })
  }
}

module.exports = new App().express
