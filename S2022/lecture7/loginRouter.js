const express = require('express')
const router = express.Router()

// SESSION is only available with POST requests
router.post('/', (req, res) => {
  const { username, password } = req.body

  if (username === 'peter' && password === '123') {
    req.session.username = 'peter'
    res.send(`successful login`)
  } else {
    res.send('failed')
  }
})

router.post('/verify', (req, res) => {
  if (req.session.username) {
    res.send(`you are logged in as ${req.session.username}`)
  } else {
    res.send(`go to login bye!`)
  }
})


module.exports = router