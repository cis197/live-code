import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const Input = ({ dispatchAddToDo }) => {
  const [text, setText] = useState('')

  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={() => dispatchAddToDo(text)}> Add Todo </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddToDo: input => dispatch(addTodo(input))
})

export default connect(null, mapDispatchToProps)(Input)