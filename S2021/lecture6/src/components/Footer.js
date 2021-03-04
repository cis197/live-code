import React from 'react'
import { connect } from 'react-redux'

import { updateVis, VisibilityFilters } from '../actions'

const { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } = VisibilityFilters

const Footer = ({ dispatchUpdateVis }) => (
  <>
    <button onClick={() => dispatchUpdateVis(SHOW_ALL)}> all </button>
    <button onClick={() => dispatchUpdateVis(SHOW_ACTIVE)}> active </button>
    <button onClick={() => dispatchUpdateVis(SHOW_COMPLETED)}> completed </button>
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchUpdateVis: status => dispatch(updateVis(status))
})

export default connect(null, mapDispatchToProps)(Footer)