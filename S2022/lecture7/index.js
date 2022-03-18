const express = require('express')
const cookieSession = require('cookie-session')

const searchRouter = require('./searchRouter')
const projectRouter = require('./projectRouter')
const loginRouter = require('./loginRouter')

const app = express()
const port = process.env.PORT || 3000

// verify(usernmae, password)

// app.use((req, res, next) => {
//   // username, password are fecthed from the req
//   if (verify(username, password)) {
//     next()
//   } else {
//     next(new Error('invalid user credentials'))
//   }
// })

// middleware 2
// app.use(...)

app.use(express.json())
app.use(cookieSession({
  name: 'session',
  keys: ['pineapple'],
  // Cookie Options
  // maxAge: 24 * 60 * 60 * 1000 // 24 hours
  maxAge: 10 * 1000
}))

app.get('/api', (req, res) => {
  return res.send('hello world!')
})

app.use('/search', searchRouter)
app.use('/project', projectRouter)
app.use('/login', loginRouter)

// REQ.BODY is only available within a POST request
app.post('/credentials', (req, res) => {
  const { username, password } = req.body

  res.send(`username: ${username}, password: ${password}`)
  // res.json(variable)
})

app.get('/redirect', (req, res) => {
  res.redirect('https://www.seas.upenn.edu/~cis197')
})

// error handling
app.use((err, req, res) => {
  res.send('an error has occured')
})

// Start listening for requests
app.listen(port, () => {
  console.log('Listening on port ' + port)
})