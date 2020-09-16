import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';

const Checkout = () => {

    const [ { cart }, dispatch ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="" src="" />
        <h2>Your Shopping Cart</h2>
        {/* items from the shopping cart go here */}
        {cart?.map(item => <CheckoutProduct data={item} />)}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
