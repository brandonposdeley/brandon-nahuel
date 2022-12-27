import React from 'react'
import { AiFillLinkedin } from "react-icons/ai"
import {CgMail} from "react-icons/cg"
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/SliceContext'
import imgContact from '../../assets/contact.svg'

const Contact = () => {
  const {textColor} = DataContext()
  return (
    <div className='w-11/12 mt-10 m-auto sm:w-3/6 sm:mt-20'>
      <h3 className={`text-center ${textColor} text-2xl font-bold mb-5`}>Contactame</h3>
      <p className={`font-semibold text-center text-slate-600 ${textColor} leading-8 px-10`}>Actualmente estoydisponiblepara sumarme a tú equipo de desarrollo y desenvolver todos mis conocimientos.
        Si sos desarrollador/a y tenes alguna traba en algo, no dudes en dejarme un mensaje,
        tal vez te pueda dar una mano 🤜🤛</p>

        <div className='flex items-center gap-1 justify-center sm:py-10'>
        <NavLink href="mailto:nahuelposdeley10@gmail.com" className='hover:bg-slate-100 flex items-center justify-center w-44 text-center rounded border p-1 border-gray-400'>
            <CgMail color='red' size={22} />
            <span className={`text-center ${textColor}`}>E-mail</span>
        </NavLink>
        <NavLink href='#' className='hover:bg-slate-100 flex items-center w-44 text-center justify-center rounded border p-1 border-gray-400'>
            <AiFillLinkedin color='blue' size={22} />
            <span className={`text-center ${textColor}`}>Linkedin</span>
        </NavLink>
        </div>
        <img src={imgContact} className='m-auto mt-2 w-7/12 sm:w-3/5' alt='' />
    </div>
  )
}

export default Contact
