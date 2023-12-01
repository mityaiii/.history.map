import React from 'react'

export interface IFilterNavItem {
  text: string;
  activeColor: string;
}

interface IFilterNavItemProps {
  filter: IFilterNavItem; 
  status: boolean;
  onClick: () => void;
}

export const FilterNavItem: React.FC<IFilterNavItemProps> = ({ filter, status, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`${status ? filter.activeColor : 'bg-slate-100'} 
      cursor-pointer py-2 px-4 shadow-md rounded-2xl transition-colors ${!status ? 'hover:bg-slate-300': ''}`}
    >
      <a>
        { filter.text }
      </a>
    </li>
  )
}
