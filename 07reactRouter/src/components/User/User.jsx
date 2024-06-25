import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className='text-white bg-slate-600 text-center text-3xl py-4 flex items-center justify-center'>
      User: {userId} 
    </div>
  )
}

export default User
