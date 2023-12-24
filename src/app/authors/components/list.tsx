import React from 'react'

export const List = ({ header, points }: { header: string, points: string[] }) => {
  return (
    <div>
      <h5 className='font-bold pb-1'>{ header }</h5>
      <ul className='list-disc list-outside'>
        { points.map((value, indx) => <li className='ml-5' key={indx}>{ value }</li>) }
      </ul>
    </div>
  )
}
