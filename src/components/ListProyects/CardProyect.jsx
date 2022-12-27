import React from 'react'
import { technologies } from '../../data/data'
import TagTechnologies from './TagTechnologies'
import {IoIosRocket} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import { DataContext } from '../../context/SliceContext'
import { NavLink } from 'react-router-dom'

const CardProyect = (props) => {
    const {textColor,statusColor} = DataContext()

  return (
    <div className="max-w-sm border border-gray-400 my-2 rounded-lg sm:w-64">
        <NavLink>
        <img className="rounded-t-lg" src={props.url} alt="" />
        </NavLink>
        <div className="p-5">
            <NavLink href="#">
            <h5 className={`mb-2 text-2xl font-bold tracking-tight ${textColor}`}>{props.title}</h5>
            </NavLink>
            <p className={`mb-3 font-normal ${textColor}`}>{props.description}</p>
            <div className='flex flex-wrap'>
                {technologies.map(tech => {
                    return (
                        <TagTechnologies key={tech.id} tech={tech} />
                    )
                })}
            </div>
            <div className='flex items-center gap-2 justify-center mt-4 sm:mt-2'>
        <NavLink href="#" className='sm:hover:bg-slate-100 flex items-center justify-center w-44 text-center rounded border p-1 border-black'>
            <IoIosRocket color='red' size={22} />
            <span className={`text-center ${textColor}`}>Deploy</span>
        </NavLink>
        <NavLink href='#' className='hover:bg-slate-100 flex items-center w-44 text-center justify-center rounded border p-1 border-black'>
            <AiFillGithub color={statusColor ? 'white' : 'black'} size={22} />
            <span className={`text-center ${textColor}`}>Codigo</span>
        </NavLink>
        </div>
        </div>
    </div>
  )
}

export default CardProyect
