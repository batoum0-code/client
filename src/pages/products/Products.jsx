import React, { useEffect, useState } from 'react';
import Product from '../../components/Product';
import Navbar from '../../components/Navbar';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Cart from '../../components/Cart';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer'
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { category } = useParams();

  // Fetching data from the API based on the category parameter
  const { data, loading, error } = useFetch(`products?populate=*&filters[categories][title][$eq]=${category}`);

  useEffect(() => {
    if (data) {
      setProducts(data);
      console.log(data[0].attributes.image.data.attributes.url);
    }
  }, [data, category]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <section>
      <Navbar />
      <Cart />
      <SideBar />
      <TopBar/>
      <div className='bg-slate-50 py-[100px]'>
        <div className='px-[100px]'>
          <h1 className='font-bold text-center text-[30px] font-serif pb-3 text-black'>NOS PRODUITS</h1>

          <div className='flex flex-row justify-between  md:justify-center border-b-[1px]  md:w-full border-bSgray pb-3 mb-7 md:gap-5'>
            {/* Use Link to navigate to different categories */}
            <Link
              className={` tracking-widest font-bold border-[1px] px-[200px] py-3 rounded-[3px] lg:px-[20px] md:py-2
              hover:bg-black hover:text-bSlight border-black ${category === 'men' ? 'bg-black text-bSlight' : ''}`}
              to='/products/men'
            >
              Homme
            </Link>
            <Link
              className={` tracking-widest font-bold border-[1px] px-[200px] py-3 rounded-[3px] lg:px-[20px] md:py-2
              hover:bg-black hover:text-bSlight border-black ${category === 'women' ? 'bg-black text-bSlight' : ''}`}
              to='/products/women'
            >
              Femme
            </Link>
          </div>
        </div>

        {/* display products */}
        <div className='flex flex-row justify-center items-center gap-6 flex-wrap sm:flex-col'>
          {products?.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Products;
