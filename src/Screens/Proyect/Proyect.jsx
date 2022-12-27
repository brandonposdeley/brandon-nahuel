import React from 'react'
import ListProyects from '../../components/ListProyects/ListProyects'
import { DataContext } from '../../context/SliceContext'

const Proyect = () => {
  const {textColor} = DataContext()

  return (
    <div className='w-11/12 mt-10 m-auto sm:w-3/6 sm:mt-20'>
      <h3 className={`text-center ${textColor} text-2xl font-bold mb-5`}>👨‍🔧Proyectos🔨</h3>
      <ListProyects />
    </div>
  )
}

export default Proyect
