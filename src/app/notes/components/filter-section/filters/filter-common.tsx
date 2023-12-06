import React from 'react'
import { Period } from '../components/period'
import { TypeOfCertificate } from '../components/type-of-certificate'
import { Retrospective } from '../components/retrospective'
import { Significance } from '../components/significance'
import { Thematics } from '../components/thematics'

export const FilterCommon = () => {
  return (
    <>
      <Period/>
      <Thematics/>
      <TypeOfCertificate/>
      <Retrospective/>
      <Significance/>
    </>
  )
}