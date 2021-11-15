import React, { useState, useEffect } from 'react'
import axios from 'axios'
 
const App = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [succeeded, setSucceeded] = useState(false)

  useEffect(async () => {
    const { data: users } = await axios.get('/user/all') // GET request
    setData(users)
  }, [])

  const createUser = async () => {
    const { data } = await axios.post('/user/create', { username, password })
    if (data === 'user created') {
      setSucceeded(true)
    }
  }

  return (
    <>
      <h1>Your react app!</h1>
      <>
        {data.map(user => <p> {user.username} </p>)}
      </>
      username: <input onChange={e => setUsername(e.target.value)} />
      <br />
      password: <input onChange={e => setPassword(e.target.value)} />
      <br />
      {/* <button onClick={() => {
        axios.post('/user/create', { username, password })
      }}> create user </button> */}
      <button onClick={createUser}> create user </button>
      <p> succeeded: {`${succeeded}`} </p>
    </>
  )
}

export default App