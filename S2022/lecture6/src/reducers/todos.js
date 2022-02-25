import { ADD_TO_DO, TOGGLE_TODO_STATUS } from "../actions"

const default_state = []

const todos = (state = default_state, action) => {
  const { type, text, id } = action

  switch(type) {
    case ADD_TO_DO:
      return [...state, {text, id, completed: false}]
    case TOGGLE_TODO_STATUS:
      return state.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return {...todo}
        }
      })
    default:
      return state
  }
}

export default todos