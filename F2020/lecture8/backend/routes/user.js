const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('no username is entered')
})

router.get('/:username', (req, res) => {
  const { params : { username } } = req
  User.findOne({ username }, (err, user) => {
    if (user) {
      const { name } = user
      res.send(`this user has a username: ${username} & his name is ${name}`)
    } else {
      res.send(`the user with ${username} is not found`)
    }
  })
})

router.post('/add', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.create({ username, password })
    res.send('username created succesfully')
  } catch {
    res.send('failure occurs when creating the user')
  }
})

router.post('/update', async (req, res) => {
  const { username, password, name } = req.body

  try {
    await User.findOneAndUpdate({ username, password }, { name }, { useFindAndModify: true })
    res.send('user update is successful')
  } catch {
    res.send('failure occurs when updating the user')
  }
})

router.post('/delete', async (req, res) => {
  const { username, password } = req.session

  try {
    await User.findOneAndDelete({ username, password })
    req.session.username = ''
    req.session.password = ''
    res.send('bye bye')
  } catch {
    res.send('failure occurs when u try to say bye bye to me')
  }
})

module.exports = router