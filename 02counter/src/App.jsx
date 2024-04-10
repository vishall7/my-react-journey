import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    if(count != 20){
      count += 1;
    }
    setCount(count);
  }

  const removeValue = () => {
    if(count != 0){
      count -= 1;
    }
    setCount(count);
  } 
  return (
    <>
      <h1>new to react</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
