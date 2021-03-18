const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  const { q } =  req.query
  res.send(`query is: ${q}`)
})

router.get('/advanced', (req, res) => {
  res.send('advanced result')
})

module.exports = router