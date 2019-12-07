import React, { Component } from 'react'
import Task from './Task'
import TaskButtons from './TaskButtons'
import Priority from './Priority'

// Todo の項目
export default class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    Object.getOwnPropertyNames(this.__proto__).forEach(func =>
      this[func] = this[func].bind(this)
    )
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <li className="todo-list__item">
        <Task {...this.props} />
        <TaskButtons {...this.props} />
        <Priority {...this.props} show={this.state.show} handleToggle={this.handleToggle} />

        <time className="todo-list__item__time" dateTime={this.props.time}>{this.props.time}</time>
        <button className="todo-list__item__remove" onClick={this.handleRemove} title="このTodoを削除する">🗑</button>
      </li >
    )
  }
}