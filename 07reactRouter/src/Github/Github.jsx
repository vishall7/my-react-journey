import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vishall7')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [data])   
    
  return (
    <div className='text-center m-4 text-white p-4 bg-slate-600 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="image" width={300} />
    </div>
  )
}

export default Github

export const githubDataLoader = async () => {
    const response = await fetch('https://api.github.com/users/vishall7')
    return response.json()
}
