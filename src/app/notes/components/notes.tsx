'use client'

import React from 'react'
import { Note } from './note'
import { INote } from '@/interfaces/note.interface'
import { FilterSection } from './filter-section/filter-section'

export const Notes = ({ notes }: {notes: INote[]}) => {
  return (
    <section className='w-5/6 mx-auto flex gap-x-3 min-h-[120vh]'>
      <FilterSection/>
      <ul className='pt-16 lg:pt-0 flex flex-col items-center gap-y-3'>
        { notes.map(value => <Note key={value.note_id} { ...value }/>) }
      </ul>
    </section>
  )
}
