import React, { useState } from 'react'

export const FunctionalCounter = props => {
  const [count, setCount] = useState(0)
  return <p onClick={() => setCount(count + 1)}>I'm a counter: {count}</p>
}

export class ClassCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { count } = this.state
    this.setState({
      count: count + 1,
    })
  }

  render() {
    const { count } = this.state
    return <p onClick={this.handleClick}>I'm a counter: {count}</p>
  }
}
