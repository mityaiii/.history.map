import React from 'react'
import { FilterHoc } from './filters/index'
import { filterType } from './filter.type'

export const Filter = ({ variant }: { variant: filterType }) => {
  return (
    <div className='bg-slate-50 pt-4 mx-auto rounded-md'>
      <FilterHoc variant={ variant }/>
    </div>
  )
}
