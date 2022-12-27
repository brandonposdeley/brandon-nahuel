import React from 'react'
import { NavLink } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import { FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import { BsGithub} from 'react-icons/bs'
import { DataContext } from '../../context/SliceContext'

const Footer = () => {
    const {textColor,colors} = DataContext()
  return (
    <footer className={` ${colors} text-center w-full`}>
    <section className={`flex justify-center gap-2 ${colors} `}>
        <NavLink className={'p-1 rounded border border-gray-400'}>
            <FcGoogle size={26} /> 
        </NavLink>
        <NavLink className={'p-1 rounded border border-gray-400'}>
            <FaInstagramSquare size={26} color='red' />
        </NavLink>   
        <NavLink className={'p-1 rounded border border-gray-400'}>
            <FaLinkedin size={26} color='blue' />
        </NavLink>   
        <NavLink className={'p-1 rounded border border-gray-400'}>
            <BsGithub size={26} color='black' />
        </NavLink>
    </section>
  <div className={`${textColor}`}>
    © 2022 Brandon Posdeley:
  </div>
</footer>
  )
}

export default Footer