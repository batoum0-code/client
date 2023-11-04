import React from 'react'

const Title = ({ title }) => {
  return (
   <>
      <div className='grid items-center'>
        <h1 className='text-3xl lg:text-4xl md:text-3xl font-bold text-orange-500 filter
         drop-shadow-lg'>{title}</h1>
      </div>
   </>
  )
}

export default Title