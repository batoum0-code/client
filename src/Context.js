import React , { createContext ,useState , useEffect } from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {

  
  // state to display the shopping cart and also the website elements  without changing path
  const [ifCartState , setIfCartState] = useState(false);
  const [ifShowElements , setIfShowElements ] = useState(false);
  // end state to display the shopping cart without changing path
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
        cartItems.map( (item)=> total += item.attributes.price*item.attributes.quantity);
        setCartSubTotal(total);

    }, [cartItems]);


    // start handel add to cart function 

    const handleAddToCart = (product, quantity, size) => {
      // Create a copy of the cart items to avoid directly modifying state
      let items = [...cartItems];
      
      // Check if the product with the same ID and size is already in the cart
      let index = items.findIndex(p => p.id === product.id && p.attributes.size === size);
    
      if (index !== -1) {
        // If found, create a new item for this size with the updated quantity
        const updatedItem = {
          id: product.id,
          attributes: {
            ...product.attributes,
            size,
            quantity: items[index].attributes.quantity + quantity,
          }
        };
        items[index] = updatedItem;
      } else {
        // If not found, add a new item to the cart
        const newItem = {
          id: product.id,
          attributes: {
            ...product.attributes,
            size,
            quantity,
          }
        };
        items.push(newItem);
      }
    
      // Update the cart state
      setCartItems(items);
    };
    
    // end handel add to cart function

    // start  handel remove from cart 

    const handleRemoveFromCart = (product) => {
      let items = [...cartItems];
    
      // Find the index of the item to remove
      let index = items.findIndex((p) => p.id === product.id && p.size === product.size);
    
      // Check if the item was found before attempting to remove it
      if (index !== -1) {
        items.splice(index, 1); // Remove 1 element at the found index
        setCartItems(items); // Update the cartItems state
      }
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

    // start  handel decrease quantity 

    const handleDecreaseQuantity = (product) =>{
    let items = [...cartItems];
    let index = cartItems.findIndex( (p)=>p.id == product.id );
    if(items[index].attributes.quantity !== 1){
        items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
    }

    // end handel decrease quantity  

    // handel increase quantity of product in shopping cart 

    const handelIncreaseQuantityInCart = (product) => {
      let items = [...cartItems];
    items.map( (item)=>{
      if( item.id === product.id && item.attributes.size === product.attributes.size){
        item.attributes.quantity++;
      }
    })
    setCartItems(items);
    };


     // handel increase quantity of product in shopping cart 

    const handelDecreaseQuantityInCart = (product) => {
      let items = [...cartItems];
    items.map( (item)=>{
      if( item.id === product.id && item.attributes.size === product.attributes.size && item.attributes.quantity > 1){
        item.attributes.quantity--;
      }
    })
    setCartItems(items);
    };

    // handel decrease quantity of product in shopping cart 

    // start handel cleaning the items from cart items 

    const handelCleaningCart = ()=>{
    setCartItems([]);
    }

    // start handel cleaning the items from cart items 



  return (
  
    <Context.Provider value={{ ifCartState , setIfCartState ,   handleAddToCart, cartSubTotal,handelDecreaseQuantityInCart ,
        handleRemoveFromCart ,cartCount ,cartItems , handleIncreaseQuantity, handleDecreaseQuantity ,handelIncreaseQuantityInCart
        , searchValue , setSearchValue , handelCleaningCart 
        ,ifShowElements , setIfShowElements
        }}>
        {
            children
        }
    </Context.Provider>
  )

}
export default ContextProvider;