import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';
import Sales from '../../components/Sales';
import TopSales from '../../components/TopSales';
import FlexContent from '../../components/FlexContent';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';
import { useFetch } from '../../hooks/useFetch';
import ScrollToTopButton from '../../components/utils/ScrollButton';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Stories from '../../components/Stories';
import Chantillant from '../../components/Chantillant'


const Main = () => {

  // Background color change every 6 seconds
  const [bgColor, setBgColor] = useState('bg-orange-500');

  useEffect(() => {
    const colors = ['bg-orange-500', 'bg-green-500' , 'bg-blue-500']; // Replace with your actual color values
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setBgColor(colors[currentIndex]);
    }, 14000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Get the top products from the API
  const [TopProducts, setTopProducts] = useState([]);
  const { data: d, loading: l, error: e } = useFetch('products?populate=*&filters[isFeatured]=true');

  useEffect(() => {
    if (d) {
      setTopProducts(d);
      console.log(d);
    }
  }, [d]);

  // start Get featured products from the API

  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch('products?populate=* ');


  useEffect(() => {
    if (data) {
      setProducts(data.slice(0,7));
      console.log(data);
    }
  }, [data]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  if (e) {
    return <h3>Error: {error.message}</h3>;
  }

   // End Get featured products from the API

  return (
    <>
    <TopBar/>
      <div className={`app-container ${bgColor}`}>
        <Navbar/>
        <Cart />
        <SideBar />
        <main className='flex flex-col gap-4'>
          <Hero/>
          <TopSales TopProducts={TopProducts} ifExists isTop={true} />
          <Sales products={products} ifExists={false} />
          <FlexContent  ifExists />
          <Stories/>
          <Chantillant/>
        </main>
        
      </div>
      <Footer/>
      <ScrollToTopButton />
    </>
  );
};

export default Main;
