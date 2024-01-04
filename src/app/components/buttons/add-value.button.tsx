import { motion } from 'framer-motion';
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IAddValueButton {
  children: string;
  onClick?: () => void;
  className?: string;
}

export const AddValueButton: React.FC<IAddValueButton> = (props) => {
  return (
    <motion.button 
      onClick={props.onClick}
      className={twMerge('', props.className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{ props.children }</span>
    </motion.button>
  )
}