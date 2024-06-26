import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        setUser({
            username,
            password
        })
    }

  return (
    <div className='flex flex-col items-center justify-center  bg-slate-300 text-center text-lg py-4  '>
      <h2>Login</h2>
      <input 
      type="text"
      className='w-2/5 p-2 m-2 border-2 border-blue-500 rounded focus:outline-none' 
      placeholder='username'
      value={username} 
      onChange={(e) => setUsername(e.target.value)}/>
      <input 
      type="password"
      className='w-2/5 p-2 m-2 border-2 border-blue-500 rounded focus:outline-none' 
      placeholder='password'
      value={password} 
      onChange={(e) => setPassword(e.target.value)}/>

      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogin}
      >Login</button>

    </div>
  )
}

export default Login
