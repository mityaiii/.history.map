import React from 'react'

export const DateInput = ({ date, dateInputHandler }: 
  { date: string, dateInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return(
    <input 
      value={date}
      onChange={dateInputHandler}
      type='date'
      className='w-32 h-7 rounded-sm text-center text-sm bg-neutral-100'
    />
  )
} 

