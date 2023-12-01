import React from 'react'
import { FilterHoc } from './filters/index'

export const Filter = () => {
  return (
    <div className='bg-slate-50 pt-4 rounded-md w-[400px]'>
      <FilterHoc variant='общее'/>
    </div>
  )
}
