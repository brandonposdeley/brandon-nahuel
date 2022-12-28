import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import { BsGithub} from 'react-icons/bs'
import { DataContext } from '../../context/SliceContext'

const Footer = () => {
    const {textColor,colors} = DataContext()
  return (
    <footer className={` ${colors} text-center w-full`}>
    <section className={`flex justify-center gap-2 ${colors} `}>
      <a href={'https://www.linkedin.com/in/brandon-posdeley-1b052b1b0/'} target='_blank' className={'p-1 rounded border border-gray-400'} rel="noreferrer">
            <FcGoogle size={26} /> 
        </a>
        <a href={'https://www.instagram.com/nahuposdeley_/'} target='_blank' className={'p-1 rounded border border-gray-400'} rel="noreferrer">
            <FaInstagramSquare size={26} color='red' />
        </a>   
        <a href={'https://www.linkedin.com/in/brandon-posdeley-1b052b1b0/'} target='_blank' className={'p-1 rounded border border-gray-400'} rel="noreferrer">
            <FaLinkedin size={26} color='blue' />
        </a>   
        <a href={'https://github.com/Nahuel-Posdeley'} target='_blank' className={'p-1 rounded border border-gray-400'} rel="noreferrer">
            <BsGithub size={26} color='black' />
        </a>
    </section>
  <div className={`${textColor}`}>
    © 2022 Brandon Posdeley:
  </div>
</footer>
  )
}

export default Footer