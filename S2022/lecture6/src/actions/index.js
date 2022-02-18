export const ADD_TO_DO = 'ADD_TO_DO'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'

let id = 0

export const addTodo = text => ({
  type: ADD_TO_DO,
  text,
  id: id++
})

export const toggleStatus = status => ({
  type: TOGGLE_STATUS,
  status
})

