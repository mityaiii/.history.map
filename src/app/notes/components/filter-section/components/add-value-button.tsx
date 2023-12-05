'use client'

import React from 'react'

interface IAddValueButton {
  onClick?: () => void;
}

export const AddValueButton: React.FC<IAddValueButton> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className='absolute right-0 -top-[2px] font-bold text-xl'
    >
      <span>+</span>
    </button>
  )
}
