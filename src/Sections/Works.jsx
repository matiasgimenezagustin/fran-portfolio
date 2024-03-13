import React from 'react'
import '../style/work.css'
import {  worksEn, worksEs } from '../data/worksList'
import { useGlobalContext } from '../Context/GlobalContextProvider'

const Works = () => {
  const {isEsp} = useGlobalContext()
  return (
    <section className='section'>
      <h2 className='titleSection'>
        Obras
      </h2>
      <div className='worksContainer'>
        {
          isEsp 
          ? <WorksList works={worksEs}/>
          : <WorksList works={worksEn} />
        }
        
      </div>
    </section>
  )
}

const WorksList = ({works}) =>{
  return (
    <>
    {works.map((work) =>(
      <div key={work.id} className='workCard'>
          <h3>{work.name}</h3>
          <p>{work.descripcion}</p>
          <div className='tecnologies'>
            {work.tecnologies.map((tecnology, i) => (
              <span key={i}>
                {tecnology}
              </span>
            ))}
          </div>
          <div className='workImageContainer'>
            <span className="work-filter"></span>
            <img src={work.image} alt="imagen-de-proyecto" />
          </div>
      </div>
    ))}
    </>
  )
}

export default Works