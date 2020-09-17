import React from "react";
import "./CheckoutProduct.css";

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ data }) => {

    const [ { cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: data.id
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" alt="" src={data.image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{data.title}</p>
        <CurrencyFormat
            renderText={(value) => (
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{value}</strong>
                </p>
            )}
            decimalScale={2}
            fixedDecimalScale={true}
            displayType={"text"}
            thousandSeparator={true}
            value={data.price}

        />
        {/* <p className="checkoutProduct__price">{data.price}</p> */}
        
        {/* <p className="checkoutProduct__rating">{data.rating}</p> */}
        <div className="checkoutProduct__rating">
            {/* 4.5 stars */}
            {Array(Math.floor(data.rating)).fill().map((_, i) => (
              <span role="img" aria-label="star">⭐</span>
            ))}
            {/* <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span> */}
        </div>
        <button onClick={removeFromCart}>remove from cart </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
