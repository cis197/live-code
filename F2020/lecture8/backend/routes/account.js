const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/', (req, res) => {
  const { username } = req.session
  console.log(req.session)

  res.send(`${username} is logged in`)
})

router.post('/login', (req, res) => {
  const { username, password } = req.body

  User.findOne({ username, password }, (err, user) => {
    if (user) {
      req.session.username = username
      req.session.password = password
      console.log(req.session)
      res.send(`logged in`)
    } else {
      res.send(`failed to log in`)
    }
  })
})

router.post('/logout', (req, res) => {
  req.session.username = ''
  res.send('user logged out')
})

module.exports = router