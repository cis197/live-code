import { connect } from 'react-redux'

import { STATUS_MAP, toggleStatus } from '../actions'

const Footer = ({ dispatchToggleStatus }) => {
  return (
    <>
      <button style={{ marginRight: '1rem' }} onClick={() => dispatchToggleStatus(STATUS_MAP.ALL)}> all </button>
      <button style={{ marginRight: '1rem' }} onClick={() => dispatchToggleStatus(STATUS_MAP.COMPLETED)}> completed </button>
      <button onClick={() => dispatchToggleStatus(STATUS_MAP.INCOMPLETE)}> incomplete </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchToggleStatus: status => dispatch(toggleStatus(status))
})

export default connect(null, mapDispatchToProps)(Footer)