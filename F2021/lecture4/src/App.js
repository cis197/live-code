// package imports
import React, { useState } from 'react'

// local imports
import Title from './components/Title'
import Input from './components/Input'
import Results from './components/Results'

import EmojiJSON from './emojiList.json'

// functional component
const App = () => {
  const [input, setInput] = useState('')
  const [ls, setLs] = useState([1, 2])

  // setLs([...ls, 3])
  // setLs([3, ...ls])
  // setLs([1, 2, 3])

  // input = 8 (incorrect)
  // setInput(8) (correct)

  return (
    <>
      <Title />
      <Input setInput={setInput} hello="world" int={3} />
      <Results emojis={EmojiJSON} input={input} />
    </>
  )
}

export default App
