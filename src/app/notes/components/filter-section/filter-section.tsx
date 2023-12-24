'use client'

import React, { useState } from 'react'
import { FilterNav } from './nav/filter-nav'
import { Filter } from './filter'
import { filterType } from './filter.type'
import { ControlPanel } from '../control-panel/control-panel'
import { motion, useCycle } from 'framer-motion'

const variants = {
  'open': {
    opacity: '100%',
    display: 'block',
    y: 0,
  },
  'close': {
    display: 'hidden',
    opacity: '0%',
    y: 10,
  },
}

export const FilterSection = () => {
  const [filter, setFilter] = useState<filterType>('общее');
  const [openFilter, setOpenFilter] = useCycle('open', 'close');

  return (
    <div className='max-w-[400px] mx-auto sm:mx-0 pb-1'>
      <ControlPanel
        onFilterClick={setOpenFilter}
      />
      <motion.div
        initial={'open'}
        animate={openFilter}
        variants={variants}
      >
        <FilterNav setFilter={setFilter}/>
        <Filter variant={filter}/>
      </motion.div> 
    </div>
  )
}
