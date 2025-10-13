import React from 'react'

const Button = ({onClick,type,text}) => {
  return (
    <button 
    className='w-1/2 md:w-1/5 lg:w-1/5 xl:w-1/5 2xl:w-1/5  bg-[var(--primary)] text-white px-3 py-1 rounded-lg text-sm h-10 cursor-pointer' onClick={onClick}>
    {text}

    </button>
  )
}

export default Button
