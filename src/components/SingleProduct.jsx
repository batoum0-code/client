import React, { useState , useEffect,useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from './utils/Wrapper'
import ProductDetailsCarousel from "./utils/ProductDetailsCarousel";
import ReactMarkdown from "react-markdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
// import context from the contextjs
import { Context } from '../Context'







const SingleProduct = () => {

    

    // this for nothings 
    
    const [selectedSize, setSelectedSize] = useState(false);
    const [showError, setShowError] = useState(false);
    const [size , setSize] = useState(0)
    


    // end this for nothings






    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };





// start get your api from data base ----------------------------------------------------


    // context management 
  const { handleAddToCart , cartCount , cartItems} = useContext(Context);

  console.log(cartItems)

  const [ product , setProduct]= useState([])

  // state management
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1
  const { id } = useParams();

  const handleIncrement = () => {
    // Increment the quantity by 1
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Decrement the quantity by 1, but ensure it doesn't go below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { data, loading, error } = useFetch(`products?populate=*&[filters][id]=${id}`);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
    
// end get your api from data base ----------------------------------------------------------------------------





    return (
        <div className="w-full mt-[100px] md:py-20">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-row lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] md:flex-col">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
                        <ProductDetailsCarousel images={product[0]?.attributes?.images} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {product[0]?.attributes.title}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            for {product[0]?.attributes.categories.data[0]?.attributes.title}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                            {product[0]?.attributes.price} dh
                            </p>

                           {product[0]?.attributes.fakePrice && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        {product[0]?.attributes.fakePrice} DH
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                    {
                                        ((product[0]?.attributes.fakePrice - product[0].attributes.price) * 100) / product[0]?.attributes.fakePrice

                                    } %
                                         off
                                        </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10 ">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div id="sizesGrid" className="grid grid-cols-4 gap-1 cursor-pointer">
                            
                                    <div
                                        className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size1
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size1);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size1}
                                    </div>
                                    <div
                                        className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size2
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size2);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size2}
                                    </div>
                                    <div
                                        className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size3
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size3);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size3}
                                    </div>
                                    <div
                                        className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size4
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size4);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size4}
                                    </div>
                                  
                                    <div
                                        className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size5
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size5);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size5}
                                    </div>
                                   <div className={`border rounded-md text-center py-1 font-medium "hover:border-black cursor-pointer"
                                          ${
                                            size === product[0]?.attributes.size5
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size5);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size5}
                                    </div>
                                
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        
                          {/** FIN SIZES SECTION */}
                          <div className="mb-5 flex items-center">
                        <button
                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-2"
                            onClick={handleDecrement}
                        >
                            <span className="text-lg">-</span>
                        </button>
                        <div className="text-lg font-medium">{quantity}</div>
                        <button
                            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center ml-2"
                            onClick={handleIncrement}
                        >
                            <span className="text-lg">+</span>
                        </button>
                    </div>

                    {/* ADD TO CART BUTTON START */}
                        
                    <button
                     className="w-full py-2 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                     onClick={() => {
                       if (!size) {
                         setShowError(true);
                         document
                           .getElementById("sizesGrid")
                           .scrollIntoView({
                             block: "center",
                             behavior: "smooth",
                           });
                       } else {
                         handleAddToCart(
                            product[0],
                            quantity,
                            size
                           
                         );
                   
                         setQuantity(1);
                         notify();
                       }
                     }}
                   >
                     Add to Cart
                   </button>
                        {/* ADD TO CART BUTTON END */}

                        

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>

                            {/* enter your description for the product here */}

                            <div className="markdown text-md mb-5">
                                <ReactMarkdown> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure nam sed modi officiis error veniam, suscipit minima maiores fugiat temporibus rerum quia reprehenderit atque animi nostrum eligendi tempore ullam! </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

               
            </Wrapper>
        </div>
    );
};

export default SingleProduct;