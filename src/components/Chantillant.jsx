import React from 'react'
import {useNavigate } from 'react-router-dom'
import img from '../assets/forFlexContent.png'
import vedio from '../assets/video/chantillant.mp4'
import ReactPlayer from 'react-player';
const Chantillant = ({ifExists}) => {

  const navigate = useNavigate();
  return (
    <>

      <div className={`flex items-center justify-center   lg:flex-col lg:justify-center mb-10  ${ifExists ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className='flex items-center rounded-[100%] justify-center max-w-xl w-[70%] relative lg:max-w-none '>
      <div className='flex bg-transparent px-8'>
        <div className='max-w-[100%] bg-white rounded-full'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="auto" height="auto"
                />
            </div>
            <div className='max-w-[100%]'>
                <ReactPlayer url={vedio}
                playing={true}
                muted={true}
                loop={true}
                controls={false} width="60%" height="auto"
                />
            </div>
            

        </div>
        </div>
        <div className='max-w-lg lg:max-w-none w-[30%] md:text-center grid  lg:justify-items-center justify-center items-center'>
          <h1 className='text-4xl sm:text-3xl font-bold text-black uppercase'> l'élégance  </h1>
          <h1 className='text-4xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg uppercase py-1'>cherti moccassins </h1>
          <p className='xl:text-sm my-4 text-bSlight text-lg font-serif  py-3 tracking-wide'>Voici un aperçu de nos produits - juste un avant-goût parmi tant d'autres. Ce n'est qu'un début ; il y a tellement plus à découvrir. Explorez
          notre gamme diversifiée pour trouver des produits adaptés à vos besoins spécifiques. Que ce soit la qualité exceptionnelle, la variété impressionnante ou l'innovation constante, nous sommes convaincus que vous serez agréablement surpris🔥​🔥​🔥​.
          Nous sommes impatients de vous faire découvrir l'excellence de notre collection. 😇👌.</p>
          <div onClick={()=> navigate('/products/men')} className="" >
            <button
            
            type='button' className='button-theme bg-bSorange shadow-slate-900  hover:scale-105 sm:py-1 transition-all duration-300 text-slate-100 py-1.5'>Acheter Maintenant</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Chantillant