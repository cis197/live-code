// query parameter (e.g. google search)

const express = require('express')

const router = express.Router()

// '/' to get the google search query
router.get('/', (req, res) => {
  const { q } = req.query

  res.send(`you queried ${q}`)
})

module.exports = router