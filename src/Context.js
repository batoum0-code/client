import React , { createContext ,useState , useEffect } from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {

  
  // state to display the shopping cart without changing path
  const [ifCartState , setIfCartState] = useState(false);
  // end state to display the shopping cart wthout changing path
  const [searchValue , setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    // start  handel count and subTotal 

    useEffect( ()=> {
        let count = 0;
        cartItems.map( (item )=> count += item.attributes.quantity);
        setCartCount(count);

        let total = 0;
        cartItems.map( (item)=> total += item.attributes.price*item.attributes.quantity)
        setCartSubTotal(total)

    }, [cartItems]);


    // start handel add to cart function 

    const handleAddToCart = (product, quantity , size ) => {
        let items = [...cartItems];
        let index = items.findIndex(p => p.id === product.id);
      
        if (index !== -1 && items[index].attributes.size === size) {

                items[index].attributes.quantity += quantity;
            
          
        } else {
         
          product.attributes.size = size;
          product.attributes.quantity = quantity;
          items = [...items, product];
        }
        setCartItems(items);
      };
      
    // end handel add to cart function

    // start  handel remove from cart 

    const handleRemoveFromCart = (product) => {
        setCartItems((prev) => prev.filter(item => item.id !== product.id));
    };

    // end  handel remove from cart

    // start  handel increase quantity in cart 

    const handleIncreaseQuantity = (product) =>{
        let items = [...cartItems];
        let index = cartItems.findIndex( (p)=>p.id == product.id );
        items[index].attributes.quantity += 1;
        setCartItems(items);
        }

        // end  handel increase quantity in cart 

    // start  handel decrease quantity in cart 

    const handleDecreaseQuantity = (product) =>{
    let items = [...cartItems];
    let index = cartItems.findIndex( (p)=>p.id == product.id );
    if(items[index].attributes.quantity !== 1){
        items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
    }

    // end handel decrease quantity in cart 



    // start handel cleaning the items from cart items 

    const handelCleaningCart = ()=>{
    setCartItems([]);
    }

    // start handel cleaning the items from cart items 



  return (
  
    <Context.Provider value={{ ifCartState , setIfCartState ,   handleAddToCart, cartSubTotal,
        handleRemoveFromCart ,cartCount ,cartItems , handleIncreaseQuantity, handleDecreaseQuantity 
        , searchValue , setSearchValue , handelCleaningCart }}>
        {
            children
        }
    </Context.Provider>
  )
}

export default ContextProvider;