import React, { useState } from 'react'
import { useGlobalContext } from '../Context/GlobalContextProvider'
import {BsSunFill, BsFillMoonFill} from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'
import { GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
  const {handleChangeLenguage, handleChangeTheme, isLight, isEsp} = useGlobalContext()
  const [showHeader, setShowHeader] = useState(false)
  const handleShowNav = () =>{
    setShowHeader(!showHeader)
  }
  
  return (
    <header>

      <h2>Franco Bulacio</h2>
      <nav>
        <a href="" className='linkSelected'>{isEsp ? 'Inicio' : 'Home'}</a>
        <a href="">{isEsp ? 'Educacion' : 'Education'}</a>
        <a href="">{isEsp ? 'Obras' : 'Works'}</a>
        <a href="">{isEsp ? 'Servicios' : 'Services'}</a>
        <a href="">{isEsp ? 'Contacto' : 'Contact'}</a>
      </nav>
      
      <div className='controlsHeader'>
        <button onClick={handleChangeTheme}>{isLight ? <BsFillMoonFill/> : <BsSunFill/>}</button>
        <button onClick={handleChangeLenguage}>{isEsp ? 'ES' : 'EN'}</button>
        <button className='btn-menu' onClick={handleShowNav}>
          {!showHeader ?  <GiHamburgerMenu/> : <RxCross1/> }
        </button>
      </div>
      {showHeader && <ResponsiveNav/>}
    </header>
  )
}

export default Header

const ResponsiveNav = () =>{
  const {isEsp} = useGlobalContext()
  return (
    <nav className='responsiveNav'>
      <a href="" className='linkSelected'>{isEsp ? 'Inicio' : 'Home'}</a>
      <a href="">{isEsp ? 'Educacion' : 'Education'}</a>
      <a href="">{isEsp ? 'Obras' : 'Works'}</a>
      <a href="">{isEsp ? 'Servicios' : 'Services'}</a>
      <a href="">{isEsp ? 'Contacto' : 'Contact'}</a>
    </nav>
  )
}