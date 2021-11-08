// POST request (body)

const express = require('express')

const router = express.Router()

// body is only available inside POST request
router.post('/', (req, res) => {
  const { username, password } = req.body

  req.session.username = username
  req.session.password = password

  res.status(201).send(`you entered username: ${username}, password: ${password}`)
})

// redirect route
router.get('/redirect', (req, res) => {
  res.redirect('https://jsonplaceholder.typicode.com/todos/1')
})

router.post('/username', (req, res) => {
  res.send(req.session.username)
})

module.exports = router