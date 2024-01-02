'use client'

import React, { useState } from 'react'
import { FilterIcon } from './filter-icon'
import { ButtonWithIcon } from './button-with-icon'
import { CrossIcon } from './cross-icon'
import { twMerge } from 'tailwind-merge'
import {ArrowDownIcon} from './arrow-down-icon';

export const ControlPanel = ({ onFilterClick, className }: { onFilterClick?: () => void, className?: string }) => {
  const [inputText, setInputText] = useState('')
  const [isFold, setIsFold] = useState(false)

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const eraseTextHandler = () => {
    setInputText('');
  }

  const changeButtonOnClick = () => {
    if (onFilterClick === undefined) {
      return
    }
    onFilterClick()
    setIsFold(!isFold)
  }

  return (
    <div className={twMerge('flex gap-2 pb-3', className)}>
      <input
        type='text'
        value={inputText}
        onChange={textHandler}
        className='w-full pl-5 pr-10 bg-search-field bg-no-repeat bg-right-with-space rounded-xl shadow-xl'
      />

      { isFold &&
        <ButtonWithIcon
          onClick={changeButtonOnClick}
          bgColor='bg-warn-500'
        >
          <FilterIcon/>
        </ButtonWithIcon> }

      { !isFold &&
        <ButtonWithIcon
          onClick={changeButtonOnClick}
          bgColor='bg-good-700'
        >
          <ArrowDownIcon/>
        </ButtonWithIcon> }
      { !isFold &&
        <ButtonWithIcon
          onClick={eraseTextHandler}
          bgColor='bg-angry-700'
        >
          <CrossIcon/>
        </ButtonWithIcon> }
    </div>
  )
}
