import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
import Product from "../pages/shop/product";

const ShopContext = createContext(null);

    

    const getDefaultCart = () => {
        let cart ={}
        for(let i=1; i<PRODUCTS.length+1;i++){
            cart[i]=0;
        }
        return cart;
    };
    
function ShopContextProvider(props){

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmt=()=>{
        let totalAmt = 0;
        for(const item in cartItems)
            if(cartItems[item]>0){
            let itemInfo = PRODUCTS.find((Product) => Product.id === Number(item));
            totalAmt += cartItems[item] *itemInfo.price;
        }

        return totalAmt;
    }
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1 }));
    };

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId]-1}));
    };

    const updateCart = (newAmount, itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));  
    };

    const contextValue = {cartItems,addToCart, removeFromCart, updateCart, getTotalCartAmt};


    return(
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    );
}
export { ShopContext, ShopContextProvider };
export default ShopContextProvider;