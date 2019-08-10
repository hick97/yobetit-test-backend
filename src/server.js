const express = require('express')
const cors = require('cors')
const routes = require('./routes')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV === 'development'

    // this.database()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use('/api/v1', routes)
  }

  database () {
    // TODO
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
