import { TOGGLE_STATUS, STATUS_MAP } from '../actions'

const default_state = STATUS_MAP.ALL

const status = (state = default_state, action) => {
  const { type, status } = action

  switch(type) {
    case TOGGLE_STATUS:
      return status
    default:
      return state
  }
}

export default status