export const ADD_TO_DO = 'ADD_TO_DO'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS'

export const STATUS_MAP = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  INCOMPLETE: 'INCOMPLETE'
}

let id = 0

export const addTodo = text => ({
  type: ADD_TO_DO,
  text,
  id: id++
})

export const toggleTodoStatus = id => ({
  type: TOGGLE_TODO_STATUS,
  id
})

export const toggleStatus = status => ({
  type: TOGGLE_STATUS,
  status
})

