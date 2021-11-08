// route parameters (e.g. latex project id)

const express = require('express')

const router = express.Router()

// '/' to get all projects
router.get('/', (req, res) => {
  res.send('all the projects in your repo')
})

// '/:id' to return the latex file of a specific project

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.send(`you are viewing project with id: ${id}`)
})

// prefix of '/project'
router.get('/a/b/c', (req, res) => {
  res.send('you are at localhost:3000/project/a/b/c')
})

module.exports = router