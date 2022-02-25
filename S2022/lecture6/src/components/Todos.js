import { connect } from 'react-redux'

import { toggleTodoStatus, STATUS_MAP } from '../actions'

const filterTodos = (status, todos) => {
  switch (status) {
    case STATUS_MAP.INCOMPLETE:
      return todos.filter(todo => !todo.completed)
    case STATUS_MAP.COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const Todos = ({ todos, status, dispatchToggleTodoStatus }) => {
  return (
    <>
      {filterTodos(status, todos).map(todo => <div onClick={() => dispatchToggleTodoStatus(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'None' }}> {todo.text} </div>)}
    </>
  )
}

const mapStateToProps = state => ({ todos: state.todos, status: state.status })

const mapDispatchToProps = dispatch => ({
  dispatchToggleTodoStatus: id => dispatch(toggleTodoStatus(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)