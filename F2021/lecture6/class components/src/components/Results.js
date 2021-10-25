import React, { Component } from 'react'

const filterEmojis = (emojis, input) => (emojis.filter(emoji => emoji.title.includes(input) || emoji.symbol.includes(input)))

// const filterEmojis = (emojis, input) => {
//   return emojis.filter(emoji => emoji.title.includes(input) || emoji.symbol.includes(input))
// }

class Results extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { emojis, input } = this.props
    return (
      filterEmojis(emojis, input).slice(0, 10).map(({ symbol, title }) => <div> {symbol}: {title} </div>)
    )
  }
}

// const Results = ({ emojis, input }) => (
  
// )

export default Results
