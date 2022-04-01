import React, { useState } from 'react'
import { io } from 'socket.io-client'

// on Mac, you can open Network Utility and replace localhost
// with you IP address to let others find your server
// otherwise, normally we would just say localhost:3000
const socket = io('http://localhost:3000')

export const App = () => {
  const [mymsg, setMyMsg] = useState('')
  const [msg, setMsg] = useState([])

  socket.on('hello', data => {
    console.log(data)
    console.log('received from backend')
  })

  socket.on('message', data => {
    setMsg([...msg, data])
  })

  return (
    <>
      <h1> messages </h1>
      {msg.map(m => <p>{m}</p>)}
      <br />
      <input width={20} onChange={e => setMyMsg(e.target.value)} />
      <button onClick={() => socket.emit('message', mymsg)}> submit </button>
    </>
  )
}