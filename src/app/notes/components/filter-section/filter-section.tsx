import React from 'react'
import { FilterNav } from './nav/filter-nav'
import { FilterHoc } from './filters/filter.hoc'
import { Filter } from './filter'

export const FilterSection = () => {
  return (
    <div className='w-[400px]'>
      <FilterNav/>
      <Filter/>
    </div>
  )
}
