const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`welcome to /search, you searched for ${req.query['q']}`)
})


module.exports = router