
import './App.css';
import { useState , useEffect } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import Checkout from './components/Checkout';
import AboutUs from './aboutUs/AboutUs.jsx'
import Products from './pages/products/Products.jsx'
import TopBar from './components/TopBar.jsx';
// testing some front end funtions 
import { heroapi , popularsales , highlight ,toprateslaes , footerAPI} from './data/data.js';

// import from react-router-dom 
import Main from './pages/main/Main';


import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import Conditions from './components/Conditions.jsx';



function App() {


  return (
  <div>

<BrowserRouter>


<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/product/:id' element={<SingleProduct/>}/>
  <Route path='/products/:category' element={<Products/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/about' element={<AboutUs/>}/>
  <Route path='/conditions' element={<Conditions/>}/>
</Routes>

</BrowserRouter>

</div>
  );
}

export default App;
