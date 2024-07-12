import React from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <>
    <div>
    <h1 className='text-3xl font-bold underline'>Hello</h1>
      <AddTodo/>
      <Todo/>      
    </div>
    </>
  )
}

export default App
