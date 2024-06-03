import React from 'react'
import { AiFillLinkedin } from "react-icons/ai"
import {CgMail} from "react-icons/cg"
import { DataContext } from '../../context/SliceContext'

const Contact = () => {
  const {textColor,statusColor} = DataContext()
  return (
    <div className='w-11/12 mt-10 m-auto sm:w-3/6 sm:mt-20'>
      <h3 className={`text-center ${textColor} text-2xl font-bold mb-5`}>Contactame</h3>
      <p className={`font-semibold text-center ${textColor} leading-8 px-10`}>Actualmente estoy disponible para sumarme a tú equipo de desarrollo y desenvolver todos mis conocimientos.
        Si sos desarrollador/a y tenes alguna traba en algo, no dudes en dejarme un mensaje,
        tal vez te pueda dar una mano 🤜🤛</p>

        <div className='flex items-center gap-1 justify-center sm:py-10'>
        <a href="mailto:nahuelposdeley10@gmail.com" className={`${statusColor ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} flex items-center justify-center w-44 text-center rounded border p-1 border-gray-400`}>
            <CgMail color='red' size={22} />
            <span className={`text-center ${textColor}`}>E-mail</span>
        </a>
        <a href='https://www.linkedin.com/in/brandon-posdeley-1b052b1b0/' target='_blank' className={`${statusColor ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} flex items-center w-44 text-center justify-center rounded border p-1 border-gray-400`} rel="noreferrer">
            <AiFillLinkedin color='blue' size={22} />
            <span className={`text-center ${textColor}`}>Linkedin</span>
        </a>
        </div>
    </div>
  )
}

export default Contact
