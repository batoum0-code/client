import React from 'react'
import AboutTitle from './AboutTitle';
import daim from '../../assets/daim.jpg'
const Specials = () => {
  return (
    <div>
        
        <section className='nike-container'>
        <AboutTitle title='Our Specials'/>
          <div className='flex flex-row justify-center items-center gap-[80px] md:flex-col '>
            <div className='flex flex-col justify-center items-center w-[300px] gap-4'>
              <img src={daim} alt="img" className='max-w-[70px] rounded-full' />
              <h3 className='text-bSdenim font-semibold text-[20px] font-serif'>Daim</h3>
              <div className='text-bSgray text-center'> imputrescible, notamment par un processus de tannage qui peut être végétal ou chimique
                  </div>
            </div>
            <div className='flex flex-col justify-center items-center w-[300px] gap-4'>
            <img src={daim} alt="img" className='max-w-[70px] rounded-full' />
              <h3 className='text-bSdenim text-[20px] font-semibold font-serif'>Cuir</h3>
              <div className='text-bSgray text-center'> imputrescible, notamment par un processus de tannage qui peut être végétal ou chimique</div>
            </div>
            <div className='flex flex-col justify-center items-center w-[300px] gap-4'>
            <img src={daim} alt="img" className='max-w-[70px] rounded-full' />
              <h3 className='text-bSdenim text-[20px] font-semibold font-serif'>Daim</h3>
              <div className='text-bSgray text-center'> imputrescible, notamment par un processus de tannage qui peut être végétal ou chimique</div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Specials;