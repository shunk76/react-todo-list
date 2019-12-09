import React, { Component } from 'react'
import TodoOptions from './TodoOptions'

// Todo の入力欄
export default class TodoInput extends Component {
  constructor(props) {
    super(props)

    this.defaultState = {
      task: '',
      priority: 'middle'
    }

    this.state = this.defaultState
  }

  handleClick = () => {
    // Todo を追加
    this.props.addTodo(this.state)
    // input を空にし、priority を middle にする
    this.setState(this.defaultState)
  }

  handleEnter = e => {
    if (e.shiftKey && e.key === 'Enter') {
      this.props.addTodo(this.state)
      this.setState(this.defaultState)
    }
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    })
  }

  handleChangePriority = e => {
    this.setState({
      // priority の変更する
      priority: e.currentTarget.value
    })
  }

  handleChangePriorityWithKeyBoard = e => {
    // キーボードで priority を変更する
    if (e.shiftKey === false && e.key === 'Enter') {
      this.setState({
        priority: e.currentTarget.value
      })
    }
  }

  render() {
    return (
      <div onKeyPress={this.handleEnter}>
        <div className="input-todo">
          <input id="input" className="input-todo__input" tabIndex="1" value={this.state.task} onChange={this.handleChange} type="text" />
          <button className="input-todo__add-button" tabIndex="5" onClick={this.handleClick} type="button">Add</button>
        </div>

        <TodoOptions handleChangePriority={this.handleChangePriority} handleChangePriorityWithKeyBoard={this.handleChangePriorityWithKeyBoard} priority={this.state.priority} />
      </div>
    )
  }
}