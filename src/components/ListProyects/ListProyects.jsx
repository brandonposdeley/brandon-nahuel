import React from 'react'
import { data } from '../../data/data'
import CardProyect from './CardProyect'

const ListProyects = () => {
  return (
    <div className='block sm:flex sm:flex-wrap justify-center gap-2'>
      {
        data.map(proyect => {
            return (
                <CardProyect key={proyect.id} {...proyect} />
            )
        })
      }
    </div>
  )
}

export default ListProyects
