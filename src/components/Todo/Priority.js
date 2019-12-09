import React, { Component } from 'react'
import PriorityIcon from './PriorityIcon'
import OtherPriority from './OtherPriority'

// Todo に設定済みの priority
export default class Priority extends Component {
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