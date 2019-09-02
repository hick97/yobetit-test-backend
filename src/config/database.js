require('dotenv').config()

module.exports = {
  uri: `mongodb://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASS}@ds257848.mlab.com:57848/${process.env.DB_MONGO_NAME}`
}
