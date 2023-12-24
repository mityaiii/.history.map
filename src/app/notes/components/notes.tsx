'use client'

import React from 'react'
import { INote, Note } from './note'
import { FilterSection } from './filter-section/filter-section'

export const Notes = ({ notes }: {notes: INote[]}) => {
  return (
    <section className='w-5/6 mx-auto'>
      <FilterSection/>
      { notes.map(value => <Note key={value.note_id} { ...value }/>) }
    </section>
  )
}
