import React, { useState } from 'react'
import { FilterNav } from './nav/filter-nav'
import { Filter } from './filter'
import { filterType } from './filter.type'

export const FilterSection = () => {
  const [filter, setFilter] = useState<filterType>('общее');

  return (
    <div className='w-[95%] max-w-[400px] mx-auto sm:mx-0'>
      <FilterNav setFilter={setFilter}/>
      <Filter variant={filter}/>
    </div>
  )
}
