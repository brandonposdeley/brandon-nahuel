import React from 'react'
import { DataContext } from '../../context/SliceContext'

const TagTechnologies = ({tech}) => {
  const {textColor} = DataContext()

  return (
    <span className={`w-auto px-3 py-1 ${textColor} text-center rounded-full`}>
        <span>{tech.tech}</span>
    </span>
  )
}

export default TagTechnologies