import React, { useState } from 'react';
import { Header } from './header';
import { AddValueButton } from '@/app/components/buttons/add-value.button';
import { IPeriod, PeriodInput } from '@/app/components/inputs/period.input';
import { initValue } from './birth-date';


export const BirthDate = () => {
  const [selectedPeriods, setSelectedPeriods] = useState<IPeriod[]>(initValue);

  const addPeriod = () => {
    setSelectedPeriods(prev => [...prev, {
      start: '',
      end: '',
    }]);
  };

  const removePeriod = (elementIndx: number) => {
    setSelectedPeriods(prev => prev.filter((value, indx) => indx !== elementIndx));
  };

  return (
    <div className='relative'>
      <Header
        text='дата рождения'
        icon={<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6
              20.4142 6.58579C21 7.17157 21 8.11438 21 10V11H3V10Z'
            stroke='#222222' strokeWidth='1.2' />
          <rect x='3' y='6' width='18' height='15' rx='2' stroke='#222222' strokeWidth='1.2' />
          <path d='M9 16H15' stroke='#7E869E' strokeOpacity='0.25' strokeWidth='1.2' strokeLinecap='round' />
          <path d='M8 3L8 7' stroke='#222222' strokeWidth='1.2' strokeLinecap='round' />
          <path d='M16 3L16 7' stroke='#222222' strokeWidth='1.2' strokeLinecap='round' />
        </svg>} />
      <AddValueButton className='absolute right-0 -top-[2px] font-bold text-xl' onClick={addPeriod}>+</AddValueButton>
      {selectedPeriods.map((period, indx) => <PeriodInput
        key={indx}
        period={period}
        periodStartHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newDates = [...selectedPeriods];
          newDates[indx].start = e.target.value;
          setSelectedPeriods(newDates);
        }}
        periodEndHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newDates = [...selectedPeriods];
          newDates[indx].end = e.target.value;
          setSelectedPeriods(newDates);
        }}
        onClick={() => removePeriod(indx)} />
      )}
    </div>
  );
};
