import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, STATUS } from '../actions'

const { SHOW_COMPLETED, SHOW_ACTIVE } = STATUS

const filterTodos = (filter, todos) => {
  switch (filter) {
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      return todos
  }
}

const TodoList = ({ todos, status, dispatchToggleToDo }) => (
  <>
    {filterTodos(status, todos).map(todo => <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => dispatchToggleToDo(todo.id)} > {todo.todo} </div>)}
  </>
)

const mapStateToProps = state => ({
  todos: state.todos,
  status: state.status
})

const mapDispatchToProps = dispatch => ({
  dispatchToggleToDo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)