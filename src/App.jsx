import React from 'react'
import { Header, Footer } from './Components'
import { ContactMe, Education, Hero, Services, Works } from './Sections'


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Education/>
      <Works/>
      <Services/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
