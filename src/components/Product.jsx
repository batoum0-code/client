import React from 'react'
import { useNavigate } from 'react-router-dom'


const Product = ({item}) => {

  const navigate = useNavigate();
  return (
    <div
    onClick={()=>navigate(`/product/${item.id}`)}
    className='relative  max-w-[300px] max-h-[360px]  rounded-lg bg-slate-200 overflow-hidden cursor-pointer 
      flex items-center justify-start'>

    <img src={`https://server-qyse.onrender.com/${item?.attributes?.image.data?.attributes?.url}`} alt="product" className='object-cover hover:scale-90 duration-700 max-w-[290px] max-h-[300px] xsm:max-h-[300px] xsm:max-w-[290px]' />

    
      <h3 className='absolute top-[10px] left-3 text-green-600 font-semibold'>
        {item?.attributes.price} DH
        </h3>
      <h3 className='absolute top-[10px] right-3 text-bSdanger line-through'>
        {
          item?.attributes.fakePrice && item?.attributes.fakePrice +' DH'
        } 
      </h3>
    

    <h1 className='absolute bottom-3 left-0 right-0 p-2 text-black text-lg font-serif font-bold text-center'>
    {item?.attributes.title} 
    </h1>
  </div>
  )
}

export default Product  
