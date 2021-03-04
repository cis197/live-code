import { combineReducers } from 'redux'

import todos from './todos'
import visibility from './visibilityFilter'

export default combineReducers({
  todos,
  visibility
})