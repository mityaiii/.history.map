'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Box } from '../boxes/box'
import { motion, useCycle } from 'framer-motion'
import Image from 'next/image'

const arrowVariants = {
  'open': {},
  'close': {
    rotate: [0, 180],
  },
}

const contentVariants = {
  'open': {
    opacity: 1,
    display: 'block',
  },
  'close': {
    y: -5,
    display: 'none',
    opacity: 0,
  },
}

export const ToggleDown = ({ children, header, className }: {
  children: React.ReactNode,
  header: string,
  className?: string,
}) => {
  const [open, setOpen] = useCycle('open', 'close');

  return (
    <Box className={twMerge('relative', className)}>
      <motion.div
        className='absolute right-4 top-4 cursor-pointer'
        initial='open'
        variants={arrowVariants}
        animate={open}
        transition={{
          ease: 'linear',
          duration: 0.2,
        }}
        onClick={() => setOpen()}
      >
        <Image
          alt='arrow' 
          src='/icons/arrow-up.svg'
          width={16} 
          height={16} 
        />
      </motion.div>
      <h5 className='font-bold w-4/5'>{header}</h5>
      <motion.div
        initial='open'
        variants={contentVariants}
        animate={open}
        className='pt-2 w-4/5'
      >
        { children }
      </motion.div>
    </Box>
  )
}
