import React,{useContext} from "react";
import { ShopContext } from "../context/shop-context"



function CartItems(props) {
    const { id, productName, price, productImage } = props.data;
    const {cartItems,addToCart,removeFromCart,updateCart} = useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage}></img>
            <div className="description">
                <div className="productTitle">
                <b>{productName}</b>
                </div>
               <div className="price">Price: ₹{price}</div>  
               <div className="countHandler">
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=>updateCart(Number(e.target.value),id)}/>
                <button onClick={()=> addToCart(id)}>+</button>
                </div>        
            </div>
        </div>
    );
}

export default CartItems;

