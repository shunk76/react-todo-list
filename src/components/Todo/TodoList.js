import React, { Component } from 'react'
import TodoItem from './TodoItem'

// Todo のリスト
export default class TodoList extends Component {
  render() {

    const list = this.props.tasks.map(todo => {

      const props = {
        key: todo.id,
        removeTodo: this.props.removeTodo,
        doneTodo: this.props.doneTodo,
        editingTodo: this.props.editingTodo,
        updatedTask: this.props.updatedTask,
        didNotUpdateTask: this.props.didNotUpdateTask,
        changeTask: this.props.changeTask,
        changePriority: this.props.changePriority,
      }

      return <TodoItem {...todo} {...props} />
    })

    return <ul className="todo-list">{list}</ul>
  }
}