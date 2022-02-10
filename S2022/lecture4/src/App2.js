import React, { useState, useEffect } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log("!!!")
    document.title = `You clicked ${count}, ${count2} times`
  }, [count])

  useEffect(() => {
    console.log('????')
    document.title = `You clicked ${count}, ${count2} times`
  }, [count2])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {count2} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me2
      </button>
    </div>
  )
}

export default Example