import React from "react";
import { useNavigate } from 'react-router-dom'
import {  ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FaFemale , FaMale } from 'react-icons/fa'





const Item = ({ ifExists, item, isTop }) => {
    const Navigate = useNavigate();

    console.log(item?.attributes?.categories?.data[0]?.title);

    const title = item?.attributes?.title || 'No Title';
    const category = item?.attributes?.categories?.data[0]?.attributes?.title || 'Unknown';
    const price = item?.attributes?.price || 'N/A';
    const imageUrl = `http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`;
  
    return (
      <div className={`relative bg-gradient-to-b bg-slate-200 grid items-center max-w-[100%] ${ifExists ? "justify-items-start pb-[3.5rem]" : "justify-items-center shadow-md"} ${!isTop ? "h-[350px] w-[300px] flex items-center" : ""} py-0 px-3 transition-all duration-300 ease-in-out w-full`}>
        <div className={`grid gap-9${ifExists ? "justify-items-center" : "justify-items-center"}`}>
          <h1 className="text-black text-2xl lg:text-lg md:text-base font-semibold filter drop-shadow">{title}</h1>
          <p className="text-grayDark filter drop-shadow text-base md:text-sm font-normal flex">For {category}</p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-green-500 px-1 rounded blur-effect-theme">
              <h1 className="text-black  text-sm font-medium">{price} DH</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => Navigate(`/product/${item.id}`)}
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="text-bSdenim w-6"/>
            </button>
            <button
              onClick={() => Navigate(`/product/${item.id}`)}
              type="button"
              className="bg-black blur-effect-theme md:text-sm px-3 py-1 shadow shadow-black text-lg font-medium text-white 
                transition-all duration-300 border-[1px] border-black hover:border-black hover:bg-white  hover:text-black"
            >
              Acheter
            </button>
          </div>
        </div>
        <div className={`flex items-center ${ifExists ? "absolute top-0 right-0 xsm:bottom-2 xsm:left-[120px] md:left-[190px] md:bottom-[30%] " :"justify-center"}`}>
          <img
            src={imageUrl}
            alt={`img`}
            className={`transitions-theme hover:-rotate-12  blur-none  ${ifExists ? "h-[220px] w-[87%] sm:w-[80%] xsm:max-w-[96%] xsm:max-h-[96%] lg:w-54 md:max-w[100%] -rotate-[35deg]" : "h-70 w-70 -rotate-[20deg]"}`}
          />
        </div>
      </div>
    );
  };
  
  export default Item;
  