// GET, POST

// talk about post request and body

const express = require('express')

const searchRouter = require('./searchRouter')
const loginRouter = require('./loginRouter')
const projectRouter = require('./projectRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use((req, res, next) => {
  console.log('this middleware is triggered')
  next()
})

// app.use('/special', (req, res, next) => {
//   console.log('/special request is here')
//   next()
// })

app.use('/error', (req, res, next) => {
  next('Something exploded!')
})

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.use('/search', searchRouter)
app.use('/login', loginRouter)
app.use('/project', projectRouter)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send('Something broke!')
})

// Start listening for requests
app.listen(port, () => {
  console.log('Listening on port ' + port)
})