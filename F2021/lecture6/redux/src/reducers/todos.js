const default_state = []

import { ADD_TO_DO, TOGGLE_TO_DO } from '../actions'

const TodoReducer = (state = default_state, action) => {
  const { type, id, todo, completed } = action

  switch (type) {
    case ADD_TO_DO:
      return [...state, { id, todo, completed }]
    case TOGGLE_TO_DO:
      return state.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }

        return todo
      })
    default:
      return state
  }
}

export default TodoReducer