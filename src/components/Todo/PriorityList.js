import React, { Component } from 'react'
import PriorityIcon from './PriorityIcon'
import { priorityObj } from './Emoji'

// priority のリスト
export default class PriorityList extends Component {
  render() {

    const list = Object.keys(priorityObj).map((priority, index) => {
      const tabIndex = Number(this.props.tabIndex) + index

      const props = {
        key: Date.now(),
        value: priority,
        tabIndex: tabIndex,
        className: `priority-list__item__button${priority === this.props.priority ? ' priority-list__item__button--selected' : ''}`,
        onMouseUp: this.props.handleChangePriority,
        onTouchEnd: this.props.handleChangePriority,
        onKeyUp: this.props.handleChangePriorityWithKeyBoard
      }

      return (
        <li key={priority} className="priority-list__item" >
          <button {...props} type="button">
            <PriorityIcon priority={priority} />
          </button>
        </li >
      )
    })

    return list
  }
}