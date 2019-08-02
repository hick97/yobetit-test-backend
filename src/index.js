const App = require('./server')

const PORT = process.env.PORT || 3001

App.listen(PORT, err => {
  if (err) {
    console.log('Error')
  } else {
    console.log('Server is runnig on port 3001...')
  }
})
