import Emojis from './emojiList.json'

const Results = ({ input }) => {
  const filteredEmojis = Emojis.filter(emoji => emoji.keywords.includes(input) || emoji.title.includes(input))
  return (filteredEmojis.map(emoji => <div key={emoji.title}>{emoji.title} {emoji.symbol}</div>))
}

export default Results