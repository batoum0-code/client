import React from 'react'
import { Link  ,useNavigate } from 'react-router-dom'
import img from '../assets/forFlexContent.png'
const FlexContent = ({ifExists}) => {

  const navigate = useNavigate();
  return (
    <>

      <div className={`flex items-center justify-center   lg:flex-col lg:justify-center mb-10  ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='flex items-center justify-center max-w-xl w-[70%] relative lg:max-w-none '>
          <img
            src={img}
            alt='image'
            className={`object-fill transitions-theme  ${ifExists ? 'h-[400px] w-[400px] lg:h-56  md:h-44 md:w-44 xsm:h-36 hover:-rotate-180' : ' duration-[10s] transform h-72 lg:h-64 md:h-60 sm:h-48 sm:w-48 xsm:h-40 rotate-[19deg]  '}`}
          />
        </div>
        <div className='max-w-lg lg:max-w-none w-[30%] md:text-center grid  lg:justify-items-center justify-center items-center'>
          <h1 className='text-4xl sm:text-3xl font-bold text-black uppercase'> l'élégance  </h1>
          <h1 className='text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg uppercase py-1'>cherti moccassins </h1>
          <p className='xl:text-sm my-4 text-bSlight text-lg font-serif  py-3 tracking-wide'>Vous êtes à la recherche de mocassins alliant confort et élégance 🙄? Ne cherchez pas plus loin, Cherti Chaussures est l'endroit idéal pour trouver ce que vous recherchez 😇👌.</p>
          <div onClick={()=> navigate('/about')} className="" >
            <button type='button' className='button-theme hover:scale-105 sm:py-1 transition-all duration-300 bg-bSorange shadow-slate-900 text-slate-100 py-1.5'>Decouvrir Plus</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default FlexContent