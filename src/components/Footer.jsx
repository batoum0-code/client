import React, { useEffect, useState } from 'react'

const Footer = ({ footerAPI: { titles, links } }) => {
  const [Year, setYear] = useState();
  
  useEffect(() => {
      const getYear = () => setYear(new Date().getFullYear());
      getYear();
  }, []);
  return (
   <>
      <footer className='bg-bSdark pt-7 pb-2'>
        <div className='nike-container text-bSlight'>
          <div className='grid items-start justify-center grid-cols-3 max-w-2xl w-full m-1 md:max-w-none md:gap-5'>
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
              </div>
            ))}
            {links.map((list, i) => (
              <ul key={i} className="grid items-center gap-1">
                {list.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">{link.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className='mt-2 text-center'>
            <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>S-BATOUM DEV {Year}</span></p>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer