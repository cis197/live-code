import React, { useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient.connect()

const App = () => {
  socket.on('res', data => {
    console.log(data)
  })

  return (
    <div onClick={() => { socket.emit('req', 'peter is peter')}}>
      clicking on this button should give me 
    </div>
  )
}

export default App