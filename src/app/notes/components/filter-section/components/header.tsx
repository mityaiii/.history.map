import React from 'react'
import Image from 'next/image'

interface IHeader {
  icon: string | React.ReactNode;
  text: string;
}

export const Header:  React.FC<IHeader> = ({ icon, text }) => {
  return (
    <h6 className='text-sm font-semibold flex items-center gap-x-2 mb-3'>
      { 
        typeof icon === 'string'
          ? <Image src={icon} alt='icon'/>
          : icon 
      }
      { text }
    </h6>
  )
}
