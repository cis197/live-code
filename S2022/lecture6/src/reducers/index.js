import { combineReducers } from 'redux'

import todos from './todos'
import status from './status'

export default combineReducers({
  todos,
  status
})