import React from 'react'

const filterEmojis = (emojis, input) => (emojis.filter(emoji => emoji.title.includes(input) || emoji.symbol.includes(input)))

// const filterEmojis = (emojis, input) => {
//   return emojis.filter(emoji => emoji.title.includes(input) || emoji.symbol.includes(input))
// }

const Results = ({ emojis, input }) => (
  filterEmojis(emojis, input).slice(0, 10).map(({ symbol, title }) => <div> {symbol}: {title} </div>)
)

export default Results
