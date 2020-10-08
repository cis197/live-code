const todos = (state = [], action) => {
  const { type, id, text } = action

  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id, text, completed: false }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
