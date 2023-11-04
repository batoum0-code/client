import React , { useState , useEffect } from 'react'
import Hero from '../../components/Hero'
import Sales from '../../components/Sales'
import FlexContent from '../../components/FlexContent'
import Footer from '../../components/Footer'
import { heroapi , popularsales , highlight ,toprateslaes , footerAPI} from '../../data/data'

// import the useFetch hook 
import { useFetch } from '../../hooks/useFetch'
import { FaSearchDollar } from 'react-icons/fa'
import ScrollToTopButton from '../../components/utils/ScrollButton'
const Main = () => {


  // get the products from Api 
  const [ products , setProducts ] = useState([]);

  const { data , loading , error } = useFetch('products?populate=*');

  useEffect(() => {
    if(data) {
      setProducts(data);
      console.log(products[0]?.attributes);
    }
  }, [data]);

    if(loading){
      return <h1>Loading ...</h1>
    }

    if(error){
      return <h3> Error : {error.message} </h3>
    }











  return (
    
   <>
   <div className={`app-container `}>
      <main className='flex flex-col gap-10 relative'>
    <Hero heroapi={heroapi}/>
   <Sales products={products} ifExists isTop={true}/>
   <Sales products={products} isTop={false} />
   <FlexContent endpoint={highlight} ifExists />
      </main>
   </div>
   <Footer footerAPI={footerAPI} />

   <ScrollToTopButton/>

   </>

    
  )
}

export default Main