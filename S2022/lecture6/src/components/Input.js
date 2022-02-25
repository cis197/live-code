import { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'


const Input = ({ dispatchAddTodo }) => {
  const [text, setText] = useState('')

  return (
    <>
      <input width={20} onChange={e => setText(e.target.value)} />
      <button onClick={() => dispatchAddTodo(text)}> add Todo </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddTodo: text => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(Input)