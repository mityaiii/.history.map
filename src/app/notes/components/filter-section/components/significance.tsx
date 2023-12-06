import React from 'react'
import { Header } from './header'
import Checkbox from './checkbox'

const significanceTypes: string[] = [
  'Общегородская',
  'Микрособытие',
]

export const Significance = () => {
  return (
    <div>
      <Header
        text='значимость'
        icon={
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='12' cy='12' r='9' fill='#7E869E' fillOpacity='0.25' stroke='#222222' strokeWidth='1.2'/>
            <path 
              d='M12 8.1C12.3314 8.1 12.6 7.83137 12.6 7.5C12.6 7.16863 12.3314 6.9 12 6.9C11.6686 6.9 11.4
              7.16863 11.4 7.5C11.4 7.83137 11.6686 8.1 12 8.1Z' 
              fill='#222222' stroke='#222222' strokeWidth='0.2'
            />
            <path d='M12 17V10' stroke='#222222' strokeWidth='1.2'/>
          </svg>
        }
      />
      <ul className='ml-4 flex flex-col'>
        { significanceTypes.map((value, indx) => 
          <Checkbox key={indx} text={value} id='id'/>
        )}
      </ul>
    </div>
  )
}
