'use client'

import HeaderHoc from './header.hoc';

export const sections = [
  { name: 'о проекте', path: '/' },
  { name: 'карта', path: '/map' },
  { name: 'цитаты', path: '/notes' },
  { name: 'персоналии', path: '/authors' },
]

export default function Header() {
  return (
    <HeaderHoc
      sections={sections}
    />
  );
}
