import React, { Component } from 'react'

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onChange } = this.props
    return (
      <input onChange={onChange} /> 
    )
  }
}

export default SearchInput