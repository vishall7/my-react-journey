import React from 'react'

export default function Button({colorText, setColor}) {
  return (
    <button className='outline-none py-2 px-4 rounded-full text-white shadow-lg'
    onClick={() => setColor(colorText)}
    style={{backgroundColor: colorText}}
    >
        {colorText}
    </button>
  )
}
