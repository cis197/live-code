import React, { Component } from 'react'

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { emojis, textInput } = this.props
    console.log(textInput)
    
    return (
      <>
        <h1> Search Results </h1>
        {emojis.slice(0, 10).map(emoji => <div> {emoji.title} {emoji.symbol} </div>)}
      </>
    )
  }
}

export default SearchResults