import React from 'react'
import NavBar from '../components/generales/NavBar'
import Title from '../components/home/Title'
import Cards from '../components/home/Cards'
import Anuncio2 from '../components/home/Anuncio2'
import Slide from '../components/home/Slide'
import Footer from '../components/generales/Footer'

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <Title/>  
    <Cards/>
    <Anuncio2/>
    <Slide/>
    <Footer/>
    </>
  )
}

export default HomePage