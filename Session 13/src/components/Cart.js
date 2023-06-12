import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import FoodIten from "./RestaurantCard";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const removeAllItems = () => {
    dispatch(clearCart());
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <h1>Cart Items</h1>
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
      <button onClick={() => removeAllItems()}>CLEAR CART</button>
    </div>
  );
};

export default Cart;
