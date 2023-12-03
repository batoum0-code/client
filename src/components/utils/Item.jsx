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
      
        className={`relative bg-gradient-to-b pt-4 bg-slate-200 grid items-center   ${
          ifExists ? "justify-items-start pb-[3.5rem]" : "justify-items-center shadow-md"
        } ${ ! isTop ? "h-[350px] w-[300px]  flex items-center" :""} rounded-md py-0 px-3 transition-all duration-300 ease-in-out w-full `}
      >


        {/** for card informations */}

        <div
          className={`grid  gap-9${
            ifExists ? "justify-items-center" : "justify-items-center"
          }`}
        >
          <h1 className="text-black text-2xl lg:text-lg md:text-base font-semibold  filter drop-shadow">
            {item?.attributes.title}
          </h1>
          <p className="text-grayDark filter drop-shadow text-base md:text-sm font-normal flex">
          For {item?.attributes.categories.data[0]?.attributes.title} 
            
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-green-500 px-1 rounded blur-effect-theme">
              <h1 className="text-black  text-sm font-medium">{item?.attributes.price} DH</h1>
            </div>
            
          </div>

            

          <div className="flex items-center gap-3">
            <button
              onClick={()=>Navigate(`/product/${item.id}`)}
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button 
            onClick={()=>Navigate(`/product/${item.id}`)}
              type="button"
              className="bg-black blur-effect-theme button-theme px-3 py-1 shadow shadow-dark text-sm font-medium
                text-white hover:border-[1px] hover:border-black hover:bg-white  hover:text-black
              "
              
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
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
            alt={`img`}
            className={`transitions-theme hover:-rotate-12  blur-none  ${
              ifExists
                ? "h-[220px] w-auto lg:w-54  -rotate-[3deg]"
                : "w-[260px] md:max-w-[60%] md:max-h-[60%] xl:max-w-[90%] sm:w-[80%]  xl:max-h-[80%] -rotate-[20deg]"
            }`}
          />
          
        </div>
        
      </div>
    </>
  );
};

export default Item;
