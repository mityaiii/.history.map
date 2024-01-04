'use client'

import React from 'react'
import { Notes } from './components/notes'
import { useNoteStore } from '@/store/notes.store'

// add fetch to server
export default function NotesPage() {
  const notes = useNoteStore(props => props.notes)

  return (
    <main className='bg-gray-700 pt-24 min-h-[100vh]'>
      <Notes notes={notes}/>
    </main>
  )
}