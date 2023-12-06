import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export interface IOption {
  value: string;
  label: string;
}

export const CustomSelect = ({ isMulti, options, placeholder }: 
  { 
    isMulti?: boolean,
    options: IOption[], 
    placeholder: string 
  }) => {
    
  const id = Date.now().toString();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <Select
      className='w-4/5 text-sm'
      isMulti={isMulti}
      id={id}
      options={options}
      placeholder={placeholder}
    />
  ) : null
}
