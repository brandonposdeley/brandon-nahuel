import React from 'react'
import { DataContext } from '../../context/SliceContext'

const CardTechnology = ({title,url,size}) => {
const {textColor} = DataContext()
  return (
    <div className='flex flex-col items-center m-1 text-center border border-gray-400 w-36 p-1 rounded-sm'>
      <p className={`${textColor}`}>{title}</p>
      <img alt='' width={size} src={`${url}`} />
    </div>
  )
}

export default CardTechnology
