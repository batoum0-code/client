import React, { useState } from "react";
import { fetchApi } from "../utils/fetchApi";
import { useContext } from "react";
import { Context } from "../Context.js";
const Checkout = () => {
  const { cartItems , cartSubTotal} = useContext(Context);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
          phone: phoneNumber,
          total:`${cartSubTotal} DH`,
          items: itemIds,
        },
      });

      if (orderResponse.status === 200) {
        console.log("Order created:", orderResponse.data);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="  m-32 h-[150vh] d-flex justify-center items-center gap-9">
      <h2 className="text-slate-200 text-2xl mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className='d-flex flex-col gap-10'>
        <div className="m-4 p-4">
          <label htmlFor="name" className="mx-2 text-xl text-slate-950"> Nom</label>
          <input
          className="w-[400px] border-[3px] rounded-xl p-2 text-slate-300 border-orange-600 text-lg bg-[#1d1a1a]"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>                 
        <div>
          <label htmlFor="phoneNumber" className="mx-2 text-xl text-slate-950">Numéro de téléphone :</label>
          <input
          className="w-[400px] border-[3px] rounded-xl p-2 text-slate-300 border-orange-600 text-lg bg-[#1d1a1a]"
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className=' bg-slate-950 text-slate-100 p-1 
        
        text-lg rounded-md border-[2px] border-orange-500 cursor-pointer'>Passer la commande</button>
      </form>
    </div>
  );
};

export default Checkout;
