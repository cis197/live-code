const express = require('express')
const path = require('path')
const socketIO = require('socket.io')
const http = require('http')

const app = express()

const server = http.createServer(app)

const io = socketIO(server)

// Serve static files from the React app build
app.use(express.static('dist'))

app.use(express.json())

const PORT = 3000

/**
 * Handle get requests by returning entry point to React app build.
 * This allows React Router to handle routing on the browser side.
 */
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

io.on('connection', socket => {
  console.log('hello')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('req', data => {
    console.log(data)
    socket.emit('res', 'hello world')
  })
})

server.listen(PORT)