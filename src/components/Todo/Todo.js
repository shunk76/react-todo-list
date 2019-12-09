import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import getDateTime from '../functons/getDateTime'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.storage = 'app-state'
    const savedState = JSON.parse(localStorage.getItem(this.storage))

    // すでに保存されたデータがある場合は、それを使う
    // ない場合は、defaultState を呼ぶ
    this.state = savedState ? savedState : this.defaultState()
  }

  defaultState = () => {
    const defaultTask = 'Add your tasks or edit this!'

    return {
      tasks: [{
        task: defaultTask,
        before: defaultTask,
        status: false, // true => Done, false => NotYet
        editing: false, // true => タスクを編集中
        time: getDateTime(),
        priority: 'middle',
        id: 0
      }],
      uniquId: 1
    }
  }

  saveState = state => {
    window.localStorage.setItem(this.storage, JSON.stringify(state))
  }

  handleSave = () => {
    this.saveState(this.state)
  }

  removeState = () => {
    window.localStorage.removeItem(this.storage)
    this.setState(this.defaultState())
  }

  // Todo を追加
  addTodo = todo => {
    todo.task = todo.task.trim()
    if (todo.task === '') return

    const { tasks, uniquId } = this.state

    tasks.unshift({
      task: todo.task,
      before: todo.task,
      status: false,
      editing: false,
      time: getDateTime(),
      priority: todo.priority,
      id: uniquId
    })

    this.setState({
      tasks,
      uniquId: uniquId + 1
    }, this.handleSave)
  }

  // ゴミ箱アイコン🗑をクリックして、タスクを削除。
  removeTodo = id => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    }, this.handleSave)
  }

  // Todo を完了にする
  doneTodo = id => {
    this.setState(this.state.tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status
      }
      return task
    }), this.handleSave)
  }

  // タスクの編集を保存する
  updatedTask = id => {
    this.setState(this.state.tasks.map(task => {
      if (task.id === id) {
        task.editing = false
        task.before = task.task
      }

      return task
    }), this.handleSave)
  }

  // タスクの編集をキャンセルして、元のタスクを表示する
  didNotUpdateTask = id => {
    this.setState(this.state.tasks.map(task => {
      if (task.id === id) {
        task.editing = false
        task.updated = !task.updated
        task.task = task.before
      }

      return task
    }), this.handleSave)
  }

  // タスクを編集する
  changeTask = (id, value) => {
    this.setState(this.state.tasks.map(task => {
      if (task.id === id) {
        task.editing = true
        task.task = value
      }

      return task
    }), this.handleSave)
  }

  // 投稿済みのタスクの Priority を変更する
  changePriority = (id, priority) => {

    this.setState(this.state.tasks.map(task => {
      if (task.id === id) {
        task.priority = priority
        task.changingPriority = false
      }

      return task
    }), this.handleSave)
  }

  render() {
    const props = {
      tasks: this.state.tasks,
      removeTodo: this.removeTodo,
      doneTodo: this.doneTodo,
      editing: this.editingTodo,
      changeTask: this.changeTask,
      updatedTask: this.updatedTask,
      didNotUpdateTask: this.didNotUpdateTask,
      changePriority: this.changePriority,
    }

    return (
      <div className="todo">
        <TodoInput addTodo={this.addTodo} />
        <TodoList {...props} />
        <p className="remove-data">
          This app uses localStorage to store ToDo data.<br />
          <button className="remove-data__button" onClick={() => this.removeState()}>Clear the data</button>
        </p>
      </div>
    )
  }
}
