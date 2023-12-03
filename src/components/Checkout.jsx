import React, { useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import { useContext } from "react";
import { Context } from "../Context.js";
import { Input } from  "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar.jsx";

const Checkout = () => {

  // state management 
  const { cartItems , cartSubTotal} = useContext(Context);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city , setCity] = useState("");
  // state management 

const navigate = useNavigate();


  // notify that the order is added with success 

  const notify = () => {
    toast.success("Votre commande a été enregistrée Un agent vous contactera dans les plus brefs délais", {
        position: "top-center",
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
  }

// notify that the order is added with success 













  const handleSubmit = async (e) => {
    e.preventDefault();
    // Step 1: Create and store items
    const itemIds = [];
    for (const item of cartItems) {
      try {
        const response = await fetchApi.post("items", {
          data: {
            title: item.attributes.title,
            quantity: item.attributes.quantity,
            color: item.attributes.color,
            size: item.attributes.size,
          },
        });
        itemIds.push(response.data.data.id);
      } catch (error) {
        console.error("Error creating item:", error);
      }
    }

    // Step 2: Create and store the order with references to the items 

    try {
      
      const orderResponse = await fetchApi.post("orders", {
        data: {
          name,
          city,
          phone: phoneNumber,
          total: cartSubTotal ,
          items: itemIds,
        },
      });

      if (orderResponse.status === 200) {
        notify();
        console.log("Order created:", orderResponse.data);
        setTimeout(() => {
          navigate("/");
        }, 30000);

        setName("");
        setPhoneNumber("");
        setCity("");

      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
<div>
<TopBar/>
<section className="bg-gradient-to-t from-blue-300 to-blue-500 w-full h-[100vh] flex justify-center items-center">
  
<ToastContainer />
  <div className="w-[340px] h-[470px] bg-white rounded-lg border-2 border-red-400 flex flex-col items-center">
    <h1 className="tracking-widest font-serif font-bold text-[30px] text-dark animate-pulse pt-11 pb-9">
      <span className="tracking-widest font-serif font-bold text-[30px] text-bSorange">CH</span>ERTI
    </h1>
  <form onSubmit={handleSubmit} className='flex w-[300px] flex-col items-center justify-center gap-7'>
  <div class="relative w-full min-w-[200px] h-10">
      <input
      type="text"
          id="name"
          
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          
        className="peer w-full h-full bg-slate-200 text-blue-gray-700 font-sans font-meduim outline outline-0 text-black
          focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
          placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2
          border-t-transparent focus:border-t-transparent text-sm px-3 py-5.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
        placeholder=" " /><label
        className="flex w-full h-full select-none pointer-events-none absolute left-0  !overflow-visible text-blue-500 font-medium tracking-widest
        truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent
          peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
          peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1
            peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
            peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] 
            after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
            after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none
            after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 
            before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Nom
      </label>
    </div>       

    <div class="relative w-full min-w-[200px] h-10">
      <input
      type="text"
      
      id="city"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      required

        className="peer w-full h-full bg-slate-200 text-blue-gray-700 font-sans font-normal outline outline-0
        focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
          placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2
          border-t-transparent focus:border-t-transparent text-sm px-3 py-5.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
        placeholder=" " /><label
        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-medium !overflow-visible text-blue-500  tracking-widest
          truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent 
          peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
          peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1
            peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
            peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] 
            after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
            after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none
            after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 
            before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Ville
      </label>
    </div>

    <div class="relative w-full min-w-[200px] h-10">
      <input
      type="tele"
          
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        className="peer w-full h-full bg-slate-200 text-blue-gray-700 font-sans font-normal outline outline-0
        focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
          placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2
          border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
        placeholder=" " /><label
        className="flex w-full h-full select-none pointer-events-none absolute left-0 font-medium !overflow-visible tracking-widest text-blue-500
        truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent
          peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px]
          peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1
            peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
            peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] 
            after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent 
            after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none
            after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 
            before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              Numéro de téléphone
      </label>
    </div>
      <button type="submit"  className='text-black font-medium text-[17px] mt-4 
      hover:bg-green-600 hover:text-bSlight hover:scale-95 transition-all duration-300 bg-green-500 cursor-pointer py-2 px-4'
      >Valider la commande</button>
    </form>
  </div>
</section>
</div>
  
    
  );
};

export default Checkout;
