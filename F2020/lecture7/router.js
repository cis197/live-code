const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log('I am running from a router!')
  next()
})

router.get('/test', (req, res, next) => {
  res.send('Hello from the router!')
})

module.exports = router