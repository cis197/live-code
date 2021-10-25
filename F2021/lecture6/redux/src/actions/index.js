let id = 0

export const ADD_TO_DO = 'ADD_TO_DO'
export const TOGGLE_TO_DO = 'TOGGLE_TO_DO'
export const SET_STATUS = 'SET_STATUS'

export const addTodo = input => ({
  type: ADD_TO_DO,
  id: id++,
  todo: input,
  completed: false
})

export const toggleTodo = id => ({
  type: TOGGLE_TO_DO,
  id
})

export const STATUS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setStatus = status => ({
  type: SET_STATUS,
  status
})

