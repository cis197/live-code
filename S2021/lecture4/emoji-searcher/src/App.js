import React, { Component } from 'react'

import Title from './Title'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import emojiList from './emojiList.json'

class App extends Component {
  constructor() {
    super()
    this.state = { emojis: emojiList, textInput: '' }
  }

  render() {
    return (
      <>
        <Title />
        <SearchInput onChange={e => { this.setState({ textInput: e.target.value }) }} />
        <SearchResults emojis={this.state.emojis} textInput={this.state.textInput} />
      </>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
