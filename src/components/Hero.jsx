import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import heroImg from '../assets/heroC.png'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  

  const navigate = useNavigate();
  return (
  <>
      <section className='w-full h-[100vh] bg-gradient-to-b from-bSlight to-white rounded-xl flex items-center justify-center pt-6'>
        <button 
        onClick={()=>navigate('/products/men')}
        className='hover:scale-105 sm:py-1 transition-all duration-300 bg-amber-950 text-fuchsia-200 rounded-md
          p-[10px] px-[30px] text-[30px] cursor-pointer'>produits</button>
      </section>
  </>
  )
}

export default Hero
