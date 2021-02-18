import React, { Component, useState } from 'react'
import axios from 'axios'

import Title from './Title'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import emojiList from './emojiList.json'

// import { Title, SearchInput, SearchResults } from './exports'

class App extends Component {
  constructor() {
    super()
    this.state = { emojis: emojiList, textInput: '', data: {} }
    this.textInput = ''
  }

  componentDidMount() {
    console.log('this component is ready to get displayed')

    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      console.log(response)
      // const { data } = response
      this.setState({ data: response.data })
    })
  }

  render() {
    const { emojis, textInput, data } = this.state

    console.log(this.textInput)

    return (
      <>
        <Title />
        {/* <SearchInput onChange={e => this.setState({ textInput: e.target.value })} /> */}
        <SearchInput onChange={e => this.textInput = e.target.value} />
        <SearchResults emojis={emojis} textInput={textInput} />
        user id: {data.userId}
      </>
    )
  }
}

// const App = () => {
//   const [textInput, setTextInput] = useState('')

//   return (
//     <>
//       <Title />
//       <SearchInput onChange={e => setTextInput(e.target.value)} />
//       <SearchResults emojis={emojiList} textInput={textInput} />
//     </>
//   )
// }

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

export default App
