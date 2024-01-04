

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
    <section className='bg-gray-700 pt-24'>
      <div className='relative lg:w-5/6 mx-auto flex gap-x-5'>
        <FilterSection/>
        <div className='min-h-[120vh] w-5/6 pt-16 mx-auto grid 
        auto-rows-max sm:grid-cols-2 lg:w-full lg:pt-0 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
          { authors.map((value, indx) => <Author key={indx} {...value}/>) }
        </div>
      </div>
    </section>
  )
}
