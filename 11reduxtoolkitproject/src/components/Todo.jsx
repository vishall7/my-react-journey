import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
      ))} 
    </div>
  )
}

export default Todo
