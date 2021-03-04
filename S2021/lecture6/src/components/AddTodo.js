import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const AddTodo = ({ dispatchAddTodo }) => {
  const [input, setInput] = useState('')

  console.log(dispatchAddTodo)

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} />
      <button onClick={() => dispatchAddTodo(input)}> Add Todo </button> 
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddTodo: text => dispatch(addTodo(text))
})

// export default AddTodo
export default connect(null, mapDispatchToProps)(AddTodo)