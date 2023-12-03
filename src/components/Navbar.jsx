import React, { useEffect, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { FaList } from 'react-icons/fa'
import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const {  setIfCartState , setIfShowElements ,cartCount} = useContext(Context);

    const navigate = useNavigate();




    const onCartToggle = () => {
        setIfCartState(true)
        };
    

    const onNavScroll = () => {
        if(window.scrollY > 3) {
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
        !navState ? 'absolute top-0 left-0 px-4 right-0 opacity-100 z-500 pt-8 ' : 
        'fixed top-0 left-0 right-0 h-[12vh]  flex items-center justify-center opacity-100 z-[200]  bg-black'}>
        <nav className='flex items-center justify-between w-full pr-[80px] pl-[70px] sm:pr-[20px] sm:pl-[5px]'>
            <div className='flex items-center'>
                <h1
                
                    className={`w-auto hover:border-bSorange hover:border-b-[3px] hover:border-t-[1px]    
                    h-auto cursor-pointer  text-3xl tracking-widest font-semibold text-bSlight font-serif ${navState && "animate-pulse hover:border-t-bSlight"}
                    ${!navState && "text-dark hover:border-t-bSdenim "}`}
                    onClick={ ()=> navigate('/')}
                >
                    <span className={`  h-auto cursor-pointer text-3xl font-semibold text-bSorange font-serif ${!navState && "text-bSorange"}`}>CH</span>ERTI</h1>
            </div>
            <ul className={`flex items-center justify-center gap-5 `}>
                
                <li className='grid items-center'
                onClick={()=>setIfCartState(true)} >

                    <button type='button'  className={`border-none hover:scale-125 outline-none active:scale-110 transition-all duration-300 relative `}>
                        <ShoppingBagIcon
                        className={`icon-style   ${navState && "text-bSlight  transition-all duration-300"}  
                        ${ !navState && "text-bSdenim   transition-all duration-200 " }
                        `} />
                        <div className={`absolute top-4 right-[-3px] shadow w-[1.2rem] h-[1.2rem] text-[15px] leading-tight 
                        font-medium 
                        rounded-full flex items-center justify-center cursor-pointer  transition-all duration-300 
                        ${navState ? 'bg-bSorange text-bSlight shadow-slate-900' :
                        'bg-bSorange text-slate-900 font-bold shadow-slate-100'}`}>
                            {cartCount}

                        </div>
                    </button>
                </li>
                <li className='grid items-center'>
                    <FaList 
                    onClick={()=> setIfShowElements(true) }
                    className={`icon-style hover:scale-125 ${navState && "text-bSlight transition-all duration-200" }
                    ${ !navState && "text-bSdenim  transition-all duration-200" }
                    `} />
                </li>
                
            </ul>
        </nav>
        </header>
    </>
)
}

export default Navbar