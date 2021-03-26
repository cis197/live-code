const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/add', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.create({ username, password })
    res.send('user is created')
  } catch {
    res.send('error occurs when user is creating')
  }
})

router.post('/update', async (req, res) => {
  const { username, password } = req.session

  const { name } = req.body

  try {
    console.log(username)
    console.log(password)
    await User.findOneAndUpdate({ username, password }, { name })
    res.send('your new name is too cool')
  } catch {
    res.send('your name is not updated')
  }
})

router.post('/delete', async (req, res) => {
  const { username, password } = req.session

  try {
    await User.findOneAndDelete({ username, password })

    req.session.username = null
    req.session.password = null

    res.send('your account is indeed bye-byed')
  } catch {
    res.send('your account is still in DB')
  }
})

module.exports = router