import React, { Component } from 'react'
import TodoOptions from './TodoOptions'

// Todo の入力欄
export default class TodoInput extends Component {
  handleClick = () => {
    // Todo を追加
    this.props.addTodo(this.props.input)
    // input を空にし、priority を middle にする
    this.props.setTask('')
    this.props.setPriority('middle')
  }

  handleEnter = e => {
    if (e.shiftKey && e.key === 'Enter') {
      this.props.addTodo(this.props.input)
      this.props.setTask('')
      this.props.setPriority('middle')
    }
  }

  handleChange = e => {
    this.props.setTask(e.target.value)
  }

  handleChangePriority = e => {
    this.props.setPriority(e.currentTarget.value)
  }

  handleChangePriorityWithKeyBoard = e => {
    // キーボードで priority を変更する
    if (e.shiftKey === false && e.key === 'Enter') {
      this.props.setPriority(e.currentTarget.value)
    }
  }

  render() {
    return (
      <div onKeyPress={this.handleEnter}>
        <div className="input-todo">
          <input id="input" className="input-todo__input" tabIndex="1" value={this.props.input.task} onChange={this.handleChange} type="text" />
          <button className="input-todo__add-button" tabIndex="5" onClick={this.handleClick} type="button">Add</button>
        </div>

        <TodoOptions handleChangePriority={this.handleChangePriority} handleChangePriorityWithKeyBoard={this.handleChangePriorityWithKeyBoard} priority={this.props.input.priority} />
      </div>
    )
  }
}