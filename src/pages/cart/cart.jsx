import React from "react";
import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItems from "../../components/CartItems";
import '../cart/cart.css'
import {useNavigate} from "react-router-dom";

function Cart(){
    const {cartItems, getTotalCartAmt} = useContext(ShopContext);
    const totalAmt = getTotalCartAmt();
    const navigate = useNavigate();

    return(<div className="cart">
        <div>
            <h1> Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
             if(cartItems[product.id] !==0){
                return <CartItems data={product} />;
             }   
            } )}
        </div>
        {totalAmt>0 ? (
        <div className="checkout">
        
            <p>Subtotal: <b>₹ {totalAmt}</b></p>
            <button className="glow-on-hover" onClick={()=> navigate("/")}>Continue Shopping</button>
            <button className="glow-on-hover">Checkout</button>
        </div>)
        :(<h1>Your cart is empty</h1>)}
    </div>);
}

export default Cart;