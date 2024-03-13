import React from 'react'
import { services, servicios } from '../data/servicesList'
import '../style/services.css'

import {useGlobalContext} from '../Context/GlobalContextProvider'
import { servicesTypes, servicesTypesEn } from '../data/servicesTypes'

const Services = () => {
  const {isEsp } = useGlobalContext()
  return (
    <section className='section sectionServices'>
      <h2 className='titleSection'>Servicios</h2>
      <div className='servicesList'>
      {
        isEsp ? 
          servicios.map(service =>(
              <ServiceCard key={service.id} service={service}/>
          ))
          :
          services.map(service =>(
            <ServiceCard key={service.id} service={service}/>
          ))
        }
      </div>
      <div className='servicesIconsList'>
        {
          isEsp ? 
          servicesTypes.map(service => (
            <ServiceTypeCard service={service}/>
          ))
          :
          servicesTypesEn.map(service => (
            <ServiceTypeCard service={service}/>
          ))
        }
      </div>
    </section>
  )
}

export default Services

const ServiceCard = ({service}) =>{
  return (
    <div className='serviceCard'>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

const ServiceTypeCard = ({service}) =>{
  return (
    <span className='serviceContainer' key={service.id}>
      <service.Icon/>
      <div className='serviceInfo'>
        <h3>{service.title}</h3>
        <p>{service.content}</p>
      </div>
    </span>
  )
}