// package imports
import React, { Component } from 'react'

// local imports
import Title from './components/Title'
import Input from './components/Input'
import Results from './components/Results'

import EmojiJSON from './emojiList.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  setInput = input => {
    this.setState({ input })
  }

  render() {
    return (
      <>
        <Title />
        <Input setInput={this.setInput} hello="world" int={3} />
        <Results emojis={EmojiJSON} input={this.state.input} />
      </>
    )
  }
}

// // functional component
// const App = () => {
//   const [input, setInput] = useState('')

  
// }

export default App
