import React, { Component } from 'react'

// task を編集したときの、save / cencel ボタン
export default class TaskButtons extends Component {
  constructor(props) {
    super(props)

    Object.getOwnPropertyNames(this.__proto__).forEach(func =>
      this[func] = this[func].bind(this)
    )
  }

  // タスクを更新した
  handleUpdated() {
    this.props.updatedTask(this.props.id)
  }

  // タスクを編集したが、キャンセルした
  handleDidNotUpdate() {
    this.props.didNotUpdateTask(this.props.id)
  }

  render() {
    return (
      <div className="task-buttons" data-editing={this.props.editing}>
        <button className="task-buttons__button task-buttons__button__save" onClick={this.handleUpdated} title="Save" type="button">
          <span role="img" aria-label="save">🙆‍♂️</span> save
        </button>

        <button className="task-buttons__button task-buttons__button__cancel" onClick={this.handleDidNotUpdate} title="Cancel" type="button">‍
          <span role="img" aria-label="cancel">🙅‍♂️</span> cancel
        </button>
      </div>
    )
  }
}
