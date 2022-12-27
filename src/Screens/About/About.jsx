import React from 'react';
import profile from '../../assets/brandon-nahuel.png'
import CardTechnology from '../../components/Tecnologies/CardTechnology';
import { DataContext } from '../../context/SliceContext';
import { myTechnologies } from '../../data/data';


const About = () => {
    const {textColor} = DataContext()
  return (
    <div className='w-11/12 mt-10 m-auto sm:w-3/6 sm:mt-20'>
      <img className='w-6/12 m-auto sm:w-4/12 rounded-full border-4 border-black-700' src={profile} alt='brandon' />
      <h1 className={`font-bold text-2xl md:text-4xl mt-4 mb-5 ${textColor} text-center`}>Hola, me llamo Nahuel 👋</h1>
        <p className={`font-semibold text-center ${textColor} my-14 leading-8 px-6 lg:px-6`}>Soy un Frontend Developer argentino 🇦🇷. Vivo en Buenos Aires 🧍‍♂️, Trabajo con el stack de React,
            me considero muy detallista (no me gusta ver ni un pixel fuera de lugar 😅), autodidacta y me gusta optimizar cada componente que desarrollo
        </p>
        <h3 className={`text-center ${textColor} text-2xl font-bold mb-5`}>Tecnologias 🤓</h3>
      <div className='flex flex-wrap justify-center pb-20 sm:pb-20'>
      {
        myTechnologies.map(item => {
            return (
                <CardTechnology key={item.id} title={item.title} size={item.size} url={item.url} />
            )
        })
      }
      </div>
    </div>
  )
}

export default About
