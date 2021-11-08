const express = require('express')

const router = express.Router()

const User = require('../model/User')

// create user
router.post('/create', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.create({ username, password })
    res.send('user created')
  } catch (err) {
    // console.log(err)
    res.send('user creation has problems') // preferred
    // throw new Error('user creation has problems')
  }
})

// update user
router.post('/update', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.updateOne({ username }, { password })
    res.send('user password updated')
  } catch (err) {
    console.log(err)
    res.send('user password update occurs problems')
    // throw new Error('user password update occurs problems')
  }
})

// delete user
router.post('/delete', async (req, res) => {
  const { username, password } = req.body

  try {
    await User.deleteOne({ username, password })
    res.send('user is deleted')
  } catch (err) {
    console.log(err)
    res.send('user deletion occurs problems')
  }
})

module.exports = router