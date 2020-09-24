import React, { useEffect } from "react"
import Clipboard from "clipboard"

import EmojiResultRow from "./EmojiResultRow"
import "./EmojiResults.css"

const EmojiResults = ({ emojiData }) => {
  const clipboard = new Clipboard(".copy-to-clipboard")
  
  useEffect(() => {
    return () => {
      clipboard.destroy()
    }
  }, [clipboard])

  return (
    <div className="component-emoji-results">
      {emojiData.map(emojiData => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  )
}

export default EmojiResults
