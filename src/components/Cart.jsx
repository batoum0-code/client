import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from './cart/CartItem'
import { useNavigate } from "react-router-dom";
const Cart = () => {

  // start navigate to the checkout page or other page 
  const navigate = useNavigate();
  // end navigate to the checkout page or other page 


  // start get the element to handel cart changes 
  const { ifCartState , setIfCartState , cartSubTotal , cartItems } = useContext(Context);
  // end get the element to handel cart changes 

  // start  handel show cart state
    const onCartToggle = () => {
    setIfCartState(false);
  };
  // end  handel show cart state

  

  
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 duration-500 w-full h-screen blur-effect-theme opacity-100 z-[250] ${
          ifCartState
          ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
      
      }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount onCartToggle={onCartToggle} ifCartState={ifCartState} setIfCartState={setIfCartState}/>
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : 
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item) => (
                <CartItem key={`${item.id}-${item.attributes.size}`} item={item}/>
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">Sub Total</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">{cartSubTotal} DH</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                {/* button that take you to the checkout page */}
                <button type="button" className="button-theme bg-theme-cart text-white"
                onClick={()=>{
                  navigate('/checkout')
                setIfCartState(false)}
                }
                >
                  Check Out</button>
              </div>
            </div>

          </div>}
        </div>
      </div>
    </>
  );
};

export default Cart;
