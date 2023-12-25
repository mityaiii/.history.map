import React from 'react'
import { AuthorInfoDesktop } from './author-info-desktop'
import { AuthorInfoMobile } from './author-info-mobile'
import { IAuthor } from './page'

export const AuthorInfoHoc: React.FC<IAuthor> = (props) => {
  return (
    <>
      <AuthorInfoDesktop className='hidden md:flex' { ...props }/>
      <AuthorInfoMobile className='md:hidden' { ...props }/>
    </>
  )
}