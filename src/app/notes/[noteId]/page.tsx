'use client';

import React from 'react'
import { Box } from '@/app/components/boxes/box'
import Link from 'next/link';
import { useNoteStore } from '@/store/notes.store';

export default function Note({ params }: { params: { noteId: number } }) {
  const note = useNoteStore(props => props.notes)[params.noteId - 1];
  const date = new Date(note.created_at)

  return (
    <section className='min-h-screen pt-28 bg-gray-700'>
      <Box className='w-5/6 mx-auto relative'>
        { note.citation }
        <Link
          href={`/authors/${note.author_id}`} 
          className='absolute right-5 bottom-1 text-sm lg:text-base text-neutral-500'
        >
          { note.author } { `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` }
        </Link>
      </Box>
    </section>
  )
}
