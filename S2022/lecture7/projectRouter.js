const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`welcome to /project`)
})

router.get('/:id', (req, res) => {
  res.send(`welcome to /project, you searched for ${req.params['id']}`)
})

router.get('/:id/:id2', (req, res) => {
  res.send(`welcome to /project, you searched for ${req.params['id']} and ${req.params['id2']}`)
})


module.exports = router