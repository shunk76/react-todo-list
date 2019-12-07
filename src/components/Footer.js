import React from 'react'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="app__footer">
      <p className="align-center">Github repository: <a href="https://github.com/shunk76/react-todo-list">react-todo-list</a></p>
      <p className="copy-right">© <span>{year}</span> <a href="https://bonyspike.asia">bonyspike.asia</a></p>
    </footer>
  )
}

export default Footer