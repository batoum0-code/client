import React from 'react'
import emptybag from '../../assets/paniervide.png';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle }) => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptybag}
          alt="emptybag/img"
          className='w-80 lg:w-80 sm:w-60 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <button type='button' className='button-theme bg-gradient-to-b from-green-500 to-green-600 
        hover:scale-95  shadow-lg shadow-green-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' onClick={onCartToggle}>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className=''>Retour Au Magasin</span>
        </button>
      </div>
   </>
  )
}

export default CartEmpty