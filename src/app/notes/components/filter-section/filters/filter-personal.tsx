import React from 'react'
import { Personal } from '../components/personal'
import { BirthDate } from '../components/BirthDate'
import { Partisanship } from '../components/partisanship'
import { Sex } from '../components/sex'

export const FilterPersonal = () => {
  return (
    <>
      <Personal/>
      <BirthDate/>
      <Sex/>
      <Partisanship/>
    </>
  )
}
