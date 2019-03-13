import React from 'react'
import Footer from './Footer'
import AddTodo from '../textcontainer/AddTodo'
import VisibleTodoList from '../textcontainer/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App