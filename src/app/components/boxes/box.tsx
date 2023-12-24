import React from 'react'
import { twMerge } from 'tailwind-merge';

export const Box = ({ children, className }: 
  { children: React.ReactNode, className?: string }) => {
  return (
    <div className={twMerge('p-4 bg-neutral-100 rounded-md', className)}>
      { children }
    </div>
  )
};