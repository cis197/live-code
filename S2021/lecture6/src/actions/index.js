let counter = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: counter++,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const updateVis = status => ({
  type: 'UPDATE_VISIBILITY',
  status
})