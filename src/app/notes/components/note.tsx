import { Box } from '@/app/components/boxes/box';
import { INote } from '@/interfaces/note.interface';
import Link from 'next/link';
import React from 'react'

const maxSymbols = 300;

export const Note: React.FC<INote> = (props) => {
  const truncatedCitation = props.citation.length > maxSymbols
    ? `${props.citation.substring(0, maxSymbols)}...`
    : props.citation;

  const date = new Date(props.created_at);

  return (
    <li className='py-3 lg:w-5/6'>
      <Link href={`notes/${props.note_id}`}>
        <Box className='relative'>
          <p className='pb-3 text-sm lg:text-base'>{ truncatedCitation }</p>
          <label className='absolute right-5 bottom-1 text-sm lg:text-base text-neutral-500'>
            {props.author} {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
          </label>
        </Box>
      </Link>
    </li>
  )
}
