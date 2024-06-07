import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl'>
            <Button colorText="red" setColor={setColor}/>
            <Button colorText="yellow" setColor={setColor}/>
            <Button colorText="green" setColor={setColor}/>
            <Button colorText="blue" setColor={setColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
