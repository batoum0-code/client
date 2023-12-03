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
import Navbar from "./Navbar";
import Cart from "./Cart";
import SideBar from './SideBar'
import TopBar from './TopBar'
// import delevery image








const SingleProduct = () => {

    

    // this for nothings 
    
    const [selectedSize, setSelectedSize] = useState(false);
    const [showError, setShowError] = useState(false);
    const [size , setSize] = useState(0)
    


    // end this for nothings






    const notify = () => {
        toast.success("Success. Vérifier le panier!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    };





// start get your api from data base ----------------------------------------------------


    // context management 
  const { handleAddToCart } = useContext(Context);



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
        <div>
            <TopBar/>
            <Navbar/>
            <Cart/>
            <SideBar/>
            <div className="w-full mt-[100px] md:py-20 ">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-row lg:flex-row md:px-0 gap-[50px] lg:gap-[100px] md:flex-col">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
                        <ProductDetailsCarousel images={product[0]?.attributes?.images} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1]  py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold sm:text-[25px] text-dark pb-[1px] leading-tight font-serif ">
                            {product[0]?.attributes.title}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-md sm:text-[18px] text-dark font-semibold pb-1">
                            For {product[0]?.attributes.categories.data[0]?.attributes.title}
                        </div>

                        {/* PRODUCT PRICE */}
                        
                            <div className=" text-lg text-green-500 font-semibold ">
                            {product[0]?.attributes.price}  <span className="font-serif">DH</span>
                            </div>

                            <div>
                            {
                            
                            product[0]?.attributes.fakePrice && (
                            
                                    <div className="text-base py-1 font-medium  text-red-500 line-through">
                                        {product[0]?.attributes.fakePrice} DH
                                    </div>  )
                                    
                            }
                            </div>

                        <div>
                            {
                                product[0]?.attributes.fakePrice && (
                                    <div className="ml-auto text-base font-medium text-red-900 pb-2">
                                
                                    -{
                                        Math.ceil(((product[0]?.attributes.fakePrice - product[0].attributes.price) * 100) / product[0]?.attributes.fakePrice)

                                    }%
                            </div>
                                )
                            }
                        </div>
                        

                        {/* product details  */}
                        <div>
                            <div className="text-lg font-semibold  pb-[2px]">
                                Product Details
                            </div>

                            {/* enter your description for the product here */}

                            <div className="markdown text-dark text-md font-serif pb-2">
                            {product[0]?.attributes.description} 
                                <ReactMarkdown> </ReactMarkdown>
                            </div>
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
                                        className={`border rounded-md text-center py-1  font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size1
                                                ? "border-green-500"
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
                                        className={`border rounded-md text-center py-1 font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size2
                                                ? "border-green-500"
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
                                        className={`border rounded-lg text-center py-1 font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size3
                                                ? "border-green-400"
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
                                        className={`border rounded-md text-center py-1 font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size4
                                                ? "border-green-500"
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
                                        className={`border rounded-md text-center py-1 font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size5
                                                ? "border-green-500"
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
                                    <div className={`border rounded-md text-center py-1 font-medium hover:border-green-500 cursor-pointer
                                        ${
                                            size === product[0]?.attributes.size6
                                                ? "border-green-500"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSize(product[0]?.attributes.size6);
                                            setSelectedSize(true);
                                            setShowError(false);
                                        }}
                                    >
                                        {product[0]?.attributes.size6}
                                    </div>
                                
                            </div>
                            {/* SIZE END */}

                            
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        
                          {/** FIN SIZES SECTION */}
                        <div className="mb-5 flex items-center">
                        <button
                            className="w-9 h-9 bg-black  rounded-[9px] flex items-center justify-center mr-2"
                            onClick={handleDecrement}
                        >
                            <span className="text-lg font-medium text-bSlight">-</span>
                        </button>
                        <div className="text-xl font-semibold font-sans">{quantity}</div>
                        <button
                            className="w-9 h-9 bg-black rounded-[9px] flex items-center justify-center ml-2 " 
                            onClick={handleIncrement}
                        >
                            <span className="text-lg font-medium text-bSlight">+</span>
                        </button>
                    </div>

                    {/* ADD TO CART BUTTON START */}
                        
                    <button
                    className="w-full py-2 md:rounded-full bg-black text-white text-lg 
                    rounded-[30px] tracking-widest shadow-md
                    font-medium transition-transform active:scale-95 mb-3 hover:opacity-100"
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
                    Ajouter Au Panier
                </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* marketing informaitions */}

                        <div className="text-md font-medium text-grayDark">
                        Home-Fit Service Gratuit
                        </div>
                        <div className="text-md font-medium text-grayDark mb-2">
                        Paiement à la livraison après essayage et satisfaction.
                        
                        </div>
                        

                        
                    </div>
                    {/* right column end */}
                </div>

            
            </Wrapper>
        </div>
        <div className="flex  w-full flex-row  justify-between text-black bg-gradient-to-l from-bSdenim to-dark ">
        <h4 className="font-semibold  text-bSlight w-[160px]   border-r-[1px] border-bSlight "> OFFRE SPÉCIALE </h4>
        <span className="p-2  text-bSlight w-full">Obtenez une réduction de 100 DH en achetant deux paires et économisez 300 DH en achetant trois paires.  OFFRE SPÉCIALE  </span>
        </div>
        </div>
    );
};

export default SingleProduct;