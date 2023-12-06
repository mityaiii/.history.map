import React from 'react'
import { INote } from './components/note'
import { Notes } from './components/notes'

const notes: INote[] = [
  {
    note_id: 1,
    author_id: 1,
    point_id: 1,
    created_at: Date.now().toString(),
    // eslint-disable-next-line max-len
    citation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eveniet quia illum modi nemo quam, officiis incidunt repudiandae ab suscipit ipsa quasi! Quaerat minima eveniet doloribus voluptas quis reprehenderit repellendus.',
    citation_source: 'Book 1984',
  },
]

// add fetch to server
export default function NotesPage() {
  return (
    <main className='bg-[#EDEDEF] min-h-[100vh]'>
      {/* <ControlPanel/> */}
      <Notes notes={notes}/>
    </main>
  )
}