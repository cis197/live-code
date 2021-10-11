import React from 'react'

// const func = ({ key }) => {
//   const { key } = obj
// }

const Input = ({ setInput, hello, int }) => {
  // const { setInputFunction } = props

  return (<input onChange={e => setInput(e.target.value)} />)
}

export default Input
