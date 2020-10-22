const express = require('express')
const router = require('./router')

const app = express()
const port = 3000

// // order matters
app.get('/', (req, res) => {
  res.redirect('https://expressjs.com/en/guide/using-middleware.html')
})

app.get('/:username', (req, res) => {
  const { time, params } = req
  console.log(params)
  const { username } = params
  res.send(`Username: ${username}`)
})

// app.use((req, res, next) => {
//   req.time = `Time:: ${Date.now()}`
//   next()
// })

// app.get('/search', (req, res) => {
//   const { time } = req
//   console.log(time)
//   res.send('hello world!')
// })

// app.use('/route', router)

// Start listening for requests
app.listen(port, () => {
  console.log('Listening on port ' + port)
})