import React from 'react'
import inderline from '../../assets/underline.png'
const AboutTitle = ({title}) => {
  return (
    <div className='flex justify-center items-center mt-[3.5rem] flex-col mb-[90px]'>
      <h2 className='text-dark text-[2.3rem] font-[900] font-mono mb-2'>{title}</h2>
      <div>
        <img src={inderline} alt="img" className='max-w-[270px] max-h-[200px]  md:max-w-[230px] ' />
      </div>
    </div>
  )
}

export default AboutTitle