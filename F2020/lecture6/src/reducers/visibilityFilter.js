import { VisibilityFilters } from '../actions'

const { SHOW_ALL } = VisibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  const { type, filter } = action

  switch (type) {
    case 'SET_VISIBILITY_FILTER':
      return filter
    default:
      return state
  }
}

export default visibilityFilter
