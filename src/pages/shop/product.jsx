import React, { useContext } from "react";
import {ShopContext} from "../../context/shop-context.jsx";
function Product(props) {

  const { id, productName, price, productImage } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemsAmt = cartItems[id];
  return (
  <div className="product">

    <img src={productImage}></img>

    <div className="description">

      <p><b>{productName}</b></p>

      <p>₹{price}</p>

    </div>

    <button className="addToCartButton" onClick={()=> addToCart(id)}>Add To Cart {cartItemsAmt > 0 && <>({cartItemsAmt})</>}</button>

  </div>)
}

export default Product;