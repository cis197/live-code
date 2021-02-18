import React, { Component } from 'react'

const filterEmoji = (emojis, filter) => {
  const filteredEmojis = []

  emojis.map(emoji => {
    const { title, keywords } = emoji

    if (title.includes(filter) || keywords.includes(filter)) {
      filteredEmojis.push(emoji)
    }
  })

  return filteredEmojis
}

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('something in the props has changed')
  }

  render() {
    const { emojis, textInput } = this.props
    
    return (
      <>
        <h1> Search Results </h1>
        {filterEmoji(emojis, textInput).slice(0, 10).map(emoji => <div> {emoji.title} {emoji.symbol} </div>)}
      </>
    )
  }
}

// const SearchResults = ({ emojis, textInput }) => (
//   <>
//     <h1> Search Results </h1>
//     {filterEmoji(emojis, textInput).slice(0, 10).map(emoji => <div> {emoji.title} {emoji.symbol} </div>)}
//   </>
// )

export default SearchResults
