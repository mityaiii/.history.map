'use client'

import React from 'react'
import { INote, Note } from './note'
import { FilterSection } from './filter-section/filter-section'

export const Notes = ({ notes }: {notes: INote[]}) => {
  return (
    <section>
      <FilterSection/>
      { notes.map(value => <Note key={value.note_id} { ...value }/>) }
    </section>
  )
}
