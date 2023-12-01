import { motion } from 'framer-motion';
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IToggle {
  className?: string;
  children: React.ReactNode;
  toggleState: boolean;
  setToggleState: (value: boolean) => void;
}

const variants = {
  visible: {

  },
  hidden: {

  },
}

export const Toggle: React.FC<IToggle> = ({ className, children, toggleState, setToggleState }) => {
  return (
    <motion.div 
      // inherit='hidden'
      variants={variants}
      className={twMerge('relative rounded-r-3xl bg-slate-400 h-[80vh] w-32', className)}
    >
      <button
        className='absolute right-0 top-1/2 translate-y-1/2 bg-red-500'
      > - </button>
      { children }
    </motion.div>
  )
}
