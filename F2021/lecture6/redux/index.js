import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import App from './src/App'
// import rootReducer from './src/reducers'

// const store = createStore(rootReducer)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('react-root')
// )

import App2 from './src/App2'
ReactDOM.render(<App2 />, document.getElementById('react-root'))