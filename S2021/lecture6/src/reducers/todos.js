const defaultState = []

const todos = (state = defaultState, action) => {
  const { type, id, text } = action

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state, { id, text, completed: false }
      ]
    case 'TOGGLE_TODO':
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

export default todos