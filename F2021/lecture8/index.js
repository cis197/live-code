const express = require('express')
const session = require('cookie-session')

const projectRouter = require('./projectRouter')
const searchRouter = require('./searchRouter')
const loginRouter = require('./loginRouter')

const app = express()
const port = process.env.PORT || 3000

// const verify = (username, password) => username === 'peter' && password === '123'

// // verification middleware
// app.use((req, res, next) => {
//   const { username, password } = req.query
//   console.log(username)
//   if (verify(username, password)) {
//     next()
//   } else {
//     next(new Error('user is undefined'))
//   }
// })

app.use(express.json())

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 3600
}))

app.get('/', (req, res) => {
  return res.send('hello world!')
})

app.use('/project', projectRouter)
app.use('/search', searchRouter)
app.use('/login', loginRouter)

app.use((err, req, res, next) => {
  res.status(500).send('There was an error!')
})

// Start listening for requests
app.listen(port, () => {
  console.log('Listening on port ' + port)
})