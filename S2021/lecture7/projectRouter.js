const express = require('express')

const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params

  // go to DB, fetch the latex file

  res.send(`document id: ${id}`)
})

module.exports = router