import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const signup = async () => {
    await axios.post('/user/add', { username, password })
    setMsg('sign up is successful')
  }

  return (
    <>
      <input onChange={e => setUsername(e.target.value)} />
      <input onChange={e => setPassword(e.target.value)} />
      <button onClick={() => signup(username, password, setMsg)} />
      {msg}
    </>
  )
}

export default App