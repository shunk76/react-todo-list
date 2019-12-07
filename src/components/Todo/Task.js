import React, { Component } from 'react'
import TextareaAutosize from 'react-textarea-autosize';

// 設定済みの task 
export default class Task extends Component {
  constructor(props) {
    super(props)

    Object.getOwnPropertyNames(this.__proto__).forEach(func =>
      this[func] = this[func].bind(this)
    )
  }

  handleCheck() {
    this.props.doneTodo(this.props.id)
  }

  handleChangeTask(e) {
    this.props.changeTask(this.props.id, e.target.value)
  }

  render() {
    const checked = {
      true: 'checked',
      false: ''
    }

    const status = {
      true: 'done',
      false: 'not-yet'
    }

    return (
      <div className='task'>
        <input className="task__check" type="checkbox" onChange={this.handleCheck} checked={checked[this.props.status]} />
        <TextareaAutosize className="task__textarea" data-status={status[this.props.status]} data-editing={this.props.editing} onChange={this.handleChangeTask} value={this.props.task} />
        <pre className="task__text" data-status={status[this.props.status]}>{this.props.task}</pre>
      </div>
    )
  }
}