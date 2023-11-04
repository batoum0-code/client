import React, { useEffect, useState } from 'react';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { FaList } from 'react-icons/fa'
import logo from '../assets/chertie-logo.png';
import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const {  setIfCartState , cartCount} = useContext(Context);

    const navigate = useNavigate();




    const onCartToggle = () => {
        setIfCartState(true)
      };
    

    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[]);
return (
   <>
      <header className={
        !navState ? 'absolute top-0 left-0 right-0 opacity-100 z-500' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme bg-orange-300'
      }>
        <nav className='flex items-center justify-between nike-container'>
            <div className='flex items-center'>
                <img
                    src={logo}
                    alt="logo/img"
                    className={`w-20 h-auto cursor-pointer ${navState && "filter brightness-0"}`}
                    onClick={ ()=> navigate('/')}
                />
            </div>
            <ul className='flex items-center justify-center gap-2'>
                <li className='grid items-center'>
                    <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                <li className='grid items-center' onClick={()=>setIfCartState(true)} >
                    <button type='button'  className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                        <ShoppingBagIcon
                         className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium 
                        rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 
                        ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' :
                         'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{cartCount}</div>
                    </button>
                </li>
                <li className='grid items-center'>
                    <FaList className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                </li>
                
            </ul>
        </nav>
      </header>
   </>
  )
}
  
export default Navbar