import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);  

  const passwordGenerator = useCallback(()=>{
    let password = "";
    let letters = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefjhijklmnopqrstuvwxyz";
    
    if(numberAllowed) letters += "0123456789";
    if(charactersAllowed) letters += "!@#$%^&*";
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * letters.length + 1);
      password += letters.charAt(char);      
    } 
    setPassword(password)
  },[length,numberAllowed,charactersAllowed,setPassword])

  const passwordCopyToClickboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charactersAllowed,passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto mt-10 bg-slate-700 rounded-lg px-4 py-1 text-orange-400'>
        <h1 className='text-white text-center text-3xl '>Password Generator</h1>
        <div className='flex my-5 shadow rounded-xl overflow-hidden'>
        <input
            className='outline-none w-full py-1.5 px-2'
            type="text"
            value={Password}
            placeholder='password'
            ref={passwordRef}         
            readOnly
         />
         <button
         className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'
         onClick={passwordCopyToClickboard}
         >copy</button>
        </div>

        <div className='flex items-center text-sm gap-x-3 mb-4'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={5}
             max={50}
             value={length}
             className='cursor-pointer'
             onChange={e => setLength(e.target.value)}
             />
             <label>length: {length}</label>             
          </div>
          
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed(prev => !prev)}
          />
             <label htmlFor='numberInput'>numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>            
          <input type="checkbox" 
            defaultChecked={charactersAllowed}
            id='characterInput'
            onChange={() => setCharactersAllowed(prev => !prev)}          
          />
             <label htmlFor='characterInput'>characters</label>             
          </div>
        </div>
      </div>
    </>
  )
}

export default App
