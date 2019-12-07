import React, { Component } from 'react'
import PriorityIcon from './PriorityIcon'
import OtherPriority from './OtherPriority'

// Todo に設定済みの priority
export default class Priority extends Component {
  constructor(props) {
    super(props)

    Object.getOwnPropertyNames(this.__proto__).forEach(func =>
      this[func] = this[func].bind(this)
    )
  }

  render() {
    return (
      <div className="priority">
        <button className="priority__button" onClick={this.props.handleToggle} type="button">
          <PriorityIcon priority={this.props.priority} />
        </button>

        <OtherPriority priority={this.props.priority} id={this.props.id} changePriority={this.props.changePriority} show={this.props.show} handleToggle={this.props.handleToggle} />
      </div >
    )
  }
}