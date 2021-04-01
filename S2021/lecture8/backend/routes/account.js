const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    User.findOne({ username, password }, (err, user) => {
      if (user) {
        req.session.username = username
        req.session.password = password
        res.send('logged in')
      } else {
        res.send('you are not logged in :)')
      }
    })
  } catch {
    res.send('error occurs when user is creating')
  }
})

router.post('/logout', async (req, res) => {
  req.session.username = null
  req.session.password = null
  res.send('user logged out')
})

module.exports = router