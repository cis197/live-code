import React, { useState } from 'react'

import Title from './components/Title'
import Input from './components/Input'
import Results from './components/Results'

const App = () => {
  const [input, setInput] = useState('')

  return (
    <>
      <Title />
      <Input setInput={setInput} />
      <Results input={input} />
    </>
  )
}

export default App