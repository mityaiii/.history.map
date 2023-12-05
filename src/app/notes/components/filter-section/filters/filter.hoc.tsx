import React from 'react'
import { filterType } from '../filter.type';
import { FilterCommon } from './filter-common';
import { FilterPersonal } from './filter-personal';
import { FilterPlace } from './filter-place';

interface IFilterHoc {
  variant: filterType;
}

export const FilterHoc: React.FC<IFilterHoc> = ({ variant }) => {
  let componentToRender = null;

  switch (variant) {
  case 'общее':
    componentToRender = <FilterCommon/>;
    break;
  case 'персоналия':
    componentToRender = <FilterPersonal/>;
    break;
  case 'место':
    componentToRender = <FilterPlace/>;
    break;
  default:
    componentToRender = <FilterCommon/>;
  }

  return <div className='mx-auto flex flex-col gap-y-5 w-[90%]'>
    {componentToRender}
  </div>
}
