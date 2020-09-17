import React from "react";
import "./Product.css";

import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';


const Product = ({ data }) => {
  // essentially [state, setState] from this hook
  const [{ cart }, dispatch] = useStateValue();
  
  const addToCart = () => {
    // dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{data.title}</p>
        <CurrencyFormat
          renderText={(value) => (
            <p className="product__price">
              <small>$</small>
              <strong>{value}</strong>
          </p>
          )}
          value={data.price}
          decimalScale={2}
          fixedDecimalScale={true}
          displayType={"text"}
          thousandSeparator={true}
        />



        {/* <p className="product__price">
            <small>$</small>
            <strong>{data.price}</strong>
        </p> */}
        <div className="product__rating">
            {/* 4.5 stars */}
            {Array(Math.floor(data.rating)).fill().map((_, i) => (
              <span role="img" aria-label="star">⭐</span>
            ))}
            {/* <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span>
            <span role="img" aria-label="star">⭐</span> */}
        </div>
      </div>
      <img alt={`${data.title} product cover`} src={data.image} />
      <button onClick={addToCart} className="product__addToCart">add to cart</button>
    </div>
  );
};

export default Product;
