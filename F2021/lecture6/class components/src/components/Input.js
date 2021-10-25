import React, { Component } from 'react'

// const func = ({ key }) => {
//   const { key } = obj
// }

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { setInput, hello, int } = this.props

    return (<input onChange={e => setInput(e.target.value)} />)
  }
}

// const Input = ({ setInput, hello, int }) => {
//   // const { setInputFunction } = props

//   return (<input onChange={e => setInput(e.target.value)} />)
// }

export default Input
