import { Box } from '@/app/components/boxes/box';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export interface IAuthor {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
}

export const Author = (props: IAuthor) => {
  return (
    <Link href={`/authors/${props.id}`} className=''>
      <Box className='p-2 md:p-4 xl:w-[280px] flex flex-col items-center'>
        <Image 
          className='w-32 h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52' 
          width={100} 
          height={100} 
          src='/author.png' 
          alt='author'
        />
        <h5 className='pt-6 max-w-[200px] text-center lg:text-sm text-xs font-bold break-words'>{ props.name }</h5>
        <p className='text-neutral-500 lg:text-sm text-xs'>
          { props.gender } { props.birthDate }
        </p>
      </Box>
    </Link>
  )
}
