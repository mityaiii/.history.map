import React from 'react'
import { motion } from 'framer-motion'

interface IButtonWithIcon {
  children: React.ReactNode;
  bgColor: string;
}

export const ButtonWithIcon: React.FC<IButtonWithIcon> = ({ children, bgColor }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95}}
      className={`${bgColor} p-2 rounded-md shadow-lg`}
    >
      { children }
    </motion.button>
  )
}
