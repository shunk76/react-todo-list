import React, { Component } from 'react'
import PriorityList from './PriorityList'

// Todo のオプション
export default class TodoOptions extends Component {
  render() {
    return (
      <div className="options">
        <dl className="options__list">
          <div className="options__list__item">
            <dt className="options__list__item__heading">Priority</dt>
            <dd className="options__list__item__content">
              <ul className="priority-list">
                <PriorityList handleChangePriority={this.props.handleChangePriority} handleChangePriorityWithKeyBoard={this.props.handleChangePriorityWithKeyBoard} priority={this.props.priority} tabIndex="2" />
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    )
  }
}