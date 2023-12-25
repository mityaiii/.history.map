'use client'

import React, { useState } from 'react'
import { FilterNavItem, IFilterNavItem } from './filter-nav-item'
import { filterType } from '../filter.type'

const navItemsValue: IFilterNavItem[] = [
  {
    text: 'общее',
    activeColor: 'bg-other-300',
  },
  {
    text: 'персоналия',
    activeColor: 'bg-green-300',

  },
  {
    text: 'место',
    activeColor: 'bg-warn-300',
  },
]

export const FilterNav = ({ setFilter }: { setFilter: React.Dispatch<React.SetStateAction<filterType>> }) => {
  const [indxOfActiveItem, setIndxOfActiveItem] = useState(0)

  return (
    <div className='mb-3'>
      <ul className='flex justify-between'>
        { navItemsValue.map((value, indx) => 
          <FilterNavItem
            key={indx} 
            filter={value}
            status={indx === indxOfActiveItem}
            onClick={() => {
              setIndxOfActiveItem(indx);
              setFilter(value.text)
            }}
          />
        )}
      </ul>
    </div>
  )
}
