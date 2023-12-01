import React from 'react'

const DateInput = ({ date }: { date: string}) => {
  return(
    <div className='w-32 h-7 text-center text-sm pt-[5px] rounded-sm bg-neutral-100'>
      { date }
    </div>
  )
} 

export interface IPeriodInput {
  start: string,
  end: string,
}

export const PeriodInput: React.FC<IPeriodInput> = (props) => {
  return (
    <div className='flex items-center gap-x-2'>
      <DateInput date={props.start}/>
      <svg 
        width='35' 
        height='2' 
        viewBox='0 0 35 2' 
        fill='none' 
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='1' x2='35' y2='1' stroke='#EDEDEF'/>
      </svg>
      <DateInput date={props.end}/>
    </div>
  )
}
