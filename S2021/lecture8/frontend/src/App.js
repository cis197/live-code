import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [data, setData] = useState('')

  useEffect(async () => {
    // axios.get('/questions/all')
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    setData(data.title)
  }, [])

  const signup = async () => {
    const { status } = await axios.post('/user/add', { username, password })
    if (status === 200) {
      setMsg('perfect')
    } else {
      setMsg('everything is fucked up')
    }
  }

  return (
    <div>
      Username: <input onChange={e => setUsername(e.target.value)} />
      Password: <input onChange={e => setPassword(e.target.value)} />
      <button onClick={() => signup(username, password)}> register user </button>
      <p> {msg} </p>
      <p> Data: {data} </p>
    </div>
  )
}

export default App