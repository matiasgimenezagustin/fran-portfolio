import React from 'react'

import { education } from '../data/educationList'
import '../style/education.css'

const Education = () => {
  return (
    <section className='section'>
      <h2 className='titleSection'>Educación & Skills</h2>
      <div className='educationContainer'>
        <div className='educationImage'>
          <img src='/coding-computer.svg'  alt='coding computer'/>
        </div>
        <CoursesList/>
      </div>
      <TecnologyList/>
    </section>
  )
}

export default Education

const CoursesList = () =>{
  return (
    <div className='coursesList'>

      <div className='courses'>
        {education.map(({from, content, start, end, id}) => (
          <CourseItem key={id} from={from} content={content} start={start} end={end} />
        ))}
      </div>
      
      <span className='line'></span>
    </div>
  )
}

const CourseItem = ({from, content, start, end}) =>{
  return (
    <div className='courseItem'>
      <div className='decoration'>
        <span className='ball'></span>
      </div>
      <div className='item'>
        <h3 className='courseTitle'>{from}</h3>
        <p className='courseContent'>{content}</p>
        <span className='coursePeriod'>{start} - {end}</span>
      </div>
    </div>
  )
} 

import { AiFillHtml5,AiFillGithub } from 'react-icons/ai';
import { DiSass } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { BiLogoJavascript,BiLogoReact,BiLogoFirebase,BiLogoFigma,BiLogoCss3 } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';

const TecnologyList = () =>{
  return (
    <div className='tecnologiesList'>
      <AiFillHtml5/>
      <BiLogoCss3/>
      <DiSass/>
      <BiLogoFigma/>
      <BsGit/>
      <AiFillGithub/>
      <BiLogoJavascript/>
      <BiLogoReact/>
      <BiLogoFirebase/>
      <FaNodeJs/>
    </div>
  )
}

const ListCoursesMobible = ({courses}) =>{
  return (
    <div>

    </div>
   /*  <div>
      <h3 className='courseTitle'>{from}</h3>
      <p className='courseContent'>{content}</p>
      <span className='coursePeriod'>{start} - {end}</span>
    </div> */
  )
}