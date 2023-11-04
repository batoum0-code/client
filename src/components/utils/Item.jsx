import React from "react";
import { useNavigate } from 'react-router-dom'
import {  ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FaFemale , FaMale } from 'react-icons/fa'

const Item = ({
  ifExists,
  item,
  isTop
}) => {

  
  const Navigate = useNavigate();



  return (
    <>
      <div
      
        className={`relative bg-gradient-to-b  bg-slate-100 grid items-center   border-[3px] ${
          ifExists ? "justify-items-start py-8" : "justify-items-center"
        } ${ ! isTop ? "h-[350px] w-[300px]  flex items-center" :""} rounded-xl py-0 px-3 transition-all duration-300 ease-in-out w-full `}
      >


        {/** for card informations */}

        <div
          className={`grid  gap-9${
            ifExists ? "justify-items-center" : "justify-items-center"
          }`}
        >
          <h1 className="text-black text-2xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {item?.attributes.title}
          </h1>
          <p className="text-black filter drop-shadow text-base md:text-sm font-normal flex">
           for {item?.attributes.categories.data[0]?.attributes.title} {
              item?.attributes.categories.data[0]?.attributes.title==='women' ?
               <FaFemale size={30} color="black" /> :
              <FaMale size={20} className="color-pink-300" />
            }
          </p>

          <div className="flex items-center justify-between w-28 my-1">
            <div className="flex items-center bg-green-500 px-1 rounded blur-effect-theme">
              <h1 className="text-black  text-sm font-medium">{item?.attributes.price} DH</h1>
            </div>
            
          </div>

            

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button 
            onClick={()=>Navigate(`/product/${item.id}`)}
              type="button"
              className="bg-orange-500 blur-effect-theme button-theme px-3 py-1 shadow shadow-sky-200 text-sm
               text-white hover:border-red-400 
               hover:border-2 hover:bg-slate-100 hover:text-red-400"
              
            >
              Acheter
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-0 right-0" : "justify-center"
          }`}
        >
          <img
            src={`http://localhost:1337${item?.attributes?.image.data?.attributes?.url}`}
            alt={`img`}
            className={`transitions-theme hover:-rotate-12  blur-none  ${
              ifExists
                ? "h-[220px] w-auto lg:w-54 md:w-48 -rotate-[35deg]"
                : "h-70 w-70"
            }`}
          />
          
        </div>
         
      </div>
    </>
  );
};

export default Item;
