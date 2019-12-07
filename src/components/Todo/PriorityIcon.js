import React, { Component } from 'react'
import { priorityObj } from './Emoji'

// priority の絵文字とテキスト
export default class PriorityIcon extends Component {
  render() {
    return (
      <div className="priority-icon">
        <span className="priority-icon__emoji" role="img" aria-label={`Priority: ${this.props.priority}`}>{priorityObj[this.props.priority]}</span><br />
        <span className="priority-icon__text">{this.props.priority}</span>
      </div>
    )
  }
}