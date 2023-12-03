import React from 'react'
import HeroA from './components/HeroA'
import Specials from './components/Specials'
import Story from './components/Story'
import Location from './components/Location'
import Gallery from './components/Gallery'
import ScrollToTopButton from '../components/utils/ScrollButton'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import SideBar from '../components/SideBar'



const AboutUs = () => {
  return (
    <div>
      
        <Navbar/>
        <Cart/>
        <SideBar/>
        <HeroA/>
        <Specials/>
        <Story/>
        <Gallery/>
        <Location/>
        <Footer/>
        <ScrollToTopButton/>
        
    </div>
  )
}

export default AboutUs