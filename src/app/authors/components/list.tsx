import React from 'react'

export const List = ({ className, header, points }: { className?: string, header: string, points: string[] }) => {
  return (
    <div className={className}>
      <h5 className='font-bold pb-1'>{ header }</h5>
      <ul className='list-disc list-outside'>
        { points.map((value, indx) => <li className='ml-5' key={indx}>{ value }</li>) }
      </ul>
    </div>
  )
}
