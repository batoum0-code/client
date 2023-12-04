import React , { useContext } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Context } from "../../Context.js";
const CartItem = ({ item }) => {
  
  const { handleRemoveFromCart , handelIncreaseQuantityInCart , handelDecreaseQuantityInCart } = useContext(Context);

  return (
    <>
      <div className="flex items-center justify-between w-full px-2  border-slate-600">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b  relative rounded p-1  transition-all duration-75 ease-in-out grid items-center`}>
            <img src={`https://server-qyse.onrender.com${item?.attributes?.image.data?.attributes?.url}`} alt='img' className="w-36  h-auto object-fill lg:w-28" />
            <div className='absolute right-2 top-1 blur-theme-effect bg-green-600 text-bSlight text-xs px-1 rounded'>{item.attributes.price}dh</div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{item?.attributes.title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">For {item?.attributes.categories.data[0].attributes.title}</p>
              <p className="text-sm text-slate-800 lg:text-xs"><span className="text-red-900">Size :</span> {item?.attributes.size}</p>
            </div>
            <div className="flex items-center justify-around w-full gap-6">
              <button 
              onClick={()=>handelDecreaseQuantityInCart(item)}
              type="button"  className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{item?.attributes.quantity}</div>
              <button 
              onClick={()=>handelIncreaseQuantityInCart(item)}
              type="button" className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-red-900"></h1>
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${item?.attributes.price * item.attributes.quantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button type="button" className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" >
              <TrashIcon className="w-5 h-5 text-white" onClick={()=> handleRemoveFromCart(item)} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
