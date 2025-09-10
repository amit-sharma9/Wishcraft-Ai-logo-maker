import React from 'react'

export default function HeadingDesc({title,desc}) {
  return (
    <div>
    
    <h2 className='font-bold text-3xl text-primary'>{title}</h2>
    <p className='text-lg text-gray-600 mt-2'>{desc}</p>
    </div>
  )
}
