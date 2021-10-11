import React, { useState, useEffect } from 'react'
import axios from 'axios'
import s from 'styled-components'

import './App.css'

const Wrapper = s.div`
color: red;
font-size: 12px;
`

const App2 = () => {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  useEffect(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    setInfo(data)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>} 
      <p> {!loading && info.title} </p>
      <Wrapper> this is a styled component </Wrapper>
      <p style={{ color: 'black', fontSize: '100px' }}>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default App2