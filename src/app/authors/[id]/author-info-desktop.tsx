import { Box } from '@/app/components/boxes/box'
import React from 'react'
import Image from 'next/image'
import { IAuthor } from './page'
import { List } from '../components/list'
import { ToggleDown } from '@/app/components/toggle-down/toggle-down'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface IAuthorInfoProps extends IAuthor { 
  className?: string;
}

export const AuthorInfoDesktop: React.FC<IAuthorInfoProps> = (props) => {
  return (
    <div className={twMerge('p-5 rounded-md bg-white w-5/6 max-w-[1080px] mx-auto gap-x-8 flex', props.className)}>
      <div className='w-80 gap-y-5 flex flex-col text-xs'>
        <Box className='px-2 py-8'>
          <Image
            className='w-20 h-20 rounded-full mx-auto sm:w-40 sm:h-40'
            width={100}
            height={100}
            alt='author' 
            src='/author.png'
          />
          <h3 className='text-center pt-4'>{props.name}</h3>
          <h5 className='text-center pt-1 text-neutral-500'>{props.birthDate} {props.gender}</h5>
        </Box>
        <p className='leading-5'>
          Национальность: <strong>{ props.national }</strong><br/>
          Партийность: <strong>{ props.partisanship }</strong><br/>
          Релегиозность: <strong>{ props.religion }</strong><br/>
          Отношения: <strong>{ props.intercourse }</strong><br/>
          Категория: <strong>{ props.category }</strong><br/>
        </p>
        <List header='Социальное происхождение' points={props.socialBackground}/>
        <List header='Образование' points={props.education}/>
        <List header='Тип деятельности' points={props.education}/>
        <h5 className='font-bold'></h5>
        { props.locations.map((location, indx) => <ToggleDown header={`Место жительства ${indx + 1}`} key={indx}>
          <p>{ location.address }</p>
        </ToggleDown>) }
        { props.workPlaces.map((workPlace, indx) => <ToggleDown header={`Место работы ${indx + 1}`} key={indx}>
          <></>
        </ToggleDown>) }
      </div>
      <div className='w-4/5'>
        { props.bio.split('\n').map((value, indx) => <p className='indent-6 py-2' key={indx}>{value}</p>) }
        <Link href={'#'} className='hover:cursor-pointer'>url</Link>
      </div>
    </div>
  )
}
