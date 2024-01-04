import { motion } from 'framer-motion';
import React from 'react'

interface IDeleteValueButton {
  onClick?: () => void;
}

export const DeleteValueButton: React.FC<IDeleteValueButton> = (props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >  
      <svg
        width='12' 
        height='12' 
        viewBox='0 0 35 35' 
        fill='none' 
        xmlns='http://www.w3.org/2000/svg'
        className='stroke-gray-700 hover:stroke-angry-700 transition-colors'
        onClick={props.onClick}
      >
        <line x1='1' y1='1' x2='35' y2='35' strokeWidth={8}/>
        <line x1='35' y1='1' x2='1' y2='35' strokeWidth={8}/>
      </svg>
    </motion.button>
  )
};