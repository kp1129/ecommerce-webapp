import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from '../StateProvider';

const Checkout = () => {

    const [ { cart }, dispatch ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
  <h2>{cart?.length === 0 ? "Your Shopping Cart is empty" : "Your Shopping Cart"}</h2>
        {/* items from the shopping cart go here */}
        {cart?.map(item => <CheckoutProduct key={item.id} data={item} />) }
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
