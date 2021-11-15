const express = require('express')

const router = express.Router()

router.post('/transaction', (req, res) => {
  if (req.session.username && req.session.password) {
    res.send('user has issued a transaction')
  } else {
    res.send('please log in')
  }
})


module.exports = router