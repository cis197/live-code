import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo, VisibilityFilters } from '../actions'

const { SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters

const Todo = ({ dispatchToggleTodo, todo }) => (
  <ul
    onClick={() => dispatchToggleTodo(todo.id)}
    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
  >
    {todo.text}
  </ul>
)

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

const TodoList = ({ todos, dispatchToggleTodo, visibility }) => (
  <>
    {filterTodos(visibility, todos).map(todo => <Todo dispatchToggleTodo={dispatchToggleTodo} todo={todo} />)}
  </>
)

const mapDispatchToProps = dispatch => ({
  dispatchToggleTodo: id => dispatch(toggleTodo(id))
})

const mapStateToProps = state => ({
  todos: state.todos,
  visibility: state.visibility
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)