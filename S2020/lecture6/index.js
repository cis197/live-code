const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', function(req, res) {
  console.log('HI?', req.hi)
  console.log('QUERY', req.query)
  const { message } = req.query
  return res.send('hello world! ' + message)
})

app.use('*', function(req, res, next) {
  console.log('IN MIDDLEWARE', req.query)
  req.hi = 'yooo bro'
  next()
})

app.get('/abc', function(req, res) {
  console.log('IN ABC', req.hi)
  // res.send('as easy as 123')
})

// // This will never be reached!
// app.get('/', function(req, res) {
//   return res.send('hello mars!')
// })

// app.get('*', function(req, res) {
//   return res.status(404).send('Page not found 🤕')
// })

// Start listening for requests
app.listen(port, function() {
  console.log('Listening on port ' + port)
})
