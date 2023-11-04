
import './App.css';
import { useState , useEffect } from 'react';
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';

// testing some front end funtions 
import { heroapi , popularsales , highlight ,toprateslaes , footerAPI} from './data/data.js';

// import grom react-router-dom 

import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import Main from './pages/main/Main';




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
</Routes>

</BrowserRouter>


   
   
   </>
  );
}

export default App;
