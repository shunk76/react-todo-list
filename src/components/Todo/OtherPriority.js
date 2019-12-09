import React, { Component } from 'react'
import { priorityObj } from './Emoji'
import PriorityIcon from './PriorityIcon'

// Todo に設定済みの priority 以外の priority のリスト
export default class OtherPriority extends Component {
  // 設定済みの priority をクリックして、その他の priority の表示/非表示を切り替える
  // プライオリティを変更する
  handleClick = e => {
    this.props.handleToggle()
    this.props.changePriority(this.props.id, e.currentTarget.value)
  }

  render() {
    // 投稿済みの Priority 以外の配列
    const other = Object.keys(priorityObj).filter(priority => priority !== this.props.priority)

    const list = other.map((key, index) => {

      return (
        <li className="other-priority__item" key={key}>
          <button key={index} className="other-priority__button" value={key} onClick={this.handleClick} type="button">
            <PriorityIcon priority={key} />
          </button>
        </li >
      )
    })

    return this.props.show === true ?
      <ul className="other-priority other-priority--show">{list}</ul> :
      <ul className="other-priority">{list}</ul>
  }
}