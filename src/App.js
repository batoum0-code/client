
import './App.css';
import { useState , useEffect } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import Checkout from './components/Checkout';

// testing some front end funtions 
import { heroapi , popularsales , highlight ,toprateslaes , footerAPI} from './data/data.js';

// import from react-router-dom 
import Main from './pages/main/Main';
import AboutUs from './aboutUs/AboutUs';

import { BrowserRouter ,Route , Routes } from 'react-router-dom'



function App() {

  

const [count , setCount] = useState(0)


  return (
  <>
  
  
  <BrowserRouter>

<Navbar/>
<Cart/>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/product/:id' element={<SingleProduct/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/about' element={<AboutUs/>}/>
</Routes>

</BrowserRouter>


</>
  );
}

export default App;
