import React from 'react'
import { Header } from './header'
import { CustomSelect } from './custome-select'

const options = [
  { value: 'бомбардировка', label: 'бомбардировка' },
  { value: 'пожар', label: 'пожар' },
]

export const Personal = () => {
  return (
    <div>
      <Header 
        icon={
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='12' cy='8' r='4' fill='#7E869E' fillOpacity='0.25' stroke='#222222' strokeWidth='1.2'
              strokeLinecap='round'
            />
            <path fillRule='evenodd' clipRule='evenodd' 
              d='M15.5911 15.9999C15.1398 15.8414 14.6706 15.7129 14.1888 15.6161C12.7543 15.3278 11.2458 15.3278
              9.81129 15.6161C8.37733 15.9043 7.05554 16.473 5.9832 17.2773C4.91049
              18.0818 4.11633 19.1012 3.70763 20.2451C3.59614 20.5572 3.75873 20.9005 4.07079 21.012C4.38284 21.1235
              4.72619 20.9609 4.83767 20.6489C5.15589 19.7582 5.78994 18.9222 6.7032 18.2373C7.61683 17.552 8.76879
                17.0496 10.0477 16.7926C10.8677 16.6278 11.7163 16.5687 12.5568 16.6153C12.9208 16.236 13.4329 15.9999
                14.0001 15.9999L15.5911 15.9999Z' fill='#222222'/>
            <path d='M18 14L18 22' stroke='#222222' strokeWidth='1.2' strokeLinecap='round'/>
            <path d='M22 18L14 18' stroke='#222222' strokeWidth='1.2' strokeLinecap='round'/>
          </svg>
        } 
        text={'персоналии'}
      />
      <CustomSelect options={options} placeholder={'выбрать человека'}/>
    </div>
  )
}
