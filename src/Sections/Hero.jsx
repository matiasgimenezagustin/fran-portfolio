import React from 'react'
import avatar from '../assets/fran-foto.jpg'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import '../style/hero.css'
const Hero = () => {
  const {isEsp} = useGlobalContext()
  return (
    <section className='hero'>
      <div className='heroContent'>
        <div className='heroTitle'>
          <h1>Hola, soy <span className='bold-title'>Franco</span></h1>
          <h1>Desarrollador Front-end</h1>
        </div>
        <p className='heroDescription'>
          {
            isEsp ?
            `Especialista en tecnología de la información con una sólida experiencia en el desarrollo,
            gestión y entrega de proyectos con diversas tecnologías, como JavaScript, React Native,
            React y NodeJS, entre otras, y en la creación de soluciones para diferentes industrias (retail,
            marketing, finanzas, tecnología de la información), con equipos multidisciplinarios y remotos.`
            :
            `IT specialist with a solid background in developing, management and delivery of projects with
            various technologies, such as JavaScript, React Native, React and NodeJS, among others,
            and developing solutions for varied industries (retail, marketing, finance, IT), with
            multidisciplinary and remote teams.`
          }
        </p>
      </div>
      <div className='heroImage'>
        <img src={avatar}/>
      </div>
    </section>
  )
}

export default Hero