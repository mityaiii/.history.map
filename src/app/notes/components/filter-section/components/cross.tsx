import React from 'react'

export const Cross = ({ onClick }: { onClick: () => void, color?: string }) => {
  return (
    <svg
      width='12' 
      height='12' 
      viewBox='0 0 35 35' 
      fill='none' 
      xmlns='http://www.w3.org/2000/svg'
      className='stroke-gray-700 hover:stroke-angry-700 transition-colors'
      onClick={onClick}
    >
      <line x1='1' y1='1' x2='35' y2='35' strokeWidth={8}/>
      <line x1='35' y1='1' x2='1' y2='35' strokeWidth={8}/>
    </svg>
  )
}
