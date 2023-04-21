import React from 'react'

function Card() {
  return (
    <div>
      <div className='box-border shadow-md border w-40 h-auto ml-10 mt-20 bg-gray-100'>
        <p className='text-gray-400 text-lg font-bold'>what i want to do today </p>
        <p className='text-gray-400 pt-2'>kiss</p>
        <button className='bg-blue-200 ml-[88px] mt-1 px-3 shadow-md'>Delete</button>
      </div>
      
    </div>
  )
}

export default Card