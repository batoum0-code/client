import React from 'react';
import Clips from './utils/Clips';
import SocialLink from './utils/SocialLink';
import heroImg from '../assets/heroC.png'
const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  
  return (
   <>
      <div className='relative h-auto w-auto flex flex-col rounded-3xl  bg-inherit '>
      <div className='bg-theme rounded-t-3xl mt-2 clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10 '></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-cente nike-container'>
        
          <div className='grid items-center justify-items-center mt-10 md:mt-10'>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-800'>{title}</h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <button type='button' className='button-theme bg-orange-500 text-lg text-white/100   shadow-orange-300 rounded-xl my-5 
            '>Découvrez nos produits</button>
            <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto '>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                  
                />
              ))}
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img
              src={heroImg}
              alt='hero-img/img'
              className=' hover:scale-1 duration-75 rounded-lg w-30 h-30 lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero