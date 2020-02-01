import {createStore} from 'redux'

const types = {
  INCR: 'INCR',
  DECR: 'DECR'
}

const reducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCR:
      return state + 1
    case type.DECR:
      return state - 1
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  const currState = store.getState()
  $('#count').text(currState)
})

$('#up').click(function(){
  store.dispatch({type: types.INCR})
})

$('#down').click(function(){
  store.dispatch({type: types.DECR})
})