'use client'

import React from 'react'
import { DeleteValueButton } from '@/app/components/buttons/delete-value.button'
import { DateInput } from '@/app/components/inputs/date.input';

export interface IPeriod {
  start: string,
  end: string,
}

interface IPeriodInput {
  period: IPeriod;
  onClick: () => void;
  periodStartHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  periodEndHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PeriodInput: React.FC<IPeriodInput> = ({ period, onClick, periodStartHandler, periodEndHandler }) => {
  return (
    <div className='flex items-center mb-3 gap-x-2'>
      <DateInput dateInputHandler={periodStartHandler} date={period.start}/>
      <svg 
        width='35' 
        height='2' 
        viewBox='0 0 35 2' 
        fill='none' 
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='1' x2='35' y2='1' stroke='#EDEDEF'/>
      </svg>
      <DateInput dateInputHandler={periodEndHandler} date={period.end}/>
      <DeleteValueButton onClick={onClick}/>
    </div>
  )
}
