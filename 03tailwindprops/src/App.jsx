import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  
  let myObj = {
    name: "vishal",
    age: 21,
    btnText: "click here"
  }
 
  return (
    <>
      <h1 className='bg-black text-white p-6 mb-4'>TAILWIND</h1>   
      <Card someObj={myObj}/>
      <h1>Hello</h1>
    </>
  )
}

export default App
