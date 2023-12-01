'use client'

import React, { useState } from 'react'
import { INote, Note } from './note'
import { Toggle } from './toggle/toggle'
import { FilterSection } from './filter-section/filter-section'

export const Notes = ({ notes }: {notes: INote[]}) => {
  const [toggleState, setToggleState] = useState(false)

  return (
    <section className=''>
      {/* <Toggle 
        toggleState={toggleState}
        setToggleState={setToggleState}
      >
      </Toggle> */}
      <FilterSection/>
      { notes.map(value => <Note key={value.note_id} { ...value }/>) }
    </section>
  )
}
