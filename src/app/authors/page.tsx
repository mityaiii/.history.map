

import React from 'react'
import { FilterSection } from '../notes/components/filter-section/filter-section'
import { Author, IAuthor } from './components/author'

const authors: IAuthor[] = [
  {
    id: 1,
    name: 'Никулин Анисим Прокопьевич',
    birthDate: '15/03/1902',
    gender: 'мужчина',
  },
  {
    id: 2,
    name: 'Никулин Анисим Прокопьевич',
    birthDate: '15/03/1902',
    gender: 'мужчина',
  },
  {
    id: 3,
    name: 'Никулин Анисим Прокопьевич',
    birthDate: '15/03/1902',
    gender: 'мужчина',
  },
  {
    id: 4,
    name: 'Никулин Анисим Прокопьевич',
    birthDate: '15/03/1902',
    gender: 'мужчина',
  },
]

export default function Authors() {
  return (
    <section className='bg-gray-700 min-h-screen pt-24'>
      <div className='w-5/6 mx-auto flex gap-x-5'>
        <FilterSection/>
        <div className='grid grid-cols-2 auto-rows-max 2xl:grid-cols-3 gap-5'>
          { authors.map((value, indx) => <Author key={indx} {...value}/>) }
        </div>
      </div>
    </section>
  )
}
