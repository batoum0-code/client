import React, { useState , useContext } from 'react'
import { FaHome ,FaProductHunt , FaHandsHelping, FaFacebook, FaInstagram, FaWhatsapp   } from 'react-icons/fa';
import { RiWomenLine , RiMenLine } from 'react-icons/ri'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FcContacts } from "react-icons/fc";
import { FcOrganization } from "react-icons/fc";
import { Context } from '../Context';

import { useNavigate } from 'react-router-dom';
const SideBar = () => {


const { ifShowElements , setIfShowElements} = useContext(Context);




    
    const navigate = useNavigate();
    // start  handel show cart state
    const onCartToggle = () => {
    setIfShowElements(false);
};
    // end  handel show cart state




    return (
    <div className='app-container'>
    <div
        className={`fixed top-0 left-0 right-0 bottom-0 duration-500 w-full h-screen blur-effect-theme  opacity-100 z-[250] ${
            ifShowElements
        ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
    
    }`}
    >
        <div
        className={`blur-effect-theme bg-dark rounded-l-3xl duration-500 h-screen max-w-sm w-full absolute right-0 ${
            ifShowElements
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
        >
        
            <div className="flex  justify-start  flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden pt-3">
                
            <div className='grid items-center cursor-pointer' onClick={()=>onCartToggle()}>
                <ChevronDoubleLeftIcon className='w-7 h-5 fixed top-2 left-1 z-40 hover:text-bSorange text-slate-100  stroke-[2]' />
            </div>


                <h1 className='font-serif font-semibold text-4xl animate-pulse text-bSlight  tracking-widest  '>
                    <span className='font-serif font-semibold text-4xl text-bSorange tracking-widest'>CH</span>ERTI</h1>

                <div className='elements '>
                <div 
                onClick={()=>{
                onCartToggle()
                navigate('/')
                }}
                className='flex text-[14px] text-bSlight font-semibold font-serif items-center gap-3 p-4 w-full hover:bg-orange-300 rounded-l-2xl
                over:text-bSorange duration-500 cursor-pointer
                -tracking-tighter'>
                    <FaHome className='text-bSprimary'/>
                    <h3>Accueil</h3>
                </div>
                <div 
                onClick={()=> 
                    {
                        onCartToggle();
                        navigate('/products/men')
                    }}
                className='flex text-[14px] font-semibold font-serif items-center gap-3 p-4 rounded-l-2xl text-bSlight
                duration-500 cursor-pointer hover:bg-orange-200 hover:text-bSorange 
                -tracking-tighter'>
                    <RiMenLine/>
                    <h3>Homme Produits</h3>
                </div>
                <div 
                onClick={()=> 
                    {
                        onCartToggle();
                        navigate('/products/women')
                    }}
                className='flex text-[14px] font-semibold font-serif items-center gap-3 p-4  rounded-l-2xl text-bSlight
                hover:text-bSorange duration-500 cursor-pointer hover:bg-orange-100
                -tracking-tighter'>
                    <RiWomenLine className='text-pink-500'/>
                    <h3>Femme Produits</h3>
                </div>
                <div 
                onClick={()=>{
                    onCartToggle();
                    navigate('/about')}}
                className='flex text-[14px] font-semibold font-mono items-center gap-3 p-4 rounded-l-2xl text-black
                hover:text-bSorange duration-500 cursor-pointer hover:bg-black bg-bSgray 
                -tracking-tighter'>
                    
                    <FcOrganization/>
                    <h3>CHERTI MARK</h3>
                </div>
                <div
                onClick={()=> { 
                    onCartToggle();
                    navigate('/conditions')}}
                
                className='flex text-[14px] font-semibold font-serif items-center gap-3 p-4  rounded-l-2xl text-bSlight
                hover:text-bSorange duration-500 cursor-pointer hover:bg-white
                -tracking-tighter'>
                    <FaHandsHelping className='text-bSgray'/>
                    <h3>Aide</h3>
                </div>
                </div>
                <div className='bg-bSgray h-[1px] text-center ]'></div>
                <div>
                    <div>
                    <h3 className='text-green-200 font-serif text-[20px] pb-5'> Joind Us </h3>
                    </div>
                    <div className='flex justify-center gap-9 items-center px-[30px]'>
                    <FaFacebook  className=' duration-300 hover:text-blue-400  text-[30px] cursor-pointer text-blue-500'/>
                    <FaInstagram className=' duration-300 hover:text-red-500  text-[30px] cursor-pointer text-red-400 '/>
                    <FaWhatsapp  className=' duration-300 hover:text-green-500  text-[30px] cursor-pointer text-green-600 '/>
                    </div>
                    
                </div>
            </div>
</div>       
        </div>
        
    
    </div>
    );
};

export default SideBar;
;