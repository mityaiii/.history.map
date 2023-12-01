'use client'

import React, { useState } from 'react'
import { FilterNavItem, IFilterNavItem } from './filter-nav-item'

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

export const FilterNav = () => {
  const [indxOfActiveItem, setIndxOfActiveItem] = useState(0)

  return (
    <div className='mb-3 mx-4'>
      <ul className='flex justify-between'>
        { navItemsValue.map((value, indx) => 
          <FilterNavItem
            key={indx} 
            filter={value}
            status={indx === indxOfActiveItem}
            onClick={() => setIndxOfActiveItem(indx)}
          />
        )}
      </ul>
    </div>
  )
}
