const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
  console.log(req.body)
  const { username } = req.body
  res.send(`${username} are logged in`)
})

module.exports = router