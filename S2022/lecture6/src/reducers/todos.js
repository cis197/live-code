import { ADD_TO_DO } from "../actions"

const default_state = []

const todos = (state = default_state, action) => {
  const { type, text, id } = action

  switch(type) {
    case ADD_TO_DO:
      return [...state, {text, id, completed: false}]
    default:
      return state
  }
}