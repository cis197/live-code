const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const http = require('http') // require the vanilla http server
const { Server } = require('socket.io') // require socket.io

const app = express()
const server = http.createServer(app) // create our server
const io = new Server(server) // create our IO sockets

io.on('connection', socket => {
  console.log('a user is connected')
  socket.on('message', data => {
    io.emit('message', data)
  })
})

app.use(express.json())

app.use(express.static('dist')) // set the static folder

app.get('/', (req, res) => {
  res.send('hello world')
})

// set favicon
app.get('/favicon.ico', (req, res) => {
  res.status(404).send()
})

// set the initial entry point
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.listen(3000, () => {
  console.log('listening on 3000')
})
